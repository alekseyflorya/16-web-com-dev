import React from "react";
import classes from "./Technologies.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import OpenCartLogo from "../../../assets/img/opencart-logo.png";
import WordPressLogo from "../../../assets/img/wordpress-logo.png";
import PhpLogo from "../../../assets/img/php-logo.png";
import JsLogo from "../../../assets/img/js-logo.png";
import AnalyticsLogo from "../../../assets/img/analytics-logo.png";
import OneCLogo from "../../../assets/img/one-c-logo.png";

function Technologies() {
  return(
    <section className={classes.Technologies}>
      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>Технологии</h2>
        <Grid container className={classes.TechnologiesList}>
          <Grid item container sm={6} xs={6} className={classes.TechnologiesItem}>
            <Grid item sm={4} className={classes.LogoImgBox}>
              <img className={classes.LogoImg} src={OpenCartLogo} alt="OpenCart"/>
            </Grid>
            <Grid item sm={8} className={classes.CaptionBox}>
              <h3 className={classes.Title}>OpenCart</h3>
              <p className={classes.Description} >Платформа, ориентированная на создание интернет-магазинов.</p>
            </Grid>
          </Grid>
          <Grid item container sm={6} xs={6} className={classes.TechnologiesItem}>
            <Grid item sm={4} className={classes.LogoImgBox}>
              <img className={classes.LogoImg} src={WordPressLogo} alt=""/>
            </Grid>
            <Grid item sm={8} className={classes.CaptionBox}>
              <h3 className={classes.Title}>WordPress</h3>
              <p className={classes.Description}>Платформа, используемая для разработки различных web-приложений.</p>
            </Grid>
          </Grid>
          <Grid item container sm={6} xs={6} className={classes.TechnologiesItem}>
            <Grid item sm={4} className={classes.LogoImgBox}>
              <img className={classes.LogoImg} src={PhpLogo} alt=""/>
            </Grid>
            <Grid item sm={8} className={classes.CaptionBox} >
              <h3 className={classes.Title}>PHP</h3>
              <p className={classes.Description}>Язык программирования, разработан для написания web-приложений.</p>
            </Grid>
          </Grid>
          <Grid item container sm={6} xs={6} className={classes.TechnologiesItem}>
            <Grid item sm={4} className={classes.LogoImgBox}>
              <img className={classes.LogoImg} src={JsLogo} alt=""/>
            </Grid>
            <Grid item sm={8} className={classes.CaptionBox}>
              <h3 className={classes.Title}>JS</h3>
              <p className={classes.Description}>Кросс-платформенный, объектно-ориентированный, скриптовый язык.</p>
            </Grid>
          </Grid>
          <Grid item container sm={6} xs={6} className={classes.TechnologiesItem}>
            <Grid item sm={4} className={classes.LogoImgBox}>
              <img className={classes.LogoImg} src={AnalyticsLogo} alt=""/>
            </Grid>
            <Grid item sm={8} className={classes.CaptionBox}>
              <h3 className={classes.Title}>Google Analytics</h3>
              <p className={classes.Description}>Сервис, предназначенный для анализиза поведение пользователей на сайте.</p>
            </Grid>
          </Grid>
          <Grid item container sm={6} xs={6} className={classes.TechnologiesItem}>
            <Grid item sm={4} className={classes.LogoImgBox}>
              <img className={classes.LogoImg} src={OneCLogo} alt=""/>
            </Grid>
            <Grid item sm={8} className={classes.CaptionBox}>
              <h3 className={classes.Title}>1C</h3>
              <p className={classes.Description}>Предназначенный для автоматизации деятельности на предприятии.</p>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Technologies