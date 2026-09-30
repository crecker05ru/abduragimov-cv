import { _ as _export_sfc, a as useRuntimeConfig } from "../server.mjs";
import { openBlock, createElementBlock, createElementVNode, ref, mergeProps, unref, useSSRContext, defineComponent, computed } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle } from "vue/server-renderer";
import { u as useHead } from "./index-tbNGurtz.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
import "klona";
import "devalue";
const _imports_0 = "" + __publicAssetsURL("sounds/on_enter_sound.wav");
const _imports_1 = "" + __publicAssetsURL("sounds/pop_sound.mp3");
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 96 96"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", { d: "M82.607 62.107 52.606 26.105a6.203 6.203 0 0 0-9.212 0L13.393 62.107a5.999 5.999 0 1 0 9.211 7.688L48 39.325l25.396 30.47a5.999 5.999 0 1 0 9.211-7.688" }, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._hoisted_3$1]);
}
const arrowUp = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 96 96"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", { d: "M81.846 25.388a6.024 6.024 0 0 0-8.45.767L48 56.625l-25.396-30.47a5.999 5.999 0 1 0-9.211 7.689l30.001 36.001a5.997 5.997 0 0 0 9.212 0l30.001-36.002a6.01 6.01 0 0 0-.761-8.455" }, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._hoisted_3]);
}
const arrowDown = { render };
const _sfc_main$1 = {
  __name: "AppChat",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const config = useRuntimeConfig();
    const emit = __emit;
    const messages = ref([]);
    const messageInput = ref("");
    const isUserConnected = ref(false);
    const username = ref("");
    const isChatOpened = ref(false);
    ref();
    ref();
    ref();
    console.log("${process.env.BASE_URL}", config.app.baseURL);
    console.log("config.public", config.public.baseWS);
    const showChat = () => {
      emit("close");
      isChatOpened.value = !isChatOpened.value;
      if (!isChatOpened.value) {
        emit("close");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "chat" }, _attrs))} data-v-722329cb><audio id="onEnter" data-v-722329cb><source${ssrRenderAttr("src", _imports_0)} data-v-722329cb></audio><audio id="popUp" data-v-722329cb><source${ssrRenderAttr("src", _imports_1)} data-v-722329cb></audio>`);
      if (isChatOpened.value) {
        _push(ssrRenderComponent(unref(arrowDown), {
          class: "chat__window-arrow",
          onClick: showChat
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(arrowUp), {
          class: "chat__window-arrow",
          onClick: showChat
        }, null, _parent));
      }
      if (isChatOpened.value) {
        _push(`<div class="chat__window" data-v-722329cb><ul class="chat__window__list" data-v-722329cb><!--[-->`);
        ssrRenderList(messages.value, (message, index2) => {
          _push(`<li class="chat__message" data-v-722329cb>`);
          if (message.event === "message") {
            _push(`<span class="chat__message-username" data-v-722329cb>${ssrInterpolate(message.username)}: </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="chat__message-text" data-v-722329cb>${ssrInterpolate(message.message)}</span></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!isUserConnected.value) {
        _push(`<input class="chat__input"${ssrRenderAttr("value", username.value)} placeholder="Enter nickname" data-v-722329cb>`);
      } else {
        _push(`<input class="chat__input"${ssrRenderAttr("value", messageInput.value)} placeholder="Enter text" data-v-722329cb>`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppChat.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-722329cb"]]);
const myCv = {
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
    Опыт работы в области разработки фронтенда более 5 лет.
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
    skills: [
      "HTML",
      "CSS",
      "SCSS",
      "JavaScript",
      "TypeScript",
      "React JS",
      "Redux",
      "React-Redux",
      "Next.js",
      "Vue 3",
      "Vuex",
      "Pinia",
      "Nuxt",
      "Angular",
      "NgRx",
      "Git",
      "BEM",
      "RestAPI",
      "Водительские права - B"
    ],
    languages: ["Английский – B1", "Русский - C2"],
    additionalEducation: [
      { name: "Ноябрь 2020 ,stepik.org ,Web разработка для начинающих. HTML and CSS", certificateUrl: "https://stepik.org/cert/831092" },
      { name: "Декабрь 2020  ,stepik.org , JavaScript для начинающих", certificateUrl: "https://stepik.org/cert/836636" },
      { name: "Август 2021 , freecodecamp.org, JavaScript algoritms and data structures,", certificateUrl: "https://www.freecodecamp.org/certification/fcc61df5419-4666-479a-8c14-650407e6943c/javascript-algorithms-and-data-structures" },
      { name: `Октябрь 2022 ,  JS/FE Pre-School 2022Q4 RS School, Frontend`, certificateUrl: "https://app.rs.school/certificate/s1vbxi29" },
      { name: `Март 2023 JavaScript/Front-end 2023Q1 Roling Scopes School, Frontend`, certificateUrl: "https://app.rs.school/certificate/zefjkv1f" },
      { name: `Октябрь 2023 Angular 2023Q4 Roling Scopes School, Frontend`, certificateUrl: "https://app.rs.school/certificate/flv7mwku" }
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
    aboutMe: `More than 5 years of experience in front-end development.
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
    skills: [
      "HTML",
      "CSS",
      "SCSS",
      "JavaScript",
      "TypeScript",
      "React JS",
      "Redux",
      "React-Redux",
      "Next.js",
      "Vue 3",
      "Vuex",
      "Pinia",
      "Nuxt",
      "Angular",
      "NgRx",
      "Git",
      "BEM",
      "RestAPI",
      "Driving License - B"
    ],
    languages: ["English – B1", "Russian - C2"],
    additionalEducation: [
      { name: "November 2020 ,stepik.org ,Web development for beginners. HTML and CSS", certificateUrl: "https://stepik.org/cert/831092" },
      { name: "December 2020  ,stepik.org , JavaScript for beginners", certificateUrl: "https://stepik.org/cert/836636" },
      { name: "August 2021 , freecodecamp.org, JavaScript algoritms and data structures,", certificateUrl: "https://www.freecodecamp.org/certification/fcc61df5419-4666-479a-8c14-650407e6943c/javascript-algorithms-and-data-structures" },
      { name: `October 2022 ,  JS/FE Pre-School 2022Q4 RS School, Frontend`, certificateUrl: "https://app.rs.school/certificate/s1vbxi29" },
      { name: `March 2023 JavaScript/Front-end 2023Q1 Roling Scopes School, Frontend`, certificateUrl: "https://app.rs.school/certificate/zefjkv1f" },
      { name: `October 2023 Angular 2023Q4 Roling Scopes School, Frontend`, certificateUrl: "https://app.rs.school/certificate/flv7mwku" }
    ]
  }
};
const myCv$1 = myCv;
const myPortfolio = {
  "ru": [
    {
      title: "Stock",
      githubTitle: "stock-app",
      objective: "Синтаксис Vue 3, проверка идей",
      description: "Моя песочница для тестирования новых фич Vue 3 и продумывание идей",
      technologies: "HTML,CSS,Typescript,Vue,SQLite",
      deployUrl: "https://crecker05ru.github.io/momentum-rss/",
      sourceCodeUrl: "https://stock.abduragimovdev.ru/",
      startedAt: "14.04.2025",
      completedAt: ""
    },
    {
      title: "Momentum",
      githubTitle: "momentum-rss",
      objective: "Написать с нуля аналог плагина Google Momentum",
      description: "Приложение для релакса: на фоне картинки живой природы, встроенный плеер, мудрые цитаты, погода на сегодня, и в центре всего - время,чтобы не долго не засиживаться )",
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
    },
    {
      title: "Shelter",
      githubTitle: "shelter-rss",
      objective: "Сверстать сайт в рамках курса RS",
      description: "Сайт о приюте для животных",
      technologies: "HTML,CSS,Javascript",
      deployUrl: "https://crecker05ru.github.io/rss-shelter/",
      sourceCodeUrl: "https://github.com/crecker05ru/rss-shelter",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Minesweeper",
      githubTitle: "rss-miner",
      objective: "Создать игру Сапер в рамках купсах RS",
      description: "Игра про сапера )",
      technologies: "HTML,CSS,Javascript",
      deployUrl: "https://crecker05ru.github.io/rss-miner/",
      sourceCodeUrl: "https://github.com/crecker05ru/rss-miner",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "CSS Selectors",
      githubTitle: "rss-css-selectors",
      objective: "Создать игровой тренажер в рамках курса RS",
      description: "Игра в которой писать в едиторе правильный селектор.Игра не сделана до конца",
      technologies: "HTML,CSS,Typescript",
      deployUrl: "https://crecker05ru.github.io/rss-css-selectors/",
      sourceCodeUrl: "https://github.com/crecker05ru/rss-css-selectors",
      startedAt: "",
      completedAt: ""
    },
    {
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
      description: "Сборщик создан на Node.js ,собирает файлы, переписывает и очищает",
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
    }
  ],
  "en": [
    {
      title: "Stock",
      githubTitle: "stock-app",
      objective: "New Vue 3 features, check ideas",
      description: "My playground for checking new features and ideas",
      technologies: "HTML,CSS,Typescript,Vue,SQLite",
      deployUrl: "https://crecker05ru.github.io/momentum-rss/",
      sourceCodeUrl: "https://stock.abduragimovdev.ru/",
      startedAt: "14.04.2025",
      completedAt: ""
    },
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
    },
    {
      title: "Minesweeper",
      githubTitle: "rss-miner",
      objective: "Create a Minesweeper game within RS course",
      description: "A game about a sapper )",
      technologies: "HTML,CSS,Javascript",
      deployUrl: "https://crecker05ru.github.io/rss-miner/",
      sourceCodeUrl: "https://github.com/crecker05ru/rss-miner",
      startedAt: "",
      completedAt: ""
    },
    {
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
    }
  ]
};
const myTestTasks = {
  "ru": [
    {
      title: "Webtronics",
      company: "Webtronics",
      githubTitle: "test-webtronics-quasar",
      objective: "Создать приложение используя Quasar",
      description: "Админ панель с таблицей и формой для логина",
      technicalTask: "https://docs.google.com/document/d/1nCNpEGXf0xsRjyeeKHl5M7QTBHafcOZ8/edit?usp=drive_link&ouid=109415402684053365214&rtpof=true&sd=true",
      technologies: "HTML, SCSS, TypeScript, Vue, Quasar",
      deployUrl: "https://extraordinary-gecko-e5d70f.netlify.app/",
      sourceCodeUrl: "https://github.com/crecker05ru/test-webtronics-quasar",
      startedAt: "2023-12-21",
      completedAt: "2023-12-26",
      commentary: "",
      feedback: `Ответ от тимлида: "сумбур в коде и структуре, остатки старого/ненужного кода, логика и типы/интерфейсы в страницах, дальше в общем-то не смотрел. Посоветовал бы быть внимательней, стараться писать более красивый и структурированный код, ну и почитать больше книжке по программированию, начать с базы - "Чистый код" и "Чистая архитектура" Роберта Мартина`,
      isCompleted: true,
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "3D Conus",
      company: "CADEX",
      githubTitle: "webGL-draw",
      objective: "Создать интерфейс для отрисовки 3D конуса",
      description: "Отрисовка 3D конуса по заданной формуле,также был более сложный пункт с картой нормалей,но я до нее не дошёл",
      technologies: "JavaScript, WebGL",
      deployUrl: "https://crecker05ru.github.io/webGL-draw/",
      startedAt: "2023-10-15",
      completedAt: "2023-10-15",
      technicalTask: "https://drive.google.com/file/d/1yeyi9HBee4oLM3x45uEEMFh8_-rRQjeC/view?usp=drive_link",
      sourceCodeUrl: "https://github.com/crecker05ru/webGL-draw",
      commentary: "",
      feedback: "Было прислано слишком много работ.",
      isCompleted: false,
      image: "",
      difficulty: "Hard",
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
      startedAt: "2023-10-11",
      completedAt: "2023-10-13",
      technicalTask: "https://docs.google.com/document/d/1VmlJ4g9u994ipEpNg6_UdLRJlhV940SI/edit?usp=drive_link&ouid=109415402684053365214&rtpof=true&sd=true",
      sourceCodeUrl: "https://github.com/crecker05ru/itlogy-task/tree/main",
      commentary: "Впервые записывал видеоразбор работы ученика )",
      feedback: "Взяли разработчика с более большим опытом работы",
      isCompleted: true,
      videoUrl: "https://drive.google.com/file/d/12ItCTqSelJT8nC3X25qbadwqJrRXASD7/view?usp=drive_link",
      image: "",
      difficulty: "Easy",
      involvementRating: 8
    },
    {
      title: "Puzzle",
      company: "DSS Lab",
      githubTitle: "dss-lab-puzzle",
      objective: "Разгадать шифр",
      description: "Интересная задачка на расшифровку зашифрованного сообщения",
      technologies: "HTML, CSS, JavaScript",
      deployUrl: "https://crecker05ru.github.io/dss-lab-puzzle/src/",
      startedAt: "2023-10-07",
      completedAt: "2023-10-07",
      technicalTask: "",
      sourceCodeUrl: "https://github.com/crecker05ru/dss-lab-puzzle",
      commentary: "",
      feedback: "",
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Hard",
      involvementRating: 10
    },
    {
      title: "Feature sliced design",
      company: "Пикассо",
      githubTitle: "fsd-redux-task",
      objective: "Создать приложение следуя Feature Sliced Design",
      description: "Не успел в дедйлайн,но попросил фидбек,фидбек дали в виде шаблоннного текста",
      technologies: "HTML, CSS, TypeScript, React,RTK Query,FSD",
      deployUrl: "https://crecker05ru.github.io/fsd-redux-task/",
      startedAt: "2023-10-01",
      completedAt: "2023-10-08",
      technicalTask: "",
      sourceCodeUrl: "https://github.com/crecker05ru/fsd-redux-task",
      commentary: "",
      feedback: "К сожалению, в настоящий момент мы не готовы пригласить Вас на дальнейшее интервью по этой вакансии. ",
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "Редактор",
      company: "05RU",
      githubTitle: "vue-redactor-task",
      objective: "Создать приложение-редактор",
      description: "Пришлось немного поковырять clipboard",
      technologies: "HTML, CSS, JavaScript, Vue",
      deployUrl: "https://crecker05ru.github.io/vue-redactor-task/",
      startedAt: "2023-09-28",
      completedAt: "2023-09-30",
      technicalTask: "",
      sourceCodeUrl: "https://github.com/crecker05ru/vue-redactor-task",
      commentary: "",
      feedback: "Нет",
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Easy",
      involvementRating: 8
    },
    {
      title: "Test blog",
      company: "Фрукторум",
      githubTitle: "pug-nuxt3-client-task",
      objective: "Создать блог",
      description: "Сайт блог с использованием своего шаблонизатора в виде подставляемых компонент",
      technologies: "HTML, SCSS, TypeScript, Vue, Nuxt 3",
      sourceCodeUrl: "https://github.com/crecker05ru/pug-nuxt3-client-task",
      deployUrl: "https://pug-nuxt3-client-task.vercel.app/",
      technicalTask: "https://drive.google.com/file/d/1NAW782cOQjlA7MKrKdp1l5U1k7g4PozH/view?usp=drive_link",
      startedAt: "2023-08-26",
      completedAt: "2023-08-28",
      commentary: "",
      feedback: `В тестовом были некоторые неточности, в итоге мы остановили выбор на другом кандидате. Спасибо, возможно ещё посотрудничаем в будущем.
    Отзыв по тестовому:
    "Неправильно организованная работа со slug страниц.
    В некоторых местах сильное несоответствие верстки макету в фигме"`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 7
    },
    {
      title: "Погодный виджет",
      company: "Plumsail",
      githubTitle: "my-vue-widget",
      objective: "Создать виджет встраиваемый по тегу",
      description: "Создать виджет встраиваемый в тег <my-widget/> ",
      technologies: "HTML, SCSS, TypeScript, Vue",
      deployUrl: "https://cosmic-cajeta-dfe1ae.netlify.app/",
      startedAt: "2023-07-29",
      completedAt: "2023-07-31",
      technicalTask: "https://docs.google.com/document/d/1i6l-ib-TYKjfRNX9knHEA1kjJuImRY8F/edit?usp=drive_link&ouid=109415402684053365214&rtpof=true&sd=true",
      sourceCodeUrl: "https://github.com/crecker05ru/my-vue-widget",
      commentary: "",
      feedback: `Большое спасибо за ваше время, посвященное выполнению тестового задания. Мы проверили его и пока не готовы пригласить вас на дальнейшее интервью по этой вакансии. В целом, хорошо, но мы получили большое количество откликов и тестовых, есть кандидаты, которые справились лучше. Детального разбора не предоставлю, т.к. итог по тестовому в формате "зачет (тогда интервью)/незачет". Желаю вам успехов в поиске новой интересной работы!`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "Таймер",
      company: "PDD",
      githubTitle: "PDD-test-task",
      objective: "Создать таймер",
      description: "Список таймеров которые можно добавлять",
      technologies: "HTML, SCSS, TypeScript, Vue",
      deployUrl: "https://crecker05ru.github.io/PDD-test-task/",
      startedAt: "2023-04-06",
      completedAt: "2023-04-07",
      technicalTask: "https://crecker05ru.github.io/PDD-test-task/",
      sourceCodeUrl: "https://github.com/crecker05ru/PDD-test-task",
      commentary: "",
      feedback: `Получил оффер`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "Цветной список",
      company: "ПроКонтекст",
      githubTitle: "procontext-task",
      objective: "Создать список с блоками",
      description: "Список с разноцветными блоками который взаимодействует со вторым списком",
      technologies: "HTML, SCSS, TypeScript, Vue",
      deployUrl: "https://crecker05ru.github.io/procontext-task/",
      startedAt: "2022-10-25",
      completedAt: "2022-10-28",
      technicalTask: "https://drive.google.com/file/d/1GAdu31E-Hu8GIWz4M2zLnW9O1i3LzRV6/view?usp=drive_link",
      sourceCodeUrl: "https://github.com/crecker05ru/procontext-task",
      commentary: "Моя ошибка связанная с идентификаторами списков,надо было привести их к строке.Еще есть баг который не исправлен",
      feedback: `Был отзыв`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "2D Planner",
      company: "Hammer Systems",
      city: "Moscow",
      githubTitle: "hammer-systems-test-task",
      objective: "Создать 2D Planner",
      description: "Задание заключалось в 2х частях: первое - создать админ панели как в макете,с этим я справился,учитывая что приходилось разбираться в чужом коде и почему-то npm пакеты устанавливались с ошибкой,выручил yarn,второе - создать 2D планер,суть была ясна но как реализовать такое я имел представления но незнал каким образом реализовать,плюс я не укладывался срок,",
      technologies: "HTML, Less, JavaScript, React,Redux",
      deployUrl: "https://cerulean-quokka-b5359a.netlify.app/app/main",
      startedAt: "2022-10-18",
      completedAt: "2022-10-31",
      technicalTask: "https://docs.google.com/document/d/1zVr_c-8SF-wKP3vlMfkFQ9I_P2Exjis9/edit?usp=drive_link&ouid=109415402684053365214&rtpof=true&sd=true",
      sourceCodeUrl: "https://github.com/crecker05ru/hammer-systems-test-task",
      commentary: "Моя ошибка связанная с идентификаторами списков,надо было привести их к строке.Еще есть баг который не исправлен",
      feedback: ``,
      isCompleted: false,
      videoUrl: "",
      image: "",
      difficulty: "Hard",
      involvementRating: 7
    },
    {
      title: "Lit компонент",
      company: "Крон",
      city: "Makhachkala",
      githubTitle: "lit-kron",
      objective: "Создать компонент",
      description: "Создать переиспользуемый компонент по заданному макету и пропустить через тесты",
      technologies: "HTML, CSS, TypeScript, Lit",
      deployUrl: "",
      startedAt: "2022-04-25",
      completedAt: "2022-04-27",
      technicalTask: "",
      sourceCodeUrl: "https://crecker05ru.github.io/lit-kron/",
      commentary: "",
      feedback: ``,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 7
    },
    {
      title: "Switchable graph",
      company: "Data Prime",
      city: "",
      githubTitle: "try-canvas",
      objective: "Создать график",
      description: "Создать график на canvas и по клику он должен трансформироваться в другой график",
      technologies: "HTML, JavaScript",
      deployUrl: "https://crecker05ru.github.io/try-canvas/",
      startedAt: "2022-03-03",
      completedAt: "2022-03-09",
      technicalTask: "",
      sourceCodeUrl: "https://github.com/crecker05ru/try-canvas",
      commentary: "Потратил более месяца на изучение canvas и отрисовки точек на нем и в итоге сделал что-то не так O_o",
      feedback: ``,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Hard",
      involvementRating: 8
    },
    {
      title: "Админ-панель",
      company: "Крон",
      city: "Махачкала",
      githubTitle: "cron-react-test",
      objective: "Создать админ панель",
      description: "Часть админ панели для управления заказами с поиском и сортировкой",
      technologies: "HTML, CSS, JavaScript, React",
      deployUrl: "https://crecker05ru.github.io/cron-react-test/",
      startedAt: "2021-12-26",
      completedAt: "Jan 26, 2022",
      technicalTask: "",
      sourceCodeUrl: "https://github.com/crecker05ru/cron-react-test",
      commentary: "В течение месяца приходил в офис: получал задания и наставник делал ревью кода.",
      feedback: `Нет работы для React разработчика`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "Equite",
      company: "Equite",
      city: "",
      githubTitle: "equite-landing",
      objective: "Сверстать сайт",
      description: "Верстка сайт с использованием Next JS и Material UI",
      technologies: "HTML, CSS, TypeScript, React,Next.js",
      sourceCodeUrl: "https://github.com/crecker05ru/equite-landing",
      deployUrl: "https://equite-landing-62fmzb1s1-crecker05ru.vercel.app/",
      technicalTask: "",
      startedAt: "2021-12-13",
      completedAt: "Dec 13, 2021",
      commentary: "",
      feedback: `Неиспользовал Material UI`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Easy",
      involvementRating: 7
    },
    {
      title: "UI поиска штрафов",
      company: "ШтрафовНет.ру",
      city: "Москва",
      githubTitle: "shtrafov-net-UI",
      objective: "Создать поисковик штрафов",
      description: "Поисковик с запросом в БД компании",
      technologies: "HTML, CSS, TypeScript, React,Next.js",
      sourceCodeUrl: "https://github.com/crecker05ru/shtrafov-net-UI",
      deployUrl: "https://shtrafov-net-ui-miczvsm6j-crecker05ru.vercel.app/",
      technicalTask: "https://drive.google.com/file/d/19lZLoIayh0R4FFDYckIfP5dH04-mSy2C/view?usp=drive_link",
      startedAt: "2021-11-18",
      completedAt: "Nov 21, 2021",
      commentary: "",
      feedback: `Нет`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Easy",
      involvementRating: 8
    },
    {
      title: "Погодный виджет",
      company: "",
      city: "",
      githubTitle: "weather-api-reactjs",
      objective: "Создать виджет погоды и конвертор валют",
      description: "Конвертор и виджет погоды без вменяемой верстки )",
      technologies: "HTML, JavaScript, React",
      sourceCodeUrl: "https://github.com/crecker05ru/weather-api-reactjs",
      deployUrl: "",
      technicalTask: "",
      startedAt: "2021-10-18",
      completedAt: "Oct 19, 2021",
      commentary: "",
      feedback: `Нет`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "UI новостей",
      company: "Авито",
      city: "Москва",
      githubTitle: "avito-test-task-reactjs",
      objective: "Создать UI и отрисовывать данные из запроса",
      description: "Конвертор и виджет погоды без вменяемой верстки )",
      technologies: "HTML,CSS, JavaScript, React",
      sourceCodeUrl: "https://github.com/crecker05ru/avito-test-task-reactjs",
      deployUrl: "https://crecker05ru.github.io/avito-test-task-reactjs",
      technicalTask: "https://drive.google.com/file/d/19lZLoIayh0R4FFDYckIfP5dH04-mSy2C/view?usp=drive_link",
      startedAt: "2021-08-26",
      completedAt: "Sep 1, 2021",
      commentary: "",
      feedback: `Нет`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "Заказ грузовой машины",
      company: "Точка-Точка Логистика",
      city: "Москва",
      githubTitle: "tochka-tochka",
      objective: "Создать UI карточки",
      description: "Интерфейс заказа грузовой машины",
      technologies: "HTML,CSS, JavaScript",
      sourceCodeUrl: "https://github.com/crecker05ru/tochka-tochka",
      deployUrl: "https://crecker05ru.github.io/tochka-tochka/",
      technicalTask: "https://drive.google.com/file/d/1GU2oyzwvARPFPkskaZIJqWZPDBPyhbym/view?usp=drive_link",
      startedAt: "2021-04-19",
      completedAt: "Apr 22, 2021",
      commentary: "",
      feedback: `Нет`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Easy",
      involvementRating: 8
    },
    {
      title: "Полезные материалы",
      company: "СИНКОПП",
      city: "Нижний Новгород",
      githubTitle: "useful-materials",
      objective: "Создать кастомный слайдер",
      description: "Сайт со слайдером",
      technologies: "HTML,CSS, TypeScript,Next.js",
      sourceCodeUrl: "https://github.com/crecker05ru/useful-materials",
      deployUrl: "https://useful-materials-5hqdxfhoe-crecker05ru.vercel.app/",
      technicalTask: "https://github.com/crecker05ru/useful-materials/tree/main/TH%D0%98NKOP%20Technical%20task",
      startedAt: "2024-01-14",
      completedAt: "2024-01-14",
      commentary: "Не уложился время,слайдер занял бы гораздо больше заявленных 60 минут",
      feedback: `Нет`,
      isCompleted: false,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    }
  ],
  "en": [
    {
      title: "Webtronics",
      company: "Webtronics",
      githubTitle: "test-webtronics-quasar",
      objective: "Create an application using Quasar",
      description: "Admin panel with table and login form",
      technicalTask: "https://docs.google.com/document/d/1nCNpEGXf0xsRjyeeKHl5M7QTBHafcOZ8/edit?usp=drive_link&ouid=109415402684053365214&rtpof=true&sd=true",
      technologies: "HTML, SCSS, TypeScript, Vue, Quasar",
      deployUrl: "https://extraordinary-gecko-e5d70f.netlify.app/",
      sourceCodeUrl: "https://github.com/crecker05ru/test-webtronics-quasar",
      startedAt: "2023-12-21",
      completedAt: "2023-12-26",
      commentary: `Answer from the team lead: “confusion in the code and structure, remnants of old/unnecessary code, logic and types/interfaces in the pages, in general, I didn’t look further. I would advise you to be more careful, try to write more beautiful and structured code, and read more book on programming, start with the basics - “Clean Code” and “Clean Architecture” by Robert Martin`,
      feedback: "Unfortunately, at the moment we are not ready to invite you for an interview.",
      isCompleted: true,
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "3D Conus",
      company: "CADEX",
      githubTitle: "webGL-draw",
      objective: "Create an interface for drawing a 3D cone",
      description: "Drawing a 3D cone according to a given formula, there was also a more complex point with a normal map, but I didn’t get to it",
      technologies: "JavaScript, WebGL",
      deployUrl: "https://crecker05ru.github.io/webGL-draw/",
      startedAt: "2023-10-15",
      completedAt: "2023-10-15",
      technicalTask: "https://drive.google.com/file/d/1yeyi9HBee4oLM3x45uEEMFh8_-rRQjeC/view?usp=drive_link",
      sourceCodeUrl: "https://github.com/crecker05ru/webGL-draw",
      commentary: "",
      feedback: "Too many works were submitted.",
      isCompleted: false,
      image: "",
      difficulty: "Hard",
      involvementRating: 10
    },
    {
      title: "Pizza Chief",
      company: "Itlogiya",
      githubTitle: "itlogy-task",
      objective: "Website layout and form submission, video analysis of the work",
      description: "Standard layout with form and video analysis of the student’s work",
      technologies: "HTML, CSS, JavaScript",
      deployUrl: "https://crecker05ru.github.io/itlogy-task/src/",
      startedAt: "2023-10-11",
      completedAt: "2023-10-13",
      technicalTask: "https://docs.google.com/document/d/1VmlJ4g9u994ipEpNg6_UdLRJlhV940SI/edit?usp=drive_link&ouid=109415402684053365214&rtpof=true&sd=true",
      sourceCodeUrl: "https://github.com/crecker05ru/itlogy-task/tree/main",
      commentary: "For the first time I recorded a video analysis of a student’s work)",
      feedback: "Hired a developer with more experience",
      isCompleted: true,
      videoUrl: "https://drive.google.com/file/d/12ItCTqSelJT8nC3X25qbadwqJrRXASD7/view?usp=drive_link",
      image: "",
      difficulty: "Easy",
      involvementRating: 8
    },
    {
      title: "Puzzle",
      company: "DSS Lab",
      githubTitle: "dss-lab-puzzle",
      objective: "Solve the ciffre",
      description: "Interesting puzzle to decipher an encrypted message",
      technologies: "HTML, CSS, JavaScript",
      deployUrl: "https://crecker05ru.github.io/dss-lab-puzzle/src/",
      startedAt: "2023-10-07",
      completedAt: "2023-10-07",
      technicalTask: "",
      sourceCodeUrl: "https://github.com/crecker05ru/dss-lab-puzzle",
      commentary: "",
      feedback: "",
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Hard",
      involvementRating: 10
    },
    {
      title: "Feature sliced design",
      company: "Picasso",
      githubTitle: "fsd-redux-task",
      objective: "Create an application following Feature Sliced Design",
      description: "Didn’t meet the deadline, but asked for feedback, feedback was given in the form of a template text",
      technologies: "HTML, CSS, TypeScript, React,RTK Query,FSD",
      deployUrl: "https://crecker05ru.github.io/fsd-redux-task/",
      startedAt: "2023-10-01",
      completedAt: "2023-10-08",
      technicalTask: "",
      sourceCodeUrl: "https://github.com/crecker05ru/fsd-redux-task",
      commentary: "",
      feedback: "Unfortunately, at this time we are not ready to invite you for a further interview for this vacancy.",
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "Redactor",
      company: "05RU",
      githubTitle: "vue-redactor-task",
      objective: "Create redactor",
      description: "Create an editor application",
      technologies: "HTML, CSS, JavaScript, Vue",
      deployUrl: "https://crecker05ru.github.io/vue-redactor-task/",
      startedAt: "2023-09-28",
      completedAt: "2023-09-30",
      technicalTask: "",
      sourceCodeUrl: "https://github.com/crecker05ru/vue-redactor-task",
      commentary: "",
      feedback: "No",
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Easy",
      involvementRating: 8
    },
    {
      title: "Test blog",
      company: "Fructorum",
      githubTitle: "pug-nuxt3-client-task",
      objective: "Create a blog",
      description: "Blog site using your own template engine in the form of plug-in components",
      technologies: "HTML, SCSS, TypeScript, Vue, Nuxt 3",
      deployUrl: "https://pug-nuxt3-client-task.vercel.app/",
      startedAt: "2023-08-26",
      completedAt: "2023-08-28",
      technicalTask: "https://drive.google.com/file/d/1NAW782cOQjlA7MKrKdp1l5U1k7g4PozH/view?usp=drive_link",
      sourceCodeUrl: "https://github.com/crecker05ru/pug-nuxt3-client-task",
      commentary: "",
      feedback: `There were some inaccuracies in the test, and in the end we chose another candidate. Thank you, perhaps we will collaborate again in the future.
      Feedback from the test:
      "Incorrectly organized work with slug pages.
      In some places there is a strong discrepancy between the layout and the layout in Figma"`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 7
    },
    {
      title: "Weather widget",
      company: "Plumsail",
      githubTitle: "my-vue-widget",
      objective: "Create a widget embedded by tag",
      description: "Create a widget embedded in the <my-widget/> tag ",
      technologies: "HTML, SCSS, TypeScript, Vue",
      deployUrl: "https://cosmic-cajeta-dfe1ae.netlify.app/",
      startedAt: "2023-07-29",
      completedAt: "2023-07-31",
      technicalTask: "https://docs.google.com/document/d/1i6l-ib-TYKjfRNX9knHEA1kjJuImRY8F/edit?usp=drive_link&ouid=109415402684053365214&rtpof=true&sd=true",
      sourceCodeUrl: "https://github.com/crecker05ru/my-vue-widget",
      commentary: "",
      feedback: `Thank you very much for your time dedicated to completing the test task. We have reviewed it and are not yet ready to invite you for a further interview for this vacancy. In general, it’s good, but we received a large number of responses and tests, there are candidates who did better. I won’t provide a detailed analysis, because... the test result in the “pass (then interview)/fail” format. I wish you success in finding a new interesting job!`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "Timer",
      company: "PDD",
      githubTitle: "PDD-test-task",
      objective: "Create a timer",
      description: "List of timers that can be added",
      technologies: "HTML, SCSS, TypeScript, Vue",
      deployUrl: "https://crecker05ru.github.io/PDD-test-task/",
      startedAt: "2023-04-06",
      completedAt: "2023-04-07",
      technicalTask: "https://crecker05ru.github.io/PDD-test-task/",
      sourceCodeUrl: "https://github.com/crecker05ru/PDD-test-task",
      commentary: "",
      feedback: `Received an offer`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "Color list",
      company: "ProContext",
      githubTitle: "procontext-task",
      objective: "Create a list with blocks",
      description: "A list with colorful blocks that interacts with a second list",
      technologies: "HTML, SCSS, TypeScript, Vue",
      deployUrl: "https://crecker05ru.github.io/procontext-task/",
      startedAt: "2022-10-25",
      completedAt: "2022-10-28",
      technicalTask: "https://drive.google.com/file/d/1GAdu31E-Hu8GIWz4M2zLnW9O1i3LzRV6/view?usp=drive_link",
      sourceCodeUrl: "https://github.com/crecker05ru/procontext-task",
      commentary: "My mistake related to list identifiers, I had to convert them to a string. There is also a bug that is not fixed",
      feedback: `There was a review`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "2D Planner",
      company: "Hammer Systems",
      city: "Moscow",
      githubTitle: "hammer-systems-test-task",
      objective: "Create 2D Planner",
      description: "The task consisted of 2 parts: the first was to create an admin panel as in the layout, I managed to do this, considering that I had to understand someone else’s code and for some reason npm packages were installed with an error, yarn helped out, the second was to create a 2D glider, the essence was clear but I had an idea of how to implement this, but I didn’t know how to implement it, plus I didn’t meet the deadline",
      technologies: "HTML, Less, JavaScript, React,Redux",
      deployUrl: "https://cerulean-quokka-b5359a.netlify.app/app/main",
      startedAt: "2022-10-18",
      completedAt: "2022-10-31",
      technicalTask: "https://docs.google.com/document/d/1zVr_c-8SF-wKP3vlMfkFQ9I_P2Exjis9/edit?usp=drive_link&ouid=109415402684053365214&rtpof=true&sd=true",
      sourceCodeUrl: "https://github.com/crecker05ru/hammer-systems-test-task",
      commentary: "My mistake related to list identifiers, I had to convert them to a string. There is also a bug that is not fixed",
      feedback: ``,
      isCompleted: false,
      videoUrl: "",
      image: "",
      difficulty: "Hard",
      involvementRating: 7
    },
    {
      title: "Lit Component",
      company: "Cron",
      city: "Makhachkala",
      githubTitle: "lit-kron",
      objective: "Create component",
      description: "Create a reusable component based on a given layout and run it through tests",
      technologies: "HTML, CSS, TypeScript, Lit",
      deployUrl: "",
      startedAt: "2022-04-25",
      completedAt: "2022-04-27",
      technicalTask: "",
      sourceCodeUrl: "https://crecker05ru.github.io/lit-kron/",
      commentary: "",
      feedback: ``,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 7
    },
    {
      title: "Switchable graph",
      company: "Data Prime",
      city: "",
      githubTitle: "try-canvas",
      objective: "Create graph",
      description: "Create a graph on canvas and when clicked it should transform into another graph",
      technologies: "HTML, JavaScript",
      deployUrl: "https://crecker05ru.github.io/try-canvas/",
      startedAt: "2022-03-03",
      completedAt: "2022-03-09",
      technicalTask: "",
      sourceCodeUrl: "https://github.com/crecker05ru/try-canvas",
      commentary: "I spent more than a month studying the canvas and drawing points on it and ended up doing something wrong O_o",
      feedback: ``,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Hard",
      involvementRating: 8
    },
    {
      title: "Admin-panel",
      company: "Cron",
      city: "Makhachkala",
      githubTitle: "cron-react-test",
      objective: "Create admin panel",
      description: "Part of the admin panel for managing orders with search and sorting",
      technologies: "HTML, CSS, JavaScript, React",
      deployUrl: "https://crecker05ru.github.io/cron-react-test/",
      startedAt: "2021-12-26",
      completedAt: "Jan 26, 2022",
      technicalTask: "",
      sourceCodeUrl: "https://github.com/crecker05ru/cron-react-test",
      commentary: "Within a month, I came to the office: received assignments and the mentor reviewed the code.",
      feedback: `No job for React developer`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "Equite",
      company: "Equite",
      city: "",
      githubTitle: "equite-landing",
      objective: "Design the website",
      description: "Website layout using Next JS and Material UI",
      technologies: "HTML, CSS, TypeScript, React,Next.js",
      sourceCodeUrl: "https://github.com/crecker05ru/equite-landing",
      deployUrl: "https://equite-landing-62fmzb1s1-crecker05ru.vercel.app/",
      technicalTask: "",
      startedAt: "2021-12-13",
      completedAt: "Dec 13, 2021",
      commentary: "",
      feedback: `Didn't use Material UI`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Easy",
      involvementRating: 7
    },
    {
      title: "Penalty search UI",
      company: "ShtrafovNet.ru",
      city: "Moscow",
      githubTitle: "shtrafov-net-UI",
      objective: "Create a fine search engine",
      description: "Search engine with a query in the company database",
      technologies: "HTML, CSS, TypeScript, React,Next.js",
      sourceCodeUrl: "https://github.com/crecker05ru/shtrafov-net-UI",
      deployUrl: "https://shtrafov-net-ui-miczvsm6j-crecker05ru.vercel.app/",
      technicalTask: "https://drive.google.com/file/d/19lZLoIayh0R4FFDYckIfP5dH04-mSy2C/view?usp=drive_link",
      startedAt: "2021-11-18",
      completedAt: "Nov 21, 2021",
      commentary: "",
      feedback: `No`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Easy",
      involvementRating: 8
    },
    {
      title: "Weather widget",
      githubTitle: "weather-api-reactjs",
      objective: "Create a weather widget and currency converter",
      description: "Create a weather widget and currency converter",
      technologies: "HTML, JavaScript, React",
      sourceCodeUrl: "https://github.com/crecker05ru/weather-api-reactjs",
      deployUrl: "",
      technicalTask: "",
      startedAt: "2021-10-18",
      completedAt: "Oct 19, 2021",
      commentary: "",
      feedback: `No`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "News UI",
      company: "Avito",
      city: "Moscow",
      githubTitle: "avito-test-task-reactjs",
      objective: "Create a UI and render data from the request",
      description: "Converter and weather widget without proper layout)",
      technologies: "HTML,CSS, JavaScript, React",
      sourceCodeUrl: "https://github.com/crecker05ru/avito-test-task-reactjs",
      deployUrl: "https://crecker05ru.github.io/avito-test-task-reactjs",
      technicalTask: "https://drive.google.com/file/d/19lZLoIayh0R4FFDYckIfP5dH04-mSy2C/view?usp=drive_link",
      startedAt: "2021-08-26",
      completedAt: "Sep 1, 2021",
      commentary: "",
      feedback: `No`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "Order a truck",
      company: "Tochka-Tochka Logistics",
      city: "Moscow",
      githubTitle: "tochka-tochka",
      objective: "Create UI cards",
      description: "Truck order interface",
      technologies: "HTML,CSS, JavaScript",
      sourceCodeUrl: "https://github.com/crecker05ru/tochka-tochka",
      deployUrl: "https://crecker05ru.github.io/tochka-tochka/",
      technicalTask: "https://drive.google.com/file/d/1GU2oyzwvARPFPkskaZIJqWZPDBPyhbym/view?usp=drive_link",
      startedAt: "2021-04-19",
      completedAt: "Apr 22, 2021",
      commentary: "",
      feedback: `No`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Easy",
      involvementRating: 8
    },
    {
      title: "Useful materials",
      company: "Thinkopp",
      city: "Nizhny Novgorod",
      githubTitle: "useful-materials",
      objective: "Create a custom slider",
      description: "Website with slider",
      technologies: "HTML,CSS, TypeScript,Next.js",
      sourceCodeUrl: "https://github.com/crecker05ru/useful-materials",
      deployUrl: "https://useful-materials-5hqdxfhoe-crecker05ru.vercel.app/",
      technicalTask: "https://github.com/crecker05ru/useful-materials/tree/main/TH%D0%98NKOP%20Technical%20task",
      startedAt: "2024-01-14",
      completedAt: "2024-01-14",
      commentary: "I didn’t meet the time, the slider would have taken much longer than the stated 60 minutes",
      feedback: `No`,
      isCompleted: false,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    }
  ]
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const descriptionMap = {
      ru: {
        address: "Адрес",
        email: "Email",
        phone: "Телефон",
        telegram: "Telegram",
        github: "Github",
        maritalStatus: "Семейное положение",
        dateOfBirth: "Дата рождения",
        objective: "Цель",
        education: "Образование",
        workExperience: "Опыт работы",
        skills: "Навыки",
        additionalEducation: "Повышение квалификации",
        aboutMe: "Обо мне",
        portfolio: "Портфолио",
        myRepos: "Мои репо",
        name: "Название",
        language: "Язык",
        createdAt: "Создан",
        description: "Описание",
        technologies: "Технологии",
        testTasks: "Тестовые задания",
        feedback: "Отзыв",
        commentary: "Комментарий",
        technicalTask: "Техническое задание",
        completed: "Завершен",
        image: "Изображение",
        difficulty: "Сложность",
        involvementRating: "Рейтинг вовлеченности",
        totalExperience: "Общий стаж",
        month: "месяц",
        months: "месяцев",
        years: "года",
        year: "год",
        and: "и"
      },
      en: {
        address: "Address",
        email: "Email",
        phone: "Phone",
        telegram: "Telegram",
        github: "Github",
        maritalStatus: "Marital status",
        dateOfBirth: "Date of birth",
        objective: "Objective",
        education: "Education",
        workExperience: "Work Experiance",
        skills: "Skills",
        additionalEducation: "Additional education",
        aboutMe: "About me",
        portfolio: "Portfolio",
        myRepos: "My repos",
        name: "Name",
        language: "Language",
        createdAt: "Created at",
        description: "Description",
        technologies: "Technologies",
        testTasks: "Test tasks",
        feedback: "Feedback",
        commentary: "Commentary",
        technicalTask: "Technical task",
        completed: "Completed",
        image: "Image",
        difficulty: "Difficulty",
        involvementRating: "Involvement Rating",
        totalExperience: "Total experience",
        month: "month",
        months: "months",
        years: "years",
        year: "year",
        and: "and"
      }
    };
    const repos = ref();
    const currentLanguage = ref("en");
    const languageCheckbox = ref(false);
    const isReposOpened = ref(false);
    const isOverflowed = ref(false);
    const experienceStart = ref(/* @__PURE__ */ new Date("2020-06-05"));
    const currentTime = ref(/* @__PURE__ */ new Date());
    ref(true);
    const timeDifference = computed(() => {
      const calcTime = currentTime.value.getMonth() - experienceStart.value.getMonth() + 12 * (currentTime.value.getFullYear() - experienceStart.value.getFullYear());
      console.log(calcTime);
      return calcTime;
    });
    const computedYear = () => {
      return Math.floor(timeDifference.value / 12);
    };
    const computedMonth = () => {
      return Number(timeDifference.value % 12);
    };
    ref("");
    const currentCv = computed(
      () => myCv$1[currentLanguage.value]
    );
    const currentDescription = computed(
      () => descriptionMap[currentLanguage.value]
    );
    const currentPortfolio = computed(
      () => myPortfolio[currentLanguage.value]
    );
    computed(
      () => myTestTasks[currentLanguage.value]
    );
    useHead({
      bodyAttrs: {
        class: {
          "body-scroll-disable": isOverflowed.value
        }
      }
    });
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_AppChat = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-cv wrapper" }, _attrs))} data-v-b4be91bd>`);
      _push(ssrRenderComponent(_component_AppChat, null, null, _parent));
      _push(`<header class="my-cv__header" data-v-b4be91bd><h1 class="my-cv__initials" data-v-b4be91bd>${ssrInterpolate(currentCv.value.initials)}</h1><h2 class="my-cv__specialization" data-v-b4be91bd>${ssrInterpolate(currentCv.value.specialization)}</h2><div class="my-cv__photo" data-v-b4be91bd><img class="my-cv__profile-photo" alt="Profile photo"${ssrRenderAttr("src", currentCv.value.profilePhoto)} data-v-b4be91bd></div></header><section class="my-cv__section" data-v-b4be91bd><div class="my-cv__language-switch" data-v-b4be91bd><label class="${ssrRenderClass([{ "my-cv__switch-checked": languageCheckbox.value }, "my-cv__switch"])}" data-v-b4be91bd><span class="my-cv__switch-span" data-v-b4be91bd></span><span class="my-cv__switch-lang-en" data-v-b4be91bd>En</span><span class="my-cv__switch-lang-ru" data-v-b4be91bd>Ru</span><input class="my-cv__switch-input" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(languageCheckbox.value) ? ssrLooseContain(languageCheckbox.value, null) : languageCheckbox.value) ? " checked" : ""} data-v-b4be91bd></label></div><address data-v-b4be91bd><p class="my-cv__description-row" data-v-b4be91bd><span class="my-cv__description-key" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.address)}:</span><span class="my-cv__description-value" data-v-b4be91bd>${ssrInterpolate(currentCv.value.address)}</span></p><p class="my-cv__description-row" data-v-b4be91bd><span class="my-cv__description-key" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.email)}:</span><span class="my-cv__description-value" data-v-b4be91bd><a class="my-cv__description-link"${ssrRenderAttr("href", "mailto:" + currentCv.value.contacts.email.split(",")[0])} target="blank" data-v-b4be91bd>${ssrInterpolate(currentCv.value.contacts.email.split(",")[0])}</a></span></p><p class="my-cv__description-row" data-v-b4be91bd><span class="my-cv__description-key" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.phone)}:</span><span class="my-cv__description-value" data-v-b4be91bd>${ssrInterpolate(currentCv.value.contacts.phone)}</span></p><p class="my-cv__description-row" data-v-b4be91bd><span class="my-cv__description-key" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.telegram)}:</span><span class="my-cv__description-value" data-v-b4be91bd>${ssrInterpolate(currentCv.value.contacts.telegram)}</span></p><p class="my-cv__description-row" data-v-b4be91bd><span class="my-cv__description-key" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.github)}:</span><span class="my-cv__description-value" data-v-b4be91bd><a class="my-cv__description-link"${ssrRenderAttr("href", currentCv.value.contacts.gitHub)} target="blank" data-v-b4be91bd>${ssrInterpolate(currentCv.value.contacts.gitHub)}</a></span></p></address><p class="my-cv__description-row" data-v-b4be91bd><span class="my-cv__description-key" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.maritalStatus)}:</span><span class="my-cv__description-value" data-v-b4be91bd>${ssrInterpolate(currentCv.value.maritalStatus)}</span></p><p class="my-cv__description-row" data-v-b4be91bd><span class="my-cv__description-key" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.dateOfBirth)}:</span><span class="my-cv__description-value" data-v-b4be91bd>${ssrInterpolate(currentCv.value.dateOfBirth)}</span></p><p class="my-cv__description-row" data-v-b4be91bd><span class="my-cv__description-key" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.totalExperience)}:</span><span class="my-cv__description-value" data-v-b4be91bd>${ssrInterpolate(computedYear())} ${ssrInterpolate(computedYear() > 1 ? currentDescription.value.years : currentDescription.value.year)}<span data-v-b4be91bd>${ssrInterpolate(computedMonth() > 0 ? " " + currentDescription.value.and + " " : " ")}</span>`);
      if (computedMonth()) {
        _push(`<span data-v-b4be91bd>${ssrInterpolate(computedMonth())} ${ssrInterpolate(computedMonth() > 1 ? currentDescription.value.months : currentDescription.value.month)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span></p><p class="my-cv__description-row" data-v-b4be91bd><span class="my-cv__description-key" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.objective)}:</span><span class="my-cv__description-value" data-v-b4be91bd>${ssrInterpolate(currentCv.value.objective)}</span></p><p class="my-cv__description-row" data-v-b4be91bd><span class="my-cv__description-key" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.education)}:</span><span class="my-cv__description-value" data-v-b4be91bd>${ssrInterpolate(currentCv.value.education[0])}</span></p><ul class="my-cv__list_column" data-v-b4be91bd><span class="my-cv__description-key" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.workExperience)}:</span><!--[-->`);
      ssrRenderList(currentCv.value.workExperience, (exper, index2) => {
        _push(`<li class="my-cv__list-item" data-v-b4be91bd>${ssrInterpolate(exper)}</li>`);
      });
      _push(`<!--]--></ul><ul class="my-cv__list_row" data-v-b4be91bd><span class="my-cv__description-key" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.skills)}:</span><!--[-->`);
      ssrRenderList(currentCv.value.skills, (skill, index2) => {
        _push(`<li class="my-cv__skill-item" data-v-b4be91bd>${ssrInterpolate(skill)}</li>`);
      });
      _push(`<!--]--></ul><ul class="my-cv__list_column" data-v-b4be91bd><span class="my-cv__description-key" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.additionalEducation)}:</span><!--[-->`);
      ssrRenderList(currentCv.value.additionalEducation, (add, index2) => {
        _push(`<li class="my-cv__additional-item" data-v-b4be91bd><a${ssrRenderAttr("href", add.certificateUrl)} target="blank" data-v-b4be91bd>${ssrInterpolate(add.name)}</a></li>`);
      });
      _push(`<!--]--></ul><p class="my-cv__description-row" data-v-b4be91bd><span class="my-cv__description-key" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.aboutMe)}:</span><span class="my-cv__description-value" data-v-b4be91bd>${ssrInterpolate(currentCv.value.aboutMe)}</span></p></section><section class="my-cv__section" data-v-b4be91bd><div class="my-cv__my-portfolio" data-v-b4be91bd><span class="my-cv__description-key" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.portfolio)}:<span data-v-b4be91bd>${ssrInterpolate(currentPortfolio.value.length)}</span></span></div><table class="my-cv__table portfolio-table" data-v-b4be91bd><thead class="portfolio-table__header" data-v-b4be91bd><tr class="portfolio-table__row" data-v-b4be91bd><th class="portfolio-table__header-cell cell__text" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.name)}</th><th class="portfolio-table__header-cell cell__text" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.technologies)}</th><th class="portfolio-table__header-cell cell__description" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.objective)}</th><th class="portfolio-table__header-cell cell__description" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.description)}</th></tr></thead><tbody data-v-b4be91bd><!--[-->`);
      ssrRenderList(currentPortfolio.value, (portfolio, index2) => {
        _push(`<tr class="portfolio-table__row" data-v-b4be91bd><td class="portfolio-table__cell cell__default" data-v-b4be91bd><a class="cell__link"${ssrRenderAttr("href", portfolio.deployUrl)} target="blank" data-v-b4be91bd>${ssrInterpolate(portfolio.title)}</a></td><td class="portfolio-table__cell cell__default word-break" data-v-b4be91bd>${ssrInterpolate(portfolio.technologies)}</td><td class="portfolio-table__cell cell__default" data-v-b4be91bd>${ssrInterpolate(portfolio.objective)}</td><td class="portfolio-table__cell cell__default" data-v-b4be91bd>${ssrInterpolate(portfolio.description)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table>`);
      {
        _push(`<!---->`);
      }
      {
        _push(`<!---->`);
      }
      _push(`<div class="my-cv__my-repos" data-v-b4be91bd><span class="my-cv__description-key" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.myRepos)}:<span data-v-b4be91bd>${ssrInterpolate((_a = repos.value) == null ? void 0 : _a.length)}</span></span></div><table class="my-cv__table repos-table" style="${ssrRenderStyle(isReposOpened.value ? null : { display: "none" })}" data-v-b4be91bd><thead class="repos-table__header" data-v-b4be91bd><tr class="repos-table__row" data-v-b4be91bd><th class="repos-table__header-cell cell__name" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.name)}</th><th class="repos-table__header-cell cell__language" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.language)}</th><th class="repos-table__header-cell cell__created" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.createdAt)}</th><th class="repos-table__header-cell cell__description" data-v-b4be91bd>${ssrInterpolate(currentDescription.value.description)}</th></tr></thead><tbody data-v-b4be91bd><!--[-->`);
      ssrRenderList(repos.value, (repo, index2) => {
        _push(`<tr class="repos-table__row" data-v-b4be91bd><td class="repos-table__cell cell__name" data-v-b4be91bd><a class="cell__link"${ssrRenderAttr("href", repo.html_url)} target="blank" data-v-b4be91bd>${ssrInterpolate(repo.name)}</a></td><td class="repos-table__cell cell__language" data-v-b4be91bd>`);
        if (repo.language) {
          _push(`<span class="${ssrRenderClass([repo.language, "cell__language-text"])}" data-v-b4be91bd>${ssrInterpolate(repo.language)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td><td class="repos-table__cell cell__created" data-v-b4be91bd>${ssrInterpolate(new Date(repo.created_at).toLocaleDateString())}</td><td class="repos-table__cell cell__description" data-v-b4be91bd></td></tr>`);
      });
      _push(`<!--]--></tbody></table></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b4be91bd"]]);
export {
  index as default
};
//# sourceMappingURL=index-kqYNyBbO.js.map
