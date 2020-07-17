import React from "react";
import classes from "./GoogleShoppingServices.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import RemarketingOrderInfoImg from "../../../assets/img/ppc-setting-services.jpg";

function GoogleShoppingServices() {
  return (
    <section className={classes.RemarketingOrderInfo}>
      <Container fixed className={classes.Container}>
        <Grid container className={classes.HeaddingBox}>
          <Grid item sm={6} xs={12}>
            <h2 className={classes.Headding}>Как работает товарная реклама в Гугл</h2>
          </Grid>
          <Grid item sm={6} xs={12}>
            <p className={classes.Text}>В Гугл Шопинг настройка проходит по следующему алгоритму:</p>
          </Grid>
        </Grid>
        <Grid container className={classes.GridList}>
          <Grid item container sm={6} xs={12} className={classes.GridListItem}>
            Создание профиля в Google Merchant Center
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.GridListItem}>
            Его привязка к основному рекламному аккаунту
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.GridListItem}>
            Составление, систематизация и загрузка фидов для автоматического формирования объявлений
          </Grid>
        </Grid>
        <Grid container>
          <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
            <img className={classes.RemarketingOrderInfoImg} src={RemarketingOrderInfoImg} alt=""/>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.RightColumn}>
            <Grid item>
              <p className={classes.Text}>Сервис Google Shopping — это мощный инструмент для продвижения интернет-магазинов. По мере роста доли мобильного трафика, маркетинговая эффективность площадки увеличивается. Это легко объяснить. Мобильным пользователям удобнее выбирать товары разных продавцов в одном окне, чем на нескольких сайтах одновременно.</p>
              <p className={classes.Text}>В настройке товарной рекламы самым сложным этапом считается составление фидов товаров.</p>
              <p className={classes.Text}>Нет времени разбираться в Google Shopping? Нужны продажи, а не риск потерять бюджет? Тогда просто обращайтесь в веб-студию 16.web.</p>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default GoogleShoppingServices