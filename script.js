// Minimal JavaScript for essential functionality
document.addEventListener('DOMContentLoaded', function() {
    // Simple smooth scrolling for any anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Simple fade-in on page load
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });
    
    // Basic keyboard navigation (escape to scroll to top)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
    
    // Print functionality for resume
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            window.print();
        }
    });
});

// Add minimal print styles
const printStyle = document.createElement('style');
printStyle.textContent = `
    @media print {
        body {
            background: white !important;
            color: black !important;
            font-size: 12px !important;
        }
        
        .header {
            border-bottom: 2px solid #000 !important;
        }
        
        section {
            page-break-inside: avoid;
            margin-bottom: 1rem !important;
        }
        
        .project-card,
        .experience-card {
            border: 1px solid #000 !important;
            background: white !important;
        }
        
        a {
            color: black !important;
            text-decoration: underline !important;
        }
        
        .footer {
            display: none;
        }
    }
`;

document.head.appendChild(printStyle);