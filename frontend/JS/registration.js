document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = document.querySelectorAll("input");
    const password = inputs[2].value;
    const confirmPassword = inputs[3].value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Registration successful!");
});

// Google Signup Button
document.getElementById("googleRegister").addEventListener("click", function () {
    alert("Redirecting to Google...");
    window.location.href = "https://accounts.google.com/signup";
});
