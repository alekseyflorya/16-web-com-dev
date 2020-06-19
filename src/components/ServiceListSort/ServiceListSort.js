import React from "react";
import classes from './ServiceListSort.module.scss';

function ServiceListSort() {
  return (
    <div>
      <h2>{window.location.pathname === '/' ? 'Услуги веб-студии' : 'Вас может заинтересовать'}</h2>
      <div>
        <div>
          <h3>Создание сайтов</h3>
          <p>Профессиональная разработа сайтов, которая позволяет выгодно и эффектно представить любую услугу.</p>
          <a href="#">Все услуги</a>
        </div>
        <div>
          <h3>Веб-дизайн</h3>
          <p>Современные и эффективные решения в плане композиции, типографики, цветоведения и юзабилити.</p>
          <a href="#">Все услуги</a>
        </div>
        <div>
          <h3>Интернет - маркетинг</h3>
          <p>Максимальная востребованость бренда и вывод в топ результатов поисковых систем.</p>
          <a href="#">Все услуги</a>
        </div>
      </div>
      <button>Все услуги</button>
    </div>
  )
}

export default ServiceListSort