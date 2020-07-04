import React from 'react';
import classes from './OnlineStore.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfolioShort from "../../components/PortfilioShort";
import OnlineStoreProcess from "./OnlineStoreProcess";
import OnlineStoreCoast from "./OnlineStoreCoast";
import OnlineStoreSteps from "./OnlineStoreSteps";

export default function OnlineStore(){

  return (
    <div className={classes.OnlineStorePage}>
      <Header />
      <OnlineStoreProcess />
      <OnlineStoreCoast />
      <OnlineStoreSteps />
      <Interested />
      <PortfolioShort />
      <Footer />
    </div>
  )
}