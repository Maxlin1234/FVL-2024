import { _ as __nuxt_component_0 } from './Navbar-86353f14.mjs';
import { _ as __nuxt_component_1 } from './Header-ffb5524f.mjs';
import { _ as __nuxt_component_2 } from './4Col-1ace234f.mjs';
import { _ as __nuxt_component_2$1 } from './Footer-d5f7be9e.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead } from '../server.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import './nuxt-link-6bdec6f5.mjs';
import './app-data-475c97b4.mjs';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const metadata = {
      subTitle: "Our Works",
      title: "Masonry 4."
    };
    useHead({
      titleTemplate: `%s - Portfolio Masonry 4 Col`,
      bodyAttrs: {
        class: "main-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonNavbar = __nuxt_component_0;
      const _component_PortfolioHeader = __nuxt_component_1;
      const _component_PortfolioMasonry4Col = __nuxt_component_2;
      const _component_StartupFooter = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonNavbar, { lightMode: true }, null, _parent));
      _push(`<main class="main-bg">`);
      _push(ssrRenderComponent(_component_PortfolioHeader, { data: metadata }, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioMasonry4Col, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_StartupFooter, {
        subBg: true,
        lightMode: true
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/portfolio-masonry-4/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-d065e75d.mjs.map
