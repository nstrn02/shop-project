import { products } from './products.js';
import { cart, addtocart } from './cart.js';

const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

const product = products.find(p => p.id === productId);

let productsHTML = `
  <div class="product-container">
   <img class="product-image" src="${product.Image}">
    <span class="product-name">${product.name}</span>
      <p class="product-description">${product.desc}</p>
  </div>
  
  
  <div class="buy-info">
      <div class="product-price">${product.price} تومان</div>

      <button class="add-to-cart js-add-to-cart" data-product-id="${product.id}">
        افزودن به سبد خرید
      </button>

      <div class="product-quantity-container">
          <select class="js-quantity-selector">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
          </select>
      </div>
  </div>
`;

document.querySelector('.js-eachproduct-page').innerHTML = productsHTML;

updateCartQuantity();

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

document.querySelector('.js-add-to-cart')
  .addEventListener('click', (button) => {

    const quantity = Number(document.querySelector('.js-quantity-selector').value);

    addtocart(product.id, quantity);
    updateCartQuantity();
  });