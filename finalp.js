// Add a fade-in animation to sections
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        section.classList.add("fade-in");
    });
});
