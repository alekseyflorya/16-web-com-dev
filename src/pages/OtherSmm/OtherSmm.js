import React from 'react';
import classes from './OtherSmm.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";
import OtherSmmCoast from "./OtherSmmCoast";
import OtherSmmInfo from "./OtherSmmInfo";

export default function OtherSmm(){

  return (
    <div className={classes.SmmInstagram}>
      <Header />
      <OtherSmmInfo />
      <OtherSmmCoast />
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}