import React from 'react';
import classes from './Branding.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BrandingSteps from "./BrandingSteps";
import ServiceListSort from "../../components/ServiceListSort";
import BrandingOrder from "./BrandingOrder/BrandingOrder";
import BrandingAdvantages from "./BrandingAdvantages";
import BrandingPortfolio from "./BrandingPortfolio";

export default function Branding(){

  return (
    <div className={classes.BrandingPage}>
      <Header />
      <BrandingSteps />
      <BrandingOrder />
      <BrandingAdvantages />
      <BrandingPortfolio />
      <ServiceListSort />
      <Footer />
    </div>
  )
}