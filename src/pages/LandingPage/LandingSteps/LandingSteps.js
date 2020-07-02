import React from "react";
import classes from "./LandingSteps.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {ButtonLink} from "../../../components/UI/ButtonLink";

function LandingSteps() {
  return (
    <section className={classes.LandingSteps}>
      <Container fixed className={classes.Container}>
        <Grid>
          <Grid item sm={7}>
            <h2 className={classes.Headding}>Этапы, из которых состоит разработка лендинга</h2>
          </Grid>
          <Grid item sm={5} className={classes.SubHeadding}>
            <p className={classes.Text}>Тому, кто заказывает лендинг, важно понимать, что работа над ним потребует тщательного анализа вашего бизнеса, а также информации о конкурентах. Разработка лендинга под ключ состоит из следующих этапов:</p>
          </Grid>
        </Grid>
        <Grid container sm={12} xs={12} className={classes.Cards}>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Аудит вашей компании</h3>
            <p className={classes.Text}>Он подразумевает изучение специфики вашего бренда и определение его характерных особенностей.</p>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Сбор данных о конкурентах</h3>
            <p className={classes.Text}>Это позволяет ознакомиться с сильными и слабыми сторонами тех, кто уже работает в данной сфере.</p>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Определение запросов</h3>
            <p className={classes.Text}>Очень важно знать, что именно нужно вашей целевой аудитории.</p>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Прототипирование</h3>
            <p className={classes.Text}>Это разработка структуры сайта, определение стилистики и основных месседжей, которые он будет доносить.</p>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Дизайн и копирайтинг</h3>
            <p className={classes.Text}>После того, как намечена основная стратегия, идёт работа над текстовой и визуальной составляющими.</p>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Верстка и тестирование</h3>
            <p className={classes.Text}>Это процесс сборки и проверки эффективности лендинга.</p>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default LandingSteps