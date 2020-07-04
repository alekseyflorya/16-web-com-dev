import React from 'react';
import classes from './SitePrototype.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";
import Interested from "../../components/Interested";
import interestedImage from "../../assets/img/interested-image.jpg"
import SitePrototypeFeatures from "./SitePrototypeFeatures";
import SitePrototypeCost from "./SitePrototypeCost";

function SitePrototype(){
  const interestedDescription = 'Веб-студия 16.web готова взяться за составление структуры и прототипа вашего сайта с учётом всех пожеланий.'
  const buttonTitle = 'Заказать макет'

  return (
    <div className={classes.SitePrototype}>
      <Header />
      <SitePrototypeFeatures />
      <SitePrototypeCost />
      <Interested interestedDescription={interestedDescription} buttonTitle={buttonTitle} interestedImage={interestedImage}/>
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}

export default SitePrototype