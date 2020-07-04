import React from "react";
import classes from "./SeoServices.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function SeoServices() {
  return (
    <section className={classes.SeoServices}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item container className={classes.TopRow} alignItems="center">
            <Grid item sm={7}>
              <h2 className={classes.Headding}>Продвижение сайтов на поисковых ресурсах</h2>
            </Grid>
            <Grid item sm={5}>
              <p className={classes.Text}>Наши специалисты знают все нюансы белого SEO- продвижения и готовы использовать весь арсенал средств.</p>
            </Grid>
          </Grid>
          <Grid item container className={classes.BottomRow} spacing={10}>
            <Grid item container sm={6} className={classes.Item}>
              <h3 className={classes.Title}>SEO-аудит сайта</h3>
              <p className={classes.Text}>Комплексный анализ сайта позволяет выявить внутренние ошибки и проверить, насколько ресурс соответствует требованиям поисковиков – этот этап реализуется в первую очередь.</p>
            </Grid>
            <Grid item container sm={6} className={classes.Item}>
              <h3 className={classes.Title}>Составление семантического ядра</h3>
              <p className={classes.Text}>Семантическое ядро – это база ключевых запросов, которые подходят для определения конкретной услуги или товара. Сбор семантического ядра позволяет найти оптимальное место каждой группе запросов для дальнейшей оптимизации всех страниц.</p>
            </Grid>
            <Grid item container sm={6} className={classes.Item}>
              <h3 className={classes.Title}>Внутренняя оптимизация сайта</h3>
              <p className={classes.Text}>В процессе внутренней оптимизации меняют код и содержимое сайта, приводя их в соответствие с требованиями поисковых ресурсов. В первую очередь это статейное продвижение, предполагающее наполнение сайта качественным контентом.</p>
            </Grid>
            <Grid item container sm={6} className={classes.Item}>
              <h3 className={classes.Title}>Внешняя оптимизация сайта</h3>
              <p className={classes.Text}>Суть внешней оптимизации – это ссылочное продвижение, в ходе которого идёт работа над наращиванием количества ссылок, размещённых на других ресурсах. По факту, это рекомендации, и чем их больше, тем выше рейтинг сайта в поисковых системах.</p>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SeoServices