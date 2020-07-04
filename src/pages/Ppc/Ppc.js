import React from 'react';
import classes from './Ppc.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import PpcProcess from "./PpcProcess";
import PpcCost from "./PpcCost";

export default function Ppc(){

  return (
    <div className={classes.PpcPage}>
      <Header />
      <PpcProcess />
      <PpcCost />
      <Interested />
      <PortfolioShort />
      <Reviews />
      <Footer />
    </div>
  )
}