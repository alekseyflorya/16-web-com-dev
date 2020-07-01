import React from "react";
import classes from './WyWithUs.module.scss';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function WyWithUs() {
  return (
    <section className={classes.WyWithUs}>
      <Container fixed className={classes.Container}>
        <Grid container alignItems="center" className={classes.HeaddingBox}>
          <Grid item sm={7}>
            <h2 className={classes.Headding}>Почему стоит заказать веб-дизайн именно у нас?</h2>
          </Grid>
          <Grid item sm={5}>
            <p className={classes.HeaddingText}>Веб-студия 16.web готова предложить своим клиентам ряд важных преимуществ, из-за которых стоит обратиться именно к нам:</p>
          </Grid>
        </Grid>
        <Grid item container sm={12} className={classes.WyWithUsList}>
          <Grid item sm={6}>
            <div className={classes.Item}>
              <p className={classes.Text}>Ясность нашей позиции очевидна: выбранный нами инновационный путь способствует повышению качества инновационный путь </p>
            </div>
          </Grid>
          <Grid item sm={6}>
            <div className={classes.Item}>
              <p className={classes.Text}>Ясность нашей позиции очевидна: выбранный нами инновационный путь способствует повышению качества инновационный путь </p>
            </div>
          </Grid>
          <Grid item sm={6}>
            <div className={classes.Item}>
              <p className={classes.Text}>Ясность нашей позиции очевидна: выбранный нами инновационный путь способствует повышению качества инновационный путь </p>
            </div>
          </Grid>
          <Grid item sm={6}>
            <div className={classes.Item}>
              <p className={classes.Text}>Ясность нашей позиции очевидна: выбранный нами инновационный путь способствует повышению качества инновационный путь </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default WyWithUs