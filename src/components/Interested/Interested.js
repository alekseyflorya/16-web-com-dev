import React from "react";
import classes from './Interested.module.scss';
import InterestedImage from '../../assets/img/Interested.jpg';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {ButtonLink} from "../UI/ButtonLink";


function Interested() {
  return (
    <section className={classes.Interested}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item sm>
            <h2 className={classes.Headding}>Заинтересовало?</h2>
            <p className={classes.Description}>Ясность нашей позиции очевидна: выбранный нами инновационный путь способствует повышению качества переосмысления внешне экономических политик. С учётом сложившейся международной обстановки</p>
            <ButtonLink path={'/vacancies'} title={'Заказать проект'}/>
          </Grid>
          <Grid item sm className={classes.Vacancies}>
            <img src={InterestedImage} alt="InterestedImage"/>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Interested