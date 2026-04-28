import React from 'react';

const TotalFriendsCount = async () => {
    const friendsData = await fetch('https://69ef2557112e1b968e241194.mockapi.io/friends')
    const friendsCards = await friendsData.json()
    const active = friendsCards.filter(item => item.status === "Active").length;
    const overDue = friendsCards.filter(item => item.status === "Active").length;
    return (
        <div>
            <div className='md:flex gap-3 mb-4 text-center justify-center items-center font-semibold'>
                <div className='bg-white shadow card p-5 mx-auto w-60 mb-2'>
                    <h1 className='text-2xl text-[#244D3F]'>10</h1>
                    <p className='text-[#64748B]'>Total Friends</p>
                </div>
                <div className='bg-white shadow card p-5 mx-auto w-60 mb-2'>
                    <h1 className='text-2xl text-[#244D3F]'>{active}</h1>
                    <p className='text-[#64748B]'>Active</p>
                </div>
                <div className='bg-white shadow card p-5 mx-auto w-60 mb-2'>
                    <h1 className='text-2xl text-[#244D3F]'>{overDue}</h1>
                    <p className='text-[#64748B]'>Need Attention</p>
                </div>
                <div className='bg-white shadow card p-5 mx-auto w-60 mb-2'>
                    <h1 className='text-2xl text-[#244D3F]'>10</h1>
                    <p className='text-[#64748B]'>Interactions This Month</p>
                </div>
            </div>
            <div className="md:divider"></div>
        </div>
    );
};

export default TotalFriendsCount;