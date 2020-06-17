import React from 'react';
import classes from './Faq.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Faq(){

  return (
    <div className={classes.FaqPage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}