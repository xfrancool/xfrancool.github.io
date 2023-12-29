import { series } from "./export.js";

const globalName = "agentecarter";

// Fetch series data
fetch(series)
  .then((response) => response.json())
  .then((data) => {
    const defaultName = globalName; // Change the value as needed
    const defaultItem = data.find((item) => item.json === defaultName);

    // Update HTML with default series image
    updateHTML(defaultItem);
  });

// Function to update HTML with series image
function updateHTML(selectedItem) {
  if (selectedItem) {
    const { img } = selectedItem;

    // Update the image
    const logoElement = document.getElementById("logo");
    logoElement.src = img;

    // Rest of your code...
  }
}

const url = "https://xfrancool.github.io/seriesjson/"; // Identificador único para la serie
const type = ".json";

const unificacion = url + globalName + type;

fetch(unificacion)
  .then((response) => response.json())
  .then((data) => {
    const select = document.getElementById("temp-select");
    const capList = document.getElementById("cap-list");
    const videoContainer = document.getElementById("video-container");
    const id = globalName; // Identificador único para la serie

    // Populate select with seasons
    for (let i = 0; i < data.length; i += 2) {
      const seasonName = data[i];
      const seasonCaps = data[i + 1];
      const option = document.createElement("option");
      option.value = seasonName;
      option.textContent = seasonName;
      select.appendChild(option);
    }

    // Update capList when select changes
    select.addEventListener("change", (e) => {
      const selectedSeason = e.target.value;
      capList.innerHTML = "";
      videoContainer.innerHTML = "";

      for (let i = 0; i < data.length; i += 2) {
        if (data[i] === selectedSeason) {
          const seasonCaps = data[i + 1];

          for (let j = 0; j < seasonCaps.length; j++) {
            const cap = seasonCaps[j];
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = cap.link;
            link.textContent = cap.cap;
            listItem.appendChild(link);
            capList.appendChild(listItem);
            capList.style.display = "block";

            // Paint watched caps
            const watched = getWatchedCaps(id);
            if (watched[selectedSeason] && watched[selectedSeason][cap.cap]) {
              link.style.color = "teal";
            }
          }

          break;
        }
      }
    });

    // Get watched caps from Local Storage
    function getWatchedCaps(id) {
      const watched = localStorage.getItem(`watchedCaps-${id}`);
      if (watched) {
        return JSON.parse(watched);
      }
      return {};
    }

    // Mark cap as watched and save to Local Storage
    function markAsWatched(cap, season, id) {
      const watched = getWatchedCaps(id);
      if (!watched[season]) {
        watched[season] = {};
      }
      watched[season][cap] = true;
      localStorage.setItem(`watchedCaps-${id}`, JSON.stringify(watched));
      paintWatchedCaps(id);
    }

    // Paint watched caps
    function paintWatchedCaps(id) {
      const watched = getWatchedCaps(id);
      const caps = document.querySelectorAll("#cap-list a");
      caps.forEach((cap) => {
        const capName = cap.textContent;
        const seasonName = select.value;
        if (watched[seasonName] && watched[seasonName][capName]) {
          cap.style.color = "teal";
        } else {
          cap.style.color = "";
        }
      });
    }

    // Listen for click events on capList
    capList.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        event.preventDefault();
        showModal(event.target.href);
        const capName = event.target.textContent;
        const seasonName = select.value;
        markAsWatched(capName, seasonName, id);
      }
    });
  });
