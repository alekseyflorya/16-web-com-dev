import React, {useState} from "react";
import classes from "./EmailMarketingFeatures.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {OrderButton} from "../../../components/UI/ButtonLink";
import CallBack from "../../../components/Callback";

function EmailMarketingFeatures() {
  const [callBackIsOpen, setCallBackIsOpen] = useState(false)

  const callBackSetOpen = () => setCallBackIsOpen(!callBackIsOpen)

  return (
    <section className={classes.EmailMarketingFeatures}>
      <Container fixed className={classes.Container}>
        <Grid container alignItems="center" className={classes.HeaddingBox}>
          <Grid item container sm={8} xs={12}>
            <h2 className={classes.Headding}>Чем полезна e-mail-рассылка для бизнеса и в чём её преимущества?</h2>
          </Grid>
          <Grid item container sm={4} xs={12}>
            <p className={classes.Text}>При правильных настройках e-mail-рассылка может стать весьма эффективным инструментом для увеличения продаж – её преимущества состоят в следующем:</p>
          </Grid>
        </Grid>
        <Grid container className={classes.GridList}>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            Возможность сегментировать и персонализировать клиентскую базу
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            Гибкое управление бюджетом, выделяемым на рекламу
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            Широкий охват целевой аудитории разных возрастов
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            Способность «пробудить» старых клиентов
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            Богатый набор интерактивных и дизайнерских инструментов
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.GridListItem}>
            Относительно невысокая стоимость адресной базы
          </Grid>
        </Grid>
        <Grid container alignItems="center" className={classes.ActionBox}>
          <Grid item container sm={7} xs={12}>
            <p className={classes.Text}>В силу перечисленных факторов продающие рассылки широко используются в качестве эффективного инструмента, способствующего продвижению бизнеса или конкретного продукта.</p>
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