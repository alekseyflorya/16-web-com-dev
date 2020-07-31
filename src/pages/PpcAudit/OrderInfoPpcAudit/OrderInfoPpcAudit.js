import React from "react";
import classes from "./OrderInfoPpcAudit.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import OrderInfoExternalOptimizationImg from "../../../assets/img/order-info-ppc-audit.jpg";

function OrderInfoPpcAudit() {
  return (
    <>
      <section className={classes.ExternalOptimizationInfo}>
        <Container fixed className={classes.Container}>
          <h2 className={classes.Headding}>Зачем нужен аудит контекстной кампании</h2>
          <Grid container>
            <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
              <p className={classes.Text}>Сертифицированные специалисты компании 16.web уже более 5 лет успешно занимаются настройкой и ведением контекстной рекламы.</p>
              <p className={classes.Text}>Закажите аудит в нашей веб-студии, чтобы рекламный бюджет приносил максимум прибыли бизнесу.</p>
            </Grid>
            <Grid item container sm={6} xs={12} className={classes.RightColumn}>
              <p className={classes.Text}>Качественный аудит рекламы дает возможность:</p>
              <Grid item container sm={12} className={classes.GridList}>
                <Grid item container sm={12} className={classes.GridListItem}>проанализировать качество настройки кампаний</Grid>
                <Grid item container sm={12} className={classes.GridListItem}>выявить «слабые» точки»</Grid>
                <Grid item container sm={12} className={classes.GridListItem}>получить подробные рекомендации по оптимизации</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={classes.OrderInfoExternalOptimization}>
        <Container fixed>
          <Grid container>
            <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
              <img className={classes.OrderInfoExternalOptimizationImg} src={OrderInfoExternalOptimizationImg} alt=""/>
            </Grid>
            <Grid item container sm={6} xs={12} className={classes.RightColumn}>
              <p className={classes.Text}>Рекламные платформы Google Ads и «Яндекс.Директ» — это действительно мощные инструменты для генерации целевого трафика. Но они нуждаются в тонкой и грамотной настройке.</p>
              <p className={classes.Text}>Аукционный принцип оплаты в сочетании с высокой конкуренцией делает стоимость перехода ощутимой для любого бюджета. Поэтому бизнесу критически важно внимательно оптимизировать каждую кампанию.</p>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default OrderInfoPpcAudit