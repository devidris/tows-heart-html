const pre_loader = document.querySelector(".preloader")
const app_container = document.querySelector(".app_container")

// Animate preloader into view
setTimeout(() => {
  pre_loader.style.left = "0"
}, 100) // Slight delay to ensure CSS transition

// Hide preloader after 5 seconds and show content
setTimeout(() => {
  pre_loader.style.left = "100%"
  pre_loader.style.transition = "left 1s ease-in-out"

  setTimeout(() => {
    pre_loader.style.display = "none"
    app_container.style.opacity = 1
    app_container.style.visibility = "visible"
    document.body.style.overflow = "auto" // Allow scrolling after preloader is hidden
  }, 1000) // Match this with the transition duration
}, 3000) // Preloader duration
