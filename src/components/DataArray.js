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
import Ppc from "../pages/Ppc";
import UniqueServices from "../pages/UniqueServices";

import CatalogSite from "../pages/CatalogSite/CatalogSite";
import BusinessCardSite from "../pages/BusinessCardSite";
import OnlineStore from "../pages/OnlineStore";
import LandingPage from "../pages/LandingPage";
import CorporateSite from "../pages/CorporateSite";
import SitePrototype from "../pages/SitePrototype";
import LandingDesign from "../pages/LandingDesign";
import SiteDesign from "../pages/SiteDesign";
import EmailMarketingSteps from "../pages/EmailMarketing";
import NotFound from "../pages/NotFound";
import Autoprostavka from "../pages/Projects/Autoprostavka";
import Sharova from "../pages/Projects/Sharova"
import Bronex from "../pages/Projects/Bronex";
import Pragma from "../pages/Projects/Pragma";
import SeoAudit from "../pages/SeoAudit";
import OrderInfoSemanticCore from "../pages/SemanticCore";
import InternalOptimization from "../pages/InternalOptimization"
import ExternalOptimization from "../pages/ExternalOptimization"
import Remarketing from "../pages/Remarketing";
import PpcSetting from "../pages/PpcSetting";
import GoogleShopping from "../pages/GoogleShopping";
import PpcAudit from "../pages/PpcAudit";
import SmmFacebook from "../pages/SmmFacebook";
import SmmInstagram from "../pages/SmmInstagram";
import OtherSmm from "../pages/OtherSmm";
import SmmAds from "../pages/SmmAds";
import UiUxDesigner from "../pages/UiUxDesigner";
import SeoSpecialist from "../pages/SeoSpecialist";
import Developer1c from "../pages/Developer1c"

import homeBgImage from '../assets/img/main.jpg';
import aboutUsImage from '../assets/img/about-us.jpg'
import portfolioBgImage from '../assets/img/portfolio.jpg';
import servicesBgImage from '../assets/img/uslugi.jpg';
import vacanciesImage from  '../assets/img/career.jpg';
import newsImage from  '../assets/img/news.jpg';
import faqImage from '../assets/img/faq.jpg';
import webDesignImage from '../assets/img/webdesign.jpg';
import internetMarketingImage from '../assets/img/internet-marketing.jpg';
import qaTestingImg from "../assets/img/qa-testing.jpg";
import siteCreatingImage from '../assets/img/sitecreating.jpg';
import landingPageImg from "../assets/img/landing-page.jpg";
import businessCardImg from "../assets/img/businesscardsite.jpg";
import corporateSiteImg from "../assets/img/corporate-site.jpg";
import SitePrototypeImg from "../assets/img/site-prototype.jpg";
import onlineStoreImg from "../assets/img/online-store.jpg";
import landingDesignImg from "../assets/img/landingdesign.jpg";
import siteDesignImg from "../assets/img/site-design.jpg";
import seoImg from "../assets/img/seo.jpg";
import ppcImg from "../assets/img/ppc.jpg";
import smmImg from "../assets/img/smm.jpg";
import pricesImg from "../assets/img/prices.jpg";
import uniqueServicesImg from "../assets/img/unique-services.jpg";
import brandingImg from "../assets/img/branding.jpg";
import emailMarketingImg from "../assets/img/email-marketing.jpg";
import autoprostavkaImg from "../assets/img/autoprostavka.jpg";
import seoAuditImg from "../assets/img/seo-audit.jpg";
import semanticCoreImg from "../assets/img/semantic-core.jpg";
import bronexImg from "../assets/img/bronex.jpg";
import sharovaImg from "../assets/img/sharova.jpg"
import pragmaImg from "../assets/img/pragma.jpg"
import internalOptimizationImg from "../assets/img/internal-optimization.jpg"
import externalOptimizationImg from "../assets/img/external-optimization.jpg"
import remarketingImg from "../assets/img/remarketing.jpg";
import ppcSettingImg from "../assets/img/ppc-setting.jpg";
import googleShoppingImg from "../assets/img/google-shopping.jpg";
import ppcAuditImg from "../assets/img/ppc-audit.jpg";
import smmFacebookImg from "../assets/img/facebook-smm.jpg";
import smmInstagramImg from "../assets/img/instagram-smm.jpg";
import otherSmmImg from "../assets/img/other-smm.jpg";
import smmAdsImg from "../assets/img/smm-ads.jpg";
import uiuxdesignerImg from "../assets/img/UI-UX-Designer.jpg";
import photographyImg from "../assets/img/photography.jpg";
import Sitemap from "../pages/Sitemap";

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
    bgimage: aboutUsImage,
    exact: true
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
    bgimage: portfolioBgImage,
    exact: true
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
    bgimage: servicesBgImage,
    exact: true
  },
  {//Цены
    id: 4,
    name: 'prices',
    label: 'Цены',
    path: '/prices',
    component: () => <Prices />,
    headdingtitle:'Цены',
    description: '16.web studio специализируется на веб-дизайне, создании адаптивных интернет-проектов, брендинге и рекламной фотографии.',
    bgimage: pricesImg,
    exact: true
  },
  {//Контакты
    id: 5,
    name: 'contact',
    label: 'Контакты',
    path: '/contact',
    component: () => <Contact />,
    headdingtitle:'Контакты',
    description: '16.web studio специализируется на веб-дизайне, создании адаптивных интернет-проектов, брендинге и рекламной фотографии.',
    bgimage: homeBgImage,
    exact: true
  },
  {//Вакансии
    id: 6,
    name: 'vacancies',
    label: 'Вакансии',
    path: '/vacancies',
    component: () => <Vacancies />,
    headdingtitle:'Карьера',
    description: '16.web studio специализируется на веб-дизайне, создании адаптивных интернет-проектов, брендинге и рекламной фотографии.',
    bgimage: vacanciesImage,
    exact: true
  },
  {//Новости
    id: 7,
    name: 'news',
    label: 'Новости',
    path: '/news',
    component: () => <News />,
    headdingtitle:'Новости',
    description: '16.web studio специализируется на веб-дизайне, создании адаптивных интернет-проектов, брендинге и рекламной фотографии.',
    bgimage: newsImage,
    exact: true
  },

  {//FAQ
    id: 8,
    name: 'faq',
    label: 'FAQ',
    path: '/faq',
    component: () => <Faq />,
    headdingtitle: 'FAQ',
    description: '16.web studio специализируется на веб-дизайне, создании адаптивных интернет-проектов, брендинге и рекламной фотографии.',
    bgimage: faqImage,
    exact: true
  },

  {//Создание сайтов
    id: 9,
    name: 'siteCreating',
    label: 'Создание сайтов',
    path: '/services/sitecreating',
    parent: 'services',
    component: () => <SiteCreating />,
    headdingtitle:'Создание сайтов',
    description: 'При разработке сайта специалисты студии 16.web создают ресурс, полностью соответствующий целям и задачам, сформулированным заказчиком.',
    bgimage: siteCreatingImage,
    exact: true
  },

  {//Веб-дизайн
    id: 10,
    name: 'webDesign',
    label: 'Веб-дизайн',
    path: '/services/webdesign',
    parent: 'services',
    component: () => <WebDesign />,
    headdingtitle:'Веб-дизайн',
    description: 'Мы передадим идею вашего бренда посредством подбора оптимальной цветовой гаммы, креативной композиции и грамотной типографики.',
    bgimage: webDesignImage,
    exact: true
  },

  {//Интернет - маркетинг
    id: 11,
    name: 'internetMarketing',
    label: 'Интернет - маркетинг',
    path: '/services/internetmarketing',
    parent: 'services',
    component: () => <InternetMarketing />,
    headdingtitle:'Интернет-маркетинг',
    description: 'Студия 16.web для продвижения в сети использует комплексный интернет-маркетинг, предполагающий применение всех онлайн-технологий.',
    bgimage: internetMarketingImage,
    exact: true
  },

  {//Фотосьемка
    id: 11,
    name: 'photography',
    label: 'Фотосьемка',
    path: '/services/photography',
    parent: 'services',
    component: () => <Photography />,
    headdingtitle:'Предметная фотосъёмка',
    description: 'Предметные фотосессии помогут вам выгодно представить товары в интернет-магазине или Instagram, и увеличить посещаемость ресурса и уровень продаж.',
    bgimage: photographyImg,
    exact: true
  },

  {//Брендинг
    id: 12,
    name: 'branding',
    label: 'Брендинг',
    path: '/services/branding',
    parent: 'services',
    component: () => <Branding />,
    headdingtitle: 'Брендинг',
    description: 'Студия 16.web в процессе разработки бренда создаёт все необходимые атрибуты, необходимые товарному знаку с уникальным имиджем.',
    bgimage: brandingImg,
    exact: true
  },

  {//SEO
    id: 13,
    name: 'seo',
    label: 'SEO',
    path: '/services/internetmarketing/seo',
    parent: 'services',
    component: () => <Seo />,
    headdingtitle:'SEO',
    description: 'Наша студия предлагает свои услуги по раскрутке сайтов при помощи SEO – это хорошая возможность продвинуть ваш ресурс в топы поисковых рейтингов.',
    bgimage: seoImg,
    exact: true
  },

  {//SMM
    id: 14,
    name: 'smm',
    label: 'SMM',
    path: '/services/internetmarketing/smm',
    parent: 'services',
    component: () => <Smm />,
    headdingtitle:'SMM',
    description: 'Продвижение в социальных сетях является частью любой рекламной кампании – это возможность рассказать целевой аудитории о продукте.',
    bgimage: smmImg,
    exact: true
  },

  {//QA-тестирование
    id: 15,
    name: 'qaTesting',
    label: 'QA-тестирование',
    path: '/services/qatesting',
    parent: 'services',
    component: () => <QaTesting />,
    headdingtitle:'QA-тестирование',
    description: 'Студия 16.web определит, насколько эффективна ваша онлайн-платформа, корректно ли работают все её службы и отвечает ли она требованиям и стандартам.',
    bgimage: qaTestingImg,
    exact: true
  },

  {//Дизайн лендинга
    id: 16,
    name: 'landingDesign',
    label: 'Дизайн лендинга',
    path: '/services/webdesign/landingdesign',
    parent: 'services',
    component: () => <LandingDesign />,
    headdingtitle:'Дизайн лендинга',
    description: 'Наша студия предлагает свои услуги по разработке дизайна лендинг-пейдж – одностраничного сайта, представляющего ваш бизнес в лаконичной форме.',
    bgimage: landingDesignImg,
    exact: true
  },

  {//Контекстная реклама
    id: 17,
    name: 'ppc',
    label: 'Контекстная реклама',
    path: '/services/internetmarketing/ppc',
    parent: 'services',
    component: () => <Ppc />,
    headdingtitle: 'PPC',
    description: 'Настройка контекстной рекламы позволит привлечь на сайт заинтересованных посетителей, которые с высокой вероятностью могут стать вашими клиентами.',
    bgimage: ppcImg,
    exact: true
  },

  {//Дизайн сайта
    id: 18,
    name: 'siteDesign',
    label: 'Дизайн сайта',
    path: '/services/webdesign/sitedesign',
    parent: 'services',
    component: () => <SiteDesign />,
    headdingtitle: 'Дизайн сайта',
    description: 'Наша студия предлагает свои услуги по разработке дизайна сайта – мы позаботимся о том, чтобы ваша онлайн-площадка стильно выглядела и была удобной.',
    bgimage: siteDesignImg,
    exact: true
  },

  {//Уникальные решения
    id: 19,
    name: 'uniqueservices',
    label: 'Уникальные решения',
    path: '/services/sitecreating/uniqueservices',
    parent: 'services',
    component: () => <UniqueServices />,
    headdingtitle: 'Уникальные решения',
    description: 'При создании индивидуального сайта мы готовы разработать для вас полностью уникальный ресурс с учётом поставленных задач и высказанных пожеланий.',
    bgimage: uniqueServicesImg,
    exact: true
  },

  {//Сайт-каталог *
    id: 20,
    name: 'catalogsite',
    label: 'Сайт-каталог',
    path: '/portfolio/catalogsite',
    parent: 'portfolio',
    component: () => <CatalogSite />,
    headdingtitle:'Сайт-каталог',
    description: '',
    bgimage: '',
    exact: true
  },

  {//Сайт-визитка
    id: 21,
    name: 'businesscardsite',
    label: 'Сайт-визитка',
    path: '/services/sitecreating/businesscardsite',
    parent: 'services',
    component: () => <BusinessCardSite />,
    headdingtitle:'Сайт-визитка',
    description: 'Наша студия предлагает свои услуги по изготовлению сайта-визитки – это отличный вариант рекламы для представителей малого бизнеса.',
    bgimage: businessCardImg,
    exact: true
  },

  {//Интернет-магазин
    id: 22,
    name: 'onlinestore',
    label: 'Интернет-магазин',
    path: '/services/sitecreating/onlinestore',
    parent: 'services',
    component: () => <OnlineStore />,
    headdingtitle:'Интернет-магазин',
    description: 'Заказывая у нас создание интернет-магазина под ключ, вы получаете удобную и функциональную онлайн-платформу, на которой можно продавать любые товары.',
    bgimage: onlineStoreImg,
    exact: true
  },

  {//Лендинг
    id: 23,
    name: 'landingpage',
    label: 'Лендинг',
    path: '/services/sitecreating/landingpage',
    parent: 'services',
    component: () => <LandingPage />,
    headdingtitle:'Лендинг',
    description: 'Студия 16.web предлагает услуги своих специалистов, готовых создать одностраничный сайт, на котором будут информативно и лаконично представлена ваша компания.',
    bgimage: landingPageImg,
    exact: true
  },

  {//Корпоративный сайт
    id: 24,
    name: 'corporatesite',
    label: 'Корпоративный сайт',
    path: '/services/sitecreating/corporatesite',
    parent: 'services',
    component: () => <CorporateSite />,
    headdingtitle:'Корпоративный сайт',
    description: 'Предлагаем разработку корпоративного сайта под ключ – это позволит вам комуницировать с целевой аудиторией и взаимодействовать с сотрудниками.',
    bgimage: corporateSiteImg,
    exact: true
  },

  {//Прототип сайта
    id: 25,
    name: 'siteprototype',
    label: 'Прототип сайта',
    path: '/services/webdesign/siteprototype',
    parent: 'services',
    component: () => <SitePrototype />,
    headdingtitle:'Прототип сайта',
    description: 'В ходе разработки концепции сайта создаётся прототип, по которому заказчик может себе представить общий вид будущего интернет-ресурса.',
    bgimage: SitePrototypeImg,
    exact: true
  },
  {//E-mail маркетинг
    id: 25,
    name: 'emailMarketing',
    label: 'E-mail-маркетинг',
    path: '/services/internetmarketing/email-marketing',
    parent: 'services',
    component: () => <EmailMarketingSteps />,
    headdingtitle:'E-mail маркетинг',
    description: 'Мы поможем вам запустить e-mail-маркетинг с нуля и позаботимся о том, чтобы сделать его максимально эффективным.',
    bgimage: emailMarketingImg,
    exact: true
  },
  {//SEO Аудит сайта
    id: 26,
    name: 'seoAudit',
    label: 'SEO Аудит сайта',
    path: '/services/internetmarketing/seo/seo-audit',
    parent: 'seo',
    component: () => <SeoAudit />,
    headdingtitle:'SEO Аудит сайта',
    description: 'Аудит сайта — необходимый этап SEO для получения информации по возможных ошибках оптимизации, потоку аудитории, работоспособности контента.',
    bgimage: seoAuditImg,
    exact: true
  },
  {//Семантика сайта для продвижения
    id: 27,
    name: 'semanticCore',
    label: 'Семантика сайта для продвижения',
    path: '/services/internetmarketing/seo/semantic-core',
    parent: 'seo',
    component: () => <OrderInfoSemanticCore />,
    headdingtitle:'Семантика сайта для продвижения',
    description: 'Разработку семантического ядра сайта нужно заказать обязательно, если планируется его продвижение. Команда 16.web справиться с этой задачей.',
    bgimage: semanticCoreImg,
    exact: true
  },
  {//Внутренняя оптимизация сайта
    id: 28,
    name: 'internalOptimization',
    label: 'Внутренняя оптимизация сайта',
    path: '/services/internetmarketing/seo/internal-optimization',
    parent: 'seo',
    component: () => <InternalOptimization />,
    headdingtitle:'Внутренняя оптимизация сайта как основа его развития',
    description: 'Эта задача требует внимания к деталям.',
    bgimage: internalOptimizationImg,
    exact: true
  },
  {//Внешняя оптимизация сайта
    id: 29,
    name: 'externalOptimization',
    label: 'Внешняя оптимизация сайта',
    path: '/services/internetmarketing/seo/external-optimization',
    parent: 'seo',
    component: () => <ExternalOptimization />,
    headdingtitle:'Внешняя оптимизация сайта',
    description: 'Внешнее продвижение сайта — это комплексная работа, которая заключается в построении качественных ссылочных связей с внешними ресурсами.',
    bgimage: externalOptimizationImg,
    exact: true
  },
  {//Поисковый ремаркетинг
    id: 30,
    name: 'remarketing',
    label: 'Поисковый ремаркетинг',
    path: '/services/internetmarketing/ppc/remarketing',
    parent: 'ppc',
    component: () => <Remarketing />,
    headdingtitle:'Поисковый ремаркетинг',
    description: 'До 60% посетителей интернет-магазинов не покупают при первом посещении. Настройка ремаркетинга — это повторные контакты с целевой аудиторией.',
    bgimage: remarketingImg,
    exact: true
  },
  {//Настройка Гугл Шопинг
    id: 31,
    name: 'googleShopping',
    label: 'Настройка Гугл Шопинг',
    path: '/services/internetmarketing/ppc/google-shopping',
    parent: 'ppc',
    component: () => <GoogleShopping />,
    headdingtitle:'Настройка Гугл Шопинг для активных продаж',
    description: 'Google Shopping считается крупнейшим сервисом товарной рекламы. Грамотная настройка Гугл Шопинг — это недорогой целевой трафик.',
    bgimage: googleShoppingImg,
    exact: true
  },
  {//Аудит контекстной рекламы
    id: 32,
    name: 'ppcAudit',
    label: 'Аудит контекстной рекламы',
    path: '/services/internetmarketing/ppc/ppc-audit',
    parent: 'ppc',
    component: () => <PpcAudit />,
    headdingtitle:'Аудит контекстной рекламы',
    description: 'Уверены в том, что контекстная реклама работает на максимум? Аудит контекстной рекламы даст точный ответ на этот, всегда актуальный, вопрос.',
    bgimage: ppcAuditImg,
    exact: true
  },
  {//Настройка контекстной рекламы
    id: 33,
    name: 'ppcSetting',
    label: 'Настройка контекстной рекламы',
    path: '/services/internetmarketing/ppc/ppc-setting',
    parent: 'ppc',
    component: () => <PpcSetting />,
    headdingtitle:'Настройка контекстной рекламы',
    description: 'Контекстная реклама — это быстрый и надежный старт бизнеса в интернете. Закажите контекстную рекламу и почувствуйте все ее преимущества.',
    bgimage: ppcSettingImg,
    exact: true
  },
  {//
    id: 34,
    name: 'facebookSmm',
    label: 'Продвижение в Фейсбуке',
    path: '/services/internetmarketing/smm/facebook-smm',
    parent: 'smm',
    component: () => <SmmFacebook />,
    headdingtitle:'Продвижение в Фейсбуке',
    description: 'Facebook уже давно превратился из соцсети в мощный бизнес-инструмент. Продвижение в Facebook способствует эффективному росту вашего бизнеса.',
    bgimage: smmFacebookImg,
    exact: true
  },
  {//
    id: 35,
    name: 'instagramSmm',
    label: 'Продвижение в Instagram',
    path: '/services/internetmarketing/smm/instagram-smm',
    parent: 'smm',
    component: () => <SmmInstagram />,
    headdingtitle:'Продвижение в Instagram',
    description: 'Instagram — это одна из самых популярных социальных сетей. А SMM в Инстаграм — это услуга, которая сделает из этой платформы мощный инструмент для развития бизнеса.',
    bgimage: smmInstagramImg,
    exact: true
  },
  {//
    id: 36,
    name: 'otherSmm',
    label: 'Продвижение в других социальных сетях',
    path: '/services/internetmarketing/smm/other-smm',
    parent: 'smm',
    component: () => <OtherSmm />,
    headdingtitle:'Продвижение в других социальных сетях',
    description: 'Сегодня активное продвижение в TikTok, Twitter, Behance и Telegram — это стратегическое конкурентное преимущество.',
    bgimage: otherSmmImg,
    exact: true
  },
  {//
    id: 37,
    name: 'smmAds',
    label: 'Реклама в социальных сетях',
    path: '/services/internetmarketing/smm/smm-ads',
    parent: 'smm',
    component: () => <SmmAds />,
    headdingtitle:'Реклама в социальных сетях',
    description: 'Продвижение в социальных сетях — это комбинация классического SMM и таргетированной рекламы. Комплексный подход дает лучший результат.',
    bgimage: smmAdsImg,
    exact: true
  },
  {//Autoprostavka
    id: 38,
    name: 'autoprostavka',
    label: 'autoprostavka',
    path: '/portfolio/autoprostavka',
    component: () => <Autoprostavka />,
    headdingtitle: 'Автопроставка',
    description: 'Компания “Автопроставка” специализируется на изготовлении и установке разных видов проставок и защит двигателей, а также предлагают свои услуги по восстановлению шаровых опор, замене пыльников и изготовлению металлоконструкций.',
    bgimage: autoprostavkaImg,
    exact: true
  },
  {//Bronex
    id: 39,
    name: 'bronex',
    label: 'bronex',
    path: '/portfolio/bronex',
    component: () => <Bronex />,
    headdingtitle: 'Bronex',
    description: 'Компания “Bronex” специализируется на изготовлении и установке разных видов защит двигателей',
    bgimage: bronexImg,
    exact: true
  },
  {//Sharova
    id: 39,
    name: 'sharova',
    label: 'sharova',
    path: '/portfolio/sharova',
    component: () => <Sharova />,
    headdingtitle: 'Восстановление шаровых опор',
    description: 'Компания специализируется по восстановлению шаровых опор',
    bgimage: sharovaImg,
    exact: true
  },
  {//Pragma
    id: 40,
    name: 'pragma',
    label: 'pragma',
    path: '/portfolio/pragma',
    component: () => <Pragma />,
    headdingtitle: 'Прагма',
    description: 'Компания специализируется по изготовлению металоконструкций',
    bgimage: pragmaImg,
    exact: true
  },
  {//Ui-UX designer
    id: 41,
    name: 'uiuxdesigner',
    label: 'uiuxdesigner',
    path: '/vacancies/ui-ux-designer',
    component: () => <UiUxDesigner />,
    headdingtitle: 'UI/UX designer',
    description: 'Мы ищем специалиста, который мог бы вместе с нашей командой работать над интересными проектами и развиваться в направлении IT',
    bgimage: uiuxdesignerImg,
    exact: true
  },
  {//SEO специалист
    id: 42,
    name: 'seospecialist',
    label: 'seoSpecialist',
    path: '/vacancies/seo-specialist',
    component: () => <SeoSpecialist />,
    headdingtitle: 'SEO специалист',
    description: 'Мы ищем специалиста, который мог бы вместе с нашей командой работать над интересными проектами и развиваться в направлении IT',
    bgimage: uiuxdesignerImg,
    exact: true
  },
  {//SEO специалист
    id: 43,
    name: 'developer1c',
    label: 'developer1c',
    path: '/vacancies/1c-developer',
    component: () => <Developer1c />,
    headdingtitle: 'Разработчик 1С',
    description: 'Мы ищем специалиста, который мог бы вместе с нашей командой работать над интересными проектами и развиваться в направлении IT',
    bgimage: uiuxdesignerImg,
    exact: true
  },
  {//Карта сайта
    id: 44,
    name: 'sitemap',
    label: 'Карта сайта',
    path: '/sitemap',
    component: () => <Sitemap />,
    headdingtitle:'Карта сайта',
    description: '',
    exact: true
  },
  {//404
    id: 404,
    name: 'notFound',
    label: '404',
    path: '/not-found',
    component: () => <NotFound />,
    headdingtitle:'404',
    description: 'Страница отсутствует или не найдена',
    exact: true
  }
];

export default DataArray