import React from 'react';
import classes from './About.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function About(){

  return (
    <div className={classes.aboutPage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}