```javascript
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Thank you for contacting Dothnel Construction Nigeria Limited. Your message has been received.");

        contactForm.reset();
    });
}


const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId.startsWith("#")) {

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});


const animatedElements = document.querySelectorAll(
    ".service-card, .project-card, .about-content, .about-image"
);

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});


animatedElements.forEach(function(element) {
    observer.observe(element);
});


const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .dark-btn, .cta-btn, .nav-btn"
);

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        this.style.transform = "scale(0.97)";

        setTimeout(function() {
            button.style.transform = "";
        }, 150);

    });

});


const copyright = document.querySelector(".copyright");

if (copyright) {
    const currentYear = new Date().getFullYear();

    copyright.innerHTML =
        "© " + currentYear +
        " Dothnel Construction Nigeria Limited. All Rights Reserved.";
}
```
