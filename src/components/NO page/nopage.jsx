import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import TyperwiterOpps from '../typewriter/TyperwiterOpps';
const NoPage = () => {
  return (
    <>
    <Header />
    <div className="home__data container">
        <h1 className="home__title">
            <TyperwiterOpps />
            <TyperwiterOpps />
        
        </h1>
        </div>
    <Footer />
    </>
  );
}

export default NoPage;