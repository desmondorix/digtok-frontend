import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-744fccd2.mjs';
import { e as useRoute, a as useRouter, b as useNuxtApp, d as __nuxt_component_1$3 } from '../server.mjs';
import { ref, watch, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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
import 'http-graceful-shutdown';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'cookie-es';
import 'axios';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'vue-advanced-cropper';

const _imports_0 = "" + buildAssetsURL("logo-digtok.bdc5c630.png");
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const { $generalStore, $userStore, $profileStore } = useNuxtApp();
    useRoute();
    const router = useRouter();
    let video = ref(null);
    let isLoaded = ref(false);
    let comment = ref(null);
    let inputFocused = ref(false);
    watch(() => isLoaded.value, () => {
      if (isLoaded.value) {
        setTimeout(() => video.value.play(), 500);
      }
    });
    const isLiked = computed(() => {
      let res = $generalStore.selectedPost.likes.find((like) => like.user_id === $userStore.id);
      if (res) {
        return true;
      }
      return false;
    });
    const deletePost = async () => {
      let res = confirm("Are you sure you want to delete this post?");
      try {
        if (res) {
          await $userStore.deletePost($generalStore.selectedPost);
          await $profileStore.getProfile($userStore.id);
          router.push(`/profile/${$userStore.id}`);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const deleteComment = async (post, commentId) => {
      let res = confirm("Are you sure you want to delete this comment?");
      try {
        if (res) {
          await $userStore.deleteComment(post, commentId);
        }
      } catch (error) {
        console.log(error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "PostPage",
        class: "fixed lg:flex justify-between z-50 top-0 left-0 w-full h-full bg-black lg:overflow-hidden overflow-auto"
      }, _attrs))}>`);
      if (unref($generalStore).selectedPost) {
        _push(`<div class="lg:w-[calc(100%-540px)] h-full relative">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          href: unref($generalStore).isBackUrl,
          class: "absolute z-20 m-5 rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "material-symbols:close",
                color: "#FFFFFF",
                size: "27"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "material-symbols:close",
                  color: "#FFFFFF",
                  size: "27"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref($generalStore).ids.length > 1) {
          _push(`<div><button${ssrIncludeBooleanAttr(!unref(isLoaded)) ? " disabled" : ""} class="absolute z-20 right-4 top-4 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi:chevron-up",
            size: "30",
            color: "#FFFFFF"
          }, null, _parent));
          _push(`</button><button${ssrIncludeBooleanAttr(!unref(isLoaded)) ? " disabled" : ""} class="absolute z-20 right-4 top-20 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi:chevron-down",
            size: "30",
            color: "#FFFFFF"
          }, null, _parent));
          _push(`</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<img class="absolute top-[18px] left-[70px] rounded-full lg:mx-0 mx-auto" width="45"${ssrRenderAttr("src", _imports_0)}>`);
        if (unref($generalStore).selectedPost.video) {
          _push(`<video class="absolute object-cover w-full my-auto z-[-1] h-screen"${ssrRenderAttr("src", unref($generalStore).selectedPost.video)}></video>`);
        } else {
          _push(`<!---->`);
        }
        if (!unref(isLoaded)) {
          _push(`<div class="flex items-center justify-center bg-black bg-opacity-70 h-screen lg:min-w-[480px]">`);
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
        _push(`<div class="bg-black bg-opacity-70 lg:min-w-[480px]">`);
        if (unref($generalStore).selectedPost.video) {
          _push(`<video loop muted class="h-screen mx-auto"${ssrRenderAttr("src", unref($generalStore).selectedPost.video)}></video>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref($generalStore).selectedPost) {
        _push(`<div id="InfoSection" class="lg:max-w-[550px] relative w-full h-full bg-white"><div class="py-7"></div><div class="flex items-center justify-between px-8"><div class="flex items-center">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          href: `/profile/${unref($generalStore).selectedPost.user.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="rounded-full lg:mx-0 mx-auto" width="40"${ssrRenderAttr("src", unref($generalStore).selectedPost.user.image)}${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "rounded-full lg:mx-0 mx-auto",
                  width: "40",
                  src: unref($generalStore).selectedPost.user.image
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="ml-3 pt-0.5"><div class="text-[17px] font-semibold">${ssrInterpolate(unref($generalStore).allLowerCaseNoCaps(unref($generalStore).selectedPost.user.name))}</div><div class="text-[13px] -mt-5 font-light">${ssrInterpolate(unref($generalStore).selectedPost.user.name)} <span class="relative -top-[2px] text-[30px] pr-0.5">.</span><span class="font-medium">${ssrInterpolate(unref($generalStore).selectedPost.created_at)}</span></div></div></div>`);
        if (unref($userStore).id === unref($generalStore).selectedPost.user.id) {
          _push(ssrRenderComponent(_component_Icon, {
            onClick: ($event) => deletePost(),
            class: "cursor-pointer",
            name: "material-symbols:delete-outline-sharp",
            size: "25"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="px-8 mt-4 text-sm">${ssrInterpolate(unref($generalStore).selectedPost.text)}</div><div class="px-8 mt-4 text-sm font-bold">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:music",
          size: "17"
        }, null, _parent));
        _push(` original sound - ${ssrInterpolate(unref($generalStore).allLowerCaseNoCaps(unref($generalStore).selectedPost.user.name))}</div><div class="flex items-center px-8 mt-8"><div class="pb-4 text-center flex items-center"><button class="rounded-full bg-gray-200 p-2 cursor-pointer">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:heart",
          size: "25",
          color: unref(isLiked) ? "#F02C56" : ""
        }, null, _parent));
        _push(`</button><span class="text-xs pl-2 pr-4 text-gray-800 font-semibold">${ssrInterpolate(unref($generalStore).selectedPost.likes.length)}</span></div><div class="pb-4 text-center flex items-center"><div class="rounded-full bg-gray-200 p-2 cursor-pointer">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "bx:bxs-message-rounded-dots",
          size: "25"
        }, null, _parent));
        _push(`</div><span class="text-xs pl-2 text-gray-800 font-semibold">43</span></div></div><div id="Comments" class="bg-[#F8F8F8] z-0 w-full h-[calc(100%-273px)] border-t-2 overflow-auto"><div class="pt-2"></div>`);
        if (unref($generalStore).selectedPost.comments.length < 1) {
          _push(`<div class="text-center mt-6 text-xl text-gray-500"> No comments... </div>`);
        } else {
          _push(`<!--[-->`);
          ssrRenderList(unref($generalStore).selectedPost.comments, (comment2) => {
            _push(`<div class="flex items-center justify-between px-8 mt-4"><div class="flex items-center relative w-full">`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: `/profile/${comment2.user.id}`
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<img class="absolute top-0 rounded-full lg:mx-0 mx-auto" width="40"${ssrRenderAttr("src", comment2.user.image)}${_scopeId}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "absolute top-0 rounded-full lg:mx-0 mx-auto",
                      width: "40",
                      src: comment2.user.image
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`<div class="ml-14 pt-0.5 w-full"><div class="text-[18px] font-semibold flex items-center justify-between">${ssrInterpolate(comment2.user.name)} `);
            if (unref($userStore).id === comment2.user.id) {
              _push(ssrRenderComponent(_component_Icon, {
                onClick: ($event) => deleteComment(unref($generalStore).selectedPost, comment2.id),
                class: "cursor-pointer",
                name: "material-symbols:delete-outline-sharp",
                size: "25"
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="text-[15px] font-light">${ssrInterpolate(comment2.text)}</div></div></div></div>`);
          });
          _push(`<!--]-->`);
        }
        _push(`<div class="mb-28"></div></div>`);
        if (unref($userStore).id) {
          _push(`<div id="CreateComment" class="absolute flex items-center justify-between bottom-0 bg-white h-[85px] lg:max-w-[550px] w-full py-5 px-8 border-t-2"><div class="${ssrRenderClass([unref(inputFocused) ? "border-2 border-gray-400" : "border-2 border-[#F1F1F2]", "bg-[#F1F1F2] flex items-center rounded-lg w-full lg:max-w-[420px]"])}"><input${ssrRenderAttr("value", unref(comment))} class="bg-[#F1F1F2] text-[14px] focus:outline-none w-full lg:max-w-[420px] p-2 rounded-lg" type="text" placeholder="Add comment..."></div><button${ssrIncludeBooleanAttr(!unref(comment)) ? " disabled" : ""} class="${ssrRenderClass([unref(comment) ? "text-[#F02C56] cursor-pointer" : "text-gray-400", "font-semibold text-sm ml-5 pr-1"])}"> Post </button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/post/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-3a6bfd53.mjs.map
