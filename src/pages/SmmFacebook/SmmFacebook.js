import React from 'react';
import classes from './SmmFacebook.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SmmFacebookServices from "./SmmFacebookServices";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";
import SmmFacebookCoast from "./SmmFacebookCoast";
import InfoFacebookSmm from "./InfoFacebookSmm";

export default function SmmFacebook(){

  return (
    <div className={classes.SmmFacebook}>
      <Header />
      <SmmFacebookServices />
      <InfoFacebookSmm />
      <SmmFacebookCoast />
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}