import React from "react";
import classes from "./CompetentDesign.module.scss"
import Container from "@material-ui/core/Container";
import CompetentDesignImg from "../../../assets/img/competentdesign.jpg"
import Grid from "@material-ui/core/Grid";
import {ButtonLink} from "../../../components/UI/ButtonLink";

function CompetentDesign() {
  return (
    <section className={classes.CompetentDesign}>
      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>Грамотный веб-дизайн для вашего сайта</h2>
        <Grid container sm={12} className={classes.CompetentDesignBox}>
          <Grid item container sm={6} xs={12}>
            <img className={classes.Image} src={CompetentDesignImg} alt="CompetentDesignImg"/>
          </Grid>
          <Grid item container sm={6} xs={12} alignItems="center">
            <Grid item>
              <p className={classes.Text}>Веб-студия 16.web предлагает свои услуги по разработке web-дизайна – у нас работает команда креативных квалифицированных специалистов, умеющих решать задачи любой сложности. </p>
              <p className={classes.Text}>Для вас это хорошая возможность сделать свою онлайн-платформу максимально привлекательной и удобной для потенциальных покупателей, решив таким образом ряд важных задач по продвижению бизнеса в интернете.</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          <Grid item sm={7} xs={12}>
            <p className={classes.ActionText}>Если вам нужны услуги профессионалов по разработке веб-дизайна, давайте обсудим возможные варианты сотрудничества!</p>
          </Grid>
          <Grid item container sm={5} xs={12} justify="flex-end">
            <ButtonLink classNames={classes.CompetentDesignBtn} title={'Обсудить проект'} />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default CompetentDesign