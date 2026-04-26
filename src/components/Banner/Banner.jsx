import React from 'react';

const Banner = () => {
    return (
        <div className="hero mt-10">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                    <p className="py-6">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                        relationships that matter most.
                    </p>
                    <button className="btn text-white bg-[#244D3F]">+ Add Friends</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;