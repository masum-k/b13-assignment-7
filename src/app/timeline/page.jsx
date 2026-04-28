"use client";

import { TimeLineContext } from '@/components/Context/TimeLineContext';
import Image from 'next/image';
import React, { useContext } from 'react';

const TimeLinePage = () => {

    const { timeLineAdded } = useContext(TimeLineContext)

    return (
        <div className='md:w-5xl mt-6 '>
            <h1 className='text-3xl font-bold'>Timeline</h1>
            {
                timeLineAdded.length === 0 ? <div className='bg-white md:w-96 mx-auto shadow text-center p-4 gap-2 mt-4 mb-2 rounded-xl font-semibold'>No Chat History</div> :
                    timeLineAdded.map((added, ind) => {
                        return (
                            <div key={ind} className='bg-white shadow flex items-center p-4 gap-2 mt-4 mb-2 rounded-xl'>
                                <Image
                                    src={added.action ===
                                        'Call' ? "/call.png"
                                        : added.action === 'Text' ? "/text.png"
                                            : "/video.png"}
                                    width={30}
                                    height={30}
                                    alt={added.name}
                                />
                                <div>

                                    <p><span className='text-[#244D3F] font-medium text-xl'>{added.action}</span> with {added.name}</p>
                                    <p>April 28, 2026</p>
                                </div>
                            </div>
                        )
                    }
                    )
            }
        </div>
    );
};

export default TimeLinePage;