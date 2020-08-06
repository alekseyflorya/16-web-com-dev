import React from "react";
import classes from "./LandingDesignCoast.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from 'react-reveal/Fade'

function LandingDesignCoast() {
  return (
    <section className={classes.LandingDesignCoast}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item container className={classes.TopRow} alignItems="center">
            <Grid item sm={7}>
              <Fade up><h2 className={classes.Headding}>От чего зависит стоимость дизайна лендинга?</h2></Fade>
            </Grid>
            <Grid item sm={5}>
              <Fade up><p className={classes.Text}>Веб-студия 16.web формирует цены на услуги по разработке дизайна лендингов, учитывая следующие факторы:</p></Fade>
            </Grid>
          </Grid>
          <Grid item container className={classes.BottomRow}>
            <Grid item container sm={4} className={classes.Item}>
              <Fade up>
              <h3 className={classes.Title}>Наличие уникальных решений</h3>
              <p className={classes.Text}>Уникальная разработка всегда стоит намного дороже, чем дизайн, созданный на основе стандартного шаблона</p>
              </Fade>
            </Grid>
            <Grid item container sm={4} className={classes.Item}>
              <Fade up>
              <h3 className={classes.Title}>Сложность работы</h3>
              <p className={classes.Text}>Реализация проекта, требующего высокого профессионализма и большого количества времени, чревата увеличением бюджета</p>
              </Fade>
            </Grid>
            <Grid item container sm={4} className={classes.Item}>
              <Fade up>
              <h3 className={classes.Title}>Адаптивная вёрстка</h3>
              <p className={classes.Text}>Она нужна, если вы хотите, чтобы сайт корректно отображался на смартфонах и планшетах</p>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default LandingDesignCoast