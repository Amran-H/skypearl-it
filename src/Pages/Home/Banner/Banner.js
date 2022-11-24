import React from 'react';

const Banner = () => {
    return (
        <div className="hero h-96 rounded-xl my-16" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wJTIwc2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")` }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to <br /><span className=''>SkyPearl IT</span></h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;