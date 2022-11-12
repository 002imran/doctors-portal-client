import React from 'react';
import Care from './Care';

import ServicesCards from './ServicesCards';

const ServiceSection = () => {
    return (
      <div className="mt-36">
        <div className="flex items-center justify-center">
          <div>
            <h2 className="text-xl text-center">OUR SERVICES</h2>
            <h2 className="text-3xl">Services We Provide</h2>
          </div>
        </div>
        <ServicesCards></ServicesCards>
        <Care></Care>
      </div>
    );
};

export default ServiceSection;