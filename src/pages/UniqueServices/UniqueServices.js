import React from 'react';
import classes from './UniqueServices.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";
import Interested from "../../components/Interested";
import UniqueServicesSteps from "./UniqueServicesSteps";
import UniqueServicesCoast from "./UniqueServicesCoast";
import interestedImage from "../../assets/img/uniqueservices-interested.jpg"

const interestedTitle = 'Закажите создание своего сайта с нестандартными требованиями'
const interestedDescription = 'Создание эксклюзивных сайтов требует опыта и профессионализма – у нас есть всё это, обращайтесь!'

export default function UniqueServices(){

  return (
    <div className={classes.UniqueServices}>
      <Header />
      <UniqueServicesSteps />
      <UniqueServicesCoast />
      <Interested
        title={interestedTitle}
        interestedDescription={interestedDescription}
        interestedImage={interestedImage}
      />
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}