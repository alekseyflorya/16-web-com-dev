import React from 'react';
import classes from './Ppc.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfilioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";

export default function Ppc(){

  return (
    <div className={classes.PpcPage}>
      <Header />
      <Interested />
      <PortfilioShort />
      <Reviews />
      <Footer />
    </div>
  )
}