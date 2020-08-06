import React from "react";
import classes from "./CorporateFeatures.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from 'react-reveal/Fade'

function CorporateFeatures() {
  return (
    <section className={classes.CorporateFeatures}>
      <Container fixed className={classes.Container}>
        <Grid container alignItems="center" className={classes.HeaddingBox}>
          <Grid item container sm={6}>
            <Fade up><h2 className={classes.Headding}>Особенности разработки корпоративного сайта</h2></Fade>
          </Grid>
          <Grid item container sm={6}>
            <Fade up><p className={classes.Text}>Сотрудники веб-студии 16.web имеют богатый опыт в выполнении подобных задач – при создании сайта компании команда прорабатывает все его функции:</p></Fade>
          </Grid>
        </Grid>
        <Grid container className={classes.GridList}>
          <Grid item container sm={6} className={classes.GridListItem}>
            <Fade up>Предоставление информации о бренде, а также о предлагаемых товарах и услугах</Fade>
          </Grid>
          <Grid item container sm={6} className={classes.GridListItem}>
            <Fade up>Привлечение целевой аудитории: покупателей, сотрудников и партнёров</Fade>
          </Grid>
          <Grid item container sm={6} className={classes.GridListItem}>
            <Fade up>Формирование положительного имиджа компании</Fade>
          </Grid>
          <Grid item container sm={6} className={classes.GridListItem}>
            <Fade up>Взаимосвязь между персоналом, общение с клиентами и партнёрами, и т.п.</Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default CorporateFeatures