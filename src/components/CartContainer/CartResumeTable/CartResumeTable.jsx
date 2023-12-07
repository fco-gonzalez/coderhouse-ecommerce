import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';

function CartList() {
  const { cartList, eliminarProducto, precioTotal } = useContext(CartContext);

  const eliminarProductoConfirmar = id => {
    if (window.confirm('¿Estás seguro que deseas eliminar el producto?')) {
      eliminarProducto(id);
    }
  };

  return (
    <table className='table-auto w-full text-left whitespace-no-wrap'>
      <thead>
        <tr>
          <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>
            {' '}
          </th>
          <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
            Producto
          </th>
          <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
            Precio
          </th>
          <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
            Cantidad
          </th>
          <th className='w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br'></th>
        </tr>
      </thead>
      <tbody>
        {cartList.map((product, index) => (
          <tr key={index}>
            <td className='px-4 py-3'>
              <img
                alt='ecommerce'
                className='w-16 lg:h-auto h-64 object-cover object-center rounded-full'
                src={'/images/' + product.product.image}
              />
            </td>
            <td className='px-4 py-3'>{product.product.name}</td>
            <td className='px-4 py-3'>{product.product.price}</td>
            <td className='px-4 py-3 text-lg text-gray-900'>
              {product.quantity}
            </td>
            <td className='w-10 text-center'>
              <button
                onClick={() => eliminarProductoConfirmar(product.product.id)}
                className='relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
                type='button'
              >
                <span className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                  X
                </span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className=''>
          <td
            colSpan='4'
            className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'
          >
            Total
          </td>
          <td className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>
            ${precioTotal()}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default CartList;
