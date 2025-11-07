

//For the home page Second section

// document.addEventListener('DOMContentLoaded', () => {
//   const container = document.getElementById('cards-container');

// fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
//   .then(res => res.json())
//   .then(data => {
//     data.forEach(post => {
//       const card = document.createElement('div');
//       card.className = 'card';
//       card.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
//       container.appendChild(card); 
//     });
//   })
//   .catch(err => console.error(err));
// });


document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('cards-container');

  fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(res => res.json())
    .then(data => {
      data.forEach((post, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = `${index * 0.2}s`; // adds delay per card
        card.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        container.appendChild(card);
      });
    })
    .catch(err => console.error(err));
});