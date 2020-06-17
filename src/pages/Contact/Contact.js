import React from 'react';
import classes from './Contact.module.scss';
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Contact(){

  return (
    <div className={classes.ContactPage}>
      <Header rightLinks={<Navigation />} />
      <Footer />
    </div>
  )
}