import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Product/BookingModal/BookingModal';
import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData();
    const [laptop, setLaptop] = useState(null);
    return (
        <div>
            This category has {products.length} laptops
            <div className='grid  gap-6 lg:grid-cols-3 md:grid-cols-2 
            sm:grid-cols-1 '>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        setLaptop={setLaptop}
                    >
                    </ProductCard>)
                }
            </div>
            {
                laptop &&
                <BookingModal
                    laptop={laptop}
                    setLaptop={setLaptop}
                ></BookingModal>
            }
        </div>
    );
};

export default Products;