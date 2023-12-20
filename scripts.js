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

// emi
window.onload = function() {
    // Default values for loan amount, interest rate, and loan tenure
    const defaultLoanAmount = 500000; // Replace with your default value
    const defaultInterestRate = 8; // Replace with your default value
    const defaultLoanTenure = 12; // Replace with your default value

    // Set default values in input fields upon page load
    document.getElementById('loanAmount').value = defaultLoanAmount;
    document.getElementById('interestRate').value = defaultInterestRate;
    document.getElementById('loanTenure').value = defaultLoanTenure;

    // Calculate EMI based on default values
    calculateEMI();
};
function calculateEMI() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTenure = parseFloat(document.getElementById('loanTenure').value);
    const tenureType = document.getElementById('tenureType').value;

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTenure)) {
        console.error('Invalid input');
        return;
    }

    let r = interestRate / (12 * 100);
    let n = tenureType === 'months' ? loanTenure : loanTenure * 12;
    let emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    document.getElementById('emiResult').innerText = emi.toFixed(2);

    let totalInterest = emi * n - loanAmount;
    let totalPayments = loanAmount + totalInterest;

    document.getElementById('totalInterest').innerText = totalInterest.toFixed(2);
    document.getElementById('totalPayments').innerText = totalPayments.toFixed(2);

    createPaymentBreakupChart(loanAmount, totalInterest, emi);
}

function createPaymentBreakupChart(principal, totalInterest, emi) {
    const paymentBreakupChart = document.getElementById('paymentBreakupChart').getContext('2d');
    const data = {
        labels: ['Principal', 'Interest'],
        datasets: [{
            data: [principal.toFixed(2), totalInterest.toFixed(2)],
            backgroundColor: [
                'rgb(54, 162, 235)',
                'rgb(255, 99, 132)'
            ],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    };

    if (window.paymentChart) {
        window.paymentChart.destroy();
    }

    window.paymentChart = new Chart(paymentBreakupChart, config);
}
//reset the information





