import React from 'react';
import classes from './Home.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutShort from "../../components/AboutShort";
import ServiceListSort from "../../components/ServiceListSort";
import PortfilioShort from "../../components/PortfilioShort";
import Clients from "../../components/Clients";
import Reviews from "../../components/Reviews";
import LastNews from "../../components/LastNews";
import JoinUs from "../../components/JoinUs";

export default function Home() {

  return (
    <div className={classes.HomePage}>
      <Header />
      <AboutShort />
      <ServiceListSort />
      <PortfilioShort />
      <Clients />
      <Reviews />
      <LastNews />
      <JoinUs />
      <Footer />
    </div>
  )
}