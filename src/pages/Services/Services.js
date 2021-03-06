import React from 'react';
import classes from './Services.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import ServiceListFull from "./ServiceListFull";

export default function Services(){

  return (
    <div className={classes.ServicesPage}>
      <Header />
      <ServiceListFull />
      <Interested className={classes.Interested} />
      <Footer />
    </div>
  )
}