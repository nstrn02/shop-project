const cart = {
  cartItem :[],

  localFromStorage(){
    this.cartItem = JSON.parse(localStorage.getItem('cart-oop'));

    if (!this.cartItem){
      this.cartItem =[{
        productId: '2525',
        quantity: 0
      }, {
        productId: '2526',
        quantity: 0
      }];
    }
  },
  
  saveToStorage(){
    localStorage.setItem('cart-oop', JSON.stringify(this.cartItem));
  },
  addtocart(productId, quantity) {
    let matchingItem;

    this.cartItem.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      this.cartItem.push({
        productId: productId,
        quantity: quantity
      });
    }
    this.saveToStorage();
  },
  
  removeFromCart(productId){
    const newCart = [];

    this.cartItem.forEach((cartItem) =>{
      if (cartItem.productId !== productId){
        newCart.push(cartItem)
      }
    });

    this.cartItem = newCart

    this.saveToStorage();
  }


};


cart.localFromStorage();














