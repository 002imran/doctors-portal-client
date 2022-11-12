import React from 'react';
import fluride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServicesCard from './ServicesCard';

const ServicesCards = () => {
    const servicesData = [
        {   id: 1,
            title: 'Fluoride Treatment',
            img: fluride,
            description: 'Fluride dental treatment is best for who have cavities.'
        },
        {   
            id: 2,
            title: 'Cavity Filling',
            img: cavity,
            description: 'Fluride dental treatment is best for who have cavities.'
        },
        {   
            id: 3,
            title: 'Teeth Whitening',
            img: whitening,
            description: 'Fluride dental treatment is best for who have cavities.'
        }
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
            {
                servicesData.map(service=><ServicesCard
                 key={service.id} service={service}>

                </ServicesCard>)
            }
            
        </div>
    );
};

export default ServicesCards;