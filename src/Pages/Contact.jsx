import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact-form">
        <div className="container">
          <div className="form-wrapper">
            <div className="company-address">
              <div className="address-group">
                <i className="fas fa-map-marker-alt fa-3x text-red" />
                <h2 className="text-gray md-heading">Location</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="address-group">
                <i className="far fa-envelope fa-3x text-red" />
                <h2 className="text-gray md-heading">Email</h2>
                <p>duddidididididididid@gmai.com</p>
              </div>
              <div className="address-group">
                <i className="fas fa-phone-square-alt fa-3x text-red" />
                <h2 className="text-gray md-heading">Call</h2>
                <p>+123456789</p>
              </div>
              <img src="./img/company-img.jpg" alt />
            </div>
            <form action className="form">
              <h1 className="lg-heading text-black">Contact Us</h1>
              <p className="text-gray">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
                fuga.
              </p>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name id="username" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" name id="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name id="message" defaultValue={""} />
              </div>
              <button type="submit" className="form-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
