import React from "react";
import classes from "./InfoFacebookSmm.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import InfoFacebookSmmImg from "../../../assets/img/facebook-smm-info.jpg";
import Fade from 'react-reveal/Fade'

function InfoFacebookSmm() {
  return (
    <section className={classes.InfoFacebookSmm}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
            <Fade up><img className={classes.InfoFacebookSmmImg} src={InfoFacebookSmmImg} alt=""/></Fade>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.RightColumn}>
            <Fade up><p className={classes.Text}>Мы регулярно следим за SMM-инновациями, поэтому предлагаем методы раскрутки, которые точно сработают. Многочисленные успешные проекты доказывают, что наша схема действий с аккаунтом приносит бизнесу положительный результат:</p></Fade>
            <Grid item container className={classes.GridList}>
              <Grid item container className={classes.GridListItem}>
                <Fade up>расширяет клиентскую базу заказчика</Fade>
              </Grid>
              <Grid item container className={classes.GridListItem}>
                <Fade up>увеличивает трафик на сайт или в интернет-магазин</Fade>
              </Grid>
              <Grid item container className={classes.GridListItem}>
                <Fade up>увеличивает число заказов среди уже имеющихся клиентов</Fade>
              </Grid>
              <Grid item container className={classes.GridListItem}>
                <Fade up>делает бренд узнаваемым, повышая к нему лояльность</Fade>
              </Grid>
            </Grid>
            <Fade up><p className={classes.Text}>16.web – это современное SMM-продвижение в Фейсбуке, ваш ключ к максимальному использованию возможностей, которые дают бизнесу социальные сети.</p></Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default InfoFacebookSmm