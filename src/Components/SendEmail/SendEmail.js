import React from 'react';
import emailjs from '@emailjs/browser';


const SendEmail = () => {

    const sendEmail = (e) => {

        emailjs.sendForm('service_j9mejet', 'template_tuojvqv', e.target, '2KKH7XFFU2ztXq5yM')
            .then((result) => {
                console.log(result.text);
                alert('Your message has been sent successfully')
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
        e.preventDefault()
    }

    return (
        <div className='row'>


            <div className='col-xs-2 col-sm-2 col-lg-2'></div>
            <div className='col-xs-8 col-sm-8 col-lg-8 '>
                <div className='my-4 p-4 container-fluid'>

                    <form className=" g-3 m-0 auto" onSubmit={sendEmail}>

                        <div >
                            <label htmlFor="inputEmail4" className="form-label">Your name</label>
                            <input type="text" name='name' className="form-control" placeholder="Your name" />
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