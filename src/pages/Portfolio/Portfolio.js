import React from 'react';
import classes from './Portfolio.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Reviews from "../../components/Reviews";
import Clients from "../../components/Clients";
import Interested from "../../components/Interested";
import PortfolioFull from "../../components/PortfilioFull";

export default function Portfolio(){

  return (
    <div className={classes.PortfolioPage}>
      <Header />
      <PortfolioFull />
      <Interested />
      <Reviews />
      <Clients />
      <Footer />
    </div>
  )
}