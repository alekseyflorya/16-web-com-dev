import React from "react";
import classes from './FineQuality.module.scss';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function FineQuality() {
  return (
    <section className={classes.FineQuality}>
      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>Отличное качество</h2>
        <Grid item container sm={12} className={classes.Advantages}>
          <Grid item sm={4} xs={12}>
            <div className={classes.Item}>
              <p className={`${classes.Text} ${classes.Numbers}`}>Быстрое и эффективное продвижение бренда в интернете.</p>
            </div>
          </Grid>
          <Grid item sm={4} xs={12}>
            <div className={classes.Item}>
              <p className={`${classes.Text} ${classes.Numbers}`}>Инструменты для раскрутки - контекстная реклама, SEO и SMM и другие.</p>
            </div>
          </Grid>
          <Grid item sm={4} xs={12}>
            <div className={classes.Item}>
              <p className={`${classes.Text} ${classes.Numbers}`}>Инструменты для раскрутки - контекстная реклама, SEO и SMM и другие.</p>
            </div>
          </Grid>
          <Grid item sm={4} xs={12}>
            <div className={classes.Item}>
              <p className={`${classes.Text} ${classes.Numbers}`}>Инструменты для раскрутки - контекстная реклама, SEO и SMM и другие.</p>
            </div>
          </Grid>
          <Grid item sm={4} xs={12}>
            <div className={classes.Item}>
              <p className={`${classes.Text} ${classes.Numbers}`}>Инструменты для раскрутки - контекстная реклама, SEO и SMM и другие.</p>
            </div>
          </Grid>
          <Grid item sm={4} xs={12}>
            <div className={classes.Item}>
              <p className={`${classes.Text} ${classes.Numbers}`}>Инструменты для раскрутки - контекстная реклама, SEO и SMM и другие.</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default FineQuality