export interface Portfolio {
  title: string
  objective: string
  description: string
  technologies: string
  deployUrl: string
  sourceCodeUrl: string
  startedAt: string
  completedAt: string
}
export interface MyPortfolio {
  "ru": Portfolio[]
  "en": Portfolio[]
}

export const myPortfolio: MyPortfolio = {
  "ru": [
    {
      title: "momentum-rss",
      objective: "Написать с нуля аналог плагина Google Momentum",
      description: "Приложение для релакса: на фоне картинки живой природы,встроенный плеер,мудрые цитаты,погода на сегодня, и в центре всего - время,чтобы не долго не засиживаться )",
      technologies: "HTML,CSS,Javascript,Webpack,Rest API",
      deployUrl: "https://crecker05ru.github.io/momentum-rss/",
      sourceCodeUrl: "https://github.com/crecker05ru/momentum-rss",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "plants-rss",
      objective: "Сверстать сайт в рамках курса RS",
      description: "Сайт о садоводстве",
      technologies: "HTML,CSS,Javascript",
      deployUrl: "https://crecker05ru.github.io/plants-rss/",
      sourceCodeUrl: "https://github.com/crecker05ru/plants-rss",
      startedAt: "",
      completedAt: ""
    },{
      title: "connections-rss",
      objective: "Создать приложение для группового общения или общения с другим пользователем",
      description: "Приложение для обмена сообщениями используя Rest API",
      technologies: "Angular,NgRx,Rest API",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/connections-rss",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "e-commerce",
      objective: "Создать интернет-магазин в рамках курса RS",
      description: "Интернет магазин для покупки органических продуктов",
      technologies: "Jira,React ,Redux, RTK Query,Rest API",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/High-lavander/e-commerce",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "async-race",
      objective: "Создать приложение для взаимодействия с сервером в рамках курса RS",
      description: "Устраиваем гонки!Только смотрите чтобы ваш двигатель вас не подвел )",
      technologies: "HTML,CSS,Javascript,HTTP,Rest API",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/async-race",
      startedAt: "",
      completedAt: ""
    },{
      title: "HTML-builder",
      objective: "Создать свой сборщик в рамках курса RS",
      description: "Сборщик создан на Node.js ,собирает файлы,переписывает и очищает",
      technologies: "Javascript,Node JS",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/HTML-builder",
      startedAt: "",
      completedAt: ""
    },{
      title: "CheGotovit",
      objective: "Создать приложение для поиска рецептов с подробным описанием состава продуктов и их нутриентов",
      description: "Без еды человек долго не протянет ,а без хорошей и полезной еды протянет,но не долго.В строке поиска вбиваете название продукта,из чего бы вы хотели приготовить себе еду,и сразу видите всевозможные рецепты и их состав вплоть до химических элементов",
      technologies: "React,PWA,Rest API",
      deployUrl: "https://starlit-twilight-3360a5.netlify.app/",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      startedAt: "",
      completedAt: ""
    },{
      title: "Order table",
      objective: "Создать прложения для совместных покупок и внтуренним чатом,изучить WebSockets",
      description: "",
      technologies: "React/Next.js,Node.js,Express.js,Postgres,WebSockets",
      deployUrl: "https://bikeband-order-table-client-6ctgq6oi2-crecker05ru.vercel.app/",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      startedAt: "",
      completedAt: ""
    },{
      title: "Youtube client",
      objective: "Создать прложение для совместных покупок и внтуренним чатом,изучить WebSockets",
      description: "Проект написаный в рамках курса RS Shcool - UI для поиска видео yotube с возможностью добавления в избранные профиля.",
      technologies: "Angular,NgRx,Material UI",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      deployUrl: "",
      startedAt: "",
      completedAt: ""
    },{
      title: "Conversation",
      objective: "Создать приложение для совместных покупок и внтуренним чатом,изучить WebSockets",
      description: "Проект написаный в рамках курса RS Shcool - UI для поиска видео yotube с возможностью добавления в избранные профиля.",
      technologies: "Angular,NgRx",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      deployUrl: "",
      startedAt: "",
      completedAt: ""
    },{
      title: "bikeband-order-table-client ",
      objective: "",
      description: "",
      technologies: "Vue, Quasar",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      deployUrl: "",
      startedAt: "",
      completedAt: ""
    },{
      title: "golden-layout2 ",
      objective: "Создать прложения для совместных покупок и внтуренним чатом,изучить WebSockets",
      description: "Проект написаный в рамках курса RS Shcool - UI для поиска видео yotube с возможностью добавления в избранные профиля.",
      technologies: "Angular,NgRx",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      deployUrl: "",
      startedAt: "",
      completedAt: ""
    },{
      title: "nextjs-nodejs-graphql-mysql-training ",
      objective: "Создать приложение для поиска рецептов с подробным описанием состава продуктов и их нутриентов",
      description: "",
      technologies: "React",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      startedAt: "",
      completedAt: ""
    },{
      title: "magazine-stiled-blog",
      objective: "Создать приложение для поиска рецептов с подробным описанием состава продуктов и их нутриентов",
      description: "",
      technologies: "React",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      startedAt: "",
      completedAt: ""
    },

  ],
  "en": [
    {
      title: "momentum-rss",
      objective: "Создать приложение для поиска рецептов с подробным описанием состава продуктов и их нутриентов",
      description: "",
      technologies: "Javascript,Rest API",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/momentum-rss",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "plants-rss",
      objective: "Создать приложение для поиска рецептов с подробным описанием состава продуктов и их нутриентов",
      description: "",
      technologies: "Javascript,Rest API",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/plants-rss",
      startedAt: "",
      completedAt: ""
    },{
      title: "connections-rss",
      objective: "Создать приложение для поиска рецептов с подробным описанием состава продуктов и их нутриентов",
      description: "",
      technologies: "Javascript,Rest API",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/connections-rss",
      startedAt: "",
      completedAt: ""
    },{
      title: "e-commerce",
      objective: "Создать приложение для поиска рецептов с подробным описанием состава продуктов и их нутриентов",
      description: "",
      technologies: "Javascript,Rest API",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/High-lavander/e-commerce",
      startedAt: "",
      completedAt: ""
    },{
      title: "async-race",
      objective: "Создать приложение для поиска рецептов с подробным описанием состава продуктов и их нутриентов",
      description: "",
      technologies: "Javascript,Rest API",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/async-race",
      startedAt: "",
      completedAt: ""
    },{
      title: "HTML-builder",
      objective: "Создать приложение для поиска рецептов с подробным описанием состава продуктов и их нутриентов",
      description: "",
      technologies: "Javascript,Node JS",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/HTML-builder",
      startedAt: "",
      completedAt: ""
    },{
      title: "CheGotovit",
      objective: "Создать приложение для поиска рецептов с подробным описанием состава продуктов и их нутриентов",
      description: "",
      technologies: "React",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      startedAt: "",
      completedAt: ""
    },{
      title: "Order table",
      objective: "Создать прложения для совместных покупок и внтуренним чатом,изучить WebSockets",
      description: "",
      technologies: "React/Next.js,Node.js,Express.js,Postgres,WebSockets",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      deployUrl: "",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Youtube client",
      objective: "Создать прложение для совместных покупок и внтуренним чатом,изучить WebSockets",
      description: "Проект написаный в рамках курса RS Shcool - UI для поиска видео yotube с возможностью добавления в избранные профиля.",
      technologies: "Angular,NgRx,Material UI",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      deployUrl: "",
      startedAt: "",
      completedAt: ""
    },{
      title: "Conversation",
      objective: "Создать приложение для совместных покупок и внтуренним чатом,изучить WebSockets",
      description: "Проект написаный в рамках курса RS Shcool - UI для поиска видео yotube с возможностью добавления в избранные профиля.",
      technologies: "Angular,NgRx",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      deployUrl: "",
      startedAt: "",
      completedAt: ""
    },{
      title: "bikeband-order-table-client ",
      objective: "",
      description: "",
      technologies: "Vue, Quasar",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      deployUrl: "",
      startedAt: "",
      completedAt: ""
    },{
      title: "golden-layout2 ",
      objective: "Создать прложения для совместных покупок и внтуренним чатом,изучить WebSockets",
      description: "Проект написаный в рамках курса RS Shcool - UI для поиска видео yotube с возможностью добавления в избранные профиля.",
      technologies: "Angular,NgRx",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      deployUrl: "",
      startedAt: "",
      completedAt: ""
    },{
      title: "nextjs-nodejs-graphql-mysql-training ",
      objective: "Создать приложение для поиска рецептов с подробным описанием состава продуктов и их нутриентов",
      description: "",
      technologies: "React",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      startedAt: "",
      completedAt: ""
    },{
      title: "magazine-stiled-blog",
      objective: "Создать приложение для поиска рецептов с подробным описанием состава продуктов и их нутриентов",
      description: "",
      technologies: "React",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      startedAt: "",
      completedAt: ""
    },
  ]
} 


export const myTestTasks = [
  {
  "ru": [
    {
    title: "test-webtronics-quasar",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },
],
  "en": [
    {
    title: "test-webtronics-quasar",
    objective: "",
    description: "",
    technologies: "",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  }
]
},  {
  "ru": {
    title: "webGL-draw",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },
  "en": {
    title: "webGL-draw",
    objective: "",
    description: "",
    technologies: "",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  }
},{
  "ru": {
    title: "itlogy-task",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },
  "en": {
    title: "itlogy-task",
    objective: "",
    description: "",
    technologies: "",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  }
},{
  "ru": {
    title: "dss-lab-puzzle",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },
  "en": {
    title: "dss-lab-puzzle",
    objective: "",
    description: "",
    technologies: "",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  }
},{
  "ru": {
    title: "fsd-redux-task ",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },
  "en": {
    title: "fsd-redux-task ",
    objective: "",
    description: "",
    technologies: "",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  }
},{
  "ru": {
    title: "vue-redactor-task",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },
  "en": {
    title: "vue-redactor-task",
    objective: "",
    description: "",
    technologies: "",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  }
},{
  "ru": {
    title: "vue-redactor-task",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },
  "en": {
    title: "vue-redactor-task",
    objective: "",
    description: "",
    technologies: "",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  }
},{
  "ru": {
    title: "pug-nuxt3-client-task ",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },
  "en": {
    title: "pug-nuxt3-client-task ",
    objective: "",
    description: "",
    technologies: "",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  }
},{
  "ru": {
    title: "my-vue-widget",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },
  "en": {
    title: "my-vue-widget",
    objective: "",
    description: "",
    technologies: "",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  }
},{
  "ru": {
    title: "virtual-keyboard",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },
  "en": {
    title: "virtual-keyboard",
    objective: "",
    description: "",
    technologies: "",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  }
},{
  "ru": {
    title: "PDD-test-task",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },
  "en": {
    title: "PDD-test-task",
    objective: "",
    description: "",
    technologies: "",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  }
},{
  "ru": {
    title: "procontext-task ",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },
  "en": {
    title: "procontext-task ",
    objective: "",
    description: "",
    technologies: "",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  }
},{
  "ru": {
    title: "hammer-systems-test-task",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },
  "en": {
    title: "hammer-systems-test-task",
    objective: "",
    description: "",
    technologies: "",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  }
},{
  "ru": {
    title: "lit-kron",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },
  "en": {
    title: "lit-kron",
    objective: "",
    description: "",
    technologies: "",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  }
},
{
  "ru": {
    title: "try-canvas",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },
  "en": {
    title: "try-canvas",
    objective: "",
    description: "",
    technologies: "",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  }
},{
  "ru": {
    title: "cron-react-test",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },
  "en": {
    title: "cron-react-test",
    objective: "",
    description: "",
    technologies: "",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  }
},{
  "ru": {
    title: "equite-landing",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },
  "en": {
    title: "equite-landing",
    objective: "",
    description: "",
    technologies: "",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  }
},{
  "ru": {
    title: "shtrafov-net-UI",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },
  "en": {
    title: "shtrafov-net-UI",
    objective: "",
    description: "",
    technologies: "",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  }
},{
  "ru": {
    title: "weather-api-reactjs",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },
  "en": {
    title: "weather-api-reactjs",
    objective: "",
    description: "",
    technologies: "",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  }
},{
  "ru": {
    title: "avito-test-task-reactjs",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },
  "en": {
    title: "avito-test-task-reactjs",
    objective: "",
    description: "",
    technologies: "",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  }
},{
  "ru": {
    title: "tochka-tochka",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },
  "en": {
    title: "tochka-tochka",
    objective: "",
    description: "",
    technologies: "",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  }
},
]
