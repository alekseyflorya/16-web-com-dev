import React from "react";
import classes from "./SeoCost.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import OnlineStoreCoastImg from "../../../assets/img/online-store-coast.jpg";

function SeoCost() {
  return (
    <section className={classes.SeoCost}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item container sm={6} className={classes.RightColumn}>
            <h2 className={classes.Headding}>От чего зависит стоимость продвижения сайта?</h2>
            <p className={classes.Text}>На разные виды услуг по SEO-продвижению сайтов цены формируются с учётом самых разных факторов – берутся во внимание поставленные цели и задачи, учитывается реальное состояние ресурса до оптимизации и его «возраст», рассчитывается количество нового контента. который необходимо создать и разместить.</p>
            <p className={classes.Text}>Кроме того, огромную роль играет тематика ресурса – чем выше конкурентность в конкретной нише, тем сложнее вывести его в топ.</p>
            <p className={classes.Text}>Веб-студия 16.web придерживается достаточно лояльной ценовой политики – обращайтесь к нам и вам не придётся платить лишнее.</p>
          </Grid>
          <Grid item container sm={6} className={classes.LeftColumn}>
            <img src={OnlineStoreCoastImg} alt=""/>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SeoCost