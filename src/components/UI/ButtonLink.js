import React from "react";
import classes from "./ButtonLink.module.scss";
import {Link} from "react-router-dom";
import RefreshIcon from '@material-ui/icons/Refresh';

const ButtonLink = ({path, title, classNames}) => {
  return (
    <Link className={`${classes.ButtonLink} ${classNames ? classNames : ''}`} to={path}>{title}</Link>
  )
}

const OrderButton = ({title, classNames, onClick}) => {
  return (
    <button className={`${classes.OrderButton} ${classNames ? classNames : ''}`} onClick={onClick}>{title}</button>
  )
}

const PricesButton = ({path, title, classNames}) => {
  return (
    <Link className={`${classes.PricesButton} ${classNames ? classNames : ''}`} to={path}><span>{title}</span></Link>
  )
}

const ButtonLoadMore = ({title, handleClick}) => {
  return (
    <button className={classes.ButtonLoadMore} onClick={handleClick}><RefreshIcon className={classes.RefreshIcon} /> {title}</button>
  )
}
export {ButtonLink, OrderButton, PricesButton, ButtonLoadMore}