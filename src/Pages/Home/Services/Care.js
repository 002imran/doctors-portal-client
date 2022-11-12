import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const Care = () => {
    return (
      <div className="lg:flex items-center">
        
          <img src={treatment} alt="" className="py-44 rounded-md" />

        <div className="card-body">
          <h2 className="card-title text-5xl">
            Exceptional Dental <br />
            Care,on Your Terms
          </h2>
          <p className='text-lg'>
            Exceptional Dental Care, on Your Terms It is a long established fact
            that a reader will be distracted by the readable content of a page
            when looking at its layout. The point of using Lorem Ipsumis that it
            has a more-or-less normal distribution of letters,as opposed to
            using 'Content here, content here', making it look like readable
            English. Many desktop publishing packages and web page GET STARTED
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary justify-start  w-32">
            Get Started
          </button>
        </div>
      </div>
    );
};

export default Care;