import React from "react";
import classes from "./SeoAuditIncludes.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function SeoAuditIncludes() {
  return (
    <section className={classes.SeoAuditIncludes}>
      <Container fixed className={classes.Container}>
        <Grid container alignItems="center" className={classes.HeaddingBox}>
          <h2 className={classes.Headding}>В этот комплекс входят</h2>
        </Grid>
        <Grid container className={classes.GridList}>
          <Grid item container sm={6} xs={12} className={classes.GridListItem}>
            Технический SEO анализ - проверка индексации сайта и его скорости, наличия и оптимизации контента страниц сайта.
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.GridListItem}>
            Юзабилити - анализ, отвечающий за удобство в пользовании сайтом.
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.GridListItem}>
            Анализ ссылочного профиля.
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.GridListItem}>
            Анализ конкурентов.
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SeoAuditIncludes