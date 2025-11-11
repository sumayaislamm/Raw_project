
// Section-03 Cards 

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.cards-container');

  fetch('https://jsonplaceholder.typicode.com/posts?_limit=8')
    .then(res => res.json())
    .then(data => {
      data.forEach((post, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <button class="card-btn">Read More</button>
        `;
        container.appendChild(card);
      });

      // Scroll-trigger animation
      const cards = document.querySelectorAll('.card');
      const showCardsOnScroll = () => {
        cards.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          if (rect.top < window.innerHeight - 50) {  // card visible
            setTimeout(() => card.classList.add('show'), index * 200); // stagger
          }
        });
      };

      window.addEventListener('scroll', showCardsOnScroll);
      showCardsOnScroll(); // check once on load in case section is already visible
    })
    .catch(err => console.error(err));
});

// Section-04 Video animation

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.logo-cards-container');

  // Example card data
  const cardsData = [
    { title: "Solar Panel Design", body: "Custom solar panel solutions for any rooftop or ground installation." },
    { title: "Energy Storage", body: "Reliable battery storage systems to maximize efficiency and uptime." },
    { title: "Installation Services", body: "Professional installation with safety and quality standards." },
    { title: "Maintenance & Support", body: "Ongoing maintenance and monitoring to keep your system performing." }
  ];

  cardsData.forEach((post, index) => {
    const card = document.createElement('div');
    card.className = 'logo_card';
    card.style.transitionDelay = `${index * 0.2}s`;
    card.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;
    container.appendChild(card);
  });

  // Scroll-trigger animation
  const cards = document.querySelectorAll('.logo_card');
  const showCards = () => {
    cards.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) card.classList.add('show');
    });
  };
  window.addEventListener('scroll', showCards);
  showCards(); // run once on load
});


// FAQ Section 

document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      // Close other items
      faqItems.forEach(i => {
        if (i !== item) i.classList.remove('active');
      });

      // Toggle current item
      item.classList.toggle('active');
    });
  });
});