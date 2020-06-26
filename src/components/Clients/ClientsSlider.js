import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import "./ClientsSlider.scss";
import LogoColorit from "../../assets/img/LogoColorit.png";
import LogoBronex from "../../assets/img/LogoBronex.png";
import LogoPragma from "../../assets/img/LogoPragma.png";
import LogoProstavka from "../../assets/img/LogoProstavka.png";
import LogoTakar from "../../assets/img/LogoTakar.png";

function ClientsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} className="ClientsSlider" >
      <div>
        <img src={LogoColorit} alt="LogoColorit" style={{maxWidth: '100%'}}/>
      </div>
      <div>
        <img src={LogoBronex} alt="LogoBronex"/>
      </div>
      <div>
        <img src={LogoPragma} alt="LogoPragma"/>
      </div>
      <div>
        <img src={LogoProstavka} alt="LogoProstavka"/>
      </div>
      <div>
        <img src={LogoTakar} alt="LogoTakar"/>
      </div>
    </Slider>
  );
}

export default ClientsSlider