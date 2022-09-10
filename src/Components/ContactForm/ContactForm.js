import React from 'react';

const ContactForm = () => {
    return (

        <div>
            <div className='my-4 p-4 container-fluid'>

                <h4 className='text-center'>Keep in touch</h4>
                <form className=" g-3">

                    <div className="col-md-6 col-lg-6">
                        <label htmlFor="inputEmail4" className="form-label">Your name</label>
                        <input type="text" className="form-control" placeholder="Your name" />
                    </div>

                    <div className="col-md-6 col-lg-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>

                    <div className="col-md-6 col-lg-6">
                        <label htmlFor="inputEmail4" className="form-label">Phone</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-6 col-lg-6">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <label htmlFor="inputCity" className="form-label">Country</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>

                    <div className="col-md-6 col-lg-6">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>

                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                    <br />
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default ContactForm;