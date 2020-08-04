import React from 'react';
import classes from './StudioAdvantages.module.scss';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import StudioAdvantagesImg from "../../assets/img/studio-advantages.jpg";
import {Hidden} from "@material-ui/core";
import Fade from "react-reveal/Fade";

function StudioAdvantages() {
  return (
    <section className={classes.StudioAdvantages}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
            <Fade up>
            <h2 className={classes.Headding}>Преимущества студии</h2>
            <Hidden smUp>
              <img className={classes.StudioAdvantagesImg} src={StudioAdvantagesImg} alt=""/>
            </Hidden>
            <p className={classes.Text}>Разработка сайта ставит своей конечной целью продвижение товара и услуги с последующим ростом продаж – обращаясь к веб-студии 16.web вы получаете шанс добиться в этом плане впечатляющих результатов. Это обусловлено рядом наших весомых преимуществ, к числу которых относятся:</p>
            <Grid item container sm={9} xs={12} className={classes.GridList}>
              <Grid item container sm={12} className={classes.GridListItem}>Высокий уровень профессионализма</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>Использование современных цифровых технологий</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>Креативность</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>Ответственное отношение к каждому проекту</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>Разумная ценовая политика</Grid>
            </Grid>
            </Fade>
          </Grid>
          <Grid item container sm={6} className={classes.RightColumn}>
            <Hidden only="xs">
              <Fade up><img src={StudioAdvantagesImg} alt=""/></Fade>
            </Hidden>
          </Grid>

        </Grid>
      </Container>
    </section>
  )
}

export default StudioAdvantages