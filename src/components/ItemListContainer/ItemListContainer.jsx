import { useEffect, useState } from 'react';
import { mFetch } from './../helpers/mFetch';
import { Link, useParams } from 'react-router-dom';

import { ItemList } from '../ItemDetailContainer/ItemList/ItemList';

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
      <h2 className='text-center'>{greeting}</h2>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
