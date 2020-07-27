import React from "react";
import classes from './ServiceListFull.module.scss';
import {Link} from 'react-router-dom';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function ServiceListFull() {
  return (
    <section className={classes.ServiceListFull}>
      <Container fixed className={classes.Container}>
        <div className={classes.Cards}>
          <Grid container justify="space-between">
            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/sitecreating" className={classes.CardName}>Создание сайтов</Link>
                <p className={classes.CardText}>Профессиональная разработа сайтов, которая позволяет выгодно и эффектно представить любую услугу.</p>
                <Link className={classes.CardLink} to="/sitecreating">Все услуги</Link>
              </div>
            </Grid>
            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/webdesign" className={classes.CardName}>Веб-дизайн</Link>
                <p className={classes.CardText}>Современные и эффективные решения в плане композиции, типографики, цветоведения и юзабилити.</p>
                <Link className={classes.CardLink} to="/webdesign">Все услуги</Link>
              </div>
            </Grid>
            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/internetmarketing" className={classes.CardName}>Интернет - маркетинг</Link>
                <p className={classes.CardText}>Максимальная востребованость бренда и вывод в топ результатов поисковых систем.</p>
                <Link className={classes.CardLink} to="/internetmarketing">Все услуги</Link>
              </div>
            </Grid>

            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/qatesting" className={classes.CardName}>QA</Link>
                <p className={classes.CardText}>Проверка корректности работы сайта, соответствие актуальным стандартам и требованиям.</p>
                <Link className={classes.CardLink} to="/qatesting">Все услуги</Link>
              </div>
            </Grid>
            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/branding" className={classes.CardName}>Брендинг</Link>
                <p className={classes.CardText}>Современные и эффективные решения в плане композиции, типографики, цветоведения и юзабилити.</p>
                <Link className={classes.CardLink} to="/branding">Все услуги</Link>
              </div>
            </Grid>
            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/photography" className={classes.CardName}>Фотосьемка</Link>
                <p className={classes.CardText}>Максимальная востребованость бренда и вывод в топ результатов поисковых систем.</p>
                <Link className={classes.CardLink} to="/photography">Все услуги</Link>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  )
}

export default ServiceListFull