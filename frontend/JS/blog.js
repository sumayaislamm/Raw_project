document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("blog-container");

  // Temporary API — replace later with your own JSON / database
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=18")
    .then(res => res.json())
    .then(data => {
      data.forEach((post, index) => {
        const card = document.createElement("div");
        card.classList.add("blog-card");

        card.innerHTML = `
          <img src="https://picsum.photos/seed/${index + 1}/500/300" alt="Blog Image">
          <div class="blog-content">
            <h3>${post.title.slice(0, 35)}...</h3>
            <p>${post.body.slice(0, 120)}...</p>
            <a class="read-more">Read More</a>
          </div>
        `;

        container.appendChild(card);

        // animation delay
        setTimeout(() => {
          card.classList.add("show");
        }, index * 200);
      });
    })
    .catch(err => console.log(err));
});
