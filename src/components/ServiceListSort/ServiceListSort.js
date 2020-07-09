import React from "react";
import classes from './ServiceListSort.module.scss';
import {Link} from 'react-router-dom';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {ButtonLink} from "../UI/ButtonLink";

function ServiceListSort() {
  return (
    <section className={classes.ServiceListSort}>
      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>{window.location.pathname === '/' ? 'Услуги веб-студии' : 'Вас может заинтересовать'}</h2>
        <div className={classes.Cards}>
          <Grid container spacing={2} justify="space-between">
            <Grid item sm={4} xs={12} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/sitecreating" className={classes.CardName}>Создание сайтов</Link>
                <p className={classes.CardText}>Профессиональная разработа сайтов, которая позволяет выгодно и эффектно представить любую услугу.</p>
                <Link className={classes.CardLink} to="/sitecreating">Все услуги</Link>
              </div>
            </Grid>
            <Grid item sm={4} xs={12} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/webdesign" className={classes.CardName}>Веб-дизайн</Link>
                <p className={classes.CardText}>Современные и эффективные решения в плане композиции, типографики, цветоведения и юзабилити.</p>
                <Link className={classes.CardLink} to="/sitecreating">Все услуги</Link>
              </div>
            </Grid>
            <Grid item sm={4} xs={12} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/internetmarketing" className={classes.CardName}>Интернет - маркетинг</Link>
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

export default ServiceListSort