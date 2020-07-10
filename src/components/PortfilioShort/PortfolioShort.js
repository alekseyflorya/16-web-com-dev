import React from "react";
import classes from './PortfolioShort.module.scss';
import PortfolioData from '../PortfolioArray';
import Container from "@material-ui/core/Container";
import {Link} from "react-router-dom";
import {ButtonLink, PricesButton} from '../../components/UI/ButtonLink'

function PortfolioShort(){
  return (
    <section className={classes.PortfolioShort}>
      <Container fixed className={classes.Container}>
        <div>
          <h2 className={classes.Headding}>Наше портфолио</h2>
          <div className={classes.DescriptionBlock}>
            <p className={classes.Description}>У нас немало выполненных проектов – отзывы клиентов красноречиво говорят о том, что мы умеем эффективно и быстро решать самые сложные задачи.</p>
            <PricesButton classNames={classes.PricesButton} path={'/prices'} title={'Узнать цены'} />
          </div>
          <div className={classes.ProjectsGrid}>
            <div className={classes.gridContainer}>
              {PortfolioData.map(({img, title, type, position}, index) => (
                <div className={`${classes.gridItem} ${position}`} key={index}>
                  <div className={classes.HoveredBlock}>
                    <Link to='/portfolio'>
                      <h3 className={classes.HoveredTitle}>{title}</h3>
                      <p className={classes.HoveredType}>{type}</p>
                      <div className={classes.HoveredArrow}></div>
                    </Link>
                  </div>
                  <img className={classes.gridImg} src={img} alt={type} title={title}/>
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