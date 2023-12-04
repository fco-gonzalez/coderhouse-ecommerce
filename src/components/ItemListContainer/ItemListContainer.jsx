import { useEffect, useState } from 'react';
import { mFetch } from './../helpers/mFetch';
import { Link, useParams } from 'react-router-dom';
import { ItemList } from '../ItemDetailContainer/ItemList/ItemList';
import {
  Firestore,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  const [loading, setLoading] = useState(true);

  //console.log(categoryId);

  // useEffect(() => {
  //   if (categoryId) {
  //     mFetch()
  //       .then(res => {
  //         setProducts(res.filter(product => product.category === categoryId));
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   } else {
  //     mFetch()
  //       .then(res => {
  //         setProducts(res);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   }
  // }, [categoryId]);

  //recupera el documento con el id I2R8qaBNh3QYFdDPCgkD
  // useEffect(() => {
  //   const dbFirestore = getFirestore();
  //   const queryDoc = doc(dbFirestore, 'products', 'I2R8qaBNh3QYFdDPCgkD');
  //   getDoc(queryDoc)
  //     .then(res => {
  //       console.log(res.data());
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }),
  //   [];

  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryCollection = collection(dbFirestore, 'products');
    // Como filtrar solo si categoryId existe
    const queryFilter = categoryId
      ? query(queryCollection, where('category', '==', categoryId))
      : queryCollection;

    console.log('queryFilter');

    getDocs(queryFilter) // Cambiado de queryCollection a queryFilter
      .then(res => {
        setProducts(res.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <>
      <h2 className='text-center'>{greeting}</h2>
      {loading ? (
        <div className='absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 '>
          <div className='border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64'></div>
          <div className='text-center'>Cargando...</div>
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

export default ItemListContainer;
