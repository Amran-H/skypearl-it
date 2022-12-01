import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ laptop, setLaptop }) => {

    const { name: itemName, resale_price } = laptop;
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const meetingLocation = form.meetingLocation.value;

        const booking = {
            buyer: name,
            email,
            itemName,
            price: resale_price,
            phone,
            meetingLocation
        }
        console.log(booking);


        setLaptop(null);
    }

    return (
        <>
            <input type="checkbox"
                id="booking-modal"
                className="modal-toggle" />

            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{laptop?.name}</h3>


                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>

                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />

                        <input name="itemName" type="text" disabled value={itemName} className="input w-full input-bordered " />
                        <input name="price" type="text" disabled value={resale_price} className="input w-full input-bordered " />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="meetingLocation" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;