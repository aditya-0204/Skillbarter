function AT(n,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function cv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Yd={exports:{}},al={},Xd={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy;function kT(){if(fy)return ke;fy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function S(V){return V===null||typeof V!="object"?null:(V=E&&V[E]||V["@@iterator"],typeof V=="function"?V:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,W={};function O(V,K,pe){this.props=V,this.context=K,this.refs=W,this.updater=pe||U}O.prototype.isReactComponent={},O.prototype.setState=function(V,K){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,K,"setState")},O.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ee(){}ee.prototype=O.prototype;function Z(V,K,pe){this.props=V,this.context=K,this.refs=W,this.updater=pe||U}var Q=Z.prototype=new ee;Q.constructor=Z,B(Q,O.prototype),Q.isPureReactComponent=!0;var re=Array.isArray,Se=Object.prototype.hasOwnProperty,ae={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function R(V,K,pe){var Re,Ae={},be=null,Me=null;if(K!=null)for(Re in K.ref!==void 0&&(Me=K.ref),K.key!==void 0&&(be=""+K.key),K)Se.call(K,Re)&&!P.hasOwnProperty(Re)&&(Ae[Re]=K[Re]);var Ue=arguments.length-2;if(Ue===1)Ae.children=pe;else if(1<Ue){for(var $e=Array(Ue),Tt=0;Tt<Ue;Tt++)$e[Tt]=arguments[Tt+2];Ae.children=$e}if(V&&V.defaultProps)for(Re in Ue=V.defaultProps,Ue)Ae[Re]===void 0&&(Ae[Re]=Ue[Re]);return{$$typeof:n,type:V,key:be,ref:Me,props:Ae,_owner:ae.current}}function C(V,K){return{$$typeof:n,type:V.type,key:K,ref:V.ref,props:V.props,_owner:V._owner}}function N(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function D(V){var K={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(pe){return K[pe]})}var L=/\/+/g;function k(V,K){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):K.toString(36)}function at(V,K,pe,Re,Ae){var be=typeof V;(be==="undefined"||be==="boolean")&&(V=null);var Me=!1;if(V===null)Me=!0;else switch(be){case"string":case"number":Me=!0;break;case"object":switch(V.$$typeof){case n:case e:Me=!0}}if(Me)return Me=V,Ae=Ae(Me),V=Re===""?"."+k(Me,0):Re,re(Ae)?(pe="",V!=null&&(pe=V.replace(L,"$&/")+"/"),at(Ae,K,pe,"",function(Tt){return Tt})):Ae!=null&&(N(Ae)&&(Ae=C(Ae,pe+(!Ae.key||Me&&Me.key===Ae.key?"":(""+Ae.key).replace(L,"$&/")+"/")+V)),K.push(Ae)),1;if(Me=0,Re=Re===""?".":Re+":",re(V))for(var Ue=0;Ue<V.length;Ue++){be=V[Ue];var $e=Re+k(be,Ue);Me+=at(be,K,pe,$e,Ae)}else if($e=S(V),typeof $e=="function")for(V=$e.call(V),Ue=0;!(be=V.next()).done;)be=be.value,$e=Re+k(be,Ue++),Me+=at(be,K,pe,$e,Ae);else if(be==="object")throw K=String(V),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return Me}function Vt(V,K,pe){if(V==null)return V;var Re=[],Ae=0;return at(V,Re,"","",function(be){return K.call(pe,be,Ae++)}),Re}function Lt(V){if(V._status===-1){var K=V._result;K=K(),K.then(function(pe){(V._status===0||V._status===-1)&&(V._status=1,V._result=pe)},function(pe){(V._status===0||V._status===-1)&&(V._status=2,V._result=pe)}),V._status===-1&&(V._status=0,V._result=K)}if(V._status===1)return V._result.default;throw V._result}var Be={current:null},se={transition:null},ge={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:se,ReactCurrentOwner:ae};function le(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:Vt,forEach:function(V,K,pe){Vt(V,function(){K.apply(this,arguments)},pe)},count:function(V){var K=0;return Vt(V,function(){K++}),K},toArray:function(V){return Vt(V,function(K){return K})||[]},only:function(V){if(!N(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},ke.Component=O,ke.Fragment=t,ke.Profiler=o,ke.PureComponent=Z,ke.StrictMode=s,ke.Suspense=p,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,ke.act=le,ke.cloneElement=function(V,K,pe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Re=B({},V.props),Ae=V.key,be=V.ref,Me=V._owner;if(K!=null){if(K.ref!==void 0&&(be=K.ref,Me=ae.current),K.key!==void 0&&(Ae=""+K.key),V.type&&V.type.defaultProps)var Ue=V.type.defaultProps;for($e in K)Se.call(K,$e)&&!P.hasOwnProperty($e)&&(Re[$e]=K[$e]===void 0&&Ue!==void 0?Ue[$e]:K[$e])}var $e=arguments.length-2;if($e===1)Re.children=pe;else if(1<$e){Ue=Array($e);for(var Tt=0;Tt<$e;Tt++)Ue[Tt]=arguments[Tt+2];Re.children=Ue}return{$$typeof:n,type:V.type,key:Ae,ref:be,props:Re,_owner:Me}},ke.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},ke.createElement=R,ke.createFactory=function(V){var K=R.bind(null,V);return K.type=V,K},ke.createRef=function(){return{current:null}},ke.forwardRef=function(V){return{$$typeof:f,render:V}},ke.isValidElement=N,ke.lazy=function(V){return{$$typeof:v,_payload:{_status:-1,_result:V},_init:Lt}},ke.memo=function(V,K){return{$$typeof:y,type:V,compare:K===void 0?null:K}},ke.startTransition=function(V){var K=se.transition;se.transition={};try{V()}finally{se.transition=K}},ke.unstable_act=le,ke.useCallback=function(V,K){return Be.current.useCallback(V,K)},ke.useContext=function(V){return Be.current.useContext(V)},ke.useDebugValue=function(){},ke.useDeferredValue=function(V){return Be.current.useDeferredValue(V)},ke.useEffect=function(V,K){return Be.current.useEffect(V,K)},ke.useId=function(){return Be.current.useId()},ke.useImperativeHandle=function(V,K,pe){return Be.current.useImperativeHandle(V,K,pe)},ke.useInsertionEffect=function(V,K){return Be.current.useInsertionEffect(V,K)},ke.useLayoutEffect=function(V,K){return Be.current.useLayoutEffect(V,K)},ke.useMemo=function(V,K){return Be.current.useMemo(V,K)},ke.useReducer=function(V,K,pe){return Be.current.useReducer(V,K,pe)},ke.useRef=function(V){return Be.current.useRef(V)},ke.useState=function(V){return Be.current.useState(V)},ke.useSyncExternalStore=function(V,K,pe){return Be.current.useSyncExternalStore(V,K,pe)},ke.useTransition=function(){return Be.current.useTransition()},ke.version="18.3.1",ke}var py;function Xf(){return py||(py=1,Xd.exports=kT()),Xd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my;function CT(){if(my)return al;my=1;var n=Xf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,p,y){var v,E={},S=null,U=null;y!==void 0&&(S=""+y),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(U=p.ref);for(v in p)s.call(p,v)&&!l.hasOwnProperty(v)&&(E[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)E[v]===void 0&&(E[v]=p[v]);return{$$typeof:e,type:f,key:S,ref:U,props:E,_owner:o.current}}return al.Fragment=t,al.jsx=h,al.jsxs=h,al}var gy;function xT(){return gy||(gy=1,Yd.exports=CT()),Yd.exports}var I=xT(),$=Xf();const hv=cv($),PT=AT({__proto__:null,default:hv},[$]);var oc={},Jd={exports:{}},on={},Zd={exports:{}},ef={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yy;function NT(){return yy||(yy=1,(function(n){function e(se,ge){var le=se.length;se.push(ge);e:for(;0<le;){var V=le-1>>>1,K=se[V];if(0<o(K,ge))se[V]=ge,se[le]=K,le=V;else break e}}function t(se){return se.length===0?null:se[0]}function s(se){if(se.length===0)return null;var ge=se[0],le=se.pop();if(le!==ge){se[0]=le;e:for(var V=0,K=se.length,pe=K>>>1;V<pe;){var Re=2*(V+1)-1,Ae=se[Re],be=Re+1,Me=se[be];if(0>o(Ae,le))be<K&&0>o(Me,Ae)?(se[V]=Me,se[be]=le,V=be):(se[V]=Ae,se[Re]=le,V=Re);else if(be<K&&0>o(Me,le))se[V]=Me,se[be]=le,V=be;else break e}}return ge}function o(se,ge){var le=se.sortIndex-ge.sortIndex;return le!==0?le:se.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var p=[],y=[],v=1,E=null,S=3,U=!1,B=!1,W=!1,O=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Q(se){for(var ge=t(y);ge!==null;){if(ge.callback===null)s(y);else if(ge.startTime<=se)s(y),ge.sortIndex=ge.expirationTime,e(p,ge);else break;ge=t(y)}}function re(se){if(W=!1,Q(se),!B)if(t(p)!==null)B=!0,Lt(Se);else{var ge=t(y);ge!==null&&Be(re,ge.startTime-se)}}function Se(se,ge){B=!1,W&&(W=!1,ee(R),R=-1),U=!0;var le=S;try{for(Q(ge),E=t(p);E!==null&&(!(E.expirationTime>ge)||se&&!D());){var V=E.callback;if(typeof V=="function"){E.callback=null,S=E.priorityLevel;var K=V(E.expirationTime<=ge);ge=n.unstable_now(),typeof K=="function"?E.callback=K:E===t(p)&&s(p),Q(ge)}else s(p);E=t(p)}if(E!==null)var pe=!0;else{var Re=t(y);Re!==null&&Be(re,Re.startTime-ge),pe=!1}return pe}finally{E=null,S=le,U=!1}}var ae=!1,P=null,R=-1,C=5,N=-1;function D(){return!(n.unstable_now()-N<C)}function L(){if(P!==null){var se=n.unstable_now();N=se;var ge=!0;try{ge=P(!0,se)}finally{ge?k():(ae=!1,P=null)}}else ae=!1}var k;if(typeof Z=="function")k=function(){Z(L)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,Vt=at.port2;at.port1.onmessage=L,k=function(){Vt.postMessage(null)}}else k=function(){O(L,0)};function Lt(se){P=se,ae||(ae=!0,k())}function Be(se,ge){R=O(function(){se(n.unstable_now())},ge)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(se){se.callback=null},n.unstable_continueExecution=function(){B||U||(B=!0,Lt(Se))},n.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<se?Math.floor(1e3/se):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(se){switch(S){case 1:case 2:case 3:var ge=3;break;default:ge=S}var le=S;S=ge;try{return se()}finally{S=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(se,ge){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var le=S;S=se;try{return ge()}finally{S=le}},n.unstable_scheduleCallback=function(se,ge,le){var V=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?V+le:V):le=V,se){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=le+K,se={id:v++,callback:ge,priorityLevel:se,startTime:le,expirationTime:K,sortIndex:-1},le>V?(se.sortIndex=le,e(y,se),t(p)===null&&se===t(y)&&(W?(ee(R),R=-1):W=!0,Be(re,le-V))):(se.sortIndex=K,e(p,se),B||U||(B=!0,Lt(Se))),se},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(se){var ge=S;return function(){var le=S;S=ge;try{return se.apply(this,arguments)}finally{S=le}}}})(ef)),ef}var _y;function bT(){return _y||(_y=1,Zd.exports=NT()),Zd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vy;function DT(){if(vy)return on;vy=1;var n=Xf(),e=bT();function t(r){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(r,i){h(r,i),h(r+"Capture",i)}function h(r,i){for(o[r]=i,r=0;r<i.length;r++)s.add(i[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},E={};function S(r){return p.call(E,r)?!0:p.call(v,r)?!1:y.test(r)?E[r]=!0:(v[r]=!0,!1)}function U(r,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function B(r,i,a,c){if(i===null||typeof i>"u"||U(r,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function W(r,i,a,c,d,g,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=i,this.sanitizeURL=g,this.removeEmptyString=w}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){O[r]=new W(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var i=r[0];O[i]=new W(i,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){O[r]=new W(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){O[r]=new W(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){O[r]=new W(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){O[r]=new W(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){O[r]=new W(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){O[r]=new W(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){O[r]=new W(r,5,!1,r.toLowerCase(),null,!1,!1)});var ee=/[\-:]([a-z])/g;function Z(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var i=r.replace(ee,Z);O[i]=new W(i,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var i=r.replace(ee,Z);O[i]=new W(i,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var i=r.replace(ee,Z);O[i]=new W(i,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){O[r]=new W(r,1,!1,r.toLowerCase(),null,!1,!1)}),O.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){O[r]=new W(r,1,!1,r.toLowerCase(),null,!0,!0)});function Q(r,i,a,c){var d=O.hasOwnProperty(i)?O[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(B(i,a,d,c)&&(a=null),c||d===null?S(i)&&(a===null?r.removeAttribute(i):r.setAttribute(i,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,i,a):r.setAttribute(i,a))))}var re=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Se=Symbol.for("react.element"),ae=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),at=Symbol.for("react.suspense_list"),Vt=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),se=Symbol.iterator;function ge(r){return r===null||typeof r!="object"?null:(r=se&&r[se]||r["@@iterator"],typeof r=="function"?r:null)}var le=Object.assign,V;function K(r){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+r}var pe=!1;function Re(r,i){if(!r||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(z){var c=z}Reflect.construct(r,[],i)}else{try{i.call()}catch(z){c=z}r.call(i.prototype)}else{try{throw Error()}catch(z){c=z}r()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),g=c.stack.split(`
`),w=d.length-1,A=g.length-1;1<=w&&0<=A&&d[w]!==g[A];)A--;for(;1<=w&&0<=A;w--,A--)if(d[w]!==g[A]){if(w!==1||A!==1)do if(w--,A--,0>A||d[w]!==g[A]){var x=`
`+d[w].replace(" at new "," at ");return r.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",r.displayName)),x}while(1<=w&&0<=A);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?K(r):""}function Ae(r){switch(r.tag){case 5:return K(r.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return r=Re(r.type,!1),r;case 11:return r=Re(r.type.render,!1),r;case 1:return r=Re(r.type,!0),r;default:return""}}function be(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case P:return"Fragment";case ae:return"Portal";case C:return"Profiler";case R:return"StrictMode";case k:return"Suspense";case at:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case D:return(r.displayName||"Context")+".Consumer";case N:return(r._context.displayName||"Context")+".Provider";case L:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Vt:return i=r.displayName||null,i!==null?i:be(r.type)||"Memo";case Lt:i=r._payload,r=r._init;try{return be(r(i))}catch{}}return null}function Me(r){var i=r.type;switch(r.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=i.render,r=r.displayName||r.name||"",i.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(i);case 8:return i===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ue(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Tt(r){var i=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),c=""+r[i];if(!r.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(r,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function Tr(r){r._valueTracker||(r._valueTracker=Tt(r))}function zi(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return r&&(c=$e(r)?r.checked?"true":"false":r.value),r=c,r!==a?(i.setValue(r),!0):!1}function ns(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Js(r,i){var a=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function $i(r,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ue(i.value!=null?i.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function fa(r,i){i=i.checked,i!=null&&Q(r,"checked",i,!1)}function pa(r,i){fa(r,i);var a=Ue(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}i.hasOwnProperty("value")?qi(r,i.type,a):i.hasOwnProperty("defaultValue")&&qi(r,i.type,Ue(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(r.defaultChecked=!!i.defaultChecked)}function Wl(r,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+r._wrapperState.initialValue,a||i===r.value||(r.value=i),r.defaultValue=i}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function qi(r,i,a){(i!=="number"||ns(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var Ir=Array.isArray;function Sr(r,i,a,c){if(r=r.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=i.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Ue(a),i=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}i!==null||r[d].disabled||(i=r[d])}i!==null&&(i.selected=!0)}}function ma(r,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Wi(r,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ir(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}r._wrapperState={initialValue:Ue(a)}}function Hi(r,i){var a=Ue(i.value),c=Ue(i.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),i.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function ga(r){var i=r.textContent;i===r._wrapperState.initialValue&&i!==""&&i!==null&&(r.value=i)}function gt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yt(r,i){return r==null||r==="http://www.w3.org/1999/xhtml"?gt(i):r==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Rr,ya=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(i,a,c,d)})}:r})(function(r,i){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=i;else{for(Rr=Rr||document.createElement("div"),Rr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Rr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;i.firstChild;)r.appendChild(i.firstChild)}});function rs(r,i){if(i){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=i;return}}r.textContent=i}var Zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ei=["Webkit","ms","Moz","O"];Object.keys(Zs).forEach(function(r){ei.forEach(function(i){i=i+r.charAt(0).toUpperCase()+r.substring(1),Zs[i]=Zs[r]})});function _a(r,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Zs.hasOwnProperty(r)&&Zs[r]?(""+i).trim():i+"px"}function va(r,i){r=r.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=_a(a,i[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var wa=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ea(r,i){if(i){if(wa[r]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ta(r,i){if(r.indexOf("-")===-1)return typeof i.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ti=null;function Gi(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ki=null,wn=null,Jn=null;function Qi(r){if(r=Ha(r)){if(typeof Ki!="function")throw Error(t(280));var i=r.stateNode;i&&(i=Eu(i),Ki(r.stateNode,r.type,i))}}function Zn(r){wn?Jn?Jn.push(r):Jn=[r]:wn=r}function Ia(){if(wn){var r=wn,i=Jn;if(Jn=wn=null,Qi(r),i)for(r=0;r<i.length;r++)Qi(i[r])}}function ni(r,i){return r(i)}function Sa(){}var Ar=!1;function Ra(r,i,a){if(Ar)return r(i,a);Ar=!0;try{return ni(r,i,a)}finally{Ar=!1,(wn!==null||Jn!==null)&&(Sa(),Ia())}}function lt(r,i){var a=r.stateNode;if(a===null)return null;var c=Eu(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Yi=!1;if(f)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){Yi=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{Yi=!1}function ri(r,i,a,c,d,g,w,A,x){var z=Array.prototype.slice.call(arguments,3);try{i.apply(a,z)}catch(X){this.onError(X)}}var si=!1,Xi=null,On=!1,Aa=null,Sh={onError:function(r){si=!0,Xi=r}};function Ji(r,i,a,c,d,g,w,A,x){si=!1,Xi=null,ri.apply(Sh,arguments)}function Hl(r,i,a,c,d,g,w,A,x){if(Ji.apply(this,arguments),si){if(si){var z=Xi;si=!1,Xi=null}else throw Error(t(198));On||(On=!0,Aa=z)}}function Vn(r){var i=r,a=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(a=i.return),r=i.return;while(r)}return i.tag===3?a:null}function ii(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function Ln(r){if(Vn(r)!==r)throw Error(t(188))}function Gl(r){var i=r.alternate;if(!i){if(i=Vn(r),i===null)throw Error(t(188));return i!==r?null:r}for(var a=r,c=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Ln(d),r;if(g===c)return Ln(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var w=!1,A=d.child;A;){if(A===a){w=!0,a=d,c=g;break}if(A===c){w=!0,c=d,a=g;break}A=A.sibling}if(!w){for(A=g.child;A;){if(A===a){w=!0,a=g,c=d;break}if(A===c){w=!0,c=g,a=d;break}A=A.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:i}function ka(r){return r=Gl(r),r!==null?Zi(r):null}function Zi(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var i=Zi(r);if(i!==null)return i;r=r.sibling}return null}var eo=e.unstable_scheduleCallback,Ca=e.unstable_cancelCallback,Kl=e.unstable_shouldYield,Rh=e.unstable_requestPaint,qe=e.unstable_now,Ql=e.unstable_getCurrentPriorityLevel,oi=e.unstable_ImmediatePriority,ss=e.unstable_UserBlockingPriority,En=e.unstable_NormalPriority,xa=e.unstable_LowPriority,Yl=e.unstable_IdlePriority,ai=null,cn=null;function Xl(r){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(ai,r,void 0,(r.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:Zl,Pa=Math.log,Jl=Math.LN2;function Zl(r){return r>>>=0,r===0?32:31-(Pa(r)/Jl|0)|0}var to=64,no=4194304;function is(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function li(r,i){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,g=r.pingedLanes,w=a&268435455;if(w!==0){var A=w&~d;A!==0?c=is(A):(g&=w,g!==0&&(c=is(g)))}else w=a&~d,w!==0?c=is(w):g!==0&&(c=is(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=r.entangledLanes,i!==0)for(r=r.entanglements,i&=c;0<i;)a=31-Wt(i),d=1<<a,c|=r[a],i&=~d;return c}function Ah(r,i){switch(r){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kr(r,i){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,g=r.pendingLanes;0<g;){var w=31-Wt(g),A=1<<w,x=d[w];x===-1?((A&a)===0||(A&c)!==0)&&(d[w]=Ah(A,i)):x<=i&&(r.expiredLanes|=A),g&=~A}}function hn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function ui(){var r=to;return to<<=1,(to&4194240)===0&&(to=64),r}function os(r){for(var i=[],a=0;31>a;a++)i.push(r);return i}function as(r,i,a){r.pendingLanes|=i,i!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,i=31-Wt(i),r[i]=a}function ze(r,i){var a=r.pendingLanes&~i;r.pendingLanes=i,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=i,r.mutableReadLanes&=i,r.entangledLanes&=i,i=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-Wt(a),g=1<<d;i[d]=0,c[d]=-1,r[d]=-1,a&=~g}}function ls(r,i){var a=r.entangledLanes|=i;for(r=r.entanglements;a;){var c=31-Wt(a),d=1<<c;d&i|r[c]&i&&(r[c]|=i),a&=~d}}var Ne=0;function us(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var eu,ro,tu,nu,ru,Na=!1,er=[],Ct=null,Mn=null,Un=null,cs=new Map,Tn=new Map,tr=[],kh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function su(r,i){switch(r){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":cs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(i.pointerId)}}function Jt(r,i,a,c,d,g){return r===null||r.nativeEvent!==g?(r={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=Ha(i),i!==null&&ro(i)),r):(r.eventSystemFlags|=c,i=r.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),r)}function Ch(r,i,a,c,d){switch(i){case"focusin":return Ct=Jt(Ct,r,i,a,c,d),!0;case"dragenter":return Mn=Jt(Mn,r,i,a,c,d),!0;case"mouseover":return Un=Jt(Un,r,i,a,c,d),!0;case"pointerover":var g=d.pointerId;return cs.set(g,Jt(cs.get(g)||null,r,i,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,Tn.set(g,Jt(Tn.get(g)||null,r,i,a,c,d)),!0}return!1}function iu(r){var i=pi(r.target);if(i!==null){var a=Vn(i);if(a!==null){if(i=a.tag,i===13){if(i=ii(a),i!==null){r.blockedOn=i,ru(r.priority,function(){tu(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Cr(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var a=so(r.domEventName,r.eventSystemFlags,i[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);ti=c,a.target.dispatchEvent(c),ti=null}else return i=Ha(a),i!==null&&ro(i),r.blockedOn=a,!1;i.shift()}return!0}function ci(r,i,a){Cr(r)&&a.delete(i)}function ou(){Na=!1,Ct!==null&&Cr(Ct)&&(Ct=null),Mn!==null&&Cr(Mn)&&(Mn=null),Un!==null&&Cr(Un)&&(Un=null),cs.forEach(ci),Tn.forEach(ci)}function jn(r,i){r.blockedOn===i&&(r.blockedOn=null,Na||(Na=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ou)))}function Fn(r){function i(d){return jn(d,r)}if(0<er.length){jn(er[0],r);for(var a=1;a<er.length;a++){var c=er[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Ct!==null&&jn(Ct,r),Mn!==null&&jn(Mn,r),Un!==null&&jn(Un,r),cs.forEach(i),Tn.forEach(i),a=0;a<tr.length;a++)c=tr[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<tr.length&&(a=tr[0],a.blockedOn===null);)iu(a),a.blockedOn===null&&tr.shift()}var xr=re.ReactCurrentBatchConfig,hs=!0;function Ye(r,i,a,c){var d=Ne,g=xr.transition;xr.transition=null;try{Ne=1,ba(r,i,a,c)}finally{Ne=d,xr.transition=g}}function xh(r,i,a,c){var d=Ne,g=xr.transition;xr.transition=null;try{Ne=4,ba(r,i,a,c)}finally{Ne=d,xr.transition=g}}function ba(r,i,a,c){if(hs){var d=so(r,i,a,c);if(d===null)Fh(r,i,c,hi,a),su(r,c);else if(Ch(d,r,i,a,c))c.stopPropagation();else if(su(r,c),i&4&&-1<kh.indexOf(r)){for(;d!==null;){var g=Ha(d);if(g!==null&&eu(g),g=so(r,i,a,c),g===null&&Fh(r,i,c,hi,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else Fh(r,i,c,null,a)}}var hi=null;function so(r,i,a,c){if(hi=null,r=Gi(c),r=pi(r),r!==null)if(i=Vn(r),i===null)r=null;else if(a=i.tag,a===13){if(r=ii(i),r!==null)return r;r=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null);return hi=r,null}function Da(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ql()){case oi:return 1;case ss:return 4;case En:case xa:return 16;case Yl:return 536870912;default:return 16}default:return 16}}var dn=null,io=null,Zt=null;function Oa(){if(Zt)return Zt;var r,i=io,a=i.length,c,d="value"in dn?dn.value:dn.textContent,g=d.length;for(r=0;r<a&&i[r]===d[r];r++);var w=a-r;for(c=1;c<=w&&i[a-c]===d[g-c];c++);return Zt=d.slice(r,1<c?1-c:void 0)}function oo(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function nr(){return!0}function Va(){return!1}function xt(r){function i(a,c,d,g,w){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(a=r[A],this[A]=a?a(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?nr:Va,this.isPropagationStopped=Va,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nr)},persist:function(){},isPersistent:nr}),i}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ao=xt(Bn),rr=le({},Bn,{view:0,detail:0}),Ph=xt(rr),lo,Pr,ds,di=le({},rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ds&&(ds&&r.type==="mousemove"?(lo=r.screenX-ds.screenX,Pr=r.screenY-ds.screenY):Pr=lo=0,ds=r),lo)},movementY:function(r){return"movementY"in r?r.movementY:Pr}}),uo=xt(di),La=le({},di,{dataTransfer:0}),au=xt(La),co=le({},rr,{relatedTarget:0}),ho=xt(co),lu=le({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nr=xt(lu),uu=le({},Bn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),cu=xt(uu),hu=le({},Bn,{data:0}),Ma=xt(hu),fo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ht={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},du={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fu(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=du[r])?!!i[r]:!1}function sr(){return fu}var u=le({},rr,{key:function(r){if(r.key){var i=fo[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=oo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Ht[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sr,charCode:function(r){return r.type==="keypress"?oo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?oo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=xt(u),_=le({},di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=xt(_),M=le({},rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sr}),q=xt(M),ne=le({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=xt(ne),_t=le({},di,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),De=xt(_t),It=[9,13,27,32],ht=f&&"CompositionEvent"in window,In=null;f&&"documentMode"in document&&(In=document.documentMode);var fn=f&&"TextEvent"in window&&!In,fi=f&&(!ht||In&&8<In&&11>=In),po=" ",am=!1;function lm(r,i){switch(r){case"keyup":return It.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function um(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var mo=!1;function IE(r,i){switch(r){case"compositionend":return um(i);case"keypress":return i.which!==32?null:(am=!0,po);case"textInput":return r=i.data,r===po&&am?null:r;default:return null}}function SE(r,i){if(mo)return r==="compositionend"||!ht&&lm(r,i)?(r=Oa(),Zt=io=dn=null,mo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return fi&&i.locale!=="ko"?null:i.data;default:return null}}var RE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cm(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!RE[r.type]:i==="textarea"}function hm(r,i,a,c){Zn(c),i=_u(i,"onChange"),0<i.length&&(a=new ao("onChange","change",null,a,c),r.push({event:a,listeners:i}))}var Ua=null,ja=null;function AE(r){xm(r,0)}function pu(r){var i=wo(r);if(zi(i))return r}function kE(r,i){if(r==="change")return i}var dm=!1;if(f){var Nh;if(f){var bh="oninput"in document;if(!bh){var fm=document.createElement("div");fm.setAttribute("oninput","return;"),bh=typeof fm.oninput=="function"}Nh=bh}else Nh=!1;dm=Nh&&(!document.documentMode||9<document.documentMode)}function pm(){Ua&&(Ua.detachEvent("onpropertychange",mm),ja=Ua=null)}function mm(r){if(r.propertyName==="value"&&pu(ja)){var i=[];hm(i,ja,r,Gi(r)),Ra(AE,i)}}function CE(r,i,a){r==="focusin"?(pm(),Ua=i,ja=a,Ua.attachEvent("onpropertychange",mm)):r==="focusout"&&pm()}function xE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return pu(ja)}function PE(r,i){if(r==="click")return pu(i)}function NE(r,i){if(r==="input"||r==="change")return pu(i)}function bE(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var zn=typeof Object.is=="function"?Object.is:bE;function Fa(r,i){if(zn(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var a=Object.keys(r),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(i,d)||!zn(r[d],i[d]))return!1}return!0}function gm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function ym(r,i){var a=gm(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=i&&c>=i)return{node:a,offset:i-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gm(a)}}function _m(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?_m(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function vm(){for(var r=window,i=ns();i instanceof r.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)r=i.contentWindow;else break;i=ns(r.document)}return i}function Dh(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}function DE(r){var i=vm(),a=r.focusedElem,c=r.selectionRange;if(i!==a&&a&&a.ownerDocument&&_m(a.ownerDocument.documentElement,a)){if(c!==null&&Dh(a)){if(i=c.start,r=c.end,r===void 0&&(r=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(r,a.value.length);else if(r=(i=a.ownerDocument||document)&&i.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!r.extend&&g>c&&(d=c,c=g,g=d),d=ym(a,g);var w=ym(a,c);d&&w&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),r.removeAllRanges(),g>c?(r.addRange(i),r.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),r.addRange(i)))}}for(i=[],r=a;r=r.parentNode;)r.nodeType===1&&i.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)r=i[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var OE=f&&"documentMode"in document&&11>=document.documentMode,go=null,Oh=null,Ba=null,Vh=!1;function wm(r,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vh||go==null||go!==ns(c)||(c=go,"selectionStart"in c&&Dh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ba&&Fa(Ba,c)||(Ba=c,c=_u(Oh,"onSelect"),0<c.length&&(i=new ao("onSelect","select",null,i,a),r.push({event:i,listeners:c}),i.target=go)))}function mu(r,i){var a={};return a[r.toLowerCase()]=i.toLowerCase(),a["Webkit"+r]="webkit"+i,a["Moz"+r]="moz"+i,a}var yo={animationend:mu("Animation","AnimationEnd"),animationiteration:mu("Animation","AnimationIteration"),animationstart:mu("Animation","AnimationStart"),transitionend:mu("Transition","TransitionEnd")},Lh={},Em={};f&&(Em=document.createElement("div").style,"AnimationEvent"in window||(delete yo.animationend.animation,delete yo.animationiteration.animation,delete yo.animationstart.animation),"TransitionEvent"in window||delete yo.transitionend.transition);function gu(r){if(Lh[r])return Lh[r];if(!yo[r])return r;var i=yo[r],a;for(a in i)if(i.hasOwnProperty(a)&&a in Em)return Lh[r]=i[a];return r}var Tm=gu("animationend"),Im=gu("animationiteration"),Sm=gu("animationstart"),Rm=gu("transitionend"),Am=new Map,km="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fs(r,i){Am.set(r,i),l(i,[r])}for(var Mh=0;Mh<km.length;Mh++){var Uh=km[Mh],VE=Uh.toLowerCase(),LE=Uh[0].toUpperCase()+Uh.slice(1);fs(VE,"on"+LE)}fs(Tm,"onAnimationEnd"),fs(Im,"onAnimationIteration"),fs(Sm,"onAnimationStart"),fs("dblclick","onDoubleClick"),fs("focusin","onFocus"),fs("focusout","onBlur"),fs(Rm,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ME=new Set("cancel close invalid load scroll toggle".split(" ").concat(za));function Cm(r,i,a){var c=r.type||"unknown-event";r.currentTarget=a,Hl(c,i,void 0,r),r.currentTarget=null}function xm(r,i){i=(i&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var w=c.length-1;0<=w;w--){var A=c[w],x=A.instance,z=A.currentTarget;if(A=A.listener,x!==g&&d.isPropagationStopped())break e;Cm(d,A,z),g=x}else for(w=0;w<c.length;w++){if(A=c[w],x=A.instance,z=A.currentTarget,A=A.listener,x!==g&&d.isPropagationStopped())break e;Cm(d,A,z),g=x}}}if(On)throw r=Aa,On=!1,Aa=null,r}function Ge(r,i){var a=i[Hh];a===void 0&&(a=i[Hh]=new Set);var c=r+"__bubble";a.has(c)||(Pm(i,r,2,!1),a.add(c))}function jh(r,i,a){var c=0;i&&(c|=4),Pm(a,r,c,i)}var yu="_reactListening"+Math.random().toString(36).slice(2);function $a(r){if(!r[yu]){r[yu]=!0,s.forEach(function(a){a!=="selectionchange"&&(ME.has(a)||jh(a,!1,r),jh(a,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[yu]||(i[yu]=!0,jh("selectionchange",!1,i))}}function Pm(r,i,a,c){switch(Da(i)){case 1:var d=Ye;break;case 4:d=xh;break;default:d=ba}a=d.bind(null,i,a,r),d=void 0,!Yi||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(i,a,{capture:!0,passive:d}):r.addEventListener(i,a,!0):d!==void 0?r.addEventListener(i,a,{passive:d}):r.addEventListener(i,a,!1)}function Fh(r,i,a,c,d){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(w===4)for(w=c.return;w!==null;){var x=w.tag;if((x===3||x===4)&&(x=w.stateNode.containerInfo,x===d||x.nodeType===8&&x.parentNode===d))return;w=w.return}for(;A!==null;){if(w=pi(A),w===null)return;if(x=w.tag,x===5||x===6){c=g=w;continue e}A=A.parentNode}}c=c.return}Ra(function(){var z=g,X=Gi(a),J=[];e:{var Y=Am.get(r);if(Y!==void 0){var oe=ao,he=r;switch(r){case"keypress":if(oo(a)===0)break e;case"keydown":case"keyup":oe=m;break;case"focusin":he="focus",oe=ho;break;case"focusout":he="blur",oe=ho;break;case"beforeblur":case"afterblur":oe=ho;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=uo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=au;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=q;break;case Tm:case Im:case Sm:oe=Nr;break;case Rm:oe=Fe;break;case"scroll":oe=Ph;break;case"wheel":oe=De;break;case"copy":case"cut":case"paste":oe=cu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=T}var de=(i&4)!==0,ut=!de&&r==="scroll",j=de?Y!==null?Y+"Capture":null:Y;de=[];for(var b=z,F;b!==null;){F=b;var te=F.stateNode;if(F.tag===5&&te!==null&&(F=te,j!==null&&(te=lt(b,j),te!=null&&de.push(qa(b,te,F)))),ut)break;b=b.return}0<de.length&&(Y=new oe(Y,he,null,a,X),J.push({event:Y,listeners:de}))}}if((i&7)===0){e:{if(Y=r==="mouseover"||r==="pointerover",oe=r==="mouseout"||r==="pointerout",Y&&a!==ti&&(he=a.relatedTarget||a.fromElement)&&(pi(he)||he[br]))break e;if((oe||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,oe?(he=a.relatedTarget||a.toElement,oe=z,he=he?pi(he):null,he!==null&&(ut=Vn(he),he!==ut||he.tag!==5&&he.tag!==6)&&(he=null)):(oe=null,he=z),oe!==he)){if(de=uo,te="onMouseLeave",j="onMouseEnter",b="mouse",(r==="pointerout"||r==="pointerover")&&(de=T,te="onPointerLeave",j="onPointerEnter",b="pointer"),ut=oe==null?Y:wo(oe),F=he==null?Y:wo(he),Y=new de(te,b+"leave",oe,a,X),Y.target=ut,Y.relatedTarget=F,te=null,pi(X)===z&&(de=new de(j,b+"enter",he,a,X),de.target=F,de.relatedTarget=ut,te=de),ut=te,oe&&he)t:{for(de=oe,j=he,b=0,F=de;F;F=_o(F))b++;for(F=0,te=j;te;te=_o(te))F++;for(;0<b-F;)de=_o(de),b--;for(;0<F-b;)j=_o(j),F--;for(;b--;){if(de===j||j!==null&&de===j.alternate)break t;de=_o(de),j=_o(j)}de=null}else de=null;oe!==null&&Nm(J,Y,oe,de,!1),he!==null&&ut!==null&&Nm(J,ut,he,de,!0)}}e:{if(Y=z?wo(z):window,oe=Y.nodeName&&Y.nodeName.toLowerCase(),oe==="select"||oe==="input"&&Y.type==="file")var fe=kE;else if(cm(Y))if(dm)fe=NE;else{fe=xE;var ye=CE}else(oe=Y.nodeName)&&oe.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(fe=PE);if(fe&&(fe=fe(r,z))){hm(J,fe,a,X);break e}ye&&ye(r,Y,z),r==="focusout"&&(ye=Y._wrapperState)&&ye.controlled&&Y.type==="number"&&qi(Y,"number",Y.value)}switch(ye=z?wo(z):window,r){case"focusin":(cm(ye)||ye.contentEditable==="true")&&(go=ye,Oh=z,Ba=null);break;case"focusout":Ba=Oh=go=null;break;case"mousedown":Vh=!0;break;case"contextmenu":case"mouseup":case"dragend":Vh=!1,wm(J,a,X);break;case"selectionchange":if(OE)break;case"keydown":case"keyup":wm(J,a,X)}var _e;if(ht)e:{switch(r){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else mo?lm(r,a)&&(Ee="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(fi&&a.locale!=="ko"&&(mo||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&mo&&(_e=Oa()):(dn=X,io="value"in dn?dn.value:dn.textContent,mo=!0)),ye=_u(z,Ee),0<ye.length&&(Ee=new Ma(Ee,r,null,a,X),J.push({event:Ee,listeners:ye}),_e?Ee.data=_e:(_e=um(a),_e!==null&&(Ee.data=_e)))),(_e=fn?IE(r,a):SE(r,a))&&(z=_u(z,"onBeforeInput"),0<z.length&&(X=new Ma("onBeforeInput","beforeinput",null,a,X),J.push({event:X,listeners:z}),X.data=_e))}xm(J,i)})}function qa(r,i,a){return{instance:r,listener:i,currentTarget:a}}function _u(r,i){for(var a=i+"Capture",c=[];r!==null;){var d=r,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=lt(r,a),g!=null&&c.unshift(qa(r,g,d)),g=lt(r,i),g!=null&&c.push(qa(r,g,d))),r=r.return}return c}function _o(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Nm(r,i,a,c,d){for(var g=i._reactName,w=[];a!==null&&a!==c;){var A=a,x=A.alternate,z=A.stateNode;if(x!==null&&x===c)break;A.tag===5&&z!==null&&(A=z,d?(x=lt(a,g),x!=null&&w.unshift(qa(a,x,A))):d||(x=lt(a,g),x!=null&&w.push(qa(a,x,A)))),a=a.return}w.length!==0&&r.push({event:i,listeners:w})}var UE=/\r\n?/g,jE=/\u0000|\uFFFD/g;function bm(r){return(typeof r=="string"?r:""+r).replace(UE,`
`).replace(jE,"")}function vu(r,i,a){if(i=bm(i),bm(r)!==i&&a)throw Error(t(425))}function wu(){}var Bh=null,zh=null;function $h(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var qh=typeof setTimeout=="function"?setTimeout:void 0,FE=typeof clearTimeout=="function"?clearTimeout:void 0,Dm=typeof Promise=="function"?Promise:void 0,BE=typeof queueMicrotask=="function"?queueMicrotask:typeof Dm<"u"?function(r){return Dm.resolve(null).then(r).catch(zE)}:qh;function zE(r){setTimeout(function(){throw r})}function Wh(r,i){var a=i,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),Fn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Fn(i)}function ps(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return r}function Om(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return r;i--}else a==="/$"&&i++}r=r.previousSibling}return null}var vo=Math.random().toString(36).slice(2),ir="__reactFiber$"+vo,Wa="__reactProps$"+vo,br="__reactContainer$"+vo,Hh="__reactEvents$"+vo,$E="__reactListeners$"+vo,qE="__reactHandles$"+vo;function pi(r){var i=r[ir];if(i)return i;for(var a=r.parentNode;a;){if(i=a[br]||a[ir]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(r=Om(r);r!==null;){if(a=r[ir])return a;r=Om(r)}return i}r=a,a=r.parentNode}return null}function Ha(r){return r=r[ir]||r[br],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function wo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Eu(r){return r[Wa]||null}var Gh=[],Eo=-1;function ms(r){return{current:r}}function Ke(r){0>Eo||(r.current=Gh[Eo],Gh[Eo]=null,Eo--)}function We(r,i){Eo++,Gh[Eo]=r.current,r.current=i}var gs={},Mt=ms(gs),en=ms(!1),mi=gs;function To(r,i){var a=r.type.contextTypes;if(!a)return gs;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=d),d}function tn(r){return r=r.childContextTypes,r!=null}function Tu(){Ke(en),Ke(Mt)}function Vm(r,i,a){if(Mt.current!==gs)throw Error(t(168));We(Mt,i),We(en,a)}function Lm(r,i,a){var c=r.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Me(r)||"Unknown",d));return le({},a,c)}function Iu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||gs,mi=Mt.current,We(Mt,r),We(en,en.current),!0}function Mm(r,i,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=Lm(r,i,mi),c.__reactInternalMemoizedMergedChildContext=r,Ke(en),Ke(Mt),We(Mt,r)):Ke(en),We(en,a)}var Dr=null,Su=!1,Kh=!1;function Um(r){Dr===null?Dr=[r]:Dr.push(r)}function WE(r){Su=!0,Um(r)}function ys(){if(!Kh&&Dr!==null){Kh=!0;var r=0,i=Ne;try{var a=Dr;for(Ne=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Dr=null,Su=!1}catch(d){throw Dr!==null&&(Dr=Dr.slice(r+1)),eo(oi,ys),d}finally{Ne=i,Kh=!1}}return null}var Io=[],So=0,Ru=null,Au=0,Sn=[],Rn=0,gi=null,Or=1,Vr="";function yi(r,i){Io[So++]=Au,Io[So++]=Ru,Ru=r,Au=i}function jm(r,i,a){Sn[Rn++]=Or,Sn[Rn++]=Vr,Sn[Rn++]=gi,gi=r;var c=Or;r=Vr;var d=32-Wt(c)-1;c&=~(1<<d),a+=1;var g=32-Wt(i)+d;if(30<g){var w=d-d%5;g=(c&(1<<w)-1).toString(32),c>>=w,d-=w,Or=1<<32-Wt(i)+d|a<<d|c,Vr=g+r}else Or=1<<g|a<<d|c,Vr=r}function Qh(r){r.return!==null&&(yi(r,1),jm(r,1,0))}function Yh(r){for(;r===Ru;)Ru=Io[--So],Io[So]=null,Au=Io[--So],Io[So]=null;for(;r===gi;)gi=Sn[--Rn],Sn[Rn]=null,Vr=Sn[--Rn],Sn[Rn]=null,Or=Sn[--Rn],Sn[Rn]=null}var pn=null,mn=null,Xe=!1,$n=null;function Fm(r,i){var a=xn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=r,i=r.deletions,i===null?(r.deletions=[a],r.flags|=16):i.push(a)}function Bm(r,i){switch(r.tag){case 5:var a=r.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(r.stateNode=i,pn=r,mn=ps(i.firstChild),!0):!1;case 6:return i=r.pendingProps===""||i.nodeType!==3?null:i,i!==null?(r.stateNode=i,pn=r,mn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=gi!==null?{id:Or,overflow:Vr}:null,r.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=xn(18,null,null,0),a.stateNode=i,a.return=r,r.child=a,pn=r,mn=null,!0):!1;default:return!1}}function Xh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Jh(r){if(Xe){var i=mn;if(i){var a=i;if(!Bm(r,i)){if(Xh(r))throw Error(t(418));i=ps(a.nextSibling);var c=pn;i&&Bm(r,i)?Fm(c,a):(r.flags=r.flags&-4097|2,Xe=!1,pn=r)}}else{if(Xh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Xe=!1,pn=r}}}function zm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;pn=r}function ku(r){if(r!==pn)return!1;if(!Xe)return zm(r),Xe=!0,!1;var i;if((i=r.tag!==3)&&!(i=r.tag!==5)&&(i=r.type,i=i!=="head"&&i!=="body"&&!$h(r.type,r.memoizedProps)),i&&(i=mn)){if(Xh(r))throw $m(),Error(t(418));for(;i;)Fm(r,i),i=ps(i.nextSibling)}if(zm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(i===0){mn=ps(r.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}r=r.nextSibling}mn=null}}else mn=pn?ps(r.stateNode.nextSibling):null;return!0}function $m(){for(var r=mn;r;)r=ps(r.nextSibling)}function Ro(){mn=pn=null,Xe=!1}function Zh(r){$n===null?$n=[r]:$n.push(r)}var HE=re.ReactCurrentBatchConfig;function Ga(r,i,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var d=c,g=""+r;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(w){var A=d.refs;w===null?delete A[g]:A[g]=w},i._stringRef=g,i)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function Cu(r,i){throw r=Object.prototype.toString.call(i),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r))}function qm(r){var i=r._init;return i(r._payload)}function Wm(r){function i(j,b){if(r){var F=j.deletions;F===null?(j.deletions=[b],j.flags|=16):F.push(b)}}function a(j,b){if(!r)return null;for(;b!==null;)i(j,b),b=b.sibling;return null}function c(j,b){for(j=new Map;b!==null;)b.key!==null?j.set(b.key,b):j.set(b.index,b),b=b.sibling;return j}function d(j,b){return j=Rs(j,b),j.index=0,j.sibling=null,j}function g(j,b,F){return j.index=F,r?(F=j.alternate,F!==null?(F=F.index,F<b?(j.flags|=2,b):F):(j.flags|=2,b)):(j.flags|=1048576,b)}function w(j){return r&&j.alternate===null&&(j.flags|=2),j}function A(j,b,F,te){return b===null||b.tag!==6?(b=qd(F,j.mode,te),b.return=j,b):(b=d(b,F),b.return=j,b)}function x(j,b,F,te){var fe=F.type;return fe===P?X(j,b,F.props.children,te,F.key):b!==null&&(b.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Lt&&qm(fe)===b.type)?(te=d(b,F.props),te.ref=Ga(j,b,F),te.return=j,te):(te=Ju(F.type,F.key,F.props,null,j.mode,te),te.ref=Ga(j,b,F),te.return=j,te)}function z(j,b,F,te){return b===null||b.tag!==4||b.stateNode.containerInfo!==F.containerInfo||b.stateNode.implementation!==F.implementation?(b=Wd(F,j.mode,te),b.return=j,b):(b=d(b,F.children||[]),b.return=j,b)}function X(j,b,F,te,fe){return b===null||b.tag!==7?(b=Ri(F,j.mode,te,fe),b.return=j,b):(b=d(b,F),b.return=j,b)}function J(j,b,F){if(typeof b=="string"&&b!==""||typeof b=="number")return b=qd(""+b,j.mode,F),b.return=j,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Se:return F=Ju(b.type,b.key,b.props,null,j.mode,F),F.ref=Ga(j,null,b),F.return=j,F;case ae:return b=Wd(b,j.mode,F),b.return=j,b;case Lt:var te=b._init;return J(j,te(b._payload),F)}if(Ir(b)||ge(b))return b=Ri(b,j.mode,F,null),b.return=j,b;Cu(j,b)}return null}function Y(j,b,F,te){var fe=b!==null?b.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return fe!==null?null:A(j,b,""+F,te);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Se:return F.key===fe?x(j,b,F,te):null;case ae:return F.key===fe?z(j,b,F,te):null;case Lt:return fe=F._init,Y(j,b,fe(F._payload),te)}if(Ir(F)||ge(F))return fe!==null?null:X(j,b,F,te,null);Cu(j,F)}return null}function oe(j,b,F,te,fe){if(typeof te=="string"&&te!==""||typeof te=="number")return j=j.get(F)||null,A(b,j,""+te,fe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case Se:return j=j.get(te.key===null?F:te.key)||null,x(b,j,te,fe);case ae:return j=j.get(te.key===null?F:te.key)||null,z(b,j,te,fe);case Lt:var ye=te._init;return oe(j,b,F,ye(te._payload),fe)}if(Ir(te)||ge(te))return j=j.get(F)||null,X(b,j,te,fe,null);Cu(b,te)}return null}function he(j,b,F,te){for(var fe=null,ye=null,_e=b,Ee=b=0,At=null;_e!==null&&Ee<F.length;Ee++){_e.index>Ee?(At=_e,_e=null):At=_e.sibling;var Le=Y(j,_e,F[Ee],te);if(Le===null){_e===null&&(_e=At);break}r&&_e&&Le.alternate===null&&i(j,_e),b=g(Le,b,Ee),ye===null?fe=Le:ye.sibling=Le,ye=Le,_e=At}if(Ee===F.length)return a(j,_e),Xe&&yi(j,Ee),fe;if(_e===null){for(;Ee<F.length;Ee++)_e=J(j,F[Ee],te),_e!==null&&(b=g(_e,b,Ee),ye===null?fe=_e:ye.sibling=_e,ye=_e);return Xe&&yi(j,Ee),fe}for(_e=c(j,_e);Ee<F.length;Ee++)At=oe(_e,j,Ee,F[Ee],te),At!==null&&(r&&At.alternate!==null&&_e.delete(At.key===null?Ee:At.key),b=g(At,b,Ee),ye===null?fe=At:ye.sibling=At,ye=At);return r&&_e.forEach(function(As){return i(j,As)}),Xe&&yi(j,Ee),fe}function de(j,b,F,te){var fe=ge(F);if(typeof fe!="function")throw Error(t(150));if(F=fe.call(F),F==null)throw Error(t(151));for(var ye=fe=null,_e=b,Ee=b=0,At=null,Le=F.next();_e!==null&&!Le.done;Ee++,Le=F.next()){_e.index>Ee?(At=_e,_e=null):At=_e.sibling;var As=Y(j,_e,Le.value,te);if(As===null){_e===null&&(_e=At);break}r&&_e&&As.alternate===null&&i(j,_e),b=g(As,b,Ee),ye===null?fe=As:ye.sibling=As,ye=As,_e=At}if(Le.done)return a(j,_e),Xe&&yi(j,Ee),fe;if(_e===null){for(;!Le.done;Ee++,Le=F.next())Le=J(j,Le.value,te),Le!==null&&(b=g(Le,b,Ee),ye===null?fe=Le:ye.sibling=Le,ye=Le);return Xe&&yi(j,Ee),fe}for(_e=c(j,_e);!Le.done;Ee++,Le=F.next())Le=oe(_e,j,Ee,Le.value,te),Le!==null&&(r&&Le.alternate!==null&&_e.delete(Le.key===null?Ee:Le.key),b=g(Le,b,Ee),ye===null?fe=Le:ye.sibling=Le,ye=Le);return r&&_e.forEach(function(RT){return i(j,RT)}),Xe&&yi(j,Ee),fe}function ut(j,b,F,te){if(typeof F=="object"&&F!==null&&F.type===P&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Se:e:{for(var fe=F.key,ye=b;ye!==null;){if(ye.key===fe){if(fe=F.type,fe===P){if(ye.tag===7){a(j,ye.sibling),b=d(ye,F.props.children),b.return=j,j=b;break e}}else if(ye.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Lt&&qm(fe)===ye.type){a(j,ye.sibling),b=d(ye,F.props),b.ref=Ga(j,ye,F),b.return=j,j=b;break e}a(j,ye);break}else i(j,ye);ye=ye.sibling}F.type===P?(b=Ri(F.props.children,j.mode,te,F.key),b.return=j,j=b):(te=Ju(F.type,F.key,F.props,null,j.mode,te),te.ref=Ga(j,b,F),te.return=j,j=te)}return w(j);case ae:e:{for(ye=F.key;b!==null;){if(b.key===ye)if(b.tag===4&&b.stateNode.containerInfo===F.containerInfo&&b.stateNode.implementation===F.implementation){a(j,b.sibling),b=d(b,F.children||[]),b.return=j,j=b;break e}else{a(j,b);break}else i(j,b);b=b.sibling}b=Wd(F,j.mode,te),b.return=j,j=b}return w(j);case Lt:return ye=F._init,ut(j,b,ye(F._payload),te)}if(Ir(F))return he(j,b,F,te);if(ge(F))return de(j,b,F,te);Cu(j,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,b!==null&&b.tag===6?(a(j,b.sibling),b=d(b,F),b.return=j,j=b):(a(j,b),b=qd(F,j.mode,te),b.return=j,j=b),w(j)):a(j,b)}return ut}var Ao=Wm(!0),Hm=Wm(!1),xu=ms(null),Pu=null,ko=null,ed=null;function td(){ed=ko=Pu=null}function nd(r){var i=xu.current;Ke(xu),r._currentValue=i}function rd(r,i,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),r===a)break;r=r.return}}function Co(r,i){Pu=r,ed=ko=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&i)!==0&&(nn=!0),r.firstContext=null)}function An(r){var i=r._currentValue;if(ed!==r)if(r={context:r,memoizedValue:i,next:null},ko===null){if(Pu===null)throw Error(t(308));ko=r,Pu.dependencies={lanes:0,firstContext:r}}else ko=ko.next=r;return i}var _i=null;function sd(r){_i===null?_i=[r]:_i.push(r)}function Gm(r,i,a,c){var d=i.interleaved;return d===null?(a.next=a,sd(i)):(a.next=d.next,d.next=a),i.interleaved=a,Lr(r,c)}function Lr(r,i){r.lanes|=i;var a=r.alternate;for(a!==null&&(a.lanes|=i),a=r,r=r.return;r!==null;)r.childLanes|=i,a=r.alternate,a!==null&&(a.childLanes|=i),a=r,r=r.return;return a.tag===3?a.stateNode:null}var _s=!1;function id(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Km(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Mr(r,i){return{eventTime:r,lane:i,tag:0,payload:null,callback:null,next:null}}function vs(r,i,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Lr(r,a)}return d=c.interleaved,d===null?(i.next=i,sd(c)):(i.next=d.next,d.next=i),c.interleaved=i,Lr(r,a)}function Nu(r,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=r.pendingLanes,a|=c,i.lanes=a,ls(r,a)}}function Qm(r,i){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=i:r.next=i,a.lastBaseUpdate=i}function bu(r,i,a,c){var d=r.updateQueue;_s=!1;var g=d.firstBaseUpdate,w=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var x=A,z=x.next;x.next=null,w===null?g=z:w.next=z,w=x;var X=r.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==w&&(A===null?X.firstBaseUpdate=z:A.next=z,X.lastBaseUpdate=x))}if(g!==null){var J=d.baseState;w=0,X=z=x=null,A=g;do{var Y=A.lane,oe=A.eventTime;if((c&Y)===Y){X!==null&&(X=X.next={eventTime:oe,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var he=r,de=A;switch(Y=i,oe=a,de.tag){case 1:if(he=de.payload,typeof he=="function"){J=he.call(oe,J,Y);break e}J=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=de.payload,Y=typeof he=="function"?he.call(oe,J,Y):he,Y==null)break e;J=le({},J,Y);break e;case 2:_s=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,Y=d.effects,Y===null?d.effects=[A]:Y.push(A))}else oe={eventTime:oe,lane:Y,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?(z=X=oe,x=J):X=X.next=oe,w|=Y;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;Y=A,A=Y.next,Y.next=null,d.lastBaseUpdate=Y,d.shared.pending=null}}while(!0);if(X===null&&(x=J),d.baseState=x,d.firstBaseUpdate=z,d.lastBaseUpdate=X,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);Ei|=w,r.lanes=w,r.memoizedState=J}}function Ym(r,i,a){if(r=i.effects,i.effects=null,r!==null)for(i=0;i<r.length;i++){var c=r[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ka={},or=ms(Ka),Qa=ms(Ka),Ya=ms(Ka);function vi(r){if(r===Ka)throw Error(t(174));return r}function od(r,i){switch(We(Ya,i),We(Qa,r),We(or,Ka),r=i.nodeType,r){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:yt(null,"");break;default:r=r===8?i.parentNode:i,i=r.namespaceURI||null,r=r.tagName,i=yt(i,r)}Ke(or),We(or,i)}function xo(){Ke(or),Ke(Qa),Ke(Ya)}function Xm(r){vi(Ya.current);var i=vi(or.current),a=yt(i,r.type);i!==a&&(We(Qa,r),We(or,a))}function ad(r){Qa.current===r&&(Ke(or),Ke(Qa))}var Ze=ms(0);function Du(r){for(var i=r;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ld=[];function ud(){for(var r=0;r<ld.length;r++)ld[r]._workInProgressVersionPrimary=null;ld.length=0}var Ou=re.ReactCurrentDispatcher,cd=re.ReactCurrentBatchConfig,wi=0,et=null,vt=null,St=null,Vu=!1,Xa=!1,Ja=0,GE=0;function Ut(){throw Error(t(321))}function hd(r,i){if(i===null)return!1;for(var a=0;a<i.length&&a<r.length;a++)if(!zn(r[a],i[a]))return!1;return!0}function dd(r,i,a,c,d,g){if(wi=g,et=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ou.current=r===null||r.memoizedState===null?XE:JE,r=a(c,d),Xa){g=0;do{if(Xa=!1,Ja=0,25<=g)throw Error(t(301));g+=1,St=vt=null,i.updateQueue=null,Ou.current=ZE,r=a(c,d)}while(Xa)}if(Ou.current=Uu,i=vt!==null&&vt.next!==null,wi=0,St=vt=et=null,Vu=!1,i)throw Error(t(300));return r}function fd(){var r=Ja!==0;return Ja=0,r}function ar(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?et.memoizedState=St=r:St=St.next=r,St}function kn(){if(vt===null){var r=et.alternate;r=r!==null?r.memoizedState:null}else r=vt.next;var i=St===null?et.memoizedState:St.next;if(i!==null)St=i,vt=r;else{if(r===null)throw Error(t(310));vt=r,r={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},St===null?et.memoizedState=St=r:St=St.next=r}return St}function Za(r,i){return typeof i=="function"?i(r):i}function pd(r){var i=kn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=vt,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var w=d.next;d.next=g.next,g.next=w}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var A=w=null,x=null,z=g;do{var X=z.lane;if((wi&X)===X)x!==null&&(x=x.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:r(c,z.action);else{var J={lane:X,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};x===null?(A=x=J,w=c):x=x.next=J,et.lanes|=X,Ei|=X}z=z.next}while(z!==null&&z!==g);x===null?w=c:x.next=A,zn(c,i.memoizedState)||(nn=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=x,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do g=d.lane,et.lanes|=g,Ei|=g,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function md(r){var i=kn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do g=r(g,w.action),w=w.next;while(w!==d);zn(g,i.memoizedState)||(nn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Jm(){}function Zm(r,i){var a=et,c=kn(),d=i(),g=!zn(c.memoizedState,d);if(g&&(c.memoizedState=d,nn=!0),c=c.queue,gd(ng.bind(null,a,c,r),[r]),c.getSnapshot!==i||g||St!==null&&St.memoizedState.tag&1){if(a.flags|=2048,el(9,tg.bind(null,a,c,d,i),void 0,null),Rt===null)throw Error(t(349));(wi&30)!==0||eg(a,i,d)}return d}function eg(r,i,a){r.flags|=16384,r={getSnapshot:i,value:a},i=et.updateQueue,i===null?(i={lastEffect:null,stores:null},et.updateQueue=i,i.stores=[r]):(a=i.stores,a===null?i.stores=[r]:a.push(r))}function tg(r,i,a,c){i.value=a,i.getSnapshot=c,rg(i)&&sg(r)}function ng(r,i,a){return a(function(){rg(i)&&sg(r)})}function rg(r){var i=r.getSnapshot;r=r.value;try{var a=i();return!zn(r,a)}catch{return!0}}function sg(r){var i=Lr(r,1);i!==null&&Gn(i,r,1,-1)}function ig(r){var i=ar();return typeof r=="function"&&(r=r()),i.memoizedState=i.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:r},i.queue=r,r=r.dispatch=YE.bind(null,et,r),[i.memoizedState,r]}function el(r,i,a,c){return r={tag:r,create:i,destroy:a,deps:c,next:null},i=et.updateQueue,i===null?(i={lastEffect:null,stores:null},et.updateQueue=i,i.lastEffect=r.next=r):(a=i.lastEffect,a===null?i.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,i.lastEffect=r)),r}function og(){return kn().memoizedState}function Lu(r,i,a,c){var d=ar();et.flags|=r,d.memoizedState=el(1|i,a,void 0,c===void 0?null:c)}function Mu(r,i,a,c){var d=kn();c=c===void 0?null:c;var g=void 0;if(vt!==null){var w=vt.memoizedState;if(g=w.destroy,c!==null&&hd(c,w.deps)){d.memoizedState=el(i,a,g,c);return}}et.flags|=r,d.memoizedState=el(1|i,a,g,c)}function ag(r,i){return Lu(8390656,8,r,i)}function gd(r,i){return Mu(2048,8,r,i)}function lg(r,i){return Mu(4,2,r,i)}function ug(r,i){return Mu(4,4,r,i)}function cg(r,i){if(typeof i=="function")return r=r(),i(r),function(){i(null)};if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function hg(r,i,a){return a=a!=null?a.concat([r]):null,Mu(4,4,cg.bind(null,i,r),a)}function yd(){}function dg(r,i){var a=kn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&hd(i,c[1])?c[0]:(a.memoizedState=[r,i],r)}function fg(r,i){var a=kn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&hd(i,c[1])?c[0]:(r=r(),a.memoizedState=[r,i],r)}function pg(r,i,a){return(wi&21)===0?(r.baseState&&(r.baseState=!1,nn=!0),r.memoizedState=a):(zn(a,i)||(a=ui(),et.lanes|=a,Ei|=a,r.baseState=!0),i)}function KE(r,i){var a=Ne;Ne=a!==0&&4>a?a:4,r(!0);var c=cd.transition;cd.transition={};try{r(!1),i()}finally{Ne=a,cd.transition=c}}function mg(){return kn().memoizedState}function QE(r,i,a){var c=Is(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},gg(r))yg(i,a);else if(a=Gm(r,i,a,c),a!==null){var d=Kt();Gn(a,r,c,d),_g(a,i,c)}}function YE(r,i,a){var c=Is(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(gg(r))yg(i,d);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var w=i.lastRenderedState,A=g(w,a);if(d.hasEagerState=!0,d.eagerState=A,zn(A,w)){var x=i.interleaved;x===null?(d.next=d,sd(i)):(d.next=x.next,x.next=d),i.interleaved=d;return}}catch{}finally{}a=Gm(r,i,d,c),a!==null&&(d=Kt(),Gn(a,r,c,d),_g(a,i,c))}}function gg(r){var i=r.alternate;return r===et||i!==null&&i===et}function yg(r,i){Xa=Vu=!0;var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}function _g(r,i,a){if((a&4194240)!==0){var c=i.lanes;c&=r.pendingLanes,a|=c,i.lanes=a,ls(r,a)}}var Uu={readContext:An,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},XE={readContext:An,useCallback:function(r,i){return ar().memoizedState=[r,i===void 0?null:i],r},useContext:An,useEffect:ag,useImperativeHandle:function(r,i,a){return a=a!=null?a.concat([r]):null,Lu(4194308,4,cg.bind(null,i,r),a)},useLayoutEffect:function(r,i){return Lu(4194308,4,r,i)},useInsertionEffect:function(r,i){return Lu(4,2,r,i)},useMemo:function(r,i){var a=ar();return i=i===void 0?null:i,r=r(),a.memoizedState=[r,i],r},useReducer:function(r,i,a){var c=ar();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:i},c.queue=r,r=r.dispatch=QE.bind(null,et,r),[c.memoizedState,r]},useRef:function(r){var i=ar();return r={current:r},i.memoizedState=r},useState:ig,useDebugValue:yd,useDeferredValue:function(r){return ar().memoizedState=r},useTransition:function(){var r=ig(!1),i=r[0];return r=KE.bind(null,r[1]),ar().memoizedState=r,[i,r]},useMutableSource:function(){},useSyncExternalStore:function(r,i,a){var c=et,d=ar();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Rt===null)throw Error(t(349));(wi&30)!==0||eg(c,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,ag(ng.bind(null,c,g,r),[r]),c.flags|=2048,el(9,tg.bind(null,c,g,a,i),void 0,null),a},useId:function(){var r=ar(),i=Rt.identifierPrefix;if(Xe){var a=Vr,c=Or;a=(c&~(1<<32-Wt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ja++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=GE++,i=":"+i+"r"+a.toString(32)+":";return r.memoizedState=i},unstable_isNewReconciler:!1},JE={readContext:An,useCallback:dg,useContext:An,useEffect:gd,useImperativeHandle:hg,useInsertionEffect:lg,useLayoutEffect:ug,useMemo:fg,useReducer:pd,useRef:og,useState:function(){return pd(Za)},useDebugValue:yd,useDeferredValue:function(r){var i=kn();return pg(i,vt.memoizedState,r)},useTransition:function(){var r=pd(Za)[0],i=kn().memoizedState;return[r,i]},useMutableSource:Jm,useSyncExternalStore:Zm,useId:mg,unstable_isNewReconciler:!1},ZE={readContext:An,useCallback:dg,useContext:An,useEffect:gd,useImperativeHandle:hg,useInsertionEffect:lg,useLayoutEffect:ug,useMemo:fg,useReducer:md,useRef:og,useState:function(){return md(Za)},useDebugValue:yd,useDeferredValue:function(r){var i=kn();return vt===null?i.memoizedState=r:pg(i,vt.memoizedState,r)},useTransition:function(){var r=md(Za)[0],i=kn().memoizedState;return[r,i]},useMutableSource:Jm,useSyncExternalStore:Zm,useId:mg,unstable_isNewReconciler:!1};function qn(r,i){if(r&&r.defaultProps){i=le({},i),r=r.defaultProps;for(var a in r)i[a]===void 0&&(i[a]=r[a]);return i}return i}function _d(r,i,a,c){i=r.memoizedState,a=a(c,i),a=a==null?i:le({},i,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var ju={isMounted:function(r){return(r=r._reactInternals)?Vn(r)===r:!1},enqueueSetState:function(r,i,a){r=r._reactInternals;var c=Kt(),d=Is(r),g=Mr(c,d);g.payload=i,a!=null&&(g.callback=a),i=vs(r,g,d),i!==null&&(Gn(i,r,d,c),Nu(i,r,d))},enqueueReplaceState:function(r,i,a){r=r._reactInternals;var c=Kt(),d=Is(r),g=Mr(c,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=vs(r,g,d),i!==null&&(Gn(i,r,d,c),Nu(i,r,d))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var a=Kt(),c=Is(r),d=Mr(a,c);d.tag=2,i!=null&&(d.callback=i),i=vs(r,d,c),i!==null&&(Gn(i,r,c,a),Nu(i,r,c))}};function vg(r,i,a,c,d,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,w):i.prototype&&i.prototype.isPureReactComponent?!Fa(a,c)||!Fa(d,g):!0}function wg(r,i,a){var c=!1,d=gs,g=i.contextType;return typeof g=="object"&&g!==null?g=An(g):(d=tn(i)?mi:Mt.current,c=i.contextTypes,g=(c=c!=null)?To(r,d):gs),i=new i(a,g),r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ju,r.stateNode=i,i._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=g),i}function Eg(r,i,a,c){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==r&&ju.enqueueReplaceState(i,i.state,null)}function vd(r,i,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},id(r);var g=i.contextType;typeof g=="object"&&g!==null?d.context=An(g):(g=tn(i)?mi:Mt.current,d.context=To(r,g)),d.state=r.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(_d(r,i,g,a),d.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ju.enqueueReplaceState(d,d.state,null),bu(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function Po(r,i){try{var a="",c=i;do a+=Ae(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:i,stack:d,digest:null}}function wd(r,i,a){return{value:r,source:null,stack:a??null,digest:i??null}}function Ed(r,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var eT=typeof WeakMap=="function"?WeakMap:Map;function Tg(r,i,a){a=Mr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Hu||(Hu=!0,Ld=c),Ed(r,i)},a}function Ig(r,i,a){a=Mr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Ed(r,i)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Ed(r,i),typeof c!="function"&&(Es===null?Es=new Set([this]):Es.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Sg(r,i,a){var c=r.pingCache;if(c===null){c=r.pingCache=new eT;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),r=pT.bind(null,r,i,a),i.then(r,r))}function Rg(r){do{var i;if((i=r.tag===13)&&(i=r.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return r;r=r.return}while(r!==null);return null}function Ag(r,i,a,c,d){return(r.mode&1)===0?(r===i?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Mr(-1,1),i.tag=2,vs(a,i,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var tT=re.ReactCurrentOwner,nn=!1;function Gt(r,i,a,c){i.child=r===null?Hm(i,null,a,c):Ao(i,r.child,a,c)}function kg(r,i,a,c,d){a=a.render;var g=i.ref;return Co(i,d),c=dd(r,i,a,c,g,d),a=fd(),r!==null&&!nn?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,Ur(r,i,d)):(Xe&&a&&Qh(i),i.flags|=1,Gt(r,i,c,d),i.child)}function Cg(r,i,a,c,d){if(r===null){var g=a.type;return typeof g=="function"&&!$d(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,xg(r,i,g,c,d)):(r=Ju(a.type,null,c,i,i.mode,d),r.ref=i.ref,r.return=i,i.child=r)}if(g=r.child,(r.lanes&d)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:Fa,a(w,c)&&r.ref===i.ref)return Ur(r,i,d)}return i.flags|=1,r=Rs(g,c),r.ref=i.ref,r.return=i,i.child=r}function xg(r,i,a,c,d){if(r!==null){var g=r.memoizedProps;if(Fa(g,c)&&r.ref===i.ref)if(nn=!1,i.pendingProps=c=g,(r.lanes&d)!==0)(r.flags&131072)!==0&&(nn=!0);else return i.lanes=r.lanes,Ur(r,i,d)}return Td(r,i,a,c,d)}function Pg(r,i,a){var c=i.pendingProps,d=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(bo,gn),gn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:r,cachePool:null,transitions:null},i.updateQueue=null,We(bo,gn),gn|=r,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,We(bo,gn),gn|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,We(bo,gn),gn|=c;return Gt(r,i,d,a),i.child}function Ng(r,i){var a=i.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Td(r,i,a,c,d){var g=tn(a)?mi:Mt.current;return g=To(i,g),Co(i,d),a=dd(r,i,a,c,g,d),c=fd(),r!==null&&!nn?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,Ur(r,i,d)):(Xe&&c&&Qh(i),i.flags|=1,Gt(r,i,a,d),i.child)}function bg(r,i,a,c,d){if(tn(a)){var g=!0;Iu(i)}else g=!1;if(Co(i,d),i.stateNode===null)Bu(r,i),wg(i,a,c),vd(i,a,c,d),c=!0;else if(r===null){var w=i.stateNode,A=i.memoizedProps;w.props=A;var x=w.context,z=a.contextType;typeof z=="object"&&z!==null?z=An(z):(z=tn(a)?mi:Mt.current,z=To(i,z));var X=a.getDerivedStateFromProps,J=typeof X=="function"||typeof w.getSnapshotBeforeUpdate=="function";J||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==c||x!==z)&&Eg(i,w,c,z),_s=!1;var Y=i.memoizedState;w.state=Y,bu(i,c,w,d),x=i.memoizedState,A!==c||Y!==x||en.current||_s?(typeof X=="function"&&(_d(i,a,X,c),x=i.memoizedState),(A=_s||vg(i,a,A,c,Y,x,z))?(J||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=x),w.props=c,w.state=x,w.context=z,c=A):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,Km(r,i),A=i.memoizedProps,z=i.type===i.elementType?A:qn(i.type,A),w.props=z,J=i.pendingProps,Y=w.context,x=a.contextType,typeof x=="object"&&x!==null?x=An(x):(x=tn(a)?mi:Mt.current,x=To(i,x));var oe=a.getDerivedStateFromProps;(X=typeof oe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==J||Y!==x)&&Eg(i,w,c,x),_s=!1,Y=i.memoizedState,w.state=Y,bu(i,c,w,d);var he=i.memoizedState;A!==J||Y!==he||en.current||_s?(typeof oe=="function"&&(_d(i,a,oe,c),he=i.memoizedState),(z=_s||vg(i,a,z,c,Y,he,x)||!1)?(X||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,he,x),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,he,x)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=he),w.props=c,w.state=he,w.context=x,c=z):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&Y===r.memoizedState||(i.flags|=1024),c=!1)}return Id(r,i,a,c,g,d)}function Id(r,i,a,c,d,g){Ng(r,i);var w=(i.flags&128)!==0;if(!c&&!w)return d&&Mm(i,a,!1),Ur(r,i,g);c=i.stateNode,tT.current=i;var A=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,r!==null&&w?(i.child=Ao(i,r.child,null,g),i.child=Ao(i,null,A,g)):Gt(r,i,A,g),i.memoizedState=c.state,d&&Mm(i,a,!0),i.child}function Dg(r){var i=r.stateNode;i.pendingContext?Vm(r,i.pendingContext,i.pendingContext!==i.context):i.context&&Vm(r,i.context,!1),od(r,i.containerInfo)}function Og(r,i,a,c,d){return Ro(),Zh(d),i.flags|=256,Gt(r,i,a,c),i.child}var Sd={dehydrated:null,treeContext:null,retryLane:0};function Rd(r){return{baseLanes:r,cachePool:null,transitions:null}}function Vg(r,i,a){var c=i.pendingProps,d=Ze.current,g=!1,w=(i.flags&128)!==0,A;if((A=w)||(A=r!==null&&r.memoizedState===null?!1:(d&2)!==0),A?(g=!0,i.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),We(Ze,d&1),r===null)return Jh(i),r=i.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((i.mode&1)===0?i.lanes=1:r.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,r=c.fallback,g?(c=i.mode,g=i.child,w={mode:"hidden",children:w},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=Zu(w,c,0,null),r=Ri(r,c,a,null),g.return=i,r.return=i,g.sibling=r,i.child=g,i.child.memoizedState=Rd(a),i.memoizedState=Sd,r):Ad(i,w));if(d=r.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return nT(r,i,w,c,A,d,a);if(g){g=c.fallback,w=i.mode,d=r.child,A=d.sibling;var x={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=x,i.deletions=null):(c=Rs(d,x),c.subtreeFlags=d.subtreeFlags&14680064),A!==null?g=Rs(A,g):(g=Ri(g,w,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,w=r.child.memoizedState,w=w===null?Rd(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=r.childLanes&~a,i.memoizedState=Sd,c}return g=r.child,r=g.sibling,c=Rs(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,r!==null&&(a=i.deletions,a===null?(i.deletions=[r],i.flags|=16):a.push(r)),i.child=c,i.memoizedState=null,c}function Ad(r,i){return i=Zu({mode:"visible",children:i},r.mode,0,null),i.return=r,r.child=i}function Fu(r,i,a,c){return c!==null&&Zh(c),Ao(i,r.child,null,a),r=Ad(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function nT(r,i,a,c,d,g,w){if(a)return i.flags&256?(i.flags&=-257,c=wd(Error(t(422))),Fu(r,i,w,c)):i.memoizedState!==null?(i.child=r.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=Zu({mode:"visible",children:c.children},d,0,null),g=Ri(g,d,w,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Ao(i,r.child,null,w),i.child.memoizedState=Rd(w),i.memoizedState=Sd,g);if((i.mode&1)===0)return Fu(r,i,w,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var A=c.dgst;return c=A,g=Error(t(419)),c=wd(g,c,void 0),Fu(r,i,w,c)}if(A=(w&r.childLanes)!==0,nn||A){if(c=Rt,c!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|w))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Lr(r,d),Gn(c,r,d,-1))}return zd(),c=wd(Error(t(421))),Fu(r,i,w,c)}return d.data==="$?"?(i.flags|=128,i.child=r.child,i=mT.bind(null,r),d._reactRetry=i,null):(r=g.treeContext,mn=ps(d.nextSibling),pn=i,Xe=!0,$n=null,r!==null&&(Sn[Rn++]=Or,Sn[Rn++]=Vr,Sn[Rn++]=gi,Or=r.id,Vr=r.overflow,gi=i),i=Ad(i,c.children),i.flags|=4096,i)}function Lg(r,i,a){r.lanes|=i;var c=r.alternate;c!==null&&(c.lanes|=i),rd(r.return,i,a)}function kd(r,i,a,c,d){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function Mg(r,i,a){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if(Gt(r,i,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Lg(r,a,i);else if(r.tag===19)Lg(r,a,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(We(Ze,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)r=a.alternate,r!==null&&Du(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),kd(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(r=d.alternate,r!==null&&Du(r)===null){i.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}kd(i,!0,a,null,g);break;case"together":kd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Bu(r,i){(i.mode&1)===0&&r!==null&&(r.alternate=null,i.alternate=null,i.flags|=2)}function Ur(r,i,a){if(r!==null&&(i.dependencies=r.dependencies),Ei|=i.lanes,(a&i.childLanes)===0)return null;if(r!==null&&i.child!==r.child)throw Error(t(153));if(i.child!==null){for(r=i.child,a=Rs(r,r.pendingProps),i.child=a,a.return=i;r.sibling!==null;)r=r.sibling,a=a.sibling=Rs(r,r.pendingProps),a.return=i;a.sibling=null}return i.child}function rT(r,i,a){switch(i.tag){case 3:Dg(i),Ro();break;case 5:Xm(i);break;case 1:tn(i.type)&&Iu(i);break;case 4:od(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;We(xu,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(We(Ze,Ze.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Vg(r,i,a):(We(Ze,Ze.current&1),r=Ur(r,i,a),r!==null?r.sibling:null);We(Ze,Ze.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(r.flags&128)!==0){if(c)return Mg(r,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Ze,Ze.current),c)break;return null;case 22:case 23:return i.lanes=0,Pg(r,i,a)}return Ur(r,i,a)}var Ug,Cd,jg,Fg;Ug=function(r,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Cd=function(){},jg=function(r,i,a,c){var d=r.memoizedProps;if(d!==c){r=i.stateNode,vi(or.current);var g=null;switch(a){case"input":d=Js(r,d),c=Js(r,c),g=[];break;case"select":d=le({},d,{value:void 0}),c=le({},c,{value:void 0}),g=[];break;case"textarea":d=ma(r,d),c=ma(r,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=wu)}Ea(a,c);var w;a=null;for(z in d)if(!c.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var A=d[z];for(w in A)A.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in c){var x=c[z];if(A=d?.[z],c.hasOwnProperty(z)&&x!==A&&(x!=null||A!=null))if(z==="style")if(A){for(w in A)!A.hasOwnProperty(w)||x&&x.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in x)x.hasOwnProperty(w)&&A[w]!==x[w]&&(a||(a={}),a[w]=x[w])}else a||(g||(g=[]),g.push(z,a)),a=x;else z==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,A=A?A.__html:void 0,x!=null&&A!==x&&(g=g||[]).push(z,x)):z==="children"?typeof x!="string"&&typeof x!="number"||(g=g||[]).push(z,""+x):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(x!=null&&z==="onScroll"&&Ge("scroll",r),g||A===x||(g=[])):(g=g||[]).push(z,x))}a&&(g=g||[]).push("style",a);var z=g;(i.updateQueue=z)&&(i.flags|=4)}},Fg=function(r,i,a,c){a!==c&&(i.flags|=4)};function tl(r,i){if(!Xe)switch(r.tailMode){case"hidden":i=r.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function jt(r){var i=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(i)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,i}function sT(r,i,a){var c=i.pendingProps;switch(Yh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(i),null;case 1:return tn(i.type)&&Tu(),jt(i),null;case 3:return c=i.stateNode,xo(),Ke(en),Ke(Mt),ud(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(ku(i)?i.flags|=4:r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,$n!==null&&(jd($n),$n=null))),Cd(r,i),jt(i),null;case 5:ad(i);var d=vi(Ya.current);if(a=i.type,r!==null&&i.stateNode!=null)jg(r,i,a,c,d),r.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return jt(i),null}if(r=vi(or.current),ku(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[ir]=i,c[Wa]=g,r=(i.mode&1)!==0,a){case"dialog":Ge("cancel",c),Ge("close",c);break;case"iframe":case"object":case"embed":Ge("load",c);break;case"video":case"audio":for(d=0;d<za.length;d++)Ge(za[d],c);break;case"source":Ge("error",c);break;case"img":case"image":case"link":Ge("error",c),Ge("load",c);break;case"details":Ge("toggle",c);break;case"input":$i(c,g),Ge("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Ge("invalid",c);break;case"textarea":Wi(c,g),Ge("invalid",c)}Ea(a,g),d=null;for(var w in g)if(g.hasOwnProperty(w)){var A=g[w];w==="children"?typeof A=="string"?c.textContent!==A&&(g.suppressHydrationWarning!==!0&&vu(c.textContent,A,r),d=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&vu(c.textContent,A,r),d=["children",""+A]):o.hasOwnProperty(w)&&A!=null&&w==="onScroll"&&Ge("scroll",c)}switch(a){case"input":Tr(c),Wl(c,g,!0);break;case"textarea":Tr(c),ga(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=wu)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=gt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=w.createElement(a,{is:c.is}):(r=w.createElement(a),a==="select"&&(w=r,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):r=w.createElementNS(r,a),r[ir]=i,r[Wa]=c,Ug(r,i,!1,!1),i.stateNode=r;e:{switch(w=Ta(a,c),a){case"dialog":Ge("cancel",r),Ge("close",r),d=c;break;case"iframe":case"object":case"embed":Ge("load",r),d=c;break;case"video":case"audio":for(d=0;d<za.length;d++)Ge(za[d],r);d=c;break;case"source":Ge("error",r),d=c;break;case"img":case"image":case"link":Ge("error",r),Ge("load",r),d=c;break;case"details":Ge("toggle",r),d=c;break;case"input":$i(r,c),d=Js(r,c),Ge("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=le({},c,{value:void 0}),Ge("invalid",r);break;case"textarea":Wi(r,c),d=ma(r,c),Ge("invalid",r);break;default:d=c}Ea(a,d),A=d;for(g in A)if(A.hasOwnProperty(g)){var x=A[g];g==="style"?va(r,x):g==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&ya(r,x)):g==="children"?typeof x=="string"?(a!=="textarea"||x!=="")&&rs(r,x):typeof x=="number"&&rs(r,""+x):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?x!=null&&g==="onScroll"&&Ge("scroll",r):x!=null&&Q(r,g,x,w))}switch(a){case"input":Tr(r),Wl(r,c,!1);break;case"textarea":Tr(r),ga(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Ue(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?Sr(r,!!c.multiple,g,!1):c.defaultValue!=null&&Sr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=wu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return jt(i),null;case 6:if(r&&i.stateNode!=null)Fg(r,i,r.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=vi(Ya.current),vi(or.current),ku(i)){if(c=i.stateNode,a=i.memoizedProps,c[ir]=i,(g=c.nodeValue!==a)&&(r=pn,r!==null))switch(r.tag){case 3:vu(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&vu(c.nodeValue,a,(r.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[ir]=i,i.stateNode=c}return jt(i),null;case 13:if(Ke(Ze),c=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Xe&&mn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)$m(),Ro(),i.flags|=98560,g=!1;else if(g=ku(i),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[ir]=i}else Ro(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;jt(i),g=!1}else $n!==null&&(jd($n),$n=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(r===null||(Ze.current&1)!==0?wt===0&&(wt=3):zd())),i.updateQueue!==null&&(i.flags|=4),jt(i),null);case 4:return xo(),Cd(r,i),r===null&&$a(i.stateNode.containerInfo),jt(i),null;case 10:return nd(i.type._context),jt(i),null;case 17:return tn(i.type)&&Tu(),jt(i),null;case 19:if(Ke(Ze),g=i.memoizedState,g===null)return jt(i),null;if(c=(i.flags&128)!==0,w=g.rendering,w===null)if(c)tl(g,!1);else{if(wt!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(w=Du(r),w!==null){for(i.flags|=128,tl(g,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,r=c,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,r=w.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return We(Ze,Ze.current&1|2),i.child}r=r.sibling}g.tail!==null&&qe()>Do&&(i.flags|=128,c=!0,tl(g,!1),i.lanes=4194304)}else{if(!c)if(r=Du(w),r!==null){if(i.flags|=128,c=!0,a=r.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),tl(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Xe)return jt(i),null}else 2*qe()-g.renderingStartTime>Do&&a!==1073741824&&(i.flags|=128,c=!0,tl(g,!1),i.lanes=4194304);g.isBackwards?(w.sibling=i.child,i.child=w):(a=g.last,a!==null?a.sibling=w:i.child=w,g.last=w)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=qe(),i.sibling=null,a=Ze.current,We(Ze,c?a&1|2:a&1),i):(jt(i),null);case 22:case 23:return Bd(),c=i.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(gn&1073741824)!==0&&(jt(i),i.subtreeFlags&6&&(i.flags|=8192)):jt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function iT(r,i){switch(Yh(i),i.tag){case 1:return tn(i.type)&&Tu(),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return xo(),Ke(en),Ke(Mt),ud(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 5:return ad(i),null;case 13:if(Ke(Ze),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ro()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return Ke(Ze),null;case 4:return xo(),null;case 10:return nd(i.type._context),null;case 22:case 23:return Bd(),null;case 24:return null;default:return null}}var zu=!1,Ft=!1,oT=typeof WeakSet=="function"?WeakSet:Set,ce=null;function No(r,i){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rt(r,i,c)}else a.current=null}function xd(r,i,a){try{a()}catch(c){rt(r,i,c)}}var Bg=!1;function aT(r,i){if(Bh=hs,r=vm(),Dh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,A=-1,x=-1,z=0,X=0,J=r,Y=null;t:for(;;){for(var oe;J!==a||d!==0&&J.nodeType!==3||(A=w+d),J!==g||c!==0&&J.nodeType!==3||(x=w+c),J.nodeType===3&&(w+=J.nodeValue.length),(oe=J.firstChild)!==null;)Y=J,J=oe;for(;;){if(J===r)break t;if(Y===a&&++z===d&&(A=w),Y===g&&++X===c&&(x=w),(oe=J.nextSibling)!==null)break;J=Y,Y=J.parentNode}J=oe}a=A===-1||x===-1?null:{start:A,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(zh={focusedElem:r,selectionRange:a},hs=!1,ce=i;ce!==null;)if(i=ce,r=i.child,(i.subtreeFlags&1028)!==0&&r!==null)r.return=i,ce=r;else for(;ce!==null;){i=ce;try{var he=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var de=he.memoizedProps,ut=he.memoizedState,j=i.stateNode,b=j.getSnapshotBeforeUpdate(i.elementType===i.type?de:qn(i.type,de),ut);j.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var F=i.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){rt(i,i.return,te)}if(r=i.sibling,r!==null){r.return=i.return,ce=r;break}ce=i.return}return he=Bg,Bg=!1,he}function nl(r,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var g=d.destroy;d.destroy=void 0,g!==void 0&&xd(i,a,g)}d=d.next}while(d!==c)}}function $u(r,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Pd(r){var i=r.ref;if(i!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof i=="function"?i(r):i.current=r}}function zg(r){var i=r.alternate;i!==null&&(r.alternate=null,zg(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&(delete i[ir],delete i[Wa],delete i[Hh],delete i[$E],delete i[qE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function $g(r){return r.tag===5||r.tag===3||r.tag===4}function qg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||$g(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Nd(r,i,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(r,i):a.insertBefore(r,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(r,a)):(i=a,i.appendChild(r)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=wu));else if(c!==4&&(r=r.child,r!==null))for(Nd(r,i,a),r=r.sibling;r!==null;)Nd(r,i,a),r=r.sibling}function bd(r,i,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,i?a.insertBefore(r,i):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(bd(r,i,a),r=r.sibling;r!==null;)bd(r,i,a),r=r.sibling}var Pt=null,Wn=!1;function ws(r,i,a){for(a=a.child;a!==null;)Wg(r,i,a),a=a.sibling}function Wg(r,i,a){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(ai,a)}catch{}switch(a.tag){case 5:Ft||No(a,i);case 6:var c=Pt,d=Wn;Pt=null,ws(r,i,a),Pt=c,Wn=d,Pt!==null&&(Wn?(r=Pt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(Wn?(r=Pt,a=a.stateNode,r.nodeType===8?Wh(r.parentNode,a):r.nodeType===1&&Wh(r,a),Fn(r)):Wh(Pt,a.stateNode));break;case 4:c=Pt,d=Wn,Pt=a.stateNode.containerInfo,Wn=!0,ws(r,i,a),Pt=c,Wn=d;break;case 0:case 11:case 14:case 15:if(!Ft&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&xd(a,i,w),d=d.next}while(d!==c)}ws(r,i,a);break;case 1:if(!Ft&&(No(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){rt(a,i,A)}ws(r,i,a);break;case 21:ws(r,i,a);break;case 22:a.mode&1?(Ft=(c=Ft)||a.memoizedState!==null,ws(r,i,a),Ft=c):ws(r,i,a);break;default:ws(r,i,a)}}function Hg(r){var i=r.updateQueue;if(i!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new oT),i.forEach(function(c){var d=gT.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Hn(r,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=r,w=i,A=w;e:for(;A!==null;){switch(A.tag){case 5:Pt=A.stateNode,Wn=!1;break e;case 3:Pt=A.stateNode.containerInfo,Wn=!0;break e;case 4:Pt=A.stateNode.containerInfo,Wn=!0;break e}A=A.return}if(Pt===null)throw Error(t(160));Wg(g,w,d),Pt=null,Wn=!1;var x=d.alternate;x!==null&&(x.return=null),d.return=null}catch(z){rt(d,i,z)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Gg(i,r),i=i.sibling}function Gg(r,i){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Hn(i,r),lr(r),c&4){try{nl(3,r,r.return),$u(3,r)}catch(de){rt(r,r.return,de)}try{nl(5,r,r.return)}catch(de){rt(r,r.return,de)}}break;case 1:Hn(i,r),lr(r),c&512&&a!==null&&No(a,a.return);break;case 5:if(Hn(i,r),lr(r),c&512&&a!==null&&No(a,a.return),r.flags&32){var d=r.stateNode;try{rs(d,"")}catch(de){rt(r,r.return,de)}}if(c&4&&(d=r.stateNode,d!=null)){var g=r.memoizedProps,w=a!==null?a.memoizedProps:g,A=r.type,x=r.updateQueue;if(r.updateQueue=null,x!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&fa(d,g),Ta(A,w);var z=Ta(A,g);for(w=0;w<x.length;w+=2){var X=x[w],J=x[w+1];X==="style"?va(d,J):X==="dangerouslySetInnerHTML"?ya(d,J):X==="children"?rs(d,J):Q(d,X,J,z)}switch(A){case"input":pa(d,g);break;case"textarea":Hi(d,g);break;case"select":var Y=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var oe=g.value;oe!=null?Sr(d,!!g.multiple,oe,!1):Y!==!!g.multiple&&(g.defaultValue!=null?Sr(d,!!g.multiple,g.defaultValue,!0):Sr(d,!!g.multiple,g.multiple?[]:"",!1))}d[Wa]=g}catch(de){rt(r,r.return,de)}}break;case 6:if(Hn(i,r),lr(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,g=r.memoizedProps;try{d.nodeValue=g}catch(de){rt(r,r.return,de)}}break;case 3:if(Hn(i,r),lr(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Fn(i.containerInfo)}catch(de){rt(r,r.return,de)}break;case 4:Hn(i,r),lr(r);break;case 13:Hn(i,r),lr(r),d=r.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Vd=qe())),c&4&&Hg(r);break;case 22:if(X=a!==null&&a.memoizedState!==null,r.mode&1?(Ft=(z=Ft)||X,Hn(i,r),Ft=z):Hn(i,r),lr(r),c&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!X&&(r.mode&1)!==0)for(ce=r,X=r.child;X!==null;){for(J=ce=X;ce!==null;){switch(Y=ce,oe=Y.child,Y.tag){case 0:case 11:case 14:case 15:nl(4,Y,Y.return);break;case 1:No(Y,Y.return);var he=Y.stateNode;if(typeof he.componentWillUnmount=="function"){c=Y,a=Y.return;try{i=c,he.props=i.memoizedProps,he.state=i.memoizedState,he.componentWillUnmount()}catch(de){rt(c,a,de)}}break;case 5:No(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Yg(J);continue}}oe!==null?(oe.return=Y,ce=oe):Yg(J)}X=X.sibling}e:for(X=null,J=r;;){if(J.tag===5){if(X===null){X=J;try{d=J.stateNode,z?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=J.stateNode,x=J.memoizedProps.style,w=x!=null&&x.hasOwnProperty("display")?x.display:null,A.style.display=_a("display",w))}catch(de){rt(r,r.return,de)}}}else if(J.tag===6){if(X===null)try{J.stateNode.nodeValue=z?"":J.memoizedProps}catch(de){rt(r,r.return,de)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===r)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===r)break e;for(;J.sibling===null;){if(J.return===null||J.return===r)break e;X===J&&(X=null),J=J.return}X===J&&(X=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Hn(i,r),lr(r),c&4&&Hg(r);break;case 21:break;default:Hn(i,r),lr(r)}}function lr(r){var i=r.flags;if(i&2){try{e:{for(var a=r.return;a!==null;){if($g(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(rs(d,""),c.flags&=-33);var g=qg(r);bd(r,g,d);break;case 3:case 4:var w=c.stateNode.containerInfo,A=qg(r);Nd(r,A,w);break;default:throw Error(t(161))}}catch(x){rt(r,r.return,x)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function lT(r,i,a){ce=r,Kg(r)}function Kg(r,i,a){for(var c=(r.mode&1)!==0;ce!==null;){var d=ce,g=d.child;if(d.tag===22&&c){var w=d.memoizedState!==null||zu;if(!w){var A=d.alternate,x=A!==null&&A.memoizedState!==null||Ft;A=zu;var z=Ft;if(zu=w,(Ft=x)&&!z)for(ce=d;ce!==null;)w=ce,x=w.child,w.tag===22&&w.memoizedState!==null?Xg(d):x!==null?(x.return=w,ce=x):Xg(d);for(;g!==null;)ce=g,Kg(g),g=g.sibling;ce=d,zu=A,Ft=z}Qg(r)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,ce=g):Qg(r)}}function Qg(r){for(;ce!==null;){var i=ce;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ft||$u(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Ft)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:qn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Ym(i,g,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ym(i,w,a)}break;case 5:var A=i.stateNode;if(a===null&&i.flags&4){a=A;var x=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&a.focus();break;case"img":x.src&&(a.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var z=i.alternate;if(z!==null){var X=z.memoizedState;if(X!==null){var J=X.dehydrated;J!==null&&Fn(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||i.flags&512&&Pd(i)}catch(Y){rt(i,i.return,Y)}}if(i===r){ce=null;break}if(a=i.sibling,a!==null){a.return=i.return,ce=a;break}ce=i.return}}function Yg(r){for(;ce!==null;){var i=ce;if(i===r){ce=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ce=a;break}ce=i.return}}function Xg(r){for(;ce!==null;){var i=ce;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{$u(4,i)}catch(x){rt(i,a,x)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(x){rt(i,d,x)}}var g=i.return;try{Pd(i)}catch(x){rt(i,g,x)}break;case 5:var w=i.return;try{Pd(i)}catch(x){rt(i,w,x)}}}catch(x){rt(i,i.return,x)}if(i===r){ce=null;break}var A=i.sibling;if(A!==null){A.return=i.return,ce=A;break}ce=i.return}}var uT=Math.ceil,qu=re.ReactCurrentDispatcher,Dd=re.ReactCurrentOwner,Cn=re.ReactCurrentBatchConfig,Ve=0,Rt=null,dt=null,Nt=0,gn=0,bo=ms(0),wt=0,rl=null,Ei=0,Wu=0,Od=0,sl=null,rn=null,Vd=0,Do=1/0,jr=null,Hu=!1,Ld=null,Es=null,Gu=!1,Ts=null,Ku=0,il=0,Md=null,Qu=-1,Yu=0;function Kt(){return(Ve&6)!==0?qe():Qu!==-1?Qu:Qu=qe()}function Is(r){return(r.mode&1)===0?1:(Ve&2)!==0&&Nt!==0?Nt&-Nt:HE.transition!==null?(Yu===0&&(Yu=ui()),Yu):(r=Ne,r!==0||(r=window.event,r=r===void 0?16:Da(r.type)),r)}function Gn(r,i,a,c){if(50<il)throw il=0,Md=null,Error(t(185));as(r,a,c),((Ve&2)===0||r!==Rt)&&(r===Rt&&((Ve&2)===0&&(Wu|=a),wt===4&&Ss(r,Nt)),sn(r,c),a===1&&Ve===0&&(i.mode&1)===0&&(Do=qe()+500,Su&&ys()))}function sn(r,i){var a=r.callbackNode;kr(r,i);var c=li(r,r===Rt?Nt:0);if(c===0)a!==null&&Ca(a),r.callbackNode=null,r.callbackPriority=0;else if(i=c&-c,r.callbackPriority!==i){if(a!=null&&Ca(a),i===1)r.tag===0?WE(Zg.bind(null,r)):Um(Zg.bind(null,r)),BE(function(){(Ve&6)===0&&ys()}),a=null;else{switch(us(c)){case 1:a=oi;break;case 4:a=ss;break;case 16:a=En;break;case 536870912:a=Yl;break;default:a=En}a=ay(a,Jg.bind(null,r))}r.callbackPriority=i,r.callbackNode=a}}function Jg(r,i){if(Qu=-1,Yu=0,(Ve&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Oo()&&r.callbackNode!==a)return null;var c=li(r,r===Rt?Nt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||i)i=Xu(r,c);else{i=c;var d=Ve;Ve|=2;var g=ty();(Rt!==r||Nt!==i)&&(jr=null,Do=qe()+500,Ii(r,i));do try{dT();break}catch(A){ey(r,A)}while(!0);td(),qu.current=g,Ve=d,dt!==null?i=0:(Rt=null,Nt=0,i=wt)}if(i!==0){if(i===2&&(d=hn(r),d!==0&&(c=d,i=Ud(r,d))),i===1)throw a=rl,Ii(r,0),Ss(r,c),sn(r,qe()),a;if(i===6)Ss(r,c);else{if(d=r.current.alternate,(c&30)===0&&!cT(d)&&(i=Xu(r,c),i===2&&(g=hn(r),g!==0&&(c=g,i=Ud(r,g))),i===1))throw a=rl,Ii(r,0),Ss(r,c),sn(r,qe()),a;switch(r.finishedWork=d,r.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Si(r,rn,jr);break;case 3:if(Ss(r,c),(c&130023424)===c&&(i=Vd+500-qe(),10<i)){if(li(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){Kt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=qh(Si.bind(null,r,rn,jr),i);break}Si(r,rn,jr);break;case 4:if(Ss(r,c),(c&4194240)===c)break;for(i=r.eventTimes,d=-1;0<c;){var w=31-Wt(c);g=1<<w,w=i[w],w>d&&(d=w),c&=~g}if(c=d,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*uT(c/1960))-c,10<c){r.timeoutHandle=qh(Si.bind(null,r,rn,jr),c);break}Si(r,rn,jr);break;case 5:Si(r,rn,jr);break;default:throw Error(t(329))}}}return sn(r,qe()),r.callbackNode===a?Jg.bind(null,r):null}function Ud(r,i){var a=sl;return r.current.memoizedState.isDehydrated&&(Ii(r,i).flags|=256),r=Xu(r,i),r!==2&&(i=rn,rn=a,i!==null&&jd(i)),r}function jd(r){rn===null?rn=r:rn.push.apply(rn,r)}function cT(r){for(var i=r;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!zn(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ss(r,i){for(i&=~Od,i&=~Wu,r.suspendedLanes|=i,r.pingedLanes&=~i,r=r.expirationTimes;0<i;){var a=31-Wt(i),c=1<<a;r[a]=-1,i&=~c}}function Zg(r){if((Ve&6)!==0)throw Error(t(327));Oo();var i=li(r,0);if((i&1)===0)return sn(r,qe()),null;var a=Xu(r,i);if(r.tag!==0&&a===2){var c=hn(r);c!==0&&(i=c,a=Ud(r,c))}if(a===1)throw a=rl,Ii(r,0),Ss(r,i),sn(r,qe()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=i,Si(r,rn,jr),sn(r,qe()),null}function Fd(r,i){var a=Ve;Ve|=1;try{return r(i)}finally{Ve=a,Ve===0&&(Do=qe()+500,Su&&ys())}}function Ti(r){Ts!==null&&Ts.tag===0&&(Ve&6)===0&&Oo();var i=Ve;Ve|=1;var a=Cn.transition,c=Ne;try{if(Cn.transition=null,Ne=1,r)return r()}finally{Ne=c,Cn.transition=a,Ve=i,(Ve&6)===0&&ys()}}function Bd(){gn=bo.current,Ke(bo)}function Ii(r,i){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,FE(a)),dt!==null)for(a=dt.return;a!==null;){var c=a;switch(Yh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Tu();break;case 3:xo(),Ke(en),Ke(Mt),ud();break;case 5:ad(c);break;case 4:xo();break;case 13:Ke(Ze);break;case 19:Ke(Ze);break;case 10:nd(c.type._context);break;case 22:case 23:Bd()}a=a.return}if(Rt=r,dt=r=Rs(r.current,null),Nt=gn=i,wt=0,rl=null,Od=Wu=Ei=0,rn=sl=null,_i!==null){for(i=0;i<_i.length;i++)if(a=_i[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var w=g.next;g.next=d,c.next=w}a.pending=c}_i=null}return r}function ey(r,i){do{var a=dt;try{if(td(),Ou.current=Uu,Vu){for(var c=et.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Vu=!1}if(wi=0,St=vt=et=null,Xa=!1,Ja=0,Dd.current=null,a===null||a.return===null){wt=1,rl=i,dt=null;break}e:{var g=r,w=a.return,A=a,x=i;if(i=Nt,A.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var z=x,X=A,J=X.tag;if((X.mode&1)===0&&(J===0||J===11||J===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var oe=Rg(w);if(oe!==null){oe.flags&=-257,Ag(oe,w,A,g,i),oe.mode&1&&Sg(g,z,i),i=oe,x=z;var he=i.updateQueue;if(he===null){var de=new Set;de.add(x),i.updateQueue=de}else he.add(x);break e}else{if((i&1)===0){Sg(g,z,i),zd();break e}x=Error(t(426))}}else if(Xe&&A.mode&1){var ut=Rg(w);if(ut!==null){(ut.flags&65536)===0&&(ut.flags|=256),Ag(ut,w,A,g,i),Zh(Po(x,A));break e}}g=x=Po(x,A),wt!==4&&(wt=2),sl===null?sl=[g]:sl.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var j=Tg(g,x,i);Qm(g,j);break e;case 1:A=x;var b=g.type,F=g.stateNode;if((g.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Es===null||!Es.has(F)))){g.flags|=65536,i&=-i,g.lanes|=i;var te=Ig(g,A,i);Qm(g,te);break e}}g=g.return}while(g!==null)}ry(a)}catch(fe){i=fe,dt===a&&a!==null&&(dt=a=a.return);continue}break}while(!0)}function ty(){var r=qu.current;return qu.current=Uu,r===null?Uu:r}function zd(){(wt===0||wt===3||wt===2)&&(wt=4),Rt===null||(Ei&268435455)===0&&(Wu&268435455)===0||Ss(Rt,Nt)}function Xu(r,i){var a=Ve;Ve|=2;var c=ty();(Rt!==r||Nt!==i)&&(jr=null,Ii(r,i));do try{hT();break}catch(d){ey(r,d)}while(!0);if(td(),Ve=a,qu.current=c,dt!==null)throw Error(t(261));return Rt=null,Nt=0,wt}function hT(){for(;dt!==null;)ny(dt)}function dT(){for(;dt!==null&&!Kl();)ny(dt)}function ny(r){var i=oy(r.alternate,r,gn);r.memoizedProps=r.pendingProps,i===null?ry(r):dt=i,Dd.current=null}function ry(r){var i=r;do{var a=i.alternate;if(r=i.return,(i.flags&32768)===0){if(a=sT(a,i,gn),a!==null){dt=a;return}}else{if(a=iT(a,i),a!==null){a.flags&=32767,dt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{wt=6,dt=null;return}}if(i=i.sibling,i!==null){dt=i;return}dt=i=r}while(i!==null);wt===0&&(wt=5)}function Si(r,i,a){var c=Ne,d=Cn.transition;try{Cn.transition=null,Ne=1,fT(r,i,a,c)}finally{Cn.transition=d,Ne=c}return null}function fT(r,i,a,c){do Oo();while(Ts!==null);if((Ve&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(ze(r,g),r===Rt&&(dt=Rt=null,Nt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Gu||(Gu=!0,ay(En,function(){return Oo(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Cn.transition,Cn.transition=null;var w=Ne;Ne=1;var A=Ve;Ve|=4,Dd.current=null,aT(r,a),Gg(a,r),DE(zh),hs=!!Bh,zh=Bh=null,r.current=a,lT(a),Rh(),Ve=A,Ne=w,Cn.transition=g}else r.current=a;if(Gu&&(Gu=!1,Ts=r,Ku=d),g=r.pendingLanes,g===0&&(Es=null),Xl(a.stateNode),sn(r,qe()),i!==null)for(c=r.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Hu)throw Hu=!1,r=Ld,Ld=null,r;return(Ku&1)!==0&&r.tag!==0&&Oo(),g=r.pendingLanes,(g&1)!==0?r===Md?il++:(il=0,Md=r):il=0,ys(),null}function Oo(){if(Ts!==null){var r=us(Ku),i=Cn.transition,a=Ne;try{if(Cn.transition=null,Ne=16>r?16:r,Ts===null)var c=!1;else{if(r=Ts,Ts=null,Ku=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,ce=r.current;ce!==null;){var g=ce,w=g.child;if((ce.flags&16)!==0){var A=g.deletions;if(A!==null){for(var x=0;x<A.length;x++){var z=A[x];for(ce=z;ce!==null;){var X=ce;switch(X.tag){case 0:case 11:case 15:nl(8,X,g)}var J=X.child;if(J!==null)J.return=X,ce=J;else for(;ce!==null;){X=ce;var Y=X.sibling,oe=X.return;if(zg(X),X===z){ce=null;break}if(Y!==null){Y.return=oe,ce=Y;break}ce=oe}}}var he=g.alternate;if(he!==null){var de=he.child;if(de!==null){he.child=null;do{var ut=de.sibling;de.sibling=null,de=ut}while(de!==null)}}ce=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,ce=w;else e:for(;ce!==null;){if(g=ce,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:nl(9,g,g.return)}var j=g.sibling;if(j!==null){j.return=g.return,ce=j;break e}ce=g.return}}var b=r.current;for(ce=b;ce!==null;){w=ce;var F=w.child;if((w.subtreeFlags&2064)!==0&&F!==null)F.return=w,ce=F;else e:for(w=b;ce!==null;){if(A=ce,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:$u(9,A)}}catch(fe){rt(A,A.return,fe)}if(A===w){ce=null;break e}var te=A.sibling;if(te!==null){te.return=A.return,ce=te;break e}ce=A.return}}if(Ve=d,ys(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(ai,r)}catch{}c=!0}return c}finally{Ne=a,Cn.transition=i}}return!1}function sy(r,i,a){i=Po(a,i),i=Tg(r,i,1),r=vs(r,i,1),i=Kt(),r!==null&&(as(r,1,i),sn(r,i))}function rt(r,i,a){if(r.tag===3)sy(r,r,a);else for(;i!==null;){if(i.tag===3){sy(i,r,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Es===null||!Es.has(c))){r=Po(a,r),r=Ig(i,r,1),i=vs(i,r,1),r=Kt(),i!==null&&(as(i,1,r),sn(i,r));break}}i=i.return}}function pT(r,i,a){var c=r.pingCache;c!==null&&c.delete(i),i=Kt(),r.pingedLanes|=r.suspendedLanes&a,Rt===r&&(Nt&a)===a&&(wt===4||wt===3&&(Nt&130023424)===Nt&&500>qe()-Vd?Ii(r,0):Od|=a),sn(r,i)}function iy(r,i){i===0&&((r.mode&1)===0?i=1:(i=no,no<<=1,(no&130023424)===0&&(no=4194304)));var a=Kt();r=Lr(r,i),r!==null&&(as(r,i,a),sn(r,a))}function mT(r){var i=r.memoizedState,a=0;i!==null&&(a=i.retryLane),iy(r,a)}function gT(r,i){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),iy(r,a)}var oy;oy=function(r,i,a){if(r!==null)if(r.memoizedProps!==i.pendingProps||en.current)nn=!0;else{if((r.lanes&a)===0&&(i.flags&128)===0)return nn=!1,rT(r,i,a);nn=(r.flags&131072)!==0}else nn=!1,Xe&&(i.flags&1048576)!==0&&jm(i,Au,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Bu(r,i),r=i.pendingProps;var d=To(i,Mt.current);Co(i,a),d=dd(null,i,c,r,d,a);var g=fd();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,tn(c)?(g=!0,Iu(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,id(i),d.updater=ju,i.stateNode=d,d._reactInternals=i,vd(i,c,r,a),i=Id(null,i,c,!0,g,a)):(i.tag=0,Xe&&g&&Qh(i),Gt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Bu(r,i),r=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=_T(c),r=qn(c,r),d){case 0:i=Td(null,i,c,r,a);break e;case 1:i=bg(null,i,c,r,a);break e;case 11:i=kg(null,i,c,r,a);break e;case 14:i=Cg(null,i,c,qn(c.type,r),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:qn(c,d),Td(r,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:qn(c,d),bg(r,i,c,d,a);case 3:e:{if(Dg(i),r===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,Km(r,i),bu(i,c,null,a);var w=i.memoizedState;if(c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=Po(Error(t(423)),i),i=Og(r,i,c,a,d);break e}else if(c!==d){d=Po(Error(t(424)),i),i=Og(r,i,c,a,d);break e}else for(mn=ps(i.stateNode.containerInfo.firstChild),pn=i,Xe=!0,$n=null,a=Hm(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ro(),c===d){i=Ur(r,i,a);break e}Gt(r,i,c,a)}i=i.child}return i;case 5:return Xm(i),r===null&&Jh(i),c=i.type,d=i.pendingProps,g=r!==null?r.memoizedProps:null,w=d.children,$h(c,d)?w=null:g!==null&&$h(c,g)&&(i.flags|=32),Ng(r,i),Gt(r,i,w,a),i.child;case 6:return r===null&&Jh(i),null;case 13:return Vg(r,i,a);case 4:return od(i,i.stateNode.containerInfo),c=i.pendingProps,r===null?i.child=Ao(i,null,c,a):Gt(r,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:qn(c,d),kg(r,i,c,d,a);case 7:return Gt(r,i,i.pendingProps,a),i.child;case 8:return Gt(r,i,i.pendingProps.children,a),i.child;case 12:return Gt(r,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,w=d.value,We(xu,c._currentValue),c._currentValue=w,g!==null)if(zn(g.value,w)){if(g.children===d.children&&!en.current){i=Ur(r,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var A=g.dependencies;if(A!==null){w=g.child;for(var x=A.firstContext;x!==null;){if(x.context===c){if(g.tag===1){x=Mr(-1,a&-a),x.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var X=z.pending;X===null?x.next=x:(x.next=X.next,X.next=x),z.pending=x}}g.lanes|=a,x=g.alternate,x!==null&&(x.lanes|=a),rd(g.return,a,i),A.lanes|=a;break}x=x.next}}else if(g.tag===10)w=g.type===i.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,A=w.alternate,A!==null&&(A.lanes|=a),rd(w,a,i),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===i){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Gt(r,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Co(i,a),d=An(d),c=c(d),i.flags|=1,Gt(r,i,c,a),i.child;case 14:return c=i.type,d=qn(c,i.pendingProps),d=qn(c.type,d),Cg(r,i,c,d,a);case 15:return xg(r,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:qn(c,d),Bu(r,i),i.tag=1,tn(c)?(r=!0,Iu(i)):r=!1,Co(i,a),wg(i,c,d),vd(i,c,d,a),Id(null,i,c,!0,r,a);case 19:return Mg(r,i,a);case 22:return Pg(r,i,a)}throw Error(t(156,i.tag))};function ay(r,i){return eo(r,i)}function yT(r,i,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(r,i,a,c){return new yT(r,i,a,c)}function $d(r){return r=r.prototype,!(!r||!r.isReactComponent)}function _T(r){if(typeof r=="function")return $d(r)?1:0;if(r!=null){if(r=r.$$typeof,r===L)return 11;if(r===Vt)return 14}return 2}function Rs(r,i){var a=r.alternate;return a===null?(a=xn(r.tag,i,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=i,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,i=r.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Ju(r,i,a,c,d,g){var w=2;if(c=r,typeof r=="function")$d(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case P:return Ri(a.children,d,g,i);case R:w=8,d|=8;break;case C:return r=xn(12,a,i,d|2),r.elementType=C,r.lanes=g,r;case k:return r=xn(13,a,i,d),r.elementType=k,r.lanes=g,r;case at:return r=xn(19,a,i,d),r.elementType=at,r.lanes=g,r;case Be:return Zu(a,d,g,i);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case N:w=10;break e;case D:w=9;break e;case L:w=11;break e;case Vt:w=14;break e;case Lt:w=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return i=xn(w,a,i,d),i.elementType=r,i.type=c,i.lanes=g,i}function Ri(r,i,a,c){return r=xn(7,r,c,i),r.lanes=a,r}function Zu(r,i,a,c){return r=xn(22,r,c,i),r.elementType=Be,r.lanes=a,r.stateNode={isHidden:!1},r}function qd(r,i,a){return r=xn(6,r,null,i),r.lanes=a,r}function Wd(r,i,a){return i=xn(4,r.children!==null?r.children:[],r.key,i),i.lanes=a,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}function vT(r,i,a,c,d){this.tag=i,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=os(0),this.expirationTimes=os(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=os(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Hd(r,i,a,c,d,g,w,A,x){return r=new vT(r,i,a,A,x),i===1?(i=1,g===!0&&(i|=8)):i=0,g=xn(3,null,null,i),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},id(g),r}function wT(r,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ae,key:c==null?null:""+c,children:r,containerInfo:i,implementation:a}}function ly(r){if(!r)return gs;r=r._reactInternals;e:{if(Vn(r)!==r||r.tag!==1)throw Error(t(170));var i=r;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(tn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(tn(a))return Lm(r,a,i)}return i}function uy(r,i,a,c,d,g,w,A,x){return r=Hd(a,c,!0,r,d,g,w,A,x),r.context=ly(null),a=r.current,c=Kt(),d=Is(a),g=Mr(c,d),g.callback=i??null,vs(a,g,d),r.current.lanes=d,as(r,d,c),sn(r,c),r}function ec(r,i,a,c){var d=i.current,g=Kt(),w=Is(d);return a=ly(a),i.context===null?i.context=a:i.pendingContext=a,i=Mr(g,w),i.payload={element:r},c=c===void 0?null:c,c!==null&&(i.callback=c),r=vs(d,i,w),r!==null&&(Gn(r,d,w,g),Nu(r,d,w)),w}function tc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function cy(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<i?a:i}}function Gd(r,i){cy(r,i),(r=r.alternate)&&cy(r,i)}function ET(){return null}var hy=typeof reportError=="function"?reportError:function(r){console.error(r)};function Kd(r){this._internalRoot=r}nc.prototype.render=Kd.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(t(409));ec(r,i,null,null)},nc.prototype.unmount=Kd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;Ti(function(){ec(null,r,null,null)}),i[br]=null}};function nc(r){this._internalRoot=r}nc.prototype.unstable_scheduleHydration=function(r){if(r){var i=nu();r={blockedOn:null,target:r,priority:i};for(var a=0;a<tr.length&&i!==0&&i<tr[a].priority;a++);tr.splice(a,0,r),a===0&&iu(r)}};function Qd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function rc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function dy(){}function TT(r,i,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var z=tc(w);g.call(z)}}var w=uy(i,c,r,0,null,!1,!1,"",dy);return r._reactRootContainer=w,r[br]=w.current,$a(r.nodeType===8?r.parentNode:r),Ti(),w}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var A=c;c=function(){var z=tc(x);A.call(z)}}var x=Hd(r,0,!1,null,null,!1,!1,"",dy);return r._reactRootContainer=x,r[br]=x.current,$a(r.nodeType===8?r.parentNode:r),Ti(function(){ec(i,x,a,c)}),x}function sc(r,i,a,c,d){var g=a._reactRootContainer;if(g){var w=g;if(typeof d=="function"){var A=d;d=function(){var x=tc(w);A.call(x)}}ec(i,w,r,d)}else w=TT(a,i,r,d,c);return tc(w)}eu=function(r){switch(r.tag){case 3:var i=r.stateNode;if(i.current.memoizedState.isDehydrated){var a=is(i.pendingLanes);a!==0&&(ls(i,a|1),sn(i,qe()),(Ve&6)===0&&(Do=qe()+500,ys()))}break;case 13:Ti(function(){var c=Lr(r,1);if(c!==null){var d=Kt();Gn(c,r,1,d)}}),Gd(r,1)}},ro=function(r){if(r.tag===13){var i=Lr(r,134217728);if(i!==null){var a=Kt();Gn(i,r,134217728,a)}Gd(r,134217728)}},tu=function(r){if(r.tag===13){var i=Is(r),a=Lr(r,i);if(a!==null){var c=Kt();Gn(a,r,i,c)}Gd(r,i)}},nu=function(){return Ne},ru=function(r,i){var a=Ne;try{return Ne=r,i()}finally{Ne=a}},Ki=function(r,i,a){switch(i){case"input":if(pa(r,a),i=a.name,a.type==="radio"&&i!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==r&&c.form===r.form){var d=Eu(c);if(!d)throw Error(t(90));zi(c),pa(c,d)}}}break;case"textarea":Hi(r,a);break;case"select":i=a.value,i!=null&&Sr(r,!!a.multiple,i,!1)}},ni=Fd,Sa=Ti;var IT={usingClientEntryPoint:!1,Events:[Ha,wo,Eu,Zn,Ia,Fd]},ol={findFiberByHostInstance:pi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ST={bundleType:ol.bundleType,version:ol.version,rendererPackageName:ol.rendererPackageName,rendererConfig:ol.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ka(r),r===null?null:r.stateNode},findFiberByHostInstance:ol.findFiberByHostInstance||ET,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{ai=ic.inject(ST),cn=ic}catch{}}return on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IT,on.createPortal=function(r,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qd(i))throw Error(t(200));return wT(r,i,null,a)},on.createRoot=function(r,i){if(!Qd(r))throw Error(t(299));var a=!1,c="",d=hy;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Hd(r,1,!1,null,null,a,!1,c,d),r[br]=i.current,$a(r.nodeType===8?r.parentNode:r),new Kd(i)},on.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ka(i),r=r===null?null:r.stateNode,r},on.flushSync=function(r){return Ti(r)},on.hydrate=function(r,i,a){if(!rc(i))throw Error(t(200));return sc(null,r,i,!0,a)},on.hydrateRoot=function(r,i,a){if(!Qd(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",w=hy;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=uy(i,null,r,1,a??null,d,!1,g,w),r[br]=i.current,$a(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new nc(i)},on.render=function(r,i,a){if(!rc(i))throw Error(t(200));return sc(null,r,i,!1,a)},on.unmountComponentAtNode=function(r){if(!rc(r))throw Error(t(40));return r._reactRootContainer?(Ti(function(){sc(null,null,r,!1,function(){r._reactRootContainer=null,r[br]=null})}),!0):!1},on.unstable_batchedUpdates=Fd,on.unstable_renderSubtreeIntoContainer=function(r,i,a,c){if(!rc(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return sc(r,i,a,!1,c)},on.version="18.3.1-next-f1338f8080-20240426",on}var wy;function dv(){if(wy)return Jd.exports;wy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Jd.exports=DT(),Jd.exports}var Ey;function OT(){if(Ey)return oc;Ey=1;var n=dv();return oc.createRoot=n.createRoot,oc.hydrateRoot=n.hydrateRoot,oc}var VT=OT();const LT=cv(VT);dv();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tl(){return Tl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},Tl.apply(this,arguments)}var Ds;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Ds||(Ds={}));const Ty="popstate";function MT(n){n===void 0&&(n={});function e(s,o){let{pathname:l,search:h,hash:f}=s.location;return vf("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:Ac(o)}return jT(e,t,null,n)}function tt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function fv(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function UT(){return Math.random().toString(36).substr(2,8)}function Iy(n,e){return{usr:n.state,key:n.key,idx:e}}function vf(n,e,t,s){return t===void 0&&(t=null),Tl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?ta(e):e,{state:t,key:e&&e.key||s||UT()})}function Ac(n){let{pathname:e="/",search:t="",hash:s=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function ta(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let s=n.indexOf("?");s>=0&&(e.search=n.substr(s),n=n.substr(0,s)),n&&(e.pathname=n)}return e}function jT(n,e,t,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:l=!1}=s,h=o.history,f=Ds.Pop,p=null,y=v();y==null&&(y=0,h.replaceState(Tl({},h.state,{idx:y}),""));function v(){return(h.state||{idx:null}).idx}function E(){f=Ds.Pop;let O=v(),ee=O==null?null:O-y;y=O,p&&p({action:f,location:W.location,delta:ee})}function S(O,ee){f=Ds.Push;let Z=vf(W.location,O,ee);y=v()+1;let Q=Iy(Z,y),re=W.createHref(Z);try{h.pushState(Q,"",re)}catch(Se){if(Se instanceof DOMException&&Se.name==="DataCloneError")throw Se;o.location.assign(re)}l&&p&&p({action:f,location:W.location,delta:1})}function U(O,ee){f=Ds.Replace;let Z=vf(W.location,O,ee);y=v();let Q=Iy(Z,y),re=W.createHref(Z);h.replaceState(Q,"",re),l&&p&&p({action:f,location:W.location,delta:0})}function B(O){let ee=o.location.origin!=="null"?o.location.origin:o.location.href,Z=typeof O=="string"?O:Ac(O);return Z=Z.replace(/ $/,"%20"),tt(ee,"No window.location.(origin|href) available to create URL for href: "+Z),new URL(Z,ee)}let W={get action(){return f},get location(){return n(o,h)},listen(O){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Ty,E),p=O,()=>{o.removeEventListener(Ty,E),p=null}},createHref(O){return e(o,O)},createURL:B,encodeLocation(O){let ee=B(O);return{pathname:ee.pathname,search:ee.search,hash:ee.hash}},push:S,replace:U,go(O){return h.go(O)}};return W}var Sy;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Sy||(Sy={}));function FT(n,e,t){return t===void 0&&(t="/"),BT(n,e,t)}function BT(n,e,t,s){let o=typeof e=="string"?ta(e):e,l=Wo(o.pathname||"/",t);if(l==null)return null;let h=pv(n);zT(h);let f=null;for(let p=0;f==null&&p<h.length;++p){let y=ZT(l);f=XT(h[p],y)}return f}function pv(n,e,t,s){e===void 0&&(e=[]),t===void 0&&(t=[]),s===void 0&&(s="");let o=(l,h,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};p.relativePath.startsWith("/")&&(tt(p.relativePath.startsWith(s),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(s.length));let y=Vs([s,p.relativePath]),v=t.concat(p);l.children&&l.children.length>0&&(tt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),pv(l.children,e,v,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:QT(y,l.index),routesMeta:v})};return n.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let p of mv(l.path))o(l,h,p)}),e}function mv(n){let e=n.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let h=mv(s.join("/")),f=[];return f.push(...h.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...h),f.map(p=>n.startsWith("/")&&p===""?"/":p)}function zT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:YT(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const $T=/^:[\w-]+$/,qT=3,WT=2,HT=1,GT=10,KT=-2,Ry=n=>n==="*";function QT(n,e){let t=n.split("/"),s=t.length;return t.some(Ry)&&(s+=KT),e&&(s+=WT),t.filter(o=>!Ry(o)).reduce((o,l)=>o+($T.test(l)?qT:l===""?HT:GT),s)}function YT(n,e){return n.length===e.length&&n.slice(0,-1).every((s,o)=>s===e[o])?n[n.length-1]-e[e.length-1]:0}function XT(n,e,t){let{routesMeta:s}=n,o={},l="/",h=[];for(let f=0;f<s.length;++f){let p=s[f],y=f===s.length-1,v=l==="/"?e:e.slice(l.length)||"/",E=wf({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},v),S=p.route;if(!E)return null;Object.assign(o,E.params),h.push({params:o,pathname:Vs([l,E.pathname]),pathnameBase:rI(Vs([l,E.pathnameBase])),route:S}),E.pathnameBase!=="/"&&(l=Vs([l,E.pathnameBase]))}return h}function wf(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,s]=JT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((y,v,E)=>{let{paramName:S,isOptional:U}=v;if(S==="*"){let W=f[E]||"";h=l.slice(0,l.length-W.length).replace(/(.)\/+$/,"$1")}const B=f[E];return U&&!B?y[S]=void 0:y[S]=(B||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:n}}function JT(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),fv(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let s=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,p)=>(s.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function ZT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return fv(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Wo(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=n.charAt(t);return s&&s!=="/"?null:n.slice(t)||"/"}function eI(n,e){e===void 0&&(e="/");let{pathname:t,search:s="",hash:o=""}=typeof n=="string"?ta(n):n;return{pathname:t?t.startsWith("/")?t:tI(t,e):e,search:sI(s),hash:iI(o)}}function tI(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function tf(n,e,t,s){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function nI(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Jf(n,e){let t=nI(n);return e?t.map((s,o)=>o===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function Zf(n,e,t,s){s===void 0&&(s=!1);let o;typeof n=="string"?o=ta(n):(o=Tl({},n),tt(!o.pathname||!o.pathname.includes("?"),tf("?","pathname","search",o)),tt(!o.pathname||!o.pathname.includes("#"),tf("#","pathname","hash",o)),tt(!o.search||!o.search.includes("#"),tf("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let E=e.length-1;if(!s&&h.startsWith("..")){let S=h.split("/");for(;S[0]==="..";)S.shift(),E-=1;o.pathname=S.join("/")}f=E>=0?e[E]:"/"}let p=eI(o,f),y=h&&h!=="/"&&h.endsWith("/"),v=(l||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||v)&&(p.pathname+="/"),p}const Vs=n=>n.join("/").replace(/\/\/+/g,"/"),rI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),sI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,iI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function oI(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const gv=["post","put","patch","delete"];new Set(gv);const aI=["get",...gv];new Set(aI);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Il(){return Il=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},Il.apply(this,arguments)}const Kc=$.createContext(null),yv=$.createContext(null),Yr=$.createContext(null),Qc=$.createContext(null),Xr=$.createContext({outlet:null,matches:[],isDataRoute:!1}),_v=$.createContext(null);function lI(n,e){let{relative:t}=e===void 0?{}:e;na()||tt(!1);let{basename:s,navigator:o}=$.useContext(Yr),{hash:l,pathname:h,search:f}=Yc(n,{relative:t}),p=h;return s!=="/"&&(p=h==="/"?s:Vs([s,h])),o.createHref({pathname:p,search:f,hash:l})}function na(){return $.useContext(Qc)!=null}function ra(){return na()||tt(!1),$.useContext(Qc).location}function vv(n){$.useContext(Yr).static||$.useLayoutEffect(n)}function sa(){let{isDataRoute:n}=$.useContext(Xr);return n?TI():uI()}function uI(){na()||tt(!1);let n=$.useContext(Kc),{basename:e,future:t,navigator:s}=$.useContext(Yr),{matches:o}=$.useContext(Xr),{pathname:l}=ra(),h=JSON.stringify(Jf(o,t.v7_relativeSplatPath)),f=$.useRef(!1);return vv(()=>{f.current=!0}),$.useCallback(function(y,v){if(v===void 0&&(v={}),!f.current)return;if(typeof y=="number"){s.go(y);return}let E=Zf(y,JSON.parse(h),l,v.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Vs([e,E.pathname])),(v.replace?s.replace:s.push)(E,v.state,v)},[e,s,h,l,n])}function cI(){let{matches:n}=$.useContext(Xr),e=n[n.length-1];return e?e.params:{}}function Yc(n,e){let{relative:t}=e===void 0?{}:e,{future:s}=$.useContext(Yr),{matches:o}=$.useContext(Xr),{pathname:l}=ra(),h=JSON.stringify(Jf(o,s.v7_relativeSplatPath));return $.useMemo(()=>Zf(n,JSON.parse(h),l,t==="path"),[n,h,l,t])}function hI(n,e){return dI(n,e)}function dI(n,e,t,s){na()||tt(!1);let{navigator:o}=$.useContext(Yr),{matches:l}=$.useContext(Xr),h=l[l.length-1],f=h?h.params:{};h&&h.pathname;let p=h?h.pathnameBase:"/";h&&h.route;let y=ra(),v;if(e){var E;let O=typeof e=="string"?ta(e):e;p==="/"||(E=O.pathname)!=null&&E.startsWith(p)||tt(!1),v=O}else v=y;let S=v.pathname||"/",U=S;if(p!=="/"){let O=p.replace(/^\//,"").split("/");U="/"+S.replace(/^\//,"").split("/").slice(O.length).join("/")}let B=FT(n,{pathname:U}),W=yI(B&&B.map(O=>Object.assign({},O,{params:Object.assign({},f,O.params),pathname:Vs([p,o.encodeLocation?o.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?p:Vs([p,o.encodeLocation?o.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),l,t,s);return e&&W?$.createElement(Qc.Provider,{value:{location:Il({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:Ds.Pop}},W):W}function fI(){let n=EI(),e=oI(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),t?$.createElement("pre",{style:o},t):null,null)}const pI=$.createElement(fI,null);class mI extends $.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?$.createElement(Xr.Provider,{value:this.props.routeContext},$.createElement(_v.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gI(n){let{routeContext:e,match:t,children:s}=n,o=$.useContext(Kc);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),$.createElement(Xr.Provider,{value:e},s)}function yI(n,e,t,s){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),s===void 0&&(s=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=s)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let h=n,f=(o=t)==null?void 0:o.errors;if(f!=null){let v=h.findIndex(E=>E.route.id&&f?.[E.route.id]!==void 0);v>=0||tt(!1),h=h.slice(0,Math.min(h.length,v+1))}let p=!1,y=-1;if(t&&s&&s.v7_partialHydration)for(let v=0;v<h.length;v++){let E=h[v];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(y=v),E.route.id){let{loaderData:S,errors:U}=t,B=E.route.loader&&S[E.route.id]===void 0&&(!U||U[E.route.id]===void 0);if(E.route.lazy||B){p=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}return h.reduceRight((v,E,S)=>{let U,B=!1,W=null,O=null;t&&(U=f&&E.route.id?f[E.route.id]:void 0,W=E.route.errorElement||pI,p&&(y<0&&S===0?(II("route-fallback"),B=!0,O=null):y===S&&(B=!0,O=E.route.hydrateFallbackElement||null)));let ee=e.concat(h.slice(0,S+1)),Z=()=>{let Q;return U?Q=W:B?Q=O:E.route.Component?Q=$.createElement(E.route.Component,null):E.route.element?Q=E.route.element:Q=v,$.createElement(gI,{match:E,routeContext:{outlet:v,matches:ee,isDataRoute:t!=null},children:Q})};return t&&(E.route.ErrorBoundary||E.route.errorElement||S===0)?$.createElement(mI,{location:t.location,revalidation:t.revalidation,component:W,error:U,children:Z(),routeContext:{outlet:null,matches:ee,isDataRoute:!0}}):Z()},null)}var wv=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(wv||{}),Ev=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(Ev||{});function _I(n){let e=$.useContext(Kc);return e||tt(!1),e}function vI(n){let e=$.useContext(yv);return e||tt(!1),e}function wI(n){let e=$.useContext(Xr);return e||tt(!1),e}function Tv(n){let e=wI(),t=e.matches[e.matches.length-1];return t.route.id||tt(!1),t.route.id}function EI(){var n;let e=$.useContext(_v),t=vI(),s=Tv();return e!==void 0?e:(n=t.errors)==null?void 0:n[s]}function TI(){let{router:n}=_I(wv.UseNavigateStable),e=Tv(Ev.UseNavigateStable),t=$.useRef(!1);return vv(()=>{t.current=!0}),$.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,Il({fromRouteId:e},l)))},[n,e])}const Ay={};function II(n,e,t){Ay[n]||(Ay[n]=!0)}function SI(n,e){n?.v7_startTransition,n?.v7_relativeSplatPath}function RI(n){let{to:e,replace:t,state:s,relative:o}=n;na()||tt(!1);let{future:l,static:h}=$.useContext(Yr),{matches:f}=$.useContext(Xr),{pathname:p}=ra(),y=sa(),v=Zf(e,Jf(f,l.v7_relativeSplatPath),p,o==="path"),E=JSON.stringify(v);return $.useEffect(()=>y(JSON.parse(E),{replace:t,state:s,relative:o}),[y,E,o,t,s]),null}function Fr(n){tt(!1)}function AI(n){let{basename:e="/",children:t=null,location:s,navigationType:o=Ds.Pop,navigator:l,static:h=!1,future:f}=n;na()&&tt(!1);let p=e.replace(/^\/*/,"/"),y=$.useMemo(()=>({basename:p,navigator:l,static:h,future:Il({v7_relativeSplatPath:!1},f)}),[p,f,l,h]);typeof s=="string"&&(s=ta(s));let{pathname:v="/",search:E="",hash:S="",state:U=null,key:B="default"}=s,W=$.useMemo(()=>{let O=Wo(v,p);return O==null?null:{location:{pathname:O,search:E,hash:S,state:U,key:B},navigationType:o}},[p,v,E,S,U,B,o]);return W==null?null:$.createElement(Yr.Provider,{value:y},$.createElement(Qc.Provider,{children:t,value:W}))}function kI(n){let{children:e,location:t}=n;return hI(Ef(e),t)}new Promise(()=>{});function Ef(n,e){e===void 0&&(e=[]);let t=[];return $.Children.forEach(n,(s,o)=>{if(!$.isValidElement(s))return;let l=[...e,o];if(s.type===$.Fragment){t.push.apply(t,Ef(s.props.children,l));return}s.type!==Fr&&tt(!1),!s.props.index||!s.props.children||tt(!1);let h={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Ef(s.props.children,l)),t.push(h)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kc(){return kc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},kc.apply(this,arguments)}function Iv(n,e){if(n==null)return{};var t={},s=Object.keys(n),o,l;for(l=0;l<s.length;l++)o=s[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function CI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function xI(n,e){return n.button===0&&(!e||e==="_self")&&!CI(n)}const PI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],NI=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],bI="6";try{window.__reactRouterVersion=bI}catch{}const DI=$.createContext({isTransitioning:!1}),OI="startTransition",ky=PT[OI];function Sv(n){let{basename:e,children:t,future:s,window:o}=n,l=$.useRef();l.current==null&&(l.current=MT({window:o,v5Compat:!0}));let h=l.current,[f,p]=$.useState({action:h.action,location:h.location}),{v7_startTransition:y}=s||{},v=$.useCallback(E=>{y&&ky?ky(()=>p(E)):p(E)},[p,y]);return $.useLayoutEffect(()=>h.listen(v),[h,v]),$.useEffect(()=>SI(s),[s]),$.createElement(AI,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:h,future:s})}const VI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",LI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dl=$.forwardRef(function(e,t){let{onClick:s,relative:o,reloadDocument:l,replace:h,state:f,target:p,to:y,preventScrollReset:v,viewTransition:E}=e,S=Iv(e,PI),{basename:U}=$.useContext(Yr),B,W=!1;if(typeof y=="string"&&LI.test(y)&&(B=y,VI))try{let Q=new URL(window.location.href),re=y.startsWith("//")?new URL(Q.protocol+y):new URL(y),Se=Wo(re.pathname,U);re.origin===Q.origin&&Se!=null?y=Se+re.search+re.hash:W=!0}catch{}let O=lI(y,{relative:o}),ee=UI(y,{replace:h,state:f,target:p,preventScrollReset:v,relative:o,viewTransition:E});function Z(Q){s&&s(Q),Q.defaultPrevented||ee(Q)}return $.createElement("a",kc({},S,{href:B||O,onClick:W||l?s:Z,ref:t,target:p}))}),Ai=$.forwardRef(function(e,t){let{"aria-current":s="page",caseSensitive:o=!1,className:l="",end:h=!1,style:f,to:p,viewTransition:y,children:v}=e,E=Iv(e,NI),S=Yc(p,{relative:E.relative}),U=ra(),B=$.useContext(yv),{navigator:W,basename:O}=$.useContext(Yr),ee=B!=null&&jI(S)&&y===!0,Z=W.encodeLocation?W.encodeLocation(S).pathname:S.pathname,Q=U.pathname,re=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;o||(Q=Q.toLowerCase(),re=re?re.toLowerCase():null,Z=Z.toLowerCase()),re&&O&&(re=Wo(re,O)||re);const Se=Z!=="/"&&Z.endsWith("/")?Z.length-1:Z.length;let ae=Q===Z||!h&&Q.startsWith(Z)&&Q.charAt(Se)==="/",P=re!=null&&(re===Z||!h&&re.startsWith(Z)&&re.charAt(Z.length)==="/"),R={isActive:ae,isPending:P,isTransitioning:ee},C=ae?s:void 0,N;typeof l=="function"?N=l(R):N=[l,ae?"active":null,P?"pending":null,ee?"transitioning":null].filter(Boolean).join(" ");let D=typeof f=="function"?f(R):f;return $.createElement(Dl,kc({},E,{"aria-current":C,className:N,ref:t,style:D,to:p,viewTransition:y}),typeof v=="function"?v(R):v)});var Tf;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Tf||(Tf={}));var Cy;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Cy||(Cy={}));function MI(n){let e=$.useContext(Kc);return e||tt(!1),e}function UI(n,e){let{target:t,replace:s,state:o,preventScrollReset:l,relative:h,viewTransition:f}=e===void 0?{}:e,p=sa(),y=ra(),v=Yc(n,{relative:h});return $.useCallback(E=>{if(xI(E,t)){E.preventDefault();let S=s!==void 0?s:Ac(y)===Ac(v);p(n,{replace:S,state:o,preventScrollReset:l,relative:h,viewTransition:f})}},[y,p,v,s,o,t,n,l,h,f])}function jI(n,e){e===void 0&&(e={});let t=$.useContext(DI);t==null&&tt(!1);let{basename:s}=MI(Tf.useViewTransitionState),o=Yc(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Wo(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=Wo(t.nextLocation.pathname,s)||t.nextLocation.pathname;return wf(o.pathname,h)!=null||wf(o.pathname,l)!=null}const FI=()=>{};var xy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},BI=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const o=n[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],f=n[t++],p=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],h=n[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},Av={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,f=h?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,v=l>>2,E=(l&3)<<4|f>>4;let S=(f&15)<<2|y>>6,U=y&63;p||(U=64,h||(S=64)),s.push(t[v],t[E],t[S],t[U])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Rv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):BI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const E=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||E==null)throw new zI;const S=l<<2|f>>4;if(s.push(S),y!==64){const U=f<<4&240|y>>2;if(s.push(U),E!==64){const B=y<<6&192|E;s.push(B)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class zI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $I=function(n){const e=Rv(n);return Av.encodeByteArray(e,!0)},Cc=function(n){return $I(n).replace(/\./g,"")},kv=function(n){try{return Av.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=()=>qI().__FIREBASE_DEFAULTS__,HI=()=>{if(typeof process>"u"||typeof xy>"u")return;const n=xy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},GI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&kv(n[1]);return e&&JSON.parse(e)},Xc=()=>{try{return FI()||WI()||HI()||GI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Cv=n=>Xc()?.emulatorHosts?.[n],xv=n=>{const e=Cv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Pv=()=>Xc()?.config,Nv=n=>Xc()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ep(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Cc(JSON.stringify(t)),Cc(JSON.stringify(h)),""].join(".")}const ml={};function QI(){const n={prod:[],emulator:[]};for(const e of Object.keys(ml))ml[e]?n.emulator.push(e):n.prod.push(e);return n}function YI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Py=!1;function tp(n,e){if(typeof window>"u"||typeof document>"u"||!Ks(window.location.host)||ml[n]===e||ml[n]||Py)return;ml[n]=e;function t(S){return`__firebase__banner__${S}`}const s="__firebase__banner",l=QI().prod.length>0;function h(){const S=document.getElementById(s);S&&S.remove()}function f(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,U){S.setAttribute("width","24"),S.setAttribute("id",U),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function y(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Py=!0,h()},S}function v(S,U){S.setAttribute("id",U),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function E(){const S=YI(s),U=t("text"),B=document.getElementById(U)||document.createElement("span"),W=t("learnmore"),O=document.getElementById(W)||document.createElement("a"),ee=t("preprendIcon"),Z=document.getElementById(ee)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const Q=S.element;f(Q),v(O,W);const re=y();p(Z,ee),Q.append(Z,B,O,re),document.body.appendChild(Q)}l?(B.innerText="Preview backend disconnected.",Z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,B.innerText="Preview backend running in this workspace."),B.setAttribute("id",U)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function JI(){const n=Xc()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ZI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function tS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nS(){const n=qt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function rS(){return!JI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sS(){try{return typeof indexedDB=="object"}catch{return!1}}function iS(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS="FirebaseError";class wr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=oS,Object.setPrototypeOf(this,wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ol.prototype.create)}}class Ol{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?aS(l,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new wr(o,f,s)}}function aS(n,e){return n.replace(lS,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const lS=/\{\$([^}]+)}/g;function uS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function qr(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=n[o],h=e[o];if(Ny(l)&&Ny(h)){if(!qr(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Ny(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ul(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function cl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function cS(n,e){const t=new hS(n,e);return t.subscribe.bind(t)}class hS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");dS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=nf),o.error===void 0&&(o.error=nf),o.complete===void 0&&(o.complete=nf);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function nf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n){return n&&n._delegate?n._delegate:n}class Fs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new KI;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mS(e))try{this.getOrInitializeService({instanceIdentifier:ki})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=ki){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ki){return this.instances.has(e)}getOptions(e=ki){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&e(l,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pS(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ki){return this.component?this.component.multipleInstances?e:ki:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pS(n){return n===ki?void 0:n}function mS(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ce||(Ce={}));const yS={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},_S=Ce.INFO,vS={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},wS=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),o=vS[e];if(o)console[o](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class np{constructor(e){this.name=e,this._logLevel=_S,this._logHandler=wS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const ES=(n,e)=>e.some(t=>n instanceof t);let by,Dy;function TS(){return by||(by=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function IS(){return Dy||(Dy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dv=new WeakMap,If=new WeakMap,Ov=new WeakMap,rf=new WeakMap,rp=new WeakMap;function SS(n){const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(Ls(n.result)),o()},h=()=>{s(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Dv.set(t,n)}).catch(()=>{}),rp.set(e,n),e}function RS(n){if(If.has(n))return;const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});If.set(n,e)}let Sf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return If.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ov.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ls(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function AS(n){Sf=n(Sf)}function kS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(sf(this),e,...t);return Ov.set(s,e.sort?e.sort():[e]),Ls(s)}:IS().includes(n)?function(...e){return n.apply(sf(this),e),Ls(Dv.get(this))}:function(...e){return Ls(n.apply(sf(this),e))}}function CS(n){return typeof n=="function"?kS(n):(n instanceof IDBTransaction&&RS(n),ES(n,TS())?new Proxy(n,Sf):n)}function Ls(n){if(n instanceof IDBRequest)return SS(n);if(rf.has(n))return rf.get(n);const e=CS(n);return e!==n&&(rf.set(n,e),rp.set(e,n)),e}const sf=n=>rp.get(n);function xS(n,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),f=Ls(h);return s&&h.addEventListener("upgradeneeded",p=>{s(Ls(h.result),p.oldVersion,p.newVersion,Ls(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const PS=["get","getKey","getAll","getAllKeys","count"],NS=["put","add","delete","clear"],of=new Map;function Oy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(of.get(e))return of.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=NS.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||PS.includes(t)))return;const l=async function(h,...f){const p=this.transaction(h,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&p.done]))[0]};return of.set(e,l),l}AS(n=>({...n,get:(e,t,s)=>Oy(e,t)||n.get(e,t,s),has:(e,t)=>!!Oy(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(DS(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function DS(n){return n.getComponent()?.type==="VERSION"}const Rf="@firebase/app",Vy="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new np("@firebase/app"),OS="@firebase/app-compat",VS="@firebase/analytics-compat",LS="@firebase/analytics",MS="@firebase/app-check-compat",US="@firebase/app-check",jS="@firebase/auth",FS="@firebase/auth-compat",BS="@firebase/database",zS="@firebase/data-connect",$S="@firebase/database-compat",qS="@firebase/functions",WS="@firebase/functions-compat",HS="@firebase/installations",GS="@firebase/installations-compat",KS="@firebase/messaging",QS="@firebase/messaging-compat",YS="@firebase/performance",XS="@firebase/performance-compat",JS="@firebase/remote-config",ZS="@firebase/remote-config-compat",eR="@firebase/storage",tR="@firebase/storage-compat",nR="@firebase/firestore",rR="@firebase/ai",sR="@firebase/firestore-compat",iR="firebase",oR="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="[DEFAULT]",aR={[Rf]:"fire-core",[OS]:"fire-core-compat",[LS]:"fire-analytics",[VS]:"fire-analytics-compat",[US]:"fire-app-check",[MS]:"fire-app-check-compat",[jS]:"fire-auth",[FS]:"fire-auth-compat",[BS]:"fire-rtdb",[zS]:"fire-data-connect",[$S]:"fire-rtdb-compat",[qS]:"fire-fn",[WS]:"fire-fn-compat",[HS]:"fire-iid",[GS]:"fire-iid-compat",[KS]:"fire-fcm",[QS]:"fire-fcm-compat",[YS]:"fire-perf",[XS]:"fire-perf-compat",[JS]:"fire-rc",[ZS]:"fire-rc-compat",[eR]:"fire-gcs",[tR]:"fire-gcs-compat",[nR]:"fire-fst",[sR]:"fire-fst-compat",[rR]:"fire-vertex","fire-js":"fire-js",[iR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=new Map,lR=new Map,kf=new Map;function Ly(n,e){try{n.container.addComponent(e)}catch(t){Wr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function bi(n){const e=n.name;if(kf.has(e))return Wr.debug(`There were multiple attempts to register component ${e}.`),!1;kf.set(e,n);for(const t of xc.values())Ly(t,n);for(const t of lR.values())Ly(t,n);return!0}function Jc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Yt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ms=new Ol("app","Firebase",uR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ms.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=oR;function Vv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Af,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Ms.create("bad-app-name",{appName:String(o)});if(t||(t=Pv()),!t)throw Ms.create("no-options");const l=xc.get(o);if(l){if(qr(t,l.options)&&qr(s,l.config))return l;throw Ms.create("duplicate-app",{appName:o})}const h=new gS(o);for(const p of kf.values())h.addComponent(p);const f=new cR(t,s,h);return xc.set(o,f),f}function sp(n=Af){const e=xc.get(n);if(!e&&n===Af&&Pv())return Vv();if(!e)throw Ms.create("no-app",{appName:n});return e}function hr(n,e,t){let s=aR[n]??n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wr.warn(h.join(" "));return}bi(new Fs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR="firebase-heartbeat-database",dR=1,Sl="firebase-heartbeat-store";let af=null;function Lv(){return af||(af=xS(hR,dR,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Sl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ms.create("idb-open",{originalErrorMessage:n.message})})),af}async function fR(n){try{const t=(await Lv()).transaction(Sl),s=await t.objectStore(Sl).get(Mv(n));return await t.done,s}catch(e){if(e instanceof wr)Wr.warn(e.message);else{const t=Ms.create("idb-get",{originalErrorMessage:e?.message});Wr.warn(t.message)}}}async function My(n,e){try{const s=(await Lv()).transaction(Sl,"readwrite");await s.objectStore(Sl).put(e,Mv(n)),await s.done}catch(t){if(t instanceof wr)Wr.warn(t.message);else{const s=Ms.create("idb-set",{originalErrorMessage:t?.message});Wr.warn(s.message)}}}function Mv(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=1024,mR=30;class gR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _R(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Uy();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>mR){const o=vR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Wr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Uy(),{heartbeatsToSend:t,unsentEntries:s}=yR(this._heartbeatsCache.heartbeats),o=Cc(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Wr.warn(e),""}}}function Uy(){return new Date().toISOString().substring(0,10)}function yR(n,e=pR){const t=[];let s=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),jy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),jy(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class _R{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sS()?iS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await fR(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return My(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return My(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function jy(n){return Cc(JSON.stringify({version:2,heartbeats:n})).length}function vR(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(n){bi(new Fs("platform-logger",e=>new bS(e),"PRIVATE")),bi(new Fs("heartbeat",e=>new gR(e),"PRIVATE")),hr(Rf,Vy,n),hr(Rf,Vy,"esm2020"),hr("fire-js","")}wR("");var ER="firebase",TR="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hr(ER,TR,"app");function Uv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IR=Uv,jv=new Ol("auth","Firebase",Uv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=new np("@firebase/auth");function SR(n,...e){Pc.logLevel<=Ce.WARN&&Pc.warn(`Auth (${Ui}): ${n}`,...e)}function gc(n,...e){Pc.logLevel<=Ce.ERROR&&Pc.error(`Auth (${Ui}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(n,...e){throw ip(n,...e)}function dr(n,...e){return ip(n,...e)}function Fv(n,e,t){const s={...IR(),[e]:t};return new Ol("auth","Firebase",s).create(e,{appName:n.name})}function Qn(n){return Fv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ip(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return jv.create(n,...e)}function ve(n,e,...t){if(!n)throw ip(e,...t)}function Br(n){const e="INTERNAL ASSERTION FAILED: "+n;throw gc(e),new Error(e)}function Hr(n,e){n||Br(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(){return typeof self<"u"&&self.location?.href||""}function RR(){return Fy()==="http:"||Fy()==="https:"}function Fy(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RR()||eS()||"connection"in navigator)?navigator.onLine:!0}function kR(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,t){this.shortDelay=e,this.longDelay=t,Hr(t>e,"Short delay should be less than long delay!"),this.isMobile=XI()||tS()}get(){return AR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(n,e){Hr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],PR=new Ll(3e4,6e4);function Jr(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Zr(n,e,t,s,o={}){return zv(n,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const f=Vl({key:n.config.apiKey,...h}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y={method:e,headers:p,...l};return ZI()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&Ks(n.emulatorConfig.host)&&(y.credentials="include"),Bv.fetch()(await $v(n,n.config.apiHost,t,f),y)})}async function zv(n,e,t){n._canInitEmulator=!1;const s={...CR,...e};try{const o=new bR(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw ac(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[p,y]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw ac(n,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw ac(n,"email-already-in-use",h);if(p==="USER_DISABLED")throw ac(n,"user-disabled",h);const v=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Fv(n,v,y);Yn(n,v)}}catch(o){if(o instanceof wr)throw o;Yn(n,"network-request-failed",{message:String(o)})}}async function ia(n,e,t,s,o={}){const l=await Zr(n,e,t,s,o);return"mfaPendingCredential"in l&&Yn(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function $v(n,e,t,s){const o=`${e}${t}?${s}`,l=n,h=l.config.emulator?op(n.config,o):`${n.config.apiScheme}://${o}`;return xR.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function NR(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(dr(this.auth,"network-request-failed")),PR.get())})}}function ac(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=dr(n,e,s);return o.customData._tokenResponse=t,o}function By(n){return n!==void 0&&n.enterprise!==void 0}class DR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return NR(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function OR(n,e){return Zr(n,"GET","/v2/recaptchaConfig",Jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VR(n,e){return Zr(n,"POST","/v1/accounts:delete",e)}async function Nc(n,e){return Zr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LR(n,e=!1){const t=Je(n),s=await t.getIdToken(e),o=ap(s);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l?.sign_in_provider;return{claims:o,token:s,authTime:gl(lf(o.auth_time)),issuedAtTime:gl(lf(o.iat)),expirationTime:gl(lf(o.exp)),signInProvider:h||null,signInSecondFactor:l?.sign_in_second_factor||null}}function lf(n){return Number(n)*1e3}function ap(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return gc("JWT malformed, contained fewer than 3 sections"),null;try{const o=kv(t);return o?JSON.parse(o):(gc("Failed to decode base64 JWT payload"),null)}catch(o){return gc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function zy(n){const e=ap(n);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof wr&&MR(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function MR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gl(this.lastLoginAt),this.creationTime=gl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bc(n){const e=n.auth,t=await n.getIdToken(),s=await Ho(n,Nc(e,{idToken:t}));ve(s?.users.length,e,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const l=o.providerUserInfo?.length?qv(o.providerUserInfo):[],h=FR(n.providerData,l),f=n.isAnonymous,p=!(n.email&&o.passwordHash)&&!h?.length,y=f?p:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new xf(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,v)}async function jR(n){const e=Je(n);await bc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FR(n,e){return[...n.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function qv(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BR(n,e){const t=await zv(n,{},async()=>{const s=Vl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=await $v(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:s};return n.emulatorConfig&&Ks(n.emulatorConfig.host)&&(p.credentials="include"),Bv.fetch()(h,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zR(n,e){return Zr(n,"POST","/v2/accounts:revokeToken",Jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=zy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await BR(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new Fo;return s&&(ve(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ve(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fo,this.toJSON())}_performRefresh(){return Br("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(n,e){ve(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Kn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new UR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new xf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Ho(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return LR(this,e)}reload(){return jR(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Kn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await bc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yt(this.auth.app))return Promise.reject(Qn(this.auth));const e=await this.getIdToken();return await Ho(this,VR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,f=t.tenantId??void 0,p=t._redirectEventId??void 0,y=t.createdAt??void 0,v=t.lastLoginAt??void 0,{uid:E,emailVerified:S,isAnonymous:U,providerData:B,stsTokenManager:W}=t;ve(E&&W,e,"internal-error");const O=Fo.fromJSON(this.name,W);ve(typeof E=="string",e,"internal-error"),ks(s,e.name),ks(o,e.name),ve(typeof S=="boolean",e,"internal-error"),ve(typeof U=="boolean",e,"internal-error"),ks(l,e.name),ks(h,e.name),ks(f,e.name),ks(p,e.name),ks(y,e.name),ks(v,e.name);const ee=new Kn({uid:E,auth:e,email:o,emailVerified:S,displayName:s,isAnonymous:U,photoURL:h,phoneNumber:l,tenantId:f,stsTokenManager:O,createdAt:y,lastLoginAt:v});return B&&Array.isArray(B)&&(ee.providerData=B.map(Z=>({...Z}))),p&&(ee._redirectEventId=p),ee}static async _fromIdTokenResponse(e,t,s=!1){const o=new Fo;o.updateFromServerResponse(t);const l=new Kn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await bc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?qv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!l?.length,f=new Fo;f.updateFromIdToken(s);const p=new Kn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new xf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=new Map;function zr(n){Hr(n instanceof Function,"Expected a class definition");let e=$y.get(n);return e?(Hr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,$y.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Wv.type="NONE";const qy=Wv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(n,e,t){return`firebase:${n}:${e}:${t}`}class Bo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=yc(this.userKey,o.apiKey,l),this.fullPersistenceKey=yc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Nc(this.auth,{idToken:e}).catch(()=>{});return t?Kn._fromGetAccountInfoResponse(this.auth,t,e):null}return Kn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Bo(zr(qy),e,s);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||zr(qy);const h=yc(s,e.config.apiKey,e.name);let f=null;for(const y of t)try{const v=await y._get(h);if(v){let E;if(typeof v=="string"){const S=await Nc(e,{idToken:v}).catch(()=>{});if(!S)break;E=await Kn._fromGetAccountInfoResponse(e,S,v)}else E=Kn._fromJSON(e,v);y!==l&&(f=E),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Bo(l,e,s):(l=p[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new Bo(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xv(e))return"Blackberry";if(Jv(e))return"Webos";if(Gv(e))return"Safari";if((e.includes("chrome/")||Kv(e))&&!e.includes("edge/"))return"Chrome";if(Yv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function Hv(n=qt()){return/firefox\//i.test(n)}function Gv(n=qt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kv(n=qt()){return/crios\//i.test(n)}function Qv(n=qt()){return/iemobile/i.test(n)}function Yv(n=qt()){return/android/i.test(n)}function Xv(n=qt()){return/blackberry/i.test(n)}function Jv(n=qt()){return/webos/i.test(n)}function lp(n=qt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function $R(n=qt()){return lp(n)&&!!window.navigator?.standalone}function qR(){return nS()&&document.documentMode===10}function Zv(n=qt()){return lp(n)||Yv(n)||Jv(n)||Xv(n)||/windows phone/i.test(n)||Qv(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(n,e=[]){let t;switch(n){case"Browser":t=Wy(qt());break;case"Worker":t=`${Wy(qt())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ui}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,f)=>{try{const p=e(l);h(p)}catch(p){f(p)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HR(n,e={}){return Zr(n,"GET","/v2/passwordPolicy",Jr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR=6;class KR{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??GR,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hy(this),this.idTokenSubscription=new Hy(this),this.beforeStateQueue=new WR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=zr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Bo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Nc(this,{idToken:e}),s=await Kn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Yt(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,h=s?._redirectEventId,f=await this.tryRedirectSignIn(e);(!l||l===h)&&f?.user&&(s=f.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yt(this.app))return Promise.reject(Qn(this));const t=e?Je(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yt(this.app)?Promise.reject(Qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yt(this.app)?Promise.reject(Qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HR(this),t=new KR(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ol("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await zR(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&zr(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await Bo.create(this,[zr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ew(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&SR(`Error while retrieving App Check token: ${e.error}`),e?.token}}function es(n){return Je(n)}class Hy{constructor(e){this.auth=e,this.observer=null,this.addObserver=cS(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YR(n){Zc=n}function tw(n){return Zc.loadJS(n)}function XR(){return Zc.recaptchaEnterpriseScript}function JR(){return Zc.gapiScript}function ZR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class eA{constructor(){this.enterprise=new tA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class tA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const nA="recaptcha-enterprise",nw="NO_RECAPTCHA";class rA{constructor(e){this.type=nA,this.auth=es(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{OR(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new DR(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(p=>{f(p)})})}function o(l,h,f){const p=window.grecaptcha;By(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(nw)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new eA().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(f=>{if(!t&&By(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=XR();p.length!==0&&(p+=f),tw(p).then(()=>{o(f,l,h)}).catch(y=>{h(y)})}}).catch(f=>{h(f)})})}}async function Gy(n,e,t,s=!1,o=!1){const l=new rA(n);let h;if(o)h=nw;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Pf(n,e,t,s,o){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Gy(n,e,t,t==="getOobCode");return s(n,l)}else return s(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Gy(n,e,t,t==="getOobCode");return s(n,h)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(n,e){const t=Jc(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(qr(l,e??{}))return o;Yn(o,"already-initialized")}return t.initialize({options:e})}function iA(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(zr);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function oA(n,e,t){const s=es(n);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=rw(e),{host:h,port:f}=aA(e),p=f===null?"":`:${f}`,y={url:`${l}//${h}${p}/`},v=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve(qr(y,s.config.emulator)&&qr(v,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=v,s.settings.appVerificationDisabledForTesting=!0,Ks(h)?(ep(`${l}//${h}${p}`),tp("Auth",!0)):lA()}function rw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function aA(n){const e=rw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Ky(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:Ky(h)}}}function Ky(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function lA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Br("not implemented")}_getIdTokenResponse(e){return Br("not implemented")}_linkToIdToken(e,t){return Br("not implemented")}_getReauthenticationResolver(e){return Br("not implemented")}}async function uA(n,e){return Zr(n,"POST","/v1/accounts:update",e)}async function cA(n,e){return Zr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(n,e){return ia(n,"POST","/v1/accounts:signInWithPassword",Jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(n,e){return ia(n,"POST","/v1/accounts:signInWithEmailLink",Jr(n,e))}async function fA(n,e){return ia(n,"POST","/v1/accounts:signInWithEmailLink",Jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends up{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Rl(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Rl(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pf(e,t,"signInWithPassword",hA);case"emailLink":return dA(e,{email:this._email,oobCode:this._password});default:Yn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pf(e,s,"signUpPassword",cA);case"emailLink":return fA(e,{idToken:t,email:this._email,oobCode:this._password});default:Yn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(n,e){return ia(n,"POST","/v1/accounts:signInWithIdp",Jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA="http://localhost";class Di extends up{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Di(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Yn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...l}=t;if(!s||!o)return null;const h=new Di(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return zo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,zo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zo(e,t)}buildRequest(){const e={requestUri:pA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Vl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gA(n){const e=ul(cl(n)).link,t=e?ul(cl(e)).deep_link_id:null,s=ul(cl(n)).deep_link_id;return(s?ul(cl(s)).link:null)||s||t||e||n}class cp{constructor(e){const t=ul(cl(e)),s=t.apiKey??null,o=t.oobCode??null,l=mA(t.mode??null);ve(s&&o&&l,"argument-error"),this.apiKey=s,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=gA(e);try{return new cp(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.providerId=oa.PROVIDER_ID}static credential(e,t){return Rl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=cp.parseLink(t);return ve(s,"argument-error"),Rl._fromEmailAndCode(e,s.code,s.tenantId)}}oa.PROVIDER_ID="password";oa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";oa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml extends sw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends Ml{constructor(){super("facebook.com")}static credential(e){return Di._fromParams({providerId:Cs.PROVIDER_ID,signInMethod:Cs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cs.credentialFromTaggedObject(e)}static credentialFromError(e){return Cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cs.credential(e.oauthAccessToken)}catch{return null}}}Cs.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends Ml{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Di._fromParams({providerId:xs.PROVIDER_ID,signInMethod:xs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xs.credentialFromTaggedObject(e)}static credentialFromError(e){return xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return xs.credential(t,s)}catch{return null}}}xs.GOOGLE_SIGN_IN_METHOD="google.com";xs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends Ml{constructor(){super("github.com")}static credential(e){return Di._fromParams({providerId:Ps.PROVIDER_ID,signInMethod:Ps.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ps.credentialFromTaggedObject(e)}static credentialFromError(e){return Ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ps.credential(e.oauthAccessToken)}catch{return null}}}Ps.GITHUB_SIGN_IN_METHOD="github.com";Ps.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends Ml{constructor(){super("twitter.com")}static credential(e,t){return Di._fromParams({providerId:Ns.PROVIDER_ID,signInMethod:Ns.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ns.credentialFromTaggedObject(e)}static credentialFromError(e){return Ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ns.credential(t,s)}catch{return null}}}Ns.TWITTER_SIGN_IN_METHOD="twitter.com";Ns.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iw(n,e){return ia(n,"POST","/v1/accounts:signUp",Jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Kn._fromIdTokenResponse(e,s,o),h=Qy(s);return new _r({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Qy(s);return new _r({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Qy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(n){if(Yt(n.app))return Promise.reject(Qn(n));const e=es(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new _r({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await iw(e,{returnSecureToken:!0}),s=await _r._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc extends wr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Dc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Dc(e,t,s,o)}}function ow(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Dc._fromErrorAndOperation(n,l,e,s):l})}async function _A(n,e,t=!1){const s=await Ho(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return _r._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(n,e,t=!1){const{auth:s}=n;if(Yt(s.app))return Promise.reject(Qn(s));const o="reauthenticate";try{const l=await Ho(n,ow(s,o,e,n),t);ve(l.idToken,s,"internal-error");const h=ap(l.idToken);ve(h,s,"internal-error");const{sub:f}=h;return ve(n.uid===f,s,"user-mismatch"),_r._forOperation(n,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&Yn(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aw(n,e,t=!1){if(Yt(n.app))return Promise.reject(Qn(n));const s="signIn",o=await ow(n,s,e),l=await _r._fromIdTokenResponse(n,s,o);return t||await n._updateCurrentUser(l.user),l}async function wA(n,e){return aw(es(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(n,e){return ia(n,"POST","/v1/accounts:signInWithCustomToken",Jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(n,e){if(Yt(n.app))return Promise.reject(Qn(n));const t=es(n),s=await EA(t,{token:e,returnSecureToken:!0}),o=await _r._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lw(n){const e=es(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function IA(n,e,t){if(Yt(n.app))return Promise.reject(Qn(n));const s=es(n),h=await Pf(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",iw).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&lw(n),p}),f=await _r._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(f.user),f}function SA(n,e,t){return Yt(n.app)?Promise.reject(Qn(n)):wA(Je(n),oa.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&lw(n),s})}function RA(n,e){return AA(Je(n),null,e)}async function AA(n,e,t){const{auth:s}=n,l={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(l.password=t);const h=await Ho(n,uA(s,l));await n._updateTokensIfNecessary(h,!0)}function kA(n,e,t,s){return Je(n).onIdTokenChanged(e,t,s)}function CA(n,e,t){return Je(n).beforeAuthStateChanged(e,t)}function xA(n,e,t,s){return Je(n).onAuthStateChanged(e,t,s)}function PA(n){return Je(n).signOut()}const Oc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Oc,"1"),this.storage.removeItem(Oc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=1e3,bA=10;class cw extends uw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Zv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,p)=>{this.notifyListeners(h,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);qR()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,bA):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},NA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}cw.type="LOCAL";const DA=cw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw extends uw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}hw.type="SESSION";const dw=hw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new eh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),p=await OA(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}eh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,p)=>{const y=hp("",20);o.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(E){const S=E;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(S.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(){return window}function LA(n){fr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(){return typeof fr().WorkerGlobalScope<"u"&&typeof fr().importScripts=="function"}async function MA(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UA(){return navigator?.serviceWorker?.controller||null}function jA(){return fw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw="firebaseLocalStorageDb",FA=1,Vc="firebaseLocalStorage",mw="fbase_key";class Ul{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function th(n,e){return n.transaction([Vc],e?"readwrite":"readonly").objectStore(Vc)}function BA(){const n=indexedDB.deleteDatabase(pw);return new Ul(n).toPromise()}function Nf(){const n=indexedDB.open(pw,FA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Vc,{keyPath:mw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Vc)?e(s):(s.close(),await BA(),e(await Nf()))})})}async function Yy(n,e,t){const s=th(n,!0).put({[mw]:e,value:t});return new Ul(s).toPromise()}async function zA(n,e){const t=th(n,!1).get(e),s=await new Ul(t).toPromise();return s===void 0?null:s.value}function Xy(n,e){const t=th(n,!0).delete(e);return new Ul(t).toPromise()}const $A=800,qA=3;class gw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>qA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=eh._getInstance(jA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await MA(),!this.activeServiceWorker)return;this.sender=new VA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nf();return await Yy(e,Oc,"1"),await Xy(e,Oc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Yy(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>zA(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=th(o,!1).getAll();return new Ul(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$A)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gw.type="LOCAL";const WA=gw;new Ll(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(n,e){return e?zr(e):(ve(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp extends up{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function GA(n){return aw(n.auth,new dp(n),n.bypassAuthState)}function KA(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),vA(t,new dp(n),n.bypassAuthState)}async function QA(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),_A(t,new dp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GA;case"linkViaPopup":case"linkViaRedirect":return QA;case"reauthViaPopup":case"reauthViaRedirect":return KA;default:Yn(this.auth,"internal-error")}}resolve(e){Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=new Ll(2e3,1e4);class jo extends yw{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,jo.currentPopupAction&&jo.currentPopupAction.cancel(),jo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){Hr(this.filter.length===1,"Popup operations only handle one event");const e=hp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(dr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(dr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jo.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YA.get())};e()}}jo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA="pendingRedirect",_c=new Map;class JA extends yw{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=_c.get(this.auth._key());if(!e){try{const s=await ZA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}_c.set(this.auth._key(),e)}return this.bypassAuthState||_c.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZA(n,e){const t=n1(e),s=t1(n);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function e1(n,e){_c.set(n._key(),e)}function t1(n){return zr(n._redirectPersistence)}function n1(n){return yc(XA,n.config.apiKey,n.name)}async function r1(n,e,t=!1){if(Yt(n.app))return Promise.reject(Qn(n));const s=es(n),o=HA(s,e),h=await new JA(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=600*1e3;class i1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!o1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!_w(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(dr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=s1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jy(e))}saveEventToCache(e){this.cachedEventUids.add(Jy(e)),this.lastProcessedEventTime=Date.now()}}function Jy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function _w({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function o1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _w(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(n,e={}){return Zr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,u1=/^https?/;async function c1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await a1(n);for(const t of e)try{if(h1(t))return}catch{}Yn(n,"unauthorized-domain")}function h1(n){const e=Cf(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!u1.test(t))return!1;if(l1.test(n))return s===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=new Ll(3e4,6e4);function Zy(){const n=fr().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function f1(n){return new Promise((e,t)=>{function s(){Zy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zy(),t(dr(n,"network-request-failed"))},timeout:d1.get()})}if(fr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(fr().gapi?.load)s();else{const o=ZR("iframefcb");return fr()[o]=()=>{gapi.load?s():t(dr(n,"network-request-failed"))},tw(`${JR()}?onload=${o}`).catch(l=>t(l))}}).catch(e=>{throw vc=null,e})}let vc=null;function p1(n){return vc=vc||f1(n),vc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=new Ll(5e3,15e3),g1="__/auth/iframe",y1="emulator/auth/iframe",_1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},v1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function w1(n){const e=n.config;ve(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?op(e,y1):`https://${n.config.authDomain}/${g1}`,s={apiKey:e.apiKey,appName:n.name,v:Ui},o=v1.get(n.config.apiHost);o&&(s.eid=o);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Vl(s).slice(1)}`}async function E1(n){const e=await p1(n),t=fr().gapi;return ve(t,n,"internal-error"),e.open({where:document.body,url:w1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_1,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=dr(n,"network-request-failed"),f=fr().setTimeout(()=>{l(h)},m1.get());function p(){fr().clearTimeout(f),o(s)}s.ping(p).then(p,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},I1=500,S1=600,R1="_blank",A1="http://localhost";class e_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function k1(n,e,t,s=I1,o=S1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p={...T1,width:s.toString(),height:o.toString(),top:l,left:h},y=qt().toLowerCase();t&&(f=Kv(y)?R1:t),Hv(y)&&(e=e||A1,p.scrollbars="yes");const v=Object.entries(p).reduce((S,[U,B])=>`${S}${U}=${B},`,"");if($R(y)&&f!=="_self")return C1(e||"",f),new e_(null);const E=window.open(e||"",f,v);ve(E,n,"popup-blocked");try{E.focus()}catch{}return new e_(E)}function C1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1="__/auth/handler",P1="emulator/auth/handler",N1=encodeURIComponent("fac");async function t_(n,e,t,s,o,l){ve(n.config.authDomain,n,"auth-domain-config-required"),ve(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Ui,eventId:o};if(e instanceof sw){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",uS(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries({}))h[v]=E}if(e instanceof Ml){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(h.scopes=v.join(","))}n.tenantId&&(h.tid=n.tenantId);const f=h;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const p=await n._getAppCheckToken(),y=p?`#${N1}=${encodeURIComponent(p)}`:"";return`${b1(n)}?${Vl(f).slice(1)}${y}`}function b1({config:n}){return n.emulator?op(n,P1):`https://${n.authDomain}/${x1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="webStorageSupport";class D1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dw,this._completeRedirectFn=r1,this._overrideRedirectResult=e1}async _openPopup(e,t,s,o){Hr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await t_(e,t,s,Cf(),o);return k1(e,l,hp())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await t_(e,t,s,Cf(),o);return LA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Hr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await E1(e),s=new i1(e);return t.register("authEvent",o=>(ve(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(uf,{type:uf},o=>{const l=o?.[0]?.[uf];l!==void 0&&t(!!l),Yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=c1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Zv()||Gv()||lp()}}const O1=D1;var n_="@firebase/auth",r_="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function M1(n){bi(new Fs("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:h,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ew(n)},y=new QR(s,o,l,p);return iA(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),bi(new Fs("auth-internal",e=>{const t=es(e.getProvider("auth").getImmediate());return(s=>new V1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),hr(n_,r_,L1(n)),hr(n_,r_,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1=300,j1=Nv("authIdTokenMaxAge")||U1;let s_=null;const F1=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>j1)return;const o=t?.token;s_!==o&&(s_=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function vw(n=sp()){const e=Jc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=sA(n,{popupRedirectResolver:O1,persistence:[WA,DA,dw]}),s=Nv("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=F1(l.toString());CA(t,h,()=>h(t.currentUser)),kA(t,f=>h(f))}}const o=Cv("auth");return o&&oA(t,`http://${o}`),t}function B1(){return document.getElementsByTagName("head")?.[0]??document}YR({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=o=>{const l=dr("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",B1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});M1("Browser");var i_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Us,ww;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,R){function C(){}C.prototype=R.prototype,P.D=R.prototype,P.prototype=new C,P.prototype.constructor=P,P.C=function(N,D,L){for(var k=Array(arguments.length-2),at=2;at<arguments.length;at++)k[at-2]=arguments[at];return R.prototype[D].apply(N,k)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,R,C){C||(C=0);var N=Array(16);if(typeof R=="string")for(var D=0;16>D;++D)N[D]=R.charCodeAt(C++)|R.charCodeAt(C++)<<8|R.charCodeAt(C++)<<16|R.charCodeAt(C++)<<24;else for(D=0;16>D;++D)N[D]=R[C++]|R[C++]<<8|R[C++]<<16|R[C++]<<24;R=P.g[0],C=P.g[1],D=P.g[2];var L=P.g[3],k=R+(L^C&(D^L))+N[0]+3614090360&4294967295;R=C+(k<<7&4294967295|k>>>25),k=L+(D^R&(C^D))+N[1]+3905402710&4294967295,L=R+(k<<12&4294967295|k>>>20),k=D+(C^L&(R^C))+N[2]+606105819&4294967295,D=L+(k<<17&4294967295|k>>>15),k=C+(R^D&(L^R))+N[3]+3250441966&4294967295,C=D+(k<<22&4294967295|k>>>10),k=R+(L^C&(D^L))+N[4]+4118548399&4294967295,R=C+(k<<7&4294967295|k>>>25),k=L+(D^R&(C^D))+N[5]+1200080426&4294967295,L=R+(k<<12&4294967295|k>>>20),k=D+(C^L&(R^C))+N[6]+2821735955&4294967295,D=L+(k<<17&4294967295|k>>>15),k=C+(R^D&(L^R))+N[7]+4249261313&4294967295,C=D+(k<<22&4294967295|k>>>10),k=R+(L^C&(D^L))+N[8]+1770035416&4294967295,R=C+(k<<7&4294967295|k>>>25),k=L+(D^R&(C^D))+N[9]+2336552879&4294967295,L=R+(k<<12&4294967295|k>>>20),k=D+(C^L&(R^C))+N[10]+4294925233&4294967295,D=L+(k<<17&4294967295|k>>>15),k=C+(R^D&(L^R))+N[11]+2304563134&4294967295,C=D+(k<<22&4294967295|k>>>10),k=R+(L^C&(D^L))+N[12]+1804603682&4294967295,R=C+(k<<7&4294967295|k>>>25),k=L+(D^R&(C^D))+N[13]+4254626195&4294967295,L=R+(k<<12&4294967295|k>>>20),k=D+(C^L&(R^C))+N[14]+2792965006&4294967295,D=L+(k<<17&4294967295|k>>>15),k=C+(R^D&(L^R))+N[15]+1236535329&4294967295,C=D+(k<<22&4294967295|k>>>10),k=R+(D^L&(C^D))+N[1]+4129170786&4294967295,R=C+(k<<5&4294967295|k>>>27),k=L+(C^D&(R^C))+N[6]+3225465664&4294967295,L=R+(k<<9&4294967295|k>>>23),k=D+(R^C&(L^R))+N[11]+643717713&4294967295,D=L+(k<<14&4294967295|k>>>18),k=C+(L^R&(D^L))+N[0]+3921069994&4294967295,C=D+(k<<20&4294967295|k>>>12),k=R+(D^L&(C^D))+N[5]+3593408605&4294967295,R=C+(k<<5&4294967295|k>>>27),k=L+(C^D&(R^C))+N[10]+38016083&4294967295,L=R+(k<<9&4294967295|k>>>23),k=D+(R^C&(L^R))+N[15]+3634488961&4294967295,D=L+(k<<14&4294967295|k>>>18),k=C+(L^R&(D^L))+N[4]+3889429448&4294967295,C=D+(k<<20&4294967295|k>>>12),k=R+(D^L&(C^D))+N[9]+568446438&4294967295,R=C+(k<<5&4294967295|k>>>27),k=L+(C^D&(R^C))+N[14]+3275163606&4294967295,L=R+(k<<9&4294967295|k>>>23),k=D+(R^C&(L^R))+N[3]+4107603335&4294967295,D=L+(k<<14&4294967295|k>>>18),k=C+(L^R&(D^L))+N[8]+1163531501&4294967295,C=D+(k<<20&4294967295|k>>>12),k=R+(D^L&(C^D))+N[13]+2850285829&4294967295,R=C+(k<<5&4294967295|k>>>27),k=L+(C^D&(R^C))+N[2]+4243563512&4294967295,L=R+(k<<9&4294967295|k>>>23),k=D+(R^C&(L^R))+N[7]+1735328473&4294967295,D=L+(k<<14&4294967295|k>>>18),k=C+(L^R&(D^L))+N[12]+2368359562&4294967295,C=D+(k<<20&4294967295|k>>>12),k=R+(C^D^L)+N[5]+4294588738&4294967295,R=C+(k<<4&4294967295|k>>>28),k=L+(R^C^D)+N[8]+2272392833&4294967295,L=R+(k<<11&4294967295|k>>>21),k=D+(L^R^C)+N[11]+1839030562&4294967295,D=L+(k<<16&4294967295|k>>>16),k=C+(D^L^R)+N[14]+4259657740&4294967295,C=D+(k<<23&4294967295|k>>>9),k=R+(C^D^L)+N[1]+2763975236&4294967295,R=C+(k<<4&4294967295|k>>>28),k=L+(R^C^D)+N[4]+1272893353&4294967295,L=R+(k<<11&4294967295|k>>>21),k=D+(L^R^C)+N[7]+4139469664&4294967295,D=L+(k<<16&4294967295|k>>>16),k=C+(D^L^R)+N[10]+3200236656&4294967295,C=D+(k<<23&4294967295|k>>>9),k=R+(C^D^L)+N[13]+681279174&4294967295,R=C+(k<<4&4294967295|k>>>28),k=L+(R^C^D)+N[0]+3936430074&4294967295,L=R+(k<<11&4294967295|k>>>21),k=D+(L^R^C)+N[3]+3572445317&4294967295,D=L+(k<<16&4294967295|k>>>16),k=C+(D^L^R)+N[6]+76029189&4294967295,C=D+(k<<23&4294967295|k>>>9),k=R+(C^D^L)+N[9]+3654602809&4294967295,R=C+(k<<4&4294967295|k>>>28),k=L+(R^C^D)+N[12]+3873151461&4294967295,L=R+(k<<11&4294967295|k>>>21),k=D+(L^R^C)+N[15]+530742520&4294967295,D=L+(k<<16&4294967295|k>>>16),k=C+(D^L^R)+N[2]+3299628645&4294967295,C=D+(k<<23&4294967295|k>>>9),k=R+(D^(C|~L))+N[0]+4096336452&4294967295,R=C+(k<<6&4294967295|k>>>26),k=L+(C^(R|~D))+N[7]+1126891415&4294967295,L=R+(k<<10&4294967295|k>>>22),k=D+(R^(L|~C))+N[14]+2878612391&4294967295,D=L+(k<<15&4294967295|k>>>17),k=C+(L^(D|~R))+N[5]+4237533241&4294967295,C=D+(k<<21&4294967295|k>>>11),k=R+(D^(C|~L))+N[12]+1700485571&4294967295,R=C+(k<<6&4294967295|k>>>26),k=L+(C^(R|~D))+N[3]+2399980690&4294967295,L=R+(k<<10&4294967295|k>>>22),k=D+(R^(L|~C))+N[10]+4293915773&4294967295,D=L+(k<<15&4294967295|k>>>17),k=C+(L^(D|~R))+N[1]+2240044497&4294967295,C=D+(k<<21&4294967295|k>>>11),k=R+(D^(C|~L))+N[8]+1873313359&4294967295,R=C+(k<<6&4294967295|k>>>26),k=L+(C^(R|~D))+N[15]+4264355552&4294967295,L=R+(k<<10&4294967295|k>>>22),k=D+(R^(L|~C))+N[6]+2734768916&4294967295,D=L+(k<<15&4294967295|k>>>17),k=C+(L^(D|~R))+N[13]+1309151649&4294967295,C=D+(k<<21&4294967295|k>>>11),k=R+(D^(C|~L))+N[4]+4149444226&4294967295,R=C+(k<<6&4294967295|k>>>26),k=L+(C^(R|~D))+N[11]+3174756917&4294967295,L=R+(k<<10&4294967295|k>>>22),k=D+(R^(L|~C))+N[2]+718787259&4294967295,D=L+(k<<15&4294967295|k>>>17),k=C+(L^(D|~R))+N[9]+3951481745&4294967295,P.g[0]=P.g[0]+R&4294967295,P.g[1]=P.g[1]+(D+(k<<21&4294967295|k>>>11))&4294967295,P.g[2]=P.g[2]+D&4294967295,P.g[3]=P.g[3]+L&4294967295}s.prototype.u=function(P,R){R===void 0&&(R=P.length);for(var C=R-this.blockSize,N=this.B,D=this.h,L=0;L<R;){if(D==0)for(;L<=C;)o(this,P,L),L+=this.blockSize;if(typeof P=="string"){for(;L<R;)if(N[D++]=P.charCodeAt(L++),D==this.blockSize){o(this,N),D=0;break}}else for(;L<R;)if(N[D++]=P[L++],D==this.blockSize){o(this,N),D=0;break}}this.h=D,this.o+=R},s.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var R=1;R<P.length-8;++R)P[R]=0;var C=8*this.o;for(R=P.length-8;R<P.length;++R)P[R]=C&255,C/=256;for(this.u(P),P=Array(16),R=C=0;4>R;++R)for(var N=0;32>N;N+=8)P[C++]=this.g[R]>>>N&255;return P};function l(P,R){var C=f;return Object.prototype.hasOwnProperty.call(C,P)?C[P]:C[P]=R(P)}function h(P,R){this.h=R;for(var C=[],N=!0,D=P.length-1;0<=D;D--){var L=P[D]|0;N&&L==R||(C[D]=L,N=!1)}this.g=C}var f={};function p(P){return-128<=P&&128>P?l(P,function(R){return new h([R|0],0>R?-1:0)}):new h([P|0],0>P?-1:0)}function y(P){if(isNaN(P)||!isFinite(P))return E;if(0>P)return O(y(-P));for(var R=[],C=1,N=0;P>=C;N++)R[N]=P/C|0,C*=4294967296;return new h(R,0)}function v(P,R){if(P.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(P.charAt(0)=="-")return O(v(P.substring(1),R));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=y(Math.pow(R,8)),N=E,D=0;D<P.length;D+=8){var L=Math.min(8,P.length-D),k=parseInt(P.substring(D,D+L),R);8>L?(L=y(Math.pow(R,L)),N=N.j(L).add(y(k))):(N=N.j(C),N=N.add(y(k)))}return N}var E=p(0),S=p(1),U=p(16777216);n=h.prototype,n.m=function(){if(W(this))return-O(this).m();for(var P=0,R=1,C=0;C<this.g.length;C++){var N=this.i(C);P+=(0<=N?N:4294967296+N)*R,R*=4294967296}return P},n.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(B(this))return"0";if(W(this))return"-"+O(this).toString(P);for(var R=y(Math.pow(P,6)),C=this,N="";;){var D=re(C,R).g;C=ee(C,D.j(R));var L=((0<C.g.length?C.g[0]:C.h)>>>0).toString(P);if(C=D,B(C))return L+N;for(;6>L.length;)L="0"+L;N=L+N}},n.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function B(P){if(P.h!=0)return!1;for(var R=0;R<P.g.length;R++)if(P.g[R]!=0)return!1;return!0}function W(P){return P.h==-1}n.l=function(P){return P=ee(this,P),W(P)?-1:B(P)?0:1};function O(P){for(var R=P.g.length,C=[],N=0;N<R;N++)C[N]=~P.g[N];return new h(C,~P.h).add(S)}n.abs=function(){return W(this)?O(this):this},n.add=function(P){for(var R=Math.max(this.g.length,P.g.length),C=[],N=0,D=0;D<=R;D++){var L=N+(this.i(D)&65535)+(P.i(D)&65535),k=(L>>>16)+(this.i(D)>>>16)+(P.i(D)>>>16);N=k>>>16,L&=65535,k&=65535,C[D]=k<<16|L}return new h(C,C[C.length-1]&-2147483648?-1:0)};function ee(P,R){return P.add(O(R))}n.j=function(P){if(B(this)||B(P))return E;if(W(this))return W(P)?O(this).j(O(P)):O(O(this).j(P));if(W(P))return O(this.j(O(P)));if(0>this.l(U)&&0>P.l(U))return y(this.m()*P.m());for(var R=this.g.length+P.g.length,C=[],N=0;N<2*R;N++)C[N]=0;for(N=0;N<this.g.length;N++)for(var D=0;D<P.g.length;D++){var L=this.i(N)>>>16,k=this.i(N)&65535,at=P.i(D)>>>16,Vt=P.i(D)&65535;C[2*N+2*D]+=k*Vt,Z(C,2*N+2*D),C[2*N+2*D+1]+=L*Vt,Z(C,2*N+2*D+1),C[2*N+2*D+1]+=k*at,Z(C,2*N+2*D+1),C[2*N+2*D+2]+=L*at,Z(C,2*N+2*D+2)}for(N=0;N<R;N++)C[N]=C[2*N+1]<<16|C[2*N];for(N=R;N<2*R;N++)C[N]=0;return new h(C,0)};function Z(P,R){for(;(P[R]&65535)!=P[R];)P[R+1]+=P[R]>>>16,P[R]&=65535,R++}function Q(P,R){this.g=P,this.h=R}function re(P,R){if(B(R))throw Error("division by zero");if(B(P))return new Q(E,E);if(W(P))return R=re(O(P),R),new Q(O(R.g),O(R.h));if(W(R))return R=re(P,O(R)),new Q(O(R.g),R.h);if(30<P.g.length){if(W(P)||W(R))throw Error("slowDivide_ only works with positive integers.");for(var C=S,N=R;0>=N.l(P);)C=Se(C),N=Se(N);var D=ae(C,1),L=ae(N,1);for(N=ae(N,2),C=ae(C,2);!B(N);){var k=L.add(N);0>=k.l(P)&&(D=D.add(C),L=k),N=ae(N,1),C=ae(C,1)}return R=ee(P,D.j(R)),new Q(D,R)}for(D=E;0<=P.l(R);){for(C=Math.max(1,Math.floor(P.m()/R.m())),N=Math.ceil(Math.log(C)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),L=y(C),k=L.j(R);W(k)||0<k.l(P);)C-=N,L=y(C),k=L.j(R);B(L)&&(L=S),D=D.add(L),P=ee(P,k)}return new Q(D,P)}n.A=function(P){return re(this,P).h},n.and=function(P){for(var R=Math.max(this.g.length,P.g.length),C=[],N=0;N<R;N++)C[N]=this.i(N)&P.i(N);return new h(C,this.h&P.h)},n.or=function(P){for(var R=Math.max(this.g.length,P.g.length),C=[],N=0;N<R;N++)C[N]=this.i(N)|P.i(N);return new h(C,this.h|P.h)},n.xor=function(P){for(var R=Math.max(this.g.length,P.g.length),C=[],N=0;N<R;N++)C[N]=this.i(N)^P.i(N);return new h(C,this.h^P.h)};function Se(P){for(var R=P.g.length+1,C=[],N=0;N<R;N++)C[N]=P.i(N)<<1|P.i(N-1)>>>31;return new h(C,P.h)}function ae(P,R){var C=R>>5;R%=32;for(var N=P.g.length-C,D=[],L=0;L<N;L++)D[L]=0<R?P.i(L+C)>>>R|P.i(L+C+1)<<32-R:P.i(L+C);return new h(D,P.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,ww=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=v,Us=h}).apply(typeof i_<"u"?i_:typeof self<"u"?self:typeof window<"u"?window:{});var lc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ew,hl,Tw,wc,bf,Iw,Sw,Rw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof lc=="object"&&lc];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=t(this);function o(u,m){if(m)e:{var _=s;u=u.split(".");for(var T=0;T<u.length-1;T++){var M=u[T];if(!(M in _))break e;_=_[M]}u=u[u.length-1],T=_[u],m=m(T),m!=T&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,T=!1,M={next:function(){if(!T&&_<u.length){var q=_++;return{value:m(q,u[q]),done:!1}}return T=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function v(u,m,_){return u.call.apply(u.bind,arguments)}function E(u,m,_){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,T),u.apply(m,M)}}return function(){return u.apply(m,arguments)}}function S(u,m,_){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:E,S.apply(null,arguments)}function U(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function B(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(T,M,q){for(var ne=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)ne[Fe-2]=arguments[Fe];return m.prototype[M].apply(T,ne)}}function W(u){const m=u.length;if(0<m){const _=Array(m);for(let T=0;T<m;T++)_[T]=u[T];return _}return[]}function O(u,m){for(let _=1;_<arguments.length;_++){const T=arguments[_];if(p(T)){const M=u.length||0,q=T.length||0;u.length=M+q;for(let ne=0;ne<q;ne++)u[M+ne]=T[ne]}else u.push(T)}}class ee{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function Z(u){return/^[\s\xa0]*$/.test(u)}function Q(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function re(u){return re[" "](u),u}re[" "]=function(){};var Se=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function ae(u,m,_){for(const T in u)m.call(_,u[T],T,u)}function P(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function R(u){const m={};for(const _ in u)m[_]=u[_];return m}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,m){let _,T;for(let M=1;M<arguments.length;M++){T=arguments[M];for(_ in T)u[_]=T[_];for(let q=0;q<C.length;q++)_=C[q],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function D(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function L(u){f.setTimeout(()=>{throw u},0)}function k(){var u=ge;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class at{constructor(){this.h=this.g=null}add(m,_){const T=Vt.get();T.set(m,_),this.h?this.h.next=T:this.g=T,this.h=T}}var Vt=new ee(()=>new Lt,u=>u.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,se=!1,ge=new at,le=()=>{const u=f.Promise.resolve(void 0);Be=()=>{u.then(V)}};var V=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(_){L(_)}var m=Vt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}se=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Re=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};f.addEventListener("test",_,m),f.removeEventListener("test",_,m)}catch{}return u})();function Ae(u,m){if(pe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Se){e:{try{re(m.nodeName);var M=!0;break e}catch{}M=!1}M||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:be[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}B(Ae,pe);var be={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function $e(u,m,_,T,M){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!T,this.ha=M,this.key=++Ue,this.da=this.fa=!1}function Tt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Tr(u){this.src=u,this.g={},this.h=0}Tr.prototype.add=function(u,m,_,T,M){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var ne=ns(u,m,T,M);return-1<ne?(m=u[ne],_||(m.fa=!1)):(m=new $e(m,this.src,q,!!T,M),m.fa=_,u.push(m)),m};function zi(u,m){var _=m.type;if(_ in u.g){var T=u.g[_],M=Array.prototype.indexOf.call(T,m,void 0),q;(q=0<=M)&&Array.prototype.splice.call(T,M,1),q&&(Tt(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function ns(u,m,_,T){for(var M=0;M<u.length;++M){var q=u[M];if(!q.da&&q.listener==m&&q.capture==!!_&&q.ha==T)return M}return-1}var Js="closure_lm_"+(1e6*Math.random()|0),$i={};function fa(u,m,_,T,M){if(Array.isArray(m)){for(var q=0;q<m.length;q++)fa(u,m[q],_,T,M);return null}return _=ga(_),u&&u[Me]?u.K(m,_,y(T)?!!T.capture:!1,M):pa(u,m,_,!1,T,M)}function pa(u,m,_,T,M,q){if(!m)throw Error("Invalid event type");var ne=y(M)?!!M.capture:!!M,Fe=Wi(u);if(Fe||(u[Js]=Fe=new Tr(u)),_=Fe.add(m,_,T,ne,q),_.proxy)return _;if(T=Wl(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)Re||(M=ne),M===void 0&&(M=!1),u.addEventListener(m.toString(),T,M);else if(u.attachEvent)u.attachEvent(Sr(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Wl(){function u(_){return m.call(u.src,u.listener,_)}const m=ma;return u}function qi(u,m,_,T,M){if(Array.isArray(m))for(var q=0;q<m.length;q++)qi(u,m[q],_,T,M);else T=y(T)?!!T.capture:!!T,_=ga(_),u&&u[Me]?(u=u.i,m=String(m).toString(),m in u.g&&(q=u.g[m],_=ns(q,_,T,M),-1<_&&(Tt(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete u.g[m],u.h--)))):u&&(u=Wi(u))&&(m=u.g[m.toString()],u=-1,m&&(u=ns(m,_,T,M)),(_=-1<u?m[u]:null)&&Ir(_))}function Ir(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Me])zi(m.i,u);else{var _=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(_,T,u.capture):m.detachEvent?m.detachEvent(Sr(_),T):m.addListener&&m.removeListener&&m.removeListener(T),(_=Wi(m))?(zi(_,u),_.h==0&&(_.src=null,m[Js]=null)):Tt(u)}}}function Sr(u){return u in $i?$i[u]:$i[u]="on"+u}function ma(u,m){if(u.da)u=!0;else{m=new Ae(m,this);var _=u.listener,T=u.ha||u.src;u.fa&&Ir(u),u=_.call(T,m)}return u}function Wi(u){return u=u[Js],u instanceof Tr?u:null}var Hi="__closure_events_fn_"+(1e9*Math.random()>>>0);function ga(u){return typeof u=="function"?u:(u[Hi]||(u[Hi]=function(m){return u.handleEvent(m)}),u[Hi])}function gt(){K.call(this),this.i=new Tr(this),this.M=this,this.F=null}B(gt,K),gt.prototype[Me]=!0,gt.prototype.removeEventListener=function(u,m,_,T){qi(this,u,m,_,T)};function yt(u,m){var _,T=u.F;if(T)for(_=[];T;T=T.F)_.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new pe(m,u);else if(m instanceof pe)m.target=m.target||u;else{var M=m;m=new pe(T,u),N(m,M)}if(M=!0,_)for(var q=_.length-1;0<=q;q--){var ne=m.g=_[q];M=Rr(ne,T,!0,m)&&M}if(ne=m.g=u,M=Rr(ne,T,!0,m)&&M,M=Rr(ne,T,!1,m)&&M,_)for(q=0;q<_.length;q++)ne=m.g=_[q],M=Rr(ne,T,!1,m)&&M}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],T=0;T<_.length;T++)Tt(_[T]);delete u.g[m],u.h--}}this.F=null},gt.prototype.K=function(u,m,_,T){return this.i.add(String(u),m,!1,_,T)},gt.prototype.L=function(u,m,_,T){return this.i.add(String(u),m,!0,_,T)};function Rr(u,m,_,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var M=!0,q=0;q<m.length;++q){var ne=m[q];if(ne&&!ne.da&&ne.capture==_){var Fe=ne.listener,_t=ne.ha||ne.src;ne.fa&&zi(u.i,ne),M=Fe.call(_t,T)!==!1&&M}}return M&&!T.defaultPrevented}function ya(u,m,_){if(typeof u=="function")_&&(u=S(u,_));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:f.setTimeout(u,m||0)}function rs(u){u.g=ya(()=>{u.g=null,u.i&&(u.i=!1,rs(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Zs extends K{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:rs(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ei(u){K.call(this),this.h=u,this.g={}}B(ei,K);var _a=[];function va(u){ae(u.g,function(m,_){this.g.hasOwnProperty(_)&&Ir(m)},u),u.g={}}ei.prototype.N=function(){ei.aa.N.call(this),va(this)},ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wa=f.JSON.stringify,Ea=f.JSON.parse,Ta=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function ti(){}ti.prototype.h=null;function Gi(u){return u.h||(u.h=u.i())}function Ki(){}var wn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Jn(){pe.call(this,"d")}B(Jn,pe);function Qi(){pe.call(this,"c")}B(Qi,pe);var Zn={},Ia=null;function ni(){return Ia=Ia||new gt}Zn.La="serverreachability";function Sa(u){pe.call(this,Zn.La,u)}B(Sa,pe);function Ar(u){const m=ni();yt(m,new Sa(m))}Zn.STAT_EVENT="statevent";function Ra(u,m){pe.call(this,Zn.STAT_EVENT,u),this.stat=m}B(Ra,pe);function lt(u){const m=ni();yt(m,new Ra(m,u))}Zn.Ma="timingevent";function Yi(u,m){pe.call(this,Zn.Ma,u),this.size=m}B(Yi,pe);function Dn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},m)}function ri(){this.g=!0}ri.prototype.xa=function(){this.g=!1};function si(u,m,_,T,M,q){u.info(function(){if(u.g)if(q)for(var ne="",Fe=q.split("&"),_t=0;_t<Fe.length;_t++){var De=Fe[_t].split("=");if(1<De.length){var It=De[0];De=De[1];var ht=It.split("_");ne=2<=ht.length&&ht[1]=="type"?ne+(It+"="+De+"&"):ne+(It+"=redacted&")}}else ne=null;else ne=q;return"XMLHTTP REQ ("+T+") [attempt "+M+"]: "+m+`
`+_+`
`+ne})}function Xi(u,m,_,T,M,q,ne){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+M+"]: "+m+`
`+_+`
`+q+" "+ne})}function On(u,m,_,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Sh(u,_)+(T?" "+T:"")})}function Aa(u,m){u.info(function(){return"TIMEOUT: "+m})}ri.prototype.info=function(){};function Sh(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var T=_[u];if(!(2>T.length)){var M=T[1];if(Array.isArray(M)&&!(1>M.length)){var q=M[0];if(q!="noop"&&q!="stop"&&q!="close")for(var ne=1;ne<M.length;ne++)M[ne]=""}}}}return wa(_)}catch{return m}}var Ji={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vn;function ii(){}B(ii,ti),ii.prototype.g=function(){return new XMLHttpRequest},ii.prototype.i=function(){return{}},Vn=new ii;function Ln(u,m,_,T){this.j=u,this.i=m,this.l=_,this.R=T||1,this.U=new ei(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gl}function Gl(){this.i=null,this.g="",this.h=!1}var ka={},Zi={};function eo(u,m,_){u.L=1,u.v=ls(hn(m)),u.m=_,u.P=!0,Ca(u,null)}function Ca(u,m){u.F=Date.now(),qe(u),u.A=hn(u.v);var _=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),cs(_.i,"t",T),u.C=0,_=u.j.J,u.h=new Gl,u.g=hu(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Zs(S(u.Y,u,u.g),u.O)),m=u.U,_=u.g,T=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(_a[0]=M.toString()),M=_a);for(var q=0;q<M.length;q++){var ne=fa(_,M[q],T||m.handleEvent,!1,m.h||m);if(!ne)break;m.g[ne.key]=ne}m=u.H?R(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Ar(),si(u.i,u.u,u.A,u.l,u.R,u.m)}Ln.prototype.ca=function(u){u=u.target;const m=this.M;m&&Zt(u)==3?m.j():this.Y(u)},Ln.prototype.Y=function(u){try{if(u==this.g)e:{const ht=Zt(this.g);var m=this.g.Ba();const In=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||Oa(this.g)))){this.J||ht!=4||m==7||(m==8||0>=In?Ar(3):Ar(2)),oi(this);var _=this.g.Z();this.X=_;t:if(Kl(this)){var T=Oa(this.g);u="";var M=T.length,q=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),ss(this);var ne="";break t}this.h.i=new f.TextDecoder}for(m=0;m<M;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!(q&&m==M-1)});T.length=0,this.h.g+=u,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=_==200,Xi(this.i,this.u,this.A,this.l,this.R,ht,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,_t=this.g;if((Fe=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Z(Fe)){var De=Fe;break t}}De=null}if(_=De)On(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xa(this,_);else{this.o=!1,this.s=3,lt(12),En(this),ss(this);break e}}if(this.P){_=!0;let fn;for(;!this.J&&this.C<ne.length;)if(fn=Rh(this,ne),fn==Zi){ht==4&&(this.s=4,lt(14),_=!1),On(this.i,this.l,null,"[Incomplete Response]");break}else if(fn==ka){this.s=4,lt(15),On(this.i,this.l,ne,"[Invalid Chunk]"),_=!1;break}else On(this.i,this.l,fn,null),xa(this,fn);if(Kl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||ne.length!=0||this.h.h||(this.s=1,lt(16),_=!1),this.o=this.o&&_,!_)On(this.i,this.l,ne,"[Invalid Chunked Response]"),En(this),ss(this);else if(0<ne.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),La(It),It.M=!0,lt(11))}}else On(this.i,this.l,ne,null),xa(this,ne);ht==4&&En(this),this.o&&!this.J&&(ht==4?ho(this.j,this):(this.o=!1,qe(this)))}else oo(this.g),_==400&&0<ne.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),En(this),ss(this)}}}catch{}finally{}};function Kl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Rh(u,m){var _=u.C,T=m.indexOf(`
`,_);return T==-1?Zi:(_=Number(m.substring(_,T)),isNaN(_)?ka:(T+=1,T+_>m.length?Zi:(m=m.slice(T,T+_),u.C=T+_,m)))}Ln.prototype.cancel=function(){this.J=!0,En(this)};function qe(u){u.S=Date.now()+u.I,Ql(u,u.I)}function Ql(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Dn(S(u.ba,u),m)}function oi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Ln.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Aa(this.i,this.A),this.L!=2&&(Ar(),lt(17)),En(this),this.s=2,ss(this)):Ql(this,this.S-u)};function ss(u){u.j.G==0||u.J||ho(u.j,u)}function En(u){oi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,va(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function xa(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Wt(_.h,u))){if(!u.K&&Wt(_.h,u)&&_.G==3){try{var T=_.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var M=T;if(M[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)co(_),Bn(_);else break e;uo(_),lt(18)}}else _.za=M[1],0<_.za-_.T&&37500>M[2]&&_.F&&_.v==0&&!_.C&&(_.C=Dn(S(_.Za,_),6e3));if(1>=Xl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Nr(_,11)}else if((u.K||_.g==u)&&co(_),!Z(m))for(M=_.Da.g.parse(m),m=0;m<M.length;m++){let De=M[m];if(_.T=De[0],De=De[1],_.G==2)if(De[0]=="c"){_.K=De[1],_.ia=De[2];const It=De[3];It!=null&&(_.la=It,_.j.info("VER="+_.la));const ht=De[4];ht!=null&&(_.Aa=ht,_.j.info("SVER="+_.Aa));const In=De[5];In!=null&&typeof In=="number"&&0<In&&(T=1.5*In,_.L=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const fn=u.g;if(fn){const fi=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fi){var q=T.h;q.g||fi.indexOf("spdy")==-1&&fi.indexOf("quic")==-1&&fi.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Pa(q,q.h),q.h=null))}if(T.D){const po=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;po&&(T.ya=po,ze(T.I,T.D,po))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),T=_;var ne=u;if(T.qa=cu(T,T.J?T.ia:null,T.W),ne.K){Jl(T.h,ne);var Fe=ne,_t=T.L;_t&&(Fe.I=_t),Fe.B&&(oi(Fe),qe(Fe)),T.g=ne}else di(T);0<_.i.length&&rr(_)}else De[0]!="stop"&&De[0]!="close"||Nr(_,7);else _.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?Nr(_,7):xt(_):De[0]!="noop"&&_.l&&_.l.ta(De),_.v=0)}}Ar(4)}catch{}}var Yl=class{constructor(u,m){this.g=u,this.map=m}};function ai(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Xl(u){return u.h?1:u.g?u.g.size:0}function Wt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Pa(u,m){u.g?u.g.add(m):u.h=m}function Jl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}ai.prototype.cancel=function(){if(this.i=Zl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Zl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return W(u.i)}function to(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,T=0;T<_;T++)m.push(u[T]);return m}m=[],_=0;for(T in u)m[_++]=u[T];return m}function no(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const T in u)m[_++]=T;return m}}}function is(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=no(u),T=to(u),M=T.length,q=0;q<M;q++)m.call(void 0,T[q],_&&_[q],u)}var li=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ah(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var T=u[_].indexOf("="),M=null;if(0<=T){var q=u[_].substring(0,T);M=u[_].substring(T+1)}else q=u[_];m(q,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function kr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof kr){this.h=u.h,ui(this,u.j),this.o=u.o,this.g=u.g,os(this,u.s),this.l=u.l;var m=u.i,_=new er;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),as(this,_),this.m=u.m}else u&&(m=String(u).match(li))?(this.h=!1,ui(this,m[1]||"",!0),this.o=Ne(m[2]||""),this.g=Ne(m[3]||"",!0),os(this,m[4]),this.l=Ne(m[5]||"",!0),as(this,m[6]||"",!0),this.m=Ne(m[7]||"")):(this.h=!1,this.i=new er(null,this.h))}kr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(us(m,ro,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(us(m,ro,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(us(_,_.charAt(0)=="/"?nu:tu,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",us(_,Na)),u.join("")};function hn(u){return new kr(u)}function ui(u,m,_){u.j=_?Ne(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function os(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function as(u,m,_){m instanceof er?(u.i=m,tr(u.i,u.h)):(_||(m=us(m,ru)),u.i=new er(m,u.h))}function ze(u,m,_){u.i.set(m,_)}function ls(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function us(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,eu),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function eu(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var ro=/[#\/\?@]/g,tu=/[#\?:]/g,nu=/[#\?]/g,ru=/[#\?@]/g,Na=/#/g;function er(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Ct(u){u.g||(u.g=new Map,u.h=0,u.i&&Ah(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=er.prototype,n.add=function(u,m){Ct(this),this.i=null,u=Tn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Mn(u,m){Ct(u),m=Tn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Un(u,m){return Ct(u),m=Tn(u,m),u.g.has(m)}n.forEach=function(u,m){Ct(this),this.g.forEach(function(_,T){_.forEach(function(M){u.call(m,M,T,this)},this)},this)},n.na=function(){Ct(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let T=0;T<m.length;T++){const M=u[T];for(let q=0;q<M.length;q++)_.push(m[T])}return _},n.V=function(u){Ct(this);let m=[];if(typeof u=="string")Un(this,u)&&(m=m.concat(this.g.get(Tn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return Ct(this),this.i=null,u=Tn(this,u),Un(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function cs(u,m,_){Mn(u,m),0<_.length&&(u.i=null,u.g.set(Tn(u,m),W(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var T=m[_];const q=encodeURIComponent(String(T)),ne=this.V(T);for(T=0;T<ne.length;T++){var M=q;ne[T]!==""&&(M+="="+encodeURIComponent(String(ne[T]))),u.push(M)}}return this.i=u.join("&")};function Tn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function tr(u,m){m&&!u.j&&(Ct(u),u.i=null,u.g.forEach(function(_,T){var M=T.toLowerCase();T!=M&&(Mn(this,T),cs(this,M,_))},u)),u.j=m}function kh(u,m){const _=new ri;if(f.Image){const T=new Image;T.onload=U(Jt,_,"TestLoadImage: loaded",!0,m,T),T.onerror=U(Jt,_,"TestLoadImage: error",!1,m,T),T.onabort=U(Jt,_,"TestLoadImage: abort",!1,m,T),T.ontimeout=U(Jt,_,"TestLoadImage: timeout",!1,m,T),f.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function su(u,m){const _=new ri,T=new AbortController,M=setTimeout(()=>{T.abort(),Jt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(q=>{clearTimeout(M),q.ok?Jt(_,"TestPingServer: ok",!0,m):Jt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(M),Jt(_,"TestPingServer: error",!1,m)})}function Jt(u,m,_,T,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),T(_)}catch{}}function Ch(){this.g=new Ta}function iu(u,m,_){const T=_||"";try{is(u,function(M,q){let ne=M;y(M)&&(ne=wa(M)),m.push(T+q+"="+encodeURIComponent(ne))})}catch(M){throw m.push(T+"type="+encodeURIComponent("_badmap")),M}}function Cr(u){this.l=u.Ub||null,this.j=u.eb||!1}B(Cr,ti),Cr.prototype.g=function(){return new ci(this.l,this.j)},Cr.prototype.i=(function(u){return function(){return u}})({});function ci(u,m){gt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(ci,gt),n=ci.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Fn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||f).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ou(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function ou(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?jn(this):Fn(this),this.readyState==3&&ou(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,jn(this))},n.Qa=function(u){this.g&&(this.response=u,jn(this))},n.ga=function(){this.g&&jn(this)};function jn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Fn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Fn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ci.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function xr(u){let m="";return ae(u,function(_,T){m+=T,m+=":",m+=_,m+=`\r
`}),m}function hs(u,m,_){e:{for(T in _){var T=!1;break e}T=!0}T||(_=xr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):ze(u,m,_))}function Ye(u){gt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(Ye,gt);var xh=/^https?$/i,ba=["POST","PUT"];n=Ye.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vn.g(),this.v=this.o?Gi(this.o):Gi(Vn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){hi(this,q);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var M in T)_.set(M,T[M]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const q of T.keys())_.set(q,T.get(q));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),M=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ba,m,void 0))||T||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ne]of _)this.g.setRequestHeader(q,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{io(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){hi(this,q)}};function hi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,so(u),dn(u)}function so(u){u.A||(u.A=!0,yt(u,"complete"),yt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,yt(this,"complete"),yt(this,"abort"),dn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dn(this,!0)),Ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Da(this):this.bb())},n.bb=function(){Da(this)};function Da(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Zt(u)!=4||u.Z()!=2)){if(u.u&&Zt(u)==4)ya(u.Ea,0,u);else if(yt(u,"readystatechange"),Zt(u)==4){u.h=!1;try{const ne=u.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var T;if(T=ne===0){var M=String(u.D).match(li)[1]||null;!M&&f.self&&f.self.location&&(M=f.self.location.protocol.slice(0,-1)),T=!xh.test(M?M.toLowerCase():"")}_=T}if(_)yt(u,"complete"),yt(u,"success");else{u.m=6;try{var q=2<Zt(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",so(u)}}finally{dn(u)}}}}function dn(u,m){if(u.g){io(u);const _=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||yt(u,"ready");try{_.onreadystatechange=T}catch{}}}function io(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Zt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Ea(m)}};function Oa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function oo(u){const m={};u=(u.g&&2<=Zt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(Z(u[T]))continue;var _=D(u[T]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=m[M]||[];m[M]=q,q.push(_)}P(m,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function nr(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function Va(u){this.Aa=0,this.i=[],this.j=new ri,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nr("baseRetryDelayMs",5e3,u),this.cb=nr("retryDelaySeedMs",1e4,u),this.Wa=nr("forwardChannelMaxRetries",2,u),this.wa=nr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new ai(u&&u.concurrentRequestLimit),this.Da=new Ch,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Va.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,T){lt(0),this.W=u,this.H=m||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.I=cu(this,null,this.W),rr(this)};function xt(u){if(ao(u),u.G==3){var m=u.U++,_=hn(u.I);if(ze(_,"SID",u.K),ze(_,"RID",m),ze(_,"TYPE","terminate"),Pr(u,_),m=new Ln(u,u.j,m),m.L=2,m.v=ls(hn(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&f.Image&&(new Image().src=m.v,_=!0),_||(m.g=hu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),qe(m)}uu(u)}function Bn(u){u.g&&(La(u),u.g.cancel(),u.g=null)}function ao(u){Bn(u),u.u&&(f.clearTimeout(u.u),u.u=null),co(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function rr(u){if(!cn(u.h)&&!u.s){u.s=!0;var m=u.Ga;Be||le(),se||(Be(),se=!0),ge.add(m,u),u.B=0}}function Ph(u,m){return Xl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Dn(S(u.Ga,u,m),lu(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new Ln(this,this.j,u);let q=this.o;if(this.S&&(q?(q=R(q),N(q,this.S)):q=this.S),this.m!==null||this.O||(M.H=q,q=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=ds(this,M,m),_=hn(this.I),ze(_,"RID",u),ze(_,"CVER",22),this.D&&ze(_,"X-HTTP-Session-Id",this.D),Pr(this,_),q&&(this.O?m="headers="+encodeURIComponent(String(xr(q)))+"&"+m:this.m&&hs(_,this.m,q)),Pa(this.h,M),this.Ua&&ze(_,"TYPE","init"),this.P?(ze(_,"$req",m),ze(_,"SID","null"),M.T=!0,eo(M,_,null)):eo(M,_,m),this.G=2}}else this.G==3&&(u?lo(this,u):this.i.length==0||cn(this.h)||lo(this))};function lo(u,m){var _;m?_=m.l:_=u.U++;const T=hn(u.I);ze(T,"SID",u.K),ze(T,"RID",_),ze(T,"AID",u.T),Pr(u,T),u.m&&u.o&&hs(T,u.m,u.o),_=new Ln(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=ds(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Pa(u.h,_),eo(_,T,m)}function Pr(u,m){u.H&&ae(u.H,function(_,T){ze(m,T,_)}),u.l&&is({},function(_,T){ze(m,T,_)})}function ds(u,m,_){_=Math.min(u.i.length,_);var T=u.l?S(u.l.Na,u.l,u):null;e:{var M=u.i;let q=-1;for(;;){const ne=["count="+_];q==-1?0<_?(q=M[0].g,ne.push("ofs="+q)):q=0:ne.push("ofs="+q);let Fe=!0;for(let _t=0;_t<_;_t++){let De=M[_t].g;const It=M[_t].map;if(De-=q,0>De)q=Math.max(0,M[_t].g-100),Fe=!1;else try{iu(It,ne,"req"+De+"_")}catch{T&&T(It)}}if(Fe){T=ne.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,T}function di(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Be||le(),se||(Be(),se=!0),ge.add(m,u),u.v=0}}function uo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Dn(S(u.Fa,u),lu(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,au(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Dn(S(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),Bn(this),au(this))};function La(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function au(u){u.g=new Ln(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=hn(u.qa);ze(m,"RID","rpc"),ze(m,"SID",u.K),ze(m,"AID",u.T),ze(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(m,"TO",u.ja),ze(m,"TYPE","xmlhttp"),Pr(u,m),u.m&&u.o&&hs(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=ls(hn(m)),_.m=null,_.P=!0,Ca(_,u)}n.Za=function(){this.C!=null&&(this.C=null,Bn(this),uo(this),lt(19))};function co(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function ho(u,m){var _=null;if(u.g==m){co(u),La(u),u.g=null;var T=2}else if(Wt(u.h,m))_=m.D,Jl(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var M=u.B;T=ni(),yt(T,new Yi(T,_)),rr(u)}else di(u);else if(M=m.s,M==3||M==0&&0<m.X||!(T==1&&Ph(u,m)||T==2&&uo(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),M){case 1:Nr(u,5);break;case 4:Nr(u,10);break;case 3:Nr(u,6);break;default:Nr(u,2)}}}function lu(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Nr(u,m){if(u.j.info("Error code "+m),m==2){var _=S(u.fb,u),T=u.Xa;const M=!T;T=new kr(T||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||ui(T,"https"),ls(T),M?kh(T.toString(),_):su(T.toString(),_)}else lt(2);u.G=0,u.l&&u.l.sa(m),uu(u),ao(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function uu(u){if(u.G=0,u.ka=[],u.l){const m=Zl(u.h);(m.length!=0||u.i.length!=0)&&(O(u.ka,m),O(u.ka,u.i),u.h.i.length=0,W(u.i),u.i.length=0),u.l.ra()}}function cu(u,m,_){var T=_ instanceof kr?hn(_):new kr(_);if(T.g!="")m&&(T.g=m+"."+T.g),os(T,T.s);else{var M=f.location;T=M.protocol,m=m?m+"."+M.hostname:M.hostname,M=+M.port;var q=new kr(null);T&&ui(q,T),m&&(q.g=m),M&&os(q,M),_&&(q.l=_),T=q}return _=u.D,m=u.ya,_&&m&&ze(T,_,m),ze(T,"VER",u.la),Pr(u,T),T}function hu(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ye(new Cr({eb:_})):new Ye(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ma(){}n=Ma.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function fo(){}fo.prototype.g=function(u,m){return new Ht(u,m)};function Ht(u,m){gt.call(this),this.g=new Va(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!Z(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!Z(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new sr(this)}B(Ht,gt),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){xt(this.g)},Ht.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=wa(u),u=_);m.i.push(new Yl(m.Ya++,u)),m.G==3&&rr(m)},Ht.prototype.N=function(){this.g.l=null,delete this.j,xt(this.g),delete this.g,Ht.aa.N.call(this)};function du(u){Jn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}B(du,Jn);function fu(){Qi.call(this),this.status=1}B(fu,Qi);function sr(u){this.g=u}B(sr,Ma),sr.prototype.ua=function(){yt(this.g,"a")},sr.prototype.ta=function(u){yt(this.g,new du(u))},sr.prototype.sa=function(u){yt(this.g,new fu)},sr.prototype.ra=function(){yt(this.g,"b")},fo.prototype.createWebChannel=fo.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,Rw=function(){return new fo},Sw=function(){return ni()},Iw=Zn,bf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ji.NO_ERROR=0,Ji.TIMEOUT=8,Ji.HTTP_ERROR=6,wc=Ji,Hl.COMPLETE="complete",Tw=Hl,Ki.EventType=wn,wn.OPEN="a",wn.CLOSE="b",wn.ERROR="c",wn.MESSAGE="d",gt.prototype.listen=gt.prototype.K,hl=Ki,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,Ew=Ye}).apply(typeof lc<"u"?lc:typeof self<"u"?self:typeof window<"u"?window:{});const o_="@firebase/firestore",a_="4.9.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa="12.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new np("@firebase/firestore");function Vo(){return Oi.logLevel}function ue(n,...e){if(Oi.logLevel<=Ce.DEBUG){const t=e.map(fp);Oi.debug(`Firestore (${aa}): ${n}`,...t)}}function Gr(n,...e){if(Oi.logLevel<=Ce.ERROR){const t=e.map(fp);Oi.error(`Firestore (${aa}): ${n}`,...t)}}function Go(n,...e){if(Oi.logLevel<=Ce.WARN){const t=e.map(fp);Oi.warn(`Firestore (${aa}): ${n}`,...t)}}function fp(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Aw(n,s,t)}function Aw(n,e,t){let s=`FIRESTORE (${aa}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Gr(s),new Error(s)}function je(n,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,n||Aw(e,o,s)}function Ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends wr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class z1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(zt.UNAUTHENTICATED)))}shutdown(){}}class $1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class q1{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new $r;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new $r,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},f=p=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((p=>f(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new $r)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(je(typeof s.accessToken=="string",31837,{l:s}),new kw(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string",2055,{h:e}),new zt(e)}}class W1{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class H1{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new W1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(zt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class l_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class G1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Yt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){je(this.o===void 0,3512);const s=l=>{l.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ue("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new l_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(je(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new l_(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=K1(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function xe(n,e){return n<e?-1:n>e?1:0}function Df(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const o=n.charAt(s),l=e.charAt(s);if(o!==l)return cf(o)===cf(l)?xe(o,l):cf(o)?1:-1}return xe(n.length,e.length)}const Q1=55296,Y1=57343;function cf(n){const e=n.charCodeAt(0);return e>=Q1&&e<=Y1}function Ko(n,e,t){return n.length===e.length&&n.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="__name__";class ur{constructor(e,t,s){t===void 0?t=0:t>e.length&&we(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&we(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ur.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ur?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=ur.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return xe(e.length,t.length)}static compareSegments(e,t){const s=ur.isNumericId(e),o=ur.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?ur.extractNumericId(e).compare(ur.extractNumericId(t)):Df(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Us.fromString(e.substring(4,e.length-2))}}class He extends ur{construct(e,t,s){return new He(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie(H.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new He(t)}static emptyPath(){return new He([])}}const X1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends ur{construct(e,t,s){return new Dt(e,t,s)}static isValidIdentifier(e){return X1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Of}static keyField(){return new Dt([Of])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ie(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ie(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(l(),o++)}if(l(),h)throw new ie(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(He.fromString(e))}static fromName(e){return new me(He.fromString(e).popFirst(5))}static empty(){return new me(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return He.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new He(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(n,e,t){if(!t)throw new ie(H.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function J1(n,e,t,s){if(e===!0&&s===!0)throw new ie(H.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function u_(n){if(!me.isDocumentKey(n))throw new ie(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function c_(n){if(me.isDocumentKey(n))throw new ie(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function xw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function nh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":we(12329,{type:typeof n})}function un(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ie(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=nh(n);throw new ie(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(n,e){const t={typeString:n};return e&&(t.value=e),t}function jl(n,e){if(!xw(n))throw new ie(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const h=n[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ie(H.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=-62135596800,d_=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*d_);return new Qe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<h_)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/d_}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(jl(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-h_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:mt("string",Qe._jsonSchemaVersion),seconds:mt("number"),nanoseconds:mt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Qe(0,0))}static max(){return new Te(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=-1;function Z1(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(s===1e9?new Qe(t+1,0):new Qe(t,s));return new Bs(o,me.empty(),e)}function ek(n){return new Bs(n.readTime,n.key,Al)}class Bs{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Bs(Te.min(),me.empty(),Al)}static max(){return new Bs(Te.max(),me.empty(),Al)}}function tk(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=me.comparator(n.documentKey,e.documentKey),t!==0?t:xe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function la(n){if(n.code!==H.FAILED_PRECONDITION||n.message!==nk)throw n;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):G.reject(t)}static resolve(e){return new G(((t,s)=>{t(e)}))}static reject(e){return new G(((t,s)=>{s(e)}))}static waitFor(e){return new G(((t,s)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(p=>s(p)))})),h=!0,l===o&&t()}))}static or(e){let t=G.resolve(!1);for(const s of e)t=t.next((o=>o?G.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new G(((s,o)=>{const l=e.length,h=new Array(l);let f=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next((v=>{h[y]=v,++f,f===l&&s(h)}),(v=>o(v)))}}))}static doWhile(e,t){return new G(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function sk(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ua(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}rh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=-1;function sh(n){return n==null}function Lc(n){return n===0&&1/n==-1/0}function ik(n){return typeof n=="number"&&Number.isInteger(n)&&!Lc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw="";function ok(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=f_(e)),e=ak(n.get(t),e);return f_(e)}function ak(n,e){let t=e;const s=n.length;for(let o=0;o<s;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case Pw:t+="";break;default:t+=l}}return t}function f_(n){return n+Pw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Qs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Nw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.comparator=e,this.root=t||bt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uc(this.root,e,this.comparator,!1)}getReverseIterator(){return new uc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uc(this.root,e,this.comparator,!0)}}class uc{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??bt.RED,this.left=o??bt.EMPTY,this.right=l??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new bt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return bt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw we(43730,{key:this.key,value:this.value});if(this.right.isRed())throw we(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw we(27949);return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw we(57766)}get value(){throw we(16141)}get color(){throw we(16727)}get left(){throw we(29726)}get right(){throw we(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new bt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new m_(this.data.getIterator())}getIteratorFrom(e){return new m_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Et(this.comparator);return t.data=e,t}}class m_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new yn([])}unionWith(e){let t=new Et(Dt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new yn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ko(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new bw("Invalid base64 string: "+l):l}})(e);return new Ot(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const lk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zs(n){if(je(!!n,39018),typeof n=="string"){let e=0;const t=lk.exec(n);if(je(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ct(n.seconds),nanos:ct(n.nanos)}}function ct(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function $s(n){return typeof n=="string"?Ot.fromBase64String(n):Ot.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="server_timestamp",Ow="__type__",Vw="__previous_value__",Lw="__local_write_time__";function gp(n){return(n?.mapValue?.fields||{})[Ow]?.stringValue===Dw}function ih(n){const e=n.mapValue.fields[Vw];return gp(e)?ih(e):e}function kl(n){const e=zs(n.mapValue.fields[Lw].timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,t,s,o,l,h,f,p,y,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=v}}const Mc="(default)";class Cl{constructor(e,t){this.projectId=e,this.database=t||Mc}static empty(){return new Cl("","")}get isDefaultDatabase(){return this.database===Mc}isEqual(e){return e instanceof Cl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw="__type__",ck="__max__",cc={mapValue:{}},Uw="__vector__",Uc="value";function qs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?gp(n)?4:dk(n)?9007199254740991:hk(n)?10:11:we(28295,{value:n})}function vr(n,e){if(n===e)return!0;const t=qs(n);if(t!==qs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return kl(n).isEqual(kl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=zs(o.timestampValue),f=zs(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return $s(o.bytesValue).isEqual($s(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return ct(o.geoPointValue.latitude)===ct(l.geoPointValue.latitude)&&ct(o.geoPointValue.longitude)===ct(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ct(o.integerValue)===ct(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ct(o.doubleValue),f=ct(l.doubleValue);return h===f?Lc(h)===Lc(f):isNaN(h)&&isNaN(f)}return!1})(n,e);case 9:return Ko(n.arrayValue.values||[],e.arrayValue.values||[],vr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(p_(h)!==p_(f))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(f[p]===void 0||!vr(h[p],f[p])))return!1;return!0})(n,e);default:return we(52216,{left:n})}}function xl(n,e){return(n.values||[]).find((t=>vr(t,e)))!==void 0}function Qo(n,e){if(n===e)return 0;const t=qs(n),s=qs(e);if(t!==s)return xe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(n.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=ct(l.integerValue||l.doubleValue),p=ct(h.integerValue||h.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1})(n,e);case 3:return g_(n.timestampValue,e.timestampValue);case 4:return g_(kl(n),kl(e));case 5:return Df(n.stringValue,e.stringValue);case 6:return(function(l,h){const f=$s(l),p=$s(h);return f.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),p=h.split("/");for(let y=0;y<f.length&&y<p.length;y++){const v=xe(f[y],p[y]);if(v!==0)return v}return xe(f.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=xe(ct(l.latitude),ct(h.latitude));return f!==0?f:xe(ct(l.longitude),ct(h.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return y_(n.arrayValue,e.arrayValue);case 10:return(function(l,h){const f=l.fields||{},p=h.fields||{},y=f[Uc]?.arrayValue,v=p[Uc]?.arrayValue,E=xe(y?.values?.length||0,v?.values?.length||0);return E!==0?E:y_(y,v)})(n.mapValue,e.mapValue);case 11:return(function(l,h){if(l===cc.mapValue&&h===cc.mapValue)return 0;if(l===cc.mapValue)return 1;if(h===cc.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),y=h.fields||{},v=Object.keys(y);p.sort(),v.sort();for(let E=0;E<p.length&&E<v.length;++E){const S=Df(p[E],v[E]);if(S!==0)return S;const U=Qo(f[p[E]],y[v[E]]);if(U!==0)return U}return xe(p.length,v.length)})(n.mapValue,e.mapValue);default:throw we(23264,{he:t})}}function g_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return xe(n,e);const t=zs(n),s=zs(e),o=xe(t.seconds,s.seconds);return o!==0?o:xe(t.nanos,s.nanos)}function y_(n,e){const t=n.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Qo(t[o],s[o]);if(l)return l}return xe(t.length,s.length)}function Yo(n){return Vf(n)}function Vf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=zs(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return $s(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return me.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Vf(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Vf(t.fields[h])}`;return o+"}"})(n.mapValue):we(61005,{value:n})}function Ec(n){switch(qs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ih(n);return e?16+Ec(e):16;case 5:return 2*n.stringValue.length;case 6:return $s(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+Ec(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let o=0;return Qs(s.fields,((l,h)=>{o+=l.length+Ec(h)})),o})(n.mapValue);default:throw we(13486,{value:n})}}function __(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Lf(n){return!!n&&"integerValue"in n}function yp(n){return!!n&&"arrayValue"in n}function v_(n){return!!n&&"nullValue"in n}function w_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Tc(n){return!!n&&"mapValue"in n}function hk(n){return(n?.mapValue?.fields||{})[Mw]?.stringValue===Uw}function yl(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Qs(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=yl(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=yl(n.arrayValue.values[t]);return e}return{...n}}function dk(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ck}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.value=e}static empty(){return new ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Tc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=yl(t)}setAll(e){let t=Dt.emptyPath(),s={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=yl(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());Tc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Tc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Qs(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new ln(yl(this.value))}}function jw(n){const e=[];return Qs(n.fields,((t,s)=>{const o=new Dt([t]);if(Tc(s)){const l=jw(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new yn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t,s,o,l,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new $t(e,0,Te.min(),Te.min(),Te.min(),ln.empty(),0)}static newFoundDocument(e,t,s,o){return new $t(e,1,t,Te.min(),s,o,0)}static newNoDocument(e,t){return new $t(e,2,t,Te.min(),Te.min(),ln.empty(),0)}static newUnknownDocument(e,t){return new $t(e,3,t,Te.min(),Te.min(),ln.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t){this.position=e,this.inclusive=t}}function E_(n,e,t){let s=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?s=me.comparator(me.fromName(h.referenceValue),t.key):s=Qo(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function T_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!vr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t="asc"){this.field=e,this.dir=t}}function fk(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{}class pt extends Fw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new mk(e,t,s):t==="array-contains"?new _k(e,s):t==="in"?new vk(e,s):t==="not-in"?new wk(e,s):t==="array-contains-any"?new Ek(e,s):new pt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new gk(e,s):new yk(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Qo(t,this.value)):t!==null&&qs(this.value)===qs(t)&&this.matchesComparison(Qo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xn extends Fw{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Xn(e,t)}matches(e){return Bw(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Bw(n){return n.op==="and"}function zw(n){return pk(n)&&Bw(n)}function pk(n){for(const e of n.filters)if(e instanceof Xn)return!1;return!0}function Mf(n){if(n instanceof pt)return n.field.canonicalString()+n.op.toString()+Yo(n.value);if(zw(n))return n.filters.map((e=>Mf(e))).join(",");{const e=n.filters.map((t=>Mf(t))).join(",");return`${n.op}(${e})`}}function $w(n,e){return n instanceof pt?(function(s,o){return o instanceof pt&&s.op===o.op&&s.field.isEqual(o.field)&&vr(s.value,o.value)})(n,e):n instanceof Xn?(function(s,o){return o instanceof Xn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,f)=>l&&$w(h,o.filters[f])),!0):!1})(n,e):void we(19439)}function qw(n){return n instanceof pt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Yo(t.value)}`})(n):n instanceof Xn?(function(t){return t.op.toString()+" {"+t.getFilters().map(qw).join(" ,")+"}"})(n):"Filter"}class mk extends pt{constructor(e,t,s){super(e,t,s),this.key=me.fromName(s.referenceValue)}matches(e){const t=me.comparator(e.key,this.key);return this.matchesComparison(t)}}class gk extends pt{constructor(e,t){super(e,"in",t),this.keys=Ww("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class yk extends pt{constructor(e,t){super(e,"not-in",t),this.keys=Ww("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ww(n,e){return(e.arrayValue?.values||[]).map((t=>me.fromName(t.referenceValue)))}class _k extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return yp(t)&&xl(t.arrayValue,this.value)}}class vk extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&xl(this.value.arrayValue,t)}}class wk extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!xl(this.value.arrayValue,t)}}class Ek extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!yp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>xl(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e,t=null,s=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Te=null}}function I_(n,e=null,t=[],s=[],o=null,l=null,h=null){return new Tk(n,e,t,s,o,l,h)}function _p(n){const e=Ie(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Mf(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),sh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Yo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Yo(s))).join(",")),e.Te=t}return e.Te}function vp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!fk(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!$w(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!T_(n.startAt,e.startAt)&&T_(n.endAt,e.endAt)}function Uf(n){return me.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,t=null,s=[],o=[],l=null,h="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Ik(n,e,t,s,o,l,h,f){return new ca(n,e,t,s,o,l,h,f)}function oh(n){return new ca(n)}function S_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Hw(n){return n.collectionGroup!==null}function _l(n){const e=Ie(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new Et(Dt.comparator);return h.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new Pl(l,s))})),t.has(Dt.keyField().canonicalString())||e.Ie.push(new Pl(Dt.keyField(),s))}return e.Ie}function pr(n){const e=Ie(n);return e.Ee||(e.Ee=Sk(e,_l(n))),e.Ee}function Sk(n,e){if(n.limitType==="F")return I_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new Pl(o.field,l)}));const t=n.endAt?new jc(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new jc(n.startAt.position,n.startAt.inclusive):null;return I_(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function jf(n,e){const t=n.filters.concat([e]);return new ca(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Fc(n,e,t){return new ca(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ah(n,e){return vp(pr(n),pr(e))&&n.limitType===e.limitType}function Gw(n){return`${_p(pr(n))}|lt:${n.limitType}`}function Lo(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>qw(o))).join(", ")}]`),sh(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Yo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Yo(o))).join(",")),`Target(${s})`})(pr(n))}; limitType=${n.limitType})`}function lh(n,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):me.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,o){for(const l of _l(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(s,o){return!(s.startAt&&!(function(h,f,p){const y=E_(h,f,p);return h.inclusive?y<=0:y<0})(s.startAt,_l(s),o)||s.endAt&&!(function(h,f,p){const y=E_(h,f,p);return h.inclusive?y>=0:y>0})(s.endAt,_l(s),o))})(n,e)}function Rk(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Kw(n){return(e,t)=>{let s=!1;for(const o of _l(n)){const l=Ak(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function Ak(n,e,t){const s=n.field.isKeyField()?me.comparator(e.key,t.key):(function(l,h,f){const p=h.data.field(l),y=f.data.field(l);return p!==null&&y!==null?Qo(p,y):we(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return we(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Qs(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return Nw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=new nt(me.comparator);function Kr(){return kk}const Qw=new nt(me.comparator);function dl(...n){let e=Qw;for(const t of n)e=e.insert(t.key,t);return e}function Yw(n){let e=Qw;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Ci(){return vl()}function Xw(){return vl()}function vl(){return new ji((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Ck=new nt(me.comparator),xk=new Et(me.comparator);function Pe(...n){let e=xk;for(const t of n)e=e.add(t);return e}const Pk=new Et(xe);function Nk(){return Pk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lc(e)?"-0":e}}function Jw(n){return{integerValue:""+n}}function bk(n,e){return ik(e)?Jw(e):wp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this._=void 0}}function Dk(n,e,t){return n instanceof Nl?(function(o,l){const h={fields:{[Ow]:{stringValue:Dw},[Lw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&gp(l)&&(l=ih(l)),l&&(h.fields[Vw]=l),{mapValue:h}})(t,e):n instanceof Xo?e0(n,e):n instanceof Jo?t0(n,e):(function(o,l){const h=Zw(o,l),f=R_(h)+R_(o.Ae);return Lf(h)&&Lf(o.Ae)?Jw(f):wp(o.serializer,f)})(n,e)}function Ok(n,e,t){return n instanceof Xo?e0(n,e):n instanceof Jo?t0(n,e):t}function Zw(n,e){return n instanceof Bc?(function(s){return Lf(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class Nl extends uh{}class Xo extends uh{constructor(e){super(),this.elements=e}}function e0(n,e){const t=n0(e);for(const s of n.elements)t.some((o=>vr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Jo extends uh{constructor(e){super(),this.elements=e}}function t0(n,e){let t=n0(e);for(const s of n.elements)t=t.filter((o=>!vr(o,s)));return{arrayValue:{values:t}}}class Bc extends uh{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function R_(n){return ct(n.integerValue||n.doubleValue)}function n0(n){return yp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,t){this.field=e,this.transform=t}}function Vk(n,e){return n.field.isEqual(e.field)&&(function(s,o){return s instanceof Xo&&o instanceof Xo||s instanceof Jo&&o instanceof Jo?Ko(s.elements,o.elements,vr):s instanceof Bc&&o instanceof Bc?vr(s.Ae,o.Ae):s instanceof Nl&&o instanceof Nl})(n.transform,e.transform)}class Lk{constructor(e,t){this.version=e,this.transformResults=t}}class bn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bn}static exists(e){return new bn(void 0,e)}static updateTime(e){return new bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ic(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ch{}function r0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Tp(n.key,bn.none()):new Fl(n.key,n.data,bn.none());{const t=n.data,s=ln.empty();let o=new Et(Dt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Ys(n.key,s,new yn(o.toArray()),bn.none())}}function Mk(n,e,t){n instanceof Fl?(function(o,l,h){const f=o.value.clone(),p=k_(o.fieldTransforms,l,h.transformResults);f.setAll(p),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(n,e,t):n instanceof Ys?(function(o,l,h){if(!Ic(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=k_(o.fieldTransforms,l,h.transformResults),p=l.data;p.setAll(s0(o)),p.setAll(f),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()})(n,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function wl(n,e,t,s){return n instanceof Fl?(function(l,h,f,p){if(!Ic(l.precondition,h))return f;const y=l.value.clone(),v=C_(l.fieldTransforms,p,h);return y.setAll(v),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null})(n,e,t,s):n instanceof Ys?(function(l,h,f,p){if(!Ic(l.precondition,h))return f;const y=C_(l.fieldTransforms,p,h),v=h.data;return v.setAll(s0(l)),v.setAll(y),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((E=>E.field)))})(n,e,t,s):(function(l,h,f){return Ic(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(n,e,t)}function Uk(n,e){let t=null;for(const s of n.fieldTransforms){const o=e.data.field(s.field),l=Zw(s.transform,o||null);l!=null&&(t===null&&(t=ln.empty()),t.set(s.field,l))}return t||null}function A_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ko(s,o,((l,h)=>Vk(l,h)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Fl extends ch{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ys extends ch{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function s0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function k_(n,e,t){const s=new Map;je(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,f=e.data.field(l.field);s.set(l.field,Ok(h,f,t[o]))}return s}function C_(n,e,t){const s=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);s.set(o.field,Dk(l,h,e))}return s}class Tp extends ch{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jk extends ch{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&Mk(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=wl(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=wl(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Xw();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const p=r0(h,f);p!==null&&s.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(Te.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&Ko(this.mutations,e.mutations,((t,s)=>A_(t,s)))&&Ko(this.baseMutations,e.baseMutations,((t,s)=>A_(t,s)))}}class Ip{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){je(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return Ck})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new Ip(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft,Oe;function $k(n){switch(n){case H.OK:return we(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return we(15467,{code:n})}}function i0(n){if(n===void 0)return Gr("GRPC error has no .code"),H.UNKNOWN;switch(n){case ft.OK:return H.OK;case ft.CANCELLED:return H.CANCELLED;case ft.UNKNOWN:return H.UNKNOWN;case ft.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case ft.INTERNAL:return H.INTERNAL;case ft.UNAVAILABLE:return H.UNAVAILABLE;case ft.UNAUTHENTICATED:return H.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case ft.NOT_FOUND:return H.NOT_FOUND;case ft.ALREADY_EXISTS:return H.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return H.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case ft.ABORTED:return H.ABORTED;case ft.OUT_OF_RANGE:return H.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return H.UNIMPLEMENTED;case ft.DATA_LOSS:return H.DATA_LOSS;default:return we(39323,{code:n})}}(Oe=ft||(ft={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=new Us([4294967295,4294967295],0);function x_(n){const e=qk().encode(n),t=new ww;return t.update(e),new Uint8Array(t.digest())}function P_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Us([t,s],0),new Us([o,l],0)]}class Sp{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new fl(`Invalid padding: ${t}`);if(s<0)throw new fl(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new fl(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new fl(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Us.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(Us.fromNumber(s)));return o.compare(Wk)===1&&(o=new Us([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=x_(e),[s,o]=P_(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Sp(l,o,t);return s.forEach((f=>h.insert(f))),h}insert(e){if(this.ge===0)return;const t=x_(e),[s,o]=P_(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class fl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Bl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new hh(Te.min(),o,new nt(xe),Kr(),Pe())}}class Bl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Bl(s,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class o0{constructor(e,t){this.targetId=e,this.Ce=t}}class a0{constructor(e,t,s=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class N_{constructor(){this.ve=0,this.Fe=b_(),this.Me=Ot.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Pe(),t=Pe(),s=Pe();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:we(38017,{changeType:l})}})),new Bl(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=b_()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,je(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Hk{constructor(e){this.Ge=e,this.ze=new Map,this.je=Kr(),this.Je=hc(),this.He=hc(),this.Ye=new nt(xe)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:we(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(Uf(l))if(s===0){const h=new me(l.path);this.et(t,h,$t.newNoDocument(h,Te.min()))}else je(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const f=this.ut(e),p=f?this.ct(f,e,h):1;if(p!==0){this.it(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=$s(s).toUint8Array()}catch(p){if(p instanceof bw)return Go("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new Sp(h,o,l)}catch(p){return Go(p instanceof fl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.ge===0?null:f}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.Ge.ht(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,h)=>{const f=this.ot(h);if(f){if(l.current&&Uf(f.target)){const p=new me(f.target.path);this.It(p).has(h)||this.Et(h,p)||this.et(h,p,$t.newNoDocument(p,e))}l.Be&&(t.set(h,l.ke()),l.qe())}}));let s=Pe();this.He.forEach(((l,h)=>{let f=!0;h.forEachWhile((p=>{const y=this.ot(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(s=s.add(l))})),this.je.forEach(((l,h)=>h.setReadTime(e)));const o=new hh(e,t,this.Ye,this.je,s);return this.je=Kr(),this.Je=hc(),this.He=hc(),this.Ye=new nt(xe),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new N_,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Et(xe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Et(xe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new N_),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function hc(){return new nt(me.comparator)}function b_(){return new nt(me.comparator)}const Gk={asc:"ASCENDING",desc:"DESCENDING"},Kk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Qk={and:"AND",or:"OR"};class Yk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ff(n,e){return n.useProto3Json||sh(e)?e:{value:e}}function zc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function l0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Xk(n,e){return zc(n,e.toTimestamp())}function mr(n){return je(!!n,49232),Te.fromTimestamp((function(t){const s=zs(t);return new Qe(s.seconds,s.nanos)})(n))}function Rp(n,e){return Bf(n,e).canonicalString()}function Bf(n,e){const t=(function(o){return new He(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function u0(n){const e=He.fromString(n);return je(p0(e),10190,{key:e.toString()}),e}function zf(n,e){return Rp(n.databaseId,e.path)}function hf(n,e){const t=u0(e);if(t.get(1)!==n.databaseId.projectId)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new me(h0(t))}function c0(n,e){return Rp(n.databaseId,e)}function Jk(n){const e=u0(n);return e.length===4?He.emptyPath():h0(e)}function $f(n){return new He(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function h0(n){return je(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function D_(n,e,t){return{name:zf(n,e),fields:t.value.mapValue.fields}}function Zk(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:we(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,v){return y.useProto3Json?(je(v===void 0||typeof v=="string",58123),Ot.fromBase64String(v||"")):(je(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Ot.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(y){const v=y.code===void 0?H.UNKNOWN:i0(y.code);return new ie(v,y.message||"")})(h);t=new a0(s,o,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=hf(n,s.document.name),l=mr(s.document.updateTime),h=s.document.createTime?mr(s.document.createTime):Te.min(),f=new ln({mapValue:{fields:s.document.fields}}),p=$t.newFoundDocument(o,l,h,f),y=s.targetIds||[],v=s.removedTargetIds||[];t=new Sc(y,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=hf(n,s.document),l=s.readTime?mr(s.readTime):Te.min(),h=$t.newNoDocument(o,l),f=s.removedTargetIds||[];t=new Sc([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=hf(n,s.document),l=s.removedTargetIds||[];t=new Sc([],l,o,null)}else{if(!("filter"in e))return we(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new zk(o,l),f=s.targetId;t=new o0(f,h)}}return t}function eC(n,e){let t;if(e instanceof Fl)t={update:D_(n,e.key,e.value)};else if(e instanceof Tp)t={delete:zf(n,e.key)};else if(e instanceof Ys)t={update:D_(n,e.key,e.data),updateMask:uC(e.fieldMask)};else{if(!(e instanceof jk))return we(16599,{Vt:e.type});t={verify:zf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const f=h.transform;if(f instanceof Nl)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Xo)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Jo)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Bc)return{fieldPath:h.field.canonicalString(),increment:f.Ae};throw we(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:Xk(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:we(27497)})(n,e.precondition)),t}function tC(n,e){return n&&n.length>0?(je(e!==void 0,14353),n.map((t=>(function(o,l){let h=o.updateTime?mr(o.updateTime):mr(l);return h.isEqual(Te.min())&&(h=mr(l)),new Lk(h,o.transformResults||[])})(t,e)))):[]}function nC(n,e){return{documents:[c0(n,e.path)]}}function rC(n,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=c0(n,o);const l=(function(y){if(y.length!==0)return f0(Xn.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(y){if(y.length!==0)return y.map((v=>(function(S){return{field:Mo(S.field),direction:oC(S.dir)}})(v)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Ff(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:t,parent:o}}function sC(n){let e=Jk(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){je(s===1,65062);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=(function(E){const S=d0(E);return S instanceof Xn&&zw(S)?S.getFilters():[S]})(t.where));let h=[];t.orderBy&&(h=(function(E){return E.map((S=>(function(B){return new Pl(Uo(B.field),(function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(B.direction))})(S)))})(t.orderBy));let f=null;t.limit&&(f=(function(E){let S;return S=typeof E=="object"?E.value:E,sh(S)?null:S})(t.limit));let p=null;t.startAt&&(p=(function(E){const S=!!E.before,U=E.values||[];return new jc(U,S)})(t.startAt));let y=null;return t.endAt&&(y=(function(E){const S=!E.before,U=E.values||[];return new jc(U,S)})(t.endAt)),Ik(e,o,h,l,f,"F",p,y)}function iC(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function d0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Uo(t.unaryFilter.field);return pt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Uo(t.unaryFilter.field);return pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Uo(t.unaryFilter.field);return pt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Uo(t.unaryFilter.field);return pt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return we(61313);default:return we(60726)}})(n):n.fieldFilter!==void 0?(function(t){return pt.create(Uo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return we(58110);default:return we(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Xn.create(t.compositeFilter.filters.map((s=>d0(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we(1026)}})(t.compositeFilter.op))})(n):we(30097,{filter:n})}function oC(n){return Gk[n]}function aC(n){return Kk[n]}function lC(n){return Qk[n]}function Mo(n){return{fieldPath:n.canonicalString()}}function Uo(n){return Dt.fromServerFormat(n.fieldPath)}function f0(n){return n instanceof pt?(function(t){if(t.op==="=="){if(w_(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NAN"}};if(v_(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(w_(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NOT_NAN"}};if(v_(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mo(t.field),op:aC(t.op),value:t.value}}})(n):n instanceof Xn?(function(t){const s=t.getFilters().map((o=>f0(o)));return s.length===1?s[0]:{compositeFilter:{op:lC(t.op),filters:s}}})(n):we(54877,{filter:n})}function uC(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function p0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t,s,o,l=Te.min(),h=Te.min(),f=Ot.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new Os(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Os(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Os(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Os(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.yt=e}}function hC(n){const e=sC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Fc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(){this.Cn=new fC}addToCollectionParentIndex(e,t){return this.Cn.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Bs.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Bs.min())}updateCollectionGroup(e,t,s){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class fC{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Et(He.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Et(He.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},m0=41943040;class an{static withCacheSize(e){return new an(e,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an(m0,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Zo(0)}static cr(){return new Zo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="LruGarbageCollector",pC=1048576;function L_([n,e],[t,s]){const o=xe(n,t);return o===0?xe(e,s):o}class mC{constructor(e){this.Ir=e,this.buffer=new Et(L_),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();L_(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class gC{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ue(V_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ua(t)?ue(V_,"Ignoring IndexedDB error during garbage collection: ",t):await la(t)}await this.Vr(3e5)}))}}class yC{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return G.resolve(rh.ce);const s=new mC(t);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(O_)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),O_):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,l,h,f,p,y;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,h=Date.now(),this.nthSequenceNumber(e,o)))).next((E=>(s=E,f=Date.now(),this.removeTargets(e,s,t)))).next((E=>(l=E,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((E=>(y=Date.now(),Vo()<=Ce.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-v}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${E} documents in `+(y-p)+`ms
Total Duration: ${y-v}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:E}))))}}function _C(n,e){return new yC(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(){this.changes=new ji((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?G.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&wl(s.mutation,o,yn.empty(),Qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Pe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Pe()){const o=Ci();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=dl();return l.forEach(((f,p)=>{h=h.insert(f,p.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=Ci();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Pe())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,s,o){let l=Kr();const h=vl(),f=(function(){return vl()})();return t.forEach(((p,y)=>{const v=s.get(y.key);o.has(y.key)&&(v===void 0||v.mutation instanceof Ys)?l=l.insert(y.key,y):v!==void 0?(h.set(y.key,v.mutation.getFieldMask()),wl(v.mutation,y,v.mutation.getFieldMask(),Qe.now())):h.set(y.key,yn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((y,v)=>h.set(y,v))),t.forEach(((y,v)=>f.set(y,new wC(v,h.get(y)??null)))),f)))}recalculateAndSaveOverlays(e,t){const s=vl();let o=new nt(((h,f)=>h-f)),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((p=>{const y=t.get(p);if(y===null)return;let v=s.get(p)||yn.empty();v=f.applyToLocalView(y,v),s.set(p,v);const E=(o.get(f.batchId)||Pe()).add(p);o=o.insert(f.batchId,E)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),y=p.key,v=p.value,E=Xw();v.forEach((S=>{if(!l.has(S)){const U=r0(t.get(S),s.get(S));U!==null&&E.set(S,U),l=l.add(S)}})),h.push(this.documentOverlayCache.saveOverlays(e,y,E))}return G.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return me.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Hw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):G.resolve(Ci());let f=Al,p=l;return h.next((y=>G.forEach(y,((v,E)=>(f<E.largestBatchId&&(f=E.largestBatchId),l.get(v)?G.resolve():this.remoteDocumentCache.getEntry(e,v).next((S=>{p=p.insert(v,S)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,p,y,Pe()))).next((v=>({batchId:f,changes:Yw(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new me(t)).next((s=>{let o=dl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=dl();return this.indexManager.getCollectionParents(e,l).next((f=>G.forEach(f,(p=>{const y=(function(E,S){return new ca(S,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next((v=>{v.forEach(((E,S)=>{h=h.insert(E,S)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((p,y)=>{const v=y.getKey();h.get(v)===null&&(h=h.insert(v,$t.newInvalidDocument(v)))}));let f=dl();return h.forEach(((p,y)=>{const v=l.get(p);v!==void 0&&wl(v.mutation,y,yn.empty(),Qe.now()),lh(t,y)&&(f=f.insert(p,y))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return G.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:mr(o.createTime)}})(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:hC(o.bundledQuery),readTime:mr(o.readTime)}})(t)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(){this.overlays=new nt(me.comparator),this.qr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ci();return G.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.St(e,t,l)})),G.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(s)),G.resolve()}getOverlaysForCollection(e,t,s){const o=Ci(),l=t.length+1,h=new me(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const p=f.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>s&&o.set(p.getKey(),p)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new nt(((y,v)=>y-v));const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>s){let v=l.get(y.largestBatchId);v===null&&(v=Ci(),l=l.insert(y.largestBatchId,v)),v.set(y.getKey(),y)}}const f=Ci(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,v)=>f.set(y,v))),!(f.size()>=o)););return G.resolve(f)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new Bk(t,s));let l=this.qr.get(t);l===void 0&&(l=Pe(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(){this.Qr=new Et(kt.$r),this.Ur=new Et(kt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new kt(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new kt(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new me(new He([])),s=new kt(t,e),o=new kt(t,e+1),l=[];return this.Ur.forEachInRange([s,o],(h=>{this.Gr(h),l.push(h.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new me(new He([])),s=new kt(t,e),o=new kt(t,e+1);let l=Pe();return this.Ur.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new kt(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class kt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return me.comparator(e.key,t.key)||xe(e.Yr,t.Yr)}static Kr(e,t){return xe(e.Yr,t.Yr)||me.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Et(kt.$r)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new Fk(l,t,s,o);this.mutationQueue.push(h);for(const f of o)this.Zr=this.Zr.add(new kt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return G.resolve(h)}lookupMutationBatch(e,t){return G.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),l=o<0?0:o;return G.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?mp:this.tr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new kt(t,0),o=new kt(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,o],(h=>{const f=this.Xr(h.Yr);l.push(f)})),G.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Et(xe);return t.forEach((o=>{const l=new kt(o,0),h=new kt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,h],(f=>{s=s.add(f.Yr)}))})),G.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;me.isDocumentKey(l)||(l=l.child(""));const h=new kt(new me(l),0);let f=new Et(xe);return this.Zr.forEachWhile((p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(f=f.add(p.Yr)),!0)}),h),G.resolve(this.ti(f))}ti(e){const t=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){je(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return G.forEach(t.mutations,(o=>{const l=new kt(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new kt(t,0),o=this.Zr.firstAfterOrEqual(s);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.ri=e,this.docs=(function(){return new nt(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return G.resolve(s?s.document.mutableCopy():$t.newInvalidDocument(t))}getEntries(e,t){let s=Kr();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():$t.newInvalidDocument(o))})),G.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Kr();const h=t.path,f=new me(h.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:y,value:{document:v}}=p.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||tk(ek(v),s)<=0||(o.has(v.key)||lh(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return G.resolve(l)}getAllFromCollectionGroup(e,t,s,o){we(9500)}ii(e,t){return G.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new kC(this)}getSize(e){return G.resolve(this.size)}}class kC extends vC{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),G.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.persistence=e,this.si=new ji((t=>_p(t)),vp),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.oi=0,this._i=new Ap,this.targetCount=0,this.ai=Zo.ur()}forEachTarget(e,t){return this.si.forEach(((s,o)=>t(o))),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),G.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Zo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Pr(t),G.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.si.forEach(((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.si.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),G.waitFor(l).next((()=>o))}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return G.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),G.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),G.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return G.resolve(s)}containsKey(e,t){return G.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,t){this.ui={},this.overlays={},this.ci=new rh(0),this.li=!1,this.li=!0,this.hi=new SC,this.referenceDelegate=e(this),this.Pi=new CC(this),this.indexManager=new dC,this.remoteDocumentCache=(function(o){return new AC(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new cC(t),this.Ii=new TC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new IC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new RC(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){ue("MemoryPersistence","Starting transaction:",e);const o=new xC(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ai(e,t){return G.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class xC extends rk{constructor(e){super(),this.currentSequenceNumber=e}}class kp{constructor(e){this.persistence=e,this.Ri=new Ap,this.Vi=null}static mi(e){return new kp(e)}get fi(){if(this.Vi)return this.Vi;throw we(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),G.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),G.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.fi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.fi,(s=>{const o=me.fromPath(s);return this.gi(e,o).next((l=>{l||t.removeEntry(o,Te.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return G.or([()=>G.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class $c{constructor(e,t){this.persistence=e,this.pi=new ji((s=>ok(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=_C(this,t)}static mi(e,t){return new $c(e,t)}Ei(){}di(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return G.forEach(this.pi,((s,o)=>this.br(e,s,o).next((l=>l?G.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((f=>{f||(s++,l.removeEntry(h,Te.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),G.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),G.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ec(e.data.value)),t}br(e,t,s){return G.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return G.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=Pe(),o=Pe();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Cp(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return rS()?8:sk(qt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.ys(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ws(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new PC;return this.Ss(e,t,h).next((f=>{if(l.result=f,this.Vs)return this.bs(e,t,h,f.size)}))})).next((()=>l.result))}bs(e,t,s,o){return s.documentReadCount<this.fs?(Vo()<=Ce.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",Lo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),G.resolve()):(Vo()<=Ce.DEBUG&&ue("QueryEngine","Query:",Lo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(Vo()<=Ce.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",Lo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pr(t))):G.resolve())}ys(e,t){if(S_(t))return G.resolve(null);let s=pr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Fc(t,null,"F"),s=pr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=Pe(...l);return this.ps.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,s).next((p=>{const y=this.Ds(t,f);return this.Cs(t,y,h,p.readTime)?this.ys(e,Fc(t,null,"F")):this.vs(e,y,t,p)}))))})))))}ws(e,t,s,o){return S_(t)||o.isEqual(Te.min())?G.resolve(null):this.ps.getDocuments(e,s).next((l=>{const h=this.Ds(t,l);return this.Cs(t,h,s,o)?G.resolve(null):(Vo()<=Ce.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Lo(t)),this.vs(e,h,t,Z1(o,Al)).next((f=>f)))}))}Ds(e,t){let s=new Et(Kw(e));return t.forEach(((o,l)=>{lh(e,l)&&(s=s.add(l))})),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Ss(e,t,s){return Vo()<=Ce.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",Lo(t)),this.ps.getDocumentsMatchingQuery(e,t,Bs.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="LocalStore",bC=3e8;class DC{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new nt(xe),this.xs=new ji((l=>_p(l)),vp),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new EC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function OC(n,e,t,s){return new DC(n,e,t,s)}async function y0(n,e){const t=Ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],f=[];let p=Pe();for(const y of o){h.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}for(const y of l){f.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(s,p).next((y=>({Ls:y,removedBatchIds:h,addedBatchIds:f})))}))}))}function VC(n,e){const t=Ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(f,p,y,v){const E=y.batch,S=E.keys();let U=G.resolve();return S.forEach((B=>{U=U.next((()=>v.getEntry(p,B))).next((W=>{const O=y.docVersions.get(B);je(O!==null,48541),W.version.compareTo(O)<0&&(E.applyToRemoteDocument(W,y),W.isValidDocument()&&(W.setReadTime(y.commitVersion),v.addEntry(W)))}))})),U.next((()=>f.mutationQueue.removeMutationBatch(p,E)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(f){let p=Pe();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(p=p.add(f.batch.mutations[y].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function _0(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function LC(n,e){const t=Ie(n),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const f=[];e.targetChanges.forEach(((v,E)=>{const S=o.get(E);if(!S)return;f.push(t.Pi.removeMatchingKeys(l,v.removedDocuments,E).next((()=>t.Pi.addMatchingKeys(l,v.addedDocuments,E))));let U=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(E)!==null?U=U.withResumeToken(Ot.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):v.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(v.resumeToken,s)),o=o.insert(E,U),(function(W,O,ee){return W.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=bC?!0:ee.addedDocuments.size+ee.modifiedDocuments.size+ee.removedDocuments.size>0})(S,U,v)&&f.push(t.Pi.updateTargetData(l,U))}));let p=Kr(),y=Pe();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))})),f.push(MC(l,h,e.documentUpdates).next((v=>{p=v.ks,y=v.qs}))),!s.isEqual(Te.min())){const v=t.Pi.getLastRemoteSnapshotVersion(l).next((E=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s)));f.push(v)}return G.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,y))).next((()=>p))})).then((l=>(t.Ms=o,l)))}function MC(n,e,t){let s=Pe(),o=Pe();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let h=Kr();return t.forEach(((f,p)=>{const y=l.get(f);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),p.isNoDocument()&&p.version.isEqual(Te.min())?(e.removeEntry(f,p.readTime),h=h.insert(f,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),h=h.insert(f,p)):ue(xp,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",p.version)})),{ks:h,qs:o}}))}function UC(n,e){const t=Ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=mp),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function jC(n,e){const t=Ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Pi.getTargetData(s,e).next((l=>l?(o=l,G.resolve(o)):t.Pi.allocateTargetId(s).next((h=>(o=new Os(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function qf(n,e,t){const s=Ie(n),o=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!ua(h))throw h;ue(xp,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function M_(n,e,t){const s=Ie(n);let o=Te.min(),l=Pe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(p,y,v){const E=Ie(p),S=E.xs.get(v);return S!==void 0?G.resolve(E.Ms.get(S)):E.Pi.getTargetData(y,v)})(s,h,pr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,f.targetId).next((p=>{l=p}))})).next((()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:Te.min(),t?l:Pe()))).next((f=>(FC(s,Rk(e),f),{documents:f,Qs:l})))))}function FC(n,e,t){let s=n.Os.get(e)||Te.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Os.set(e,s)}class U_{constructor(){this.activeTargetIds=Nk()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class BC{constructor(){this.Mo=new U_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new U_,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="ConnectivityMonitor";class F_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ue(j_,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ue(j_,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dc=null;function Wf(){return dc===null?dc=(function(){return 268435456+Math.round(2147483648*Math.random())})():dc++,"0x"+dc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="RestConnection",$C={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class qC{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Mc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,l){const h=Wf(),f=this.zo(e,t.toUriEncodedString());ue(df,`Sending RPC '${e}' ${h}:`,f,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,o,l);const{host:y}=new URL(f),v=Ks(y);return this.Jo(e,f,p,s,v).then((E=>(ue(df,`Received RPC '${e}' ${h}: `,E),E)),(E=>{throw Go(df,`RPC '${e}' ${h} failed with error: `,E,"url: ",f,"request:",s),E}))}Ho(e,t,s,o,l,h){return this.Go(e,t,s,o,l)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+aa})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}zo(e,t){const s=$C[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="WebChannelConnection";class HC extends qC{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,l){const h=Wf();return new Promise(((f,p)=>{const y=new Ew;y.setWithCredentials(!0),y.listenOnce(Tw.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case wc.NO_ERROR:const E=y.getResponseJson();ue(Bt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(E)),f(E);break;case wc.TIMEOUT:ue(Bt,`RPC '${e}' ${h} timed out`),p(new ie(H.DEADLINE_EXCEEDED,"Request time out"));break;case wc.HTTP_ERROR:const S=y.getStatus();if(ue(Bt,`RPC '${e}' ${h} failed with status:`,S,"response text:",y.getResponseText()),S>0){let U=y.getResponseJson();Array.isArray(U)&&(U=U[0]);const B=U?.error;if(B&&B.status&&B.message){const W=(function(ee){const Z=ee.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(Z)>=0?Z:H.UNKNOWN})(B.status);p(new ie(W,B.message))}else p(new ie(H.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new ie(H.UNAVAILABLE,"Connection failed."));break;default:we(9055,{l_:e,streamId:h,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{ue(Bt,`RPC '${e}' ${h} completed.`)}}));const v=JSON.stringify(o);ue(Bt,`RPC '${e}' ${h} sending request:`,o),y.send(t,"POST",v,s,15)}))}T_(e,t,s){const o=Wf(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Rw(),f=Sw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const v=l.join("");ue(Bt,`Creating RPC '${e}' stream ${o}: ${v}`,p);const E=h.createWebChannel(v,p);this.I_(E);let S=!1,U=!1;const B=new WC({Yo:O=>{U?ue(Bt,`Not sending because RPC '${e}' stream ${o} is closed:`,O):(S||(ue(Bt,`Opening RPC '${e}' stream ${o} transport.`),E.open(),S=!0),ue(Bt,`RPC '${e}' stream ${o} sending:`,O),E.send(O))},Zo:()=>E.close()}),W=(O,ee,Z)=>{O.listen(ee,(Q=>{try{Z(Q)}catch(re){setTimeout((()=>{throw re}),0)}}))};return W(E,hl.EventType.OPEN,(()=>{U||(ue(Bt,`RPC '${e}' stream ${o} transport opened.`),B.o_())})),W(E,hl.EventType.CLOSE,(()=>{U||(U=!0,ue(Bt,`RPC '${e}' stream ${o} transport closed`),B.a_(),this.E_(E))})),W(E,hl.EventType.ERROR,(O=>{U||(U=!0,Go(Bt,`RPC '${e}' stream ${o} transport errored. Name:`,O.name,"Message:",O.message),B.a_(new ie(H.UNAVAILABLE,"The operation could not be completed")))})),W(E,hl.EventType.MESSAGE,(O=>{if(!U){const ee=O.data[0];je(!!ee,16349);const Z=ee,Q=Z?.error||Z[0]?.error;if(Q){ue(Bt,`RPC '${e}' stream ${o} received error:`,Q);const re=Q.status;let Se=(function(R){const C=ft[R];if(C!==void 0)return i0(C)})(re),ae=Q.message;Se===void 0&&(Se=H.INTERNAL,ae="Unknown error status: "+re+" with message "+Q.message),U=!0,B.a_(new ie(Se,ae)),E.close()}else ue(Bt,`RPC '${e}' stream ${o} received:`,ee),B.u_(ee)}})),W(f,Iw.STAT_EVENT,(O=>{O.stat===bf.PROXY?ue(Bt,`RPC '${e}' stream ${o} detected buffering proxy`):O.stat===bf.NOPROXY&&ue(Bt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{B.__()}),0),B}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function ff(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(n){return new Yk(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&ue("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="PersistentStream";class w0{constructor(e,t,s,o,l,h,f,p){this.Mi=e,this.S_=s,this.b_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new v0(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Gr(t.toString()),Gr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new ie(H.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ue(B_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ue(B_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class GC extends w0{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Zk(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Te.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Te.min():h.readTime?mr(h.readTime):Te.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=$f(this.serializer),t.addTarget=(function(l,h){let f;const p=h.target;if(f=Uf(p)?{documents:nC(l,p)}:{query:rC(l,p).ft},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=l0(l,h.resumeToken);const y=Ff(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(Te.min())>0){f.readTime=zc(l,h.snapshotVersion.toTimestamp());const y=Ff(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const s=iC(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=$f(this.serializer),t.removeTarget=e,this.q_(t)}}class KC extends w0{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=tC(e.writeResults,e.commitTime),s=mr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=$f(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>eC(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{}class YC extends QC{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Go(e,Bf(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ie(H.UNKNOWN,l.toString())}))}Ho(e,t,s,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Ho(e,Bf(t,s),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie(H.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class XC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Gr(t),this.aa=!1):ue("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="RemoteStore";class JC{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((h=>{s.enqueueAndForget((async()=>{Fi(this)&&(ue(Vi,"Restarting streams for network reachability change."),await(async function(p){const y=Ie(p);y.Ea.add(4),await zl(y),y.Ra.set("Unknown"),y.Ea.delete(4),await fh(y)})(this))}))})),this.Ra=new XC(s,o)}}async function fh(n){if(Fi(n))for(const e of n.da)await e(!0)}async function zl(n){for(const e of n.da)await e(!1)}function E0(n,e){const t=Ie(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Dp(t)?bp(t):ha(t).O_()&&Np(t,e))}function Pp(n,e){const t=Ie(n),s=ha(t);t.Ia.delete(e),s.O_()&&T0(t,e),t.Ia.size===0&&(s.O_()?s.L_():Fi(t)&&t.Ra.set("Unknown"))}function Np(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ha(n).Y_(e)}function T0(n,e){n.Va.Ue(e),ha(n).Z_(e)}function bp(n){n.Va=new Hk({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ha(n).start(),n.Ra.ua()}function Dp(n){return Fi(n)&&!ha(n).x_()&&n.Ia.size>0}function Fi(n){return Ie(n).Ea.size===0}function I0(n){n.Va=void 0}async function ZC(n){n.Ra.set("Online")}async function ex(n){n.Ia.forEach(((e,t)=>{Np(n,e)}))}async function tx(n,e){I0(n),Dp(n)?(n.Ra.ha(e),bp(n)):n.Ra.set("Unknown")}async function nx(n,e,t){if(n.Ra.set("Online"),e instanceof a0&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ia.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ia.delete(f),o.Va.removeTarget(f))})(n,e)}catch(s){ue(Vi,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await qc(n,s)}else if(e instanceof Sc?n.Va.Ze(e):e instanceof o0?n.Va.st(e):n.Va.tt(e),!t.isEqual(Te.min()))try{const s=await _0(n.localStore);t.compareTo(s)>=0&&await(function(l,h){const f=l.Va.Tt(h);return f.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.Ia.get(y);v&&l.Ia.set(y,v.withResumeToken(p.resumeToken,h))}})),f.targetMismatches.forEach(((p,y)=>{const v=l.Ia.get(p);if(!v)return;l.Ia.set(p,v.withResumeToken(Ot.EMPTY_BYTE_STRING,v.snapshotVersion)),T0(l,p);const E=new Os(v.target,p,y,v.sequenceNumber);Np(l,E)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(s){ue(Vi,"Failed to raise snapshot:",s),await qc(n,s)}}async function qc(n,e,t){if(!ua(e))throw e;n.Ea.add(1),await zl(n),n.Ra.set("Offline"),t||(t=()=>_0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ue(Vi,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await fh(n)}))}function S0(n,e){return e().catch((t=>qc(n,t,e)))}async function ph(n){const e=Ie(n),t=Ws(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:mp;for(;rx(e);)try{const o=await UC(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,sx(e,o)}catch(o){await qc(e,o)}R0(e)&&A0(e)}function rx(n){return Fi(n)&&n.Ta.length<10}function sx(n,e){n.Ta.push(e);const t=Ws(n);t.O_()&&t.X_&&t.ea(e.mutations)}function R0(n){return Fi(n)&&!Ws(n).x_()&&n.Ta.length>0}function A0(n){Ws(n).start()}async function ix(n){Ws(n).ra()}async function ox(n){const e=Ws(n);for(const t of n.Ta)e.ea(t.mutations)}async function ax(n,e,t){const s=n.Ta.shift(),o=Ip.from(s,e,t);await S0(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await ph(n)}async function lx(n,e){e&&Ws(n).X_&&await(async function(s,o){if((function(h){return $k(h)&&h!==H.ABORTED})(o.code)){const l=s.Ta.shift();Ws(s).B_(),await S0(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await ph(s)}})(n,e),R0(n)&&A0(n)}async function z_(n,e){const t=Ie(n);t.asyncQueue.verifyOperationInProgress(),ue(Vi,"RemoteStore received new credentials");const s=Fi(t);t.Ea.add(3),await zl(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await fh(t)}async function ux(n,e){const t=Ie(n);e?(t.Ea.delete(2),await fh(t)):e||(t.Ea.add(2),await zl(t),t.Ra.set("Unknown"))}function ha(n){return n.ma||(n.ma=(function(t,s,o){const l=Ie(t);return l.sa(),new GC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Xo:ZC.bind(null,n),t_:ex.bind(null,n),r_:tx.bind(null,n),H_:nx.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Dp(n)?bp(n):n.Ra.set("Unknown")):(await n.ma.stop(),I0(n))}))),n.ma}function Ws(n){return n.fa||(n.fa=(function(t,s,o){const l=Ie(t);return l.sa(),new KC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:ix.bind(null,n),r_:lx.bind(null,n),ta:ox.bind(null,n),na:ax.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await ph(n)):(await n.fa.stop(),n.Ta.length>0&&(ue(Vi,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new $r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,f=new Op(e,t,h,o,l);return f.start(s),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vp(n,e){if(Gr("AsyncQueue",`${e}: ${n}`),ua(n))return new ie(H.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{static emptySet(e){return new $o(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||me.comparator(t.key,s.key):(t,s)=>me.comparator(t.key,s.key),this.keyedMap=dl(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $o)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new $o;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(){this.ga=new nt(me.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):we(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class ea{constructor(e,t,s,o,l,h,f,p,y){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new ea(e,t,$o.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ah(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class hx{constructor(){this.queries=q_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Ie(t),l=o.queries;o.queries=q_(),l.forEach(((h,f)=>{for(const p of f.Sa)p.onError(s)}))})(this,new ie(H.ABORTED,"Firestore shutting down"))}}function q_(){return new ji((n=>Gw(n)),ah)}async function Lp(n,e){const t=Ie(n);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(s=2):(l=new cx,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Vp(h,`Initialization of query '${Lo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&Up(t)}async function Mp(n,e){const t=Ie(n),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.Sa.indexOf(e);h>=0&&(l.Sa.splice(h,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function dx(n,e){const t=Ie(n);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.Sa)f.Fa(o)&&(s=!0);h.wa=o}}s&&Up(t)}function fx(n,e,t){const s=Ie(n),o=s.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);s.queries.delete(e)}function Up(n){n.Ca.forEach((e=>{e.next()}))}var Hf,W_;(W_=Hf||(Hf={})).Ma="default",W_.Cache="cache";class jp{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new ea(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ea.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Hf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e){this.key=e}}class C0{constructor(e){this.key=e}}class px{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Pe(),this.mutatedKeys=Pe(),this.eu=Kw(e),this.tu=new $o(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new $_,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((v,E)=>{const S=o.get(v),U=lh(this.query,E)?E:null,B=!!S&&this.mutatedKeys.has(S.key),W=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let O=!1;S&&U?S.data.isEqual(U.data)?B!==W&&(s.track({type:3,doc:U}),O=!0):this.su(S,U)||(s.track({type:2,doc:U}),O=!0,(p&&this.eu(U,p)>0||y&&this.eu(U,y)<0)&&(f=!0)):!S&&U?(s.track({type:0,doc:U}),O=!0):S&&!U&&(s.track({type:1,doc:S}),O=!0,(p||y)&&(f=!0)),O&&(U?(h=h.add(U),l=W?l.add(v):l.delete(v)):(h=h.delete(v),l=l.delete(v)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const v=this.query.limitType==="F"?h.last():h.first();h=h.delete(v.key),l=l.delete(v.key),s.track({type:1,doc:v})}return{tu:h,iu:s,Cs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((v,E)=>(function(U,B){const W=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we(20277,{Rt:O})}};return W(U)-W(B)})(v.type,E.type)||this.eu(v.doc,E.doc))),this.ou(s),o=o??!1;const f=t&&!o?this._u():[],p=this.Xa.size===0&&this.current&&!o?1:0,y=p!==this.Za;return this.Za=p,h.length!==0||y?{snapshot:new ea(this.query,e.tu,l,h,e.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new $_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Pe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new C0(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new k0(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Pe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ea.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Fp="SyncEngine";class mx{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class gx{constructor(e){this.key=e,this.hu=!1}}class yx{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new ji((f=>Gw(f)),ah),this.Iu=new Map,this.Eu=new Set,this.du=new nt(me.comparator),this.Au=new Map,this.Ru=new Ap,this.Vu={},this.mu=new Map,this.fu=Zo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function _x(n,e,t=!0){const s=O0(n);let o;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await x0(s,e,t,!0),o}async function vx(n,e){const t=O0(n);await x0(t,e,!0,!1)}async function x0(n,e,t,s){const o=await jC(n.localStore,pr(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await wx(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&E0(n.remoteStore,o),f}async function wx(n,e,t,s,o){n.pu=(E,S,U)=>(async function(W,O,ee,Z){let Q=O.view.ru(ee);Q.Cs&&(Q=await M_(W.localStore,O.query,!1).then((({documents:P})=>O.view.ru(P,Q))));const re=Z&&Z.targetChanges.get(O.targetId),Se=Z&&Z.targetMismatches.get(O.targetId)!=null,ae=O.view.applyChanges(Q,W.isPrimaryClient,re,Se);return G_(W,O.targetId,ae.au),ae.snapshot})(n,E,S,U);const l=await M_(n.localStore,e,!0),h=new px(e,l.Qs),f=h.ru(l.documents),p=Bl.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",o),y=h.applyChanges(f,n.isPrimaryClient,p);G_(n,t,y.au);const v=new mx(e,t,h);return n.Tu.set(e,v),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),y.snapshot}async function Ex(n,e,t){const s=Ie(n),o=s.Tu.get(e),l=s.Iu.get(o.targetId);if(l.length>1)return s.Iu.set(o.targetId,l.filter((h=>!ah(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await qf(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Pp(s.remoteStore,o.targetId),Gf(s,o.targetId)})).catch(la)):(Gf(s,o.targetId),await qf(s.localStore,o.targetId,!0))}async function Tx(n,e){const t=Ie(n),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Pp(t.remoteStore,s.targetId))}async function Ix(n,e,t){const s=Px(n);try{const o=await(function(h,f){const p=Ie(h),y=Qe.now(),v=f.reduce(((U,B)=>U.add(B.key)),Pe());let E,S;return p.persistence.runTransaction("Locally write mutations","readwrite",(U=>{let B=Kr(),W=Pe();return p.Ns.getEntries(U,v).next((O=>{B=O,B.forEach(((ee,Z)=>{Z.isValidDocument()||(W=W.add(ee))}))})).next((()=>p.localDocuments.getOverlayedDocuments(U,B))).next((O=>{E=O;const ee=[];for(const Z of f){const Q=Uk(Z,E.get(Z.key).overlayedDocument);Q!=null&&ee.push(new Ys(Z.key,Q,jw(Q.value.mapValue),bn.exists(!0)))}return p.mutationQueue.addMutationBatch(U,y,ee,f)})).next((O=>{S=O;const ee=O.applyToLocalDocumentSet(E,W);return p.documentOverlayCache.saveOverlays(U,O.batchId,ee)}))})).then((()=>({batchId:S.batchId,changes:Yw(E)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,f,p){let y=h.Vu[h.currentUser.toKey()];y||(y=new nt(xe)),y=y.insert(f,p),h.Vu[h.currentUser.toKey()]=y})(s,o.batchId,t),await $l(s,o.changes),await ph(s.remoteStore)}catch(o){const l=Vp(o,"Failed to persist write");t.reject(l)}}async function P0(n,e){const t=Ie(n);try{const s=await LC(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Au.get(l);h&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?je(h.hu,14607):o.removedDocuments.size>0&&(je(h.hu,42227),h.hu=!1))})),await $l(t,s,e)}catch(s){await la(s)}}function H_(n,e,t){const s=Ie(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const p=Ie(h);p.onlineState=f;let y=!1;p.queries.forEach(((v,E)=>{for(const S of E.Sa)S.va(f)&&(y=!0)})),y&&Up(p)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Sx(n,e,t){const s=Ie(n);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),l=o&&o.key;if(l){let h=new nt(me.comparator);h=h.insert(l,$t.newNoDocument(l,Te.min()));const f=Pe().add(l),p=new hh(Te.min(),new Map,new nt(xe),h,f);await P0(s,p),s.du=s.du.remove(l),s.Au.delete(e),Bp(s)}else await qf(s.localStore,e,!1).then((()=>Gf(s,e,t))).catch(la)}async function Rx(n,e){const t=Ie(n),s=e.batch.batchId;try{const o=await VC(t.localStore,e);b0(t,s,null),N0(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await $l(t,o)}catch(o){await la(o)}}async function Ax(n,e,t){const s=Ie(n);try{const o=await(function(h,f){const p=Ie(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let v;return p.mutationQueue.lookupMutationBatch(y,f).next((E=>(je(E!==null,37113),v=E.keys(),p.mutationQueue.removeMutationBatch(y,E)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,v,f))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,v))).next((()=>p.localDocuments.getDocuments(y,v)))}))})(s.localStore,e);b0(s,e,t),N0(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await $l(s,o)}catch(o){await la(o)}}function N0(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function b0(n,e,t){const s=Ie(n);let o=s.Vu[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function Gf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||D0(n,s)}))}function D0(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Pp(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Bp(n))}function G_(n,e,t){for(const s of t)s instanceof k0?(n.Ru.addReference(s.key,e),kx(n,s)):s instanceof C0?(ue(Fp,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||D0(n,s.key)):we(19791,{wu:s})}function kx(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(ue(Fp,"New document in limbo: "+t),n.Eu.add(s),Bp(n))}function Bp(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new me(He.fromString(e)),s=n.fu.next();n.Au.set(s,new gx(t)),n.du=n.du.insert(t,s),E0(n.remoteStore,new Os(pr(oh(t.path)),s,"TargetPurposeLimboResolution",rh.ce))}}async function $l(n,e,t){const s=Ie(n),o=[],l=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((f,p)=>{h.push(s.pu(p,e,t).then((y=>{if((y||t)&&s.isPrimaryClient){const v=y?!y.fromCache:t?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,v?"current":"not-current")}if(y){o.push(y);const v=Cp.As(p.targetId,y);l.push(v)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(p,y){const v=Ie(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>G.forEach(y,(S=>G.forEach(S.Es,(U=>v.persistence.referenceDelegate.addReference(E,S.targetId,U))).next((()=>G.forEach(S.ds,(U=>v.persistence.referenceDelegate.removeReference(E,S.targetId,U)))))))))}catch(E){if(!ua(E))throw E;ue(xp,"Failed to update sequence numbers: "+E)}for(const E of y){const S=E.targetId;if(!E.fromCache){const U=v.Ms.get(S),B=U.snapshotVersion,W=U.withLastLimboFreeSnapshotVersion(B);v.Ms=v.Ms.insert(S,W)}}})(s.localStore,l))}async function Cx(n,e){const t=Ie(n);if(!t.currentUser.isEqual(e)){ue(Fp,"User change. New user:",e.toKey());const s=await y0(t.localStore,e);t.currentUser=e,(function(l,h){l.mu.forEach((f=>{f.forEach((p=>{p.reject(new ie(H.CANCELLED,h))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await $l(t,s.Ls)}}function xx(n,e){const t=Ie(n),s=t.Au.get(e);if(s&&s.hu)return Pe().add(s.key);{let o=Pe();const l=t.Iu.get(e);if(!l)return o;for(const h of l){const f=t.Tu.get(h);o=o.unionWith(f.view.nu)}return o}}function O0(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=P0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Sx.bind(null,e),e.Pu.H_=dx.bind(null,e.eventManager),e.Pu.yu=fx.bind(null,e.eventManager),e}function Px(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Rx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ax.bind(null,e),e}class Wc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return OC(this.persistence,new NC,e.initialUser,this.serializer)}Cu(e){return new g0(kp.mi,this.serializer)}Du(e){return new BC}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wc.provider={build:()=>new Wc};class Nx extends Wc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){je(this.persistence.referenceDelegate instanceof $c,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new gC(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new g0((s=>$c.mi(s,t)),this.serializer)}}class Kf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>H_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cx.bind(null,this.syncEngine),await ux(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new hx})()}createDatastore(e){const t=dh(e.databaseInfo.databaseId),s=(function(l){return new HC(l)})(e.databaseInfo);return(function(l,h,f,p){return new YC(l,h,f,p)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,f){return new JC(s,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>H_(this.syncEngine,t,0)),(function(){return F_.v()?new F_:new zC})())}createSyncEngine(e,t){return(function(o,l,h,f,p,y,v){const E=new yx(o,l,h,f,p,y);return v&&(E.gu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=Ie(t);ue(Vi,"RemoteStore shutting down."),s.Ea.add(5),await zl(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Kf.provider={build:()=>new Kf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Gr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs="FirestoreClient";class bx{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=pp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{ue(Hs,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ue(Hs,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Vp(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function pf(n,e){n.asyncQueue.verifyOperationInProgress(),ue(Hs,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async o=>{s.isEqual(o)||(await y0(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function K_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Dx(n);ue(Hs,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>z_(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,o)=>z_(e.remoteStore,o))),n._onlineComponents=e}async function Dx(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ue(Hs,"Using user provided OfflineComponentProvider");try{await pf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===H.FAILED_PRECONDITION||o.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Go("Error using user provided cache. Falling back to memory cache: "+t),await pf(n,new Wc)}}else ue(Hs,"Using default OfflineComponentProvider"),await pf(n,new Nx(void 0));return n._offlineComponents}async function V0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ue(Hs,"Using user provided OnlineComponentProvider"),await K_(n,n._uninitializedComponentsProvider._online)):(ue(Hs,"Using default OnlineComponentProvider"),await K_(n,new Kf))),n._onlineComponents}function Ox(n){return V0(n).then((e=>e.syncEngine))}async function Hc(n){const e=await V0(n),t=e.eventManager;return t.onListen=_x.bind(null,e.syncEngine),t.onUnlisten=Ex.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=vx.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Tx.bind(null,e.syncEngine),t}function Vx(n,e,t={}){const s=new $r;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,p,y){const v=new zp({next:S=>{v.Nu(),h.enqueueAndForget((()=>Mp(l,E)));const U=S.docs.has(f);!U&&S.fromCache?y.reject(new ie(H.UNAVAILABLE,"Failed to get document because the client is offline.")):U&&S.fromCache&&p&&p.source==="server"?y.reject(new ie(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(S)},error:S=>y.reject(S)}),E=new jp(oh(f.path),v,{includeMetadataChanges:!0,qa:!0});return Lp(l,E)})(await Hc(n),n.asyncQueue,e,t,s))),s.promise}function Lx(n,e,t={}){const s=new $r;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,p,y){const v=new zp({next:S=>{v.Nu(),h.enqueueAndForget((()=>Mp(l,E))),S.fromCache&&p.source==="server"?y.reject(new ie(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(S)},error:S=>y.reject(S)}),E=new jp(f,v,{includeMetadataChanges:!0,qa:!0});return Lp(l,E)})(await Hc(n),n.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="firestore.googleapis.com",Y_=!0;class X_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ie(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=M0,this.ssl=Y_}else this.host=e.host,this.ssl=e.ssl??Y_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=m0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<pC)throw new ie(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}J1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=L0(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mh{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new X_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new X_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new z1;switch(s.type){case"firstParty":return new H1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Q_.get(t);s&&(ue("ComponentProvider","Removing Datastore"),Q_.delete(t),s.terminate())})(this),Promise.resolve()}}function Mx(n,e,t,s={}){n=un(n,mh);const o=Ks(e),l=n._getSettings(),h={...l,emulatorOptions:n._getEmulatorOptions()},f=`${e}:${t}`;o&&(ep(`https://${f}`),tp("Firestore",!0)),l.host!==M0&&l.host!==f&&Go("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:f,ssl:o,emulatorOptions:s};if(!qr(p,h)&&(n._setSettings(p),s.mockUserToken)){let y,v;if(typeof s.mockUserToken=="string")y=s.mockUserToken,v=zt.MOCK_USER;else{y=bv(s.mockUserToken,n._app?.options.projectId);const E=s.mockUserToken.sub||s.mockUserToken.user_id;if(!E)throw new ie(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new zt(E)}n._authCredentials=new $1(new kw(y,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ts(this.firestore,e,this._query)}}class st{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new js(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}toJSON(){return{type:st._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(jl(t,st._jsonSchema))return new st(e,s||null,new me(He.fromString(t.referencePath)))}}st._jsonSchemaVersion="firestore/documentReference/1.0",st._jsonSchema={type:mt("string",st._jsonSchemaVersion),referencePath:mt("string")};class js extends ts{constructor(e,t,s){super(e,t,oh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new me(e))}withConverter(e){return new js(this.firestore,e,this._path)}}function Xs(n,e,...t){if(n=Je(n),Cw("collection","path",e),n instanceof mh){const s=He.fromString(e,...t);return c_(s),new js(n,null,s)}{if(!(n instanceof st||n instanceof js))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(He.fromString(e,...t));return c_(s),new js(n.firestore,null,s)}}function Gs(n,e,...t){if(n=Je(n),arguments.length===1&&(e=pp.newId()),Cw("doc","path",e),n instanceof mh){const s=He.fromString(e,...t);return u_(s),new st(n,null,new me(s))}{if(!(n instanceof st||n instanceof js))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(He.fromString(e,...t));return u_(s),new st(n.firestore,n instanceof js?n.converter:null,new me(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_="AsyncQueue";class Z_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new v0(this,"async_queue_retry"),this._c=()=>{const s=ff();s&&ue(J_,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=ff();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ff();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new $r;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ua(e))throw e;ue(J_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Gr("INTERNAL UNHANDLED ERROR: ",ev(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Op.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&we(47125,{Pc:ev(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function ev(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of s)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}class Qr extends mh{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Z_,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Z_(e),this._firestoreClient=void 0,await e}}}function Ux(n,e){const t=typeof n=="object"?n:sp(),s=typeof n=="string"?n:Mc,o=Jc(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=xv("firestore");l&&Mx(o,...l)}return o}function gh(n){if(n._terminated)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||jx(n),n._firestoreClient}function jx(n){const e=n._freezeSettings(),t=(function(o,l,h,f){return new uk(o,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,L0(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new bx(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(o){const l=o?._online.build();return{_offline:o?._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pn(Ot.fromBase64String(e))}catch(t){throw new ie(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Pn(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(jl(e,Pn._jsonSchema))return Pn.fromBase64String(e.bytes)}}Pn._jsonSchemaVersion="firestore/bytes/1.0",Pn._jsonSchema={type:mt("string",Pn._jsonSchemaVersion),bytes:mt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function Fx(){return new ql(Of)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gr._jsonSchemaVersion}}static fromJSON(e){if(jl(e,gr._jsonSchema))return new gr(e.latitude,e.longitude)}}gr._jsonSchemaVersion="firestore/geoPoint/1.0",gr._jsonSchema={type:mt("string",gr._jsonSchemaVersion),latitude:mt("number"),longitude:mt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:yr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(jl(e,yr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new yr(e.vectorValues);throw new ie(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yr._jsonSchemaVersion="firestore/vectorValue/1.0",yr._jsonSchema={type:mt("string",yr._jsonSchemaVersion),vectorValues:mt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx=/^__.*__$/;class zx{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ys(e,this.data,this.fieldMask,t,this.fieldTransforms):new Fl(e,this.data,t,this.fieldTransforms)}}class U0{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ys(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function j0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we(40011,{Ac:n})}}class yh{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new yh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Gc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(j0(this.Ac)&&Bx.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class $x{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||dh(e)}Cc(e,t,s,o=!1){return new yh({Ac:e,methodName:t,Dc:s,path:Dt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _h(n){const e=n._freezeSettings(),t=dh(n._databaseId);return new $x(n._databaseId,!!e.ignoreUndefinedProperties,t)}function F0(n,e,t,s,o,l={}){const h=n.Cc(l.merge||l.mergeFields?2:0,e,t,o);Hp("Data must be an object, but it was:",h,s);const f=z0(s,h);let p,y;if(l.merge)p=new yn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const v=[];for(const E of l.mergeFields){const S=Qf(e,E,t);if(!h.contains(S))throw new ie(H.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);q0(v,S)||v.push(S)}p=new yn(v),y=h.fieldTransforms.filter((E=>p.covers(E.field)))}else p=null,y=h.fieldTransforms;return new zx(new ln(f),p,y)}class vh extends da{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vh}}function B0(n,e,t){return new yh({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class $p extends da{_toFieldTransform(e){return new Ep(e.path,new Nl)}isEqual(e){return e instanceof $p}}class qp extends da{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=B0(this,e,!0),s=this.vc.map((l=>Bi(l,t))),o=new Xo(s);return new Ep(e.path,o)}isEqual(e){return e instanceof qp&&qr(this.vc,e.vc)}}class Wp extends da{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=B0(this,e,!0),s=this.vc.map((l=>Bi(l,t))),o=new Jo(s);return new Ep(e.path,o)}isEqual(e){return e instanceof Wp&&qr(this.vc,e.vc)}}function qx(n,e,t,s){const o=n.Cc(1,e,t);Hp("Data must be an object, but it was:",o,s);const l=[],h=ln.empty();Qs(s,((p,y)=>{const v=Gp(e,p,t);y=Je(y);const E=o.yc(v);if(y instanceof vh)l.push(v);else{const S=Bi(y,E);S!=null&&(l.push(v),h.set(v,S))}}));const f=new yn(l);return new U0(h,f,o.fieldTransforms)}function Wx(n,e,t,s,o,l){const h=n.Cc(1,e,t),f=[Qf(e,s,t)],p=[o];if(l.length%2!=0)throw new ie(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)f.push(Qf(e,l[S])),p.push(l[S+1]);const y=[],v=ln.empty();for(let S=f.length-1;S>=0;--S)if(!q0(y,f[S])){const U=f[S];let B=p[S];B=Je(B);const W=h.yc(U);if(B instanceof vh)y.push(U);else{const O=Bi(B,W);O!=null&&(y.push(U),v.set(U,O))}}const E=new yn(y);return new U0(v,E,h.fieldTransforms)}function Hx(n,e,t,s=!1){return Bi(t,n.Cc(s?4:3,e))}function Bi(n,e){if($0(n=Je(n)))return Hp("Unsupported field value:",e,n),z0(n,e);if(n instanceof da)return(function(s,o){if(!j0(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const f of s){let p=Bi(f,o.wc(h));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),h++}return{arrayValue:{values:l}}})(n,e)}return(function(s,o){if((s=Je(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return bk(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Qe.fromDate(s);return{timestampValue:zc(o.serializer,l)}}if(s instanceof Qe){const l=new Qe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:zc(o.serializer,l)}}if(s instanceof gr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Pn)return{bytesValue:l0(o.serializer,s._byteString)};if(s instanceof st){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Rp(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof yr)return(function(h,f){return{mapValue:{fields:{[Mw]:{stringValue:Uw},[Uc]:{arrayValue:{values:h.toArray().map((y=>{if(typeof y!="number")throw f.Sc("VectorValues must only contain numeric values.");return wp(f.serializer,y)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${nh(s)}`)})(n,e)}function z0(n,e){const t={};return Nw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qs(n,((s,o)=>{const l=Bi(o,e.mc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function $0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Qe||n instanceof gr||n instanceof Pn||n instanceof st||n instanceof da||n instanceof yr)}function Hp(n,e,t){if(!$0(t)||!xw(t)){const s=nh(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function Qf(n,e,t){if((e=Je(e))instanceof ql)return e._internalPath;if(typeof e=="string")return Gp(n,e);throw Gc("Field path arguments must be of type string or ",n,!1,void 0,t)}const Gx=new RegExp("[~\\*/\\[\\]]");function Gp(n,e,t){if(e.search(Gx)>=0)throw Gc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ql(...e.split("."))._internalPath}catch{throw Gc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Gc(n,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||h)&&(p+=" (found",l&&(p+=` in field ${s}`),h&&(p+=` in document ${o}`),p+=")"),new ie(H.INVALID_ARGUMENT,f+n+p)}function q0(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Kx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(wh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Kx extends W0{data(){return super.data()}}function wh(n,e){return typeof e=="string"?Gp(n,e):e instanceof ql?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ie(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kp{}class Qp extends Kp{}function Li(n,e,...t){let s=[];e instanceof Kp&&s.push(e),s=s.concat(t),(function(l){const h=l.filter((p=>p instanceof Yp)).length,f=l.filter((p=>p instanceof Eh)).length;if(h>1||h>0&&f>0)throw new ie(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)n=o._apply(n);return n}class Eh extends Qp{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Eh(e,t,s)}_apply(e){const t=this._parse(e);return G0(e._query,t),new ts(e.firestore,e.converter,jf(e._query,t))}_parse(e){const t=_h(e.firestore);return(function(l,h,f,p,y,v,E){let S;if(y.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ie(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){rv(E,v);const B=[];for(const W of E)B.push(nv(p,l,W));S={arrayValue:{values:B}}}else S=nv(p,l,E)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||rv(E,v),S=Hx(f,h,E,v==="in"||v==="not-in");return pt.create(y,v,S)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Nn(n,e,t){const s=e,o=wh("where",n);return Eh._create(o,s,t)}class Yp extends Kp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Yp(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Xn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const p of f)G0(h,p),h=jf(h,p)})(e._query,t),new ts(e.firestore,e.converter,jf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Xp extends Qp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Xp(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new ie(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ie(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Pl(l,h)})(e._query,this._field,this._direction);return new ts(e.firestore,e.converter,(function(o,l){const h=o.explicitOrderBy.concat([l]);return new ca(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function Qx(n,e="asc"){const t=e,s=wh("orderBy",n);return Xp._create(s,t)}class Jp extends Qp{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new Jp(e,t,s)}_apply(e){return new ts(e.firestore,e.converter,Fc(e._query,this._limit,this._limitType))}}function Yx(n){return Jp._create("limit",n,"F")}function nv(n,e,t){if(typeof(t=Je(t))=="string"){if(t==="")throw new ie(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hw(e)&&t.indexOf("/")!==-1)throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(He.fromString(t));if(!me.isDocumentKey(s))throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return __(n,new me(s))}if(t instanceof st)return __(n,t._key);throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nh(t)}.`)}function rv(n,e){if(!Array.isArray(n)||n.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function G0(n,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ie(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Xx{convertValue(e,t="none"){switch(qs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes($s(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Qs(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){const t=e.fields?.[Uc].arrayValue?.values?.map((s=>ct(s.doubleValue)));return new yr(t)}convertGeoPoint(e){return new gr(ct(e.latitude),ct(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=ih(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(kl(e));default:return null}}convertTimestamp(e){const t=zs(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=He.fromString(e);je(p0(s),9688,{name:e});const o=new Cl(s.get(1),s.get(3)),l=new me(s.popFirst(5));return o.isEqual(t)||Gr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class pl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xi extends W0{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Rc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(wh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=xi._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}xi._jsonSchemaVersion="firestore/documentSnapshot/1.0",xi._jsonSchema={type:mt("string",xi._jsonSchemaVersion),bundleSource:mt("string","DocumentSnapshot"),bundleName:mt("string"),bundle:mt("string")};class Rc extends xi{data(e={}){return super.data(e)}}class Pi{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new pl(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Rc(this._firestore,this._userDataWriter,s.key,s,new pl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const p=new Rc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new pl(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const p=new Rc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new pl(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,v=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),v=h.indexOf(f.doc.key)),{type:Jx(f.type),doc:p,oldIndex:y,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Pi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=pp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Jx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(n){n=un(n,st);const e=un(n.firestore,Qr);return Vx(gh(e),n._key).then((t=>J0(e,n,t)))}Pi._jsonSchemaVersion="firestore/querySnapshot/1.0",Pi._jsonSchema={type:mt("string",Pi._jsonSchemaVersion),bundleSource:mt("string","QuerySnapshot"),bundleName:mt("string"),bundle:mt("string")};class Zp extends Xx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,t)}}function bl(n){n=un(n,ts);const e=un(n.firestore,Qr),t=gh(e),s=new Zp(e);return H0(n._query),Lx(t,n._query).then((o=>new Pi(e,s,n,o)))}function Y0(n,e,t){n=un(n,st);const s=un(n.firestore,Qr),o=K0(n.converter,e);return Ih(s,[F0(_h(s),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,bn.none())])}function Th(n,e,t,...s){n=un(n,st);const o=un(n.firestore,Qr),l=_h(o);let h;return h=typeof(e=Je(e))=="string"||e instanceof ql?Wx(l,"updateDoc",n._key,e,t,s):qx(l,"updateDoc",n._key,e),Ih(o,[h.toMutation(n._key,bn.exists(!0))])}function Zx(n){return Ih(un(n.firestore,Qr),[new Tp(n._key,bn.none())])}function em(n,e){const t=un(n.firestore,Qr),s=Gs(n),o=K0(n.converter,e);return Ih(t,[F0(_h(n.firestore),"addDoc",s._key,o,n.converter!==null,{}).toMutation(s._key,bn.exists(!1))]).then((()=>s))}function X0(n,...e){n=Je(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||tv(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(tv(e[s])){const p=e[s];e[s]=p.next?.bind(p),e[s+1]=p.error?.bind(p),e[s+2]=p.complete?.bind(p)}let l,h,f;if(n instanceof st)h=un(n.firestore,Qr),f=oh(n._key.path),l={next:p=>{e[s]&&e[s](J0(h,n,p))},error:e[s+1],complete:e[s+2]};else{const p=un(n,ts);h=un(p.firestore,Qr),f=p._query;const y=new Zp(h);l={next:v=>{e[s]&&e[s](new Pi(h,y,p,v))},error:e[s+1],complete:e[s+2]},H0(n._query)}return(function(y,v,E,S){const U=new zp(S),B=new jp(v,U,E);return y.asyncQueue.enqueueAndForget((async()=>Lp(await Hc(y),B))),()=>{U.Nu(),y.asyncQueue.enqueueAndForget((async()=>Mp(await Hc(y),B)))}})(gh(h),f,o,l)}function Ih(n,e){return(function(s,o){const l=new $r;return s.asyncQueue.enqueueAndForget((async()=>Ix(await Ox(s),o,l))),l.promise})(gh(n),e)}function J0(n,e,t){const s=t.docs.get(e._key),o=new Zp(n);return new xi(n,o,e._key,s,new pl(t.hasPendingWrites,t.fromCache),e.converter)}function eP(){return new $p("serverTimestamp")}function tP(...n){return new qp("arrayUnion",n)}function nP(...n){return new Wp("arrayRemove",n)}(function(e,t=!0){(function(o){aa=o})(Ui),bi(new Fs("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),f=new Qr(new q1(s.getProvider("auth-internal")),new G1(h,s.getProvider("app-check-internal")),(function(y,v){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ie(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cl(y.options.projectId,v)})(h,o),h);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),hr(o_,a_,e),hr(o_,a_,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="firebasestorage.googleapis.com",eE="storageBucket",rP=120*1e3,sP=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends wr{constructor(e,t,s=0){super(mf(e),`Firebase Storage: ${t} (${mf(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ot.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return mf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var it;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(it||(it={}));function mf(n){return"storage/"+n}function tm(){const n="An unknown error occurred, please check the error payload for server response.";return new ot(it.UNKNOWN,n)}function iP(n){return new ot(it.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function oP(n){return new ot(it.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function aP(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ot(it.UNAUTHENTICATED,n)}function lP(){return new ot(it.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function uP(n){return new ot(it.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function cP(){return new ot(it.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function hP(){return new ot(it.CANCELED,"User canceled the upload/download.")}function dP(n){return new ot(it.INVALID_URL,"Invalid URL '"+n+"'.")}function fP(n){return new ot(it.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function pP(){return new ot(it.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+eE+"' property when initializing the app?")}function mP(){return new ot(it.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function gP(){return new ot(it.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function yP(n){return new ot(it.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Yf(n){return new ot(it.INVALID_ARGUMENT,n)}function tE(){return new ot(it.APP_DELETED,"The Firebase app was deleted.")}function _P(n){return new ot(it.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function El(n,e){return new ot(it.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ll(n){throw new ot(it.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=_n.makeFromUrl(e,t)}catch{return new _n(e,"")}if(s.path==="")return s;throw fP(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function l(re){re.path.charAt(re.path.length-1)==="/"&&(re.path_=re.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),p={bucket:1,path:3};function y(re){re.path_=decodeURIComponent(re.path)}const v="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",U=new RegExp(`^https?://${E}/${v}/b/${o}/o${S}`,"i"),B={bucket:1,path:3},W=t===Z0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,O="([^?#]*)",ee=new RegExp(`^https?://${W}/${o}/${O}`,"i"),Q=[{regex:f,indices:p,postModify:l},{regex:U,indices:B,postModify:y},{regex:ee,indices:{bucket:1,path:2},postModify:y}];for(let re=0;re<Q.length;re++){const Se=Q[re],ae=Se.regex.exec(e);if(ae){const P=ae[Se.indices.bucket];let R=ae[Se.indices.path];R||(R=""),s=new _n(P,R),Se.postModify(s);break}}if(s==null)throw dP(e);return s}}class vP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(n,e,t){let s=1,o=null,l=null,h=!1,f=0;function p(){return f===2}let y=!1;function v(...O){y||(y=!0,e.apply(null,O))}function E(O){o=setTimeout(()=>{o=null,n(U,p())},O)}function S(){l&&clearTimeout(l)}function U(O,...ee){if(y){S();return}if(O){S(),v.call(null,O,...ee);return}if(p()||h){S(),v.call(null,O,...ee);return}s<64&&(s*=2);let Q;f===1?(f=2,Q=0):Q=(s+Math.random())*1e3,E(Q)}let B=!1;function W(O){B||(B=!0,S(),!y&&(o!==null?(O||(f=2),clearTimeout(o),E(0)):O||(f=1)))}return E(0),l=setTimeout(()=>{h=!0,W(!0)},t),W}function EP(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(n){return n!==void 0}function IP(n){return typeof n=="object"&&!Array.isArray(n)}function nm(n){return typeof n=="string"||n instanceof String}function sv(n){return rm()&&n instanceof Blob}function rm(){return typeof Blob<"u"}function iv(n,e,t,s){if(s<e)throw Yf(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw Yf(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function nE(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const o=e(s)+"="+e(n[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var Ni;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ni||(Ni={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e,t,s,o,l,h,f,p,y,v,E,S=!0,U=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=v,this.connectionFactory_=E,this.retry=S,this.isUsingEmulator=U,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((B,W)=>{this.resolve_=B,this.reject_=W,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new fc(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const p=f.loaded,y=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===Ni.NO_ERROR,p=l.getStatus();if(!f||SP(p,this.additionalRetryCodes_)&&this.retry){const v=l.getErrorCode()===Ni.ABORT;s(!1,new fc(!1,null,v));return}const y=this.successCodes_.indexOf(p)!==-1;s(!0,new fc(y,l))})},t=(s,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(f,f.getResponse());TP(p)?l(p):l()}catch(p){h(p)}else if(f!==null){const p=tm();p.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,p)):h(p)}else if(o.canceled){const p=this.appDelete_?tE():hP();h(p)}else{const p=cP();h(p)}};this.canceled_?t(!1,new fc(!1,null,!0)):this.backoffId_=wP(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&EP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fc{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function AP(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function kP(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function CP(n,e){e&&(n["X-Firebase-GMPID"]=e)}function xP(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function PP(n,e,t,s,o,l,h=!0,f=!1){const p=nE(n.urlParams),y=n.url+p,v=Object.assign({},n.headers);return CP(v,e),AP(v,t),kP(v,l),xP(v,s),new RP(y,n.method,v,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h,f)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function bP(...n){const e=NP();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(rm())return new Blob(n);throw new ot(it.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function DP(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OP(n){if(typeof atob>"u")throw yP("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class gf{constructor(e,t){this.data=e,this.contentType=t||null}}function VP(n,e){switch(n){case cr.RAW:return new gf(rE(e));case cr.BASE64:case cr.BASE64URL:return new gf(sE(n,e));case cr.DATA_URL:return new gf(MP(e),UP(e))}throw tm()}function rE(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=s,h=n.charCodeAt(++t);s=65536|(l&1023)<<10|h&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function LP(n){let e;try{e=decodeURIComponent(n)}catch{throw El(cr.DATA_URL,"Malformed data URL.")}return rE(e)}function sE(n,e){switch(n){case cr.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw El(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case cr.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw El(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=OP(e)}catch(o){throw o.message.includes("polyfill")?o:El(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}class iE{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw El(cr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=jP(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function MP(n){const e=new iE(n);return e.base64?sE(cr.BASE64,e.rest):LP(e.rest)}function UP(n){return new iE(n).contentType}function jP(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t){let s=0,o="";sv(e)?(this.data_=e,s=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(sv(this.data_)){const s=this.data_,o=DP(s,e,t);return o===null?null:new bs(o)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new bs(s,!0)}}static getBlob(...e){if(rm()){const t=e.map(s=>s instanceof bs?s.data_:s);return new bs(bP.apply(null,t))}else{const t=e.map(h=>nm(h)?VP(cr.RAW,h).data:h.data_);let s=0;t.forEach(h=>{s+=h.byteLength});const o=new Uint8Array(s);let l=0;return t.forEach(h=>{for(let f=0;f<h.length;f++)o[l++]=h[f]}),new bs(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(n){let e;try{e=JSON.parse(n)}catch{return null}return IP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function BP(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function aE(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(n,e){return e}class Qt{constructor(e,t,s,o){this.server=e,this.local=t||e,this.writable=!!s,this.xform=o||zP}}let pc=null;function $P(n){return!nm(n)||n.length<2?n:aE(n)}function lE(){if(pc)return pc;const n=[];n.push(new Qt("bucket")),n.push(new Qt("generation")),n.push(new Qt("metageneration")),n.push(new Qt("name","fullPath",!0));function e(l,h){return $P(h)}const t=new Qt("name");t.xform=e,n.push(t);function s(l,h){return h!==void 0?Number(h):h}const o=new Qt("size");return o.xform=s,n.push(o),n.push(new Qt("timeCreated")),n.push(new Qt("updated")),n.push(new Qt("md5Hash",null,!0)),n.push(new Qt("cacheControl",null,!0)),n.push(new Qt("contentDisposition",null,!0)),n.push(new Qt("contentEncoding",null,!0)),n.push(new Qt("contentLanguage",null,!0)),n.push(new Qt("contentType",null,!0)),n.push(new Qt("metadata","customMetadata",!0)),pc=n,pc}function qP(n,e){function t(){const s=n.bucket,o=n.fullPath,l=new _n(s,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function WP(n,e,t){const s={};s.type="file";const o=t.length;for(let l=0;l<o;l++){const h=t[l];s[h.local]=h.xform(s,e[h.server])}return qP(s,n),s}function uE(n,e,t){const s=oE(e);return s===null?null:WP(n,s,t)}function HP(n,e,t,s){const o=oE(e);if(o===null||!nm(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const h=encodeURIComponent;return l.split(",").map(y=>{const v=n.bucket,E=n.fullPath,S="/b/"+h(v)+"/o/"+h(E),U=sm(S,t,s),B=nE({alt:"media",token:y});return U+B})[0]}function GP(n,e){const t={},s=e.length;for(let o=0;o<s;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class cE{constructor(e,t,s,o){this.url=e,this.method=t,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(n){if(!n)throw tm()}function KP(n,e){function t(s,o){const l=uE(n,o,e);return hE(l!==null),l}return t}function QP(n,e){function t(s,o){const l=uE(n,o,e);return hE(l!==null),HP(l,o,n.host,n._protocol)}return t}function dE(n){function e(t,s){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=lP():o=aP():t.getStatus()===402?o=oP(n.bucket):t.getStatus()===403?o=uP(n.path):o=s,o.status=t.getStatus(),o.serverResponse=s.serverResponse,o}return e}function YP(n){const e=dE(n);function t(s,o){let l=e(s,o);return s.getStatus()===404&&(l=iP(n.path)),l.serverResponse=o.serverResponse,l}return t}function XP(n,e,t){const s=e.fullServerUrl(),o=sm(s,n.host,n._protocol),l="GET",h=n.maxOperationRetryTime,f=new cE(o,l,QP(n,t),h);return f.errorHandler=YP(e),f}function JP(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function ZP(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=JP(null,e)),s}function eN(n,e,t,s,o){const l=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function f(){let Q="";for(let re=0;re<2;re++)Q=Q+Math.random().toString().slice(2);return Q}const p=f();h["Content-Type"]="multipart/related; boundary="+p;const y=ZP(e,s,o),v=GP(y,t),E="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,S=`\r
--`+p+"--",U=bs.getBlob(E,s,S);if(U===null)throw mP();const B={name:y.fullPath},W=sm(l,n.host,n._protocol),O="POST",ee=n.maxUploadRetryTime,Z=new cE(W,O,KP(n,t),ee);return Z.urlParams=B,Z.headers=h,Z.body=U.uploadData(),Z.errorHandler=dE(e),Z}class tN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ni.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ni.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ni.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,o,l){if(this.sent_)throw ll("cannot .send() more than once");if(Ks(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),l!==void 0)for(const h in l)l.hasOwnProperty(h)&&this.xhr_.setRequestHeader(h,l[h].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ll("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ll("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ll("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ll("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class nN extends tN{initXhr(){this.xhr_.responseType="text"}}function fE(){return new nN}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t){this._service=e,t instanceof _n?this._location=t:this._location=_n.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Mi(e,t)}get root(){const e=new _n(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return aE(this._location.path)}get storage(){return this._service}get parent(){const e=FP(this._location.path);if(e===null)return null;const t=new _n(this._location.bucket,e);return new Mi(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw _P(e)}}function rN(n,e,t){n._throwIfRoot("uploadBytes");const s=eN(n.storage,n._location,lE(),new bs(e,!0),t);return n.storage.makeRequestWithTokens(s,fE).then(o=>({metadata:o,ref:n}))}function sN(n){n._throwIfRoot("getDownloadURL");const e=XP(n.storage,n._location,lE());return n.storage.makeRequestWithTokens(e,fE).then(t=>{if(t===null)throw gP();return t})}function iN(n,e){const t=BP(n._location.path,e),s=new _n(n._location.bucket,t);return new Mi(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(n){return/^[A-Za-z]+:\/\//.test(n)}function aN(n,e){return new Mi(n,e)}function pE(n,e){if(n instanceof im){const t=n;if(t._bucket==null)throw pP();const s=new Mi(t,t._bucket);return e!=null?pE(s,e):s}else return e!==void 0?iN(n,e):n}function lN(n,e){if(e&&oN(e)){if(n instanceof im)return aN(n,e);throw Yf("To use ref(service, url), the first argument must be a Storage instance.")}else return pE(n,e)}function ov(n,e){const t=e?.[eE];return t==null?null:_n.makeFromBucketSpec(t,n)}function uN(n,e,t,s={}){n.host=`${e}:${t}`;const o=Ks(e);o&&(ep(`https://${n.host}/b`),tp("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:l}=s;l&&(n._overrideAuthToken=typeof l=="string"?l:bv(l,n.app.options.projectId))}class im{constructor(e,t,s,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=Z0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=rP,this._maxUploadRetryTime=sP,this._requests=new Set,o!=null?this._bucket=_n.makeFromBucketSpec(o,this._host):this._bucket=ov(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_n.makeFromBucketSpec(this._url,e):this._bucket=ov(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){iv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){iv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Mi(this,e)}_makeRequest(e,t,s,o,l=!0){if(this._deleted)return new vP(tE());{const h=PP(e,this._appId,s,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const av="@firebase/storage",lv="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="storage";function gE(n,e,t){return n=Je(n),rN(n,e,t)}function yE(n){return n=Je(n),sN(n)}function _E(n,e){return n=Je(n),lN(n,e)}function cN(n=sp(),e){n=Je(n);const s=Jc(n,mE).getImmediate({identifier:e}),o=xv("storage");return o&&hN(s,...o),s}function hN(n,e,t,s={}){uN(n,e,t,s)}function dN(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new im(t,s,o,e,Ui)}function fN(){bi(new Fs(mE,dN,"PUBLIC").setMultipleInstances(!0)),hr(av,lv,""),hr(av,lv,"esm2020")}fN();const pN={apiKey:"AIzaSyAT7K99MmenL6mxitM37wqLdzMbmLUR_NU",authDomain:"skillswap-b140a.firebaseapp.com",projectId:"skillswap-b140a",storageBucket:"skillswap-b140a.firebasestorage.app",messagingSenderId:"32612223740",appId:"1:32612223740:web:548fbdf29794aac48be579",measurementId:"G-34356D874H"},om=Vv(pN),mN=vw(om),Xt=Ux(om),vE=cN(om),vn=typeof __app_id<"u"?__app_id:"default-app-id",gN=async(n,e)=>{const t=Gs(Xt,`/artifacts/${vn}/users`,n.uid),s={uid:n.uid,email:n.email,name:e,avatar:`https://placehold.co/100x100/e2e8f0/333?text=${e[0].toUpperCase()}`,skills:[]};await Y0(t,s)},qo=async n=>{if(!n)return null;const e=Gs(Xt,`/artifacts/${vn}/users`,n);try{const t=await Q0(e);if(t.exists())return t.data();const s=mN.currentUser;if(s){const o=s.displayName||s.email.split("@")[0],l={uid:n,email:s.email,name:o,avatar:`https://placehold.co/100x100/e2e8f0/333?text=${o[0].toUpperCase()}`,skills:[]};return await Y0(e,l),l}return null}catch(t){return console.error("Error fetching or creating user profile:",t),null}},yN=async(n,e)=>{if(!n||!e)return;const t=Gs(Xt,`/artifacts/${vn}/users`,n),s=await qo(n),o=Xs(Xt,`/artifacts/${vn}/public/data/skills`),l=await em(o,{...e,userId:n,userName:s.name,userAvatar:s.avatar,createdAt:new Date});await Th(t,{skills:tP({...e,publicId:l.id})})},_N=async(n,e)=>{if(!n||!e)return;const t=Gs(Xt,`/artifacts/${vn}/users`,n);if(await Th(t,{skills:nP(e)}),e.publicId){const s=Gs(Xt,`/artifacts/${vn}/public/data/skills`,e.publicId);await Zx(s)}},vN=async n=>{if(!n)return[];const e=Xs(Xt,`/artifacts/${vn}/public/data/skills`),t=Li(e,Nn("userId","!=",n));return(await bl(t)).docs.map(o=>({id:o.id,...o.data()}))},wN=async n=>{if(n.length===0)return{};const e=new Set(n.flatMap(h=>[h.requesterId,h.receiverId])),t=Xs(Xt,`/artifacts/${vn}/users`),s=Li(t,Nn(Fx(),"in",Array.from(e))),o=await bl(s),l={};return o.forEach(h=>{l[h.id]=h.data()}),l},EN=async(n,e,t)=>{const s=Xs(Xt,`/artifacts/${vn}/swaps`),o=Li(s,Nn("requesterId","==",n),Nn("receiverId","==",e),Nn("skillId","==",t.id||t.publicId),Nn("status","==","pending"),Yx(1));if(!(await bl(o)).empty)return;const h=await qo(n);await em(s,{requesterId:n,receiverId:e,skillTitle:t.title,skillId:t.publicId||t.id,status:"pending",createdAt:new Date,requesterName:h.name,requesterSkills:h.skills||[]})},wE=(n,e)=>{const t=Xs(Xt,`/artifacts/${vn}/swaps`),s=Li(t,Nn("receiverId","==",n),Nn("status","==","pending"));return X0(s,o=>{const l=o.docs.map(h=>({id:h.id,...h.data()}));e(l)})},TN=async(n,e)=>{const t=Gs(Xt,`/artifacts/${vn}/swaps`,n);await Th(t,{status:e})},IN=async(n,e)=>{const t=Gs(Xt,`/artifacts/${vn}/swaps`,n),s=await Q0(t);if(!s.exists())throw new Error("Swap not found");const o=s.data();return await Th(t,{status:"accepted",skillOfferedByReceiver:e,acceptedAt:new Date}),{id:s.id,skillTitle:o.skillTitle,otherParty:{name:o.requesterName},createdAt:o.createdAt||{toDate:()=>new Date}}},EE=async n=>{if(!n)return[];const e=Xs(Xt,`/artifacts/${vn}/swaps`),t=Li(e,Nn("requesterId","==",n),Nn("status","==","accepted")),s=Li(e,Nn("receiverId","==",n),Nn("status","==","accepted")),[o,l]=await Promise.all([bl(t),bl(s)]),h=[...o.docs.map(p=>({id:p.id,...p.data()})),...l.docs.map(p=>({id:p.id,...p.data()}))],f=await wN(h);return h.map(p=>{const y=p.requesterId===n?p.receiverId:p.requesterId;return{...p,otherParty:f[y]||{name:"Unknown User"}}})},TE=$.createContext();function Er(){return $.useContext(TE)}function SN({children:n}){const[e,t]=$.useState(null),[s,o]=$.useState(!0),l=vw(),h=async(v,E)=>{const S=await IA(l,v,E);return await gN(S.user),S},f=(v,E)=>SA(l,v,E),p=()=>PA(l);$.useEffect(()=>xA(l,async E=>{if(t(E),!E&&typeof __initial_auth_token<"u"&&__initial_auth_token)try{await TA(l,__initial_auth_token)}catch(S){console.error("Custom token sign-in failed, trying anonymous.",S),await yA(l)}o(!1)}),[l]);const y={currentUser:e,signup:h,login:f,logout:p};return I.jsx(TE.Provider,{value:y,children:!s&&n})}function RN(){const{currentUser:n,logout:e}=Er(),t=sa(),[s,o]=$.useState(0);$.useEffect(()=>{if(n){const f=wE(n.uid,p=>{o(p.length)});return()=>f()}},[n]);const l=async()=>{try{await e(),t("/login")}catch(f){console.error("Failed to log out",f)}},h=({isActive:f})=>f?"bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium":"text-gray-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";return I.jsx("nav",{className:"bg-slate-800 dark:bg-slate-900 shadow-md",children:I.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:I.jsxs("div",{className:"flex items-center justify-between h-16",children:[I.jsx(Ai,{to:"/",className:"font-bold text-2xl text-white",children:"SkillSwap"}),I.jsxs("div",{className:"flex items-center space-x-4",children:[I.jsx(Ai,{to:"/browse",className:h,children:"Browse"}),n?I.jsxs(I.Fragment,{children:[I.jsx(Ai,{to:"/dashboard",className:h,children:"Dashboard"}),I.jsxs(Ai,{to:"/requests",className:({isActive:f})=>`${h({isActive:f})} relative`,children:["Requests",s>0&&I.jsx("span",{className:"absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse",children:s})]}),I.jsx(Ai,{to:"/profile",className:h,children:"Skillset"}),I.jsx("button",{onClick:l,className:"bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium",children:"Logout"})]}):I.jsxs(I.Fragment,{children:[I.jsx(Ai,{to:"/login",className:h,children:"Login"}),I.jsx(Ai,{to:"/signup",className:h,children:"Sign Up"})]})]})]})})})}function AN(){return I.jsx("footer",{className:"bg-slate-800 dark:bg-slate-900 text-white py-4 mt-auto",children:I.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:I.jsxs("p",{children:["© ",new Date().getFullYear()," SkillSwap. All rights reserved."]})})})}function mc({children:n}){const{currentUser:e}=Er();return e?n:I.jsx(RI,{to:"/login",replace:!0})}function kN({onAddSkill:n,onClose:e}){const[t,s]=$.useState(""),[o,l]=$.useState(""),h=f=>{f.preventDefault(),!(!t||!o)&&(n({title:t,description:o}),e())};return I.jsxs("form",{onSubmit:h,className:"space-y-4",children:[I.jsx("input",{type:"text",value:t,onChange:f=>s(f.target.value),placeholder:"Skill Title (e.g., Graphic Design)",className:"w-full p-3 border rounded-lg dark:bg-slate-700 dark:border-slate-600"}),I.jsx("textarea",{value:o,onChange:f=>l(f.target.value),placeholder:"Describe your skill...",className:"w-full p-3 border rounded-lg dark:bg-slate-700 dark:border-slate-600",rows:"4"}),I.jsx("button",{type:"submit",className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg",children:"Add Skill"})]})}function CN({isOpen:n,onClose:e,onAddSkill:t}){return n?I.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center",children:I.jsxs("div",{className:"bg-white dark:bg-slate-800 p-8 rounded-lg shadow-2xl w-full max-w-md",children:[I.jsxs("div",{className:"flex justify-between items-center mb-4",children:[I.jsx("h2",{className:"text-2xl font-bold",children:"Add a New Skill"}),I.jsx("button",{onClick:e,className:"text-2xl",children:"×"})]}),I.jsx(kN,{onAddSkill:t,onClose:e})]})}):null}function xN(){return I.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-10",children:[I.jsxs("section",{className:"grid md:grid-cols-2 gap-8 items-center",children:[I.jsxs("div",{children:[I.jsxs("h1",{className:"text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight",children:["Exchange skills. ",I.jsx("span",{className:"text-indigo-600",children:"Learn faster."})," Grow together."]}),I.jsx("p",{className:"mt-4 text-gray-600 dark:text-gray-400 max-w-xl",children:"Find people who can teach what you want to learn — and offer your skill in return. Post a skill, browse the marketplace, and request a barter."}),I.jsx("div",{className:"mt-6 flex items-center gap-4",children:I.jsx(Dl,{to:"/browse",className:"px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold",children:"Browse Skills"})}),I.jsxs("div",{className:"mt-8 grid grid-cols-3 gap-2 text-sm text-gray-600 dark:text-gray-400",children:[I.jsxs("div",{children:[I.jsx("div",{className:"text-2xl font-bold text-indigo-600",children:"1k+"}),I.jsx("div",{children:"Active users"})]}),I.jsxs("div",{children:[I.jsx("div",{className:"text-2xl font-bold text-indigo-600",children:"2k+"}),I.jsx("div",{children:"Skills listed"})]}),I.jsxs("div",{children:[I.jsx("div",{className:"text-2xl font-bold text-indigo-600",children:"95%"}),I.jsx("div",{children:"Satisfaction"})]})]})]}),I.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md",children:[I.jsx("h3",{className:"text-lg font-semibold mb-4 text-slate-900 dark:text-white",children:"Featured Skills"}),I.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[I.jsx("div",{className:"p-3 bg-indigo-50 dark:bg-slate-700/50 rounded",children:I.jsxs("div",{className:"flex justify-between items-center",children:[I.jsxs("div",{children:[I.jsx("div",{className:"text-sm text-indigo-700 dark:text-indigo-300 font-semibold",children:"UI/UX Design"}),I.jsx("div",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"By: jane@example.com • Intermediate"})]}),I.jsx("div",{children:I.jsx("button",{className:"px-3 py-1 bg-white dark:bg-slate-600 border dark:border-slate-500 rounded",children:"View"})})]})}),I.jsx("div",{className:"p-3 bg-white dark:bg-slate-700/50 rounded border dark:border-slate-700",children:I.jsxs("div",{className:"flex justify-between items-center",children:[I.jsxs("div",{children:[I.jsx("div",{className:"text-sm text-gray-800 dark:text-gray-200 font-semibold",children:"Python for Data Science"}),I.jsx("div",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"By: amit@example.com • Advanced"})]}),I.jsx("div",{children:I.jsx("button",{className:"px-3 py-1 bg-indigo-600 text-white rounded",children:"View"})})]})}),I.jsx("div",{className:"p-3 bg-white dark:bg-slate-700/50 rounded border dark:border-slate-700",children:I.jsxs("div",{className:"flex justify-between items-center",children:[I.jsxs("div",{children:[I.jsx("div",{className:"text-sm text-gray-800 dark:text-gray-200 font-semibold",children:"Guitar Basics"}),I.jsx("div",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"By: maya@example.com • Beginner"})]}),I.jsx("div",{children:I.jsx("button",{className:"px-3 py-1 bg-indigo-600 text-white rounded",children:"View"})})]})})]})]})]}),I.jsxs("section",{className:"mt-12",children:[I.jsx("h3",{className:"text-xl font-semibold mb-4 text-slate-900 dark:text-white",children:"How it works"}),I.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[I.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 text-center rounded-lg shadow-md",children:[I.jsx("div",{className:"text-xl font-semibold",children:"1. Post a Skill"}),I.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Add what you can teach and what you want in return."})]}),I.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 text-center rounded-lg shadow-md",children:[I.jsx("div",{className:"text-xl font-semibold",children:"2. Browse & Connect"}),I.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Find the best match using search and filters."})]}),I.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 text-center rounded-lg shadow-md",children:[I.jsx("div",{className:"text-xl font-semibold",children:"3. Barter & Learn"}),I.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Schedule sessions, leave ratings, and grow together."})]})]})]})]})}function PN(){const[n,e]=$.useState(""),[t,s]=$.useState(""),[o,l]=$.useState(""),{currentUser:h,login:f}=Er(),p=sa();$.useEffect(()=>{h&&p("/dashboard")},[h,p]);async function y(v){v.preventDefault();try{l(""),await f(n,t)}catch(E){l(E.message||"Failed to log in")}}return I.jsxs("div",{className:"max-w-md mx-auto mt-12 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg",children:[I.jsx("h2",{className:"text-3xl font-bold mb-6 text-center text-slate-900 dark:text-white",children:"Login"}),o&&I.jsx("p",{className:"text-red-500 mb-4 p-3 bg-red-100 dark:bg-red-900/30 rounded-md",children:o}),I.jsxs("form",{onSubmit:y,className:"space-y-6",children:[I.jsx("input",{type:"email",value:n,onChange:v=>e(v.target.value),placeholder:"Email",className:"w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white",required:!0}),I.jsx("input",{type:"password",value:t,onChange:v=>s(v.target.value),placeholder:"Password",className:"w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white",required:!0}),I.jsx("button",{type:"submit",className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold",children:"Login"})]}),I.jsxs("p",{className:"mt-6 text-sm text-center text-gray-600 dark:text-gray-400",children:["Don't have an account? ",I.jsx(Dl,{to:"/signup",className:"font-medium text-indigo-600 hover:underline dark:text-indigo-400",children:"Sign Up"})]})]})}function NN(){const[n,e]=$.useState(""),[t,s]=$.useState(""),[o,l]=$.useState(""),{currentUser:h,signup:f}=Er(),p=sa();$.useEffect(()=>{h&&p("/dashboard")},[h,p]);async function y(v){v.preventDefault();try{l(""),await f(n,t)}catch(E){l(E.message||"Failed to create account")}}return I.jsxs("div",{className:"max-w-md mx-auto mt-12 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg",children:[I.jsx("h2",{className:"text-3xl font-bold mb-6 text-center text-slate-900 dark:text-white",children:"Create an Account"}),o&&I.jsx("p",{className:"text-red-500 mb-4 p-3 bg-red-100 dark:bg-red-900/30 rounded-md",children:o}),I.jsxs("form",{onSubmit:y,className:"space-y-6",children:[I.jsx("input",{type:"email",value:n,onChange:v=>e(v.target.value),placeholder:"Email",className:"w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white",required:!0}),I.jsx("input",{type:"password",value:t,onChange:v=>s(v.target.value),placeholder:"Password (min. 6 characters)",className:"w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white",required:!0}),I.jsx("button",{type:"submit",className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold",children:"Sign Up"})]}),I.jsxs("p",{className:"mt-6 text-sm text-center text-gray-600 dark:text-gray-400",children:["Already have an account? ",I.jsx(Dl,{to:"/login",className:"font-medium text-indigo-600 hover:underline dark:text-indigo-400",children:"Log In"})]})]})}function bN({profile:n,onOpenChangePassword:e}){return I.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg",children:[I.jsxs("div",{className:"flex items-center space-x-4 mb-4",children:[I.jsx("img",{src:n.avatar,alt:n.name,className:"w-16 h-16 rounded-full"}),I.jsxs("div",{children:[I.jsx("h3",{className:"text-xl font-bold text-slate-900 dark:text-white",children:n.name}),I.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:n.email})]})]}),I.jsx("button",{onClick:e,className:"w-full mt-4 bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300",children:"Change Password"})]})}function DN({skills:n}){return I.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg h-full",children:[I.jsxs("div",{className:"flex justify-between items-center mb-4",children:[I.jsx("h3",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Your Arsenal"}),I.jsx(Dl,{to:"/browse",className:"text-indigo-600 dark:text-indigo-400 font-semibold hover:underline",children:"Find Skills to Barter"})]}),I.jsx("div",{className:"space-y-4",children:n.length>0?n.map((e,t)=>I.jsxs("div",{className:"p-4 bg-gray-100 dark:bg-slate-700/50 rounded-lg",children:[I.jsx("h4",{className:"font-semibold text-lg",children:e.title}),I.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:e.description})]},t)):I.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"You haven't added any skills yet. Go to your profile to build your arsenal!"})})]})}function uv({title:n,value:e}){return I.jsxs("div",{className:"bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-lg text-center",children:[I.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:n}),I.jsx("p",{className:"text-3xl font-bold text-slate-900 dark:text-white mt-1",children:e})]})}function ON({handleChangePassword:n,onClose:e}){const[t,s]=$.useState(""),[o,l]=$.useState(""),[h,f]=$.useState(""),[p,y]=$.useState(""),v=async E=>{if(E.preventDefault(),f(""),y(""),t!==o)return f("Passwords do not match.");if(t.length<6)return f("Password must be at least 6 characters long.");try{await n(t),y("Password updated successfully!"),s(""),l("")}catch(S){f(S.message)}};return I.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:I.jsxs("div",{className:"bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg w-full max-w-md",children:[I.jsx("h3",{className:"text-2xl font-bold mb-6 text-slate-900 dark:text-white",children:"Change Password"}),h&&I.jsx("p",{className:"text-red-500 mb-4 p-3 bg-red-100 dark:bg-red-900/30 rounded-md",children:h}),p&&I.jsx("p",{className:"text-green-500 mb-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-md",children:p}),I.jsxs("form",{onSubmit:v,className:"space-y-4",children:[I.jsx("input",{type:"password",value:t,onChange:E=>s(E.target.value),placeholder:"New Password",className:"w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white",required:!0}),I.jsx("input",{type:"password",value:o,onChange:E=>l(E.target.value),placeholder:"Confirm New Password",className:"w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white",required:!0}),I.jsxs("div",{className:"flex justify-end gap-4 pt-4",children:[I.jsx("button",{type:"button",onClick:e,className:"px-6 py-2 bg-gray-200 dark:bg-slate-600 text-slate-800 dark:text-white rounded-lg",children:"Cancel"}),I.jsx("button",{type:"submit",className:"px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold",children:"Update Password"})]})]})]})})}function VN(){const{currentUser:n}=Er(),[e,t]=$.useState(null),[s,o]=$.useState(!0),[l,h]=$.useState(null),[f,p]=$.useState(!1);$.useEffect(()=>{(async()=>{if(n)try{o(!0),h(null);const E=await qo(n.uid);t(E)}catch(E){console.error("Failed to fetch profile:",E),h("Could not load your profile data. Please try again later.")}finally{o(!1)}else o(!1)})()},[n]);const y=async v=>{if(!n)throw new Error("You must be logged in to change your password.");await RA(n,v)};return s?I.jsx("div",{className:"text-center py-10",children:"Loading dashboard..."}):l?I.jsx("div",{className:"text-center py-10 text-red-500",children:l}):e?I.jsxs(I.Fragment,{children:[f&&I.jsx(ON,{handleChangePassword:y,onClose:()=>p(!1)}),I.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[I.jsxs("div",{className:"mb-8",children:[I.jsxs("h1",{className:"text-4xl font-bold text-slate-900 dark:text-white",children:["Welcome back, ",e.name,"!"]}),I.jsx("p",{className:"mt-2 text-lg text-gray-600 dark:text-gray-400",children:"Here's a snapshot of your SkillSwap activity."})]}),I.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[I.jsxs("div",{className:"lg:col-span-1 space-y-8",children:[I.jsx(bN,{profile:e,onOpenChangePassword:()=>p(!0)}),I.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[I.jsx(uv,{title:"Skills Offered",value:e.skills.length}),I.jsx(uv,{title:"Swaps Completed",value:e.stats.swapsCompleted})]})]}),I.jsx("div",{className:"lg:col-span-2",children:I.jsx(DN,{skills:e.skills})})]})]})]}):I.jsx("div",{className:"text-center py-10",children:"Loading user data..."})}function LN({skill:n,onSwapRequest:e}){if(!n)return null;const t=n.userAvatar||"https://placehold.co/100x100/e2e8f0/333?text=?",s=n.userName||"Unknown User",o=n.title||"Untitled Skill",l=n.description||"No description available.";return I.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 group",children:I.jsxs("div",{className:"p-6 flex flex-col h-full",children:[I.jsxs("div",{className:"flex items-center mb-4",children:[I.jsx("img",{className:"w-12 h-12 rounded-full object-cover mr-4",src:t,alt:s}),I.jsxs("div",{children:[I.jsx("p",{className:"font-semibold text-slate-900 dark:text-white",children:s}),I.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Offers:"})]})]}),I.jsxs("div",{className:"flex-grow",children:[I.jsx("h3",{className:"text-xl font-bold text-indigo-600 dark:text-indigo-400",children:o}),I.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:l})]}),I.jsx("button",{onClick:()=>e(n.userId,n),className:"w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300",children:"Request Swap"})]})})}function MN({onSearch:n}){const[e,t]=$.useState(""),s=o=>{t(o.target.value),n(o.target.value)};return I.jsx("div",{className:"w-full max-w-2xl mx-auto",children:I.jsx("input",{type:"text",value:e,onChange:s,placeholder:"Search for skills like 'photography' or 'web development'...",className:"w-full p-4 border-2 border-gray-300 dark:border-slate-600 rounded-full shadow-sm dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"})})}const yf=8;function UN(){const{currentUser:n}=Er(),[e,t]=$.useState([]),[s,o]=$.useState([]),[l,h]=$.useState(!0),[f,p]=$.useState(""),[y,v]=$.useState(!1),[E,S]=$.useState(new Set);$.useEffect(()=>{(async()=>{if(n){h(!0);const ee=await vN(n.uid);t(ee),o(ee),h(!1)}else h(!1)})()},[n]);const U=O=>{if(!O){o(e),v(!1);return}v(!0);const ee=O.toLowerCase(),Z=e.filter(Q=>Q.title?.toLowerCase().includes(ee)||Q.description?.toLowerCase().includes(ee)||Q.userName?.toLowerCase().includes(ee));o(Z)},B=async(O,ee)=>{n?(await EN(n.uid,O,ee),S(Z=>new Set(Z).add(ee.id||ee.publicId)),p(`Swap request sent for "${ee.title}"!`),setTimeout(()=>p(""),3e3)):alert("Please log in to request a swap.")},W=y?s:s.slice(0,yf);return l?I.jsx("div",{className:"text-center py-10",children:"Loading skills..."}):n?I.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-8",children:[I.jsxs("div",{className:"mb-8 text-center",children:[I.jsx("h1",{className:"text-4xl font-bold text-slate-900 dark:text-white",children:"Find a Skill"}),I.jsx("p",{className:"mt-2 text-lg text-gray-600 dark:text-gray-400",children:"Discover skills from our talented community."})]}),I.jsx(MN,{onSearch:U}),I.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8",children:W.map(O=>I.jsx(LN,{skill:O,onSwapRequest:B,isRequested:E.has(O.id||O.publicId)},O.id))}),I.jsxs("div",{className:"text-center mt-12",children:[!y&&s.length>yf&&I.jsx("button",{onClick:()=>v(!0),className:"bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg",children:"Show More"}),y&&s.length>yf&&I.jsx("button",{onClick:()=>v(!1),className:"bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg",children:"Show Less"})]}),f&&I.jsx("div",{className:"fixed bottom-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg",children:f})]}):I.jsx("div",{className:"text-center py-10",children:"Please log in to browse skills."})}function jN({skill:n,onDelete:e}){if(!n)return null;const t=s=>{switch(s?.toLowerCase()){case"advanced":return"bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300";case"intermediate":return"bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300";case"beginner":return"bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300";default:return"bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200"}};return I.jsxs("div",{className:"bg-white dark:bg-slate-700 p-4 rounded-xl shadow-md border border-gray-200 dark:border-slate-600 flex flex-col justify-between h-full",children:[I.jsxs("div",{children:[I.jsxs("div",{className:"flex justify-between items-center mb-2",children:[I.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white",children:n.title}),n.level&&I.jsx("span",{className:`px-2.5 py-0.5 text-xs font-semibold rounded-full ${t(n.level)}`,children:n.level})]}),I.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm",children:n.description})]}),e&&I.jsx("button",{onClick:()=>e(n),className:"mt-4 w-full text-sm bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-2 px-3 rounded-lg transition-colors duration-200 dark:bg-red-900/40 dark:hover:bg-red-900/70 dark:text-red-300",children:"Delete Skill"})]})}function FN(){const{currentUser:n}=Er(),[e,t]=$.useState(null),[s,o]=$.useState(!1),[l,h]=$.useState(!0),[f,p]=$.useState("");$.useEffect(()=>{(async()=>{if(n){h(!0),p("");const S=await qo(n.uid);S?t(S):p("Could not load user profile."),h(!1)}else h(!1)})()},[n]);const y=async E=>{if(n){await yN(n.uid,E);const S=await qo(n.uid);t(S)}},v=async E=>{if(n&&window.confirm(`Are you sure you want to delete "${E.title}"?`)){await _N(n.uid,E);const S=await qo(n.uid);t(S)}};return l?I.jsx("div",{className:"text-center py-10",children:"Loading profile..."}):f?I.jsx("div",{className:"text-center py-10 text-red-500",children:f}):n?e?I.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[I.jsx("h1",{className:"text-3xl font-bold text-slate-900 dark:text-white mb-6",children:"Your Profile"}),I.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md",children:[I.jsxs("div",{className:"flex justify-between items-center mb-6",children:[I.jsx("h2",{className:"text-2xl font-semibold text-slate-900 dark:text-white",children:"Your Skills"}),I.jsx("button",{onClick:()=>o(!0),className:"bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg",children:"Add New Skill"})]}),Array.isArray(e.skills)&&e.skills.length>0?I.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:e.skills.map((E,S)=>I.jsx(jN,{skill:E,onDelete:v},E.publicId||S))}):I.jsx("div",{className:"text-center py-10 border-2 border-dashed rounded-lg",children:I.jsx("p",{className:"text-gray-500",children:"You haven't added any skills yet."})})]}),I.jsx(CN,{isOpen:s,onClose:()=>o(!1),onAddSkill:y})]}):I.jsx("div",{className:"text-center py-10",children:"Could not find profile data."}):I.jsx("div",{className:"text-center py-10",children:"Please log in to view your profile."})}function BN({isOpen:n,onClose:e,onConfirmSwap:t,requesterProfile:s}){const[o,l]=$.useState([]),[h,f]=$.useState([]),[p,y]=$.useState(null);$.useEffect(()=>{if(s){const S=s.skills||[];l(S),f(S),y(null)}},[s]);const v=S=>{if(!S){f(o);return}const U=S.toLowerCase();f(o.filter(B=>B.title.toLowerCase().includes(U)))},E=()=>{p&&t(p)};return n?I.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:I.jsxs("div",{className:"bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg w-full max-w-md",children:[I.jsx("h3",{className:"text-2xl font-bold mb-4 text-slate-900 dark:text-white",children:"Select a Skill to Receive"}),s?I.jsxs(I.Fragment,{children:[I.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-6",children:["Choose one of ",I.jsx("span",{className:"font-semibold",children:s.name||"their"})," skills to receive in return."]}),I.jsx("input",{type:"text",placeholder:"Search their skills...",onChange:S=>v(S.target.value),className:"w-full p-3 mb-4 border rounded-lg dark:bg-slate-700 dark:border-slate-600"}),I.jsx("div",{className:"space-y-2 max-h-60 overflow-y-auto mb-6",children:h.length>0?h.map(S=>I.jsx("div",{onClick:()=>y(S),className:`p-3 rounded-md cursor-pointer transition-colors ${p?.title===S.title?"bg-indigo-600 text-white":"bg-gray-100 dark:bg-slate-700 hover:bg-gray-200"}`,children:I.jsx("p",{className:"font-semibold",children:S.title})},S.publicId||S.title)):I.jsx("p",{className:"text-sm text-gray-500",children:"This user has not listed any skills to offer."})}),I.jsxs("div",{className:"flex justify-end gap-4 pt-4 border-t dark:border-slate-700",children:[I.jsx("button",{type:"button",onClick:e,className:"px-6 py-2 bg-gray-200 dark:bg-slate-600 rounded-lg",children:"Cancel"}),I.jsx("button",{onClick:E,disabled:!p,className:"px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed",children:"Confirm Swap"})]})]}):I.jsx("p",{className:"text-center text-gray-500 dark:text-gray-400 py-10",children:"Loading skills..."})]})}):null}function zN(){const{currentUser:n}=Er(),e=sa(),[t,s]=$.useState("requests"),[o,l]=$.useState([]),[h,f]=$.useState([]),[p,y]=$.useState(!0),[v,E]=$.useState(!1),[S,U]=$.useState(!1),[B,W]=$.useState(null),[O,ee]=$.useState(null);$.useEffect(()=>{if(!n)return y(!1);y(!0);const ae=wE(n.uid,P=>{l(P),y(!1)});return()=>ae()},[n]),$.useEffect(()=>{(async()=>{if(n){E(!0);try{const P=await EE(n.uid);f(P)}catch(P){console.error("Error fetching sessions:",P)}finally{E(!1)}}})()},[n]);const Z=async ae=>{n&&await TN(ae,"rejected")},Q=ae=>{W(ae),ee({name:ae.requesterName,skills:ae.requesterSkills||[]}),U(!0)},re=async ae=>{if(!n||!B)return;const P={title:"My Skill",description:"Your offered skill"};let R;try{R=await IN(B.id,P)}catch(C){console.error("Error confirming swap:",C),R={id:B.id,skillTitle:B.skillTitle,otherParty:{name:B.requesterName},createdAt:{toDate:()=>new Date}}}f(C=>[R,...C]),l(C=>C.filter(N=>N.id!==B.id)),U(!1),W(null),ee(null),s("sessions")},Se=ae=>ae?.toDate?ae.toDate().toLocaleDateString():"";return n?I.jsxs(I.Fragment,{children:[I.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[I.jsx("h1",{className:"text-3xl font-bold mb-6 text-slate-900 dark:text-white",children:"My Swaps"}),I.jsxs("div",{className:"flex border-b border-gray-200 dark:border-slate-700 mb-6",children:[I.jsxs("button",{onClick:()=>s("requests"),className:`py-2 px-4 transition-colors duration-200 ${t==="requests"?"border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400":"text-gray-500 hover:text-gray-700"}`,children:["Pending Requests (",o.length,")"]}),I.jsxs("button",{onClick:()=>s("sessions"),className:`py-2 px-4 transition-colors duration-200 ${t==="sessions"?"border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400":"text-gray-500 hover:text-gray-700"}`,children:["Confirmed Sessions (",h.length,")"]})]}),t==="requests"&&I.jsx("div",{className:"space-y-4",children:p?I.jsx("p",{className:"text-center py-10",children:"Loading requests..."}):o.length>0?o.map(ae=>I.jsxs("div",{className:"bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md",children:[I.jsxs("div",{className:"flex justify-between items-center",children:[I.jsxs("p",{className:"text-sm dark:text-gray-300",children:[I.jsx("span",{className:"font-semibold dark:text-white",children:ae.requesterName})," wants to swap for: ",I.jsx("span",{className:"font-semibold dark:text-white",children:ae.skillTitle})]}),I.jsxs("div",{className:"flex gap-2 flex-shrink-0",children:[I.jsx("button",{onClick:()=>Z(ae.id),className:"text-xs px-3 py-1 bg-red-100 text-red-700 rounded-full hover:bg-red-200",children:"Reject"}),I.jsx("button",{onClick:()=>Q(ae),className:"text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full hover:bg-green-200",children:"Accept"})]})]}),Array.isArray(ae.requesterSkills)&&ae.requesterSkills.length>0&&I.jsxs("div",{className:"mt-3 pt-3 border-t border-gray-200 dark:border-slate-700",children:[I.jsx("p",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2",children:"In return, they are offering skills like:"}),I.jsx("div",{className:"flex flex-wrap gap-2",children:ae.requesterSkills.map(P=>I.jsx("span",{className:"text-xs bg-gray-200 dark:bg-slate-600 px-2 py-1 rounded",children:P.title},P.title))})]})]},ae.id)):I.jsx("p",{className:"text-center text-gray-500 py-10",children:"You have no pending requests."})}),t==="sessions"&&I.jsx("div",{className:"space-y-4",children:v?I.jsx("p",{className:"text-center py-10",children:"Loading sessions..."}):h.length>0?h.map(ae=>{const P=ae.otherParty?.name||"an unknown user";return I.jsxs("div",{className:"bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md flex justify-between items-start",children:[I.jsxs("div",{children:[I.jsx("h3",{className:"font-bold text-lg dark:text-white",children:ae.skillTitle}),I.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["Swap confirmed with ",I.jsx("span",{className:"font-semibold",children:P}),"."]})]}),I.jsxs("div",{className:"flex flex-col items-end gap-2",children:[I.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:Se(ae.createdAt)}),I.jsx("button",{onClick:()=>e(`/chat/${ae.id}`),className:"text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200",children:"Go to Chat"})]})]},ae.id)}):I.jsx("p",{className:"text-center text-gray-500 py-10",children:"You have no confirmed sessions yet."})})]}),I.jsx(BN,{isOpen:S,onClose:()=>U(!1),onConfirmSwap:re,requesterProfile:O})]}):I.jsx("div",{className:"text-center py-10",children:"Please log in to manage your swaps."})}const _f=async(n,e,t,s="text")=>{const o=Xs(Xt,`/artifacts/sessions/${n}/messages`);await em(o,{senderId:e,content:t,type:s,createdAt:eP()})},$N=(n,e)=>{const t=Xs(Xt,`/artifacts/sessions/${n}/messages`),s=Li(t,Qx("createdAt","asc"));return X0(s,o=>{const l=o.docs.map(h=>({id:h.id,...h.data()}));e(l)})},qN=async(n,e)=>{const t=_E(vE,`sessions/${e}/${n.name}_${Date.now()}`);return await gE(t,n),await yE(t)},WN=async(n,e)=>{const t=_E(vE,`sessions/${e}/audio_${Date.now()}.webm`);return await gE(t,n),await yE(t)};function HN({sessionId:n,otherUser:e}){const{currentUser:t}=Er(),[s,o]=$.useState([]),[l,h]=$.useState(""),[f,p]=$.useState(!1),[y,v]=$.useState(!1),E=$.useRef(null),S=$.useRef([]),U=$.useRef(null),B=$.useRef(null);$.useEffect(()=>{if(!n)return;const Q=$N(n,o);return()=>Q()},[n]),$.useEffect(()=>{B.current?.scrollIntoView({behavior:"smooth"})},[s]);const W=async()=>{l.trim()&&(p(!0),await _f(n,t.uid,l.trim(),"text"),h(""),p(!1))},O=async Q=>{const re=Q.target.files[0];if(!re)return;p(!0);const Se=await qN(re,n);await _f(n,t.uid,Se,"file"),p(!1),Q.target.value=null},ee=async()=>{if(!navigator.mediaDevices)return alert("Media devices not supported");const Q=await navigator.mediaDevices.getUserMedia({audio:!0});E.current=new MediaRecorder(Q),S.current=[],E.current.ondataavailable=re=>{re.data.size>0&&S.current.push(re.data)},E.current.onstop=async()=>{const re=new Blob(S.current,{type:"audio/webm"}),Se=await WN(re,n);await _f(n,t.uid,Se,"audio")},E.current.start(),v(!0)},Z=()=>{E.current&&(E.current.stop(),v(!1))};return I.jsxs("div",{className:"flex flex-col h-full max-w-3xl mx-auto border rounded-lg shadow-md",children:[I.jsx("div",{className:"bg-indigo-600 text-white p-4 font-semibold",children:e?.name||"Chat"}),I.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-2",children:[s.map(Q=>I.jsx("div",{className:`flex ${Q.senderId===t.uid?"justify-end":"justify-start"}`,children:I.jsxs("div",{className:`p-2 rounded-lg max-w-xs ${Q.senderId===t.uid?"bg-indigo-100":"bg-gray-200"}`,children:[Q.type==="text"&&I.jsx("span",{children:Q.content}),Q.type==="file"&&I.jsx("a",{href:Q.content,target:"_blank",rel:"noreferrer",className:"text-blue-600 underline",children:"Download File"}),Q.type==="audio"&&I.jsx("audio",{controls:!0,src:Q.content})]})},Q.id)),I.jsx("div",{ref:B})]}),I.jsxs("div",{className:"flex items-center p-4 border-t gap-2",children:[I.jsx("input",{type:"text",className:"flex-1 p-2 border rounded-lg",value:l,onChange:Q=>h(Q.target.value),placeholder:"Type a message...",onKeyDown:Q=>Q.key==="Enter"&&W()}),I.jsx("input",{type:"file",ref:U,className:"hidden",onChange:O}),I.jsx("button",{onClick:()=>U.current.click(),className:"px-3 py-2 bg-gray-300 rounded-lg",children:"📎"}),I.jsx("button",{onClick:y?Z:ee,className:`px-3 py-2 rounded-lg ${y?"bg-red-500 text-white":"bg-green-500 text-white"}`,children:y?"Stop":"🎤"}),I.jsx("button",{onClick:W,disabled:f,className:"px-4 py-2 bg-indigo-600 text-white rounded-lg disabled:bg-gray-400",children:"Send"})]})]})}function GN(){const{sessionId:n}=cI(),{currentUser:e}=Er(),[t,s]=$.useState(null);return $.useEffect(()=>{if(!e)return;(async()=>{const h=(await EE(e.uid)).find(f=>f.id===n);s(h)})()},[n,e]),t?I.jsx(HN,{sessionId:n,otherUser:t.otherParty}):I.jsx("p",{className:"text-center py-10",children:"Loading chat..."})}function KN(){return I.jsx(Sv,{basename:"/Skillbarter",children:I.jsxs("div",{className:"min-h-screen flex flex-col bg-gray-100 dark:bg-slate-900 text-slate-900 dark:text-slate-200",children:[I.jsx(RN,{}),I.jsx("main",{className:"flex-grow",children:I.jsxs(kI,{children:[I.jsx(Fr,{path:"/",element:I.jsx(xN,{})}),I.jsx(Fr,{path:"/login",element:I.jsx(PN,{})}),I.jsx(Fr,{path:"/signup",element:I.jsx(NN,{})}),I.jsx(Fr,{path:"/browse",element:I.jsx(UN,{})}),I.jsx(Fr,{path:"/dashboard",element:I.jsx(mc,{children:I.jsx(VN,{})})}),I.jsx(Fr,{path:"/profile",element:I.jsx(mc,{children:I.jsx(FN,{})})}),I.jsx(Fr,{path:"/requests",element:I.jsx(mc,{children:I.jsx(zN,{})})}),I.jsx(Fr,{path:"/chat/:sessionId",element:I.jsx(mc,{children:I.jsx(GN,{})})})]})}),I.jsx(AN,{})]})})}const QN=LT.createRoot(document.getElementById("root"));QN.render(I.jsx(hv.StrictMode,{children:I.jsx(Sv,{children:I.jsx(SN,{children:I.jsx(KN,{})})})}));
