import React from "react";
import classes from "./InternetMarketing.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfolioShort from "../../components/PortfilioShort";
import ServiceListSort from "../../components/ServiceListSort";
import MarketingServices from "./MarketingServices";
import MarketingFeatures from "./MarketingFeatures";
import interestedImage from "../../assets/img/internetmarketing-interested.jpg"

function InternetMarketing() {
  return (
    <div className={classes.InternetMarketingPage}>
      <Header />
      <MarketingServices />
      <MarketingFeatures />
      <Interested interestedImage={interestedImage} />
      <PortfolioShort />
      <ServiceListSort />
      <Footer />
    </div>
  )
}

export default InternetMarketing