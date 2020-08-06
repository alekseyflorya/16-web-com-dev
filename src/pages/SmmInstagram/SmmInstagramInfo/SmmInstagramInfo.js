import React from "react";
import classes from "./SmmInstagramInfo.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import InfoFacebookSmmImg from "../../../assets/img/instagram-smm-advantages.jpg";
import Fade from 'react-reveal/Fade'

function SmmInstagramInfo() {
  return (
    <section className={classes.InfoFacebookSmm}>
      <Container fixed className={classes.Container}>
        <Fade up><h2 className={classes.Headding}>Как мы продвигаем</h2></Fade>
        <Grid container>
          <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
            <Fade up><img className={classes.InfoFacebookSmmImg} src={InfoFacebookSmmImg} alt=""/></Fade>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.RightColumn}>
            <Fade up>
            <p className={classes.Text}>Стратегия SMM в Инстаграме всегда разрабатывается индивидуально под конкретный бизнес. Мы глубоко изучаем нишу клиента, конкурентное окружение, настроения целевой аудитории и особенности продукта.</p>
            <p className={classes.Text}>Продвижение в Инстаграм с нуля включает в себя следующие этапы:</p>
            </Fade>
            <Grid item container className={classes.GridList}>
              <Grid item container className={classes.GridListItem}>
                <Fade up>Создание профиля для эффектной презентации бренда</Fade>
              </Grid>
              <Grid item container className={classes.GridListItem}>
                <Fade up>Подбор общих и уникальных хештегов</Fade>
              </Grid>
              <Grid item container className={classes.GridListItem}>
                <Fade up>Разработка контент-плана</Fade>
              </Grid>
              <Grid item container className={classes.GridListItem}>
                <Fade up>Публикация постов</Fade>
              </Grid>
              <Grid item container className={classes.GridListItem}>
                <Fade up>Организация коммуникации с аудиторией</Fade>
              </Grid>
              <Grid item container className={classes.GridListItem}>
                <Fade up>Определение ключевых показателей эффективности (KPI)</Fade>
              </Grid>
              <Grid item container className={classes.GridListItem}>
                <Fade up>Настройка и запуск таргетированной рекламы (дополнительная услуга)</Fade>
              </Grid>
            </Grid>
            <p className={classes.Text}>Параллельно проводится активная аналитическая работа. Специалисты разрабатывают гипотезы и проводят тестирования. Все это необходимо для того, чтобы каждый элемент стратегии развития работал с максимальной эффективностью.</p>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SmmInstagramInfo