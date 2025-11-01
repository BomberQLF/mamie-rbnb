document.addEventListener("DOMContentLoaded", () => {
  // Slider functionality
  const slider = document.getElementById("slider");
  if (slider) {
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
  }

  // Burger menu functionality
  const burgerButton = document.querySelector('[data-collapse-toggle="navbar-solid-bg"]');
  const navbarMenu = document.getElementById("navbar-solid-bg");

  if (burgerButton && navbarMenu) {
    burgerButton.addEventListener("click", () => {
      // Toggle the 'hidden' class
      const isHidden = navbarMenu.classList.contains("hidden");
      
      if (isHidden) {
        // Show menu with animation
        navbarMenu.classList.remove("hidden");
        // Force reflow to enable transition
        navbarMenu.offsetHeight;
        navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
        navbarMenu.style.opacity = "1";
      } else {
        // Hide menu with animation
        navbarMenu.style.maxHeight = "0";
        navbarMenu.style.opacity = "0";
        setTimeout(() => {
          navbarMenu.classList.add("hidden");
        }, 300); // Match the transition duration
      }
      
      // Update aria-expanded attribute
      const isExpanded = isHidden ? "true" : "false";
      burgerButton.setAttribute("aria-expanded", isExpanded);
    });

    // Close menu when clicking on a link (optional, for better UX)
    const navLinks = navbarMenu.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navbarMenu.style.maxHeight = "0";
        navbarMenu.style.opacity = "0";
        setTimeout(() => {
          navbarMenu.classList.add("hidden");
        }, 300);
        burgerButton.setAttribute("aria-expanded", "false");
      });
    });
  }
});
