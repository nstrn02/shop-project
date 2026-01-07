import{cart, addtocart} from './cart.js';
import { products } from './products.js';

/*const getProducts = async () => {
  try {
    const res = await fetch('/assets/products.json');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}*/

let productsHTML = '';

/*getProducts();*/


products.forEach((product) => {
  productsHTML = productsHTML + `
    <div class="product-container">
      <a href="/product/index.html?id=${product.id}" class="product-link">
        <div class="product-image-container">
          <img class="product-image" src="${product.Image}">
        </div>

        <div class="product-name">
          ${product.name}
        </div></a>

        <div class="product-spacer"></div>


        <div class="product-price">
          ${product.price}  تومان 
        </div>

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

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="/images/checkmark.png">
          اضافه شد
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
          افزودن به سبد خرید
        </button>
    </div>
  `;
});

updateCartQuantity();

function updateCartQuantity(){
  
  let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

document.querySelector('.js-products-grid').innerHTML = productsHTML

/*document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
       const productId = button.dataset.productId;

       addtocart(productId);

       updateCartQuantity()

    });
  });*/


document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      
      const quantitySelector =
        button.closest('.product-container')
          .querySelector('.js-quantity-selector');

      const quantity = Number(quantitySelector.value);

      addtocart(productId, quantity);
      updateCartQuantity();
    });
  });

  

