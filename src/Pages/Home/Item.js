import React from 'react';

const Item = ({ item }) => {
    const {name, img, perUnitPrice, minimumOrderQuantity, description, availableQuantity} = item;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <h3>Per unit price :{perUnitPrice}</h3>
                <h3>Minimum order quantity :{minimumOrderQuantity}</h3>
                <h3>Available quantity :{availableQuantity}</h3>
                <p>{description}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Item;