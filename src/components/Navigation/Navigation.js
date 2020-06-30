import React from 'react';
import classes from './Navigation.module.scss';
import {Link} from "react-router-dom";
import DataArray from "../DataArray";

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from "@material-ui/core/Grid";
import menuBg from '../../assets/img/menu-bg.jpg';

const useStyles = makeStyles({
  list: {
    width: '100%',
  },
  paper: {
    width: '100vw',
    height: '100vh',
    background: `url(${menuBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100vw 100vh',
    display: "flex",
    alignItems: "center",
    padding: 100
  },
  backdrop: {
    backgroundColor: 'transparent',
  },
});

function Navigation({toggleDrawer, isOpen, togglePortfolioSubmenu, toggleServicesSubmenu, servicesOpen, portfolioOpen}) {

  const newLinks = DataArray.map(({id, name, label, path, parent, children, headdingtitle}) => {
    return {id, name, label, path, parent, children, headdingtitle};
  });

  const classesnames = useStyles();

  const ButtonPlus = (path) => {
    switch (path) {
      case '/portfolio':
        return (
          <button className={classes.ButtonPlus} onClick={togglePortfolioSubmenu}>
            {portfolioOpen ? '-' : '+'}
          </button>
        )
        break;
      case '/services':
        return (
          <button className={classes.ButtonPlus} onClick={toggleServicesSubmenu}>
            {servicesOpen ? '-' : '+'}
        </button>
        )
        break;
      default:
        return null
    }
  }

  return (
    <React.Fragment key="left">
      <Drawer
        open={isOpen}
        elevation={1}
        onClose={toggleDrawer(false)}
        classes={{paper: classesnames.paper, root: classesnames.backdrop,}}
        ModalProps={{hideBackdrop: true}}
      >
        <Grid
          container
          spacing={2}
          className={classesnames.list}
          role="presentation"
          // onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Grid item xs={12} sm={3}>
            <List className={classes.LinksTop}>
              {newLinks.map(({id, name, label, path, parent, children, headdingtitle}, index) => {
                let activeLink = (window.location.pathname === path) ? classes.active : '';
                if (id <= 4) {
                  return (
                    <ListItem key={index} className={classes.LinkItem}>
                      <Link
                        to={path}
                        label={label}
                        className={`${classes.Link} link-to-${name} ${activeLink}`}
                      >
                        {label}
                      </Link>
                      {ButtonPlus(path)}
                    </ListItem>
                  );
                }
                return null
              })}
            </List>
          </Grid>
          <Grid item xs={12} sm={8} container spacing={2} direction="row" >
            <Grid item xs={12} sm={6} container className={classes.LinksChildren}>
              {newLinks.map(({id, label, path, parent, children, headdingtitle}, index) => {
                let activeLink = (window.location.pathname === path) ? classes.active : '';
                if(id > 8 && parent === 'portfolio') {

                  let opened = portfolioOpen ? classes.opened: classes.closed;

                  return (
                    <Grid item key={index} xs={12} className={opened}>
                      <Link to={path} label={label} className={`${classes.Link} LinkTo${label} ${activeLink}`}>
                        {headdingtitle}
                      </Link>
                    </Grid>
                  );
                } else if (id > 8 && parent === 'services') {

                  let opened = servicesOpen ? classes.opened: classes.closed;

                  return (
                    <Grid item key={index} xs={12} className={opened}>
                      <Link to={path} label={label} className={`${classes.Link} LinkTo${label} ${activeLink}`}>
                        {headdingtitle}
                      </Link>
                    </Grid>
                  );
                } else {
                  return null
                }
              })}
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={6} spacing={2} className={classes.LinksBottom}>
            {newLinks.map(({id, label, path, parent, children, headdingtitle}, index) => {
              let activeLink = (window.location.pathname === path) ? classes.active : '';
              if(id > 4 && id <= 8) {
                return (
                  <Grid item key={index} xs={12} sm={6}>
                    <Link to={path} label={label} className={`${classes.Link} LinkTo${label} ${activeLink}`}>
                      {headdingtitle}
                    </Link>
                  </Grid>
                );
              }
              return null
            })}
          </Grid>
        </Grid>
      </Drawer>
    </React.Fragment>
  );
}

export default Navigation
