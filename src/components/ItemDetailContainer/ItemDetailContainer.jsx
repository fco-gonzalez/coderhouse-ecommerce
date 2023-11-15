import { useEffect, useState } from 'react';
import { mFetch } from '../helpers/mFetch';
import { useNavigate, useParams } from 'react-router-dom';
import { ItemCounter } from '../ItemCounter/ItemCounter';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    mFetch(itemId)
      .then(res => {
        setProduct(res.filter(product => product.id === itemId)[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }, [itemId]);

  return (
    <>
      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"> */}
            <img
              alt='ecommerce'
              className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
              src={'/images/' + product.image}
            />
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 className='text-sm title-font text-gray-500 tracking-widest'>
                {product.category}
              </h2>
              <h1 className='text-gray-900 text-3xl title-font font-medium mb-4'>
                {product.name}
              </h1>

              <p className='leading-relaxed'>{product.description}</p>
              <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'>
                <div className='flex'>
                  <span className='mr-3'>Color</span>
                  <button className='border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none'></button>
                  <button className='border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none'></button>
                  <button className='border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none'></button>
                </div>
                <div className='flex ml-6 items-center'>
                  <span className='mr-3'>Size</span>
                  <div className='relative'>
                    <select className='rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10'>
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className='absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-4 h-4'
                        viewBox='0 0 24 24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex mb-4'>
                <span className='ms-3 title-font font-medium text-2xl text-gray-900 mt-2'>
                  ${product.price}
                </span>
              </div>
              <div className='flex mb-4'>
                <ItemCounter stock={product.stock} />
              </div>
              <div className='flex'>
                <button
                  className='mx-2 w-full text-white bg-red-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-800 rounded'
                  onClick={() => navigate(-1)}
                >
                  Volver
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
