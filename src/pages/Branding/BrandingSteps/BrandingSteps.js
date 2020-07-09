import React from "react";
import classes from "./BrandingSteps.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function BrandingSteps() {
  return (
    <section className={classes.BrandingSteps}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <h2 className={classes.Headding}>Услуги брендинга</h2>
        </Grid>
        <Grid container sm={12} xs={12} className={classes.Cards}>
          <Grid item container sm={6} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Создание персонального бренда</h3>
            <p className={classes.Text}>Построение личного бренда очень важно для представителей спорта и шоу-бизнеса, сферы искусства, бизнеса и политики – оно позволяет добиться успеха в своей профессиональной деятельности путём выгодного позиционирования себя среди конкурентов и создания в глазах публики привлекательного имиджа.</p>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Разработка брендбука</h3>
            <p className={classes.Text}>Для построения любого бренда необходимо создать брендбук – официальный документ, в котором будут чётко сформулированы основные моменты, касающиеся фирменного стиля, визуальных образов, корпоративной культуры, стратегии продвижения и т.п.</p>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Построение бренда компании</h3>
            <p className={classes.Text}>Разработка бренда компании является одной из ключевых задач, стоящих перед основателями – это база для дальнейшего развития формирующейся структуры. При этом вырабатываются главная концепция бренда, фирменный стиль, слоган и другие компоненты, из которых впоследствии будет создаваться положительный образ компании в глазах потребителей и сотрудников.</p>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.Card} justify="center" alignItems="center">
            <p className={classes.Text}>Веб-студия 16.web готова взять на себя разработку вашего бренда – мы обеспечим всё, что необходимо для позиционирования торговой марки.</p>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default BrandingSteps