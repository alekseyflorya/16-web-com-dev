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

const DataArray = [
  {
    id: 0,
    name: 'home',
    label: 'Home',
    path: '/',
    component: () => <Home />,
    headdingtitle:'Главная',
    description: '',
    bgimage: '',
    exact: true
  },
  {
    id: 1,
    name: 'about',
    label: 'About',
    path: '/about',
    component: () => <About />,
    headdingtitle:'О нас',
    description: '',
    bgimage: '' },
  {
    id: 2,
    name: 'portfolio',
    label: 'Portfolio',
    path: '/portfolio',
    children: true,
    component: () => <Portfolio />,
    headdingtitle:'Портфолио',
    description: '',
    bgimage: ''
  },
  {
    id: 3,
    name: 'services',
    label: 'Services',
    path: '/services',
    children: true,
    component: () => <Services />,
    headdingtitle:'Услуги',
    description: '',
    bgimage: ''
  },
  {
    id: 4,
    name: 'prices',
    label: 'Prices',
    path: '/prices',
    component: () => <Prices />,
    headdingtitle:'Цены',
    description: '',
    bgimage: ''
  },
  {
    id: 5,
    name: 'contact',
    label: 'Contact',
    path: '/contact',
    component: () => <Contact />,
    headdingtitle:'Контакты',
    description: '',
    bgimage: ''
  },
  {
    id: 6,
    name: 'vacancies',
    label: 'Vacancies',
    path: '/vacancies',
    component: () => <Vacancies />,
    headdingtitle:'Вакансии',
    description: '',
    bgimage: ''
  },
  {
    id: 7,
    name: 'news',
    label: 'News',
    path: '/news',
    component: () => <News />,
    headdingtitle:'Новости',
    description: '',
    bgimage: ''
  },
  {
    id: 8,
    name: 'faq',
    label: 'Faq',
    path: '/faq',
    component: () => <Faq />,
    headdingtitle: 'FAQ',
    description: '',
    bgimage: ''
  },
  {
    id: 9,
    name: 'siteCreating',
    label: 'SiteCreating',
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
    label: 'Photography',
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
    label: 'Branding',
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
    label: 'Seo',
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
    label: 'Smm',
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
    label: 'QaTesting',
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
    label: 'AppsDevelop',
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
    label: 'Ppc',
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
    label: 'OtherSrevices',
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
    label: 'CatalogSite',
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
    label: 'BusinessCardSite',
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
    label: 'OnlineStore',
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
    label: 'LandingPage',
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
    label: 'CorporateSite',
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
    label: 'PortfolioSite',
    path: '/portfoliosite',
    parent: 'portfolio',
    component: () => <PortfolioSite />,
    headdingtitle:'Сайт портфолио',
    description: '',
    bgimage: ''
  }
];

export default DataArray