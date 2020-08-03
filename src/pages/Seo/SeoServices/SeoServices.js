import React from "react";
import classes from "./SeoServices.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom"

function SeoServices() {
  return (
    <section className={classes.SeoServices}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item container className={classes.TopRow} alignItems="center">
            <Grid item sm={7} xs={12}>
              <h2 className={classes.Headding}>Продвижение сайтов на поисковых ресурсах</h2>
            </Grid>
            <Grid item sm={5} xs={12}>
              <p className={classes.Text}>Наши специалисты знают все нюансы белого SEO- продвижения и готовы использовать весь арсенал средств.</p>
            </Grid>
          </Grid>
          <Grid item container className={classes.BottomRow}>
            <Grid item container sm={6} xs={12} className={classes.Item}>
              <Link to="/services/internetmarketing/seo/seo-audit" className={classes.Title}>SEO-аудит сайта</Link>
              <p className={classes.Text}>Комплексный анализ сайта позволяет выявить внутренние ошибки и проверить, насколько ресурс соответствует требованиям поисковиков – этот этап реализуется в первую очередь.</p>
            </Grid>
            <Grid item container sm={6} xs={12} className={classes.Item}>
              <Link to="/services/internetmarketing/seo/semantic-core" className={classes.Title}>Составление семантического ядра</Link>
              <p className={classes.Text}>Семантическое ядро – это база ключевых запросов, которые подходят для определения конкретной услуги или товара. Сбор семантического ядра позволяет найти оптимальное место каждой группе запросов для дальнейшей оптимизации всех страниц.</p>
            </Grid>
            <Grid item container sm={6} xs={12} className={classes.Item}>
              <Link to="/services/internetmarketing/seo/internal-optimization" className={classes.Title}>Внутренняя оптимизация сайта</Link>
              <p className={classes.Text}>В процессе внутренней оптимизации меняют код и содержимое сайта, приводя их в соответствие с требованиями поисковых ресурсов. В первую очередь это статейное продвижение, предполагающее наполнение сайта качественным контентом.</p>
            </Grid>
            <Grid item container sm={6} xs={12} className={classes.Item}>
              <Link to="/services/internetmarketing/seo/external-optimization" className={classes.Title}>Внешняя оптимизация сайта</Link>
              <p className={classes.Text}>Суть внешней оптимизации – это ссылочное продвижение, в ходе которого идёт работа над наращиванием количества ссылок, размещённых на других ресурсах. По факту, это рекомендации, и чем их больше, тем выше рейтинг сайта в поисковых системах.</p>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SeoServices