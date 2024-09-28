// Image Carousel
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


// Navbar scroll
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));

        target.scrollIntoView({behavior: 'smooth'});
    });
});

// form
const contactForm = document.getElementById('contactForm');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const emailBody = Array.from(formData.entries()).map(([key, value]) => `${key}: ${value}`).join('\n');

  // Replace with your email address
  const recipientEmail = 'latieuphostery@gmail.com';

  // Create a new email object
  const mailtoLink = `mailto:${recipientEmail}?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;

  // Redirect the user to the email client
  window.location.href = mailtoLink;
});
