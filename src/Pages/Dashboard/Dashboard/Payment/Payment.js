import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    console.log('booking data', booking);
    return (
        <div>
            <div className="text-3xl">Payment</div>
        </div>
    );
};

export default Payment;