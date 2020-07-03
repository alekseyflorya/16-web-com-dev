import React from 'react';
import classes from './Vacancies.module.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OpenedVacancies from "./OpenedVacancies";
import VacancieForm from "./VacancieForm";
import VacancieFeatures from "./VacancieFeaures";

function Vacancies(){
  return (
    <div className={classes.VacanciesPage}>
      <Header />
      <OpenedVacancies />
      <VacancieForm />
      <VacancieFeatures />
      <Footer />
    </div>
  )
}

export default Vacancies