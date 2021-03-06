import React from "react";
import classes from "./PpcCost.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from 'react-reveal/Fade'

function PpcCost() {
  return (
    <section className={classes.PpcCost}>
      <Container fixed className={classes.Container}>
        <Fade up><h2 className={classes.Headding}>От чего зависит стоимость настройки контекстной рекламы?</h2></Fade>
        <Grid container className={classes.FactorsBox}>
          <Grid item container sm={6} xs={12} className={classes.FactorsLeft}>
            <Fade up>
            <p className={classes.Text}>На услуги по настройке контекстной рекламы цена формируется в зависимости от совокупности различных факторов, как внешних, так и внутренних. К числу внешних ценообразующих критериев относят количество конкурентов в вашем сегменте рынка, уровень их продаж, а также постоянно меняющиеся алгоритмы поисковых сервисов.</p>
            <p className={classes.Text}>Под внутренними факторами подразумевают следующее:</p>
            </Fade>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.GridList}>
            <Grid item container sm={12} className={classes.GridListItem}>
              <Fade up>цели и задачи вашего сайта</Fade>
            </Grid>
            <Grid item container sm={12} className={classes.GridListItem}>
              <Fade up>количество размещённого контента</Fade>
            </Grid>
            <Grid item container sm={12} className={classes.GridListItem}>
              <Fade up>качество статистики и глубина её анализа</Fade>
            </Grid>
            <Grid item container sm={12} className={classes.GridListItem}>
              <Fade up>тип выбранной рекламной стратегии</Fade>
            </Grid>
            <Grid item container sm={12} className={classes.GridListItem}>
              <Fade up>гибкость настроек рекламы и т.п</Fade>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default PpcCost