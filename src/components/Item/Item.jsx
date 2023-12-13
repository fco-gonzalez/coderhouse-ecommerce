import { memo } from 'react';
import { Link, useParams } from 'react-router-dom';

export const Item = memo(({ product }) => {
  return (
    <>
      <div className='p-3 m-3 max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-200'>
        <img
          src={'/images/' + product.image}
          alt=''
          className='object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500'
        />
        <div className='flex flex-col justify-between p-6 space-y-8'>
          <div className='space-y-2'>
            <h4 className='text-2xl font-semibold tracki'>{product.name}</h4>
            <p className='dark:text-gray-100'>${product.price}</p>
          </div>
          <Link to={`/detail/${product.id}`}>
            <button className='w-full bg-indigo-500 focus:outline-none hover:bg-indigo-800 text-white py-2 px-4 rounded'>
              Detalle
            </button>
          </Link>
        </div>
      </div>
    </>
  );
});
