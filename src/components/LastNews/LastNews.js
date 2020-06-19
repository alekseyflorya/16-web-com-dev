import React from "react";
import classes from './LastNews.module.scss'
import imageNews1 from '../../assets/img/news1.jpg'

function LastNews() {
  return (
    <div>
      <h2>Популярные статьи</h2>
      <div>
        <div>
          <img src={imageNews1} alt=""/>
          <h3>6 главных шагов к успеху SEO в 2020 году</h3>
          <p><span>Новости SEO</span> | <span>01.04.2020</span></p>
          <p>А ещё сторонники тоталитаризма в науке, которые представляют собой яркий пример собой яркий ...</p>
          <div>203<span></span><span>--></span></div>
        </div>
        <div>
          <img src={imageNews1} alt=""/>
          <h3>6 главных шагов к успеху SEO в 2020 году</h3>
          <p><span>Новости SEO</span> | <span>01.04.2020</span></p>
          <p>А ещё сторонники тоталитаризма в науке, которые представляют собой яркий пример собой яркий ...</p>
          <div>203<span></span><span>--></span></div>
        </div>
        <div>
          <img src={imageNews1} alt=""/>
          <h3>6 главных шагов к успеху SEO в 2020 году</h3>
          <p><span>Новости SEO</span> | <span>01.04.2020</span></p>
          <p>А ещё сторонники тоталитаризма в науке, которые представляют собой яркий пример собой яркий ...</p>
          <div>203<span></span><span>--></span></div>
        </div>
      </div>
      <button>Все статьи</button>
    </div>
  )
}

export default LastNews