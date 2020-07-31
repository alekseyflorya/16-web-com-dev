import React from "react";
import classes from './Clients.module.scss'
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LogoColorit from "../../assets/img/colorit.svg";
import LogoBronex from "../../assets/img/bronex.svg";
import LogoPragma from "../../assets/img/autopragma.svg";
import LogoProstavka from "../../assets/img/autoprostavka.svg";
import LogoTakar from "../../assets/img/takar.svg";
import LogoOpora from "../../assets/img/opora.svg";

function Clients() {
  return (
    <section className={classes.Clients}>
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
              <img src={LogoOpora} alt="LogoOpora"/>
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
              <img src={LogoOpora} alt="LogoOpora"/>
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