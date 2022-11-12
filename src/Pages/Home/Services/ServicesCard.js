import React from 'react';

const ServicesCard = ({service}) => {
    const { title, img, description} = service;
    return (
      <div className="card w-96 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={img} alt=''/>
         </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        
        </div>
      </div>
    );
};

export default ServicesCard;