import React from 'react';
import classes from './Smm.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Smm(){

  return (
    <div className={classes.SmmPage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}