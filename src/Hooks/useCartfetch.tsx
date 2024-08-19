import { useEffect, useState } from "react";

const UseCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    // Retrieve cart data from localStorage
    const cartData = JSON.parse(localStorage.getItem("Cart") || "[]");
    setCart(cartData);
    // Generate columns automatically if data exists
   
  }, []);
  const saveCartToLocalStorage = (updatedCart: any) => {
    localStorage.setItem("Cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };
  const increaseQuantity = (productId: any) => {
    const updateCart = cart.map((itm: any) => {
      if (itm.id === productId) {
        return { ...itm, quantity: itm.quantity + 1 };
      }
      return itm
    });
    saveCartToLocalStorage(updateCart)
  };

const decreaseQuantity =(productId:any)=>{
const updateCart = cart.map((item:any)=>{
if(item.id===productId){
  return{...item,quantity:Math.max(item.quantity-1,1)}
}

return item
})
saveCartToLocalStorage(updateCart)
}
const deleteProduct =(productId:any)=>{
const updateCart = cart.filter((item:any)=>item.id!==productId);
saveCartToLocalStorage(updateCart)
}
const clearCart = () => {
  // Clear the entire cart
  localStorage.setItem("Cart", JSON.stringify([]));
  setCart([]);
};
  return { cart,increaseQuantity,decreaseQuantity,deleteProduct,clearCart };
};
export default UseCart;
