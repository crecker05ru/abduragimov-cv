import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as _export_sfc, a as useRuntimeConfig } from '../server.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, unref, openBlock, createElementBlock, createElementVNode } from 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrRenderStyle } from 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './index-tbNGurtz.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/h3/dist/index.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/devalue/index.js';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/ufo/dist/index.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/ofetch/dist/node.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/destr/dist/index.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/hookable/dist/index.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/scule/dist/index.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/klona/dist/index.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/defu/dist/defu.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/ohash/dist/index.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/unstorage/dist/index.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/unstorage/drivers/fs.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/unstorage/drivers/memory.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/pathe/dist/index.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/unhead/dist/index.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/@unhead/shared/dist/index.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/unctx/dist/index.mjs';
import 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0 = "" + publicAssetsURL("sounds/on_enter_sound.wav");
const _imports_1 = "" + publicAssetsURL("sounds/pop_sound.mp3");
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
            _push(`<span class="chat__message-username" data-v-722329cb>${ssrInterpolate(message.username)}:\xA0</span>`);
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
    initials: "\u0410\u043D\u0432\u0430\u0440 \u0410\u0431\u0434\u0443\u0440\u0430\u0433\u0438\u043C\u043E\u0432",
    specialization: "\u0424\u0440\u043E\u043D\u0442\u0435\u043D\u0434 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A",
    address: "\u041C\u0430\u0445\u0430\u0447\u043A\u0430\u043B\u0430, 367000, \u0420\u043E\u0441\u0441\u0438\u044F",
    profilePhoto: "images/profilephoto.jpg",
    contacts: {
      email: "anvarabduragimovdev@gmail.com, fort2652@gmail.com",
      phone: "+79884586930, +79387803265",
      telegram: "ankaboot05",
      gitHub: "https://github.com/crecker05ru"
    },
    maritalStatus: "\u0416\u0435\u043D\u0430\u0442",
    dateOfBirth: "12 \u0424\u0435\u0432\u0440\u0430\u043B\u044F 1991",
    objective: `\u0421\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0443\u0434\u043E\u0431\u043D\u044B\u0439, \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0439 \u0438 \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F, \u0431\u044B\u0442\u044C \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u043E\u043C \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0444\u0440\u043E\u043D\u0442\u0435\u043D\u0434 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438.`,
    aboutMe: `
    \u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0444\u0440\u043E\u043D\u0442\u0435\u043D\u0434\u0430 \u0431\u043E\u043B\u0435\u0435 5 \u043B\u0435\u0442.
\u041E\u0442\u043B\u0438\u0447\u043D\u043E\u0435 \u0432\u043B\u0430\u0434\u0435\u043D\u0438\u0435 HTML, CSS, JavaScript \u0438 TypeScript(\u0431\u0430\u0437\u043E\u0432\u044B\u0439).
\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430\u043C\u0438 \u0438 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0430\u043C\u0438, \u0442\u0430\u043A\u0438\u043C\u0438 \u043A\u0430\u043A React, Next.js, Vue 3, Nuxt 2/3.
\u0417\u043D\u0430\u043D\u0438\u0435 HTML5, CSS3, \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435 responsive design.
\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 Git, \u0441\u0431\u043E\u0440\u0449\u0438\u043A\u0430\u043C\u0438 \u043C\u043E\u0434\u0443\u043B\u0435\u0439 (Webpack, Vitejs).
\u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u043A\u0440\u043E\u0441\u0441-\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043D\u043E\u0439 \u0438 \u043A\u0440\u043E\u0441\u0441-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435\u043D\u043D\u043E\u0439 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u0438.
\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u044B\u0439 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0438 \u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043D\u0430 \u043F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0435 \u0442\u0435\u043C\u044B.`,
    education: [
      "2009 \u2014 2014  \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043D\u0441\u043A\u0438\u0439 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0442 \u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0433\u043E \u0445\u043E\u0437\u044F\u0439\u0441\u0442\u0432\u0430, \u041C\u0430\u0445\u0430\u0447\u043A\u0430\u043B\u0430"
    ],
    workExperience: [
      `\u0410\u043F\u0440\u0435\u043B\u044C 2023 \u2014 \u043F\u043E \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F.People Data Design, \u041C\u0430\u0445\u0430\u0447\u043A\u0430\u043B\u0430, peopledatadesign.ru.
    Frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A
    \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u043D\u0430 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0435 Nuxt 3,\u043F\u0440\u0438\u0432\u044F\u0437\u044B\u0432\u0430\u043D\u0438\u0435 API \u043A UI,\u043F\u0440\u0430\u0432\u043A\u0430 \u0431\u0430\u0433\u043E\u0432 \u043D\u0430 \u0444\u0440\u044D\u0439\u043C\u0432\u043E\u0440\u043A\u0435 Nuxt 2.
    \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B \u0432\u0435\u0431 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0441 \u043D\u0443\u043B\u044F, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A Nuxt 3,\u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043B \u0440\u0430\u043D\u0435\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0439 \u0441\u0430\u0439\u0442 \u043D\u0430 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0435 Nuxt 2.`,
      `\u0410\u043F\u0440\u0435\u043B\u044C 2022 \u2014 \u043C\u0430\u0440\u0442 2023 ,Kalimat,\u041C\u0430\u0445\u0430\u0447\u043A\u0430\u043B\u0430, kalimat.io/
   Frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A
   \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0430\u043C\u0438 \u0432 ClickUp,\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430, \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u043A API \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A Next.js,\u0442\u0438\u043F\u0438\u0437\u0430\u0446\u0438\u044F \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 TypeScript,\u043F\u0440\u0430\u0432\u043A\u0430 \u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0431\u043B\u043E\u043A\u043E\u0432 \u0441\u0430\u0439\u0442\u0430 \u043F\u043E \u043C\u0430\u043A\u0435\u0442\u0443 Figma , \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 Git \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432\u0435\u0442\u043A\u0430\u043C\u0438 \u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u044F \u0432 GitLab.\u041E\u0431\u043D\u043E\u0432\u0438\u043B \u0441\u0442\u0435\u043A \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0441 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0430 Vue 2 \u043D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u0432\u0435\u0440\u0441\u0438\u044E React.
  `,
      `
  \u0418\u044E\u043D\u044C 2021 \u2014 \u0424\u0435\u0432\u0440\u0430\u043B\u044C 2022
\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E / \u0447\u0430\u0441\u0442\u043D\u0430\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 / \u0444\u0440\u0438\u043B\u0430\u043D\u0441
\u041C\u0430\u0445\u0430\u0447\u043A\u0430\u043B\u0430
Frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A
\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0432\u0435\u0431 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0432\u0435\u0431 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u043D\u0430 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F\u0445 React/Next.js,\u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u043E\u0439 \u0447\u0430\u0441\u0442\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0438 API \u043D\u0430 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F\u0445 Node js/Postgres.
`,
      `\u041C\u0430\u0439 2020 - \u0418\u044E\u043D\u044C 2021
\u041F\u0435\u0440\u0438\u043E\u0434 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0444\u0440\u043E\u043D\u0442\u0435\u043D\u0434 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438.\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438: HTML,CSS,JavaScript,React,Next.js`
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
      "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430 - B"
    ],
    languages: ["\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u2013 B1", "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 - C2"],
    additionalEducation: [
      { name: "\u041D\u043E\u044F\u0431\u0440\u044C 2020 ,stepik.org ,Web \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445. HTML and CSS", certificateUrl: "https://stepik.org/cert/831092" },
      { name: "\u0414\u0435\u043A\u0430\u0431\u0440\u044C 2020  ,stepik.org , JavaScript \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445", certificateUrl: "https://stepik.org/cert/836636" },
      { name: "\u0410\u0432\u0433\u0443\u0441\u0442 2021 , freecodecamp.org, JavaScript algoritms and data structures,", certificateUrl: "https://www.freecodecamp.org/certification/fcc61df5419-4666-479a-8c14-650407e6943c/javascript-algorithms-and-data-structures" },
      { name: `\u041E\u043A\u0442\u044F\u0431\u0440\u044C 2022 ,  JS/FE Pre-School 2022Q4 RS School, Frontend`, certificateUrl: "https://app.rs.school/certificate/s1vbxi29" },
      { name: `\u041C\u0430\u0440\u0442 2023 JavaScript/Front-end 2023Q1 Roling Scopes School, Frontend`, certificateUrl: "https://app.rs.school/certificate/zefjkv1f" },
      { name: `\u041E\u043A\u0442\u044F\u0431\u0440\u044C 2023 Angular 2023Q4 Roling Scopes School, Frontend`, certificateUrl: "https://app.rs.school/certificate/flv7mwku" }
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
    education: ["2009 \u2014 2014  Dagestan State Institute of National Economy,department of Information Technology,specialist degree."],
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
    languages: ["English \u2013 B1", "Russian - C2"],
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
      objective: "\u0421\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441 Vue 3, \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0438\u0434\u0435\u0439",
      description: "\u041C\u043E\u044F \u043F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u0430 \u0434\u043B\u044F \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043D\u043E\u0432\u044B\u0445 \u0444\u0438\u0447 Vue 3 \u0438 \u043F\u0440\u043E\u0434\u0443\u043C\u044B\u0432\u0430\u043D\u0438\u0435 \u0438\u0434\u0435\u0439",
      technologies: "HTML,CSS,Typescript,Vue,SQLite",
      deployUrl: "https://crecker05ru.github.io/momentum-rss/",
      sourceCodeUrl: "https://stock.abduragimovdev.ru/",
      startedAt: "14.04.2025",
      completedAt: ""
    },
    {
      title: "Momentum",
      githubTitle: "momentum-rss",
      objective: "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441 \u043D\u0443\u043B\u044F \u0430\u043D\u0430\u043B\u043E\u0433 \u043F\u043B\u0430\u0433\u0438\u043D\u0430 Google Momentum",
      description: "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0440\u0435\u043B\u0430\u043A\u0441\u0430: \u043D\u0430 \u0444\u043E\u043D\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438 \u0436\u0438\u0432\u043E\u0439 \u043F\u0440\u0438\u0440\u043E\u0434\u044B, \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0439 \u043F\u043B\u0435\u0435\u0440, \u043C\u0443\u0434\u0440\u044B\u0435 \u0446\u0438\u0442\u0430\u0442\u044B, \u043F\u043E\u0433\u043E\u0434\u0430 \u043D\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F, \u0438 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u0432\u0441\u0435\u0433\u043E - \u0432\u0440\u0435\u043C\u044F,\u0447\u0442\u043E\u0431\u044B \u043D\u0435 \u0434\u043E\u043B\u0433\u043E \u043D\u0435 \u0437\u0430\u0441\u0438\u0436\u0438\u0432\u0430\u0442\u044C\u0441\u044F )",
      technologies: "HTML,CSS,Javascript,Webpack,Rest API",
      deployUrl: "https://crecker05ru.github.io/momentum-rss/",
      sourceCodeUrl: "https://github.com/crecker05ru/momentum-rss",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Plants",
      githubTitle: "plants-rss",
      objective: "\u0421\u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044C \u0441\u0430\u0439\u0442 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043A\u0443\u0440\u0441\u0430 RS",
      description: "\u0421\u0430\u0439\u0442 \u043E \u0441\u0430\u0434\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u0435",
      technologies: "HTML,CSS,Javascript",
      deployUrl: "https://crecker05ru.github.io/plants-rss/",
      sourceCodeUrl: "https://github.com/crecker05ru/plants-rss",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Shelter",
      githubTitle: "shelter-rss",
      objective: "\u0421\u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044C \u0441\u0430\u0439\u0442 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043A\u0443\u0440\u0441\u0430 RS",
      description: "\u0421\u0430\u0439\u0442 \u043E \u043F\u0440\u0438\u044E\u0442\u0435 \u0434\u043B\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445",
      technologies: "HTML,CSS,Javascript",
      deployUrl: "https://crecker05ru.github.io/rss-shelter/",
      sourceCodeUrl: "https://github.com/crecker05ru/rss-shelter",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Minesweeper",
      githubTitle: "rss-miner",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u0433\u0440\u0443 \u0421\u0430\u043F\u0435\u0440 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043A\u0443\u043F\u0441\u0430\u0445 RS",
      description: "\u0418\u0433\u0440\u0430 \u043F\u0440\u043E \u0441\u0430\u043F\u0435\u0440\u0430 )",
      technologies: "HTML,CSS,Javascript",
      deployUrl: "https://crecker05ru.github.io/rss-miner/",
      sourceCodeUrl: "https://github.com/crecker05ru/rss-miner",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "CSS Selectors",
      githubTitle: "rss-css-selectors",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u0433\u0440\u043E\u0432\u043E\u0439 \u0442\u0440\u0435\u043D\u0430\u0436\u0435\u0440 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043A\u0443\u0440\u0441\u0430 RS",
      description: "\u0418\u0433\u0440\u0430 \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043F\u0438\u0441\u0430\u0442\u044C \u0432 \u0435\u0434\u0438\u0442\u043E\u0440\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0441\u0435\u043B\u0435\u043A\u0442\u043E\u0440.\u0418\u0433\u0440\u0430 \u043D\u0435 \u0441\u0434\u0435\u043B\u0430\u043D\u0430 \u0434\u043E \u043A\u043E\u043D\u0446\u0430",
      technologies: "HTML,CSS,Typescript",
      deployUrl: "https://crecker05ru.github.io/rss-css-selectors/",
      sourceCodeUrl: "https://github.com/crecker05ru/rss-css-selectors",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "connections-rss",
      githubTitle: "Connections",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0433\u0440\u0443\u043F\u043F\u043E\u0432\u043E\u0433\u043E \u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0441 \u0434\u0440\u0443\u0433\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C",
      description: "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043E\u0431\u043C\u0435\u043D\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F\u043C\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F Rest API",
      technologies: "Angular,NgRx,Rest API",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/connections-rss",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "E-commerce",
      githubTitle: "e-commerce",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043A\u0443\u0440\u0441\u0430 RS",
      description: "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432",
      technologies: "Jira,React ,Redux, RTK Query,Rest API",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/High-lavander/e-commerce",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Async race",
      githubTitle: "async-race",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043A\u0443\u0440\u0441\u0430 RS",
      description: "\u0423\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C \u0433\u043E\u043D\u043A\u0438!\u0422\u043E\u043B\u044C\u043A\u043E \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0447\u0442\u043E\u0431\u044B \u0432\u0430\u0448 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C \u0432\u0430\u0441 \u043D\u0435 \u043F\u043E\u0434\u0432\u0435\u043B )",
      technologies: "HTML,CSS,Javascript,HTTP,Rest API",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/async-race",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "HTML Builder",
      githubTitle: "HTML-builder",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0432\u043E\u0439 \u0441\u0431\u043E\u0440\u0449\u0438\u043A \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043A\u0443\u0440\u0441\u0430 RS",
      description: "\u0421\u0431\u043E\u0440\u0449\u0438\u043A \u0441\u043E\u0437\u0434\u0430\u043D \u043D\u0430 Node.js ,\u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u0444\u0430\u0439\u043B\u044B, \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442 \u0438 \u043E\u0447\u0438\u0449\u0430\u0435\u0442",
      technologies: "Javascript,Node JS",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/HTML-builder",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "\u0427\u0451 \u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C",
      githubTitle: "CheGotovit",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u043E\u0432 \u0441 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u044B\u043C \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\u043C \u0441\u043E\u0441\u0442\u0430\u0432\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u0438 \u0438\u0445 \u043D\u0443\u0442\u0440\u0438\u0435\u043D\u0442\u043E\u0432",
      description: "\u0411\u0435\u0437 \u0435\u0434\u044B \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u0434\u043E\u043B\u0433\u043E \u043D\u0435 \u043F\u0440\u043E\u0442\u044F\u043D\u0435\u0442 ,\u0430 \u0431\u0435\u0437 \u0445\u043E\u0440\u043E\u0448\u0435\u0439 \u0438 \u043F\u043E\u043B\u0435\u0437\u043D\u043E\u0439 \u0435\u0434\u044B \u043F\u0440\u043E\u0442\u044F\u043D\u0435\u0442,\u043D\u043E \u043D\u0435 \u0434\u043E\u043B\u0433\u043E.\u0412 \u0441\u0442\u0440\u043E\u043A\u0435 \u043F\u043E\u0438\u0441\u043A\u0430 \u0432\u0431\u0438\u0432\u0430\u0435\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430,\u0438\u0437 \u0447\u0435\u0433\u043E \u0431\u044B \u0432\u044B \u0445\u043E\u0442\u0435\u043B\u0438 \u043F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0441\u0435\u0431\u0435 \u0435\u0434\u0443,\u0438 \u0441\u0440\u0430\u0437\u0443 \u0432\u0438\u0434\u0438\u0442\u0435 \u0432\u0441\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0435 \u0440\u0435\u0446\u0435\u043F\u0442\u044B \u0438 \u0438\u0445 \u0441\u043E\u0441\u0442\u0430\u0432 \u0432\u043F\u043B\u043E\u0442\u044C \u0434\u043E \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
      technologies: "React,PWA,Rest API",
      deployUrl: "https://starlit-twilight-3360a5.netlify.app/",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u0437\u0430\u043A\u0430\u0437\u043E\u0432",
      githubTitle: "bikeband-order-table-client",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u044B\u0445 \u043F\u043E\u043A\u0443\u043F\u043E\u043A \u0438 \u0432\u043D\u0442\u0443\u0440\u0435\u043D\u043D\u0438\u043C \u0447\u0430\u0442\u043E\u043C,\u0438\u0437\u0443\u0447\u0438\u0442\u044C WebSockets",
      description: "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u044B\u0445 \u043F\u043E\u043A\u0443\u043F\u043E\u043A \u0438 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u043C \u0447\u0430\u0442\u043E\u043C",
      technologies: "React/Next.js,Node.js,Express.js,Postgres,WebSockets",
      deployUrl: "https://bikeband-order-table-client-6ctgq6oi2-crecker05ru.vercel.app/",
      sourceCodeUrl: "https://github.com/crecker05ru/bikeband-order-table-client",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Youtube",
      githubTitle: "youtube-client",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u044B\u0445 \u043F\u043E\u043A\u0443\u043F\u043E\u043A \u0438 \u0432\u043D\u0442\u0443\u0440\u0435\u043D\u043D\u0438\u043C \u0447\u0430\u0442\u043E\u043C,\u0438\u0437\u0443\u0447\u0438\u0442\u044C WebSockets",
      description: "\u041F\u0440\u043E\u0435\u043A\u0442 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u044B\u0439 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043A\u0443\u0440\u0441\u0430 RS Shcool - UI \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u0432\u0438\u0434\u0435\u043E yotube \u0441 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F.",
      technologies: "Angular,NgRx,Material UI",
      sourceCodeUrl: "https://github.com/crecker05ru/che-gotovit",
      deployUrl: "https://github.com/crecker05ru/youtube-client",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Golden layout",
      githubTitle: "golden-layout",
      objective: "\u0421\u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044C \u0441\u0430\u0439\u0442",
      description: "\u0421\u0430\u0439\u0442-\u043C\u0430\u043A\u0435\u0442, \u0431\u0435\u0437 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u0430",
      technologies: "HTML,CSS,Javascript",
      sourceCodeUrl: "https://github.com/crecker05ru/golden-layout2",
      deployUrl: "https://crecker05ru.github.io/golden-layout2/",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Fullstack Todo",
      githubTitle: "nextjs-nodejs-graphql-mysql-training",
      objective: "\u0418\u0437\u0443\u0447\u0438\u0442\u044C GraphQL,\u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 GraphQL \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u0435",
      description: "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0442\u0443\u0434\u0443\u0448\u043A\u0430 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u043E\u0439 \u0447\u0430\u0441\u0442\u044C\u044E",
      technologies: "React/Next.JS,GraphQL,MySQL",
      deployUrl: "",
      sourceCodeUrl: "https://github.com/crecker05ru/nextjs-nodejs-graphql-mysql-training",
      startedAt: "",
      completedAt: ""
    },
    {
      title: "Magazine blog",
      githubTitle: "magazine-stiled-blog",
      objective: "\u0412\u0435\u0440\u0441\u0442\u043A\u0430 \u0441\u0430\u0439\u0442\u0430",
      description: "\u041C\u043E\u044F \u043F\u0435\u0440\u0432\u0430\u044F \u0441\u0432\u0435\u0440\u0441\u0442\u0430\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430,\u0431\u0435\u0437 \u043A\u0430\u043A\u043E\u0433\u043E \u043B\u0438\u0431\u043E \u0440\u0435\u0441\u043F\u043E\u043D\u0441\u0438\u0432\u0430 \u0438 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u0430 )",
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
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F Quasar",
      description: "\u0410\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C \u0441 \u0442\u0430\u0431\u043B\u0438\u0446\u0435\u0439 \u0438 \u0444\u043E\u0440\u043C\u043E\u0439 \u0434\u043B\u044F \u043B\u043E\u0433\u0438\u043D\u0430",
      technicalTask: "https://docs.google.com/document/d/1nCNpEGXf0xsRjyeeKHl5M7QTBHafcOZ8/edit?usp=drive_link&ouid=109415402684053365214&rtpof=true&sd=true",
      technologies: "HTML, SCSS, TypeScript, Vue, Quasar",
      deployUrl: "https://extraordinary-gecko-e5d70f.netlify.app/",
      sourceCodeUrl: "https://github.com/crecker05ru/test-webtronics-quasar",
      startedAt: "2023-12-21",
      completedAt: "2023-12-26",
      commentary: "",
      feedback: `\u041E\u0442\u0432\u0435\u0442 \u043E\u0442 \u0442\u0438\u043C\u043B\u0438\u0434\u0430: "\u0441\u0443\u043C\u0431\u0443\u0440 \u0432 \u043A\u043E\u0434\u0435 \u0438 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0435, \u043E\u0441\u0442\u0430\u0442\u043A\u0438 \u0441\u0442\u0430\u0440\u043E\u0433\u043E/\u043D\u0435\u043D\u0443\u0436\u043D\u043E\u0433\u043E \u043A\u043E\u0434\u0430, \u043B\u043E\u0433\u0438\u043A\u0430 \u0438 \u0442\u0438\u043F\u044B/\u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B \u0432 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0445, \u0434\u0430\u043B\u044C\u0448\u0435 \u0432 \u043E\u0431\u0449\u0435\u043C-\u0442\u043E \u043D\u0435 \u0441\u043C\u043E\u0442\u0440\u0435\u043B. \u041F\u043E\u0441\u043E\u0432\u0435\u0442\u043E\u0432\u0430\u043B \u0431\u044B \u0431\u044B\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u0435\u0439, \u0441\u0442\u0430\u0440\u0430\u0442\u044C\u0441\u044F \u043F\u0438\u0441\u0430\u0442\u044C \u0431\u043E\u043B\u0435\u0435 \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u0439 \u0438 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043A\u043E\u0434, \u043D\u0443 \u0438 \u043F\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u043A\u043D\u0438\u0436\u043A\u0435 \u043F\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E, \u043D\u0430\u0447\u0430\u0442\u044C \u0441 \u0431\u0430\u0437\u044B - "\u0427\u0438\u0441\u0442\u044B\u0439 \u043A\u043E\u0434" \u0438 "\u0427\u0438\u0441\u0442\u0430\u044F \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430" \u0420\u043E\u0431\u0435\u0440\u0442\u0430 \u041C\u0430\u0440\u0442\u0438\u043D\u0430`,
      isCompleted: true,
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "3D Conus",
      company: "CADEX",
      githubTitle: "webGL-draw",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043B\u044F \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u043A\u0438 3D \u043A\u043E\u043D\u0443\u0441\u0430",
      description: "\u041E\u0442\u0440\u0438\u0441\u043E\u0432\u043A\u0430 3D \u043A\u043E\u043D\u0443\u0441\u0430 \u043F\u043E \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0443\u043B\u0435,\u0442\u0430\u043A\u0436\u0435 \u0431\u044B\u043B \u0431\u043E\u043B\u0435\u0435 \u0441\u043B\u043E\u0436\u043D\u044B\u0439 \u043F\u0443\u043D\u043A\u0442 \u0441 \u043A\u0430\u0440\u0442\u043E\u0439 \u043D\u043E\u0440\u043C\u0430\u043B\u0435\u0439,\u043D\u043E \u044F \u0434\u043E \u043D\u0435\u0435 \u043D\u0435 \u0434\u043E\u0448\u0451\u043B",
      technologies: "JavaScript, WebGL",
      deployUrl: "https://crecker05ru.github.io/webGL-draw/",
      startedAt: "2023-10-15",
      completedAt: "2023-10-15",
      technicalTask: "https://drive.google.com/file/d/1yeyi9HBee4oLM3x45uEEMFh8_-rRQjeC/view?usp=drive_link",
      sourceCodeUrl: "https://github.com/crecker05ru/webGL-draw",
      commentary: "",
      feedback: "\u0411\u044B\u043B\u043E \u043F\u0440\u0438\u0441\u043B\u0430\u043D\u043E \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E \u0440\u0430\u0431\u043E\u0442.",
      isCompleted: false,
      image: "",
      difficulty: "Hard",
      involvementRating: 10
    },
    {
      title: "Pizza Chief",
      company: "\u0410\u0439\u0442\u0438\u043B\u043E\u0433\u0438\u044F",
      githubTitle: "itlogy-task",
      objective: "\u0412\u0435\u0440\u0441\u0442\u043A\u0430 \u0441\u0430\u0439\u0442\u0430 \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0444\u043E\u0440\u043C\u044B,\u0432\u0438\u0434\u0435\u043E\u0440\u0430\u0437\u0431\u043E\u0440 \u0440\u0430\u0431\u043E\u0442\u044B",
      description: "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0442\u043A\u0430 \u043C\u0430\u043A\u0435\u0442\u0430 \u0441 \u0444\u043E\u0440\u043C\u043E\u0439 \u0438 \u0432\u0438\u0434\u0435\u043E\u0440\u0430\u0437\u0431\u043E\u0440 \u0440\u0430\u0431\u043E\u0442\u044B \u0443\u0447\u0435\u043D\u0438\u043A\u0430",
      technologies: "HTML, CSS, JavaScript",
      deployUrl: "https://crecker05ru.github.io/itlogy-task/src/",
      startedAt: "2023-10-11",
      completedAt: "2023-10-13",
      technicalTask: "https://docs.google.com/document/d/1VmlJ4g9u994ipEpNg6_UdLRJlhV940SI/edit?usp=drive_link&ouid=109415402684053365214&rtpof=true&sd=true",
      sourceCodeUrl: "https://github.com/crecker05ru/itlogy-task/tree/main",
      commentary: "\u0412\u043F\u0435\u0440\u0432\u044B\u0435 \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u043B \u0432\u0438\u0434\u0435\u043E\u0440\u0430\u0437\u0431\u043E\u0440 \u0440\u0430\u0431\u043E\u0442\u044B \u0443\u0447\u0435\u043D\u0438\u043A\u0430 )",
      feedback: "\u0412\u0437\u044F\u043B\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430 \u0441 \u0431\u043E\u043B\u0435\u0435 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0440\u0430\u0431\u043E\u0442\u044B",
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
      objective: "\u0420\u0430\u0437\u0433\u0430\u0434\u0430\u0442\u044C \u0448\u0438\u0444\u0440",
      description: "\u0418\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0430\u044F \u0437\u0430\u0434\u0430\u0447\u043A\u0430 \u043D\u0430 \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0443 \u0437\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F",
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
      company: "\u041F\u0438\u043A\u0430\u0441\u0441\u043E",
      githubTitle: "fsd-redux-task",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0441\u043B\u0435\u0434\u0443\u044F Feature Sliced Design",
      description: "\u041D\u0435 \u0443\u0441\u043F\u0435\u043B \u0432 \u0434\u0435\u0434\u0439\u043B\u0430\u0439\u043D,\u043D\u043E \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u043B \u0444\u0438\u0434\u0431\u0435\u043A,\u0444\u0438\u0434\u0431\u0435\u043A \u0434\u0430\u043B\u0438 \u0432 \u0432\u0438\u0434\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u043D\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430",
      technologies: "HTML, CSS, TypeScript, React,RTK Query,FSD",
      deployUrl: "https://crecker05ru.github.io/fsd-redux-task/",
      startedAt: "2023-10-01",
      completedAt: "2023-10-08",
      technicalTask: "",
      sourceCodeUrl: "https://github.com/crecker05ru/fsd-redux-task",
      commentary: "",
      feedback: "\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043C\u044B \u043D\u0435 \u0433\u043E\u0442\u043E\u0432\u044B \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u044C \u0412\u0430\u0441 \u043D\u0430 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0435 \u0438\u043D\u0442\u0435\u0440\u0432\u044C\u044E \u043F\u043E \u044D\u0442\u043E\u0439 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438. ",
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440",
      company: "05RU",
      githubTitle: "vue-redactor-task",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435-\u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440",
      description: "\u041F\u0440\u0438\u0448\u043B\u043E\u0441\u044C \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u043F\u043E\u043A\u043E\u0432\u044B\u0440\u044F\u0442\u044C clipboard",
      technologies: "HTML, CSS, JavaScript, Vue",
      deployUrl: "https://crecker05ru.github.io/vue-redactor-task/",
      startedAt: "2023-09-28",
      completedAt: "2023-09-30",
      technicalTask: "",
      sourceCodeUrl: "https://github.com/crecker05ru/vue-redactor-task",
      commentary: "",
      feedback: "\u041D\u0435\u0442",
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Easy",
      involvementRating: 8
    },
    {
      title: "Test blog",
      company: "\u0424\u0440\u0443\u043A\u0442\u043E\u0440\u0443\u043C",
      githubTitle: "pug-nuxt3-client-task",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0431\u043B\u043E\u0433",
      description: "\u0421\u0430\u0439\u0442 \u0431\u043B\u043E\u0433 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0441\u0432\u043E\u0435\u0433\u043E \u0448\u0430\u0431\u043B\u043E\u043D\u0438\u0437\u0430\u0442\u043E\u0440\u0430 \u0432 \u0432\u0438\u0434\u0435 \u043F\u043E\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442",
      technologies: "HTML, SCSS, TypeScript, Vue, Nuxt 3",
      sourceCodeUrl: "https://github.com/crecker05ru/pug-nuxt3-client-task",
      deployUrl: "https://pug-nuxt3-client-task.vercel.app/",
      technicalTask: "https://drive.google.com/file/d/1NAW782cOQjlA7MKrKdp1l5U1k7g4PozH/view?usp=drive_link",
      startedAt: "2023-08-26",
      completedAt: "2023-08-28",
      commentary: "",
      feedback: `\u0412 \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u043C \u0431\u044B\u043B\u0438 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435\u0442\u043E\u0447\u043D\u043E\u0441\u0442\u0438, \u0432 \u0438\u0442\u043E\u0433\u0435 \u043C\u044B \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0438 \u0432\u044B\u0431\u043E\u0440 \u043D\u0430 \u0434\u0440\u0443\u0433\u043E\u043C \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u0435. \u0421\u043F\u0430\u0441\u0438\u0431\u043E, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0435\u0449\u0451 \u043F\u043E\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0430\u0435\u043C \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C.
    \u041E\u0442\u0437\u044B\u0432 \u043F\u043E \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u043C\u0443:
    "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u0441\u043E slug \u0441\u0442\u0440\u0430\u043D\u0438\u0446.
    \u0412 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043C\u0435\u0441\u0442\u0430\u0445 \u0441\u0438\u043B\u044C\u043D\u043E\u0435 \u043D\u0435\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0432\u0435\u0440\u0441\u0442\u043A\u0438 \u043C\u0430\u043A\u0435\u0442\u0443 \u0432 \u0444\u0438\u0433\u043C\u0435"`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 7
    },
    {
      title: "\u041F\u043E\u0433\u043E\u0434\u043D\u044B\u0439 \u0432\u0438\u0434\u0436\u0435\u0442",
      company: "Plumsail",
      githubTitle: "my-vue-widget",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0432\u0438\u0434\u0436\u0435\u0442 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u043F\u043E \u0442\u0435\u0433\u0443",
      description: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0432\u0438\u0434\u0436\u0435\u0442 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u0432 \u0442\u0435\u0433 <my-widget/> ",
      technologies: "HTML, SCSS, TypeScript, Vue",
      deployUrl: "https://cosmic-cajeta-dfe1ae.netlify.app/",
      startedAt: "2023-07-29",
      completedAt: "2023-07-31",
      technicalTask: "https://docs.google.com/document/d/1i6l-ib-TYKjfRNX9knHEA1kjJuImRY8F/edit?usp=drive_link&ouid=109415402684053365214&rtpof=true&sd=true",
      sourceCodeUrl: "https://github.com/crecker05ru/my-vue-widget",
      commentary: "",
      feedback: `\u0411\u043E\u043B\u044C\u0448\u043E\u0435 \u0441\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0432\u0430\u0448\u0435 \u0432\u0440\u0435\u043C\u044F, \u043F\u043E\u0441\u0432\u044F\u0449\u0435\u043D\u043D\u043E\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u0434\u0430\u043D\u0438\u044F. \u041C\u044B \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u043B\u0438 \u0435\u0433\u043E \u0438 \u043F\u043E\u043A\u0430 \u043D\u0435 \u0433\u043E\u0442\u043E\u0432\u044B \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u044C \u0432\u0430\u0441 \u043D\u0430 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0435 \u0438\u043D\u0442\u0435\u0440\u0432\u044C\u044E \u043F\u043E \u044D\u0442\u043E\u0439 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438. \u0412 \u0446\u0435\u043B\u043E\u043C, \u0445\u043E\u0440\u043E\u0448\u043E, \u043D\u043E \u043C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u043A\u043B\u0438\u043A\u043E\u0432 \u0438 \u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0445, \u0435\u0441\u0442\u044C \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043F\u0440\u0430\u0432\u0438\u043B\u0438\u0441\u044C \u043B\u0443\u0447\u0448\u0435. \u0414\u0435\u0442\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0431\u043E\u0440\u0430 \u043D\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044E, \u0442.\u043A. \u0438\u0442\u043E\u0433 \u043F\u043E \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u043C\u0443 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 "\u0437\u0430\u0447\u0435\u0442 (\u0442\u043E\u0433\u0434\u0430 \u0438\u043D\u0442\u0435\u0440\u0432\u044C\u044E)/\u043D\u0435\u0437\u0430\u0447\u0435\u0442". \u0416\u0435\u043B\u0430\u044E \u0432\u0430\u043C \u0443\u0441\u043F\u0435\u0445\u043E\u0432 \u0432 \u043F\u043E\u0438\u0441\u043A\u0435 \u043D\u043E\u0432\u043E\u0439 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B!`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "\u0422\u0430\u0439\u043C\u0435\u0440",
      company: "PDD",
      githubTitle: "PDD-test-task",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u0430\u0439\u043C\u0435\u0440",
      description: "\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0430\u0439\u043C\u0435\u0440\u043E\u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C",
      technologies: "HTML, SCSS, TypeScript, Vue",
      deployUrl: "https://crecker05ru.github.io/PDD-test-task/",
      startedAt: "2023-04-06",
      completedAt: "2023-04-07",
      technicalTask: "https://crecker05ru.github.io/PDD-test-task/",
      sourceCodeUrl: "https://github.com/crecker05ru/PDD-test-task",
      commentary: "",
      feedback: `\u041F\u043E\u043B\u0443\u0447\u0438\u043B \u043E\u0444\u0444\u0435\u0440`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "\u0426\u0432\u0435\u0442\u043D\u043E\u0439 \u0441\u043F\u0438\u0441\u043E\u043A",
      company: "\u041F\u0440\u043E\u041A\u043E\u043D\u0442\u0435\u043A\u0441\u0442",
      githubTitle: "procontext-task",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0441 \u0431\u043B\u043E\u043A\u0430\u043C\u0438",
      description: "\u0421\u043F\u0438\u0441\u043E\u043A \u0441 \u0440\u0430\u0437\u043D\u043E\u0446\u0432\u0435\u0442\u043D\u044B\u043C\u0438 \u0431\u043B\u043E\u043A\u0430\u043C\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u043E \u0432\u0442\u043E\u0440\u044B\u043C \u0441\u043F\u0438\u0441\u043A\u043E\u043C",
      technologies: "HTML, SCSS, TypeScript, Vue",
      deployUrl: "https://crecker05ru.github.io/procontext-task/",
      startedAt: "2022-10-25",
      completedAt: "2022-10-28",
      technicalTask: "https://drive.google.com/file/d/1GAdu31E-Hu8GIWz4M2zLnW9O1i3LzRV6/view?usp=drive_link",
      sourceCodeUrl: "https://github.com/crecker05ru/procontext-task",
      commentary: "\u041C\u043E\u044F \u043E\u0448\u0438\u0431\u043A\u0430 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u0430\u044F \u0441 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0430\u043C\u0438 \u0441\u043F\u0438\u0441\u043A\u043E\u0432,\u043D\u0430\u0434\u043E \u0431\u044B\u043B\u043E \u043F\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u0438\u0445 \u043A \u0441\u0442\u0440\u043E\u043A\u0435.\u0415\u0449\u0435 \u0435\u0441\u0442\u044C \u0431\u0430\u0433 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D",
      feedback: `\u0411\u044B\u043B \u043E\u0442\u0437\u044B\u0432`,
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
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C 2D Planner",
      description: "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u043B\u043E\u0441\u044C \u0432 2\u0445 \u0447\u0430\u0441\u0442\u044F\u0445: \u043F\u0435\u0440\u0432\u043E\u0435 - \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u0438 \u043A\u0430\u043A \u0432 \u043C\u0430\u043A\u0435\u0442\u0435,\u0441 \u044D\u0442\u0438\u043C \u044F \u0441\u043F\u0440\u0430\u0432\u0438\u043B\u0441\u044F,\u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044F \u0447\u0442\u043E \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u043B\u043E\u0441\u044C \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u044C\u0441\u044F \u0432 \u0447\u0443\u0436\u043E\u043C \u043A\u043E\u0434\u0435 \u0438 \u043F\u043E\u0447\u0435\u043C\u0443-\u0442\u043E npm \u043F\u0430\u043A\u0435\u0442\u044B \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u043B\u0438\u0441\u044C \u0441 \u043E\u0448\u0438\u0431\u043A\u043E\u0439,\u0432\u044B\u0440\u0443\u0447\u0438\u043B yarn,\u0432\u0442\u043E\u0440\u043E\u0435 - \u0441\u043E\u0437\u0434\u0430\u0442\u044C 2D \u043F\u043B\u0430\u043D\u0435\u0440,\u0441\u0443\u0442\u044C \u0431\u044B\u043B\u0430 \u044F\u0441\u043D\u0430 \u043D\u043E \u043A\u0430\u043A \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u0442\u0430\u043A\u043E\u0435 \u044F \u0438\u043C\u0435\u043B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u043E \u043D\u0435\u0437\u043D\u0430\u043B \u043A\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C,\u043F\u043B\u044E\u0441 \u044F \u043D\u0435 \u0443\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u043B\u0441\u044F \u0441\u0440\u043E\u043A,",
      technologies: "HTML, Less, JavaScript, React,Redux",
      deployUrl: "https://cerulean-quokka-b5359a.netlify.app/app/main",
      startedAt: "2022-10-18",
      completedAt: "2022-10-31",
      technicalTask: "https://docs.google.com/document/d/1zVr_c-8SF-wKP3vlMfkFQ9I_P2Exjis9/edit?usp=drive_link&ouid=109415402684053365214&rtpof=true&sd=true",
      sourceCodeUrl: "https://github.com/crecker05ru/hammer-systems-test-task",
      commentary: "\u041C\u043E\u044F \u043E\u0448\u0438\u0431\u043A\u0430 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u0430\u044F \u0441 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0430\u043C\u0438 \u0441\u043F\u0438\u0441\u043A\u043E\u0432,\u043D\u0430\u0434\u043E \u0431\u044B\u043B\u043E \u043F\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u0438\u0445 \u043A \u0441\u0442\u0440\u043E\u043A\u0435.\u0415\u0449\u0435 \u0435\u0441\u0442\u044C \u0431\u0430\u0433 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D",
      feedback: ``,
      isCompleted: false,
      videoUrl: "",
      image: "",
      difficulty: "Hard",
      involvementRating: 7
    },
    {
      title: "Lit \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442",
      company: "\u041A\u0440\u043E\u043D",
      city: "Makhachkala",
      githubTitle: "lit-kron",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442",
      description: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043F\u043E \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u043C\u0443 \u043C\u0430\u043A\u0435\u0442\u0443 \u0438 \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 \u0442\u0435\u0441\u0442\u044B",
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
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0433\u0440\u0430\u0444\u0438\u043A",
      description: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0433\u0440\u0430\u0444\u0438\u043A \u043D\u0430 canvas \u0438 \u043F\u043E \u043A\u043B\u0438\u043A\u0443 \u043E\u043D \u0434\u043E\u043B\u0436\u0435\u043D \u0442\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0432 \u0434\u0440\u0443\u0433\u043E\u0439 \u0433\u0440\u0430\u0444\u0438\u043A",
      technologies: "HTML, JavaScript",
      deployUrl: "https://crecker05ru.github.io/try-canvas/",
      startedAt: "2022-03-03",
      completedAt: "2022-03-09",
      technicalTask: "",
      sourceCodeUrl: "https://github.com/crecker05ru/try-canvas",
      commentary: "\u041F\u043E\u0442\u0440\u0430\u0442\u0438\u043B \u0431\u043E\u043B\u0435\u0435 \u043C\u0435\u0441\u044F\u0446\u0430 \u043D\u0430 \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u0435 canvas \u0438 \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u043A\u0438 \u0442\u043E\u0447\u0435\u043A \u043D\u0430 \u043D\u0435\u043C \u0438 \u0432 \u0438\u0442\u043E\u0433\u0435 \u0441\u0434\u0435\u043B\u0430\u043B \u0447\u0442\u043E-\u0442\u043E \u043D\u0435 \u0442\u0430\u043A O_o",
      feedback: ``,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Hard",
      involvementRating: 8
    },
    {
      title: "\u0410\u0434\u043C\u0438\u043D-\u043F\u0430\u043D\u0435\u043B\u044C",
      company: "\u041A\u0440\u043E\u043D",
      city: "\u041C\u0430\u0445\u0430\u0447\u043A\u0430\u043B\u0430",
      githubTitle: "cron-react-test",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u044C",
      description: "\u0427\u0430\u0441\u0442\u044C \u0430\u0434\u043C\u0438\u043D \u043F\u0430\u043D\u0435\u043B\u0438 \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430\u043C\u0438 \u0441 \u043F\u043E\u0438\u0441\u043A\u043E\u043C \u0438 \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u043E\u0439",
      technologies: "HTML, CSS, JavaScript, React",
      deployUrl: "https://crecker05ru.github.io/cron-react-test/",
      startedAt: "2021-12-26",
      completedAt: "Jan 26, 2022",
      technicalTask: "",
      sourceCodeUrl: "https://github.com/crecker05ru/cron-react-test",
      commentary: "\u0412 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u043C\u0435\u0441\u044F\u0446\u0430 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u043B \u0432 \u043E\u0444\u0438\u0441: \u043F\u043E\u043B\u0443\u0447\u0430\u043B \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u0438 \u043D\u0430\u0441\u0442\u0430\u0432\u043D\u0438\u043A \u0434\u0435\u043B\u0430\u043B \u0440\u0435\u0432\u044C\u044E \u043A\u043E\u0434\u0430.",
      feedback: `\u041D\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0434\u043B\u044F React \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430`,
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
      objective: "\u0421\u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044C \u0441\u0430\u0439\u0442",
      description: "\u0412\u0435\u0440\u0441\u0442\u043A\u0430 \u0441\u0430\u0439\u0442 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C Next JS \u0438 Material UI",
      technologies: "HTML, CSS, TypeScript, React,Next.js",
      sourceCodeUrl: "https://github.com/crecker05ru/equite-landing",
      deployUrl: "https://equite-landing-62fmzb1s1-crecker05ru.vercel.app/",
      technicalTask: "",
      startedAt: "2021-12-13",
      completedAt: "Dec 13, 2021",
      commentary: "",
      feedback: `\u041D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B Material UI`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Easy",
      involvementRating: 7
    },
    {
      title: "UI \u043F\u043E\u0438\u0441\u043A\u0430 \u0448\u0442\u0440\u0430\u0444\u043E\u0432",
      company: "\u0428\u0442\u0440\u0430\u0444\u043E\u0432\u041D\u0435\u0442.\u0440\u0443",
      city: "\u041C\u043E\u0441\u043A\u0432\u0430",
      githubTitle: "shtrafov-net-UI",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A \u0448\u0442\u0440\u0430\u0444\u043E\u0432",
      description: "\u041F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A \u0441 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u043C \u0432 \u0411\u0414 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",
      technologies: "HTML, CSS, TypeScript, React,Next.js",
      sourceCodeUrl: "https://github.com/crecker05ru/shtrafov-net-UI",
      deployUrl: "https://shtrafov-net-ui-miczvsm6j-crecker05ru.vercel.app/",
      technicalTask: "https://drive.google.com/file/d/19lZLoIayh0R4FFDYckIfP5dH04-mSy2C/view?usp=drive_link",
      startedAt: "2021-11-18",
      completedAt: "Nov 21, 2021",
      commentary: "",
      feedback: `\u041D\u0435\u0442`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Easy",
      involvementRating: 8
    },
    {
      title: "\u041F\u043E\u0433\u043E\u0434\u043D\u044B\u0439 \u0432\u0438\u0434\u0436\u0435\u0442",
      company: "",
      city: "",
      githubTitle: "weather-api-reactjs",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0432\u0438\u0434\u0436\u0435\u0442 \u043F\u043E\u0433\u043E\u0434\u044B \u0438 \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u043E\u0440 \u0432\u0430\u043B\u044E\u0442",
      description: "\u041A\u043E\u043D\u0432\u0435\u0440\u0442\u043E\u0440 \u0438 \u0432\u0438\u0434\u0436\u0435\u0442 \u043F\u043E\u0433\u043E\u0434\u044B \u0431\u0435\u0437 \u0432\u043C\u0435\u043D\u044F\u0435\u043C\u043E\u0439 \u0432\u0435\u0440\u0441\u0442\u043A\u0438 )",
      technologies: "HTML, JavaScript, React",
      sourceCodeUrl: "https://github.com/crecker05ru/weather-api-reactjs",
      deployUrl: "",
      technicalTask: "",
      startedAt: "2021-10-18",
      completedAt: "Oct 19, 2021",
      commentary: "",
      feedback: `\u041D\u0435\u0442`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "UI \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439",
      company: "\u0410\u0432\u0438\u0442\u043E",
      city: "\u041C\u043E\u0441\u043A\u0432\u0430",
      githubTitle: "avito-test-task-reactjs",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C UI \u0438 \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u044B\u0432\u0430\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u0437 \u0437\u0430\u043F\u0440\u043E\u0441\u0430",
      description: "\u041A\u043E\u043D\u0432\u0435\u0440\u0442\u043E\u0440 \u0438 \u0432\u0438\u0434\u0436\u0435\u0442 \u043F\u043E\u0433\u043E\u0434\u044B \u0431\u0435\u0437 \u0432\u043C\u0435\u043D\u044F\u0435\u043C\u043E\u0439 \u0432\u0435\u0440\u0441\u0442\u043A\u0438 )",
      technologies: "HTML,CSS, JavaScript, React",
      sourceCodeUrl: "https://github.com/crecker05ru/avito-test-task-reactjs",
      deployUrl: "https://crecker05ru.github.io/avito-test-task-reactjs",
      technicalTask: "https://drive.google.com/file/d/19lZLoIayh0R4FFDYckIfP5dH04-mSy2C/view?usp=drive_link",
      startedAt: "2021-08-26",
      completedAt: "Sep 1, 2021",
      commentary: "",
      feedback: `\u041D\u0435\u0442`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Medium",
      involvementRating: 8
    },
    {
      title: "\u0417\u0430\u043A\u0430\u0437 \u0433\u0440\u0443\u0437\u043E\u0432\u043E\u0439 \u043C\u0430\u0448\u0438\u043D\u044B",
      company: "\u0422\u043E\u0447\u043A\u0430-\u0422\u043E\u0447\u043A\u0430 \u041B\u043E\u0433\u0438\u0441\u0442\u0438\u043A\u0430",
      city: "\u041C\u043E\u0441\u043A\u0432\u0430",
      githubTitle: "tochka-tochka",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C UI \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",
      description: "\u0418\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0437\u0430\u043A\u0430\u0437\u0430 \u0433\u0440\u0443\u0437\u043E\u0432\u043E\u0439 \u043C\u0430\u0448\u0438\u043D\u044B",
      technologies: "HTML,CSS, JavaScript",
      sourceCodeUrl: "https://github.com/crecker05ru/tochka-tochka",
      deployUrl: "https://crecker05ru.github.io/tochka-tochka/",
      technicalTask: "https://drive.google.com/file/d/1GU2oyzwvARPFPkskaZIJqWZPDBPyhbym/view?usp=drive_link",
      startedAt: "2021-04-19",
      completedAt: "Apr 22, 2021",
      commentary: "",
      feedback: `\u041D\u0435\u0442`,
      isCompleted: true,
      videoUrl: "",
      image: "",
      difficulty: "Easy",
      involvementRating: 8
    },
    {
      title: "\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B",
      company: "\u0421\u0418\u041D\u041A\u041E\u041F\u041F",
      city: "\u041D\u0438\u0436\u043D\u0438\u0439 \u041D\u043E\u0432\u0433\u043E\u0440\u043E\u0434",
      githubTitle: "useful-materials",
      objective: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u0439 \u0441\u043B\u0430\u0439\u0434\u0435\u0440",
      description: "\u0421\u0430\u0439\u0442 \u0441\u043E \u0441\u043B\u0430\u0439\u0434\u0435\u0440\u043E\u043C",
      technologies: "HTML,CSS, TypeScript,Next.js",
      sourceCodeUrl: "https://github.com/crecker05ru/useful-materials",
      deployUrl: "https://useful-materials-5hqdxfhoe-crecker05ru.vercel.app/",
      technicalTask: "https://github.com/crecker05ru/useful-materials/tree/main/TH%D0%98NKOP%20Technical%20task",
      startedAt: "2024-01-14",
      completedAt: "2024-01-14",
      commentary: "\u041D\u0435 \u0443\u043B\u043E\u0436\u0438\u043B\u0441\u044F \u0432\u0440\u0435\u043C\u044F,\u0441\u043B\u0430\u0439\u0434\u0435\u0440 \u0437\u0430\u043D\u044F\u043B \u0431\u044B \u0433\u043E\u0440\u0430\u0437\u0434\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u043D\u044B\u0445 60 \u043C\u0438\u043D\u0443\u0442",
      feedback: `\u041D\u0435\u0442`,
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
      commentary: `Answer from the team lead: \u201Cconfusion in the code and structure, remnants of old/unnecessary code, logic and types/interfaces in the pages, in general, I didn\u2019t look further. I would advise you to be more careful, try to write more beautiful and structured code, and read more book on programming, start with the basics - \u201CClean Code\u201D and \u201CClean Architecture\u201D by Robert Martin`,
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
      description: "Drawing a 3D cone according to a given formula, there was also a more complex point with a normal map, but I didn\u2019t get to it",
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
      description: "Standard layout with form and video analysis of the student\u2019s work",
      technologies: "HTML, CSS, JavaScript",
      deployUrl: "https://crecker05ru.github.io/itlogy-task/src/",
      startedAt: "2023-10-11",
      completedAt: "2023-10-13",
      technicalTask: "https://docs.google.com/document/d/1VmlJ4g9u994ipEpNg6_UdLRJlhV940SI/edit?usp=drive_link&ouid=109415402684053365214&rtpof=true&sd=true",
      sourceCodeUrl: "https://github.com/crecker05ru/itlogy-task/tree/main",
      commentary: "For the first time I recorded a video analysis of a student\u2019s work)",
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
      description: "Didn\u2019t meet the deadline, but asked for feedback, feedback was given in the form of a template text",
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
      feedback: `Thank you very much for your time dedicated to completing the test task. We have reviewed it and are not yet ready to invite you for a further interview for this vacancy. In general, it\u2019s good, but we received a large number of responses and tests, there are candidates who did better. I won\u2019t provide a detailed analysis, because... the test result in the \u201Cpass (then interview)/fail\u201D format. I wish you success in finding a new interesting job!`,
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
      description: "The task consisted of 2 parts: the first was to create an admin panel as in the layout, I managed to do this, considering that I had to understand someone else\u2019s code and for some reason npm packages were installed with an error, yarn helped out, the second was to create a 2D glider, the essence was clear but I had an idea of how to implement this, but I didn\u2019t know how to implement it, plus I didn\u2019t meet the deadline",
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
      commentary: "I didn\u2019t meet the time, the slider would have taken much longer than the stated 60 minutes",
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
        address: "\u0410\u0434\u0440\u0435\u0441",
        email: "Email",
        phone: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
        telegram: "Telegram",
        github: "Github",
        maritalStatus: "\u0421\u0435\u043C\u0435\u0439\u043D\u043E\u0435 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435",
        dateOfBirth: "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",
        objective: "\u0426\u0435\u043B\u044C",
        education: "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435",
        workExperience: "\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B",
        skills: "\u041D\u0430\u0432\u044B\u043A\u0438",
        additionalEducation: "\u041F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438",
        aboutMe: "\u041E\u0431\u043E \u043C\u043D\u0435",
        portfolio: "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E",
        myRepos: "\u041C\u043E\u0438 \u0440\u0435\u043F\u043E",
        name: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
        language: "\u042F\u0437\u044B\u043A",
        createdAt: "\u0421\u043E\u0437\u0434\u0430\u043D",
        description: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
        technologies: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438",
        testTasks: "\u0422\u0435\u0441\u0442\u043E\u0432\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F",
        feedback: "\u041E\u0442\u0437\u044B\u0432",
        commentary: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
        technicalTask: "\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435",
        completed: "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D",
        image: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
        difficulty: "\u0421\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C",
        involvementRating: "\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u0432\u043E\u0432\u043B\u0435\u0447\u0435\u043D\u043D\u043E\u0441\u0442\u0438",
        totalExperience: "\u041E\u0431\u0449\u0438\u0439 \u0441\u0442\u0430\u0436",
        month: "\u043C\u0435\u0441\u044F\u0446",
        months: "\u043C\u0435\u0441\u044F\u0446\u0435\u0432",
        years: "\u0433\u043E\u0434\u0430",
        year: "\u0433\u043E\u0434",
        and: "\u0438"
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

export { index as default };
//# sourceMappingURL=index-kqYNyBbO.mjs.map
