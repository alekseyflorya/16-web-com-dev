import React, {useState} from "react";
import classes from "./EmailMarketingFeatures.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {OrderButton} from "../../../components/UI/ButtonLink";
import CallBack from "../../../components/Callback";
import Fade from 'react-reveal/Fade'

function EmailMarketingFeatures() {
  const [callBackIsOpen, setCallBackIsOpen] = useState(false)

  const callBackSetOpen = () => setCallBackIsOpen(!callBackIsOpen)

  return (
    <section className={classes.EmailMarketingFeatures}>
      <Container fixed className={classes.Container}>
        <Grid container alignItems="center" className={classes.HeaddingBox}>
          <Grid item container sm={8} xs={12}>
            <Fade up><h2 className={classes.Headding}>Чем полезна e-mail-рассылка для бизнеса и в чём её преимущества?</h2></Fade>
          </Grid>
          <Grid item container sm={4} xs={12}>
            <Fade up><p className={classes.Text}>При правильных настройках e-mail-рассылка может стать весьма эффективным инструментом для увеличения продаж – её преимущества состоят в следующем:</p></Fade>
          </Grid>
        </Grid>
        <Grid container className={classes.GridList}>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            <Fade up>Возможность сегментировать и персонализировать клиентскую базу</Fade>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            <Fade up>Гибкое управление бюджетом, выделяемым на рекламу</Fade>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            <Fade up>Широкий охват целевой аудитории разных возрастов</Fade>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            <Fade up>Способность «пробудить» старых клиентов</Fade>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            <Fade up>Богатый набор интерактивных и дизайнерских инструментов</Fade>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            <Fade up>Относительно невысокая стоимость адресной базы</Fade>
          </Grid>
        </Grid>
        <Grid container alignItems="center" className={classes.ActionBox}>
          <Grid item container sm={7} xs={12}>
            <Fade up><p className={classes.Text}>В силу перечисленных факторов продающие рассылки широко используются в качестве эффективного инструмента, способствующего продвижению бизнеса или конкретного продукта.</p></Fade>
          </Grid>
          <Grid item container sm={5} xs={12} justify="flex-end">
            <OrderButton classNames={classes.ActionBtn} title={'Заказать email-рассылку'} onClick={callBackSetOpen} />
          </Grid>
        </Grid>
        <CallBack callBackIsOpen={callBackIsOpen} callBackSetOpen={callBackSetOpen} />
      </Container>
    </section>
  )
}

export default EmailMarketingFeatures