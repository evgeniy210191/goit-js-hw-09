function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var i=r("7Y9D8");const[l,a,u,s]=['[name="delay"]','[name="step"]','[name="amount"]','[type="submit"]'].map((e=>document.querySelector(e)));s.addEventListener("click",(t=>{t.preventDefault();const n=Date.now();setTimeout((()=>{for(let t=1;t<=u.value;t++)setTimeout((()=>{let o=Date.now()-n;return(r=t,l=o,promise=new Promise(((t,n)=>{Math.random()>.5?t(e(i).Notify.failure(`❌ Rejected promise ${r} in ${l}ms`)):n(e(i).Notify.success(`✅ Fulfilled promise ${r} in ${l}ms`))}))).then((e=>e)).catch((e=>e));var r,l}),t*a.value)}),l.value)}));
//# sourceMappingURL=03-promises.dad82832.js.map
