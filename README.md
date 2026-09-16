# LPA Advisory – HR & AI Strategy Website

## Overview

Official website for LPA Advisory, an HR, workplace relations and people strategy advisory serving both **employees** and **companies** in the UK.

### Key Features

- **Two-audience distinction**: Clear separation between services for employees and companies
- **Responsive design**: Mobile-first approach, excellent on all devices
- **Premium visual identity**: Triangle + globe symbol with sophisticated color palette
- **Spanish language**: Natural, professional Spanish throughout
- **Cloudflare Pages ready**: Optimized for easy deployment
- **Accessible**: WCAG compliance, semantic HTML, keyboard navigation
- **No external dependencies**: Clean HTML, CSS, and JavaScript

## Pages

- **Homepage** (`index.html`): Hero, core messaging, audience distinction
- **Empleados** (`empleados.html`): Services for employees
- **Empresas** (`empresas.html`): Services for companies
- **Metodología** (`metodologia.html`): LPA Advisory's 4-stage methodology
- **Sobre LPA Advisory** (`sobre.html`): Company values and philosophy
- **Contacto** (`contacto.html`): Contact form and details
- **Legal Pages**:
  - `aviso-legal.html` - Legal disclaimer
  - `privacidad.html` - Privacy policy (placeholder)
  - `cookies.html` - Cookies policy (placeholder)

## Project Structure

```
lpa-advisory-website/
├── index.html
├── empleados.html
├── empresas.html
├── metodologia.html
├── sobre.html
├── contacto.html
├── aviso-legal.html
├── privacidad.html
├── cookies.html
├── css/
│   ├── styles.css          # Main stylesheet
│   └── responsive.css      # Mobile/responsive utilities
├── js/
│   ├── navigation.js       # Navigation toggle and interactivity
│   └── forms.js            # Form handling
├── assets/
│   ├── logo.png            # LPA Advisory logo (insert official logo here)
│   ├── favicon.ico         # Favicon
│   └── images/             # Photography and assets
└── README.md               # This file
```

## Branding

### Color Palette

- **Deep Navy**: #1a2845
- **Deep Purple**: #4a2465
- **Emerald Green**: #1d6b5f
- **White/Ivory**: #fafaf7
- **Neutral Grey**: #6b6b6b
- **Muted Gold Accent**: #9b8b4d

### Typography

- **Headings**: Clean, generous, strong
- **Body**: Professional, readable
- **Spacing**: Generous white/ivory space

### Visual Identity

- **Logo**: Triangle + Globe symbol with "LPA" and "ADVISORY"
- **Tagline**: "PERSONAS | ESTRATEGIA | TRABAJO CON PROPÓSITO Y DIGNIDAD"
- **Core Message**: "De una situación compleja a una estrategia clara."

## Deployment to Cloudflare Pages

### Prerequisites

1. GitHub repository connected to Cloudflare Pages
2. No DNS changes required
3. Site not yet published externally

### Deployment Steps

1. **Connect Repository**
   - Go to Cloudflare Pages dashboard
   - Click "Create a project"
   - Select "Connect to Git"
   - Authorize GitHub and select `lpa-advisory-website`

2. **Configure Build**
   - **Build command**: (leave empty - static site)
   - **Build output directory**: `/` (root)
   - **Root directory**: `/`

3. **Deploy**
   - Cloudflare Pages will automatically deploy on every push to `main`
   - Production URL will be provided
   - Preview deployments available for PRs

### Environment

- No build step required
- No environment variables needed
- Static HTML/CSS/JS only

## Development

No build tools required. Simply:

1. Edit HTML files directly
2. Update CSS in `/css/styles.css`
3. Add JavaScript in `/js/` as needed
4. Test locally by opening `index.html` in a browser
5. Push to `main` branch to auto-deploy to Cloudflare Pages

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation throughout
- High contrast text (WCAG AA+)
- Responsive and readable on all devices
- Proper heading hierarchy
- Alt text for all images

## Important Notes

### Legal

- LPA Advisory is **NOT a law firm**
- Website does **NOT** claim legal representation
- All disclaimers are clearly displayed
- Content is informative, not legal advice

### Content

- No invented statistics, awards, or fake claims
- No fabricated client testimonials
- All information is accurate and balanced
- Spanish language is natural, not machine-translated

### Images

- Use professional, authentic workplace photography
- Avoid stereotypical stock images
- Diverse and UK/London appropriate
- Authentic professionals and workers

## Contact

**Email**: employeeadvisorlondon@gmail.com  
**Phone**: 07776 618634  
**Location**: Reino Unido | Online

## License

Private repository. Unauthorized use prohibited.

---

**Last Updated**: September 2026
