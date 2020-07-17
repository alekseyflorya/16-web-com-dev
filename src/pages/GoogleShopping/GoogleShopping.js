import React from "react";
import classes from "./GoogleShopping.module.scss"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";
import GoogleShoppingServices from "./GoogleShoppingServices";

function GoogleShopping() {
  return (
    <div className={classes.Remarketing}>
      <Header />
      <GoogleShoppingServices />
      <Interested />
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}

export default GoogleShopping