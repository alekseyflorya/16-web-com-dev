import React from "react";
import classes from './PortfilioShort.module.scss';
import portfolioImage1 from '../../assets/img/portfolio-image1.png';
import portfolioImage2 from '../../assets/img/portfolio-image2.png';
import portfolioImage3 from '../../assets/img/portfolio-image3.png';

function PortfilioShort(){
  return (
    <div>
      <h2>Наше портфолио</h2>
      <div>
        <p>У нас немало выполненных проектов – отзывы клиентов красноречиво говорят о том, что мы умеем эффективно и быстро решать самые сложные задачи.</p>
        <button>Узнать цены</button>
      </div>
      <div>
        <ul>
          <li><img src={portfolioImage1} alt="portfolioImage1"/></li>
          <li><img src={portfolioImage2} alt="portfolioImage2"/></li>
          <li><img src={portfolioImage3} alt="portfolioImage3"/></li>
        </ul>
      </div>
      <button>Все проекты</button>
    </div>
  )
}

export default PortfilioShort