import React, {useState} from "react";
import classes from "./CompetentDesign.module.scss"
import Container from "@material-ui/core/Container";
import CompetentDesignImg from "../../../assets/img/competentdesign.jpg"
import Grid from "@material-ui/core/Grid";
import {OrderButton} from "../../../components/UI/ButtonLink";
import CallBack from "../../../components/Callback";
import Fade from 'react-reveal/Fade'

function CompetentDesign() {
  const [callBackIsOpen, setCallBackIsOpen] = useState(false)

  const callBackSetOpen = () => setCallBackIsOpen(!callBackIsOpen)

  return (
    <section className={classes.CompetentDesign}>
      <Container fixed className={classes.Container}>
        <Fade up><h2 className={classes.Headding}>Грамотный веб-дизайн для вашего сайта</h2></Fade>
        <Grid container sm={12} className={classes.CompetentDesignBox}>
          <Grid item container sm={6} xs={12}>
            <Fade up><img className={classes.Image} src={CompetentDesignImg} alt="CompetentDesignImg"/></Fade>
          </Grid>
          <Grid item container sm={6} xs={12} alignItems="center">
            <Grid item>
              <Fade up>
              <p className={classes.Text}>Веб-студия 16.web предлагает свои услуги по разработке web-дизайна – у нас работает команда креативных квалифицированных специалистов, умеющих решать задачи любой сложности. </p>
              <p className={classes.Text}>Для вас это хорошая возможность сделать свою онлайн-платформу максимально привлекательной и удобной для потенциальных покупателей, решив таким образом ряд важных задач по продвижению бизнеса в интернете.</p>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          <Grid item sm={6} xs={12}>
            <Fade up><p className={classes.ActionText}>Если вам нужны услуги профессионалов по разработке веб-дизайна, давайте обсудим возможные варианты сотрудничества!</p></Fade>
          </Grid>
          <Grid item container sm={6} xs={12} justify="flex-end">
            <OrderButton classNames={classes.CompetentDesignBtn} title={'Обсудить проект'} onClick={callBackSetOpen} />
          </Grid>
        </Grid>
        <CallBack callBackIsOpen={callBackIsOpen} callBackSetOpen={callBackSetOpen} />
      </Container>
    </section>
  )
}

export default CompetentDesign