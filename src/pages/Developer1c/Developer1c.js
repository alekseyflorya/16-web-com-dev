import React from "react";
import classes from "./Developer1c.module.scss"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import VacancieForm from "../Vacancies/VacancieForm";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import {PricesButton} from "../../components/UI/ButtonLink";
import {Hidden} from "@material-ui/core";

function Developer1c() {
  return (
    <div className={classes.Developer1c}>
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

export default Developer1c

function Requirements() {
  return (
    <section className={classes.Requirements}>
      <Container fixed>
        <Grid container>
          <Grid item container sm={8} xs={12} className={classes.LeftColumn}>
            <Grid item sm={12} xs={12} className={classes.Items}>
              <h3 className={classes.Title}>Наши пожелания к соискателям:</h3>
              <p className={classes.Text}>— следование корпоративным ценностям: честность, профессионализм, командная работа, результативность, приверженность</p>
              <p className={classes.Text}>— опыт работы программистом не менее 5-ти лет в 1С: Предприятие 8.2</p>
              <p className={classes.Text}>— доработка конфигураций 1С</p>
              <p className={classes.Text}>— умение работать со сложными запросами 1С</p>
              <p className={classes.Text}>— умение разрабатывать отчеты при помощи системы СКД</p>
              <p className={classes.Text}>— опыт работы с большими (по объему информации) базами данных, оптимизации и ускорения работы БД</p>
              <p className={classes.Text}>— опыт работы с конфигурацией «Конвертация данных», понимание принципов работы РИБ</p>
              <p className={classes.Text}>— опыт работы конфигурирования Управляемого приложения;</p>
              <p className={classes.Text}>— опыт работы с хранилищем конфигурации</p>
            </Grid>
            <Grid item sm={12} xs={12} className={classes.Items}>
              <h3 className={classes.Title}>Ваши задания:</h3>
              <p className={classes.Text}>— разработка новых и поддержка существующих модулей в рамках поставленных задач</p>
              <p className={classes.Text}>— выполнение текущих заявок пользователей</p>
              <p className={classes.Text}>— администрирование и сопровождение информационных баз на платформе 1С: Предприятие 8.2</p>
              <p className={classes.Text}>— разработка новых документов, отчетов и других объектов</p>
              <p className={classes.Text}>— настройка прав доступа для пользователей, доработка механизмов настройки прав доступа</p>
              <p className={classes.Text}>— тестирование работоспособности системы, проверка на соответствие стандартам разработки</p>
              <p className={classes.Text}>— консультирование пользователей по работе с учетными механизмами информационных баз 1С</p>
            </Grid>
            <Grid item sm={12} xs={12} className={classes.Items}>
              <h3 className={classes.Title}>Мы предлагаем:</h3>
              <p className={classes.Text}>— конкурентную, стабильную и своевременную з/п</p>
              <p className={classes.Text}>— официальное трудоустройство</p>
              <p className={classes.Text}>— возможность карьерного роста</p>
              <p className={classes.Text}>— скидки на приобретение авто товаров</p>
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