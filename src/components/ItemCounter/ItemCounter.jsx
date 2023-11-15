import { useCounter } from '../hooks/useCounter';

export const ItemCounter = ({ initial = 1, stock = 5, onAdd }) => {
  // TODO: Implementar el contador de items
  const { counter, increment, decrement } = useCounter(initial, stock);

  //   const addToCart = () => {
  //     onAdd(counter);
  //   };

  return (
    <div className='m-2'>
      <input
        type='button'
        className='mx-2 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-800 rounded'
        value='-'
        onClick={decrement}
      />
      <span className='mx-3 font-bold text-xl'>{counter}</span>
      <input
        className='mx-2 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-800 rounded'
        type='button'
        value='+'
        onClick={increment}
      />
      <input
        className='mx-2 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-800 rounded'
        type='button'
        value='Agregar al carrito'
        onClick={() => {
          console.log('Agregar al carrito');
        }}
      />
    </div>
  );
};
