import React from "react";
import classes from "./SmmCoast.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import smmCoastImg from "../../../assets/img/smm-coast.jpg";
import {OrderButton} from "../../../components/UI/ButtonLink";
import {Hidden} from "@material-ui/core";
import Fade from 'react-reveal/Fade'

function SmmCoast(){
  return (
    <>
      <section className={classes.SmmCoast}>
        <Container fixed className={classes.Container}>
          <Grid container>
            <Grid item container sm={7} className={classes.LeftColumn}>
              <Fade up><h2 className={classes.Headding}>SMM-продвижение – принцип формирования стоимости услуг</h2></Fade>
              <Hidden smUp>
                <Fade up><img className={classes.SmmCoastImg} src={smmCoastImg} alt=""/></Fade>
              </Hidden>
              <Fade up>
              <p className={classes.Text}>Если вы планируете заказать SMM-продвижение в веб-студии 16.web, стоит разобраться, каким образом рассчитать бюджет. На услуги по SMM-продвижению цена формируется с учётом следующих факторов:</p>
              <Grid item container className={classes.GridList}>
                <Grid item container className={classes.GridListItem}>цели и задачи вашего проекта</Grid>
                <Grid item container className={classes.GridListItem}>масштабность рекламной кампании</Grid>
                <Grid item container className={classes.GridListItem}>сроки выхода на конкретный результат</Grid>
                <Grid item container className={classes.GridListItem}>количество конкурентов в вашей сфере деятельности</Grid>
                <Grid item container className={classes.GridListItem}>наличие действующих групп и страниц в соцсетях и т.п.</Grid>
              </Grid>
              </Fade>
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
            <Grid item container className={classes.SmmActionBottom}>
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

export default SmmCoast