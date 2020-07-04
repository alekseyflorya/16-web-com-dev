import React from "react";
import classes from "./SiteDesignProcess.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function SiteDesignProcess() {
  return (
    <section className={classes.SitePrototypeCost}>
      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>Процесс создания дизайна сайта</h2>
        <Grid container className={classes.FactorsBox}>
          <Grid item container sm={6} className={classes.FactorsLeft}>
            <p className={classes.Text}>Заказывая дизайн сайта у нашей веб-студии 16.web, вы должны понимать, что речь идёт не просто о красивом оформлении – с помощью типографики, изображений и цветовой гаммы мы решаем гораздо более широкий спектр задач. </p>
            <p className={classes.Text}>Наши специалисты, используя определенный набор визуальных средств и современных технологий, стремятся сделать сайт максимально понятным и простым для пользователя. При этом учитываются психология целевой аудитории, особенности мышления потенциальных покупателей, их трактовка окружающего мира и т.п.</p>
          </Grid>
          <Grid item container sm={6} className={classes.GridList}>
            <p className={classes.Text}>Грамотно продуманный дизайн сайта имеет соответствующую цену – это обусловлено тем, что он несёт на себе множество разнообразных функций. Хороший веб-дизайнер при разработке сайта решает следующие задачи:</p>
            <Grid item container sm={6} className={classes.GridListItem}>
              эстетичность
            </Grid>
            <Grid item container sm={6} className={classes.GridListItem}>
              эргономичность
            </Grid>
            <Grid item container sm={6} className={classes.GridListItem}>
              уникальность
            </Grid>
            <Grid item container sm={6} className={classes.GridListItem}>
              доступность и простота
            </Grid>
            <Grid item container sm={6} className={classes.GridListItem}>
              функциональность
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SiteDesignProcess