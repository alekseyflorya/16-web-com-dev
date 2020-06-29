import React from "react";
import classes from "./Technologies.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function Technologies() {
  return(
    <section className={classes.Philosophy}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item container sm={6}>
            <img src="" alt=""/>
            <h3>OpenCart</h3>
            <p>Платформа, ориентированная на создание интернет-магазинов.</p>
          </Grid>
          <Grid item container sm={6}>
            <img src="" alt=""/>
            <h3>WordPress</h3>
            <p>Платформа, используемая для разработки различных web-приложений.</p>
          </Grid>
          <Grid item container sm={6}>
            <img src="" alt=""/>
            <h3>PHP</h3>
            <p>Язык программирования, разработан для написания web-приложений.</p>
          </Grid>
          <Grid item container sm={6}>
            <img src="" alt=""/>
            <h3>JS</h3>
            <p>Кросс-платформенный, объектно-ориентированный, скриптовый язык.</p>
          </Grid>
          <Grid item container sm={6}>
            <img src="" alt=""/>
            <h3>Google Analytics</h3>
            <p>Сервис, предназначенный для анализиза поведение пользователей на сайте.</p>
          </Grid>
          <Grid item container sm={6}>
            <img src="" alt=""/>
            <h3>1C</h3>
            <p>Предназначенный для автоматизации деятельности на предприятии.</p>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Technologies