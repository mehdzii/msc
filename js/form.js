/* ==========================================================================
   MSC INPT — Registration Form JavaScript
   
   Handles:
   1. Form submission with success feedback
   2. Preloader logic
   ========================================================================== */

// Preloader Logic
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('fade-out');
    }, 500);
});

const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.fullName.value;
    const email = form.email.value;

    // Show a professional confirmation
    alert(
        "Application Received!\n\n" +
        "Thank you, " + name + ". We've received your application to join MSC.\n" +
        "A confirmation has been sent to " + email + ".\n\n" +
        "We'll review your interests and get back to you soon! 🚀"
    );

    form.reset();
});

// Terms & Conditions Modal Logic
const termsLink = document.getElementById('termsLink');
const termsModal = document.getElementById('termsModal');
const closeModal = document.getElementById('closeModal');
const acceptBtn = document.getElementById('acceptBtn');

function toggleModal(show) {
    if (show) {
        termsModal.style.display = 'flex';
        setTimeout(() => termsModal.classList.add('active'), 10);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
        termsModal.classList.remove('active');
        setTimeout(() => {
            termsModal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    }
}

termsLink.addEventListener('click', () => toggleModal(true));
closeModal.addEventListener('click', () => toggleModal(false));
acceptBtn.addEventListener('click', () => toggleModal(false));

// Close on outside click
termsModal.addEventListener('click', (e) => {
    if (e.target === termsModal) toggleModal(false);
});
