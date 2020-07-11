import React from "react";
import classes from "./PricesList.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {OrderButton} from "../../../components/UI/ButtonLink";
import tildaLogo from "../../../assets/img/tilda-logo.png";
import landingLogo from "../../../assets/img/landing-logo.png";
import visitkaLogo from "../../../assets/img/visitka-logo.png";
import portalLogo from "../../../assets/img/portal-logo.png";
import corporateLogo from "../../../assets/img/corporate-logo.png";
import storeLogo from "../../../assets/img/store-logo.png";

function PricesList() {
  return (
    <>
      <section className={classes.PricesList}>
        <Container fixed className={classes.Container}>
          <h2 className={classes.Headding}>Создание сайтов</h2>
          <Grid container className={classes.SiteCreatingPrices}>
            <Grid item container sm={4} xs={12} className={classes.CardBox}>
              <Grid item container className={classes.Card}>
                <Grid item container className={classes.CardHead}>
                  <Grid item sm={3}>
                    <img className={classes.PriceLogo} src={tildaLogo} alt=""/>
                  </Grid>
                  <Grid item sm={9} direction="column" className={classes.TitlePriceBox}>
                    <h3 className={classes.Title}>Сайт на Tilda</h3>
                    <p className={classes.Price}>от 100 $</p>
                  </Grid>
                </Grid>
                <Grid item container className={classes.CardBody} direction="column">
                  <h4 className={classes.CardBodyTitle}>Вы получите:</h4>
                  <p className={classes.CardBodyText}>- Уникальный и привлекательный дизайн страницы, который будет содержать must have блоки продающего лендинга</p>
                  <p className={classes.CardBodyText}>- Моментальное получение лидов с помощью правильной настройки Google рекламы</p>
                  <p className={classes.CardBodyText}>- Помогаем составить частное торговое предложение с акцентом на сильные стороны</p>
                </Grid>
                <Grid item container className={classes.CardFooter}>
                  <OrderButton title={'Заказать проект'}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container sm={4} xs={12} className={classes.CardBox}>
              <Grid item container className={classes.Card}>
                <Grid item container className={classes.CardHead}>
                  <Grid item sm={3}>
                    <img className={classes.PriceLogo} src={landingLogo} alt=""/>
                  </Grid>
                  <Grid item sm={9} direction="column" className={classes.TitlePriceBox}>
                    <h3 className={classes.Title}>Landing page</h3>
                    <p className={classes.Price}>от 500 $</p>
                  </Grid>
                </Grid>
                <Grid item container className={classes.CardBody} direction="column">
                  <h4 className={classes.CardBodyTitle}>Вы получите:</h4>
                  <p className={classes.CardBodyText}>- Уникальный и привлекательный дизайн страницы, который будет содержать must have блоки продающего лендинга</p>
                  <p className={classes.CardBodyText}>- Моментальное получение лидов с помощью правильной настройки Google рекламы</p>
                  <p className={classes.CardBodyText}>- Помогаем составить частное торговое предложение с акцентом на сильные стороны</p>
                </Grid>
                <Grid item container className={classes.CardFooter}>
                  <OrderButton title={'Заказать проект'} className={classes.CardButton} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item container sm={4} xs={12} className={classes.CardBox}>
              <Grid item container className={classes.Card}>
                <Grid item container className={classes.CardHead}>
                  <Grid item sm={3}>
                    <img className={classes.PriceLogo} src={visitkaLogo} alt=""/>
                  </Grid>
                  <Grid item sm={9} direction="column" className={classes.TitlePriceBox}>
                    <h3 className={classes.Title}>Cайт-визитка</h3>
                    <p className={classes.Price}>от 500 $</p>
                  </Grid>
                </Grid>
                <Grid item container className={classes.CardBody} direction="column">
                  <h4 className={classes.CardBodyTitle}>Вы получите:</h4>
                  <p className={classes.CardBodyText}>- Уникальный и привлекательный дизайн страницы, который будет содержать must have блоки продающего лендинга</p>
                  <p className={classes.CardBodyText}>- Моментальное получение лидов с помощью правильной настройки Google рекламы</p>
                  <p className={classes.CardBodyText}>- Помогаем составить частное торговое предложение с акцентом на сильные стороны</p>
                </Grid>
                <Grid item container className={classes.CardFooter}>
                  <OrderButton title={'Заказать проект'}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container sm={4} xs={12} className={classes.CardBox}>
              <Grid item container className={classes.Card}>
                <Grid item container className={classes.CardHead}>
                  <Grid item sm={3}>
                    <img className={classes.PriceLogo} src={portalLogo} alt=""/>
                  </Grid>
                  <Grid item sm={9} direction="column" className={classes.TitlePriceBox}>
                    <h3 className={classes.Title}>Портал</h3>
                    <p className={classes.Price}>от 600 $</p>
                  </Grid>
                </Grid>
                <Grid item container className={classes.CardBody} direction="column">
                  <h4 className={classes.CardBodyTitle}>Вы получите:</h4>
                  <p className={classes.CardBodyText}>- Уникальный и привлекательный дизайн страницы, который будет содержать must have блоки продающего лендинга</p>
                  <p className={classes.CardBodyText}>- Моментальное получение лидов с помощью правильной настройки Google рекламы</p>
                  <p className={classes.CardBodyText}>- Помогаем составить частное торговое предложение с акцентом на сильные стороны</p>
                </Grid>
                <Grid item container className={classes.CardFooter}>
                  <OrderButton title={'Заказать проект'}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container sm={4} xs={12} className={classes.CardBox}>
              <Grid item container className={classes.Card}>
                <Grid item container className={classes.CardHead}>
                  <Grid item sm={3}>
                    <img className={classes.PriceLogo} src={corporateLogo} alt=""/>
                  </Grid>
                  <Grid item sm={9} direction="column" className={classes.TitlePriceBox}>
                    <h3 className={classes.Title}>Корпоративный сайт</h3>
                    <p className={classes.Price}>от 600 $</p>
                  </Grid>
                </Grid>
                <Grid item container className={classes.CardBody} direction="column">
                  <h4 className={classes.CardBodyTitle}>Вы получите:</h4>
                  <p className={classes.CardBodyText}>- Уникальный и привлекательный дизайн страницы, который будет содержать must have блоки продающего лендинга</p>
                  <p className={classes.CardBodyText}>- Моментальное получение лидов с помощью правильной настройки Google рекламы</p>
                  <p className={classes.CardBodyText}>- Помогаем составить частное торговое предложение с акцентом на сильные стороны</p>
                </Grid>
                <Grid item container className={classes.CardFooter}>
                  <OrderButton title={'Заказать проект'}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container sm={4} xs={12} className={classes.CardBox}>
              <Grid item container className={classes.Card}>
                <Grid item container className={classes.CardHead}>
                  <Grid item sm={3}>
                    <img className={classes.PriceLogo} src={storeLogo} alt=""/>
                  </Grid>
                  <Grid item sm={9} direction="column" className={classes.TitlePriceBox}>
                    <h3 className={classes.Title}>Интернет-магазин</h3>
                    <p className={classes.Price}>от 1500 $</p>
                  </Grid>
                </Grid>
                <Grid item container className={classes.CardBody} direction="column">
                  <h4 className={classes.CardBodyTitle}>Вы получите:</h4>
                  <p className={classes.CardBodyText}>- Уникальный и привлекательный дизайн страницы, который будет содержать must have блоки продающего лендинга</p>
                  <p className={classes.CardBodyText}>- Моментальное получение лидов с помощью правильной настройки Google рекламы</p>
                  <p className={classes.CardBodyText}>- Помогаем составить частное торговое предложение с акцентом на сильные стороны</p>
                </Grid>
                <Grid item container className={classes.CardFooter}>
                  <OrderButton title={'Заказать проект'}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <h2 className={classes.Headding}>SEO</h2>
          <Grid container className={classes.SeoPrices}>
            <Grid item container sm={4} xs={12} className={classes.CardBox}>
              <Grid item container className={classes.Card}>
                <Grid item container className={classes.CardHead}>
                  <Grid item sm={3}>
                    <img className={classes.PriceLogo} src={tildaLogo} alt=""/>
                  </Grid>
                  <Grid item sm={9} direction="column" className={classes.TitlePriceBox}>
                    <h3 className={classes.Title}>SEO</h3>
                    <p className={classes.Price}>от 600 $</p>
                  </Grid>
                </Grid>
                <Grid item container className={classes.CardBody} direction="column">
                  <h4 className={classes.CardBodyTitle}>Вы получите:</h4>
                  <p className={classes.CardBodyText}>- Уникальный и привлекательный дизайн страницы, который будет содержать must have блоки продающего лендинга</p>
                  <p className={classes.CardBodyText}>- Моментальное получение лидов с помощью правильной настройки Google рекламы</p>
                  <p className={classes.CardBodyText}>- Помогаем составить частное торговое предложение с акцентом на сильные стороны</p>
                </Grid>
                <Grid item container className={classes.CardFooter}>
                  <OrderButton title={'Заказать проект'}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container sm={4} xs={12} className={classes.CardBox}>
              <Grid item container className={classes.Card}>
                <Grid item container className={classes.CardHead}>
                  <Grid item sm={3}>
                    <img className={classes.PriceLogo} src={landingLogo} alt=""/>
                  </Grid>
                  <Grid item sm={9} direction="column" className={classes.TitlePriceBox}>
                    <h3 className={classes.Title}>SMM</h3>
                    <p className={classes.Price}>от 1500 $</p>
                  </Grid>
                </Grid>
                <Grid item container className={classes.CardBody} direction="column">
                  <h4 className={classes.CardBodyTitle}>Вы получите:</h4>
                  <p className={classes.CardBodyText}>- Уникальный и привлекательный дизайн страницы, который будет содержать must have блоки продающего лендинга</p>
                  <p className={classes.CardBodyText}>- Моментальное получение лидов с помощью правильной настройки Google рекламы</p>
                  <p className={classes.CardBodyText}>- Помогаем составить частное торговое предложение с акцентом на сильные стороны</p>
                </Grid>
                <Grid item container className={classes.CardFooter}>
                  <OrderButton title={'Заказать проект'} className={classes.CardButton} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.WhatYouNotGet}>

      </section>
    </>
  )
}

export default PricesList