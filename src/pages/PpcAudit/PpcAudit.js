import React from "react";
import classes from "./PpcAudit.module.scss"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";
import OrderInfoPpcAudit from "./OrderInfoPpcAudit";

function PpcAudit() {
  return (
    <div className={classes.ExternalOptimization}>
      <Header />
      <OrderInfoPpcAudit />
      <Interested />
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}

export default PpcAudit