import React from "react";
import classes from './ServiceListSort.module.scss';
import {Link} from 'react-router-dom';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function ServiceListSort() {
  return (
    <section className={classes.ServiceListSort}>
      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>{window.location.pathname === '/' ? 'Услуги веб-студии' : 'Вас может заинтересовать'}</h2>
        <div className={classes.Cards}>
          <Grid container justify="space-between">
            <Grid item sm={3} className={classes.CardBox}>
              <h3 className={classes.CardName}>Создание сайтов</h3>
              <p className={classes.CardText}>Профессиональная разработа сайтов, которая позволяет выгодно и эффектно представить любую услугу.</p>
              <Link className={classes.CardLink} to="/sitecreating">Все услуги</Link>
            </Grid>
            <Grid item sm={3} className={classes.CardBox}>
              <h3 className={classes.CardName}>Веб-дизайн</h3>
              <p className={classes.CardText}>Современные и эффективные решения в плане композиции, типографики, цветоведения и юзабилити.</p>
              <Link className={classes.CardLink} to="/sitecreating">Все услуги</Link>
            </Grid>
            <Grid item sm={3} className={classes.CardBox}>
              <h3 className={classes.CardName}>Интернет - маркетинг</h3>
              <p className={classes.CardText}>Максимальная востребованость бренда и вывод в топ результатов поисковых систем.</p>
              <Link className={classes.CardLink} to="/sitecreating">Все услуги</Link>
            </Grid>
          </Grid>
        </div>
        <div className={classes.ServiceListBtn}>
          <Link className={classes.ButtonLink} to="/services">Все услуги</Link>
        </div>
      </Container>
    </section>
  )
}

export default ServiceListSort