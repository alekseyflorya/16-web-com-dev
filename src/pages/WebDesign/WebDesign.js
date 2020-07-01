import React from "react";
import classes from "./WebDesign.module.scss"
import Header from "../../components/Header";
import DesignTypes from "./DesignTypes";
import CompetentDesign from "./CompetentDesign";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";
import Footer from "../../components/Footer";
import WyWithUs from "./WyWithUs";

function WebDesign() {
  return (
    <div className={classes.WebDesignPage}>
      <Header />
      <DesignTypes />
      <CompetentDesign />
      <WyWithUs />
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}

export default WebDesign