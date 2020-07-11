import React from "react";
import classes from './VacancieFeatures.module.scss';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function VacancieFeatures() {
  return (
    <section className={classes.VacancieFeatures}>
      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>Больше, чем просто работа</h2>
        <Grid item container sm={12} className={classes.ApproachList}>
          <Grid item sm={6} xs={12}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Самореализация</h3>
              <p className={classes.Text}>Внезапно, представители современных социальных резервов неоднозначны и будут рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.</p>
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Гибкость</h3>
              <p className={classes.Text}>Внезапно, представители современных социальных резервов неоднозначны и будут рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.</p>
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Профессионализм</h3>
              <p className={classes.Text}>Внезапно, представители современных социальных резервов неоднозначны и будут рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.</p>
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Чесность</h3>
              <p className={classes.Text}>Внезапно, представители современных социальных резервов неоднозначны и будут рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default VacancieFeatures