import React from 'react';
import classes from "./Breadcrumbs.module.scss"
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Container from "@material-ui/core/Container";
import HomeIcon from '@material-ui/icons/Home';
import DataArray from '../DataArray'
import {Link} from 'react-router-dom'

export default function CustomBreadcrumbs({pagePath}) {

  const breadcrambLinks = [];
  let pos = 0;
  while ((pos = pagePath.indexOf("/", pos + 1)) !== -1) {
    let path = pagePath.slice(0, pos)
    breadcrambLinks.push({
      path: path,
      label: DataArray.find(item => item.path === path).label
    })
  }
  const currentPageLabel = DataArray.find(item => item.path === pagePath).label

  return (
    <section className={classes.Breadcrumbs}>
      <Container fixed>
        <Breadcrumbs separator={<NavigateNextIcon className={classes.Separator} />} aria-label="breadcrumb">
          <Link to="/" className={classes.Link}>
            <HomeIcon className={classes.HomeIcon}/>
          </Link>
          {breadcrambLinks.map(({path, label})=>(
            <Link key={path + label} to={path} className={classes.Link}>
              {label}
            </Link>
          ))}
          <Typography className={classes.CurrentPageLabel}>{currentPageLabel}</Typography>
        </Breadcrumbs>
      </Container>
    </section>
  );
}