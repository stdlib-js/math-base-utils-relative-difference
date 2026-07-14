"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var v=i(function(ir,o){
var s=require('@stdlib/math-base-special-abs/dist');function U(e,r){return e=s(e),r=s(r),e<r?r:e}o.exports=U
});var m=i(function(tr,f){
function V(e,r){return e<r?r:e}f.exports=V
});var b=i(function(ur,q){
var c=require('@stdlib/math-base-special-abs/dist');function j(e,r){return e=c(e),r=c(r),e>r?r:e}q.exports=j
});var N=i(function(nr,p){
function k(e,r){return e>r?r:e}p.exports=k
});var E=i(function(ar,x){
var d=require('@stdlib/math-base-special-abs/dist');function l(e,r){return e=d(e),r=d(r),e+(r-e)/2}x.exports=l
});var S=i(function(sr,F){
function B(e,r){return e+(r-e)/2}F.exports=B
});var w=i(function(or,g){
function G(e){return e}g.exports=G
});var C=i(function(vr,A){
function H(e,r){return r}A.exports=H
});var L=i(function(fr,I){
var J=v(),K=m(),M=b(),O=N(),Q=E(),R=S(),T=w(),W=C(),X={"max-abs":J,max:K,"min-abs":M,min:O,"mean-abs":Q,mean:R,x:T,y:W};I.exports=X
});var P=i(function(mr,D){
var Y=require('@stdlib/assert-is-function/dist'),Z=require('@stdlib/error-tools-fmtprodmsg/dist'),h=require('@stdlib/math-base-assert-is-nan/dist'),a=require('@stdlib/constants-float64-pinf/dist'),z=require('@stdlib/constants-float64-ninf/dist'),_=require('@stdlib/math-base-special-abs/dist'),$=L();function y(e,r,t){var u,n;if(h(e)||h(r))return NaN;if(e===a||e===z||r===a||r===z)return e===r?NaN:a;if(e===r)return 0;if(Y(t))u=t;else if(t===void 0&&(t="max-abs"),u=$[t],u===void 0)throw new Error(Z('0Zd4O',t));return n=u(e,r),n===0?NaN:_((e-r)/n)}D.exports=y
});var rr=P();module.exports=rr;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
