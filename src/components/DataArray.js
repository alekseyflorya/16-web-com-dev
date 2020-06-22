import React from "react";
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Prices from '../pages/Prices';
import Services from '../pages/Services';
import Vacancies from '../pages/Vacancies';
import Contact from '../pages/Contact';
import Faq from '../pages/Faq';
import News from '../pages/News'

import SiteCreating from "../pages/SiteCreating";
import Photography from "../pages/Photography";
import Branding from "../pages/Branding";
import Seo from "../pages/Seo";
import Smm from "../pages/Smm";
import QaTesting from "../pages/QaTesting";
import AppsDevelop from "../pages/AppsDevelop";
import Ppc from "../pages/Ppc";
import OtherSrevices from "../pages/OtherSrevices";

import CatalogSite from "../pages/CatalogSite/CatalogSite";
import BusinessCardSite from "../pages/BusinessCardSite";
import OnlineStore from "../pages/OnlineStore";
import LandingPage from "../pages/LandingPage";
import CorporateSite from "../pages/CorporateSite";
import PortfolioSite from "../pages/PortfolioSite";

import homeBgImage from '../assets/img/main.jpg';
import portfolioBgImage from '../assets/img/portfolio.jpg';
import servicesBgImage from '../assets/img/uslugi.jpg';
import vacanciesImage from  '../assets/img/career.jpg';
import newsImage from  '../assets/img/news.jpg';
import faqImage from '../assets/img/FAQ.jpg';

const DataArray = [
  {
    id: 0,
    name: 'home',
    label: 'Главная',
    path: '/',
    component: () => <Home />,
    headdingtitle:'Веб-студия эффективных решений',
    description: 'Студия 16.web использует реальные кейсы, помогающие бренду или товару стать более востребованным.',
    bgimage: homeBgImage,
    exact: true
  },
  {
    id: 1,
    name: 'about',
    label: 'О нас',
    path: '/about',
    component: () => <About />,
    headdingtitle:'О нас',
    description: '16.web studio специализируется на веб-дизайне, создании адаптивных интернет-проектов, брендинге и рекламной фотографии.',
    bgimage: homeBgImage
  },
  {
    id: 2,
    name: 'portfolio',
    label: 'Портфолио',
    path: '/portfolio',
    children: true,
    component: () => <Portfolio />,
    headdingtitle:'Портфолио',
    description: '16.web studio специализируется на веб-дизайне, создании адаптивных интернет-проектов, брендинге и рекламной фотографии.',
    bgimage: portfolioBgImage
  },
  {
    id: 3,
    name: 'services',
    label: 'Услуги',
    path: '/services',
    children: true,
    component: () => <Services />,
    headdingtitle:'Услуги',
    description: 'Веб-студия 16.web предоставляет услуги своим клиентам, как комплексно, так и по отдельности – выбирайте, как вам удобнее и выгоднее.',
    bgimage: servicesBgImage
  },
  {
    id: 4,
    name: 'prices',
    label: 'Цены',
    path: '/prices',
    component: () => <Prices />,
    headdingtitle:'Цены',
    description: '16.web studio специализируется на веб-дизайне, создании адаптивных интернет-проектов, брендинге и рекламной фотографии.',
    bgimage: homeBgImage
  },
  {
    id: 5,
    name: 'contact',
    label: 'Контакты',
    path: '/contact',
    component: () => <Contact />,
    headdingtitle:'Контакты',
    description: '16.web studio специализируется на веб-дизайне, создании адаптивных интернет-проектов, брендинге и рекламной фотографии.',
    bgimage: homeBgImage
  },
  {
    id: 6,
    name: 'vacancies',
    label: 'Вакансии',
    path: '/vacancies',
    component: () => <Vacancies />,
    headdingtitle:'Карьера',
    description: '16.web studio специализируется на веб-дизайне, создании адаптивных интернет-проектов, брендинге и рекламной фотографии.',
    bgimage: vacanciesImage
  },
  {
    id: 7,
    name: 'news',
    label: 'Новости',
    path: '/news',
    component: () => <News />,
    headdingtitle:'Новости',
    description: '16.web studio специализируется на веб-дизайне, создании адаптивных интернет-проектов, брендинге и рекламной фотографии.',
    bgimage: newsImage
  },
  {
    id: 8,
    name: 'faq',
    label: 'FAQ',
    path: '/faq',
    component: () => <Faq />,
    headdingtitle: 'FAQ',
    description: '16.web studio специализируется на веб-дизайне, создании адаптивных интернет-проектов, брендинге и рекламной фотографии.',
    bgimage: faqImage
  },
  {
    id: 9,
    name: 'siteCreating',
    label: 'Создание сайтов',
    path: '/sitecreating',
    parent: 'services',
    component: () => <SiteCreating />,
    headdingtitle:'Создание сайтов',
    description: '',
    bgimage: ''
  },
  {
    id: 10,
    name: 'photography',
    label: 'Фотосьемка',
    path: '/photography',
    parent: 'services',
    component: () => <Photography />,
    headdingtitle:'Фотосьемка',
    description: '',
    bgimage: ''
  },
  {
    id: 11,
    name: 'branding',
    label: 'Брендинг',
    path: '/branding',
    parent: 'services',
    component: () => <Branding />,
    headdingtitle:'Брендинг',
    description: '',
    bgimage: ''
  },
  {
    id: 12,
    name: 'seo',
    label: 'SEO',
    path: '/seo',
    parent: 'services',
    component: () => <Seo />,
    headdingtitle:'SEO',
    description: '',
    bgimage: ''
  },
  {
    id: 13,
    name: 'smm',
    label: 'SMM',
    path: '/smm',
    parent: 'services',
    component: () => <Smm />,
    headdingtitle:'SMM',
    description: '',
    bgimage: ''
  },
  {
    id: 14,
    name: 'qaTesting',
    label: 'QA',
    path: '/qatesting',
    parent: 'services',
    component: () => <QaTesting />,
    headdingtitle:'QA',
    description: '',
    bgimage: ''
  },
  {
    id: 15,
    name: 'appsDevelop',
    label: 'Разработка приложений',
    path: '/appsdevelop',
    parent: 'services',
    component: () => <AppsDevelop />,
    headdingtitle:'Разработка приложений',
    description: '',
    bgimage: ''
  },
  {
    id: 16,
    name: 'ppc',
    label: 'Контекстная реклама',
    path: '/ppc',
    parent: 'services',
    component: () => <Ppc />,
    headdingtitle: 'Контекстная реклама',
    description: '',
    bgimage: ''
  },
  {
    id: 17,
    name: 'othersrevices',
    label: 'Добавочные сервисы',
    path: '/othersrevices',
    parent: 'services',
    component: () => <OtherSrevices />,
    headdingtitle: 'Добавочные сервисы',
    description: '',
    bgimage: ''
  },
  {
    id: 18,
    name: 'catalogsite',
    label: 'Сайт-каталог',
    path: '/catalogsite',
    parent: 'portfolio',
    component: () => <CatalogSite />,
    headdingtitle:'Сайт-каталог',
    description: '',
    bgimage: ''
  },
  {
    id: 19,
    name: 'businesscardsite',
    label: 'Сайт-визитка',
    path: '/businesscardsite',
    parent: 'portfolio',
    component: () => <BusinessCardSite />,
    headdingtitle:'Сайт-визитка',
    description: '',
    bgimage: ''
  },
  {
    id: 20,
    name: 'onlinestore',
    label: 'Интернет-магазин',
    path: '/onlinestore',
    parent: 'portfolio',
    component: () => <OnlineStore />,
    headdingtitle:'Интернет-магазин',
    description: '',
    bgimage: ''
  },
  {
    id: 21,
    name: 'landingpage',
    label: 'Лендинг-пейдж',
    path: '/landingpage',
    parent: 'portfolio',
    component: () => <LandingPage />,
    headdingtitle:'Лендинг-пейдж',
    description: '',
    bgimage: ''
  },
  {
    id: 22,
    name: 'corporatesite',
    label: 'Корпоративный сайт',
    path: '/corporatesite',
    parent: 'portfolio',
    component: () => <CorporateSite />,
    headdingtitle:'Корпоративный сайт',
    description: '',
    bgimage: ''
  },
  {
    id: 23,
    name: 'portfoliosite',
    label: 'Сайт портфолио',
    path: '/portfoliosite',
    parent: 'portfolio',
    component: () => <PortfolioSite />,
    headdingtitle:'Сайт портфолио',
    description: '',
    bgimage: ''
  }
];

export default DataArray