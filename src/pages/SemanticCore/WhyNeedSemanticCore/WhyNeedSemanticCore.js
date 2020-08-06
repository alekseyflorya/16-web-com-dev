import React from 'react';
import classes from "./WhyNeedSemanticCore.module.scss"
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Fade from 'react-reveal/Fade'

function WhyNeedSemanticCore() {
  return (
    <section className={classes.WhyNeedSemanticCore}>
      <Container fixed>
        <Grid container>
          <Grid item container sm={6} xs={12}>
            <Fade up><h2 className={classes.Headding}>Зачем нужна семантика для сайта</h2></Fade>
          </Grid>
          <Grid item container sm={6} xs={12}>
            <Fade up><p className={classes.Text}>Сбор семантического ядра на заказ — это работа по подбору ключевых фраз, с помощью которых целевая аудитория ищет в интернете продукт компании.</p></Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default WhyNeedSemanticCore;