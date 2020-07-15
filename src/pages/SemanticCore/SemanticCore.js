import React from "react";
import classes from "./SemanticCore.module.scss"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";

function SemanticCore() {
  return (
    <div className={classes.SemanticCore}>
      <Header />
      <Interested />
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}

export default SemanticCore