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


/*=============== FEATURED SWIPER ===============*/
/*=============== NEW SWIPER ===============*/
/*=============== TESTIMONIAL SWIPER ===============*/
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



/*=============== SHOW SCROLL UP ===============*/ 

const upButton = document.querySelector('.up');

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}
upButton.addEventListener("click", () => {
    scrollToTop();
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/
const darkIcon = document.querySelector(".darkTheme-button");

function selectTagAndStyle(tagName) {
    let tag = document.querySelectorAll(`${tagName}`);

    for (let i = 0; i < tag.length; i++) {
        tag[i].classList.toggle("dark-theme");
    }
}

function changeTheme() {
    document.body.classList.toggle("dark-theme");
    document.querySelector("header").classList.toggle("dark-theme");
    selectTagAndStyle("h1")
    selectTagAndStyle("h2")
    selectTagAndStyle("h3")
    selectTagAndStyle("h4")
    selectTagAndStyle("span")
    selectTagAndStyle("p")
    selectTagAndStyle("i")
    selectTagAndStyle("a")
    selectTagAndStyle(".nav__list")
    selectTagAndStyle(".newbook")
    selectTagAndStyle("home-button")
}

let togle = false;
darkIcon.addEventListener("click", e =>{
    e.preventDefault();
    if(!togle) {
        darkIcon.classList.replace("ri-moon-line", "ri-sun-line");
    }
    else {
        darkIcon.classList.replace("ri-sun-line", "ri-moon-line");
    }
    togle = !togle;
    changeTheme();
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
