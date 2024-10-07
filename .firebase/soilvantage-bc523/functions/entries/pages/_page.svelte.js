import { f as set_current_component, r as run_all, h as current_component, c as create_ssr_component, i as compute_rest_props, j as spread, e as escape, k as escape_object, v as validate_component, m as missing_component, l as escape_attribute_value, n as each, o as onDestroy, p as get_store_value, q as createEventDispatcher, d as add_attribute, g as getContext, s as setContext, a as validate_store, b as subscribe } from "../../chunks/ssr.js";
import "../../chunks/stores.js";
import { tv } from "tailwind-variants";
import { dequal } from "dequal";
import { d as derived, w as writable, r as readable, a as readonly } from "../../chunks/index2.js";
import { o as onMount } from "../../chunks/ssr2.js";
import { clsx } from "clsx";
import "@rive-app/canvas";
import { nanoid } from "nanoid/non-secure";
import { flip, offset, shift, arrow, size, autoUpdate, computePosition } from "@floating-ui/dom";
import { createFocusTrap as createFocusTrap$1 } from "focus-trap";
import { twMerge } from "tailwind-merge";
import "../../chunks/client.js";
const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length) binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
function validate_dynamic_element(tag) {
  const is_string = typeof tag === "string";
  if (tag && !is_string) {
    throw new Error('<svelte:element> expects "this" attribute to be a string.');
  }
}
function validate_void_dynamic_element(tag) {
  if (tag && is_void(tag)) {
    console.warn(`<svelte:element this="${tag}"> is self-closing and cannot have content.`);
  }
}
const css$6 = {
  code: ".button2.svelte-s7bcv7{display:inline-block;transition:all 0.2s ease-in;position:relative;overflow:hidden;z-index:1;width:-moz-fit-content;width:fit-content;display:flex;align-items:center;gap:8px;padding:0.7em 1.7em;cursor:pointer;font-size:18px;border-radius:0.5em}.button2.shadow.svelte-s7bcv7{box-shadow:0px 0px 5px #2525257e}.button2.transparent.svelte-s7bcv7{background:transparent;border:1px solid transparent;color:#090909;--bg:var(--primary);--text:white\r\n	}.button2.filled.svelte-s7bcv7{background:var(--primary);border:1px solid var(--primary);color:white;--bg:var(--accent);--text:white\r\n	}.button2.svelte-s7bcv7:active{color:#666}.button2.svelte-s7bcv7:before{content:'';position:absolute;left:50%;transform:translateX(-50%) scaleY(1) scaleX(1.25);top:100%;width:140%;height:180%;background-color:rgba(0, 0, 0, 0.05);border-radius:50%;display:block;transition:all 0.3s 0.1s cubic-bezier(0.55, 0, 0.1, 1);z-index:-1}.button2.svelte-s7bcv7:after{content:'';position:absolute;left:55%;transform:translateX(-50%) scaleY(1) scaleX(1.45);top:180%;width:160%;height:190%;background-color:var(--bg);border-radius:50%;display:block;transition:all 0.3s 0.1s cubic-bezier(0.55, 0, 0.1, 1);z-index:-1}.button2.svelte-s7bcv7:hover,.button2.selected.svelte-s7bcv7{color:var(--text);border:1px solid var(--bg)}.button2.svelte-s7bcv7:hover:before,.button2.selected.svelte-s7bcv7:before{top:-35%;background-color:var(--bg);transform:translateX(-50%) scaleY(1.3) scaleX(0.8)}.button2.svelte-s7bcv7:hover:after,.button2.selected.svelte-s7bcv7:after{top:-45%;background-color:var(--bg);transform:translateX(-50%) scaleY(1.3) scaleX(0.8)}",
  map: `{"version":3,"file":"Button1.svelte","sources":["Button1.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let content;\\nexport let selected = false;\\nexport let style = \\"transparent\\";\\nexport let icon = null;\\nexport let shadow = false;\\n<\/script>\\r\\n\\r\\n<button class=\\"button2 {style}\\" class:shadow class:selected {...$$restProps} on:click>\\r\\n\\t{#if icon}\\r\\n\\t\\t<svelte:component this={icon}/>\\r\\n\\t{/if}\\r\\n\\t{content}\\r\\n</button>\\r\\n\\r\\n<style>\\r\\n\\t.button2 {\\r\\n\\t\\tdisplay: inline-block;\\r\\n\\t\\ttransition: all 0.2s ease-in;\\r\\n\\t\\tposition: relative;\\r\\n\\t\\toverflow: hidden;\\r\\n\\t\\tz-index: 1;\\r\\n\\t\\twidth: -moz-fit-content;\\r\\n\\t\\twidth: fit-content;\\r\\n\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tgap: 8px;\\r\\n\\t\\t\\r\\n\\t\\tpadding: 0.7em 1.7em;\\r\\n\\t\\tcursor: pointer;\\r\\n\\t\\tfont-size: 18px;\\r\\n\\t\\tborder-radius: 0.5em;\\r\\n\\r\\n\\t\\t\\r\\n\\t}\\r\\n\\t.button2.shadow {\\r\\n\\t\\tbox-shadow: 0px 0px 5px #2525257e;\\r\\n\\t}\\r\\n\\t.button2.transparent {\\r\\n\\t\\tbackground: transparent;\\r\\n\\t\\tborder: 1px solid transparent;\\r\\n    color: #090909;\\r\\n\\t\\t--bg: var(--primary);\\r\\n    --text: white\\r\\n\\t}\\r\\n\\t.button2.filled {\\r\\n\\t\\tbackground: var(--primary);\\r\\n\\t\\tborder: 1px solid var(--primary);\\r\\n    color: white;\\r\\n\\t\\t--bg: var(--accent);\\r\\n    --text: white\\r\\n\\t}\\r\\n\\r\\n\\t.button2:active {\\r\\n\\t\\tcolor: #666;\\r\\n\\t}\\r\\n\\r\\n\\t.button2:before {\\r\\n\\t\\tcontent: '';\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tleft: 50%;\\r\\n\\t\\ttransform: translateX(-50%) scaleY(1) scaleX(1.25);\\r\\n\\t\\ttop: 100%;\\r\\n\\t\\twidth: 140%;\\r\\n\\t\\theight: 180%;\\r\\n\\t\\tbackground-color: rgba(0, 0, 0, 0.05);\\r\\n\\t\\tborder-radius: 50%;\\r\\n\\t\\tdisplay: block;\\r\\n\\t\\ttransition: all 0.3s 0.1s cubic-bezier(0.55, 0, 0.1, 1);\\r\\n\\t\\tz-index: -1;\\r\\n\\t}\\r\\n\\r\\n\\t.button2:after {\\r\\n\\t\\tcontent: '';\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tleft: 55%;\\r\\n\\t\\ttransform: translateX(-50%) scaleY(1) scaleX(1.45);\\r\\n\\t\\ttop: 180%;\\r\\n\\t\\twidth: 160%;\\r\\n\\t\\theight: 190%;\\r\\n\\t\\tbackground-color: var(--bg);\\r\\n\\t\\tborder-radius: 50%;\\r\\n\\t\\tdisplay: block;\\r\\n\\t\\ttransition: all 0.3s 0.1s cubic-bezier(0.55, 0, 0.1, 1);\\r\\n\\t\\tz-index: -1;\\r\\n\\t}\\r\\n\\r\\n\\t.button2:hover,\\r\\n\\t.button2.selected {\\r\\n\\t\\tcolor: var(--text);\\r\\n\\t\\tborder: 1px solid var(--bg);\\r\\n\\t}\\r\\n\\r\\n\\t.button2:hover:before,\\r\\n\\t.button2.selected:before {\\r\\n\\t\\ttop: -35%;\\r\\n\\t\\tbackground-color: var(--bg);\\r\\n\\t\\ttransform: translateX(-50%) scaleY(1.3) scaleX(0.8);\\r\\n\\t}\\r\\n\\r\\n\\t.button2:hover:after,\\r\\n\\t.button2.selected:after {\\r\\n\\t\\ttop: -45%;\\r\\n\\t\\tbackground-color: var(--bg);\\r\\n\\t\\ttransform: translateX(-50%) scaleY(1.3) scaleX(0.8);\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAeC,sBAAS,CACR,OAAO,CAAE,YAAY,CACrB,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,OAAO,CAC5B,QAAQ,CAAE,QAAQ,CAClB,QAAQ,CAAE,MAAM,CAChB,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,gBAAgB,CACvB,KAAK,CAAE,WAAW,CAElB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,GAAG,CAER,OAAO,CAAE,KAAK,CAAC,KAAK,CACpB,MAAM,CAAE,OAAO,CACf,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,KAGhB,CACA,QAAQ,qBAAQ,CACf,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,SACzB,CACA,QAAQ,0BAAa,CACpB,UAAU,CAAE,WAAW,CACvB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CAC3B,KAAK,CAAE,OAAO,CAChB,IAAI,CAAE,cAAc,CAClB,MAAM,CAAE;AACZ,CAAC,CACA,QAAQ,qBAAQ,CACf,UAAU,CAAE,IAAI,SAAS,CAAC,CAC1B,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,SAAS,CAAC,CAC9B,KAAK,CAAE,KAAK,CACd,IAAI,CAAE,aAAa,CACjB,MAAM,CAAE;AACZ,CAAC,CAEA,sBAAQ,OAAQ,CACf,KAAK,CAAE,IACR,CAEA,sBAAQ,OAAQ,CACf,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,WAAW,IAAI,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,OAAO,IAAI,CAAC,CAClD,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACrC,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,aAAa,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CACvD,OAAO,CAAE,EACV,CAEA,sBAAQ,MAAO,CACd,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,WAAW,IAAI,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,OAAO,IAAI,CAAC,CAClD,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,IAAI,IAAI,CAAC,CAC3B,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,aAAa,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CACvD,OAAO,CAAE,EACV,CAEA,sBAAQ,MAAM,CACd,QAAQ,uBAAU,CACjB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,IAAI,CAC3B,CAEA,sBAAQ,MAAM,OAAO,CACrB,QAAQ,uBAAS,OAAQ,CACxB,GAAG,CAAE,IAAI,CACT,gBAAgB,CAAE,IAAI,IAAI,CAAC,CAC3B,SAAS,CAAE,WAAW,IAAI,CAAC,CAAC,OAAO,GAAG,CAAC,CAAC,OAAO,GAAG,CACnD,CAEA,sBAAQ,MAAM,MAAM,CACpB,QAAQ,uBAAS,MAAO,CACvB,GAAG,CAAE,IAAI,CACT,gBAAgB,CAAE,IAAI,IAAI,CAAC,CAC3B,SAAS,CAAE,WAAW,IAAI,CAAC,CAAC,OAAO,GAAG,CAAC,CAAC,OAAO,GAAG,CACnD"}`
};
const Button1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["content", "selected", "style", "icon", "shadow"]);
  let { content } = $$props;
  let { selected = false } = $$props;
  let { style = "transparent" } = $$props;
  let { icon = null } = $$props;
  let { shadow = false } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0) $$bindings.content(content);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
  $$result.css.add(css$6);
  return `<button${spread([{ class: "button2 " + escape(style, true) }, escape_object($$restProps)], {
    classes: (shadow ? "shadow" : "") + " " + (selected ? "selected" : "") + " svelte-s7bcv7"
  })}>${icon ? `${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : ``} ${escape(content)} </button>`;
});
/**
 * @license lucide-svelte v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"]);
  let { name = void 0 } = $$props;
  let { color = "currentColor" } = $$props;
  let { size: size2 = 24 } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { absoluteStrokeWidth = false } = $$props;
  let { iconNode = [] } = $$props;
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0) $$bindings.size(size2);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.absoluteStrokeWidth === void 0 && $$bindings.absoluteStrokeWidth && absoluteStrokeWidth !== void 0) $$bindings.absoluteStrokeWidth(absoluteStrokeWidth);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0) $$bindings.iconNode(iconNode);
  return `<svg${spread(
    [
      escape_object(defaultAttributes),
      escape_object($$restProps),
      { width: escape_attribute_value(size2) },
      { height: escape_attribute_value(size2) },
      { stroke: escape_attribute_value(color) },
      {
        "stroke-width": escape_attribute_value(absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size2) : strokeWidth)
      },
      {
        class: escape_attribute_value(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$props.class))
      }
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      validate_dynamic_element(tag$1);
      return tag$1 ? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});
function back(array, index, increment, loop = true) {
  const previousIndex = index - increment;
  if (previousIndex <= 0) {
    return loop ? array[array.length - 1] : array[0];
  }
  return array[previousIndex];
}
function forward(array, index, increment, loop = true) {
  const nextIndex = index + increment;
  if (nextIndex > array.length - 1) {
    return loop ? array[0] : array[array.length - 1];
  }
  return array[nextIndex];
}
function next(array, index, loop = true) {
  if (index === array.length - 1) {
    return loop ? array[0] : array[index];
  }
  return array[index + 1];
}
function prev(array, currentIndex, loop = true) {
  if (currentIndex <= 0) {
    return loop ? array[array.length - 1] : array[0];
  }
  return array[currentIndex - 1];
}
function last(array) {
  return array[array.length - 1];
}
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
function toggle(item, array, compare = dequal) {
  const itemIdx = array.findIndex((innerItem) => compare(innerItem, item));
  if (itemIdx !== -1) {
    array.splice(itemIdx, 1);
  } else {
    array.push(item);
  }
  return array;
}
function styleToString(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
function disabledAttr(disabled) {
  return disabled ? true : void 0;
}
({
  type: "hidden",
  "aria-hidden": true,
  hidden: true,
  tabIndex: -1,
  style: styleToString({
    position: "absolute",
    opacity: 0,
    "pointer-events": "none",
    margin: 0,
    transform: "translateX(-100%)"
  })
});
function lightable(value) {
  function subscribe2(run) {
    run(value);
    return () => {
    };
  }
  return { subscribe: subscribe2 };
}
function getElementByMeltId(id) {
  if (!isBrowser$1)
    return null;
  const el = document.querySelector(`[data-melt-id="${id}"]`);
  return isHTMLElement(el) ? el : null;
}
const hiddenAction = (obj) => {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver);
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter((key) => key !== "action");
    }
  });
};
const isFunctionWithParams = (fn) => {
  return typeof fn === "function";
};
makeElement("empty");
function makeElement(name, args) {
  const { stores, action, returned } = args ?? {};
  const derivedStore = (() => {
    if (stores && returned) {
      return derived(stores, (values) => {
        const result = returned(values);
        if (isFunctionWithParams(result)) {
          const fn = (...args2) => {
            return hiddenAction({
              ...result(...args2),
              [`data-melt-${name}`]: "",
              action: action ?? noop
            });
          };
          fn.action = action ?? noop;
          return fn;
        }
        return hiddenAction({
          ...result,
          [`data-melt-${name}`]: "",
          action: action ?? noop
        });
      });
    } else {
      const returnedFn = returned;
      const result = returnedFn?.();
      if (isFunctionWithParams(result)) {
        const resultFn = (...args2) => {
          return hiddenAction({
            ...result(...args2),
            [`data-melt-${name}`]: "",
            action: action ?? noop
          });
        };
        resultFn.action = action ?? noop;
        return lightable(resultFn);
      }
      return lightable(hiddenAction({
        ...result,
        [`data-melt-${name}`]: "",
        action: action ?? noop
      }));
    }
  })();
  const actionFn = action ?? (() => {
  });
  actionFn.subscribe = derivedStore.subscribe;
  return actionFn;
}
function createElHelpers(prefix) {
  const name = (part) => part ? `${prefix}-${part}` : prefix;
  const attribute = (part) => `data-melt-${prefix}${part ? `-${part}` : ""}`;
  const selector = (part) => `[data-melt-${prefix}${part ? `-${part}` : ""}]`;
  const getEl = (part) => document.querySelector(selector(part));
  return {
    name,
    attribute,
    selector,
    getEl
  };
}
const isBrowser$1 = typeof document !== "undefined";
const isFunction = (v) => typeof v === "function";
function isElement(element) {
  return element instanceof Element;
}
function isHTMLElement(element) {
  return element instanceof HTMLElement;
}
function isHTMLInputElement(element) {
  return element instanceof HTMLInputElement;
}
function isHTMLLabelElement(element) {
  return element instanceof HTMLLabelElement;
}
function isHTMLButtonElement(element) {
  return element instanceof HTMLButtonElement;
}
function isElementDisabled(element) {
  const ariaDisabled = element.getAttribute("aria-disabled");
  const disabled = element.getAttribute("disabled");
  const dataDisabled = element.hasAttribute("data-disabled");
  if (ariaDisabled === "true" || disabled !== null || dataDisabled) {
    return true;
  }
  return false;
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
function isReadable(value) {
  return isObject(value) && "subscribe" in value;
}
function executeCallbacks(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
function noop() {
}
function addEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
function addMeltEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  if (typeof handler === "function") {
    const handlerWithMelt = withMelt((_event) => handler(_event));
    events.forEach((_event) => target.addEventListener(_event, handlerWithMelt, options));
    return () => {
      events.forEach((_event) => target.removeEventListener(_event, handlerWithMelt, options));
    };
  }
  return () => noop();
}
function dispatchMeltEvent(originalEvent) {
  const node = originalEvent.currentTarget;
  if (!isHTMLElement(node))
    return null;
  const customMeltEvent = new CustomEvent(`m-${originalEvent.type}`, {
    detail: {
      originalEvent
    },
    cancelable: true
  });
  node.dispatchEvent(customMeltEvent);
  return customMeltEvent;
}
function withMelt(handler) {
  return (event) => {
    const customEvent = dispatchMeltEvent(event);
    if (customEvent?.defaultPrevented)
      return;
    return handler(event);
  };
}
function addHighlight(element) {
  element.setAttribute("data-highlighted", "");
}
function removeHighlight(element) {
  element.removeAttribute("data-highlighted");
}
const safeOnMount = (fn) => {
  try {
    onMount(fn);
  } catch {
    return fn;
  }
};
const safeOnDestroy = (fn) => {
  try {
    onDestroy(fn);
  } catch {
    return fn;
  }
};
function getOptions(el) {
  return Array.from(el.querySelectorAll('[role="option"]:not([data-disabled])')).filter((el2) => isHTMLElement(el2));
}
function omit(obj, ...keys) {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
function stripValues(inputObject, toStrip, recursive) {
  return Object.fromEntries(Object.entries(inputObject).filter(([_, value]) => !dequal(value, toStrip)));
}
function removeUndefined$1(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (value !== void 0) {
      result[key] = value;
    }
  }
  return result;
}
function withGet(store) {
  return {
    ...store,
    get: () => get_store_value(store)
  };
}
withGet.writable = function(initial) {
  const internal = writable(initial);
  let value = initial;
  return {
    subscribe: internal.subscribe,
    set(newValue) {
      internal.set(newValue);
      value = newValue;
    },
    update(updater) {
      const newValue = updater(value);
      internal.set(newValue);
      value = newValue;
    },
    get() {
      return value;
    }
  };
};
withGet.derived = function(stores, fn) {
  const subscribers = /* @__PURE__ */ new Map();
  const get = () => {
    const values = Array.isArray(stores) ? stores.map((store) => store.get()) : stores.get();
    return fn(values);
  };
  const subscribe2 = (subscriber) => {
    const unsubscribers = [];
    const storesArr = Array.isArray(stores) ? stores : [stores];
    storesArr.forEach((store) => {
      unsubscribers.push(store.subscribe(() => {
        subscriber(get());
      }));
    });
    subscriber(get());
    subscribers.set(subscriber, unsubscribers);
    return () => {
      const unsubscribers2 = subscribers.get(subscriber);
      if (unsubscribers2) {
        for (const unsubscribe of unsubscribers2) {
          unsubscribe();
        }
      }
      subscribers.delete(subscriber);
    };
  };
  return {
    get,
    subscribe: subscribe2
  };
};
const overridable = (_store, onChange) => {
  const store = withGet(_store);
  const update2 = (updater, sideEffect) => {
    store.update((curr) => {
      const next2 = updater(curr);
      let res = next2;
      if (onChange) {
        res = onChange({ curr, next: next2 });
      }
      sideEffect?.(res);
      return res;
    });
  };
  const set = (curr) => {
    update2(() => curr);
  };
  return {
    ...store,
    update: update2,
    set
  };
};
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function generateId() {
  return nanoid(10);
}
function generateIds(args) {
  return args.reduce((acc, curr) => {
    acc[curr] = generateId();
    return acc;
  }, {});
}
const kbd = {
  ALT: "Alt",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CAPS_LOCK: "CapsLock",
  CONTROL: "Control",
  DELETE: "Delete",
  END: "End",
  ENTER: "Enter",
  ESCAPE: "Escape",
  F1: "F1",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  HOME: "Home",
  META: "Meta",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SHIFT: "Shift",
  SPACE: " ",
  TAB: "Tab",
  CTRL: "Control",
  ASTERISK: "*",
  A: "a",
  P: "p"
};
const FIRST_KEYS = [kbd.ARROW_DOWN, kbd.PAGE_UP, kbd.HOME];
const LAST_KEYS = [kbd.ARROW_UP, kbd.PAGE_DOWN, kbd.END];
const FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
function debounce(fn, wait = 500) {
  let timeout = null;
  return function(...args) {
    const later = () => {
      timeout = null;
      fn(...args);
    };
    timeout && clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
const isDom = () => typeof window !== "undefined";
function getPlatform() {
  const agent = navigator.userAgentData;
  return agent?.platform ?? navigator.platform;
}
const pt = (v) => isDom() && v.test(getPlatform().toLowerCase());
const isTouchDevice = () => isDom() && !!navigator.maxTouchPoints;
const isMac = () => pt(/^mac/) && !isTouchDevice();
const isApple = () => pt(/mac|iphone|ipad|ipod/i);
const isIos = () => isApple() && !isMac();
const LOCK_CLASSNAME = "data-melt-scroll-lock";
function assignStyle(el, style) {
  if (!el)
    return;
  const previousStyle = el.style.cssText;
  Object.assign(el.style, style);
  return () => {
    el.style.cssText = previousStyle;
  };
}
function setCSSProperty(el, property, value) {
  if (!el)
    return;
  const previousValue = el.style.getPropertyValue(property);
  el.style.setProperty(property, value);
  return () => {
    if (previousValue) {
      el.style.setProperty(property, previousValue);
    } else {
      el.style.removeProperty(property);
    }
  };
}
function getPaddingProperty(documentElement) {
  const documentLeft = documentElement.getBoundingClientRect().left;
  const scrollbarX = Math.round(documentLeft) + documentElement.scrollLeft;
  return scrollbarX ? "paddingLeft" : "paddingRight";
}
function removeScroll(_document) {
  const doc = document;
  const win = doc.defaultView ?? window;
  const { documentElement, body } = doc;
  const locked = body.hasAttribute(LOCK_CLASSNAME);
  if (locked)
    return noop;
  body.setAttribute(LOCK_CLASSNAME, "");
  const scrollbarWidth = win.innerWidth - documentElement.clientWidth;
  const setScrollbarWidthProperty = () => setCSSProperty(documentElement, "--scrollbar-width", `${scrollbarWidth}px`);
  const paddingProperty = getPaddingProperty(documentElement);
  const scrollbarSidePadding = win.getComputedStyle(body)[paddingProperty];
  const setStyle = () => assignStyle(body, {
    overflow: "hidden",
    [paddingProperty]: `calc(${scrollbarSidePadding} + ${scrollbarWidth}px)`
  });
  const setIOSStyle = () => {
    const { scrollX, scrollY, visualViewport } = win;
    const offsetLeft = visualViewport?.offsetLeft ?? 0;
    const offsetTop = visualViewport?.offsetTop ?? 0;
    const restoreStyle = assignStyle(body, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(scrollY - Math.floor(offsetTop))}px`,
      left: `${-(scrollX - Math.floor(offsetLeft))}px`,
      right: "0",
      [paddingProperty]: `calc(${scrollbarSidePadding} + ${scrollbarWidth}px)`
    });
    return () => {
      restoreStyle?.();
      win.scrollTo(scrollX, scrollY);
    };
  };
  const cleanups = [setScrollbarWidthProperty(), isIos() ? setIOSStyle() : setStyle()];
  return () => {
    cleanups.forEach((fn) => fn?.());
    body.removeAttribute(LOCK_CLASSNAME);
  };
}
function derivedVisible(obj) {
  const { open, forceVisible, activeTrigger } = obj;
  return derived([open, forceVisible, activeTrigger], ([$open, $forceVisible, $activeTrigger]) => ($open || $forceVisible) && $activeTrigger !== null);
}
function effect(stores, fn) {
  let cb = void 0;
  const destroy = derived(stores, (stores2) => {
    cb?.();
    cb = fn(stores2);
  }).subscribe(noop);
  const unsub = () => {
    destroy();
    cb?.();
  };
  safeOnDestroy(unsub);
  return unsub;
}
function toWritableStores(properties) {
  const result = {};
  Object.keys(properties).forEach((key) => {
    const propertyKey = key;
    const value = properties[propertyKey];
    result[propertyKey] = withGet(writable(value));
  });
  return result;
}
function handleRovingFocus(nextElement) {
  if (!isBrowser$1)
    return;
  sleep(1).then(() => {
    const currentFocusedElement = document.activeElement;
    if (!isHTMLElement(currentFocusedElement) || currentFocusedElement === nextElement)
      return;
    currentFocusedElement.tabIndex = -1;
    if (nextElement) {
      nextElement.tabIndex = 0;
      nextElement.focus();
    }
  });
}
const ignoredKeys = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta", "CapsLock", "NumLock"]);
const defaults$3 = {
  onMatch: handleRovingFocus,
  getCurrentItem: () => document.activeElement
};
function createTypeaheadSearch(args = {}) {
  const withDefaults = { ...defaults$3, ...args };
  const typed = withGet(writable([]));
  const resetTyped = debounce(() => {
    typed.update(() => []);
  });
  const handleTypeaheadSearch = (key, items) => {
    if (ignoredKeys.has(key))
      return;
    const currentItem = withDefaults.getCurrentItem();
    const $typed = get_store_value(typed);
    if (!Array.isArray($typed)) {
      return;
    }
    $typed.push(key.toLowerCase());
    typed.set($typed);
    const candidateItems = items.filter((item) => {
      if (item.getAttribute("disabled") === "true" || item.getAttribute("aria-disabled") === "true" || item.hasAttribute("data-disabled")) {
        return false;
      }
      return true;
    });
    const isRepeated = $typed.length > 1 && $typed.every((char) => char === $typed[0]);
    const normalizeSearch = isRepeated ? $typed[0] : $typed.join("");
    const currentItemIndex = isHTMLElement(currentItem) ? candidateItems.indexOf(currentItem) : -1;
    let wrappedItems = wrapArray(candidateItems, Math.max(currentItemIndex, 0));
    const excludeCurrentItem = normalizeSearch.length === 1;
    if (excludeCurrentItem) {
      wrappedItems = wrappedItems.filter((v) => v !== currentItem);
    }
    const nextItem = wrappedItems.find((item) => item?.innerText && item.innerText.toLowerCase().startsWith(normalizeSearch.toLowerCase()));
    if (isHTMLElement(nextItem) && nextItem !== currentItem) {
      withDefaults.onMatch(nextItem);
    }
    resetTyped();
  };
  return {
    typed,
    resetTyped,
    handleTypeaheadSearch
  };
}
function getPortalParent(node) {
  let parent = node.parentElement;
  while (isHTMLElement(parent) && !parent.hasAttribute("data-portal")) {
    parent = parent.parentElement;
  }
  return parent || "body";
}
function getPortalDestination(node, portalProp) {
  if (portalProp !== void 0)
    return portalProp;
  const portalParent = getPortalParent(node);
  if (portalParent === "body")
    return document.body;
  return null;
}
function createClickOutsideIgnore(meltId) {
  return (e) => {
    const target = e.target;
    const triggerEl = getElementByMeltId(meltId);
    if (!triggerEl || !isElement(target))
      return false;
    const id = triggerEl.id;
    if (isHTMLLabelElement(target) && id === target.htmlFor) {
      return true;
    }
    if (target.closest(`label[for="${id}"]`)) {
      return true;
    }
    return false;
  };
}
readable(void 0, (set) => {
  function clicked(event) {
    set(event);
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "pointerup", clicked, {
    passive: false,
    capture: true
  });
  return unsubscribe;
});
const documentEscapeKeyStore = readable(void 0, (set) => {
  function keydown(event) {
    if (event && event.key === kbd.ESCAPE) {
      set(event);
    }
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "keydown", keydown, {
    passive: false
  });
  return unsubscribe;
});
const useEscapeKeydown = (node, config = {}) => {
  let unsub = noop;
  function update2(config2 = {}) {
    unsub();
    const options = { enabled: true, ...config2 };
    const enabled = isReadable(options.enabled) ? options.enabled : readable(options.enabled);
    unsub = executeCallbacks(
      // Handle escape keydowns
      documentEscapeKeyStore.subscribe((e) => {
        if (!e || !get_store_value(enabled))
          return;
        const target = e.target;
        if (!isHTMLElement(target) || target.closest("[data-escapee]") !== node) {
          return;
        }
        e.preventDefault();
        if (options.ignore) {
          if (isFunction(options.ignore)) {
            if (options.ignore(e))
              return;
          } else if (Array.isArray(options.ignore)) {
            if (options.ignore.length > 0 && options.ignore.some((ignoreEl) => {
              return ignoreEl && target === ignoreEl;
            }))
              return;
          }
        }
        options.handler?.(e);
      }),
      effect(enabled, ($enabled) => {
        if ($enabled) {
          node.dataset.escapee = "";
        } else {
          delete node.dataset.escapee;
        }
      })
    );
  }
  update2(config);
  return {
    update: update2,
    destroy() {
      node.removeAttribute("data-escapee");
      unsub();
    }
  };
};
const defaultConfig$1 = {
  strategy: "absolute",
  placement: "top",
  gutter: 5,
  flip: true,
  sameWidth: false,
  overflowPadding: 8
};
const ARROW_TRANSFORM = {
  bottom: "rotate(45deg)",
  left: "rotate(135deg)",
  top: "rotate(225deg)",
  right: "rotate(315deg)"
};
function useFloating(reference, floating, opts = {}) {
  if (!floating || !reference || opts === null)
    return {
      destroy: noop
    };
  const options = { ...defaultConfig$1, ...opts };
  const arrowEl = floating.querySelector("[data-arrow=true]");
  const middleware = [];
  if (options.flip) {
    middleware.push(flip({
      boundary: options.boundary,
      padding: options.overflowPadding
    }));
  }
  const arrowOffset = isHTMLElement(arrowEl) ? arrowEl.offsetHeight / 2 : 0;
  if (options.gutter || options.offset) {
    const data = options.gutter ? { mainAxis: options.gutter } : options.offset;
    if (data?.mainAxis != null) {
      data.mainAxis += arrowOffset;
    }
    middleware.push(offset(data));
  }
  middleware.push(shift({
    boundary: options.boundary,
    crossAxis: options.overlap,
    padding: options.overflowPadding
  }));
  if (arrowEl) {
    middleware.push(arrow({ element: arrowEl, padding: 8 }));
  }
  middleware.push(size({
    padding: options.overflowPadding,
    apply({ rects, availableHeight, availableWidth }) {
      if (options.sameWidth) {
        Object.assign(floating.style, {
          width: `${Math.round(rects.reference.width)}px`,
          minWidth: "unset"
        });
      }
      if (options.fitViewport) {
        Object.assign(floating.style, {
          maxWidth: `${availableWidth}px`,
          maxHeight: `${availableHeight}px`
        });
      }
    }
  }));
  function compute() {
    if (!reference || !floating)
      return;
    if (isHTMLElement(reference) && !reference.ownerDocument.documentElement.contains(reference))
      return;
    const { placement, strategy } = options;
    computePosition(reference, floating, {
      placement,
      middleware,
      strategy
    }).then((data) => {
      const x = Math.round(data.x);
      const y = Math.round(data.y);
      const [side, align] = getSideAndAlignFromPlacement(data.placement);
      floating.setAttribute("data-side", side);
      floating.setAttribute("data-align", align);
      Object.assign(floating.style, {
        position: options.strategy,
        top: `${y}px`,
        left: `${x}px`
      });
      if (isHTMLElement(arrowEl) && data.middlewareData.arrow) {
        const { x: x2, y: y2 } = data.middlewareData.arrow;
        const dir = data.placement.split("-")[0];
        arrowEl.setAttribute("data-side", dir);
        Object.assign(arrowEl.style, {
          position: "absolute",
          left: x2 != null ? `${x2}px` : "",
          top: y2 != null ? `${y2}px` : "",
          [dir]: `calc(100% - ${arrowOffset}px)`,
          transform: ARROW_TRANSFORM[dir],
          backgroundColor: "inherit",
          zIndex: "inherit"
        });
      }
      return data;
    });
  }
  Object.assign(floating.style, {
    position: options.strategy
  });
  return {
    destroy: autoUpdate(reference, floating, compute)
  };
}
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
function createFocusTrap(config = {}) {
  let trap;
  const { immediate, ...focusTrapOptions } = config;
  const hasFocus = writable(false);
  const isPaused = writable(false);
  const activate = (opts) => trap?.activate(opts);
  const deactivate = (opts) => {
    trap?.deactivate(opts);
  };
  const pause = () => {
    if (trap) {
      trap.pause();
      isPaused.set(true);
    }
  };
  const unpause = () => {
    if (trap) {
      trap.unpause();
      isPaused.set(false);
    }
  };
  const useFocusTrap = (node) => {
    trap = createFocusTrap$1(node, {
      ...focusTrapOptions,
      onActivate() {
        hasFocus.set(true);
        config.onActivate?.();
      },
      onDeactivate() {
        hasFocus.set(false);
        config.onDeactivate?.();
      }
    });
    if (immediate) {
      activate();
    }
    return {
      destroy() {
        deactivate();
        trap = void 0;
      }
    };
  };
  return {
    useFocusTrap,
    hasFocus: readonly(hasFocus),
    isPaused: readonly(isPaused),
    activate,
    deactivate,
    pause,
    unpause
  };
}
const visibleModals = [];
const useModal = (node, config) => {
  let unsubInteractOutside = noop;
  function removeNodeFromVisibleModals() {
    const index = visibleModals.indexOf(node);
    if (index >= 0) {
      visibleModals.splice(index, 1);
    }
  }
  function update2(config2) {
    unsubInteractOutside();
    const { open, onClose, shouldCloseOnInteractOutside, closeOnInteractOutside } = config2;
    sleep(100).then(() => {
      if (open) {
        visibleModals.push(node);
      } else {
        removeNodeFromVisibleModals();
      }
    });
    function isLastModal() {
      return last(visibleModals) === node;
    }
    function closeModal() {
      if (isLastModal() && onClose) {
        onClose();
        removeNodeFromVisibleModals();
      }
    }
    function onInteractOutsideStart(e) {
      const target = e.target;
      if (!isElement(target))
        return;
      if (target && isLastModal()) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
    function onInteractOutside(e) {
      if (shouldCloseOnInteractOutside?.(e) && isLastModal()) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        closeModal();
      }
    }
    unsubInteractOutside = useInteractOutside(node, {
      onInteractOutsideStart,
      onInteractOutside: closeOnInteractOutside ? onInteractOutside : void 0,
      enabled: open
    }).destroy;
  }
  update2(config);
  return {
    update: update2,
    destroy() {
      removeNodeFromVisibleModals();
      unsubInteractOutside();
    }
  };
};
const defaultConfig = {
  floating: {},
  focusTrap: {},
  modal: {},
  escapeKeydown: {},
  portal: "body"
};
const usePopper = (popperElement, args) => {
  popperElement.dataset.escapee = "";
  const { anchorElement, open, options } = args;
  if (!anchorElement || !open || !options) {
    return { destroy: noop };
  }
  const opts = { ...defaultConfig, ...options };
  const callbacks = [];
  if (opts.portal !== null) {
    callbacks.push(usePortal(popperElement, opts.portal).destroy);
  }
  callbacks.push(useFloating(anchorElement, popperElement, opts.floating).destroy);
  if (opts.focusTrap !== null) {
    const { useFocusTrap } = createFocusTrap({
      immediate: true,
      escapeDeactivates: false,
      allowOutsideClick: true,
      returnFocusOnDeactivate: false,
      fallbackFocus: popperElement,
      ...opts.focusTrap
    });
    callbacks.push(useFocusTrap(popperElement).destroy);
  }
  if (opts.modal !== null) {
    callbacks.push(useModal(popperElement, {
      onClose: () => {
        if (isHTMLElement(anchorElement)) {
          open.set(false);
          anchorElement.focus();
        }
      },
      shouldCloseOnInteractOutside: (e) => {
        if (e.defaultPrevented)
          return false;
        if (isHTMLElement(anchorElement) && anchorElement.contains(e.target)) {
          return false;
        }
        return true;
      },
      ...opts.modal
    }).destroy);
  }
  if (opts.escapeKeydown !== null) {
    callbacks.push(useEscapeKeydown(popperElement, {
      enabled: open,
      handler: () => {
        open.set(false);
      },
      ...opts.escapeKeydown
    }).destroy);
  }
  const unsubscribe = executeCallbacks(...callbacks);
  return {
    destroy() {
      unsubscribe();
    }
  };
};
const usePortal = (el, target = "body") => {
  let targetEl;
  if (!isHTMLElement(target) && typeof target !== "string") {
    return {
      destroy: noop
    };
  }
  async function update2(newTarget) {
    target = newTarget;
    if (typeof target === "string") {
      targetEl = document.querySelector(target);
      if (targetEl === null) {
        await tick();
        targetEl = document.querySelector(target);
      }
      if (targetEl === null) {
        throw new Error(`No element found matching css selector: "${target}"`);
      }
    } else if (target instanceof HTMLElement) {
      targetEl = target;
    } else {
      throw new TypeError(`Unknown portal target type: ${target === null ? "null" : typeof target}. Allowed types: string (CSS selector) or HTMLElement.`);
    }
    el.dataset.portal = "";
    targetEl.appendChild(el);
    el.hidden = false;
  }
  function destroy() {
    el.remove();
  }
  update2(target);
  return {
    update: update2,
    destroy
  };
};
const useInteractOutside = (node, config) => {
  let unsub = noop;
  let unsubClick = noop;
  let isPointerDown = false;
  let isPointerDownInside = false;
  let ignoreEmulatedMouseEvents = false;
  function update2(config2) {
    unsub();
    unsubClick();
    const { onInteractOutside, onInteractOutsideStart, enabled } = config2;
    if (!enabled)
      return;
    function onPointerDown(e) {
      if (onInteractOutside && isValidEvent(e, node)) {
        onInteractOutsideStart?.(e);
      }
      const target = e.target;
      if (isElement(target) && isOrContainsTarget(node, target)) {
        isPointerDownInside = true;
      }
      isPointerDown = true;
    }
    function triggerInteractOutside(e) {
      onInteractOutside?.(e);
    }
    const documentObj = getOwnerDocument(node);
    if (typeof PointerEvent !== "undefined") {
      const onPointerUp = (e) => {
        unsubClick();
        const handler = (e2) => {
          if (shouldTriggerInteractOutside(e2)) {
            triggerInteractOutside(e2);
          }
          resetPointerState();
        };
        if (e.pointerType === "touch") {
          unsubClick = addEventListener(documentObj, "click", handler, {
            capture: true,
            once: true
          });
          return;
        }
        handler(e);
      };
      unsub = executeCallbacks(addEventListener(documentObj, "pointerdown", onPointerDown, true), addEventListener(documentObj, "pointerup", onPointerUp, true));
    } else {
      const onMouseUp = (e) => {
        if (ignoreEmulatedMouseEvents) {
          ignoreEmulatedMouseEvents = false;
        } else if (shouldTriggerInteractOutside(e)) {
          triggerInteractOutside(e);
        }
        resetPointerState();
      };
      const onTouchEnd = (e) => {
        ignoreEmulatedMouseEvents = true;
        if (shouldTriggerInteractOutside(e)) {
          triggerInteractOutside(e);
        }
        resetPointerState();
      };
      unsub = executeCallbacks(addEventListener(documentObj, "mousedown", onPointerDown, true), addEventListener(documentObj, "mouseup", onMouseUp, true), addEventListener(documentObj, "touchstart", onPointerDown, true), addEventListener(documentObj, "touchend", onTouchEnd, true));
    }
  }
  function shouldTriggerInteractOutside(e) {
    if (isPointerDown && !isPointerDownInside && isValidEvent(e, node)) {
      return true;
    }
    return false;
  }
  function resetPointerState() {
    isPointerDown = false;
    isPointerDownInside = false;
  }
  update2(config);
  return {
    update: update2,
    destroy() {
      unsub();
      unsubClick();
    }
  };
};
function isValidEvent(e, node) {
  if ("button" in e && e.button > 0)
    return false;
  const target = e.target;
  if (!isElement(target))
    return false;
  const ownerDocument = target.ownerDocument;
  if (!ownerDocument || !ownerDocument.documentElement.contains(target)) {
    return false;
  }
  return node && !isOrContainsTarget(node, target);
}
function isOrContainsTarget(node, target) {
  return node === target || node.contains(target);
}
function getOwnerDocument(el) {
  return el?.ownerDocument ?? document;
}
function toReadableStores(properties) {
  const result = {};
  Object.keys(properties).forEach((key) => {
    const propertyKey = key;
    const value = properties[propertyKey];
    if (isReadable(value)) {
      result[propertyKey] = withGet(value);
    } else {
      result[propertyKey] = withGet(readable(value));
    }
  });
  return result;
}
const defaults$2 = {
  prefix: "",
  disabled: readable(false),
  required: readable(false),
  name: readable(void 0)
};
function createHiddenInput(props) {
  const withDefaults = {
    ...defaults$2,
    ...removeUndefined$1(props)
  };
  const { name: elName } = createElHelpers(withDefaults.prefix);
  const { value, name, disabled, required } = toReadableStores(omit(withDefaults, "prefix"));
  const nameStore = name;
  const hiddenInput = makeElement(elName("hidden-input"), {
    stores: [value, nameStore, disabled, required],
    returned: ([$value, $name, $disabled, $required]) => {
      return {
        name: $name,
        value: $value?.toString(),
        "aria-hidden": "true",
        hidden: true,
        disabled: $disabled,
        required: $required,
        tabIndex: -1,
        style: styleToString({
          position: "absolute",
          opacity: 0,
          "pointer-events": "none",
          margin: 0,
          transform: "translateX(-100%)"
        })
      };
    },
    action: (node) => {
      const unsub = value.subscribe((newValue) => {
        node.value = newValue;
        node.dispatchEvent(new Event("change", { bubbles: true }));
      });
      return {
        destroy: unsub
      };
    }
  });
  return hiddenInput;
}
function createLabel() {
  const root = makeElement("label", {
    action: (node) => {
      const mouseDown = addMeltEventListener(node, "mousedown", (e) => {
        if (!e.defaultPrevented && e.detail > 1) {
          e.preventDefault();
        }
      });
      return {
        destroy: mouseDown
      };
    }
  });
  return {
    elements: {
      root
    }
  };
}
const INTERACTION_KEYS = [kbd.ARROW_LEFT, kbd.ESCAPE, kbd.ARROW_RIGHT, kbd.SHIFT, kbd.CAPS_LOCK, kbd.CONTROL, kbd.ALT, kbd.META, kbd.ENTER, kbd.F1, kbd.F2, kbd.F3, kbd.F4, kbd.F5, kbd.F6, kbd.F7, kbd.F8, kbd.F9, kbd.F10, kbd.F11, kbd.F12];
const defaults$1 = {
  positioning: {
    placement: "bottom",
    sameWidth: true
  },
  scrollAlignment: "nearest",
  loop: true,
  defaultOpen: false,
  closeOnOutsideClick: true,
  preventScroll: true,
  closeOnEscape: true,
  forceVisible: false,
  portal: void 0,
  builder: "listbox",
  disabled: false,
  required: false,
  name: void 0,
  typeahead: true,
  highlightOnHover: true,
  onOutsideClick: void 0
};
const listboxIdParts = ["trigger", "menu", "label"];
function createListbox(props) {
  const withDefaults = { ...defaults$1, ...props };
  const activeTrigger = withGet(writable(null));
  const highlightedItem = withGet(writable(null));
  const selectedWritable = withDefaults.selected ?? writable(withDefaults.defaultSelected);
  const selected = overridable(selectedWritable, withDefaults?.onSelectedChange);
  const highlighted = derived(highlightedItem, ($highlightedItem) => $highlightedItem ? getOptionProps($highlightedItem) : void 0);
  const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
  const open = overridable(openWritable, withDefaults?.onOpenChange);
  const options = toWritableStores({
    ...omit(withDefaults, "open", "defaultOpen", "builder", "ids"),
    multiple: withDefaults.multiple ?? false
  });
  const { scrollAlignment, loop, closeOnOutsideClick, closeOnEscape, preventScroll, portal, forceVisible, positioning, multiple, arrowSize, disabled, required, typeahead, name: nameProp, highlightOnHover, onOutsideClick } = options;
  const { name, selector } = createElHelpers(withDefaults.builder);
  const ids = toWritableStores({ ...generateIds(listboxIdParts), ...withDefaults.ids });
  const { handleTypeaheadSearch } = createTypeaheadSearch({
    onMatch: (element) => {
      highlightedItem.set(element);
      element.scrollIntoView({ block: scrollAlignment.get() });
    },
    getCurrentItem() {
      return highlightedItem.get();
    }
  });
  function getOptionProps(el) {
    const value = el.getAttribute("data-value");
    const label2 = el.getAttribute("data-label");
    const disabled2 = el.hasAttribute("data-disabled");
    return {
      value: value ? JSON.parse(value) : value,
      label: label2 ?? el.textContent ?? void 0,
      disabled: disabled2 ? true : false
    };
  }
  const setOption = (newOption) => {
    selected.update(($option) => {
      const $multiple = multiple.get();
      if ($multiple) {
        const optionArr = Array.isArray($option) ? [...$option] : [];
        return toggle(newOption, optionArr, (itemA, itemB) => dequal(itemA.value, itemB.value));
      }
      return newOption;
    });
  };
  function selectItem(item) {
    const props2 = getOptionProps(item);
    setOption(props2);
  }
  async function openMenu() {
    open.set(true);
    const triggerEl = document.getElementById(ids.trigger.get());
    if (!triggerEl)
      return;
    if (triggerEl !== activeTrigger.get())
      activeTrigger.set(triggerEl);
    await tick();
    const menuElement = document.getElementById(ids.menu.get());
    if (!isHTMLElement(menuElement))
      return;
    const selectedItem = menuElement.querySelector("[aria-selected=true]");
    if (!isHTMLElement(selectedItem))
      return;
    highlightedItem.set(selectedItem);
  }
  function closeMenu() {
    open.set(false);
    highlightedItem.set(null);
  }
  const isVisible = derivedVisible({ open, forceVisible, activeTrigger });
  const isSelected = derived([selected], ([$selected]) => {
    return (value) => {
      if (Array.isArray($selected)) {
        return $selected.some((o) => dequal(o.value, value));
      }
      if (isObject(value)) {
        return dequal($selected?.value, stripValues(value, void 0));
      }
      return dequal($selected?.value, value);
    };
  });
  const isHighlighted = derived([highlighted], ([$value]) => {
    return (item) => {
      return dequal($value?.value, item);
    };
  });
  const trigger = makeElement(name("trigger"), {
    stores: [open, highlightedItem, disabled, ids.menu, ids.trigger, ids.label],
    returned: ([$open, $highlightedItem, $disabled, $menuId, $triggerId, $labelId]) => {
      return {
        "aria-activedescendant": $highlightedItem?.id,
        "aria-autocomplete": "list",
        "aria-controls": $menuId,
        "aria-expanded": $open,
        "aria-labelledby": $labelId,
        // autocomplete: 'off',
        id: $triggerId,
        role: "combobox",
        disabled: disabledAttr($disabled),
        type: withDefaults.builder === "select" ? "button" : void 0
      };
    },
    action: (node) => {
      const isInput = isHTMLInputElement(node);
      const unsubscribe = executeCallbacks(
        addMeltEventListener(node, "click", () => {
          node.focus();
          const $open = open.get();
          if ($open) {
            closeMenu();
          } else {
            openMenu();
          }
        }),
        // Handle all input key events including typing, meta, and navigation.
        addMeltEventListener(node, "keydown", (e) => {
          const $open = open.get();
          if (!$open) {
            if (INTERACTION_KEYS.includes(e.key)) {
              return;
            }
            if (e.key === kbd.TAB) {
              return;
            }
            if (e.key === kbd.BACKSPACE && isInput && node.value === "") {
              return;
            }
            if (e.key === kbd.SPACE && isHTMLButtonElement(node)) {
              return;
            }
            openMenu();
            tick().then(() => {
              const $selectedItem = selected.get();
              if ($selectedItem)
                return;
              const menuEl = document.getElementById(ids.menu.get());
              if (!isHTMLElement(menuEl))
                return;
              const enabledItems = Array.from(menuEl.querySelectorAll(`${selector("item")}:not([data-disabled]):not([data-hidden])`)).filter((item) => isHTMLElement(item));
              if (!enabledItems.length)
                return;
              if (e.key === kbd.ARROW_DOWN) {
                highlightedItem.set(enabledItems[0]);
                enabledItems[0].scrollIntoView({ block: scrollAlignment.get() });
              } else if (e.key === kbd.ARROW_UP) {
                highlightedItem.set(last(enabledItems));
                last(enabledItems).scrollIntoView({ block: scrollAlignment.get() });
              }
            });
          }
          if (e.key === kbd.TAB) {
            closeMenu();
            return;
          }
          if (e.key === kbd.ENTER && !e.isComposing || e.key === kbd.SPACE && isHTMLButtonElement(node)) {
            e.preventDefault();
            const $highlightedItem = highlightedItem.get();
            if ($highlightedItem) {
              selectItem($highlightedItem);
            }
            if (!multiple.get()) {
              closeMenu();
            }
          }
          if (e.key === kbd.ARROW_UP && e.altKey) {
            closeMenu();
          }
          if (FIRST_LAST_KEYS.includes(e.key)) {
            e.preventDefault();
            const menuElement = document.getElementById(ids.menu.get());
            if (!isHTMLElement(menuElement))
              return;
            const itemElements = getOptions(menuElement);
            if (!itemElements.length)
              return;
            const candidateNodes = itemElements.filter((opt) => !isElementDisabled(opt) && opt.dataset.hidden === void 0);
            const $currentItem = highlightedItem.get();
            const currentIndex = $currentItem ? candidateNodes.indexOf($currentItem) : -1;
            const $loop = loop.get();
            const $scrollAlignment = scrollAlignment.get();
            let nextItem;
            switch (e.key) {
              case kbd.ARROW_DOWN:
                nextItem = next(candidateNodes, currentIndex, $loop);
                break;
              case kbd.ARROW_UP:
                nextItem = prev(candidateNodes, currentIndex, $loop);
                break;
              case kbd.PAGE_DOWN:
                nextItem = forward(candidateNodes, currentIndex, 10, $loop);
                break;
              case kbd.PAGE_UP:
                nextItem = back(candidateNodes, currentIndex, 10, $loop);
                break;
              case kbd.HOME:
                nextItem = candidateNodes[0];
                break;
              case kbd.END:
                nextItem = last(candidateNodes);
                break;
              default:
                return;
            }
            highlightedItem.set(nextItem);
            nextItem?.scrollIntoView({ block: $scrollAlignment });
          } else if (typeahead.get()) {
            const menuEl = document.getElementById(ids.menu.get());
            if (!isHTMLElement(menuEl))
              return;
            handleTypeaheadSearch(e.key, getOptions(menuEl));
          }
        })
      );
      let unsubEscapeKeydown = noop;
      const escape2 = useEscapeKeydown(node, {
        handler: closeMenu,
        enabled: derived([open, closeOnEscape], ([$open, $closeOnEscape]) => {
          return $open && $closeOnEscape;
        })
      });
      if (escape2 && escape2.destroy) {
        unsubEscapeKeydown = escape2.destroy;
      }
      return {
        destroy() {
          unsubscribe();
          unsubEscapeKeydown();
        }
      };
    }
  });
  const menu = makeElement(name("menu"), {
    stores: [isVisible, ids.menu],
    returned: ([$isVisible, $menuId]) => {
      return {
        hidden: $isVisible ? void 0 : true,
        id: $menuId,
        role: "listbox",
        style: styleToString({ display: $isVisible ? void 0 : "none" })
      };
    },
    action: (node) => {
      let unsubPopper = noop;
      const unsubscribe = executeCallbacks(
        // Bind the popper portal to the input element.
        effect([isVisible, portal, closeOnOutsideClick, positioning, activeTrigger], ([$isVisible, $portal, $closeOnOutsideClick, $positioning, $activeTrigger]) => {
          unsubPopper();
          if (!$isVisible || !$activeTrigger)
            return;
          tick().then(() => {
            unsubPopper();
            const ignoreHandler = createClickOutsideIgnore(ids.trigger.get());
            unsubPopper = usePopper(node, {
              anchorElement: $activeTrigger,
              open,
              options: {
                floating: $positioning,
                focusTrap: null,
                modal: {
                  closeOnInteractOutside: $closeOnOutsideClick,
                  onClose: closeMenu,
                  open: $isVisible,
                  shouldCloseOnInteractOutside: (e) => {
                    onOutsideClick.get()?.(e);
                    if (e.defaultPrevented)
                      return false;
                    const target = e.target;
                    if (!isElement(target))
                      return false;
                    if (target === $activeTrigger || $activeTrigger.contains(target)) {
                      return false;
                    }
                    if (ignoreHandler(e))
                      return false;
                    return true;
                  }
                },
                escapeKeydown: null,
                portal: getPortalDestination(node, $portal)
              }
            }).destroy;
          });
        })
      );
      return {
        destroy: () => {
          unsubscribe();
          unsubPopper();
        }
      };
    }
  });
  const { elements: { root: labelBuilder } } = createLabel();
  const { action: labelAction } = get_store_value(labelBuilder);
  const label = makeElement(name("label"), {
    stores: [ids.label, ids.trigger],
    returned: ([$labelId, $triggerId]) => {
      return {
        id: $labelId,
        for: $triggerId
      };
    },
    action: labelAction
  });
  const option = makeElement(name("option"), {
    stores: [isSelected],
    returned: ([$isSelected]) => (props2) => {
      const selected2 = $isSelected(props2.value);
      return {
        "data-value": JSON.stringify(props2.value),
        "data-label": props2.label,
        "data-disabled": disabledAttr(props2.disabled),
        "aria-disabled": props2.disabled ? true : void 0,
        "aria-selected": selected2,
        "data-selected": selected2 ? "" : void 0,
        id: generateId(),
        role: "option"
      };
    },
    action: (node) => {
      const unsubscribe = executeCallbacks(addMeltEventListener(node, "click", (e) => {
        if (isElementDisabled(node)) {
          e.preventDefault();
          return;
        }
        selectItem(node);
        if (!multiple.get()) {
          closeMenu();
        }
      }), effect(highlightOnHover, ($highlightOnHover) => {
        if (!$highlightOnHover)
          return;
        const unsub = executeCallbacks(addMeltEventListener(node, "mouseover", () => {
          highlightedItem.set(node);
        }), addMeltEventListener(node, "mouseleave", () => {
          highlightedItem.set(null);
        }));
        return unsub;
      }));
      return { destroy: unsubscribe };
    }
  });
  const group = makeElement(name("group"), {
    returned: () => {
      return (groupId) => ({
        role: "group",
        "aria-labelledby": groupId
      });
    }
  });
  const groupLabel = makeElement(name("group-label"), {
    returned: () => {
      return (groupId) => ({
        id: groupId
      });
    }
  });
  const hiddenInput = createHiddenInput({
    value: derived([selected], ([$selected]) => {
      const value = Array.isArray($selected) ? $selected.map((o) => o.value) : $selected?.value;
      return typeof value === "string" ? value : JSON.stringify(value);
    }),
    name: readonly(nameProp),
    required,
    prefix: withDefaults.builder
  });
  const arrow2 = makeElement(name("arrow"), {
    stores: arrowSize,
    returned: ($arrowSize) => ({
      "data-arrow": true,
      style: styleToString({
        position: "absolute",
        width: `var(--arrow-size, ${$arrowSize}px)`,
        height: `var(--arrow-size, ${$arrowSize}px)`
      })
    })
  });
  safeOnMount(() => {
    if (!isBrowser$1)
      return;
    const menuEl = document.getElementById(ids.menu.get());
    const triggerEl = document.getElementById(ids.trigger.get());
    if (triggerEl) {
      activeTrigger.set(triggerEl);
    }
    if (!menuEl)
      return;
    const selectedEl = menuEl.querySelector("[data-selected]");
    if (!isHTMLElement(selectedEl))
      return;
  });
  effect([highlightedItem], ([$highlightedItem]) => {
    if (!isBrowser$1)
      return;
    const menuElement = document.getElementById(ids.menu.get());
    if (!isHTMLElement(menuElement))
      return;
    getOptions(menuElement).forEach((node) => {
      if (node === $highlightedItem) {
        addHighlight(node);
      } else {
        removeHighlight(node);
      }
    });
  });
  effect([open], ([$open]) => {
    if (!isBrowser$1)
      return;
    let unsubScroll = noop;
    if (preventScroll.get() && $open) {
      unsubScroll = removeScroll();
    }
    return () => {
      unsubScroll();
    };
  });
  return {
    ids,
    elements: {
      trigger,
      group,
      option,
      menu,
      groupLabel,
      label,
      hiddenInput,
      arrow: arrow2
    },
    states: {
      open,
      selected,
      highlighted,
      highlightedItem
    },
    helpers: {
      isSelected,
      isHighlighted,
      closeMenu
    },
    options
  };
}
const defaults = {
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  preventDeselect: false,
  numberOfMonths: 1,
  pagedNavigation: false,
  weekStartsOn: 0,
  fixedWeeks: false,
  calendarLabel: "Event Date",
  locale: "en",
  minValue: void 0,
  maxValue: void 0,
  disabled: false,
  readonly: false,
  weekdayFormat: "narrow"
};
({
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  positioning: {
    placement: "bottom"
  },
  closeOnEscape: true,
  closeOnOutsideClick: true,
  onOutsideClick: void 0,
  preventScroll: false,
  forceVisible: false,
  locale: "en",
  granularity: void 0,
  disabled: false,
  readonly: false,
  minValue: void 0,
  maxValue: void 0,
  weekdayFormat: "narrow",
  ...omit(defaults, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat")
});
function createSelect(props) {
  const listbox = createListbox({ ...props, builder: "select" });
  const selectedLabel = derived(listbox.states.selected, ($selected) => {
    if (Array.isArray($selected)) {
      return $selected.map((o) => o.label).join(", ");
    }
    return $selected?.label ?? "";
  });
  return {
    ...listbox,
    elements: {
      ...listbox.elements
    },
    states: {
      ...listbox.states,
      selectedLabel
    }
  };
}
function createBitAttrs(bit, parts) {
  const attrs = {};
  parts.forEach((part) => {
    attrs[part] = {
      [`data-${bit}-${part}`]: ""
    };
  });
  return (part) => attrs[part];
}
function createDispatcher() {
  const dispatch = createEventDispatcher();
  return (e) => {
    const { originalEvent } = e.detail;
    const { cancelable } = e;
    const type = originalEvent.type;
    const shouldContinue = dispatch(type, { originalEvent, currentTarget: originalEvent.currentTarget }, { cancelable });
    if (!shouldContinue) {
      e.preventDefault();
    }
  };
}
function removeUndefined(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (value !== void 0) {
      result[key] = value;
    }
  }
  return result;
}
function getOptionUpdater(options) {
  return function(key, value) {
    if (value === void 0)
      return;
    const store = options[key];
    if (store) {
      store.set(value);
    }
  };
}
function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((value, index) => value === arr2[index]);
}
function getAttrs(builders) {
  const attrs = {};
  builders.forEach((builder) => {
    Object.keys(builder).forEach((key) => {
      if (key !== "action") {
        attrs[key] = builder[key];
      }
    });
  });
  return attrs;
}
const Button$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "type", "builders", "el"]);
  let { href = void 0 } = $$props;
  let { type = void 0 } = $$props;
  let { builders = [] } = $$props;
  let { el = void 0 } = $$props;
  const attrs = { "data-button-root": "" };
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.builders === void 0 && $$bindings.builders && builders !== void 0) $$bindings.builders(builders);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  return `${builders && builders.length ? ` ${((tag) => {
    validate_dynamic_element(tag);
    return tag ? (() => {
      validate_void_dynamic_element(tag);
      return `<${href ? "a" : "button"}${spread(
        [
          {
            type: escape_attribute_value(href ? void 0 : type)
          },
          { href: escape_attribute_value(href) },
          { tabindex: "0" },
          escape_object(getAttrs(builders)),
          escape_object($$restProps),
          escape_object(attrs)
        ],
        {}
      )}${add_attribute("this", el, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}`;
    })() : "";
  })(href ? "a" : "button")}` : ` ${((tag) => {
    validate_dynamic_element(tag);
    return tag ? (() => {
      validate_void_dynamic_element(tag);
      return `<${href ? "a" : "button"}${spread(
        [
          {
            type: escape_attribute_value(href ? void 0 : type)
          },
          { href: escape_attribute_value(href) },
          { tabindex: "0" },
          escape_object($$restProps),
          escape_object(attrs)
        ],
        {}
      )}${add_attribute("this", el, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}`;
    })() : "";
  })(href ? "a" : "button")}`}`;
});
function getPositioningUpdater(store) {
  return (props = {}) => {
    return updatePositioning$1(store, props);
  };
}
function updatePositioning$1(store, props) {
  const defaultPositioningProps = {
    side: "bottom",
    align: "center",
    sideOffset: 0,
    alignOffset: 0,
    sameWidth: false,
    avoidCollisions: true,
    collisionPadding: 8,
    fitViewport: false,
    strategy: "absolute",
    overlap: false
  };
  const withDefaults = { ...defaultPositioningProps, ...props };
  store.update((prev2) => {
    return {
      ...prev2,
      placement: joinPlacement(withDefaults.side, withDefaults.align),
      offset: {
        ...prev2.offset,
        mainAxis: withDefaults.sideOffset,
        crossAxis: withDefaults.alignOffset
      },
      gutter: 0,
      sameWidth: withDefaults.sameWidth,
      flip: withDefaults.avoidCollisions,
      overflowPadding: withDefaults.collisionPadding,
      boundary: withDefaults.collisionBoundary,
      fitViewport: withDefaults.fitViewport,
      strategy: withDefaults.strategy,
      overlap: withDefaults.overlap
    };
  });
}
function joinPlacement(side, align) {
  if (align === "center")
    return side;
  return `${side}-${align}`;
}
function getSelectData() {
  const NAME = "select";
  const GROUP_NAME = "select-group";
  const ITEM_NAME = "select-item";
  const PARTS = [
    "arrow",
    "content",
    "group",
    "item",
    "indicator",
    "input",
    "label",
    "trigger",
    "value"
  ];
  return {
    NAME,
    GROUP_NAME,
    ITEM_NAME,
    PARTS
  };
}
function getCtx() {
  const { NAME } = getSelectData();
  return getContext(NAME);
}
function setCtx(props) {
  const { NAME, PARTS } = getSelectData();
  const getAttrs2 = createBitAttrs(NAME, PARTS);
  const select = {
    ...createSelect({ ...removeUndefined(props), forceVisible: true }),
    getAttrs: getAttrs2
  };
  setContext(NAME, select);
  return {
    ...select,
    updateOption: getOptionUpdater(select.options)
  };
}
function setItemCtx(value) {
  const { ITEM_NAME } = getSelectData();
  const select = getCtx();
  setContext(ITEM_NAME, value);
  return select;
}
function getItemIndicator() {
  const { ITEM_NAME } = getSelectData();
  const { helpers: { isSelected }, getAttrs: getAttrs2 } = getCtx();
  const value = getContext(ITEM_NAME);
  return {
    value,
    isSelected,
    getAttrs: getAttrs2
  };
}
function updatePositioning(props) {
  const defaultPlacement = {
    side: "bottom",
    align: "center",
    sameWidth: true
  };
  const withDefaults = { ...defaultPlacement, ...props };
  const { options: { positioning } } = getCtx();
  const updater = getPositioningUpdater(positioning);
  updater(withDefaults);
}
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $idValues, $$unsubscribe_idValues;
  let { required = void 0 } = $$props;
  let { disabled = void 0 } = $$props;
  let { preventScroll = void 0 } = $$props;
  let { loop = void 0 } = $$props;
  let { closeOnEscape = void 0 } = $$props;
  let { closeOnOutsideClick = void 0 } = $$props;
  let { portal = void 0 } = $$props;
  let { name = void 0 } = $$props;
  let { multiple = false } = $$props;
  let { selected = void 0 } = $$props;
  let { onSelectedChange = void 0 } = $$props;
  let { open = void 0 } = $$props;
  let { onOpenChange = void 0 } = $$props;
  let { items = [] } = $$props;
  let { onOutsideClick = void 0 } = $$props;
  let { typeahead = void 0 } = $$props;
  const { states: { open: localOpen, selected: localSelected }, updateOption, ids } = setCtx({
    required,
    disabled,
    preventScroll,
    loop,
    closeOnEscape,
    closeOnOutsideClick,
    portal,
    name,
    onOutsideClick,
    multiple,
    forceVisible: true,
    defaultSelected: Array.isArray(selected) ? [...selected] : selected,
    defaultOpen: open,
    onSelectedChange: ({ next: next2 }) => {
      if (Array.isArray(next2)) {
        if (!Array.isArray(selected) || !arraysAreEqual(selected, next2)) {
          onSelectedChange?.(next2);
          selected = next2;
          return next2;
        }
        return next2;
      }
      if (selected !== next2) {
        onSelectedChange?.(next2);
        selected = next2;
      }
      return next2;
    },
    onOpenChange: ({ next: next2 }) => {
      if (open !== next2) {
        onOpenChange?.(next2);
        open = next2;
      }
      return next2;
    },
    items,
    typeahead
  });
  const idValues = derived([ids.menu, ids.trigger, ids.label], ([$menuId, $triggerId, $labelId]) => ({
    menu: $menuId,
    trigger: $triggerId,
    label: $labelId
  }));
  validate_store(idValues, "idValues");
  $$unsubscribe_idValues = subscribe(idValues, (value) => $idValues = value);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.preventScroll === void 0 && $$bindings.preventScroll && preventScroll !== void 0) $$bindings.preventScroll(preventScroll);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0) $$bindings.loop(loop);
  if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0) $$bindings.closeOnEscape(closeOnEscape);
  if ($$props.closeOnOutsideClick === void 0 && $$bindings.closeOnOutsideClick && closeOnOutsideClick !== void 0) $$bindings.closeOnOutsideClick(closeOnOutsideClick);
  if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0) $$bindings.portal(portal);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0) $$bindings.multiple(multiple);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.onSelectedChange === void 0 && $$bindings.onSelectedChange && onSelectedChange !== void 0) $$bindings.onSelectedChange(onSelectedChange);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0) $$bindings.onOpenChange(onOpenChange);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.onOutsideClick === void 0 && $$bindings.onOutsideClick && onOutsideClick !== void 0) $$bindings.onOutsideClick(onOutsideClick);
  if ($$props.typeahead === void 0 && $$bindings.typeahead && typeahead !== void 0) $$bindings.typeahead(typeahead);
  open !== void 0 && localOpen.set(open);
  selected !== void 0 && localSelected.set(Array.isArray(selected) ? [...selected] : selected);
  {
    updateOption("required", required);
  }
  {
    updateOption("disabled", disabled);
  }
  {
    updateOption("preventScroll", preventScroll);
  }
  {
    updateOption("loop", loop);
  }
  {
    updateOption("closeOnEscape", closeOnEscape);
  }
  {
    updateOption("closeOnOutsideClick", closeOnOutsideClick);
  }
  {
    updateOption("portal", portal);
  }
  {
    updateOption("name", name);
  }
  {
    updateOption("multiple", multiple);
  }
  {
    updateOption("onOutsideClick", onOutsideClick);
  }
  {
    updateOption("typeahead", typeahead);
  }
  $$unsubscribe_idValues();
  return `${slots.default ? slots.default({ ids: $idValues }) : ``}`;
});
const Select_content$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "id",
    "side",
    "align",
    "sideOffset",
    "alignOffset",
    "collisionPadding",
    "avoidCollisions",
    "collisionBoundary",
    "sameWidth",
    "fitViewport",
    "strategy",
    "overlap",
    "el"
  ]);
  let $open, $$unsubscribe_open;
  let $menu, $$unsubscribe_menu;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  let { side = "bottom" } = $$props;
  let { align = "center" } = $$props;
  let { sideOffset = 0 } = $$props;
  let { alignOffset = 0 } = $$props;
  let { collisionPadding = 8 } = $$props;
  let { avoidCollisions = true } = $$props;
  let { collisionBoundary = void 0 } = $$props;
  let { sameWidth = true } = $$props;
  let { fitViewport = false } = $$props;
  let { strategy = "absolute" } = $$props;
  let { overlap = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { menu }, states: { open }, ids, getAttrs: getAttrs2 } = getCtx();
  validate_store(menu, "menu");
  $$unsubscribe_menu = subscribe(menu, (value) => $menu = value);
  validate_store(open, "open");
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  createDispatcher();
  const attrs = getAttrs2("content");
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0) $$bindings.transitionConfig(transitionConfig);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0) $$bindings.inTransition(inTransition);
  if ($$props.inTransitionConfig === void 0 && $$bindings.inTransitionConfig && inTransitionConfig !== void 0) $$bindings.inTransitionConfig(inTransitionConfig);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0) $$bindings.outTransition(outTransition);
  if ($$props.outTransitionConfig === void 0 && $$bindings.outTransitionConfig && outTransitionConfig !== void 0) $$bindings.outTransitionConfig(outTransitionConfig);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.side === void 0 && $$bindings.side && side !== void 0) $$bindings.side(side);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0) $$bindings.align(align);
  if ($$props.sideOffset === void 0 && $$bindings.sideOffset && sideOffset !== void 0) $$bindings.sideOffset(sideOffset);
  if ($$props.alignOffset === void 0 && $$bindings.alignOffset && alignOffset !== void 0) $$bindings.alignOffset(alignOffset);
  if ($$props.collisionPadding === void 0 && $$bindings.collisionPadding && collisionPadding !== void 0) $$bindings.collisionPadding(collisionPadding);
  if ($$props.avoidCollisions === void 0 && $$bindings.avoidCollisions && avoidCollisions !== void 0) $$bindings.avoidCollisions(avoidCollisions);
  if ($$props.collisionBoundary === void 0 && $$bindings.collisionBoundary && collisionBoundary !== void 0) $$bindings.collisionBoundary(collisionBoundary);
  if ($$props.sameWidth === void 0 && $$bindings.sameWidth && sameWidth !== void 0) $$bindings.sameWidth(sameWidth);
  if ($$props.fitViewport === void 0 && $$bindings.fitViewport && fitViewport !== void 0) $$bindings.fitViewport(fitViewport);
  if ($$props.strategy === void 0 && $$bindings.strategy && strategy !== void 0) $$bindings.strategy(strategy);
  if ($$props.overlap === void 0 && $$bindings.overlap && overlap !== void 0) $$bindings.overlap(overlap);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  {
    if (id) {
      ids.menu.set(id);
    }
  }
  builder = $menu;
  {
    Object.assign(builder, attrs);
  }
  {
    if ($open) {
      updatePositioning({
        side,
        align,
        sideOffset,
        alignOffset,
        collisionPadding,
        avoidCollisions,
        collisionBoundary,
        sameWidth,
        fitViewport,
        strategy,
        overlap
      });
    }
  }
  $$unsubscribe_open();
  $$unsubscribe_menu();
  return ` ${asChild && $open ? `${slots.default ? slots.default({ builder }) : ``}` : `${transition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${$open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : ``}`}`}`}`}`}`;
});
const Select_item$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let isSelected;
  let $$restProps = compute_rest_props($$props, ["value", "disabled", "label", "asChild", "el"]);
  let $isSelectedStore, $$unsubscribe_isSelectedStore;
  let $item, $$unsubscribe_item;
  let { value } = $$props;
  let { disabled = void 0 } = $$props;
  let { label = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { option: item }, helpers: { isSelected: isSelectedStore }, getAttrs: getAttrs2 } = setItemCtx(value);
  validate_store(item, "item");
  $$unsubscribe_item = subscribe(item, (value2) => $item = value2);
  validate_store(isSelectedStore, "isSelectedStore");
  $$unsubscribe_isSelectedStore = subscribe(isSelectedStore, (value2) => $isSelectedStore = value2);
  createDispatcher();
  const attrs = getAttrs2("item");
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  builder = $item({ value, disabled, label });
  {
    Object.assign(builder, attrs);
  }
  isSelected = $isSelectedStore(value);
  $$unsubscribe_isSelectedStore();
  $$unsubscribe_item();
  return ` ${asChild ? `${slots.default ? slots.default({ builder, isSelected }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder, isSelected }) : ` ${escape(label || value)} `}</div>`}`;
});
const Select_item_indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $isSelected, $$unsubscribe_isSelected;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { isSelected, value, getAttrs: getAttrs2 } = getItemIndicator();
  validate_store(isSelected, "isSelected");
  $$unsubscribe_isSelected = subscribe(isSelected, (value2) => $isSelected = value2);
  const attrs = getAttrs2("indicator");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  $$unsubscribe_isSelected();
  return `${asChild ? `${slots.default ? slots.default({ attrs, isSelected: $isSelected(value) }) : ``}` : `<div${spread([escape_object($$restProps), escape_object(attrs)], {})}${add_attribute("this", el, 0)}>${$isSelected(value) ? `${slots.default ? slots.default({ attrs, isSelected: $isSelected(value) }) : ``}` : ``}</div>`}`;
});
const Select_trigger$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "id", "el"]);
  let $trigger, $$unsubscribe_trigger;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { trigger }, ids, getAttrs: getAttrs2 } = getCtx();
  validate_store(trigger, "trigger");
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  createDispatcher();
  const attrs = getAttrs2("trigger");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  {
    if (id) {
      ids.trigger.set(id);
    }
  }
  builder = $trigger;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_trigger();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), { type: "button" }, escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
const Select_value = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let label;
  let $$restProps = compute_rest_props($$props, ["placeholder", "asChild", "el"]);
  let $selectedLabel, $$unsubscribe_selectedLabel;
  let { placeholder = "" } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { states: { selectedLabel }, getAttrs: getAttrs2 } = getCtx();
  validate_store(selectedLabel, "selectedLabel");
  $$unsubscribe_selectedLabel = subscribe(selectedLabel, (value) => $selectedLabel = value);
  const attrs = getAttrs2("value");
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  label = $selectedLabel;
  $$unsubscribe_selectedLabel();
  return `${asChild ? `${slots.default ? slots.default({ label, attrs }) : ``}` : `<span${spread(
    [
      escape_object($$restProps),
      escape_object(attrs),
      {
        "data-placeholder": escape_attribute_value(!label ? "" : void 0)
      }
    ],
    {}
  )}${add_attribute("this", el, 0)}>${escape(label || placeholder)}</span>`}`;
});
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const flyAndScale = (node, params = { y: -8, x: 0, start: 0.95, duration: 150 }) => {
  const style = getComputedStyle(node);
  const transform = style.transform === "none" ? "" : style.transform;
  const scaleConversion = (valueA, scaleA, scaleB) => {
    const [minA, maxA] = scaleA;
    const [minB, maxB] = scaleB;
    const percentage = (valueA - minA) / (maxA - minA);
    const valueB = percentage * (maxB - minB) + minB;
    return valueB;
  };
  const styleToString2 = (style2) => {
    return Object.keys(style2).reduce((str, key) => {
      if (style2[key] === void 0) return str;
      return str + `${key}:${style2[key]};`;
    }, "");
  };
  return {
    duration: params.duration ?? 200,
    delay: 0,
    css: (t) => {
      const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
      const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
      const scale2 = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);
      return styleToString2({
        transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale2})`,
        opacity: t
      });
    },
    easing: cubicOut
  };
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "variant", "size", "builders"]);
  let { class: className = void 0 } = $$props;
  let { variant = "default" } = $$props;
  let { size: size2 = "default" } = $$props;
  let { builders = [] } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0) $$bindings.size(size2);
  if ($$props.builders === void 0 && $$bindings.builders && builders !== void 0) $$bindings.builders(builders);
  return `${validate_component(Button$1, "ButtonPrimitive.Root").$$render(
    $$result,
    Object.assign(
      {},
      { builders },
      {
        class: cn(buttonVariants({ variant, size: size2, className }))
      },
      { type: "button" },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const buttonVariants = tv({
  base: "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border-input bg-background hover:bg-accent hover:text-accent-foreground border",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const Check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M20 6 9 17l-5-5" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "check" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Chevron_down = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "chevron-down" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Map_pin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
      }
    ],
    ["circle", { "cx": "12", "cy": "10", "r": "3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "map-pin" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const css$5 = {
  code: ".svelte-amucpw{--radius:12px}.drop.svelte-amucpw{position:absolute;top:calc(100% - var(--radius));background-color:white;width:100%;border-bottom-left-radius:var(--radius);border-bottom-right-radius:var(--radius);overflow:hidden;box-shadow:0 0 5px 0px rgb(126, 126, 126)}.cont.svelte-amucpw{width:100%;position:relative}.input-field.svelte-amucpw{display:flex;position:relative;z-index:2}.icon.svelte-amucpw{position:absolute;top:50%;left:10px;transform:translate(0%, -50%)}input.svelte-amucpw{border-radius:var(--radius);padding:12px;width:100%;border:4px solid var(--primary);outline:none;color:white;padding-left:40px}input.svelte-amucpw::-moz-placeholder{color:rgb(217, 186, 143)}input.svelte-amucpw::placeholder{color:rgb(217, 186, 143)}input.result-exists.svelte-amucpw:focus{}.location.svelte-amucpw{display:flex;flex-direction:column;padding:12px;transition:all 0.1s ease-in-out;scale:1;&:hover {\r\n			background-color: hsl(var(--primary-t) / 0.1);\r\n			cursor: pointer;\r\n		};&:active {\r\n			background-color: hsl(var(--primary-t) / 0.2);\r\n			/* scale: 0.98; */\r\n		};& .top {\r\n			display: flex;\r\n			justify-content: space-between;\r\n\r\n			& .name {\r\n				white-space: nowrap;\r\n				overflow: hidden;\r\n				text-overflow: ellipsis;\r\n			}\r\n			& .city-country {\r\n				white-space: nowrap;\r\n			}\r\n		};&.first {\r\n			padding-top: calc(12px + var(--radius));\r\n		}}",
  map: '{"version":3,"file":"LocationInput.svelte","sources":["LocationInput.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Input } from \\"$lib/components/ui/input\\";\\nimport { MapPin } from \\"lucide-svelte\\";\\nimport { onMount } from \\"svelte\\";\\nimport { debounceAsync } from \\"./urlUtils\\";\\nasync function fetchLocation(text) {\\n  const response = await fetch(`/api/location-by-text?text=${text}`);\\n  const data = await response.json();\\n  return data;\\n}\\nfunction extractAddress(addressComponents) {\\n  let address = {\\n    street: \\"\\",\\n    city: \\"\\",\\n    province: \\"\\",\\n    country: \\"\\"\\n  };\\n  addressComponents.forEach((component) => {\\n    if (component.types.includes(\\"street_number\\")) {\\n      address.street += component.long_name + \\" \\";\\n    }\\n    if (component.types.includes(\\"route\\")) {\\n      address.street += component.long_name;\\n    }\\n    if (component.types.includes(\\"locality\\")) {\\n      address.city = component.long_name;\\n    }\\n    if (component.types.includes(\\"administrative_area_level_1\\")) {\\n      address.province = component.short_name ?? component.long_name;\\n    }\\n    if (component.types.includes(\\"country\\")) {\\n      address.country = component.long_name;\\n    }\\n  });\\n  return address;\\n}\\nasync function fetchLocationDetails(id) {\\n  const response = await fetch(`/api/place-details?id=${id}`);\\n  const data = await response.json();\\n  return data.result;\\n}\\nfunction getLngAndLat(candidate) {\\n  const { geometry } = candidate;\\n  return geometry.location;\\n}\\nasync function processCandidates(candidates2) {\\n  const processed = [];\\n  for (const c of candidates2) {\\n    const { place_id, name, formatted_address } = c;\\n    const { address_components, icon } = await fetchLocationDetails(place_id);\\n    const add = extractAddress(address_components);\\n    console.log({ c, address_components });\\n    const { lng, lat } = getLngAndLat(c);\\n    processed.push({\\n      lng,\\n      lat,\\n      icon,\\n      ...add,\\n      place_id,\\n      name,\\n      formatted_address\\n    });\\n  }\\n  return processed;\\n}\\nasync function search(text) {\\n  if (!text) {\\n    candidates = [];\\n    return;\\n  }\\n  const data = await fetchLocation(text);\\n  const processed = await processCandidates(data.candidates || []);\\n  candidates = processed;\\n  selected = false;\\n  console.warn(candidates);\\n}\\nconst debouncedSearch = debounceAsync(search, 100);\\nlet currText = \\"\\";\\nexport let selected = false;\\nexport let candidates = [];\\nfunction selectCandidate(candidate) {\\n  currText = candidate.formatted_address;\\n  selected = candidate;\\n}\\n<\/script>\\r\\n\\r\\n<!-- <Input type=\\"text\\" placeholder=\\"Enter location\\"> </Input> -->\\r\\n<div class=\\"cont\\">\\r\\n\\t<div class=\\"input-field\\">\\r\\n\\t\\t<span class=\\"icon\\"><MapPin color=\\"white\\" /></span>\\r\\n\\r\\n\\t\\t<input\\r\\n\\t\\t\\tbind:value={currText}\\r\\n\\t\\t\\ttype=\\"text\\"\\r\\n\\t\\t\\tclass=\\"bg-primary\\"\\r\\n\\t\\t\\tplaceholder=\\"Enter location\\"\\r\\n      class:result-exists={!!candidates.length && !selected}\\r\\n\\t\\t\\ton:input={() => debouncedSearch(currText)}\\r\\n\\t\\t/>\\r\\n\\t</div>\\r\\n\\t{#if selected == false}\\r\\n\\t\\t<div class=\\"drop\\">\\r\\n\\t\\t\\t{#each candidates as c, i}\\r\\n\\t\\t\\t\\t<!-- svelte-ignore a11y-no-static-element-interactions -->\\r\\n\\t\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\r\\n\\t\\t\\t\\t<div class=\\"location\\" class:first={i == 0} on:click={() => selectCandidate(c)}>\\r\\n\\t\\t\\t\\t\\t<div class=\\"top\\">\\r\\n\\t\\t\\t\\t\\t\\t<span class=\\"name font-bold\\">{c.name}</span>\\r\\n\\t\\t\\t\\t\\t\\t<span class=\\"city-country text-gray-500\\">{c.city}, {c.province}, {c.country}</span>\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t<span>{c.street}</span>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t</div>\\r\\n\\t{/if}\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t* {\\r\\n\\t\\t--radius: 12px;\\r\\n\\t}\\r\\n\\t.drop {\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: calc(100% - var(--radius));\\r\\n\\t\\tbackground-color: white;\\r\\n\\t\\twidth: 100%;\\r\\n\\r\\n\\t\\tborder-bottom-left-radius: var(--radius);\\r\\n\\t\\tborder-bottom-right-radius: var(--radius);\\r\\n\\t\\toverflow: hidden;\\r\\n\\t\\t/* border: 1px solid red; */\\r\\n\\t\\tbox-shadow: 0 0 5px 0px rgb(126, 126, 126);\\r\\n\\t}\\r\\n\\t.cont {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tposition: relative;\\r\\n\\t\\t\\r\\n\\t}\\r\\n\\t.input-field {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tz-index: 2;\\r\\n\\t}\\r\\n\\t.icon {\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 50%;\\r\\n\\t\\tleft: 10px;\\r\\n\\t\\ttransform: translate(0%, -50%);\\r\\n\\t}\\r\\n\\tinput {\\r\\n\\t\\tborder-radius: var(--radius);\\r\\n\\t\\tpadding: 12px;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tborder: 4px solid var(--primary);\\r\\n\\t\\toutline: none;\\r\\n\\t\\tcolor: white;\\r\\n\\t\\tpadding-left: 40px;\\r\\n\\t\\t/* background-color: var(--secondary); */\\r\\n\\t}\\r\\n\\tinput::-moz-placeholder {\\r\\n\\t\\tcolor: rgb(217, 186, 143);\\r\\n\\t}\\r\\n\\tinput::placeholder {\\r\\n\\t\\tcolor: rgb(217, 186, 143);\\r\\n\\t}\\r\\n\\tinput.result-exists:focus {\\r\\n\\t\\t/* background-color: red; */\\r\\n\\t\\t/* border: 4px solid rgb(255, 255, 255); */\\r\\n\\t}\\r\\n\\t.location {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tpadding: 12px;\\r\\n\\t\\t/* user-select: none; */\\r\\n\\t\\ttransition: all 0.1s ease-in-out;\\r\\n\\t\\tscale: 1;\\r\\n\\t\\t&:hover {\\r\\n\\t\\t\\tbackground-color: hsl(var(--primary-t) / 0.1);\\r\\n\\t\\t\\tcursor: pointer;\\r\\n\\t\\t}\\r\\n\\t\\t&:active {\\r\\n\\t\\t\\tbackground-color: hsl(var(--primary-t) / 0.2);\\r\\n\\t\\t\\t/* scale: 0.98; */\\r\\n\\t\\t}\\r\\n\\t\\t& .top {\\r\\n\\t\\t\\tdisplay: flex;\\r\\n\\t\\t\\tjustify-content: space-between;\\r\\n\\r\\n\\t\\t\\t& .name {\\r\\n\\t\\t\\t\\twhite-space: nowrap;\\r\\n\\t\\t\\t\\toverflow: hidden;\\r\\n\\t\\t\\t\\ttext-overflow: ellipsis;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\t& .city-country {\\r\\n\\t\\t\\t\\twhite-space: nowrap;\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t&.first {\\r\\n\\t\\t\\tpadding-top: calc(12px + var(--radius));\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAqHC,cAAE,CACD,QAAQ,CAAE,IACX,CACA,mBAAM,CACL,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,QAAQ,CAAC,CAAC,CAC/B,gBAAgB,CAAE,KAAK,CACvB,KAAK,CAAE,IAAI,CAEX,yBAAyB,CAAE,IAAI,QAAQ,CAAC,CACxC,0BAA0B,CAAE,IAAI,QAAQ,CAAC,CACzC,QAAQ,CAAE,MAAM,CAEhB,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC1C,CACA,mBAAM,CACL,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,QAEX,CACA,0BAAa,CACZ,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CACV,CACA,mBAAM,CACL,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,IAAI,CACV,SAAS,CAAE,UAAU,EAAE,CAAC,CAAC,IAAI,CAC9B,CACA,mBAAM,CACL,aAAa,CAAE,IAAI,QAAQ,CAAC,CAC5B,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,SAAS,CAAC,CAChC,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,KAAK,CACZ,YAAY,CAAE,IAEf,CACA,mBAAK,kBAAmB,CACvB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACzB,CACA,mBAAK,aAAc,CAClB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACzB,CACA,KAAK,4BAAc,MAAO,CAG1B,CACA,uBAAU,CACT,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,OAAO,CAAE,IAAI,CAEb,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,WAAW,CAChC,KAAK,CAAE,CAAC,CACR,CAAC,MAAM,CAAC;AACV,GAAG,kBAAkB,IAAI,IAAI,WAAW,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC;AAChD,GAAG,QAAQ,OAAO;AAClB,GAAG,CACD,CAAC,OAAO,CAAC;AACX,GAAG,kBAAkB,IAAI,IAAI,WAAW,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC;AAChD;AACA,GAAG,CACD,CAAC,CAAC,IAAI,CAAC;AACT,GAAG,SAAS,IAAI;AAChB,GAAG,iBAAiB,aAAa;AACjC;AACA,GAAG,CAAC,CAAC,KAAK,CAAC;AACX,IAAI,aAAa,MAAM;AACvB,IAAI,UAAU,MAAM;AACpB,IAAI,eAAe,QAAQ;AAC3B,IAAI;AACJ,GAAG,CAAC,CAAC,aAAa,CAAC;AACnB,IAAI,aAAa,MAAM;AACvB,IAAI;AACJ,GAAG,CAED,CAAC,MAAM,CAAC;AACV,GAAG,aAAa,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,QAAQ,CAAC,CAAC;AAC1C,GACC"}'
};
const LocationInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currText = "";
  let { selected = false } = $$props;
  let { candidates = [] } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.candidates === void 0 && $$bindings.candidates && candidates !== void 0) $$bindings.candidates(candidates);
  $$result.css.add(css$5);
  return ` <div class="cont svelte-amucpw"><div class="input-field svelte-amucpw"><span class="icon svelte-amucpw">${validate_component(Map_pin, "MapPin").$$render($$result, { color: "white" }, {}, {})}</span> <input type="text" class="${[
    "bg-primary svelte-amucpw",
    !!candidates.length && !selected ? "result-exists" : ""
  ].join(" ").trim()}" placeholder="Enter location"${add_attribute("value", currText, 0)}></div> ${selected == false ? `<div class="drop svelte-amucpw">${each(candidates, (c, i) => {
    return `  <div class="${["location svelte-amucpw", i == 0 ? "first" : ""].join(" ").trim()}"><div class="top svelte-amucpw"><span class="name font-bold svelte-amucpw">${escape(c.name)}</span> <span class="city-country text-gray-500 svelte-amucpw">${escape(c.city)}, ${escape(c.province)}, ${escape(c.country)}</span></div> <span class="svelte-amucpw">${escape(c.street)}</span> </div>`;
  })}</div>` : ``} </div>`;
});
const css$4 = {
  code: "canvas.svelte-521cef{overflow:hidden;width:100%;height:100%}",
  map: `{"version":3,"file":"Rive.svelte","sources":["Rive.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport * as rive from \\"@rive-app/canvas\\";\\nexport let url = \\"\\";\\nexport let width = \\"\\";\\nexport let height = \\"\\";\\nonMount(() => {\\n  console.log({ canvasEl });\\n  const r = new rive.Rive({\\n    src: url,\\n    // OR the path to a discoverable and public Rive asset\\n    // src: '/public/example.riv',\\n    canvas: canvasEl,\\n    autoplay: true,\\n    // artboard: \\"Arboard\\", // Optional. If not supplied the default is selected\\n    stateMachines: \\"State Machine 1\\",\\n    onLoad: () => {\\n      r.resizeDrawingSurfaceToCanvas();\\n    }\\n  });\\n});\\nlet canvasEl;\\n<\/script>\\r\\n\\r\\n<!-- <div> -->\\r\\n\\t<canvas bind:this={canvasEl} id=\\"canvas\\" {width} {height}></canvas>\\r\\n<!-- </div> -->\\r\\n\\r\\n<style>\\r\\n\\tcanvas {\\r\\n\\t\\toverflow: hidden;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 100%;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4BC,oBAAO,CACN,QAAQ,CAAE,MAAM,CAChB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACT"}`
};
const Rive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "" } = $$props;
  let { width = "" } = $$props;
  let { height = "" } = $$props;
  let canvasEl;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  $$result.css.add(css$4);
  return ` <canvas id="canvas"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} class="svelte-521cef"${add_attribute("this", canvasEl, 0)}></canvas> `;
});
const css$3 = {
  code: "img.svelte-gn2gw3.svelte-gn2gw3{height:150px;width:100%}.soil-card.svelte-gn2gw3.svelte-gn2gw3{border:1px solid #ccc;border-radius:12px;background-color:white;max-width:300px;overflow:hidden;box-shadow:0 0 5px 0 rgb(222, 222, 222);outline:4px solid transparent;transition:all 0.1s ease-in-out;scale:1;-webkit-user-select:none;-moz-user-select:none;user-select:none}.selected.svelte-gn2gw3.svelte-gn2gw3{outline:4px solid var(--accent);border:1px solid var(--accent)}.details.svelte-gn2gw3.svelte-gn2gw3{padding:16px}.soil-card.svelte-gn2gw3.svelte-gn2gw3:hover{background-color:hsl(var(--primary-t) / 0.1);cursor:pointer}.soil-card.svelte-gn2gw3.svelte-gn2gw3:active{scale:0.98;background-color:hsl(var(--primary-t) / 0.2)}.soil.svelte-gn2gw3.svelte-gn2gw3{position:absolute;top:90px;right:10px;width:30%;height:20%}.soil-card.svelte-gn2gw3 h2.svelte-gn2gw3{font-weight:bold;text-transform:capitalize}h3.svelte-gn2gw3.svelte-gn2gw3{margin-top:10px}.soil-card.svelte-gn2gw3 li.svelte-gn2gw3{position:relative;padding-left:20px;list-style-type:none}.soil-card.svelte-gn2gw3 li.svelte-gn2gw3::before{content:'';position:absolute;left:0;top:0.5em;width:8px;height:8px;border-radius:50%}.characteristics.svelte-gn2gw3 li.svelte-gn2gw3{padding-left:0px}.cons.svelte-gn2gw3 li.svelte-gn2gw3::before{background-color:#b95555}.pros.svelte-gn2gw3 li.svelte-gn2gw3::before{background-color:#4caf50}",
  map: `{"version":3,"file":"SoilCard.svelte","sources":["SoilCard.svelte"],"sourcesContent":["<!-- SoilCard.svelte -->\\r\\n<script>\\r\\n\\timport { createEventDispatcher } from \\"svelte\\";\\r\\n\\timport Rive from \\"./Rive.svelte\\";\\r\\n\\r\\n  export let soilType;\\r\\n  export let data;\\r\\n  const dispath = createEventDispatcher()\\r\\n\\r\\n  export let selected = false\\r\\n\\r\\n\\r\\n<\/script>\\r\\n\\r\\n<!-- svelte-ignore a11y-click-events-have-key-events -->\\r\\n<!-- svelte-ignore a11y-no-static-element-interactions -->\\r\\n<div class=\\"soil-card\\" on:click={() => dispath(\\"click\\")} class:selected>\\r\\n  <img src={data.img} alt=\\"\\">\\r\\n  <div class=\\"details\\">\\r\\n    <div class=\\"soil\\">\\r\\n      <Rive url={data.rive} width=\\"100%\\" height=\\"100%\\" />\\r\\n    </div>\\r\\n    <h2>{soilType} soil</h2>\\r\\n    <div class=\\"characteristics\\">\\r\\n      <!-- <h3>Characteristics</h3> -->\\r\\n      <ul>\\r\\n        {#each data.characteristics as characteristic}\\r\\n          <li>{characteristic}</li>\\r\\n        {/each}\\r\\n      </ul>\\r\\n    </div>\\r\\n    \\r\\n    {#if data.pros}\\r\\n      <div class=\\"pros\\">\\r\\n        <h3>Pros</h3>\\r\\n        <ul>\\r\\n          {#each data.pros as pro}\\r\\n            <li>{pro}</li>\\r\\n          {/each}\\r\\n        </ul>\\r\\n      </div>\\r\\n    {/if}\\r\\n    \\r\\n    {#if data.cons}\\r\\n      <div class=\\"cons\\">\\r\\n        <h3>Cons</h3>\\r\\n        <ul>\\r\\n          {#each data.cons as con}\\r\\n            <li>{con}</li>\\r\\n          {/each}\\r\\n        </ul>\\r\\n      </div>\\r\\n    {/if}\\r\\n    \\r\\n    <!-- <div class=\\"irrigations\\">\\r\\n      <h3>Irrigation Methods</h3>\\r\\n      <ul>\\r\\n        {#each data.irrigations as irrigation}\\r\\n          <li>\\r\\n            <strong>{irrigation.title}:</strong> {irrigation.description}\\r\\n          </li>\\r\\n        {/each}\\r\\n      </ul>\\r\\n    </div> -->\\r\\n  </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  img {\\r\\n    height: 150px;\\r\\n    width: 100%;\\r\\n    /* object-fit: cover !important; */\\r\\n  }\\r\\n  .soil-card {\\r\\n    border: 1px solid #ccc;\\r\\n    border-radius: 12px;\\r\\n    \\r\\n    /* margin: 16px; */\\r\\n    background-color: white;\\r\\n    max-width: 300px;\\r\\n    overflow: hidden;\\r\\n    box-shadow: 0 0 5px 0 rgb(222, 222, 222);\\r\\n    outline: 4px solid transparent;\\r\\n    transition: all 0.1s ease-in-out;\\r\\n    scale: 1;\\r\\n    -webkit-user-select: none;\\r\\n       -moz-user-select: none;\\r\\n            user-select: none;\\r\\n\\r\\n  }\\r\\n  .selected {\\r\\n    outline: 4px solid var(--accent);\\r\\n    border: 1px solid var(--accent);\\r\\n  }\\r\\n  .details {\\r\\n    padding: 16px;\\r\\n  }\\r\\n  .soil-card:hover {\\r\\n    background-color: hsl(var(--primary-t) / 0.1);\\r\\n    cursor: pointer;\\r\\n  }\\r\\n  .soil-card:active {\\r\\n    scale: 0.98;\\r\\n    background-color: hsl(var(--primary-t) / 0.2);\\r\\n  }\\r\\n  .soil {\\r\\n    position: absolute;\\r\\n    top: 90px;\\r\\n    right: 10px;\\r\\n    width: 30%;\\r\\n    height: 20%;\\r\\n    /* border: 1px solid red; */\\r\\n  }\\r\\n\\r\\n  .soil-card h2 {\\r\\n    \\r\\n    font-weight: bold;\\r\\n    \\r\\n    text-transform: capitalize;\\r\\n  }\\r\\n  h3 {\\r\\n    margin-top: 10px;\\r\\n  }\\r\\n\\r\\n  /* Apply to all list items within .soil-card */\\r\\n.soil-card li {\\r\\n  position: relative;\\r\\n  padding-left: 20px; /* Add space for the circle */\\r\\n  list-style-type: none; /* Remove default list styling */\\r\\n}\\r\\n\\r\\n/* Create the circle using ::before */\\r\\n.soil-card li::before {\\r\\n  content: '';\\r\\n  position: absolute;\\r\\n  left: 0;\\r\\n  top: 0.5em;\\r\\n  /* transform: translateY(-50%); */\\r\\n  width: 8px;\\r\\n  height: 8px;\\r\\n\\r\\n  border-radius: 50%; /* Makes it a circle */\\r\\n}\\r\\n.characteristics li {\\r\\n\\r\\n  padding-left: 0px; \\r\\n}\\r\\n.cons li::before {\\r\\n  background-color: #b95555; /* Circle color */\\r\\n}\\r\\n.pros li::before {\\r\\n  background-color: #4caf50; /* Circle color */\\r\\n}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAoEE,+BAAI,CACF,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,IAET,CACA,sCAAW,CACT,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,aAAa,CAAE,IAAI,CAGnB,gBAAgB,CAAE,KAAK,CACvB,SAAS,CAAE,KAAK,CAChB,QAAQ,CAAE,MAAM,CAChB,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACxC,OAAO,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CAC9B,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,WAAW,CAChC,KAAK,CAAE,CAAC,CACR,mBAAmB,CAAE,IAAI,CACtB,gBAAgB,CAAE,IAAI,CACjB,WAAW,CAAE,IAEvB,CACA,qCAAU,CACR,OAAO,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,QAAQ,CAAC,CAChC,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,QAAQ,CAChC,CACA,oCAAS,CACP,OAAO,CAAE,IACX,CACA,sCAAU,MAAO,CACf,gBAAgB,CAAE,IAAI,IAAI,WAAW,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC7C,MAAM,CAAE,OACV,CACA,sCAAU,OAAQ,CAChB,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,IAAI,IAAI,WAAW,CAAC,CAAC,CAAC,CAAC,GAAG,CAC9C,CACA,iCAAM,CACJ,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,IAAI,CACX,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAEV,CAEA,wBAAU,CAAC,gBAAG,CAEZ,WAAW,CAAE,IAAI,CAEjB,cAAc,CAAE,UAClB,CACA,8BAAG,CACD,UAAU,CAAE,IACd,CAGF,wBAAU,CAAC,gBAAG,CACZ,QAAQ,CAAE,QAAQ,CAClB,YAAY,CAAE,IAAI,CAClB,eAAe,CAAE,IACnB,CAGA,wBAAU,CAAC,gBAAE,QAAS,CACpB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,KAAK,CAEV,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CAEX,aAAa,CAAE,GACjB,CACA,8BAAgB,CAAC,gBAAG,CAElB,YAAY,CAAE,GAChB,CACA,mBAAK,CAAC,gBAAE,QAAS,CACf,gBAAgB,CAAE,OACpB,CACA,mBAAK,CAAC,gBAAE,QAAS,CACf,gBAAgB,CAAE,OACpB"}`
};
const SoilCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { soilType } = $$props;
  let { data } = $$props;
  createEventDispatcher();
  let { selected = false } = $$props;
  if ($$props.soilType === void 0 && $$bindings.soilType && soilType !== void 0) $$bindings.soilType(soilType);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  $$result.css.add(css$3);
  return `    <div class="${["soil-card svelte-gn2gw3", selected ? "selected" : ""].join(" ").trim()}"><img${add_attribute("src", data.img, 0)} alt="" class="svelte-gn2gw3"> <div class="details svelte-gn2gw3"><div class="soil svelte-gn2gw3">${validate_component(Rive, "Rive").$$render(
    $$result,
    {
      url: data.rive,
      width: "100%",
      height: "100%"
    },
    {},
    {}
  )}</div> <h2 class="svelte-gn2gw3">${escape(soilType)} soil</h2> <div class="characteristics svelte-gn2gw3"> <ul>${each(data.characteristics, (characteristic) => {
    return `<li class="svelte-gn2gw3">${escape(characteristic)}</li>`;
  })}</ul></div> ${data.pros ? `<div class="pros svelte-gn2gw3"><h3 class="svelte-gn2gw3" data-svelte-h="svelte-16fmi0k">Pros</h3> <ul>${each(data.pros, (pro) => {
    return `<li class="svelte-gn2gw3">${escape(pro)}</li>`;
  })}</ul></div>` : ``} ${data.cons ? `<div class="cons svelte-gn2gw3"><h3 class="svelte-gn2gw3" data-svelte-h="svelte-67r87p">Cons</h3> <ul>${each(data.cons, (con) => {
    return `<li class="svelte-gn2gw3">${escape(con)}</li>`;
  })}</ul></div>` : ``} </div> </div>`;
});
const Select_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "value", "label", "disabled"]);
  let { class: className = void 0 } = $$props;
  let { value } = $$props;
  let { label = void 0 } = $$props;
  let { disabled = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  return `${validate_component(Select_item$1, "SelectPrimitive.Item").$$render(
    $$result,
    Object.assign(
      {},
      { value },
      { disabled },
      { label },
      {
        class: cn("data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">${validate_component(Select_item_indicator, "SelectPrimitive.ItemIndicator").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Check, "Check").$$render($$result, { class: "h-4 w-4" }, {}, {})}`;
          }
        })}</span> ${slots.default ? slots.default({}) : ` ${escape(label || value)} `}`;
      }
    }
  )}`;
});
function scale(node, { delay = 0, duration = 400, easing = cubicOut, start = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const sd = 1 - start;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration,
    easing,
    css: (_t, u) => `
			transform: ${transform} scale(${1 - sd * u});
			opacity: ${target_opacity - od * u}
		`
  };
}
const Select_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "sideOffset",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "class"
  ]);
  let { sideOffset = 4 } = $$props;
  let { inTransition = flyAndScale } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = scale } = $$props;
  let { outTransitionConfig = { start: 0.95, opacity: 0, duration: 50 } } = $$props;
  let { class: className = void 0 } = $$props;
  if ($$props.sideOffset === void 0 && $$bindings.sideOffset && sideOffset !== void 0) $$bindings.sideOffset(sideOffset);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0) $$bindings.inTransition(inTransition);
  if ($$props.inTransitionConfig === void 0 && $$bindings.inTransitionConfig && inTransitionConfig !== void 0) $$bindings.inTransitionConfig(inTransitionConfig);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0) $$bindings.outTransition(outTransition);
  if ($$props.outTransitionConfig === void 0 && $$bindings.outTransitionConfig && outTransitionConfig !== void 0) $$bindings.outTransitionConfig(outTransitionConfig);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `${validate_component(Select_content$1, "SelectPrimitive.Content").$$render(
    $$result,
    Object.assign(
      {},
      { inTransition },
      { inTransitionConfig },
      { outTransition },
      { outTransitionConfig },
      { sideOffset },
      {
        class: cn("bg-popover text-popover-foreground relative z-50 min-w-[8rem] overflow-hidden rounded-md border shadow-md outline-none", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `<div class="w-full p-1">${slots.default ? slots.default({}) : ``}</div>`;
      }
    }
  )}`;
});
const Select_trigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `${validate_component(Select_trigger$1, "SelectPrimitive.Trigger").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("border-input bg-background ring-offset-background focus-visible:ring-ring aria-[invalid]:border-destructive data-[placeholder]:[&>span]:text-muted-foreground flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className)
      },
      $$restProps
    ),
    {},
    {
      default: ({ builder }) => {
        return `${slots.default ? slots.default({ builder }) : ``} <div>${validate_component(Chevron_down, "ChevronDown").$$render($$result, { class: "h-4 w-4 opacity-50" }, {}, {})}</div>`;
      }
    }
  )}`;
});
const Root = Select;
const Value = Select_value;
const Months = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const currentDate = /* @__PURE__ */ new Date();
  const currentMonthNumber = currentDate.getMonth();
  let { selected = {
    value: currentMonthNumber,
    label: months[currentMonthNumber]
  } } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Root, "Select.Root").$$render(
      $$result,
      { selected },
      {
        selected: ($$value) => {
          selected = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Select_trigger, "Select.Trigger").$$render(
            $$result,
            {
              class: "w-[140px] h-[56px] bg-primary text-white"
            },
            {},
            {
              default: () => {
                return `${validate_component(Value, "Select.Value").$$render($$result, { placeholder: "Month" }, {}, {})}`;
              }
            }
          )} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
            default: () => {
              return `${each(months, (month, i) => {
                return `${validate_component(Select_item, "Select.Item").$$render($$result, { class: "!hover:text-white", value: i }, {}, {
                  default: () => {
                    return `${escape(month)}`;
                  }
                })}`;
              })}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const soilTypes = {
  sandy: {
    img: "sandySoil.jpeg",
    rive: "sandy.riv",
    characteristics: [
      "Large particles and pore spaces",
      "Drains quickly",
      "Can't retain moisture for long periods"
    ],
    pros: [
      "Warms up quickly in the spring",
      "Easy to cultivate and work with"
    ],
    cons: [
      "Dries out quickly",
      "Low nutrient retention"
    ],
    irrigations: [
      {
        title: "Drip Irrigation",
        img: "drip.jpg",
        description: "The most suitable method for frequent, light irrigation. It delivers a slow and steady flow of water directly to the root zone, reducing water loss through evaporation or runoff. This allows the soil to absorb small amounts consistently, maintaining the desired moisture levels."
      },
      {
        title: "Sprinkler Irrigation (With small amounts at frequent intervals)",
        img: "sprinkler.jpg",
        description: "If drip irrigation is not feasible, sprinklers can be adjusted to release water in short, frequent cycles. This method mimics light rainfall and can cover larger areas, though it is less precise compared to drip irrigation."
      }
    ]
  },
  silt: {
    img: "siltSoil.jpeg",
    rive: "silt.riv",
    characteristics: [
      "Small particles",
      "Stable moisture levels",
      "Smooth texture"
    ],
    pros: [
      "Retains moisture longer than sandy soil",
      "Fairly fertile"
    ],
    cons: [
      "Prone to erosion when exposed to wind or rain",
      "May compact easily"
    ],
    irrigations: [
      {
        title: "Sprinkler Irrigation",
        img: "sprinkler.jpg",
        description: "Ideal for silt soils, as it provides an even distribution of water across the surface. This method helps prevent surface crusting and reduces the risk of runoff, ensuring water is absorbed effectively. Setting the sprinklers to moderate, regular intervals keeps moisture balanced without overwhelming the soil."
      },
      {
        title: "Drip Irrigation",
        img: "drip.jpg",
        description: "Suitable for maintaining moisture in silt soils by delivering water directly to the root zone. This method reduces water loss through evaporation and runoff, helping maintain the moisture balance that silt soils require. Regular, moderate drip irrigation ensures roots receive sufficient moisture while avoiding waterlogging."
      }
    ]
  },
  clay: {
    img: "claySoil.jpeg",
    rive: "clay.riv",
    characteristics: [
      "Tiny, tightly packed particles",
      "Retains water the best",
      "Poor drainage, leading to slow drying"
    ],
    pros: [
      "Needs less frequent watering",
      "High nutrient retention due to fine particles"
    ],
    cons: [
      "Can get waterlogged",
      "Hard to work with when wet or dry"
    ],
    irrigations: [
      {
        title: "Subsurface Irrigation",
        img: "subsurface.jpg",
        description: "In cases where minimizing surface runoff and evaporation is a priority, subsurface irrigation is effective. It involves placing irrigation lines below the soil surface to deliver water directly to the root zone. This method keeps the surface dry, reduces evaporation, and ensures deep hydration for plants, making it well-suited for clay soils."
      },
      {
        title: "Drip Irrigation",
        img: "drip.jpg",
        description: "An excellent method for clay soils as it delivers water slowly and directly to the root zone. This gradual application allows clay to absorb water effectively without becoming oversaturated, preventing surface runoff. By maintaining a deep watering approach, drip irrigation ensures the roots receive the moisture they need."
      }
    ]
  },
  loam: {
    img: "loamSoil.jpeg",
    rive: "loam.riv",
    characteristics: [
      "Balanced mix of sand, silt, and clay",
      "Good drainage while retaining moisture",
      "High fertility"
    ],
    pros: [
      "Ideal for most crops",
      "Retains nutrients well",
      "Easy to cultivate"
    ],
    cons: [
      "May need periodic irrigation adjustments depending on the sand, silt, and clay balance"
    ],
    irrigations: [
      {
        title: "Furrow or Basin Irrigation",
        img: "furrow.jpg",
        description: "Suitable for loamy soils in larger agricultural settings. This method allows water to seep gradually into the soil, taking advantage of loam's good infiltration rate. It helps distribute moisture evenly across the root zone while preventing waterlogging."
      },
      {
        title: "Drip Irrigation",
        img: "drip.jpg",
        description: "Ideal for loamy soils as it provides slow, steady water directly to the root zone. Loam's balanced texture allows the water to be absorbed efficiently, minimizing water loss due to drainage while maintaining consistent soil moisture."
      },
      {
        title: "Sprinkler Irrigation",
        img: "sprinkler.jpg",
        description: "Effective for loamy soils, especially in diverse agricultural setups. Sprinklers cover a large area and distribute water evenly, matching loam's capacity to retain water without causing runoff. Adjusting sprinkler intervals ensures optimal moisture levels for various crops."
      }
    ]
  }
};
const css$2 = {
  code: ".image-container.svelte-wjntiu{position:relative;width:var(--width);height:var(--height);display:flex;align-items:center;justify-content:center}.placeholder.svelte-wjntiu{background-color:#323232;width:100%;height:100%;border-radius:var(--border-radius);overflow:hidden;position:absolute}.shimmer.svelte-wjntiu{display:block;height:100%;width:100%;background:linear-gradient(to right, #e0e0e0 0%, #f0f0f0 50%, #e0e0e0 100%);background-size:200% 100%;animation:svelte-wjntiu-shimmer 1.5s infinite}.image.svelte-wjntiu{display:block;width:100%;height:100%;border-radius:var(--border-radius);-o-object-fit:cover;object-fit:cover}@keyframes svelte-wjntiu-shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}",
  map: `{"version":3,"file":"Placeholder.svelte","sources":["Placeholder.svelte"],"sourcesContent":["<script>\\r\\n\\timport { onDestroy, onMount } from 'svelte';\\r\\n\\r\\n\\texport let path;\\r\\n\\texport let alt = '';\\r\\n\\texport let width = '100%';\\r\\n\\texport let height = '100%';\\r\\n\\texport let animation = true;\\r\\n\\texport let styles = '';\\r\\n\\tlet isLoading = true;\\r\\n\\texport let loaded = false;\\r\\n\\tlet imageElement;\\r\\n\\tonMount(() => {\\r\\n\\t\\tcheckIfImageLoaded();\\r\\n\\t});\\r\\n\\tfunction checkIfImageLoaded() {\\r\\n\\t\\tif (imageElement.complete && imageElement.naturalHeight !== 0) {\\r\\n\\t\\t\\thandleImageLoad();\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\t// Handler for the image load event\\r\\n\\tfunction handleImageLoad() {\\r\\n\\t\\tisLoading = false;\\r\\n\\t}\\r\\n\\t$: loaded = !isLoading;\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"image-container\\" style=\\"--width: {width}; --height: {height};\\">\\r\\n\\t{#if isLoading}\\r\\n\\t\\t<div class=\\"placeholder\\">\\r\\n\\t\\t\\t{#if animation}\\r\\n\\t\\t\\t\\t<span class=\\"shimmer\\"></span>\\r\\n\\t\\t\\t{/if}\\r\\n\\t\\t</div>\\r\\n\\t{/if}\\r\\n\\r\\n\\t<img\\r\\n\\t\\tsrc={path}\\r\\n\\t\\t{alt}\\r\\n\\t\\tclass=\\"image\\"\\r\\n\\t\\tstyle={styles}\\r\\n\\t\\ton:load={handleImageLoad}\\r\\n\\t\\ton:error={handleImageLoad}\\r\\n\\t\\tbind:this={imageElement}\\r\\n\\t\\tloading=\\"lazy\\"\\r\\n\\t/>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t.image-container {\\r\\n\\t\\tposition: relative;\\r\\n\\t\\twidth: var(--width);\\r\\n\\t\\theight: var(--height);\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t}\\r\\n\\r\\n\\t.placeholder {\\r\\n\\t\\tbackground-color: #323232;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 100%;\\r\\n\\t\\tborder-radius: var(--border-radius);\\r\\n\\t\\toverflow: hidden;\\r\\n\\t\\tposition: absolute;\\r\\n\\t}\\r\\n\\r\\n\\t.shimmer {\\r\\n\\t\\tdisplay: block;\\r\\n\\t\\theight: 100%;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tbackground: linear-gradient(to right, #e0e0e0 0%, #f0f0f0 50%, #e0e0e0 100%);\\r\\n\\t\\tbackground-size: 200% 100%;\\r\\n\\t\\tanimation: shimmer 1.5s infinite;\\r\\n\\t}\\r\\n\\r\\n\\t.image {\\r\\n\\t\\tdisplay: block;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 100%;\\r\\n\\t\\tborder-radius: var(--border-radius);\\r\\n\\t\\t-o-object-fit: cover;\\r\\n\\t\\t   object-fit: cover;\\r\\n\\t}\\r\\n\\r\\n\\t@keyframes shimmer {\\r\\n\\t\\t0% {\\r\\n\\t\\t\\tbackground-position: -200% 0;\\r\\n\\t\\t}\\r\\n\\t\\t100% {\\r\\n\\t\\t\\tbackground-position: 200% 0;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAiDC,8BAAiB,CAChB,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,MAAM,CAAE,IAAI,QAAQ,CAAC,CACrB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAClB,CAEA,0BAAa,CACZ,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,eAAe,CAAC,CACnC,QAAQ,CAAE,MAAM,CAChB,QAAQ,CAAE,QACX,CAEA,sBAAS,CACR,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,gBAAgB,EAAE,CAAC,KAAK,CAAC,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC,OAAO,CAAC,IAAI,CAAC,CAC5E,eAAe,CAAE,IAAI,CAAC,IAAI,CAC1B,SAAS,CAAE,qBAAO,CAAC,IAAI,CAAC,QACzB,CAEA,oBAAO,CACN,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,eAAe,CAAC,CACnC,aAAa,CAAE,KAAK,CACjB,UAAU,CAAE,KAChB,CAEA,WAAW,qBAAQ,CAClB,EAAG,CACF,mBAAmB,CAAE,KAAK,CAAC,CAC5B,CACA,IAAK,CACJ,mBAAmB,CAAE,IAAI,CAAC,CAC3B,CACD"}`
};
const Placeholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  let { alt = "" } = $$props;
  let { width = "100%" } = $$props;
  let { height = "100%" } = $$props;
  let { animation = true } = $$props;
  let { styles = "" } = $$props;
  let isLoading = true;
  let { loaded = false } = $$props;
  let imageElement;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.animation === void 0 && $$bindings.animation && animation !== void 0) $$bindings.animation(animation);
  if ($$props.styles === void 0 && $$bindings.styles && styles !== void 0) $$bindings.styles(styles);
  if ($$props.loaded === void 0 && $$bindings.loaded && loaded !== void 0) $$bindings.loaded(loaded);
  $$result.css.add(css$2);
  loaded = !isLoading;
  return `<div class="image-container svelte-wjntiu" style="${"--width: " + escape(width, true) + "; --height: " + escape(height, true) + ";"}">${`<div class="placeholder svelte-wjntiu">${animation ? `<span class="shimmer svelte-wjntiu"></span>` : ``}</div>`} <img${add_attribute("src", path, 0)}${add_attribute("alt", alt, 0)} class="image svelte-wjntiu"${add_attribute("style", styles, 0)} loading="lazy"${add_attribute("this", imageElement, 0)}> </div>`;
});
const css$1 = {
  code: ".image-container.svelte-x8oy1v{border-radius:18px;overflow:hidden;position:relative;height:700px;margin-bottom:20px}.image-container.loaded.svelte-x8oy1v{box-shadow:0px 0px 15px black}.overlay.svelte-x8oy1v{position:absolute;background-color:rgba(0, 0, 0, 0.289);width:100%;height:100%;top:0;left:0}.text.svelte-x8oy1v{position:absolute;width:100%;height:100%;top:0;left:0;color:white;padding:40px;display:flex;flex-direction:column;gap:6px;justify-content:center}.cta-btns.svelte-x8oy1v{margin-top:6px;display:flex;gap:6px}h1.svelte-x8oy1v{font-weight:bold;font-size:3.5em;line-height:1em}h3.svelte-x8oy1v{font-weight:bold;font-size:2em;margin-top:12px;margin-bottom:8px}",
  map: `{"version":3,"file":"Hero.svelte","sources":["Hero.svelte"],"sourcesContent":["<script>\\r\\n\\timport Placeholder from '$lib/Placeholder.svelte';\\r\\n\\timport Button1 from '$lib/Button1.svelte';\\r\\n\\timport { goto } from '$app/navigation';\\r\\n\\timport { scrollToMiddle } from './pageUtils';\\r\\n\\tlet imageLoaded = false;\\r\\n\\r\\n\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"image-container\\" class:loaded={imageLoaded}>\\r\\n\\t<Placeholder path=\\"/farm.jpg\\" bind:loaded={imageLoaded} />\\r\\n\\t<div class=\\"overlay\\"></div>\\r\\n\\t<div class=\\"text\\">\\r\\n\\t\\t<h1>Master Your Soil, Master Your Water</h1>\\r\\n\\t\\t<h3>Using NASA's insights to ensure every drop and every acre counts.</h3>\\r\\n\\r\\n\\t\\t<div class=\\"cta-btns\\">\\r\\n\\t\\t\\t<Button1\\r\\n\\t\\t\\t\\tcontent=\\"Estimate Soil Moisture\\"\\r\\n\\t\\t\\t\\tstyle=\\"filled\\"\\r\\n\\t\\t\\t\\tshadow={true}\\r\\n\\t\\t\\t\\ton:click={() => scrollToMiddle(\\"estimate\\")}\\r\\n\\t\\t\\t/>\\r\\n\\t\\t</div>\\r\\n\\t</div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t.image-container {\\r\\n\\t\\tborder-radius: 18px;\\r\\n\\t\\toverflow: hidden;\\r\\n\\t\\tposition: relative;\\r\\n\\r\\n\\t\\theight: 700px;\\r\\n\\t\\tmargin-bottom: 20px;\\r\\n\\t}\\r\\n\\t.image-container.loaded {\\r\\n\\t\\tbox-shadow: 0px 0px 15px black;\\r\\n\\t}\\r\\n\\t.overlay {\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tbackground-color: rgba(0, 0, 0, 0.289);\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 100%;\\r\\n\\t\\ttop: 0;\\r\\n\\t\\tleft: 0;\\r\\n\\t}\\r\\n\\r\\n\\t.text {\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 100%;\\r\\n\\t\\ttop: 0;\\r\\n\\t\\tleft: 0;\\r\\n\\t\\tcolor: white;\\r\\n\\t\\tpadding: 40px;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 6px;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t}\\r\\n\\t.cta-btns {\\r\\n\\t\\tmargin-top: 6px;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tgap: 6px;\\r\\n\\t}\\r\\n\\th1 {\\r\\n\\t\\tfont-weight: bold;\\r\\n\\t\\tfont-size: 3.5em;\\r\\n\\t\\tline-height: 1em;\\r\\n\\t}\\r\\n\\r\\n\\th3 {\\r\\n\\t\\tfont-weight: bold;\\r\\n\\t\\tfont-size: 2em;\\r\\n\\t\\tmargin-top: 12px;\\r\\n\\t\\tmargin-bottom: 8px;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA6BC,8BAAiB,CAChB,aAAa,CAAE,IAAI,CACnB,QAAQ,CAAE,MAAM,CAChB,QAAQ,CAAE,QAAQ,CAElB,MAAM,CAAE,KAAK,CACb,aAAa,CAAE,IAChB,CACA,gBAAgB,qBAAQ,CACvB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAC1B,CACA,sBAAS,CACR,QAAQ,CAAE,QAAQ,CAClB,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CACtC,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CACP,CAEA,mBAAM,CACL,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,GAAG,CACR,eAAe,CAAE,MAClB,CACA,uBAAU,CACT,UAAU,CAAE,GAAG,CACf,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,GACN,CACA,gBAAG,CACF,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GACd,CAEA,gBAAG,CACF,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,GAAG,CACd,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,GAChB"}`
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let imageLoaded = false;
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="${["image-container svelte-x8oy1v", imageLoaded ? "loaded" : ""].join(" ").trim()}">${validate_component(Placeholder, "Placeholder").$$render(
      $$result,
      { path: "/farm.jpg", loaded: imageLoaded },
      {
        loaded: ($$value) => {
          imageLoaded = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="overlay svelte-x8oy1v"></div> <div class="text svelte-x8oy1v"><h1 class="svelte-x8oy1v" data-svelte-h="svelte-1pjaxls">Master Your Soil, Master Your Water</h1> <h3 class="svelte-x8oy1v" data-svelte-h="svelte-1cy8dzi">Using NASA&#39;s insights to ensure every drop and every acre counts.</h3> <div class="cta-btns svelte-x8oy1v">${validate_component(Button1, "Button1").$$render(
      $$result,
      {
        content: "Estimate Soil Moisture",
        style: "filled",
        shadow: true
      },
      {},
      {}
    )}</div></div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
const isBrowser = typeof document !== "undefined";
function clientWritable(initialValue) {
  const store = writable(initialValue);
  function set(value) {
    if (isBrowser) {
      store.set(value);
    }
  }
  function update2(updater) {
    if (isBrowser) {
      store.update(updater);
    }
  }
  return {
    subscribe: store.subscribe,
    set,
    update: update2
  };
}
let toastsCounter = 0;
function createToastState() {
  const toasts = clientWritable([]);
  const heights = clientWritable([]);
  function addToast(data) {
    toasts.update((prev2) => [data, ...prev2]);
  }
  function create(data) {
    const { message: message2, ...rest } = data;
    const id = typeof data?.id === "number" || data.id && data.id?.length > 0 ? data.id : toastsCounter++;
    const dismissable = data.dismissable === void 0 ? true : data.dismissable;
    const type = data.type === void 0 ? "default" : data.type;
    const $toasts = get_store_value(toasts);
    const alreadyExists = $toasts.find((toast) => {
      return toast.id === id;
    });
    if (alreadyExists) {
      toasts.update((prev2) => prev2.map((toast) => {
        if (toast.id === id) {
          return {
            ...toast,
            ...data,
            id,
            title: message2,
            dismissable,
            type,
            updated: true
          };
        }
        return {
          ...toast,
          updated: false
        };
      }));
    } else {
      addToast({ ...rest, id, title: message2, dismissable, type });
    }
    return id;
  }
  function dismiss(id) {
    if (id === void 0) {
      toasts.update((prev2) => prev2.map((toast) => ({ ...toast, dismiss: true })));
      return;
    }
    toasts.update((prev2) => prev2.map((toast) => toast.id === id ? { ...toast, dismiss: true } : toast));
    return id;
  }
  function remove(id) {
    if (id === void 0) {
      toasts.set([]);
      return;
    }
    toasts.update((prev2) => prev2.filter((toast) => toast.id !== id));
    return id;
  }
  function message(message2, data) {
    return create({ ...data, type: "default", message: message2 });
  }
  function error(message2, data) {
    return create({ ...data, type: "error", message: message2 });
  }
  function success(message2, data) {
    return create({ ...data, type: "success", message: message2 });
  }
  function info(message2, data) {
    return create({ ...data, type: "info", message: message2 });
  }
  function warning(message2, data) {
    return create({ ...data, type: "warning", message: message2 });
  }
  function loading(message2, data) {
    return create({ ...data, type: "loading", message: message2 });
  }
  function promise(promise2, data) {
    if (!data) {
      return;
    }
    let id = void 0;
    if (data.loading !== void 0) {
      id = create({
        ...data,
        promise: promise2,
        type: "loading",
        message: data.loading
      });
    }
    const p = promise2 instanceof Promise ? promise2 : promise2();
    let shouldDismiss = id !== void 0;
    p.then((response) => {
      if (response && typeof response.ok === "boolean" && !response.ok) {
        shouldDismiss = false;
        const message2 = typeof data.error === "function" ? (
          // @ts-expect-error: Incorrect response type
          data.error(`HTTP error! status: ${response.status}`)
        ) : data.error;
        create({ id, type: "error", message: message2 });
      } else if (data.success !== void 0) {
        shouldDismiss = false;
        const message2 = (
          // @ts-expect-error: TODO: Better function checking
          typeof data.success === "function" ? data.success(response) : data.success
        );
        create({ id, type: "success", message: message2 });
      }
    }).catch((error2) => {
      if (data.error !== void 0) {
        shouldDismiss = false;
        const message2 = (
          // @ts-expect-error: TODO: Better function checking
          typeof data.error === "function" ? data.error(error2) : data.error
        );
        create({ id, type: "error", message: message2 });
      }
    }).finally(() => {
      if (shouldDismiss) {
        dismiss(id);
        id = void 0;
      }
      data.finally?.();
    });
    return id;
  }
  function custom(component, data) {
    const id = data?.id || toastsCounter++;
    create({ component, id, ...data });
    return id;
  }
  function removeHeight(id) {
    heights.update((prev2) => prev2.filter((height) => height.toastId !== id));
  }
  function setHeight(data) {
    const exists = get_store_value(heights).find((el) => el.toastId === data.toastId);
    if (exists === void 0) {
      heights.update((prev2) => [data, ...prev2]);
      return;
    }
    heights.update((prev2) => prev2.map((el) => {
      if (el.toastId === data.toastId) {
        return data;
      } else {
        return el;
      }
    }));
  }
  function reset() {
    toasts.set([]);
    heights.set([]);
  }
  return {
    // methods
    create,
    addToast,
    dismiss,
    remove,
    message,
    error,
    success,
    info,
    warning,
    loading,
    promise,
    custom,
    removeHeight,
    setHeight,
    reset,
    // stores
    toasts,
    heights
  };
}
const toastState = createToastState();
function toastFunction(message, data) {
  return toastState.create({
    message,
    ...data
  });
}
const basicToast = toastFunction;
Object.assign(basicToast, {
  success: toastState.success,
  info: toastState.info,
  warning: toastState.warning,
  error: toastState.error,
  custom: toastState.custom,
  message: toastState.message,
  promise: toastState.promise,
  dismiss: toastState.dismiss,
  loading: toastState.loading
});
const css = {
  code: ".plant.svelte-17mof9g.svelte-17mof9g{width:5%}.cont.svelte-17mof9g.svelte-17mof9g{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:20px;padding:16px}.container-a.svelte-17mof9g.svelte-17mof9g{justify-content:center;align-items:center;display:flex;flex-direction:column;gap:20px}.irrigation.svelte-17mof9g.svelte-17mof9g{display:flex;flex-direction:column;gap:8px}.irrigation-methods.svelte-17mof9g.svelte-17mof9g{flex-grow:0;width:1247px}.soil-cards.svelte-17mof9g.svelte-17mof9g{display:flex;flex-wrap:wrap;justify-content:center;gap:16px}.btns.svelte-17mof9g.svelte-17mof9g{display:flex;gap:8px;margin-inline:auto;width:100%;z-index:2}.progress.svelte-17mof9g.svelte-17mof9g{width:100%}.irrigation.svelte-17mof9g h2.svelte-17mof9g{margin-bottom:20px}h2.svelte-17mof9g.svelte-17mof9g{font-weight:bold;margin-top:40px;line-height:1em}.irrigation.svelte-17mof9g.svelte-17mof9g{margin-top:80px}.irrigation.svelte-17mof9g h1.svelte-17mof9g{font-weight:bold;margin-top:40px;line-height:1em}.bottom.svelte-17mof9g.svelte-17mof9g{display:flex;justify-content:space-between;font-size:18px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n\\timport LightSwitch from '$lib/LightSwitch.svelte';\\r\\n\\timport { Button } from '$lib/components/ui/button';\\r\\n\\timport Link from '$lib/Link.svelte';\\r\\n\\timport LocationInput from '$lib/LocationInput.svelte';\\r\\n\\timport SoilCard from '$lib/SoilCard.svelte';\\r\\n\\timport Rive from '$lib/Rive.svelte';\\r\\n\\timport Months from '$lib/Months.svelte';\\r\\n\\timport { soilTypes } from '$lib/soil';\\r\\n\\timport TimedProgress from '$lib/TimedProgress.svelte';\\r\\n\\timport Placeholder from '$lib/Placeholder.svelte';\\r\\n\\timport Button1 from '$lib/Button1.svelte';\\r\\n\\timport { goto } from '$app/navigation';\\r\\n\\timport Hero from '$lib/Hero.svelte';\\r\\n\\timport Irrigations from '$lib/Irrigations.svelte';\\r\\n\\timport { toast } from 'svelte-sonner';\\r\\n\\timport { scrollToMiddle, scrollToTopMiddle } from '$lib/pageUtils';\\r\\n\\r\\n\\tfunction log(location, month) {\\r\\n\\t\\tpredictedData = null;\\r\\n\\t\\tconsole.error({ location, month });\\r\\n\\t}\\r\\n\\tfunction calculateChunks(lat, lng) {\\r\\n\\t\\treturn {\\r\\n\\t\\t\\tlatChunk: Math.floor((lat + 90) / 0.25),\\r\\n\\t\\t\\tlngChunk: Math.floor((lng + 180) / 0.25)\\r\\n\\t\\t};\\r\\n\\t}\\r\\n\\tlet predicting = false;\\r\\n\\tasync function predict(lat, lng, month) {\\r\\n\\t\\tif (!lat || !lng) {\\r\\n\\t\\t\\treturn null;\\r\\n\\t\\t}\\r\\n\\t\\tpredictedData = null;\\r\\n\\t\\tpredicting = true;\\r\\n\\t\\tconst { latChunk, lngChunk } = calculateChunks(lat, lng);\\r\\n\\t\\tconsole.log({ lat, lng, latChunk, lngChunk, month });\\r\\n\\t\\t// return\\r\\n\\t\\tconst response = await fetch(\\r\\n\\t\\t\\t\`/api/predict?latChunk=\${latChunk}&lngChunk=\${lngChunk}&month=\${month}\`\\r\\n\\t\\t);\\r\\n\\t\\tconst data = await response.json();\\r\\n\\t\\tconsole.log(data);\\r\\n\\t\\tpredicting = false;\\r\\n\\t\\tpredictedData = data.prediction[0];\\r\\n\\t}\\r\\n\\tlet predictedData = null;\\r\\n\\tlet selected;\\r\\n\\tlet selectedMonth;\\r\\n\\t$: log(selected, selectedMonth);\\r\\n\\r\\n\\tlet selectedSoil = null;\\r\\n\\t// let imageLoaded = false;\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"cont\\">\\r\\n\\t<Hero />\\r\\n\\t<!-- <img class=\\"background-img\\" src=\\"/farm.jpg\\" alt=\\"\\"> -->\\r\\n\\t<div class=\\"plant\\">\\r\\n\\t\\t<Rive width=\\"100px\\" height=\\"100px\\" url=\\"/leaf.riv\\" />\\r\\n\\t</div>\\r\\n\\t<!-- <LightSwitch /> -->\\r\\n\\t<!-- <h1>Crop Dusters</h1> -->\\r\\n\\t<!-- <p>Visit <Link href=\\"https://kit.svelte.dev\\">kit.svelte.dev</Link> to read the documentation</p> -->\\r\\n\\t<div class=\\"container-a\\">\\r\\n\\t\\t<h1 id=\\"estimate\\">Soil Moisture Estimator</h1>\\r\\n\\t\\t<div class=\\"btns\\">\\r\\n\\t\\t\\t<Months bind:selected={selectedMonth} />\\r\\n\\t\\t\\t<LocationInput bind:selected />\\r\\n\\t\\t\\t<Button\\r\\n\\t\\t\\t\\tclass=\\"h-[56px] w-[140px]  text-lg text-black  {selected\\r\\n\\t\\t\\t\\t\\t? 'bg-accent hover:bg-accent'\\r\\n\\t\\t\\t\\t\\t: 'cursor-not-allowed bg-gray-400 text-gray-600 hover:bg-gray-400'}\\"\\r\\n\\t\\t\\t\\ton:click={() => {\\r\\n\\t\\t\\t\\t\\tif (!selected) {\\r\\n\\t\\t\\t\\t\\t\\treturn;\\r\\n\\t\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\t\\tpredict(selected.lat, selected.lng, selectedMonth.value);\\r\\n\\t\\t\\t\\t}}>Estimate</Button\\r\\n\\t\\t\\t>\\r\\n\\t\\t</div>\\r\\n\\t\\t{#if predicting}\\r\\n\\t\\t\\t<h3>\\r\\n\\t\\t\\t\\tHang tight, we're analyzing NASA's datasets to estimate the moisture levels in the area\\r\\n\\t\\t\\t</h3>\\r\\n\\t\\t\\t<div class=\\"progress\\">\\r\\n\\t\\t\\t\\t<TimedProgress duration=\\"15\\" />\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t{/if}\\r\\n\\t\\t{#if predictedData}\\r\\n\\t\\t\\t<div class=\\"predicted\\">\\r\\n\\t\\t\\t\\t<h3>\\r\\n\\t\\t\\t\\t\\tThe soil moisture estimate in the selected area is <span class=\\"text-accent\\"\\r\\n\\t\\t\\t\\t\\t\\t>{predictedData.toFixed()}%</span\\r\\n\\t\\t\\t\\t\\t>.\\r\\n\\t\\t\\t\\t</h3>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t{/if}\\r\\n\\r\\n\\t\\t<!-- {#each candidates as candidate}\\r\\n\\t\\t\\t\\t <div class=\\"location\\">\\r\\n\\t\\t\\t\\t\\t\\t<span class=\\"font-bold\\">{candidate.name}</span>\\r\\n\\t\\t\\t\\t\\t\\t<span>{candidate.formatted_address}</span>\\r\\n\\t\\t\\t\\t </div>\\r\\n\\t\\t\\t{/each} -->\\r\\n\\t\\t<div class=\\"irrigation\\">\\r\\n\\t\\t\\t<h1>Irrigation Methods</h1>\\r\\n\\t\\t\\t<h4>Please Select Your <span class=\\"text-primary\\">Soil</span> Type:</h4>\\r\\n\\t\\t\\t<div class=\\"soil-cards\\">\\r\\n\\t\\t\\t\\t{#each Object.entries(soilTypes) as [soilType, data]}\\r\\n\\t\\t\\t\\t\\t<SoilCard\\r\\n\\t\\t\\t\\t\\t\\t{soilType}\\r\\n\\t\\t\\t\\t\\t\\t{data}\\r\\n\\t\\t\\t\\t\\t\\tselected={selectedSoil == soilType}\\r\\n\\t\\t\\t\\t\\t\\ton:click={() => {\\r\\n\\t\\t\\t\\t\\t\\t\\tselectedSoil = soilType;\\r\\n\\t\\t\\t\\t\\t\\t\\tconsole.log({ soilType, data });\\r\\n\\t\\t\\t\\t\\t\\t\\trequestAnimationFrame(() => {\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tscrollToTopMiddle('irrigation');\\r\\n\\t\\t\\t\\t\\t\\t\\t});\\r\\n\\t\\t\\t\\t\\t\\t}}\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t{#if selectedSoil}\\r\\n\\t\\t\\t\\t<div class=\\"bottom\\" id=\\"irrigation\\">\\r\\n\\t\\t\\t\\t\\t<div class=\\"irrigation-methods\\">\\r\\n\\t\\t\\t\\t\\t\\t<h2>Recommended irrigation methods for {selectedSoil} soil:</h2>\\r\\n\\t\\t\\t\\t\\t\\t<Irrigations irrigations={soilTypes[selectedSoil].irrigations} />\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t{/if}\\r\\n\\t\\t</div>\\r\\n\\t</div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t.plant {\\r\\n\\t\\twidth: 5%;\\r\\n\\t}\\r\\n\\t.cont {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 20px;\\r\\n\\t\\t/* height: 100vh; */\\r\\n\\t\\t/* margin-top: 190px; */\\r\\n\\t\\t/* border: 1px solid red; */\\r\\n\\t\\tpadding: 16px;\\r\\n\\t}\\r\\n\\t.container-a {\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 20px;\\r\\n\\t\\t/* border: 1px solid red; */\\r\\n\\t}\\r\\n\\t.irrigation {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 8px;\\r\\n\\t\\t/* width: 100%; */\\r\\n\\t}\\r\\n\\t.irrigation-methods {\\r\\n\\t\\tflex-grow: 0;\\r\\n\\t\\twidth: 1247px;\\r\\n\\t\\t/* width: min-content; */\\r\\n\\t}\\r\\n\\t.soil-cards {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-wrap: wrap;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\tgap: 16px;\\r\\n\\t}\\r\\n\\t.btns {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tgap: 8px;\\r\\n\\t\\tmargin-inline: auto;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tz-index: 2;\\r\\n\\t}\\r\\n\\t.progress {\\r\\n\\t\\twidth: 100%;\\r\\n\\t}\\r\\n\\r\\n\\t.irrigation h2 {\\r\\n\\t\\tmargin-bottom: 20px;\\r\\n\\t}\\r\\n\\th2 {\\r\\n\\t\\t/* font-size: 2em; */\\r\\n\\t\\tfont-weight: bold;\\r\\n\\t\\tmargin-top: 40px;\\r\\n\\r\\n\\t\\tline-height: 1em;\\r\\n\\t}\\r\\n\\t.irrigation {\\r\\n\\t\\tmargin-top: 80px;\\r\\n\\t}\\r\\n\\t.irrigation h1 {\\r\\n\\t\\t/* font-size: 2em; */\\r\\n\\t\\tfont-weight: bold;\\r\\n\\t\\tmargin-top: 40px;\\r\\n\\r\\n\\t\\tline-height: 1em;\\r\\n\\t}\\r\\n\\t.bottom {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: space-between;\\r\\n\\t\\tfont-size: 18px;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAyIC,oCAAO,CACN,KAAK,CAAE,EACR,CACA,mCAAM,CACL,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAAI,CAIT,OAAO,CAAE,IACV,CACA,0CAAa,CACZ,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAEN,CACA,yCAAY,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,GAEN,CACA,iDAAoB,CACnB,SAAS,CAAE,CAAC,CACZ,KAAK,CAAE,MAER,CACA,yCAAY,CACX,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,MAAM,CACvB,GAAG,CAAE,IACN,CACA,mCAAM,CACL,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,GAAG,CACR,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,CACV,CACA,uCAAU,CACT,KAAK,CAAE,IACR,CAEA,0BAAW,CAAC,iBAAG,CACd,aAAa,CAAE,IAChB,CACA,gCAAG,CAEF,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,IAAI,CAEhB,WAAW,CAAE,GACd,CACA,yCAAY,CACX,UAAU,CAAE,IACb,CACA,0BAAW,CAAC,iBAAG,CAEd,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,IAAI,CAEhB,WAAW,CAAE,GACd,CACA,qCAAQ,CACP,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,SAAS,CAAE,IACZ"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function log(location, month) {
    predictedData = null;
    console.error({ location, month });
  }
  let predictedData = null;
  let selected;
  let selectedMonth;
  let selectedSoil = null;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      log(selected, selectedMonth);
    }
    $$rendered = `<div class="cont svelte-17mof9g">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}  <div class="plant svelte-17mof9g">${validate_component(Rive, "Rive").$$render(
      $$result,
      {
        width: "100px",
        height: "100px",
        url: "/leaf.riv"
      },
      {},
      {}
    )}</div>    <div class="container-a svelte-17mof9g"><h1 id="estimate" data-svelte-h="svelte-dra8pn">Soil Moisture Estimator</h1> <div class="btns svelte-17mof9g">${validate_component(Months, "Months").$$render(
      $$result,
      { selected: selectedMonth },
      {
        selected: ($$value) => {
          selectedMonth = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(LocationInput, "LocationInput").$$render(
      $$result,
      { selected },
      {
        selected: ($$value) => {
          selected = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "h-[56px] w-[140px]  text-lg text-black  " + (selected ? "bg-accent hover:bg-accent" : "cursor-not-allowed bg-gray-400 text-gray-600 hover:bg-gray-400")
      },
      {},
      {
        default: () => {
          return `Estimate`;
        }
      }
    )}</div> ${``} ${predictedData ? `<div class="predicted"><h3>The soil moisture estimate in the selected area is <span class="text-accent">${escape(predictedData.toFixed())}%</span>.</h3></div>` : ``}  <div class="irrigation svelte-17mof9g"><h1 class="svelte-17mof9g" data-svelte-h="svelte-1bwl1fm">Irrigation Methods</h1> <h4>Please Select Your <span class="text-primary" data-svelte-h="svelte-aw6ops">Soil</span> Type:</h4> <div class="soil-cards svelte-17mof9g">${each(Object.entries(soilTypes), ([soilType, data]) => {
      return `${validate_component(SoilCard, "SoilCard").$$render(
        $$result,
        {
          soilType,
          data,
          selected: selectedSoil == soilType
        },
        {},
        {}
      )}`;
    })}</div> ${``}</div></div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
