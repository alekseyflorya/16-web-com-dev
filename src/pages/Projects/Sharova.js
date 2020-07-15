import React from "react";
import classes from "./Sharova.module.scss"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "@material-ui/core/Container";
import sharovaFullImg from "../../assets/img/sharovaopora.jpg"

function Sharova() {
  return(
    <div className={classes.Sharova}>
      <Header />
      <SharovaHeaderDesign />
      <Footer />
    </div>
  )
}

export default Sharova

function SharovaHeaderDesign() {
  return (
  <section className={classes.SharovaHeaderDesign}>
    <Container className={classes.Container}>
      <img className={classes.SharovaFullImg} src={sharovaFullImg} alt=""/>
    </Container>
  </section>
)
}