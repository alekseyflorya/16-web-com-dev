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

export default function Technologies() {
  return(
    <>
      <section className={classes.Technologies}>
        <Container fixed className={classes.Container}>
          <h2 className={classes.Headding}>Технологии</h2>
          <Grid container className={classes.TechnologiesList}>
            <Grid item container sm={6} xs={6} className={classes.TechnologiesItem}>
              <Grid item sm={4} className={classes.LogoImgBox}>
                <img className={classes.LogoImg} src={htmlLogo} alt=""/>
              </Grid>
              <Grid item sm={8} className={classes.CaptionBox}>
                <h3 className={classes.Title}>HTML5</h3>
                <p className={classes.Description} >Cтандартизированный язык разметки документов во Всемирной паутине.</p>
              </Grid>
            </Grid>
            <Grid item container sm={6} xs={6} className={classes.TechnologiesItem}>
              <Grid item sm={4} className={classes.LogoImgBox}>
                <img className={classes.LogoImg} src={phpLogo} alt=""/>
              </Grid>
              <Grid item sm={8} className={classes.CaptionBox}>
                <h3 className={classes.Title}>PHP</h3>
                <p className={classes.Description}>Cкриптовый язык, интенсивно применяемый для разработки веб-приложений.</p>
              </Grid>
            </Grid>
            <Grid item container sm={6} xs={6} className={classes.TechnologiesItem}>
              <Grid item sm={4} className={classes.LogoImgBox}>
                <img className={classes.LogoImg} src={cssLogo} alt=""/>
              </Grid>
              <Grid item sm={8} className={classes.CaptionBox} >
                <h3 className={classes.Title}>CSS3</h3>
                <p className={classes.Description}>Формальный язык описания внешнего вида, написанного с использованием языка разметки.</p>
              </Grid>
            </Grid>
            <Grid item container sm={6} xs={6} className={classes.TechnologiesItem}>
              <Grid item sm={4} className={classes.LogoImgBox}>
                <img className={classes.LogoImg} src={mysqlLogo} alt=""/>
              </Grid>
              <Grid item sm={8} className={classes.CaptionBox}>
                <h3 className={classes.Title}>MySQL</h3>
                <p className={classes.Description}>Cвободная реляционная система управления базами данных.</p>
              </Grid>
            </Grid>
            <Grid item container sm={6} xs={6} className={classes.TechnologiesItem}>
              <Grid item sm={4} className={classes.LogoImgBox}>
                <img className={classes.LogoImg} src={jsLogo} alt=""/>
              </Grid>
              <Grid item sm={8} className={classes.CaptionBox}>
                <h3 className={classes.Title}>ES6</h3>
                <p className={classes.Description}>Используемый в качестве основы для построения других скриптовых языков.</p>
              </Grid>
            </Grid>
            <Grid item container sm={6} xs={6} className={classes.TechnologiesItem}>
              <Grid item sm={4} className={classes.LogoImgBox}>
                <img className={classes.LogoImg} src={restapiLogo} alt=""/>
              </Grid>
              <Grid item sm={8} className={classes.CaptionBox}>
                <h3 className={classes.Title}>REST API</h3>
                <p className={classes.Description}>Aрхитектурный стиль взаимодействия компонентов приложения в сети.</p>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.CmsFrameworks}>
        <Container fixed className={classes.Container}>
          <h2 className={classes.Headding}>CMS и фреймворки</h2>
          <Grid container className={classes.TechnologiesList}>
            <Grid item container sm={6} xs={6} className={classes.TechnologiesItem}>
              <Grid item sm={4} className={classes.LogoImgBox}>
                <img className={classes.LogoImg} src={OpenCartLogo} alt="OpenCart"/>
              </Grid>
              <Grid item sm={8} className={classes.CaptionBox}>
                <h3 className={classes.Title}>OpenCart</h3>
                <p className={classes.Description} ></p>
              </Grid>
            </Grid>
            <Grid item container sm={6} xs={6} className={classes.TechnologiesItem}>
              <Grid item sm={4} className={classes.LogoImgBox}>
                <img className={classes.LogoImg} src={WordPressLogo} alt=""/>
              </Grid>
              <Grid item sm={8} className={classes.CaptionBox}>
                <h3 className={classes.Title}>WordPress</h3>
                <p className={classes.Description}></p>
              </Grid>
            </Grid>
            <Grid item container sm={6} xs={6} className={classes.TechnologiesItem}>
              <Grid item sm={4} className={classes.LogoImgBox}>
                <img className={classes.LogoImg} src={laravelLogo} alt=""/>
              </Grid>
              <Grid item sm={8} className={classes.CaptionBox} >
                <h3 className={classes.Title}>Laravel</h3>
                <p className={classes.Description}></p>
              </Grid>
            </Grid>
            <Grid item container sm={6} xs={6} className={classes.TechnologiesItem}>
              <Grid item sm={4} className={classes.LogoImgBox}>
                <img className={classes.LogoImg} src={vueLogo} alt=""/>
              </Grid>
              <Grid item sm={8} className={classes.CaptionBox}>
                <h3 className={classes.Title}>Vue.js</h3>
                <p className={classes.Description}></p>
              </Grid>
            </Grid>
            <Grid item container sm={6} xs={6} className={classes.TechnologiesItem}>
              <Grid item sm={4} className={classes.LogoImgBox}>
                <img className={classes.LogoImg} src={tildaLogo} alt=""/>
              </Grid>
              <Grid item sm={8} className={classes.CaptionBox}>
                <h3 className={classes.Title}>Tilda</h3>
                <p className={classes.Description}></p>
              </Grid>
            </Grid>
            <Grid item container sm={6} xs={6} className={classes.TechnologiesItem}>
              <Grid item sm={4} className={classes.LogoImgBox}>
                <img className={classes.LogoImg} src={reactLogo} alt=""/>
              </Grid>
              <Grid item sm={8} className={classes.CaptionBox}>
                <h3 className={classes.Title}>React</h3>
                <p className={classes.Description}></p>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}


