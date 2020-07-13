import React from "react";
import classes from "./EmailMarketingSteps.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function EmailMarketingSteps() {
  return (
    <section className={classes.EmailMarketingSteps}>
      <Container fixed className={classes.Container}>
        <Grid containe className={classes.HeaddingBox}>
          <Grid item sm={8} xs={12}>
            <h2 className={classes.Headding}>E-mail-маркетинг под ключ – выгодное решение для вашего бизнеса</h2>
          </Grid>
          <Grid item sm={8} xs={12}>
            <p className={classes.Text}>Веб-студия 16.web предлагает свои услуги в сфере e-mail-маркетинга, как по отдельности, так и комплексно. Последний вариант является более выгодным и эффективным – комплексный проект, реализуемый одним исполнителем, имеет гораздо больше шансов на успех. Как правило, понятие e-mail-маркетинга под ключ подразумевает следующие виды услуг:</p>
          </Grid>

        </Grid>
        <Grid container sm={12} xs={12} className={classes.Cards}>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Аудит</h3>
            <p className={classes.Text}>Наши специалисты оценят, какова ситуация с рассылками в вашей компании на момент начала сотрудничества</p>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Разработка стратегии</h3>
            <p className={classes.Text}>Составляется план, по которому будет осуществляться проект</p>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Настройка инструментов</h3>
            <p className={classes.Text}>Сюда входит работа с сервисами, настройка всплывающих окон, интеграции и т.п.</p>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Реализация стратегии</h3>
            <p className={classes.Text}>На этом этапе происходит сбор базы адресов, запуск и автоматизация рассылки</p>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.Card}>
            <h3 className={classes.Title}>Анализ результатов</h3>
            <p className={classes.Text}>Через некоторый период происходит оценка данных, насколько эффективным оказался e-mail-маркетинг</p>
          </Grid>
          <Grid item container sm={4} xs={12} className={classes.Card} justify="center" alignItems="center">
            <p className={classes.Text}>Практика показывает, что услуги по e-mail-маркетингу обычно заказывают для того, чтобы более продуктивно работать с уже имеющимися клиентами и привлекать новых.</p>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default EmailMarketingSteps