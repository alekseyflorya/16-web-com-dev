import React from 'react';
import classes from './About.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Clients from "../../components/Clients";
import JoinUs from "../../components/JoinUs";
import Reviews from "../../components/Reviews";
import Philosophy from "./Philosophy";
import FineQuality from "./FineQuality";

export default function About(){

  return (
    <div className={classes.aboutPage}>
      <Header />
      <Philosophy />
      <FineQuality />
      <Reviews />
      <Clients />
      <JoinUs />
      <Footer />
    </div>
  )
}