import React from "react";
import classes from "./RemarketingHowItWorks.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function RemarketingHowItWorks() {
  return (
    <section className={classes.RemarketingHowItWorks}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <h2 className={classes.Headding}>Как работает поисковый ремаркетинг</h2>
          <p className={classes.Text}>Технология отслеживает по ID заинтересованных пользователей, которые покинули сайт, не совершив целевого действия. Настройка динамического ремаркетинга позволяет объединять таких посетителей в аудитории для демонстрации рекламы в рамках партнерских сетей Яндекс и Google. Ремаркетинг, при грамотной настройке, позволяет добиваться следующих целей:</p>
        </Grid>
        <Grid container sm={12} xs={12} className={classes.Cards}>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Получение качественных бэклинков с релевантных и/или авторитетных ресурсов</h3>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Использование только вечных ссылок</h3>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Ссылки размещаются не ради ссылок, а для получения трафика</h3>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default RemarketingHowItWorks