// Highlight selected moment
const moments = document.querySelectorAll(".moment");

moments.forEach((moment) => {
  moment.addEventListener("mouseover", () => {
    moment.style.transform = "scale(1.1)";
    moment.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
  });

  moment.addEventListener("mouseout", () => {
    moment.style.transform = "scale(1)";
    moment.style.boxShadow = "none";
  });
});
