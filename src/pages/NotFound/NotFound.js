import React from "react";
import classes from "./NotFound.module.scss"
import Header from "../../components/Header";
import notFoundImg from "../../assets/img/404.jpg";
import Grid from "@material-ui/core/Grid";
import {ButtonLink} from "../../components/UI/ButtonLink";




function NotFound() {
  const NotFoundContent = () =>  {
    return (
      <Grid container sm={12} className={classes.NotFound}>
        <Grid item container sm={6} className={classes.NotFoundLeft}>
          <img className={classes.NotFoundImg} src={notFoundImg} alt=""/>
        </Grid>
        <Grid item container sm={6} className={classes.NotFoundRight}>
          <Grid item container className={classes.HeaddingBox}>
            <h1 className={classes.Headding}>Упсс, 404!</h1>
            <p className={classes.Text}>Скорее всего этой страницы больше нет или Вам просто нравится изучать 404 страницы :) Переходите на главную страницу или вернитесь назад.</p>
          </Grid>
          <Grid item container justify="space-between">
            <ButtonLink title={'Подробнее о нас'} path={'/about'} />
            <ButtonLink title={'На главную'} path={'/'} />
          </Grid>
        </Grid>
      </Grid>

    )
  }
  return (
    <Header notFound={<NotFoundContent />} />
  )
}

export default NotFound