import React from 'react';
import classes from './SmmAds.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";
import SmmAdsCoast from "./SmmAdsCoast";
import SmmAdsInfo from "./SmmAdsInfo";

export default function SmmAds(){

  return (
    <div className={classes.SmmInstagram}>
      <Header />
      <SmmAdsInfo />
      <SmmAdsCoast />
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}