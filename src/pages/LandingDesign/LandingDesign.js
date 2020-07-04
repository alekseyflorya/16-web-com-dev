import React from 'react';
import classes from './LandingDesign.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";
import LandingDesignProcess from "./LandingDesignProcess";
import LandingDesignCoast from "./LandingDesignCoast";

export default function LandingDesign(){

  return (
    <div className={classes.LandingDesign}>
      <Header />
      <LandingDesignProcess />
      <LandingDesignCoast />
      <Interested />
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}