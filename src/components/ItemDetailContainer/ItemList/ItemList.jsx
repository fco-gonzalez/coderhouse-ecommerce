import { Item } from '../../Item/Item';

export const ItemList = ({ products }) => {
  return (
    <>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {products.map(product => (
              <Item key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
