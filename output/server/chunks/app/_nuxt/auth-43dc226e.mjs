import { f as defineNuxtRouteMiddleware, g as useUserStore, n as navigateTo } from '../server.mjs';
import 'vue';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import 'destr';
import 'klona';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'cookie-es';
import 'ohash';
import 'axios';
import 'vue/server-renderer';
import 'defu';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'vue-advanced-cropper';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const auth = /* @__PURE__ */ defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();
  if (to !== "/" && !userStore.id) {
    return navigateTo("/");
  }
});

export { auth as default };
//# sourceMappingURL=auth-43dc226e.mjs.map
