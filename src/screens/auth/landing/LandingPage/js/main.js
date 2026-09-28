gsap.registerPlugin(ScrollTrigger);

// Respect prefers-reduced-motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Hero animations
if (!prefersReducedMotion) {
    gsap.timeline()
        .from('.hero-content h1', { opacity: 0, y: 30, duration: 0.8 }, 0.2)
        .from('.hero-content p', { opacity: 0, y: 20, duration: 0.6 }, 0.4)
        .from('.hero-buttons', { opacity: 0, y: 20, duration: 0.6 }, 0.6)
        .from('.hero-dashboard', { opacity: 0, y: 40, scale: 0.95, duration: 0.8 }, 0.8);

    // Dashboard floating animation
    gsap.to('.dashboard-card', {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1
    });
}

// Scroll animations
const animateOnScroll = (selector, options = {}) => {
    const defaults = {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ...options
    };

    gsap.utils.toArray(selector).forEach((element, index) => {
        ScrollTrigger.create({
            trigger: element,
            onEnter: () => {
                gsap.to(element, {
                    opacity: 1,
                    y: 0,
                    duration: defaults.duration,
                    delay: index * defaults.stagger
                });
            },
            once: true
        });
    });
};

if (!prefersReducedMotion) {
    // Trust badges
    animateOnScroll('.badge', { duration: 0.6, stagger: 0.1 });

    // Compliance stats
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach((stat, index) => {
        ScrollTrigger.create({
            trigger: stat,
            onEnter: () => {
                const target = parseFloat(stat.dataset.target);
                gsap.to(stat, {
                    textContent: target,
                    duration: 2,
                    delay: index * 0.1,
                    snap: { textContent: 1 },
                    onUpdate: function() {
                        stat.textContent = Math.ceil(this.targets()[0].textContent);
                    }
                });
            },
            once: true
        });
    });

    // Feature rows
    animateOnScroll('.feature-row', { duration: 0.8, stagger: 0.2, y: 40 });

    // Why columns
    animateOnScroll('.why-column', { duration: 0.8, stagger: 0.15, y: 30 });

    // CTA card
    ScrollTrigger.create({
        trigger: '.cta-card',
        onEnter: () => {
            gsap.to('.cta-card', {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8
            });
        },
        once: true
    });

    // Parallax effect on CTA skyline
    gsap.to('.cta-skyline', {
        y: 50,
        scrollTrigger: {
            trigger: '.section-cta',
            scrub: 1
        }
    });
}

// Button interactions
document.querySelectorAll('.btn, .nav-cta, .cta-form button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        if (!prefersReducedMotion) {
            gsap.to(this, { duration: 0.3, y: -2 });
        }
    });
    button.addEventListener('mouseleave', function() {
        if (!prefersReducedMotion) {
            gsap.to(this, { duration: 0.3, y: 0 });
        }
    });
});

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form submission
document.querySelector('.cta-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]');
    if (email.value) {
        alert("Thanks for signing up! We'll notify you when Hireyoo launches.");
        email.value = '';
    }
});
