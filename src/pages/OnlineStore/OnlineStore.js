import React from 'react';
import classes from './OnlineStore.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfilioShort from "../../components/PortfilioShort";

export default function OnlineStore(){

  return (
    <div className={classes.OnlineStorePage}>
      <Header />
      <Interested />
      <PortfilioShort />
      <Footer />
    </div>
  )
}