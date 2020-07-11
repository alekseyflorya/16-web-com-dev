import React from "react";
import classes from './Approach.module.scss';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function Approach() {
  return (
    <section className={classes.Approach}>
      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>Наш подход</h2>
        <Grid item container sm={12} className={classes.ApproachList}>
          <Grid item sm={6} xs={12}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Погружение в процесс</h3>
              <p className={classes.Text}>Ясность нашей позиции очевидна: выбранный нами инновационный путь способствует повышению качества инновационный путь </p>
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Проработка структуры</h3>
              <p className={classes.Text}>Ясность нашей позиции очевидна: выбранный нами инновационный путь способствует повышению качества инновационный путь </p>
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Уникальный дизайн</h3>
              <p className={classes.Text}>Ясность нашей позиции очевидна: выбранный нами инновационный путь способствует повышению качества инновационный путь </p>
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Разработка продуктов</h3>
              <p className={classes.Text}>Ясность нашей позиции очевидна: выбранный нами инновационный путь способствует повышению качества инновационный путь </p>
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Тестирование процессов</h3>
              <p className={classes.Text}>Ясность нашей позиции очевидна: выбранный нами инновационный путь способствует повышению качества инновационный путь </p>
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Продвижение и поддержка</h3>
              <p className={classes.Text}>Ясность нашей позиции очевидна: выбранный нами инновационный путь способствует повышению качества инновационный путь </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Approach