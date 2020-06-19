import React from "react";
import classes from './Clients.module.scss'
import LogoColorit from '../../assets/img/LogoColorit.png';
import LogoBronex from '../../assets/img/LogoBronex.png';
import LogoPragma from '../../assets/img/LogoPragma.png';
import LogoProstavka from '../../assets/img/LogoProstavka.png';
import LogoTakar from '../../assets/img/LogoTakar.png';

function Clients() {
  return (
    <div>
      <h2>Наши клиенты:</h2>
      <ul>
        <li><img src={LogoColorit} alt="LogoColorit"/></li>
        <li><img src={LogoBronex} alt="LogoBronex"/></li>
        <li><img src={LogoPragma} alt="LogoPragma"/></li>
        <li><img src={LogoProstavka} alt="LogoProstavka"/></li>
        <li><img src={LogoTakar} alt="LogoTakar"/></li>
      </ul>
    </div>
  )
}

export default Clients