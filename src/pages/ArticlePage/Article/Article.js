import React from "react";
import classes from "./Article.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ArticlesContent from "./ArticlesContent"
import {NewsListArray} from "../../../components/BlogArray";
import {ButtonLink} from "../../../components/UI/ButtonLink";
import LastNews from "../../../components/LastNews";
import Fade from "react-reveal/Fade";
import {Link} from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import {Hidden} from "@material-ui/core";

function Article() {
  const {content, id} = ArticlesContent.find(post => '/news/'+post.id === window.location.pathname);
  const items = content.map(item => {
    item = item.trim();
    if(item.startsWith('<img src="') && item.endsWith('" />')) {
      let slicedItem = item.slice(10,-4);
      return (<img className={classes.Image} src={`${slicedItem}`} alt="" />)
    }
    if(item.startsWith('<h2>') && item.endsWith('</h2>')) {
      let slicedItem = item.slice(4,-5);
      return (<h2 className={classes.Head2}>{slicedItem}</h2>)
    }
    if(item.startsWith('<h3>') && item.endsWith('</h3>')) {
      let slicedItem = item.slice(4,-5);
      return (<h3 className={classes.Head3}>{slicedItem}</h3>)
    }
    if(item.startsWith('<h4>') && item.endsWith('</h4>')) {
      let slicedItem = item.slice(4,-5);
      return (<h4 className={classes.Head4}>{slicedItem}</h4>)
    }
    if(item.startsWith('<p>') && item.endsWith('</p>')) {
      let slicedItem = item.slice(3,-4);
      return (<p className={classes.Paragraph}>{slicedItem}</p>)
    }
    if(item.startsWith('<ul>') && item.endsWith('</ul>')) {
      let slicedItem = item.trim().slice(4,-5);
      let posStartArr = [];
      let posEndArr = [];
      let liItems = [];
      let posStart = -1;
      let posEnd = -1;
      while ((posStart = slicedItem.indexOf('<li>', posStart + 1)) !== -1) {
        posStartArr.push(posStart-1);
      }
      while ((posEnd = slicedItem.indexOf('</li>', posEnd + 1)) !== -1) {
        posEndArr.push(posEnd-1);
      }
      if(posStartArr.length > 0 && posEndArr.length > 0){
        for(let i = 0; i < posStartArr.length && i < posEndArr.length; i++){
          liItems.push(slicedItem.trim().slice(posStartArr[i],posEndArr[i]));
        };
      }

      return (
        <ul className={classes.UList}>
          {liItems.map(item => <li className={classes.LItem}>{item.slice(4)}</li>)}
        </ul>
      )
    }
    if(item.startsWith('<ol>') && item.endsWith('</ol>')) {
      let slicedItem = item.trim().slice(4,-5);
      let posStartArr = [];
      let posEndArr = [];
      let liItems = [];
      let posStart = -1;
      let posEnd = -1;
      while ((posStart = slicedItem.indexOf('<li>', posStart + 1)) !== -1) {
        posStartArr.push(posStart-1);
      }
      while ((posEnd = slicedItem.indexOf('</li>', posEnd + 1)) !== -1) {
        posEndArr.push(posEnd-1);
      }
      if(posStartArr.length > 0 && posEndArr.length > 0){
        for(let i = 0; i < posStartArr.length && i < posEndArr.length; i++){
          liItems.push(slicedItem.trim().slice(posStartArr[i],posEndArr[i]));
        };
        console.log(liItems);
      }

      return (
        <ol className={classes.OList}>
          {liItems.map(item => <li className={classes.LItem}>{item.slice(4)}</li>)}
        </ol>
      )
    }
    return (<p className={classes.Paragraph}>{item}</p>)
  })
  const TagsItem = NewsListArray.find(item => item.postPath === id);
  const TagsButtons = TagsItem.tags.map((tag, index) => (
      <button
        key={index}
        value={tag}
        className={classes.Tag}
      >
        {`#${tag}`}
      </button>
    )
  );

  return(
    <section className={classes.Article}>
      <Container fixed>
        <Grid container>
          <Grid sm={9} className={classes.LeftColumn}>
            <div className={classes.Content}>
              {items}
            </div>
            <div className={classes.TagsBox}>
              {TagsButtons}
            </div>
            <div className={classes.GoToNews}>
              <ButtonLink title={'Все новости'} path={'/news'} classNames={classes.GoToNewsBtn} />
            </div>
          </Grid>
          <Grid sm={3} className={classes.RightColumn}>
            <Hidden only="xs">
            <Grid container className={classes.AsideRight}>
              {NewsListArray.filter(({id}) => id >= NewsListArray.length-3).map(({id, postPath, image, title, blogCategory, dateAdded, description, views}, index) => {
                return (
                <Grid item container sm={12} xs={12} direction="column" key={index} className={classes.NewsItem}>
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
              })}
            </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Article