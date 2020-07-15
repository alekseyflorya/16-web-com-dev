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
    path: '/sharova'
  },
  {
    img: portfolioImage2,
    title: 'Прагма',
    type: 'Корпоративный сайт',
    position: classes.gridItem2,
    path: '/pragma'
  },
  {
    img: portfolioImage3,
    title: 'Автопроставка',
    type: 'Интернет-магазин',
    position: classes.gridItem3,
    path: '/autoprostavka'
  }
];

export default PortfolioData