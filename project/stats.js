// Add hover interactivity using JavaScript if needed for more advanced features
const statsSections = document.querySelectorAll(".player-stats");

statsSections.forEach((section) => {
  section.addEventListener("mouseover", () => {
    section.style.transition = "transform 0.3s, box-shadow 0.3s";
    section.style.transform = "scale(1.1)";
    section.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.3)";
  });

  section.addEventListener("mouseout", () => {
    section.style.transform = "scale(1)";
    section.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
  });
});
