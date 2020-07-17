import React from "react";
import classes from "./SeoAudit.module.scss"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Interested from "../../components/Interested";
import PortfolioShort from "../../components/PortfilioShort";
import Reviews from "../../components/Reviews";
import ServiceListSort from "../../components/ServiceListSort";
import SeoAuditAdvantages from "./SeoAuditAdvantages";
import SeoAuditIncludes from "./SeoAuditIncludes";
import SeoAuditInfo from "./SeoAuditInfo";
import WhatGivesSeo from "../../components/WhatGivesSeo";

function SeoAudit() {
  return (
    <div className={classes.SeoAudit}>
      <Header />
      <SeoAuditInfo />
      <SeoAuditIncludes />
      <SeoAuditAdvantages />
      <WhatGivesSeo />
      <Interested />
      <PortfolioShort />
      <Reviews />
      <ServiceListSort />
      <Footer />
    </div>
  )
}

export default SeoAudit