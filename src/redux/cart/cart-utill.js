export const addItemToCart =(cartItems, cartItemToAdd) =>{
  const exitstingCartItem = cartItems.find(
    cartItem=>cartItem.id ===cartItemToAdd.id
  )
if(exitstingCartItem) {
  return cartItems.map(cartItem=>
  cartItem.id ===cartItemToAdd.id ?
  {...cartItem, quantty:cartItem.quantty +1} :
  cartItem)
}
return [...cartItems, {...cartItemToAdd, quantty:1}];
};

export const removeItemFromCart =(cartItems, cartItemToRemove)=>{
  const exitstingCartItem=cartItems.find(cartItem=>cartItem.id===cartItemToRemove.id);

  if(exitstingCartItem.quantty ===1){
    return cartItems.filter(cartItem =>cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem=>
  cartItem.id ===cartItemToRemove.id?
  {...cartItem, quantty:cartItem.quantty -1}
  :cartItem);
}