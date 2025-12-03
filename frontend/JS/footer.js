document.addEventListener('DOMContentLoaded', () => {
  fetch('footer.html')
    .then(res => res.text())
    .then(data => {
      document.querySelector('footer').innerHTML = data;
      
      // Optional: animation
      const footer = document.querySelector('.footer-section');
      if (footer) {
        footer.style.opacity = 0;
        footer.style.transform = 'translateY(50px)';
        setTimeout(() => {
          footer.style.transition = 'all 0.8s ease';
          footer.style.opacity = 1;
          footer.style.transform = 'translateY(0)';
        }, 100);
      }
    })
    .catch(err => console.error(err));
});
