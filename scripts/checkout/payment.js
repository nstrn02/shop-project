import {cart} from '../../scripts/cart.js'
import { getProduct, products } from '../../scripts/products.js';


export function renderPaymentSummery(){
  let productPrice = 0;

  cart.forEach(cartItem => {
   const product = getProduct(cartItem.productId)
   productPrice += product.price * cartItem.quantity
   
  });
  const paymentHTML = `
    <div class="payment-summary-title">جمع کل</div>

    <div class="payment-summary-row">
      <div>مجموع قیمت محصولات:</div>
      <div class="payment-summary-money">${productPrice}  تومان </div>
    </div>

    <button class="place-order-button button-primary">ادامه خرید</button>
`;

document.querySelector('.js-payment-summery').innerHTML = paymentHTML;
}


