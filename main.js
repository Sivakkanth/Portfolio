var typed = new Typed(".text", {
    strings: ["a Front End Developer", "a Mobile App Developer", "an UI/UX Designer"],
    typeSpeed:100,
    backSpeed:20,
    backDelay:1000,
    loop:true
});

function toggleMenu() {
    const navLinks = document.getElementById('mini-navbar');
    if (navLinks.classList.contains('hide')) {
        navLinks.classList.remove('hide');
        navLinks.classList.add('show');
    } else {
        navLinks.classList.remove('show');
        navLinks.classList.add('hide');
    }
}

function hideMenu() {
    const navLinks = document.getElementById('mini-navbar');
    navLinks.classList.remove('show');
    navLinks.classList.add('hide');
}

window.onload = function() {
    const navLinks = document.getElementById('mini-navbar');
    navLinks.classList.add('hide');
}

const toTop = document.querySelector('.to-top');
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active")
    }
})

function preview(){
    alert("Processing for deployed")
}