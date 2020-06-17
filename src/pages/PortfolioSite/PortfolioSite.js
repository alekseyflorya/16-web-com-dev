import React from 'react';
import classes from './PortfolioSite.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function PortfolioSite(){

  return (
    <div className={classes.PortfolioSitePage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}