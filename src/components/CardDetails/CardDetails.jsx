"use client"

import Image from 'next/image';
import React from 'react';
import { PiArchive } from 'react-icons/pi';
import { RiDeleteBin6Fill, RiNotificationSnoozeLine } from 'react-icons/ri';
import TimeLineButton from '../Buttons/TimeLineButton';


const CardDetails = ({ friendsCards }) => {
    const { name, tags, status, bio, email, picture, contact_frequency_days,
        days_since_contact } = friendsCards

    return (
        <div className='my-16'>
            {/* Details */}
            <div className='md:flex gap-5'>
                {/* Profile */}
                <div className="card w-80 mx-auto bg-base-100 shadow-sm py-3 px-6">
                    <figure>
                        <Image
                            src={picture}
                            width={100}
                            height={100}
                            alt={name}
                            className='rounded-full' />
                    </figure>
                    <div className="text-center text-sm font-medium">
                        <h2 className='font-semibold mt-2'>{name}</h2>
                        <div className='flex gap-2 justify-center my-2 '>
                            <p className='rounded-full p-1 bg-[#CBFADB]'>{tags[0]}</p>
                            <p className='rounded-full p-1 bg-[#CBFADB]'>{tags[1]}</p>
                        </div>
                        <div className='space-y-1'>
                            <p className={`w-4/12 text-white rounded-full p-1 mx-auto ${status === "Active" ? "bg-[#244D3F]" : "bg-[#EF4444]"}`}>{status}</p>
                            <p>&quot;{bio}&quot;</p>
                            <p className='font-normal'>Preferred: {email}</p>
                        </div>
                    </div>
                </div>
                {/* Contact History Card */}
                <div>
                    <div className='md:flex text-center gap-4'>
                        <div className='bg-white shadow card p-8 mx-auto w-60 mb-2'>
                            <h1 className='text-2xl text-[#244D3F]'>10</h1>
                            <p className='text-[#64748B]'>Total Friends</p>
                        </div>
                        <div className='bg-white shadow card p-8 mx-auto w-60 mb-2'>
                            <h1 className='text-2xl text-[#244D3F]'>10</h1>
                            <p className='text-[#64748B]'>Total Friends</p>
                        </div>
                        <div className='bg-white shadow card p-8 mx-auto w-60 mb-2'>
                            <h1 className='text-2xl text-[#244D3F]'>10</h1>
                            <p className='text-[#64748B]'>Total Friends</p>
                        </div>
                    </div>
                    {/* Relationship Goal Card */}
                    <div className='bg-white p-8 mt-5 shadow card'>
                        <div className='md:flex justify-between'>
                            <h3 className='text-xl font-semibold text-[#244D3F]'>
                                Relationship Goal
                            </h3>
                            <button className='btn p-3'>Edit</button>
                        </div>
                        <p><span className='text-[#64748B] '>Contact every</span> <span className='font-semibold'>{contact_frequency_days} days</span></p>
                    </div>
                </div>
            </div>
            <div className='md:flex gap-5 mt-5'>
                <div className='w-80 space-y-2 font-semibold'>
                    <div className='flex btn items-center gap-2 bg-white px-5 py-2 justify-center'>
                        <RiNotificationSnoozeLine />
                        <p>Snooze 2 weeks</p>
                    </div>
                    <div className='flex btn items-center gap-2 bg-white px-5 py-2 justify-center'>
                        <PiArchive />
                        <p>Archive</p>
                    </div>
                    <div className='flex btn items-center gap-2 bg-white text-red-500 px-5 py-2 justify-center'>
                        <RiDeleteBin6Fill />
                        <p>Delete</p>
                    </div>
                </div>
                <div className='flex-1 justify-center px-6 card bg-white shadow'>
                    <div className='mb-3'>
                        <h1 className='text-[#244D3F] text-xl'>Quick Check-In</h1>
                    </div>
                    <div className='md:flex gap-4'>
                        <TimeLineButton name={name}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;