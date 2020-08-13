import React from "react";
import classes from "./LastPost.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import {Link} from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import {NewsListArray} from "../../../components/BlogArray";

function LastPost({tags, sortByTag}) {
  const {image, title, blogCategory, postPath, description, dateAdded, views} = NewsListArray[NewsListArray.length - 1];

  const changeSortedTag = (e) => {
    sortByTag(e.target.value);
  }

  const TagsButtons = tags.map((tag, index) => (
    <button
      key={index}
      value={tag}
      onClick={changeSortedTag}
      className={classes.TagsButton}
    >
      {`#${tag}`}
    </button>
  ));

  return (
    <section className={classes.LastPost}>
      <Container fixed className={classes.Container}>
        <Grid container className={classes.LastPostBlock}>
          <Grid item container sm={7} xs={false} className={classes.LastPostBox}>
            <Grid item container sm={12} xs={false} direction="column" className={classes.NewsItem}>
              <Fade up>
                <img className={classes.Image} src={image} alt=""/>
                <Link to={`/news/${postPath}`} className={classes.LinkToPost}>
                  <h3 className={classes.PostTitle}>{title}</h3>
                </Link>
                <p className={classes.CategoryDate}>{blogCategory} | {dateAdded}</p>
                <p className={classes.Description}>{
                  description.length > 100 ? description.slice(0,256) + ' ...' : description
                }</p>
                <div className={classes.ViewsAndGo}>
                  <p className={classes.Views}><Icon>visibility</Icon>{views}</p>
                  <Link to={`/news/${postPath}`}>
                    <span className={classes.Go}></span>
                  </Link>
                </div>
              </Fade>
            </Grid>
          </Grid>
          <Grid item container sm={5} xs={12} className={classes.TagsBlock}>
            <Grid item container className={classes.Tags}>
              <Grid item sm={12}>
                <h3 className={classes.TagsHeadding}>Поиск по тегам</h3>
              </Grid>
              <Grid item sm={12} className={classes.TagsButtons}>
                {TagsButtons}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default LastPost;