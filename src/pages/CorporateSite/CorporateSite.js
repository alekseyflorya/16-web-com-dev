import React from 'react';
import classes from './CorporateSite.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function CorporateSite(){

  return (
    <div className={classes.CorporateSitePage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}