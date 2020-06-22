import React from 'react';
import classes from './Branding.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Branding(){

  return (
    <div className={classes.BrandingPage}>
      <Header />

      <Footer />
    </div>
  )
}