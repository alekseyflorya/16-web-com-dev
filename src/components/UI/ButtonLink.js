import React from "react";
import classes from "./ButtonLink.module.scss";
import {Link} from "react-router-dom";
import RefreshIcon from '@material-ui/icons/Refresh';

const ButtonLink = ({path, title, classNames}) => {
  return (
    <Link className={`${classes.ButtonLink} ${classNames}`} to={path}>{title}</Link>
  )
}

const OrderButton = ({title, classNames}) => {
  return (
    <button className={`${classes.OrderButton} ${classNames}`}>{title}</button>
  )
}

const PricesButton = ({path, title, classNames}) => {
  return (
    <Link className={`${classes.PricesButton} ${classNames}`} to={path}><span>{title}</span></Link>
  )
}

const ButtonLoadMore = ({title, handleClick}) => {
  return (
    <button className={classes.ButtonLoadMore} onClick={handleClick}><RefreshIcon className={classes.RefreshIcon} /> {title}</button>
  )
}
export {ButtonLink, OrderButton, PricesButton, ButtonLoadMore}