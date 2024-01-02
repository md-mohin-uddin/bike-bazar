import React from 'react';
import Bike from './Bike';

const Bikes = ({ bikes }) => {
    return (
        <div>
            <h2 className="bike_heading">Bikes Collection</h2>
            <div className="bikes">
                {bikes.map((bike) => (
                    <Bike key={bike.id} bike={bike} />
                ))}
            </div>
        </div>
    );
};

export default Bikes;
