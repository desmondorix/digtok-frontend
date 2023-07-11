import { _ as __nuxt_component_0 } from './TopNav-68da3337.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-744fccd2.mjs';
import { e as useRoute, a as useRouter, b as useNuxtApp, d as __nuxt_component_1$3 } from '../server.mjs';
import { useSSRContext, unref, mergeProps, withCtx, createVNode, toRefs, ref } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main$3 = {
  __name: "MenuItem",
  __ssrInlineRender: true,
  props: ["iconString", "colorString", "sizeString"],
  setup(__props) {
    const props = __props;
    const { iconString, colorString, sizeString } = toRefs(props);
    let icon = ref("");
    if (iconString.value === "For You")
      icon.value = "mdi:home";
    if (iconString.value === "Following")
      icon.value = "ci:group";
    if (iconString.value === "LIVE")
      icon.value = "ri:live-line";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex items-center hover:bg-gray-100 p-2.5 rounded-md" }, _attrs))}><div class="flex items-center lg:mx-0 mx-auto">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(icon),
        color: unref(colorString),
        size: unref(sizeString)
      }, null, _parent));
      _push(`<span class="${ssrRenderClass([`text-[${unref(colorString)}]`, "lg:block hidden pl-[9px] mt-0.5 font-semibold text-[17px]"])}">${ssrInterpolate(unref(iconString))}</span></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MenuItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1$1 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "MenuItemFollow",
  __ssrInlineRender: true,
  props: ["user"],
  setup(__props) {
    const { $generalStore } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center hover:bg-gray-100 rounded-md w-full py-1.5 px-2" }, _attrs))}>`);
      if (__props.user.image) {
        _push(`<img class="rounded-full lg:mx-0 mx-auto" width="35"${ssrRenderAttr("src", __props.user.image)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="lg:pl-2.5 lg:block hidden"><div class="flex items-center"><div class="font-bold text-[14px]">${ssrInterpolate(unref($generalStore).allLowerCaseNoCaps(__props.user.name))}</div><div class="ml-1 rounded-full bg-[#58D5EC] h-[14px] relative">`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "relative -top-[7px]",
        name: "teenyicons:tick-small-solid",
        color: "#FFFFFF",
        size: "15"
      }, null, _parent));
      _push(`</div></div><div class="font-light text-[12px] text-gray-600">${ssrInterpolate(__props.user.name)}</div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MenuItemFollow.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "SideNavMain",
  __ssrInlineRender: true,
  setup(__props) {
    const { $generalStore, $userStore } = useNuxtApp();
    const route = useRoute();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_MenuItem = __nuxt_component_1$1;
      const _component_MenuItemFollow = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "SideNavMain",
        class: [unref(route).fullPath === "/" ? "lg:w-[310px]" : "lg:w-[220px]", "fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto"]
      }, _attrs))}><div class="lg:w-full w-[55px] mx-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_MenuItem, {
              iconString: "For You",
              colorString: "#F02C56",
              sizeString: "30"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_MenuItem, {
                iconString: "For You",
                colorString: "#F02C56",
                sizeString: "30"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_MenuItem, {
        iconString: "Following",
        colorString: "#000000",
        sizeString: "27"
      }, null, _parent));
      _push(ssrRenderComponent(_component_MenuItem, {
        iconString: "LIVE",
        colorString: "#000000",
        sizeString: "27"
      }, null, _parent));
      _push(`<div class="border-b lg:ml-2 mt-2"></div><div class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2"> Suggested accounts </div><div class="lg:hidden block pt-3"></div>`);
      if (unref($generalStore).suggested) {
        _push(`<!--[-->`);
        ssrRenderList(unref($generalStore).suggested, (sug) => {
          _push(`<div><div class="cursor-pointer">`);
          _push(ssrRenderComponent(_component_MenuItemFollow, { user: sug }, null, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]"> See all </button><div class="border-b lg:ml-2 mt-2"></div><div class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2"> Following accounts </div><div class="lg:hidden block pt-3"></div>`);
      if (unref($generalStore).following) {
        _push(`<!--[-->`);
        ssrRenderList(unref($generalStore).following, (fol) => {
          _push(`<div><div class="cursor-pointer">`);
          _push(ssrRenderComponent(_component_MenuItemFollow, { user: fol }, null, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]"> See more </button><div class="lg:block hidden border-b lg:ml-2 mt-2"></div><div class="lg:block hidden text-[11px] text-gray-500"><div class="pt-4 px-2">About Newsroom TikTik Shop Contact Careers ByteDance</div><div class="pt-4 px-2">TikTik for Good Advertise Developers Transparency TikTik Rewards TikTik Browse TikTik Embeds</div><div class="pt-4 px-2">Help Safety Terms Privacy Creator Portal Community Guidelines</div><div class="pt-4 px-2">\xA9 2023 TikTik</div></div><div class="pb-14"></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SideNavMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "MainLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TopNav = __nuxt_component_0;
      const _component_SideNavMain = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_TopNav, null, null, _parent));
      _push(`<div class="${ssrRenderClass([unref(route).fullPath === "/" ? "max-w-[1140px]" : "", "flex justify-between mx-auto w-full lg:px-2.5 px-0"])}"><div>`);
      _push(ssrRenderComponent(_component_SideNavMain, null, null, _parent));
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/MainLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MainLayout = _sfc_main;

export { MainLayout as M };
//# sourceMappingURL=MainLayout-5774cad7.mjs.map
