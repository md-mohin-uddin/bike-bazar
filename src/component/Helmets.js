/* eslint-disable max-lines */
import React from 'react';
import Helmet from './Helmet';

const helmets = [
    {
        id: 1,
        brand: 'INK',
        model: 'INK CL Max Black Red Fluo',
        price: 3900,
        description: 'Shell Material: ADT Resin Injection Cushion Material: Expanded Polystyrene Sun Visor: Polycarbonate',
        image: 'https://www.bikebd.com/den/storage/app/files/shares/images/motorcycle/thumb/ink-cl-max-black-red-fluo657eacae9a18f.webp',
        rating: {
            rate: 3.9,
            count: 120
        }
    },
    {
        id: 2,
        brand: 'INK',
        model: 'INK CL Max Black Yellow Fluo',
        price: 5000,
        description: 'Shell Material: ADT Resin Injection Cushion Material: Expanded Polystyrene Sun Visor: Polycarbonate',
        image: 'https://www.bikebd.com/den/storage/app/files/shares/images/motorcycle/thumb/ink-cl-max-black-yellow-fluo657ead82215ce.webp',
        rating: {
            rate: 3.9,
            count: 120
        }
    },
    {
        id: 3,
        brand: 'Bilmola',
        model: 'Bilmola Defender',
        price: 8700,
        description: 'Shell Material: ADT Resin Injection Cushion Material: Expanded Polystyrene Sun Visor: Polycarbonate',
        image: 'https://www.bikebd.com/den/storage/app/files/shares/images/motorcycle/thumb/bilmola-defender60e2ea99cdd9b.webp',
        rating: {
            rate: 3.9,
            count: 120
        }
    },
    {
        id: 4,
        brand: 'MT',
        model: 'MT Stinger',
        price: 4999,
        description: 'Shell Material: ADT Resin Injection Cushion Material: Expanded Polystyrene Sun Visor: Polycarbonate',
        image: 'https://www.bikebd.com/den/storage/app/files/shares/images/motorcycle/thumb/mt-stinger60e2f856468b5.webp',
        rating: {
            rate: 3.9,
            count: 120
        }
    },
    {
        id: 5,
        brand: 'Caberg',
        model: 'Caberg Jackal Imola',
        price: 15990,
        description: 'Shell Material: ADT Resin Injection Cushion Material: Expanded Polystyrene Sun Visor: Polycarbonate',
        image: 'https://www.bikebd.com/den/storage/app/files/shares/images/motorcycle/thumb/caberg-jackal-imola60e2df85a19d7.webp',
        rating: {
            rate: 3.9,
            count: 120
        }
    },
    {
        id: 6,
        brand: 'KYT',
        model: 'KYT NFR',
        price: 4999,
        description: 'Shell Material: ADT Resin Injection Cushion Material: Expanded Polystyrene Sun Visor: Polycarbonate',
        image: 'https://www.bikebd.com/den/storage/app/files/shares/images/motorcycle/thumb/kyt-nfr60e2ec141aefa.webp',
        rating: {
            rate: 3.9,
            count: 120
        }
    }
];
const Helmets = () => {
    return (
        <div>
            <h1 className="helmet_heading">Helmet Collection</h1>
            <div className="helmets">
                {helmets.map((helmet) => (
                    <Helmet helmet={helmet} key={helmet.id} />
                ))}
            </div>
        </div>
    );
};

export default Helmets;
