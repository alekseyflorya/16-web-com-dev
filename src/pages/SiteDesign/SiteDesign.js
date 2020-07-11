import React from 'react';
import classes from './SiteDesign.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";
import SiteDesignCost from "./SiteDesignCost";
import SiteDesignProcess from "./SiteDesignProcess";

function SiteDesign(){
  return (
    <div className={classes.SitePrototype}>
      <Header />
      <SiteDesignProcess />
      <SiteDesignCost />
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}

export default SiteDesign