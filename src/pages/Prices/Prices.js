import React from 'react';
import classes from './Prices.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PricesList from "./PricesList";
import PricesInfo from "./PricesInfo";

export default function Prices(){

  return (
    <div className={classes.PricesPage}>
      <Header />
      <PricesList />
      <PricesInfo />
      <Footer />
    </div>
  )
}