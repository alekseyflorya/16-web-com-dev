import React from 'react';
import classes from './Seo.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";
import SeoCost from "./SeoCost";
import SeoServices from "./SeoServices";
import WhatGivesSeo from "../../components/WhatGivesSeo";

export default function Seo(){
  const interestedDescription = 'Ясность нашей позиции очевидна: выбранный нами инновационный путь способствует повышению качества переосмысления внешне экономических политик. С учётом сложившейся международной обстановки'
  return (
    <div className={classes.SeoPage}>
      <Header />
      <SeoServices />
      <SeoCost />
      <WhatGivesSeo />
      <Interested interestedDescription={interestedDescription} />
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}