import { useEffect, useState } from 'react';
import { mFetch } from './../helpers/mFetch';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    mFetch()
      .then(res => {
        setProducts(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(products);

  return (
    <>
      <h2>{greeting}</h2>

      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {products.map(product => (
              <div key={product.id} className='lg:w-1/4 md:w-1/2 p-4 w-full'>
                <a className='block relative h-48 rounded overflow-hidden'>
                  <img
                    alt='ecommerce'
                    className='object-cover object-center w-full h-full block'
                    src={product.image}
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
                  <p className=''>{product.description}</p>
                </div>

                <button className='flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-800 rounded'>
                  Detalle
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemListContainer;
