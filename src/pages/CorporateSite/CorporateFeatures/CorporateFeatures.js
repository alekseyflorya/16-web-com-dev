import React from "react";
import classes from "./CorporateFeatures.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function CorporateFeatures() {
  return (
    <section className={classes.CorporateFeatures}>
      <Container fixed className={classes.Container}>
        <Grid container alignItems="center" className={classes.HeaddingBox}>
          <Grid item container sm={6}>
            <h2 className={classes.Headding}>Особенности разработки корпоративного сайта</h2>
          </Grid>
          <Grid item container sm={6}>
            <p className={classes.Text}>Сотрудники веб-студии 16.web имеют богатый опыт в выполнении подобных задач – при создании сайта компании команда прорабатывает все его функции:</p>
          </Grid>
        </Grid>
        <Grid container className={classes.GridList}>
          <Grid item container sm={6} className={classes.GridListItem}>
            Предоставление информации о бренде, а также о предлагаемых товарах и услугах
          </Grid>
          <Grid item container sm={6} className={classes.GridListItem}>
            Привлечение целевой аудитории: покупателей, сотрудников и партнёров
          </Grid>
          <Grid item container sm={6} className={classes.GridListItem}>
            Формирование положительного имиджа компании
          </Grid>
          <Grid item container sm={6} className={classes.GridListItem}>
            Взаимосвязь между персоналом, общение с клиентами и партнёрами, и т.п.
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default CorporateFeatures