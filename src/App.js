/* eslint-disable max-lines */
import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import Bikes from './component/Bikes';
import Helmets from './component/Helmets';

const bikes = [
    {
        id: 1,
        brand: 'Yamaha',
        model: 'Yamaha R15M BS7',
        price: 675000,
        description:
            'The Yamaha R15M is a newly released, exclusively featured fully-faired sport bike from the renowned motorcycle, scooter, and ATV brand and manufacturer, Yamaha. The updated YZF-R15M BS7 version has been released by Yamaha Motor India, making it one of the latest additions to the Yamaha YZF-R15 sport bike lineup. The new version of the motorcycle now comes with exclusive technical updates, enhancements, and attractive decal upgrades.',
        image: 'https://www.bikebd.com/den/storage/app/files/shares/images/productimages/thumb/yamaha-r15m-bs76522824d234f9.webp',
        rating: {
            rate: 3.9,
            count: 120
        }
    },
    {
        id: 2,
        brand: 'Yamaha',
        model: 'Yamaha R15M',
        price: 610000,
        description:
            'The Yamaha R15M is a newly released, exclusively featured fully-faired sport bike from the renowned motorcycle, scooter, and ATV brand and manufacturer, Yamaha. The updated YZF-R15M BS7 version has been released by Yamaha Motor India, making it one of the latest additions to the Yamaha YZF-R15 sport bike lineup. The new version of the motorcycle now comes with exclusive technical updates, enhancements, and attractive decal upgrades.',
        image: 'https://www.bikebd.com/den/storage/app/files/shares/images/productimages/thumb/yamaha-r15m61a5a6e9d8a08.webp',
        rating: {
            rate: 4.9,
            count: 120
        }
    },
    {
        id: 3,
        brand: 'Yamaha',
        model: 'Yamaha MT-15 V2',
        price: 525000,
        description:
            'The Yamaha R15M is a newly released, exclusively featured fully-faired sport bike from the renowned motorcycle, scooter, and ATV brand and manufacturer, Yamaha. The updated YZF-R15M BS7 version has been released by Yamaha Motor India, making it one of the latest additions to the Yamaha YZF-R15 sport bike lineup. The new version of the motorcycle now comes with exclusive technical updates, enhancements, and attractive decal upgrades.',
        image: 'https://www.bikebd.com/den/storage/app/files/shares/images/productimages/thumb/yamaha-mt-15-version-20625a7fba84935.webp',
        rating: {
            rate: 3.7,
            count: 120
        }
    },
    {
        id: 4,
        brand: 'Yamaha',
        model: 'Yamaha Fazer FI V2',
        price: 325000,
        description:
            'The Yamaha R15M is a newly released, exclusively featured fully-faired sport bike from the renowned motorcycle, scooter, and ATV brand and manufacturer, Yamaha. The updated YZF-R15M BS7 version has been released by Yamaha Motor India, making it one of the latest additions to the Yamaha YZF-R15 sport bike lineup. The new version of the motorcycle now comes with exclusive technical updates, enhancements, and attractive decal upgrades.',
        image: 'https://www.bikebd.com/den/storage/app/files/shares/images/productimages/thumb/yamaha-fazer-fi-v260309f1c4b944.webp',
        rating: {
            rate: 3.9,
            count: 120
        }
    },
    {
        id: 5,
        brand: 'Gixer',
        model: 'Suzuki GSX-R150 ABS',
        price: 455000,
        description:
            'SUZUKI GSX-S 150 possesses a 147.3 cc, 4 Valve, single-cylinder, 4 stroke liquid cooled DOHC engine with Fuel Injection. This engine can produce up to 18.90 BHP of power at 10,500 RPM and 14 Nm of peak torque at 9000 RPM. The engine starts with an electric motor and the transmission is a 6-speed manual one with a wet multi-plate clutch.',
        image: 'https://www.bikebd.com/den/storage/app/files/shares/images/productimages/thumb/suzuki-gsx-r150629dc8b1f273b.webp',
        rating: {
            rate: 4.5,
            count: 120
        }
    },
    {
        id: 6,
        brand: 'Gixer',
        model: 'Suzuki Bandit 150',
        price: 675000,
        description:
            'SUZUKI GSX-S 150 possesses a 147.3 cc, 4 Valve, single-cylinder, 4 stroke liquid cooled DOHC engine with Fuel Injection. This engine can produce up to 18.90 BHP of power at 10,500 RPM and 14 Nm of peak torque at 9000 RPM. The engine starts with an electric motor and the transmission is a 6-speed manual one with a wet multi-plate clutch.',
        image: 'https://www.bikebd.com/den/storage/app/files/shares/images/productimages/thumb/suzuki-bandit-1506078009d915a5.webp',
        rating: {
            rate: 4.2,
            count: 120
        }
    }
];
const App = () => {
    return (
        <div>
            <header>
                <h1 className="heading">Welcome to Bike Bazar</h1>
            </header>

            <div>
                <Bikes bikes={bikes} />
            </div>
            <div>
                <Helmets />
            </div>
        </div>
    );
};

export default App;
