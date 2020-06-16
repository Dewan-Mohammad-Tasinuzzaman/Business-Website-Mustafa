// if (Modernizr.touch) {

// }
// else {
//     //Smoothe Scroll
//     // A $( document ).ready() block.
//     $(document).ready(function () {
//         $("body").niceScroll({
//             scrollspeed: 400,
//             cursorcolor: "#14ffec",
//             cursorwidth: "10px"
//         });
//     });

//     //SCROLL BEHAVIOUR SMOOTHE
//     $(document).ready(function () {
//         // Add smooth scrolling to all links
//         $(".scroll-btn, .navigation__link, .footer__link").on('click', function (event) {

//             // Make sure this.hash has a value before overriding default behavior
//             if (this.hash !== "") {
//                 // Prevent default anchor click behavior
//                 event.preventDefault();

//                 // Store hash
//                 var hash = this.hash;

//                 // Using jQuery's animate() method to add smooth page scroll
//                 // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//                 $('html, body').animate({
//                     scrollTop: $(hash).offset().top
//                 }, 2000, function () {

//                     // Add hash (#) to URL when done scrolling (default click behavior)
//                     window.location.hash = hash;
//                 });
//             } // End if
//         });
//     });

// }




// VERSION - 2




//CheckBox-Nav Collapse on Click
$(".navigation__link").click(function () {
    $(".navigation__checkbox").prop("checked", false);
})


//SCROLL ANIMATION  
const navbarToggler = document.querySelector(".scroll-btn, .navigation__link, .footer__link");
const navbarMenu = document.querySelector(".scroll-btn, .navigation__link, .footer__link");
const navbarLinks = document.querySelectorAll(".scroll-btn, .navigation__link, .footer__link");

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
    navbarToggler.classList.toggle("open-navbar-toggler");
    navbarMenu.classList.toggle("open");
}

// navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", navbarLinkClick);
}

function navbarLinkClick(event) {

    smoothScroll(event); // Call the "smoothScroll" function

    if (navbarMenu.classList.contains("open")) { // Close navbarMenu in smaller screens
        navbarToggler.click();
    }

}

// Smooth-Scrolling


function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href") === "#" ? "header" : event.currentTarget.getAttribute("href");
    const targetPosition = document.querySelector(targetId).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        // window.scrollTo(0, distance*(progress/duration) + startPosition);
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
}

// Easing Functions

function linear(t, b, c, d) {
    return c * t / d + b;
};

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};



//SMOOTHE MOUSEWHEEL SCROLLING

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) { (delta = event.wheelDelta / 120); }
    else if (event.detail) { (delta = -event.detail / 3); }

    handle(delta);
    if (event.preventDefault) { (event.preventDefault()); }
    event.returnValue = false;
}

function handle(delta) {
    var time = 1000;
    var distance = 600;

    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time);
}

if (window.addEventListener) { window.addEventListener('DOMMouseScroll', wheel, false); }
window.onmousewheel = document.onmousewheel = wheel;
