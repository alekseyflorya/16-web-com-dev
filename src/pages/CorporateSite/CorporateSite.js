import React from 'react';
import classes from './CorporateSite.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfolioShort from "../../components/PortfilioShort";
import ServiceListSort from "../../components/ServiceListSort";
import Reviews from "../../components/Reviews";
import CorporateFeatures from "./CorporateFeatures";
import CorporateCost from "./CorporateCost";

export default function CorporateSite(){

  return (
    <div className={classes.CorporateSitePage}>
      <Header />
      <CorporateFeatures />
      <CorporateCost />
      <Interested />
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}