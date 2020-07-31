import React from 'react';
import classes from './SiteCreating.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceListSort from "../../components/ServiceListSort";
import PortfolioShort from "../../components/PortfilioShort";
import Interested from "../../components/Interested";
import SiteCreatingList from "./SiteCreatingList";
import StudioAdvantages from "../../components/StudioAdvantages";
import Technologies from "./Technilogies";
import interestedImage from "../../assets/img/sitecreating-interested.jpg"

export default function SiteCreating(){

  const title = 'Рекомендуем заказать сайт под ключ'
  const interestedDescription = 'Веб-студия 16.web предлагает широкий перечень услуг, способствующих продвижению бренда в интернете, однако наиболее правильным будет решение заказать у нас сайт под ключ. Комплексное решение задачи даёт возможность учесть все факторы, от которых зависит эффективность результата – это поможет существенно увеличить прибыльность вашего бизнеса.'

  return (
    <div className={classes.SiteCreatingPage}>
      <Header />
      <SiteCreatingList />
      <StudioAdvantages />
      <Technologies />
      <Interested title={title} interestedDescription={interestedDescription} interestedImage={interestedImage}/>
      <PortfolioShort />
      <ServiceListSort />
      <Footer />
    </div>
  )
}