


document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.cards-container');

  fetch('https://jsonplaceholder.typicode.com/posts?_limit=8')
    .then(res => res.json())
    .then(data => {
      data.forEach((post, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = `${index * 0.2}s`; // adds delay per card
        card.innerHTML = 
        `<h3>${post.title}</h3>
        <p>${post.body}</p>
        <button class="card-btn">Read More</button>`;
        container.appendChild(card);
      });
    })
    .catch(err => console.error(err));
});