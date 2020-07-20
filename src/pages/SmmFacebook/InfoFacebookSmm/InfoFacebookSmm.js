import React from "react";
import classes from "./InfoFacebookSmm.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import InfoFacebookSmmImg from "../../../assets/img/seo-audit-advantages.jpg";

function InfoFacebookSmm() {
  return (
    <section className={classes.InfoFacebookSmm}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
            <img className={classes.InfoFacebookSmmImg} src={InfoFacebookSmmImg} alt=""/>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.RightColumn}>
            <p className={classes.Text}>Мы регулярно следим за SMM-инновациями, поэтому предлагаем методы раскрутки, которые точно сработают. Многочисленные успешные проекты доказывают, что наша схема действий с аккаунтом приносит бизнесу положительный результат:</p>
            <Grid item container className={classes.GridList}>
              <Grid item container className={classes.GridListItem}>расширяет клиентскую базу заказчика</Grid>
              <Grid item container className={classes.GridListItem}>увеличивает трафик на сайт или в интернет-магазин</Grid>
              <Grid item container className={classes.GridListItem}>увеличивает число заказов среди уже имеющихся клиентов</Grid>
              <Grid item container className={classes.GridListItem}>делает бренд узнаваемым, повышая к нему лояльность</Grid>
            </Grid>
            <p className={classes.Text}>16.web – это современное SMM-продвижение в Фейсбуке, ваш ключ к максимальному использованию возможностей, которые дают бизнесу социальные сети.</p>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default InfoFacebookSmm