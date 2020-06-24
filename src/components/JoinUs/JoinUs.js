import React from "react";
import classes from './JoinUs.module.scss';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import VacanciesData from '../VacanciesArray';

function JoinUs() {

  const Vacancies = VacanciesData.map(({title, city, time}, index) => {
    return (
      <div key={index} className={classes.Vacancy}>
        <p className={classes.Title}>{title}</p>
        <p className={classes.CityTime}>{city} | {time}</p>
      </div>
    )
  });

  return (
    <section className={classes.JoinUs}>
      <Container fixed className={classes.Container}>

        <Grid container>

          <Grid item sm>
            <h2 className={classes.Headding}>Присоединяйся к нам!</h2>
            <p className={classes.Description}>Мы всегда рады когда к нашей команде присоединяется специалист, преданный своему делу. Возможно, именно ты нужен нам сейчас.</p>
            <Link className={classes.ButtonLink} to="/vacancies">Все вакансии</Link>
          </Grid>

          <Grid item sm className={classes.Vacancies}>
            {Vacancies}
          </Grid>

        </Grid>

      </Container>
    </section>
  )
}

export default JoinUs