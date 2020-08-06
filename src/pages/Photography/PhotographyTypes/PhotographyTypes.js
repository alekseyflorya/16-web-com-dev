import React from "react";
import classes from "./PhotographyTypes.module.scss"
import Fade from 'react-reveal/Fade'
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import PhotographyCoastImg from "../../../assets/img/photography-cost.jpg";

function PhotographyTypes() {
  return (
    <section className={classes.PhotographyTypes}>
      <Container fixed className={classes.Container}>
        <Grid container className={classes.HeaddingBlock}>
          <Grid item sm={7} xs={12}>
            <Fade up><h2 className={classes.Headding}>Типы фотосъемки</h2></Fade>
          </Grid>
          <Grid item sm={7} xs={12}>
            <Fade up><p className={classes.HeaddingText}>Веб-студия 16.web выполняет различные виды предметной съёмки для онлайн-каталогов, интернет-магазинов и каналов в Instagram – качественные изображения товаров помогут вам повысить уровень продаж и сделать свой бизнес более успешным.</p></Fade>
          </Grid>
        </Grid>
        <Grid item container sm={12} xs={12} className={classes.SeoAdvantagesList}>
          <Grid item sm={6} xs={12}>
            <Fade up>
              <div className={classes.Item}>
                <h3 className={classes.Title}>Предметная съемка для Инстаграм</h3>
                <p className={classes.Text}>Предметные фото в Инстаграм чаще всего относятся к числу имиджевых – в них крайне важна художественная составляющая, которая поможет вызвать интерес у потенциального покупателя.</p>
              </div>
            </Fade>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Fade up>
              <div className={classes.Item}>
                <h3 className={classes.Title}>Предметная съемка для интернет-магазина</h3>
                <p className={classes.Text}>Съёмка товаров для интернет-магазина обычно является потоковой – необходимо сделать большое количество фото похожих друг на друга объектов, поэтому в этом случае важен не только художественный аспект, но и упор на информативность.</p>
              </div>
            </Fade>
          </Grid>
        </Grid>
        <Grid container className={classes.FooterBlock}>
          <Grid item container sm={6} xs={12}>
            <Fade up><h3 className={classes.Headding}>Предметная фотосъемка – важный инструмент мотивации покупателя</h3></Fade>
          </Grid>
          <Grid item container sm={6} xs={12}>
            <Fade up><p className={classes.HeaddingText}>Наша студия для предметной съёмки оснащена самым современным оборудованием, что даёт возможность правильно выставить художественное освещение и отснять объекты в высоком разрешении. После этого наши специалисты отберут наиболее удачные фото, обработают их в цифровом редакторе и приведут в соответствие с техническими требованиями ресурса, на котором они будут размещены.</p></Fade>
          </Grid>
        </Grid>
      </Container>
      <Container fixed className={classes.Container}>
        <Fade up><h2 className={classes.Headding}>Какова стоимость сайта-визитки?</h2></Fade>
        <Grid container className={classes.BusinessCardCoastBox}>
          <Grid item container sm={6} className={classes.LeftColumn}>
            <Fade up><img className={classes.PhotographyCoastImg} src={PhotographyCoastImg} alt=""/></Fade>
          </Grid>
          <Grid item container sm={6} className={classes.RightColumn}>
            <Fade up><p className={classes.Text}>На предметную фотосъёмку цены формируются с учётом различных факторов, к числу которых относятся:</p></Fade>
              <Grid item container sm={12} className={classes.GridList}>
                <Grid item container sm={12} className={classes.GridListItem}>
                  <Fade up>количество снимков</Fade>
                </Grid>
                <Grid item container sm={12} className={classes.GridListItem}>
                  <Fade up>продолжительность фотосессии</Fade>
                </Grid>
                <Grid item container sm={12} className={classes.GridListItem}>
                  <Fade up>условия съёмки</Fade>
                </Grid>
                <Grid item container sm={12} className={classes.GridListItem}>
                  <Fade up>требования к фото</Fade>
                </Grid>
                <Grid item container sm={12} className={classes.GridListItem}>
                  <Fade up>степень цифровой обработки</Fade>
                </Grid>
                <Grid item container sm={12} className={classes.GridListItem}>
                  <Fade up>тип освещения и т.п</Fade>
                </Grid>
              </Grid>
            <Fade up><p className={classes.Text}>В любом случае, обращаясь к специалистам веб-студии 16.web, вы можете быть уверены, что стоимость их услуг будет в пределах разумного – при этом мы всегда гарантируем высокое качество отснятого и отредактированного материала.</p></Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default PhotographyTypes