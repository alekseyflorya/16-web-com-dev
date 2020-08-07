import React from "react";
import classes from "./Article.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ArticlesContent from "./ArticlesContent"

function Article({item}) {
  const {content} = ArticlesContent.find(post => '/news/'+post.id === window.location.pathname);
  return(
    <section className={classes.Article}>
      <Container fixed>
        <Grid container>
          <Grid sm={9} className={classes.LeftColumn}>
            <main className={classes.Content}>
              {content}
            </main>
          </Grid>
          <Grid sm={3} className={classes.RightColumn}>
            <aside className={classes.AsideRight}>

            </aside>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Article