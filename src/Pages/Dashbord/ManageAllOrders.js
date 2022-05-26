import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageAllOrders = () => {
    const {data: order, isLoading} = useQuery('order', () => fetch('https://shrouded-atoll-35584.herokuapp.com/order',{
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).than(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl'>Manage All Orders{order.length}</h2>
        </div>
    );
};

export default ManageAllOrders;