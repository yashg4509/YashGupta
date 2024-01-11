function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// document.addEventListener("DOMContentLoaded", function () {
//   const slides = document.querySelectorAll(".slide");
//   const dots = document.querySelectorAll(".dot");
//   let currentSlide = 0;

//   // Show initial slide
//   slides[currentSlide].classList.add("active");
//   dots[currentSlide].classList.add("active-dot");

//   // Change slide on dot click
//   dots.forEach((dot, index) => {
//     dot.addEventListener("click", () => {
//       slides[currentSlide].classList.remove("active");
//       dots[currentSlide].classList.remove("active-dot");
//       currentSlide = index;
//       slides[currentSlide].classList.add("active");
//       dots[currentSlide].classList.add("active-dot");
//     });
//   });
// });

let currentSlide = 1;

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let currentSlide = 0;
  
    // Show initial slide
    showSlide(currentSlide);
  
    // Change slide on dot click
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
      });
    });
  
    // Arrow click events
    const leftArrow = document.querySelector(".exp-arrow.left");
    const rightArrow = document.querySelector(".exp-arrow.right");
  
    leftArrow.addEventListener("click", () => {
      changeSlide(-1);
    });
  
    rightArrow.addEventListener("click", () => {
      changeSlide(1);
    });
  
    // Swipe functionality
    let touchStartX, touchEndX;
  
    function handleTouchStart(e) {
      touchStartX = e.touches[0].clientX;
    }
  
    function handleTouchEnd(e) {
      touchEndX = e.changedTouches[0].clientX;
  
      // Set the threshold for swipe
      if (touchStartX - touchEndX > 50) {
        changeSlide(1); // Swipe left, move to the next slide
      } else if (touchEndX - touchStartX > 50) {
        changeSlide(-1); // Swipe right, move to the previous slide
      }
    }
  
    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchend", handleTouchEnd, false);
  
    function changeSlide(n) {
      showSlide((currentSlide += n));
    }
  
    function showSlide(n) {
      currentSlide = n;
  
      if (n >= slides.length) {
        currentSlide = 0;
      }
  
      if (n < 0) {
        currentSlide = slides.length - 1;
      }
  
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
  
      dots.forEach((dot) => {
        dot.classList.remove("active-dot");
      });
  
      slides[currentSlide].classList.add("active");
      dots[currentSlide].classList.add("active-dot");
    }
  });
  
  
  
  
// Define your media array
const mediaArray = [
  {
    title: "Publication",
    description:
      "Blockchain-enabled immutable, distributed, and highly available clinical research activity logging system for federated COVID-19 data analysis from multiple institutions:",
    link: "https://academic.oup.com/jamia/article/30/6/1167/7077141",
  },
  {
    title: "Udemy Course",
    description: "Artificial Intelligence in Bioinformatics:",
    link: "https://www.classcentral.com/course/udemy-helyxaiinbiomicrocourse-88752",
  },
  {
    title: "News Article",
    description: "Canyon Crest students host hackathon:",
    link: "https://www.delmartimes.net/news/story/2020-03-30/canyon-crest-students-host-hackathon",
  },
];

// Function to generate media links dynamically
function generateMediaLinks() {
  const mediaContainer = document.getElementById("media-container");

  mediaArray.forEach((media) => {
    const mediaLink = document.createElement("div");
    mediaLink.classList.add("media-link");

    mediaLink.innerHTML = `
            <h2>${media.title}</h2>
            <p>${media.description}</p>
            <a href="${media.link}" target="_blank">Read more</a>
        `;

    mediaContainer.appendChild(mediaLink);
  });
}

// Call the function to generate media links
generateMediaLinks();

function toggleProject(project) {
  project.classList.toggle("expanded");
}
