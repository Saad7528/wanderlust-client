import Destinations from '@/component/Destinations';
import React from 'react';

const destinationsPage = async () => {
    const res = await fetch('http://localhost:5000/destination')
    const destinations = await res.json();
    console.log(destinations);
    return (
        <div>
            <h1>Explore All Destinations</h1>

            <div className=' max-w-7xl mx-auto grid grid-cols-3 gap-3'>
                {
                    destinations.map(des => <Destinations key={des._id} des={des}/>)
                }
            </div>
        </div>
    );
};

export default destinationsPage;