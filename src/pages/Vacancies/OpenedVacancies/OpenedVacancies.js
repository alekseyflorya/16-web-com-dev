import React from "react";
import classes from "./OpenedVacancies.module.scss";
import VacanciesData from "../../../components/VacanciesArray";
import {Link} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from 'react-reveal/Fade'

import openedVacanciesImg from "../../../assets/img/opened-vacancies.jpg"

function OpenedVacancies() {
  const openedVacancies = VacanciesData.map(({title, path, city, time}, index) => {
    return (

      <Link to={path} key={index} className={classes.Vacancy}>
        <Fade up>
        <p className={classes.Title}>{title}</p>
        <p className={classes.CityTime}>{city} | {time}</p>
        </Fade>
      </Link>
    )
  });

  return (
    <section className={classes.OpenedVacancies}>
      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>Открытые вакансии</h2>
        <Grid container className={classes.VacanciesBlock}>
          <Grid item sm={6} xs={12} className={classes.Vacancies}>
            {openedVacancies}
          </Grid>
          <Grid item sm={6} xs={12} className={classes.VacanciesImg}>
            <Fade up><img className={classes.OpenedVacanciesImg} src={openedVacanciesImg} alt=""/></Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default OpenedVacancies