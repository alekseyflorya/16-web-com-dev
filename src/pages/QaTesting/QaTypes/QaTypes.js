import React from "react";
import classes from "./QaTypes.module.scss";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Fade from 'react-reveal/Fade'

function QaTypes() {
  return (
    <section className={classes.QaTypes}>
      <Container fixed className={classes.Container}>
        <Fade up><h2 className={classes.Headding}>Типы QA-тестирования и их особенности</h2></Fade>
        <Grid container sm={8} className={classes.SubHeadding}>
          <Fade up><p className={classes.Text}>Веб-студия 16.web использует различные виды QA-тестирования сайтов, выбирая оптимальный вариант в зависимости от поставленных в каждом конкретном случае задач.</p></Fade>
        </Grid>
        <Grid container sm={12} xs={12} className={classes.Cards}>
          <Grid item container sm={6} xs={12} className={classes.Card}>
            <Fade up>
              <h3 className={classes.Title}>Функциональное тестирование</h3>
              <p className={classes.Text}>Функциональное тестирование помогает проверить, насколько корректно работает каждая из функций сайта и в полной ли мере она отвечает требованиям спецификации. Конечная цель при этом заключается в том, чтобы определить, является система совершенной или нет. Достоинства этого метода состоят в том, что проверка происходит в условиях, близких к пользовательским, и при этом имитируется тот же механизм эксплуатации.</p></Fade>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.Card}>
            <Fade up>
              <h3 className={classes.Title}>Нефункциональное тестирование</h3>
              <p className={classes.Text}>Нефункциональное тестирование охватывает ту область, которая не тестируется функционально – её задача состоит в том, чтобы оценить, насколько хорошо работает система. Сюда можно отнести проверку интерфейса, возможности взаимодействия с продуктами и услугами, сохранения данных и достаточности объёма памяти для этого, безопасности и т.п.</p></Fade>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.Card}>
            <Fade up>
              <h3 className={classes.Title}>Ручное тестирование</h3>
              <p className={classes.Text}>Ручное тестирование выполняется без дополнительных программных приложений – его суть заключается во взаимодействии тестировщика и системы для выявления ошибок и погрешностей. Главным достоинством такого подхода является возможность получать «фидбек», сравнивая ожидания и результат – это позволяет оставлять в результате проверки рекомендации относительно внесения правок.</p></Fade>
          </Grid>
          <Grid item container sm={6} xs={12} className={classes.Card}>
            <Fade up>
              <h3 className={classes.Title}>Автоматизированное тестирование</h3>
              <p className={classes.Text}>Автоматизированное тестирование сайта выполняется посредством написания кода, помогающего сравнить получаемый сценарий с тем, что планировался. Этот метод очень хорошо себя показал на больших массивах, когда приходится оперировать огромным количеством данных. Автоматизированный подход даёт возможность экономить время и силы, кроме того, код можно использовать повторно – это позволяет использовать тестовый сценарий каждый раз, когда объект обновлялся.</p></Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default QaTypes