import React from "react";
import classes from './LandingDesignProcess.module.scss';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function LandingDesignProcess() {
  return (
    <section className={classes.LandingDesignProcess}>
      <Container fixed className={classes.Container}>
        <Grid container className={classes.HeaddingBlock}>
          <Grid item sm={7}>
            <h2 className={classes.Headding}>Почему дизайн для лендинга стоит заказать у нас?</h2>
          </Grid>
          <Grid item sm={6}>
            <p className={classes.HeaddingText}>Наши специалисты обладают достаточным уровнем профессионализма и знанием психологии целевой аудитории, чтобы создать ресурс, не оставляющий покупателю другого выбора, кроме оформления заказа или услуги.</p>
          </Grid>
          <Grid item sm={6}>
            <p className={classes.HeaddingText}>Приняв решение заказать дизайн лендинга в нашей веб-студии 16.web, вы получаете несколько важных и неоспоримых преимуществ, а именно:</p>
          </Grid>
        </Grid>
        <Grid item container sm={12} className={classes.LandingDesignList}>
          <Grid item sm={4}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Уникальный внешний вид страницы</h3>
              <p className={classes.Text}></p>
            </div>
          </Grid>
          <Grid item sm={4}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Грамотный подбор цветовой гаммы</h3>
              <p className={classes.Text}></p>
            </div>
          </Grid>
          <Grid item sm={4}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Простая и понятная схема сайта</h3>
              <p className={classes.Text}></p>
            </div>
          </Grid>
          <Grid item sm={4}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Удобное расположение блоков</h3>
              <p className={classes.Text}></p>
            </div>
          </Grid>
          <Grid item sm={4}>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Отсутствие раздражающих элементов</h3>
              <p className={classes.Text}></p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default LandingDesignProcess