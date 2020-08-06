import React from "react";
import classes from "./SitePrototypeFeatures.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from 'react-reveal/Fade'

function SitePrototypeFeatures() {
  return (
    <section className={classes.SitePrototypeFeatures}>
      <Container fixed className={classes.Container}>
        <Grid container alignItems="center" className={classes.HeaddingBox}>
          <Grid item container sm={12}>
            <Fade up><h2 className={classes.Headding}>Проектирования интерфейса сайта</h2></Fade>
          </Grid>
          <Grid item container sm={8}>
            <Fade up><p className={classes.Text}>Составление структуры и создание прототипа сайта – это этап, который реализуется одним из первых, а за ним следует разработка макета сайта. Основная суть заключается в том, чтобы добиться грамотного баланса эстетичности внешнего вида и функциональности интерфейса. При этом решаются следующие задачи:</p></Fade>
          </Grid>
        </Grid>
        <Grid container className={classes.GridList}>
          <Grid item container sm={4} className={classes.GridListItem}>
            <Fade up>Создаётся скелет с равномерным распределением веса всех страниц</Fade>
          </Grid>
          <Grid item container sm={4} className={classes.GridListItem}>
            <Fade up>Вырабатывается графическая схема с расположением главных компонентов</Fade>
          </Grid>
          <Grid item container sm={4} className={classes.GridListItem}>
            <Fade up>Определяются отступы и формат блоков, а также их назначение</Fade>
          </Grid>
          <Grid item container sm={4} className={classes.GridListItem}>
            <Fade up>Наглядно представляются дизайнерские идеи</Fade>
          </Grid>
          <Grid item container sm={4} className={classes.GridListItem}>
            <Fade up>Устраняются недостатки, видимые на этом этапе</Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SitePrototypeFeatures