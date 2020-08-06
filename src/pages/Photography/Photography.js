import React from 'react';
import classes from './Photography.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfolioShort from "../../components/PortfilioShort";
import ServiceListSort from "../../components/ServiceListSort";
import PhotographyTypes from "./PhotographyTypes";

export default function Photography(){

  return (
    <div className={classes.PhotographyPage}>
      <Header />
      <PhotographyTypes />
      <Interested />
      <PortfolioShort />
      <ServiceListSort />
      <Footer />
    </div>
  )
}