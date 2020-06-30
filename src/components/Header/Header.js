import React from 'react';
import classes from './Header.module.scss';
import Navigation from "../Navigation";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import Grid from "@material-ui/core/Grid";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import DataArray from "../DataArray";

import {
  BurgerIcon,
  MenuCloseIcon,
  LogoIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  ViberIcon,
  MessengerIcon,
  TelegramIcon
} from '../Icons';
import Box from "@material-ui/core/Box";


export default function Header() {

  const {headdingtitle, description,bgimage } = DataArray.find(page => page.path === window.location.pathname);

  const [state, setState] = React.useState({
    navOpen: false,
    fabOpen: false,
    servicesOpen: false,
    portfolioOpen: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, navOpen: open });
  };

  const toggleFab = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, fabOpen: !open });
  }

  const handleClickAway = () => {
    setState({ ...state, fabOpen: false });
  }

  const toggleServicesSubmenu = () => {
    let opened = state.servicesOpen;
    setState({ ...state, servicesOpen: !opened});
    console.log(state.servicesOpen);
  }
  const togglePortfolioSubmenu = () => {
    let opened = state.portfolioOpen;
    setState({ ...state, portfolioOpen: !opened});
    console.log(state.portfolioOpen);
  }

  return (
    <header className={classes.Header}>
      <Grid container>

        <Grid
          item
          container
          direction="row"
          justify="flex-end"
          classes={{root: classes.ColumnLeft}}
          style={{background: `url(${bgimage})`, paddingTop: 120, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',}}
        >
          <Grid item container sm={11} style={{marginBottom: -80}}>
            <Grid item container sm={9} justify="flex-start" alignItems="center"
                  style={{
                    border: '5px solid #0DF0FF',
                    paddingTop: 100,
                    paddingBottom: 100,
                    borderBottom: 0,
                    background: 'rgba(41,37,37,.4)',
                    backdropFilter: 'blur(4px)',
                    paddingLeft: '14%',
                  }}>
              <Box style={{maxWidth: 510}} className={classes.TitleDescriptionBox}>
                <h1 className={classes.HeaddingTitle}>{headdingtitle}</h1>
                <p className={classes.HeaddingDescription}>{description}</p>
              </Box>
            </Grid>
            <Grid item sm={3} />
            <Grid item sm={9} container alignItems="center" style={{backgroundColor: '#0DF0FF', paddingLeft: '14%',}}>
              <ButtonGroup classes={{root: classes.SocialButtons}}>
                <Button classes={{root: classes.SocialButton}}>
                  <InstagramIcon width="24" height="24" viewBox="0 0 24 24" />
                </Button>
                <Button classes={{root: classes.SocialButton}}>
                  <FacebookIcon width="10" height="24" viewBox="0 0 10 24" />
                </Button>
                <Button classes={{root: classes.SocialButton}}>
                  <LinkedInIcon width="24" height="24" viewBox="0 0 24 24" />
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item sm={3}>
              <Button classes={{root: classes.OrderProjectRoot, label :classes.OrderProjectLabel, text :classes.OrderProjectText}}>
                {'Заказать проект'}
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container classes={{root: classes.columnRight}}>

          <Grid item classes={{root: classes.LogoRoot}}>
            <LogoIcon classes={{root: classes.LogoIcon}} width="85" height="54" viewBox="0 0 85 54"
            />
          </Grid>

          <Grid item className={classes.MenuButton}>
            <button onClick={toggleDrawer(!(state.navOpen))} className={classes.BurgerBtn}>
              <span className={state.navOpen ? classes.BurgerActive : classes.Burger}></span>
            </button>

          </Grid>

          <Grid item style={{width: 66, height: 0, }}>
          </Grid>

          <ClickAwayListener onClickAway={handleClickAway}>
            <Grid className={classes.Fab} classes={{root: classes.fabGridRoot}}>
              {state.fabOpen ? (
                <>
                  <Fab color="primary">
                    <MessengerIcon width="23" height="23" viewBox="0 0 23 23" />
                  </Fab>
                  <Fab color="primary">
                    <ViberIcon width="23" height="23" viewBox="0 0 23 23" />
                  </Fab>
                  <Fab color="primary">
                    <TelegramIcon width="23" height="23" viewBox="0 0 23 23" />
                  </Fab>
                </>
              ) : null}
              <Fab className={`${classes.fabRoot} ${classes.fab}`}
                   classes={{root: classes.fabRoot}}
                   onClick={toggleFab(state.fabOpen)}
              >
                <AddIcon />
              </Fab>
            </Grid>
          </ClickAwayListener>
        </Grid>
      </Grid>
      <Navigation
        toggleDrawer={toggleDrawer}
        isOpen={state.navOpen}
        toggleServicesSubmenu={toggleServicesSubmenu}
        togglePortfolioSubmenu={togglePortfolioSubmenu}
        servicesOpen={state.servicesOpen}
        portfolioOpen={state.portfolioOpen}
      />
    </header>
  )
}
