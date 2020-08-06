import React from "react";
import classes from './OnlineStoreProcess.module.scss';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from 'react-reveal/Fade'

function OnlineStoreProcess() {
  return (
    <>
      <section className={classes.OnlineStoreProcess}>
        <Container fixed className={classes.Container}>
          <Grid container>
            <Grid item sm={7}>
              <Fade up><h2 className={classes.Headding}>Процесс создания сайта интернет-магазина</h2></Fade>
            </Grid>
            <Grid item sm={5}>
              <Fade up><p className={classes.HeaddingText}>Вы можете заказать у специалистов нашей веб-студии 16.web следующие виды услуг по созданию интернет-магазина:</p></Fade>
            </Grid>
          </Grid>
          <Grid item container sm={12} className={classes.OnlineStoreProcessList}>
            <Grid item sm={4} xs={12}>
              <Fade up>
              <div className={classes.Item}>
                <h3 className={classes.Title}>Уникальный адаптивный дизайн</h3>
                <p className={classes.Text}>Мы позаботимся о том, чтобы ваш сайт корректно отображался в различных поисковых браузерах.</p>
              </div>
              </Fade>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Fade up>
              <div className={classes.Item}>
                <h3 className={classes.Title}>Стильное оформление</h3>
                <p className={classes.Text}>Ваш ресурс будет выглядеть очень эстетично, выгодно отличаясь от большинства интернет-магазинов.</p>
              </div>
              </Fade>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Fade up>
              <div className={classes.Item}>
                <h3 className={classes.Title}>Разработка по вашему дизайну</h3>
                <p className={classes.Text}>Это для вас хорошая возможность реализовать собственные идеи и креатив</p>
              </div>
              </Fade>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Fade up>
              <div className={classes.Item}>
                <h3 className={classes.Title}>Наполнение контентом</h3>
                <p className={classes.Text}>Наши специалисты разместят на страницах сайта все необходимые тексты, изображения, описания товаров, категорий и т.п.</p>
              </div>
              </Fade>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Fade up>
              <div className={classes.Item}>
                <h3 className={classes.Title}>Привязка к хостингу</h3>
                <p className={classes.Text}>От этого фактора во многом зависит скорость и стабильность работы вашего интернет-магазина</p>
              </div>
              </Fade>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Fade up>
              <div className={classes.Item}>
                <h3 className={classes.Title}>Тестирование</h3>
                <p className={classes.Text}>Оно позволяет понять, насколько эффективно и правильно работают все службы сайта, помогает найти слабые места и внести правки.</p>
              </div>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.OnlinestoreIntegration}>
        <Container fixed>
          <Grid container>
            <Grid item container sm={6} xs={12}>
              <Fade up><h2 className={classes.Headding}>Функциональность и эффективность</h2></Fade>
            </Grid>
            <Grid item container sm={6} xs={12}>
              <Fade up><p className={classes.Text}>Мы используем полный набор инструментов, способствующих увеличению охвата клиентов - интегрируем в лендинг квизы, лид-формы, телеграм-каналы с настроенными ботами, гугл-таблицы. При этом структура ресурса во многом определяется задачами, поставленными заказчиком, и спецификой его деятельности.</p></Fade>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default OnlineStoreProcess