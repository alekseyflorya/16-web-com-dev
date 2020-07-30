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
                <Link className={classes.CardLink} to="/sitecreating">
                  <h3 className={classes.CardName}>Создание сайтов</h3>
                  <p className={classes.CardText}>Профессиональная разработа сайтов, которая позволяет выгодно и эффектно представить любую услугу.</p>
                </Link>
                <SubCategoriesLinks subCategories={subCategoriesLinksData} parentName={'sitecreating'}/>
              </div>
            </Grid>
            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link className={classes.CardLink} to="/webdesign">
                  <h3 className={classes.CardName}>Веб-дизайн</h3>
                  <p className={classes.CardText}>Современные и эффективные решения в плане композиции, типографики, цветоведения и юзабилити.</p>
                </Link>
                <SubCategoriesLinks subCategories={subCategoriesLinksData} parentName={'webdesign'}/>
              </div>
            </Grid>
            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link className={classes.CardLink} to="/internetmarketing">
                  <h3 className={classes.CardName}>Интернет - маркетинг</h3>
                  <p className={classes.CardText}>Максимальная востребованость бренда и вывод в топ результатов поисковых систем.</p>
                </Link>
                <SubCategoriesLinks subCategories={subCategoriesLinksData} parentName={'internetmarketing'}/>
              </div>
            </Grid>
            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link className={classes.CardLink} to="/qatesting">
                  <h3 className={classes.CardName}>QA</h3>
                  <p className={classes.CardText}>Проверка корректности работы сайта, соответствие актуальным стандартам и требованиям.</p>
                </Link>
              </div>
            </Grid>
            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link className={classes.CardLink} to="/branding">
                  <h3 className={classes.CardName}>Брендинг</h3>
                  <p className={classes.CardText}>Современные и эффективные решения в плане композиции, типографики, цветоведения и юзабилити.</p>
                </Link>
              </div>
            </Grid>
            <Grid item sm={4} className={classes.CardBox}>
              <div className={classes.Card}>
                <Link className={classes.CardLink} to="/photography">
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
  {id: 0, title: 'Лендинг', path: '/landingpage', parent: 'sitecreating'},
  {id: 1, title: 'Сайт-визитка', path: '/businesscardsite', parent: 'sitecreating'},
  {id: 2, title: 'Интернет-магазин', path: '/onlinestore', parent: 'sitecreating'},
  {id: 3, title: 'Корпоративный сайт', path: '/corporatesite', parent: 'sitecreating'},
  {id: 4, title: 'Уникальные решения', path: '/uniqueservices', parent: 'sitecreating'},
  {id: 5, title: 'Дизайн лендинга', path: '/landingdesign', parent: 'webdesign'},
  {id: 6, title: 'Дизайн сайта', path: '/sitedesign', parent: 'webdesign'},
  {id: 7, title: 'Прототип сайта', path: '/siteprototype', parent: 'webdesign'},
  {id: 8, title: 'SEO', path: '/seo', parent: 'internetmarketing'},
  {id: 9, title: 'PPC', path: '/ppc', parent: 'internetmarketing'},
  {id: 10, title: 'SMM', path: '/smm', parent: 'internetmarketing'},
  {id: 11, title: 'E-mail маркетинг', path: '/email-marketing', parent: 'internetmarketing'}
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
