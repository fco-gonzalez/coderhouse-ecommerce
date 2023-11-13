const products = [
    { id: '1', name: 'Product 1', category: 'Category 1', price: 100, stock: 10, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', image: 'https://picsum.photos/200/300' },
    { id: '2', name: 'Product 2', category: 'Category 2', price: 200, stock: 20, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', image: 'https://picsum.photos/200/300' },
    { id: '3', name: 'Product 3', category: 'Category 3', price: 300, stock: 30, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', image: 'https://picsum.photos/200/300' },
    { id: '4', name: 'Product 4', category: 'Category 4', price: 400, stock: 40, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', image: 'https://picsum.photos/200/300' },
    { id: '5', name: 'Product 5', category: 'Category 5', price: 500, stock: 50, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', image: 'https://picsum.photos/200/300' },
    { id: '6', name: 'Product 6', category: 'Category 6', price: 600, stock: 60, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', image: 'https://picsum.photos/200/300' },
    { id: '7', name: 'Product 7', category: 'Category 7', price: 700, stock: 70, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', image: 'https://picsum.photos/200/300' },
    { id: '8', name: 'Product 8', category: 'Category 8', price: 800, stock: 80, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', image: 'https://picsum.photos/200/300' },
    { id: '9', name: 'Product 9', category: 'Category 9', price: 900, stock: 90, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', image: 'https://picsum.photos/200/300' },
    { id: '10', name: 'Product 10', category: 'Category 10', price: 900, stock: 90, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', image: 'https://picsum.photos/200/300' },
];

export const mFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout((id) => {
            resolve(products);
        }, 3000);
    });
}

