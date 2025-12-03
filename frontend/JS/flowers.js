document.addEventListener("DOMContentLoaded", () => {
  const flowersContainer = document.querySelector(".flowers-container");
  const searchInput = document.getElementById("searchInput");
  let allFlowers = [];

  // Fetch flowers from API
  fetch('https://jsonplaceholder.typicode.com/posts?') // Replace with your real flowers API
    .then(res => res.json())
    .then(data => {
      // Convert API data to flower format
      allFlowers = data.map(item => ({
        name: item.title,
        desc: item.body,
        img: `https://picsum.photos/200/150?random=${item.id}` // placeholder image
      }));
      renderFlowers(allFlowers);
    })
    .catch(err => console.error(err));

  // Render flowers
function renderFlowers(list) {
  flowersContainer.innerHTML = "";
  list.forEach(flower => {
    const card = document.createElement("div");
    card.className = "flower-card";
    card.innerHTML = `
      <img src="${flower.img}" alt="${flower.name}">
      <h3>${flower.name}</h3>
      <p>${flower.desc.substring(0, 50)}...</p>  <!-- short preview -->
      <button class="details-btn">Details</button>
    `;
    
    // Handle "See More" click
    card.querySelector(".details-btn").addEventListener("click", () => {
      // Save flower data in localStorage to pass to details page
      localStorage.setItem("flowerDetails", JSON.stringify(flower));
      window.location.href = "flower-details.html";  // navigate to details page
    });

    flowersContainer.appendChild(card);
  });
}

  // Search functionality
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = allFlowers.filter(flower =>
      flower.name.toLowerCase().includes(query)
    );
    renderFlowers(filtered);
  });
});




