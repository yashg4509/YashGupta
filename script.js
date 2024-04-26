const topArtistsData = {
  "items": [
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
      },
      "followers": {
        "href": null,
        "total": 86844115
      },
      "genres": [
        "canadian hip hop",
        "canadian pop",
        "hip hop",
        "pop rap",
        "rap"
      ],
      "href": "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
      "id": "3TVXtAsR1Inumwj472S9r4",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051744293385d324db8558179afd9",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1784293385d324db8558179afd9",
          "width": 160
        }
      ],
      "name": "Drake",
      "popularity": 93,
      "type": "artist",
      "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/1RyvyyTE3xzB2ZywiAwp0i"
      },
      "followers": {
        "href": null,
        "total": 16715437
      },
      "genres": [
        "atl hip hop",
        "hip hop",
        "rap",
        "southern hip hop",
        "trap"
      ],
      "href": "https://api.spotify.com/v1/artists/1RyvyyTE3xzB2ZywiAwp0i",
      "id": "1RyvyyTE3xzB2ZywiAwp0i",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb6ef89e23678018c6d8630825",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051746ef89e23678018c6d8630825",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1786ef89e23678018c6d8630825",
          "width": 160
        }
      ],
      "name": "Future",
      "popularity": 91,
      "type": "artist",
      "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/7rkW85dBwwrJtlHRDkJDAC"
      },
      "followers": {
        "href": null,
        "total": 3442750
      },
      "genres": [
        "canadian hip hop",
        "canadian trap",
        "melodic rap",
        "rap",
        "trap"
      ],
      "href": "https://api.spotify.com/v1/artists/7rkW85dBwwrJtlHRDkJDAC",
      "id": "7rkW85dBwwrJtlHRDkJDAC",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5ebf276b6e4b25bb6fb7b942ab2",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174f276b6e4b25bb6fb7b942ab2",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178f276b6e4b25bb6fb7b942ab2",
          "width": 160
        }
      ],
      "name": "NAV",
      "popularity": 69,
      "type": "artist",
      "uri": "spotify:artist:7rkW85dBwwrJtlHRDkJDAC"
    }
  ],
  "total": 171,
  "limit": 3,
  "offset": 0,
  "href": "https://api.spotify.com/v1/me/top/artists?limit=3&locale=en-US%2Cen%3Bq%3D0.9",
  "next": "https://api.spotify.com/v1/me/top/artists?offset=3&limit=3&locale=en-US%2Cen%3Bq%3D0.9",
  "previous": null
};



function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



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


function populateTopArtists() {
  const artistsContainer = document.getElementById('top-artists-container');
  artistsContainer.innerHTML = ''; // Clear the container
  
  topArtistsData.items.forEach(artist => {
    const artistElement = document.createElement('div');
    artistElement.className = 'artist';
    artistElement.innerHTML = `
      <a href="${artist.external_urls.spotify}" target="_blank">
        <img src="${artist.images[0].url}" alt="${artist.name}" class="artist-image">
      </a>
      <p class="artist-name"><strong>${artist.name}</strong></p>
    `;
    artistsContainer.appendChild(artistElement);
  });
}

document.addEventListener('DOMContentLoaded', populateTopArtists);


