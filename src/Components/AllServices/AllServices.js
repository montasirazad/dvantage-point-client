import React from 'react';
import Service from '../Service/Service';

const servicesData = [
    {
        id: 1,
        name: 'Augmented Capacity Planning and Benchmarking'
    },
    {
        id: 2,
        name: 'Cloud Engineering'
    },
    {
        id: 3,
        name: 'streIn'
    },
    {
        id: 4,
        name: 'fsMon'
    },
    {
        id: 5,
        name: 'Monitoring is your intimate doctor'
    },
    {
        id: 6,
        name: 'PRx2'
    },
    {
        id: 7,
        name: 'Relationship Among Ds and 9s'
    },
    {
        id: 8,
        name: 'vScan'
    }
]

const AllServices = () => {

    return (
        <>
            <h1 className='text-center'>Our Services</h1>
            <div className='d-flex align-item-center justify-content-center flex-wrap'>

                {
                    servicesData.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </>
    );
};

export default AllServices;