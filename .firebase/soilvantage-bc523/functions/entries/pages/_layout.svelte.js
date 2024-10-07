import { c as create_ssr_component, a as validate_store, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { t as themeStorageKey, m as modeStorageKey, d as disableTransitions, a as themeColors, b as darkClassNames, l as lightClassNames } from "../../chunks/stores.js";
import "../../chunks/client.js";
import { p as page } from "../../chunks/stores2.js";
const css = {
  code: ".svelte-1s388jx.svelte-1s388jx{--width:65%}#navbar.svelte-1s388jx.svelte-1s388jx{padding:20px 0px;position:sticky;top:0;z-index:4;background-color:var(--background)}.nav-inner.svelte-1s388jx>div.svelte-1s388jx{height:100%;overflow:hidden;display:flex;align-items:center;gap:4px;& img {\r\n			height: 100%;\r\n		}}.left.svelte-1s388jx.svelte-1s388jx{gap:8px !important;&:hover {\r\n			cursor: pointer;\r\n		}}.nav-btns.svelte-1s388jx.svelte-1s388jx{display:flex;gap:4px}.nav-inner.svelte-1s388jx.svelte-1s388jx{width:var(--width);height:60px;position:relative;margin:auto;display:flex;gap:4px;justify-content:space-between}@media(max-width: 768px){.svelte-1s388jx.svelte-1s388jx{--width:90%}}@media(max-width: 1100px){.nav-btns.svelte-1s388jx.svelte-1s388jx{display:none}}",
  map: `{"version":3,"file":"Navbar.svelte","sources":["Navbar.svelte"],"sourcesContent":["<script>\\r\\n\\timport Button1 from '$lib/Button1.svelte';\\r\\n\\timport { goto } from '$app/navigation';\\r\\n\\timport { page } from '$app/stores';\\r\\n\\tconst pages = [\\r\\n\\t\\t{ label: 'Moistor Estimate', path: '/estimator/' },\\r\\n\\t\\t// { label: 'Home', path: '/' },\\r\\n\\t\\t{ label: 'About', path: '/about-us/' },\\r\\n\\t\\t{ label: 'Services', path: '/services/' },\\r\\n\\t\\t{ label: 'Contact', path: '/contact/' }\\r\\n\\t];\\r\\n\\t$: selected = pages.find((p) => {\\r\\n\\t\\treturn p.path.includes($page.url.pathname);\\r\\n\\t}).label;\\r\\n\\r\\n\\t$: console.log(selected);\\r\\n<\/script>\\r\\n\\r\\n<div id=\\"navbar\\">\\r\\n\\t<div class=\\"nav-inner\\">\\r\\n\\t\\t<!-- svelte-ignore a11y-no-static-element-interactions -->\\r\\n\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\r\\n\\t\\t<div class=\\"left\\" on:click={() => goto('/home/')}>\\r\\n\\t\\t\\t<img src=\\"/logo.png\\" alt=\\"\\" />\\r\\n\\t\\t\\t<h2 class=\\"title\\">SoilVantage</h2>\\r\\n\\t\\t</div>\\r\\n\\t\\t<div class=\\"right\\">\\r\\n\\t\\t\\t<div class=\\"nav-btns font-bold\\">\\r\\n        The Crop Dusters\\r\\n\\t\\t\\t\\t<!-- {#each pages as page}\\r\\n\\t\\t\\t\\t\\t<Button1\\r\\n\\t\\t\\t\\t\\t\\tcontent={page.label}\\r\\n\\t\\t\\t\\t\\t\\tselected={selected == page.label}\\r\\n\\t\\t\\t\\t\\t\\ton:click={() => (selected = page.label)}\\r\\n\\t\\t\\t\\t\\t\\ton:click={() => goto(\`\${page.path}\`)}\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t{/each} -->\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t</div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t* {\\r\\n\\t\\t--width: 65%;\\r\\n\\t}\\r\\n\\r\\n\\t#navbar {\\r\\n\\t\\t/* border: 1px solid red; */\\r\\n\\t\\tpadding: 20px 0px;\\r\\n\\r\\n\\t\\tposition: sticky;\\r\\n\\t\\ttop: 0;\\r\\n\\t\\tz-index: 4;\\r\\n\\t\\tbackground-color: var(--background);\\r\\n\\t\\t/* box-shadow: 0px 0px 5px black; */\\r\\n\\t}\\r\\n\\t.nav-inner > div {\\r\\n\\t\\theight: 100%;\\r\\n\\t\\toverflow: hidden;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tgap: 4px;\\r\\n\\t\\t& img {\\r\\n\\t\\t\\theight: 100%;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\t.left {\\r\\n\\t\\tgap: 8px !important;\\r\\n\\r\\n\\t\\t&:hover {\\r\\n\\t\\t\\tcursor: pointer;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\t.nav-btns {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tgap: 4px;\\r\\n\\t}\\r\\n\\r\\n\\t.nav-inner {\\r\\n\\t\\twidth: var(--width);\\r\\n\\t\\theight: 60px;\\r\\n\\t\\t/* overflow: hidden; */\\r\\n\\t\\tposition: relative;\\r\\n\\t\\tmargin: auto;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tgap: 4px;\\r\\n\\t\\tjustify-content: space-between;\\r\\n\\t}\\r\\n\\t\\r\\n\\t@media (max-width: 768px) {\\r\\n\\t\\t* {\\r\\n\\t\\t\\t--width: 90%;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\t@media (max-width: 1100px) {\\r\\n\\t\\t.nav-btns {\\r\\n\\t\\t\\tdisplay: none;\\r\\n\\t\\t}\\r\\n\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA2CC,8BAAE,CACD,OAAO,CAAE,GACV,CAEA,qCAAQ,CAEP,OAAO,CAAE,IAAI,CAAC,GAAG,CAEjB,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,CAAC,CACN,OAAO,CAAE,CAAC,CACV,gBAAgB,CAAE,IAAI,YAAY,CAEnC,CACA,yBAAU,CAAG,kBAAI,CAChB,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,MAAM,CAChB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,GAAG,CACR,CAAC,CAAC,GAAG,CAAC;AACR,GAAG,QAAQ,IAAI;AACf,GACC,CACA,mCAAM,CACL,GAAG,CAAE,GAAG,CAAC,UAAU,CAEnB,CAAC,MAAM,CAAC;AACV,GAAG,QAAQ,OAAO;AAClB,GACC,CACA,uCAAU,CACT,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,GACN,CAEA,wCAAW,CACV,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,MAAM,CAAE,IAAI,CAEZ,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,GAAG,CACR,eAAe,CAAE,aAClB,CAEA,MAAO,YAAY,KAAK,CAAE,CACzB,8BAAE,CACD,OAAO,CAAE,GACV,CACD,CACA,MAAO,YAAY,MAAM,CAAE,CAC1B,uCAAU,CACT,OAAO,CAAE,IACV,CAED"}`
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const pages = [
    {
      label: "Moistor Estimate",
      path: "/estimator/"
    },
    // { label: 'Home', path: '/' },
    { label: "About", path: "/about-us/" },
    { label: "Services", path: "/services/" },
    { label: "Contact", path: "/contact/" }
  ];
  $$result.css.add(css);
  selected = pages.find((p) => {
    return p.path.includes($page.url.pathname);
  }).label;
  {
    console.log(selected);
  }
  $$unsubscribe_page();
  return `<div id="navbar" class="svelte-1s388jx"><div class="nav-inner svelte-1s388jx">  <div class="left svelte-1s388jx"><img src="/logo.png" alt="" class="svelte-1s388jx"> <h2 class="title svelte-1s388jx" data-svelte-h="svelte-a1lqfu">SoilVantage</h2></div> <div class="right svelte-1s388jx"><div class="nav-btns font-bold svelte-1s388jx" data-svelte-h="svelte-1kmud2s">The Crop Dusters
				</div></div></div> </div>`;
});
function defineConfig(config) {
  return config;
}
function setInitialMode({ defaultMode, themeColors: themeColors2, darkClassNames: darkClassNames2 = ["dark"], lightClassNames: lightClassNames2 = [], defaultTheme = "" }) {
  const rootEl = document.documentElement;
  const mode = localStorage.getItem("mode-watcher-mode") || defaultMode;
  const theme = localStorage.getItem("mode-watcher-theme") || defaultTheme;
  const light = mode === "light" || mode === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (light) {
    if (darkClassNames2.length)
      rootEl.classList.remove(...darkClassNames2);
    if (lightClassNames2.length)
      rootEl.classList.add(...lightClassNames2);
  } else {
    if (lightClassNames2.length)
      rootEl.classList.remove(...lightClassNames2);
    if (darkClassNames2.length)
      rootEl.classList.add(...darkClassNames2);
  }
  rootEl.style.colorScheme = light ? "light" : "dark";
  if (themeColors2) {
    const themeMetaEl = document.querySelector('meta[name="theme-color"]');
    if (themeMetaEl) {
      themeMetaEl.setAttribute("content", mode === "light" ? themeColors2.light : themeColors2.dark);
    }
  }
  if (theme) {
    rootEl.setAttribute("data-theme", theme);
    localStorage.setItem("mode-watcher-theme", theme);
  }
  localStorage.setItem("mode-watcher-mode", mode);
}
const Mode_watcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let trueNonce;
  let $$unsubscribe_themeStorageKeyStore;
  let $$unsubscribe_modeStorageKeyStore;
  validate_store(themeStorageKey, "themeStorageKeyStore");
  $$unsubscribe_themeStorageKeyStore = subscribe(themeStorageKey, (value) => value);
  validate_store(modeStorageKey, "modeStorageKeyStore");
  $$unsubscribe_modeStorageKeyStore = subscribe(modeStorageKey, (value) => value);
  let { track = true } = $$props;
  let { defaultMode = "system" } = $$props;
  let { themeColors: themeColors$1 = void 0 } = $$props;
  let { disableTransitions: disableTransitions$1 = true } = $$props;
  let { darkClassNames: darkClassNames$1 = ["dark"] } = $$props;
  let { lightClassNames: lightClassNames$1 = [] } = $$props;
  let { defaultTheme = "" } = $$props;
  let { nonce = "" } = $$props;
  let { themeStorageKey: themeStorageKey$1 = "mode-watcher-theme" } = $$props;
  let { modeStorageKey: modeStorageKey$1 = "mode-watcher-mode" } = $$props;
  const initConfig = defineConfig({
    defaultMode,
    themeColors: themeColors$1,
    darkClassNames: darkClassNames$1,
    lightClassNames: lightClassNames$1,
    defaultTheme,
    modeStorageKey: modeStorageKey$1,
    themeStorageKey: themeStorageKey$1
  });
  if ($$props.track === void 0 && $$bindings.track && track !== void 0) $$bindings.track(track);
  if ($$props.defaultMode === void 0 && $$bindings.defaultMode && defaultMode !== void 0) $$bindings.defaultMode(defaultMode);
  if ($$props.themeColors === void 0 && $$bindings.themeColors && themeColors$1 !== void 0) $$bindings.themeColors(themeColors$1);
  if ($$props.disableTransitions === void 0 && $$bindings.disableTransitions && disableTransitions$1 !== void 0) $$bindings.disableTransitions(disableTransitions$1);
  if ($$props.darkClassNames === void 0 && $$bindings.darkClassNames && darkClassNames$1 !== void 0) $$bindings.darkClassNames(darkClassNames$1);
  if ($$props.lightClassNames === void 0 && $$bindings.lightClassNames && lightClassNames$1 !== void 0) $$bindings.lightClassNames(lightClassNames$1);
  if ($$props.defaultTheme === void 0 && $$bindings.defaultTheme && defaultTheme !== void 0) $$bindings.defaultTheme(defaultTheme);
  if ($$props.nonce === void 0 && $$bindings.nonce && nonce !== void 0) $$bindings.nonce(nonce);
  if ($$props.themeStorageKey === void 0 && $$bindings.themeStorageKey && themeStorageKey$1 !== void 0) $$bindings.themeStorageKey(themeStorageKey$1);
  if ($$props.modeStorageKey === void 0 && $$bindings.modeStorageKey && modeStorageKey$1 !== void 0) $$bindings.modeStorageKey(modeStorageKey$1);
  {
    disableTransitions.set(disableTransitions$1);
  }
  {
    themeColors.set(themeColors$1);
  }
  {
    darkClassNames.set(darkClassNames$1);
  }
  {
    lightClassNames.set(lightClassNames$1);
  }
  {
    modeStorageKey.set(modeStorageKey$1);
  }
  {
    themeStorageKey.set(themeStorageKey$1);
  }
  trueNonce = typeof window === "undefined" ? nonce : "";
  $$unsubscribe_themeStorageKeyStore();
  $$unsubscribe_modeStorageKeyStore();
  return `${$$result.head += `<!-- HEAD_svelte-1nen96w_START -->${themeColors$1 ? `   <meta name="theme-color"${add_attribute("content", themeColors$1.dark, 0)}>` : ``}${trueNonce ? ` <!-- HTML_TAG_START -->${`<script nonce=${trueNonce}>(` + setInitialMode.toString() + `)(` + JSON.stringify(initConfig) + `);<\/script>`}<!-- HTML_TAG_END -->` : ` <!-- HTML_TAG_START -->${`<script>(` + setInitialMode.toString() + `)(` + JSON.stringify(initConfig) + `);<\/script>`}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1nen96w_END -->`, ""}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mode_watcher, "ModeWatcher").$$render($$result, { defaultMode: "light" }, {}, {})} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
