import React, {useEffect, useState} from 'react';
import classes from './Header.module.scss';
import Navigation from "../Navigation";
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
import Fade from 'react-reveal/Fade'
import Breadcrumbs from "../../components/Breadcrumbs";
import {NewsListArray} from "../BlogArray";
import NewsImg from "../../assets/img/news.jpg";
import CallBack from "../Callback";

export default function Header({notFound, notHeader}) {
  const pageData = DataArray.find(page => page.path === window.location.pathname);
  const headdingtitle = pageData ? pageData.headdingtitle : NewsListArray.find(item => '/news/' + item.postPath === window.location.pathname).title;
  const description = pageData ? pageData.description : '';
  const bgimage = pageData ? pageData.bgimage : NewsImg;

  const [state, setState] = useState({
    navOpen: false,
    fabOpen: false,
    servicesOpen: false,
    portfolioOpen: false,
  });

  const [pagePath, setPagePath] =useState(window.location.pathname)

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

  const [callBackIsOpen, setCallBackIsOpen] = useState(false)

  const callBackSetOpen = () => setCallBackIsOpen(!callBackIsOpen)

  useEffect(() => {
      window.scrollTo(0, 0);
      setPagePath(window.location.pathname)
  }, [pagePath]);

  return (
    <>
    <header className={`${classes.Header} ${notHeader && classes.NotHeader}`}>
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
            paddingTop: (pagePath === '/contact') ? 0 : 120,

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
                    <button className={classes.ContactsBtn} onClick={callBackSetOpen}>
                      <span>Обратная связь</span>
                    </button>
                    <CallBack callBackIsOpen={callBackIsOpen} callBackSetOpen={callBackSetOpen} />
                  </Grid>
                </Grid>
              </>
            ):''}
            {(window.location.pathname === '/not-found') ? (
              notFound
            ) : '' }
            {(window.location.pathname !== '/not-found' && window.location.pathname !== '/contact' && window.location.pathname !== '/sitemap') ? (
          <Grid item container sm={11} xs={12} style={{marginBottom: -80}}>
            <Grid item container sm={9} sx={12} justify="center" alignItems="center" className={classes.HeaddingBox}>
              <Box style={{maxWidth: 575}} className={classes.TitleDescriptionBox}>
                <Fade down delay={300}><h1 className={classes.HeaddingTitle}>{headdingtitle}</h1></Fade>
                <Fade up delay={500}><p className={classes.HeaddingDescription}>{description}</p></Fade>
              </Box>
            </Grid>
            <Grid item sm={3} xs={false}/>
            <Grid item sm={9} xs={4} container alignItems="center" style={{backgroundColor: '#0DF0FF', paddingLeft: '14%',}}>
              <div className={classes.SocialButtons}>
                <a className={classes.SocialButton} href="https://www.instagram.com/16.web/" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon className={classes.InstagramIcon} width="24" height="24" viewBox="0 0 24 24" />
                </a>
                <a className={classes.SocialButton} href="https://www.facebook.com/16.web" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon width="10" height="24" viewBox="0 0 10 24" />
                </a>
                {/*<a className={classes.SocialButton} href="#" rel="noopener noreferrer">*/}
                {/*  <LinkedInIcon width="24" height="24" viewBox="0 0 24 24" />*/}
                {/*</a>*/}
              </div>
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
                  <Fade right delay={1000}><LogoIcon classes={{root: classes.LogoIcon}} width="85" height="54" viewBox="0 0 85 54"/></Fade>
                  <Fade left delay={1000}><LogoMobileIcon classes={{root: classes.LogoMobileIcon}} width="55" height="32" viewBox="0 0 55 32"/></Fade>
                </>
              ) : (
                <Fade right delay={1000}>
                  <Link to={'/'}>
                    {notHeader ? (
                      <Fade right delay={1000}><LogoMobileIcon classes={{root: classes.LogoIcon}} width="55" height="32" viewBox="0 0 55 32"/></Fade>
                    ) : (
                      <Fade right delay={1000}><LogoIcon classes={{root: classes.LogoIcon}} width="85" height="54" viewBox="0 0 85 54"/></Fade>
                    )}
                    <Fade left delay={1000}><LogoMobileIcon classes={{root: classes.LogoMobileIcon}} width="55" height="32" viewBox="0 0 55 32"/></Fade>
                  </Link>
                </Fade>
              )
            }
          </Grid>
          <Grid item className={classes.MenuButton}>
            <Fade right delay={1000}>
            <button onClick={toggleDrawer(!(state.navOpen))} className={classes.BurgerBtn}>
              <span className={state.navOpen ? classes.BurgerActive : classes.Burger}></span>
            </button>
            </Fade>
          </Grid>
          <Grid item style={{width: 66, height: 0, }}>
          </Grid>
          <ClickAwayListener onClickAway={handleClickAway}>
            <Grid className={classes.Fab} classes={{root: classes.fabGridRoot}}>
              <Fade right delay={1000}><FabComponent /></Fade>
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
      {pagePath !== '/' && pagePath !== '/contact' ? <Breadcrumbs pagePath={pagePath} /> : null}
      {}
      {pagePath === '/contact' ? <Footer /> : null}
  </>
  )
}
