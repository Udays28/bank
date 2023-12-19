// scripts.js

function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
//for image crousle
// Initialize Slick Carousel
$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true, // Set to true if you want autoplay
        autoplaySpeed: 3000, // Autoplay speed in milliseconds
        dots: true, // Set to true if you want navigation dots
        arrows: true, // Set to true if you want navigation arrows
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1 // Number of slides to scroll
        // Add more settings/options as needed
    });
});
//cards
// Include jQuery before this code if not already included

$(document).ready(function(){
    $('.slick-carousel').slick({
        slidesToShow: 3, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll
        autoplay: true, // Set to true for automatic sliding
        autoplaySpeed: 2000, // Time between slides in milliseconds
        dots: true, // Enable dots (pagination)
        responsive: [
            {
                breakpoint: 768, // Responsive breakpoint
                settings: {
                    slidesToShow: 2 // Adjust number of slides on smaller screens
                }
            },
            {
                breakpoint: 480, // Responsive breakpoint
                settings: {
                    slidesToShow: 1 // Adjust number of slides on even smaller screens
                }
            }
        ]
    });
});


