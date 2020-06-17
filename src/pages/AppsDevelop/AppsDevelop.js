import React from 'react';
import classes from './AppsDevelop.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function AppsDevelop(){

  return (
    <div className={classes.AppsDevelopPage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}