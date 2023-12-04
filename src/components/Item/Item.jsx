import { memo } from 'react';
import { Link, useParams } from 'react-router-dom';

export const Item = memo(({ product }) => {
  return (
    <div
      key={product.id}
      className='lg:w-1/4 md:w-1/2 m-4 p-4 w-full bg-opacity-50 bg-gray-100'
    >
      <a className='block relative h-48 rounded overflow-hidden'>
        <img
          alt='ecommerce'
          className='object-cover object-center w-full h-full block'
          src={'/images/' + product.image}
        />
      </a>
      <div className='mt-4'>
        <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
          CATEGORY
        </h3>
        <h2 className='text-gray-900 title-font text-lg font-medium'>
          {product.name}
        </h2>
        <p className='mt-1'>${product.price}</p>
        {/* <p className=''>{product.description}</p> */}
      </div>

      <Link to={`/detail/${product.id}`}>
        <button className='w-full bg-indigo-500 focus:outline-none hover:bg-indigo-800 text-white py-2 px-4 rounded'>
          Detalle
        </button>
      </Link>
    </div>
  );
});
