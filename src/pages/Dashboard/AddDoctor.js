import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';


const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageStorageKey = '9e98cb0a52482e9dbd82bcbab49e2fc7';

    const { data: services, isLoading } = useQuery('doctorServices', () => fetch('http://localhost:5000/services').then(res => res.json()))

    const onSubmit = async (data) => {
        const formData = new FormData();
        const image = data.image[0];
        formData.append('avatar', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='py-5 lg:pt-0 text-2xl text-center font-semibold'>Add a new doctor</h2>
            <div className='w-full md:w-9/12 lg:w-8/12 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full pb-1">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name" className="input input-bordered w-full"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                },
                                minLength: {
                                    value: 3,
                                    message: 'Name must be 3 characters or longer.'
                                }
                            })}
                            aria-invalid={errors.name ? "true" : "false"} />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.name.message}</span>}
                            {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-600 font-semibold">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full pb-1">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email" className="input input-bordered w-full"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email address.'
                                }
                            })}
                            aria-invalid={errors.mail ? "true" : "false"} />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600 font-semibold">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full pb-3">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Specialty</span>
                        </label>

                        <select
                            {...register("specialty", {
                                required: {
                                    value: true,
                                    message: 'Doctor specialty is Required'
                                }
                            })}
                            className="select select-bordered w-full"
                            aria-invalid={errors.specialty ? "true" : "false"}>
                            <option disabled selected>Select Doctor Specialty.</option>
                            {
                                services.map(service => <option
                                    key={service._id}
                                    value={service.name}>{service.name}</option>)
                            }
                        </select>
                        <label className="label">
                            {errors.specialty?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.specialty.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full pb-1">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Update Profile Picture</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full"
                            {...register("photo", {
                                required: {
                                    value: true,
                                    message: 'Profile Picture is Required'
                                }
                            })}
                            aria-invalid={errors.photo ? "true" : "false"} />
                        <label className="label">
                            {errors.photo?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.photo.message}</span>}
                        </label>
                    </div>
                    <div className='form-control w-full mt-7'>
                        <input type="submit" value='Add Doctor' className='btn bg-gradient-to-r from-secondary to-primary border-0 text-white font-bold capitalize text-lg' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;