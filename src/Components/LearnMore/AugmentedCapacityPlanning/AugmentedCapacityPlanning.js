import React from 'react';
import pic1 from '../../../images/service-image/augmented-capacity/augmented-capacity-1.jpg'
import pic2 from '../../../images/service-image/augmented-capacity/MathematicsIsFun.jpg'
import '../LearnMoreShared.css'

const AugmentedCapacityPlanning = () => {
    return (
        <div className='p-3 container-fluid'>

            <div className='text-center'>
                <h1 className='text-primary my-4'> Augmented Capacity Planning and Benchmarking</h1>

            </div>

            <div className='text-center ' >

                <img className='shared' src={pic1} alt="" />
            </div>



            <div className='row' >

                <div className='col-xs-2 col-sm-2 col-lg-2'>

                </div>

                <div className='col-xs-8 col-sm-8 col-lg-8 ' style={{ textAlign: 'justify', textJustify: 'inter-word' }}>

                    <p >
                        <span className='text-primary display-4'><strong>I</strong></span>n solution design and infrastructure dimensioning
                        process of IT deployments, capacity planning and
                        benchmarking is always a critical tollgate of the
                        project for a fast growing vertical. And depending
                        on the growth of the business, frequency of capacity
                        review becomes immune irrespective of the workload.
                        Undoubtfully, failure in capacity assessment can
                        lead both software architect and solution architect
                        towards design board once again, sometime even at half
                        way of the project which most likely results to re-dimensioning
                        of infrastructure one more time. What else solution engineering
                        can do if the business gets a hard wall due to capacity choking?
                    </p>


                    <p >  Performance or response time of each of the microservice
                        or module contributes on overall capacity and for better
                        performance and optimized capacity, software architect
                        plays the best role in optimizing design attributes,
                        starting from technology selection to sketch microservices
                        or to build pieces of codes. However, even though the microservices
                        are being designed and deployed in a perfect way they are planned
                        to, there are other factors which can be potential bottleneck for capacity.
                    </p>


                    <p>
                        For example, infrastructure orchestrations or backfiring impact
                        from peripheral entities for a network jitter. In these contexts,
                        solution architect naturally got a bigger picture of the territory
                        and can supply productive ingredients to performance and capacity
                        optimization of the deployments.
                    </p>

                    <p>
                        So, it is important to be able to zoom in and out from pixel level
                        to 10000 feet view and be agile or augmented for performance assessment
                        & capacity benchmarking. For private data center, we suggest to start
                        load test with smaller set of hardware, preferably in testbed to figure
                        out minimum units optimized for applications and gradually figure out
                        big numbers with vertical x-or horizontal scaling of infrastructure.
                    </p>

                    <p>
                        However, scaling is not always linear and so is capacity. Hereby,
                        it results to a great realistic value if we can do several capacity
                        assessments with several sizes of infrastructure and then connect the
                        dots to visualize the real-world pattern.
                    </p>
                </div>

                <div className='col-xs-2 col-sm-2 col-lg-2'>

                </div>

            </div>

            <div className='text-center '>
                <img className='img-fluid col-lg-8 w-50 ' src={pic2} alt="" />
            </div>

            <h5 className='text-center my-5'>
                Mathematics is fun!
            </h5>

            <div className='row' >
                <div className='col-xs-2 col-sm-2 col-lg-2'>

                </div>

                <div className='col-xs-8 col-sm-8 col-lg-8' style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                    <p>
                        Elasticity or auto-scaling in cloud infrastructure solves the problem
                        of capacity choking to a great extent. However, cloud may not remain
                        cost effective any more if sizes and types of infrastructure selections
                        does not fit software requirement in a great way. It may lead to downtime
                        as well under excessive traffic if the auto-scaling parameters are not
                        properly tuned with augmented capacity assessment, though infrastructure
                        will still remain available. Please remember, it always remains a shared
                        responsibility unless you are not using software from cloud providers as service.
                        Technically speaking, if one can draw a picture connecting pixels,
                        there will be no one else who can visualize the photons better.
                        Through agile load test in your CI-CD pipeline, augmented capacity
                        planning can gain mathematical control on bits & pieces of your workload.
                        Irrespective of how much it peaks, you can confidently park service downtime
                        for capacity choking much ahead of time.
                    </p>



                    <p>
                        Hope it helps and we keep attention to these attributes through our services
                        streIn and PRx2. For more details, please contact us at <span className='text-primary'>sales@dvantagepoint.com</span>
                    </p>
                </div>

                <div className='col-xs-2 col-sm-2 col-lg-2'>

                </div>
            </div>
            
            <div className="text-center p-1 my-5 ">
                <p><small>© 2022-2023 DVANTAGEPOINT LIMITED</small></p>

            </div>
        </div>
    );
};

export default AugmentedCapacityPlanning;