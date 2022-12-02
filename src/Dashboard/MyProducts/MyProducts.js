import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import ProductCard from '../../Pages/Products/ProductCard';
import MyProductsCard from './MyProductsCard';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const url = `https://skypearl-it-server.vercel.app/myproducts?email=${user?.email}`

    const { data: myproducts = [] } = useQuery({
        queryKey: ['myproducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <h3 className="text-3xl p-4 font-bold">My Products</h3>

            <div className='grid ml-6 gap-6 lg:grid-cols-3 md:grid-cols-2 
            sm:grid-cols-1 '>
                {
                    myproducts?.map(product => <MyProductsCard
                        key={product?._id}
                        product={product}
                    >
                    </MyProductsCard>)
                }
            </div>

        </div>
    );
};

export default MyProducts;