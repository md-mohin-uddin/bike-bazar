import React from 'react';

const Bike = ({ bike }) => {
    const { brand, model, price, description, rating, image } = bike;

    return (
        <article className="bike">
            <img className="img" src={image} alt="" />
            <div className="bike__details">
                <h3 className="brand">{brand}</h3>
                <h4 className="model">{model}</h4>
                <p className="price">{price}</p>
                <p className="description">{description}</p>
                <p className="rating">{rating.rate}</p>
                <button className="btn">Add to cart</button>
            </div>
        </article>
    );
};

export default Bike;
