import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

// Header responsiveness
let hamburger = document.querySelector(`.hamburger`);
let menu_container = document.querySelector(`.header-container_div__right`);
let logo_name = document.querySelector(`.header-container_div__left`);
console.log(hamburger);
hamburger.addEventListener(`click`, () => {
  hamburger.classList.toggle(`active`);
  menu_container.classList.toggle(`active`);
  logo_name.classList.toggle(`active`);
});
// This is a very bad practise but omo i tried to use onclick in the html file but it keeps telling me the function isnt defined
let menu_item = document.querySelectorAll(
  `.header-container_div__right___cont span`
);

menu_item.forEach((list) => {
  list.addEventListener(`click`, () => {
    hamburger.classList.remove(`active`);
    menu_container.classList.remove(`active`);
    logo_name.classList.remove(`active`);
  });
});
//Header having a box-shadow on scroll

const header_container = document.querySelector(`.header-container_div`);
let last_scroll;
let timer;

function show_header() {
  header_container.classList.remove(`active`);
  header_container.style.transition = "0.7s";
}
function hide_header() {
  header_container.classList.add(`active`);
  header_container.style.transition = "0.7s";
}

let isScrolling;
let hasStarted = false;
let isHovering = false; // Flag to track if the header is being hovered

header_container.addEventListener("mouseenter", function () {
  isHovering = true;
});

header_container.addEventListener("mouseleave", function () {
  isHovering = false;
  // Hide the header if the user stops scrolling and is not hovering
  if (!hasStarted) {
    hide_header();
  }
});

window.addEventListener(
  "scroll",
  function (event) {
    window.clearTimeout(isScrolling);

    // Show the header when scrolled to the top or on initial scroll
    if (window.pageYOffset === 0 || !hasStarted) {
      show_header();
      hasStarted = true;
    }

    isScrolling = setTimeout(function () {
      // Only hide the header if it's not being hovered
      if (!isHovering) {
        hide_header();
        hasStarted = false;
      }
    }, 1000);
  },
  false
);

//intro slide in toggle and redirect
let redirect_link = "https://www.example.com";
const toggle = document.querySelector(
  `.intro-container_body__div___left____button-container`
);
const toggle_arrow = document.querySelector(
  `.intro-container_body__div___left____button-container_____right-arrow`
);
const toggle_a = document.querySelector(
  `.intro-container_body__div___left____button-container a`
);
toggle.addEventListener(`click`, () => {
  toggle.classList.toggle(`active`);
  toggle_arrow.classList.toggle(`slide`);
  toggle_a.classList.toggle(`slide_toggle`);
  setTimeout(() => {
    window.location.href = redirect_link;
  }, 1000);
  setTimeout(() => {
    toggle.classList.remove(`active`);
    toggle_arrow.classList.remove(`slide`);
    toggle_a.classList.remove(`slide_toggle`);
  }, 2500);
});

//selector array
const selector_array = [
  {
    heading: `Looking for`,
    list_heading: `Female`,
    list_item_1: `Male`,
    list_item_2: `Female`,
    list_item_3: `Other`,
  },
  {
    heading: `Age`,
    list_heading: `22 years`,
    list_item_1: `18 years`,
    list_item_2: `20 years`,
    list_item_3: `22 years`,
  },
  {
    heading: `Location`,
    list_heading: `Canada`,
    list_item_1: `US`,
    list_item_2: `canada`,
    list_item_3: `England`,
  },
];
let selector_html = ``;
selector_array.forEach((item, index) => {
  selector_html += ` 
      <div class="selector-container_div__selector"> 
       <span class="selector-container_div__selector___span"> ${item.heading}</span>
       <div class="selector-container_div__selector___flex">
        <span class="selector-container_div__selector___flex_____selected">${item.list_heading}</span>
        <div class="selector-container_div__selector___flex____carot"></div>
       </div>
       <div class="selector-container_div__selector___list">
        <span> ${item.list_item_1}</span>
        <span>  ${item.list_item_2} </span>
        <span>  ${item.list_item_3}</span>
       </div>
       
      
      </div>
       
            
            `;
});

document.querySelector(`.selector-container_div`).innerHTML =
  selector_html + `<a class="selector-container_div__button"> Search </a>`;

document
  .querySelectorAll(`.selector-container_div__selector`)
  .forEach((item) => {
    let selector = item.querySelector(
      `.selector-container_div__selector___flex`
    );
    let selector_title = item.querySelector(
      `.selector-container_div__selector___flex_____selected`
    );
    let carot = item.querySelector(
      `.selector-container_div__selector___flex____carot`
    );
    let menu_list = item.querySelector(
      `.selector-container_div__selector___list`
    );
    let options = item.querySelectorAll(
      `.selector-container_div__selector___list span`
    );

    selector.addEventListener(`click`, () => {
      carot.classList.toggle(`rotate`);
      menu_list.classList.toggle(`active`);
    });

    options.forEach((option) => {
      option.addEventListener(`click`, () => {
        selector_title.innerText = option.innerText;
        carot.classList.remove(`rotate`);
        menu_list.classList.remove(`active`);
      });
    });

    //logging value when the search button is click
    const search_button = document.querySelector(
      `.selector-container_div__button`
    );
    search_button.addEventListener(`click`, () => {
      console.log(selector_title.innerText);
    });
  });

//Workings array
let working_array = [
  {
    image: "<i class='fa-solid fa-user'></i>",
    heading: "Profile Setup",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "<i class='fa-solid fa-house'></i>",
    heading: "Find Match",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "<i class='fa-solid fa-list'></i>",
    heading: "Start Dating",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

let working_html = ``;
working_array.forEach((item, index) => {
  working_html += `
                <div
                  class="workings-container_body__grid___content"
                  
                >
                  <div class="workings-container_body__grid___content____img">
                    ${item.image}
                  </div>

                  <span class="workings-container_body__grid___content____span-1">
                   
                   ${item.heading}
                  </span>
                  <span class="workings-container_body__grid___content____span-2">
                   ${item.detail}
                  </span>
                </div>`;
});

document.querySelector(`.workings-container_body__grid`).innerHTML =
  working_html;
//work toggle effect
const work_toggle = document.querySelector(
  `.workings-container_body__buttons___container`
);
const work_toggle_a = document.querySelector(
  `.workings-container_body__buttons___container a`
);
const work_toggle_arrow = document.querySelector(
  `.workings-container_body__buttons___container____right-arrow`
);
work_toggle.addEventListener(`click`, () => {
  work_toggle.classList.add(`active`);
  work_toggle_a.classList.toggle(`active`);
  work_toggle_arrow.classList.toggle(`active`);
  setTimeout(() => {
    window.location.href = redirect_link;
  }, 1000);
  setTimeout(() => {
    work_toggle.classList.remove(`active`);
    work_toggle_arrow.classList.remove(`active`);
    work_toggle_a.classList.remove(`active`);
  }, 2500);
});

//features toggle effect
const features_toggle = document.querySelector(
  `.featurs-container_div__button___container`
);
const features_toggle_a = document.querySelector(
  `.featurs-container_div__button___container a`
);
const features_toggle_arrow = document.querySelector(
  `.featurs-container_div__button___container____right-arrow`
);
features_toggle.addEventListener(`click`, () => {
  features_toggle.classList.add(`active`);
  features_toggle_a.classList.toggle(`active`);
  features_toggle_arrow.classList.toggle(`active`);
  setTimeout(() => {
    window.location.href = redirect_link;
  }, 1000);
  setTimeout(() => {
    features_toggle.classList.remove(`active`);
    features_toggle_arrow.classList.remove(`active`);
    features_toggle_a.classList.remove(`active`);
  }, 2500);
});

//Benefits array
let project_cart = [
  {
    stats: "450+",
    detail: "Projects Completed",
  },
  {
    stats: "450+",
    detail: "Projects Completed",
  },
  {
    stats: "450+",
    detail: "Projects Completed",
  },
  {
    stats: "450+",
    detail: "Projects Completed",
  },
];
let benefits_html = ``;
project_cart.forEach((project, index) => {
  benefits_html += `
                  <div class="benefit-container_div__right___achievement____stats">
                    <span class="benefit-container_div__right___achievement____stats_____span-1">
                      
                      ${project.stats}
                    </span>
                    <span class="benefit-container_div__right___achievement____stats_____span-2">
                   
                     ${project.detail}
                    </span>
                  </div> 
  `;
});
document.querySelector(
  `.benefit-container_div__right___achievement`
).innerHTML = benefits_html;

//benefit toggle effect
const benefit_toggle = document.querySelector(
  `.benefit-container_div__right___button____container`
);
const benefit_toggle_a = document.querySelector(
  `.benefit-container_div__right___button____container a`
);
const benefit_toggle_arrow = document.querySelector(
  `.benefit-container_div__right___button____container_____right-arrow`
);
benefit_toggle.addEventListener(`click`, () => {
  benefit_toggle.classList.add(`active`);
  benefit_toggle_a.classList.toggle(`active`);
  benefit_toggle_arrow.classList.toggle(`active`);
  setTimeout(() => {
    window.location.href = redirect_link;
  }, 1000);
  setTimeout(() => {
    benefit_toggle.classList.remove(`active`);
    benefit_toggle_arrow.classList.remove(`active`);
    benefit_toggle_a.classList.remove(`active`);
  }, 2500);
});

//testimonial array

let slider_cart = [
  {
    image: "./public/developer-0.jpg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed laoreet mauris. Suspendisse consectetur mattis velit. ",
  },
  {
    image: "./public/developer-1.jpg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed laoreet mauris. Suspendisse consectetur mattis velit.  ",
  },
  {
    image: "./public/developer-0.jpg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed laoreet mauris. Suspendisse consectetur mattis velit. ",
  },
  {
    image: "./public/developer-1.jpg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed laoreet mauris. Suspendisse consectetur mattis velit. ",
  },
  {
    image: "./public/developer-0.jpg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed laoreet mauris. Suspendisse consectetur mattis velit.",
  },
];

let slider_html = ``;

slider_cart.forEach((slide, index) => {
  slider_html += ` 
  

            
             
               
                  <div class="swiper-slide" >
                    <div class="testimonial-container_div__slider___container">
                      <img
                        src=${slide.image}
                        class="testimonial-container_div__slider___container____image"
                      />
                      <span class="testimonial-container_div__slider___container____span">
                        
                        ${slide.details}
                      </span>
                    </div>
                  </div>
             </div>

             
            
              
            `;
});

document.querySelector(`.swiper-wrapper`).innerHTML = slider_html;
let slides_per_view = ``;
//updating number of slides per view
if (window.innerWidth <= 600) {
  slides_per_view = 1;
  console.log(true);
} else if (window.innerWidth > 600 && window.innerWidth < 999) {
  slides_per_view = 2;
  console.log(`active`);
} else {
  slides_per_view = 3;
  console.log(false);
}
let swiper = new Swiper(".my-swiper", {
  slidesPerView: slides_per_view,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//testimonial toggle effect
const testimonial_toggle = document.querySelector(
  `.testimonial-container_div__button___container`
);
const testimonial_toggle_a = document.querySelector(
  `.testimonial-container_div__button___container a`
);
const testimonial_toggle_arrow = document.querySelector(
  `.testimonial-container_div__button___container____right-arrow`
);
testimonial_toggle.addEventListener(`click`, () => {
  testimonial_toggle.classList.add(`active`);
  testimonial_toggle_a.classList.toggle(`active`);
  testimonial_toggle_arrow.classList.toggle(`active`);
  setTimeout(() => {
    window.location.href = redirect_link;
  }, 1000);
  setTimeout(() => {
    testimonial_toggle.classList.remove(`active`);
    testimonial_toggle_arrow.classList.remove(`active`);
    testimonial_toggle_a.classList.remove(`active`);
  }, 2500);
});

//match array
let match = [
  {
    detail:
      "<i class='fa-solid fa-face-laugh emoji'></i> Alice and Bob met on CoolDatingSite.com and hit it off right away with their shared love of hiking and outdoor adventures. After many shared trips and experiences, they decided to tie the knot in 2023. ",
  },
  {
    detail:
      "<i class='fa-solid fa-face-smile emoji'></i> Charlie and Dana connected over their passion for music and art. Their first date was a virtual concert during the lockdown. They've been inseparable ever since and now live together, exploring new art scenes around the world.",
  },
  {
    detail:
      "<i class='fa-solid fa-face-smile-beam emoji'></i> Eve and Frank both swiped right because of their mutual interest in cooking. After their first meeting at a cooking class, they continued to explore cuisines from different cultures. They recently opened a small cafe together. ",
  },
];
let match_html = ``;
match.forEach((item, index) => {
  match_html += `
                  <span  class="match-container_div__content___scroll">${item.detail}</span>
              `;
});

document.querySelector(`.match-container_div__content`).innerHTML = match_html;

//duplicating scroll content for smoother sliding
let scroll_inner = document.querySelector(`.match-container_div__content`);
let scroll_content = Array.from(scroll_inner.children);
scroll_content.forEach((item) => {
  let duplicated_text = item.cloneNode(true);

  scroll_inner.append(duplicated_text);
});
//run animation only when in view
const animated_content = document.querySelector(
  `.match-container_div__content`
);
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    animated_content.classList.add(`animation`);
  } else {
    animated_content.classList.remove(`animation`);
  }
});
observer.observe(animated_content);

//logging email input
const send_button = document.querySelector(
  `.email-container_body__email-container___button`
);
let input_value = document.querySelector(
  `.email-container_body__email-container___input`
);
send_button.addEventListener(`click`, () => {
  let value = input_value.value;
  console.log(value);
  input_value.value = ``;
});

//footer
let year = new Date().getFullYear();
let next_year = year + 1;
document.querySelector(
  `.footer-container_break-line span`
).innerHTML = `copyright ${year}-${next_year} Tows heart, LLC.All rights reserved`;

// Hero page slider animation
const images = ["./public/hero_1.png", "./public/hero_3.png"];
let currentIndex = 0;

const imageDiv = document.querySelector(
  ".intro-container_body__div___middle figure div img"
);

function updateImage() {
  imageDiv.style.opacity = "0"; // Fade out the image
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length; // Update index to loop through images
    imageDiv.src = images[currentIndex]; // Change the image source
    imageDiv.style.opacity = "1"; // Fade in the new image
  }, 700); // Time to wait before changing the source and fading in
}

setInterval(() => {
  // Apply a sliding transition effect
  imageDiv.style.transition = "opacity 0.5s ease-out";
  updateImage();
}, 5000); // Change image every 3 seconds
