import React from 'react';
import classes from './Footer.module.scss';
import Container from '@material-ui/core/Container';
import {Link} from "react-router-dom";
import {Link as SocialLink} from '@material-ui/core/';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden';
import {MobileBehanceIcon, MobileDribbleIcon, MobileFbIcon, MobileInstaIcon, MobileLinkedIcon} from "../Icons";

export default function Footer() {
  return (
    <footer className={classes.Footer}>
      <Container fixed disableGutters classes={{root: classes.ContainerRoot}}>
        <Hidden only="xs">
          <Grid container spacing={0}>
            <Grid item sm={9} classes={{root: classes.ContainerItemZero1Root}} />
            <Grid item sm={3} classes={{root: classes.ContainerItemZero2Root}} />
            <Grid item sm={9} container classes={{root: classes.LeftColumn}}>
              <Grid item sm={4}>
                <List className={classes.LinksList}>
                  <ListItem className={classes.LinksListItem}>
                    <Link to="/" className={classes.Link}>
                      {'Главная'}
                    </Link>
                  </ListItem>
                  <ListItem className={classes.LinksListItem}>
                    <Link to="/about" className={classes.Link}>
                      {'О нас'}
                    </Link>
                  </ListItem>
                  <ListItem className={classes.LinksListItem}>
                    <Link to="/portfolio" className={classes.Link}>
                      {'Портфолио'}
                    </Link>
                  </ListItem>
                  <ListItem className={classes.LinksListItem}>
                    <Link to="/services" className={classes.Link}>
                      {'Услуги'}
                    </Link>
                  </ListItem>
                  <ListItem className={classes.LinksListItem}>
                    <Link to="/prices" className={classes.Link}>
                      {'Цены'}
                    </Link>
                  </ListItem>
                </List>
              </Grid>
              <Grid item sm={4}>
                <List className={classes.LinksList}>
                  <ListItem className={classes.LinksListItem}>
                    <Link to="/contact" className={classes.Link}>
                      {'Контакты'}
                    </Link>
                  </ListItem>
                  <ListItem className={classes.LinksListItem}>
                    <Link to="/vacancies" className={classes.Link}>
                      {'Вакансии'}
                    </Link>
                  </ListItem>
                  <ListItem className={classes.LinksListItem}>
                    <Link to="/news" className={classes.Link}>
                      {'Новости'}
                    </Link>
                  </ListItem>
                  <ListItem className={classes.LinksListItem}>
                    <Link to="/faq" className={classes.Link}>
                      {'FAQ'}
                    </Link>
                  </ListItem>
                  <ListItem className={classes.LinksListItem}>
                    <Link to="/sitemap" className={classes.Link}>
                      {'Карта сайта'}
                    </Link>
                  </ListItem>
                </List>
              </Grid>
              <Grid item sm={4}>
                <List className={classes.LinksList}>
                  <ListItem className={classes.LinksListItem}>
                    <Link to="/contact" className={classes.Link}>
                      {'Контакты'}
                    </Link>
                  </ListItem>
                  <ListItem className={classes.LinksListItem}>
                    <Link to="/contact" className={classes.Link}>
                      {'+38 (095) 100 16 16'}
                    </Link>
                  </ListItem>
                  <ListItem className={classes.LinksListItem}>
                    <Link to="/contact" className={classes.Link}>
                      {'г.Одесса, ул.Балковская 130'}
                    </Link>
                  </ListItem>
                </List>
              </Grid>
              <Grid item sm={12} container classes={{root: classes.LinksListBottomBox}}>
                <Grid item sm={8}>
                  <ListItem className={classes.LinksListItem}>
                    <Link to="/contact" className={classes.Link}>
                      {'Правила конфиденциальности'}
                    </Link>
                  </ListItem>
                </Grid>
                <Grid item sm={4}>
                  <ListItem className={classes.LinksListItem}>
                    <Link to="/contact" className={classes.Link}>
                      {'All right reserved @16.web'}
                    </Link>
                  </ListItem>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={3} container justify="center" alignItems="center" classes={{root: classes.SocialLinksGrid}}>
              <Grid item>
                <List className={classes.LinksList}>
                  <ListItem key={Math.random()} className={classes.LinksListItem}>
                    <SocialLink href="https://dribbble.com/16web" classes={{root: classes.SocialLink}}>
                      {'Dribbble'}
                    </SocialLink>
                  </ListItem>
                  <ListItem key={Math.random()} className={classes.LinksListItem}>
                    <SocialLink href="https://www.behance.net/16web" classes={{root: classes.SocialLink}}>
                      {'Behance'}
                    </SocialLink>
                  </ListItem>
                  {/*<ListItem key={Math.random()} className={classes.LinksListItem}>*/}
                  {/*  <SocialLink href="#" classes={{root: classes.SocialLink}}>*/}
                  {/*    {'Linkedin'}*/}
                  {/*  </SocialLink>*/}
                  {/*</ListItem>*/}
                  <ListItem key={Math.random()} className={classes.LinksListItem}>
                    <SocialLink href="https://www.facebook.com/16.web" classes={{root: classes.SocialLink}}>
                      {'Facebook'}
                    </SocialLink>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid container className={classes.MobileFooterGrid}>
            <Grid item container xs={12} className={classes.MobileGridItem}>
              <h3 className={classes.MobileGridTitle}>Email</h3>
              <a className={classes.MobileGridLink} href="mailto:16webmail@gmail.com">16webmail@gmail.com</a>
            </Grid>
            <Grid item container xs={12} className={classes.MobileGridItem}>
              <h3 className={classes.MobileGridTitle}>Телефон</h3>
              <a className={classes.MobileGridLink} href="tel:+380951001616">+38 (095) 100 16 16</a>
            </Grid>
            <Grid item container xs={12} className={classes.MobileGridItem}>
              <h3 className={classes.MobileGridTitle}>Адрес</h3>
              <address className={classes.Address} >г.Одесса, ул.Балковская 130а</address>
            </Grid>
            <Grid item container xs={12} className={classes.MobileSocialGrid}>
              <SocialLink className={classes.MobileSocialLink} href="https://www.instagram.com/16.web/" target="_blank" rel="noopener noreferrer">
                <MobileInstaIcon width="23" height="23" viewBox="0 0 23 23" />
              </SocialLink>
              <SocialLink className={classes.MobileSocialLink} href="https://www.facebook.com/16.web" target="_blank" rel="noopener noreferrer">
                <MobileFbIcon width="11" height="23" viewBox="0 0 11 23" />
              </SocialLink>
              {/*<SocialLink className={classes.MobileSocialLink} href="">*/}
              {/*  <MobileLinkedIcon width="23" height="23" viewBox="0 0 23 23" />*/}
              {/*</SocialLink>*/}
              <SocialLink className={classes.MobileSocialLink} href="https://www.behance.net/16web" target="_blank" rel="noopener noreferrer">
                <MobileBehanceIcon width="31" height="19" viewBox="0 0 31 19" />
              </SocialLink>
              <SocialLink className={classes.MobileSocialLink} href="https://dribbble.com/16web" target="_blank" rel="noopener noreferrer">
                <MobileDribbleIcon width="27" height="27" viewBox="0 0 27 27" />
              </SocialLink>
            </Grid>
            <Grid item container xs={12} className={classes.MobileBottomGrid}>
              <p className={classes.Copyright}>All right reserved @16.web</p>
              <a className={classes.BottomLink} href="/sitemap">Карта сайта</a>
            </Grid>
          </Grid>
        </Hidden>
      </Container>
    </footer>
  )
}