document.addEventListener('DOMContentLoaded', () => {
    // DOM element selections
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const sections = document.querySelectorAll('section');
    const animatedName = document.getElementById('animated-name');
    const contactForm = document.getElementById('contact-form');
  
    // Navigation toggle function
    const toggleNav = () => {
      // Toggle navigation menu
      nav.classList.toggle('nav-active');
  
      // Animate navigation links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
  
      // Toggle burger menu animation
      burger.classList.toggle('toggle');
    };
  
    // Event listeners for navigation
    burger.addEventListener('click', toggleNav);
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('nav-active')) {
          toggleNav();
        }
      });
    });
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Form submission handler
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
  
    // Intersection Observer for fade-in animation
    const observerOptions = {
      threshold: 0.1
    };
  
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeInUp');
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    // Animated name functionality
    const fullName = "Suhail Ahmed Lakho";
    const startingIndex = 0;
    let currentIndex = startingIndex;
  
    const typeWriter = () => {
      if (currentIndex < fullName.length) {
        animatedName.textContent = fullName.substring(0, currentIndex + 1);
        currentIndex++;
        setTimeout(typeWriter, 100);
      } else {
        setTimeout(eraseText, 2000);
      }
    };
  
    const eraseText = () => {
      if (currentIndex > startingIndex) {
        animatedName.textContent = fullName.substring(0, currentIndex);
        currentIndex--;
        setTimeout(eraseText, 50);
      } else {
        setTimeout(typeWriter, 500);
      }
    };
  
    // Initialize animated name
    animatedName.textContent = fullName;
    typeWriter();
  
    // Skill bar animation
    const skillItems = document.querySelectorAll('.skills-list li');
  
    skillItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = '#2980b9';
      });
  
      item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = '';
      });
    });
  });