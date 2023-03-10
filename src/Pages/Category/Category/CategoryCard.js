import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    return (
        <div className="card  bg-slate-300 shadow-xl">
            <figure><img className='mt-4' src={category.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{category.name}</h2>
                <p>{category.description}</p>
                <div className="card-actions justify-around">
                    <Link to={`/category/${category.id}`} className="btn btn-primary ">
                        See all laptops</Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;