import React from "react";
import classes from './LastNews.module.scss';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Icon from '@material-ui/core/Icon';
import {Link} from 'react-router-dom';
import {NewsListArray} from '../BlogArray';
import {ButtonLink} from "../UI/ButtonLink";
import Fade from 'react-reveal/Fade'

function LastNews() {
  const Posts = NewsListArray.filter(({id}) => id >= NewsListArray.length-3).map(({id, postPath, image, title, blogCategory, dateAdded, description, views}, index) => {
    return (
      <Grid item container sm={4} xs={12} direction="column" key={index} className={classes.NewsItem}>
        <Fade up>
          <img className={classes.Image} src={image} alt=""/>
          <Link to={`/news/${postPath}`} className={classes.LinkToPost}>
            <h3 className={classes.PostTitle}>{title}</h3>
          </Link>
          <p className={classes.CategoryDate}>{blogCategory} | {dateAdded}</p>
          <p className={classes.Description}>{
            description.length > 100 ? description.slice(0,96) + ' ...' : description
          }</p>
          <div className={classes.ViewsAndGo}>
            <p className={classes.Views}><Icon>visibility</Icon>{views}</p>
            <Link to={`/news/${postPath}`}>
              <span className={classes.Go}></span>
            </Link>
          </div>
        </Fade>
      </Grid>
    )
  });

  return (
    <section className={classes.LastNews}>
      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>Популярные статьи</h2>
        <div className={classes.News}>
          <Grid container className={classes.NewsBox}>
            {Posts}
          </Grid>
        </div>
        <div className={classes.LastNewsBtn}>
          <ButtonLink classNames={classes.LastNewsButton} path={'/news'} title={'Все статьи'}/>
        </div>
      </Container>
    </section>
  )
}

export default LastNews