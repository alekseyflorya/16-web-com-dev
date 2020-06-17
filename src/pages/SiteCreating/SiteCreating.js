import React from 'react';
import classes from './SiteCreating.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function SiteCreating(){

  return (
    <div className={classes.SiteCreatingPage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}