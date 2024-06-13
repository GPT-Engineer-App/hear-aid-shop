import React from 'react';

const ContactForm = () => {
  return (
    <section className="contact-form py-20 bg-base-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Get in Touch</h2>
        <form className="max-w-lg mx-auto">
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Your Name" className="input input-bordered" />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Your Email" className="input input-bordered" />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea placeholder="Your Message" className="textarea textarea-bordered"></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn" style={{ backgroundColor: '#e11e27' }}>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;