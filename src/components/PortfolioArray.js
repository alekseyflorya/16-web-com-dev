import classes from './PortfilioShort/PortfolioShort.module.scss';
import portfolioImage1 from '../assets/img/sharova-portfolioshort.jpg';
import portfolioImage2 from '../assets/img/pragma-portfolioshort.jpg';
import portfolioImage3 from '../assets/img/autoprostavka-portfolioshort.jpg';

const PortfolioData = [
  {
    img: portfolioImage1,
    title: 'Восстановление шаровых опор',
    type: 'Лендинг-пейдж',
    position: classes.gridItem1,
    path: '/portfolio/sharova'
  },
  {
    img: portfolioImage2,
    title: 'Прагма',
    type: 'Корпоративный сайт',
    position: classes.gridItem2,
    path: '/portfolio/pragma'
  },
  {
    img: portfolioImage3,
    title: 'Автопроставка',
    type: 'Интернет-магазин',
    position: classes.gridItem3,
    path: '/portfolio/autoprostavka'
  }
];

export default PortfolioData