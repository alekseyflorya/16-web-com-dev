import React from "react";
import classes from "./EmailMarketingCost.module.scss";
import Grid from "@material-ui/core/Grid";
import EmailMarketingCostImg from "../../../assets/img/email-marketing-cost.jpg";
import Container from "@material-ui/core/Container";
import Fade from 'react-reveal/Fade'

function EmailMarketingCost() {
  return (
    <section className={classes.EmailMarketingCost}>
      <Container fixed className={classes.Container}>
        <Fade up><h2 className={classes.Headding}>Инвестиции в e-mail-маркетинг – как формируется стоимость услуг</h2></Fade>
        <Grid container className={classes.EmailMarketingCostBox}>
          <Grid item container sm={6} className={classes.LeftColumn}>
            <Fade up><img className={classes.EmailMarketingCostImg} src={EmailMarketingCostImg} alt=""/></Fade>
          </Grid>
          <Grid item container sm={6} className={classes.RightColumn}>
            <Fade up>
            <p className={classes.Text}>На услуги e-mail-маркетинга цена формируется в зависимости от того, насколько высоки требования к проекту – при этом учитываются следующие факторы:</p>
            <Grid item container sm={9} className={classes.GridList}>
              <Grid item container sm={12} className={classes.GridListItem}>
                размер адресной базы и количество писем, отправляемых на протяжении определённого периода
              </Grid>
              <Grid item container sm={12} className={classes.GridListItem}>
                уровень автоматизации
              </Grid>
              <Grid item container sm={12} className={classes.GridListItem}>
                использование аналитики для проверки эффективности рассылок
              </Grid>
              <Grid item container sm={12} className={classes.GridListItem}>
                тестирование рассылок перед отправкой и т.п.
              </Grid>
            </Grid>
            <p className={classes.Text}>Заказывайте услуги по e-mail-маркетингу в веб-студии 16.web – это поможет получить желаемый результат, не выходя за рамки своих финансовых возможностей</p>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default EmailMarketingCost