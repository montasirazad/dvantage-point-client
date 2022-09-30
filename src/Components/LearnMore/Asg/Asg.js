import React from 'react';
import asgCover from '../../../images/service-image/asg/ASG_Cover.jpg';


const Asg = () => {
    return (
        <div className='p-3'>
            <div className='text-center'>
                <h1 className='text-primary my-4'> ASG</h1>

            </div>

            <div className='text-center container-fluid  ' >
                <img className='img-fluid col-lg-8' src={asgCover} alt="" />
            </div>

            <div className='row my-5'>
                <div className='col-xs-2 col-sm-2 col-lg-2'></div>
                <div className='col-xs-8 col-sm-8 col-lg-8' style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                    <p>
                        <span className='text-primary display-4'><strong> T</strong></span>ypically, a multi-vendor large and complex IT system requires remote access to manage and support underlying infrastructure and software.  However, in most of the deployment, customers can no longer see the work as it is being done. In fact, much of what the support engineer from different vendor did is never really known to the customer, because it cannot be observed. Hereby, it often requires to extend the logging and monitoring facilities of the access management server alongside centrally managing all accesses of support personnel from different vendors.
                    </p>

                    <p>
                        Access support gateway (ASG) is designed and developed mitigating these concerns. The primary job of ASG is to record SSH sessions and make the activities traceable so that customer can trace or map activities whenever requires. Sitting next to VPN router, it is centrally managing access with expiry window and acting as extended firewall for customers with precise profile-based access control to eliminate unauthorized access to sensitive IT systems.
                    </p>

                    <p>
                        It will allow users to see only allowed destination hosts which have been allowed per user’s profile and can block access on any unauthorized attempts. Besides blocking, it can also notify engineers of operations center on the unauthorized attempts or can also be integrated with central IT monitoring system with alerts. Users can be restricted by activity time by setting expiry for each access. Users can also be restricted to access systems with only allowed privilege and deny for unauthorized commands or activities.
                    </p>

                    <p>

                        All the recording will have traceable entries in searchable format so that system administrators from customer side can perform usage patterns & behavior analysis on commands or activities per user basis.

                    </p>
                    <p>
                        For more detail on ASG functionalities, we remain open at <span className='text-primary'>contact@dvantagepoint.com</span>
                    </p>
                </div>
                <div className='col-xs-2 col-sm-2 col-lg-2'></div>

                <div className="text-center p-1 my-5 ">
                    <p><small>© 2022-2023 DVANTAGEPOINT LIMITED</small></p>

                </div>
            </div>
        </div>
    );
};

export default Asg;