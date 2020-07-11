import React from "react";
import classes from "./MarketingFeatures.module.scss"
import Container from "@material-ui/core/Container";
import MarketingFeaturesImg from "../../../assets/img/marketingfeatures.jpg"
import Grid from "@material-ui/core/Grid";

function MarketingFeatures() {
  return (
    <section className={classes.MarketingFeatures}>
      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>Грамотный веб-дизайн для вашего сайта</h2>
        <Grid container sm={12} xs={12} className={classes.MarketingFeaturesBox}>
          <Grid item container sm={6} xs={12}>
            <img className={classes.Image} src={MarketingFeaturesImg} alt="CompetentDesignImg"/>
          </Grid>
          <Grid item container sm={6} xs={12} alignItems="center">
            <Grid item>
              <p className={classes.Text}>Веб-студия 16.web использует разнообразные средства, помогающие привлечь внимание целевой аудитории к конкретному товару или бренду. Для этой цели задействуются возможности веб-маркетинга – SEO, SMM, различные виды контекстной рекламы и т.п.</p>
              <h3 className={classes.SubTitle}>Интернет-маркетинг под ключ – оптимальное решение</h3>
              <p className={classes.Text}>Чтобы комплексно решить задачи по продвижению вашего бренда с помощью интернет-технологий, используйте опыт и квалификацию профессионалов.</p>
              <p className={classes.Text}>Команда веб-студии 16.web готова разработать для вас коммерческое предложение, в котором будет представлена эффективная маркетинговая стратегия, учитывающая все цели и особенности вашего бизнеса.</p>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default MarketingFeatures