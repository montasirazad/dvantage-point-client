import React from 'react';
import pic1 from '../../../images/service-image/fsMon/fsMon-1.jpg';
import pic2 from '../../../images/service-image/fsMon/fsMon-2.jpg';


const FsMon = () => {
    return (
        <div >
            <h1>Fsmon testing compo</h1>



            <div className='text-center'>
                <img className='img-fluid w-75' src={pic1} alt="" /> <br /> <br />
                <img className='img-fluid w-50' src={pic2} alt="" />
            </div>


            <div className='p-3'>

                <article>
                    <p className='lh-base'>
                        Objectively, siloed surveillance of distributed workloads
                        in a hybrid eco-system of private datacenter and public
                        clouds does not work much, while you are targeting to visualize the photons.
                    </p>
                </article>




                <p className='lh-base'>
                    fsMon is a full stack monitoring system, got its own diversity
                    when it comes to coverage. Starting from performance monitoring,
                    to faults, from security to audit and advanced analytics or intelligence,
                    all under one umbrella. Making surveillance on one screen is the target
                    for all business-critical software and applications, deployed in public 
                    clouds as well as in private data centers.
                </p>

                <p>
                    Let’s connect intelligence and sharp eyes to experience the optimum!
                    - DVANTAGEPOINT LIMITED

                </p>

                <p>
                    It provides you great visualizations of your infrastructure utilization
                    (compute, storage, network); wide range of metrics from operating systems,
                    hypervisors or containers; deep insights from data layer covering RDBMS,
                    NoSQL, in-memory database or cache and message queue; application performance
                    metrics (APM) e.g. response or processing time of your codes, key performance
                    indicators with percentile; helping codes to push boundary and experience
                    the optimum performance. Customizable logging and event processor got
                    built-in functions to bring out insights of proxy, load balancer or gateway layers.
                    Rules and filters can be created or modified, to adapt customized logs or
                    events from local applications or platforms or to set threshold-based alerts.
                </p>

                <p>
                    Besides fault and performance monitoring, security aspects,
                    auditable events and advanced analytics, all have been presented
                    under the same umbrella. Almost all the technologies and protocols
                    used in current world by IT, Telecom digital services, banking
                    or financial applications, rider any other online or offline
                    services are supported.
                </p>

                <p>
                    Inheriting wide range of customizable dashboards meeting the
                    objectives of almost all of the operations and service centers.
                </p>

                <p>
                    Got it’s built in capability to be integrated with our streIn
                    and dFitness services to give you real insights starting from
                    10000 feet view to bits and pieces. It can feed all required
                    measurements with accurate mathematics when you are focused with
                    augmented capacity planning or infrastructure dimensioning.
                </p>

                <p>
                    Besides visualizations, it is exposing Open RESTful APIs to fetch
                    data in JSON format and compatible to be integrated with any of your
                    network peripherals, as a feeder to other 3PP services.
                </p>

                <p>
                    For detail information or query, please contact: ✉ info@dvantagepoint.com
                </p>
            </div>
        </div>
    );
};

export default FsMon;