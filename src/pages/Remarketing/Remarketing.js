import React from "react";
import classes from "./Remarketing.module.scss"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";
import RemarketingHowItWorks from "./RemarketingHowItWorks";
import RemarketingOrderInfo from "./RemarketingOrderInfo";
import interestedImage from "../../assets/img/remarketing-interested.jpg"

function Remarketing() {
  return (
    <div className={classes.Remarketing}>
      <Header />
      <RemarketingHowItWorks />
      <RemarketingOrderInfo />
      <Interested interestedImage={interestedImage}/>
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}

export default Remarketing