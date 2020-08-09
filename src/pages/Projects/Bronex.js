import React from "react";
import classes from "./Bronex.module.scss"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "@material-ui/core/Container";
import bronexFullImg from "../../assets/img/bronex-full.jpg"
import PortfolioPagination from "../../components/PortfolioPagination";

function Bronex() {
  return(
    <div className={classes.Bronex}>
      <Header />
      <BronexHeaderDesign />
      <PortfolioPagination />
      <Footer />
    </div>
  )
}

export default Bronex

function BronexHeaderDesign() {
  return (
  <section className={classes.BronexHeaderDesign}>
    <Container className={classes.Container}>
      <img className={classes.BronexFullImg} src={bronexFullImg} alt=""/>
    </Container>
  </section>
)
}