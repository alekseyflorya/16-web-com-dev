import React from "react";
import classes from "./RemarketingOrderInfo.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import RemarketingOrderInfoImg from "../../../assets/img/remarketing-order-info.jpg";
import Fade from 'react-reveal/Fade'

function RemarketingOrderInfo() {
  return (
    <section className={classes.RemarketingOrderInfo}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
            <Fade up><img className={classes.RemarketingOrderInfoImg} src={RemarketingOrderInfoImg} alt=""/></Fade>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.RightColumn}>
            <Grid item>
              <Fade up>
              <p className={classes.Text}>Динамический ремаркетинг после правильной настройки — это один из самых эффективных инструментов для оптимизации рекламных расходов. Целевой трафик всегда стоит дорого, поэтому бизнес не должен позволять себе терять больше половины переходов.</p>
              <p className={classes.Text}>Нужна внешняя оптимизация интернет-магазина или информационного сайта? Тогда не рискуйте, а просто обращайтесь в веб-студию 16.web.</p>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default RemarketingOrderInfo