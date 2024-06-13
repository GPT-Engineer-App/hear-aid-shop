import React from 'react';

const products = [
  { id: 1, name: 'Hearing Aid Model A', description: 'High quality hearing aid', price: '$299' },
  { id: 2, name: 'Hearing Aid Model B', description: 'Affordable and reliable', price: '$199' },
  { id: 3, name: 'Hearing Aid Model C', description: 'Top of the line features', price: '$399' },
];

const ProductShowcase = () => {
  return (
    <section className="product-showcase py-20 bg-base-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p>{product.description}</p>
                <p className="text-xl font-semibold">{product.price}</p>
                <button className="btn mt-4" style={{ backgroundColor: '#e11e27' }}>BUY NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;