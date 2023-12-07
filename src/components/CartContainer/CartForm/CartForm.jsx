import { Error as ErrorComponent } from '../../Error/Error';

export const CartForm = ({
  formData,
  setFormData,
  handleOrder,
  error,
  msg,
}) => {
  return (
    <>
      <h2 className='text-gray-900 text-lg font-medium title-font mb-5'>
        Datos del comprador
      </h2>
      <div className='relative mb-4'>
        {error && (
          <ErrorComponent>
            <p>{msg}.</p>
          </ErrorComponent>
        )}

        <label htmlFor='full-name' className='leading-7 text-sm text-gray-600'>
          Nombre
        </label>
        <input
          type='text'
          id='full-name'
          name='full-name'
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        />
      </div>
      <div className='relative mb-4'>
        <label htmlFor='phone' className='leading-7 text-sm text-gray-600'>
          Telefono
        </label>
        <input
          type='text'
          id='phone'
          name='phone'
          value={formData.phone}
          onChange={e => setFormData({ ...formData, phone: e.target.value })}
          className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        />
      </div>
      <div className='relative mb-4'>
        <label htmlFor='email' className='leading-7 text-sm text-gray-600'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        />
      </div>
      <div className='relative mb-4'>
        <label
          htmlFor='email-repeat'
          className='leading-7 text-sm text-gray-600'
        >
          Repetir Email
        </label>
        <input
          type='email'
          id='email-repeat'
          name='email-repeat'
          value={formData.emailRepeat}
          onChange={e =>
            setFormData({ ...formData, repeatEmail: e.target.value })
          }
          className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        />
      </div>

      <button
        onClick={handleOrder}
        className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
      >
        Terminar la compra
      </button>
      <p className='text-xs text-gray-500 mt-3'>
        Si no desea terminar la compra, puede volver al carrito
      </p>
    </>
  );
};
