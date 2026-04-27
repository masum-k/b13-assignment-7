import CardDetails from '@/components/CardDetails/CardDetails';
import React from 'react';

const DetailsPage = async ({ params }) => {
    const { detailsId } = await params
    const friendsData = await fetch(`https://69ef2557112e1b968e241194.mockapi.io/friends/${detailsId}`)
    const friendsCards = await friendsData.json()

    return (
        <CardDetails friendsCards={friendsCards} />
    );
};

export default DetailsPage;