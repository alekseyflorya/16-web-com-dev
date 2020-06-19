import React from "react";
import classes from './Reviews.module.scss'
import AvatarPerson1 from '../../assets/img/person1.jpg'

function Reviews() {
  return (
    <div>
      <h2></h2>
      <div>
        <div>
          <div>
            <img src={AvatarPerson1} alt="AvatarPerson1"/>
            <p></p>
          </div>
          <div>
            <div>
              <div>
                <p>Уже несколько сезонов наша семья является поклонниками непром сапог из ЭВА. На мой взгляд они однозначно выигрывают у своих резиновых собратьев по весу, теплоте и удобству. Но до настоящего момента я покупала детям бюджетные варианты, которые устраивали на все 100.</p>
                <p>И вот этой весной дочка впервые потестила знаменитые Crocsы. Невольно хочется сравнить их с "плебейскими" сапогами из ЭВА, продаваемыми в каждом гипермаркете</p>
                <span>25.03.19</span>
              </div>
            </div>
            <div>
              <ul>
                <li>01</li>
                <li>02</li>
                <li>03</li>
                <li><span>{'>'}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews