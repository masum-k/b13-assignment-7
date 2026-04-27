import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Cards = ({ card }) => {
    const { id, name, picture, status, tags, days_since_contact } = card
    return (
        <>
            <Link href={`friends/${id}`}>
                <div className="card w-60 mx-auto bg-base-100 shadow-sm  py-10">
                    <figure>
                        <Image
                            src={picture}
                            width={100}
                            height={100}
                            alt={name}
                            className='rounded-full' />
                    </figure>
                    <div className="items-center text-center text-sm font-medium">
                        <h2 className='font-semibold mt-2'>{name}</h2>
                        <p className='text-[#64748B]'>{days_since_contact}d Ago</p>
                        <div className='flex gap-2 justify-center my-2 '>
                            <p className='rounded-full p-1 bg-[#CBFADB]'>{tags[0]}</p>
                            <p className='rounded-full p-1 bg-[#CBFADB]'>{tags[1]}</p>
                        </div>
                        <p className={`w-4/12 text-white rounded-full p-1 mx-auto ${status === "Active" ? "bg-[#244D3F]" : "bg-[#EF4444]"}`}>{status}</p><div className='text-center'>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Cards;