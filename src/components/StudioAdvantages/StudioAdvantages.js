import React from 'react';
import classes from './StudioAdvantages.module.scss';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import StudioAdvantagesImg from "../../assets/img/studio-advantages.jpg";

function StudioAdvantages() {
  return (
    <section className={classes.StudioAdvantages}>
      <Container fixed className={classes.Container}>
        <Grid container>

          <Grid item container sm={6} className={classes.LeftColumn}>
            <h2 className={classes.Headding}>Преимущества студии</h2>
            <p className={classes.Text}>Разработка сайта ставит своей конечной целью продвижение товара и услуги с последующим ростом продаж – обращаясь к веб-студии 16.web вы получаете шанс добиться в этом плане впечатляющих результатов. Это обусловлено рядом наших весомых преимуществ, к числу которых относятся:</p>
            <Grid item container sm={9} className={classes.GridList}>
              <Grid item container sm={12} className={classes.GridListItem}>Высокий уровень профессионализма</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>Использование современных цифровых технологий</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>Креативность</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>Ответственное отношение к каждому проекту</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>Разумная ценовая политика</Grid>
            </Grid>
          </Grid>

          <Grid item container sm={6} className={classes.RightColumn}>
            <img src={StudioAdvantagesImg} alt=""/>
          </Grid>

        </Grid>
      </Container>
    </section>
  )
}

export default StudioAdvantages