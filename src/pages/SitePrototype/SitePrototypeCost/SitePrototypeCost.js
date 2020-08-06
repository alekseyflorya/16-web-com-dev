import React from "react";
import classes from "./SitePrototypeCost.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from 'react-reveal/Fade'

function SitePrototypeCost() {
  return (
    <section className={classes.SitePrototypeCost}>
      <Container fixed className={classes.Container}>
        <Fade up><h2 className={classes.Headding}>На что обратить внимание на этапе проектирования веб-сайта</h2></Fade>
        <Grid container className={classes.FactorsBox}>
          <Grid item container sm={6} className={classes.FactorsLeft}>
            <Fade up>
            <p className={classes.Text}>От грамотного подбора перечисленных параметров зависит то, как будет восприниматься имидж компании, уровень доверия к ней и т.п. Для пользователя удобный интерфейс является не менее важным, чем стильный внешний вид, сегодня принято говорить о ui/ux-дизайне сайта, чья основная задача состоит в том, чтобы сбалансировать оба этих фактора.</p>
            <p className={classes.Text}>Разработчики веб-студии 16.web подходят к созданию макета грамотно и профессионально – это позволяет добиться и эстетичности, и функциональности.</p>
            </Fade>
          </Grid>
          <Grid item container sm={6} className={classes.GridList}>
            <Fade up><p className={classes.Text}>Для большинства заказчиков основополагающим фактором является внешний вид будущего сайта – при этом очень тщательно оценивают каждую деталь:</p></Fade>
            <Grid item container sm={12} className={classes.GridListItem}>
              <Fade up>цветовую гамму</Fade>
            </Grid>
            <Grid item container sm={12} className={classes.GridListItem}>
              <Fade up>типографику</Fade>
            </Grid>
            <Grid item container sm={12} className={classes.GridListItem}>
              <Fade up>логотипы</Fade>
            </Grid>
            <Grid item container sm={12} className={classes.GridListItem}>
              <Fade up>композицию и другие факторы</Fade>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SitePrototypeCost