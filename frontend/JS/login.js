// Normal form login
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Logged in successfully!"); 
});

// Google login
document.getElementById("googleSignIn").addEventListener("click", function () {
    alert("Redirecting to Google Sign In...");

    // REAL GOOGLE AUTH (You will replace this later)
    window.location.href = "https://accounts.google.com/signin";
});
