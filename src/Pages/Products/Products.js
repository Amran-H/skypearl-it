import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData();
    return (
        <div>
            This category has {products.length} laptops
            <div className='grid lg:grid-cols-3 md:grid-cols-2 
            sm:grid-cols-1 '>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    >
                    </ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;