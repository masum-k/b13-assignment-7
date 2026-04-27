import Cards from '@/components/Cards/Cards';

const FriendPage = async () => {
    const friendsData = await fetch('https://69ef2557112e1b968e241194.mockapi.io/friends')
    const friendsCards = await friendsData.json()
    return (
        <>
            <div>
                <h1 className='text-2xl font-semibold mb-3'>Your Friends</h1>
            </div>
            <div className='grid md:grid-cols-4 gap-2'>
                {
                    friendsCards.map(card => (
                        <Cards key={card.id} card={card} />
                    ))
                }
            </div>
        </>
    );
};

export default FriendPage;