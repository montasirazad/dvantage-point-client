import React from 'react';
import dashBoard from '../../../images/service-image/strLn/dashboard.jpg';
import pixelView from '../../../images/service-image/strLn/pixelView.jpg';
import flowChart from '../../../images/service-image/strLn/flowChart.jpg';
import pre from '../../../images/service-image/strLn/pre.jpg';
import post from '../../../images/service-image/strLn/post.jpg';
import blackBox from '../../../images/service-image/strLn/blackBox.jpg';
import '../LearnMoreShared.css';

const SterLn = () => {
    return (
        <div className='p-2'>


            <p>
                Embracing performance test service using our own
                developed load generator with “NO” license cost,
                catering diverse range of applications and software
                with wide range of protocols in use. Aim covers mainly
                applications and software from Telecom, Financial
                Services and E-Commerce platforms or websites.
                Inspection and assistance to figure out resiliency
                of system under load is not the only focus, besides
                it’s an intelligent assistant to the micro-services
                and APIs, produces focus heat map, streamlining the
                priorities while you are targeted towards perfection.
            </p>

            <p>
                StreIn: Strengthening business critical applications
                and software enough to stand the heat!
            </p>

            <p>
                Through stress testing, It pushes codes and platforms
                to the limit, experiences the resiliency and breakpoints
                of applications. Dashboards are customizable meeting your
                demand, starts from a 10000 feet view and zooms in to
                pixel level photons from the system under load so that
                you get a granular picture of the breakpoints and noises.
                Assists you in fixing codes, tuning up platforms, reducing
                noises to bring perfection in software with increasing resiliency.
            </p>

            <div className='text-center'>
                <img src={dashBoard} alt="" className='img-fluid w-75' />
            </div>

            <p className='text-center'>Customizable dashboard: 1000 feet view</p>

            <div className='text-center'>
                <img src={pixelView} className='img-fluid w-50' alt="" />
            </div>

            <p className='text-center'>Pixel level view</p>

            <p>
                Along with traditional load testing of your applications,
                a wide range of induced conditions are supported. Starting
                from flooding your system to injecting jitters or network
                delay, it helps all the way in reproducing real world
                scenarios where your application can sense all possibilities
                of smoothness and interruptions.
            </p>

            <p>
                Stubs and emulators for outbound interfaces can be developed,
                mimicking real world behavior at network and application layer
                resulting production alike outcomes which gives accurate mathematics
                when it comes to performance measurements or capacity planning.
            </p>

            <p>
                A range of transaction mixes and scenarios are supported as required,
                we inject your predictive growth analysis into the test for augmented
                capacity planning and optimal sizing of infrastructures & platforms covering
                both cloud and on-premise stacks.
                <img className='shared w-75' src={flowChart} alt="" />
                We assist you creating the list of entry and exit criteria for the
                test ensuring practical and minimal compromises. Our adaptable load
                generators are capable to simulate real world traffic performance as
                closely as possible in different real-world conditions:
            </p>

            <p>
                The load generator is also capable of inducing realistic human behavior
                when it comes to navigation and user journey. Both static and dynamic
                think times are supported matching your traffic pattern and making
                concurrency of the load as realistic as you can make, meeting traffic
                demands from both peak and off-peak hours.
            </p>

            <p>
                Tangible outcomes? Let us push the possibilities to the optimum territory.
                One example only: we helped our client visualizing bootstrapping and wake-up effects.
            </p>

            <div className='text-center'>
                <img className=' img-fluid w-50' src={pre} alt="" />
            </div>

            <p className='text-center'>Pre</p> <br />

            <div className='text-center'>
                <img src={post} alt="" className='img-fluid w-50' />
            </div>
            <p className='text-center'>Post</p> <br />

            <div className='text-center'>
                <img className='shared' src={blackBox} alt="" />
            </div>
            <p>
                Overall performance and capacity assessment services can be divided into two: </p>

            <ul>
                <li>
                    Black box assessment

                </li>
                <li>
                    White box assessment
                </li>
            </ul>




            <p>
                Black box assessment: We see your deployment from outside the
                defined territory, saturate the system under load as black box to
                the point it is potential to, incorporate all results into intelligent
                assistant in form of reports and share with you.
            </p>

            <p>
                White box assessment: We deep dive into your boxes and install our agents
                to check pieces and bits. We assist to make the pipe fat enough with enormous
                amount of structured and unstructured data. Extensive and adaptive analytical
                insights can be provided adding our knowledge-base to discover your system to its optimum.
            </p>
            <p>
                Both agile and waterfall approaches are supported as long as you
                need us to reach common objectives. ✉ info@dvantagepoint.com
            </p>
        </div>
    );
};

export default SterLn;