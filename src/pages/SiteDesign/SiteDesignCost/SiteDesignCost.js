import React from "react";
import classes from "./SiteDesignCost.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import OnlineStoreCoastImg from "../../../assets/img/online-store-coast.jpg";
import {OrderButton} from "../../../components/UI/ButtonLink";

function SiteDesignCost() {
  return (
    <>
      <section className={classes.SiteDesignCost}>
        <Container fixed className={classes.Container}>
          <Grid container>
            <Grid item container sm={6} className={classes.RightColumn}>
              <h2 className={classes.Headding}>Какова стоимость разработки дизайна сайта?</h2>
              <p className={classes.Text}>Спектр цен на разработку веб-дизайна сегодня чрезвычайно широк – стоимость конкретного проекта зависит от массы факторов, в числе которых объём работы, сложность поставленных задач, наличие нестандартных требований и эксклюзивных функций и т.п.</p>
              <p className={classes.Text}>Чем сложнее дизайн и чем больше в нём используется эксклюзивных решений, тем больше времени и ресурсов необходимо на его реализацию – соответственно, тем выше и стоимость услуг специалистов, занятых в работе над ним.</p>
            </Grid>
            <Grid item container sm={6} className={classes.LeftColumn}>
              <img src={OnlineStoreCoastImg} alt=""/>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.SiteDesignOrder}>
        <Container fixed className={classes.Container}>
          <Grid container>
            <Grid item container sm={7}>
              <h2 className={classes.Headding}>Дизайн сайта под ключ – выгодное решение</h2>
              <p className={classes.Text}>Веб-студия 16.web создаёт дизайн сайтов на заказ и берётся, как за реализацию отдельных этапов, так и за проекты под ключ. Последнее решение является наиболее выгодным и эффективным – комплексный подход позволяет решать очень сложные задачи в короткие сроки и добиваться при этом максимальной эффективности.</p>
            </Grid>
            <Grid item container sm={5} justify="flex-end">
              <OrderButton title={'Заказать дизайн'} />
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default SiteDesignCost