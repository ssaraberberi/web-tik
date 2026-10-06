// ===== 1. SMOOTH SCROLLING NAVIGATION =====

// Get all links in the navigation (and the logo)
const navLinks = document.querySelectorAll('.nav-links a, .logo');

navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        // Stop the normal "jump" to the section
        event.preventDefault();

        // The href is something like "#destinations"
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Scroll smoothly to the section
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// "Explore Destinations" button in the hero section
const exploreButton = document.getElementById('explore-btn');

exploreButton.addEventListener('click', function () {
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
});


// ===== 2. "LEARN MORE" BUTTONS =====

// Extra information for each destination
const destinationInfo = {
    Tirana: 'Tirana is the capital of Albania. Visit Skanderbeg Square, the Pyramid of Tirana and take the Dajti Express cable car for a great view of the city.',
    Berat: 'Berat is a UNESCO World Heritage Site. Walk up to Berat Castle, where people still live today, and explore the old Mangalem neighbourhood.',
    Theth: 'Theth is in the Accursed Mountains. Popular activities are the hike to the Blue Eye of Theth and the hike from Theth to Valbona. Best visited in summer.',
    Ksamil: 'Ksamil is close to Saranda and the ancient city of Butrint. You can swim to the small islands near the beach. Best visited from June to September.'
};

const learnMoreButtons = document.querySelectorAll('.learn-more');

learnMoreButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Read the destination name from the data-place attribute
        const place = button.getAttribute('data-place');
        alert(place + '\n\n' + destinationInfo[place]);
    });
});


// ===== 3. CONTACT FORM =====

const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function (event) {
    // Stop the page from refreshing
    event.preventDefault();

    // Show a thank you message
    formMessage.textContent = 'Thank you! Your message has been sent.';

    // Clear the form fields
    contactForm.reset();
});


// ===== 4. IMAGE FALLBACK =====
// If an image can't load, hide it so the blue box with the
// destination name is shown instead of a broken image icon.

const cardImages = document.querySelectorAll('.card-image img');

cardImages.forEach(function (img) {
    // The image may have already failed before this script ran
    if (img.complete && img.naturalWidth === 0) {
        img.style.display = 'none';
    }

    img.addEventListener('error', function () {
        img.style.display = 'none';
    });
});
