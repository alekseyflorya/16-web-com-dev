import React from "react";
import classes from "./PpcSetting.module.scss"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";
import PpcSettingServices from "./PpcSettingServices";
import PpcSettingCost from "./PpcSettingCost";
import interestedImage from "../../assets/img/ppcsetting-interested.jpg"

function PpcSetting() {
  return (
    <div className={classes.Remarketing}>
      <Header />
      <PpcSettingServices />
      <PpcSettingCost />
      <Interested interestedImage={interestedImage}/>
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}

export default PpcSetting