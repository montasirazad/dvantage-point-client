import React from 'react';
import pic1 from '../../../images/service-image/cloud-engineering/cloud-engineering-1.jpg';
import pic2 from '../../../images/service-image/cloud-engineering/cloud-engineering-2.jpg';

const CloudEngineering = () => {
    return (
        <div>
            <h1> CloudEngineering components</h1>

            <div >
                <img src={pic1} alt="" />
            </div>

            <div>
                <img src={pic2} alt="" />
            </div>

            <p>Starting from on demand IT resource management,
                growing and shrinking infrastructure capacity to meet customer demand,
                cloud computing has extended its territory to BIG data, Artificial Intelligence,
                NLP, Blockchain, Internet of Things, 5G & Edge Network, Augmented Reality, and many more.
            </p>
            <p>
                With these evolved technologies, cloud providers are widening each of
                the service layers: Infrastructure as a service, Platform as a service
                and Software as a service to meet the velocity, breadth and depth of fourth
                industrial revolution (Industry 4.0) and consistently redefining the term XAAS: anything as a service.
            </p>

            <p>
                Widening of these territories by cloud providers are allowing
                enterprises from different verticals to be carefree when it comes
                to IT management and remain focused on their products and business
                more than ever before. This is how it is supposed be but what are
                real cases talking about? Can it be 100% carefree?
            </p>
            <p>
                The answer is a big “No” and a small “Yes” as there are certain
                headaches that are being completely taken care by cloud providers
                and covered in managed services. However, many other cloud services
                and platforms still remain in the complex matrix of shared responsibilities.
                And if those are not properly designed, selected, dimensioned, orchestrated,
                developed or maintained, clients may often get ceased from enjoying the original
                intents of their cloud journey.
            </p>

            <p>
                Starting from scaling, elasticity, performance, security and many other
                reliability engineering & governance perspectives, cloud workloads may not
                remain as productive as they are supposed to be. Even the managed service
                components may not meet objectives which they are prospective to. Generally,
                cloud services are having competitive pricings but again if the design or orchestration
                are not very much mathematical, cloud may become even more expensive than maintaining
                your own data center and sometime your IT “OPEX” can cross boundary of approval.
            </p>

            <p>
                To address and streamline these concerns, DVANTAGEPOINT LIMITED
                got a discipline of cloud engineering by forming a cross functional
                autonomous team of cloud computing experts with historic experiences
                from global IT giants. Irrespective of cloud deployment model: private, public or hybrid,
                our experts are aimed to be on same boat with our clients for their mission critical workloads
                from design, architecture to Devops, Secops, Sysops or migration from on premise data center to
                public cloud or from one public cloud to another.
            </p>

            <p>
                For more information, we remain here: info@dvantagepoint.com.
            </p>
        </div>
    );
};

export default CloudEngineering;