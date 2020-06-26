import React from 'react';
import classes from './Philosophy.module.scss';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function Philosophy() {
  return (
    <section className={classes.Philosophy}>
      <Container fixed className={classes.Container}>
        <Grid container>

          <Grid item container sm={6} className={classes.LeftColumn}>
            <h2 className={classes.Headding}>Наша филисофия</h2>
            <p className={classes.Text}>Ясность нашей позиции очевидна: выбранный нами инновационный путь способствует повышению качества переосмысления внешнеэкономических политик. С учётом сложившейся международной обстановки.</p>
            <p className={classes.Text}>Ясность нашей позиции очевидна: выбранный нами инновационный путь способствует повышению качества переосмысления внешнеэкономических политик. С учётом сложившейся международной обстановки.</p>
            <Grid item container sm={8} className={classes.GridList}>
              <Grid item container sm={6} className={classes.GridListItem}>Инновацион</Grid>
              <Grid item container sm={6} className={classes.GridListItem}>Инновацион</Grid>
              <Grid item container sm={6} className={classes.GridListItem}>Инновацион</Grid>
              <Grid item container sm={6} className={classes.GridListItem}>Инновацион</Grid>
            </Grid>
          </Grid>

          <Grid item container sm={6} className={classes.RightColumn}>

          </Grid>

        </Grid>
      </Container>
    </section>
  )
}

export default Philosophy