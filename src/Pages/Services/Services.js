import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {

    const [services, setSevices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/main-dishes3')
        .then(res => res.json())
        .then(data => setSevices(data))
    }, [])

    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Service</p>
                <h2 className="text-5xl font-semibold">Our Main Dishes</h2>
            </div>
            <div>
                {/* <h2>services: {services.length}</h2> */}
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        services.map(service => <ServicesCard
                            key={service._id}
                            service={service}
                        ></ServicesCard>)
                    }
                </div>
            </div>
            <div className='mt-4 grid'>
                <Link className=' justify-self-center' to='main-dishes '><button className="btn btn-secondary">See more</button></Link>
            </div>
        </div>
    );
};

export default Services;