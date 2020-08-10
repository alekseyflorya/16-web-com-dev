import React from "react";
import classes from "./UiUxDesigner.module.scss"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import VacancieForm from "../Vacancies/VacancieForm";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import {PricesButton} from "../../components/UI/ButtonLink";
import {Hidden} from "@material-ui/core";

function UiUxDesigner() {
  return (
    <div className={classes.UiUxDesigner}>
      <Header />
      <Requirements />
      <VacancieForm />
      <Hidden smUp>
        <OtherVacancies />
      </Hidden>
      <Footer />
    </div>
  )
}

export default UiUxDesigner

function Requirements() {
  return (
    <section className={classes.Requirements}>
      <Container fixed>
        <Grid container>
          <Grid item container sm={8} xs={12} className={classes.LeftColumn}>
            <Grid item sm={12} xs={12} className={classes.Items}>
              <h3 className={classes.Title}>Обязаности</h3>
              <p className={classes.Text}>Мы ищем думающего дизайнера с портфолио которое можно показать и который сможет обосновать любую деталь в своих работах. Если вы любите не тривиальные задачи и хотите быстро развиваться, то вам к нам.</p>
            </Grid>
            <Grid item sm={12} xs={12} className={classes.Items}>
              <h3 className={classes.Title}>Необходимые навыки</h3>
              <p className={classes.Text}>— опыт работы в сфере веб-дизайна от 1 года</p>
              <p className={classes.Text}>— понимание принципов проектирования пользовательских интерфейсов, юзабилити</p>
              <p className={classes.Text}>— готовность развиваться и адекватно воспринимать критику</p>
              <p className={classes.Text}>— наличие он-лайн портфолио (dribbble, behance)</p>
              <p className={classes.Text}>— умение подготовить материалы для разработчиков</p>
            </Grid>
            <Grid item sm={12} xs={12} className={classes.Items}>
              <h3 className={classes.Title}>Будет плюсом</h3>
              <p className={classes.Text}>— опыт работы в сфере веб-дизайна от 1 года</p>
              <p className={classes.Text}>— понимание принципов проектирования пользовательских интерфейсов, юзабилити</p>
              <p className={classes.Text}>— готовность развиваться и адекватно воспринимать критику</p>
              <p className={classes.Text}>— наличие он-лайн портфолио (dribbble, behance)</p>
              <p className={classes.Text}>— умение подготовить материалы для разработчиков</p>
            </Grid>
          </Grid>
          <Hidden only="xs">
            <OtherVacancies />
          </Hidden>
        </Grid>
      </Container>
    </section>
  )
}

function OtherVacancies() {
  return (
    <Grid item container sm={4} xs={null} className={classes.OtherVacancies}>
      <Grid item container className={classes.OtherVacanciesBlock}>
        <h4 className={classes.AsideTitle}>Другие вакансии</h4>
        <Grid item container className={classes.LinksToVacancyBlock}>
          <Link to={'/vacancies/ui-ux-designer'} className={classes.LinkToVacancy} >UI/UX Designer</Link>
          <Link to={'/vacancies/1c-developer'} className={classes.LinkToVacancy} >Разработчик 1С</Link>
          <Link to={'/vacancies/seo-specialist'} className={classes.LinkToVacancy} >SEO специалист</Link>
        </Grid>
        <Grid item container className={classes.LinkToAllVacanciesBox}>
          <PricesButton title={'Все вакансии'} path={'/vacancies'}/>
        </Grid>
      </Grid>
    </Grid>
  )
}