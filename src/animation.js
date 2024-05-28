//animation functionality with gsap
gsap.registerPlugin(ScrollTrigger)
//Intro animation
gsap.from(`.intro-container_body__div___left`, {
  x: "-100%",
  duration: 1.5,
  opacity: 0,
})
gsap.from(`.intro-container_body__div___right`, {
  x: "100%",
  duration: 1.5,
  opacity: 0,
})

//selector animation
let y_value = ``
if (window.innerWidth <= 600) {
  y_value = `10%`
} else {
  y_value = `20%`
}
gsap.from(`.selector-container_div`, {
  scrollTrigger: `.selector-container_div`,
  y: y_value,
  opacity: "0",
  duration: 1,
})

//working animation

gsap.from(`.workings-container_body__header___left`, {
  scrollTrigger: `.workings-container_body__header___left`,
  x: "-100%",
  opacity: 0,
  duration: 1.5,
})
gsap.from(`.workings-container_body__header___right`, {
  scrollTrigger: `.workings-container_body__header___right`,
  x: "100%",
  opacity: 0,
  duration: 1.5,
})
gsap.from(`.workings-container_body__grid`, {
  scrollTrigger: `.workings-container_body__grid`,
  x: "-100%",
  opacity: 0,
  duration: 1.5,
})
gsap.from(`.workings-container_body__buttons`, {
  scrollTrigger: `.workings-container_body__buttons`,
  x: "100%",
  opacity: 0,
  duration: 1.5,
})

//features animation
gsap.from(`.featurs-container_div__span`, {
  scrollTrigger: `.featurs-container_div__span`,
  y: "30%",
  opacity: 0,
  duration: 1.5,
})
gsap.from(`.featurs-container_div__details___left`, {
  scrollTrigger: `.featurs-container_div__details___left`,
  x: "-100%",
  opacity: 0,
  duration: 1.5,
})
gsap.from(`.featurs-container_div__details___right`, {
  scrollTrigger: `.featurs-container_div__details___right`,
  x: "-100%",
  opacity: 0,
  duration: 1.5,
})
gsap.from(`.featurs-container_div__button`, {
  scrollTrigger: `.featurs-container_div__button`,
  x: "100%",
  opacity: 0,
  duration: 1.5,
})

//benefits animation
gsap.from(`.benefit-container_div__left___container`, {
  scrollTrigger: `.benefit-container_div__left___container`,
  y: "30%",
  opacity: 0,
  duration: 1.5,
})
gsap.from(`.benefit-container_div__right`, {
  scrollTrigger: `.benefit-container_div__right`,
  y: "40%",
  opacity: 0,
  duration: 1.5,
})

//testimonial animation
gsap.from(`.testimonial-container_div__header___left`, {
  scrollTrigger: `.testimonial-container_div__header___left`,
  x: "-100%",
  opacity: 0,
  duration: 1.5,
})
gsap.from(`.testimonial-container_div__header___right`, {
  scrollTrigger: `.testimonial-container_div__header___right`,
  x: "100%",
  opacity: 0,
  duration: 1.5,
})

gsap.from(`.testimonial-container_div__button`, {
  scrollTrigger: `.testimonial-container_div__button`,
  x: "100%",
  opacity: 0,
  duration: 1.5,
})
