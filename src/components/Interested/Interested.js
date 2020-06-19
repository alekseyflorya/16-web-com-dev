import React from "react";
import classes from './Interested.module.scss';
import InterestedImage from '../../assets/img/Interested.jpg'

function Interested() {
  return (
    <div>
      <div>
        <h2>Заинтересовало?</h2>
        <p>Ясность нашей позиции очевидна: выбранный нами инновационный путь способствует повышению качества переосмысления внешне экономических политик. С учётом сложившейся международной обстановки</p>
        <button>Заказать проект</button>
      </div>
      <div>
        <img src={InterestedImage} alt="InterestedImage"/>
        <button>Узнать стоимость проектов</button>
      </div>
    </div>
  )
}

export default Interested