// Optional: add parallax scrolling effect
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.hero');
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
  });
  // Smooth scroll to the next section when the button is clicked
const button = document.querySelector('.cta-button');

button.addEventListener('click', () => {
  window.scroll({
    top: document.querySelector('section').offsetHeight,
    behavior: 'smooth'
  });
});
// Open a modal with project details when a portfolio item is clicked
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
  item.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <img src="path/to/image.jpg" alt="Project 1">
        <h3>Project 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor mauris nec bibendum porttitor.</p>
        <button class="close-button">Close</button>
      </div>
    `;
    document.body.appendChild(modal);
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
      modal.remove();
    });
  });
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  form.reset();
  alert('Your message has been sent!');
});


