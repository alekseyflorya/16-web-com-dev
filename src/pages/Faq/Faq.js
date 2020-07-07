import React from 'react';
import classes from './Faq.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FaqAccordion from "./FaqAccordion";

export default function Faq(){

  return (
    <div className={classes.FaqPage}>
      <Header />
      <FaqAccordion />
      <Footer />
    </div>
  )
}