import React from 'react';
import classes from './News.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NewsList from "./NewsList";

export default function News(){

  return (
    <div className={classes.NewsPage}>
      <Header />
      <NewsList />
      <Footer />
    </div>
  )
}