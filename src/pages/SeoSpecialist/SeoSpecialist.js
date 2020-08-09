import React from "react";
import classes from "./SeoSpecialist.module.scss"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import VacancieForm from "../Vacancies/VacancieForm";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import {PricesButton} from "../../components/UI/ButtonLink";
import {Hidden} from "@material-ui/core";

function SeoSpecialist() {
  return (
    <div className={classes.SeoSpecialist}>
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

export default SeoSpecialist

function Requirements() {
  return (
    <section className={classes.Requirements}>
      <Container fixed>
        <Grid container>
          <Grid item container sm={8} xs={12} className={classes.LeftColumn}>
            <Grid item sm={12} xs={12} className={classes.Items}>
              <h3 className={classes.Title}>Описание</h3>
              <p className={classes.Text}>На работу в Web студию требуется SEO специалист. Мы ищем специалиста, который мог бы вместе с нашей командой работать над интересными проектами и развивать направление SEO.</p>
            </Grid>
            <Grid item sm={12} xs={12} className={classes.Items}>
              <h3 className={classes.Title}>Необходимые навыки</h3>
              <p className={classes.Text}>— углубленное понимание принципов работы и ранжирования поисковых систем;</p>
              <p className={classes.Text}>— понимание что такое внутренняя оптимизация и как ее делать для различных типов сайтов;</p>
              <p className={classes.Text}>— знания HTML и CSS;</p>
              <p className={classes.Text}>— навыки работы с сервисами Google Analytics, Google Webmaster, Semrush;</p>
              <p className={classes.Text}>— работа с семантикой, кластеризация поисковых запросов;</p>
              <p className={classes.Text}>— опыт работы с интернет-магазинами, опыт активного взаимодействия с программистами по выполнению всех циклов работ, направленных на продвижение сайта;</p>
              <p className={classes.Text}>— умение самостоятельно выполнять весь цикл работ необходимых для успешного продвижения сайта;</p>
              <p className={classes.Text}>— активное участие в оптимизации веб-сайта с целью увеличение продаж;</p>
              <p className={classes.Text}>— понимание принципов наложение фильтров Google, выхода из-под них и превентивного противодействия этим фильтрам.</p>
            </Grid>
            <Grid item sm={12} xs={12} className={classes.Items}>
              <h3 className={classes.Title}>Личные качества:</h3>
              <p className={classes.Text}>— серьезное отношение к работе;</p>
              <p className={classes.Text}>— ответственность;</p>
              <p className={classes.Text}>— обоснованная уверенность в собственных силах и навыках;</p>
              <p className={classes.Text}>— преданность своему делу;</p>
              <p className={classes.Text}>— желание постоянно развиваться.</p>
            </Grid>
            <Grid item sm={12} xs={12} className={classes.Items}>
              <h3 className={classes.Title}>Мы предоставим:</h3>
              <p className={classes.Text}>— работу в молодом коллективе с профессионалами;</p>
              <p className={classes.Text}>— достойную заработную плату;</p>
              <p className={classes.Text}>— интересные проекты</p>
            </Grid>
            <Grid item sm={12} xs={12} className={classes.Items}>
              <h3 className={classes.Title}>Обязанности:</h3>
              <p className={classes.Text}>— аудит сайтов на соответствие требованиям поисковой системы Google;</p>
              <p className={classes.Text}>— оптимизация сайтов, направленная на увеличение трафика и продаж;</p>
              <p className={classes.Text}>— внутренняя оптимизация;</p>
              <p className={classes.Text}>— глубокий анализ проблемных проектов: структура сайта‚ фильтры‚ выход из-под фильтров;</p>
              <p className={classes.Text}>— поиск эффективных методов продвижения сайта;</p>
              <p className={classes.Text}>— сбор статистики и анализ результатов продвижения.</p>
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
          <Link to={'/vacancies/seo-specialist'} className={classes.LinkToVacancy} >SEO специалист</Link>
          <Link to={'/vacancies/1c-developer'} className={classes.LinkToVacancy} >Разработчик 1С</Link>
        </Grid>
        <Grid item container className={classes.LinkToAllVacanciesBox}>
          <PricesButton title={'Все вакансии'} path={'/vacancies'}/>
        </Grid>
      </Grid>
    </Grid>
  )
}