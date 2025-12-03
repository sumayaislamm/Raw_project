document.addEventListener("DOMContentLoaded", () => {
  const flowerData = JSON.parse(localStorage.getItem("flowerDetails"));

  if (!flowerData) {
    window.location.href = "flowers.html"; // fallback
    return;
  }

  document.getElementById("flowerImg").src = flowerData.img;
  document.getElementById("flowerName").textContent = flowerData.name;
  document.getElementById("flowerDesc").textContent = flowerData.desc;
});
