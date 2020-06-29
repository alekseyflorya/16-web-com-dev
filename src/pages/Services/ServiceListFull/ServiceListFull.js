import React from "react";
import classes from './ServiceListFull.module.scss';
import {Link} from 'react-router-dom';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {ButtonLink} from "../../../components/UI/ButtonLink";

function ServiceListFull() {
  return (
    <section className={classes.ServiceListFull}>
      <Container fixed className={classes.Container}>
        <div className={classes.Cards}>
          <Grid container spacing={10} justify="space-between">
            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/sitecreating" className={classes.CardName}>Создание сайтов</Link>
                <p className={classes.CardText}>Профессиональная разработа сайтов, которая позволяет выгодно и эффектно представить любую услугу.</p>
                <Link className={classes.CardLink} to="/sitecreating">Все услуги</Link>
              </div>
            </Grid>
            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/sitecreating" className={classes.CardName}>Веб-дизайн</Link>
                <p className={classes.CardText}>Современные и эффективные решения в плане композиции, типографики, цветоведения и юзабилити.</p>
                <Link className={classes.CardLink} to="/sitecreating">Все услуги</Link>
              </div>
            </Grid>
            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/sitecreating" className={classes.CardName}>Интернет - маркетинг</Link>
                <p className={classes.CardText}>Максимальная востребованость бренда и вывод в топ результатов поисковых систем.</p>
                <Link className={classes.CardLink} to="/sitecreating">Все услуги</Link>
              </div>
            </Grid>

            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/sitecreating" className={classes.CardName}>QA</Link>
                <p className={classes.CardText}>Проверка корректности работы сайта, соответствие актуальным стандартам и требованиям.</p>
                <Link className={classes.CardLink} to="/sitecreating">Все услуги</Link>
              </div>
            </Grid>
            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/sitecreating" className={classes.CardName}>Веб-дизайн</Link>
                <p className={classes.CardText}>Современные и эффективные решения в плане композиции, типографики, цветоведения и юзабилити.</p>
                <Link className={classes.CardLink} to="/sitecreating">Все услуги</Link>
              </div>
            </Grid>
            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/sitecreating" className={classes.CardName}>Интернет - маркетинг</Link>
                <p className={classes.CardText}>Максимальная востребованость бренда и вывод в топ результатов поисковых систем.</p>
                <Link className={classes.CardLink} to="/sitecreating">Все услуги</Link>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.ServiceListBtn}>
          <ButtonLink path={'/services'} title={'Все услуги'}/>
        </div>
      </Container>
    </section>
  )
}

export default ServiceListFull