import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import appointment from '../../../assets/images/appointment.png';

const ContactForm = () => {
    return (
      <section style={{background: `url(${appointment})`}}>
        <div className="hero">
          <div className="hero-content">
            <div className="card flex-shrink-0 w-full py-20">
              <div className="card-body w-96 h-96">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered mb-2"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Your Message"
                    className="input input-bordered h-28 pb-12"
                  />
                </div>
                <div className="form-control mt-6 text-center">
                  <PrimaryButton>Submit</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ContactForm;