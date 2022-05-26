import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [items, setItem] = useState([])
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`https://shrouded-atoll-35584.herokuapp.com/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');

                    }
                    return res.json()
                })
                .then(data => {

                    setItem(data);
                })
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
                            items.map((i, index) => <tr>
                                <th>{index + 1}</th>
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