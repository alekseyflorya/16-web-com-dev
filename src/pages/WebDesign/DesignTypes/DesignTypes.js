import React from "react";
import classes from "./DesignTypes.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

function DesignTypes() {
  return (
    <section className={classes.DesignTypes}>
      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>Типы услуг по веб-дизайну</h2>
        <div className={classes.Cards}>
          <Grid container spacing={0} justify="space-around">
            <Grid item sm={4} xs={12} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/landingdesign" className={classes.CardName}>Дизайн лендинга</Link>
                <p className={classes.CardText}>Дизайн одностраничного сайта должен быть максимально эффектным, привлекательным и броским. При этом оформление должно вызывать у посетителя желание заказать предлагаемый товар или услугу.</p>
              </div>
            </Grid>
            <Grid item sm={4} xs={12} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/sitedesign" className={classes.CardName}>Дизайн сайта</Link>
                <p className={classes.CardText}>Создание дизайна сайта предполагает работу над его визуальным оформлением – подбор шрифтов, цветовых решений и графических элементов, помогающих сделать ресурс максимально привлекательным.</p>
              </div>
            </Grid>
            <Grid item sm={4} xs={12} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link to="/siteprototype" className={classes.CardName}>Прототип сайта</Link>
                <p className={classes.CardText}>Дизайн-макет создаётся после разработки прототипа сайта – упрощённой схемы, составленной с учётом сформулированных заказчиком целей и задач ресурса.</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  )
}

export default DesignTypes