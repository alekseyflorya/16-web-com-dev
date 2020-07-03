import React from "react";
import classes from "./OpenedVacancies.module.scss";
import VacanciesData from "../../../components/VacanciesArray";
import {Link} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import openedVacanciesImg from "../../../assets/img/opened-vacancies.jpg"

function OpenedVacancies() {
  const openedVacancies = VacanciesData.map(({title, path, city, time}, index) => {
    return (
      <Link to={path} key={index} className={classes.Vacancy}>
        <p className={classes.Title}>{title}</p>
        <p className={classes.CityTime}>{city} | {time}</p>
      </Link>
    )
  });

  return (
    <section className={classes.OpenedVacancies}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item sm className={classes.Vacancies}>
            <h2 className={classes.Headding}>Открытые вакансии</h2>
            {openedVacancies}
          </Grid>
          <Grid item sm className={classes.VacanciesImg}>
            <img src={openedVacanciesImg} alt=""/>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default OpenedVacancies