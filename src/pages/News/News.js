import React from 'react';
import classes from './News.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function News(){

  return (
    <div className={classes.NewsPage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}