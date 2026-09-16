/* ==============================================
   LPA ADVISORY - FORM HANDLING
   ============================================== */

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form form');
  
  if (contactForm) {
    // Form validation
    const validateForm = function(form) {
      let isValid = true;
      const errors = [];
      
      // Get form fields
      const nombre = form.querySelector('[name="nombre"]');
      const apellidos = form.querySelector('[name="apellidos"]');
      const email = form.querySelector('[name="email"]');
      const tipoCliente = form.querySelector('[name="tipo-cliente"]');
      const motivo = form.querySelector('[name="motivo"]');
      const mensaje = form.querySelector('[name="mensaje"]');
      const privacidad = form.querySelector('[name="privacidad"]');
      
      // Clear previous error messages
      document.querySelectorAll('.error-message').forEach(el => el.remove());
      
      // Validate nombre
      if (nombre && !nombre.value.trim()) {
        isValid = false;
        errors.push({ field: nombre, message: 'Por favor, ingresa tu nombre.' });
      }
      
      // Validate apellidos
      if (apellidos && !apellidos.value.trim()) {
        isValid = false;
        errors.push({ field: apellidos, message: 'Por favor, ingresa tus apellidos.' });
      }
      
      // Validate email
      if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
          isValid = false;
          errors.push({ field: email, message: 'Por favor, ingresa tu correo electrónico.' });
        } else if (!emailRegex.test(email.value)) {
          isValid = false;
          errors.push({ field: email, message: 'Por favor, ingresa un correo válido.' });
        }
      }
      
      // Validate tipo cliente
      if (tipoCliente && !tipoCliente.value) {
        isValid = false;
        errors.push({ field: tipoCliente, message: 'Por favor, selecciona si eres empleado/a o empresa.' });
      }
      
      // Validate motivo
      if (motivo && !motivo.value.trim()) {
        isValid = false;
        errors.push({ field: motivo, message: 'Por favor, cuéntanos el motivo de tu consulta.' });
      }
      
      // Validate mensaje
      if (mensaje && !mensaje.value.trim()) {
        isValid = false;
        errors.push({ field: mensaje, message: 'Por favor, comparte más detalles en el mensaje.' });
      }
      
      // Validate privacy checkbox
      if (privacidad && !privacidad.checked) {
        isValid = false;
        errors.push({ field: privacidad, message: 'Debes aceptar la política de privacidad.' });
      }
      
      // Display errors
      errors.forEach(error => {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.cssText = `
          color: #d32f2f;
          font-size: 0.85rem;
          margin-top: 0.25rem;
          display: block;
        `;
        errorDiv.textContent = error.message;
        error.field.parentElement.appendChild(errorDiv);
        error.field.style.borderColor = '#d32f2f';
      });
      
      return isValid;
    };
    
    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate form
      if (!validateForm(this)) {
        console.warn('Formulario no válido. Por favor, revisa los campos.');
        return;
      }
      
      // Gather form data
      const formData = {
        nombre: this.querySelector('[name="nombre"]')?.value || '',
        apellidos: this.querySelector('[name="apellidos"]')?.value || '',
        email: this.querySelector('[name="email"]')?.value || '',
        telefono: this.querySelector('[name="telefono"]')?.value || '',
        tipoCliente: this.querySelector('[name="tipo-cliente"]')?.value || '',
        motivo: this.querySelector('[name="motivo"]')?.value || '',
        mensaje: this.querySelector('[name="mensaje"]')?.value || '',
        timestamp: new Date().toISOString()
      };
      
      console.log('Datos del formulario:', formData);
      
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.className = 'form-success-message';
      successMessage.style.cssText = `
        background-color: #e8f5e9;
        border: 1px solid #81c784;
        border-left: 4px solid #4caf50;
        color: #2e7d32;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        margin-bottom: 1.5rem;
        text-align: center;
      `;
      successMessage.innerHTML = `
        <strong>¡Gracias por tu mensaje!</strong><br>
        <p style="margin: 0.5rem 0 0 0; font-size: 0.95rem;">
          Nos pondremos en contacto pronto a través de tu correo electrónico o teléfono.
        </p>
      `;
      
      // Insert success message before form
      this.parentElement.insertBefore(successMessage, this);
      
      // Reset form
      this.reset();
      
      // Remove success message after 5 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    });
    
    // Clear error on input change
    contactForm.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('focus', function() {
        this.style.borderColor = '';
        const errorMsg = this.parentElement.querySelector('.error-message');
        if (errorMsg) {
          errorMsg.remove();
        }
      });
    });
  }
});

// Form field focus styling
document.addEventListener('DOMContentLoaded', function() {
  const formFields = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
  
  formFields.forEach(field => {
    field.addEventListener('focus', function() {
      this.style.boxShadow = '0 0 0 3px rgba(29, 107, 95, 0.1)';
    });
    
    field.addEventListener('blur', function() {
      this.style.boxShadow = '';
    });
  });
});

// Optional: Track form analytics (if integrated)
function trackFormInteraction(fieldName) {
  // Placeholder for analytics tracking
  // Example: gtag('event', 'form_interaction', { field: fieldName });
  console.log('Form interaction:', fieldName);
}

// Optional: Auto-save form draft to localStorage
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form form');
  
  if (contactForm) {
    const formKey = 'lpa_contact_form_draft';
    
    // Load draft if exists
    const draft = localStorage.getItem(formKey);
    if (draft) {
      try {
        const data = JSON.parse(draft);
        Object.keys(data).forEach(key => {
          const field = contactForm.querySelector(`[name="${key}"]`);
          if (field) {
            field.value = data[key];
          }
        });
      } catch (e) {
        console.error('Error loading draft:', e);
      }
    }
    
    // Save draft on input
    contactForm.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('change', function() {
        const formData = {};
        contactForm.querySelectorAll('input, textarea, select').forEach(f => {
          if (f.type !== 'checkbox') {
            formData[f.name] = f.value;
          }
        });
        localStorage.setItem(formKey, JSON.stringify(formData));
      });
    });
    
    // Clear draft on successful submission
    contactForm.addEventListener('submit', function() {
      localStorage.removeItem(formKey);
    });
  }
});
