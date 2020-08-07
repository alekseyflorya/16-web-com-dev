const SitemapArray = [
  {
    name: 'Главная',
    path:'/',
  },
  {
    name: 'О нас',
    path:'/about',
  },
  {
    name: 'Услуги',
    path:'/services',
    children: [
      {
        name: 'Создание сайтов',
        path: '/services/sitecreating',
        children: [
          {
            name:'Лендинг',
            path:'/services/sitecreating/landingpage'
          },
          {
            name:'Сайт-визитка',
            path:'/services/sitecreating/businesscardsite'
          },
          {
            name:'Интернет-магазин',
            path:'/services/sitecreating/onlinestore'
          },
          {
            name:'Корпоративный сайт',
            path:'/services/sitecreating/corporatesite'
          },
          {
            name:'Уникальные решения',
            path:'/services/sitecreating/uniqueservices'
          }
        ]
      },
      {
        name: 'Веб дизайн',
        path: '/services/webdesign',
        children: [
          {
            name:'Дизайн лендинга',
            path:'/services/webdesign/landingdesign'
          },
          {
            name:'Дизайн сайта',
            path:'/services/webdesign/sitedesign'
          },
          {
            name:'Прототип сайта',
            path:'/services/webdesign/siteprototype'
          }
        ]
      },
      {
        name: 'Интернет маркетинг',
        path: '/services/internetmarketing',
        children: [
          {
            name: 'SEO',
            path: '/services/internetmarketing/seo',
            children: [
              {
                name:'SEO Аудит сайта',
                path:'/services/internetmarketing/seo/seo-audit'
              },
              {
                name:'Семантика сайта для продвижения',
                path:'/services/internetmarketing/seo/semantic-core'
              },
              {
                name:'Внутренняя оптимизация сайта',
                path:'/services/internetmarketing/seo/internal-optimization'
              },
              {
                name:'Внешняя оптимизация сайта',
                path:'/services/internetmarketing/seo/external-optimization'
              }
            ]
          },
          {
            name: 'Контекстная реклама',
            path: '/services/internetmarketing/ppc',
            children: [
              {
                name:'Настройка контекстной рекламы',
                path:'/services/internetmarketing/ppc/ppc-setting'
              },
              {
                name:'Поисковый ремаркетинг',
                path:'/services/internetmarketing/ppc/remarketing'
              },
              {
                name:'Настройка Гугл Шопинг',
                path:'/services/internetmarketing/ppc/google-shopping'
              },
              {
                name:'Аудит контекстной рекламы',
                path:'/services/internetmarketing/ppc/ppc-audit'
              }
            ]
          },
          {
            name: 'SMM',
            path: '/services/internetmarketing/smm',
            children: [
              {
                name:'Продвижение в Instagram',
                path:'/services/internetmarketing/smm/instagram-smm'
              },
              {
                name:'Продвижение в Фейсбуке',
                path:'/services/internetmarketing/smm/facebook-smm'
              },
              {
                name:'Продвижение в других социальных сетях',
                path:'/services/internetmarketing/smm/other-smm'
              },
              {
                name:'Реклама в социальных сетях',
                path:'/services/internetmarketing/smm/smm-ads'
              }
            ]
          },
          {
            name: 'E-mail маркетинг',
            path: '/services/internetmarketing/email-marketing'
          },
        ]
      },
      {
        name: 'QA',
        path: '/services/qatesting'
      },
      {
        name: 'Брендинг',
        path: '/services/branding'
      },
      {
        name: 'Предметная фотосьемка',
        path: '/services/photography'
      }
    ]
  },
  {
    name: 'Новости',
    path:'/news',
  },
  {
    name: 'Вакансии',
    path:'/vacancies',
  },
  {
    name: 'FAQ',
    path:'/faq',
  },
  {
    name: 'Цены',
    path:'/prices',
  },
  {
    name: 'Портфолио',
    path:'/portfolio',
  },
  {
    name: 'Контакы',
    path:'/contact',
  }
]
export default SitemapArray