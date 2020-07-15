import React from "react";
import classes from "./SeoAudit.module.scss"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";

function SeoAudit() {
  return (
    <div className={classes.SeoAudit}>
      <Header />
      <Interested />
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}

export default SeoAudit