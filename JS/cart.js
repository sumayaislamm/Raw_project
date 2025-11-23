// Dummy cart items
let cartItems = [
  { id: 1, name: "Pink Rose Bouquet", price: 25, img: "https://i.ibb.co/wwj29DG/rose.jpg" },
  { id: 2, name: "Floral Scented Candle", price: 15, img: "https://i.ibb.co/SffV9CR/candle.jpg" },
  { id: 3, name: "Orchid Arrangement", price: 30, img: "https://i.ibb.co/XYZ/orchid.jpg" }
];

const container = document.querySelector(".cart-items-container");
const totalItemsEl = document.getElementById("totalItems");
const totalPriceEl = document.getElementById("totalPrice");
const checkoutBtn = document.getElementById("checkoutBtn");

// Render cart items
function renderCart() {
  container.innerHTML = "";

  if(cartItems.length === 0) {
    container.innerHTML = `<p style="text-align:center; color:#999;">Your cart is empty!</p>`;
    checkoutBtn.disabled = true;
    checkoutBtn.style.opacity = 0.5;
    return;
  } else {
    checkoutBtn.disabled = false;
    checkoutBtn.style.opacity = 1;
  }

  let totalItems = 0;
  let totalPrice = 0;

  cartItems.forEach((item, index) => {
    totalItems++;
    totalPrice += item.price;

    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-info">
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
      </div>
      <button class="remove-btn">Remove</button>
    `;

    // Remove functionality
    div.querySelector(".remove-btn").addEventListener("click", () => {
      cartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
      renderCart();
    });

    container.appendChild(div);
  });

  totalItemsEl.textContent = totalItems;
  totalPriceEl.textContent = totalPrice;
}

// Checkout button click
checkoutBtn.addEventListener("click", () => {
  if(cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert(`Proceeding to checkout. Total: $${cartItems.reduce((sum, item) => sum + item.price, 0)}`);
  // You can redirect to payment page
  // window.location.href = "checkout.html";
});

// Initial render
renderCart();
