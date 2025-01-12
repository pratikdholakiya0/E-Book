/*=============== SEARCH ===============*/
const searchIcon = document.querySelector(".searchIcon");
const search = document.getElementById("search-content");

searchIcon.addEventListener("click", e => {
    e.preventDefault();
    search.classList.add("show-search");
})
document.querySelector(".remove__search").addEventListener("click", e => {
    search.classList.remove("show-search");
})
/*=============== LOGIN ===============*/

const loginIcon = document.querySelector(".login-button");
const login = document.getElementById("login-content");

loginIcon.addEventListener("click", e => {
    e.preventDefault();
    login.classList.add("show-login");
})
document.querySelector(".remove__login").addEventListener("click", e => {
    login.classList.remove("show-login");
})

/*=============== ADD SHADOW HEADER ===============*/


/*=============== HOME SWIPER ===============*/
const swiper = new Swiper('.swiper', {
    // Swiper Parameters
    loop: true, // Loop through slides
    autoplay: {
        delay: 3000, // Delay between slides in ms
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Make pagination bullets clickable
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/*=============== FEATURED SWIPER ===============*/


/*=============== NEW SWIPER ===============*/


/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
