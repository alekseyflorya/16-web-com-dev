import React, {useState} from "react";
import classes from "./PricesList.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {OrderButton} from "../../../components/UI/ButtonLink";
import tildaLogo from "../../../assets/img/tilda-logo.png";
import landingLogo from "../../../assets/img/landing-logo.png";
import visitkaLogo from "../../../assets/img/visitka-logo.png";
import corporateLogo from "../../../assets/img/corporate-logo.png";
import storeLogo from "../../../assets/img/store-logo.png";
import CallBack from "../../../components/Callback";

function PricesList() {
  const [callBackIsOpen, setCallBackIsOpen] = useState(false)

  const callBackSetOpen = () => setCallBackIsOpen(!callBackIsOpen)

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
                  <p className={classes.CardBodyText}>- Уникальный и привлекательный дизайн;</p>
                  <p className={classes.CardBodyText}>- Комплекс продающих элементов (CTA (call to  action), формы обратной связи, и другие элементы для быстрого завершения сделки.);</p>
                  <p className={classes.CardBodyText}>- Подключенные и настроенные системы аналитики;</p>
                  <p className={classes.CardBodyText}>- Готовый инструмент для лидогенерации;</p>
                  <p className={classes.CardBodyText}>- Адаптированный под мобильные устройства сайт;</p>
                </Grid>
                <Grid item container className={classes.CardFooter}>
                  <p className={classes.CardFooterText}>Цена на разработку сайта на Tilda варьируется в зависимости от сложности дизайна, пакета функциональных элементов и анимации.</p>
                  <OrderButton title={'Заказать проект'} onClick={callBackSetOpen} />
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
                  <p className={classes.CardBodyText}>- Уникальный и привлекательный дизайн;</p>
                  <p className={classes.CardBodyText}>- Комплекс продающих элементов (CTA (call to  action), формы обратной связи, и другие элементы для быстрого завершения сделки.);</p>
                  <p className={classes.CardBodyText}>- Подключенные и настроенные системы аналитики;</p>
                  <p className={classes.CardBodyText}>- Готовый инструмент для лидогенерации;</p>
                  <p className={classes.CardBodyText}>- Адаптированный под мобильные устройства сайт;</p>
                </Grid>
                <Grid item container className={classes.CardFooter}>
                  <p className={classes.CardFooterText}>Цена на разработку лендинг пейдж варьируется в зависимости от сложности дизайна, пакета функциональных элементов и анимации.</p>
                  <OrderButton title={'Заказать проект'} className={classes.CardButton} onClick={callBackSetOpen} />
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
                  <p className={classes.CardBodyText}>- Привлечение клиентов через Интернет с минимальными вложениями;</p>
                  <p className={classes.CardBodyText}>- Сайт со структурой из 2—8 страниц;</p>
                  <p className={classes.CardBodyText}>- Оригинальный дизайн;</p>
                  <p className={classes.CardBodyText}>- Первичную поисковую оптимизацию;</p>
                  <p className={classes.CardBodyText}>- Подключенные системы аналитики;</p>
                  <p className={classes.CardBodyText}>- Подключенные и настроенные мессенджеры для общения с клиентами</p>
                </Grid>
                <Grid item container className={classes.CardFooter}>
                  <p className={classes.CardFooterText}>При создании сайта визитки окончательная цена работы формируется с учетом количества страниц и необходимого набора функциональных элементов.</p>
                  <OrderButton title={'Заказать проект'} onClick={callBackSetOpen}/>
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
                    <p className={classes.Price}>от 300 $</p>
                  </Grid>
                </Grid>
                <Grid item container className={classes.CardBody} direction="column">
                  <h4 className={classes.CardBodyTitle}>Вы получите:</h4>
                  <p className={classes.CardBodyText}>- Продающий сайт с интуитивным интерфейсом;</p>
                  <p className={classes.CardBodyText}>- Удобный каталог и структуру;</p>
                  <p className={classes.CardBodyText}>- Первичную поисковую оптимизацию;</p>
                  <p className={classes.CardBodyText}>- Интегрированные внешние сервисы (1С, TecDoc и др.);</p>
                  <p className={classes.CardBodyText}>- Мобильную адаптацию.</p>
                </Grid>
                <Grid item container className={classes.CardFooter}>
                  <p className={classes.CardFooterText}>На создание корпоративного сайта цена складывается с учетом сложности структуры, пакета функциональных элементов и дизайна.</p>
                  <OrderButton title={'Заказать проект'} onClick={callBackSetOpen}/>
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
                    <p className={classes.Price}>от 1000 $</p>
                  </Grid>
                </Grid>
                <Grid item container className={classes.CardBody} direction="column">
                  <h4 className={classes.CardBodyTitle}>Вы получите:</h4>
                  <p className={classes.CardBodyText}>- Продающий сайт с интуитивным интерфейсом;</p>
                  <p className={classes.CardBodyText}>- Удобный каталог и структуру;</p>
                  <p className={classes.CardBodyText}>- Первичную поисковую оптимизацию;</p>
                  <p className={classes.CardBodyText}>- Интегрированные внешние сервисы (1С, TecDoc и др.);</p>
                  <p className={classes.CardBodyText}>- Мобильную адаптацию.</p>
                </Grid>
                <Grid item container className={classes.CardFooter}>
                  <p className={classes.CardFooterText}>На создание интернет-магазинов цена складывается с учетом сложности структуры, пакета функциональных элементов и дизайна.</p>
                  <OrderButton title={'Заказать проект'} onClick={callBackSetOpen}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <h2 className={classes.Headding}>Интернет-маркетинг</h2>
          <Grid container className={classes.SeoPrices}>
            <Grid item container sm={4} xs={12} className={classes.CardBox}>
              <Grid item container className={classes.Card}>
                <Grid item container className={classes.CardHead}>
                  <Grid item sm={3}>
                    <img className={classes.PriceLogo} src={tildaLogo} alt=""/>
                  </Grid>
                  <Grid item sm={9} direction="column" className={classes.TitlePriceBox}>
                    <h3 className={classes.Title}>SEO</h3>
                    <p className={classes.Price}>от 3000 грн.</p>
                  </Grid>
                </Grid>
                <Grid item container className={classes.CardBody} direction="column">
                  <h4 className={classes.CardBodyTitle}>Вы получите:</h4>
                  <p className={classes.CardBodyText}>- Разработку семантического ядра</p>
                  <p className={classes.CardBodyText}>- Техническую оптимизацию</p>
                  <p className={classes.CardBodyText}>- Проработку юзабилити</p>
                  <p className={classes.CardBodyText}>- Создание и публикацию контента</p>
                  <p className={classes.CardBodyText}>- Формирование внешнего ссылочного профиля</p>
                </Grid>
                <Grid item container className={classes.CardFooter}>
                  <p className={classes.CardFooterText}>На поисковое продвижение сайта цена может варьироваться в зависимости от уровня конкуренции и текущего состояния веб-ресурса.</p>
                  <OrderButton title={'Заказать проект'} onClick={callBackSetOpen}/>
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
                    <h3 className={classes.Title}>PPC</h3>
                    <p className={classes.Price}>от 3000 грн.</p>
                  </Grid>
                </Grid>
                <Grid item container className={classes.CardBody} direction="column">
                  <h4 className={classes.CardBodyTitle}>Вы получите:</h4>
                  <p className={classes.CardBodyText}>- Анализ ниши;</p>
                  <p className={classes.CardBodyText}>- Разработку стратегии;</p>
                  <p className={classes.CardBodyText}>- Подбор ключевых слов;</p>
                  <p className={classes.CardBodyText}>- Создание объявлений и креативов;</p>
                  <p className={classes.CardBodyText}>- Ремаркетинг;</p>
                  <p className={classes.CardBodyText}>- Анализ результатов;</p>
                  <p className={classes.CardBodyText}>- Постоянную оптимизацию рекламного кабинета.</p>
                </Grid>
                <Grid item container className={classes.CardFooter}>
                  <p className={classes.CardFooterText}>На контекстную рекламу цена зависит от активности конкурентов и объема ключевых слов.</p>
                  <OrderButton title={'Заказать проект'} className={classes.CardButton} onClick={callBackSetOpen} />
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
                    <p className={classes.Price}>от 3000 грн.</p>
                  </Grid>
                </Grid>
                <Grid item container className={classes.CardBody} direction="column">
                  <h4 className={classes.CardBodyTitle}>Вы получите:</h4>
                  <p className={classes.CardBodyText}>- Создание и оптимизацию сообществ или персональных аккаунтов;</p>
                  <p className={classes.CardBodyText}>- Разработку и публикацию контента;</p>
                  <p className={classes.CardBodyText}>- Широкий органический охват;</p>
                  <p className={classes.CardBodyText}>- Настройку таргетинга на целевую аудиторию;</p>
                  <p className={classes.CardBodyText}>- Аналитику результатов.</p>
                </Grid>
                <Grid item container className={classes.CardFooter}>
                  <p className={classes.CardFooterText}>На SMM продвижение цены варьируются с учетом целей по охвату и конкуренции в нише.</p>
                  <OrderButton title={'Заказать проект'} className={classes.CardButton} onClick={callBackSetOpen} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <CallBack callBackIsOpen={callBackIsOpen} callBackSetOpen={callBackSetOpen} />
        </Container>
      </section>
    </>
  )
}

export default PricesList