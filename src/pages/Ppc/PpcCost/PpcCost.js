import React from "react";
import classes from "./PpcCost.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function PpcCost() {
  return (
    <section className={classes.PpcCost}>
      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>От чего зависит стоимость настройки контекстной рекламы?</h2>
        <Grid container className={classes.FactorsBox}>
          <Grid item container sm={6} xs={12} className={classes.FactorsLeft}>
            <p className={classes.Text}>На услуги по настройке контекстной рекламы цена формируется в зависимости от совокупности различных факторов, как внешних, так и внутренних. К числу внешних ценообразующих критериев относят количество конкурентов в вашем сегменте рынка, уровень их продаж, а также постоянно меняющиеся алгоритмы поисковых сервисов.</p>
            <p className={classes.Text}>Под внутренними факторами подразумевают следующее:</p>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.GridList}>
            <Grid item container sm={12} className={classes.GridListItem}>
              цели и задачи вашего сайта
            </Grid>
            <Grid item container sm={12} className={classes.GridListItem}>
              количество размещённого контента
            </Grid>
            <Grid item container sm={12} className={classes.GridListItem}>
              качество статистики и глубина её анализа
            </Grid>
            <Grid item container sm={12} className={classes.GridListItem}>
              тип выбранной рекламной стратегии
            </Grid>
            <Grid item container sm={12} className={classes.GridListItem}>
              гибкость настроек рекламы и т.п
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default PpcCost