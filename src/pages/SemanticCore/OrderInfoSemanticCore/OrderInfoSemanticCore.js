import React from "react";
import classes from "./OrderInfoSemanticCore.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SeoAuditAdvantagestImg from "../../../assets/img/order-info-semantic-core.jpg";
import {Hidden} from "@material-ui/core";
import Fade from 'react-reveal/Fade'

function OrderInfoSemanticCore() {
  return (
    <section className={classes.SeoAuditAdvantages}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
            <Hidden only="xs">
              <Fade up><img className={classes.SeoAuditAdvantagestImg} src={SeoAuditAdvantagestImg} alt=""/></Fade>
            </Hidden>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.RightColumn}>
            <Fade up><h2 className={classes.Headding}>Как заказать семантическое ядро для сайта</h2></Fade>
            <Hidden smUp>
              <Fade up><img className={classes.SeoAuditAdvantagestImg} src={SeoAuditAdvantagestImg} alt=""/></Fade>
            </Hidden>
            <Fade up>
            <p className={classes.Text}>Все просто! Уже сегодня оформляйте заявку на 16.web, и наши специалисты сразу приступят к работе. Сначала они глубоко изучат нишу бизнеса клиента, а также особенности и настроения целевой аудитории.</p>
            <p className={classes.Text}>Для подбора ключевых слов мы используем профессиональные инструменты для анализа запросов и страниц конкурентов. Конечно же, в нашей веб-студии не обходится без напряженного мозгового штурма.</p>
            <p className={classes.Text}>В итоге, вы получите детально проработанное структурированное семантическое ядро — основу эффективного продвижения проекта.</p>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default OrderInfoSemanticCore