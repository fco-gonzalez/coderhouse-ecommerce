import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  //Estados y funciones que vamos a compartir
  const [cartList, setCartList] = useState([]);

  const addProduct = (product, quantity) => {
    const newProduct = { product, quantity };
    setCartList([...cartList, newProduct]);
  };

  const vaciarCarrito = () => {
    setCartList([]);
  };

  const cantidadDeProductos = () => {
    return cartList.reduce((acc, product) => acc + product.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addProduct,
        vaciarCarrito,
        cantidadDeProductos,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
