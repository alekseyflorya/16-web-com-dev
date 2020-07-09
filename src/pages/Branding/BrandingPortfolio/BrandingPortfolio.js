import React from "react";
import classes from "./BrandingPortfolio.module.scss"
import Container from "@material-ui/core/Container";
import {Link} from "react-router-dom";
import portfolioImage1 from '../../../assets/img/portfolio-image1.png';
import portfolioImage2 from '../../../assets/img/portfolio-image2.png';
import portfolioImage3 from '../../../assets/img/portfolio-image3.png';

function BrandingPortfolio() {
  return (
    <section className={classes.BrandingPortfolio}>
      <Container fixed className={classes.Container}>
        <div>
          <h2 className={classes.Headding}>Наши работы</h2>
          <div className={classes.ProjectsGrid}>
            <div className={classes.gridContainer}>
              <div className={`${classes.gridItem} ${classes.gridItem1}`}>
                <div className={classes.HoveredBlock}>
                  <Link to='/portfolio'>
                    <h3 className={classes.HoveredTitle}>{'Портфолио 1'}</h3>
                    <p className={classes.HoveredType}>{'Интернет-магазин'}</p>
                    <div className={classes.HoveredArrow}></div>
                  </Link>
                </div>
                <img className={classes.gridImg} src={portfolioImage1} alt={'Интернет-магазин'} title={'Портфолио 1'}/>
              </div>

              <div className={`${classes.gridItem} ${classes.gridItem2}`}>
                <div className={classes.HoveredBlock}>
                  <Link to='/portfolio'>
                    <h3 className={classes.HoveredTitle}>{'Портфолио 2'}</h3>
                    <p className={classes.HoveredType}>{'Лендинг-пейдж'}</p>
                    <div className={classes.HoveredArrow}></div>
                  </Link>
                </div>
                <img className={classes.gridImg} src={portfolioImage2} alt={'Лендинг-пейдж'} title={'Портфолио 2'}/>
              </div>

              <div className={`${classes.gridItem} ${classes.gridItem3}`}>
                <div className={classes.HoveredBlock}>
                  <Link to='/portfolio'>
                    <h3 className={classes.HoveredTitle}>{'Портфолио 3'}</h3>
                    <p className={classes.HoveredType}>{'Корпоративный сайт'}</p>
                    <div className={classes.HoveredArrow}></div>
                  </Link>
                </div>
                <img className={classes.gridImg} src={portfolioImage3} alt={'Корпоративный сайт'} title={'Портфолио 3'}/>
              </div>

              <div className={`${classes.gridItem} ${classes.gridItem4}`}>
                <div className={classes.HoveredBlock}>
                  <Link to='/portfolio'>
                    <h3 className={classes.HoveredTitle}>{'Портфолио 4'}</h3>
                    <p className={classes.HoveredType}>{'Корпоративный сайт'}</p>
                    <div className={classes.HoveredArrow}></div>
                  </Link>
                </div>
                <img className={classes.gridImg} src={portfolioImage3} alt={'Корпоративный сайт'} title={'Портфолио 4'}/>
              </div>

              <div className={`${classes.gridItem} ${classes.gridItem5}`}>
                <div className={classes.HoveredBlock}>
                  <Link to='/portfolio'>
                    <h3 className={classes.HoveredTitle}>{'Портфолио 5'}</h3>
                    <p className={classes.HoveredType}>{'Корпоративный сайт'}</p>
                    <div className={classes.HoveredArrow}></div>
                  </Link>
                </div>
                <img className={classes.gridImg} src={portfolioImage3} alt={'Корпоративный сайт'} title={'Портфолио 5'}/>
              </div>

              <div className={`${classes.gridItem} ${classes.gridItem6}`}>
                <div className={classes.LastBlock}>
                  <Link to='/portfolio' className={classes.LastBlockLink}>
                    <span>Больше фото</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default BrandingPortfolio