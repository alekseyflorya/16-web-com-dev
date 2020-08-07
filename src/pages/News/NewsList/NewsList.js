import React from "react";
import classes from "./NewsList.module.scss"
import {BlogArray} from "../../../components/BlogArray"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {ButtonLink} from "../../../components/UI/ButtonLink";
import {NewsListArray} from "../../../components/BlogArray";
import Fade from "react-reveal/Fade";
import {Link} from "react-router-dom";
import Icon from "@material-ui/core/Icon";

function NewsList() {
  const Posts = NewsListArray.map(({id, postPath, image, title, blogCategory, dateAdded, description, views}, index) => {
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
    <section className={classes.NewsList}>
      <Container fixed>
        <div className={classes.News}>
          <Grid container className={classes.NewsBox}>
            {Posts}
          </Grid>
        </div>
        {/*<div className={classes.LastNewsBtn}>*/}
        {/*  <ButtonLink classNames={classes.LastNewsButton} path={'/blog'} title={'Все статьи'}/>*/}
        {/*</div>*/}
      </Container>
    </section>
  )
}

export default NewsList