import React from 'react';
import classes from './Footer.module.scss';
import Container from '@material-ui/core/Container';
import {Link} from "react-router-dom";
import {Link as SocialLink} from '@material-ui/core/';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";

export default function Footer() {

  return (
    <footer className={classes.Footer}>
      <Container fixed disableGutters classes={{root: classes.ContainerRoot}}>
        <Grid container spacing={0}>
          <Grid item sm={9} classes={{root: classes.ContainerItemZero1Root}} />

          <Grid item sm={3} classes={{root: classes.ContainerItemZero2Root}} />

          <Grid item sm={9} container>
            <Grid item sm={4}>
              <List className={classes.LinksList}>
                <ListItem key={Math.random()} className={classes.LinksListItem}>
                  <Link to="/" className={classes.Link}>
                    {'Главная'}
                  </Link>
                </ListItem>
                <ListItem key={Math.random()} className={classes.LinksListItem}>
                  <Link to="/about" className={classes.Link}>
                    {'О нас'}
                  </Link>
                </ListItem>
                <ListItem key={Math.random()} className={classes.LinksListItem}>
                  <Link to="/portfolio" className={classes.Link}>
                    {'Портфолио'}
                  </Link>
                </ListItem>
                <ListItem key={Math.random()} className={classes.LinksListItem}>
                  <Link to="/services" className={classes.Link}>
                    {'Услуги'}
                  </Link>
                </ListItem>
                <ListItem key={Math.random()} className={classes.LinksListItem}>
                  <Link to="/prices" className={classes.Link}>
                    {'Цены'}
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item sm={4}>
              <List className={classes.LinksList}>
                <ListItem key={Math.random()} className={classes.LinksListItem}>
                  <Link to="/contact" className={classes.Link}>
                    {'Контакты'}
                  </Link>
                </ListItem>
                <ListItem key={Math.random()} className={classes.LinksListItem}>
                  <Link to="/vacancies" className={classes.Link}>
                    {'Вакансии'}
                  </Link>
                </ListItem>
                <ListItem key={Math.random()} className={classes.LinksListItem}>
                  <Link to="/news" className={classes.Link}>
                    {'Новости'}
                  </Link>
                </ListItem>
                <ListItem key={Math.random()} className={classes.LinksListItem}>
                  <Link to="/faq" className={classes.Link}>
                    {'FAQ'}
                  </Link>
                </ListItem>
                <ListItem key={Math.random()} className={classes.LinksListItem}>
                  <Link to="/sitemap" className={classes.Link}>
                    {'Карта сайта'}
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item sm={4}>
              <List className={classes.LinksList}>
                <ListItem key={Math.random()} className={classes.LinksListItem}>
                  <Link to="/contact" className={classes.Link}>
                    {'Контакты'}
                  </Link>
                </ListItem>
                <ListItem key={Math.random()} className={classes.LinksListItem}>
                  <Link to="/contact" className={classes.Link}>
                    {'+38 (099) 999 99 99'}
                  </Link>
                </ListItem>
                <ListItem key={Math.random()} className={classes.LinksListItem}>
                  <Link to="/contact" className={classes.Link}>
                    {'г.Одесса, ул.Балковская 130'}
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item sm={12} container>
              <Grid item sm={8}>
                <ListItem key={Math.random()} className={classes.LinksListItem}>
                  <Link to="/contact" className={classes.Link}>
                    {'Правила конфиденциальности'}
                  </Link>
                </ListItem>
              </Grid>
              <Grid item sm={4}>
                <ListItem key={Math.random()} className={classes.LinksListItem}>
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
                  <SocialLink href="#" classes={{root: classes.SocialLink}}>
                    {'Dribbble'}
                  </SocialLink>
                </ListItem>
                <ListItem key={Math.random()} className={classes.LinksListItem}>
                  <SocialLink href="#" classes={{root: classes.SocialLink}}>
                    {'Behance'}
                  </SocialLink>
                </ListItem>
                <ListItem key={Math.random()} className={classes.LinksListItem}>
                  <SocialLink href="#" classes={{root: classes.SocialLink}}>
                    {'Linkedin'}
                  </SocialLink>
                </ListItem>
                <ListItem key={Math.random()} className={classes.LinksListItem}>
                  <SocialLink href="#" classes={{root: classes.SocialLink}}>
                    {'Facebook'}
                  </SocialLink>
                </ListItem>
              </List>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </footer>

  )
}