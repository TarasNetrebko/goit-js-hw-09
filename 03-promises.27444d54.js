function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequire7bc7;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},t.parcelRequire7bc7=n);var u=n("eWCmQ");document.querySelector(".form");const l=document.querySelector("button"),i=document.querySelector(".delay"),c=document.querySelector(".amount"),d=document.querySelector(".step");function f(t,o){const r=Math.random()>.3;setTimeout((()=>{r?Promise.resolve(`Fulfilled promise ${t} in ${o}ms`).then((t=>e(u).Notify.success(t))):Promise.reject(`Rejected promise ${t} in ${o}ms`).catch((t=>e(u).Notify.failure(t)))}),o)}l.addEventListener("click",(function(e){e.preventDefault();let t=Number(i.value);for(let e=1;e<=c.value;e+=1)f(e,t),t+=Number(d.value)}));
//# sourceMappingURL=03-promises.27444d54.js.map
