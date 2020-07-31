import React from "react";
import classes from "./ExternalOptimization.module.scss"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";
import OrderInfoExternalOptimization from "./OrderInfoExternalOptimization";
import interestedImage from "../../assets/img/external-optimization-interested.jpg"

function ExternalOptimization() {
  return (
    <div className={classes.ExternalOptimization}>
      <Header />
      <OrderInfoExternalOptimization />
      <Interested interestedImage={interestedImage}/>
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}

export default ExternalOptimization