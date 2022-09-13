import React from 'react';
import cScan from '../../../images/service-image/cScan/cScan.jpg';
import '../LearnMoreShared.css';

const Cscan = () => {
    return (
        <div className='p-3'>

            <div className='text-center'>
                <h1 className='text-primary my-4'> Cscan</h1>

            </div>

            <div className='row my-5'>
                <div className='col-xs-2 col-sm-2 col-lg-2'></div>
                <div className='col-xs-8 col-sm-8 col-lg-8' style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                    <p><span className='text-primary display-4'><strong>A</strong></span>tomicity and consistency are two keywords, solely responsible
                        to determine providence in the territory of software development
                        to smooth enterprise operation. </p>

                    <p>cScan is an automated triggered consistency scanning tool for
                        IT platform and applications with wide range of supported configurations,
                        assisting workloads to maintain atomicity and immutability. </p>

                    <p>In current agile digital world, changes are immune to meet fast
                        releases meeting demand of growing market, when operation leads
                        remain focused on zero downtime. However, to follow best practices
                        of reliability engineering, we must need to maintain a balance in
                        a controlled way between changes and immutability so that development
                        unit still maintains the pace keeping KPIs of operation unit intact.
                    </p>
                </div>
                <div className='col-xs-2 col-sm-2 col-lg-2'></div>
            </div>



            <div className='text-center'>
                <img className='col-lg-8 w-50 img-fluid' src={cScan} alt="" />
            </div>

            <div className='row my-5'>
                <div className='col-xs-2 col-sm-2 col-lg-2'></div>
                <div className='col-xs-8 col-sm-8 col-lg-8' style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                    <p>
                        With growth of the IT organizations, for any devops team,
                        it becomes very hard to dominate the change control process
                        with the growth and diversity in people, process and technologies.
                        However, a solid track recording tool with proven backup and alert
                        mechanism, can still allow them to have a breathing space for
                        troubleshooting, restoring faulty changes and maintaining consistency
                        in smooth operations irrespective of releases and changes are being
                        maintained in the organization.
                    </p>

                    <p>cScan has been designed and developed by noticing these
                        pain points of fast growing IT enterprise, can sit as checker
                        and decision maker as a tollgate of your delivery pipeline and
                        aimed to meet the agility with good track record of maintaining quality.</p>

                    <p>
                        For further details, please contact us at info@dvantagepoint.com.

                    </p>
                </div>
                <div className='col-xs-2 col-sm-2 col-lg-2'></div>
            </div>

        </div>
    );
};

export default Cscan;