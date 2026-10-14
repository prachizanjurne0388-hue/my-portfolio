/* ===============================
   MOBILE MENU
================================ */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }

});


/* ===============================
   CLOSE MOBILE MENU
================================ */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    });

});


/* ===============================
   ACTIVE NAVIGATION
================================ */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active-link");
        }

    });

});


/* ===============================
   NAVBAR SCROLL EFFECT
================================ */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* ===============================
   TYPING ANIMATION
================================ */

const typingText = document.getElementById("typing-text");

const roles = [
    "BCA Graduate",
    "Python Developer",
    "Web Developer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);
            return;

        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 55 : 90
    );

}

typeEffect();


/* ===============================
   SKILL BAR ANIMATION
================================ */

const skillProgress =
    document.querySelectorAll(".skill-progress");


const skillObserver =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const width =
                    entry.target.getAttribute("data-width");

                entry.target.style.width = width;

            }

        });

    }, {
        threshold: 0.4
    });


skillProgress.forEach(skill => {
    skillObserver.observe(skill);
});


/* ===============================
   SCROLL REVEAL
================================ */

const revealElements = document.querySelectorAll(
    ".about-text, .stat-card, .skill-card, " +
    ".timeline-content, .project-card, " +
    ".certificate-card, .contact-info, .contact-form"
);


revealElements.forEach(element => {
    element.classList.add("reveal");
});


const revealObserver =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });


revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* ===============================
   PROJECT DETAILS
================================ */

const projectData = {

    moodify: {

        title: "AI-Powered Emotion Based Music Player",

        icon: '<i class="fas fa-face-smile"></i>',

        description:
            "Moodify is an AI-powered music recommendation application that detects facial emotions and recommends personalized music according to the detected mood. The project combines computer vision, Python, Flask and database technologies.",

        technologies: [
            "Python",
            "Flask",
            "HTML",
            "CSS",
            "JavaScript",
            "MySQL",
            "OpenCV"
        ],

        features: [
            "Facial emotion detection",
            "Emotion-based music recommendation",
            "Personalized playlists",
            "Database integration",
            "Web-based music player"
        ]

    },


    furniture: {

        title: "Online Furniture Website",

        icon: '<i class="fas fa-couch"></i>',

        description:
            "A responsive online furniture website created to provide users with an easy and attractive interface for browsing furniture products.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "MySQL"
        ],

        features: [
            "Responsive design",
            "Furniture product display",
            "User-friendly interface",
            "Database integration",
            "Interactive web pages"
        ]

    },


    python: {

        title: "Python Applications",

        icon: '<i class="fas fa-terminal"></i>',

        description:
            "A collection of Python applications and practice programs developed to strengthen programming concepts, object-oriented programming, validation and logical problem-solving skills.",

        technologies: [
            "Python",
            "OOP",
            "Validation",
            "Exception Handling",
            "Problem Solving"
        ],

        features: [
            "Object-oriented programming",
            "Input validation",
            "Exception handling",
            "Classes and inheritance",
            "Logical problem solving"
        ]

    }

};


function openProject(projectName) {

    const project = projectData[projectName];

    if (!project) {
        return;
    }

    document.getElementById("modal-title").textContent =
        project.title;

    document.getElementById("modal-description").textContent =
        project.description;

    document.getElementById("modal-icon").innerHTML =
        project.icon;


    const techContainer =
        document.getElementById("modal-tech");

    techContainer.innerHTML = "";

    project.technologies.forEach(technology => {

        const span = document.createElement("span");

        span.textContent = technology;

        techContainer.appendChild(span);

    });


    const featureContainer =
        document.getElementById("modal-features");

    featureContainer.innerHTML = "";

    project.features.forEach(feature => {

        const li = document.createElement("li");

        li.textContent = feature;

        featureContainer.appendChild(li);

    });


    document
        .getElementById("project-modal")
        .classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeProject() {

    document
        .getElementById("project-modal")
        .classList.remove("show");

    document.body.style.overflow = "";

}


document
    .getElementById("project-modal")
    .addEventListener("click", function (event) {

        if (event.target === this) {
            closeProject();
        }

    });


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeProject();
    }

});


/* ===============================
   DARK / LIGHT MODE
================================ */

const themeToggle =
    document.getElementById("theme-toggle");

const themeIcon =
    themeToggle.querySelector("i");


const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const isLight =
        document.body.classList.contains("light-mode");


    if (isLight) {

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

    } else {

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

    }

});


/* ===============================
   BACK TO TOP
================================ */

const backToTop =
    document.getElementById("back-to-top");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ===============================
   CONTACT FORM
================================ */

function sendMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !subject || !message) {

        alert("Please fill all the fields.");

        return;

    }


    const mailSubject =
        encodeURIComponent(subject);

    const mailBody =
        encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );


    window.location.href =
        "mailto:prachizanjurne0388@gmail.com" +
        "?subject=" + mailSubject +
        "&body=" + mailBody;

}


/* ===============================
   CURRENT YEAR
================================ */

document.getElementById("current-year")
    .textContent = new Date().getFullYear();