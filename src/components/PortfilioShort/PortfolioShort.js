import React from "react";
import classes from './PortfolioShort.module.scss';
import PortfolioData from '../PortfolioArray';
import Container from "@material-ui/core/Container";
import {Link} from "react-router-dom";
import {ButtonLink, PricesButton} from '../../components/UI/ButtonLink'
import Fade from 'react-reveal/Fade';

function PortfolioShort(){
  return (
    <section className={classes.PortfolioShort}>
      <Container fixed className={classes.Container}>
        <div>
          <h2 className={classes.Headding}>Наше портфолио</h2>
          <div className={classes.DescriptionBlock}>
            <Fade up><p className={classes.Description}>У нас немало выполненных проектов – отзывы клиентов красноречиво говорят о том, что мы умеем эффективно и быстро решать самые сложные задачи.</p></Fade>
            <Fade right><PricesButton classNames={classes.PricesButton} path={'/prices'} title={'Узнать цены'} /></Fade>
          </div>
          <div className={classes.ProjectsGrid}>
            <div className={classes.gridContainer}>
              {PortfolioData.map(({img, title, type, position, path}, index) => (
                <div className={`${classes.gridItem} ${position}`} key={index}>
                  <div className={classes.HoveredBlock}>
                    <Link to={path}>
                      <h3 className={classes.HoveredTitle}>{title}</h3>
                      <p className={classes.HoveredType}>{type}</p>
                      <div className={classes.HoveredArrow}></div>
                    </Link>
                  </div>
                  <Fade up>
                  <img className={classes.gridImg} src={img} alt={type} title={title}/>
                  </Fade>
                </div>
              ))}
            </div>
          </div>
          <div className={classes.PortfolioShortBtn}>
            <ButtonLink classNames={classes.PortfolioShortButton} path={'/portfolio'} title={'Все проекты'}/>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PortfolioShort