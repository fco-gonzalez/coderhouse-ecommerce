import { useEffect, useState } from 'react';
import { mFetch } from './../helpers/mFetch';
import { Link, useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      mFetch()
        .then(res => {
          setProducts(res.filter(product => product.category === categoryId));
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      mFetch()
        .then(res => {
          setProducts(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [categoryId]);

  return (
    <>
      <h2>{greeting}</h2>

      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {products.map(product => (
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemListContainer;
