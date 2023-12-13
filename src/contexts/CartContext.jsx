import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  //Estados y funciones que vamos a compartir
  const [cartList, setCartList] = useState([]);

  const isInCart = id => {
    return cartList.some(product => product.product.id === id);
  };

  const addProduct = (product, quantity) => {
    if (isInCart(product.id)) {
      const newCartList = cartList.map(item => {
        if (item.product.id === product.id) {
          return { ...item, quantity: item.quantity + quantity };
        } else {
          return item;
        }
      });
      setCartList(newCartList);
      return;
    }

    const newProduct = { product, quantity };
    setCartList([...cartList, newProduct]);
  };

  const emptyCart = () => {
    setCartList([]);
  };

  const quantityOfProducts = () => {
    return cartList.reduce((acc, product) => acc + product.quantity, 0);
  };

  const totalPrice = () => {
    return cartList.reduce(
      (acc, product) => acc + product.quantity * product.product.price,
      0,
    );
  };

  const deleteProduct = id => {
    setCartList(cartList.filter(product => product.product.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addProduct,
        emptyCart,
        quantityOfProducts,
        totalPrice,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
