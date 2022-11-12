import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import ServiceSection from '../Services/ServiceSection';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            {/* <ServicesCards></ServicesCards>
             */}
             <ServiceSection></ServiceSection>
             <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;