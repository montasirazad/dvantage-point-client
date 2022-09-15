import React from 'react';
import pic1 from '../../../images/service-image/fsMon/fsMon-1.jpg';
import pic2 from '../../../images/service-image/fsMon/fsMon_Body.jpg';
import '../LearnMoreShared.css';


const FsMon = () => {
    return (
        <div className='p-3'>

            <div className='text-center'>
                <h1 className='text-primary my-4'> FsMon</h1>

            </div>

            <div className='text-center'>
                <img className='img-fluid col-lg-8' src={pic1} alt="" /> <br /> <br />

            </div>


            <div className='row'>

                <div className='col-xs-2 col-sm-2 col-lg-2'></div>

                <div className='col-xs-8 col-sm-8 col-lg-8 my-5' style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                    <p  >
                        <span className='text-primary display-4'><strong>O</strong></span>bjectively, siloed surveillance of distributed workloads
                        in a hybrid eco-system of private datacenter and public
                        clouds does not work much, while you are targeting to visualize the photons.
                    </p>





                    <p  >
                        fsMon is a full stack monitoring system, got its own diversity
                        when it comes to coverage. Starting from performance monitoring,
                        to faults, from security to audit and advanced analytics or intelligence,
                        all under one umbrella. Making surveillance on one screen is the target
                        for all business-critical software and applications, deployed in public
                        clouds as well as in private data centers.
                    </p>

                    <p className='text-primary'>
                        <strong>
                            Let’s connect intelligence and sharp eyes to experience the optimum!
                            - DVANTAGEPOINT LIMITED
                        </strong>

                    </p>
                </div>

                <div className='col-xs-2 col-sm-2 col-lg-2'></div>



                <div className='text-center'>
                    <img className='img-fluid col-lg-8 w-50' src={pic2} alt="" />
                </div>

                <div className='row my-5'>
                    <div className='col-xs-2 col-sm-2 col-lg-2'></div>
                    <div className='col-xs-8 col-sm-8 col-lg-8' style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
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
                            For detail information or query, please contact:  <span className='text-primary'>✉ info@dvantagepoint.com</span>
                        </p>
                    </div>
                    <div className='col-xs-2 col-sm-2 col-lg-2'></div>
                </div>


            </div>

            <div className="text-center p-1 my-5 ">
                <p><small>© 2022-2023 DVANTAGEPOINT LIMITED</small></p>

            </div>
        </div>
    );
};

export default FsMon;