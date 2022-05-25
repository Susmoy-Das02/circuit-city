import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const {info, setInfo} = useState({});
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        const url = `https://shrouded-atoll-35584.herokuapp.com/item/${itemId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [])

    const handleOrder = e => {
        e.preventDefault(); 
    console.log({[e.target.name]:e.target.value});
    }





    return (




        <div class="card bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <form onSubmit={handleOrder}>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Item name</span>
                        </label>
                        <input type="text" name='itemName' value={item.name} class="input input-bordered w-full max-w-xs" />
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Per unit price</span>
                        </label>
                        <input type="number" name='perUnitPrice' value={item.perUnitPrice} class="input input-bordered w-full max-w-xs" />
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Minimum order quantity</span>
                        </label>
                        <input type="number" name='minimumOrderQuantity' value={item.minimumOrderQuantity} class="input input-bordered w-full max-w-xs" />
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Available quantity</span>
                        </label>
                        <input type="number" name='availableQuantity' value={item.availableQuantity} class="input input-bordered w-full max-w-xs" />
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Your name</span>
                        </label>

                        <input type="text" name="name" value={user?.displayName || ''} class="input input-bordered w-full max-w-xs" />

                        <label class="label">
                            <span class="label-text">Your Email</span>
                        </label>

                        <input type="email" name="email" value={user?.email || ''} class="input input-bordered w-full max-w-xs" />

                        <label class="label">
                            <span class="label-text">Phone Number</span>
                        </label>

                        <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />

                        <label class="label">
                            <span class="label-text">Order  quantity</span>
                        </label>

                        <input type="text" name="order quantity" placeholder="Order  quantity" class="input input-bordered w-full max-w-xs" />

                    </div>

                    <div class="card-actions">
                        <button type='submit' class="btn btn-primary">purchase Order</button>
                    </div>

                </form>


            </div>
        </div>


    );
};

export default ItemDetails;