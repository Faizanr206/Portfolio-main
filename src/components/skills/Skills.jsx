import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Skills = () => {
  return (
    <>
    <Header />
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Technical Skills</span>
        <div className="skills__container container grid">
            <Frontend />
            <Backend /> 
        </div>
    </section>
    <Footer />
    </>
  );
}

export default Skills;