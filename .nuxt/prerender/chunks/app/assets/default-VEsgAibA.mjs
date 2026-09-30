import { useSSRContext, defineComponent, ref, mergeProps } from 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderSlot } from 'file://J:/Javascript-practice/abduragimov-cv/cv/node_modules/vue/server-renderer/index.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppGoogles",
  __ssrInlineRender: true,
  props: {
    darkMode: { type: Boolean }
  },
  setup(__props) {
    ref();
    ref();
    ref(0);
    ref(0);
    ref(0);
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="app-googles__photo-googles" draggable="true"><svg class="${ssrRenderClass([[_ctx.darkMode ? "night-glasses" : "sun-glasses"], "app-googles__googles-svg"])}" color="currentColor" fill="#00003fdf" version="1.1" id="Layer_1" xmlns:x="&amp;ns_extend;" xmlns:i="&amp;ns_ai;" xmlns:graph="&amp;ns_graphs;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 250 750 265" style="${ssrRenderStyle({ "enable-background": "new 0 0 750 750" })}" xml:space="preserve"><switch><foreignObject requiredExtensions="&amp;ns_ai;" x="0" y="0" width="1" height="1"></foreignObject><g i:extraneous="self"><path d="M727.6,348.1c-2.8-29.9-14.9-57.6-38.1-77.2c-24.7-20.9-62.4-30.6-94.1-32.4c-35.6-2-71.8,1-107.6,0.3
			c-21.7-0.4-43.5,1.4-65.3,1.9c-27.7,0.6-55.3,0.3-83-0.1c-45.1-0.6-90-0.9-135.1-1c-11,0-22.1-0.1-33.1-0.1
			c-28.2-0.1-55.4,2.3-81.6,13.8c-33.9,14.9-56,39.9-64.2,76.4c-4.8,21.1-5.2,42.4-2.2,63.7c3.5,25.1,10.4,49.3,23.9,71
			c16.8,27.1,43.8,44.4,75.7,47.3c21.9,2,42.8-2.3,63.1-10c30.5-11.6,56.8-29.8,80.7-51.7c9.5-8.7,19.1-17.4,26.7-27.9
			c11.3-15.6,21.3-32.1,29.9-49.5c10.6-21.6,19.5-43.8,18-68.6c-0.1-1.8,0.9-2.4,2.2-3c20.7-10.2,41.5-10.8,62.4-0.6
			c2.5,1.2,3.2,2.7,3,5.4c-0.6,7.8,0.3,15.6,2,23.2c3.4,16.3,9.7,31.6,17.5,46.3c16,30,33.9,56.2,59.4,78.9
			c23.9,21.4,51.6,39,82.1,49.4c22.3,7.7,45.2,11.2,68.6,6.5c32.8-6.5,55.5-26.2,70-55.5C724.9,421,731.1,385.4,727.6,348.1z
			 M473.7,247.1c-0.6,1-3.6,2.4-5.4,2.8c-21.5,5.3-41.5,11.2-53,31.9c-2.2,4-5,12.8-10.2,6.1c-5.2-6.6-16.3-5.5-23.9-5.6
			c-8-0.1-16-0.1-23.9,0.4c-4.1,0.3-7.3,1.4-10.2,4.3c-5,5-7.7,4.4-10.7-1.8c-7.4-15.5-23.3-29.9-40.6-33.2c-4.3-0.8-8.9,0.1-13-1.8
			c-1-0.5-1.8-1.5-1.7-2.5c0.2-2.3,3.6-1.5,5-1.4c3.4,0.2,6.9,0.1,10.3,0.2c19.6,0.2,39.3,0.2,58.9,0.2c24.1,0,48.2,0,72.3,0
			c14.4,0,28.8-0.2,43.2-0.5C473.5,246,474.1,246.5,473.7,247.1z"></path></g></switch></svg></div><div class="app-googles__mobile-googles"><svg class="${ssrRenderClass([[_ctx.darkMode ? "night-glasses" : "sun-glasses"], "app-googles__googles-svg"])}" color="currentColor" fill="#00003fdf" version="1.1" id="Layer_1" xmlns:x="&amp;ns_extend;" xmlns:i="&amp;ns_ai;" xmlns:graph="&amp;ns_graphs;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 250 750 265" style="${ssrRenderStyle({ "enable-background": "new 0 0 750 750" })}" xml:space="preserve"><switch><foreignObject requiredExtensions="&amp;ns_ai;" x="0" y="0" width="1" height="1"></foreignObject><g i:extraneous="self"><path d="M727.6,348.1c-2.8-29.9-14.9-57.6-38.1-77.2c-24.7-20.9-62.4-30.6-94.1-32.4c-35.6-2-71.8,1-107.6,0.3
			c-21.7-0.4-43.5,1.4-65.3,1.9c-27.7,0.6-55.3,0.3-83-0.1c-45.1-0.6-90-0.9-135.1-1c-11,0-22.1-0.1-33.1-0.1
			c-28.2-0.1-55.4,2.3-81.6,13.8c-33.9,14.9-56,39.9-64.2,76.4c-4.8,21.1-5.2,42.4-2.2,63.7c3.5,25.1,10.4,49.3,23.9,71
			c16.8,27.1,43.8,44.4,75.7,47.3c21.9,2,42.8-2.3,63.1-10c30.5-11.6,56.8-29.8,80.7-51.7c9.5-8.7,19.1-17.4,26.7-27.9
			c11.3-15.6,21.3-32.1,29.9-49.5c10.6-21.6,19.5-43.8,18-68.6c-0.1-1.8,0.9-2.4,2.2-3c20.7-10.2,41.5-10.8,62.4-0.6
			c2.5,1.2,3.2,2.7,3,5.4c-0.6,7.8,0.3,15.6,2,23.2c3.4,16.3,9.7,31.6,17.5,46.3c16,30,33.9,56.2,59.4,78.9
			c23.9,21.4,51.6,39,82.1,49.4c22.3,7.7,45.2,11.2,68.6,6.5c32.8-6.5,55.5-26.2,70-55.5C724.9,421,731.1,385.4,727.6,348.1z
			 M473.7,247.1c-0.6,1-3.6,2.4-5.4,2.8c-21.5,5.3-41.5,11.2-53,31.9c-2.2,4-5,12.8-10.2,6.1c-5.2-6.6-16.3-5.5-23.9-5.6
			c-8-0.1-16-0.1-23.9,0.4c-4.1,0.3-7.3,1.4-10.2,4.3c-5,5-7.7,4.4-10.7-1.8c-7.4-15.5-23.3-29.9-40.6-33.2c-4.3-0.8-8.9,0.1-13-1.8
			c-1-0.5-1.8-1.5-1.7-2.5c0.2-2.3,3.6-1.5,5-1.4c3.4,0.2,6.9,0.1,10.3,0.2c19.6,0.2,39.3,0.2,58.9,0.2c24.1,0,48.2,0,72.3,0
			c14.4,0,28.8-0.2,43.2-0.5C473.5,246,474.1,246.5,473.7,247.1z"></path></g></switch></svg></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppGoogles.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const isLightTheme = ref(true);
    const isChecked = ref(false);
    ref("en");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppGoogles = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["default-layout", [isLightTheme.value ? "light-theme" : "dark-theme"]]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppGoogles, {
        darkMode: !isLightTheme.value
      }, null, _parent));
      _push(`<header class="header"><div class="header__inner"><p class="header__text">My CV</p><label class="${ssrRenderClass([{ "header__switch-checked": !isLightTheme.value }, "header__switch"])}">`);
      if (isLightTheme.value) {
        _push(`<svg class="header__sun-svg header__svg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 111.69 111.69" xml:space="preserve"><g id="sun"><g><g><circle style="${ssrRenderStyle({ "fill": "#FCDD66" })}" cx="55.845" cy="55.845" r="55.845"></circle></g></g><g><g><circle style="${ssrRenderStyle({ "fill": "#FBD009" })}" cx="55.845" cy="55.845" r="46.174"></circle></g></g></g></svg>`);
      } else if (!isLightTheme.value) {
        _push(`<svg class="header__moon-svg header__svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><circle cx="100" cy="100" r="94.147" fill="#e4e2dc"></circle><clipPath id="a"><circle cx="100" cy="100" r="94.147"></circle></clipPath><g clip-path="url(#a)"><path d="M173.111-46.282l59.723 39.66 25.005 67.189-19.264 69.056-56.174 44.544-71.628 3.018-59.723-39.66-25.005-67.189L45.308 1.28l56.174-44.544 71.629-3.018z" fill="#f6f4ef"></path></g><path d="M158.551 135.006l-4.072 2.503 6.822 5.83 1.8-4.404-4.55-3.929zM116.907 69.037l-6.653 4.089 11.145 9.525 2.941-7.195-7.433-6.419zM67.138 119.523l-4.542 2.791 7.61 6.503 2.007-4.912-5.075-4.382zM80.286 37.068l4.825-3.028-8.193-6.873-2.097 5.268 5.465 4.633zM143.466 148.273l5.198-3.261-8.826-7.403-2.259 5.674 5.887 4.99z" fill="#e4e2dc" fill-rule="nonzero"></path><path d="M163.108 73.155l2.628 13.525-12.051 6.679-10.076-9.398 5.824-12.486 13.675 1.68zM83.672 53.684l-7.194 20.408-21.332-.919-5.99-20.976 17.63-12.045 16.886 13.532zM91.359 125.589l-5.626-25.934 22.927-13.364 19.794 17.674-10.692 24.288-26.403-2.664zM35.02 112.946l-3.955-14.875 12.902-8.012 11.929 9.923-5.53 14.145-15.346-1.181zM104.602 180.886l-15.004-13.214 8.155-17.962 20.044 2.111 4.233 19.268-17.428 9.797z" fill="#e4e2dc"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input class="header__switch-input" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(isChecked.value) ? ssrLooseContain(isChecked.value, null) : isChecked.value) ? " checked" : ""}></label></div></header><main class="main">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="footer"><div class="footer__inner"><p>By Anvar</p><a href="https://github.com/crecker05ru" target="_blank">Github</a></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-VEsgAibA.mjs.map
