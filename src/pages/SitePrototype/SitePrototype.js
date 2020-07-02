import React from 'react';
import classes from './SitePrototype.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";

function SitePrototype(){

  return (
    <div className={classes.SitePrototype}>
      <Header />
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}

export default SitePrototype