import { b as useNuxtApp, a as useRouter, d as __nuxt_component_1$3 } from '../server.mjs';
import { withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext, toRefs, ref, computed, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_1 } from './digtok-wm-d1918672.mjs';
import { M as MainLayout } from './MainLayout-5774cad7.mjs';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './TopNav-68da3337.mjs';
import './nuxt-link-744fccd2.mjs';

const _sfc_main$1 = {
  __name: "PostMain",
  __ssrInlineRender: true,
  props: ["post"],
  setup(__props) {
    const props = __props;
    const { $generalStore, $userStore } = useNuxtApp();
    const { post } = toRefs(props);
    useRouter();
    ref(null);
    const isLiked = computed(() => {
      let res = post.value.likes.find((like) => like.user_id === $userStore.id);
      if (res) {
        return true;
      }
      return false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: `PostMain-${unref(post).id}`,
        class: "flex border-b py-6"
      }, _attrs))}><div class="cursor-pointer"><img class="rounded-full max-h-[60px]" width="60"${ssrRenderAttr("src", unref(post).user.image)}></div><div class="pl-3 w-full px-4"><div class="flex items-center justify-between pb-0.5"><button><span class="font-bold hover:underline cursor-pointer">${ssrInterpolate(unref($generalStore).allLowerCaseNoCaps(unref(post).user.name))}</span><span class="text-[13px] text-light text-gray-500 pl-1 cursor-pointer">${ssrInterpolate(unref(post).user.name)}</span></button><button class="border text-[15px] px-[21px] py-0.5 border-[#F02C56] text-[#F02C56] hover:bg-[#ffeef2] font-semibold rounded-md"> Follow </button></div><div class="text-[15px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]">${ssrInterpolate(unref(post).text)}</div><div class="text-[14px] text-gray-500 pb-0.5">#fun #cool #SuperAwesome</div><div class="text-[14px] pb-0.5 flex items-center font-semibold">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:music",
        size: "17"
      }, null, _parent));
      _push(`<div class="px-1">original sound - AWESOME</div>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:heart",
        size: "20"
      }, null, _parent));
      _push(`</div><div class="mt-2.5 flex"><div class="relative min-h-[480px] max-h-[580px] max-w-[260px] flex items-center bg-black rounded-xl cursor-pointer">`);
      if (unref(post).video) {
        _push(`<video loop muted class="rounded-xl object-cover mx-auto h-full"${ssrRenderAttr("src", unref(post).video)}></video>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<img class="absolute right-2 bottom-14" width="90"${ssrRenderAttr("src", _imports_1)}></div><div class="relative mr-[75px]"><div class="absolute bottom-0 pl-2"><div class="pb-4 text-center"><button class="rounded-full bg-gray-200 p-2 cursor-pointer">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:heart",
        size: "25",
        color: unref(isLiked) ? "#F02C56" : ""
      }, null, _parent));
      _push(`</button><span class="text-xs text-gray-800 font-semibold">${ssrInterpolate(unref(post).likes.length)}</span></div><div class="pb-4 text-center"><div class="rounded-full bg-gray-200 p-2 cursor-pointer">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "bx:bxs-message-rounded-dots",
        size: "25"
      }, null, _parent));
      _push(`</div><span class="text-xs text-gray-800 font-semibold">43</span></div><div class="text-center"><div class="rounded-full bg-gray-200 p-2 cursor-pointer">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ri:share-forward-fill",
        size: "25"
      }, null, _parent));
      _push(`</div><span class="text-xs text-gray-800 font-semibold">55</span></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PostMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $generalStore } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PostMain = __nuxt_component_0;
      _push(ssrRenderComponent(MainLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pt-[80px] w-[calc(100%-90px)] max-w-[690px]"${_scopeId}><!--[-->`);
            ssrRenderList(unref($generalStore).posts, (post) => {
              _push2(`<div${_scopeId}>`);
              if (post) {
                _push2(ssrRenderComponent(_component_PostMain, { post }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "pt-[80px] w-[calc(100%-90px)] max-w-[690px]" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref($generalStore).posts, (post) => {
                  return openBlock(), createBlock("div", { key: post }, [
                    post ? (openBlock(), createBlock(_component_PostMain, {
                      key: 0,
                      post
                    }, null, 8, ["post"])) : createCommentVNode("", true)
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-232862a4.mjs.map
