import React from 'react';
import bgImg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';

const Banner = () => {
    return (
      <>
        <div
          className="hero bg-base-200 h-auto"
          style={{ background: `url(${bgImg})` }}
        >
          <div className="hero-content flex-col lg:flex-row-reverse py-56">
            <img
              src={chair}
              className="max-w-sm rounded-lg shadow-2xl h-96 w-96"
              alt=""
            />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">
                Get Started
              </button>
            </div>
          </div>
        </div>

       
      </>
    );
};

export default Banner;