import classes from './PortfilioShort/PortfolioShort.module.scss';
import portfolioImage1 from '../assets/img/portfolio-image1.png';
import portfolioImage2 from '../assets/img/portfolio-image2.png';
import portfolioImage3 from '../assets/img/portfolio-image3.png';

const PortfolioData = [
  {
    img: portfolioImage1,
    title: 'Портфолио 1',
    type: 'Интернет-магазин',
    position: classes.gridItem1,
  },
  {
    img: portfolioImage2,
    title: 'Портфолио 2',
    type: 'Лендинг-пейдж',
    position: classes.gridItem2,
  },
  {
    img: portfolioImage3,
    title: 'Портфолио 3',
    type: 'Корпоративный сайт',
    position: classes.gridItem3,
  },
];

export default PortfolioData