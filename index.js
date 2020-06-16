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


$(document).ready(function() {

    //CheckBox-Nav Collapse on Click
    $(".navigation__link").click(function () {
        $(".navigation__checkbox").prop("checked", false);
    })


    //SCROLL ANIMATION  
    //*SEE HTML*

    // Smooth-Scrolling
    $(function () {
        $("body").niceScroll({
            cursorcolor: "#14ffec",
            cursorwidth: "1rem",
            cursorborder: "none",
            cursorborderradius: "2px",
            scrollspeed: 300,
            mousescrollstep: 60,
            background: "#212121"
        });
    });

});

