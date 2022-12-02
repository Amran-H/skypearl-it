import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const MyBookings = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/orders?email=${user?.email}`

    const { data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <h3 className="text-3xl font-bold p-4">My Orders</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, i) => <tr
                                className='hover'
                                key={order._id}>
                                <th>{i + 1}</th>
                                <td>{order?.img}
                                    <div className="avatar">
                                        <div className="w-16 rounded-xl">
                                            <img src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                </td>
                                <td>{order?.buyer}</td>
                                <td>{order?.price} tk</td>
                                <td>Blue</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyBookings;