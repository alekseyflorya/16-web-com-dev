import React from "react";
import classes from "./Technologies.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import OpenCartLogo from "../../../assets/img/opencart-logo.png";
import WordPressLogo from "../../../assets/img/wordpress-logo.png";
import phpLogo from "../../../assets/img/php-logo.png";
import jsLogo from "../../../assets/img/es-logo.png";
import htmlLogo from "../../../assets/img/html-logo.png";
import cssLogo from "../../../assets/img/css-logo.png";
import laravelLogo from "../../../assets/img/laravel-logo.png";
import restapiLogo from "../../../assets/img/restapi-logo.png";
import mysqlLogo from "../../../assets/img/mysql-logo.png";
import vueLogo from "../../../assets/img/vue-logo.png";
import tildaLogo from "../../../assets/img/tilda-logo.png";
import reactLogo from "../../../assets/img/react-logo.png";
import Fade from 'react-reveal/Fade'

export default function Technologies() {
  return(
    <>
      <section className={classes.Technologies}>
        <Container fixed className={classes.Container}>
          <Fade up><h2 className={classes.Headding}>Технологии</h2></Fade>
          <Grid container className={classes.TechnologiesList}>
            <Grid item container sm={6} xs={12} className={classes.TechnologiesItem}>
              <Grid item sm={4} className={classes.LogoImgBox}>
                <Fade up><img className={classes.LogoImg} src={htmlLogo} alt=""/></Fade>
              </Grid>
              <Grid item sm={8} className={classes.CaptionBox}>
                <Fade up><h3 className={classes.Title}>HTML5</h3></Fade>
                <Fade up><p className={classes.Description} >Cтандартизированный язык разметки документов во Всемирной паутине.</p></Fade>
              </Grid>
            </Grid>
            <Grid item container sm={6} xs={12} className={classes.TechnologiesItem}>
              <Grid item sm={4} className={classes.LogoImgBox}>
                <Fade up><img className={classes.LogoImg} src={phpLogo} alt=""/></Fade>
              </Grid>
              <Grid item sm={8} className={classes.CaptionBox}>
                <Fade up><h3 className={classes.Title}>PHP</h3></Fade>
                <Fade up><p className={classes.Description}>Cкриптовый язык, интенсивно применяемый для разработки веб-приложений.</p></Fade>
              </Grid>
            </Grid>
            <Grid item container sm={6} xs={12} className={classes.TechnologiesItem}>
              <Grid item sm={4} className={classes.LogoImgBox}>
                <Fade up><img className={classes.LogoImg} src={cssLogo} alt=""/></Fade>
              </Grid>
              <Grid item sm={8} className={classes.CaptionBox} >
                <Fade up><h3 className={classes.Title}>CSS3</h3></Fade>
                <Fade up><p className={classes.Description}>Формальный язык описания внешнего вида, написанного с использованием языка разметки.</p></Fade>
              </Grid>
            </Grid>
            <Grid item container sm={6} xs={12} className={classes.TechnologiesItem}>
              <Grid item sm={4} className={classes.LogoImgBox}>
                <Fade up><img className={classes.LogoImg} src={mysqlLogo} alt=""/></Fade>
              </Grid>
              <Grid item sm={8} className={classes.CaptionBox}>
                <Fade up><h3 className={classes.Title}>MySQL</h3></Fade>
                <Fade up><p className={classes.Description}>Cвободная реляционная система управления базами данных.</p></Fade>
              </Grid>
            </Grid>
            <Grid item container sm={6} xs={12} className={classes.TechnologiesItem}>
              <Grid item sm={4} className={classes.LogoImgBox}>
                <Fade up><img className={classes.LogoImg} src={jsLogo} alt=""/></Fade>
              </Grid>
              <Grid item sm={8} className={classes.CaptionBox}>
                <Fade up><h3 className={classes.Title}>ES6</h3></Fade>
                <Fade up><p className={classes.Description}>Используемый в качестве основы для построения других скриптовых языков.</p></Fade>
              </Grid>
            </Grid>
            <Grid item container sm={6} xs={12} className={classes.TechnologiesItem}>
              <Grid item sm={4} className={classes.LogoImgBox}>
                <Fade up><img className={classes.LogoImg} src={restapiLogo} alt=""/></Fade>
              </Grid>
              <Grid item sm={8} className={classes.CaptionBox}>
                <Fade up><h3 className={classes.Title}>REST API</h3></Fade>
                <Fade up><p className={classes.Description}>Aрхитектурный стиль взаимодействия компонентов приложения в сети.</p></Fade>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.CmsFrameworks}>
        <Container fixed className={classes.Container}>
          <h2 className={classes.Headding}>CMS и фреймворки</h2>
          <Grid container className={classes.TechnologiesList}>
            <Grid item container sm={6} xs={12} className={classes.TechnologiesItem}>
              <Grid item sm={3} className={classes.LogoImgBox}>
                <img className={classes.LogoImg} src={OpenCartLogo} alt="OpenCart"/>
              </Grid>
              <Grid item sm={9} className={classes.TitleBox}>
                <h3 className={classes.Title}>OpenCart</h3>
              </Grid>
              <Grid item sm={12} className={classes.CaptionBox}>
                <p className={classes.Description}>Студия 16.web предлагает услуги по разработке интернет-магазинов на Opencart – удобной платформе с хорошим функционалом и поисковым потенциалом. Opencart оптимально подходит для обслуживания небольших коммерческих онлайн-ресурсов.</p>
              </Grid>
            </Grid>
            <Grid item container sm={6} xs={12} className={classes.TechnologiesItem}>
              <Grid item sm={3} className={classes.LogoImgBox}>
                <img className={classes.LogoImg} src={WordPressLogo} alt=""/>
              </Grid>
              <Grid item sm={9} className={classes.TitleBox}>
                <h3 className={classes.Title}>WordPress</h3>
              </Grid>
              <Grid item sm={12} className={classes.CaptionBox}>
                <p className={classes.Description}>Наша студия предлагает помощь в создании сайтов на Wordpress – системе управления контентом, которая считается самой популярной в мире. Используя Wordpress, можно с легкостью управлять сайтом, не имея навыков программирования.</p>
              </Grid>
            </Grid>
            <Grid item container sm={6} xs={12} className={classes.TechnologiesItem}>
              <Grid item sm={3} className={classes.LogoImgBox}>
                <img className={classes.LogoImg} src={laravelLogo} alt=""/>
              </Grid>
              <Grid item sm={9} className={classes.TitleBox}>
                <h3 className={classes.Title}>Laravel</h3>
              </Grid>
              <Grid item sm={12} className={classes.CaptionBox}>
                <p className={classes.Description}>Мы используем для разработки коммерческих веб-приложений PHP-платформу Laravel, которая считается одним из наиболее гибких фреймворков. С помощью инструментов Laravel можно создать интернет-магазин, максимально удобный для заказчика.</p>
              </Grid>
            </Grid>
            <Grid item container sm={6} xs={12} className={classes.TechnologiesItem}>
              <Grid item sm={3} className={classes.LogoImgBox}>
                <img className={classes.LogoImg} src={vueLogo} alt=""/>
              </Grid>
              <Grid item sm={9} className={classes.TitleBox}>
                <h3 className={classes.Title}>Vue.js</h3>
              </Grid>
              <Grid item sm={12} className={classes.CaptionBox}>
                <p className={classes.Description}>Мы успешно используем для создания приложений и сайтов фреймворк Vue js, предлагающий новые возможности и преимущества. Vue js – это JavaScript библиотека, используемая в разработке динамических интерфейсов, адаптируемых под пользователя.</p>
              </Grid>
            </Grid>
            <Grid item container sm={6} xs={12} className={classes.TechnologiesItem}>
              <Grid item sm={3} className={classes.LogoImgBox}>
                <img className={classes.LogoImg} src={tildaLogo} alt=""/>
              </Grid>
              <Grid item sm={9} className={classes.TitleBox}>
                <h3 className={classes.Title}>Tilda</h3>
              </Grid>
              <Grid item sm={12} className={classes.CaptionBox}>
                <p className={classes.Description}>Если вам нужно срочно запустить онлайн-ресурс, обращайтесь к нам – для решения таких задач мы используем специальный конструктор Tilda. С помощью инструментов Tilda можно создать сайт с индивидуальным дизайном и настройками за несколько дней.</p>
              </Grid>
            </Grid>
            <Grid item container sm={6} xs={12} className={classes.TechnologiesItem}>
              <Grid item sm={3} className={classes.LogoImgBox}>
                <img className={classes.LogoImg} src={reactLogo} alt=""/>
              </Grid>
              <Grid item sm={9} className={classes.TitleBox}>
                <h3 className={classes.Title}>React</h3>
              </Grid>
              <Grid item sm={12} className={classes.CaptionBox}>
                <p className={classes.Description}>Мы создаём мобильные и одностраничные приложения, используя библиотеку React, позволяющую добиться скорости, простоты и масштабируемости. О React js можно сказать, что это один из наиболее используемых инструментов в веб-программировании.</p>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}


