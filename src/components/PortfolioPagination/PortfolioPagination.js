import React from "react";
import classes from "./PortfolioPagination.module.scss"
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import {PricesButton} from "../UI/ButtonLink";
import PortfolioData from "../PortfolioArray";

function PortfolioPagination() {
  console.log(window.location.pathname)
  const idx = PortfolioData.findIndex((item) => item.path === window.location.pathname);
  console.log(idx)
  const projectsCount = PortfolioData.length;

  const prevLink = idx-1 < 0 ? PortfolioData[projectsCount-1].path : PortfolioData[idx-1].path;
  const nextLink = idx+1 >= projectsCount ? PortfolioData[0].path : PortfolioData[idx+1].path;

  return (
    <section className={classes.PortfolioPagination}>
      <Container fixed>
        <Grid container>
          <Grid item container sm />
          <Grid item container sm={6} xs={12}>
            <Grid item sm={6} className={classes.LinkBox}>
              <Link to={prevLink} className={`${classes.Link} ${classes.PrevLInk}`} />
            </Grid>
            <Grid item sm={6} className={classes.LinkBox}>
              <Link to={nextLink} className={`${classes.Link} ${classes.NextLink}`} />
            </Grid>
          </Grid>
          <Grid item container sm className={classes.BtnBox}>
            <PricesButton title={'Вернуться назад'} path={'/portfolio'} />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default PortfolioPagination