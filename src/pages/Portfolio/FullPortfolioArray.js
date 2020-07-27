import classes from '../../pages/Portfolio/PortfilioFull/PortfolioFull.module.scss';
import portfolioImage1 from '../../assets/img/autoprostavka-project-mini.jpg';
import portfolioImage2 from '../../assets/img/bronex.jpg';
import portfolioImage3 from '../../assets/img/sharova-portfolioshort.jpg';
import portfolioImage4 from '../../assets/img/pragma-portfolioshort.jpg';

const FullPortfolioData = [
  {
    img: portfolioImage1,
    title: 'Автопроставка',
    type: 'Интернет-магазин',
    position: classes.gridItem1,
    path: '/autoprostavka'
  },
  {
    img: portfolioImage2,
    title: 'Bronex',
    type: 'Интернет-магазин',
    position: classes.gridItem2,
    path: '/bronex'
  },
  {
    img: portfolioImage3,
    title: 'Восстановление шаровых опор',
    type: 'Корпоративный сайт',
    position: classes.gridItem3,
    path: '/sharova'
  },
  {
    img: portfolioImage4,
    title: 'Прагма',
    type: 'Корпоративный сайт',
    position: classes.gridItem4,
    path: '/pragma'
  },
];

export default FullPortfolioData