import React from 'react';
import { useForm } from 'react-hook-form';
const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();  

    const onSubmit = async data => {
        console.log(' data', data);
        const url = `http://localhost:5000/review`;
         fetch(url, {
             method:'POST',
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify(data)
         })
         .then(res => res.json())
         .then(result =>{

             alert("Your review added successfully");
         })
        
    }

    return (
        <div>
            <h2 className='text-3xl'>Add a review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Name</span>
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
                        <span className="label-text">Comment</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Comment"
                        className="input input-bordered w-full max-w-xs"
                        {...register("comment", {
                            required: {
                                value: true,
                                message: 'comment is Required'
                            },
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Rating"
                        className="input input-bordered w-full max-w-xs"
                        {...register("rating", {
                            required: {
                                value: true,
                                message: 'rating is Required'
                            },
                        })}
                    />
                </div>



                <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Add comment" />
            </form>

        </div>
    );
};

export default AddReview;