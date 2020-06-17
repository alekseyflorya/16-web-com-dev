import React from 'react';
import classes from './Services.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Services(){

  return (
    <div className={classes.ServicesPage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}