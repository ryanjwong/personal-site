# Ryan Wong's Personal Website

A modern, performance-focused personal website showcasing experience in software engineering, AI infrastructure, and distributed systems.

## Features

- **Typography-driven design** using Berkeley Mono font
- **Neo-brutalist aesthetic** with clean geometric layouts
- **Dark theme** with strategic green/cyan accents
- **Interactive timeline** for experience showcase
- **Smooth animations** and hover effects
- **Fully responsive** mobile-first design
- **Performance optimized** static HTML/CSS/JS

## Design Philosophy

This site deliberately avoids typical AI-generated template aesthetics in favor of a distinctive, technical-but-refined look that reflects expertise in systems engineering and infrastructure.

## Technical Stack

- **Pure HTML/CSS/JS** - No framework bloat
- **Berkeley Mono** - Professional monospace typography
- **CSS Grid/Flexbox** - Modern responsive layouts
- **Intersection Observer API** - Smooth scroll animations
- **CSS Custom Properties** - Consistent theming

## Sections

1. **Hero** - Name, current role at NVIDIA, key identity
2. **About** - Personal story and professional journey
3. **Experience** - Interactive timeline of internships (NVIDIA, Tesla, Red Hat)
4. **Projects** - Featured projects (Atlas-CLI, Anonymous Web Services)
5. **Skills** - Technical expertise organized by category
6. **Certifications** - AWS, Red Hat, Terraform credentials
7. **Contact** - Professional contact information

## Local Development

```bash
# Start local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

## Performance Features

- Font loading optimization with `font-display: swap`
- Efficient animations using `transform` and `opacity`
- Throttled scroll event listeners
- Intersection Observer for lazy animations
- Reduced motion support for accessibility

## Deployment

This is a static site that can be deployed to any web server or CDN:

- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any web server with HTML/CSS/JS support

## Browser Support

- Modern browsers supporting CSS Grid and Flexbox
- Fallbacks included for older browsers
- Accessibility features included

## License

© 2025 Ryan Jia-Ming Wong. All rights reserved.