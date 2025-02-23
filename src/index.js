import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs"

// Header responsiveness
let hamburger = document.querySelector(`.hamburger`)
let menu_container = document.querySelector(`.header-container_div__right`)
let logo_name = document.querySelector(`.header-container_div__left`)
console.log(hamburger)
hamburger.addEventListener(`click`, () => {
  hamburger.classList.toggle(`active`)
  menu_container.classList.toggle(`active`)
  logo_name.classList.toggle(`active`)
})
// This is a very bad practise but omo i tried to use onclick in the html file but it keeps telling me the function isnt defined
let menu_item = document.querySelector(`.span`)
let menu_item_2 = document.querySelector(`.span-2`)
let menu_item_3 = document.querySelector(`.span-3`)
let menu_item_4 = document.querySelector(`.span-4`)
let menu_item_5 = document.querySelector(`.span-5`)
let menu_item_6 = document.querySelector(`.span-6`)

menu_item.addEventListener(`click`, () => {
  hamburger.classList.remove(`active`)
  menu_container.classList.remove(`active`)
  console.log(`red`)
})
menu_item_2.addEventListener(`click`, () => {
  hamburger.classList.remove(`active`)
  menu_container.classList.remove(`active`)
  console.log(`red`)
})
menu_item_3.addEventListener(`click`, () => {
  hamburger.classList.remove(`active`)
  menu_container.classList.remove(`active`)
  console.log(`red`)
})
menu_item_4.addEventListener(`click`, () => {
  hamburger.classList.remove(`active`)
  menu_container.classList.remove(`active`)
  console.log(`red`)
})
menu_item_5.addEventListener(`click`, () => {
  hamburger.classList.remove(`active`)
  menu_container.classList.remove(`active`)
  console.log(`red`)
})
menu_item_6.addEventListener(`click`, () => {
  hamburger.classList.remove(`active`)
  menu_container.classList.remove(`active`)
  console.log(`red`)
})

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
]

let working_html = ``
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
                </div>`
})

document.querySelector(`.workings-container_body__grid`).innerHTML =
  working_html

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
]
let benefits_html = ``
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
  `
})
document.querySelector(
  `.benefit-container_div__right___achievement`
).innerHTML = benefits_html

//testimonial array

let slider_cart = [
  {
    image: "../public/second.jpeg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed laoreet mauris. Suspendisse consectetur mattis velit. ",
  },
  {
    image: "../public/developer.jpg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed laoreet mauris. Suspendisse consectetur mattis velit.  ",
  },
  {
    image: "../public/second.jpeg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed laoreet mauris. Suspendisse consectetur mattis velit. ",
  },
  {
    image: "../public/developer.jpg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed laoreet mauris. Suspendisse consectetur mattis velit. ",
  },
  {
    image: "../public/second.jpeg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed laoreet mauris. Suspendisse consectetur mattis velit.",
  },
]

let slider_html = ``

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

             
            
              
            `
})

document.querySelector(`.swiper-wrapper`).innerHTML = slider_html
let slides_per_view = ``
//updating number of slides per view
if (window.innerWidth <= 600) {
  slides_per_view = 1
  console.log(true)
} else {
  slides_per_view = 3
  console.log(false)
}
let swiper = new Swiper(".my-swiper", {
  slidesPerView: slides_per_view,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})

//match array
let match = [
  {
    detail:
      "Alice and Bob met on CoolDatingSite.com and hit it off right away with their shared love of hiking and outdoor adventures. After many shared trips and experiences, they decided to tie the knot in 2023.",
  },
  {
    detail:
      "Charlie and Dana connected over their passion for music and art. Their first date was a virtual concert during the lockdown. They've been inseparable ever since and now live together, exploring new art scenes around the world.",
  },
  {
    detail:
      "Eve and Frank both swiped right because of their mutual interest in cooking. After their first meeting at a cooking class, they continued to explore cuisines from different cultures. They recently opened a small cafe together",
  },
]
let match_html = ``
match.forEach((item, index) => {
  match_html += `
              <div class="match-container_div__content">
               
                  
                  ${item.detail}
                
              
              </div>`
})

document.querySelector(`.match-container_div`).innerHTML = match_html
let current_index = 0
//matching items animation
function update_content() {
  let contents = document.querySelectorAll(`.match-container_div__content`)

  contents.forEach((content, index) => {
    if (index === current_index) {
      content.classList.add(`visible`)
      content.classList.remove(`hidden`)
    } else {
      content.classList.add(`hidden`)
      content.classList.remove(`visible`)
    }
  })
  current_index = (current_index + 1) % match.length
}

setInterval(() => {
  update_content()
}, 11500)

//footer
let year = new Date().getFullYear()
document.querySelector(
  `.footer-container_break-line span`
).innerHTML = `copyright@${year}-All rights reserved`
