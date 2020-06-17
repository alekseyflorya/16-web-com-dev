import React from 'react';
import classes from './Vacancies.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Vacancies(){

  return (
    <div className={classes.VacanciesPage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}