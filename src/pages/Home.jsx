import React, { useState } from 'react';
import { FrontMessage } from '../components/Home/FrontMessage';
import { HomeServices } from '../components/Home/HomeServices';
import { HomeTeam } from '../components/Home/HomeTeam';

const Home = () => {
  return (
    <div>
      <FrontMessage />
      <HomeServices />
      <HomeTeam />
    </div>
  );
};

export default Home;