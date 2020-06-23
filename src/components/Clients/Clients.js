import React from "react";
import classes from './Clients.module.scss'
import ClientsSlider from './ClientsSlider';
import Container from "@material-ui/core/Container";

function Clients() {
  return (
    <section className={classes.Clients}>
      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>Наши клиенты:</h2>
        <ClientsSlider />
      </Container>
    </section>
  )
}

export default Clients