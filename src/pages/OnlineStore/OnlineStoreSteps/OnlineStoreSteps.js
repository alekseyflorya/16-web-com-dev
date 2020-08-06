import React from "react";
import classes from "./OnlineStoreSteps.module.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Hidden} from "@material-ui/core";
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Fade from 'react-reveal/Fade'

export default function OnlineStoreSteps() {
  return (
    <section className={classes.OnlineStoreSteps}>
      <Container fixed>
        <Grid container>
          <Grid item container alignItems="center" className={classes.HeaddingBlock}>
            <Grid item container sm={6}>
              <Fade up><h2 className={classes.Headding}>Разработка интернет- магазина с нуля</h2></Fade>
            </Grid>
            <Grid item container sm={6}>
              <Fade up><p className={classes.Text}>Обращаясь в веб-студию 16.web, чтобы заказать разработку интернет-магазина под ключ, вы получаете все преимущества комплексного подхода, а именно:</p></Fade>
            </Grid>
          </Grid>
          <Hidden only="xs">
            <Grid item container className={classes.GridList}>
              <Grid item container sm={4} direction="column" alignItems="center" className={classes.GridListItem}>
                <Fade up>
                <div className={classes.RoundNumber}>01</div>
                <p className={classes.Text}>Слаженная работа команды позволяет решать задачи гораздо быстрее и эффективнее, чем помощь разработчиков, реализующих этапы отдельно друг от друга.</p>
                </Fade>
              </Grid>
              <Grid item container sm={4} direction="column" alignItems="center" className={classes.GridListItem}>
                <Fade up>
                <div className={classes.RoundNumber}>02</div>
                <p className={classes.Text}>Разрабатывая интернет-магазин, наша команда берёт на себя контроль всех процессов – это избавляет от множества ошибок и просчётов.</p>
                </Fade>
              </Grid>
              <Grid item container sm={4} direction="column" alignItems="center" className={classes.GridListItem}>
                <Fade up>
                <div className={classes.RoundNumber}>03</div>
                <p className={classes.Text}>Мы отвечаем за конечный результат нашей работы и предоставляем все необходимые гарантии, а также осуществляем техподдержку и консультирование заказчиков.</p>
                </Fade>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid item container className={classes.GridList}>
              <Grid item container xs={12} className={classes.GridListItem}>
                <SwipeableTextMobileStepper />
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </section>
  )
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {label: 'Слаженная работа команды позволяет решать задачи гораздо быстрее и эффективнее, чем помощь разработчиков, реализующих этапы отдельно друг от друга.'},
  {label: 'Разрабатывая интернет-магазин, наша команда берёт на себя контроль всех процессов – это избавляет от множества ошибок и просчётов.'},
  {label: 'Мы отвечаем за конечный результат нашей работы и предоставляем все необходимые гарантии, а также осуществляем техподдержку и консультирование заказчиков.'}
];

function SwipeableTextMobileStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Fade up>
    <div className={classes.SwipeableTextMobileStepper}>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
            Math.abs(activeStep - index) <= 2 ? (
              <p key={step.label} className={classes.Text}>{step.label}</p>
            ) : null
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="progress"
        activeStep={activeStep}
        nextButton={
          <Button onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            <ArrowForward />
          </Button>
        }
        backButton={
          <Button onClick={handleBack} disabled={activeStep === 0}>
            <ArrowBack />
          </Button>
        }
      />
    </div>
    </Fade>
  );
}