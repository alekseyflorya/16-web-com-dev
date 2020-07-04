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
            <h3 className={classes.Title}>Продвижение в Инстаграм</h3>
            <p className={classes.Text}>На сегодняшний день «Инста» является одной из наиболее дешёвых и эффективных площадок для ведения бизнеса – именно поэтому её использует всё большее количество предпринимателей. Комплексное продвижение Инстаграм позволяет увеличить охват целевой аудитории и ощутимо поднять уровень продаж своего продукта.</p>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Продвижение в Фейсбук</h3>
            <p className={classes.Text}>Среди различных вариантов SMM продвижение в Фейсбуке считается одним из наиболее приоритетных. Согласно статистическим данным, более 1 миллиарда людей в мире имеют в этой социальной сети свои аккаунты – именно поэтому грамотная SMM-стратегия позволяет добиться здесь впечатляющих результатов.</p>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Продвижение Вконтакте</h3>
            <p className={classes.Text}>Раскрутка В контакте – это хорошая возможность задействовать возможности одной из самых посещаемых социальных сетей в мире. Здесь можно использовать различные виды рекламы, создавать публичные страницы, сообщества и интернет-магазины, а также использовать другие способы повысить продаваемость своего продукта или бренда.</p>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Другие соцсети</h3>
            <p className={classes.Text}>Наша студия также готова вам помочь с продвижением в телеграм, тик ток и на других социальных платформах, где есть возможность найти потенциальных покупателей и заинтересовать их.</p>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SmmServices