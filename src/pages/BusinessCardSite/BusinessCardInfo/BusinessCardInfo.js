import React from "react";
import classes from "./BusinessCardInfo.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import BusinessCardCoastImg from "../../../assets/img/business-card-coast.jpg";

function BusinessCardInfo() {
  return (
    <section className={classes.BusinessCardInfo}>
      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>Онлайн-площадка такого типа содержит следующую информацию:</h2>
        <Grid container className={classes.InfoBox}>
          <Grid item container sm={6} className={classes.LeftColumn}>
            <Grid item container sm={12} className={classes.GridList}>
              <Grid item sm={12} className={classes.GridListItem}>полезные сведения для покупателей – каталог, цены и т.п.</Grid>
              <Grid item sm={12} className={classes.GridListItem}>контактную информацию – адреса, телефоны, е-мейлы, мессенджеры</Grid>
            </Grid>
            <p className={classes.Text}>Веб-студия 16.web часто разрабатывает сайты-визитки для индивидуальных предпринимателей, например, адвокатов, мастеров по ремонту, салонов красоты, детских центров.</p>
          </Grid>
          <Grid item container sm={6} className={classes.RightColumn}>
            <Grid item container sm={12} className={classes.GridList}>
              <Grid item sm={12} className={classes.GridListItem}>количество времени, потраченного специалистами на работу над проектом</Grid>
              <Grid item sm={12} className={classes.GridListItem}>уровень сложности дизайна</Grid>
            </Grid>
            <p className={classes.Text}>У клиентов, заказывающих создание сайта-одностраничника, одним из первых возникает вопрос о стоимости услуги. Веб-студия 16.web при разработке лендинг-пейджа цену формирует, исходя из следующих критериев:</p>
          </Grid>
        </Grid>

        <Grid container className={classes.BusinessCardFunctionsBox}>
          <Grid item container sm={6}>
            <h2 className={classes.Headding}>Какие функции выполняют сайты-визитки</h2>
          </Grid>
          <Grid item container sm={6}>
            <p className={classes.Text}>Если вы хотели бы продвигать свой бизнес в интернете, но создание полноценного корпоративного сайта нецелесообразно либо невыгодно, стоит подумать о том, чтобы заказать сайт-визитку. Это небольшой онлайн-ресурс, представляющий основную информацию о вашем бренде и предлагаемом им продукте.</p>
          </Grid>
        </Grid>
      </Container>

      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>Какова стоимость сайта-визитки?</h2>
        <Grid container className={classes.BusinessCardCoastBox}>
          <Grid item container sm={6} className={classes.LeftColumn}>
            <img src={BusinessCardCoastImg} alt=""/>
          </Grid>
          <Grid item container sm={6} className={classes.RightColumn}>
            <p className={classes.Text}>Тем, кто заказывает у веб-студии 16.web создание сайта-визитки с нуля, важно знать, от каких факторов будет зависеть стоимость такой услуги. Цена в таких случаях формируется на основании следующих факторов:</p>
            <Grid item container sm={9} className={classes.GridList}>
              <Grid item container sm={12} className={classes.GridListItem}>количество потраченного на работу времени</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>сложность дизайна</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>количество и тип контента</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>уникальность оформления</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>адаптивность вёрстки</Grid>
              <Grid item container sm={12} className={classes.GridListItem}>наличие на сайте интерактивных элементов</Grid>
            </Grid>
            <p className={classes.Text}>Закажите у нас разработку сайта-визитки под ключ – это позволит вам эффективно представить свой бизнес целевой аудитории и увеличить количество клиентов, не прибегая к чрезмерным финансовым тратам.</p>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default BusinessCardInfo