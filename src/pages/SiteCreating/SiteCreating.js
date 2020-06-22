import React from 'react';
import classes from './SiteCreating.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceListSort from "../../components/ServiceListSort";
import PortfolioShort from "../../components/PortfilioShort";

export default function SiteCreating(){

  return (
    <div className={classes.SiteCreatingPage}>
      <Header />
      <PortfolioShort />
      <ServiceListSort />
      <Footer />
    </div>
  )
}