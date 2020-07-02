import React from "react";
import classes from "./LandingCoast.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LandingCoastImg from "../../../assets/img/landing-coast.jpg";

function LandingCoast() {
  return (
    <section className={classes.LandingCoast}>
      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>От чего зависит стоимость лендинга?</h2>
        <Grid container>
          <Grid item container sm={6} className={classes.LeftColumn}>
            <img src={LandingCoastImg} alt=""/>
          </Grid>
          <Grid item container sm={6} className={classes.RightColumn}>
            <p className={classes.Text}>У клиентов, заказывающих создание сайта-одностраничника, одним из первых возникает вопрос о стоимости услуги. Веб-студия 16.web при разработке лендинг-пейджа цену формирует, исходя из следующих критериев:</p>
            <Grid item container sm={9} className={classes.GridList}>
              <Grid item container sm={12} className={classes.GridListItem}>количество времени, потраченного специалистами на работу над проектом</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>уровень сложности дизайна</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>качество и количество контента</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>уровень конверсии и другие факторы</Grid>
            </Grid>
            <p className={classes.Text}>Резюмируя сказанное выше, можно понять, что разработка индивидуального лендинга под ключ обойдётся дороже, чем более шаблонное решение, на разработку которого уйдёт меньше времени и ресурсов.</p>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default LandingCoast