import React from "react";
import classes from "./Pragma.module.scss"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "@material-ui/core/Container";
import pragmaFullImg from "../../assets/img/pragma-full.jpg"

function Pragma() {
  return(
    <div className={classes.Bronex}>
      <Header />
      <PragmaHeaderDesign />
      <Footer />
    </div>
  )
}

export default Pragma

function PragmaHeaderDesign() {
  return (
  <section className={classes.PragmaHeaderDesign}>
    <Container className={classes.Container}>
      <img className={classes.PragmaFullImg} src={pragmaFullImg} alt=""/>
    </Container>
  </section>
)
}