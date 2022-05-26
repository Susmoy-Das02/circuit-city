import React, { useEffect, useState } from 'react';
import Item from './Item';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() =>{
        fetch('https://shrouded-atoll-35584.herokuapp.com/item')
        .then(res=> res.json())
        .then(data => setItems(data))

    }, [])
    return (
        <div>
           <h1 className='text-5xl  text-center my-12 text-primary font-bold'>Our Items</h1> 
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                   items.map(item=><Item
                   key={item._id}
                   item={item}
                   ></Item>)
               }
           </div>
        </div>
    );
};

export default Items;