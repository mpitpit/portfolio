// ======================
// NAVBAR SCROLL EFFECT
// ======================
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ======================
// HAMBURGER MENU
// ======================
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const menuLinks = document.querySelectorAll(".nav-menu a");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// Close menu after clicking a link & manage active class
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        
        menuLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});

// ======================
// ACTIVE MENU ON SCROLL
// ======================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    menuLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// ======================
// INTERSECTION OBSERVER (ANIMATION)
// ======================
const projects = document.querySelectorAll(".project");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

projects.forEach(project => {
    project.classList.add("hidden");
    observer.observe(project);
});