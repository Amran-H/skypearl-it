import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/UseAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">

                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-8 w-80 bg-purple-400 text-base-content">
                        <div className='pl-4'>
                            <h3 className="text-2xl font-bold "> Name: {user?.displayName}</h3>
                            <h3 className="text-1xl font-bold ">Email: {user?.email}</h3>
                        </div>

                        {
                            isBuyer && <>
                                <li><Link to='/dashboard'>My orders</Link></li>

                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                                <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                                <li><Link >My Buyers</Link></li>

                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link >All Sellers</Link></li>
                                <li><Link >All Buyers</Link></li>

                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;