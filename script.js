// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.remove('dark-mode');
    } else {
        // Default to dark mode
        body.classList.add('dark-mode');
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Save preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }

        // Add a little animation feedback
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });

    // Mobile menu toggle
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');

            // Change hamburger icon when menu is open
            const hamburgerIcon = mobileMenuToggle.querySelector('.hamburger-icon');
            if (mainNav.classList.contains('active')) {
                hamburgerIcon.textContent = '✕';
            } else {
                hamburgerIcon.textContent = '☰';
            }
        });

        // Close menu when clicking on a link
        const navLinks = mainNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                const hamburgerIcon = mobileMenuToggle.querySelector('.hamburger-icon');
                hamburgerIcon.textContent = '☰';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mainNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mainNav.classList.remove('active');
                const hamburgerIcon = mobileMenuToggle.querySelector('.hamburger-icon');
                hamburgerIcon.textContent = '☰';
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections for fade-in effect
    const animatedElements = document.querySelectorAll('.package-card, .service-card, .timeline-item, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add hover effect for stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        stat.addEventListener('mouseenter', () => {
            stat.style.transform = 'scale(1.1)';
            stat.style.transition = 'transform 0.3s ease';
        });
        stat.addEventListener('mouseleave', () => {
            stat.style.transform = 'scale(1)';
        });
    });

    // Add copy email functionality
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        const originalText = link.textContent;
        link.addEventListener('click', (e) => {
            // Allow default mailto behavior but add visual feedback
            const email = link.href.replace('mailto:', '');

            // Try to copy to clipboard
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    // Show feedback
                    link.textContent = 'Email copié!';
                    setTimeout(() => {
                        link.textContent = originalText;
                    }, 2000);
                });
            }
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        // Toggle theme with Ctrl/Cmd + D
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            themeToggle.click();
        }
    });

    // Detect system theme preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Only apply system preference if user hasn't set a preference
    if (!localStorage.getItem('theme')) {
        if (prefersDarkScheme.matches) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }

    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        // Only auto-switch if user hasn't set a manual preference
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                body.classList.add('dark-mode');
            } else {
                body.classList.remove('dark-mode');
            }
        }
    });

    // Add Easter egg: Konami code
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);

        if (konamiCode.join('') === konamiSequence.join('')) {
            // Trigger confetti or special effect
            document.body.style.animation = 'rainbow 2s ease infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 5000);
        }
    });

    // Performance: Add lazy loading for images (if any are added later)
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }

    // Add subtle parallax effect to hero section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrolled = window.pageYOffset;
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    console.log('%c👋 Hello, Developer!', 'font-size: 20px; color: #FF2D20; font-weight: bold;');
    console.log('%cMerci de visiter grazulex.be!', 'font-size: 14px; color: #8b949e;');
    console.log('%cBuilt with ❤️ by Claude Code', 'font-size: 12px; color: #6e7681; font-style: italic;');
});
