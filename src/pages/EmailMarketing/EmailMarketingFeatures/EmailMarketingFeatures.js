import React from "react";
import classes from "./EmailMarketingFeatures.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function EmailMarketingFeatures() {
  return (
    <section className={classes.EmailMarketingFeatures}>
      <Container fixed className={classes.Container}>
        <Grid container alignItems="center" className={classes.HeaddingBox}>
          <Grid item container sm={6} xs={12}>
            <h2 className={classes.Headding}></h2>
          </Grid>
          <Grid item container sm={6} xs={12}>
            <p className={classes.Text}></p>
          </Grid>
        </Grid>
        <Grid container className={classes.GridList}>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>

          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>

          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>

          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>

          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>

          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>

          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default EmailMarketingFeatures