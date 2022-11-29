import { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h3 className="text-4xl font-bold text-center my-14">Laptop Categories</h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    categories?.map(category => <CategoryCard
                        key={category.id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;