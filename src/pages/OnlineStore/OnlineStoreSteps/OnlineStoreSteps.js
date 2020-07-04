import React from "react";
import classes from "./OnlineStoreSteps.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function OnlineStoreSteps() {
  return (
    <section className={classes.OnlineStoreSteps}>
      <Container fixed>
        <Grid container>
          <Grid item container alignItems="center" className={classes.HeaddingBlock}>
            <Grid item container sm={6}>
              <h2 className={classes.Headding}>Разработка интернет- магазина с нуля</h2>
            </Grid>
            <Grid item container sm={6}>
              <p className={classes.Text}>Обращаясь в веб-студию 16.web, чтобы заказать разработку интернет-магазина под ключ, вы получаете все преимущества комплексного подхода, а именно:</p>
            </Grid>
          </Grid>
          <Grid item container className={classes.GridList}>
            <Grid item container sm={4} direction="column" alignItems="center" className={classes.GridListItem}>
              <div className={classes.RoundNumber}>01</div>
              <p className={classes.Text}>Слаженная работа команды позволяет решать задачи гораздо быстрее и эффективнее, чем помощь разработчиков, реализующих этапы отдельно друг от друга.</p>
            </Grid>
            <Grid item container sm={4} direction="column" alignItems="center" className={classes.GridListItem}>
              <div className={classes.RoundNumber}>02</div>
              <p className={classes.Text}>Разрабатывая интернет-магазин, наша команда берёт на себя контроль всех процессов – это избавляет от множества ошибок и просчётов.</p>
            </Grid>
            <Grid item container sm={4} direction="column" alignItems="center" className={classes.GridListItem}>
              <div className={classes.RoundNumber}>03</div>
              <p className={classes.Text}>Мы отвечаем за конечный результат нашей работы и предоставляем все необходимые гарантии, а также осуществляем техподдержку и консультирование заказчиков.</p>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default OnlineStoreSteps