import React from "react";
import classes from './Interested.module.scss';
import InterestedImg from '../../assets/img/Interested.jpg';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {ButtonLink} from "../UI/ButtonLink";

function Interested({title, interestedDescription, interestedImage, buttonTitle}) {
  return (
    <section className={classes.Interested}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item sm>
            <h2 className={classes.Headding}>{title ? title: 'Заинтересовало?'}</h2>
            <p className={classes.Description}>{interestedDescription ? interestedDescription : 'Ясность нашей позиции очевидна: выбранный нами инновационный путь способствует повышению качества переосмысления внешне экономических политик. С учётом сложившейся международной обстановки'}</p>
            <ButtonLink path={'/vacancies'} title={buttonTitle ? buttonTitle : 'Заказать проект'}/>
          </Grid>
          <Grid item sm className={classes.Vacancies}>
            <img src={interestedImage ? interestedImage : InterestedImg} alt="InterestedImage"/>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Interested