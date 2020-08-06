import React from "react";
import classes from "./PpcSettingServices.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import RemarketingOrderInfoImg from "../../../assets/img/ppcsetting-services.jpg";
import Fade from 'react-reveal/Fade'

function PpcSettingServices() {
  return (
    <section className={classes.RemarketingOrderInfo}>
      <Container fixed className={classes.Container}>
        <Fade up><h2 className={classes.Headding}>Услуги по контекстной рекламе</h2></Fade>
        <Grid container>
          <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
            <Fade up><img className={classes.RemarketingOrderInfoImg} src={RemarketingOrderInfoImg} alt=""/></Fade>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.RightColumn}>
            <Grid item>
              <Fade up>
              <p className={classes.Text}>Ваши дела стремительно идут вверх и вы чувствуете, что пришла пора совершенствования и внедрения новых возможностей? А не удвоить ли нам сейчас же ваши продажи с помощью усиленной рекламы в интернете? Пришло время действовать!</p>
              <p className={classes.Text}>Контекстное продвижение сайта позволит усилить узнаваемость бренда или компании среди ее целевой аудитории и привлечь новых людей. Контекстная реклама показывается в поисковых системах, на различных сайтах, в мобильных приложениях и на других ресурсах.</p>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className={classes.GridList}>
          <Grid item container sm={6} xs={12} className={classes.GridListItem}>
            <Fade up>В борьбе за клиента ведь все методы хороши, правильно? А такой метод как контекстная реклама - максимально прозрачный и вдвойне эффективный. Это - продолжение хорошего старта, фундамент которого вы уже заложили. Контекстная реклама не ограничивается какими-то конкретными рамками. Форматы контекстной рекламы постоянно совершенствуются и расширяются, тем самым повышая её эффективность.</Fade>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.GridListItem}>
            <Fade up>Мы поможем вам настроить контекстную рекламу по всем правилам и канонам. А это уже больше половины успеха! Дополнительно мы предлагаем ведение контекстной рекламы, повышая тем самым её эффективность и снижая расходы. С нашей веб-студией вы забудете о сложностях настройки и поддержания рекламы, так как мы сделаем все это за вас.</Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default PpcSettingServices