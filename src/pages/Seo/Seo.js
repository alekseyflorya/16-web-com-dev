import React from 'react';
import classes from './Seo.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Seo(){

  return (
    <div className={classes.SeoPage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}