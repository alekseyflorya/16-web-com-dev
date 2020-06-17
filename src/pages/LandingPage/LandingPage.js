import React from 'react';
import classes from './LandingPage.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function LandingPage(){

  return (
    <div className={classes.LandingPage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}