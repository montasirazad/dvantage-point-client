import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const SendEmail = () => {

    const form = useRef();

    const sendMail = (e) => {
        e.preventDefault();

        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')

        emailjs.sendForm('service_l2oqthc', 'template_g8x4kte', form.current, 'eol-8LbPGsExreCdv')
            .then((result) => {
                console.log(result.text);
                alert('Your message has been sent successfully')
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });

    };


    return (
        <div className='row'>
            <div className='col-xs-2 col-sm-2 col-lg-2'></div>
            <div className='col-xs-8 col-sm-8 col-lg-8 '>
                <div className='my-4 p-4 container-fluid'>

                    <form className=" g-3 m-0 auto" ref={form} onSubmit={sendMail}>

                        <div >
                            <label htmlFor="inputEmail4" className="form-label">Your name</label>
                            <input type="text" name='user_name' className="form-control" placeholder="Your name" />
                        </div>

                        <div >
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" name='user_email' className="form-control" id="inputEmail4" />
                        </div>

                        <div >
                            <label htmlFor="inputAddress" className="form-label">Your message</label>
                            <textarea type="text" name='message' className="form-control" id="inputAddress" placeholder="Your message" />
                        </div>
                        <br />
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">SUBMIT</button>
                        </div>
                    </form>


                </div>
            </div>
            <div className='col-xs-2 col-sm-2 col-lg-2'></div>

        </div>
    );
};

export default SendEmail;