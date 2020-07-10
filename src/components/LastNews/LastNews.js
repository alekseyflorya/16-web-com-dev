import React from "react";
import classes from './LastNews.module.scss';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Icon from '@material-ui/core/Icon';
import {Link} from 'react-router-dom';
import NewsData from '../NewsArray';
import {ButtonLink} from "../UI/ButtonLink";

function LastNews() {
  const Posts = NewsData.map(({id, postPath, image, title, blogCategory, dateAdded, description, views}, index) => {
    return (
      <Grid item container sm={4} xs={12} direction="column" key={index} className={classes.NewsItem}>
          <img className={classes.Image} src={image} alt=""/>
          <Link to={`/post${id}`} className={classes.LinkToPost}>
            <h3 className={classes.PostTitle}>{title}</h3>
          </Link>
          <p className={classes.CategoryDate}>{blogCategory} | {dateAdded}</p>
          <p className={classes.Description}>{
            description.length > 100 ? description.slice(0,100) + ' ...' : description
          }</p>
          <div className={classes.ViewsAndGo}>
            <p className={classes.Views}><Icon>visibility</Icon>{views}</p>
            <Link to={`/post${id}`}>
              <span className={classes.Go}></span>
            </Link>
          </div>
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
          <ButtonLink classNames={classes.LastNewsButton} path={'/blog'} title={'Все статьи'}/>
        </div>
      </Container>
    </section>
  )
}

export default LastNews