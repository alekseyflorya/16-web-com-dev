import React from "react";
import classes from "./InternalOptimizationIncludes.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from 'react-reveal/Fade'

function InternalOptimizationIncludes() {
  return (
    <section className={classes.SmmServices}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Fade up>
          <h2 className={classes.Headding}>Что включает в себя внутренняя оптимизация</h2>
          <p className={classes.Text}>Работа распространяется на все факторы, которые могут влиять на результаты поискового ранжирования проекта. Внутренняя оптимизация страниц сайта включает в себя следующие работы:</p>
          </Fade>
        </Grid>
        <Fade up>
        <Grid container sm={12} xs={12} className={classes.Cards}>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Сбор и систематизация ключевых запросов</h3>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Организация внутренней перелинковки</h3>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Выявление и устранение всех технических ошибок</h3>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Оптимизация и валидация программного кода</h3>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Формирование служебных файлов sitemap.xml и robots.txt</h3>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Мобильная адаптация</h3>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Составление и добавление уникальных мета-тегов title и description</h3>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Переход на человекопонятные URL</h3>
          </Grid>
        </Grid>
        </Fade>
      </Container>
    </section>
  )
}

export default InternalOptimizationIncludes