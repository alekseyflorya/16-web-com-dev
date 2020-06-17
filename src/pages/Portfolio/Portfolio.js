import React from 'react';
import classes from './Portfolio.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Portfolio(){

  return (
    <div className={classes.PortfolioPage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}