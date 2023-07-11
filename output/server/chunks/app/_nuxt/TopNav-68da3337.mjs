import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-744fccd2.mjs';
import { e as useRoute, a as useRouter, b as useNuxtApp, d as __nuxt_component_1$3 } from '../server.mjs';
import { useSSRContext, ref, mergeProps, unref, withCtx, createVNode, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';

const _imports_0 = "" + buildAssetsURL("digtok.f552e7e9.png");
const _sfc_main = {
  __name: "TopNav",
  __ssrInlineRender: true,
  setup(__props) {
    const { $userStore, $generalStore } = useNuxtApp();
    const route = useRoute();
    useRouter();
    let showMenu = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "TopNav",
        class: "fixed bg-white z-30 flex items-center w-full border-b h-[61px]"
      }, _attrs))}><div class="${ssrRenderClass([unref(route).fullPath === "/" ? "max-w-[1150px]" : "", "flex items-center justify-between w-full px-6 mx-auto"])}"><div class="${ssrRenderClass(unref(route).fullPath === "/" ? "w-[80%]" : "lg:w-[20%] w-[70%]")}">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img width="115"${ssrRenderAttr("src", _imports_0)}${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                width: "115",
                src: _imports_0
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden md:flex items-center bg-[#F1F1F2] p-1 rounded-full max-w-[380px] w-full"><input type="text" class="w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none" placeholder="Search accounts"><div class="px-3 py-1 flex items-center border-l border-l-gray-300">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ri:search-line",
        color: "#A1A2A7",
        size: "22"
      }, null, _parent));
      _push(`</div></div><div class="flex items-center justify-end gap-3 min-w-[275px] max-w-[320px] w-full"><button class="flex items-center border rounded-sm px-3 py-[6px] hover:bg-gray-100">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:plus",
        color: "#000000",
        size: "22"
      }, null, _parent));
      _push(`<span class="px-2 font-medium text-[15px]">Upload</span></button>`);
      if (!unref($userStore).id) {
        _push(`<div class="flex items-center"><button class="flext items-center bg-[#F02C56] text-white border rounded-md px-3 py-[6px]"><span class="mx-4 font-medium text-[15px]">Log in</span></button>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:dots-vertical",
          color: "#161724",
          size: "25"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "ml-1 mr-4",
          name: "carbon:send-alt",
          color: "#161724",
          size: "30"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Icon, {
          class: "mr-5",
          name: "bx:message-detail",
          color: "#161724",
          size: "27"
        }, null, _parent));
        _push(`<div class="relative"><button class="mt-1"><img class="rounded-full" width="33"${ssrRenderAttr("src", unref($userStore).image)}></button>`);
        if (unref(showMenu)) {
          _push(`<div id="PopupMenu" class="absolute bg-white rounded-lg py-1.5 w-[200px] shadow-xl border top-[43px] -right-2">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/profile/${unref($userStore).id}`,
            onClick: ($event) => isRef(showMenu) ? showMenu.value = false : showMenu = false,
            class: "flex items-center justify-start py-3 px-2 hover:bg-gray-100 cursor-pointer"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:user",
                  size: "20"
                }, null, _parent2, _scopeId));
                _push2(`<span class="pl-2 font-semibold text-sm"${_scopeId}>Profile</span>`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "ph:user",
                    size: "20"
                  }),
                  createVNode("span", { class: "pl-2 font-semibold text-sm" }, "Profile")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<div class="flex items-center justify-start py-3 px-1.5 hover:bg-gray-100 border-t cursor-pointer">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ic:outline-login",
            size: "20"
          }, null, _parent));
          _push(`<span class="pl-2 font-semibold text-sm">Log Out</span></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TopNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=TopNav-68da3337.mjs.map
