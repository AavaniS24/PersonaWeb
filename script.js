document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();
  
    if (name && email && message) {
      // Simulate form submission
      document.getElementById('formMessage').textContent = "Message sent successfully!";
      e.target.reset();
    } else {
      document.getElementById('formMessage').textContent = "Please fill out all fields.";
    }
  });
  