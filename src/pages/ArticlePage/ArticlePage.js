import React from "react";
import classes from "./ArticlePage.module.scss"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Article from "./Article";

function ArticlePage({item}) {

  return (
    <div className={classes.ArticlePage}>
      <Header />
      <Article item={item} />
      <Footer />
    </div>
  )
}

export default ArticlePage