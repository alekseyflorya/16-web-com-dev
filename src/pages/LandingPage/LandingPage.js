import React from 'react';
import classes from './LandingPage.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfolioShort from "../../components/PortfilioShort";
import LandingSteps from "./LandingSteps"
import LandingCoast from "./LandingCoast";
import interestedImage from "../../assets/img/landingpage-interested.jpg"

export default function LandingPage(){

  return (
    <div className={classes.LandingPage}>
      <Header />
      <LandingSteps />
      <LandingCoast />
      <Interested interestedImage={interestedImage}/>
      <PortfolioShort />
      <Footer />
    </div>
  )
}