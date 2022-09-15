import React from 'react';
import Service from '../Service/Service';
import './AllServices.css';
import strLn from '../../images/service-image/strLn/streIn.jpg';
import fsMon from '../../images/service-image/fsMon/fsMon.jpg';
import monitoring from '../../images/service-image/monitoring/monitoring2.jpg';
import cScan from '../../images/service-image/cScan/Tile_cScan.jpg';
import prx2 from '../../images/service-image/prx2/prxtwo2.jpg';
import xRobo from '../../images/service-image/xRobo/Tile_xRobo.jpg';
import asg from '../../images/service-image/asg/ASG.jpg';
import augmentedCapacity from '../../images/service-image/augmented-capacity/augmented-capacity-tile.jpg';
import cloudEngineering from '../../images/service-image/cloud-engineering/cloud-engineering.jpg';
import ds9s from '../../images/service-image/ds9s/ds9s.jpg';
import sdas from '../../images/service-image/sdas/SDAS_Tile1.jpg';
import omp from '../../images/service-image/Omp/OMP_Tile.jpg';


const servicesData = [
    {
        id: 1,
        name: 'software development at scale (SDAS)',
        img: sdas,
        description: `Applications and software development at scale,
         deployment, management or customization, each of these are expanding 
         their territory every moment.`,
        url: 'sdas'
    },
    {
        id: 2,
        name: 'Open Mediation Platform (OMP)',
        img: omp,
        description: `Data is the new currency: A currency that allows you to
         purchase innovation and growth alongside creating point of views for decision makers.`,
        url: 'omp'
    },
    {
        id: 3,
        name: 'Augmented Capacity Planning and Benchmarking',
        img: augmentedCapacity,
        description: `In solution design and infrastructure dimensioning
         process of IT deployments, capacity planning and benchmarking is
          always a critical tollgate of the project for a fast growing vertical`,
        url: 'augmented-capacity-planning-and-benchmarking'
    },
    {
        id: 4,
        name: 'Cloud Engineering',
        img: cloudEngineering,
        description: `Starting from on demand IT resource management, 
        growing and shrinking infrastructure capacity to meet 
        customer demand, cloud computing has extended its territory 
        to BIG data, Artificial Intelligence, NLP, Blockchain, Internet of Things, 
        5G & Edge Network, Augmented Reality, and many more. `,
        url: 'cloud-engineering'
    },
    {
        id: 5,
        name: 'StreIn',
        img: strLn,
        description: `Inclusive performance test,
         augmented capacity assessment and planning
          services using load generators adaptable to wide 
          range of protocols, strengthening resiliency,
           scalability and other dimensioning measures for 
           business-critical applications & software enough to stand the heat.
        `,
        url: 'streln'
    },
    {
        id: 6,
        name: 'fsMon',
        img: fsMon,
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
        id: 7,
        name: 'Monitoring is your intimate doctor',
        img: monitoring,
        description: `Even though you got the best medic in the room of IT
         troubleshooter, without proper instrumentations it’s impractical 
         to envisage your best. A friendly watchdog is one of the best 
         choices of a troubleshooter who is aiming for uninterrupted IT operations. `
        , url: 'monitoring'
    },
    {
        id: 8,
        name: 'PRx2',
        img: prx2,
        description: `Production Readiness Planning and Review,
        pushing reliability engineering is the focus in each of 
        the engaged tollgates from concept to production-light of your 
        IT infrastructure and software projects, where you got better needs in your focus heatmap.`,
        url: 'PRx2'
    },
    {
        id: 9,
        name: 'Relationship among Ds and 9s',
        img: ds9s,
        description: `Uptime or Service continuity is the core target or KPI for any enterprise IT operation in running business critical functions. And depending on time criticality, RTO and RPO are two three-letter acronyms which objectively drives the journey from design to implementation to achieve service continuity during a micro or macro disaster.`,
        url: 'relationship-among-Ds-and-9s'
    },
    {
        id: 10,
        name: 'cScan',
        img: cScan,
        description: `Automated triggered vulnerability 
        scanning of platform and applications with wide range of 
        supported configurations, assisting workloads to maintain
         atomicity and immutability.`,
        url: 'cScan'
    },
    {
        id: 11,
        name: 'xRobo',
        img: xRobo,
        description: `Automating orchestrations, functional
         & non-functional testing, creating more reliable space 
         for quality assurance and making deployments secured, 
         agile and resilient. `,
        url: 'xRobo'
    },
    {
        id: 12,
        name: 'ASG',
        img: asg,
        description: `Typically, a multi-vendor large and complex
         IT system requires remote access to manage and support underlying
          infrastructure and software.  However, in most of the deployment,
           customers can no longer see the work as it is being done.`,
        url: 'asg'
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