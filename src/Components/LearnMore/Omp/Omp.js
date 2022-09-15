import React from 'react';
import ompCover from "../../../images/service-image/Omp/OMP_Cover.jpg";
import ompBody from "../../../images/service-image/Omp/OMP_Body.jpg";
const Omp = () => {
    return (
        <div className='p-3'>


            <div className='text-center'>
                <h1 className='text-primary my-4'> Open Mediation Platform(OMP)</h1>
            </div>
            <div className='text-center'>
                <img className='img-fluid col-lg-8' src={ompCover} alt="" /> <br /> <br />
            </div>
            <div className='row'>
                <div className='col-xs-2 col-sm-2 col-lg-2'></div>
                <div className='col-xs-8 col-sm-8 col-lg-8 my-5' style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                    <p><span className='text-primary display-4'><strong>D</strong></span>ata is the new currency: A currency that allows you to purchase innovation and growth alongside creating point of views for decision makers.

                    </p>
                    <p>
                        Very often for a largescale communication or IT enabled service provider,
                        it gets difficult to connect massive amount of data produced from different
                        network entities.  Specially for the company using multivendor solutions or
                        managing multivendor network elements.
                    </p>
                    <p>
                        Traditionally a mediation platform is helpful in transforming and normalizing
                        data of different formats and streamlining those towards a common processing.
                        However, there remains increasing complexities with increasing number of integrations
                        of network entities with increasing number of specifications.
                    </p>
                    <p>
                        Besides, business analysts or product managers are generally used to focus on produced
                        metrics based on the processed data from relational or non-relational databases.
                        However, they are no more limited among DBs as application logs both in structure
                        and unstructured format are producing quite sensible piece of business insights alongside databases.
                    </p>
                    <p>
                        But in reality, most of the streaming and network data such as from your load balancer
                        or API gateway, stands at a very first gate of inbound traffic and potential to produce
                        even deeper metrics for your advanced analytics or research. Similarly, there are plenty
                        of low-end network devices & infrastructure producing plenty of metrics, those are never
                        getting connected with the mainstream of your data processing. How about connecting all
                        these together and experience the beauty they potential to produce?
                    </p>
                    <p>
                        An open mediation platform, a scalable & adaptable solution, intending to transform and
                        streamline data from every possible sources of different formats such as databases both
                        relational and non-relational, logs, documents, application or system metrics, multimedia
                        (images, audio/video) and streaming event including the ones never remain at rest. Then
                        transform all these towards uniformity, opening up APIs for your reporting engine or business intelligence.
                    </p>
                    <div className='text-center'>
                        <img className='img-fluid col-lg-8 ' src={ompBody} alt="" />
                    </div>
                    <p>Enabling you to perform machine learning or deep learning to connect deep insights, research
                        and produce new vision on top of that. There is no alter of producing new knowledge and adding
                        new dimensions in your product lines through innovation. </p>
                    <p>
                        For more information and specs, please contact us at <span className='text-primary'> info@dvantagepoint.com</span>

                    </p>
                </div>
                <div className='col-xs-2 col-sm-2 col-lg-2'></div>
            </div>
        </div>
    );
};

export default Omp; <h1>omp</h1>