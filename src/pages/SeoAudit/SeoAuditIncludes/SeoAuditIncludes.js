import React from "react";
import classes from "./SeoAuditIncludes.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from 'react-reveal/Fade'

function SeoAuditIncludes() {
  return (
    <section className={classes.SeoAuditIncludes}>
      <Container fixed className={classes.Container}>
        <Grid container alignItems="center" className={classes.HeaddingBox}>
          <Fade up><h2 className={classes.Headding}>В этот комплекс входят</h2></Fade>
        </Grid>
        <Grid container className={classes.GridList}>
          <Grid item container sm={6} xs={12} className={classes.GridListItem}>
            <Fade up>Технический SEO анализ - проверка индексации сайта и его скорости, наличия и оптимизации контента страниц сайта.</Fade>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.GridListItem}>
            <Fade up>Юзабилити - анализ, отвечающий за удобство в пользовании сайтом.</Fade>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.GridListItem}>
            <Fade up>Анализ ссылочного профиля.</Fade>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.GridListItem}>
            <Fade up>Анализ конкурентов.</Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SeoAuditIncludes