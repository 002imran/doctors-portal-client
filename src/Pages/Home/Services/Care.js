import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Care = () => {
    return (
      <div className='mt-36 sm:m-12 lg:ml-20'>
        <div className="lg:flex items-center justify-center lg:pl-36">
          <div className="w-full">
            <img src={treatment} alt="" className="rounded-md" />
          </div>
          <div className="card-body pl-16">
            <h2 className="card-title text-5xl">
              Exceptional Dental <br />
              Care,on Your Terms
            </h2>
            <p className="text-md">
              Exceptional Dental Care, on Your Terms It is a long established
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using Lorem Ipsumis
              that it has a more-or-less normal distribution of letters,as
              opposed to using 'Content here, content here', making it look like
              readable English. Many desktop publishing packages and web page
              GET STARTED
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    );
};

export default Care;