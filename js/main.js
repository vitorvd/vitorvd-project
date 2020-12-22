const menuMobile = document.querySelector(".menu-mobile")
const ham = document.querySelector('.menu-hamburguer')
const menuLinks = document.querySelectorAll('.menu-link')

function toggleHamburger() {
    menuMobile.classList.toggle("show-menu-mobile")
}

menuLinks.forEach( (menuLink) => { 
      menuLink.addEventListener("click", toggleHamburger) 
})

ham.addEventListener("click", toggleHamburger)