import React from 'react';
import classes from './CatalogSite.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function CatalogSite(){

  return (
    <div className={classes.CatalogSitePage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}