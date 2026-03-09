"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var v=i(function(ir,o){
var s=require('@stdlib/math-base-special-abs/dist');function U(r,e){return r=s(r),e=s(e),r<e?e:r}o.exports=U
});var m=i(function(tr,f){
function V(r,e){return r<e?e:r}f.exports=V
});var b=i(function(ur,q){
var c=require('@stdlib/math-base-special-abs/dist');function j(r,e){return r=c(r),e=c(e),r>e?e:r}q.exports=j
});var N=i(function(nr,p){
function k(r,e){return r>e?e:r}p.exports=k
});var E=i(function(ar,x){
var d=require('@stdlib/math-base-special-abs/dist');function l(r,e){return r=d(r),e=d(e),r+(e-r)/2}x.exports=l
});var S=i(function(sr,F){
function B(r,e){return r+(e-r)/2}F.exports=B
});var w=i(function(or,g){
function G(r){return r}g.exports=G
});var C=i(function(vr,A){
function H(r,e){return e}A.exports=H
});var L=i(function(fr,I){
var J=v(),K=m(),M=b(),O=N(),Q=E(),R=S(),T=w(),W=C(),X={"max-abs":J,max:K,"min-abs":M,min:O,"mean-abs":Q,mean:R,x:T,y:W};I.exports=X
});var P=i(function(mr,D){
var Y=require('@stdlib/assert-is-function/dist'),Z=require('@stdlib/error-tools-fmtprodmsg/dist'),h=require('@stdlib/math-base-assert-is-nan/dist'),a=require('@stdlib/constants-float64-pinf/dist'),z=require('@stdlib/constants-float64-ninf/dist'),_=require('@stdlib/math-base-special-abs/dist'),$=L();function y(r,e,t){var u,n;if(h(r)||h(e))return NaN;if(r===a||r===z||e===a||e===z)return r===e?NaN:a;if(r===e)return 0;if(Y(t))u=t;else if(t===void 0&&(t="max-abs"),u=$[t],u===void 0)throw new Error(Z('0Zd4O',t));return n=u(r,e),n===0?NaN:_((r-e)/n)}D.exports=y
});var rr=P();module.exports=rr;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
