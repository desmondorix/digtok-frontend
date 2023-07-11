import { s as storeToRefs, e as useRoute, b as useNuxtApp, d as __nuxt_component_1$3, a as useRouter } from '../server.mjs';
import { ref, watch, withCtx, unref, openBlock, createBlock, createVNode, toDisplayString, createTextVNode, Fragment, renderList, createCommentVNode, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderAttrs } from 'vue/server-renderer';
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
import './TopNav-68da3337.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './nuxt-link-744fccd2.mjs';

const _sfc_main$1 = {
  __name: "PostUser",
  __ssrInlineRender: true,
  props: ["post"],
  setup(__props) {
    useRoute();
    useRouter();
    ref(null);
    let isLoaded = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative brightness-90 hover:brightness-[1.1] cursor-pointer" }, _attrs))}>`);
      if (!unref(isLoaded)) {
        _push(`<div class="absolute flex items-center justify-center top-0 left-0 aspect-[3/4] w-full object-cover rounded-md bg-black">`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "animate-spin ml-1",
          name: "mingcute:loading-line",
          size: "100",
          color: "#FFFFFF"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><video muted loop class="aspect-[3/4] object-cover rounded-md"${ssrRenderAttr("src", __props.post.video)}></video></div><div class="px-1"><div class="text-gray-700 text-[15px] pt-1 break-words">${ssrInterpolate(__props.post.text)}</div><div class="flex items-center -ml-1 text-gray-600 font-bold text-xs">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "gg:loadbar-sound",
        size: "20"
      }, null, _parent));
      _push(` 3% `);
      _push(ssrRenderComponent(_component_Icon, {
        class: "ml-1",
        name: "tabler:alert-circle",
        size: "16"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PostUser.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const { $userStore, $profileStore, $generalStore } = useNuxtApp();
    const { posts, allLikes } = storeToRefs($profileStore);
    useRoute();
    let show = ref(false);
    watch(() => posts.value, () => {
      setTimeout(() => show.value = true, 300);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$3;
      const _component_PostUser = __nuxt_component_1;
      _push(ssrRenderComponent(MainLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref($profileStore).name) {
              _push2(`<div class="pt-[90px] 2xl:pl-[185px] lg:pl-[160px] lg:pr-0 pr-2 w-[calc(100%-90px)] max-w-[1800px] 2xl:mx-auto"${_scopeId}><div class="flex w-[calc(100vw-230px)]"${_scopeId}><img class="max-w-[120px] rounded-full"${ssrRenderAttr("src", unref($profileStore).image)}${_scopeId}><div class="ml-5 w-full"${_scopeId}><div class="text-[30px] font-bold truncate"${_scopeId}>${ssrInterpolate(unref($generalStore).allLowerCaseNoCaps(unref($profileStore).name))}</div><div class="text-[18px] truncate"${_scopeId}>${ssrInterpolate(unref($profileStore).name)}</div>`);
              if (unref($profileStore).id === unref($userStore).id) {
                _push2(`<button class="flex item-center rounded-md py-1.5 px-3.5 mt-3 text-[15px] font-semibold border hover:bg-gray-100"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  class: "mt-0.5 mr-1",
                  name: "mdi:pencil",
                  size: "18"
                }, null, _parent2, _scopeId));
                _push2(`<div${_scopeId}>Edit profile</div></button>`);
              } else {
                _push2(`<button class="flex item-center rounded-md py-1.5 px-8 mt-3 text-[15px] text-white font-semibold bg-[#F02C56]"${_scopeId}> Follow </button>`);
              }
              _push2(`</div></div><div class="flex items-center pt-4"${_scopeId}><div class="mr-4"${_scopeId}><span class="font-bold"${_scopeId}>10K</span><span class="text-gray-500 font-light text-[15px] pl-1.5"${_scopeId}>Following</span></div><div class="mr-4"${_scopeId}><span class="font-bold"${_scopeId}>44K</span><span class="text-gray-500 font-light text-[15px] pl-1.5"${_scopeId}>Followers</span></div><div class="mr-4"${_scopeId}><span class="font-bold"${_scopeId}>${ssrInterpolate(unref(allLikes))}</span><span class="text-gray-500 font-light text-[15px] pl-1.5"${_scopeId}>Likes</span></div></div><div class="pt-4 mr-4 text-gray-500 font-light text-[15px] pl-1.5 max-w-[500px]"${_scopeId}>${ssrInterpolate(unref($profileStore).bio)}</div><div class="w-full flex items-center pt-4 border-b"${_scopeId}><div class="w-60 text-center py-2 text-[17px] font-semibold border-b-2 border-b-black"${_scopeId}>Videos</div><div class="w-60 text-gray-500 text-center py-2 text-[17px] font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "material-symbols:lock-open",
                class: "mb-0.5"
              }, null, _parent2, _scopeId));
              _push2(` Liked </div></div><div class="mt-4 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3"${_scopeId}>`);
              if (unref(show)) {
                _push2(`<!--[-->`);
                ssrRenderList(unref($profileStore).posts, (post) => {
                  _push2(`<div${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_PostUser, { post }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref($profileStore).name ? (openBlock(), createBlock("div", {
                key: 0,
                class: "pt-[90px] 2xl:pl-[185px] lg:pl-[160px] lg:pr-0 pr-2 w-[calc(100%-90px)] max-w-[1800px] 2xl:mx-auto"
              }, [
                createVNode("div", { class: "flex w-[calc(100vw-230px)]" }, [
                  createVNode("img", {
                    class: "max-w-[120px] rounded-full",
                    src: unref($profileStore).image
                  }, null, 8, ["src"]),
                  createVNode("div", { class: "ml-5 w-full" }, [
                    createVNode("div", { class: "text-[30px] font-bold truncate" }, toDisplayString(unref($generalStore).allLowerCaseNoCaps(unref($profileStore).name)), 1),
                    createVNode("div", { class: "text-[18px] truncate" }, toDisplayString(unref($profileStore).name), 1),
                    unref($profileStore).id === unref($userStore).id ? (openBlock(), createBlock("button", {
                      key: 0,
                      onClick: ($event) => unref($generalStore).isEditProfileOpen = true,
                      class: "flex item-center rounded-md py-1.5 px-3.5 mt-3 text-[15px] font-semibold border hover:bg-gray-100"
                    }, [
                      createVNode(_component_Icon, {
                        class: "mt-0.5 mr-1",
                        name: "mdi:pencil",
                        size: "18"
                      }),
                      createVNode("div", null, "Edit profile")
                    ], 8, ["onClick"])) : (openBlock(), createBlock("button", {
                      key: 1,
                      class: "flex item-center rounded-md py-1.5 px-8 mt-3 text-[15px] text-white font-semibold bg-[#F02C56]"
                    }, " Follow "))
                  ])
                ]),
                createVNode("div", { class: "flex items-center pt-4" }, [
                  createVNode("div", { class: "mr-4" }, [
                    createVNode("span", { class: "font-bold" }, "10K"),
                    createVNode("span", { class: "text-gray-500 font-light text-[15px] pl-1.5" }, "Following")
                  ]),
                  createVNode("div", { class: "mr-4" }, [
                    createVNode("span", { class: "font-bold" }, "44K"),
                    createVNode("span", { class: "text-gray-500 font-light text-[15px] pl-1.5" }, "Followers")
                  ]),
                  createVNode("div", { class: "mr-4" }, [
                    createVNode("span", { class: "font-bold" }, toDisplayString(unref(allLikes)), 1),
                    createVNode("span", { class: "text-gray-500 font-light text-[15px] pl-1.5" }, "Likes")
                  ])
                ]),
                createVNode("div", { class: "pt-4 mr-4 text-gray-500 font-light text-[15px] pl-1.5 max-w-[500px]" }, toDisplayString(unref($profileStore).bio), 1),
                createVNode("div", { class: "w-full flex items-center pt-4 border-b" }, [
                  createVNode("div", { class: "w-60 text-center py-2 text-[17px] font-semibold border-b-2 border-b-black" }, "Videos"),
                  createVNode("div", { class: "w-60 text-gray-500 text-center py-2 text-[17px] font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "material-symbols:lock-open",
                      class: "mb-0.5"
                    }),
                    createTextVNode(" Liked ")
                  ])
                ]),
                createVNode("div", { class: "mt-4 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3" }, [
                  unref(show) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref($profileStore).posts, (post) => {
                    return openBlock(), createBlock("div", null, [
                      createVNode(_component_PostUser, { post }, null, 8, ["post"])
                    ]);
                  }), 256)) : createCommentVNode("", true)
                ])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-7a063189.mjs.map
