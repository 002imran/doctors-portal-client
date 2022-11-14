import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment, selectedDate}) => {
    // treatment is just another name of appointmentOptions with name, slots, _id 
    const {name, slots} = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
      event.preventDefault();
      const form = event.target;
      const slot = form.slot.value;
      const name = form.name.value;
      const email = form.email.value;
      const phone = form.phone.value;
      console.log(date, slot, name, email, phone);
    }

    return (
      <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">{name}</h3>
            <form
              onSubmit={handleBooking}
              className="grid grid-cols-1 gap-3 mt-10"
            >
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                value={date}
                disabled
              />
              <select name="slot" className="select select-bordered w-full">
                {slots.map((slot, i) => (
                  <option value={slot} key={i}>
                    {slot}
                  </option>
                ))}
              </select>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="input input-bordered w-full"
              />
              <input
                name="phone"
                type="text"
                placeholder="Phone Number"
                className="input input-bordered w-full"
              />
              <br />

              <input
                className="btn btn-accent w-full"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </>
    );
};

export default BookingModal;