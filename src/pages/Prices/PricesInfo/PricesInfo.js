import React from "react";
import classes from "./PricesInfo.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function PricesInfo() {
  return (
    <section className={classes.PricesInfo}>
      <Container fixed className={classes.Container}>
        <Grid container className={classes.HeaddingBlock}>
          <Grid item sm={7} xs={12}>
            <h2 className={classes.Headding}>Чего вы не получете?</h2>
          </Grid>
        </Grid>
        <Grid item container sm={12} xs={12} className={classes.PricesInfoList}>
          <Grid item sm={4} xs={12}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Необоснованное повышение цены</h3>
              <p className={classes.Text}>Стоимость работ, их объем и результат — все это закрепляется в договоре. Мы никогда не навязываем услуги, в которых нет необходимости.</p>
            </div>
          </Grid>
          <Grid item sm={4} xs={12}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Отсутствие результата</h3>
              <p className={classes.Text}>Глубокое понимание отрасли и большой практический опыт — это наша гарантия прогнозируемого и качественного результата.</p>
            </div>
          </Grid>
          <Grid item sm={4} xs={12}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Срыв сроков</h3>
              <p className={classes.Text}>Мы всегда пунктуальны и никогда не берем в работу проекты, с которыми можем не справиться вовремя.</p>
            </div>
          </Grid>
        </Grid>
        <Grid container className={classes.PromoBlock}>
          <Grid item container sm={8} xs={12} className={classes.PromoBox}>
            <p className={classes.PromoText}>Для наших клиентов сделанный нами сайт или фирменный стиль – не статья расхода, а статья дохода</p>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default PricesInfo