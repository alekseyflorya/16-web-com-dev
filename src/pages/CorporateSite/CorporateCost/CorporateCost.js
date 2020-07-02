import React from "react";
import classes from "./CorporateCost.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function CorporateCost() {
  return (
    <section className={classes.CorporateCost}>
      <Container fixed className={classes.Container}>
        <Grid container alignItems="center" className={classes.HeaddingBox}>
          <Grid item container sm={6}>
            <h2 className={classes.Headding}>От чего зависит стоимость корпоративного сайта?</h2>
          </Grid>
          <Grid item container sm={6}>
            <p className={classes.Text}>Немаловажным фактором является также дальнейшее обслуживание ресурса – поддержка корпоративных сайтов часто является необходимым условием корректного функционирования.</p>
          </Grid>
        </Grid>
        <Grid container className={classes.FactorsBox}>
          <Grid item container sm={6} className={classes.FactorsLeft}>
            <p className={classes.Text}>Обращаясь в веб-студию 16.web, вы должны представлять в общих чертах, как рассчитать бюджет, выделяемый на выполнение тех или иных задач.</p>
            <p className={classes.Text}>На разработку корпоративного сайта цена зависит от следующих факторов:</p>
          </Grid>
          <Grid item container sm={6} className={classes.GridList}>
            <Grid item container sm={6} className={classes.GridListItem}>
              доменное имя и хостинг
            </Grid>
            <Grid item container sm={6} className={classes.GridListItem}>
              сложность дизайна
            </Grid>
            <Grid item container sm={6} className={classes.GridListItem}>
              необходимый функционал
            </Grid>
            <Grid item container sm={6} className={classes.GridListItem}>
              адаптация под гаджеты
            </Grid>
            <Grid item container sm={6} className={classes.GridListItem}>
              система управления
            </Grid>
            <Grid item container sm={6} className={classes.GridListItem}>
              поисковая оптимизация и т.п
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default CorporateCost