// Function to open the invitation
const btnOpen = document.getElementById('btnOpen');
const mainContent = document.getElementById('mainContent');
const heroSection = document.getElementById('hero');

btnOpen.addEventListener('click', () => {
    mainContent.classList.remove('hidden');
    // Scroll to the next section (details) after opening
    const firstSection = document.querySelector('.details');
    if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// Countdown Timer
// Set your wedding date here (Format: Month Day, Year HH:MM:SS)
const weddingDate = new Date("Dec 20, 2026 09:00:00").getTime();

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in elements
    if (document.getElementById("days")) document.getElementById("days").innerHTML = days;
    if (document.getElementById("hours")) document.getElementById("hours").innerHTML = hours;
    if (document.getElementById("minutes")) document.getElementById("minutes").innerHTML = minutes;
    if (document.getElementById("seconds")) document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is finished
    if (distance < 0) {
        clearInterval(countdownInterval);
        if (document.getElementById("countdown")) {
            document.getElementById("countdown").innerHTML = "<h3>Acara Telah Berlangsung!</h3>";
        }
    }
}, 1000);

// Simple Wish Submission (Client-side only)
// In a real application, you'd send this data to a server/database
const wishForm = document.getElementById('wishForm');
const wishList = document.getElementById('wishList');

if (wishForm) {
    wishForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const guestName = document.getElementById('guestName').value;
        const guestWish = document.getElementById('guestWish').value;

        if (guestName && guestWish) {
            const wishItem = document.createElement('div');
            wishItem.classList.add('wish-item');
            wishItem.innerHTML = `<strong>${guestName}:</strong><p>${guestWish}</p>`;
            wishList.prepend(wishItem); // Add new wish to the top

            // Clear the form
            document.getElementById('guestName').value = '';
            document.getElementById('guestWish').value = '';
        } else {
            alert('Mohon isi nama dan pesan Anda.');
        }
    });
}