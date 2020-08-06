import React from "react";
import classes from "./SeoAuditAdvantages.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SeoAuditAdvantagestImg from "../../../assets/img/seo-audit-advantages.jpg";
import {Hidden} from "@material-ui/core";
import Fade from 'react-reveal/Fade'

function SeoAuditAdvantages() {
  return (
    <section className={classes.SeoAuditAdvantages}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item container sm={6} xs={12} className={classes.RightColumn}>
            <Fade up><h2 className={classes.Headding}>С выполнением SEO аудита в дальнейшем вы:</h2></Fade>
            <Hidden smUp>
              <Fade up><img className={classes.SeoAuditAdvantagestImg} src={SeoAuditAdvantagestImg} alt=""/></Fade>
            </Hidden>
            <Fade up><p className={classes.Text}>Всё это возможно при внедрении прилагающихся к аудиту технических заданий для специалистов. Вы можете сэкономить время и усилия - наша веб-студия может предоставить весь этот комплекс услуг - от аудита до внедрения рекомендаций.</p></Fade>
            <Grid item container sm={12} className={classes.GridList}>
              <Grid item container sm={12} className={classes.GridListItem}>
                <Fade up>поднимите и закрепите свои позиции в поисковой выдаче</Fade>
              </Grid>
              <Grid item container sm={12} className={classes.GridListItem}>
                <Fade up>увеличите трафик</Fade>
              </Grid>
              <Grid item container sm={12} className={classes.GridListItem}>
                <Fade up>повысите узнаваемость бренда</Fade>
              </Grid>
              <Grid item container sm={12} className={classes.GridListItem}>
                <Fade up>сделаете прирост прибыли</Fade>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
            <Hidden only="xs">
              <Fade up><img className={classes.SeoAuditAdvantagestImg} src={SeoAuditAdvantagestImg} alt=""/></Fade>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SeoAuditAdvantages