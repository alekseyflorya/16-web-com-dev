import React from 'react';
import classes from './Home.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DataArray from "../../components/DataArray";

export default function Home() {

  return (
    <div className={classes.HomePage}>
      <Header />
      <Footer />
    </div>
  )
}