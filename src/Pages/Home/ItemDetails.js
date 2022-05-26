import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        const url = `https://shrouded-atoll-35584.herokuapp.com/item/${itemId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItem({
                itemName: data?.name,
                perUnitPrice: data?.perUnitPrice,
                minimumOrderQuantity: data?.minimumOrderQuantity,
                availableQuantity: data?.availableQuantity,
                name: user?.displayName,
                email: user?.email,
                phone: "",
                orderQuantity: ""
            }));

    }, [])

    const handleChange = (e) => {
        e.preventDefault();
        setItem({ ...item, [e?.target?.name]: e?.target?.value })
        console.log(item);
    }
    const handleOrder = e => {
        e.preventDefault();
        if (item.orderQuantity !== "") {
            if (item?.minimumOrderQuantity >= item?.orderQuantity) {
                alert("if block")
            } else if (item?.availableQuantity < item?.orderQuantity) {
                alert("else if block")
            } else {

                console.log(item);
                setItem({ ...item, [item?.orderQuantity]: "" });
            }
        } else {
            alert("set order quantity")
        }

        const order = {
            itemName:item?.itemName,
            perUnitPrice:item?.perUnitPrice,
            minimumOrderQuantity:item?.minimumOrderQuantity,
            availableQuantity: item?.availableQuantity,
            name: user?.displayName,
            email: user?.email,
            phone:e.target.phone.value,
            orderQuantity:e.target.orderQuantity.value,




        }

        fetch('https://shrouded-atoll-35584.herokuapp.com/orders',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

        })


    }







    return (




        <div class="card bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <form onSubmit={handleOrder}>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Item name</span>
                        </label>
                        <input type="text" name='itemName' value={item?.itemName} class="input input-bordered w-full max-w-xs" onChange={(e) => handleChange(e)} />
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Per unit price</span>
                        </label>
                        <input type="text" name='perUnitPrice' value={item?.perUnitPrice} class="input input-bordered w-full max-w-xs" onChange={(e) => handleChange(e)} />
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Minimum order quantity</span>
                        </label>
                        <input type="text" name='minimumOrderQuantity' value={item?.minimumOrderQuantity} class="input input-bordered w-full max-w-xs" onChange={(e) => handleChange(e)} />
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Available quantity</span>
                        </label>
                        <input type="text" name='availableQuantity' value={item?.availableQuantity} class="input input-bordered w-full max-w-xs" onChange={(e) => handleChange(e)} />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Your Name</span>
                        </label>
                        <input type="text" name='name' value={item?.displayName || ''} class="input input-bordered w-full max-w-xs" onChange={(e) => handleChange(e)} />
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Your Email</span>
                        </label>

                        <input type="email" name="email" value={item?.email || ''} class="input input-bordered w-full max-w-xs" onChange={(e) => handleChange(e)} />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Phone Number</span>
                        </label>

                        <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" onChange={(e) => handleChange(e)} />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Order  quantity</span>
                        </label>

                        <input type="text" name="orderQuantity" placeholder="Order  quantity" class="input input-bordered w-full max-w-xs" onChange={(e) => handleChange(e)} />
                    </div>


                    <div class="card-actions">
                        <button type='submit' class="btn btn-primary">purchase Order</button>
                    </div>

                </form>


            </div >
        </div >


    );
};

export default ItemDetails;