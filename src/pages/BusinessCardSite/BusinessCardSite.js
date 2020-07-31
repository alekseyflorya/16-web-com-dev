import React from 'react';
import classes from './BusinessCardSite.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BusinessCardInfo from "./BusinessCardInfo";
import Interested from "../../components/Interested";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";
import interestedImage from "../../assets/img/businesscardsite-interested.jpg"

export default function BusinessCardSite(){

  return (
    <div className={classes.BusinessCardSitePage}>
      <Header />
      <BusinessCardInfo />
      <Interested interestedImage={interestedImage} />
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}