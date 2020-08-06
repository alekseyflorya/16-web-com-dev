import React from "react";
import classes from "./UniqueServicesCoast.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from 'react-reveal/Fade'

function UniqueServicesCoast() {
  return (
    <section className={classes.UniqueServicesCoast}>
      <Container fixed className={classes.Container}>
        <Fade up><h2 className={classes.Headding}>Какова стоимость создания сайта под ключ?</h2></Fade>
        <Grid container>
          <Grid item container sm={12} className={classes.LeftColumn}>
            <Grid item container sm={6}>
              <Fade up><p className={classes.Text}>Вполне очевидно, что такой сайт под заказ обойдётся дороже обычного – это будет необходимо учесть, составляя бюджет. Веб-студия 16.web на сайты нестандартного типа под заказ цену формирует на основании следующих критериев:</p></Fade>
            </Grid>
            <Grid item container sm={6}>
              <Fade up><p className={classes.Text}>Создание уникальных сайтов относится к числу задач, требующих по сравнению со стандартными проектами большего количества времени и ресурсов, а также более высокой квалификации персонала.</p></Fade>
            </Grid>
          </Grid>
          <Grid item container sm={12} className={classes.RightColumn}>
            <Fade up>
            <Grid item container sm={12} className={classes.GridList}>
              <Grid item container sm={6} className={classes.GridListItem}>качество и количество контента</Grid>
              <Grid item container sm={6} className={classes.GridListItem}>используемые технологии</Grid>
              <Grid item container sm={6} className={classes.GridListItem}>сроки выполнения работы и т.п</Grid>
              <Grid item container sm={6} className={classes.GridListItem}>сложность поставленной задачи</Grid>
              <Grid item container sm={6} className={classes.GridListItem}>объём работы и количество потраченного времени</Grid>
              <Grid item container sm={6} className={classes.GridListItem}>сложность дизайна, интеграций и функционала</Grid>
            </Grid>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default UniqueServicesCoast