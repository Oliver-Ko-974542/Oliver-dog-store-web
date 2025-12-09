// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

const contactForm = document.getElementById('contact-form');
const contactPage = document.getElementById('contact-page');
const thankYouDiv = document.getElementById('thank-you-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.style.display = 'none';
    thankYouDiv.style.display = 'block';
});


// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.