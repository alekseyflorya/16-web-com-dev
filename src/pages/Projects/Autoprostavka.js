import React from "react";
import classes from "./Autoprostavka.module.scss"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "@material-ui/core/Container";
import autoprostavkaFullImg from "../../assets/img/autoprostavka-full.jpg"
import PortfolioPagination from "../../components/PortfolioPagination"

function Autoprostavka() {
  return(
    <div className={classes.Autoprostavka}>
      <Header />
      <AutoprostavkaHeaderDesign />
      <PortfolioPagination />
      <Footer />
    </div>
  )
}

export default Autoprostavka

function AutoprostavkaHeaderDesign() {
  return (
  <section className={classes.AutoprostavkaHeaderDesign}>
    <Container className={classes.Container}>
      <img className={classes.AutoprostavkaFullImg} src={autoprostavkaFullImg} alt=""/>
    </Container>
  </section>
)
}