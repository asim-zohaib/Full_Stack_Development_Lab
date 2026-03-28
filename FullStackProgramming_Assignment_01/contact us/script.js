document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form data capture
    const formData = {
        name: document.getElementById('fname').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent.");
    this.reset();
});