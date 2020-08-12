import React from "react";
import classes from "./Article.module.scss"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ArticlesContent from "./ArticlesContent"

function Article() {
  const {content} = ArticlesContent.find(post => '/news/'+post.id === window.location.pathname);
  const items = content.map(item => {
    item = item.trim();
    if(item.startsWith('<img src="') && item.endsWith('" />')) {
      let slicedItem = item.slice(10,-4);
      return (<img className={classes.Image} src={`${slicedItem}`}/>)
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
      if(posStartArr.length > 1 && posEndArr.length > 1){
        for(let i = 0; i < posStartArr.length && i < posEndArr.length; i++){
          liItems.push(slicedItem.trim().slice(posStartArr[i],posEndArr[i]));
        };
        console.log(liItems);
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
      if(posStartArr.length > 1 && posEndArr.length > 1){
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

  return(
    <section className={classes.Article}>
      <Container fixed>
        <Grid container>
          <Grid sm={9} className={classes.LeftColumn}>
            <main className={classes.Content}>
              {items}
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