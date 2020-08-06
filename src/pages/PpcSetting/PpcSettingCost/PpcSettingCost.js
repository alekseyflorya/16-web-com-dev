import React from "react";
import classes from "./PpcSettingCost.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import RemarketingOrderInfoImg from "../../../assets/img/ppcsetting-cost.jpg";
import Fade from 'react-reveal/Fade'

function PpcSettingCost() {
  return (
    <section className={classes.RemarketingOrderInfo}>
      <Container fixed className={classes.Container}>
        <Fade up><h2 className={classes.Headding}>Цена настройки контекстной рекламы</h2></Fade>
        <Grid container>
          <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
            <Fade up><img className={classes.RemarketingOrderInfoImg} src={RemarketingOrderInfoImg} alt=""/></Fade>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.RightColumn}>
            <Grid item>
              <Fade up>
              <p className={classes.Text}>Именно такие специалисты в 16.web. Вы нам — о своих услугах, положении дел, а мы вам — качественное предоставление услуг по контекстной рекламе, стоимость которых вас удивит.</p>
              <p className={classes.Text}>Платите только за результат: точную настройку, высокие позиции, целевую аудиторию, повышение процента продаж и новые открытия в вашем бизнесе. Мы предоставим весь комплекс услуг и сделаем так, чтобы прописанные результаты стали не только предметом нашего рабочего рутинного обсуждения, но и принесли свои плоды в самый короткий период!</p>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default PpcSettingCost