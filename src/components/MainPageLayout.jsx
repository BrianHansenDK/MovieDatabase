import React from 'react';
import Navbar from './Navbar';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Movie Database"
        subtitle="Search for shows or people. It's EZ!"
        quote="This App is created by Noaly"
      />
      <Navbar />
      {children}
    </div>
  );
};

export default MainPageLayout;
