function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  elements.forEach(el => {
    const file = el.getAttribute('data-include');
    if (file) {
      fetch(file)
        .then(response => response.text())
        .then(data => {
          el.innerHTML = data;
        })
        .catch(err => {
          el.innerHTML = "Error loading " + file;
          console.error(err);
        });
    }
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);


