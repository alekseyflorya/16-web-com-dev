import React from 'react';
import classes from './LandingPage.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfolioShort from "../../components/PortfilioShort";

export default function LandingPage(){

  return (
    <div className={classes.LandingPage}>
      <Header />
      <Interested />
      <PortfolioShort />
      <Footer />
    </div>
  )
}