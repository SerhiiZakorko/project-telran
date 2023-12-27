function addToCart(product){
    let productsInCart = localStorage.getItem("productsInCart")
    ? JSON.parse(localStorage.getItem("productsInCart"))
    : [];
    if(! productsInCart.includes(product)){
     productsInCart.push({...product, quantity: 1});
    }
      localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
}
export default addToCart