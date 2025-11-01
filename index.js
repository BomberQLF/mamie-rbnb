document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const slides = slider.children;
  const totalSlides = slides.length - 1;
  let index = 0;

  function showNextSlide() {
    index++;
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(-${index * 100}%)`;

    if (index === totalSlides) {
      setTimeout(() => {
        slider.style.transition = "none";
        slider.style.transform = "translateX(0)";
        index = 0;
      }, 500); 
    }
  }

  setInterval(showNextSlide, 3000);
});
