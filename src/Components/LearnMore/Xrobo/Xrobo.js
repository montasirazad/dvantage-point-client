import React from 'react';
import xRoboBody from '../../../images/service-image/xRobo/xRobo_body.jpg';
import xRoboBody2 from '../../../images/service-image/xRobo/xRobo_body2.jpg';

const Xrobo = () => {
    return (
        <div className='p-3'>

            <div className='text-center'>
                <h1 className='text-primary my-4'> Xrobo</h1>

            </div>

            <div className='text-center'>
                <img className='img-fluid col-lg-8 w-50'
                    style={{
                        boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px',
                        borderRadius: '8px'
                    }}
                    src={xRoboBody} alt="" />
            </div>

            <div className='row my-5'>
                <div className='col-xs-2 col-sm-2 col-lg-2'></div>
                <div className='col-xs-8 col-sm-8 col-lg-8' style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                    <p>
                        <span className='text-primary display-4'><strong>T</strong></span>emplates, orchestration and automation are aimed to achieve agility, atomicity and immutability in modern and complex IT delivery pipeline. To meet consistent demand of new features from mixed generations of consumer with improved performance and security, IT companies are pushing hard to shorten life-cycle of releases without any compromise to the quality.
                    </p>

                    <p>
                        The debate among operations, reliability engineering and devops guy becomes immune, as everyone wishes to remain comfortable with own set of processes. Makes sense, at one side of the table, frequent changes become necessity and at other side, changes are likely to induce risks. Eventually, in reality, being agile and maintaining reliability in engineering throws challenges to each other for most of the small and medium scale enterprises or startups.
                    </p>

                    <p>
                        What if business or operational processes, templates and orchestration start feeding excellence to each other and still remain agile!
                    </p>
                </div>
                <div className='col-xs-2 col-sm-2 col-lg-2'></div>
            </div>

            <div className='text-center'>
                <img className='img-fluid col-lg-8 w-25'
                    style={{
                        boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px',
                        borderRadius: '8px',padding:'5px'
                    }}
                    src={xRoboBody2} alt="" />
            </div>

            <div className='row my-5'>
                <div className='col-xs-2 col-sm-2 col-lg-2'></div>
                <div className='col-xs-8 col-sm-8 col-lg-8' style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                    <p>
                        We assist in maintaining atomicity in critical applications through managing templates carefully in our orchestration process. We translate infrastructure into codes in delivery pipeline, keeping them immutable into operation.
                    </p>

                    <p>
                        Processes are there to eliminate risks for changes, we make them automated, maintaining synergy between operations and development units. We make them inherited in production readiness so that more care can be taken towards four Ds (Design, Dimensioning, Development and Deployment) and more uptime (9s) can be achieved as a common objective.
                    </p>


                    <p>
                        Starting from software unit testing to integration, we make the scope automated and big as much as possible during development phases. Aiming to make the scope of acceptance or non-functional benchmarking agile and smaller during handover to operation team, whether it is system test, function test, performance assessment, penetration test or vulnerability assessment of infrastructure, networks, platforms of codes.
                    </p>

                    <p>
                        Through xRobo, we are intending to automate anything in enterprise IT projects. Please contact us at info@dvantagepoint.com for more information or queries.
                    </p>
                </div>
                <div className='col-xs-2 col-sm-2 col-lg-2'></div>
            </div>







        </div>
    );
};

export default Xrobo;