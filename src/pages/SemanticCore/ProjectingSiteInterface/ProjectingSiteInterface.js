import React from "react";
import classes from "./ProjectingSiteInterface.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from 'react-reveal/Fade'

function ProjectingSiteInterface() {
  return (
    <section className={classes.ProjectingSiteInterface}>
      <Container fixed className={classes.Container}>
        <Grid container sm={8} className={classes.HeaddingBox}>
          <Fade up>
          <h2 className={classes.Headding}>Проектирование интерфейса сайта</h2>
          <p className={classes.Text}>Семантика считается основой SEO — без обширного ядра невозможно оптимизировать страницы под конкретные запросы.</p>
          </Fade>
        </Grid>
        <Grid container className={classes.GridList}>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            <Fade up>Объем органического трафика.</Fade>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            <Fade up>Охват потенциальных клиентов.</Fade>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            <Fade up>Точность отслеживания динамики позиций в поиске.</Fade>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            <Fade up>Логика структуры веб-ресурса.</Fade>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            <Fade up>Видимость сайта в тематической выдаче.</Fade>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            <Fade up>Соотношение целевых и нецелевых переходов.</Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default ProjectingSiteInterface