import React from 'react';
import { useForm } from 'react-hook-form';
const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();    

    const onSubmit = async data => {
        console.log(' data', data);
        const url = `http://localhost:5000/item`;
         fetch(url, {
             method:'POST',
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify(data)
         })
         .then(res => res.json())
         .then(result =>{

             alert("Your item added successfully");
         })
        
    }
    return (
        <div>
            <h2 className='text-3xl'>Add a product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Item image</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Photo URL"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is Required'
                            }
                        })}
                    />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Item name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'name is Required'
                            },
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">per unit price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="per unit price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("perUnitPrice", {
                            required: {
                                value: true,
                                message: 'price is Required'
                            },
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum order quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Minimum order quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minimumOrderQuantity", {
                            required: {
                                value: true,
                                message: 'price is Required'
                            },
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available quantity
</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Available quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("availableQuantity", {
                            required: {
                                value: true,
                                message: 'price is Required'
                            },
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'description is Required'
                            },
                        })}
                    />
                </div>
                <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Add product" />
            </form>

        </div>
    );
};

export default AddProduct;


