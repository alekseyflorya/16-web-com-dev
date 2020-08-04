import React, {useState} from "react";
import classes from './Interested.module.scss';
import InterestedImg from '../../assets/img/Interested.jpg';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {OrderButton} from "../UI/ButtonLink";
import {Hidden} from "@material-ui/core";
import CallBack from "../Callback";
import Fade from 'react-reveal/Fade'

function Interested({title, interestedDescription, interestedImage, buttonTitle}) {
  const [callBackIsOpen, setCallBackIsOpen] = useState(false)

  const callBackSetOpen = () => setCallBackIsOpen(!callBackIsOpen)

  return (
    <section className={classes.Interested}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item sm>
            <Fade up>
            <h2 className={classes.Headding}>{title ? title: 'Заинтересовало?'}</h2>
            <Hidden smUp>
              <img className={classes.InterestedImg} src={interestedImage ? interestedImage : InterestedImg} alt="InterestedImage"/>
            </Hidden>
            <p className={classes.Description}>{interestedDescription ? interestedDescription : 'Ясность нашей позиции очевидна: выбранный нами инновационный путь способствует повышению качества переосмысления внешне экономических политик. С учётом сложившейся международной обстановки'}</p>
            <OrderButton classNames={classes.InterestedBtn} title={buttonTitle ? buttonTitle : 'Заказать проект'} onClick={callBackSetOpen} />
            </Fade>
          </Grid>
          <Grid item sm className={classes.InterestedImgBlock}>
            <Hidden only="xs">
              <Fade up><img className={classes.InterestedImg} src={interestedImage ? interestedImage : InterestedImg} alt="InterestedImage"/></Fade>
            </Hidden>
          </Grid>
        </Grid>
        <CallBack callBackIsOpen={callBackIsOpen} callBackSetOpen={callBackSetOpen} />
      </Container>
    </section>
  )
}

export default Interested