import React from "react";
import classes from "./SmmInstagramServices.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function SmmInstagramServices() {
  return (
    <section className={classes.SmmInstagramServices}>
      <Container fixed className={classes.Container}>
        <Grid container className={classes.HeaddingBox}>
          <Grid item sm={8} xs={12}>
            <h2 className={classes.Headding}>Зачем компаниям Инстаграм продвижение</h2>
          </Grid>
          <Grid item sm={8} xs={12}>
            <p className={classes.Text}>Комплексное развитие бизнес-аккаунта в Instagram формирует вокруг бренда сообщество лояльных и заинтересованных в продукте пользователей. С профессиональным Instagram продвижением достигаются следующие цели:</p>
          </Grid>
        </Grid>
        <Grid container className={classes.GridList}>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            создание положительного имиджа
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            генерация целевого трафика на сайт
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            улучшение узнаваемости
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            привлечение внимания новой аудитории
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            получение нового канала обратной связи
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            формирование базы заинтересованных потенциальных клиентов
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            рост продаж
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SmmInstagramServices