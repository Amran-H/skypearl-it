import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div>

            <div className="card bg-red-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={product?.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title justify-center">{product?.name}</h2>
                    <div className='font-bold my-4'>
                        <p>Location: {product?.location}</p>
                        <p>Resale Price: <span className='text-orange-600 '>{product?.resale_price} </span>tk</p>
                        <p>Original price: {product?.original_price} tk</p>
                        <p>Used: <span className='text-orange-600 '>{product?.time_used}</span> years</p>
                        <p>Added on: {product?.post_time}</p>
                        <p>Seller name: {product?.seller_name}</p>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ProductCard;