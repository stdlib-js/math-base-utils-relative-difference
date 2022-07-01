// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";var m={"max-abs":function(t,n){return(t=i(t))<(n=i(n))?n:t},max:function(t,n){return t<n?n:t},"min-abs":function(t,n){return(t=i(t))>(n=i(n))?n:t},min:function(t,n){return t>n?n:t},"mean-abs":function(t,n){return(t=i(t))+((n=i(n))-t)/2},mean:function(t,n){return t+(n-t)/2},x:function(t){return t},y:function(t,n){return n}};function o(o,a,d){var f,u;if(s(o)||s(a))return NaN;if(o===r||o===e||a===r||a===e)return o===a?NaN:r;if(o===a)return 0;if(t(d))f=d;else if(void 0===d&&(d="max-abs"),void 0===(f=m[d]))throw new Error(n("0Hj4b",d));return 0===(u=f(o,a))?NaN:i((o-a)/u)}export{o as default};
//# sourceMappingURL=index.mjs.map
