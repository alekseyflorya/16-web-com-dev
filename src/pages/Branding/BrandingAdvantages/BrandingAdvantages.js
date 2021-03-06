import React from 'react';
import classes from './BrandingAdvantages.module.scss';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import BrandingAdvantagesImg from "../../../assets/img/branding-advantages.jpg"
import Fade from 'react-reveal/Fade'

function BrandingAdvantages() {
  return (
    <section className={classes.BrandingAdvantages}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item container sm={6} className={classes.LeftColumn}>
            <Grid item container>
              <Fade up><h2 className={classes.Headding}>Закажите услуги по бренд-маркетингу у нас!</h2></Fade>
            </Grid>
            <Grid item container>
              <Fade up><img className={classes.BrandingAdvantagesImg} src={BrandingAdvantagesImg} alt=""/></Fade>
            </Grid>
          </Grid>
          <Grid item container sm={6} className={classes.RightColumn}>
            <Fade up>
            <p className={classes.Text}>Выработку основной концепции продвижения, поиск целевой аудитории, дизайн бренда и другие факторы вы можете смело доверить нам – в пользу такого решения говорят наши преимущества:</p>
            <Grid item container className={classes.GridList}>
              <Grid item container sm={12} className={classes.GridListItem}>высокая квалификация наших специалистов</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>обширный опыт выполнения задач по разработке брендов</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>творческий подход</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>умение работать с нестандартными задачами</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>добросовестное выполнение всех взятых на себя обязательств</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>разумные цены</Grid>
            </Grid>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default BrandingAdvantages