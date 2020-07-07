import React from 'react';
import classes from './Prices.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PricesList from "./PricesList";

export default function Prices(){

  return (
    <div className={classes.PricesPage}>
      <Header />
      <PricesList />
      <Footer />
    </div>
  )
}