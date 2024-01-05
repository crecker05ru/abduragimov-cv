export interface CV {
  ru: CVInfo,
  en: CVInfo
}
export interface CVInfo {

      initials: string;
      specialization: string;
      address: string;
      profilePhoto: string;
      contacts: {
        email: string;
        phone: string;
        telegram: string;
        gitHub: string;
      };
      maritalStatus: string;
      dateOfBirth: string;
      objective: string;
      aboutMe: string;
      education: string[];
      workExperience: string[];
      skills: string[];
      languages: string[]
      additionalEducation: {
        name: string;
        certificateUrl: string;
      }[];
}
const myCv: CV = {
  "ru": {
    initials: "Анвар Абдурагимов",
    specialization: "Фронтенд разработчик",
    address: "Makhachkala, 367000, Russia",
    profilePhoto: "images/profilephoto.jpg",
    contacts: {
      email: "abduragimovdev@gmail.com, fort2652@gmail.com",
      phone: "+79884586930, +79387803265",
      telegram: "ankaboot05",
      gitHub: "https://github.com/crecker05ru"
    },
    maritalStatus: "Женат",
    dateOfBirth: "12 Февраля 1991",
    objective: `Создавать удобный, доступный и интерактивный пользовательский интерфейс, создавать полезные веб-приложения, быть профессионалом в области фронтенд разработки.`,
    aboutMe: `
    Опыт работы в области разработки фронтенда более 2х лет.
Отличное владение HTML, CSS ,JavaScript и TypeScript(базовый).
Опыт работы с библиотеками и фреймворками, такими как React, Next.js, Vue 3, Nuxt 2/3.
Знание HTML5, CSS3, применение responsive design.
Опыт работы с Git, сборщиками модулей (Webpack, Vitejs).
Обеспечение кросс-браузерной и кросс-платформенной совместимости.
Уровень английского достаточный для чтения технической документации и общения на повседневные темы.`,
    education: [
      "2009 — 2014  Дагестанский государственный институт народного хозяйства, Махачкала"
    ],
    workExperience: [`Апрель 2023 — по настоящее время.People Data Design, Махачкала, peopledatadesign.ru.
    Frontend-разработчик
    Разработка компонентов на фреймворке Nuxt 3,привязывание API к UI,правка багов на фрэймворке Nuxt 2.
    Разработал веб приложение с нуля, используя фреймворк Nuxt 3,оптимизировал ранее созданный сайт на фреймворке Nuxt 2.`,
  `Апрель 2022 — март 2023 ,Kalimat,Махачкала, kalimat.io/
   Frontend-разработчик
   Управление задачами в ClickUp,разработка пользовательского интерфейса, привязка пользовательского интерфейса к API используя фреймворк Next.js,типизация объектов при помощи TypeScript,правка и добавление блоков сайта по макету Figma , взаимодействие с Git и управление ветками репозитория в GitLab.Обновил стек приложения с фреймворка Vue 2 на последнюю версию React.
  `,
  `
  Июнь 2021 — февраль 2022
Индивидуальное предпринимательство / частная практика / фриланс
Махачкала
Frontend-разработчик
Разработка веб приложения, разработка веб компонентов на технологиях React/Next.js,создание серверной части приложения и API на технологиях Node js/Postgres.
`
  ],
    skills: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "React JS","Redux","React-Redux", "Next.js","Vue 3","Vuex","Pinia", "Nuxt","Angular","NgRx","Git","BEM","RestAPI",
      
      "Водительские права - B"],
    languages: ["Английский – B1","Русский - C3"],  
    additionalEducation : [
        {name: "Ноябрь 2020 ,stepik.org ,Web development for beginners. HTML and CSS",certificateUrl:"https://stepik.org/cert/831092"},
        {name: "Декабрь 2020  ,stepik.org , JavaScript for beginners",certificateUrl:"https://stepik.org/cert/836636"},
        {name: "Август 2021 , freecodecamp.org, JavaScript algoritms and data structures,",certificateUrl:"https://www.freecodecamp.org/certification/fcc61df5419-4666-479a-8c14-650407e6943c/javascript-algorithms-and-data-structures"},
      ]
  },
  "en": {
    initials: "Anvar Abduragimov",
    specialization: "Frontend developer",
    address: "Makhachkala, 367000, Russia",
    profilePhoto: "images/profilephoto.jpg",
    contacts: {
      email: "abduragimovdev@gmail.com, fort2652@gmail.com",
      phone: "+79884586930, +79387803265",
      telegram: "ankaboot05",
      gitHub: "https://github.com/crecker05ru"
    },
    maritalStatus: "married",
    dateOfBirth: "12th February 1991",
    objective: "Create convenient, accessible and interactive UI,create usefull web applications,grow as a professional in frontend development.",
    aboutMe: `More than 2 years of experience in front-end development.
    Excellent knowledge of HTML, CSS, JavaScript and TypeScript (basic).
    Experience with libraries and frameworks such as React, Next.js, Vue 3, Nuxt 2/3.
    Knowledge of HTML5, CSS3, application of responsive design.
    Experience with Git, module builders (Webpack, Vitejs).
    Ensuring cross-browser and cross-platform compatibility.
    The level of English is sufficient to read technical documentation and communicate on everyday topics.`,
    education: ["2009 — 2014  Dagestan State Institute of National Economy,department of Information Technology,specialist degree."],
    workExperience: ["Kalimat.io, 1st April 2022 – present.Position – frontend developer.Responsibilities - task management in ClickUp,layout drawing with Figma and SCSS preprocessor,writing code on Next.js framework,rendering data from the server in UI,object typing with TypeScript,updating remote branch in GitLab repository with Git and Bash."],
    skills: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "React JS","Redux","React-Redux", "Next.js","Vue 3","Vuex","Pinia", "Nuxt","Angular","NgRx","Git","BEM","RestAPI",
    "Driving License - B"],
    languages: ["English – B1","Russian - C3"],
      additionalEducation : [
        {name: "November 2020 ,stepik.org ,Web development for beginners. HTML and CSS",certificateUrl:"https://stepik.org/cert/831092"},
        {name: "December 2020  ,stepik.org , JavaScript for beginners",certificateUrl:"https://stepik.org/cert/836636"},
        {name: "August 2021 , freecodecamp.org, JavaScript algoritms and data structures,",certificateUrl:"https://www.freecodecamp.org/certification/fcc61df5419-4666-479a-8c14-650407e6943c/javascript-algorithms-and-data-structures"},
      ]
  }
}

export default myCv