/* eslint-disable max-lines */
import React from 'react';

const Helmet = ({ helmet }) => {
    const { brand, model, price, description, rating, image } = helmet;
    return (
        <article className="helmet">
            <img className="img" src={image} alt="" />
            <div className="helmet_details">
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

export default Helmet;
