import React, {useEffect, useState} from 'react';
import classes from './Header.module.scss';
import Navigation from "../Navigation";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import FabComponent from "../FabComponent";
import Grid from "@material-ui/core/Grid";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import DataArray from "../DataArray";

import {
  LogoIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  LogoMobileIcon
} from '../Icons';
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import TextField from '@material-ui/core/TextField';
import Breef from '../Breef';
import {Link} from "react-router-dom";
import Footer from "../Footer";

export default function Header({notFound}) {
  const {headdingtitle, description, bgimage} = DataArray.find(page => page.path === window.location.pathname);

  const [state, setState] = useState({
    navOpen: false,
    fabOpen: false,
    servicesOpen: false,
    portfolioOpen: false
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, navOpen: open });
  };

  const handleClickAway = () => {
    setState({ ...state, fabOpen: false });
  }

  const toggleServicesSubmenu = () => {
    let portfolioOpened;
    if (state.portfolioOpen) {
      portfolioOpened = false;
    }
    let opened = state.servicesOpen;
    setState({ ...state, portfolioOpen: portfolioOpened, servicesOpen: !opened});
    console.log(state.servicesOpen);
  }
  const togglePortfolioSubmenu = () => {
    let servicesOpened;
    if (state.servicesOpen) {
      servicesOpened = false;
    }
    let opened = state.portfolioOpen;
    setState({ ...state, servicesOpen: servicesOpened, portfolioOpen: !opened});
    console.log(state.portfolioOpen);
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [window.location.pathname]);

  return (
    <>
    <header className={classes.Header}>
      <Grid container>
        <Grid
          item
          container
          direction="row"
          justify="flex-end"
          className={classes.ColumnLeftBox}
          classes={{root: classes.ColumnLeft}}
          style={{
            background: `url(${bgimage})`,
            paddingTop: (window.location.pathname === '/contact') ? 0 : 120,

          }}
        >
          { (window.location.pathname === '/contact') ? (
              <>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1374.269215992399!2d30.704888958276687!3d46.45784194252399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6323a1dba5ba5%3A0x6bf07c1e3d4e0854!2z0YPQuy4g0JHQsNC70LrQvtCy0YHQutCw0Y8sIDEzMCwg0J7QtNC10YHRgdCwLCDQntC00LXRgdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2NTAwMA!5e0!3m2!1sru!2sua!4v1593761397146!5m2!1sru!2sua"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  className={classes.GoogleMapFrame}
                  title="GoogleMap"
                ></iframe>
                <Grid container className={classes.ContactsBlock} direction="column" justify="space-between">
                  <Grid item container justify="center">
                    <Grid item className={classes.ContactsItems}>
                      <h3 className={classes.ContactsTitle}>16-web.com</h3>
                      <div className={classes.ContactsItem}>
                        <h4 className={classes.ContactsLabel}>Email</h4>
                        <a className={classes.ContactsText} href="mailto:16webmail@gmail.com">16webmail@gmail.com</a>
                      </div>
                      <div className={classes.ContactsItem}>
                        <h4 className={classes.ContactsLabel}>Телефон</h4>
                        <a className={classes.ContactsText} href="tel:+380951001616">+38 095 100 16 16</a>
                      </div>
                      <div className={classes.ContactsItem}>
                        <h4 className={classes.ContactsLabel}>Адрес</h4>
                        <address className={classes.ContactsText}>г.Одесса, ул.Балковская 130</address>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid item container className={classes.ContactsBtnBlock}>
                    <button className={classes.ContactsBtn} onClick={handleClickOpen}>
                      <span>Написать нам</span>
                    </button>
                    <Dialog onClose={handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={open}
                            classes={{root: classes.ContactFormBlock,paper: classes.CallBackBox}}
                            PaperProps={{square: true}}
                    >
                      <Grid container style={{padding: 35}}>
                        <Grid item container justify="flex-end">
                          {open ? (
                            <Grid item>
                              <IconButton aria-label="close" onClick={handleClose} style={{padding: 0}}>
                                <CloseIcon />
                              </IconButton>
                            </Grid>
                          ) : null}
                        </Grid>
                        <Grid item container>
                          <p className={classes.CallBackText}>Оставьте свои контакты и мы с вами обязательно свяжемся!</p>
                          <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Имя"
                            type="text"
                            fullWidth
                            autoComplete="off"
                          />
                          <TextField
                            margin="dense"
                            id="phone"
                            label="Телефон"
                            type="tel"
                            fullWidth
                            autoComplete="off"
                          />
                        </Grid>
                        <Grid item container>
                          <button className={classes.CallBackBtn} onClick={handleClose}>
                            Свяжитесь со мной
                          </button>
                        </Grid>
                      </Grid>
                    </Dialog>
                  </Grid>
                </Grid>
              </>
            ):''}
            {(window.location.pathname === '/not-found') ? (
              notFound
            ) : '' }
            {(window.location.pathname !== '/not-found' && window.location.pathname !== '/contact') ? (
          <Grid item container sm={11} xs={12} style={{marginBottom: -80}}>
            <Grid item container sm={9} sx={12} justify="center" alignItems="center" className={classes.HeaddingBox}
            >
              <Box style={{maxWidth: 575}} className={classes.TitleDescriptionBox}>
                <h1 className={classes.HeaddingTitle}>{headdingtitle}</h1>
                <p className={classes.HeaddingDescription}>{description}</p>
              </Box>
            </Grid>
            <Grid item sm={3} xs={false}/>
            <Grid item sm={9} xs={4} container alignItems="center" style={{backgroundColor: '#0DF0FF', paddingLeft: '14%',}}>
              <ButtonGroup classes={{root: classes.SocialButtons}}>
                <Button classes={{root: classes.SocialButton}}>
                  <InstagramIcon className={classes.InstagramIcon} width="24" height="24" viewBox="0 0 24 24" />
                </Button>
                <Button classes={{root: classes.SocialButton}}>
                  <FacebookIcon width="10" height="24" viewBox="0 0 10 24" />
                </Button>
                <Button classes={{root: classes.SocialButton}}>
                  <LinkedInIcon width="24" height="24" viewBox="0 0 24 24" />
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item sm={3} xs={8}>
              <Breef />
            </Grid>
          </Grid>
            ):''}
        </Grid>
        <Grid item container classes={{root: classes.columnRight}}>
          <Grid item classes={{root: classes.LogoRoot}}>
            {
              window.location.pathname === '/' ?(
                <>
                <LogoIcon classes={{root: classes.LogoIcon}} width="85" height="54" viewBox="0 0 85 54"/>
                <LogoMobileIcon classes={{root: classes.LogoMobileIcon}} width="55" height="32" viewBox="0 0 55 32"/>
                </>
              ) : (
                <Link to={'/'}>
                  <LogoIcon classes={{root: classes.LogoIcon}} width="85" height="54" viewBox="0 0 85 54"/>
                  <LogoMobileIcon classes={{root: classes.LogoMobileIcon}} width="55" height="32" viewBox="0 0 55 32"/>
                </Link>
              )
            }
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
              <FabComponent />
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
      {window.location.pathname === '/contact' ? <Footer /> : null}
  </>
  )
}
