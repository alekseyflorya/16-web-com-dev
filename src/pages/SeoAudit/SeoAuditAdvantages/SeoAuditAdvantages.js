import React from "react";
import classes from "./SeoAuditAdvantages.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SeoAuditAdvantagestImg from "../../../assets/img/seo-audit-advantages.jpg";
import {Hidden} from "@material-ui/core";

function SeoAuditAdvantages() {
  return (
    <section className={classes.SeoAuditAdvantages}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item container sm={6} xs={12} className={classes.RightColumn}>
            <h2 className={classes.Headding}>С выполнением SEO аудита в дальнейшем вы:</h2>
            <Hidden smUp>
              <img className={classes.SeoAuditAdvantagestImg} src={SeoAuditAdvantagestImg} alt=""/>
            </Hidden>
            <p className={classes.Text}>Всё это возможно при внедрении прилагающихся к аудиту технических заданий для специалистов. Вы можете сэкономить время и усилия - наша веб-студия может предоставить весь этот комплекс услуг - от аудита до внедрения рекомендаций.</p>
            <Grid item container sm={12} className={classes.GridList}>
              <Grid item container sm={12} className={classes.GridListItem}>поднимите и закрепите свои позиции в поисковой выдаче</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>увеличите трафик</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>повысите узнаваемость бренда</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>сделаете прирост прибыли</Grid>
            </Grid>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
            <Hidden only="xs">
              <img className={classes.SeoAuditAdvantagestImg} src={SeoAuditAdvantagestImg} alt=""/>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SeoAuditAdvantages