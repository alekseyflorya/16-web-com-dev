import React from "react";
import classes from "./SitePrototypeFeatures.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function SitePrototypeFeatures() {
  return (
    <section className={classes.SitePrototypeFeatures}>
      <Container fixed className={classes.Container}>
        <Grid container alignItems="center" className={classes.HeaddingBox}>
          <Grid item container sm={12}>
            <h2 className={classes.Headding}>Проектирования интерфейса сайта</h2>
          </Grid>
          <Grid item container sm={8}>
            <p className={classes.Text}>Составление структуры и создание прототипа сайта – это этап, который реализуется одним из первых, а за ним следует разработка макета сайта. Основная суть заключается в том, чтобы добиться грамотного баланса эстетичности внешнего вида и функциональности интерфейса. При этом решаются следующие задачи:</p>
          </Grid>
        </Grid>
        <Grid container className={classes.GridList}>
          <Grid item container sm={4} className={classes.GridListItem}>
            Создаётся скелет с равномерным распределением веса всех страниц
          </Grid>
          <Grid item container sm={4} className={classes.GridListItem}>
            Вырабатывается графическая схема с расположением главных компонентов
          </Grid>
          <Grid item container sm={4} className={classes.GridListItem}>
            Определяются отступы и формат блоков, а также их назначение
          </Grid>
          <Grid item container sm={4} className={classes.GridListItem}>
            Наглядно представляются дизайнерские идеи
          </Grid>
          <Grid item container sm={4} className={classes.GridListItem}>
            Устраняются недостатки, видимые на этом этапе
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SitePrototypeFeatures