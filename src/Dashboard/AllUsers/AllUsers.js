import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Pages/Shared/ConfirmationModal/ConfirmationModal';

const AllUsers = () => {
    const [deletingUser, setDeletingUser] = useState(null);

    const closeModal = () => {
        setDeletingUser(null);
    }

    const handleDeleteUser = user => {
        fetch(`http://localhost:5000/users/${user?._id}`, {

            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('deleted successfully')
                    refetch();
                }
            })
    }

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Made Admin')
                    refetch();
                }
            })
    }

    return (
        <div>
            <h3 className="text-3xl font-bold p-4">All Users</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={users._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button
                                    onClick={() => handleMakeAdmin(user?._id)}
                                    className='btn btn-xs btn-primary'>
                                    Make Admin</button>}</td>

                                <label onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal" className="btn btn-xs btn-warning">Delete</label>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingUser && <ConfirmationModal
                    title={`Are you sure to delete`}
                    message={`Deleting ${deletingUser.name} cannot be undone`}
                    closeModal={closeModal}
                    modalData={deletingUser}
                    success={handleDeleteUser}
                    successBtnName='Delete'
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllUsers;