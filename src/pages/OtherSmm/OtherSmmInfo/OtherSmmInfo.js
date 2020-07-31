import React from "react";
import classes from "./OtherSmmInfo.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import InfoTwiterSmmImg from "../../../assets/img/twitter-pluses.jpg";
import behanceSmmImg from "../../../assets/img/behance-pluses.jpg";

function OtherSmmInfo() {
  return (
    <section className={classes.InfoFacebookSmm}>
      <Container fixed className={classes.TikTokSmm}>
        <Grid container>
          <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
            <h2 className={classes.Headding}>Плюсы продвижения в <span className={classes.styled}>ТикТок</span></h2>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.RightColumn}>
            <p className={classes.Text}>Сейчас TikTok еще считается молодой социальной сетью, что делает продвижение достаточно простым и быстрым.</p>
            <p className={classes.Text}>Аудитория этой молодежной социальной сети уже преодолела отметку 800 млн. пользователей. И она продолжает стремительно двигаться к своему первому миллиарду. Основная аудитория — это поколение Z, то есть люди возрастом от 10 до 24 лет. Именно они формируют спрос на широкий круг товаров и услуг.</p>
          </Grid>
        </Grid>
      </Container>
      <Container fixed className={classes.TikTokSmmAdvantages}>
        <Grid container>
          <h2 className={classes.Headding}>Преимущества продвижения в <span className={classes.styled}>TikTok:</span></h2>
        </Grid>
        <Grid container sm={12} xs={12} className={classes.Cards}>
          <Grid item container sm={6} xs={12} className={classes.Card}>
            <a href="/instagram-smm" className={classes.Link}>
              <h3 className={classes.Title}>Лояльность аудитории</h3>
              <p className={classes.Text}>Пользователи хорошо относятся к брендам, которые не пытаются «ударить в лоб» рекламой, а просто развлекают своих потенциальных клиентов.</p>
            </a>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.Card}>
            <a href="/facebook-smm" className={classes.Link}>
              <h3 className={classes.Title}>Простой охват аудитории</h3>
              <p className={classes.Text}>Простой охват аудитории — алгоритмы социальной сети лояльны, что позволяет получать широкий органический охват.</p>
            </a>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.Card}>
            <a href="/smm-ads" className={classes.Link}>
              <h3 className={classes.Title}>Легкое лидерство</h3>
              <p className={classes.Text}>Легкое лидерство — пока конкуренты считают, что в ТикТок делать нечего, ваша компания без особых усилий занять перспективную нишу.</p>
            </a>
          </Grid>
        </Grid>
      </Container>
      <Container fixed className={classes.TweeterSmm}>
        <h2 className={classes.Headding}>Плюсы продвижения в <span className={classes.styled}>Твиттере</span></h2>
        <Grid container>
          <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
            <img className={classes.InfoFacebookSmmImg} src={InfoTwiterSmmImg} alt=""/>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.RightColumn}>
            <p className={classes.Text}>Несмотря на аудиторию в 30+ млн. пользователей, это платформа незаслуженно продолжает оставаться практически незаметной для бизнеса. Этот факт мы можем превратить в стратегическое преимущество вашей компании.</p>
            <p className={classes.Text}>Преимущества продвижения в Twitter:</p>
            <Grid item container className={classes.GridList}>
              <Grid item container className={classes.GridListItem}>
                Это самая популярная «газета» XXI века
              </Grid>
              <Grid item container className={classes.GridListItem}>
                Здесь концентрируется значительный сегмент взрослой и серьезной аудитории;
              </Grid>
              <Grid item container className={classes.GridListItem}>
                «Твитер» генерирует качественный трафик на сайт
              </Grid>
            </Grid>
            <p className={classes.Text}>Многим надоел яркий и объемный контент. А значит раскрутка в Twitter — это лучшая возможность «прикоснуться» к этой аудитории.</p>
          </Grid>
        </Grid>
      </Container>
      <Container fixed className={classes.BehanceSmm}>
        <h2 className={classes.Headding}>Плюсы продвижения в <span className={classes.styled}>Behance</span></h2>
        <Grid container>
          <Grid item container sm={6} xs={12} className={classes.RightColumn}>
            <p className={classes.Text}>Behance — это площадка, которая объединила в себе сотни тысяч дизайнеров, архитекторов, художников и других представителей творческих профессий.</p>
            <p className={classes.Text}>Активное продвижение на Behance — это реальная возможность получить стабильный поток заказов. Многие профи из мира творчества уверены, что раскрученный профиль на Behance — это лучше чем собственный сайт с портфолио. </p>
            <p className={classes.Text}>Продвижение на этой площадке подойдет не только фрилансерам. Здесь многие компании находят клиентов, которым требуется разработка дизайна и подобные услуги.</p>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
            <img className={classes.InfoFacebookSmmImg} src={behanceSmmImg} alt=""/>
          </Grid>
        </Grid>
      </Container>
      <Container fixed className={classes.TelegramSmm}>
        <h2 className={classes.Headding}>Плюсы продвижения в <span className={classes.styled}>Телеграм</span></h2>
        <Grid container>
          <Grid item container sm={6} xs={12} className={classes.RightColumn}>
            <p className={classes.Text}>Раскрутка в Telegram — это отличный способ информирования, продаж и улучшения имиджа бренда.</p>
            <p className={classes.Text}>Решили открыть потенциал TikTok, Twitter, Behance и Telegram для своего бизнеса? Веб-студия 16.web готова помочь организовать эффективное присутствие вашей компании в этих и других социальных сетях. Свяжитесь с нами, чтобы мы подобрали оптимальные площадки и стратегии для раскрутки именно вашего бизнеса.</p>
            <p className={classes.Text}>Telegram уже перерос рамки популярного мессенджера — сегодня это полноценная социальная с очень активной и продвинутой аудиторией.</p>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
            <p className={classes.Text}>У продвижения в «Телеграм» есть свои преимущества:</p>
            <Grid item container className={classes.GridList}>
              <Grid item container sm={12} xs={12} className={classes.GridListItem}>Хорошая реакция аудитории на умеренную рекламу</Grid>
              <Grid item container sm={12} xs={12} className={classes.GridListItem}>Здесь нельзя «украсть» или проанализировать чужую аудиторию</Grid>
              <Grid item container sm={12} xs={12} className={classes.GridListItem}>На платформе еще нет слишком активной конкуренции</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default OtherSmmInfo