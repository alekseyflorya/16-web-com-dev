import React from "react";
import classes from "./SiteDesignProcess.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from 'react-reveal/Fade'

function SiteDesignProcess() {
  return (
    <section className={classes.SitePrototypeCost}>
      <Container fixed className={classes.Container}>
        <Fade up><h2 className={classes.Headding}>Процесс создания дизайна сайта</h2></Fade>
        <Grid container className={classes.FactorsBox}>
          <Grid item container sm={6} className={classes.FactorsLeft}>
            <Fade up>
            <p className={classes.Text}>Заказывая дизайн сайта у нашей веб-студии 16.web, вы должны понимать, что речь идёт не просто о красивом оформлении – с помощью типографики, изображений и цветовой гаммы мы решаем гораздо более широкий спектр задач. </p>
            <p className={classes.Text}>Наши специалисты, используя определенный набор визуальных средств и современных технологий, стремятся сделать сайт максимально понятным и простым для пользователя. При этом учитываются психология целевой аудитории, особенности мышления потенциальных покупателей, их трактовка окружающего мира и т.п.</p>
            </Fade>
          </Grid>
          <Grid item container sm={6} className={classes.GridList}>
            <Fade up><p className={classes.Text}>Грамотно продуманный дизайн сайта имеет соответствующую цену – это обусловлено тем, что он несёт на себе множество разнообразных функций. Хороший веб-дизайнер при разработке сайта решает следующие задачи:</p></Fade>
            <Grid item container sm={6} className={classes.GridListItem}>
              <Fade up>эстетичность</Fade>
            </Grid>
            <Grid item container sm={6} className={classes.GridListItem}>
              <Fade up>эргономичность</Fade>
            </Grid>
            <Grid item container sm={6} className={classes.GridListItem}>
              <Fade up>уникальность</Fade>
            </Grid>
            <Grid item container sm={6} className={classes.GridListItem}>
              <Fade up>доступность и простота</Fade>
            </Grid>
            <Grid item container sm={6} className={classes.GridListItem}>
              <Fade up>функциональность</Fade>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SiteDesignProcess