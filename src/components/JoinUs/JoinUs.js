import React from "react";
import classes from './JoinUs.module.scss';

function JoinUs() {
  return (
    <div>
      <div>
        <h2>Присоединяйся к нам!</h2>
        <p>Мы всегда рады когда к нашей команде присоединяется специалист, преданный своему делу. Возможно, именно ты нужен нам сейчас.</p>
        <button>Все вакансии</button>
      </div>
      <div>
        <div>
          <p>UI/UX Designer</p>
          <p><span>Oдесса</span>|<span>Full time</span></p>
        </div>
        <div>
          <p>Frontend Developer</p>
          <p><span>Oдесса</span>|<span>Full time</span></p>
        </div>
        <div>
          <p>SMM</p>
          <p><span>Oдесса</span>|<span>Full time</span></p>
        </div>
      </div>
    </div>
  )
}

export default JoinUs