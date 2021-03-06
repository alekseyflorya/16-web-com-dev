import React from "react";
import classes from './SiteCreatingList.module.scss';
import {Link} from 'react-router-dom';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from 'react-reveal/Fade'

function SiteCreatingList() {
  return (
    <section className={classes.SiteCreatingList}>
      <Container fixed className={classes.Container}>
        <Fade up><h2 className={classes.Headding}>Виды сайтов</h2></Fade>
        <div className={classes.Cards}>
          <Grid container className={classes.CardsBox}>
            <Grid item sm={4} xs={12} className={classes.CardBox}>
              <Fade up>
              <div className={classes.Card}>
                <Link to="/services/sitecreating/landingpage" className={classes.CardName}>Лендинг</Link>
                <p className={classes.CardText}>Разработка landing page – одностраничного сайта, позволит быстро и легко показать покупателям суть предлагаемого товара или услуги.</p>
              </div>
              </Fade>
            </Grid>
            <Grid item sm={4} xs={12} className={classes.CardBox}>
              <Fade up>
              <div className={classes.Card}>
                <Link to="/services/sitecreating/businesscardsite" className={classes.CardName}>Сайт-визитка</Link>
                <p className={classes.CardText}>Сайт-визитка донесёт до целевой аудитории основную информацию о вашем бизнесе, не тратя на это много времени и средств.</p>
              </div>
              </Fade>
            </Grid>
            <Grid item sm={4} xs={12} className={classes.CardBox}>
              <Fade up>
              <div className={classes.Card}>
                <Link to="/services/sitecreating/onlinestore" className={classes.CardName}>Интернет - магазин</Link>
                <p className={classes.CardText}>Создание интернет-магазина – это возможность получить эффективную и удобную платформу, как для продающего бренда, так и для покупателей.</p>
              </div>
              </Fade>
            </Grid>
            <Grid item sm={4} xs={12} className={classes.CardBox}>
              <Fade up>
              <div className={classes.Card}>
                <Link to="/services/sitecreating/corporatesite" className={classes.CardName}>Корпоративный сайт</Link>
                <p className={classes.CardText}>Корпоративный сайт под ключ - это мощный ресурс, представляющий ваш бренд, а так же взаимодействие для сотрудников, партнёров и клиентов.</p>
              </div>
              </Fade>
            </Grid>
            <Grid item sm={4} xs={12} className={classes.CardBox}>
              <Fade up>
              <div className={classes.Card}>
                <Link to="/services/sitecreating/uniqueservices" className={classes.CardName}>Уникальные решения</Link>
                <p className={classes.CardText}>Создания собственного сайта – это значит, что мы готовы подготовить предложение, которое учитывает ваши пожелания и поставленные задачи.</p>
              </div>
              </Fade>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  )
}

export default SiteCreatingList