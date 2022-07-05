// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).reldiff=e()}(this,(function(){"use strict";var t=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,a=o.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,l,p,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(c.call(t,e)||a.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),p="get"in r,y="set"in r,l&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),y&&f&&f.call(t,e,r.set),t};var l=r;function p(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var _=b()?function(t){var e,r,n,o,u;if(null==t)return d.call(t);r=t[m],u=m,e=null!=(o=t)&&v.call(o,u);try{t[m]=void 0}catch(e){return d.call(t)}return n=d.call(t),e?t[m]=r:delete t[m],n}:function(t){return d.call(t)},w=Boolean.prototype.toString;var g=b();function j(t){return"object"==typeof t&&(t instanceof Boolean||(g?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function h(t){return y(t)||j(t)}function N(){return new Function("return this;")()}p(h,"isPrimitive",y),p(h,"isObject",j);var S="object"==typeof self?self:null,E="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},I="object"==typeof T?T:null;var O=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return N()}if(S)return S;if(E)return E;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),A=O.document&&O.document.childNodes,x=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var B=/^\s*function\s*([^(]*)/i;p(P,"REGEXP",B);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===_(t)};function C(t){return null!==t&&"object"==typeof t}function F(t){var e,r,n,o;if(("Object"===(r=_(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=B.exec(n.toString()))return e[1]}return C(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}p(C,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!V(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(C));var G="function"==typeof t||"object"==typeof x||"function"==typeof A?function(t){return F(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?F(t).toLowerCase():e};function k(t){return t!=t}var L=Number.POSITIVE_INFINITY,M=Number.NEGATIVE_INFINITY;function R(t){return Math.abs(t)}var U={"max-abs":function(t,e){return(t=R(t))<(e=R(e))?e:t},max:function(t,e){return t<e?e:t},"min-abs":function(t,e){return(t=R(t))>(e=R(e))?e:t},min:function(t,e){return t>e?e:t},"mean-abs":function(t,e){return(t=R(t))+((e=R(e))-t)/2},mean:function(t,e){return t+(e-t)/2},x:function(t){return t},y:function(t,e){return e}};return function(t,e,r){var n,o;if(k(t)||k(e))return NaN;if(t===L||t===M||e===L||e===M)return t===e?NaN:L;if(t===e)return 0;if("function"===G(r))n=r;else if(void 0===r&&(r="max-abs"),void 0===(n=U[r]))throw new Error(function(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}("0Hj4b",r));return 0===(o=n(t,e))?NaN:R((t-e)/o)}}));
//# sourceMappingURL=index.js.map