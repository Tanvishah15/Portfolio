// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Add stagger animation to nav links
document.querySelectorAll('.nav-link').forEach((link, index) => {
    link.style.opacity = '0';
    link.style.transform = 'translateY(-10px)';
    link.style.transition = `all 0.3s ease ${index * 0.1}s`;
    
    setTimeout(() => {
        link.style.opacity = '1';
        link.style.transform = 'translateY(0)';
    }, 100);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll with enhanced effects
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Active navigation link highlighting
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Enhanced Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate section title
            const title = entry.target.querySelector('.section-title');
            if (title && !title.classList.contains('animated')) {
                title.classList.add('animated', 'visible');
            }
            
            // Stagger animation for cards
            const cards = entry.target.querySelectorAll('.education-card, .project-card, .skill-item');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                }, index * 100);
            });
            
            // Animate list items
            const listItems = entry.target.querySelectorAll('.project-list li, .experience-list li');
            listItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Show first section immediately with animation
window.addEventListener('load', () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
        setTimeout(() => {
            homeSection.style.opacity = '1';
            homeSection.style.transform = 'translateY(0)';
            
            // Animate home content elements
            const profileImage = homeSection.querySelector('.profile-image');
            const homeTitle = homeSection.querySelector('.home-title');
            const homeSubtitle = homeSection.querySelector('.home-subtitle');
            const homeDescription = homeSection.querySelector('.home-description');
            const homeButtons = homeSection.querySelector('.home-buttons');
            
            if (profileImage) {
                profileImage.style.animation = 'scaleIn 0.8s ease-out, float 6s ease-in-out infinite 1s';
            }
            
            [homeTitle, homeSubtitle, homeDescription, homeButtons].forEach((el, index) => {
                if (el) {
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, index * 200);
                }
            });
        }, 100);
    }
    
    // Initialize list items
    document.querySelectorAll('.project-list li, .experience-list li').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-10px)';
        item.style.transition = 'all 0.4s ease';
    });
});

// Add parallax effect to home section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const homeSection = document.getElementById('home');
    if (homeSection && scrolled < window.innerHeight) {
        const profileImage = homeSection.querySelector('.profile-image-container');
        if (profileImage) {
            profileImage.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    }
});

// Add typing effect to home title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Add hover effects to icons
document.querySelectorAll('.education-icon, .project-icon, .experience-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) rotate(10deg)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});
