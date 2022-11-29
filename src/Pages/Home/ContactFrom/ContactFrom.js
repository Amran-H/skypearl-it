import React from 'react';

const ContactFrom = () => {
    return (
        <section className='text-center py-12 bg-slate-300 rounded-lg'
        >

            <p className='text-black font-semibold text-3xl pt-2 pb-10 '>Stay Connected With us</p>

            <div className='flex flex-col items-center gap-4'>
                <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-sm" />
                <textarea className="textarea input-bordered w-full max-w-sm h-32" placeholder="Your Message"></textarea>
            </div>



            <div className='pt-9'>
                <button className="btn btn-primary  text-white w-32"> <input type="submit" value="Submit" /></button>
            </div>

        </section >
    );
};

export default ContactFrom;