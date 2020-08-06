import React from "react";
import classes from "./GoogleShoppingServices.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import RemarketingOrderInfoImg from "../../../assets/img/google-shopping-services.jpg";
import Fade from 'react-reveal/Fade'

function GoogleShoppingServices() {
  return (
    <section className={classes.RemarketingOrderInfo}>
      <Container fixed className={classes.Container}>
        <Grid container className={classes.HeaddingBox}>
          <Grid item sm={6} xs={12}>
            <Fade up><h2 className={classes.Headding}>Как работает товарная реклама в Гугл</h2></Fade>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Fade up><p className={classes.Text}>В Гугл Шопинг настройка проходит по следующему алгоритму:</p></Fade>
          </Grid>
        </Grid>
        <Grid container className={classes.GridList}>
          <Grid item container sm={6} xs={12} className={classes.GridListItem}>
            <Fade up>Создание профиля в Google Merchant Center</Fade>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.GridListItem}>
            <Fade up>Его привязка к основному рекламному аккаунту</Fade>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.GridListItem}>
            <Fade up>Составление, систематизация и загрузка фидов для автоматического формирования объявлений</Fade>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
            <Fade up><img className={classes.RemarketingOrderInfoImg} src={RemarketingOrderInfoImg} alt=""/></Fade>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.RightColumn}>
            <Grid item>
              <Fade up>
              <p className={classes.Text}>Сервис Google Shopping — это мощный инструмент для продвижения интернет-магазинов. По мере роста доли мобильного трафика, маркетинговая эффективность площадки увеличивается. Это легко объяснить. Мобильным пользователям удобнее выбирать товары разных продавцов в одном окне, чем на нескольких сайтах одновременно.</p>
              <p className={classes.Text}>В настройке товарной рекламы самым сложным этапом считается составление фидов товаров.</p>
              <p className={classes.Text}>Нет времени разбираться в Google Shopping? Нужны продажи, а не риск потерять бюджет? Тогда просто обращайтесь в веб-студию 16.web.</p>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default GoogleShoppingServices