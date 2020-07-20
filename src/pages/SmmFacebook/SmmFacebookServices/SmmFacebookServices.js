import React from "react";
import classes from "./SmmFacebookServices.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import whyNeedFacebookSmmImg from "../../../assets/img/why-need-facebook-smm.jpg"

function SmmFacebookServices() {
  return (
    <section className={classes.SmmServices}>
      <Container fixed className={classes.Container}>
        <Grid container className={classes.WhyNeedFacebookSmm}>
          <Grid item container sm={6} xs={12}>
            <h2 className={classes.Headding}>Раскрутка и продвижение через Фейсбук: кому и зачем это нужно?</h2>
            <p className={classes.Text}>Благодаря большому количеству потенциальной целевой аудитории, продвижение товара в Фейсбуке будет эффективнее, чем в любой другой социальной сети или через сайт компании. Напрямую взаимодействуя с клиентами, вы выстраиваете с ними доверительные отношения. Если у вашего бизнеса до сих пор еще нет аккаунта в Facebook, ежедневно вы пропускаете мимо себя огромный поток потенциальных клиентов. А конкуренты времени не теряют. Но и раскрутка должна быть разумной и четко спланированной. Поэтому лучше не заниматься этим самостоятельно и довериться тем, кто имеет в этом большой опыт.</p>
          </Grid>
          <Grid item container sm={6} xs={12}>
            <img className={classes.WhyNeedFacebookSmmImg} src={whyNeedFacebookSmmImg} alt=""/>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <h2 className={classes.Headding}>Почему мы: наши преимущества</h2>
          </Grid>
          <Grid item sm={5} xs={12}>
            <p className={classes.Text}>Заказать продвижение в Фейсбуке предлагает веб-студия 16.web.</p>
          </Grid>
        </Grid>
        <Grid item container sm={12} className={classes.Advantages}>
          <Grid item sm={4} xs={12}>
            <div className={classes.Item}>
              <p className={`${classes.Text} ${classes.Numbers}`}>Cоставят портрет ЦА</p>
            </div>
          </Grid>
          <Grid item sm={4} xs={12}>
            <div className={classes.Item}>
              <p className={`${classes.Text} ${classes.Numbers}`}>сформируют привлекательные рекламные объявления</p>
            </div>
          </Grid>
          <Grid item sm={4} xs={12}>
            <div className={classes.Item}>
              <p className={`${classes.Text} ${classes.Numbers}`}>создадут индивидуальную стратегию раскрутки в Фейсбуке</p>
            </div>
          </Grid>
          <Grid item sm={4} xs={12}>
            <div className={classes.Item}>
              <p className={`${classes.Text} ${classes.Numbers}`}>наполнят аккаунт интересным для аудитории контентом</p>
            </div>
          </Grid>
          <Grid item sm={4} xs={12}>
            <div className={classes.Item}>
              <p className={`${classes.Text} ${classes.Numbers}`}>комплексно подойдут к решению поставленной задачи</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SmmFacebookServices