export interface Portfolio {
  title: string
  objective: string
  description: string
  technologies: string
  deployUrl: string
  sourceCodeUrl: string
  startedAt: string
  completedAt: string
  githubTitle?: string
  commentary? :string
}

export enum Difficulties {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard",
  Insane = "Insane"

}
export interface TestTask {
  title: string
  githubTitle?: string
  objective?: string
  description?: string
  technologies?: string
  deployUrl?: string
  sourceCodeUrl?: string
  startedAt?: string
  completedAt?: string
  commentary? :string
  company?: string
  feedback?: string
  isCompleted?: boolean
  technicalTask?: string
  image?: string | string[]
  videoUrl?: string | string[]
  difficulty?: Difficulties
  involvementRating?: number
}
export interface MyPortfolio {
  "ru": Portfolio[]
  "en": Portfolio[]
}

export interface MyTestTasks {
  "ru": TestTask[]
  "en": TestTask[]
}

export const myPortfolio: MyPortfolio = {
  "ru": [
    {
      title: "Momentum",
      githubTitle: "momentum-rss",
      objective: "Написать с нуля аналог плагина Google Momentum",
      description: "Приложение для релакса: на фоне картинки живой природы,встроенный плеер,мудрые цитаты,погода на сегодня, и в центре всего - время,чтобы не долго не засиживаться )",
      technologies: "HTML,CSS,Javascript,Webpack,Rest API",
      deployUrl: "https://crecker05ru.github.io/momentum-rss/",
      sourceCodeUrl: "https://github.com/crecker05ru/momentum-rss",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Plants",
      githubTitle: "plants-rss",
      objective: "Сверстать сайт в рамках курса RS",
      description: "Сайт о садоводстве",
      technologies: "HTML,CSS,Javascript",
      deployUrl: "https://crecker05ru.github.io/plants-rss/",
      sourceCodeUrl: "https://github.com/crecker05ru/plants-rss",
      startedAt: "",
      completedAt: ""
    },    {
      title: "Shelter",
      githubTitle: "shelter-rss",
      objective: "Сверстать сайт в рамках курса RS",
      description: "Сайт о приюте для животных",
      technologies: "HTML,CSS,Javascript",
      deployUrl: "https://crecker05ru.github.io/rss-shelter/",
      sourceCodeUrl: "https://github.com/crecker05ru/rss-shelter",
      startedAt: "",
      completedAt: ""
    }, {
      title: "Minesweeper",
      githubTitle: "rss-miner",
      objective: "Создать игру Сапер в рамках купсах RS",
      description: "Игра про сапера )",
      technologies: "HTML,CSS,Javascript",
      deployUrl: "https://crecker05ru.github.io/rss-miner/",
      sourceCodeUrl: "https://github.com/crecker05ru/rss-miner",
      startedAt: "",
      completedAt: ""
    },{
      title: "CSS Selectors",
      githubTitle: "rss-css-selectors",
      objective: "Создать игровой тренажер в рамках курса RS",
      description: "Игра в которой писать в едиторе правильный селектор.Игра не сделана до конца",
      technologies: "HTML,CSS,Typescript",
      deployUrl: "https://crecker05ru.github.io/rss-css-selectors/",
      sourceCodeUrl: "https://github.com/crecker05ru/rss-css-selectors",
      startedAt: "",
      completedAt: ""
    }
    
    ,{
      title: "connections-rss",
      githubTitle: "Connections",
      objective: "Создать приложение для группового общения или общения с другим пользователем",
      description: "Приложение для обмена сообщениями используя Rest API",
      technologies: "Angular,NgRx,Rest API",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/connections-rss",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "E-commerce",
      githubTitle: "e-commerce",
      objective: "Создать интернет-магазин в рамках курса RS",
      description: "Интернет магазин для покупки органических продуктов",
      technologies: "Jira,React ,Redux, RTK Query,Rest API",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/High-lavander/e-commerce",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Async race",
      githubTitle: "async-race",
      objective: "Создать приложение для взаимодействия с сервером в рамках курса RS",
      description: "Устраиваем гонки!Только смотрите чтобы ваш двигатель вас не подвел )",
      technologies: "HTML,CSS,Javascript,HTTP,Rest API",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/async-race",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "HTML Builder",
      githubTitle: "HTML-builder",
      objective: "Создать свой сборщик в рамках курса RS",
      description: "Сборщик создан на Node.js ,собирает файлы,переписывает и очищает",
      technologies: "Javascript,Node JS",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/HTML-builder",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Чё готовить",
      githubTitle: "CheGotovit",
      objective: "Создать приложение для поиска рецептов с подробным описанием состава продуктов и их нутриентов",
      description: "Без еды человек долго не протянет ,а без хорошей и полезной еды протянет,но не долго.В строке поиска вбиваете название продукта,из чего бы вы хотели приготовить себе еду,и сразу видите всевозможные рецепты и их состав вплоть до химических элементов",
      technologies: "React,PWA,Rest API",
      deployUrl: "https://starlit-twilight-3360a5.netlify.app/",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Таблица заказов",
      githubTitle: "bikeband-order-table-client",
      objective: "Создать прложение для совместных покупок и внтуренним чатом,изучить WebSockets",
      description: "Приложение для совместных покупок и внутренним чатом",
      technologies: "React/Next.js,Node.js,Express.js,Postgres,WebSockets",
      deployUrl: "https://bikeband-order-table-client-6ctgq6oi2-crecker05ru.vercel.app/",
      sourceCodeUrl: "https://github.com/crecker05ru/bikeband-order-table-client",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Youtube",
      githubTitle: "youtube-client",
      objective: "Создать прложение для совместных покупок и внтуренним чатом,изучить WebSockets",
      description: "Проект написаный в рамках курса RS Shcool - UI для поиска видео yotube с возможностью добавления в избранные профиля.",
      technologies: "Angular,NgRx,Material UI",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      deployUrl: "https://github.com/crecker05ru/youtube-client",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Golden layout",
      githubTitle: "golden-layout",
      objective: "Сверстать сайт",
      description: "Сайт-макет, без адаптива",
      technologies: "HTML,CSS,Javascript",
      sourceCodeUrl: "https://github.com/crecker05ru/golden-layout2",
      deployUrl: "https://crecker05ru.github.io/golden-layout2/",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Fullstack Todo",
      githubTitle: "nextjs-nodejs-graphql-mysql-training",
      objective: "Изучить GraphQL,взаимодействие с GraphQL на сервере и клиенте",
      description: "Стандартная тудушка вместе с серверной частью",
      technologies: "React/Next.JS,GraphQL,MySQL",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/nextjs-nodejs-graphql-mysql-training",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Magazine blog",
      githubTitle: "magazine-stiled-blog",
      objective: "Верстка сайта",
      description: "Моя первая сверстаная страница,без какого либо респонсива и адаптива )",
      technologies: "HTML,CSS",
      deployUrl: "https://crecker05ru.github.io/magazine-stiled-blog/",
      sourceCodeUrl: "https://github.com/crecker05ru/magazine-stiled-blog/tree/dev",
      startedAt: "",
      completedAt: ""
    },

  ],
  "en": [
    {
      title: "Momentum",
      githubTitle: "momentum-rss",
      objective: "Write an analogue of the Google Momentum plugin from scratch",
      description: "An application for relaxation: with pictures of wildlife in the background, a built-in player, wise quotes, the weather for today, and in the center of everything - time, so as not to stay too long )",
      technologies: "HTML,CSS,Javascript,Webpack,Rest API",
      deployUrl: "https://crecker05ru.github.io/momentum-rss/",
      sourceCodeUrl: "https://github.com/crecker05ru/momentum-rss",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Plants",
      githubTitle: "plants-rss",
      objective: "Design a website as part of the RS course",
      description: "Gardening website",
      technologies: "HTML,CSS,Javascript",
      deployUrl: "https://crecker05ru.github.io/plants-rss/",
      sourceCodeUrl: "https://github.com/crecker05ru/plants-rss",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Shelter",
      githubTitle: "shelter-rss",
      objective: "Design a website as part of the RS course",
      description: "Animal shelter website",
      technologies: "HTML,CSS,Javascript",
      deployUrl: "https://crecker05ru.github.io/rss-shelter/",
      sourceCodeUrl: "https://github.com/crecker05ru/rss-shelter",
      startedAt: "",
      completedAt: ""
    }, {
      title: "Minesweeper",
      githubTitle: "rss-miner",
      objective: "Create a Minesweeper game within RS course",
      description: "A game about a sapper )",
      technologies: "HTML,CSS,Javascript",
      deployUrl: "https://crecker05ru.github.io/rss-miner/",
      sourceCodeUrl: "https://github.com/crecker05ru/rss-miner",
      startedAt: "",
      completedAt: ""
    },{
      title: "CSS Selectors",
      githubTitle: "rss-css-selectors",
      objective: "Create a gaming simulator as part of the RS course",
      description: "A game in which you write the correct selector in the editor. The game is not completed",
      technologies: "HTML,CSS,Typescript",
      deployUrl: "https://crecker05ru.github.io/rss-css-selectors/",
      sourceCodeUrl: "https://github.com/crecker05ru/rss-css-selectors",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "connections-rss",
      githubTitle: "Connections",
      objective: "Create an application for group communication or communication with another user",
      description: "Messaging application using Rest API",
      technologies: "Angular,NgRx,Rest API",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/connections-rss",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "E-commerce",
      githubTitle: "e-commerce",
      objective: "Create an online store as part of the RS course",
      description: "Online store for purchasing organic products",
      technologies: "Jira,React ,Redux, RTK Query,Rest API",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/High-lavander/e-commerce",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Async race",
      githubTitle: "async-race",
      objective: "Create an application to interact with the server as part of the RS course",
      description: "We're organizing races! Just make sure your engine doesn't let you down )",
      technologies: "HTML,CSS,Javascript,HTTP,Rest API",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/async-race",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "HTML Builder",
      githubTitle: "HTML-builder",
      objective: "Create your own collector as part of the RS course",
      description: "The collector is created on Node.js, collects files, rewrites and cleanses",
      technologies: "Javascript,Node JS",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/HTML-builder",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "CheGotovit",
      githubTitle: "CheGotovit",
      objective: "Create an application to search for recipes with a detailed description of the composition of products and their nutrients",
      description: "A person will not last long without food, and without good and healthy food he will last, but not for long. In the search bar, enter the name of the product, what you would like to cook your food from, and you will immediately see all sorts of recipes and their composition, down to the chemical elements",
      technologies: "React,PWA,Rest API",
      deployUrl: "https://starlit-twilight-3360a5.netlify.app/",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Order table",
      githubTitle: "bikeband-order-table-client",
      objective: "Create an application for joint purchases and internal chat, explore WebSockets",
      description: "Application for joint purchases and internal chat",
      technologies: "React/Next.js,Node.js,Express.js,Postgres,WebSockets",
      deployUrl: "https://bikeband-order-table-client-6ctgq6oi2-crecker05ru.vercel.app/",
      sourceCodeUrl: "https://github.com/crecker05ru/bikeband-order-table-client",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Youtube",
      githubTitle: "youtube-client",
      objective: "Create an application for joint purchases and internal chat, explore WebSockets",
      description: "A project written as part of the RS School course - UI for searching yotube videos with the ability to add to profile favorites.",
      technologies: "Angular,NgRx,Material UI",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      deployUrl: "https://github.com/crecker05ru/youtube-client",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Golden layout",
      githubTitle: "golden-layout",
      objective: "Create site",
      description: "Website layout, non-adaptive",
      technologies: "HTML,CSS,Javascript",
      sourceCodeUrl: "https://github.com/crecker05ru/golden-layout2",
      deployUrl: "https://crecker05ru.github.io/golden-layout2/",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Fullstack Todo",
      githubTitle: "nextjs-nodejs-graphql-mysql-training",
      objective: "Learn GraphQL, interaction with GraphQL on the server and client",
      description: "Standard package with server part",
      technologies: "React/Next.JS,GraphQL,MySQL",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/nextjs-nodejs-graphql-mysql-training",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Magazine blog",
      githubTitle: "magazine-stiled-blog",
      objective: "Website layout",
      description: "My first layout page, without any responsiveness or adaptation )",
      technologies: "HTML,CSS",
      deployUrl: "https://crecker05ru.github.io/magazine-stiled-blog/",
      sourceCodeUrl: "https://github.com/crecker05ru/magazine-stiled-blog/tree/dev",
      startedAt: "",
      completedAt: ""
    },
  ]
} 


export const myTestTasks: MyTestTasks = 
  {
  "ru": [
    {
    title: "Webtronics",
    company: "Webtronics",
    githubTitle: "test-webtronics-quasar",
    objective: "Создать приложение используя Quasar",
    description: "My first layout page, without any responsiveness or adaptation )",
    technicalTask: "https://docs.google.com/document/d/1nCNpEGXf0xsRjyeeKHl5M7QTBHafcOZ8/edit?usp=drive_link&ouid=109415402684053365214&rtpof=true&sd=true",
    technologies: "HTML, SCSS, TypeScript, Vue, Quasar",
    deployUrl: "https://extraordinary-gecko-e5d70f.netlify.app/",
    sourceCodeUrl: "https://github.com/crecker05ru/test-webtronics-quasar",
    startedAt: "",
    completedAt: "",
    commentary: "",
    feedback: "К сожалению, на данный момент мы не готовы пригласить Вас на собеседование.",
    isCompleted: true,
    image: "",
    difficulty: Difficulties.Medium,
    involvementRating: 8
  },{
    title: "3D Conus",
    company: "CADEX",
    githubTitle: "webGL-draw",
    objective: "Создать интерфейс для отрисовки 3D конуса",
    description: "Отрисовка 3D конуса по заданной формуле,также был более сложный пункт с картой нормалей,но я до нее не дошёл",
    technologies: "JavaScript, WebGL",
    deployUrl: "https://crecker05ru.github.io/webGL-draw/",
    startedAt: "",
    completedAt: "",    
    technicalTask: "https://drive.google.com/file/d/1yeyi9HBee4oLM3x45uEEMFh8_-rRQjeC/view?usp=drive_link",
    sourceCodeUrl: "https://github.com/crecker05ru/webGL-draw",
    commentary: "",
    feedback: "Было прислано слишком много работ.",
    isCompleted: false,
    image: "",
    difficulty: Difficulties.Hard,
    involvementRating: 10
    
  },
  {
    title: "Pizza Chief",
    company: "Айтилогия",
    githubTitle: "itlogy-task",
    objective: "Верстка сайта и отправка формы,видеоразбор работы",
    description: "Стандартная верстка макета с формой и видеоразбор работы ученика",
    technologies: "HTML, CSS, JavaScript",
    deployUrl: "https://crecker05ru.github.io/itlogy-task/src/",
    startedAt: "",
    completedAt: "",    
    technicalTask: "https://docs.google.com/document/d/1VmlJ4g9u994ipEpNg6_UdLRJlhV940SI/edit?usp=drive_link&ouid=109415402684053365214&rtpof=true&sd=true",
    sourceCodeUrl: "https://github.com/crecker05ru/itlogy-task/tree/main",
    commentary: "Впервые записывал видеоразбор работы ученика )",
    feedback: "Взяли разработчика с более большим опытом работы",
    isCompleted: true,
    videoUrl: "https://drive.google.com/file/d/12ItCTqSelJT8nC3X25qbadwqJrRXASD7/view?usp=drive_link",
    image: "",
    difficulty: Difficulties.Easy,
    involvementRating: 8
  },{
    title: "Puzzle",
    company: "DSS Lab",
    githubTitle: "dss-lab-puzzle",
    objective: "Разгадать шифр",
    description: "Интересная задачка на расшифровку зашифрованного сообщения",
    technologies: "HTML, CSS, JavaScript",
    deployUrl: "https://crecker05ru.github.io/dss-lab-puzzle/src/",
    startedAt: "",
    completedAt: "",    
    technicalTask: "",
    sourceCodeUrl: "https://github.com/crecker05ru/dss-lab-puzzle",
    commentary: "",
    feedback: "",
    isCompleted: true,
    videoUrl: "",
    image: "",
    difficulty: Difficulties.Hard,
    involvementRating: 10
  },{
    title: "Feature sliced design",
    company: "Пикассо",
    githubTitle: "fsd-redux-task",
    objective: "Создать приложение следуя Feature Sliced Design",
    description: "Не успел в дедйлайн,но попросил фидбек,фидбек дали в виде шаблоннного текста",
    technologies: "HTML, CSS, TypeScript, React,RTK Query,FSD",
    deployUrl: "https://crecker05ru.github.io/dss-lab-puzzle/src/",
    startedAt: "",
    completedAt: "",    
    technicalTask: "",
    sourceCodeUrl: "https://github.com/crecker05ru/fsd-redux-task",
    commentary: "",
    feedback: "К сожалению, в настоящий момент мы не готовы пригласить Вас на дальнейшее интервью по этой вакансии. ",
    isCompleted: true,
    videoUrl: "",
    image: "",
    difficulty: Difficulties.Medium,
    involvementRating: 8
  },{
    title: "Редактор",
    company: "05RU",
    githubTitle: "vue-redactor-task",
    objective: "Создать приложение-редактор",
    description: "Пришлось немного поковырять clipboard",
    technologies: "HTML, CSS, JavaScript, Vue",
    deployUrl: "https://crecker05ru.github.io/vue-redactor-task/",
    startedAt: "",
    completedAt: "",    
    technicalTask: "",
    sourceCodeUrl: "https://github.com/crecker05ru/vue-redactor-task",
    commentary: "",
    feedback: "Нет",
    isCompleted: true,
    videoUrl: "",
    image: "",
    difficulty: Difficulties.Easy,
    involvementRating: 8
  },{
    title: "Test blog",
    company: "Фрукторум",
    githubTitle: "pug-nuxt3-client-task",
    objective: "Создать блог",
    description: "Сайт блог с использованием своего шаблонизатора в виде подставляемых компонент",
    technologies: "HTML, SCSS, TypeScript, Vue, Nuxt 3",
    deployUrl: "https://pug-nuxt3-client-task.vercel.app/",
    startedAt: "",
    completedAt: "",    
    technicalTask: "https://drive.google.com/file/d/1NAW782cOQjlA7MKrKdp1l5U1k7g4PozH/view?usp=drive_link",
    sourceCodeUrl: "https://github.com/crecker05ru/vue-redactor-task",
    commentary: "",
    feedback: `В тестовом были некоторые неточности, в итоге мы остановили выбор на другом кандидате. Спасибо, возможно ещё посотрудничаем в будущем.
    Отзыв по тестовому:
    "Неправильно организованная работа со slug страниц.
    В некоторых местах сильное несоответствие верстки макету в фигме"`,
    isCompleted: true,
    videoUrl: "",
    image: "",
    difficulty: Difficulties.Medium,
    involvementRating: 7
  }, {
    title: "Погодный виджет",
    company: "Фрукторум",
    githubTitle: "my-vue-widget",
    objective: "Создать виджет встраиваемый по тегу",
    description: "Создать виджет встраиваемый в тег <my-widget/> ",
    technologies: "HTML, SCSS, TypeScript, Vue",
    deployUrl: "https://pug-nuxt3-client-task.vercel.app/",
    startedAt: "",
    completedAt: "",    
    technicalTask: "https://drive.google.com/file/d/1NAW782cOQjlA7MKrKdp1l5U1k7g4PozH/view?usp=drive_link",
    sourceCodeUrl: "https://github.com/crecker05ru/my-vue-widget",
    commentary: "",
    feedback: `В тестовом были некоторые неточности, в итоге мы остановили выбор на другом кандидате. Спасибо, возможно ещё посотрудничаем в будущем.
    Отзыв по тестовому:
    "Неправильно организованная работа со slug страниц.
    В некоторых местах сильное несоответствие верстки макету в фигме"`,
    isCompleted: true,
    videoUrl: "",
    image: "",
    difficulty: Difficulties.Medium,
    involvementRating: 8
  },{
    title: "PDD-test-task",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },{
    title: "procontext-task ",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },{
    title: "hammer-systems-test-task",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },{
    title: "lit-kron",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },{
    title: "try-canvas",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },{
    title: "cron-react-test",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },{
    title: "equite-landing",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },{
    title: "shtrafov-net-UI",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },{
    title: "weather-api-reactjs",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },{
    title: "avito-test-task-reactjs",
    objective: "",
    description: "",
    technologies: "Vue, Quasar",
    deployUrl: "",
    startedAt: "",
    completedAt: ""
  },{
    title: "tochka-tochka",
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
      title: "Webtronics",
      company: "Webtronics",
      githubTitle: "test-webtronics-quasar",
      objective: "Создать приложение используя Quasar",
      description: "My first layout page, without any responsiveness or adaptation )",
      technicalTask: "https://docs.google.com/document/d/1nCNpEGXf0xsRjyeeKHl5M7QTBHafcOZ8/edit?usp=drive_link&ouid=109415402684053365214&rtpof=true&sd=true",
      technologies: "HTML, SCSS, TypeScript, Vue, Quasar",
      deployUrl: "https://extraordinary-gecko-e5d70f.netlify.app/",
      sourceCodeUrl: "https://github.com/crecker05ru/test-webtronics-quasar",
      startedAt: "",
      completedAt: "",
      commentary: "",
      feedback: "К сожалению, на данный момент мы не готовы пригласить Вас на собеседование.",
      isCompleted: true,
      image: "",
      difficulty: Difficulties.Medium,
      involvementRating: 8
    },{
      title: "3D Conus",
      company: "CADEX",
      githubTitle: "webGL-draw",
      objective: "Создать интерфейс для отрисовки 3D конуса",
      description: "Отрисовка 3D конуса по заданной формуле,также был более сложный пункт с картой нормалей,но я до нее не дошёл",
      technologies: "JavaScript, WebGL",
      deployUrl: "https://crecker05ru.github.io/webGL-draw/",
      startedAt: "",
      completedAt: "",    
      technicalTask: "https://drive.google.com/file/d/1yeyi9HBee4oLM3x45uEEMFh8_-rRQjeC/view?usp=drive_link",
      sourceCodeUrl: "https://github.com/crecker05ru/webGL-draw",
      commentary: "",
      feedback: "Было прислано слишком много работ.",
      isCompleted: false,
      image: "",
      difficulty: Difficulties.Hard,
      involvementRating: 10
      
    },
    {
      title: "Pizza Chief",
      company: "Айтилогия",
      githubTitle: "itlogy-task",
      objective: "Верстка сайта и отправка формы,видеоразбор работы",
      description: "Стандартная верстка макета с формой и видеоразбор работы ученика",
      technologies: "HTML, CSS, JavaScript",
      deployUrl: "https://crecker05ru.github.io/itlogy-task/src/",
      startedAt: "",
      completedAt: "",    
      technicalTask: "https://docs.google.com/document/d/1VmlJ4g9u994ipEpNg6_UdLRJlhV940SI/edit?usp=drive_link&ouid=109415402684053365214&rtpof=true&sd=true",
      sourceCodeUrl: "https://github.com/crecker05ru/itlogy-task/tree/main",
      commentary: "Впервые записывал видеоразбор работы ученика )",
      feedback: "Взяли разработчика с более большим опытом работы",
      isCompleted: true,
      videoUrl: "https://drive.google.com/file/d/12ItCTqSelJT8nC3X25qbadwqJrRXASD7/view?usp=drive_link",
      image: "",
      difficulty: Difficulties.Easy,
      involvementRating: 8
    },{
      title: "Puzzle",
      company: "DSS Lab",
      githubTitle: "dss-lab-puzzle",
      objective: "Разгадать шифр",
      description: "Интересная задачка на расшифровку зашифрованного сообщения",
      technologies: "HTML, CSS, JavaScript",
      deployUrl: "https://crecker05ru.github.io/dss-lab-puzzle/src/",
      startedAt: "",
      completedAt: "",    
      technicalTask: "",
      sourceCodeUrl: "https://github.com/crecker05ru/dss-lab-puzzle",
      commentary: "",
      feedback: "",
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: Difficulties.Hard,
      involvementRating: 10
    },{
      title: "Feature sliced design",
      company: "Пикассо",
      githubTitle: "fsd-redux-task",
      objective: "Создать приложение следуя Feature Sliced Design",
      description: "Не успел в дедйлайн,но попросил фидбек,фидбек дали в виде шаблоннного текста",
      technologies: "HTML, CSS, TypeScript, React,RTK Query,FSD",
      deployUrl: "https://crecker05ru.github.io/dss-lab-puzzle/src/",
      startedAt: "",
      completedAt: "",    
      technicalTask: "",
      sourceCodeUrl: "https://github.com/crecker05ru/fsd-redux-task",
      commentary: "",
      feedback: "К сожалению, в настоящий момент мы не готовы пригласить Вас на дальнейшее интервью по этой вакансии. ",
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: Difficulties.Medium,
      involvementRating: 8
    },{
      title: "Редактор",
      company: "05RU",
      githubTitle: "vue-redactor-task",
      objective: "Создать приложение-редактор",
      description: "Пришлось немного поковырять clipboard",
      technologies: "HTML, CSS, JavaScript, Vue",
      deployUrl: "https://crecker05ru.github.io/vue-redactor-task/",
      startedAt: "",
      completedAt: "",    
      technicalTask: "",
      sourceCodeUrl: "https://github.com/crecker05ru/vue-redactor-task",
      commentary: "",
      feedback: "Нет",
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: Difficulties.Easy,
      involvementRating: 8
    },{
      title: "Test blog",
      company: "Фрукторум",
      githubTitle: "pug-nuxt3-client-task",
      objective: "Создать блог",
      description: "Сайт блог с использованием своего шаблонизатора в виде подставляемых компонент",
      technologies: "HTML, SCSS, TypeScript, Vue, Nuxt 3",
      deployUrl: "https://pug-nuxt3-client-task.vercel.app/",
      startedAt: "",
      completedAt: "",    
      technicalTask: "https://drive.google.com/file/d/1NAW782cOQjlA7MKrKdp1l5U1k7g4PozH/view?usp=drive_link",
      sourceCodeUrl: "https://github.com/crecker05ru/vue-redactor-task",
      commentary: "",
      feedback: `В тестовом были некоторые неточности, в итоге мы остановили выбор на другом кандидате. Спасибо, возможно ещё посотрудничаем в будущем.
      Отзыв по тестовому:
      "Неправильно организованная работа со slug страниц.
      В некоторых местах сильное несоответствие верстки макету в фигме"`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: Difficulties.Medium,
      involvementRating: 7
    }, {
      title: "Погодный виджет",
      company: "Фрукторум",
      githubTitle: "my-vue-widget",
      objective: "Создать виджет встраиваемый по тегу",
      description: "Создать виджет встраиваемый в тег <my-widget/> ",
      technologies: "HTML, SCSS, TypeScript, Vue",
      deployUrl: "https://pug-nuxt3-client-task.vercel.app/",
      startedAt: "",
      completedAt: "",    
      technicalTask: "https://drive.google.com/file/d/1NAW782cOQjlA7MKrKdp1l5U1k7g4PozH/view?usp=drive_link",
      sourceCodeUrl: "https://github.com/crecker05ru/my-vue-widget",
      commentary: "",
      feedback: `В тестовом были некоторые неточности, в итоге мы остановили выбор на другом кандидате. Спасибо, возможно ещё посотрудничаем в будущем.
      Отзыв по тестовому:
      "Неправильно организованная работа со slug страниц.
      В некоторых местах сильное несоответствие верстки макету в фигме"`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: Difficulties.Medium,
      involvementRating: 8
    },{
      title: "PDD-test-task",
      objective: "",
      description: "",
      technologies: "Vue, Quasar",
      deployUrl: "",
      startedAt: "",
      completedAt: ""
    },{
      title: "procontext-task ",
      objective: "",
      description: "",
      technologies: "Vue, Quasar",
      deployUrl: "",
      startedAt: "",
      completedAt: ""
    },{
      title: "hammer-systems-test-task",
      objective: "",
      description: "",
      technologies: "Vue, Quasar",
      deployUrl: "",
      startedAt: "",
      completedAt: ""
    },{
      title: "lit-kron",
      objective: "",
      description: "",
      technologies: "Vue, Quasar",
      deployUrl: "",
      startedAt: "",
      completedAt: ""
    },{
      title: "try-canvas",
      objective: "",
      description: "",
      technologies: "Vue, Quasar",
      deployUrl: "",
      startedAt: "",
      completedAt: ""
    },{
      title: "cron-react-test",
      objective: "",
      description: "",
      technologies: "Vue, Quasar",
      deployUrl: "",
      startedAt: "",
      completedAt: ""
    },{
      title: "equite-landing",
      objective: "",
      description: "",
      technologies: "Vue, Quasar",
      deployUrl: "",
      startedAt: "",
      completedAt: ""
    },{
      title: "shtrafov-net-UI",
      objective: "",
      description: "",
      technologies: "Vue, Quasar",
      deployUrl: "",
      startedAt: "",
      completedAt: ""
    },{
      title: "weather-api-reactjs",
      objective: "",
      description: "",
      technologies: "Vue, Quasar",
      deployUrl: "",
      startedAt: "",
      completedAt: ""
    },{
      title: "avito-test-task-reactjs",
      objective: "",
      description: "",
      technologies: "Vue, Quasar",
      deployUrl: "",
      startedAt: "",
      completedAt: ""
    },{
      title: "tochka-tochka",
      objective: "",
      description: "",
      technologies: "Vue, Quasar",
      deployUrl: "",
      startedAt: "",
      completedAt: ""
    },
]
}
