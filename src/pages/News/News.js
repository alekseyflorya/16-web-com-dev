import React from 'react';
import classes from './News.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NewsList from "./NewsList";
import LastPost from "./LastPost";
import {Hidden} from "@material-ui/core";
import {NewsListArray} from "../../components/BlogArray";

export default function News(){
  const tagsList = NewsListArray.map(({tags}) => tags);
  const tagsConcat = [];
  const tags = tagsConcat.concat(...tagsList);

  const [sortedTag, setSortedTag] = React.useState(null);

  const sortByTag = (tag) => {
    setSortedTag(tag);
  }

  return (
    <div className={classes.NewsPage}>
      <Header />
      <Hidden only="xs">
        <LastPost tags={tags} sortByTag={sortByTag} />
      </Hidden>
      <NewsList sortedTag={sortedTag} />
      <Hidden smUp>
        <LastPost tags={tags} sortByTag={sortByTag} />
      </Hidden>
      <Footer />
    </div>
  )
}