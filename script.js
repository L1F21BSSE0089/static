// JavaScript to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from the form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Display a response message
  const response = document.getElementById('formResponse');
  response.textContent = `Thank you, ${name}! We have received your message.`;
  response.style.color = "green";

  // Clear form fields after submission
  document.getElementById('contactForm').reset();
});
