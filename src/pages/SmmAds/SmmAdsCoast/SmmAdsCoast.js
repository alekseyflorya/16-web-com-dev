import React from "react";
import classes from "./SmmAdsCoast.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import smmCoastImg from "../../../assets/img/smm-ads-cost.jpg";
import {OrderButton} from "../../../components/UI/ButtonLink";
import {Hidden} from "@material-ui/core";
import Fade from 'react-reveal/Fade'

function SmmAdsCoast() {
  return (
    <>
      <section className={classes.SmmCoast}>
        <Container fixed className={classes.Container}>
          <Grid container className={classes.ServicesCost}>
            <Grid item container sm={12} xs={12} className={classes.LeftColumn}>
              <Grid item container sm={7} xs={12}>
                <Fade up><h2 className={classes.Headding}>Преимущества динамического ретаргетинга</h2></Fade>
              </Grid>
              <Grid item container sm={5} xs={12}>
                <Fade up><p className={classes.Text}>Хотите получать дополнительную прибыль, а не разочароваться в перспективных маркетинговых инструментах? Тогда закажите ведение рекламы в социальных сетях и настройку ретаргетинга в веб-студии 16.web.</p></Fade>
              </Grid>
            </Grid>
            <Grid item container className={classes.GridList}>
              <Grid item container sm={4} className={classes.GridListItem}>
                <Fade up>Увеличивает конверсию многоэтапных воронок продаж</Fade>
              </Grid>
              <Grid item container sm={4} className={classes.GridListItem}>
                <Fade up>Контактирует с «горячими» пользователями</Fade>
              </Grid>
              <Grid item container sm={4} className={classes.GridListItem}>
                <Fade up>Идеально подходит для сопутствующих продаж</Fade>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className={classes.PromoBlock}>
            <Grid item container sm={8} xs={12} className={classes.PromoBox}>
              <Fade up><p className={classes.PromoText}>Заказать ретаргетинг стоит всем компаниям, которые заинтересованы в достижении максимальной эффективности от присутствия в социальных сетях.</p></Fade>
            </Grid>
          </Grid>
          <Grid container className={classes.SmmPrincipeCoast}>
            <Grid item container sm={7} className={classes.LeftColumn}>
              <Fade up><h2 className={classes.Headding}>SMM-продвижение – принцип формирования стоимости услуг</h2></Fade>
              <Hidden smUp>
                <Fade up><img className={classes.SmmCoastImg} src={smmCoastImg} alt=""/></Fade>
              </Hidden>
              <Fade up><p className={classes.Text}>Если вы планируете заказать SMM-продвижение в веб-студии 16.web, стоит разобраться, каким образом рассчитать бюджет. На услуги по SMM-продвижению цена формируется с учётом следующих факторов:</p></Fade>
              <Grid item container className={classes.GridList}>
                <Grid item container className={classes.GridListItem}>
                  <Fade up>цели и задачи вашего проекта</Fade>
                </Grid>
                <Grid item container className={classes.GridListItem}>
                  <Fade up>масштабность рекламной кампании</Fade>
                </Grid>
                <Grid item container className={classes.GridListItem}>
                  <Fade up>сроки выхода на конкретный результат</Fade>
                </Grid>
                <Grid item container className={classes.GridListItem}>
                  <Fade up>количество конкурентов в вашей сфере деятельности</Fade>
                </Grid>
                <Grid item container className={classes.GridListItem}>
                  <Fade up>наличие действующих групп и страниц в соцсетях и т.п.</Fade>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container sm={5} className={classes.RightColumn}>
              <Hidden only="xs">
                <Fade up><img src={smmCoastImg} alt=""/></Fade>
              </Hidden>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.SmmAction}>
        <Container fixed>
          <Grid container>
            <Grid item container>
              <Grid item sm>
                <Fade up><h2 className={classes.Headding}>Реклама в соцсетях – путь к успешному бизнесу</h2></Fade>
              </Grid>
              <Hidden only="xs">
                <Grid item container sm justify="flex-end">
                  <OrderButton title={'Заказать рекламу'}/>
                </Grid>
              </Hidden>
            </Grid>
            <Grid item container>
              <Grid item sm={6} xs={12}>
                <Fade up><p className={classes.Text}>В настоящее время львиная доля активности пользователей интернета приходится именно на социальные платформы, поэтому SMM-реклама является эффективным способом донести информацию о своём бренде до широкого круга заинтересованных потребителей.</p></Fade>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Fade up><p className={classes.Text}>Наша веб-студия готова предложить вам все имеющиеся возможности для того, чтобы сделать ваш бизнес высоко востребованным среди владельцев профилей в Фейсбук, Телеграм, Инстаграм и других соцсетей, обеспечив при этом существенное увеличение продаж и рост дохода.</p></Fade>
              </Grid>
              <Hidden smUp>
                <Grid item container xs={12} justify="center">
                  <OrderButton classNames={classes.SmmActionBtn} title={'Заказать рекламу'}/>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.ComplexSmm}>
        <Container fixed>
          <Grid container>
            <Grid item container>
              <Grid item sm>
                <Fade up><h2 className={classes.Headding}>Комплексное продвижение в социальных сетях</h2></Fade>
              </Grid>
              <Grid item sm>
                <Fade up><p className={classes.Text}>Веб-студия 16.web предлагает свою помощь в развитии вашего бизнеса посредством комплексного продвижения в соцсетях – наши специалисты подготовят и реализуют комплекс мер, благодаря которым вы сумеете привлечь внимание к своему бренду. В рамках SMM-продвижения в социальных сетях мы осуществим следующее:</p></Fade>
              </Grid>
            </Grid>
            <Grid item container className={classes.GridList}>
              <Grid item container sm={6} className={classes.GridListItem}>
                <Fade up>создадим страницы на социальных платформах, которые будут наиболее перспективными для вас</Fade>
              </Grid>
              <Grid item container sm={6} className={classes.GridListItem}>
                <Fade up>разработаем для аккаунтов фирменный стиль и наполним их контентом</Fade>
              </Grid>
              <Grid item container sm={6} className={classes.GridListItem}>
                <Fade up>разработаем стратегию раскрутки соцсетей, чтобы определиться с основным месседжем</Fade>
              </Grid>
              <Grid item container sm={6} className={classes.GridListItem}>
                <Fade up>разработаем позиционирование и контент-план</Fade>
              </Grid>
              <Grid item container sm={6} className={classes.GridListItem}>
                <Fade up>через месяц после реализации контент-плана проведём аналитику, чтобы оценить результаты стратегии</Fade>
              </Grid>
              <Grid item container sm={6} className={classes.GridListItem}>
                <Fade up>работа над трафиком и дорабатывание стратегии с учётом данных аналитики</Fade>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default SmmAdsCoast