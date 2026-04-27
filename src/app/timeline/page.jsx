"use client";

import { TimeLineContext } from '@/components/Context/TimeLineContext';
import Image from 'next/image';
import React, { useContext } from 'react';

const TimeLinePage = () => {

    const { timeLineAdded } = useContext(TimeLineContext)

    return (
        <div>
            {
                timeLineAdded.map((added, ind) => {
                    return (
                        <div key={ind} className='bg-white shadow '>
                            {/* 
                            condition1 ?"Value 1": condition2 ? "Value 2": "Default Value";
                             "call" ? "/call.png": added.action === "text"?"/text.png":"/video.png"
                            */}
                            <Image
                                src={added.action === 
                                    'call'? "/call.png" 
                                    : added.action === 'text'?"/text.png"
                                    :"/video.png"}
                                width={30}
                                height={30}
                                alt={added.name}
                            />
                            <h1>Call with {added.name}</h1>
                            <h1>bye</h1>
                        </div>


                    )
                })
            }
        </div>
    );
};

export default TimeLinePage;