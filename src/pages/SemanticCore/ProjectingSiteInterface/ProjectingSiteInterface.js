import React from "react";
import classes from "./ProjectingSiteInterface.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function ProjectingSiteInterface() {
  return (
    <section className={classes.ProjectingSiteInterface}>
      <Container fixed className={classes.Container}>
        <Grid container sm={8} className={classes.HeaddingBox}>
          <h2 className={classes.Headding}>Проектирование интерфейса сайта</h2>
          <p className={classes.Text}>Семантика считается основой SEO — без обширного ядра невозможно оптимизировать страницы под конкретные запросы.</p>
        </Grid>
        <Grid container className={classes.GridList}>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            Объем органического трафика.
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            Охват потенциальных клиентов.
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            Точность отслеживания динамики позиций в поиске.
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            Логика структуры веб-ресурса.
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            Видимость сайта в тематической выдаче.
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            Соотношение целевых и нецелевых переходов.
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default ProjectingSiteInterface