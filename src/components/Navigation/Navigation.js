import React from 'react';
import classes from './Navigation.module.scss';
import {Link} from "react-router-dom";
import DataArray from "../DataArray";

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from "@material-ui/core/Grid";
import {Link as SocialLink} from "@material-ui/core";
import menuBg from '../../assets/img/menu-bg.jpg';
import {MobileBehanceIcon, MobileDribbleIcon, MobileFbIcon, MobileInstaIcon, MobileLinkedIcon} from "../Icons";
import Fade from 'react-reveal/Fade'

const useStyles = makeStyles({
  list: {
    width: '100%',
    padding: 40,
    '@media (max-width: 768px)': {
      padding: 0
    }
  },
  paper: {
    width: '100vw',
    height: '100vh',
    boxSizing: 'border-box',
    background: `url(${menuBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100vw 100vh',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 100,
    '@media (max-width: 768px)': {
      padding: '120px 16px 16px 16px',
      justifyContent: "flex-start"
    }
  },
  backdrop: {
    backgroundColor: 'transparent',
  },
});

function Navigation({toggleDrawer, isOpen}) {

  const newLinks = DataArray.map(({id, name, label, path, parent, children, headdingtitle}) => {
    return {id, name, label, path, parent, children, headdingtitle};
  });

  const classesnames = useStyles();

  return (
    <React.Fragment key="left">
      <Drawer
        open={isOpen}
        elevation={1}
        anchor={'right'}
        onClose={toggleDrawer(false)}
        classes={{paper: classesnames.paper, root: classesnames.backdrop,}}
        ModalProps={{hideBackdrop: true}}
      >
        <Grid
          container
          className={classesnames.list}
          role="presentation"
          // onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Grid item container sm={12}>
            <Grid item container sm={12} xs={12} className={classes.LinksTop}>
              {newLinks.map(({id, name, label, path, parent, children, headdingtitle}, index) => {
                let activeLink = (window.location.pathname === path) ? classes.active : '';
                if (id <= 8) {
                  return (
                    <Grid item sm={4} xs={12} key={index} className={classes.MenuLinks}>
                      <Fade right duration={400} delay={110+(id * 110)}>
                        <Link
                          to={path}
                          label={label}
                          className={`${classes.Link} ${id > 4 ? classes.InfoLinks: ''} ${activeLink}`}
                          onClick={activeLink ? toggleDrawer(false) : null}
                        >
                          <span>{label}</span>
                        </Link>
                      </Fade>
                    </Grid>
                  );
                }
              })}
              <Grid item container xs={12} className={classes.MobileSocialGrid}>
                <SocialLink className={classes.MobileSocialLink} to="https://www.instagram.com/16.web/">
                  <MobileInstaIcon width="23" height="23" viewBox="0 0 23 23" />
                </SocialLink>
                <SocialLink className={classes.MobileSocialLink} to="https://www.facebook.com/16.web">
                  <MobileFbIcon width="11" height="23" viewBox="0 0 11 23" />
                </SocialLink>
                <SocialLink className={classes.MobileSocialLink} to="#">
                  <MobileLinkedIcon width="23" height="23" viewBox="0 0 23 23" />
                </SocialLink>
                <SocialLink className={classes.MobileSocialLink} to="https://www.behance.net/16web">
                  <MobileBehanceIcon width="31" height="19" viewBox="0 0 31 19" />
                </SocialLink>
                <SocialLink className={classes.MobileSocialLink} to="https://dribbble.com/16web">
                  <MobileDribbleIcon width="27" height="27" viewBox="0 0 27 27" />
                </SocialLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Drawer>
    </React.Fragment>
  );

}

export default Navigation
