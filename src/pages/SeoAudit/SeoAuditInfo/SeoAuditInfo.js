import React from "react";
import classes from "./SeoAuditInfo.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SeoAuditInfotImg from "../../../assets/img/seo-audit-info.jpg";
import {Hidden} from "@material-ui/core";

function SeoAuditInfo() {
  return (
    <section className={classes.SeoAuditInfo}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item container sm={6} xs={12} className={classes.RightColumn}>
            <h2 className={classes.Headding}>SEO Аудит сайта</h2>
            <Hidden smUp>
              <img className={classes.SeoAuditInfoImg} src={SeoAuditInfotImg} alt=""/>
            </Hidden>
            <p className={classes.Text}>Сайт — универсальный инструмент для вашей компании, который выполняет множество функций. Это как лицо вашего бренда, так и ключевая операционная единица без которой многие важные процессы не были бы приведены в действие.</p>
            <p className={classes.Text}>Вы хотите, чтобы ваш сайт всегда соответствовал поисковой системе? Самое время провести комплексный аудит сайта. Проверка на оптимизацию сайта для поисковых систем никогда не будет лишней.</p>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
            <Hidden only="xs">
              <img className={classes.SeoAuditInfoImg} src={SeoAuditInfotImg} alt=""/>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SeoAuditInfo