import React from 'react';
import Service from '../Service/Service';
import './AllServices.css';

const servicesData = [
    {
        id: 1,
        name: 'Augmented Capacity Planning and Benchmarking',
        img: `https://image.shutterstock.com/image-vector/coming-soon-grunge-rubber-stamp-260nw-196970096.jpg`,
        url: 'augmented-capacity-planning-and-benchmarking'
    },
    {
        id: 2,
        name: 'Cloud Engineering',
        img: `https://image.shutterstock.com/image-vector/coming-soon-grunge-rubber-stamp-260nw-196970096.jpg`,
        url: 'cloud-engineering'
    },
    {
        id: 3,
        name: 'streIn',
        img: `https://image.shutterstock.com/image-vector/coming-soon-grunge-rubber-stamp-260nw-196970096.jpg`,
        description: `Inclusive performance test,
         augmented capacity assessment and planning
          services using load generators adaptable to wide 
          range of protocols, strengthening resiliency,
           scalability and other dimensioning measures for 
           business-critical applications & software enough to stand the heat.
        `,
        url: 'sterIn'
    },
    {
        id: 4,
        name: 'fsMon',
        img: `https://image.shutterstock.com/image-vector/coming-soon-grunge-rubber-stamp-260nw-196970096.jpg`,
        description: `Full stack monitoring system,
                       diversified coverage for deployments 
                       in public cloud as well as private data 
                       centers or hybrid eco-system. Brining 
                       in security, audit, advanced troubleshooting,
                        analytics or intelligence under same umbrella
                         of performance and fault monitoring.`,
        url: 'fsMon'
    },
    {
        id: 5,
        name: 'Monitoring is your intimate doctor',
        img: `https://image.shutterstock.com/image-vector/coming-soon-grunge-rubber-stamp-260nw-196970096.jpg`,
        url:'monitoring'
    },
    {
        id: 6,
        name: 'PRx2',
        img: `https://image.shutterstock.com/image-vector/coming-soon-grunge-rubber-stamp-260nw-196970096.jpg`,
        description: `Production Readiness Planning and Review,
        pushing reliability engineering is the focus in each of 
        the engaged tollgates from concept to production-light of your 
        IT infrastructure and software projects, where you got better needs in your focus heatmap.`,
        url:'PRx2'
    },
    {
        id: 7,
        name: 'Relationship among Ds and 9s',
        img: `https://image.shutterstock.com/image-vector/coming-soon-grunge-rubber-stamp-260nw-196970096.jpg`,
        url:'relationship-among-Ds-and-9s'
    },
    {
        id: 8,
        name: 'vScan',
        img: `https://image.shutterstock.com/image-vector/coming-soon-grunge-rubber-stamp-260nw-196970096.jpg`,
        description: `Automated triggered vulnerability 
        scanning of platform and applications with wide range of 
        supported configurations, assisting workloads to maintain
         atomicity and immutability.`,
         url:'vScan'
    },
    {
        id: 9,
        name: 'xRobo',
        img: `https://image.shutterstock.com/image-vector/coming-soon-grunge-rubber-stamp-260nw-196970096.jpg`,
        description: `Automating orchestrations, functional
         & non-functional testing, creating more reliable space 
         for quality assurance and making deployments secured, 
         agile and resilient. `,
         url:'xRobo'
    },
    {
        id: 10,
        name: 'dFitness',
        img: `https://image.shutterstock.com/image-vector/coming-soon-grunge-rubber-stamp-260nw-196970096.jpg`,
        description: `Adaptable unit & integration testing product, supported with a
         wide range of protocols and platforms in use by current IT verticals.`,
         url:'dFitness'
    }
]

const AllServices = () => {

    return (
        <div className='allService-div container-fluid'>
            <br />
            <h1 className='text-center text-white my-5'>Our Services</h1>
            <div className='d-flex align-item-center justify-content-center flex-wrap servicesDiv'>

                {
                    servicesData.map(service => <Service key={service.id} service={service}></Service>)
                }


            </div>
        </div>
    );
};

export default AllServices;