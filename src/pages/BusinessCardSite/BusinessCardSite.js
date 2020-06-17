import React from 'react';
import classes from './BusinessCardSite.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function BusinessCardSite(){

  return (
    <div className={classes.BusinessCardSitePage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}