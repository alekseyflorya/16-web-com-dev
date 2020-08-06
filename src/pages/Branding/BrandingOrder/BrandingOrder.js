import React, {useState} from "react";
import classes from "./BrandingOrder.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {OrderButton} from "../../../components/UI/ButtonLink";
import CallBack from "../../../components/Callback";
import {Hidden} from "@material-ui/core";
import Fade from 'react-reveal/Fade'

function BrandingOrder() {
  const [callBackIsOpen, setCallBackIsOpen] = useState(false)

  const callBackSetOpen = () => setCallBackIsOpen(!callBackIsOpen)

  return (
    <section className={classes.BrandingOrder}>
      <Container fixed>
        <Grid container>
          <Grid item container>
            <Grid item sm={7} xs={12}>
              <Fade up><h2 className={classes.Headding}>Разработка бренда – важное условие успеха вашего бизнеса</h2></Fade>
            </Grid>
            <Hidden only="xs">
              <Grid item container sm justify="flex-end">
                <OrderButton classNames={classes.BrandingOrderBtn} title={'Разработать бренд'} onClick={callBackSetOpen} />
              </Grid>
            </Hidden>
          </Grid>
          <Grid item container className={classes.TextBlock}>
            <Grid item container sm={6}>
              <Fade up><p className={classes.Text}>Грамотный брендинг помогает представить продукт потребителю, показав его выгодные стороны и подняв его ценность в глазах целевой аудитории. При этом ставка делается на такие факторы, как уникальность, узнаваемость, индивидуальность и чёткое дифференцирование по отношению к другим продуктам в данном сегменте рынка.</p></Fade>
            </Grid>
            <Grid item container sm={6}>
              <Fade up><p className={classes.Text}>С учётом особенностей товара или услуги, а также поставленных целей, в процессе брендирования специалисты веб-студии 16.web выяснят, кому может быть интересен предлагаемый продукт – это поможет определить нишу на рынке и сформировать стратегию продвижения.</p></Fade>
            </Grid>
            <Hidden smUp>
              <Grid item container xs={12} justify="center">
                <OrderButton classNames={classes.BrandingOrderBtn} title={'Заказать рекламу'} onClick={callBackSetOpen} />
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
        <CallBack callBackIsOpen={callBackIsOpen} callBackSetOpen={callBackSetOpen} />
      </Container>
    </section>
  )
}

export default BrandingOrder