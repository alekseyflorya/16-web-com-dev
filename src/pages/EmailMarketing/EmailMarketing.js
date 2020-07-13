import React from "react";
import classes from "./EmailMarketing.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";
import EmailMarketingSteps from "./EmailMarketingSteps";

function EmailMarketing() {
  return (
    <div className={classes.EmailMarketing}>
      <Header />
      <EmailMarketingSteps />
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}

export default EmailMarketing