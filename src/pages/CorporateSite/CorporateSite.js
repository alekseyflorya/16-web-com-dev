import React from 'react';
import classes from './CorporateSite.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfilioShort from "../../components/PortfilioShort";
import ServiceListSort from "../../components/ServiceListSort";

export default function CorporateSite(){

  return (
    <div className={classes.CorporateSitePage}>
      <Header />
      <Interested />
      <PortfilioShort />
      <ServiceListSort />
      <Footer />
    </div>
  )
}