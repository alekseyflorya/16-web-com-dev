import React from 'react';
import classes from './SmmInstagram.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SmmInstagramServices from "./SmmInstagramServices";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";
import SmmInstagramCoast from "./SmmInstagramCoast";
import SmmInstagramInfo from "./SmmInstagramInfo";

export default function SmmInstagram(){

  return (
    <div className={classes.SmmInstagram}>
      <Header />
      <SmmInstagramServices />
      <SmmInstagramInfo />
      <SmmInstagramCoast />
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}