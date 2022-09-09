import React from 'react';
import ds9sCover from '../../../images/service-image/ds9s/ds9sCover.jpg';
import graph from '../../../images/service-image/ds9s/graph.jpg';

const Ds9s = () => {
    return (
        <div className='p-3'>
            <h1>Contribution of Ds in 9s</h1>
            <img src={ds9sCover} alt="" />
            <p>
                Uptime or Service continuity is the core target or KPI
                for any enterprise IT operation in running business critical functions.
                And depending on time criticality, RTO and RPO are two three-letter
                acronyms which objectively drives the journey from design to
                implementation to achieve service continuity during a micro or macro disaster.
            </p>

            <p>
                Once the time criticality is defined, the very next things engineering
                team needs to determine are RTO & RPO which respectively defines maximum
                acceptable length of time the application can be unavailable & maximum
                acceptable length of time for which the data can be lost from applications for a major incident.
            </p>

            <p>
                In this topic, we are going to associate how four Ds: design, dimensioning,
                development and deployment contributes to service continuity or uptime which
                is desirably measured by 9s.
            </p>

            <p>
                Design in projects contains the pillars for the IT skyscraper, the solution
                architect aims to be deployed. Anything wrong or any parameter missing in
                the pillar, costs to certain vulnerabilities towards service continuity and
                other business risks. Solution architects are hence inevitable to follow all
                the checklist prescribed in IT reliability engineering guideline to avoid such
                circumstances of risks. Governed by the checklist, design process is inherited by
                management of items listed but not limited to below:
            </p>

            <p>
                <ul>
                    <li>Availability management</li>
                    <li>Information security management</li>
                    <li>Capacity planning and management</li>
                    <li>Release management</li>
                    <li>Templates and orchestration management</li>
                    <li>Knowledge object management</li>
                    <li>Support management</li>
                </ul>


            </p>

            <p>
                Availability management is to offer IT service availability driven by the acronym RTO & RPO.
            </p>

            <img src={graph} alt="" />

            <p>
                Be watchful that both of the acronyms are tightly coupled with
                cost: the lower value is in the objective, the higher is the cost!
                Hereby, depending on time criticality of business functions,
                respective cost needs to be allocated for respective IT projects
            </p>

            <p>
                For example, values can be different for an off-peak hour scheduled
                service than a peak hour online service. For vital service, high availability
                (HA) needs to be maintained both locally and geographically in order to maintain
                desired service continuity for both micro and macro incidents or disaster.
            </p>

            <p>
                And the design considerations need to cover full-stack IT deployment starting
                from infrastructure layer to system or platform and to micro-service to data.
                The measurement scale for maintaining HA will engage diversified number of units,
                for example number, size, type, distance, feature and process. HA for micro-service
                can be achieved my number and geographical distance or introducing resiliency &
                self-healing feature, however for infrastructure consideration, it can extend to
                size and types. For data layer, process of replication is an obvious unit to be
                pursued, for example real-time or near real-time, maximum protection mode
                (remote write first) or maximum performance mode (remote write second)
                depending on the nature of service offered to consumer.
            </p>

            <p>
                The next is information security risks, which can be a potential threat to service
                continuity and is another dimension during design, development and deployment to achieve
                targeted 9s. It’s not only faults to infrastructure or applications that may lead to unavailability;
                attacks or exploits are very likely cases for service unavailability and compromise in this modern,
                risky and connected IT world. Solution and software architects need to take care of these following
                security hardening guidelines and updated encryption mechanism both at-rest and in-transit.
            </p>

            <p>
                Capacity planning or management once again (as elaborated in another writing),
                is particular potential item towards service unavailability for unpredictable or
                fast growth in traffic. We suggest to be augment here in capacity assessment or
                planning, please check the writing “Augmented capacity planning and benchmarking”
                to see how this is an inhabitable item for a solution architect or capacity assessor to achieve uptime.
            </p>

            <p>
                Well-architected planning and design are foremost baby steps towards success however
                not the last. Does not matter how well the sketches are being done, if it is not developed
                or coded maintaining 100% of the objective, it’s likely to lead towards failure. Silos of
                design, development & QA team with improper communication or process are probable reasons
                behind this consequence. We suggest a cross functional and autonomous release management
                team engaging solution architects, software architects, developers and testers to perform
                round table discussions and executions so that as a whole the organization gets a zero
                gapped item in production.
            </p>

            <p>
                Now its deployment time of the great build! Unfortunately, a great recipe may not result to
                a great taste if the cook is not careful enough. In large IT enterprises, deployments are
                usually complex or frequent which is very natural. However, these may lead to issues in
                atomicity or consistency during deployment if templates are not properly maintained and
                orchestrated. So new release can really be a threat to downtime on existing version.
                Infrastructure immutability with infrastructure as a code is a great choice here to
                maintain uptime during or after deployment. Automated and comprehensive testing needs
                to inherited in the orchestration process to avoid real world complains or probable downtimes.
            </p>

            <p>
                Maturity development process should be executed on a regular basis to update knowledgebase
                or solution base. Knowledge objected produced during the cycle, should be stored, updated
                and re-used to improve efficiency and even to reduce downtime for major incidents and
                particularly when the emergency recovery team is new.
            </p>

            <p>
                Last but not the least is SLO and SLA management for support. SLO: service level
                objective is the key measurable component of service level agreement (a contractual
                agreement with solution provider or original equipment manufacturer) should be clearly
                defined by timebound approaches, with clear communication matrix in order to have regulated
                operations. There can be no better choice for an emergency recovery team than a well-defined SLA.
            </p>

            <p>
                We offer assessment and technical consultancy service with our PRx2 team of diversified experts,
                aimed to push reliability engineering and to bring excellence into operations. For details, please
                contact sales@dvantagepoint.com.
            </p>
        </div>
    );
};

export default Ds9s;