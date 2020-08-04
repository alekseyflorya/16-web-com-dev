import React from "react";
import classes from './AboutShort.module.scss';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {ButtonLink} from "../UI/ButtonLink";
import Fade from 'react-reveal/Fade';

function AboutShort() {
  return (
    <section className={classes.AboutShort}>
      <Container fixed className={classes.Container}>
        <Grid container className={classes.AboutShortBox}>
          <Grid item container sm={8} xs={12} className={classes.LeftColumn}>
          <Fade up>
            <p className={classes.Text}>Комплексное продвижение в интернете на сегодняшний день является одним из наиболее эффективных маркетинговых инструментов, с помощью которых можно существенно поднять уровень спроса на товар или услугу.</p>
            <p className={classes.Text}>Компания 16.web предлагает свою помощь всем, кто стремится развивать бизнес подобным образом – мы поможем вам сделать свой бренд максимально узнаваемым и востребованным, а также сделаем всё возможное для роста оборота и продаж.</p>
            <p className={classes.Text}>Наша web-студия специализируется на создании сложных сайтов и их оптимизации – это позволяет очень быстро и эффективно продвинуть бренд в интернете.</p>
          </Fade>
          </Grid>
          <Grid item container sm={3} xs={12} className={classes.RightColumn}>
            <Fade up>
            <div className={classes.Advantages}>
              <div className={classes.Item}>
                <p className={`${classes.Text} ${classes.Number1}`}>Быстрое и эффективное продвижение бренда в интернете.</p>
              </div>
              <div className={classes.Item}>
                <p className={`${classes.Text} ${classes.Number2}`}>Инструменты для раскрутки - контекстная реклама, SEO и SMM и другие.</p>
              </div>
            </div>
            </Fade>
          </Grid>
        </Grid>
        <div className={classes.AboutShortBtn}>
          <ButtonLink classNames={classes.AboutShortButton} path={'/about'} title={'Подробнее о нас'}/>
        </div>
      </Container>
    </section>
  )
}

export default AboutShort