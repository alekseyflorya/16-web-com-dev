import React from 'react';
import classes from './QaTesting.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfolioShort from "../../components/PortfilioShort";
import ServiceListSort from "../../components/ServiceListSort";

export default function QaTesting(){

  return (
    <div className={classes.QaTestingPage}>
      <Header />
      <Interested />
      <PortfolioShort />
      <ServiceListSort />
      <Footer />
    </div>
  )
}