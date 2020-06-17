import React from 'react';
import classes from './Prices.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Prices(){

  return (
    <div className={classes.PricesPage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}