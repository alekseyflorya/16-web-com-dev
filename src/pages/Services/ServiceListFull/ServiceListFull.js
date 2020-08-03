import React from "react";
import classes from './ServiceListFull.module.scss';
import {Link} from 'react-router-dom';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

export default function ServiceListFull() {
  return (
    <section className={classes.ServiceListFull}>
      <Container fixed className={classes.Container}>
        <div className={classes.Cards}>
          <Grid container justify="space-between">
            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link className={classes.CardLink} to="/services/sitecreating">
                  <h3 className={classes.CardName}>Создание сайтов</h3>
                  <p className={classes.CardText}>Профессиональная разработа сайтов, которая позволяет выгодно и эффектно представить любую услугу.</p>
                </Link>
                <SubCategoriesLinks subCategories={subCategoriesLinksData} parentName={'sitecreating'}/>
              </div>
            </Grid>
            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link className={classes.CardLink} to="/services/webdesign">
                  <h3 className={classes.CardName}>Веб-дизайн</h3>
                  <p className={classes.CardText}>Современные и эффективные решения в плане композиции, типографики, цветоведения и юзабилити.</p>
                </Link>
                <SubCategoriesLinks subCategories={subCategoriesLinksData} parentName={'webdesign'}/>
              </div>
            </Grid>
            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link className={classes.CardLink} to="/services/internetmarketing">
                  <h3 className={classes.CardName}>Интернет - маркетинг</h3>
                  <p className={classes.CardText}>Максимальная востребованость бренда и вывод в топ результатов поисковых систем.</p>
                </Link>
                <SubCategoriesLinks subCategories={subCategoriesLinksData} parentName={'internetmarketing'}/>
              </div>
            </Grid>
            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link className={classes.CardLink} to="/services/qatesting">
                  <h3 className={classes.CardName}>QA</h3>
                  <p className={classes.CardText}>Проверка корректности работы сайта, соответствие актуальным стандартам и требованиям.</p>
                </Link>
              </div>
            </Grid>
            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link className={classes.CardLink} to="/services/branding">
                  <h3 className={classes.CardName}>Брендинг</h3>
                  <p className={classes.CardText}>Современные и эффективные решения в плане композиции, типографики, цветоведения и юзабилити.</p>
                </Link>
              </div>
            </Grid>
            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link className={classes.CardLink} to="/services/photography">
                  <h3 className={classes.CardName}>Фотосьемка</h3>
                  <p className={classes.CardText}>Максимальная востребованость бренда и вывод в топ результатов поисковых систем.</p>
                </Link>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  )
}

const subCategoriesLinksData = [
  {id: 0, title: 'Лендинг', path: '/services/sitecreating/landingpage', parent: 'sitecreating'},
  {id: 1, title: 'Сайт-визитка', path: '/services/sitecreating/businesscardsite', parent: 'sitecreating'},
  {id: 2, title: 'Интернет-магазин', path: '/services/sitecreating/onlinestore', parent: 'sitecreating'},
  {id: 3, title: 'Корпоративный сайт', path: '/services/sitecreating/corporatesite', parent: 'sitecreating'},
  {id: 4, title: 'Уникальные решения', path: '/services/sitecreating/uniqueservices', parent: 'sitecreating'},
  {id: 5, title: 'Дизайн лендинга', path: '/services/webdesign/landingdesign', parent: 'webdesign'},
  {id: 6, title: 'Дизайн сайта', path: '/services/webdesign/sitedesign', parent: 'webdesign'},
  {id: 7, title: 'Прототип сайта', path: '/services/webdesign/siteprototype', parent: 'webdesign'},
  {id: 8, title: 'SEO', path: '/services/internetmarketing/seo', parent: 'internetmarketing'},
  {id: 9, title: 'PPC', path: '/services/internetmarketing/ppc', parent: 'internetmarketing'},
  {id: 10, title: 'SMM', path: '/services/internetmarketing/smm', parent: 'internetmarketing'},
  {id: 11, title: 'E-mail маркетинг', path: '/services/internetmarketing/email-marketing', parent: 'internetmarketing'}
  ];

function SubCategoriesLinks({subCategories, parentName}) {

  const subCategoriesFiltered = subCategories.filter(({parent}) => parentName === parent)

  const subCategoriesLinks = subCategoriesFiltered.map(({id, path, title}) => {
    return (
      <li className={classes.SubCategoriesItem} key={`subCategoriesLinksData_${id}`}>
        <Link to={path} className={classes.SubCategoriesLink}>{title}</Link>
      </li>
    )
  })

  return (
    <ul className={classes.SubCategoriesLinks}>
      {subCategoriesLinks}
    </ul>
  )
}
