import React from "react";
import classes from './ServiceListSort.module.scss';
import {Link} from 'react-router-dom';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {ButtonLink} from "../UI/ButtonLink";

function ServiceListSort() {

  const scrollToStart = () =>{
    window.scrollTo(0,0);
  }

  return (
    <section className={classes.ServiceListSort}>
      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>{window.location.pathname === '/' ? 'Услуги веб-студии' : 'Вас может заинтересовать'}</h2>
        <div className={classes.Cards}>
          <Grid container spacing={2} justify="space-between">
            <Grid item sm={4} xs={12} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/sitecreating" className={classes.CardLink}>
                  <h3 className={classes.CardName}>Создание сайтов</h3>
                  <p className={classes.CardText}>Профессиональная разработа сайтов, которая позволяет выгодно и эффектно представить любую услугу.</p>
                </Link>
              </div>
            </Grid>
            <Grid item sm={4} xs={12} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link className={classes.CardLink} to="/webdesign">
                  <h3 className={classes.CardName}>Веб-дизайн</h3>
                  <p className={classes.CardText}>Современные и эффективные решения в плане композиции, типографики, цветоведения и юзабилити.</p>
                </Link>
              </div>
            </Grid>
            <Grid item sm={4} xs={12} className={classes.CardBox}>
              <div className={classes.Card}>
                {
                  (window.location.pathname === '/internetmarketing') ? (
                    <>
                      <h3 className={classes.CardName} onClick={scrollToStart}>Интернет - маркетинг</h3>
                      <p className={classes.CardText}>Максимальная востребованость бренда и вывод в топ результатов поисковых систем.</p>
                    </>
                  ) : (
                    <Link className={classes.CardLink} to="/internetmarketing" onClick={scrollToStart}>
                      <h3 className={classes.CardName}>Интернет - маркетинг</h3>
                      <p className={classes.CardText}>Максимальная востребованость бренда и вывод в топ результатов поисковых систем.</p>
                    </Link>
                  )
                }
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.ServiceListBtn}>
          <ButtonLink classNames={classes.ServiceListSortButton} path={'/services'} title={'Все услуги'}/>
        </div>
      </Container>
    </section>
  )
}

export default ServiceListSort