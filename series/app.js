////////Modal////////
const modal = document.querySelector(".modal");
const videoIframe = document.querySelector("#trailer-video");

const showModal = (src) => {
  modal.style.display = "block";
  videoIframe.src = src;
};

const hideModal = () => {
  modal.style.display = "none";
  videoIframe.src = "";
};

const capList = document.querySelector("#cap-list");
capList.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    event.preventDefault();
    showModal(event.target.href);
  }
});

modal.addEventListener("click", hideModal);

// Remove iframe when modal is closed
modal.addEventListener("mouseup", (event) => {
  if (event.target === modal) {
    videoContainer.removeChild(videoContainer.firstChild);
  }
});

////////TOP BTN////////

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//////////BTN////////////

const btn = [
  {
    id: 1,
  },
];

function Template(btn) {
  return `
    
 
     
      <button id="btn-galery">  <a href="https://mov-house.netlify.app/galeria/series/index.html">Regresar a galeria</a></button>
 
  
      `;
}

document.getElementById("btn").innerHTML = `
              
              ${btn.map(Template).join("")}
              
            `;
