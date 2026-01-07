import { cart, removeFromCart } from "../cart.js";
import { products, getProduct } from "../products.js";
import { renderPaymentSummery } from "./payment.js";





export function renderOrderSummery(){
  let cartSummeryHTML = '';

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;


    const matchingProduct = getProduct(productId)

    
  cartSummeryHTML +=
  `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
      <div class="cart-item-details-grid">
        <img class="product-image" src="${matchingProduct.Image}">
        <div class="cart-item-details">
          <div class="product-name"> ${matchingProduct.name}</div>
          <div class="product-price">        ${matchingProduct.price}  تومان 
    </div>
          <div class="product-quantity">تعداد: <span class="quantity-label">${cartItem.quantity}</span></div>
          <button class="delete-item-btn js-delete-btn" data-product-id="${matchingProduct.id}" >حذف</button>
        </div>
      </div>
    </div>
  `;
  });

  document.querySelector('.js-order-summery').innerHTML = cartSummeryHTML;

  document.querySelectorAll('.js-delete-btn').
    forEach((btn) => {
      btn.addEventListener('click', ()=>{
        const productId = btn.dataset.productId;
        removeFromCart(productId);
        
        const container = document.querySelector(`.js-cart-item-container-${productId}`);

        container.remove();
        renderPaymentSummery();
    });
  });
}


