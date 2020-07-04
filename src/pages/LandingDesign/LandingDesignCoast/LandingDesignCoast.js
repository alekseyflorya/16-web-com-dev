import React from "react";
import classes from "./LandingDesignCoast.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function LandingDesignCoast() {
  return (
    <section className={classes.LandingDesignCoast}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item container className={classes.TopRow} alignItems="center">
            <Grid item sm={7}>
              <h2 className={classes.Headding}>От чего зависит стоимость дизайна лендинга?</h2>
            </Grid>
            <Grid item sm={5}>
              <p className={classes.Text}>Веб-студия 16.web формирует цены на услуги по разработке дизайна лендингов, учитывая следующие факторы:</p>
            </Grid>
          </Grid>
          <Grid item container className={classes.BottomRow} spacing={10}>
            <Grid item container sm={4} className={classes.Item}>
              <h3 className={classes.Title}>Наличие уникальных решений</h3>
              <p className={classes.Text}>Уникальная разработка всегда стоит намного дороже, чем дизайн, созданный на основе стандартного шаблона</p>
            </Grid>
            <Grid item container sm={4} className={classes.Item}>
              <h3 className={classes.Title}>Сложность работы</h3>
              <p className={classes.Text}>Реализация проекта, требующего высокого профессионализма и большого количества времени, чревата увеличением бюджета</p>
            </Grid>
            <Grid item container sm={4} className={classes.Item}>
              <h3 className={classes.Title}>Адаптивная вёрстка</h3>
              <p className={classes.Text}>Она нужна, если вы хотите, чтобы сайт корректно отображался на смартфонах и планшетах</p>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default LandingDesignCoast