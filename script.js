const topArtistsData = {
  "items": [
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/4Ga1P7PMIsmqEZqhYZQgDo"
      },
      "followers": {
        "href": null,
        "total": 8590449
      },
      "genres": [
        "melodic rap",
        "rap"
      ],
      "href": "https://api.spotify.com/v1/artists/4Ga1P7PMIsmqEZqhYZQgDo",
      "id": "4Ga1P7PMIsmqEZqhYZQgDo",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5ebeeba43c460454fcababda14f",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174eeba43c460454fcababda14f",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178eeba43c460454fcababda14f",
          "width": 160
        }
      ],
      "name": "Lil Tecca",
      "popularity": 80,
      "type": "artist",
      "uri": "spotify:artist:4Ga1P7PMIsmqEZqhYZQgDo"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
      },
      "followers": {
        "href": null,
        "total": 95655845
      },
      "genres": [
        "rap",
        "hip hop"
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
      "popularity": 94,
      "type": "artist",
      "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4"
    },
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/2hlmm7s2ICUX0LVIhVFlZQ"
      },
      "followers": {
        "href": null,
        "total": 8866562
      },
      "genres": [
        "melodic rap"
      ],
      "href": "https://api.spotify.com/v1/artists/2hlmm7s2ICUX0LVIhVFlZQ",
      "id": "2hlmm7s2ICUX0LVIhVFlZQ",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5ebb978b95b8e03351df8e103af",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174b978b95b8e03351df8e103af",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178b978b95b8e03351df8e103af",
          "width": 160
        }
      ],
      "name": "Gunna",
      "popularity": 85,
      "type": "artist",
      "uri": "spotify:artist:2hlmm7s2ICUX0LVIhVFlZQ"
    }
  ],
  "total": 170,
  "limit": 3,
  "offset": 0,
  "href": "https://api.spotify.com/v1/me/top/artists?limit=3&time_range=medium_term&locale=en-US,en;q%3D0.9",
  "next": "https://api.spotify.com/v1/me/top/artists?offset=3&limit=3&time_range=medium_term&locale=en-US,en;q%3D0.9",
  "previous": null
};

const projectsData = [
  {
    title: "trckr",
    description: "trckr automates job application tracking by scanning your inbox for application emails and extracting key details. Using CrewAI LLM agents, it eliminates the need for manual searches, providing a centralized dashboard to track your progress. Optimized for efficiency, it ensures inactive users don’t consume unnecessary resources.",
    image: "./assets/trckr.png",
    url: "https://www.youtube.com/watch?v=5_zUIMTUdAY"
  },
  {
    title: "Zone In",
    description: "Zone In is a web application designed to simplify urban zoning through a multimodal tech stack combining AI-driven chatbots and advanced image generation. I created the chatbot using Langchain and the OpenAI API, designed the image model with DALL·E, and integrated them using a Python-based pipeline that preprocesses extensive zoning codes. I also led the frontend development in React JS, backend integration using Flask and Postman, and produced a demo video. Our project was ranked in the top 10 at the Northwestern Wild Hacks Hackathon among 174 participants.",
    image: "./assets/zone-in.jpeg",
    url: "https://devpost.com/software/zone-in-48zhr6",
    github: "https://github.com/yashg4509/ZoneIn"
  },
  {
    title: "Rekroot",
    description: "Rekroot is an innovative job application platform that streamlines the search and application process through personalized automation. My role involved constructing a message generation model using LangChain and scraping job data using the Google Jobs API and Python. This integration enabled automated, personalized application emails that significantly increase the likelihood of securing interviews, tailored specifically to user profiles and job preferences. Our tool not only simplifies the application process but also enhances the job seeker's engagement with potential employers by directly connecting them with suitable opportunities.",
    image: "./assets/rekroot.png",
    url: "https://devpost.com/software/rekroot",
    github: "https://github.com/yashg4509/Rekroot"
  },
  {
    title: "BuckyCourses",
    description: "BuckyCourses is an LLM-powered course advisor that uses objective measures to recommend what courses students should take to fulfill requirements and achieve the most academic success; it was recognized as a top 4 project at CheeseHacks 2023. My contributions primarily include developing the large language model with LangChain and GPT-4 as well as scraping and processing thousands of data points on major requirements, average GPA of courses, and course information using Python and Selenium.",
    image: "./assets/buckycourses.png",
    github: "https://github.com/yashg4509/BuckyCourses"
  },
  {
    title: "enRollBadge",
    description: "EnRollBadge, a user-friendly web app for UW Madison students, streamlines class enrollment with real-time seat availability notifications. Developed with ReactJS and Tailwind CSS, the platform ensures an efficient and stress-free experience. With over 600 users, EnRollBadge provides timely updates, allowing students to focus effortlessly on their education.",
    image: "./assets/enrollbadge.png",
    url: "https://enrollbadge.com/",
    github: "https://github.com/yashg4509/enRollBadge"
  },
  {
    title: "DragonLearn",
    description: "Recognized with the Best Accessibility Hack Award at Northwestern University's WildHacks, DragonLearn is a dynamic app aiding dyslexic individuals with personalized training through interactive games. The frontend, crafted with React.JS and Tailwind CSS, ensures a user-friendly experience. I worked on integrating machine learning models such as Naive Bayes classifier with ScikitLearn and integration through Flask for an impactful and engaging platform.",
    image: "./assets/DragonLearnLogo.png",
    url: "https://dashboard.wildhacks.net/project/#OUBC",
    github: "https://github.com/yashg4509/DragonLearn"
  },
  {
    title: "Layon",
    description: "Layon, a ReactJS web app, displays interactive U.S. layoff statistics with a city breakdown as well as predicted layoff trends. My contributions primarily included backend algorithm development for data processing and leading the development of time series forecasting model. It was recognized as 4th place and Best Use of Google Cloud at MadData 2023.",
    image: "./assets/layon.png",
    url: "https://devpost.com/software/layon"
  },
  {
    title: "Analyzing the Effectiveness of Novel Classification Techniques for Detecting Knee Cartilage Damage",
    description: "Designed machine learning models to detect knee cartilage ruptures in knee cartilage MRI images early and counter osteoarthritis. Created dataset with Python algorithms that filter, preprocessed, and merged a combination of 1.2 million knee MRI images from different sources. Utilized Tensorflow (Python) to develop and deploy machine learning models on dataset. Developed precise accuracy metrics to compare effectiveness of different machine learning models to find the most optimal model using SciKit Learn. Recognized as 1st place in San Diego Greater Science and Engineering Fair and qualifier to California State Fair. First author on pending publication",
    image: "./assets/knee.jpeg",
    url: "https://drive.google.com/file/d/1ZiNSYXRMGdg6gt5SGVi1jZgwPPEB-GJT/view"
  }

];

function populateProjects() {
  const container = document.getElementById('projects-container');
  projectsData.forEach(project => {
    const projectHTML = `
      <div class="details-container color-container project-container" onclick="toggleProject(this)">
        <div class="article-container">
          <img src="${project.image}" alt="${project.title}" class="project-img">
        </div>
        <h2 class="skill-sub-title project-title">${project.title}</h2>
        <p class="project-description">${project.description}</p>
        <div class="btn-container">
          <button class="btn btn-color-2 project-btn" onclick="window.open('${project.url}', '_blank')">Check it out!</button>
          ${project.github ? `<button class="btn btn-color-2 project-btn" onclick="window.open('${project.github}', '_blank')">Github</button>` : ''}
        </div>
      </div>
    `;
    container.innerHTML += projectHTML;
  });
}

document.addEventListener('DOMContentLoaded', populateProjects);



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


