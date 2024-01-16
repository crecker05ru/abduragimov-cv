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
    address: "Махачкала, 367000, Россия",
    profilePhoto: "images/profilephoto.jpg",
    contacts: {
      email: "anvarabduragimovdev@gmail.com, fort2652@gmail.com",
      phone: "+79884586930, +79387803265",
      telegram: "ankaboot05",
      gitHub: "https://github.com/crecker05ru"
    },
    maritalStatus: "Женат",
    dateOfBirth: "12 Февраля 1991",
    objective: `Создавать удобный, доступный и интерактивный пользовательский интерфейс, создавать полезные веб-приложения, быть профессионалом в области фронтенд разработки.`,
    aboutMe: `
    Опыт работы в области разработки фронтенда более 2х лет.
Отличное владение HTML, CSS, JavaScript и TypeScript(базовый).
Опыт работы с библиотеками и фреймворками, такими как React, Next.js, Vue 3, Nuxt 2/3.
Знание HTML5, CSS3, применение responsive design.
Опыт работы с Git, сборщиками модулей (Webpack, Vitejs).
Обеспечение кросс-браузерной и кросс-платформенной совместимости.
Уровень английского достаточный для чтения технической документации и общения на повседневные темы.`,
    education: [
      "2009 — 2014  Дагестанский государственный институт народного хозяйства, Махачкала"
    ],
    workExperience: [
    `Апрель 2023 — по настоящее время.People Data Design, Махачкала, peopledatadesign.ru.
    Frontend-разработчик
    Разработка компонентов на фреймворке Nuxt 3,привязывание API к UI,правка багов на фрэймворке Nuxt 2.
    Разработал веб приложение с нуля, используя фреймворк Nuxt 3,оптимизировал ранее созданный сайт на фреймворке Nuxt 2.`,
  `Апрель 2022 — март 2023 ,Kalimat,Махачкала, kalimat.io/
   Frontend-разработчик
   Управление задачами в ClickUp,разработка пользовательского интерфейса, привязка пользовательского интерфейса к API используя фреймворк Next.js,типизация объектов при помощи TypeScript,правка и добавление блоков сайта по макету Figma , взаимодействие с Git и управление ветками репозитория в GitLab.Обновил стек приложения с фреймворка Vue 2 на последнюю версию React.
  `,
  `
  Июнь 2021 — Февраль 2022
Индивидуальное предпринимательство / частная практика / фриланс
Махачкала
Frontend-разработчик
Разработка веб приложения, разработка веб компонентов на технологиях React/Next.js,создание серверной части приложения и API на технологиях Node js/Postgres.
`,
`Май 2020 - Июнь 2021
Период обучения фронтенд разработки.Технологии: HTML,CSS,JavaScript,React,Next.js`
  ],
    skills: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "React JS","Redux","React-Redux", "Next.js","Vue 3","Vuex","Pinia", "Nuxt","Angular","NgRx","Git","BEM","RestAPI",
      
      "Водительские права - B"],
    languages: ["Английский – B1","Русский - C2"],  
    additionalEducation : [
        {name: "Ноябрь 2020 ,stepik.org ,Web разработка для начинающих. HTML and CSS",certificateUrl:"https://stepik.org/cert/831092"},
        {name: "Декабрь 2020  ,stepik.org , JavaScript для начинающих",certificateUrl:"https://stepik.org/cert/836636"},
        {name: "Август 2021 , freecodecamp.org, JavaScript algoritms and data structures,",certificateUrl:"https://www.freecodecamp.org/certification/fcc61df5419-4666-479a-8c14-650407e6943c/javascript-algorithms-and-data-structures"},
        {name: `Октябрь 2022 ,  JS/FE Pre-School 2022Q4 RS School, Frontend`,certificateUrl: "https://app.rs.school/certificate/s1vbxi29"},
        {name: `Март 2023 JavaScript/Front-end 2023Q1 Roling Scopes School, Frontend`,certificateUrl: "https://app.rs.school/certificate/zefjkv1f"},
      ]
  },
  "en": {
    initials: "Anvar Abduragimov",
    specialization: "Frontend developer",
    address: "Makhachkala, 367000, Russia",
    profilePhoto: "images/profilephoto.jpg",
    contacts: {
      email: "anvarabduragimovdev@gmail.com, fort2652@gmail.com",
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
    workExperience: [
      `April 2023 - present. People Data Design, Makhachkala, peopledatadesign.ru.
     Frontend developer.
     Development of components on the Nuxt 3 framework, binding the API to the UI, fixing bugs on the Nuxt 2 framework.
     Developed a web application from scratch using the Nuxt 3 framework, optimized a previously created website using the Nuxt 2 framework.`,
     `April 2022 - March 2023, Kalimat, Makhachkala, kalimat.io/
    Frontend developer.
    Task management in ClickUp, user interface development, binding the user interface to the API using the Next.js framework, typing objects using TypeScript, editing and adding website blocks based on the Figma layout, interacting with Git and managing repository branches in GitLab. Updated the application stack from the framework Vue 2 to the latest version of React.
   `,
   `June 2021 - February 2022
   Individual entrepreneurship / private practice / freelancing.
   Makhachkala.
   Frontend developer.
   Development of a web application, development of web components using React/Next.js technologies, creation of a server part of the application and API using Node js/Postgres technologies.
   `,
   `May 2020 - June 2021
   Front-end development training period. Technologies: HTML, CSS, JavaScript, React, Next.js`
    ],
    skills: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "React JS","Redux","React-Redux", "Next.js","Vue 3","Vuex","Pinia", "Nuxt","Angular","NgRx","Git","BEM","RestAPI",
    "Driving License - B"],
    languages: ["English – B1","Russian - C2"],
      additionalEducation : [
        {name: "November 2020 ,stepik.org ,Web development for beginners. HTML and CSS",certificateUrl:"https://stepik.org/cert/831092"},
        {name: "December 2020  ,stepik.org , JavaScript for beginners",certificateUrl:"https://stepik.org/cert/836636"},
        {name: "August 2021 , freecodecamp.org, JavaScript algoritms and data structures,",certificateUrl:"https://www.freecodecamp.org/certification/fcc61df5419-4666-479a-8c14-650407e6943c/javascript-algorithms-and-data-structures"},
        {name: `October 2022 ,  JS/FE Pre-School 2022Q4 RS School, Frontend`,certificateUrl: "https://app.rs.school/certificate/s1vbxi29"},
        {name: `March 2023 JavaScript/Front-end 2023Q1 Roling Scopes School, Frontend`,certificateUrl: "https://app.rs.school/certificate/zefjkv1f"},
      ]
  }
}

export default myCv