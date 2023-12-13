import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import CartResumeTable from './CartResumeTable/CartResumeTable';
import { CartForm } from './CartForm/CartForm';
import { Error } from '../Error/Error';
import { Link } from 'react-router-dom';

function CartContainer() {
  const { cartList, deleteProduct, totalPrice, emptyCart } =
    useContext(CartContext);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    repeatEmail: '',
  });

  const [error, setError] = useState(false);
  const [msg, setMsg] = useState('');
  const [isId, setIsId] = useState('');

  const handleOrder = e => {
    e.preventDefault();

    if (cartList.length === 0) {
      setError(true);
      setMsg('No hay productos en el carrito');
      return;
    }

    if (
      [
        formData.name,
        formData.email,
        formData.repeatEmail,
        formData.phone,
      ].includes('')
    ) {
      setError(true);
      setMsg('Todos los campos son obligatorios');
      return;
    }

    if (
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(formData.email)
    ) {
      setError(true);
      setMsg('El email no es válido');
      return;
    }

    if (formData.email !== formData.repeatEmail) {
      setError(true);
      setMsg('Los emails no coinciden');
      return;
    }

    const order = {};
    order.buyer = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
    };

    order.items = cartList.map(product => ({
      id: product.product.id,
      title: product.product.name,
      price: product.product.price,
      quantity: product.quantity,
      image: product.product.image,
    }));
    order.total = totalPrice(); // Corregir el nombre de la función

    // console.log(order);

    // create;
    const db = getFirestore();
    const orderCollection = collection(db, 'orders');
    // agregar validaciones
    addDoc(orderCollection, order)
      .then(resp => setIsId(resp.id))
      .catch(err => console.log(err))
      .finally(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          repeatEmail: '',
        });
        setError(false);
        setMsg('');
        emptyCart();
      });
  };

  return (
    <>
      {isId !== '' && (
        <div className='text-center'>
          <h1 className='text-4xl mx-auto font-bold'>
            ¡Gracias por tu compra!
          </h1>
          <p className='text-2xl mx-auto font-bold'>
            Tu número de orden es: {isId}
          </p>
          <Link to='/'>
            <button className='mx-2  text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-800 rounded'>
              Volver al inicio
            </button>
          </Link>
        </div>
      )}

      {cartList.length === 0 && isId === '' && (
        <div className='text-center'>
          <h1 className='text-4xl mx-auto font-bold'>
            No hay productos en el carrito
          </h1>
          <Link to='/'>
            <button className='mx-2  text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-800 rounded'>
              Volver al inicio
            </button>
          </Link>
        </div>
      )}

      {cartList.length !== 0 && (
        <section className='text-gray-600 body-font'>
          <div className='container px-5 py-2 mx-auto flex flex-wrap items-center'>
            <div className='lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0'>
              <div className='flex flex-col text-center w-full mb-20'>
                <h1 className='sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900'>
                  Carrito
                </h1>
                <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                  Revisa los productos que agregaste al carrito
                </p>
              </div>
              <div className='lg:w-2/3 w-full mx-auto overflow-auto'>
                <CartResumeTable />
              </div>
            </div>
            <div className='lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
              <CartForm
                formData={formData}
                setFormData={setFormData}
                handleOrder={handleOrder}
                error={error}
                msg={msg}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default CartContainer;
