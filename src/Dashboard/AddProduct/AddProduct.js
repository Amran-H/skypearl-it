import { useQuery } from '@tanstack/react-query';
import { Result } from 'postcss';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const { data: categoryId, isLoading } = useQuery({
        queryKey: ['categoryId'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoriesId');
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = data => {
        console.log(data);
        const product = {
            category_id: data.category_id,
            email: user?.email,
            name: data.name,
            location: data.location,
            resale_price: data.resale_price,
            img: data.img,
            condition: data.condition,
            phone: data.phone,
            purchaseYear: data.purchaseYear,
        }
        console.log(product);
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${data.name} is successfully added!`)
                navigate('/dashboard/myproducts')
            })
    }

    if (isLoading) {
        return <progress className="progress w-56"></progress>
    }

    return (
        <div className=' p-7'>
            <h3 className="text-3xl font-bold p-4">Add A Product</h3>

            <form className='w-full  bg-green-300 rounded-xl' onSubmit={handleSubmit(handleAddProduct)} >

                <div className=' grid lg:grid-cols-2 pl-16'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product name</span></label>
                        <input type="text"
                            {...register("name", {
                                required: "Name is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors?.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Price</span></label>
                        <input type="text"
                            {...register("resale_price", {
                                required: "price is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.resale_price && <p className='text-red-600'>{errors?.resale_price?.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Mobile Number</span></label>
                        <input type="text"
                            {...register("phone", {
                                required: 'Number is required'
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.phone && <p className='text-red-600'>{errors?.phone?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs ">
                        <label className="label"> <span className="label-text">Condition</span></label>
                        <select
                            {...register("condition", { required: true })}
                            className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Select a condition</option>
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>
                        {errors?.condition && <p className='text-red-600'>{errors?.condition?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text"
                            {...register("location", {
                                required: 'location is required'
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.location && <p className='text-red-600'>{errors?.location?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs ">
                        <label className="label"> <span className="label-text">Choose Category Id</span></label>
                        <select
                            className="select select-bordered w-full max-w-xs"
                            {...register("category_id", {
                                required: 'category id is required'
                            })}
                        >
                            <option disabled selected>01-Acer | 02-HP | 03-Dell</option>
                            {
                                categoryId.map(categoryId => <option
                                    key={categoryId?._id}
                                    value={categoryId?.id}
                                >{categoryId?.id}</option>)
                            }
                        </select>
                        <p className='text-red-600'>Please remember to choose category Id</p>
                        {errors.category_id && <p className='text-red-600'>{errors?.category_id?.message}</p>}
                    </div>



                    <div className="form-control w-full max-w-xs mb-6">
                        <label className="label"> <span className="label-text">Purchase Year</span></label>
                        <input type="text"
                            {...register("purchaseYear", {
                                required: 'purchaseYear is required'
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.purchaseYear && <p className='text-red-600'>{errors?.purchaseYear?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo Url</span></label>
                        <input type="text"
                            {...register("img")}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <input className='btn w-full my-4  ' value="Add Product" type="submit" />
            </form>

        </div>
    );
};

export default AddProduct;