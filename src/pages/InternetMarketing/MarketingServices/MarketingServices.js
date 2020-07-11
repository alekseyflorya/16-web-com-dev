import React from "react";
import classes from "./MarketingServices.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

function MarketingServices() {
  return (
    <section className={classes.MarketingServices}>
      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>Услуги по интернет-маркетингу</h2>
        <div className={classes.Cards}>
          <Grid container>
            <Grid item sm={4} xs={12} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/seo" className={classes.CardName}>SEO</Link>
                <p className={classes.CardText}>Используя поисковую оптимизацию для продвижения сайта, мы добиваемся его полного соответствия требованиям поисковым систем, что помогает ему всё чаще появляться в результатах запросов от потенциальных покупателей.</p>
              </div>
            </Grid>
            <Grid item sm={4} xs={12} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/ppc" className={classes.CardName}>PPC</Link>
                <p className={classes.CardText}>Наши услуги в области контекстной рекламы помогут быстро привлечь на ваш сайт большое количество заинтересованных покупателей. Основным преимуществом этого инструмента является то, что он работает именно с целевой аудиторией.</p>
              </div>
            </Grid>
            <Grid item sm={4} xs={12} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/smm" className={classes.CardName}>SMM</Link>
                <p className={classes.CardText}>Большинство людей используют для общения и получения информации социальные сети вроде Facebook или Telegram. Именно поэтому продвижение в соцсетях помогает очень быстро и эффективно сделать популярным бренд, товар или услугу.</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  )
}

export default MarketingServices