document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        document.getElementById("form-status").textContent = "Message sent successfully!";
        document.getElementById("form-status").style.color = "green";
        this.reset();
    } else {
        document.getElementById("form-status").textContent = "Please fill out all fields.";
        document.getElementById("form-status").style.color = "red";
    }
});
