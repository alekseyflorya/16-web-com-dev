import React from "react";
import classes from "./OrderInfoExternalOptimization.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import OrderInfoExternalOptimizationImg from "../../../assets/img/order-info-internaloptimization.jpg";
import Fade from 'react-reveal/Fade'

function OrderInfoExternalOptimization() {
  return (
    <>
      <section className={classes.ExternalOptimizationInfo}>
        <Container fixed className={classes.Container}>
          <Fade up><h2 className={classes.Headding}>Какой должна быть внешняя оптимизация</h2></Fade>
          <Grid container>
            <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
              <Fade up>
              <p className={classes.Text}>Сегодня поисковые системы внимательно контролируют качество бэклинков. Если алгоритмы определят спамные или явно «накрученные» ссылки, то сайт ожидают серьезные санкции или даже полный выход из индекса.</p>
              <p className={classes.Text}>Может от ссылочного продвижения лучше отказаться, чтобы не рисковать? На стабильный рост органических бэклинков могут рассчитывать только крупные проекты. Поэтому молодым и развивающимся сайтам без внешнего SEO продвижения добиться успеха не получится.</p>
              </Fade>
            </Grid>
            <Grid item container sm={6} xs={12} className={classes.RightColumn}>
              <Fade up>
              <p className={classes.Text}>Безопасное построение ссылочного профиля — это сложный процесс, требующий системности и стратегического планирования. Он будет безопасным и эффективным, если придерживаться следующих принципов:</p>
              <Grid item container sm={12} className={classes.GridList}>
                <Grid item container sm={12} className={classes.GridListItem}>получение качественных бэклинков с релевантных и/или авторитетных ресурсов</Grid>
                <Grid item container sm={12} className={classes.GridListItem}>использование только вечных ссылок</Grid>
                <Grid item container sm={12} className={classes.GridListItem}>ссылки размещаются не ради ссылок, а для получения трафика</Grid>
              </Grid>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={classes.OrderInfoExternalOptimization}>
        <Container fixed>
          <Grid container>
            <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
              <Fade up><img className={classes.OrderInfoExternalOptimizationImg} src={OrderInfoExternalOptimizationImg} alt=""/></Fade>
            </Grid>
            <Grid item container sm={6} xs={12} className={classes.RightColumn}>
              <Fade up>
              <p className={classes.Text}>При этом нужно постоянно контролировать состояние донорских площадок и качество размещения.</p>
              <p className={classes.Text}>Нужна внешняя оптимизация интернет-магазина или информационного сайта? Тогда не рискуйте, а просто обращайтесь в веб-студию 16.web.</p>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default OrderInfoExternalOptimization