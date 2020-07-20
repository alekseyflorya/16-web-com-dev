import React from "react";
import classes from "./SmmInstagramInfo.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import InfoFacebookSmmImg from "../../../assets/img/seo-audit-advantages.jpg";

function SmmInstagramInfo() {
  return (
    <section className={classes.InfoFacebookSmm}>
      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>Как мы продвигаем</h2>
        <Grid container>
          <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
            <img className={classes.InfoFacebookSmmImg} src={InfoFacebookSmmImg} alt=""/>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.RightColumn}>
            <p className={classes.Text}>Стратегия SMM в Инстаграме всегда разрабатывается индивидуально под конкретный бизнес. Мы глубоко изучаем нишу клиента, конкурентное окружение, настроения целевой аудитории и особенности продукта.</p>
            <p className={classes.Text}>Продвижение в Инстаграм с нуля включает в себя следующие этапы:</p>
            <Grid item container className={classes.GridList}>
              <Grid item container className={classes.GridListItem}>Создание профиля для эффектной презентации бренда</Grid>
              <Grid item container className={classes.GridListItem}>Подбор общих и уникальных хештегов</Grid>
              <Grid item container className={classes.GridListItem}>Разработка контент-плана</Grid>
              <Grid item container className={classes.GridListItem}>Публикация постов</Grid>
              <Grid item container className={classes.GridListItem}>Организация коммуникации с аудиторией</Grid>
              <Grid item container className={classes.GridListItem}>Определение ключевых показателей эффективности (KPI)</Grid>
              <Grid item container className={classes.GridListItem}>Настройка и запуск таргетированной рекламы (дополнительная услуга)</Grid>
            </Grid>
            <p className={classes.Text}>Параллельно проводится активная аналитическая работа. Специалисты разрабатывают гипотезы и проводят тестирования. Все это необходимо для того, чтобы каждый элемент стратегии развития работал с максимальной эффективностью.</p>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SmmInstagramInfo