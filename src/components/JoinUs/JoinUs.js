import React from "react";
import classes from './JoinUs.module.scss';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import VacanciesData from '../VacanciesArray';
import {ButtonLink} from "../UI/ButtonLink";
import Hidden from '@material-ui/core/Hidden';

function JoinUs() {

  const Vacancies = VacanciesData.map(({title, path, city, time}, index) => {
    return (
      <Link to={path} key={index} className={classes.Vacancy}>
        <p className={classes.Title}>{title}</p>
        <p className={classes.CityTime}>{city} | {time}</p>
      </Link>
    )
  });

  return (
    <section className={classes.JoinUs}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item sm={6} xs={12} >
            <h2 className={classes.Headding}>Присоединяйся к нам!</h2>
            <p className={classes.Description}>Мы всегда рады когда к нашей команде присоединяется специалист, преданный своему делу. Возможно, именно ты нужен нам сейчас.</p>
            <Hidden xsDown>
              <ButtonLink path={'/vacancies'} title={'Все вакансии'}/>
            </Hidden>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.Vacancies}>
            {Vacancies}
            <Hidden smUp>
              <ButtonLink classNames={classes.JoinUsBtn} path={'/vacancies'} title={'Все вакансии'}/>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default JoinUs