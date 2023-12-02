import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

function CartContainer() {
  const { cartList } = useContext(CartContext);

  return (
    <>
      <h1>CartContainer...</h1>
      <ul>
        {cartList.length === 0 && <li>No hay productos en el carrito</li>}
        {cartList.map((product, index) => (
          <li key={index}>
            {product.product.name} - {product.quantity}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CartContainer;
