import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [items, setItem] = useState([])
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
                .then(res => res.json())
                .then(data => setItem(data))
        }
    }, [user])

    return (
        <div>
            <h2>my order: {items.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>ItemName</th>
                            <th>Price</th>
                            <th>Order quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((i, index) =><tr>
                                <th>{index +1 }</th>
                                <td>{i.name}</td>
                                <td>{i.itemName}</td>
                                <td>{i.perUnitPrice}</td>
                                <td>{i.orderQuantity}</td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;