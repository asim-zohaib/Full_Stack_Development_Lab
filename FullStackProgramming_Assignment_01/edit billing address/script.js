document.getElementById('billingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Highlight the button to show processing
    const btn = this.querySelector('.submit-btn');
    const originalText = btn.innerText;
    
    btn.innerText = "UPDATING...";
    btn.style.opacity = "0.7";

    // Simulate an API save request
    setTimeout(() => {
        btn.innerText = "SAVED SUCCESSFULLY!";
        btn.style.backgroundColor = "#28a745"; // Green for success
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = "#ff0000";
            btn.style.opacity = "1";
        }, 2000);
    }, 1200);
});