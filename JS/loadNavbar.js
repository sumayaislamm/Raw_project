
document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.querySelector("header").innerHTML = data;
    })
    .catch(err => console.error("Error loading navbar:", err));
});
