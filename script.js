// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code for interactivity goes here
});
document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    projects.forEach(project => {
        observer.observe(project);
    });
});

//portfolio
document.addEventListener("DOMContentLoaded", function() {
    const projectTitle = "Project Title";
    const projectDescription = "Description of the project";

    const titleElement = document.getElementById("project-title");
    const descriptionElement = document.getElementById("project-description");

    function typeWriter(text, element, delay = 100) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, delay);
            }
        }
        type();
    }

    // Clear the initial text content
    titleElement.textContent = "";
    descriptionElement.textContent = "";

    // Start typing effect
    typeWriter(projectTitle, titleElement, 100);
    setTimeout(() => {
        typeWriter(projectDescription, descriptionElement, 100);
    }, projectTitle.length * 100 + 500); // Adding a small delay between title and description typing
});