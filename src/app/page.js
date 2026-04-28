import Banner from '@/components/Banner/Banner';
import TotalFriendsCount from '@/components/TotalFriendsCount/TotalFriendsCount';
import React from 'react';
import FriendPage from './friends/page';
import StatsPage from './stats/page';

const page = () => {
  return (
    <div>
      <Banner />
      <TotalFriendsCount />
      <FriendPage />
    </div>
  );
};

export default page;