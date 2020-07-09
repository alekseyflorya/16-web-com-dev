import React from "react";
import classes from "./BrandingOrder.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {OrderButton} from "../../../components/UI/ButtonLink";

function BrandingOrder() {
  return (
    <section className={classes.BrandingOrder}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item container sm={7}>
            <h2 className={classes.Headding}>Разработка бренда – важное условие успеха вашего бизнеса</h2>
          </Grid>
          <Grid item container sm={5} justify="flex-end">
            <OrderButton title={'Разработать бренд'} />
          </Grid>
          <Grid item container sm={6}>
            <p className={classes.Text}>Грамотный брендинг помогает представить продукт потребителю, показав его выгодные стороны и подняв его ценность в глазах целевой аудитории. При этом ставка делается на такие факторы, как уникальность, узнаваемость, индивидуальность и чёткое дифференцирование по отношению к другим продуктам в данном сегменте рынка.</p>
          </Grid>
          <Grid item container sm={6}>
            <p className={classes.Text}>С учётом особенностей товара или услуги, а также поставленных целей, в процессе брендирования специалисты веб-студии 16.web выяснят, кому может быть интересен предлагаемый продукт – это поможет определить нишу на рынке и сформировать стратегию продвижения.</p>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default BrandingOrder