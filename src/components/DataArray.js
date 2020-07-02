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
import WebDesign from "../pages/WebDesign";
import InternetMarketing from "../pages/InternetMarketing";
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
import SitePrototype from "../pages/SitePrototype";

import homeBgImage from '../assets/img/main.jpg';
import portfolioBgImage from '../assets/img/portfolio.jpg';
import servicesBgImage from '../assets/img/uslugi.jpg';
import vacanciesImage from  '../assets/img/career.jpg';
import newsImage from  '../assets/img/news.jpg';
import faqImage from '../assets/img/FAQ.jpg';
import webDesignImage from '../assets/img/webdesign.jpg';
import internetMarketingImage from '../assets/img/internet-marketing.jpg';
import qaTestingImg from "../assets/img/qa-testing.jpg";
import siteCreatingImage from '../assets/img/sozdanie-saitov.jpg';
import landingPageImg from "../assets/img/landing-page.jpg";
import businessCardImg from "../assets/img/business-card.jpg";
import corporateSiteImg from "../assets/img/corporate-site.jpg";
import SitePrototypeImg from "../assets/img/site-prototype.jpg"

const DataArray = [

  {//Главная
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

  {//О нас
    id: 1,
    name: 'about',
    label: 'О нас',
    path: '/about',
    component: () => <About />,
    headdingtitle:'О нас',
    description: '16.web studio специализируется на веб-дизайне, создании адаптивных интернет-проектов, брендинге и рекламной фотографии.',
    bgimage: homeBgImage
  },

  {//Портфолио
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

  {//Услуги
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

  {//Цены
    id: 4,
    name: 'prices',
    label: 'Цены',
    path: '/prices',
    component: () => <Prices />,
    headdingtitle:'Цены',
    description: '16.web studio специализируется на веб-дизайне, создании адаптивных интернет-проектов, брендинге и рекламной фотографии.',
    bgimage: homeBgImage
  },

  {//Контакты
    id: 5,
    name: 'contact',
    label: 'Контакты',
    path: '/contact',
    component: () => <Contact />,
    headdingtitle:'Контакты',
    description: '16.web studio специализируется на веб-дизайне, создании адаптивных интернет-проектов, брендинге и рекламной фотографии.',
    bgimage: homeBgImage
  },

  {//Вакансии
    id: 6,
    name: 'vacancies',
    label: 'Вакансии',
    path: '/vacancies',
    component: () => <Vacancies />,
    headdingtitle:'Карьера',
    description: '16.web studio специализируется на веб-дизайне, создании адаптивных интернет-проектов, брендинге и рекламной фотографии.',
    bgimage: vacanciesImage
  },

  {//Новости
    id: 7,
    name: 'news',
    label: 'Новости',
    path: '/news',
    component: () => <News />,
    headdingtitle:'Новости',
    description: '16.web studio специализируется на веб-дизайне, создании адаптивных интернет-проектов, брендинге и рекламной фотографии.',
    bgimage: newsImage
  },

  {//FAQ
    id: 8,
    name: 'faq',
    label: 'FAQ',
    path: '/faq',
    component: () => <Faq />,
    headdingtitle: 'FAQ',
    description: '16.web studio специализируется на веб-дизайне, создании адаптивных интернет-проектов, брендинге и рекламной фотографии.',
    bgimage: faqImage
  },

  {//Создание сайтов
    id: 9,
    name: 'siteCreating',
    label: 'Создание сайтов',
    path: '/sitecreating',
    parent: 'services',
    component: () => <SiteCreating />,
    headdingtitle:'Создание сайтов',
    description: 'При разработке сайта специалисты студии 16.web создают ресурс, полностью соответствующий целям и задачам, сформулированным заказчиком.',
    bgimage: siteCreatingImage
  },

  {//Веб-дизайн
    id: 10,
    name: 'webDesign',
    label: 'Веб-дизайн',
    path: '/webdesign',
    parent: 'services',
    component: () => <WebDesign />,
    headdingtitle:'Веб-дизайн',
    description: 'Мы передадим идею вашего бренда посредством подбора оптимальной цветовой гаммы, креативной композиции и грамотной типографики.',
    bgimage: webDesignImage
  },

  {//Интернет - маркетинг
    id: 11,
    name: 'internetMarketing',
    label: 'Интернет - маркетинг',
    path: '/internetmarketing',
    parent: 'services',
    component: () => <InternetMarketing />,
    headdingtitle:'Интернет-маркетинг',
    description: 'Студия 16.web для продвижения в сети использует комплексный интернет-маркетинг, предполагающий применение всех онлайн-технологий.',
    bgimage: internetMarketingImage
  },

  {//Фотосьемка
    id: 11,
    name: 'photography',
    label: 'Фотосьемка',
    path: '/photography',
    parent: 'services',
    component: () => <Photography />,
    headdingtitle:'Фотосьемка',
    description: '',
    bgimage: ''
  },

  {//Брендинг
    id: 12,
    name: 'branding',
    label: 'Брендинг',
    path: '/branding',
    parent: 'services',
    component: () => <Branding />,
    headdingtitle:'Брендинг',
    description: '',
    bgimage: ''
  },

  {//SEO
    id: 13,
    name: 'seo',
    label: 'SEO',
    path: '/seo',
    parent: 'services',
    component: () => <Seo />,
    headdingtitle:'SEO',
    description: '',
    bgimage: ''
  },

  {//SMM
    id: 14,
    name: 'smm',
    label: 'SMM',
    path: '/smm',
    parent: 'services',
    component: () => <Smm />,
    headdingtitle:'SMM',
    description: '',
    bgimage: ''
  },

  {//QA-тестирование
    id: 15,
    name: 'qaTesting',
    label: 'QA-тестирование',
    path: '/qatesting',
    parent: 'services',
    component: () => <QaTesting />,
    headdingtitle:'QA-тестирование',
    description: 'Студия 16.web определит, насколько эффективна ваша онлайн-платформа, корректно ли работают все её службы и отвечает ли она требованиям и стандартам.',
    bgimage: qaTestingImg
  },

  {//Разработка приложений
    id: 16,
    name: 'appsDevelop',
    label: 'Разработка приложений',
    path: '/appsdevelop',
    parent: 'services',
    component: () => <AppsDevelop />,
    headdingtitle:'Разработка приложений',
    description: '',
    bgimage: ''
  },

  {//Контекстная реклама
    id: 17,
    name: 'ppc',
    label: 'Контекстная реклама',
    path: '/ppc',
    parent: 'services',
    component: () => <Ppc />,
    headdingtitle: 'Контекстная реклама',
    description: '',
    bgimage: ''
  },

  {//Портал
    id: 18,
    name: 'portal',
    label: 'Портал',
    path: '/portal',
    parent: 'services',
    component: () => <OtherSrevices />,
    headdingtitle: 'Портал',
    description: '',
    bgimage: ''
  },

  {//Уникальные решения
    id: 19,
    name: 'uniquesrevices',
    label: 'Уникальные решения',
    path: '/uniquesrevices',
    parent: 'services',
    component: () => <OtherSrevices />,
    headdingtitle: 'Уникальные решения',
    description: '',
    bgimage: ''
  },

  {//Сайт-каталог
    id: 20,
    name: 'catalogsite',
    label: 'Сайт-каталог',
    path: '/catalogsite',
    parent: 'portfolio',
    component: () => <CatalogSite />,
    headdingtitle:'Сайт-каталог',
    description: '',
    bgimage: ''
  },

  {//Сайт-визитка
    id: 21,
    name: 'businesscardsite',
    label: 'Сайт-визитка',
    path: '/businesscardsite',
    parent: 'services',
    component: () => <BusinessCardSite />,
    headdingtitle:'Сайт-визитка',
    description: 'Наша студия предлагает свои услуги по изготовлению сайта-визитки – это отличный вариант рекламы для представителей малого бизнеса.',
    bgimage: businessCardImg
  },

  {//Интернет-магазин
    id: 22,
    name: 'onlinestore',
    label: 'Интернет-магазин',
    path: '/onlinestore',
    parent: 'services',
    component: () => <OnlineStore />,
    headdingtitle:'Интернет-магазин',
    description: '',
    bgimage: ''
  },

  {//Лендинг
    id: 23,
    name: 'landingpage',
    label: 'Лендинг',
    path: '/landingpage',
    parent: 'services',
    component: () => <LandingPage />,
    headdingtitle:'Лендинг',
    description: 'Студия 16.web предлагает услуги своих специалистов, готовых создать одностраничный сайт, на котором будут информативно и лаконично представлена ваша компания.',
    bgimage: landingPageImg
  },

  {//Корпоративный сайт
    id: 24,
    name: 'corporatesite',
    label: 'Корпоративный сайт',
    path: '/corporatesite',
    parent: 'services',
    component: () => <CorporateSite />,
    headdingtitle:'Корпоративный сайт',
    description: 'Предлагаем разработку корпоративного сайта под ключ – это позволит вам комуницировать с целевой аудиторией и взаимодействовать с сотрудниками.',
    bgimage: corporateSiteImg
  },

  {//Макет сайта
    id: 25,
    name: 'siteprototype',
    label: 'Макет сайта',
    path: '/siteprototype',
    parent: 'services',
    component: () => <SitePrototype />,
    headdingtitle:'Макет сайта',
    description: 'В ходе разработки концепции сайта создаётся прототип, по которому заказчик может себе представить общий вид будущего интернет-ресурса.',
    bgimage: SitePrototypeImg
  }
];

export default DataArray