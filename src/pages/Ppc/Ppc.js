import React from 'react';
import classes from './Ppc.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Ppc(){

  return (
    <div className={classes.PpcPage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}