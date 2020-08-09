import React from "react";
import classes from "./PortfolioPagination.module.scss"
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import {PricesButton} from "../UI/ButtonLink";

function PortfolioPagination() {

  const prevLInk = ''
  const nextLink = ''

  return (
    <section className={classes.PortfolioPagination}>
      <Container fixed>
        <Grid container>
          <Grid item container sm />
          <Grid item container sm={6} xs={12}>
            <Grid item sm={6} className={classes.LinkBox}>
              <Link to={prevLInk} className={`${classes.Link} ${classes.PrevLInk}`} />
            </Grid>
            <Grid item sm={6} className={classes.LinkBox}>
              <Link to={prevLInk} className={`${classes.Link} ${classes.NextLink}`} />
            </Grid>
          </Grid>
          <Grid item container sm>
            <PricesButton title={'Вернуться назад'} path={'/portfolio'} />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default PortfolioPagination