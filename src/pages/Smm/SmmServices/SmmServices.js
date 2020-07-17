import React from "react";
import classes from "./SmmServices.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function SmmServices() {
  return (
    <section className={classes.SmmServices}>
      <Container fixed className={classes.Container}>
        <Grid>
          <h2 className={classes.Headding}>SMM-продвижение</h2>
        </Grid>
        <Grid container sm={12} xs={12} className={classes.Cards}>
          <Grid item container sm={6} xs={12} className={classes.Card}>
            <a href="/instagram-smm" className={classes.Link}>
              <h3 className={classes.Title}>Продвижение в Инстаграм</h3>
              <p className={classes.Text}>На сегодняшний день «Инста» является одной из наиболее дешёвых и эффективных площадок для ведения бизнеса – именно поэтому её использует всё большее количество предпринимателей. Комплексное продвижение Инстаграм позволяет увеличить охват целевой аудитории и ощутимо поднять уровень продаж своего продукта.</p>
            </a>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.Card}>
            <a href="/facebook-smm" className={classes.Link}>
              <h3 className={classes.Title}>Продвижение в Фейсбук</h3>
              <p className={classes.Text}>Среди различных вариантов SMM продвижение в Фейсбуке считается одним из наиболее приоритетных. Согласно статистическим данным, более 1 миллиарда людей в мире имеют в этой социальной сети свои аккаунты – именно поэтому грамотная SMM-стратегия позволяет добиться здесь впечатляющих результатов.</p>
            </a>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.Card}>
            <a href="/smm-ads" className={classes.Link}>
              <h3 className={classes.Title}>Реклама в социальных сетях</h3>
              <p className={classes.Text}>Продвижение в социальных сетях — это комбинация классического SMM и таргетированной рекламы. Комплексный подход дает лучший результат.</p>
            </a>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.Card}>
            <a href="/other-smm" className={classes.Link}>
              <h3 className={classes.Title}>Другие соцсети</h3>
              <p className={classes.Text}>Наша студия также готова вам помочь с продвижением в телеграм, тик ток и на других социальных платформах, где есть возможность найти потенциальных покупателей и заинтересовать их.</p>
            </a>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SmmServices