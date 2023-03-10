import React from 'react';

const MyProductsCard = ({ product }) => {
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
                        <p>Condition: {product?.condition} tk</p>
                        <p>Phone: {product?.phone}</p>
                        <p>Purchase Year: {product?.purchaseYear}</p>
                    </div>
                    <div className="card-actions justify-center">

                        <label
                            htmlFor="booking-modal"
                            className="btn btn-primary"

                        >Delete</label>
                        <button className="btn btn-primary" >Advertise</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default MyProductsCard;