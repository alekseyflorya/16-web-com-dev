import React from 'react';
import classes from './OtherSrevices.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function OtherSrevices(){

  return (
    <div className={classes.OtherSrevicesPage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}