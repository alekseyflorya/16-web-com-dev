import React from 'react';
import classes from './QaTesting.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function QaTesting(){

  return (
    <div className={classes.QaTestingPage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}