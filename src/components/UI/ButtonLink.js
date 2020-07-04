import React from "react";
import classes from "./ButtonLink.module.scss";
import {Link} from "react-router-dom";
import RefreshIcon from '@material-ui/icons/Refresh';

const ButtonLink = ({path, title}) => {
  return (
    <Link className={classes.ButtonLink} to={path}>{title}</Link>
  )
}

const OrderButton = ({title}) => {
  return (
    <button className={classes.OrderButton}>{title}</button>
  )
}

const PricesButton = ({path, title}) => {
  return (
    <Link className={classes.PricesButton} to={path}><span>{title}</span></Link>
  )
}

const ButtonLoadMore = ({title, handleClick}) => {
  return (
    <button className={classes.ButtonLoadMore} onClick={handleClick}><RefreshIcon className={classes.RefreshIcon} /> {title}</button>
  )
}
export {ButtonLink, OrderButton, PricesButton, ButtonLoadMore}