import React from "react";
import classes from "./AboutAdvantages.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {AdvantageOneIcon, AdvantageTwoIcon, AdvantageThreeIcon} from "../../../components/Icons";
import siteCreatingDataImg from "../../../assets/img/why-need-internet-marketing.jpg";
import aboutUsSiteCreatingImg from "../../../assets/img/about-us-site-creating.jpg"
import {Hidden} from "@material-ui/core";
import Fade from 'react-reveal/Fade'

const siteCreatingData = {
  title: 'Создание сайтов',
  text: [
    'Мы разрабатываем стильные и результативные интернет-магазины, , лендинги, корпоративные сайты и сайты визитки. Наши проекты отличаются высокой скоростью работы, глубокой технической проработкой и качеством исполнения всех функциональных элементов. Они функциональны, адаптированы под мобильные устройства и удобны для пользователей. ',
    'При создании сайтов используются только актуальные технологии программирования, верстки и технической оптимизации. Мы готовы реализовать любой функционал от самого простого до сложных интеграций.'
  ],
  image: aboutUsSiteCreatingImg
}

const internetMarketingData = {
  title: 'Интернет-маркетинг',
  text: [
    'Для продвижения сайтов мы используем как классические, так и самые современные инструменты интернет-маркетинга. Наши специалисты знают, что нужно делать, чтобы контекстная реклама (PPC), поисковое продвижение (SEO), раскрутка в социальных сетях (SMM) и Email-маркетинг превратились в источник развития вашего бизнеса.',
    'Мы всегда учитываем KPI показатели клиента, чтобы привлеченные клиенты не оказались слишком дорогими для компании.'
  ],
  image: siteCreatingDataImg
}

const AboutWebDesignData = {
  headdingTitle: 'Веб-дизайн',
  text: [
    'Наши UI/UX дизайнеры занимаются прототипированием и разработкой дизайна сайта с нуля. Шаблонный подход — это не наш метод. Наши клиенты получают только оригинальный, стильный и удобный дизайн, который способствует увеличению продаж.',
    'В направлении веб-дизайна мы можем предложить следующие услуги:'
  ],
  listElements: [
    'Разработка дизайна сайта с учетом поведенческих факторов пользователя',
    'Разработка брендбука по подробному использованию фирменного стиля',
    'Создание уникальных баннеров и другой коммерческой графики',
    'Редизайн устаревших или просто неудачных сайтов'
  ]
}

export default function AboutAdvantages() {
  return (
    <>
      <section className={classes.AboutAdvantages}>
        <Container fixed className={classes.Container}>
          <Fade up><h2 className={classes.MainAboutHaddding}>Основные направления работы нашей web-студии</h2></Fade>
          <Fade up><h3 className={classes.Headding}>Наши преимущества</h3></Fade>
          <Grid container item className={classes.OurAdvantages}>
            <Grid item container sm={4} xs={12} className={classes.OurAdvantagesItem}>
              <Grid item container sm={2} xs={2}>
                <Fade up><AdvantageOneIcon width="47" height="42" viewBox="0 0 47 42" className={classes.AdvantagesIcons} /></Fade>
              </Grid>
              <Grid item container sm={10} xs={10}>
                <Fade up><p className={classes.Text}>Идем в ногу со временем в веб разработке. Применяем современные методики, тренды.</p></Fade>
              </Grid>
            </Grid>
            <Grid item container sm={4} xs={12} className={classes.OurAdvantagesItem}>
              <Grid item container sm={2} xs={2}>
                <Fade up><AdvantageTwoIcon width="49" height="42" viewBox="0 0 49 42" className={classes.AdvantagesIcons} /></Fade>
              </Grid>
              <Grid item container sm={10} xs={10}>
                <Fade up><p className={classes.Text}>Внедряем проверенные новшества в профессиональные проекты</p></Fade>
              </Grid>
            </Grid>
            <Grid item container sm={4} xs={12} className={classes.OurAdvantagesItem}>
              <Grid item container sm={2} xs={2}>
                <Fade up><AdvantageThreeIcon width="38" height="44" viewBox="0 0 38 44" className={classes.AdvantagesIcons} /></Fade>
              </Grid>
              <Grid item container sm={10} xs={10}>
                <Fade up><p className={classes.Text}>Мы несем ответственность за нашу работу и ее результат</p></Fade>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
      <AboutServices title={siteCreatingData.title} text={siteCreatingData.text} image={siteCreatingData.image} />
      <AboutWebDesign headingTitle={AboutWebDesignData.headdingTitle} listElements={AboutWebDesignData.listElements} text={AboutWebDesignData.text} />
      <AboutServices title={internetMarketingData.title} text={internetMarketingData.text} image={internetMarketingData.image} />
    </>
  );
}


function AboutServices({title, text, image}) {
  return (
    <section className={classes.AboutServices}>
      <Container fixed>
        <Grid container>
          <Grid item container sm={6} xs={12}>
            <Fade up><h3 className={classes.Headding}>{title}</h3></Fade>
            <Hidden smUp>
              <Fade up><img className={classes.AboutServicesImg} src={image} alt=""/></Fade>
            </Hidden>
            {text.map((para, index) => {
              return (<Fade up><p key={`AboutServicesText${index}`} className={classes.Text}>{para}</p></Fade>)
            })}
          </Grid>
          <Grid item container sm={6} xs={12}>
            <Hidden only="xs">
              <Fade up><img className={classes.AboutServicesImg} src={image} alt=""/></Fade>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}


function AboutWebDesign({headingTitle, listElements, text}) {
  return (
    <section className={classes.AboutWebDesign}>
      <Container fixed>
        <Grid container className={classes.AboutWebDesignHead}>
          <Grid item container sm={8} xs={12}>
            <Fade up><h3 className={classes.Headding}>{headingTitle}</h3></Fade>
            {text.map((para, index) => {
              return (
                <Fade up><p key={`AboutServicesText${index}`} className={classes.Text}>{para}</p></Fade>
              )})}
          </Grid>
        </Grid>
        <Grid container className={classes.AboutWebDesignList}>
          {listElements.map((listElement, index) => {
            return (
              <Grid item container sm={4} xs={12} className={classes.AboutWebDesignListItem} key={index}>
                <Fade up delay={200 + index*200}>{listElement}</Fade>
              </Grid>
            )})}
        </Grid>
      </Container>
    </section>
  )
}