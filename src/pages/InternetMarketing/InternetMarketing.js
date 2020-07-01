import React from "react";
import classes from "./InternetMarketing.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfolioShort from "../../components/PortfilioShort";
import ServiceListSort from "../../components/ServiceListSort";

function InternetMarketing() {
  return (
    <div className={classes.InternetMarketingPage}>
      <Header />
      <Interested />
      <PortfolioShort />
      <ServiceListSort />
      <Footer />
    </div>
  )
}

export default InternetMarketing