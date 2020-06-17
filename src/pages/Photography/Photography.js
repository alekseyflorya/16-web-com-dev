import React from 'react';
import classes from './Photography.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Photography(){

  return (
    <div className={classes.PhotographyPage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}