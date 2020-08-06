import React from "react";
import classes from "./SmmInstagramServices.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from 'react-reveal/Fade'

function SmmInstagramServices() {
  return (
    <section className={classes.SmmInstagramServices}>
      <Container fixed className={classes.Container}>
        <Grid container className={classes.HeaddingBox}>
          <Grid item sm={8} xs={12}>
            <Fade up><h2 className={classes.Headding}>Зачем компаниям Инстаграм продвижение</h2></Fade>
          </Grid>
          <Grid item sm={8} xs={12}>
            <Fade up><p className={classes.Text}>Комплексное развитие бизнес-аккаунта в Instagram формирует вокруг бренда сообщество лояльных и заинтересованных в продукте пользователей. С профессиональным Instagram продвижением достигаются следующие цели:</p></Fade>
          </Grid>
        </Grid>
        <Grid container className={classes.GridList}>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            <Fade up>создание положительного имиджа</Fade>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            <Fade up>генерация целевого трафика на сайт</Fade>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            <Fade up>улучшение узнаваемости</Fade>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            <Fade up>привлечение внимания новой аудитории</Fade>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            <Fade up>получение нового канала обратной связи</Fade>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            <Fade up>формирование базы заинтересованных потенциальных клиентов</Fade>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            <Fade up>рост продаж</Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SmmInstagramServices