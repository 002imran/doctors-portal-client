import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import ServiceSection from '../Services/ServiceSection';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            {/* <ServicesCards></ServicesCards>
             */}
             <ServiceSection></ServiceSection>
        </div>
    );
};

export default Home;