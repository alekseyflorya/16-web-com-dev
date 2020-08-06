import React from "react";
import classes from "./SmmAdsInfo.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import InfoFacebookSmmImg from "../../../assets/img/smm-ads-info.jpg";
import Fade from 'react-reveal/Fade'

function SmmAdsInfo() {
  return (
    <section className={classes.InfoFacebookSmm}>
      <Container fixed className={classes.TikTokSmm}>
        <Grid container item sm={6}>
          <Fade up><h2 className={classes.Headding}>Реклама в соцсетях – путь к успешному бизнесу</h2></Fade>
        </Grid>
        <Grid container>
          <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
            <Fade up><p className={classes.Text}>Давайте попробуем посмотреть на социальные сети исключительно с точки зрения маркетолога. С этой позиции, их использование можно сравнить с глубоким анкетированием, причем добровольным.</p></Fade>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.RightColumn}>
            <Fade up><p className={classes.Text}>На таргетированную рекламу цена зависит от целевой аудитории, конкуренции и других факторов. Но клик по ней обычно стоит дешевле, чем в контекстных системах.</p></Fade>
          </Grid>
        </Grid>
      </Container>

      <Container fixed className={classes.TweeterSmm}>
        <Grid container item sm={7}>
          <Fade up><h2 className={classes.Headding}>Настройка ретаргетинга для лучшего результата</h2></Fade>
        </Grid>
        <Grid container>
          <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
            <Fade up><img className={classes.InfoFacebookSmmImg} src={InfoFacebookSmmImg} alt=""/></Fade>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.RightColumn}>
            <Fade up>
            <p className={classes.Text}>Ретаргетинг — это технология, позволяющая повторно контактировать с аудиторией, которая имела опыт взаимодействия с продуктом. К примеру, можно настроить ретаргетинг так, чтобы реклама демонстрировалась людям, которые не завершили оформление покупки в интернет-магазине.</p>
            <p className={classes.Text}>То есть технология дает возможность не терять контакт с заинтересованными пользователями, в привлечение которых уже были вложены деньги.</p>
            </Fade>
          </Grid>
        </Grid>
      </Container>
      <Container fixed className={classes.SmmServices}>
        <Grid container className={classes.WhyNeedFacebookSmm}>
          <Grid item sm={6} xs={12}>
            <Fade up><h2 className={classes.Headding}>Как работает таргетированная реклама в социальных сетях</h2></Fade>
          </Grid>
          <Grid item sm={5} xs={12}>
            <Fade up><p className={classes.Text}>Социальные сети подготовили все, чтобы мы могли запустить таргетированную рекламу с нуля. Они собирают и систематизируют информацию о пользователях, их настроениях, интересах и вкусах. Таргетированную рекламу стоит заказать только из-за этих преимуществ:</p></Fade>
          </Grid>
        </Grid>
        <Grid item container sm={12} className={classes.Advantages}>
          <Grid item sm={4} xs={12}>
            <Fade up>
            <div className={classes.Item}>
              <p className={`${classes.Text} ${classes.Numbers}`}>Максимально точное определение параметров целевой аудитори</p>
            </div>
            </Fade>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Fade up>
            <div className={classes.Item}>
              <p className={`${classes.Text} ${classes.Numbers}`}>Органичное позиционирование, которое не раздражает</p>
            </div>
            </Fade>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Fade up>
            <div className={classes.Item}>
              <p className={`${classes.Text} ${classes.Numbers}`}>Есть возможность персонализации предложений</p>
            </div>
            </Fade>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Fade up>
            <div className={classes.Item}>
              <p className={`${classes.Text} ${classes.Numbers}`}>Точная и обширная аналитика в режиме реального времени</p>
            </div>
            </Fade>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Fade up>
            <div className={classes.Item}>
              <p className={`${classes.Text} ${classes.Numbers}`}>Можно собирать лиды без собственного сайта</p>
            </div>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SmmAdsInfo