import React from "react";
import classes from "./NewsList.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {NewsListArray} from "../../../components/BlogArray";
import Fade from "react-reveal/Fade";
import {Link} from "react-router-dom";
import Icon from "@material-ui/core/Icon";

function NewsList({sortedTag}) {
  const Posts = () => {
    if(sortedTag === null) {
      NewsListArray.map(({id, postPath, image, title, blogCategory, dateAdded, description, views}, index) => (
          <Grid item container sm={4} xs={12} direction="column" key={index} className={classes.NewsItem}>
            <Fade up>
              <img className={classes.Image} src={image} alt=""/>
              <Link to={`/news/${postPath}`} className={classes.LinkToPost}>
                <h3 className={classes.PostTitle}>{title}</h3>
              </Link>
              <p className={classes.CategoryDate}>{blogCategory} | {dateAdded}</p>
              <p className={classes.Description}>{
                description.length > 100 ? description.slice(0, 96) + ' ...' : description
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
      );
    } else {
      NewsListArray.filter(post => post.tags.includes(sortedTag)).map(({id, postPath, image, title, blogCategory, dateAdded, description, views}, index) => (
        <Grid item container sm={4} xs={12} direction="column" key={index} className={classes.NewsItem}>
          <Fade up>
            <img className={classes.Image} src={image} alt=""/>
            <Link to={`/news/${postPath}`} className={classes.LinkToPost}>
              <h3 className={classes.PostTitle}>{title}</h3>
            </Link>
            <p className={classes.CategoryDate}>{blogCategory} | {dateAdded}</p>
            <p className={classes.Description}>{
              description.length > 100 ? description.slice(0, 96) + ' ...' : description
            }</p>
            <div className={classes.ViewsAndGo}>
              <p className={classes.Views}><Icon>visibility</Icon>{views}</p>
              <Link to={`/news/${postPath}`}>
                <span className={classes.Go}></span>
              </Link>
            </div>
          </Fade>
        </Grid>
      ));
    }
  }

  return (
    <section className={classes.NewsList}>
      <Container fixed>
        <div className={classes.News}>
          <Grid container className={classes.NewsBox}>
            {
              (sortedTag === null) ? (
              NewsListArray.map(({id, postPath, image, title, blogCategory, dateAdded, description, views}, index) => (
              <Grid item container sm={4} xs={12} direction="column" key={index} className={classes.NewsItem}>
              <Fade up>
              <img className={classes.Image} src={image} alt=""/>
              <Link to={`/news/${postPath}`} className={classes.LinkToPost}>
              <h3 className={classes.PostTitle}>{title}</h3>
              </Link>
              <p className={classes.CategoryDate}>{blogCategory} | {dateAdded}</p>
              <p className={classes.Description}>{
              description.length > 100 ? description.slice(0, 96) + ' ...' : description
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
              )
              ) : (
              NewsListArray.filter(post => post.tags.includes(sortedTag)).map(({id, postPath, image, title, blogCategory, dateAdded, description, views}, index) => (
              <Grid item container sm={4} xs={12} direction="column" key={index} className={classes.NewsItem}>
              <Fade up>
              <img className={classes.Image} src={image} alt=""/>
              <Link to={`/news/${postPath}`} className={classes.LinkToPost}>
              <h3 className={classes.PostTitle}>{title}</h3>
              </Link>
              <p className={classes.CategoryDate}>{blogCategory} | {dateAdded}</p>
              <p className={classes.Description}>{
              description.length > 100 ? description.slice(0, 96) + ' ...' : description
            }</p>
              <div className={classes.ViewsAndGo}>
              <p className={classes.Views}><Icon>visibility</Icon>{views}</p>
              <Link to={`/news/${postPath}`}>
              <span className={classes.Go}></span>
              </Link>
              </div>
              </Fade>
              </Grid>
              ))
            )
            }
          </Grid>
        </div>
      </Container>
    </section>
  )
}

export default NewsList