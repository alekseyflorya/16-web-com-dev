import React from "react";
import classes from './Clients.module.scss'
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LogoColorit from "../../assets/img/LogoColorit.png";
import LogoBronex from "../../assets/img/LogoBronex.png";
import LogoPragma from "../../assets/img/LogoPragma.png";
import LogoProstavka from "../../assets/img/LogoProstavka.png";
import LogoTakar from "../../assets/img/LogoTakar.png";

function Clients() {
  return (
    <section className={classes.Clients}>
      {/*<Container fixed className={classes.Container}>*/}
      {/*  <h2 className={classes.Headding}>Наши клиенты:</h2>*/}
      {/*  <Grid container className={classes.ClientsGrid}>*/}
      {/*    <Grid item container sm={2} xs={6} className={classes.ClientsGridItem}>*/}
      {/*      <img src={LogoColorit} alt="LogoColorit"/>*/}
      {/*    </Grid>*/}
      {/*    <Grid item container sm={2} xs={6} className={classes.ClientsGridItem}>*/}
      {/*      <img src={LogoBronex} alt="LogoBronex"/>*/}
      {/*    </Grid>*/}
      {/*    <Grid item container sm={2} xs={6} className={classes.ClientsGridItem}>*/}
      {/*      <img src={LogoPragma} alt="LogoPragma"/>*/}
      {/*    </Grid>*/}
      {/*    <Grid item container sm={2} xs={6} className={classes.ClientsGridItem}>*/}
      {/*      <img src={LogoProstavka} alt="LogoProstavka"/>*/}
      {/*    </Grid>*/}
      {/*    <Grid item container sm={2} xs={6} className={classes.ClientsGridItem}>*/}
      {/*      <img src={LogoProstavka} alt="LogoProstavka"/>*/}
      {/*    </Grid>*/}
      {/*    <Grid item container sm={2} xs={6} className={classes.ClientsGridItem}>*/}
      {/*      <img src={LogoTakar} alt="LogoTakar"/>*/}
      {/*    </Grid>*/}
      {/*  </Grid>*/}
      {/*</Container>*/}
      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>Наши клиенты:</h2>
        <Grid className={classes.ClientsGridBox}>
          <Grid container className={classes.ClientsGrid}>
            <Grid item container sm={2} xs={6} className={classes.ClientsGridItem}>
              <img src={LogoColorit} alt="LogoColorit"/>
            </Grid>
            <Grid item container sm={2} xs={6} className={classes.ClientsGridItem}>
              <img src={LogoBronex} alt="LogoBronex"/>
            </Grid>
            <Grid item container sm={2} xs={6} className={classes.ClientsGridItem}>
              <img src={LogoPragma} alt="LogoPragma"/>
            </Grid>
            <Grid item container sm={2} xs={6} className={classes.ClientsGridItem}>
              <img src={LogoProstavka} alt="LogoProstavka"/>
            </Grid>
            <Grid item container sm={2} xs={6} className={classes.ClientsGridItem}>
              <img src={LogoProstavka} alt="LogoProstavka"/>
            </Grid>
            <Grid item container sm={2} xs={6} className={classes.ClientsGridItem}>
              <img src={LogoTakar} alt="LogoTakar"/>
            </Grid>
          </Grid>
          <Grid container className={classes.ClientsGridCloned}>
            <Grid item container sm={2} xs={6} className={classes.ClientsGridItem}>
              <img src={LogoColorit} alt="LogoColorit"/>
            </Grid>
            <Grid item container sm={2} xs={6} className={classes.ClientsGridItem}>
              <img src={LogoBronex} alt="LogoBronex"/>
            </Grid>
            <Grid item container sm={2} xs={6} className={classes.ClientsGridItem}>
              <img src={LogoPragma} alt="LogoPragma"/>
            </Grid>
            <Grid item container sm={2} xs={6} className={classes.ClientsGridItem}>
              <img src={LogoProstavka} alt="LogoProstavka"/>
            </Grid>
            <Grid item container sm={2} xs={6} className={classes.ClientsGridItem}>
              <img src={LogoProstavka} alt="LogoProstavka"/>
            </Grid>
            <Grid item container sm={2} xs={6} className={classes.ClientsGridItem}>
              <img src={LogoTakar} alt="LogoTakar"/>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Clients