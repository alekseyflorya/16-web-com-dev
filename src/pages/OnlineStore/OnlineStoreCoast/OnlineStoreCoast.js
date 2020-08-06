import React from "react";
import classes from "./OnlineStoreCoast.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import OnlineStoreCoastImg from "../../../assets/img/online-store-cost.jpg";
import Fade from 'react-reveal/Fade'

function OnlineStoreCoast() {
  return (
    <section className={classes.OnlineStoreCoast}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item container sm={6} className={classes.RightColumn}>
            <Fade up>
            <h2 className={classes.Headding}>Какова стоимость создания интернет-магазина?</h2>
            <p className={classes.Text}>При создании интернет-магазина цена формируется в зависимости от ряда факторов, к числу которых относится следующее:</p>
            <Grid item container sm={12} className={classes.GridList}>
              <Grid item container sm={12} className={classes.GridListItem}>объём работы и её сложность</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>уникальность разработки и количество шаблонных решений</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>сроки выполнения задач</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>используемые технологии и решения по функционалу</Grid>
            </Grid>
            </Fade>
          </Grid>
          <Grid item container sm={6} className={classes.LeftColumn}>
            <Fade up><img className={classes.OnlineStoreCoastImg} src={OnlineStoreCoastImg} alt=""/></Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default OnlineStoreCoast