import React from 'react';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import ServiceSection from '../Services/ServiceSection';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            {/* <ServicesCards></ServicesCards>
             */}
             <ServiceSection></ServiceSection>
             <MakeAppointment></MakeAppointment>
             <Testimonial></Testimonial>
             <ContactForm></ContactForm>
        </div>
    );
};

export default Home;