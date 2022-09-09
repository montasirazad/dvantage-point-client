import React from 'react';
import cScan from '../../../images/service-image/cScan/cScan.jpg';
import '../LearnMoreShared.css';

const Cscan = () => {
    return (
        <div className='p-3'>


            <p>Atomicity and consistency are two keywords, solely responsible
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
                unit still maintains the pace keeping KPIs of operation unit intact.</p>


            <p> <img className='shared' src={cScan} alt="" style={{ width: "170px", height: "170px", marginRight: "15px" }} />
                With growth of the IT organizations, for any devops team,
                it becomes very hard to dominate the change control process
                with the growth and diversity in people, process and technologies.
                However, a solid track recording tool with proven backup and alert
                mechanism, can still allow them to have a breathing space for
                troubleshooting, restoring faulty changes and maintaining consistency
                in smooth operations irrespective of releases and changes are being
                maintained in the organization.</p>

            <p>cScan has been designed and developed by noticing these
                pain points of fast growing IT enterprise, can sit as checker
                and decision maker as a tollgate of your delivery pipeline and
                aimed to meet the agility with good track record of maintaining quality.</p>

            <p>For further details, please contact us at info@dvantagepoint.com.   </p>
        </div>
    );
};

export default Cscan;