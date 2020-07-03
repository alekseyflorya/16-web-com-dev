import React from "react";
import classes from './OnlineStoreProcess.module.scss';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function OnlineStoreProcess() {
  return (
    <section className={classes.OnlineStoreProcess}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item sm={7}>
            <h2 className={classes.Headding}>Процесс создания сайта интернет-магазина</h2>
          </Grid>
          <Grid item sm={5}>
            <p className={classes.HeaddingText}>Вы можете заказать у специалистов нашей веб-студии 16.web следующие виды услуг по созданию интернет-магазина:</p>
          </Grid>
        </Grid>
        <Grid item container sm={12} className={classes.ApproachList}>
          <Grid item sm={4}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Уникальный адаптивный дизайн</h3>
            </div>
          </Grid>
          <Grid item sm={4}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Стильное оформление</h3>
            </div>
          </Grid>
          <Grid item sm={4}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Разработка по вашему дизайну</h3>
            </div>
          </Grid>
          <Grid item sm={4}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Наполнение контентом</h3>
            </div>
          </Grid>
          <Grid item sm={4}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Привязка к хостингу</h3>
            </div>
          </Grid>
          <Grid item sm={4}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Тестирование</h3>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default OnlineStoreProcess