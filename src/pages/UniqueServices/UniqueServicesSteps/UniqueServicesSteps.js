import React from "react";
import classes from "./UniqueServicesSteps.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function UniqueServicesSteps() {
  return (
    <section className={classes.UniqueServicesSteps}>
      <Container fixed className={classes.Container}>
        <Grid>
          <Grid item sm={7}>
            <h2 className={classes.Headding}>Создайте собственный сайт с набором уникальных функций</h2>
          </Grid>
          <Grid item sm={5} className={classes.SubHeadding}>
            <p className={classes.Text}>Наша веб-студия 16.web предлагает свои услуги по разработке сайтов с эксклюзивным дизайном и функционалом – при этом мы готовы вам предложить следующие преимущества:</p>
          </Grid>
        </Grid>
        <Grid container sm={12} xs={12} className={classes.Cards}>
          <Grid item container sm={6} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Креативный подход</h3>
            <p className={classes.Text}>Наша команда умеет справляться с нестандартными задачами, предлагая простые и эффективные решения, позволяющие добиться нужной цели</p>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Высокий уровень профессионализма</h3>
            <p className={classes.Text}>Наши специалисты успешно справляются с разработкой сайтов под ключ, реализуя проекты самой высокой сложности</p>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Соблюдение взятых обязательств</h3>
            <p className={classes.Text}>Мы всегда сдаём работу в оговоренные сроки и гарантируем высокое качество её выполнения</p>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Владение современными технологиями</h3>
            <p className={classes.Text}>Мы внимательно следим за всеми актуальными трендами и используем в своей работе наиболее эффективные из них.</p>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default UniqueServicesSteps