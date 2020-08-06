import React from "react";
import classes from "./OrderInfoPpcAudit.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import OrderInfoExternalOptimizationImg from "../../../assets/img/order-info-ppc-audit.jpg";
import Fade from 'react-reveal/Fade'

function OrderInfoPpcAudit() {
  return (
    <>
      <section className={classes.ExternalOptimizationInfo}>
        <Container fixed className={classes.Container}>
          <Fade up><h2 className={classes.Headding}>Зачем нужен аудит контекстной кампании</h2></Fade>
          <Grid container>
            <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
              <Fade up>
                <p className={classes.Text}>Сертифицированные специалисты компании 16.web уже более 5 лет успешно занимаются настройкой и ведением контекстной рекламы.</p>
                <p className={classes.Text}>Закажите аудит в нашей веб-студии, чтобы рекламный бюджет приносил максимум прибыли бизнесу.</p>
              </Fade>
            </Grid>
            <Grid item container sm={6} xs={12} className={classes.RightColumn}>
              <Fade up><p className={classes.Text}>Качественный аудит рекламы дает возможность:</p></Fade>
              <Grid item container sm={12} className={classes.GridList}>
                <Grid item container sm={12} className={classes.GridListItem}>
                  <Fade up>проанализировать качество настройки кампаний</Fade>
                </Grid>
                <Grid item container sm={12} className={classes.GridListItem}>
                  <Fade up>выявить «слабые» точки»</Fade>
                </Grid>
                <Grid item container sm={12} className={classes.GridListItem}>
                  <Fade up>получить подробные рекомендации по оптимизации</Fade>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={classes.OrderInfoExternalOptimization}>
        <Container fixed>
          <Grid container>
            <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
              <Fade up><img className={classes.OrderInfoExternalOptimizationImg} src={OrderInfoExternalOptimizationImg} alt=""/></Fade>
            </Grid>
            <Grid item container sm={6} xs={12} className={classes.RightColumn}>
              <Fade up>
              <p className={classes.Text}>Рекламные платформы Google Ads и «Яндекс.Директ» — это действительно мощные инструменты для генерации целевого трафика. Но они нуждаются в тонкой и грамотной настройке.</p>
              <p className={classes.Text}>Аукционный принцип оплаты в сочетании с высокой конкуренцией делает стоимость перехода ощутимой для любого бюджета. Поэтому бизнесу критически важно внимательно оптимизировать каждую кампанию.</p>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default OrderInfoPpcAudit