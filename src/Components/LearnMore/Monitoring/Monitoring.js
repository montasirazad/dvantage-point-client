import React from 'react';
import monitor1 from '../../../images/service-image/monitoring/monitor1.jpg';
import monitor2 from '../../../images/service-image/monitoring/monitor2.jpg';
import '../LearnMoreShared.css';

const Monitoring = () => {
    return (
        <div className='p-3'>
            <h3>Monitoring intimacy in IT clinic!</h3>

            <p> <img className='shared' src={monitor1} alt="" style={{ width: "auto", height: "170px", marginRight: "15px" }} />
                Even though you got the best medic in the room of IT troubleshooter,
                without proper instrumentations it’s impractical to envisage your best.
                A friendly watchdog is one of the best choices of a troubleshooter who
                is aiming for uninterrupted IT operations. It’s innate to protect your
                IT components from discontinuity & inefficiency and making smooth contributions
                towards continuity and novelty in operations.
            </p>

            <p>
                Large IT enterprises usually maintain a number of business-critical
                workloads in a hybrid deployment of public cloud and private data center.
                Merging siloed monitoring, a centralized one can really give insights meeting
                all the objectives with correlation of faults or issues. It’s like a doctor
                who knows about several issues in different parts of the body and can prescribe
                by digging down to the root and solving propagation of one issue into another.
            </p>



            <p> <img className='shared' src={monitor2} alt="" style={{ width: "auto", height: "170px", marginRight: "15px" }} />
                IT infrastructure and system monitoring, is no longer just fault
                detecting tool or performance graphs visualizer. It has become a
                “super instrument” of your IT clinic adding smart troubleshooting,
                predictive analytics, safeguard and a compass.

                IT infrastructure and system monitoring, is no longer just fault
                detecting tool or performance graphs visualizer. It has become a
                “super instrument” of your IT clinic adding smart troubleshooting,
                predictive analytics, safeguard and a compass.
            </p>
            <p>
                Using machine learning on top of processed logging events,
                TCP/UDP metrics and streaming traffic, monitoring system is also capable
                of doing predictive fault analysis and predictive detection of security compromise.
                Auditability is always a top most non-functional requirement for any IT stack for
                verticals governed by regulatory bodies and monitoring system can also act as a
                feeder of centralized audit visualization through collecting auditable events and
                putting on screen or even predict future threats through advanced analytics and
                notifying system administrators.
            </p>

            <p>
                Atomicity and consistency are always desirable for a fast-changing organization
                to preserve business continuity. One can also developed agent for consistency checking
                within the life-cycle of releases and can report through monitoring tool for any anomalies.
            </p>

            <p>
                Monitoring is a great friend for capacity benchmarking or assessments or
                performance tests. For a black-box performance test, any load generator has
                to has great visualizations of performance graphs however, for a white-box
                assessment monitoring system can fetch out great insights from bits and pieces
                through its agent, making the load test a comprehensive one.
            </p>

            <p>
                In a nutshell, besides offering fault detection & performance monitoring,
                through smart troubleshooting, audit plus security safeguard and advanced analytics,
                a monitoring system can become intimate friend of operations.
            </p>

            <p>
                Sourcing above thoughts, we offer a full stack monitoring system “fsMon”
                and intending to be that intimate part of your IT clinic. For details or
                specifications, please contact sales@dvantagepoint.com.
            </p>
        </div>
    );
};

export default Monitoring; 