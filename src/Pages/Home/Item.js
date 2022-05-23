import React from 'react';
import {useNavigate} from 'react-router-dom';

const Item = ({ item }) => {
    const {_id, name, img, perUnitPrice, minimumOrderQuantity, description, availableQuantity} = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id =>{
        navigate(`/item/${id}`);
    }
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text- secondary">{name}</h2>
                <h3 className='text-2xl'>Per unit price :{perUnitPrice}</h3>
                <h3>Minimum order quantity :{minimumOrderQuantity}</h3>
                <h3>Available quantity :{availableQuantity}</h3>
                <p>{description}</p>
                <div class="card-actions">
                    <button  onClick={() => navigateToItemDetail(_id)} class="btn btn-primary">purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Item;