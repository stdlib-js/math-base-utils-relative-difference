// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(o):i(o)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=o(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=o(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":s(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,w,"$1e"),t=p.call(t,v,"e"),t=p.call(t,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,g,"e+0$1"),t=p.call(t,d,"e-0$1"),r.alternate&&(t=p.call(t,b,"$1."),t=p.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===f.call(r.specifier)?f.call(t):l.call(t)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var E=String.fromCharCode,j=isNaN,x=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,i,a,c,s,l,f,p,g,d,b;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,j(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,b=void 0,(b=g-p.length)<0?p:p=d?p+_(b):_(b)+p)),c+=n.arg||"",s+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function N(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function A(r){var e,t;if("string"!=typeof r)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[N(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return k.apply(null,e)}var V,O=Object.prototype,F=O.toString,C=O.__defineGetter__,$=O.__defineSetter__,P=O.__lookupGetter__,R=O.__lookupSetter__;V=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=O,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(r,e,t.get),a&&$&&$.call(r,e,t.set),r};var B=V;function G(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r){return"boolean"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return Z&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var z=M()?function(r){var e,t,n,i,o;if(null==r)return U.call(r);t=r[Y],o=Y,e=null!=(i=r)&&W.call(i,o);try{r[Y]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return U.call(r)},q=Boolean,D=Boolean.prototype.toString;var H=M();function J(r){return"object"==typeof r&&(r instanceof q||(H?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function K(r){return L(r)||J(r)}G(K,"isPrimitive",L),G(K,"isObject",J);var Q="object"==typeof self?self:null,rr="object"==typeof window?window:null,er="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},tr="object"==typeof er?er:null,nr="object"==typeof globalThis?globalThis:null;var ir=function(r){if(arguments.length){if(!L(r))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(nr)return nr;if(Q)return Q;if(rr)return rr;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}(),or=ir.document&&ir.document.childNodes,ar=Int8Array;function cr(){return/^\s*function\s*([^(]*)/i}var ur=/^\s*function\s*([^(]*)/i;G(cr,"REGEXP",ur);var sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function lr(r){return null!==r&&"object"==typeof r}function fr(r){var e,t,n,i;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ur.exec(n.toString()))return e[1]}return lr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}G(lr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!sr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(lr));var pr="function"==typeof r||"object"==typeof ar||"function"==typeof or?function(r){return fr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?fr(r).toLowerCase():e};function gr(r){return r!=r}var dr=Number.POSITIVE_INFINITY,br=Number.NEGATIVE_INFINITY;function hr(r){return Math.abs(r)}var yr={"max-abs":function(r,e){return(r=hr(r))<(e=hr(e))?e:r},max:function(r,e){return r<e?e:r},"min-abs":function(r,e){return(r=hr(r))>(e=hr(e))?e:r},min:function(r,e){return r>e?e:r},"mean-abs":function(r,e){return(r=hr(r))+((e=hr(e))-r)/2},mean:function(r,e){return r+(e-r)/2},x:function(r){return r},y:function(r,e){return e}};function vr(r,e,t){var n,i;if(gr(r)||gr(e))return NaN;if(r===dr||r===br||e===dr||e===br)return r===e?NaN:dr;if(r===e)return 0;if("function"===pr(t))n=t;else if(void 0===t&&(t="max-abs"),void 0===(n=yr[t]))throw new Error(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("0Zd4O",t));return 0===(i=n(r,e))?NaN:hr((r-e)/i)}export{vr as default};
//# sourceMappingURL=mod.js.map
