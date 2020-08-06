import React from "react";
import classes from "./CorporateCost.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

function CorporateCost() {
  return (
    <section className={classes.CorporateCost}>
      <Container fixed className={classes.Container}>
        <Grid container alignItems="center" className={classes.HeaddingBox}>
          <Grid item container sm={6}>
            <Fade up><h2 className={classes.Headding}>От чего зависит стоимость корпоративного сайта?</h2></Fade>
          </Grid>
          <Grid item container sm={6}>
            <Fade up><p className={classes.Text}>Немаловажным фактором является также дальнейшее обслуживание ресурса – поддержка корпоративных сайтов часто является необходимым условием корректного функционирования.</p></Fade>
          </Grid>
        </Grid>
        <Grid container className={classes.FactorsBox}>
          <Grid item container sm={6} className={classes.FactorsLeft}>
            <Fade up>
            <p className={classes.Text}>Обращаясь в веб-студию 16.web, вы должны представлять в общих чертах, как рассчитать бюджет, выделяемый на выполнение тех или иных задач.</p>
            <p className={classes.Text}>На разработку корпоративного сайта цена зависит от следующих факторов:</p>
            </Fade>
          </Grid>
          <Grid item container sm={6} className={classes.GridList}>
            <Grid item container sm={6} className={classes.GridListItem}>
              <Fade up>доменное имя и хостинг</Fade>
            </Grid>
            <Grid item container sm={6} className={classes.GridListItem}>
              <Fade up>сложность дизайна</Fade>
            </Grid>
            <Grid item container sm={6} className={classes.GridListItem}>
              <Fade up>необходимый функционал</Fade>
            </Grid>
            <Grid item container sm={6} className={classes.GridListItem}>
              <Fade up>адаптация под гаджеты</Fade>
            </Grid>
            <Grid item container sm={6} className={classes.GridListItem}>
              <Fade up>система управления</Fade>
            </Grid>
            <Grid item container sm={6} className={classes.GridListItem}>
              <Fade up>поисковая оптимизация и т.п</Fade>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default CorporateCost