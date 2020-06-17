import React from 'react';
import classes from './OnlineStore.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function OnlineStore(){

  return (
    <div className={classes.OnlineStorePage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}