import React from 'react';
import classes from './Smm.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SmmServices from "./SmmServices";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";
import SmmCoast from "./SmmCoast";

export default function Smm(){

  return (
    <div className={classes.SmmPage}>
      <Header />
      <SmmServices />
      <SmmCoast />
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}