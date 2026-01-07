export let cart;
localFromStorage();

export function localFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'));

  if (!cart){
      cart =[{
      productId: '2525',
      quantity: 0
    }, {
      productId: '2526',
      quantity: 0
    }]
  }
}
//normalizing the data

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addtocart(productId, quantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId: productId,
      quantity: quantity
    });
  }
  saveToStorage();
}


export function removeFromCart(productId){
  const newCart = [];

  cart.forEach((cartItem) =>{
    if (cartItem.productId !== productId){
      newCart.push(cartItem)
    }
  });

  cart = newCart

  saveToStorage();
}



