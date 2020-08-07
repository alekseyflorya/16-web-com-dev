import React from "react";
import classes from "./Sitemap.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SitemapArray from "../../components/SitemapArray";
import {Link} from "react-router-dom"
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Sitemap() {

  const sitemapList = SitemapArray.map(({name, path, children}) => {
    if (children) {
      return (
        <>
          <li key={path} className={`${classes.ListItem} ${classes.IsParent}`}>
            <Link to={path} className={`${classes.Link} ${classes.HasChild} ${classes.Child}`}>{name}</Link>
          </li>
          <li className={classes.ListBox}>
            <ul className={classes.List}>
              {children.map(({name, path, children}) => {
                if (children) {
                  return (
                    <>
                      <li key={path} className={`${classes.ListItem} ${classes.IsParent}`}>
                        <Link to={path} className={`${classes.Link} ${classes.HasChild} ${classes.Child}`}>{name}</Link>
                      </li>
                      <li className={classes.ListBox}>
                        <ul className={classes.List}>
                          {children.map(({name, path, children}) => {
                            if (children) {
                              return (
                                <>
                                  <li key={path} className={`${classes.ListItem} ${classes.IsParent}`}>
                                    <Link to={path} className={`${classes.Link} ${classes.HasChild} ${classes.Child}`}>{name}</Link>
                                  </li>
                                  <li className={classes.ListBox}>
                                    <ul className={classes.List}>
                                      {children.map(({name, path, children}) => (
                                        <li key={path} className={classes.ListItem}>
                                          <Link to={path} className={`${classes.Link} ${classes.Child}`}>{name}</Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </li>
                                </>
                              )
                            }
                            return (
                              <li key={path} className={classes.ListItem}>
                                <Link to={path} className={`${classes.Link} ${classes.Child}`}>{name}</Link>
                              </li>
                            )
                          })}
                        </ul>
                      </li>
                    </>
                  )
                }
                return (
                  <li key={path} className={classes.ListItem}>
                    <Link to={path} className={classes.Link}>{name}</Link>
                  </li>
                )
              })}
            </ul>
          </li>
        </>
      )
    }
    return (
      <li key={path} className={classes.ListItem}>
        <Link to={path} className={classes.Link}>{name}</Link>
      </li>
    )
  })

  return(
    <div className={classes.Sitemap}>
      <Header notHeader />
      <section>
        <Container fixed>
          <h1 className={classes.Headding}>Карта сайта</h1>
          <Grid container>
            <ul className={`${classes.List} ${classes.MainList}`}>
              {sitemapList}
            </ul>
          </Grid>
        </Container>
      </section>
      <Footer />
    </div>
  )
}