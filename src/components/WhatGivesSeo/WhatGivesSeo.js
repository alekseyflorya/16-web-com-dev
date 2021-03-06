import React from "react";
import classes from "./WhatGivesSeo.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from 'react-reveal/Fade'

function WhatGivesSeo() {
  return (
    <section className={classes.WhatGivesSeo}>
      <Container fixed className={classes.Container}>
        <Grid container className={classes.HeaddingBlock}>
          <Grid item sm={7} xs={12}>
            <Fade up><h2 className={classes.Headding}>Что даёт продвижение сайта в поисковых системах</h2></Fade>
          </Grid>
          <Grid item sm={5} xs={12}>
            <Fade up><p className={classes.HeaddingText}>SEO-оптимизация сайта относится к числу наиболее эффективных способов продвижения бизнеса в интернете – обратившись по этому вопросу к специалистам веб-студии 16.web, вы получаете следующее:</p></Fade>
          </Grid>
        </Grid>
        <Grid item container sm={12} xs={12} className={classes.SeoAdvantagesList}>
          <Grid item sm={6} xs={12}>
            <Fade up>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Увеличение продаж</h3>
              <p className={classes.Text}>Согласно данным статистики, 5 из 6 ваших потенциальных покупателей пользуются поисковыми сервисами, следовательно, стоит воспользоваться возможностью сделать их своими клиентами.</p>
            </div>
            </Fade>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Fade up>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Лояльность целевой аудитории</h3>
              <p className={classes.Text}>Прямая реклама становится всё более навязчивой и люди доверяют всё меньше. В то же время более благосклонно относятся к результатам поиска, когда они ищут оптимальный вариант.</p>
            </div>
            </Fade>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Fade up>
            <div className={classes.Item}>
              <h3 className={classes.Title}>Возможность влиять на рынок</h3>
              <p className={classes.Text}>Компания, которая постоянно находится в топе поисковых ресурсов, привлекает к себе внимание. SEO-продвижение приводит к тому, ей пытаются подражать, её приводят в качестве примера.</p>
            </div>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default WhatGivesSeo;