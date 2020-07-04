import React from "react";
import classes from "./SmmCoast.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import smmCoastImg from "../../../assets/img/smm-coast.jpg";

function SmmCoast() {
  return (
    <section className={classes.SmmCoast}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item container sm={7} className={classes.LeftColumn}>
            <h2 className={classes.Headding}>SMM-продвижение – принцип формирования стоимости услуг</h2>
            <p className={classes.Text}>Если вы планируете заказать SMM-продвижение в веб-студии 16.web, стоит разобраться, каким образом рассчитать бюджет. На услуги по SMM-продвижению цена формируется с учётом следующих факторов:</p>
            <Grid item container className={classes.GridList}>
              <Grid item container className={classes.GridListItem}>цели и задачи вашего проекта</Grid>
              <Grid item container className={classes.GridListItem}>масштабность рекламной кампании</Grid>
              <Grid item container className={classes.GridListItem}>сроки выхода на конкретный результат</Grid>
              <Grid item container className={classes.GridListItem}>количество конкурентов в вашей сфере деятельности</Grid>
              <Grid item container className={classes.GridListItem}>наличие действующих групп и страниц в соцсетях и т.п.</Grid>
            </Grid>
          </Grid>
          <Grid item container sm={5} className={classes.RightColumn}>
            <img src={smmCoastImg} alt=""/>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SmmCoast