import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { ref, watch, unref, withCtx, createVNode, openBlock, createBlock, withModifiers, toDisplayString, withDirectives, isRef, vModelText, createCommentVNode, useSSRContext, toRefs, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { a as useRouter, d as __nuxt_component_1$3, e as useRoute, b as useNuxtApp } from '../server.mjs';
import { _ as _imports_1 } from './digtok-wm-d1918672.mjs';
import { _ as __nuxt_component_0$1 } from './TopNav-68da3337.mjs';
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
import './nuxt-link-744fccd2.mjs';

const _sfc_main$2 = {
  __name: "UploadError",
  __ssrInlineRender: true,
  props: ["errorType"],
  setup(__props) {
    const props = __props;
    const { errorType } = toRefs(props);
    let error = ref("");
    watch(() => errorType.value, () => {
      if (errorType.value == "caption") {
        error.value = "Maximum 150 characters.";
      } else if (errorType.value == "bio") {
        error.value = "Maximum 80 characters.";
      } else if (errorType.value == "file") {
        error.value = "Unsupported file. Use MP4 instead.";
      } else {
        error.value = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-[100%] relative flex justify-center" }, _attrs))}><div class="${ssrRenderClass([unref(errorType) ? "visible" : "invisible", "absolute top-6 z-50 mx-auto bg-black bg-opacity-70 text-white px-14 py-3 rounded-sm"])}">${ssrInterpolate(unref(error))}</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UploadError.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _imports_0 = "" + buildAssetsURL("mobile-case.ba3bd9bc.png");
const _sfc_main$1 = {
  __name: "UploadLayout",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TopNav = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#F8F8F8] h-[100vh]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_TopNav, null, null, _parent));
      _push(`<div class="flex justify-between mx-auto w-full px-2 max-w-[1140px]">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/UploadLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const UploadLayout = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $userStore } = useNuxtApp();
    const router = useRouter();
    let file = ref(null);
    let fileDisplay = ref(null);
    let errorType = ref(null);
    let caption = ref("");
    let fileData = ref(null);
    let errors = ref(null);
    let isUploading = ref(false);
    watch(() => caption.value, (caption2) => {
      if (caption2.length >= 150) {
        errorType.value = "caption";
        return;
      }
      errorType.value = null;
    });
    const onChange = () => {
      fileDisplay.value = URL.createObjectURL(file.value.files[0]);
      fileData.value = file.value.files[0];
    };
    const onDrop = (e) => {
      errorType.value = "";
      file.value = e.dataTransfer.files[0];
      fileData.value = e.dataTransfer.files[0];
      let extention = file.value.name.substring(file.value.name.lastIndexOf(".") + 1);
      if (extention !== "mp4") {
        errorType.value = "file";
        return;
      }
      fileDisplay.value = URL.createObjectURL(e.dataTransfer.files[0]);
    };
    const discard = () => {
      file.value = null;
      fileDisplay.value = null;
      fileData.value = null;
      caption.value = "";
    };
    const createPost = async () => {
      errors.value = null;
      let data = new FormData();
      data.append("video", fileData.value || "");
      data.append("text", caption.value || "");
      if (fileData.value && caption.value) {
        isUploading.value = true;
      }
      try {
        let res = await $userStore.createPost(data);
        if (res.status === 200) {
          setTimeout(() => {
            router.push("/profile/" + $userStore.id);
            isUploading.value = false;
          }, 1e3);
        }
      } catch (error) {
        errors.value = error.response.data.errors;
        isUploading.value = false;
      }
    };
    const clearVideo = () => {
      file.value = null;
      fileDisplay.value = null;
      fileData.value = null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UploadError = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1$3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UploadError, { errorType: unref(errorType) }, null, _parent));
      if (unref(isUploading)) {
        _push(`<div class="fixed flex items-center justify-center top-0 left-0 w-full h-screen bg-black z-50 bg-opacity-50">`);
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
      _push(ssrRenderComponent(UploadLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full mt-[80px] mb-[40px] bg-white shadow-lg rounded-md py-6 md:px-10 px-4"${_scopeId}><div${_scopeId}><div class="text-[23px] font-semibold"${_scopeId}>Upload video</div><div class="text-gray-400 mt-1"${_scopeId}>Post a video to your account</div></div><div class="mt-8 md:flex gap-6"${_scopeId}>`);
            if (!unref(fileDisplay)) {
              _push2(`<label for="fileInput" class="md:mx-0 mx-auto mt-4 mb-6 flex flex-col items-center justify-center w-full max-w-[260px] h-[470px] text-center p-3 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "majesticons:cloud-upload",
                size: "40",
                color: "#b3b3b1"
              }, null, _parent2, _scopeId));
              _push2(`<div class="mt-4 text-[17px]"${_scopeId}>Select video to upload</div><div class="mt-1.5 text-gray-500 text-[13px]"${_scopeId}>Or drag and drop a file</div><div class="mt-12 text-gray-400 text-sm"${_scopeId}>MP4</div><div class="mt-2 text-gray-400 text-[13px]"${_scopeId}>Up to 30 minutes</div><div class="mt-2 text-gray-400 text-[13px]"${_scopeId}>Less than 2 GB</div><div class="px-2 py-1.5 mt-8 text-white text-[15px] w-[80%] bg-[#F02C56] rounded-sm"${_scopeId}> Select file </div><input type="file" id="fileInput" hidden accept=".mp4"${_scopeId}></label>`);
            } else {
              _push2(`<div class="md:mx-0 mx-auto mt-4 md:mb-12 mb-16 flex items-center justify-center w-full max-w-[260px] h-[540px] p-3 rounded-2xl cursor-pointer relative"${_scopeId}><div class="bg-black h-full w-full"${_scopeId}></div><img class="absolute z-20 pointer-events-none"${ssrRenderAttr("src", _imports_0)}${_scopeId}><img class="absolute right-4 bottom-6 z-20" width="90"${ssrRenderAttr("src", _imports_1)}${_scopeId}><video autoplay loop muted class="absolute rounded-xl object-cover z-10 p-[13px] w-full h-full"${ssrRenderAttr("src", unref(fileDisplay))}${_scopeId}></video><div class="absolute -bottom-12 flex items-center justify-between z-50 rounded-xl border w-full p-2 border-gray-300"${_scopeId}><div class="flex items-center truncate"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "clarity:success-standard-line",
                size: "16",
                class: "min-w-[16px]"
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-[11px] pl-1 truncate text-ellipsis"${_scopeId}>${ssrInterpolate(unref(fileData).name)}</div></div><button class="text-[11px] ml-2 font-semibold"${_scopeId}> Change </button></div></div>`);
            }
            _push2(`<div class="mt-4 mb-6"${_scopeId}><div class="flex bg-[#F8F8F8] py-4 px-6"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              class: "mr-4",
              size: "20",
              name: "mdi:box-cutter-off"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="text-semibold text-[15px] mb-1.5"${_scopeId}>Divide videos and edit</div><div class="text-semibold text-[13px] text-gray-400"${_scopeId}> You can quickly divide videos into multiple parts, remove redundant parts and turn landscape videos into portrait videos </div></div><div class="flex justify-end max-w-[130px] w-full h-full text-center my-auto"${_scopeId}><button class="px-8 py-1.5 text-white text-[15px] bg-[#F02C56] rounded-sm"${_scopeId}> Edit </button></div></div><div class="mt-5"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="mb-1 text-[15px]"${_scopeId}>Caption</div><div class="text-gray-400 text-[12px]"${_scopeId}>${ssrInterpolate(unref(caption).length)}/150</div></div><input${ssrRenderAttr("value", unref(caption))} maxlength="150" type="text" class="w-full border p-2.5 rounded-md focus:outline-none"${_scopeId}></div><div class="flex gap-3"${_scopeId}><button class="px-10 py-2.5 mt-8 border text-[16px] hover:bg-gray-100 rounded-sm"${_scopeId}> Discard </button><button class="px-10 py-2.5 mt-8 border text-[16px] text-white bg-[#F02C56] rounded-sm"${_scopeId}> Post </button></div>`);
            if (unref(errors)) {
              _push2(`<div class="mt-4"${_scopeId}>`);
              if (unref(errors) && unref(errors).video) {
                _push2(`<div class="text-red-600"${_scopeId}>${ssrInterpolate(unref(errors).video[0])}</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(errors) && unref(errors).text) {
                _push2(`<div class="text-red-600"${_scopeId}>${ssrInterpolate(unref(errors).text[0])}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full mt-[80px] mb-[40px] bg-white shadow-lg rounded-md py-6 md:px-10 px-4" }, [
                createVNode("div", null, [
                  createVNode("div", { class: "text-[23px] font-semibold" }, "Upload video"),
                  createVNode("div", { class: "text-gray-400 mt-1" }, "Post a video to your account")
                ]),
                createVNode("div", { class: "mt-8 md:flex gap-6" }, [
                  !unref(fileDisplay) ? (openBlock(), createBlock("label", {
                    key: 0,
                    for: "fileInput",
                    onDrop: withModifiers(onDrop, ["prevent"]),
                    onDragover: withModifiers(() => {
                    }, ["prevent"]),
                    class: "md:mx-0 mx-auto mt-4 mb-6 flex flex-col items-center justify-center w-full max-w-[260px] h-[470px] text-center p-3 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer"
                  }, [
                    createVNode(_component_Icon, {
                      name: "majesticons:cloud-upload",
                      size: "40",
                      color: "#b3b3b1"
                    }),
                    createVNode("div", { class: "mt-4 text-[17px]" }, "Select video to upload"),
                    createVNode("div", { class: "mt-1.5 text-gray-500 text-[13px]" }, "Or drag and drop a file"),
                    createVNode("div", { class: "mt-12 text-gray-400 text-sm" }, "MP4"),
                    createVNode("div", { class: "mt-2 text-gray-400 text-[13px]" }, "Up to 30 minutes"),
                    createVNode("div", { class: "mt-2 text-gray-400 text-[13px]" }, "Less than 2 GB"),
                    createVNode("div", { class: "px-2 py-1.5 mt-8 text-white text-[15px] w-[80%] bg-[#F02C56] rounded-sm" }, " Select file "),
                    createVNode("input", {
                      ref_key: "file",
                      ref: file,
                      type: "file",
                      id: "fileInput",
                      onInput: onChange,
                      hidden: "",
                      accept: ".mp4"
                    }, null, 544)
                  ], 40, ["onDrop", "onDragover"])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "md:mx-0 mx-auto mt-4 md:mb-12 mb-16 flex items-center justify-center w-full max-w-[260px] h-[540px] p-3 rounded-2xl cursor-pointer relative"
                  }, [
                    createVNode("div", { class: "bg-black h-full w-full" }),
                    createVNode("img", {
                      class: "absolute z-20 pointer-events-none",
                      src: _imports_0
                    }),
                    createVNode("img", {
                      class: "absolute right-4 bottom-6 z-20",
                      width: "90",
                      src: _imports_1
                    }),
                    createVNode("video", {
                      autoplay: "",
                      loop: "",
                      muted: "",
                      class: "absolute rounded-xl object-cover z-10 p-[13px] w-full h-full",
                      src: unref(fileDisplay)
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "absolute -bottom-12 flex items-center justify-between z-50 rounded-xl border w-full p-2 border-gray-300" }, [
                      createVNode("div", { class: "flex items-center truncate" }, [
                        createVNode(_component_Icon, {
                          name: "clarity:success-standard-line",
                          size: "16",
                          class: "min-w-[16px]"
                        }),
                        createVNode("div", { class: "text-[11px] pl-1 truncate text-ellipsis" }, toDisplayString(unref(fileData).name), 1)
                      ]),
                      createVNode("button", {
                        onClick: clearVideo,
                        class: "text-[11px] ml-2 font-semibold"
                      }, " Change ")
                    ])
                  ])),
                  createVNode("div", { class: "mt-4 mb-6" }, [
                    createVNode("div", { class: "flex bg-[#F8F8F8] py-4 px-6" }, [
                      createVNode("div", null, [
                        createVNode(_component_Icon, {
                          class: "mr-4",
                          size: "20",
                          name: "mdi:box-cutter-off"
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "text-semibold text-[15px] mb-1.5" }, "Divide videos and edit"),
                        createVNode("div", { class: "text-semibold text-[13px] text-gray-400" }, " You can quickly divide videos into multiple parts, remove redundant parts and turn landscape videos into portrait videos ")
                      ]),
                      createVNode("div", { class: "flex justify-end max-w-[130px] w-full h-full text-center my-auto" }, [
                        createVNode("button", { class: "px-8 py-1.5 text-white text-[15px] bg-[#F02C56] rounded-sm" }, " Edit ")
                      ])
                    ]),
                    createVNode("div", { class: "mt-5" }, [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("div", { class: "mb-1 text-[15px]" }, "Caption"),
                        createVNode("div", { class: "text-gray-400 text-[12px]" }, toDisplayString(unref(caption).length) + "/150", 1)
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(caption) ? caption.value = $event : caption = $event,
                        maxlength: "150",
                        type: "text",
                        class: "w-full border p-2.5 rounded-md focus:outline-none"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(caption)]
                      ])
                    ]),
                    createVNode("div", { class: "flex gap-3" }, [
                      createVNode("button", {
                        onClick: ($event) => discard(),
                        class: "px-10 py-2.5 mt-8 border text-[16px] hover:bg-gray-100 rounded-sm"
                      }, " Discard ", 8, ["onClick"]),
                      createVNode("button", {
                        onClick: ($event) => createPost(),
                        class: "px-10 py-2.5 mt-8 border text-[16px] text-white bg-[#F02C56] rounded-sm"
                      }, " Post ", 8, ["onClick"])
                    ]),
                    unref(errors) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-4"
                    }, [
                      unref(errors) && unref(errors).video ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-red-600"
                      }, toDisplayString(unref(errors).video[0]), 1)) : createCommentVNode("", true),
                      unref(errors) && unref(errors).text ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "text-red-600"
                      }, toDisplayString(unref(errors).text[0]), 1)) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/upload/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-78b14796.mjs.map
