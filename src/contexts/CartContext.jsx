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

  const precionTotal = () => {
    return cartList.reduce(
      (acc, product) => acc + product.quantity * product.product.price,
      0,
    );
  };

  const eliminarProducto = id => {
    setCartList(cartList.filter(product => product.product.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addProduct,
        vaciarCarrito,
        cantidadDeProductos,
        precionTotal,
        eliminarProducto,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
