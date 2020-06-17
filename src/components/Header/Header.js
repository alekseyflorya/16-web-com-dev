import React from 'react';
import classes from './Header.module.scss';
import Navigation from "../Navigation";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import TelegramIcon from '@material-ui/icons/Telegram';
import Grid from "@material-ui/core/Grid";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import DataArray from "../DataArray";

export default function Header() {

  const headdingTitle = DataArray.find(page => page.path == window.location.pathname);
  console.log(headdingTitle);

  const [state, setState] = React.useState({
    navOpen: false,
    fabOpen: false,
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

  return (
    <header className={classes.Header}>
      <h1>{headdingTitle.headdingtitle}</h1>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <ClickAwayListener onClickAway={handleClickAway}>
      <Grid className={classes.Fab} classes={{root: classes.fabGridRoot}}>
          {state.fabOpen ? (
            <>
              <Fab color="primary">
                <TelegramIcon />
              </Fab>
              <Fab color="primary">
                <TelegramIcon />
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
      <Navigation toggleDrawer={toggleDrawer} isOpen={state.navOpen}/>
    </header>
  )
}
