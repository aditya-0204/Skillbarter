function BE(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function W_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var jd={exports:{}},Xa={},Bd={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function zE(){if(Gg)return Re;Gg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function I(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,q={};function U(V,G,fe){this.props=V,this.context=G,this.refs=q,this.updater=fe||O}U.prototype.isReactComponent={},U.prototype.setState=function(V,G){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,G,"setState")},U.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function re(){}re.prototype=U.prototype;function ee(V,G,fe){this.props=V,this.context=G,this.refs=q,this.updater=fe||O}var te=ee.prototype=new re;te.constructor=ee,B(te,U.prototype),te.isPureReactComponent=!0;var oe=Array.isArray,ke=Object.prototype.hasOwnProperty,Ie={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function S(V,G,fe){var Se,Ae={},De=null,Me=null;if(G!=null)for(Se in G.ref!==void 0&&(Me=G.ref),G.key!==void 0&&(De=""+G.key),G)ke.call(G,Se)&&!D.hasOwnProperty(Se)&&(Ae[Se]=G[Se]);var Ue=arguments.length-2;if(Ue===1)Ae.children=fe;else if(1<Ue){for(var $e=Array(Ue),wt=0;wt<Ue;wt++)$e[wt]=arguments[wt+2];Ae.children=$e}if(V&&V.defaultProps)for(Se in Ue=V.defaultProps,Ue)Ae[Se]===void 0&&(Ae[Se]=Ue[Se]);return{$$typeof:n,type:V,key:De,ref:Me,props:Ae,_owner:Ie.current}}function C(V,G){return{$$typeof:n,type:V.type,key:G,ref:V.ref,props:V.props,_owner:V._owner}}function x(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function b(V){var G={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(fe){return G[fe]})}var L=/\/+/g;function k(V,G){return typeof V=="object"&&V!==null&&V.key!=null?b(""+V.key):G.toString(36)}function it(V,G,fe,Se,Ae){var De=typeof V;(De==="undefined"||De==="boolean")&&(V=null);var Me=!1;if(V===null)Me=!0;else switch(De){case"string":case"number":Me=!0;break;case"object":switch(V.$$typeof){case n:case e:Me=!0}}if(Me)return Me=V,Ae=Ae(Me),V=Se===""?"."+k(Me,0):Se,oe(Ae)?(fe="",V!=null&&(fe=V.replace(L,"$&/")+"/"),it(Ae,G,fe,"",function(wt){return wt})):Ae!=null&&(x(Ae)&&(Ae=C(Ae,fe+(!Ae.key||Me&&Me.key===Ae.key?"":(""+Ae.key).replace(L,"$&/")+"/")+V)),G.push(Ae)),1;if(Me=0,Se=Se===""?".":Se+":",oe(V))for(var Ue=0;Ue<V.length;Ue++){De=V[Ue];var $e=Se+k(De,Ue);Me+=it(De,G,fe,$e,Ae)}else if($e=I(V),typeof $e=="function")for(V=$e.call(V),Ue=0;!(De=V.next()).done;)De=De.value,$e=Se+k(De,Ue++),Me+=it(De,G,fe,$e,Ae);else if(De==="object")throw G=String(V),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Me}function bt(V,G,fe){if(V==null)return V;var Se=[],Ae=0;return it(V,Se,"","",function(De){return G.call(fe,De,Ae++)}),Se}function Vt(V){if(V._status===-1){var G=V._result;G=G(),G.then(function(fe){(V._status===0||V._status===-1)&&(V._status=1,V._result=fe)},function(fe){(V._status===0||V._status===-1)&&(V._status=2,V._result=fe)}),V._status===-1&&(V._status=0,V._result=G)}if(V._status===1)return V._result.default;throw V._result}var Be={current:null},ne={transition:null},me={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:ne,ReactCurrentOwner:Ie};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:bt,forEach:function(V,G,fe){bt(V,function(){G.apply(this,arguments)},fe)},count:function(V){var G=0;return bt(V,function(){G++}),G},toArray:function(V){return bt(V,function(G){return G})||[]},only:function(V){if(!x(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Re.Component=U,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=ee,Re.StrictMode=i,Re.Suspense=m,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Re.act=ae,Re.cloneElement=function(V,G,fe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Se=B({},V.props),Ae=V.key,De=V.ref,Me=V._owner;if(G!=null){if(G.ref!==void 0&&(De=G.ref,Me=Ie.current),G.key!==void 0&&(Ae=""+G.key),V.type&&V.type.defaultProps)var Ue=V.type.defaultProps;for($e in G)ke.call(G,$e)&&!D.hasOwnProperty($e)&&(Se[$e]=G[$e]===void 0&&Ue!==void 0?Ue[$e]:G[$e])}var $e=arguments.length-2;if($e===1)Se.children=fe;else if(1<$e){Ue=Array($e);for(var wt=0;wt<$e;wt++)Ue[wt]=arguments[wt+2];Se.children=Ue}return{$$typeof:n,type:V.type,key:Ae,ref:De,props:Se,_owner:Me}},Re.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Re.createElement=S,Re.createFactory=function(V){var G=S.bind(null,V);return G.type=V,G},Re.createRef=function(){return{current:null}},Re.forwardRef=function(V){return{$$typeof:f,render:V}},Re.isValidElement=x,Re.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:Vt}},Re.memo=function(V,G){return{$$typeof:y,type:V,compare:G===void 0?null:G}},Re.startTransition=function(V){var G=ne.transition;ne.transition={};try{V()}finally{ne.transition=G}},Re.unstable_act=ae,Re.useCallback=function(V,G){return Be.current.useCallback(V,G)},Re.useContext=function(V){return Be.current.useContext(V)},Re.useDebugValue=function(){},Re.useDeferredValue=function(V){return Be.current.useDeferredValue(V)},Re.useEffect=function(V,G){return Be.current.useEffect(V,G)},Re.useId=function(){return Be.current.useId()},Re.useImperativeHandle=function(V,G,fe){return Be.current.useImperativeHandle(V,G,fe)},Re.useInsertionEffect=function(V,G){return Be.current.useInsertionEffect(V,G)},Re.useLayoutEffect=function(V,G){return Be.current.useLayoutEffect(V,G)},Re.useMemo=function(V,G){return Be.current.useMemo(V,G)},Re.useReducer=function(V,G,fe){return Be.current.useReducer(V,G,fe)},Re.useRef=function(V){return Be.current.useRef(V)},Re.useState=function(V){return Be.current.useState(V)},Re.useSyncExternalStore=function(V,G,fe){return Be.current.useSyncExternalStore(V,G,fe)},Re.useTransition=function(){return Be.current.useTransition()},Re.version="18.3.1",Re}var Qg;function Bf(){return Qg||(Qg=1,Bd.exports=zE()),Bd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function $E(){if(Yg)return Xa;Yg=1;var n=Bf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,m,y){var w,T={},I=null,O=null;y!==void 0&&(I=""+y),m.key!==void 0&&(I=""+m.key),m.ref!==void 0&&(O=m.ref);for(w in m)i.call(m,w)&&!l.hasOwnProperty(w)&&(T[w]=m[w]);if(f&&f.defaultProps)for(w in m=f.defaultProps,m)T[w]===void 0&&(T[w]=m[w]);return{$$typeof:e,type:f,key:I,ref:O,props:T,_owner:o.current}}return Xa.Fragment=t,Xa.jsx=h,Xa.jsxs=h,Xa}var Xg;function qE(){return Xg||(Xg=1,jd.exports=$E()),jd.exports}var A=qE(),W=Bf();const H_=W_(W),WE=BE({__proto__:null,default:H_},[W]);var Yu={},zd={exports:{}},tn={},$d={exports:{}},qd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function HE(){return Jg||(Jg=1,(function(n){function e(ne,me){var ae=ne.length;ne.push(me);e:for(;0<ae;){var V=ae-1>>>1,G=ne[V];if(0<o(G,me))ne[V]=me,ne[ae]=G,ae=V;else break e}}function t(ne){return ne.length===0?null:ne[0]}function i(ne){if(ne.length===0)return null;var me=ne[0],ae=ne.pop();if(ae!==me){ne[0]=ae;e:for(var V=0,G=ne.length,fe=G>>>1;V<fe;){var Se=2*(V+1)-1,Ae=ne[Se],De=Se+1,Me=ne[De];if(0>o(Ae,ae))De<G&&0>o(Me,Ae)?(ne[V]=Me,ne[De]=ae,V=De):(ne[V]=Ae,ne[Se]=ae,V=Se);else if(De<G&&0>o(Me,ae))ne[V]=Me,ne[De]=ae,V=De;else break e}}return me}function o(ne,me){var ae=ne.sortIndex-me.sortIndex;return ae!==0?ae:ne.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var m=[],y=[],w=1,T=null,I=3,O=!1,B=!1,q=!1,U=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(ne){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=ne)i(y),me.sortIndex=me.expirationTime,e(m,me);else break;me=t(y)}}function oe(ne){if(q=!1,te(ne),!B)if(t(m)!==null)B=!0,Vt(ke);else{var me=t(y);me!==null&&Be(oe,me.startTime-ne)}}function ke(ne,me){B=!1,q&&(q=!1,re(S),S=-1),O=!0;var ae=I;try{for(te(me),T=t(m);T!==null&&(!(T.expirationTime>me)||ne&&!b());){var V=T.callback;if(typeof V=="function"){T.callback=null,I=T.priorityLevel;var G=V(T.expirationTime<=me);me=n.unstable_now(),typeof G=="function"?T.callback=G:T===t(m)&&i(m),te(me)}else i(m);T=t(m)}if(T!==null)var fe=!0;else{var Se=t(y);Se!==null&&Be(oe,Se.startTime-me),fe=!1}return fe}finally{T=null,I=ae,O=!1}}var Ie=!1,D=null,S=-1,C=5,x=-1;function b(){return!(n.unstable_now()-x<C)}function L(){if(D!==null){var ne=n.unstable_now();x=ne;var me=!0;try{me=D(!0,ne)}finally{me?k():(Ie=!1,D=null)}}else Ie=!1}var k;if(typeof ee=="function")k=function(){ee(L)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,bt=it.port2;it.port1.onmessage=L,k=function(){bt.postMessage(null)}}else k=function(){U(L,0)};function Vt(ne){D=ne,Ie||(Ie=!0,k())}function Be(ne,me){S=U(function(){ne(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ne){ne.callback=null},n.unstable_continueExecution=function(){B||O||(B=!0,Vt(ke))},n.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ne?Math.floor(1e3/ne):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(m)},n.unstable_next=function(ne){switch(I){case 1:case 2:case 3:var me=3;break;default:me=I}var ae=I;I=me;try{return ne()}finally{I=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ne,me){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var ae=I;I=ne;try{return me()}finally{I=ae}},n.unstable_scheduleCallback=function(ne,me,ae){var V=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?V+ae:V):ae=V,ne){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ae+G,ne={id:w++,callback:me,priorityLevel:ne,startTime:ae,expirationTime:G,sortIndex:-1},ae>V?(ne.sortIndex=ae,e(y,ne),t(m)===null&&ne===t(y)&&(q?(re(S),S=-1):q=!0,Be(oe,ae-V))):(ne.sortIndex=G,e(m,ne),B||O||(B=!0,Vt(ke))),ne},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(ne){var me=I;return function(){var ae=I;I=me;try{return ne.apply(this,arguments)}finally{I=ae}}}})(qd)),qd}var Zg;function KE(){return Zg||(Zg=1,$d.exports=HE()),$d.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function GE(){if(ey)return tn;ey=1;var n=Bf(),e=KE();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function I(r){return m.call(T,r)?!0:m.call(w,r)?!1:y.test(r)?T[r]=!0:(w[r]=!0,!1)}function O(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function B(r,s,a,c){if(s===null||typeof s>"u"||O(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function q(r,s,a,c,d,g,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=v}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){U[r]=new q(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];U[s]=new q(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){U[r]=new q(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){U[r]=new q(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){U[r]=new q(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){U[r]=new q(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){U[r]=new q(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){U[r]=new q(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){U[r]=new q(r,5,!1,r.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function ee(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(re,ee);U[s]=new q(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(re,ee);U[s]=new q(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(re,ee);U[s]=new q(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){U[r]=new q(r,1,!1,r.toLowerCase(),null,!1,!1)}),U.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){U[r]=new q(r,1,!1,r.toLowerCase(),null,!0,!0)});function te(r,s,a,c){var d=U.hasOwnProperty(s)?U[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(B(s,a,d,c)&&(a=null),c||d===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var oe=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ke=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),b=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),it=Symbol.for("react.suspense_list"),bt=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),ne=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=ne&&r[ne]||r["@@iterator"],typeof r=="function"?r:null)}var ae=Object.assign,V;function G(r){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var fe=!1;function Se(r,s){if(!r||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var c=z}Reflect.construct(r,[],s)}else{try{s.call()}catch(z){c=z}r.call(s.prototype)}else{try{throw Error()}catch(z){c=z}r()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),g=c.stack.split(`
`),v=d.length-1,R=g.length-1;1<=v&&0<=R&&d[v]!==g[R];)R--;for(;1<=v&&0<=R;v--,R--)if(d[v]!==g[R]){if(v!==1||R!==1)do if(v--,R--,0>R||d[v]!==g[R]){var P=`
`+d[v].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=v&&0<=R);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?G(r):""}function Ae(r){switch(r.tag){case 5:return G(r.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return r=Se(r.type,!1),r;case 11:return r=Se(r.type.render,!1),r;case 1:return r=Se(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case D:return"Fragment";case Ie:return"Portal";case C:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case it:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case b:return(r.displayName||"Context")+".Consumer";case x:return(r._context.displayName||"Context")+".Provider";case L:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case bt:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case Vt:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Me(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ue(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function wt(r){var s=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,g.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function _r(r){r._valueTracker||(r._valueTracker=wt(r))}function Os(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=$e(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Qr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Wi(r,s){var a=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Ls(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Ue(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ra(r,s){s=s.checked,s!=null&&te(r,"checked",s,!1)}function ia(r,s){ra(r,s);var a=Ue(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Ms(r,s.type,a):s.hasOwnProperty("defaultValue")&&Ms(r,s.type,Ue(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Ol(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Ms(r,s,a){(s!=="number"||Qr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var vr=Array.isArray;function wr(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Ue(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function sa(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Us(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(vr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Ue(a)}}function Fs(r,s){var a=Ue(s.value),c=Ue(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function oa(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function pt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?pt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Er,aa=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,d)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Er.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Yr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ki=["Webkit","ms","Moz","O"];Object.keys(Hi).forEach(function(r){Ki.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Hi[s]=Hi[r]})});function la(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Hi.hasOwnProperty(r)&&Hi[r]?(""+s).trim():s+"px"}function ua(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=la(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var ca=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ha(r,s){if(s){if(ca[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function da(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gi=null;function js(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Bs=null,pn=null,Gn=null;function zs(r){if(r=La(r)){if(typeof Bs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=hu(s),Bs(r.stateNode,r.type,s))}}function Qn(r){pn?Gn?Gn.push(r):Gn=[r]:pn=r}function fa(){if(pn){var r=pn,s=Gn;if(Gn=pn=null,zs(r),s)for(r=0;r<s.length;r++)zs(s[r])}}function Qi(r,s){return r(s)}function pa(){}var Tr=!1;function ma(r,s,a){if(Tr)return r(s,a);Tr=!0;try{return Qi(r,s,a)}finally{Tr=!1,(pn!==null||Gn!==null)&&(pa(),fa())}}function st(r,s){var a=r.stateNode;if(a===null)return null;var c=hu(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var $s=!1;if(f)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){$s=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{$s=!1}function Yi(r,s,a,c,d,g,v,R,P){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(Y){this.onError(Y)}}var Xi=!1,qs=null,Pn=!1,ga=null,ph={onError:function(r){Xi=!0,qs=r}};function Ws(r,s,a,c,d,g,v,R,P){Xi=!1,qs=null,Yi.apply(ph,arguments)}function Ll(r,s,a,c,d,g,v,R,P){if(Ws.apply(this,arguments),Xi){if(Xi){var z=qs;Xi=!1,qs=null}else throw Error(t(198));Pn||(Pn=!0,ga=z)}}function xn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Ji(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Nn(r){if(xn(r)!==r)throw Error(t(188))}function Ml(r){var s=r.alternate;if(!s){if(s=xn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Nn(d),r;if(g===c)return Nn(d),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var v=!1,R=d.child;R;){if(R===a){v=!0,a=d,c=g;break}if(R===c){v=!0,c=d,a=g;break}R=R.sibling}if(!v){for(R=g.child;R;){if(R===a){v=!0,a=g,c=d;break}if(R===c){v=!0,c=g,a=d;break}R=R.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ya(r){return r=Ml(r),r!==null?Hs(r):null}function Hs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Hs(r);if(s!==null)return s;r=r.sibling}return null}var Ks=e.unstable_scheduleCallback,_a=e.unstable_cancelCallback,Ul=e.unstable_shouldYield,mh=e.unstable_requestPaint,qe=e.unstable_now,Fl=e.unstable_getCurrentPriorityLevel,Zi=e.unstable_ImmediatePriority,Xr=e.unstable_UserBlockingPriority,mn=e.unstable_NormalPriority,va=e.unstable_LowPriority,jl=e.unstable_IdlePriority,es=null,on=null;function Bl(r){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(es,r,void 0,(r.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:$l,wa=Math.log,zl=Math.LN2;function $l(r){return r>>>=0,r===0?32:31-(wa(r)/zl|0)|0}var Gs=64,Qs=4194304;function Jr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function ts(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,g=r.pingedLanes,v=a&268435455;if(v!==0){var R=v&~d;R!==0?c=Jr(R):(g&=v,g!==0&&(c=Jr(g)))}else v=a&~d,v!==0?c=Jr(v):g!==0&&(c=Jr(g));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,g=s&-s,d>=g||d===16&&(g&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-$t(s),d=1<<a,c|=r[a],s&=~d;return c}function gh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ir(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,g=r.pendingLanes;0<g;){var v=31-$t(g),R=1<<v,P=d[v];P===-1?((R&a)===0||(R&c)!==0)&&(d[v]=gh(R,s)):P<=s&&(r.expiredLanes|=R),g&=~R}}function an(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function ns(){var r=Gs;return Gs<<=1,(Gs&4194240)===0&&(Gs=64),r}function Zr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ei(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-$t(s),r[s]=a}function ze(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-$t(a),g=1<<d;s[d]=0,c[d]=-1,r[d]=-1,a&=~g}}function ti(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-$t(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}var Ne=0;function ni(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var ql,Ys,Wl,Hl,Kl,Ea=!1,Yn=[],Rt=null,Dn=null,bn=null,ri=new Map,gn=new Map,Xn=[],yh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gl(r,s){switch(r){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":ri.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":gn.delete(s.pointerId)}}function Gt(r,s,a,c,d,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},s!==null&&(s=La(s),s!==null&&Ys(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function _h(r,s,a,c,d){switch(s){case"focusin":return Rt=Gt(Rt,r,s,a,c,d),!0;case"dragenter":return Dn=Gt(Dn,r,s,a,c,d),!0;case"mouseover":return bn=Gt(bn,r,s,a,c,d),!0;case"pointerover":var g=d.pointerId;return ri.set(g,Gt(ri.get(g)||null,r,s,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,gn.set(g,Gt(gn.get(g)||null,r,s,a,c,d)),!0}return!1}function Ql(r){var s=as(r.target);if(s!==null){var a=xn(s);if(a!==null){if(s=a.tag,s===13){if(s=Ji(a),s!==null){r.blockedOn=s,Kl(r.priority,function(){Wl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Sr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Xs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);Gi=c,a.target.dispatchEvent(c),Gi=null}else return s=La(a),s!==null&&Ys(s),r.blockedOn=a,!1;s.shift()}return!0}function rs(r,s,a){Sr(r)&&a.delete(s)}function Yl(){Ea=!1,Rt!==null&&Sr(Rt)&&(Rt=null),Dn!==null&&Sr(Dn)&&(Dn=null),bn!==null&&Sr(bn)&&(bn=null),ri.forEach(rs),gn.forEach(rs)}function Vn(r,s){r.blockedOn===s&&(r.blockedOn=null,Ea||(Ea=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Yl)))}function On(r){function s(d){return Vn(d,r)}if(0<Yn.length){Vn(Yn[0],r);for(var a=1;a<Yn.length;a++){var c=Yn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Rt!==null&&Vn(Rt,r),Dn!==null&&Vn(Dn,r),bn!==null&&Vn(bn,r),ri.forEach(s),gn.forEach(s),a=0;a<Xn.length;a++)c=Xn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Xn.length&&(a=Xn[0],a.blockedOn===null);)Ql(a),a.blockedOn===null&&Xn.shift()}var Ar=oe.ReactCurrentBatchConfig,ii=!0;function Ye(r,s,a,c){var d=Ne,g=Ar.transition;Ar.transition=null;try{Ne=1,Ta(r,s,a,c)}finally{Ne=d,Ar.transition=g}}function vh(r,s,a,c){var d=Ne,g=Ar.transition;Ar.transition=null;try{Ne=4,Ta(r,s,a,c)}finally{Ne=d,Ar.transition=g}}function Ta(r,s,a,c){if(ii){var d=Xs(r,s,a,c);if(d===null)xh(r,s,c,is,a),Gl(r,c);else if(_h(d,r,s,a,c))c.stopPropagation();else if(Gl(r,c),s&4&&-1<yh.indexOf(r)){for(;d!==null;){var g=La(d);if(g!==null&&ql(g),g=Xs(r,s,a,c),g===null&&xh(r,s,c,is,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else xh(r,s,c,null,a)}}var is=null;function Xs(r,s,a,c){if(is=null,r=js(c),r=as(r),r!==null)if(s=xn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Ji(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return is=r,null}function Ia(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fl()){case Zi:return 1;case Xr:return 4;case mn:case va:return 16;case jl:return 536870912;default:return 16}default:return 16}}var ln=null,Js=null,Qt=null;function Sa(){if(Qt)return Qt;var r,s=Js,a=s.length,c,d="value"in ln?ln.value:ln.textContent,g=d.length;for(r=0;r<a&&s[r]===d[r];r++);var v=a-r;for(c=1;c<=v&&s[a-c]===d[g-c];c++);return Qt=d.slice(r,1<c?1-c:void 0)}function Zs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Jn(){return!0}function Aa(){return!1}function kt(r){function s(a,c,d,g,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var R in r)r.hasOwnProperty(R)&&(a=r[R],this[R]=a?a(g):g[R]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Jn:Aa,this.isPropagationStopped=Aa,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),s}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=kt(Ln),Zn=ae({},Ln,{view:0,detail:0}),wh=kt(Zn),to,Rr,si,ss=ae({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==si&&(si&&r.type==="mousemove"?(to=r.screenX-si.screenX,Rr=r.screenY-si.screenY):Rr=to=0,si=r),to)},movementY:function(r){return"movementY"in r?r.movementY:Rr}}),no=kt(ss),Ra=ae({},ss,{dataTransfer:0}),Xl=kt(Ra),ro=ae({},Zn,{relatedTarget:0}),io=kt(ro),Jl=ae({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),kr=kt(Jl),Zl=ae({},Ln,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),eu=kt(Zl),tu=ae({},Ln,{data:0}),ka=kt(tu),so={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ru(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=nu[r])?!!s[r]:!1}function er(){return ru}var u=ae({},Zn,{key:function(r){if(r.key){var s=so[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Zs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?qt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(r){return r.type==="keypress"?Zs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Zs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),p=kt(u),_=ae({},ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=kt(_),M=ae({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er}),$=kt(M),Z=ae({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=kt(Z),gt=ae({},ss,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),be=kt(gt),Et=[9,13,27,32],ut=f&&"CompositionEvent"in window,yn=null;f&&"documentMode"in document&&(yn=document.documentMode);var un=f&&"TextEvent"in window&&!yn,os=f&&(!ut||yn&&8<yn&&11>=yn),oo=" ",zp=!1;function $p(r,s){switch(r){case"keyup":return Et.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var ao=!1;function U0(r,s){switch(r){case"compositionend":return qp(s);case"keypress":return s.which!==32?null:(zp=!0,oo);case"textInput":return r=s.data,r===oo&&zp?null:r;default:return null}}function F0(r,s){if(ao)return r==="compositionend"||!ut&&$p(r,s)?(r=Sa(),Qt=Js=ln=null,ao=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return os&&s.locale!=="ko"?null:s.data;default:return null}}var j0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!j0[r.type]:s==="textarea"}function Hp(r,s,a,c){Qn(c),s=lu(s,"onChange"),0<s.length&&(a=new eo("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var Ca=null,Pa=null;function B0(r){cm(r,0)}function iu(r){var s=fo(r);if(Os(s))return r}function z0(r,s){if(r==="change")return s}var Kp=!1;if(f){var Eh;if(f){var Th="oninput"in document;if(!Th){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),Th=typeof Gp.oninput=="function"}Eh=Th}else Eh=!1;Kp=Eh&&(!document.documentMode||9<document.documentMode)}function Qp(){Ca&&(Ca.detachEvent("onpropertychange",Yp),Pa=Ca=null)}function Yp(r){if(r.propertyName==="value"&&iu(Pa)){var s=[];Hp(s,Pa,r,js(r)),ma(B0,s)}}function $0(r,s,a){r==="focusin"?(Qp(),Ca=s,Pa=a,Ca.attachEvent("onpropertychange",Yp)):r==="focusout"&&Qp()}function q0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return iu(Pa)}function W0(r,s){if(r==="click")return iu(s)}function H0(r,s){if(r==="input"||r==="change")return iu(s)}function K0(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Mn=typeof Object.is=="function"?Object.is:K0;function xa(r,s){if(Mn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!m.call(s,d)||!Mn(r[d],s[d]))return!1}return!0}function Xp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Jp(r,s){var a=Xp(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xp(a)}}function Zp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Zp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function em(){for(var r=window,s=Qr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Qr(r.document)}return s}function Ih(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function G0(r){var s=em(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Zp(a.ownerDocument.documentElement,a)){if(c!==null&&Ih(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!r.extend&&g>c&&(d=c,c=g,g=d),d=Jp(a,g);var v=Jp(a,c);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Q0=f&&"documentMode"in document&&11>=document.documentMode,lo=null,Sh=null,Na=null,Ah=!1;function tm(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ah||lo==null||lo!==Qr(c)||(c=lo,"selectionStart"in c&&Ih(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Na&&xa(Na,c)||(Na=c,c=lu(Sh,"onSelect"),0<c.length&&(s=new eo("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=lo)))}function su(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var uo={animationend:su("Animation","AnimationEnd"),animationiteration:su("Animation","AnimationIteration"),animationstart:su("Animation","AnimationStart"),transitionend:su("Transition","TransitionEnd")},Rh={},nm={};f&&(nm=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function ou(r){if(Rh[r])return Rh[r];if(!uo[r])return r;var s=uo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in nm)return Rh[r]=s[a];return r}var rm=ou("animationend"),im=ou("animationiteration"),sm=ou("animationstart"),om=ou("transitionend"),am=new Map,lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function oi(r,s){am.set(r,s),l(s,[r])}for(var kh=0;kh<lm.length;kh++){var Ch=lm[kh],Y0=Ch.toLowerCase(),X0=Ch[0].toUpperCase()+Ch.slice(1);oi(Y0,"on"+X0)}oi(rm,"onAnimationEnd"),oi(im,"onAnimationIteration"),oi(sm,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(om,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function um(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,Ll(c,s,void 0,r),r.currentTarget=null}function cm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var v=c.length-1;0<=v;v--){var R=c[v],P=R.instance,z=R.currentTarget;if(R=R.listener,P!==g&&d.isPropagationStopped())break e;um(d,R,z),g=P}else for(v=0;v<c.length;v++){if(R=c[v],P=R.instance,z=R.currentTarget,R=R.listener,P!==g&&d.isPropagationStopped())break e;um(d,R,z),g=P}}}if(Pn)throw r=ga,Pn=!1,ga=null,r}function Ke(r,s){var a=s[Lh];a===void 0&&(a=s[Lh]=new Set);var c=r+"__bubble";a.has(c)||(hm(s,r,2,!1),a.add(c))}function Ph(r,s,a){var c=0;s&&(c|=4),hm(a,r,c,s)}var au="_reactListening"+Math.random().toString(36).slice(2);function ba(r){if(!r[au]){r[au]=!0,i.forEach(function(a){a!=="selectionchange"&&(J0.has(a)||Ph(a,!1,r),Ph(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[au]||(s[au]=!0,Ph("selectionchange",!1,s))}}function hm(r,s,a,c){switch(Ia(s)){case 1:var d=Ye;break;case 4:d=vh;break;default:d=Ta}a=d.bind(null,s,a,r),d=void 0,!$s||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function xh(r,s,a,c,d){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var R=c.stateNode.containerInfo;if(R===d||R.nodeType===8&&R.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;R!==null;){if(v=as(R),v===null)return;if(P=v.tag,P===5||P===6){c=g=v;continue e}R=R.parentNode}}c=c.return}ma(function(){var z=g,Y=js(a),X=[];e:{var Q=am.get(r);if(Q!==void 0){var se=eo,ce=r;switch(r){case"keypress":if(Zs(a)===0)break e;case"keydown":case"keyup":se=p;break;case"focusin":ce="focus",se=io;break;case"focusout":ce="blur",se=io;break;case"beforeblur":case"afterblur":se=io;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=no;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Xl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=$;break;case rm:case im:case sm:se=kr;break;case om:se=je;break;case"scroll":se=wh;break;case"wheel":se=be;break;case"copy":case"cut":case"paste":se=eu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=E}var he=(s&4)!==0,ot=!he&&r==="scroll",F=he?Q!==null?Q+"Capture":null:Q;he=[];for(var N=z,j;N!==null;){j=N;var J=j.stateNode;if(j.tag===5&&J!==null&&(j=J,F!==null&&(J=st(N,F),J!=null&&he.push(Va(N,J,j)))),ot)break;N=N.return}0<he.length&&(Q=new se(Q,ce,null,a,Y),X.push({event:Q,listeners:he}))}}if((s&7)===0){e:{if(Q=r==="mouseover"||r==="pointerover",se=r==="mouseout"||r==="pointerout",Q&&a!==Gi&&(ce=a.relatedTarget||a.fromElement)&&(as(ce)||ce[Cr]))break e;if((se||Q)&&(Q=Y.window===Y?Y:(Q=Y.ownerDocument)?Q.defaultView||Q.parentWindow:window,se?(ce=a.relatedTarget||a.toElement,se=z,ce=ce?as(ce):null,ce!==null&&(ot=xn(ce),ce!==ot||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(se=null,ce=z),se!==ce)){if(he=no,J="onMouseLeave",F="onMouseEnter",N="mouse",(r==="pointerout"||r==="pointerover")&&(he=E,J="onPointerLeave",F="onPointerEnter",N="pointer"),ot=se==null?Q:fo(se),j=ce==null?Q:fo(ce),Q=new he(J,N+"leave",se,a,Y),Q.target=ot,Q.relatedTarget=j,J=null,as(Y)===z&&(he=new he(F,N+"enter",ce,a,Y),he.target=j,he.relatedTarget=ot,J=he),ot=J,se&&ce)t:{for(he=se,F=ce,N=0,j=he;j;j=co(j))N++;for(j=0,J=F;J;J=co(J))j++;for(;0<N-j;)he=co(he),N--;for(;0<j-N;)F=co(F),j--;for(;N--;){if(he===F||F!==null&&he===F.alternate)break t;he=co(he),F=co(F)}he=null}else he=null;se!==null&&dm(X,Q,se,he,!1),ce!==null&&ot!==null&&dm(X,ot,ce,he,!0)}}e:{if(Q=z?fo(z):window,se=Q.nodeName&&Q.nodeName.toLowerCase(),se==="select"||se==="input"&&Q.type==="file")var de=z0;else if(Wp(Q))if(Kp)de=H0;else{de=q0;var ge=$0}else(se=Q.nodeName)&&se.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(de=W0);if(de&&(de=de(r,z))){Hp(X,de,a,Y);break e}ge&&ge(r,Q,z),r==="focusout"&&(ge=Q._wrapperState)&&ge.controlled&&Q.type==="number"&&Ms(Q,"number",Q.value)}switch(ge=z?fo(z):window,r){case"focusin":(Wp(ge)||ge.contentEditable==="true")&&(lo=ge,Sh=z,Na=null);break;case"focusout":Na=Sh=lo=null;break;case"mousedown":Ah=!0;break;case"contextmenu":case"mouseup":case"dragend":Ah=!1,tm(X,a,Y);break;case"selectionchange":if(Q0)break;case"keydown":case"keyup":tm(X,a,Y)}var ye;if(ut)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else ao?$p(r,a)&&(we="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(os&&a.locale!=="ko"&&(ao||we!=="onCompositionStart"?we==="onCompositionEnd"&&ao&&(ye=Sa()):(ln=Y,Js="value"in ln?ln.value:ln.textContent,ao=!0)),ge=lu(z,we),0<ge.length&&(we=new ka(we,r,null,a,Y),X.push({event:we,listeners:ge}),ye?we.data=ye:(ye=qp(a),ye!==null&&(we.data=ye)))),(ye=un?U0(r,a):F0(r,a))&&(z=lu(z,"onBeforeInput"),0<z.length&&(Y=new ka("onBeforeInput","beforeinput",null,a,Y),X.push({event:Y,listeners:z}),Y.data=ye))}cm(X,s)})}function Va(r,s,a){return{instance:r,listener:s,currentTarget:a}}function lu(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=st(r,a),g!=null&&c.unshift(Va(r,g,d)),g=st(r,s),g!=null&&c.push(Va(r,g,d))),r=r.return}return c}function co(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function dm(r,s,a,c,d){for(var g=s._reactName,v=[];a!==null&&a!==c;){var R=a,P=R.alternate,z=R.stateNode;if(P!==null&&P===c)break;R.tag===5&&z!==null&&(R=z,d?(P=st(a,g),P!=null&&v.unshift(Va(a,P,R))):d||(P=st(a,g),P!=null&&v.push(Va(a,P,R)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var Z0=/\r\n?/g,eE=/\u0000|\uFFFD/g;function fm(r){return(typeof r=="string"?r:""+r).replace(Z0,`
`).replace(eE,"")}function uu(r,s,a){if(s=fm(s),fm(r)!==s&&a)throw Error(t(425))}function cu(){}var Nh=null,Dh=null;function bh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Vh=typeof setTimeout=="function"?setTimeout:void 0,tE=typeof clearTimeout=="function"?clearTimeout:void 0,pm=typeof Promise=="function"?Promise:void 0,nE=typeof queueMicrotask=="function"?queueMicrotask:typeof pm<"u"?function(r){return pm.resolve(null).then(r).catch(rE)}:Vh;function rE(r){setTimeout(function(){throw r})}function Oh(r,s){var a=s,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),On(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);On(s)}function ai(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function mm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var ho=Math.random().toString(36).slice(2),tr="__reactFiber$"+ho,Oa="__reactProps$"+ho,Cr="__reactContainer$"+ho,Lh="__reactEvents$"+ho,iE="__reactListeners$"+ho,sE="__reactHandles$"+ho;function as(r){var s=r[tr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Cr]||a[tr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=mm(r);r!==null;){if(a=r[tr])return a;r=mm(r)}return s}r=a,a=r.parentNode}return null}function La(r){return r=r[tr]||r[Cr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function fo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function hu(r){return r[Oa]||null}var Mh=[],po=-1;function li(r){return{current:r}}function Ge(r){0>po||(r.current=Mh[po],Mh[po]=null,po--)}function We(r,s){po++,Mh[po]=r.current,r.current=s}var ui={},Ot=li(ui),Yt=li(!1),ls=ui;function mo(r,s){var a=r.type.contextTypes;if(!a)return ui;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Xt(r){return r=r.childContextTypes,r!=null}function du(){Ge(Yt),Ge(Ot)}function gm(r,s,a){if(Ot.current!==ui)throw Error(t(168));We(Ot,s),We(Yt,a)}function ym(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Me(r)||"Unknown",d));return ae({},a,c)}function fu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ui,ls=Ot.current,We(Ot,r),We(Yt,Yt.current),!0}function _m(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=ym(r,s,ls),c.__reactInternalMemoizedMergedChildContext=r,Ge(Yt),Ge(Ot),We(Ot,r)):Ge(Yt),We(Yt,a)}var Pr=null,pu=!1,Uh=!1;function vm(r){Pr===null?Pr=[r]:Pr.push(r)}function oE(r){pu=!0,vm(r)}function ci(){if(!Uh&&Pr!==null){Uh=!0;var r=0,s=Ne;try{var a=Pr;for(Ne=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Pr=null,pu=!1}catch(d){throw Pr!==null&&(Pr=Pr.slice(r+1)),Ks(Zi,ci),d}finally{Ne=s,Uh=!1}}return null}var go=[],yo=0,mu=null,gu=0,_n=[],vn=0,us=null,xr=1,Nr="";function cs(r,s){go[yo++]=gu,go[yo++]=mu,mu=r,gu=s}function wm(r,s,a){_n[vn++]=xr,_n[vn++]=Nr,_n[vn++]=us,us=r;var c=xr;r=Nr;var d=32-$t(c)-1;c&=~(1<<d),a+=1;var g=32-$t(s)+d;if(30<g){var v=d-d%5;g=(c&(1<<v)-1).toString(32),c>>=v,d-=v,xr=1<<32-$t(s)+d|a<<d|c,Nr=g+r}else xr=1<<g|a<<d|c,Nr=r}function Fh(r){r.return!==null&&(cs(r,1),wm(r,1,0))}function jh(r){for(;r===mu;)mu=go[--yo],go[yo]=null,gu=go[--yo],go[yo]=null;for(;r===us;)us=_n[--vn],_n[vn]=null,Nr=_n[--vn],_n[vn]=null,xr=_n[--vn],_n[vn]=null}var cn=null,hn=null,Xe=!1,Un=null;function Em(r,s){var a=In(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Tm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,cn=r,hn=ai(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,cn=r,hn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=us!==null?{id:xr,overflow:Nr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=In(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,cn=r,hn=null,!0):!1;default:return!1}}function Bh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function zh(r){if(Xe){var s=hn;if(s){var a=s;if(!Tm(r,s)){if(Bh(r))throw Error(t(418));s=ai(a.nextSibling);var c=cn;s&&Tm(r,s)?Em(c,a):(r.flags=r.flags&-4097|2,Xe=!1,cn=r)}}else{if(Bh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Xe=!1,cn=r}}}function Im(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;cn=r}function yu(r){if(r!==cn)return!1;if(!Xe)return Im(r),Xe=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!bh(r.type,r.memoizedProps)),s&&(s=hn)){if(Bh(r))throw Sm(),Error(t(418));for(;s;)Em(r,s),s=ai(s.nextSibling)}if(Im(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){hn=ai(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}hn=null}}else hn=cn?ai(r.stateNode.nextSibling):null;return!0}function Sm(){for(var r=hn;r;)r=ai(r.nextSibling)}function _o(){hn=cn=null,Xe=!1}function $h(r){Un===null?Un=[r]:Un.push(r)}var aE=oe.ReactCurrentBatchConfig;function Ma(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var d=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(v){var R=d.refs;v===null?delete R[g]:R[g]=v},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function _u(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Am(r){var s=r._init;return s(r._payload)}function Rm(r){function s(F,N){if(r){var j=F.deletions;j===null?(F.deletions=[N],F.flags|=16):j.push(N)}}function a(F,N){if(!r)return null;for(;N!==null;)s(F,N),N=N.sibling;return null}function c(F,N){for(F=new Map;N!==null;)N.key!==null?F.set(N.key,N):F.set(N.index,N),N=N.sibling;return F}function d(F,N){return F=_i(F,N),F.index=0,F.sibling=null,F}function g(F,N,j){return F.index=j,r?(j=F.alternate,j!==null?(j=j.index,j<N?(F.flags|=2,N):j):(F.flags|=2,N)):(F.flags|=1048576,N)}function v(F){return r&&F.alternate===null&&(F.flags|=2),F}function R(F,N,j,J){return N===null||N.tag!==6?(N=Vd(j,F.mode,J),N.return=F,N):(N=d(N,j),N.return=F,N)}function P(F,N,j,J){var de=j.type;return de===D?Y(F,N,j.props.children,J,j.key):N!==null&&(N.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Vt&&Am(de)===N.type)?(J=d(N,j.props),J.ref=Ma(F,N,j),J.return=F,J):(J=zu(j.type,j.key,j.props,null,F.mode,J),J.ref=Ma(F,N,j),J.return=F,J)}function z(F,N,j,J){return N===null||N.tag!==4||N.stateNode.containerInfo!==j.containerInfo||N.stateNode.implementation!==j.implementation?(N=Od(j,F.mode,J),N.return=F,N):(N=d(N,j.children||[]),N.return=F,N)}function Y(F,N,j,J,de){return N===null||N.tag!==7?(N=_s(j,F.mode,J,de),N.return=F,N):(N=d(N,j),N.return=F,N)}function X(F,N,j){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Vd(""+N,F.mode,j),N.return=F,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ke:return j=zu(N.type,N.key,N.props,null,F.mode,j),j.ref=Ma(F,null,N),j.return=F,j;case Ie:return N=Od(N,F.mode,j),N.return=F,N;case Vt:var J=N._init;return X(F,J(N._payload),j)}if(vr(N)||me(N))return N=_s(N,F.mode,j,null),N.return=F,N;_u(F,N)}return null}function Q(F,N,j,J){var de=N!==null?N.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return de!==null?null:R(F,N,""+j,J);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ke:return j.key===de?P(F,N,j,J):null;case Ie:return j.key===de?z(F,N,j,J):null;case Vt:return de=j._init,Q(F,N,de(j._payload),J)}if(vr(j)||me(j))return de!==null?null:Y(F,N,j,J,null);_u(F,j)}return null}function se(F,N,j,J,de){if(typeof J=="string"&&J!==""||typeof J=="number")return F=F.get(j)||null,R(N,F,""+J,de);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case ke:return F=F.get(J.key===null?j:J.key)||null,P(N,F,J,de);case Ie:return F=F.get(J.key===null?j:J.key)||null,z(N,F,J,de);case Vt:var ge=J._init;return se(F,N,j,ge(J._payload),de)}if(vr(J)||me(J))return F=F.get(j)||null,Y(N,F,J,de,null);_u(N,J)}return null}function ce(F,N,j,J){for(var de=null,ge=null,ye=N,we=N=0,St=null;ye!==null&&we<j.length;we++){ye.index>we?(St=ye,ye=null):St=ye.sibling;var Le=Q(F,ye,j[we],J);if(Le===null){ye===null&&(ye=St);break}r&&ye&&Le.alternate===null&&s(F,ye),N=g(Le,N,we),ge===null?de=Le:ge.sibling=Le,ge=Le,ye=St}if(we===j.length)return a(F,ye),Xe&&cs(F,we),de;if(ye===null){for(;we<j.length;we++)ye=X(F,j[we],J),ye!==null&&(N=g(ye,N,we),ge===null?de=ye:ge.sibling=ye,ge=ye);return Xe&&cs(F,we),de}for(ye=c(F,ye);we<j.length;we++)St=se(ye,F,we,j[we],J),St!==null&&(r&&St.alternate!==null&&ye.delete(St.key===null?we:St.key),N=g(St,N,we),ge===null?de=St:ge.sibling=St,ge=St);return r&&ye.forEach(function(vi){return s(F,vi)}),Xe&&cs(F,we),de}function he(F,N,j,J){var de=me(j);if(typeof de!="function")throw Error(t(150));if(j=de.call(j),j==null)throw Error(t(151));for(var ge=de=null,ye=N,we=N=0,St=null,Le=j.next();ye!==null&&!Le.done;we++,Le=j.next()){ye.index>we?(St=ye,ye=null):St=ye.sibling;var vi=Q(F,ye,Le.value,J);if(vi===null){ye===null&&(ye=St);break}r&&ye&&vi.alternate===null&&s(F,ye),N=g(vi,N,we),ge===null?de=vi:ge.sibling=vi,ge=vi,ye=St}if(Le.done)return a(F,ye),Xe&&cs(F,we),de;if(ye===null){for(;!Le.done;we++,Le=j.next())Le=X(F,Le.value,J),Le!==null&&(N=g(Le,N,we),ge===null?de=Le:ge.sibling=Le,ge=Le);return Xe&&cs(F,we),de}for(ye=c(F,ye);!Le.done;we++,Le=j.next())Le=se(ye,F,we,Le.value,J),Le!==null&&(r&&Le.alternate!==null&&ye.delete(Le.key===null?we:Le.key),N=g(Le,N,we),ge===null?de=Le:ge.sibling=Le,ge=Le);return r&&ye.forEach(function(jE){return s(F,jE)}),Xe&&cs(F,we),de}function ot(F,N,j,J){if(typeof j=="object"&&j!==null&&j.type===D&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case ke:e:{for(var de=j.key,ge=N;ge!==null;){if(ge.key===de){if(de=j.type,de===D){if(ge.tag===7){a(F,ge.sibling),N=d(ge,j.props.children),N.return=F,F=N;break e}}else if(ge.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Vt&&Am(de)===ge.type){a(F,ge.sibling),N=d(ge,j.props),N.ref=Ma(F,ge,j),N.return=F,F=N;break e}a(F,ge);break}else s(F,ge);ge=ge.sibling}j.type===D?(N=_s(j.props.children,F.mode,J,j.key),N.return=F,F=N):(J=zu(j.type,j.key,j.props,null,F.mode,J),J.ref=Ma(F,N,j),J.return=F,F=J)}return v(F);case Ie:e:{for(ge=j.key;N!==null;){if(N.key===ge)if(N.tag===4&&N.stateNode.containerInfo===j.containerInfo&&N.stateNode.implementation===j.implementation){a(F,N.sibling),N=d(N,j.children||[]),N.return=F,F=N;break e}else{a(F,N);break}else s(F,N);N=N.sibling}N=Od(j,F.mode,J),N.return=F,F=N}return v(F);case Vt:return ge=j._init,ot(F,N,ge(j._payload),J)}if(vr(j))return ce(F,N,j,J);if(me(j))return he(F,N,j,J);_u(F,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,N!==null&&N.tag===6?(a(F,N.sibling),N=d(N,j),N.return=F,F=N):(a(F,N),N=Vd(j,F.mode,J),N.return=F,F=N),v(F)):a(F,N)}return ot}var vo=Rm(!0),km=Rm(!1),vu=li(null),wu=null,wo=null,qh=null;function Wh(){qh=wo=wu=null}function Hh(r){var s=vu.current;Ge(vu),r._currentValue=s}function Kh(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function Eo(r,s){wu=r,qh=wo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Jt=!0),r.firstContext=null)}function wn(r){var s=r._currentValue;if(qh!==r)if(r={context:r,memoizedValue:s,next:null},wo===null){if(wu===null)throw Error(t(308));wo=r,wu.dependencies={lanes:0,firstContext:r}}else wo=wo.next=r;return s}var hs=null;function Gh(r){hs===null?hs=[r]:hs.push(r)}function Cm(r,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Gh(s)):(a.next=d.next,d.next=a),s.interleaved=a,Dr(r,c)}function Dr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var hi=!1;function Qh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function br(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function di(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Dr(r,a)}return d=c.interleaved,d===null?(s.next=s,Gh(c)):(s.next=d.next,d.next=s),c.interleaved=s,Dr(r,a)}function Eu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,ti(r,a)}}function xm(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=v:g=g.next=v,a=a.next}while(a!==null);g===null?d=g=s:g=g.next=s}else d=g=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Tu(r,s,a,c){var d=r.updateQueue;hi=!1;var g=d.firstBaseUpdate,v=d.lastBaseUpdate,R=d.shared.pending;if(R!==null){d.shared.pending=null;var P=R,z=P.next;P.next=null,v===null?g=z:v.next=z,v=P;var Y=r.alternate;Y!==null&&(Y=Y.updateQueue,R=Y.lastBaseUpdate,R!==v&&(R===null?Y.firstBaseUpdate=z:R.next=z,Y.lastBaseUpdate=P))}if(g!==null){var X=d.baseState;v=0,Y=z=P=null,R=g;do{var Q=R.lane,se=R.eventTime;if((c&Q)===Q){Y!==null&&(Y=Y.next={eventTime:se,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var ce=r,he=R;switch(Q=s,se=a,he.tag){case 1:if(ce=he.payload,typeof ce=="function"){X=ce.call(se,X,Q);break e}X=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=he.payload,Q=typeof ce=="function"?ce.call(se,X,Q):ce,Q==null)break e;X=ae({},X,Q);break e;case 2:hi=!0}}R.callback!==null&&R.lane!==0&&(r.flags|=64,Q=d.effects,Q===null?d.effects=[R]:Q.push(R))}else se={eventTime:se,lane:Q,tag:R.tag,payload:R.payload,callback:R.callback,next:null},Y===null?(z=Y=se,P=X):Y=Y.next=se,v|=Q;if(R=R.next,R===null){if(R=d.shared.pending,R===null)break;Q=R,R=Q.next,Q.next=null,d.lastBaseUpdate=Q,d.shared.pending=null}}while(!0);if(Y===null&&(P=X),d.baseState=P,d.firstBaseUpdate=z,d.lastBaseUpdate=Y,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else g===null&&(d.shared.lanes=0);ps|=v,r.lanes=v,r.memoizedState=X}}function Nm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ua={},nr=li(Ua),Fa=li(Ua),ja=li(Ua);function ds(r){if(r===Ua)throw Error(t(174));return r}function Yh(r,s){switch(We(ja,s),We(Fa,r),We(nr,Ua),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:mt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=mt(s,r)}Ge(nr),We(nr,s)}function To(){Ge(nr),Ge(Fa),Ge(ja)}function Dm(r){ds(ja.current);var s=ds(nr.current),a=mt(s,r.type);s!==a&&(We(Fa,r),We(nr,a))}function Xh(r){Fa.current===r&&(Ge(nr),Ge(Fa))}var Je=li(0);function Iu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Jh=[];function Zh(){for(var r=0;r<Jh.length;r++)Jh[r]._workInProgressVersionPrimary=null;Jh.length=0}var Su=oe.ReactCurrentDispatcher,ed=oe.ReactCurrentBatchConfig,fs=0,Ze=null,yt=null,Tt=null,Au=!1,Ba=!1,za=0,lE=0;function Lt(){throw Error(t(321))}function td(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Mn(r[a],s[a]))return!1;return!0}function nd(r,s,a,c,d,g){if(fs=g,Ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Su.current=r===null||r.memoizedState===null?dE:fE,r=a(c,d),Ba){g=0;do{if(Ba=!1,za=0,25<=g)throw Error(t(301));g+=1,Tt=yt=null,s.updateQueue=null,Su.current=pE,r=a(c,d)}while(Ba)}if(Su.current=Cu,s=yt!==null&&yt.next!==null,fs=0,Tt=yt=Ze=null,Au=!1,s)throw Error(t(300));return r}function rd(){var r=za!==0;return za=0,r}function rr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?Ze.memoizedState=Tt=r:Tt=Tt.next=r,Tt}function En(){if(yt===null){var r=Ze.alternate;r=r!==null?r.memoizedState:null}else r=yt.next;var s=Tt===null?Ze.memoizedState:Tt.next;if(s!==null)Tt=s,yt=r;else{if(r===null)throw Error(t(310));yt=r,r={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Tt===null?Ze.memoizedState=Tt=r:Tt=Tt.next=r}return Tt}function $a(r,s){return typeof s=="function"?s(r):s}function id(r){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=yt,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var v=d.next;d.next=g.next,g.next=v}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var R=v=null,P=null,z=g;do{var Y=z.lane;if((fs&Y)===Y)P!==null&&(P=P.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:r(c,z.action);else{var X={lane:Y,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};P===null?(R=P=X,v=c):P=P.next=X,Ze.lanes|=Y,ps|=Y}z=z.next}while(z!==null&&z!==g);P===null?v=c:P.next=R,Mn(c,s.memoizedState)||(Jt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=P,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do g=d.lane,Ze.lanes|=g,ps|=g,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function sd(r){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,g=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do g=r(g,v.action),v=v.next;while(v!==d);Mn(g,s.memoizedState)||(Jt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function bm(){}function Vm(r,s){var a=Ze,c=En(),d=s(),g=!Mn(c.memoizedState,d);if(g&&(c.memoizedState=d,Jt=!0),c=c.queue,od(Mm.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,qa(9,Lm.bind(null,a,c,d,s),void 0,null),It===null)throw Error(t(349));(fs&30)!==0||Om(a,s,d)}return d}function Om(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Lm(r,s,a,c){s.value=a,s.getSnapshot=c,Um(s)&&Fm(r)}function Mm(r,s,a){return a(function(){Um(s)&&Fm(r)})}function Um(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Mn(r,a)}catch{return!0}}function Fm(r){var s=Dr(r,1);s!==null&&zn(s,r,1,-1)}function jm(r){var s=rr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:r},s.queue=r,r=r.dispatch=hE.bind(null,Ze,r),[s.memoizedState,r]}function qa(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function Bm(){return En().memoizedState}function Ru(r,s,a,c){var d=rr();Ze.flags|=r,d.memoizedState=qa(1|s,a,void 0,c===void 0?null:c)}function ku(r,s,a,c){var d=En();c=c===void 0?null:c;var g=void 0;if(yt!==null){var v=yt.memoizedState;if(g=v.destroy,c!==null&&td(c,v.deps)){d.memoizedState=qa(s,a,g,c);return}}Ze.flags|=r,d.memoizedState=qa(1|s,a,g,c)}function zm(r,s){return Ru(8390656,8,r,s)}function od(r,s){return ku(2048,8,r,s)}function $m(r,s){return ku(4,2,r,s)}function qm(r,s){return ku(4,4,r,s)}function Wm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Hm(r,s,a){return a=a!=null?a.concat([r]):null,ku(4,4,Wm.bind(null,s,r),a)}function ad(){}function Km(r,s){var a=En();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&td(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function Gm(r,s){var a=En();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&td(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function Qm(r,s,a){return(fs&21)===0?(r.baseState&&(r.baseState=!1,Jt=!0),r.memoizedState=a):(Mn(a,s)||(a=ns(),Ze.lanes|=a,ps|=a,r.baseState=!0),s)}function uE(r,s){var a=Ne;Ne=a!==0&&4>a?a:4,r(!0);var c=ed.transition;ed.transition={};try{r(!1),s()}finally{Ne=a,ed.transition=c}}function Ym(){return En().memoizedState}function cE(r,s,a){var c=gi(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Xm(r))Jm(s,a);else if(a=Cm(r,s,a,c),a!==null){var d=Ht();zn(a,r,c,d),Zm(a,s,c)}}function hE(r,s,a){var c=gi(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xm(r))Jm(s,d);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var v=s.lastRenderedState,R=g(v,a);if(d.hasEagerState=!0,d.eagerState=R,Mn(R,v)){var P=s.interleaved;P===null?(d.next=d,Gh(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=Cm(r,s,d,c),a!==null&&(d=Ht(),zn(a,r,c,d),Zm(a,s,c))}}function Xm(r){var s=r.alternate;return r===Ze||s!==null&&s===Ze}function Jm(r,s){Ba=Au=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Zm(r,s,a){if((a&4194240)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,ti(r,a)}}var Cu={readContext:wn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},dE={readContext:wn,useCallback:function(r,s){return rr().memoizedState=[r,s===void 0?null:s],r},useContext:wn,useEffect:zm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Ru(4194308,4,Wm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Ru(4194308,4,r,s)},useInsertionEffect:function(r,s){return Ru(4,2,r,s)},useMemo:function(r,s){var a=rr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=rr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=cE.bind(null,Ze,r),[c.memoizedState,r]},useRef:function(r){var s=rr();return r={current:r},s.memoizedState=r},useState:jm,useDebugValue:ad,useDeferredValue:function(r){return rr().memoizedState=r},useTransition:function(){var r=jm(!1),s=r[0];return r=uE.bind(null,r[1]),rr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=Ze,d=rr();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),It===null)throw Error(t(349));(fs&30)!==0||Om(c,s,a)}d.memoizedState=a;var g={value:a,getSnapshot:s};return d.queue=g,zm(Mm.bind(null,c,g,r),[r]),c.flags|=2048,qa(9,Lm.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=rr(),s=It.identifierPrefix;if(Xe){var a=Nr,c=xr;a=(c&~(1<<32-$t(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=za++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=lE++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},fE={readContext:wn,useCallback:Km,useContext:wn,useEffect:od,useImperativeHandle:Hm,useInsertionEffect:$m,useLayoutEffect:qm,useMemo:Gm,useReducer:id,useRef:Bm,useState:function(){return id($a)},useDebugValue:ad,useDeferredValue:function(r){var s=En();return Qm(s,yt.memoizedState,r)},useTransition:function(){var r=id($a)[0],s=En().memoizedState;return[r,s]},useMutableSource:bm,useSyncExternalStore:Vm,useId:Ym,unstable_isNewReconciler:!1},pE={readContext:wn,useCallback:Km,useContext:wn,useEffect:od,useImperativeHandle:Hm,useInsertionEffect:$m,useLayoutEffect:qm,useMemo:Gm,useReducer:sd,useRef:Bm,useState:function(){return sd($a)},useDebugValue:ad,useDeferredValue:function(r){var s=En();return yt===null?s.memoizedState=r:Qm(s,yt.memoizedState,r)},useTransition:function(){var r=sd($a)[0],s=En().memoizedState;return[r,s]},useMutableSource:bm,useSyncExternalStore:Vm,useId:Ym,unstable_isNewReconciler:!1};function Fn(r,s){if(r&&r.defaultProps){s=ae({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function ld(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:ae({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Pu={isMounted:function(r){return(r=r._reactInternals)?xn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Ht(),d=gi(r),g=br(c,d);g.payload=s,a!=null&&(g.callback=a),s=di(r,g,d),s!==null&&(zn(s,r,d,c),Eu(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Ht(),d=gi(r),g=br(c,d);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=di(r,g,d),s!==null&&(zn(s,r,d,c),Eu(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Ht(),c=gi(r),d=br(a,c);d.tag=2,s!=null&&(d.callback=s),s=di(r,d,c),s!==null&&(zn(s,r,c,a),Eu(s,r,c))}};function eg(r,s,a,c,d,g,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,v):s.prototype&&s.prototype.isPureReactComponent?!xa(a,c)||!xa(d,g):!0}function tg(r,s,a){var c=!1,d=ui,g=s.contextType;return typeof g=="object"&&g!==null?g=wn(g):(d=Xt(s)?ls:Ot.current,c=s.contextTypes,g=(c=c!=null)?mo(r,d):ui),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Pu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=g),s}function ng(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&Pu.enqueueReplaceState(s,s.state,null)}function ud(r,s,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},Qh(r);var g=s.contextType;typeof g=="object"&&g!==null?d.context=wn(g):(g=Xt(s)?ls:Ot.current,d.context=mo(r,g)),d.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(ld(r,s,g,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&Pu.enqueueReplaceState(d,d.state,null),Tu(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function Io(r,s){try{var a="",c=s;do a+=Ae(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:d,digest:null}}function cd(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function hd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var mE=typeof WeakMap=="function"?WeakMap:Map;function rg(r,s,a){a=br(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Lu||(Lu=!0,Rd=c),hd(r,s)},a}function ig(r,s,a){a=br(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){hd(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){hd(r,s),typeof c!="function"&&(pi===null?pi=new Set([this]):pi.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function sg(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new mE;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),r=PE.bind(null,r,s,a),s.then(r,r))}function og(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function ag(r,s,a,c,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=br(-1,1),s.tag=2,di(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var gE=oe.ReactCurrentOwner,Jt=!1;function Wt(r,s,a,c){s.child=r===null?km(s,null,a,c):vo(s,r.child,a,c)}function lg(r,s,a,c,d){a=a.render;var g=s.ref;return Eo(s,d),c=nd(r,s,a,c,g,d),a=rd(),r!==null&&!Jt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Vr(r,s,d)):(Xe&&a&&Fh(s),s.flags|=1,Wt(r,s,c,d),s.child)}function ug(r,s,a,c,d){if(r===null){var g=a.type;return typeof g=="function"&&!bd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,cg(r,s,g,c,d)):(r=zu(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&d)===0){var v=g.memoizedProps;if(a=a.compare,a=a!==null?a:xa,a(v,c)&&r.ref===s.ref)return Vr(r,s,d)}return s.flags|=1,r=_i(g,c),r.ref=s.ref,r.return=s,s.child=r}function cg(r,s,a,c,d){if(r!==null){var g=r.memoizedProps;if(xa(g,c)&&r.ref===s.ref)if(Jt=!1,s.pendingProps=c=g,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Jt=!0);else return s.lanes=r.lanes,Vr(r,s,d)}return dd(r,s,a,c,d)}function hg(r,s,a){var c=s.pendingProps,d=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(Ao,dn),dn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,We(Ao,dn),dn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,We(Ao,dn),dn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,We(Ao,dn),dn|=c;return Wt(r,s,d,a),s.child}function dg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function dd(r,s,a,c,d){var g=Xt(a)?ls:Ot.current;return g=mo(s,g),Eo(s,d),a=nd(r,s,a,c,g,d),c=rd(),r!==null&&!Jt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Vr(r,s,d)):(Xe&&c&&Fh(s),s.flags|=1,Wt(r,s,a,d),s.child)}function fg(r,s,a,c,d){if(Xt(a)){var g=!0;fu(s)}else g=!1;if(Eo(s,d),s.stateNode===null)Nu(r,s),tg(s,a,c),ud(s,a,c,d),c=!0;else if(r===null){var v=s.stateNode,R=s.memoizedProps;v.props=R;var P=v.context,z=a.contextType;typeof z=="object"&&z!==null?z=wn(z):(z=Xt(a)?ls:Ot.current,z=mo(s,z));var Y=a.getDerivedStateFromProps,X=typeof Y=="function"||typeof v.getSnapshotBeforeUpdate=="function";X||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(R!==c||P!==z)&&ng(s,v,c,z),hi=!1;var Q=s.memoizedState;v.state=Q,Tu(s,c,v,d),P=s.memoizedState,R!==c||Q!==P||Yt.current||hi?(typeof Y=="function"&&(ld(s,a,Y,c),P=s.memoizedState),(R=hi||eg(s,a,R,c,Q,P,z))?(X||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=P),v.props=c,v.state=P,v.context=z,c=R):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,Pm(r,s),R=s.memoizedProps,z=s.type===s.elementType?R:Fn(s.type,R),v.props=z,X=s.pendingProps,Q=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=wn(P):(P=Xt(a)?ls:Ot.current,P=mo(s,P));var se=a.getDerivedStateFromProps;(Y=typeof se=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(R!==X||Q!==P)&&ng(s,v,c,P),hi=!1,Q=s.memoizedState,v.state=Q,Tu(s,c,v,d);var ce=s.memoizedState;R!==X||Q!==ce||Yt.current||hi?(typeof se=="function"&&(ld(s,a,se,c),ce=s.memoizedState),(z=hi||eg(s,a,z,c,Q,ce,P)||!1)?(Y||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ce,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ce,P)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ce),v.props=c,v.state=ce,v.context=P,c=z):(typeof v.componentDidUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),c=!1)}return fd(r,s,a,c,g,d)}function fd(r,s,a,c,d,g){dg(r,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&_m(s,a,!1),Vr(r,s,g);c=s.stateNode,gE.current=s;var R=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&v?(s.child=vo(s,r.child,null,g),s.child=vo(s,null,R,g)):Wt(r,s,R,g),s.memoizedState=c.state,d&&_m(s,a,!0),s.child}function pg(r){var s=r.stateNode;s.pendingContext?gm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&gm(r,s.context,!1),Yh(r,s.containerInfo)}function mg(r,s,a,c,d){return _o(),$h(d),s.flags|=256,Wt(r,s,a,c),s.child}var pd={dehydrated:null,treeContext:null,retryLane:0};function md(r){return{baseLanes:r,cachePool:null,transitions:null}}function gg(r,s,a){var c=s.pendingProps,d=Je.current,g=!1,v=(s.flags&128)!==0,R;if((R=v)||(R=r!==null&&r.memoizedState===null?!1:(d&2)!==0),R?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),We(Je,d&1),r===null)return zh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,r=c.fallback,g?(c=s.mode,g=s.child,v={mode:"hidden",children:v},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=v):g=$u(v,c,0,null),r=_s(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=md(a),s.memoizedState=pd,r):gd(s,v));if(d=r.memoizedState,d!==null&&(R=d.dehydrated,R!==null))return yE(r,s,v,c,R,d,a);if(g){g=c.fallback,v=s.mode,d=r.child,R=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=P,s.deletions=null):(c=_i(d,P),c.subtreeFlags=d.subtreeFlags&14680064),R!==null?g=_i(R,g):(g=_s(g,v,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,v=r.child.memoizedState,v=v===null?md(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=r.childLanes&~a,s.memoizedState=pd,c}return g=r.child,r=g.sibling,c=_i(g,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function gd(r,s){return s=$u({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function xu(r,s,a,c){return c!==null&&$h(c),vo(s,r.child,null,a),r=gd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function yE(r,s,a,c,d,g,v){if(a)return s.flags&256?(s.flags&=-257,c=cd(Error(t(422))),xu(r,s,v,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,d=s.mode,c=$u({mode:"visible",children:c.children},d,0,null),g=_s(g,d,v,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,(s.mode&1)!==0&&vo(s,r.child,null,v),s.child.memoizedState=md(v),s.memoizedState=pd,g);if((s.mode&1)===0)return xu(r,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var R=c.dgst;return c=R,g=Error(t(419)),c=cd(g,c,void 0),xu(r,s,v,c)}if(R=(v&r.childLanes)!==0,Jt||R){if(c=It,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Dr(r,d),zn(c,r,d,-1))}return Dd(),c=cd(Error(t(421))),xu(r,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=xE.bind(null,r),d._reactRetry=s,null):(r=g.treeContext,hn=ai(d.nextSibling),cn=s,Xe=!0,Un=null,r!==null&&(_n[vn++]=xr,_n[vn++]=Nr,_n[vn++]=us,xr=r.id,Nr=r.overflow,us=s),s=gd(s,c.children),s.flags|=4096,s)}function yg(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Kh(r.return,s,a)}function yd(r,s,a,c,d){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function _g(r,s,a){var c=s.pendingProps,d=c.revealOrder,g=c.tail;if(Wt(r,s,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&yg(r,a,s);else if(r.tag===19)yg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(We(Je,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&Iu(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),yd(s,!1,d,a,g);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&Iu(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}yd(s,!0,a,null,g);break;case"together":yd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Nu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Vr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ps|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=_i(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=_i(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function _E(r,s,a){switch(s.tag){case 3:pg(s),_o();break;case 5:Dm(s);break;case 1:Xt(s.type)&&fu(s);break;case 4:Yh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;We(vu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(We(Je,Je.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?gg(r,s,a):(We(Je,Je.current&1),r=Vr(r,s,a),r!==null?r.sibling:null);We(Je,Je.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(r.flags&128)!==0){if(c)return _g(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Je,Je.current),c)break;return null;case 22:case 23:return s.lanes=0,hg(r,s,a)}return Vr(r,s,a)}var vg,_d,wg,Eg;vg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},_d=function(){},wg=function(r,s,a,c){var d=r.memoizedProps;if(d!==c){r=s.stateNode,ds(nr.current);var g=null;switch(a){case"input":d=Wi(r,d),c=Wi(r,c),g=[];break;case"select":d=ae({},d,{value:void 0}),c=ae({},c,{value:void 0}),g=[];break;case"textarea":d=sa(r,d),c=sa(r,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=cu)}ha(a,c);var v;a=null;for(z in d)if(!c.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var R=d[z];for(v in R)R.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in c){var P=c[z];if(R=d?.[z],c.hasOwnProperty(z)&&P!==R&&(P!=null||R!=null))if(z==="style")if(R){for(v in R)!R.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&R[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(g||(g=[]),g.push(z,a)),a=P;else z==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,R=R?R.__html:void 0,P!=null&&R!==P&&(g=g||[]).push(z,P)):z==="children"?typeof P!="string"&&typeof P!="number"||(g=g||[]).push(z,""+P):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(P!=null&&z==="onScroll"&&Ke("scroll",r),g||R===P||(g=[])):(g=g||[]).push(z,P))}a&&(g=g||[]).push("style",a);var z=g;(s.updateQueue=z)&&(s.flags|=4)}},Eg=function(r,s,a,c){a!==c&&(s.flags|=4)};function Wa(r,s){if(!Xe)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Mt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function vE(r,s,a){var c=s.pendingProps;switch(jh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(s),null;case 1:return Xt(s.type)&&du(),Mt(s),null;case 3:return c=s.stateNode,To(),Ge(Yt),Ge(Ot),Zh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(yu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Un!==null&&(Pd(Un),Un=null))),_d(r,s),Mt(s),null;case 5:Xh(s);var d=ds(ja.current);if(a=s.type,r!==null&&s.stateNode!=null)wg(r,s,a,c,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Mt(s),null}if(r=ds(nr.current),yu(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[tr]=s,c[Oa]=g,r=(s.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<Da.length;d++)Ke(Da[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":Ls(c,g),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Ke("invalid",c);break;case"textarea":Us(c,g),Ke("invalid",c)}ha(a,g),d=null;for(var v in g)if(g.hasOwnProperty(v)){var R=g[v];v==="children"?typeof R=="string"?c.textContent!==R&&(g.suppressHydrationWarning!==!0&&uu(c.textContent,R,r),d=["children",R]):typeof R=="number"&&c.textContent!==""+R&&(g.suppressHydrationWarning!==!0&&uu(c.textContent,R,r),d=["children",""+R]):o.hasOwnProperty(v)&&R!=null&&v==="onScroll"&&Ke("scroll",c)}switch(a){case"input":_r(c),Ol(c,g,!0);break;case"textarea":_r(c),oa(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=cu)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=pt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[tr]=s,r[Oa]=c,vg(r,s,!1,!1),s.stateNode=r;e:{switch(v=da(a,c),a){case"dialog":Ke("cancel",r),Ke("close",r),d=c;break;case"iframe":case"object":case"embed":Ke("load",r),d=c;break;case"video":case"audio":for(d=0;d<Da.length;d++)Ke(Da[d],r);d=c;break;case"source":Ke("error",r),d=c;break;case"img":case"image":case"link":Ke("error",r),Ke("load",r),d=c;break;case"details":Ke("toggle",r),d=c;break;case"input":Ls(r,c),d=Wi(r,c),Ke("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=ae({},c,{value:void 0}),Ke("invalid",r);break;case"textarea":Us(r,c),d=sa(r,c),Ke("invalid",r);break;default:d=c}ha(a,d),R=d;for(g in R)if(R.hasOwnProperty(g)){var P=R[g];g==="style"?ua(r,P):g==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&aa(r,P)):g==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Yr(r,P):typeof P=="number"&&Yr(r,""+P):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?P!=null&&g==="onScroll"&&Ke("scroll",r):P!=null&&te(r,g,P,v))}switch(a){case"input":_r(r),Ol(r,c,!1);break;case"textarea":_r(r),oa(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Ue(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?wr(r,!!c.multiple,g,!1):c.defaultValue!=null&&wr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=cu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Mt(s),null;case 6:if(r&&s.stateNode!=null)Eg(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=ds(ja.current),ds(nr.current),yu(s)){if(c=s.stateNode,a=s.memoizedProps,c[tr]=s,(g=c.nodeValue!==a)&&(r=cn,r!==null))switch(r.tag){case 3:uu(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&uu(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[tr]=s,s.stateNode=c}return Mt(s),null;case 13:if(Ge(Je),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Xe&&hn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Sm(),_o(),s.flags|=98560,g=!1;else if(g=yu(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[tr]=s}else _o(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Mt(s),g=!1}else Un!==null&&(Pd(Un),Un=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Je.current&1)!==0?_t===0&&(_t=3):Dd())),s.updateQueue!==null&&(s.flags|=4),Mt(s),null);case 4:return To(),_d(r,s),r===null&&ba(s.stateNode.containerInfo),Mt(s),null;case 10:return Hh(s.type._context),Mt(s),null;case 17:return Xt(s.type)&&du(),Mt(s),null;case 19:if(Ge(Je),g=s.memoizedState,g===null)return Mt(s),null;if(c=(s.flags&128)!==0,v=g.rendering,v===null)if(c)Wa(g,!1);else{if(_t!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(v=Iu(r),v!==null){for(s.flags|=128,Wa(g,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,r=v.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return We(Je,Je.current&1|2),s.child}r=r.sibling}g.tail!==null&&qe()>Ro&&(s.flags|=128,c=!0,Wa(g,!1),s.lanes=4194304)}else{if(!c)if(r=Iu(v),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Wa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Xe)return Mt(s),null}else 2*qe()-g.renderingStartTime>Ro&&a!==1073741824&&(s.flags|=128,c=!0,Wa(g,!1),s.lanes=4194304);g.isBackwards?(v.sibling=s.child,s.child=v):(a=g.last,a!==null?a.sibling=v:s.child=v,g.last=v)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=qe(),s.sibling=null,a=Je.current,We(Je,c?a&1|2:a&1),s):(Mt(s),null);case 22:case 23:return Nd(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(dn&1073741824)!==0&&(Mt(s),s.subtreeFlags&6&&(s.flags|=8192)):Mt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function wE(r,s){switch(jh(s),s.tag){case 1:return Xt(s.type)&&du(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return To(),Ge(Yt),Ge(Ot),Zh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Xh(s),null;case 13:if(Ge(Je),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));_o()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ge(Je),null;case 4:return To(),null;case 10:return Hh(s.type._context),null;case 22:case 23:return Nd(),null;case 24:return null;default:return null}}var Du=!1,Ut=!1,EE=typeof WeakSet=="function"?WeakSet:Set,ue=null;function So(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nt(r,s,c)}else a.current=null}function vd(r,s,a){try{a()}catch(c){nt(r,s,c)}}var Tg=!1;function TE(r,s){if(Nh=ii,r=em(),Ih(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var v=0,R=-1,P=-1,z=0,Y=0,X=r,Q=null;t:for(;;){for(var se;X!==a||d!==0&&X.nodeType!==3||(R=v+d),X!==g||c!==0&&X.nodeType!==3||(P=v+c),X.nodeType===3&&(v+=X.nodeValue.length),(se=X.firstChild)!==null;)Q=X,X=se;for(;;){if(X===r)break t;if(Q===a&&++z===d&&(R=v),Q===g&&++Y===c&&(P=v),(se=X.nextSibling)!==null)break;X=Q,Q=X.parentNode}X=se}a=R===-1||P===-1?null:{start:R,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Dh={focusedElem:r,selectionRange:a},ii=!1,ue=s;ue!==null;)if(s=ue,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ue=r;else for(;ue!==null;){s=ue;try{var ce=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var he=ce.memoizedProps,ot=ce.memoizedState,F=s.stateNode,N=F.getSnapshotBeforeUpdate(s.elementType===s.type?he:Fn(s.type,he),ot);F.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){nt(s,s.return,J)}if(r=s.sibling,r!==null){r.return=s.return,ue=r;break}ue=s.return}return ce=Tg,Tg=!1,ce}function Ha(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var g=d.destroy;d.destroy=void 0,g!==void 0&&vd(s,a,g)}d=d.next}while(d!==c)}}function bu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function wd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Ig(r){var s=r.alternate;s!==null&&(r.alternate=null,Ig(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[tr],delete s[Oa],delete s[Lh],delete s[iE],delete s[sE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Sg(r){return r.tag===5||r.tag===3||r.tag===4}function Ag(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Sg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Ed(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=cu));else if(c!==4&&(r=r.child,r!==null))for(Ed(r,s,a),r=r.sibling;r!==null;)Ed(r,s,a),r=r.sibling}function Td(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(Td(r,s,a),r=r.sibling;r!==null;)Td(r,s,a),r=r.sibling}var Ct=null,jn=!1;function fi(r,s,a){for(a=a.child;a!==null;)Rg(r,s,a),a=a.sibling}function Rg(r,s,a){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(es,a)}catch{}switch(a.tag){case 5:Ut||So(a,s);case 6:var c=Ct,d=jn;Ct=null,fi(r,s,a),Ct=c,jn=d,Ct!==null&&(jn?(r=Ct,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(jn?(r=Ct,a=a.stateNode,r.nodeType===8?Oh(r.parentNode,a):r.nodeType===1&&Oh(r,a),On(r)):Oh(Ct,a.stateNode));break;case 4:c=Ct,d=jn,Ct=a.stateNode.containerInfo,jn=!0,fi(r,s,a),Ct=c,jn=d;break;case 0:case 11:case 14:case 15:if(!Ut&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,v=g.destroy;g=g.tag,v!==void 0&&((g&2)!==0||(g&4)!==0)&&vd(a,s,v),d=d.next}while(d!==c)}fi(r,s,a);break;case 1:if(!Ut&&(So(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(R){nt(a,s,R)}fi(r,s,a);break;case 21:fi(r,s,a);break;case 22:a.mode&1?(Ut=(c=Ut)||a.memoizedState!==null,fi(r,s,a),Ut=c):fi(r,s,a);break;default:fi(r,s,a)}}function kg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new EE),s.forEach(function(c){var d=NE.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Bn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=r,v=s,R=v;e:for(;R!==null;){switch(R.tag){case 5:Ct=R.stateNode,jn=!1;break e;case 3:Ct=R.stateNode.containerInfo,jn=!0;break e;case 4:Ct=R.stateNode.containerInfo,jn=!0;break e}R=R.return}if(Ct===null)throw Error(t(160));Rg(g,v,d),Ct=null,jn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(z){nt(d,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Cg(s,r),s=s.sibling}function Cg(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Bn(s,r),ir(r),c&4){try{Ha(3,r,r.return),bu(3,r)}catch(he){nt(r,r.return,he)}try{Ha(5,r,r.return)}catch(he){nt(r,r.return,he)}}break;case 1:Bn(s,r),ir(r),c&512&&a!==null&&So(a,a.return);break;case 5:if(Bn(s,r),ir(r),c&512&&a!==null&&So(a,a.return),r.flags&32){var d=r.stateNode;try{Yr(d,"")}catch(he){nt(r,r.return,he)}}if(c&4&&(d=r.stateNode,d!=null)){var g=r.memoizedProps,v=a!==null?a.memoizedProps:g,R=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{R==="input"&&g.type==="radio"&&g.name!=null&&ra(d,g),da(R,v);var z=da(R,g);for(v=0;v<P.length;v+=2){var Y=P[v],X=P[v+1];Y==="style"?ua(d,X):Y==="dangerouslySetInnerHTML"?aa(d,X):Y==="children"?Yr(d,X):te(d,Y,X,z)}switch(R){case"input":ia(d,g);break;case"textarea":Fs(d,g);break;case"select":var Q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var se=g.value;se!=null?wr(d,!!g.multiple,se,!1):Q!==!!g.multiple&&(g.defaultValue!=null?wr(d,!!g.multiple,g.defaultValue,!0):wr(d,!!g.multiple,g.multiple?[]:"",!1))}d[Oa]=g}catch(he){nt(r,r.return,he)}}break;case 6:if(Bn(s,r),ir(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,g=r.memoizedProps;try{d.nodeValue=g}catch(he){nt(r,r.return,he)}}break;case 3:if(Bn(s,r),ir(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{On(s.containerInfo)}catch(he){nt(r,r.return,he)}break;case 4:Bn(s,r),ir(r);break;case 13:Bn(s,r),ir(r),d=r.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Ad=qe())),c&4&&kg(r);break;case 22:if(Y=a!==null&&a.memoizedState!==null,r.mode&1?(Ut=(z=Ut)||Y,Bn(s,r),Ut=z):Bn(s,r),ir(r),c&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!Y&&(r.mode&1)!==0)for(ue=r,Y=r.child;Y!==null;){for(X=ue=Y;ue!==null;){switch(Q=ue,se=Q.child,Q.tag){case 0:case 11:case 14:case 15:Ha(4,Q,Q.return);break;case 1:So(Q,Q.return);var ce=Q.stateNode;if(typeof ce.componentWillUnmount=="function"){c=Q,a=Q.return;try{s=c,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(he){nt(c,a,he)}}break;case 5:So(Q,Q.return);break;case 22:if(Q.memoizedState!==null){Ng(X);continue}}se!==null?(se.return=Q,ue=se):Ng(X)}Y=Y.sibling}e:for(Y=null,X=r;;){if(X.tag===5){if(Y===null){Y=X;try{d=X.stateNode,z?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(R=X.stateNode,P=X.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,R.style.display=la("display",v))}catch(he){nt(r,r.return,he)}}}else if(X.tag===6){if(Y===null)try{X.stateNode.nodeValue=z?"":X.memoizedProps}catch(he){nt(r,r.return,he)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===r)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===r)break e;for(;X.sibling===null;){if(X.return===null||X.return===r)break e;Y===X&&(Y=null),X=X.return}Y===X&&(Y=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Bn(s,r),ir(r),c&4&&kg(r);break;case 21:break;default:Bn(s,r),ir(r)}}function ir(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Sg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Yr(d,""),c.flags&=-33);var g=Ag(r);Td(r,g,d);break;case 3:case 4:var v=c.stateNode.containerInfo,R=Ag(r);Ed(r,R,v);break;default:throw Error(t(161))}}catch(P){nt(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function IE(r,s,a){ue=r,Pg(r)}function Pg(r,s,a){for(var c=(r.mode&1)!==0;ue!==null;){var d=ue,g=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Du;if(!v){var R=d.alternate,P=R!==null&&R.memoizedState!==null||Ut;R=Du;var z=Ut;if(Du=v,(Ut=P)&&!z)for(ue=d;ue!==null;)v=ue,P=v.child,v.tag===22&&v.memoizedState!==null?Dg(d):P!==null?(P.return=v,ue=P):Dg(d);for(;g!==null;)ue=g,Pg(g),g=g.sibling;ue=d,Du=R,Ut=z}xg(r)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,ue=g):xg(r)}}function xg(r){for(;ue!==null;){var s=ue;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ut||bu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Ut)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Fn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Nm(s,g,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Nm(s,v,a)}break;case 5:var R=s.stateNode;if(a===null&&s.flags&4){a=R;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var Y=z.memoizedState;if(Y!==null){var X=Y.dehydrated;X!==null&&On(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||s.flags&512&&wd(s)}catch(Q){nt(s,s.return,Q)}}if(s===r){ue=null;break}if(a=s.sibling,a!==null){a.return=s.return,ue=a;break}ue=s.return}}function Ng(r){for(;ue!==null;){var s=ue;if(s===r){ue=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ue=a;break}ue=s.return}}function Dg(r){for(;ue!==null;){var s=ue;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{bu(4,s)}catch(P){nt(s,a,P)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(P){nt(s,d,P)}}var g=s.return;try{wd(s)}catch(P){nt(s,g,P)}break;case 5:var v=s.return;try{wd(s)}catch(P){nt(s,v,P)}}}catch(P){nt(s,s.return,P)}if(s===r){ue=null;break}var R=s.sibling;if(R!==null){R.return=s.return,ue=R;break}ue=s.return}}var SE=Math.ceil,Vu=oe.ReactCurrentDispatcher,Id=oe.ReactCurrentOwner,Tn=oe.ReactCurrentBatchConfig,Oe=0,It=null,ct=null,Pt=0,dn=0,Ao=li(0),_t=0,Ka=null,ps=0,Ou=0,Sd=0,Ga=null,Zt=null,Ad=0,Ro=1/0,Or=null,Lu=!1,Rd=null,pi=null,Mu=!1,mi=null,Uu=0,Qa=0,kd=null,Fu=-1,ju=0;function Ht(){return(Oe&6)!==0?qe():Fu!==-1?Fu:Fu=qe()}function gi(r){return(r.mode&1)===0?1:(Oe&2)!==0&&Pt!==0?Pt&-Pt:aE.transition!==null?(ju===0&&(ju=ns()),ju):(r=Ne,r!==0||(r=window.event,r=r===void 0?16:Ia(r.type)),r)}function zn(r,s,a,c){if(50<Qa)throw Qa=0,kd=null,Error(t(185));ei(r,a,c),((Oe&2)===0||r!==It)&&(r===It&&((Oe&2)===0&&(Ou|=a),_t===4&&yi(r,Pt)),en(r,c),a===1&&Oe===0&&(s.mode&1)===0&&(Ro=qe()+500,pu&&ci()))}function en(r,s){var a=r.callbackNode;Ir(r,s);var c=ts(r,r===It?Pt:0);if(c===0)a!==null&&_a(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&_a(a),s===1)r.tag===0?oE(Vg.bind(null,r)):vm(Vg.bind(null,r)),nE(function(){(Oe&6)===0&&ci()}),a=null;else{switch(ni(c)){case 1:a=Zi;break;case 4:a=Xr;break;case 16:a=mn;break;case 536870912:a=jl;break;default:a=mn}a=zg(a,bg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function bg(r,s){if(Fu=-1,ju=0,(Oe&6)!==0)throw Error(t(327));var a=r.callbackNode;if(ko()&&r.callbackNode!==a)return null;var c=ts(r,r===It?Pt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||s)s=Bu(r,c);else{s=c;var d=Oe;Oe|=2;var g=Lg();(It!==r||Pt!==s)&&(Or=null,Ro=qe()+500,gs(r,s));do try{kE();break}catch(R){Og(r,R)}while(!0);Wh(),Vu.current=g,Oe=d,ct!==null?s=0:(It=null,Pt=0,s=_t)}if(s!==0){if(s===2&&(d=an(r),d!==0&&(c=d,s=Cd(r,d))),s===1)throw a=Ka,gs(r,0),yi(r,c),en(r,qe()),a;if(s===6)yi(r,c);else{if(d=r.current.alternate,(c&30)===0&&!AE(d)&&(s=Bu(r,c),s===2&&(g=an(r),g!==0&&(c=g,s=Cd(r,g))),s===1))throw a=Ka,gs(r,0),yi(r,c),en(r,qe()),a;switch(r.finishedWork=d,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ys(r,Zt,Or);break;case 3:if(yi(r,c),(c&130023424)===c&&(s=Ad+500-qe(),10<s)){if(ts(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){Ht(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Vh(ys.bind(null,r,Zt,Or),s);break}ys(r,Zt,Or);break;case 4:if(yi(r,c),(c&4194240)===c)break;for(s=r.eventTimes,d=-1;0<c;){var v=31-$t(c);g=1<<v,v=s[v],v>d&&(d=v),c&=~g}if(c=d,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*SE(c/1960))-c,10<c){r.timeoutHandle=Vh(ys.bind(null,r,Zt,Or),c);break}ys(r,Zt,Or);break;case 5:ys(r,Zt,Or);break;default:throw Error(t(329))}}}return en(r,qe()),r.callbackNode===a?bg.bind(null,r):null}function Cd(r,s){var a=Ga;return r.current.memoizedState.isDehydrated&&(gs(r,s).flags|=256),r=Bu(r,s),r!==2&&(s=Zt,Zt=a,s!==null&&Pd(s)),r}function Pd(r){Zt===null?Zt=r:Zt.push.apply(Zt,r)}function AE(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!Mn(g(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function yi(r,s){for(s&=~Sd,s&=~Ou,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-$t(s),c=1<<a;r[a]=-1,s&=~c}}function Vg(r){if((Oe&6)!==0)throw Error(t(327));ko();var s=ts(r,0);if((s&1)===0)return en(r,qe()),null;var a=Bu(r,s);if(r.tag!==0&&a===2){var c=an(r);c!==0&&(s=c,a=Cd(r,c))}if(a===1)throw a=Ka,gs(r,0),yi(r,s),en(r,qe()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ys(r,Zt,Or),en(r,qe()),null}function xd(r,s){var a=Oe;Oe|=1;try{return r(s)}finally{Oe=a,Oe===0&&(Ro=qe()+500,pu&&ci())}}function ms(r){mi!==null&&mi.tag===0&&(Oe&6)===0&&ko();var s=Oe;Oe|=1;var a=Tn.transition,c=Ne;try{if(Tn.transition=null,Ne=1,r)return r()}finally{Ne=c,Tn.transition=a,Oe=s,(Oe&6)===0&&ci()}}function Nd(){dn=Ao.current,Ge(Ao)}function gs(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,tE(a)),ct!==null)for(a=ct.return;a!==null;){var c=a;switch(jh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&du();break;case 3:To(),Ge(Yt),Ge(Ot),Zh();break;case 5:Xh(c);break;case 4:To();break;case 13:Ge(Je);break;case 19:Ge(Je);break;case 10:Hh(c.type._context);break;case 22:case 23:Nd()}a=a.return}if(It=r,ct=r=_i(r.current,null),Pt=dn=s,_t=0,Ka=null,Sd=Ou=ps=0,Zt=Ga=null,hs!==null){for(s=0;s<hs.length;s++)if(a=hs[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var v=g.next;g.next=d,c.next=v}a.pending=c}hs=null}return r}function Og(r,s){do{var a=ct;try{if(Wh(),Su.current=Cu,Au){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Au=!1}if(fs=0,Tt=yt=Ze=null,Ba=!1,za=0,Id.current=null,a===null||a.return===null){_t=1,Ka=s,ct=null;break}e:{var g=r,v=a.return,R=a,P=s;if(s=Pt,R.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var z=P,Y=R,X=Y.tag;if((Y.mode&1)===0&&(X===0||X===11||X===15)){var Q=Y.alternate;Q?(Y.updateQueue=Q.updateQueue,Y.memoizedState=Q.memoizedState,Y.lanes=Q.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var se=og(v);if(se!==null){se.flags&=-257,ag(se,v,R,g,s),se.mode&1&&sg(g,z,s),s=se,P=z;var ce=s.updateQueue;if(ce===null){var he=new Set;he.add(P),s.updateQueue=he}else ce.add(P);break e}else{if((s&1)===0){sg(g,z,s),Dd();break e}P=Error(t(426))}}else if(Xe&&R.mode&1){var ot=og(v);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),ag(ot,v,R,g,s),$h(Io(P,R));break e}}g=P=Io(P,R),_t!==4&&(_t=2),Ga===null?Ga=[g]:Ga.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var F=rg(g,P,s);xm(g,F);break e;case 1:R=P;var N=g.type,j=g.stateNode;if((g.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(pi===null||!pi.has(j)))){g.flags|=65536,s&=-s,g.lanes|=s;var J=ig(g,R,s);xm(g,J);break e}}g=g.return}while(g!==null)}Ug(a)}catch(de){s=de,ct===a&&a!==null&&(ct=a=a.return);continue}break}while(!0)}function Lg(){var r=Vu.current;return Vu.current=Cu,r===null?Cu:r}function Dd(){(_t===0||_t===3||_t===2)&&(_t=4),It===null||(ps&268435455)===0&&(Ou&268435455)===0||yi(It,Pt)}function Bu(r,s){var a=Oe;Oe|=2;var c=Lg();(It!==r||Pt!==s)&&(Or=null,gs(r,s));do try{RE();break}catch(d){Og(r,d)}while(!0);if(Wh(),Oe=a,Vu.current=c,ct!==null)throw Error(t(261));return It=null,Pt=0,_t}function RE(){for(;ct!==null;)Mg(ct)}function kE(){for(;ct!==null&&!Ul();)Mg(ct)}function Mg(r){var s=Bg(r.alternate,r,dn);r.memoizedProps=r.pendingProps,s===null?Ug(r):ct=s,Id.current=null}function Ug(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=vE(a,s,dn),a!==null){ct=a;return}}else{if(a=wE(a,s),a!==null){a.flags&=32767,ct=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{_t=6,ct=null;return}}if(s=s.sibling,s!==null){ct=s;return}ct=s=r}while(s!==null);_t===0&&(_t=5)}function ys(r,s,a){var c=Ne,d=Tn.transition;try{Tn.transition=null,Ne=1,CE(r,s,a,c)}finally{Tn.transition=d,Ne=c}return null}function CE(r,s,a,c){do ko();while(mi!==null);if((Oe&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(ze(r,g),r===It&&(ct=It=null,Pt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Mu||(Mu=!0,zg(mn,function(){return ko(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Tn.transition,Tn.transition=null;var v=Ne;Ne=1;var R=Oe;Oe|=4,Id.current=null,TE(r,a),Cg(a,r),G0(Dh),ii=!!Nh,Dh=Nh=null,r.current=a,IE(a),mh(),Oe=R,Ne=v,Tn.transition=g}else r.current=a;if(Mu&&(Mu=!1,mi=r,Uu=d),g=r.pendingLanes,g===0&&(pi=null),Bl(a.stateNode),en(r,qe()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Lu)throw Lu=!1,r=Rd,Rd=null,r;return(Uu&1)!==0&&r.tag!==0&&ko(),g=r.pendingLanes,(g&1)!==0?r===kd?Qa++:(Qa=0,kd=r):Qa=0,ci(),null}function ko(){if(mi!==null){var r=ni(Uu),s=Tn.transition,a=Ne;try{if(Tn.transition=null,Ne=16>r?16:r,mi===null)var c=!1;else{if(r=mi,mi=null,Uu=0,(Oe&6)!==0)throw Error(t(331));var d=Oe;for(Oe|=4,ue=r.current;ue!==null;){var g=ue,v=g.child;if((ue.flags&16)!==0){var R=g.deletions;if(R!==null){for(var P=0;P<R.length;P++){var z=R[P];for(ue=z;ue!==null;){var Y=ue;switch(Y.tag){case 0:case 11:case 15:Ha(8,Y,g)}var X=Y.child;if(X!==null)X.return=Y,ue=X;else for(;ue!==null;){Y=ue;var Q=Y.sibling,se=Y.return;if(Ig(Y),Y===z){ue=null;break}if(Q!==null){Q.return=se,ue=Q;break}ue=se}}}var ce=g.alternate;if(ce!==null){var he=ce.child;if(he!==null){ce.child=null;do{var ot=he.sibling;he.sibling=null,he=ot}while(he!==null)}}ue=g}}if((g.subtreeFlags&2064)!==0&&v!==null)v.return=g,ue=v;else e:for(;ue!==null;){if(g=ue,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ha(9,g,g.return)}var F=g.sibling;if(F!==null){F.return=g.return,ue=F;break e}ue=g.return}}var N=r.current;for(ue=N;ue!==null;){v=ue;var j=v.child;if((v.subtreeFlags&2064)!==0&&j!==null)j.return=v,ue=j;else e:for(v=N;ue!==null;){if(R=ue,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:bu(9,R)}}catch(de){nt(R,R.return,de)}if(R===v){ue=null;break e}var J=R.sibling;if(J!==null){J.return=R.return,ue=J;break e}ue=R.return}}if(Oe=d,ci(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(es,r)}catch{}c=!0}return c}finally{Ne=a,Tn.transition=s}}return!1}function Fg(r,s,a){s=Io(a,s),s=rg(r,s,1),r=di(r,s,1),s=Ht(),r!==null&&(ei(r,1,s),en(r,s))}function nt(r,s,a){if(r.tag===3)Fg(r,r,a);else for(;s!==null;){if(s.tag===3){Fg(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(pi===null||!pi.has(c))){r=Io(a,r),r=ig(s,r,1),s=di(s,r,1),r=Ht(),s!==null&&(ei(s,1,r),en(s,r));break}}s=s.return}}function PE(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Ht(),r.pingedLanes|=r.suspendedLanes&a,It===r&&(Pt&a)===a&&(_t===4||_t===3&&(Pt&130023424)===Pt&&500>qe()-Ad?gs(r,0):Sd|=a),en(r,s)}function jg(r,s){s===0&&((r.mode&1)===0?s=1:(s=Qs,Qs<<=1,(Qs&130023424)===0&&(Qs=4194304)));var a=Ht();r=Dr(r,s),r!==null&&(ei(r,s,a),en(r,a))}function xE(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),jg(r,a)}function NE(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),jg(r,a)}var Bg;Bg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Yt.current)Jt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return Jt=!1,_E(r,s,a);Jt=(r.flags&131072)!==0}else Jt=!1,Xe&&(s.flags&1048576)!==0&&wm(s,gu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Nu(r,s),r=s.pendingProps;var d=mo(s,Ot.current);Eo(s,a),d=nd(null,s,c,r,d,a);var g=rd();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Xt(c)?(g=!0,fu(s)):g=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Qh(s),d.updater=Pu,s.stateNode=d,d._reactInternals=s,ud(s,c,r,a),s=fd(null,s,c,!0,g,a)):(s.tag=0,Xe&&g&&Fh(s),Wt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Nu(r,s),r=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=bE(c),r=Fn(c,r),d){case 0:s=dd(null,s,c,r,a);break e;case 1:s=fg(null,s,c,r,a);break e;case 11:s=lg(null,s,c,r,a);break e;case 14:s=ug(null,s,c,Fn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),dd(r,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),fg(r,s,c,d,a);case 3:e:{if(pg(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,d=g.element,Pm(r,s),Tu(s,c,null,a);var v=s.memoizedState;if(c=v.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){d=Io(Error(t(423)),s),s=mg(r,s,c,a,d);break e}else if(c!==d){d=Io(Error(t(424)),s),s=mg(r,s,c,a,d);break e}else for(hn=ai(s.stateNode.containerInfo.firstChild),cn=s,Xe=!0,Un=null,a=km(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_o(),c===d){s=Vr(r,s,a);break e}Wt(r,s,c,a)}s=s.child}return s;case 5:return Dm(s),r===null&&zh(s),c=s.type,d=s.pendingProps,g=r!==null?r.memoizedProps:null,v=d.children,bh(c,d)?v=null:g!==null&&bh(c,g)&&(s.flags|=32),dg(r,s),Wt(r,s,v,a),s.child;case 6:return r===null&&zh(s),null;case 13:return gg(r,s,a);case 4:return Yh(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=vo(s,null,c,a):Wt(r,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),lg(r,s,c,d,a);case 7:return Wt(r,s,s.pendingProps,a),s.child;case 8:return Wt(r,s,s.pendingProps.children,a),s.child;case 12:return Wt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,g=s.memoizedProps,v=d.value,We(vu,c._currentValue),c._currentValue=v,g!==null)if(Mn(g.value,v)){if(g.children===d.children&&!Yt.current){s=Vr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var R=g.dependencies;if(R!==null){v=g.child;for(var P=R.firstContext;P!==null;){if(P.context===c){if(g.tag===1){P=br(-1,a&-a),P.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var Y=z.pending;Y===null?P.next=P:(P.next=Y.next,Y.next=P),z.pending=P}}g.lanes|=a,P=g.alternate,P!==null&&(P.lanes|=a),Kh(g.return,a,s),R.lanes|=a;break}P=P.next}}else if(g.tag===10)v=g.type===s.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=a,R=v.alternate,R!==null&&(R.lanes|=a),Kh(v,a,s),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===s){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}Wt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,Eo(s,a),d=wn(d),c=c(d),s.flags|=1,Wt(r,s,c,a),s.child;case 14:return c=s.type,d=Fn(c,s.pendingProps),d=Fn(c.type,d),ug(r,s,c,d,a);case 15:return cg(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),Nu(r,s),s.tag=1,Xt(c)?(r=!0,fu(s)):r=!1,Eo(s,a),tg(s,c,d),ud(s,c,d,a),fd(null,s,c,!0,r,a);case 19:return _g(r,s,a);case 22:return hg(r,s,a)}throw Error(t(156,s.tag))};function zg(r,s){return Ks(r,s)}function DE(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(r,s,a,c){return new DE(r,s,a,c)}function bd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function bE(r){if(typeof r=="function")return bd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===L)return 11;if(r===bt)return 14}return 2}function _i(r,s){var a=r.alternate;return a===null?(a=In(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function zu(r,s,a,c,d,g){var v=2;if(c=r,typeof r=="function")bd(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case D:return _s(a.children,d,g,s);case S:v=8,d|=8;break;case C:return r=In(12,a,s,d|2),r.elementType=C,r.lanes=g,r;case k:return r=In(13,a,s,d),r.elementType=k,r.lanes=g,r;case it:return r=In(19,a,s,d),r.elementType=it,r.lanes=g,r;case Be:return $u(a,d,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case x:v=10;break e;case b:v=9;break e;case L:v=11;break e;case bt:v=14;break e;case Vt:v=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=In(v,a,s,d),s.elementType=r,s.type=c,s.lanes=g,s}function _s(r,s,a,c){return r=In(7,r,c,s),r.lanes=a,r}function $u(r,s,a,c){return r=In(22,r,c,s),r.elementType=Be,r.lanes=a,r.stateNode={isHidden:!1},r}function Vd(r,s,a){return r=In(6,r,null,s),r.lanes=a,r}function Od(r,s,a){return s=In(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function VE(r,s,a,c,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zr(0),this.expirationTimes=Zr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ld(r,s,a,c,d,g,v,R,P){return r=new VE(r,s,a,R,P),s===1?(s=1,g===!0&&(s|=8)):s=0,g=In(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qh(g),r}function OE(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function $g(r){if(!r)return ui;r=r._reactInternals;e:{if(xn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Xt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Xt(a))return ym(r,a,s)}return s}function qg(r,s,a,c,d,g,v,R,P){return r=Ld(a,c,!0,r,d,g,v,R,P),r.context=$g(null),a=r.current,c=Ht(),d=gi(a),g=br(c,d),g.callback=s??null,di(a,g,d),r.current.lanes=d,ei(r,d,c),en(r,c),r}function qu(r,s,a,c){var d=s.current,g=Ht(),v=gi(d);return a=$g(a),s.context===null?s.context=a:s.pendingContext=a,s=br(g,v),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=di(d,s,v),r!==null&&(zn(r,d,v,g),Eu(r,d,v)),v}function Wu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Wg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Md(r,s){Wg(r,s),(r=r.alternate)&&Wg(r,s)}function LE(){return null}var Hg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Ud(r){this._internalRoot=r}Hu.prototype.render=Ud.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));qu(r,s,null,null)},Hu.prototype.unmount=Ud.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ms(function(){qu(null,r,null,null)}),s[Cr]=null}};function Hu(r){this._internalRoot=r}Hu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Hl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Xn.length&&s!==0&&s<Xn[a].priority;a++);Xn.splice(a,0,r),a===0&&Ql(r)}};function Fd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Ku(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Kg(){}function ME(r,s,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var z=Wu(v);g.call(z)}}var v=qg(s,c,r,0,null,!1,!1,"",Kg);return r._reactRootContainer=v,r[Cr]=v.current,ba(r.nodeType===8?r.parentNode:r),ms(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var R=c;c=function(){var z=Wu(P);R.call(z)}}var P=Ld(r,0,!1,null,null,!1,!1,"",Kg);return r._reactRootContainer=P,r[Cr]=P.current,ba(r.nodeType===8?r.parentNode:r),ms(function(){qu(s,P,a,c)}),P}function Gu(r,s,a,c,d){var g=a._reactRootContainer;if(g){var v=g;if(typeof d=="function"){var R=d;d=function(){var P=Wu(v);R.call(P)}}qu(s,v,r,d)}else v=ME(a,s,r,d,c);return Wu(v)}ql=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Jr(s.pendingLanes);a!==0&&(ti(s,a|1),en(s,qe()),(Oe&6)===0&&(Ro=qe()+500,ci()))}break;case 13:ms(function(){var c=Dr(r,1);if(c!==null){var d=Ht();zn(c,r,1,d)}}),Md(r,1)}},Ys=function(r){if(r.tag===13){var s=Dr(r,134217728);if(s!==null){var a=Ht();zn(s,r,134217728,a)}Md(r,134217728)}},Wl=function(r){if(r.tag===13){var s=gi(r),a=Dr(r,s);if(a!==null){var c=Ht();zn(a,r,s,c)}Md(r,s)}},Hl=function(){return Ne},Kl=function(r,s){var a=Ne;try{return Ne=r,s()}finally{Ne=a}},Bs=function(r,s,a){switch(s){case"input":if(ia(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=hu(c);if(!d)throw Error(t(90));Os(c),ia(c,d)}}}break;case"textarea":Fs(r,a);break;case"select":s=a.value,s!=null&&wr(r,!!a.multiple,s,!1)}},Qi=xd,pa=ms;var UE={usingClientEntryPoint:!1,Events:[La,fo,hu,Qn,fa,xd]},Ya={findFiberByHostInstance:as,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},FE={bundleType:Ya.bundleType,version:Ya.version,rendererPackageName:Ya.rendererPackageName,rendererConfig:Ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oe.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ya(r),r===null?null:r.stateNode},findFiberByHostInstance:Ya.findFiberByHostInstance||LE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qu.isDisabled&&Qu.supportsFiber)try{es=Qu.inject(FE),on=Qu}catch{}}return tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UE,tn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fd(s))throw Error(t(200));return OE(r,s,null,a)},tn.createRoot=function(r,s){if(!Fd(r))throw Error(t(299));var a=!1,c="",d=Hg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=Ld(r,1,!1,null,null,a,!1,c,d),r[Cr]=s.current,ba(r.nodeType===8?r.parentNode:r),new Ud(s)},tn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ya(s),r=r===null?null:r.stateNode,r},tn.flushSync=function(r){return ms(r)},tn.hydrate=function(r,s,a){if(!Ku(s))throw Error(t(200));return Gu(null,r,s,!0,a)},tn.hydrateRoot=function(r,s,a){if(!Fd(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",v=Hg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=qg(s,null,r,1,a??null,d,!1,g,v),r[Cr]=s.current,ba(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Hu(s)},tn.render=function(r,s,a){if(!Ku(s))throw Error(t(200));return Gu(null,r,s,!1,a)},tn.unmountComponentAtNode=function(r){if(!Ku(r))throw Error(t(40));return r._reactRootContainer?(ms(function(){Gu(null,null,r,!1,function(){r._reactRootContainer=null,r[Cr]=null})}),!0):!1},tn.unstable_batchedUpdates=xd,tn.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!Ku(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Gu(r,s,a,!1,c)},tn.version="18.3.1-next-f1338f8080-20240426",tn}var ty;function K_(){if(ty)return zd.exports;ty=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),zd.exports=GE(),zd.exports}var ny;function QE(){if(ny)return Yu;ny=1;var n=K_();return Yu.createRoot=n.createRoot,Yu.hydrateRoot=n.hydrateRoot,Yu}var YE=QE();const XE=W_(YE);K_();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hl(){return hl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},hl.apply(this,arguments)}var Ri;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Ri||(Ri={}));const ry="popstate";function JE(n){n===void 0&&(n={});function e(i,o){let{pathname:l,search:h,hash:f}=i.location;return lf("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:pc(o)}return eT(e,t,null,n)}function et(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function G_(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ZE(){return Math.random().toString(36).substr(2,8)}function iy(n,e){return{usr:n.state,key:n.key,idx:e}}function lf(n,e,t,i){return t===void 0&&(t=null),hl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Ko(e):e,{state:t,key:e&&e.key||i||ZE()})}function pc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ko(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function eT(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,f=Ri.Pop,m=null,y=w();y==null&&(y=0,h.replaceState(hl({},h.state,{idx:y}),""));function w(){return(h.state||{idx:null}).idx}function T(){f=Ri.Pop;let U=w(),re=U==null?null:U-y;y=U,m&&m({action:f,location:q.location,delta:re})}function I(U,re){f=Ri.Push;let ee=lf(q.location,U,re);y=w()+1;let te=iy(ee,y),oe=q.createHref(ee);try{h.pushState(te,"",oe)}catch(ke){if(ke instanceof DOMException&&ke.name==="DataCloneError")throw ke;o.location.assign(oe)}l&&m&&m({action:f,location:q.location,delta:1})}function O(U,re){f=Ri.Replace;let ee=lf(q.location,U,re);y=w();let te=iy(ee,y),oe=q.createHref(ee);h.replaceState(te,"",oe),l&&m&&m({action:f,location:q.location,delta:0})}function B(U){let re=o.location.origin!=="null"?o.location.origin:o.location.href,ee=typeof U=="string"?U:pc(U);return ee=ee.replace(/ $/,"%20"),et(re,"No window.location.(origin|href) available to create URL for href: "+ee),new URL(ee,re)}let q={get action(){return f},get location(){return n(o,h)},listen(U){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(ry,T),m=U,()=>{o.removeEventListener(ry,T),m=null}},createHref(U){return e(o,U)},createURL:B,encodeLocation(U){let re=B(U);return{pathname:re.pathname,search:re.search,hash:re.hash}},push:I,replace:O,go(U){return h.go(U)}};return q}var sy;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(sy||(sy={}));function tT(n,e,t){return t===void 0&&(t="/"),nT(n,e,t)}function nT(n,e,t,i){let o=typeof e=="string"?Ko(e):e,l=Mo(o.pathname||"/",t);if(l==null)return null;let h=Q_(n);rT(h);let f=null;for(let m=0;f==null&&m<h.length;++m){let y=pT(l);f=dT(h[m],y)}return f}function Q_(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,h,f)=>{let m={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};m.relativePath.startsWith("/")&&(et(m.relativePath.startsWith(i),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(i.length));let y=Pi([i,m.relativePath]),w=t.concat(m);l.children&&l.children.length>0&&(et(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),Q_(l.children,e,w,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:cT(y,l.index),routesMeta:w})};return n.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let m of Y_(l.path))o(l,h,m)}),e}function Y_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=Y_(i.join("/")),f=[];return f.push(...h.map(m=>m===""?l:[l,m].join("/"))),o&&f.push(...h),f.map(m=>n.startsWith("/")&&m===""?"/":m)}function rT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:hT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const iT=/^:[\w-]+$/,sT=3,oT=2,aT=1,lT=10,uT=-2,oy=n=>n==="*";function cT(n,e){let t=n.split("/"),i=t.length;return t.some(oy)&&(i+=uT),e&&(i+=oT),t.filter(o=>!oy(o)).reduce((o,l)=>o+(iT.test(l)?sT:l===""?aT:lT),i)}function hT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function dT(n,e,t){let{routesMeta:i}=n,o={},l="/",h=[];for(let f=0;f<i.length;++f){let m=i[f],y=f===i.length-1,w=l==="/"?e:e.slice(l.length)||"/",T=uf({path:m.relativePath,caseSensitive:m.caseSensitive,end:y},w),I=m.route;if(!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:Pi([l,T.pathname]),pathnameBase:_T(Pi([l,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(l=Pi([l,T.pathnameBase]))}return h}function uf(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=fT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,w,T)=>{let{paramName:I,isOptional:O}=w;if(I==="*"){let q=f[T]||"";h=l.slice(0,l.length-q.length).replace(/(.)\/+$/,"$1")}const B=f[T];return O&&!B?y[I]=void 0:y[I]=(B||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:n}}function fT(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),G_(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,m)=>(i.push({paramName:f,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function pT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return G_(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Mo(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function mT(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Ko(n):n;return{pathname:t?t.startsWith("/")?t:gT(t,e):e,search:vT(i),hash:wT(o)}}function gT(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Wd(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function yT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function zf(n,e){let t=yT(n);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function $f(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=Ko(n):(o=hl({},n),et(!o.pathname||!o.pathname.includes("?"),Wd("?","pathname","search",o)),et(!o.pathname||!o.pathname.includes("#"),Wd("#","pathname","hash",o)),et(!o.search||!o.search.includes("#"),Wd("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let T=e.length-1;if(!i&&h.startsWith("..")){let I=h.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}f=T>=0?e[T]:"/"}let m=mT(o,f),y=h&&h!=="/"&&h.endsWith("/"),w=(l||h===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(y||w)&&(m.pathname+="/"),m}const Pi=n=>n.join("/").replace(/\/\/+/g,"/"),_T=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),vT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,wT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function ET(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const X_=["post","put","patch","delete"];new Set(X_);const TT=["get",...X_];new Set(TT);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dl(){return dl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},dl.apply(this,arguments)}const jc=W.createContext(null),J_=W.createContext(null),Wr=W.createContext(null),Bc=W.createContext(null),Bi=W.createContext({outlet:null,matches:[],isDataRoute:!1}),Z_=W.createContext(null);function IT(n,e){let{relative:t}=e===void 0?{}:e;Go()||et(!1);let{basename:i,navigator:o}=W.useContext(Wr),{hash:l,pathname:h,search:f}=zc(n,{relative:t}),m=h;return i!=="/"&&(m=h==="/"?i:Pi([i,h])),o.createHref({pathname:m,search:f,hash:l})}function Go(){return W.useContext(Bc)!=null}function Qo(){return Go()||et(!1),W.useContext(Bc).location}function ev(n){W.useContext(Wr).static||W.useLayoutEffect(n)}function wl(){let{isDataRoute:n}=W.useContext(Bi);return n?LT():ST()}function ST(){Go()||et(!1);let n=W.useContext(jc),{basename:e,future:t,navigator:i}=W.useContext(Wr),{matches:o}=W.useContext(Bi),{pathname:l}=Qo(),h=JSON.stringify(zf(o,t.v7_relativeSplatPath)),f=W.useRef(!1);return ev(()=>{f.current=!0}),W.useCallback(function(y,w){if(w===void 0&&(w={}),!f.current)return;if(typeof y=="number"){i.go(y);return}let T=$f(y,JSON.parse(h),l,w.relative==="path");n==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:Pi([e,T.pathname])),(w.replace?i.replace:i.push)(T,w.state,w)},[e,i,h,l,n])}function zc(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=W.useContext(Wr),{matches:o}=W.useContext(Bi),{pathname:l}=Qo(),h=JSON.stringify(zf(o,i.v7_relativeSplatPath));return W.useMemo(()=>$f(n,JSON.parse(h),l,t==="path"),[n,h,l,t])}function AT(n,e){return RT(n,e)}function RT(n,e,t,i){Go()||et(!1);let{navigator:o}=W.useContext(Wr),{matches:l}=W.useContext(Bi),h=l[l.length-1],f=h?h.params:{};h&&h.pathname;let m=h?h.pathnameBase:"/";h&&h.route;let y=Qo(),w;if(e){var T;let U=typeof e=="string"?Ko(e):e;m==="/"||(T=U.pathname)!=null&&T.startsWith(m)||et(!1),w=U}else w=y;let I=w.pathname||"/",O=I;if(m!=="/"){let U=m.replace(/^\//,"").split("/");O="/"+I.replace(/^\//,"").split("/").slice(U.length).join("/")}let B=tT(n,{pathname:O}),q=NT(B&&B.map(U=>Object.assign({},U,{params:Object.assign({},f,U.params),pathname:Pi([m,o.encodeLocation?o.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?m:Pi([m,o.encodeLocation?o.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),l,t,i);return e&&q?W.createElement(Bc.Provider,{value:{location:dl({pathname:"/",search:"",hash:"",state:null,key:"default"},w),navigationType:Ri.Pop}},q):q}function kT(){let n=OT(),e=ET(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:o},t):null,null)}const CT=W.createElement(kT,null);class PT extends W.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?W.createElement(Bi.Provider,{value:this.props.routeContext},W.createElement(Z_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xT(n){let{routeContext:e,match:t,children:i}=n,o=W.useContext(jc);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),W.createElement(Bi.Provider,{value:e},i)}function NT(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let h=n,f=(o=t)==null?void 0:o.errors;if(f!=null){let w=h.findIndex(T=>T.route.id&&f?.[T.route.id]!==void 0);w>=0||et(!1),h=h.slice(0,Math.min(h.length,w+1))}let m=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let w=0;w<h.length;w++){let T=h[w];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(y=w),T.route.id){let{loaderData:I,errors:O}=t,B=T.route.loader&&I[T.route.id]===void 0&&(!O||O[T.route.id]===void 0);if(T.route.lazy||B){m=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}return h.reduceRight((w,T,I)=>{let O,B=!1,q=null,U=null;t&&(O=f&&T.route.id?f[T.route.id]:void 0,q=T.route.errorElement||CT,m&&(y<0&&I===0?(MT("route-fallback"),B=!0,U=null):y===I&&(B=!0,U=T.route.hydrateFallbackElement||null)));let re=e.concat(h.slice(0,I+1)),ee=()=>{let te;return O?te=q:B?te=U:T.route.Component?te=W.createElement(T.route.Component,null):T.route.element?te=T.route.element:te=w,W.createElement(xT,{match:T,routeContext:{outlet:w,matches:re,isDataRoute:t!=null},children:te})};return t&&(T.route.ErrorBoundary||T.route.errorElement||I===0)?W.createElement(PT,{location:t.location,revalidation:t.revalidation,component:q,error:O,children:ee(),routeContext:{outlet:null,matches:re,isDataRoute:!0}}):ee()},null)}var tv=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(tv||{}),nv=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(nv||{});function DT(n){let e=W.useContext(jc);return e||et(!1),e}function bT(n){let e=W.useContext(J_);return e||et(!1),e}function VT(n){let e=W.useContext(Bi);return e||et(!1),e}function rv(n){let e=VT(),t=e.matches[e.matches.length-1];return t.route.id||et(!1),t.route.id}function OT(){var n;let e=W.useContext(Z_),t=bT(),i=rv();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function LT(){let{router:n}=DT(tv.UseNavigateStable),e=rv(nv.UseNavigateStable),t=W.useRef(!1);return ev(()=>{t.current=!0}),W.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,dl({fromRouteId:e},l)))},[n,e])}const ay={};function MT(n,e,t){ay[n]||(ay[n]=!0)}function UT(n,e){n?.v7_startTransition,n?.v7_relativeSplatPath}function FT(n){let{to:e,replace:t,state:i,relative:o}=n;Go()||et(!1);let{future:l,static:h}=W.useContext(Wr),{matches:f}=W.useContext(Bi),{pathname:m}=Qo(),y=wl(),w=$f(e,zf(f,l.v7_relativeSplatPath),m,o==="path"),T=JSON.stringify(w);return W.useEffect(()=>y(JSON.parse(T),{replace:t,state:i,relative:o}),[y,T,o,t,i]),null}function Ei(n){et(!1)}function jT(n){let{basename:e="/",children:t=null,location:i,navigationType:o=Ri.Pop,navigator:l,static:h=!1,future:f}=n;Go()&&et(!1);let m=e.replace(/^\/*/,"/"),y=W.useMemo(()=>({basename:m,navigator:l,static:h,future:dl({v7_relativeSplatPath:!1},f)}),[m,f,l,h]);typeof i=="string"&&(i=Ko(i));let{pathname:w="/",search:T="",hash:I="",state:O=null,key:B="default"}=i,q=W.useMemo(()=>{let U=Mo(w,m);return U==null?null:{location:{pathname:U,search:T,hash:I,state:O,key:B},navigationType:o}},[m,w,T,I,O,B,o]);return q==null?null:W.createElement(Wr.Provider,{value:y},W.createElement(Bc.Provider,{children:t,value:q}))}function BT(n){let{children:e,location:t}=n;return AT(cf(e),t)}new Promise(()=>{});function cf(n,e){e===void 0&&(e=[]);let t=[];return W.Children.forEach(n,(i,o)=>{if(!W.isValidElement(i))return;let l=[...e,o];if(i.type===W.Fragment){t.push.apply(t,cf(i.props.children,l));return}i.type!==Ei&&et(!1),!i.props.index||!i.props.children||et(!1);let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=cf(i.props.children,l)),t.push(h)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mc(){return mc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},mc.apply(this,arguments)}function iv(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function zT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function $T(n,e){return n.button===0&&(!e||e==="_self")&&!zT(n)}const qT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],WT=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],HT="6";try{window.__reactRouterVersion=HT}catch{}const KT=W.createContext({isTransitioning:!1}),GT="startTransition",ly=WE[GT];function QT(n){let{basename:e,children:t,future:i,window:o}=n,l=W.useRef();l.current==null&&(l.current=JE({window:o,v5Compat:!0}));let h=l.current,[f,m]=W.useState({action:h.action,location:h.location}),{v7_startTransition:y}=i||{},w=W.useCallback(T=>{y&&ly?ly(()=>m(T)):m(T)},[m,y]);return W.useLayoutEffect(()=>h.listen(w),[h,w]),W.useEffect(()=>UT(i),[i]),W.createElement(jT,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:h,future:i})}const YT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",XT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,El=W.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:h,state:f,target:m,to:y,preventScrollReset:w,viewTransition:T}=e,I=iv(e,qT),{basename:O}=W.useContext(Wr),B,q=!1;if(typeof y=="string"&&XT.test(y)&&(B=y,YT))try{let te=new URL(window.location.href),oe=y.startsWith("//")?new URL(te.protocol+y):new URL(y),ke=Mo(oe.pathname,O);oe.origin===te.origin&&ke!=null?y=ke+oe.search+oe.hash:q=!0}catch{}let U=IT(y,{relative:o}),re=ZT(y,{replace:h,state:f,target:m,preventScrollReset:w,relative:o,viewTransition:T});function ee(te){i&&i(te),te.defaultPrevented||re(te)}return W.createElement("a",mc({},I,{href:B||U,onClick:q||l?i:ee,ref:t,target:m}))}),vs=W.forwardRef(function(e,t){let{"aria-current":i="page",caseSensitive:o=!1,className:l="",end:h=!1,style:f,to:m,viewTransition:y,children:w}=e,T=iv(e,WT),I=zc(m,{relative:T.relative}),O=Qo(),B=W.useContext(J_),{navigator:q,basename:U}=W.useContext(Wr),re=B!=null&&eI(I)&&y===!0,ee=q.encodeLocation?q.encodeLocation(I).pathname:I.pathname,te=O.pathname,oe=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;o||(te=te.toLowerCase(),oe=oe?oe.toLowerCase():null,ee=ee.toLowerCase()),oe&&U&&(oe=Mo(oe,U)||oe);const ke=ee!=="/"&&ee.endsWith("/")?ee.length-1:ee.length;let Ie=te===ee||!h&&te.startsWith(ee)&&te.charAt(ke)==="/",D=oe!=null&&(oe===ee||!h&&oe.startsWith(ee)&&oe.charAt(ee.length)==="/"),S={isActive:Ie,isPending:D,isTransitioning:re},C=Ie?i:void 0,x;typeof l=="function"?x=l(S):x=[l,Ie?"active":null,D?"pending":null,re?"transitioning":null].filter(Boolean).join(" ");let b=typeof f=="function"?f(S):f;return W.createElement(El,mc({},T,{"aria-current":C,className:x,ref:t,style:b,to:m,viewTransition:y}),typeof w=="function"?w(S):w)});var hf;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(hf||(hf={}));var uy;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(uy||(uy={}));function JT(n){let e=W.useContext(jc);return e||et(!1),e}function ZT(n,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:h,viewTransition:f}=e===void 0?{}:e,m=wl(),y=Qo(),w=zc(n,{relative:h});return W.useCallback(T=>{if($T(T,t)){T.preventDefault();let I=i!==void 0?i:pc(y)===pc(w);m(n,{replace:I,state:o,preventScrollReset:l,relative:h,viewTransition:f})}},[y,m,w,i,o,t,n,l,h,f])}function eI(n,e){e===void 0&&(e={});let t=W.useContext(KT);t==null&&et(!1);let{basename:i}=JT(hf.useViewTransitionState),o=zc(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Mo(t.currentLocation.pathname,i)||t.currentLocation.pathname,h=Mo(t.nextLocation.pathname,i)||t.nextLocation.pathname;return uf(o.pathname,h)!=null||uf(o.pathname,l)!=null}const tI=()=>{};var cy={};/**
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
 */const sv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},nI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],f=n[t++],m=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},ov={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,f=h?n[o+1]:0,m=o+2<n.length,y=m?n[o+2]:0,w=l>>2,T=(l&3)<<4|f>>4;let I=(f&15)<<2|y>>6,O=y&63;m||(O=64,h||(I=64)),i.push(t[w],t[T],t[I],t[O])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(sv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):nI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||T==null)throw new rI;const I=l<<2|f>>4;if(i.push(I),y!==64){const O=f<<4&240|y>>2;if(i.push(O),T!==64){const B=y<<6&192|T;i.push(B)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class rI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iI=function(n){const e=sv(n);return ov.encodeByteArray(e,!0)},gc=function(n){return iI(n).replace(/\./g,"")},av=function(n){try{return ov.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oI=()=>sI().__FIREBASE_DEFAULTS__,aI=()=>{if(typeof process>"u"||typeof cy>"u")return;const n=cy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&av(n[1]);return e&&JSON.parse(e)},$c=()=>{try{return tI()||oI()||aI()||lI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},lv=n=>$c()?.emulatorHosts?.[n],uv=n=>{const e=lv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},cv=()=>$c()?.config,hv=n=>$c()?.[`_${n}`];/**
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
 */class uI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Ps(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function qf(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function dv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[gc(JSON.stringify(t)),gc(JSON.stringify(h)),""].join(".")}const il={};function cI(){const n={prod:[],emulator:[]};for(const e of Object.keys(il))il[e]?n.emulator.push(e):n.prod.push(e);return n}function hI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let hy=!1;function Wf(n,e){if(typeof window>"u"||typeof document>"u"||!Ps(window.location.host)||il[n]===e||il[n]||hy)return;il[n]=e;function t(I){return`__firebase__banner__${I}`}const i="__firebase__banner",l=cI().prod.length>0;function h(){const I=document.getElementById(i);I&&I.remove()}function f(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function m(I,O){I.setAttribute("width","24"),I.setAttribute("id",O),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function y(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{hy=!0,h()},I}function w(I,O){I.setAttribute("id",O),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function T(){const I=hI(i),O=t("text"),B=document.getElementById(O)||document.createElement("span"),q=t("learnmore"),U=document.getElementById(q)||document.createElement("a"),re=t("preprendIcon"),ee=document.getElementById(re)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const te=I.element;f(te),w(U,q);const oe=y();m(ee,re),te.append(ee,B,U,oe),document.body.appendChild(te)}l?(B.innerText="Preview backend disconnected.",ee.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ee.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,B.innerText="Preview backend running in this workspace."),B.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function fI(){const n=$c()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function gI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yI(){const n=zt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _I(){return!fI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vI(){try{return typeof indexedDB=="object"}catch{return!1}}function wI(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const EI="FirebaseError";class gr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=EI,Object.setPrototypeOf(this,gr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tl.prototype.create)}}class Tl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?TI(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new gr(o,f,i)}}function TI(n,e){return n.replace(II,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const II=/\{\$([^}]+)}/g;function SI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Fr(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(dy(l)&&dy(h)){if(!Fr(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function dy(n){return n!==null&&typeof n=="object"}/**
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
 */function Il(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ja(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Za(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function AI(n,e){const t=new RI(n,e);return t.subscribe.bind(t)}class RI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");kI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Hd),o.error===void 0&&(o.error=Hd),o.complete===void 0&&(o.complete=Hd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Hd(){}/**
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
 */function lt(n){return n&&n._delegate?n._delegate:n}class Vi{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ws="[DEFAULT]";/**
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
 */class CI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new uI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xI(e))try{this.getOrInitializeService({instanceIdentifier:ws})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ws){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ws){return this.instances.has(e)}getOptions(e=ws){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:PI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ws){return this.component?this.component.multipleInstances?e:ws:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PI(n){return n===ws?void 0:n}function xI(n){return n.instantiationMode==="EAGER"}/**
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
 */class NI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new CI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ce;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ce||(Ce={}));const DI={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},bI=Ce.INFO,VI={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},OI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=VI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hf{constructor(e){this.name=e,this._logLevel=bI,this._logHandler=OI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const LI=(n,e)=>e.some(t=>n instanceof t);let fy,py;function MI(){return fy||(fy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UI(){return py||(py=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fv=new WeakMap,df=new WeakMap,pv=new WeakMap,Kd=new WeakMap,Kf=new WeakMap;function FI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(xi(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&fv.set(t,n)}).catch(()=>{}),Kf.set(e,n),e}function jI(n){if(df.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});df.set(n,e)}let ff={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return df.get(n);if(e==="objectStoreNames")return n.objectStoreNames||pv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function BI(n){ff=n(ff)}function zI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Gd(this),e,...t);return pv.set(i,e.sort?e.sort():[e]),xi(i)}:UI().includes(n)?function(...e){return n.apply(Gd(this),e),xi(fv.get(this))}:function(...e){return xi(n.apply(Gd(this),e))}}function $I(n){return typeof n=="function"?zI(n):(n instanceof IDBTransaction&&jI(n),LI(n,MI())?new Proxy(n,ff):n)}function xi(n){if(n instanceof IDBRequest)return FI(n);if(Kd.has(n))return Kd.get(n);const e=$I(n);return e!==n&&(Kd.set(n,e),Kf.set(e,n)),e}const Gd=n=>Kf.get(n);function qI(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),f=xi(h);return i&&h.addEventListener("upgradeneeded",m=>{i(xi(h.result),m.oldVersion,m.newVersion,xi(h.transaction),m)}),t&&h.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),f.then(m=>{l&&m.addEventListener("close",()=>l()),o&&m.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const WI=["get","getKey","getAll","getAllKeys","count"],HI=["put","add","delete","clear"],Qd=new Map;function my(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qd.get(e))return Qd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=HI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||WI.includes(t)))return;const l=async function(h,...f){const m=this.transaction(h,o?"readwrite":"readonly");let y=m.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&m.done]))[0]};return Qd.set(e,l),l}BI(n=>({...n,get:(e,t,i)=>my(e,t)||n.get(e,t,i),has:(e,t)=>!!my(e,t)||n.has(e,t)}));/**
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
 */class KI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(GI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function GI(n){return n.getComponent()?.type==="VERSION"}const pf="@firebase/app",gy="0.14.2";/**
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
 */const jr=new Hf("@firebase/app"),QI="@firebase/app-compat",YI="@firebase/analytics-compat",XI="@firebase/analytics",JI="@firebase/app-check-compat",ZI="@firebase/app-check",eS="@firebase/auth",tS="@firebase/auth-compat",nS="@firebase/database",rS="@firebase/data-connect",iS="@firebase/database-compat",sS="@firebase/functions",oS="@firebase/functions-compat",aS="@firebase/installations",lS="@firebase/installations-compat",uS="@firebase/messaging",cS="@firebase/messaging-compat",hS="@firebase/performance",dS="@firebase/performance-compat",fS="@firebase/remote-config",pS="@firebase/remote-config-compat",mS="@firebase/storage",gS="@firebase/storage-compat",yS="@firebase/firestore",_S="@firebase/ai",vS="@firebase/firestore-compat",wS="firebase",ES="12.2.0";/**
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
 */const mf="[DEFAULT]",TS={[pf]:"fire-core",[QI]:"fire-core-compat",[XI]:"fire-analytics",[YI]:"fire-analytics-compat",[ZI]:"fire-app-check",[JI]:"fire-app-check-compat",[eS]:"fire-auth",[tS]:"fire-auth-compat",[nS]:"fire-rtdb",[rS]:"fire-data-connect",[iS]:"fire-rtdb-compat",[sS]:"fire-fn",[oS]:"fire-fn-compat",[aS]:"fire-iid",[lS]:"fire-iid-compat",[uS]:"fire-fcm",[cS]:"fire-fcm-compat",[hS]:"fire-perf",[dS]:"fire-perf-compat",[fS]:"fire-rc",[pS]:"fire-rc-compat",[mS]:"fire-gcs",[gS]:"fire-gcs-compat",[yS]:"fire-fst",[vS]:"fire-fst-compat",[_S]:"fire-vertex","fire-js":"fire-js",[wS]:"fire-js-all"};/**
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
 */const yc=new Map,IS=new Map,gf=new Map;function yy(n,e){try{n.container.addComponent(e)}catch(t){jr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ss(n){const e=n.name;if(gf.has(e))return jr.debug(`There were multiple attempts to register component ${e}.`),!1;gf.set(e,n);for(const t of yc.values())yy(t,n);for(const t of IS.values())yy(t,n);return!0}function qc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Kt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const SS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ni=new Tl("app","Firebase",SS);/**
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
 */class AS{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Vi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ni.create("app-deleted",{appName:this._name})}}/**
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
 */const xs=ES;function mv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:mf,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw Ni.create("bad-app-name",{appName:String(o)});if(t||(t=cv()),!t)throw Ni.create("no-options");const l=yc.get(o);if(l){if(Fr(t,l.options)&&Fr(i,l.config))return l;throw Ni.create("duplicate-app",{appName:o})}const h=new NI(o);for(const m of gf.values())h.addComponent(m);const f=new AS(t,i,h);return yc.set(o,f),f}function Gf(n=mf){const e=yc.get(n);if(!e&&n===mf&&cv())return mv();if(!e)throw Ni.create("no-app",{appName:n});return e}function or(n,e,t){let i=TS[n]??n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${i}" with version "${e}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jr.warn(h.join(" "));return}Ss(new Vi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const RS="firebase-heartbeat-database",kS=1,fl="firebase-heartbeat-store";let Yd=null;function gv(){return Yd||(Yd=qI(RS,kS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(fl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ni.create("idb-open",{originalErrorMessage:n.message})})),Yd}async function CS(n){try{const t=(await gv()).transaction(fl),i=await t.objectStore(fl).get(yv(n));return await t.done,i}catch(e){if(e instanceof gr)jr.warn(e.message);else{const t=Ni.create("idb-get",{originalErrorMessage:e?.message});jr.warn(t.message)}}}async function _y(n,e){try{const i=(await gv()).transaction(fl,"readwrite");await i.objectStore(fl).put(e,yv(n)),await i.done}catch(t){if(t instanceof gr)jr.warn(t.message);else{const i=Ni.create("idb-set",{originalErrorMessage:t?.message});jr.warn(i.message)}}}function yv(n){return`${n.name}!${n.options.appId}`}/**
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
 */const PS=1024,xS=30;class NS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vy();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>xS){const o=VS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){jr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vy(),{heartbeatsToSend:t,unsentEntries:i}=DS(this._heartbeatsCache.heartbeats),o=gc(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return jr.warn(e),""}}}function vy(){return new Date().toISOString().substring(0,10)}function DS(n,e=PS){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),wy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),wy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class bS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vI()?wI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await CS(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return _y(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return _y(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wy(n){return gc(JSON.stringify({version:2,heartbeats:n})).length}function VS(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function OS(n){Ss(new Vi("platform-logger",e=>new KI(e),"PRIVATE")),Ss(new Vi("heartbeat",e=>new NS(e),"PRIVATE")),or(pf,gy,n),or(pf,gy,"esm2020"),or("fire-js","")}OS("");var LS="firebase",MS="12.2.1";/**
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
 */or(LS,MS,"app");function _v(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const US=_v,vv=new Tl("auth","Firebase",_v());/**
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
 */const _c=new Hf("@firebase/auth");function FS(n,...e){_c.logLevel<=Ce.WARN&&_c.warn(`Auth (${xs}): ${n}`,...e)}function ic(n,...e){_c.logLevel<=Ce.ERROR&&_c.error(`Auth (${xs}): ${n}`,...e)}/**
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
 */function Hn(n,...e){throw Qf(n,...e)}function ar(n,...e){return Qf(n,...e)}function wv(n,e,t){const i={...US(),[e]:t};return new Tl("auth","Firebase",i).create(e,{appName:n.name})}function Wn(n){return wv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return vv.create(n,...e)}function _e(n,e,...t){if(!n)throw Qf(e,...t)}function Lr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ic(e),new Error(e)}function Br(n,e){n||Lr(e)}/**
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
 */function yf(){return typeof self<"u"&&self.location?.href||""}function jS(){return Ey()==="http:"||Ey()==="https:"}function Ey(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function BS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jS()||mI()||"connection"in navigator)?navigator.onLine:!0}function zS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Sl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Br(t>e,"Short delay should be less than long delay!"),this.isMobile=dI()||gI()}get(){return BS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yf(n,e){Br(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ev{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $S={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],WS=new Sl(3e4,6e4);function Hr(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Kr(n,e,t,i,o={}){return Tv(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=Il({key:n.config.apiKey,...h}).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const y={method:e,headers:m,...l};return pI()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&Ps(n.emulatorConfig.host)&&(y.credentials="include"),Ev.fetch()(await Iv(n,n.config.apiHost,t,f),y)})}async function Tv(n,e,t){n._canInitEmulator=!1;const i={...$S,...e};try{const o=new KS(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Xu(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[m,y]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xu(n,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw Xu(n,"email-already-in-use",h);if(m==="USER_DISABLED")throw Xu(n,"user-disabled",h);const w=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw wv(n,w,y);Hn(n,w)}}catch(o){if(o instanceof gr)throw o;Hn(n,"network-request-failed",{message:String(o)})}}async function Yo(n,e,t,i,o={}){const l=await Kr(n,e,t,i,o);return"mfaPendingCredential"in l&&Hn(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function Iv(n,e,t,i){const o=`${e}${t}?${i}`,l=n,h=l.config.emulator?Yf(n.config,o):`${n.config.apiScheme}://${o}`;return qS.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function HS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class KS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ar(this.auth,"network-request-failed")),WS.get())})}}function Xu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=ar(n,e,i);return o.customData._tokenResponse=t,o}function Ty(n){return n!==void 0&&n.enterprise!==void 0}class GS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return HS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function QS(n,e){return Kr(n,"GET","/v2/recaptchaConfig",Hr(n,e))}/**
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
 */async function YS(n,e){return Kr(n,"POST","/v1/accounts:delete",e)}async function vc(n,e){return Kr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function sl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XS(n,e=!1){const t=lt(n),i=await t.getIdToken(e),o=Xf(i);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l?.sign_in_provider;return{claims:o,token:i,authTime:sl(Xd(o.auth_time)),issuedAtTime:sl(Xd(o.iat)),expirationTime:sl(Xd(o.exp)),signInProvider:h||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Xd(n){return Number(n)*1e3}function Xf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ic("JWT malformed, contained fewer than 3 sections"),null;try{const o=av(t);return o?JSON.parse(o):(ic("Failed to decode base64 JWT payload"),null)}catch(o){return ic("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Iy(n){const e=Xf(n);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Uo(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof gr&&JS(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function JS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ZS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _f{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=sl(this.lastLoginAt),this.creationTime=sl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wc(n){const e=n.auth,t=await n.getIdToken(),i=await Uo(n,vc(e,{idToken:t}));_e(i?.users.length,e,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const l=o.providerUserInfo?.length?Sv(o.providerUserInfo):[],h=t1(n.providerData,l),f=n.isAnonymous,m=!(n.email&&o.passwordHash)&&!h?.length,y=f?m:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new _f(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,w)}async function e1(n){const e=lt(n);await wc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function t1(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Sv(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function n1(n,e){const t=await Tv(n,{},async()=>{const i=Il({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=await Iv(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:i};return n.emulatorConfig&&Ps(n.emulatorConfig.host)&&(m.credentials="include"),Ev.fetch()(h,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function r1(n,e){return Kr(n,"POST","/v2/accounts:revokeToken",Hr(n,e))}/**
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
 */class bo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Iy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=Iy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await n1(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new bo;return i&&(_e(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bo,this.toJSON())}_performRefresh(){return Lr("not implemented")}}/**
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
 */function wi(n,e){_e(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class $n{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new ZS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new _f(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Uo(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return XS(this,e)}reload(){return e1(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $n({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await wc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kt(this.auth.app))return Promise.reject(Wn(this.auth));const e=await this.getIdToken();return await Uo(this,YS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,f=t.tenantId??void 0,m=t._redirectEventId??void 0,y=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:T,emailVerified:I,isAnonymous:O,providerData:B,stsTokenManager:q}=t;_e(T&&q,e,"internal-error");const U=bo.fromJSON(this.name,q);_e(typeof T=="string",e,"internal-error"),wi(i,e.name),wi(o,e.name),_e(typeof I=="boolean",e,"internal-error"),_e(typeof O=="boolean",e,"internal-error"),wi(l,e.name),wi(h,e.name),wi(f,e.name),wi(m,e.name),wi(y,e.name),wi(w,e.name);const re=new $n({uid:T,auth:e,email:o,emailVerified:I,displayName:i,isAnonymous:O,photoURL:h,phoneNumber:l,tenantId:f,stsTokenManager:U,createdAt:y,lastLoginAt:w});return B&&Array.isArray(B)&&(re.providerData=B.map(ee=>({...ee}))),m&&(re._redirectEventId=m),re}static async _fromIdTokenResponse(e,t,i=!1){const o=new bo;o.updateFromServerResponse(t);const l=new $n({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await wc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Sv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!l?.length,f=new bo;f.updateFromIdToken(i);const m=new $n({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new _f(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(m,y),m}}/**
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
 */const Sy=new Map;function Mr(n){Br(n instanceof Function,"Expected a class definition");let e=Sy.get(n);return e?(Br(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Sy.set(n,e),e)}/**
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
 */class Av{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Av.type="NONE";const Ay=Av;/**
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
 */function sc(n,e,t){return`firebase:${n}:${e}:${t}`}class Vo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=sc(this.userKey,o.apiKey,l),this.fullPersistenceKey=sc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await vc(this.auth,{idToken:e}).catch(()=>{});return t?$n._fromGetAccountInfoResponse(this.auth,t,e):null}return $n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Vo(Mr(Ay),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Mr(Ay);const h=sc(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const w=await y._get(h);if(w){let T;if(typeof w=="string"){const I=await vc(e,{idToken:w}).catch(()=>{});if(!I)break;T=await $n._fromGetAccountInfoResponse(e,I,w)}else T=$n._fromJSON(e,w);y!==l&&(f=T),l=y;break}}catch{}const m=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new Vo(l,e,i):(l=m[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new Vo(l,e,i))}}/**
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
 */function Ry(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nv(e))return"Blackberry";if(Dv(e))return"Webos";if(kv(e))return"Safari";if((e.includes("chrome/")||Cv(e))&&!e.includes("edge/"))return"Chrome";if(xv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function Rv(n=zt()){return/firefox\//i.test(n)}function kv(n=zt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cv(n=zt()){return/crios\//i.test(n)}function Pv(n=zt()){return/iemobile/i.test(n)}function xv(n=zt()){return/android/i.test(n)}function Nv(n=zt()){return/blackberry/i.test(n)}function Dv(n=zt()){return/webos/i.test(n)}function Jf(n=zt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function i1(n=zt()){return Jf(n)&&!!window.navigator?.standalone}function s1(){return yI()&&document.documentMode===10}function bv(n=zt()){return Jf(n)||xv(n)||Dv(n)||Nv(n)||/windows phone/i.test(n)||Pv(n)}/**
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
 */function Vv(n,e=[]){let t;switch(n){case"Browser":t=Ry(zt());break;case"Worker":t=`${Ry(zt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xs}/${i}`}/**
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
 */class o1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const m=e(l);h(m)}catch(m){f(m)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function a1(n,e={}){return Kr(n,"GET","/v2/passwordPolicy",Hr(n,e))}/**
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
 */const l1=6;class u1{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??l1,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class c1{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ky(this),this.idTokenSubscription=new ky(this),this.beforeStateQueue=new o1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Vo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await vc(this,{idToken:e}),i=await $n._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Kt(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,h=i?._redirectEventId,f=await this.tryRedirectSignIn(e);(!l||l===h)&&f?.user&&(i=f.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kt(this.app))return Promise.reject(Wn(this));const t=e?lt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kt(this.app)?Promise.reject(Wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kt(this.app)?Promise.reject(Wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await a1(this),t=new u1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Tl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await r1(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await Vo.create(this,[Mr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,i,o);return()=>{h=!0,m()}}else{const m=e.addObserver(t);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(Kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&FS(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Gr(n){return lt(n)}class ky{constructor(e){this.auth=e,this.observer=null,this.addObserver=AI(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function h1(n){Wc=n}function Ov(n){return Wc.loadJS(n)}function d1(){return Wc.recaptchaEnterpriseScript}function f1(){return Wc.gapiScript}function p1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class m1{constructor(){this.enterprise=new g1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class g1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const y1="recaptcha-enterprise",Lv="NO_RECAPTCHA";class _1{constructor(e){this.type=y1,this.auth=Gr(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{QS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new GS(m);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(m=>{f(m)})})}function o(l,h,f){const m=window.grecaptcha;Ty(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(Lv)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new m1().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(f=>{if(!t&&Ty(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let m=d1();m.length!==0&&(m+=f),Ov(m).then(()=>{o(f,l,h)}).catch(y=>{h(y)})}}).catch(f=>{h(f)})})}}async function Cy(n,e,t,i=!1,o=!1){const l=new _1(n);let h;if(o)h=Lv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const m=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const m=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function vf(n,e,t,i,o){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Cy(n,e,t,t==="getOobCode");return i(n,l)}else return i(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Cy(n,e,t,t==="getOobCode");return i(n,h)}else return Promise.reject(l)})}/**
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
 */function v1(n,e){const t=qc(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Fr(l,e??{}))return o;Hn(o,"already-initialized")}return t.initialize({options:e})}function w1(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Mr);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function E1(n,e,t){const i=Gr(n);_e(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Mv(e),{host:h,port:f}=T1(e),m=f===null?"":`:${f}`,y={url:`${l}//${h}${m}/`},w=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){_e(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),_e(Fr(y,i.config.emulator)&&Fr(w,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=w,i.settings.appVerificationDisabledForTesting=!0,Ps(h)?(qf(`${l}//${h}${m}`),Wf("Auth",!0)):I1()}function Mv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function T1(n){const e=Mv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Py(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:Py(h)}}}function Py(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function I1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Zf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Lr("not implemented")}_getIdTokenResponse(e){return Lr("not implemented")}_linkToIdToken(e,t){return Lr("not implemented")}_getReauthenticationResolver(e){return Lr("not implemented")}}async function S1(n,e){return Kr(n,"POST","/v1/accounts:update",e)}async function A1(n,e){return Kr(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function R1(n,e){return Yo(n,"POST","/v1/accounts:signInWithPassword",Hr(n,e))}/**
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
 */async function k1(n,e){return Yo(n,"POST","/v1/accounts:signInWithEmailLink",Hr(n,e))}async function C1(n,e){return Yo(n,"POST","/v1/accounts:signInWithEmailLink",Hr(n,e))}/**
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
 */class pl extends Zf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new pl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new pl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vf(e,t,"signInWithPassword",R1);case"emailLink":return k1(e,{email:this._email,oobCode:this._password});default:Hn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vf(e,i,"signUpPassword",A1);case"emailLink":return C1(e,{idToken:t,email:this._email,oobCode:this._password});default:Hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Oo(n,e){return Yo(n,"POST","/v1/accounts:signInWithIdp",Hr(n,e))}/**
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
 */const P1="http://localhost";class As extends Zf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new As(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Hn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...l}=t;if(!i||!o)return null;const h=new As(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Oo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Oo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Oo(e,t)}buildRequest(){const e={requestUri:P1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Il(t)}return e}}/**
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
 */function x1(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function N1(n){const e=Ja(Za(n)).link,t=e?Ja(Za(e)).deep_link_id:null,i=Ja(Za(n)).deep_link_id;return(i?Ja(Za(i)).link:null)||i||t||e||n}class ep{constructor(e){const t=Ja(Za(e)),i=t.apiKey??null,o=t.oobCode??null,l=x1(t.mode??null);_e(i&&o&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=N1(e);try{return new ep(t)}catch{return null}}}/**
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
 */class Xo{constructor(){this.providerId=Xo.PROVIDER_ID}static credential(e,t){return pl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=ep.parseLink(t);return _e(i,"argument-error"),pl._fromEmailAndCode(e,i.code,i.tenantId)}}Xo.PROVIDER_ID="password";Xo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Uv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Al extends Uv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ti extends Al{constructor(){super("facebook.com")}static credential(e){return As._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ti.credential(e.oauthAccessToken)}catch{return null}}}Ti.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ti.PROVIDER_ID="facebook.com";/**
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
 */class Ii extends Al{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return As._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ii.credential(t,i)}catch{return null}}}Ii.GOOGLE_SIGN_IN_METHOD="google.com";Ii.PROVIDER_ID="google.com";/**
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
 */class Si extends Al{constructor(){super("github.com")}static credential(e){return As._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Si.credential(e.oauthAccessToken)}catch{return null}}}Si.GITHUB_SIGN_IN_METHOD="github.com";Si.PROVIDER_ID="github.com";/**
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
 */class Ai extends Al{constructor(){super("twitter.com")}static credential(e,t){return As._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ai.credential(t,i)}catch{return null}}}Ai.TWITTER_SIGN_IN_METHOD="twitter.com";Ai.PROVIDER_ID="twitter.com";/**
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
 */async function Fv(n,e){return Yo(n,"POST","/v1/accounts:signUp",Hr(n,e))}/**
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
 */class fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await $n._fromIdTokenResponse(e,i,o),h=xy(i);return new fr({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=xy(i);return new fr({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function xy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function D1(n){if(Kt(n.app))return Promise.reject(Wn(n));const e=Gr(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new fr({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await Fv(e,{returnSecureToken:!0}),i=await fr._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(i.user),i}/**
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
 */class Ec extends gr{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Ec.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Ec(e,t,i,o)}}function jv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Ec._fromErrorAndOperation(n,l,e,i):l})}async function b1(n,e,t=!1){const i=await Uo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return fr._forOperation(n,"link",i)}/**
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
 */async function V1(n,e,t=!1){const{auth:i}=n;if(Kt(i.app))return Promise.reject(Wn(i));const o="reauthenticate";try{const l=await Uo(n,jv(i,o,e,n),t);_e(l.idToken,i,"internal-error");const h=Xf(l.idToken);_e(h,i,"internal-error");const{sub:f}=h;return _e(n.uid===f,i,"user-mismatch"),fr._forOperation(n,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&Hn(i,"user-mismatch"),l}}/**
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
 */async function Bv(n,e,t=!1){if(Kt(n.app))return Promise.reject(Wn(n));const i="signIn",o=await jv(n,i,e),l=await fr._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function O1(n,e){return Bv(Gr(n),e)}/**
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
 */async function L1(n,e){return Yo(n,"POST","/v1/accounts:signInWithCustomToken",Hr(n,e))}/**
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
 */async function M1(n,e){if(Kt(n.app))return Promise.reject(Wn(n));const t=Gr(n),i=await L1(t,{token:e,returnSecureToken:!0}),o=await fr._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(o.user),o}/**
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
 */async function zv(n){const e=Gr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function U1(n,e,t){if(Kt(n.app))return Promise.reject(Wn(n));const i=Gr(n),h=await vf(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Fv).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&zv(n),m}),f=await fr._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(f.user),f}function F1(n,e,t){return Kt(n.app)?Promise.reject(Wn(n)):O1(lt(n),Xo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&zv(n),i})}function j1(n,e){return B1(lt(n),null,e)}async function B1(n,e,t){const{auth:i}=n,l={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(l.password=t);const h=await Uo(n,S1(i,l));await n._updateTokensIfNecessary(h,!0)}function z1(n,e,t,i){return lt(n).onIdTokenChanged(e,t,i)}function $1(n,e,t){return lt(n).beforeAuthStateChanged(e,t)}function q1(n,e,t,i){return lt(n).onAuthStateChanged(e,t,i)}function W1(n){return lt(n).signOut()}const Tc="__sak";/**
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
 */class $v{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Tc,"1"),this.storage.removeItem(Tc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const H1=1e3,K1=10;class qv extends $v{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,m)=>{this.notifyListeners(h,m)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);s1()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,K1):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},H1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qv.type="LOCAL";const G1=qv;/**
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
 */class Wv extends $v{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Wv.type="SESSION";const Hv=Wv;/**
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
 */function Q1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Hc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),m=await Q1(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hc.receivers=[];/**
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
 */function tp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Y1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,m)=>{const y=tp("",20);o.port1.start();const w=setTimeout(()=>{m(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(I.data.response);break;default:clearTimeout(w),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function lr(){return window}function X1(n){lr().location.href=n}/**
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
 */function Kv(){return typeof lr().WorkerGlobalScope<"u"&&typeof lr().importScripts=="function"}async function J1(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z1(){return navigator?.serviceWorker?.controller||null}function eA(){return Kv()?self:null}/**
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
 */const Gv="firebaseLocalStorageDb",tA=1,Ic="firebaseLocalStorage",Qv="fbase_key";class Rl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Kc(n,e){return n.transaction([Ic],e?"readwrite":"readonly").objectStore(Ic)}function nA(){const n=indexedDB.deleteDatabase(Gv);return new Rl(n).toPromise()}function wf(){const n=indexedDB.open(Gv,tA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ic,{keyPath:Qv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ic)?e(i):(i.close(),await nA(),e(await wf()))})})}async function Ny(n,e,t){const i=Kc(n,!0).put({[Qv]:e,value:t});return new Rl(i).toPromise()}async function rA(n,e){const t=Kc(n,!1).get(e),i=await new Rl(t).toPromise();return i===void 0?null:i.value}function Dy(n,e){const t=Kc(n,!0).delete(e);return new Rl(t).toPromise()}const iA=800,sA=3;class Yv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>sA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hc._getInstance(eA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await J1(),!this.activeServiceWorker)return;this.sender=new Y1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Z1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wf();return await Ny(e,Tc,"1"),await Dy(e,Tc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ny(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>rA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Kc(o,!1).getAll();return new Rl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yv.type="LOCAL";const oA=Yv;new Sl(3e4,6e4);/**
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
 */function aA(n,e){return e?Mr(e):(_e(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class np extends Zf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Oo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lA(n){return Bv(n.auth,new np(n),n.bypassAuthState)}function uA(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),V1(t,new np(n),n.bypassAuthState)}async function cA(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),b1(t,new np(n),n.bypassAuthState)}/**
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
 */class Xv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lA;case"linkViaPopup":case"linkViaRedirect":return cA;case"reauthViaPopup":case"reauthViaRedirect":return uA;default:Hn(this.auth,"internal-error")}}resolve(e){Br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hA=new Sl(2e3,1e4);class Do extends Xv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Do.currentPopupAction&&Do.currentPopupAction.cancel(),Do.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Br(this.filter.length===1,"Popup operations only handle one event");const e=tp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ar(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ar(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Do.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ar(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hA.get())};e()}}Do.currentPopupAction=null;/**
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
 */const dA="pendingRedirect",oc=new Map;class fA extends Xv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=oc.get(this.auth._key());if(!e){try{const i=await pA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}oc.set(this.auth._key(),e)}return this.bypassAuthState||oc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pA(n,e){const t=yA(e),i=gA(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function mA(n,e){oc.set(n._key(),e)}function gA(n){return Mr(n._redirectPersistence)}function yA(n){return sc(dA,n.config.apiKey,n.name)}async function _A(n,e,t=!1){if(Kt(n.app))return Promise.reject(Wn(n));const i=Gr(n),o=aA(i,e),h=await new fA(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
 */const vA=600*1e3;class wA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Jv(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ar(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vA&&this.cachedEventUids.clear(),this.cachedEventUids.has(by(e))}saveEventToCache(e){this.cachedEventUids.add(by(e)),this.lastProcessedEventTime=Date.now()}}function by(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Jv({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function EA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jv(n);default:return!1}}/**
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
 */async function TA(n,e={}){return Kr(n,"GET","/v1/projects",e)}/**
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
 */const IA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SA=/^https?/;async function AA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await TA(n);for(const t of e)try{if(RA(t))return}catch{}Hn(n,"unauthorized-domain")}function RA(n){const e=yf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!SA.test(t))return!1;if(IA.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const kA=new Sl(3e4,6e4);function Vy(){const n=lr().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function CA(n){return new Promise((e,t)=>{function i(){Vy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vy(),t(ar(n,"network-request-failed"))},timeout:kA.get()})}if(lr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(lr().gapi?.load)i();else{const o=p1("iframefcb");return lr()[o]=()=>{gapi.load?i():t(ar(n,"network-request-failed"))},Ov(`${f1()}?onload=${o}`).catch(l=>t(l))}}).catch(e=>{throw ac=null,e})}let ac=null;function PA(n){return ac=ac||CA(n),ac}/**
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
 */const xA=new Sl(5e3,15e3),NA="__/auth/iframe",DA="emulator/auth/iframe",bA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OA(n){const e=n.config;_e(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Yf(e,DA):`https://${n.config.authDomain}/${NA}`,i={apiKey:e.apiKey,appName:n.name,v:xs},o=VA.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Il(i).slice(1)}`}async function LA(n){const e=await PA(n),t=lr().gapi;return _e(t,n,"internal-error"),e.open({where:document.body,url:OA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bA,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=ar(n,"network-request-failed"),f=lr().setTimeout(()=>{l(h)},xA.get());function m(){lr().clearTimeout(f),o(i)}i.ping(m).then(m,()=>{l(h)})}))}/**
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
 */const MA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UA=500,FA=600,jA="_blank",BA="http://localhost";class Oy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zA(n,e,t,i=UA,o=FA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const m={...MA,width:i.toString(),height:o.toString(),top:l,left:h},y=zt().toLowerCase();t&&(f=Cv(y)?jA:t),Rv(y)&&(e=e||BA,m.scrollbars="yes");const w=Object.entries(m).reduce((I,[O,B])=>`${I}${O}=${B},`,"");if(i1(y)&&f!=="_self")return $A(e||"",f),new Oy(null);const T=window.open(e||"",f,w);_e(T,n,"popup-blocked");try{T.focus()}catch{}return new Oy(T)}function $A(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const qA="__/auth/handler",WA="emulator/auth/handler",HA=encodeURIComponent("fac");async function Ly(n,e,t,i,o,l){_e(n.config.authDomain,n,"auth-domain-config-required"),_e(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:xs,eventId:o};if(e instanceof Uv){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",SI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))h[w]=T}if(e instanceof Al){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(h.scopes=w.join(","))}n.tenantId&&(h.tid=n.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const m=await n._getAppCheckToken(),y=m?`#${HA}=${encodeURIComponent(m)}`:"";return`${KA(n)}?${Il(f).slice(1)}${y}`}function KA({config:n}){return n.emulator?Yf(n,WA):`https://${n.authDomain}/${qA}`}/**
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
 */const Jd="webStorageSupport";class GA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hv,this._completeRedirectFn=_A,this._overrideRedirectResult=mA}async _openPopup(e,t,i,o){Br(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await Ly(e,t,i,yf(),o);return zA(e,l,tp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Ly(e,t,i,yf(),o);return X1(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Br(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await LA(e),i=new wA(e);return t.register("authEvent",o=>(_e(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Jd,{type:Jd},o=>{const l=o?.[0]?.[Jd];l!==void 0&&t(!!l),Hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=AA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return bv()||kv()||Jf()}}const QA=GA;var My="@firebase/auth",Uy="1.11.0";/**
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
 */class YA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function XA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JA(n){Ss(new Vi("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const m={apiKey:h,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vv(n)},y=new c1(i,o,l,m);return w1(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Ss(new Vi("auth-internal",e=>{const t=Gr(e.getProvider("auth").getImmediate());return(i=>new YA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(My,Uy,XA(n)),or(My,Uy,"esm2020")}/**
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
 */const ZA=300,eR=hv("authIdTokenMaxAge")||ZA;let Fy=null;const tR=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>eR)return;const o=t?.token;Fy!==o&&(Fy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Zv(n=Gf()){const e=qc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=v1(n,{popupRedirectResolver:QA,persistence:[oA,G1,Hv]}),i=hv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=tR(l.toString());$1(t,h,()=>h(t.currentUser)),z1(t,f=>h(f))}}const o=lv("auth");return o&&E1(t,`http://${o}`),t}function nR(){return document.getElementsByTagName("head")?.[0]??document}h1({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=ar("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",nR().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JA("Browser");var jy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Di,ew;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,S){function C(){}C.prototype=S.prototype,D.D=S.prototype,D.prototype=new C,D.prototype.constructor=D,D.C=function(x,b,L){for(var k=Array(arguments.length-2),it=2;it<arguments.length;it++)k[it-2]=arguments[it];return S.prototype[b].apply(x,k)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,S,C){C||(C=0);var x=Array(16);if(typeof S=="string")for(var b=0;16>b;++b)x[b]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(b=0;16>b;++b)x[b]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=D.g[0],C=D.g[1],b=D.g[2];var L=D.g[3],k=S+(L^C&(b^L))+x[0]+3614090360&4294967295;S=C+(k<<7&4294967295|k>>>25),k=L+(b^S&(C^b))+x[1]+3905402710&4294967295,L=S+(k<<12&4294967295|k>>>20),k=b+(C^L&(S^C))+x[2]+606105819&4294967295,b=L+(k<<17&4294967295|k>>>15),k=C+(S^b&(L^S))+x[3]+3250441966&4294967295,C=b+(k<<22&4294967295|k>>>10),k=S+(L^C&(b^L))+x[4]+4118548399&4294967295,S=C+(k<<7&4294967295|k>>>25),k=L+(b^S&(C^b))+x[5]+1200080426&4294967295,L=S+(k<<12&4294967295|k>>>20),k=b+(C^L&(S^C))+x[6]+2821735955&4294967295,b=L+(k<<17&4294967295|k>>>15),k=C+(S^b&(L^S))+x[7]+4249261313&4294967295,C=b+(k<<22&4294967295|k>>>10),k=S+(L^C&(b^L))+x[8]+1770035416&4294967295,S=C+(k<<7&4294967295|k>>>25),k=L+(b^S&(C^b))+x[9]+2336552879&4294967295,L=S+(k<<12&4294967295|k>>>20),k=b+(C^L&(S^C))+x[10]+4294925233&4294967295,b=L+(k<<17&4294967295|k>>>15),k=C+(S^b&(L^S))+x[11]+2304563134&4294967295,C=b+(k<<22&4294967295|k>>>10),k=S+(L^C&(b^L))+x[12]+1804603682&4294967295,S=C+(k<<7&4294967295|k>>>25),k=L+(b^S&(C^b))+x[13]+4254626195&4294967295,L=S+(k<<12&4294967295|k>>>20),k=b+(C^L&(S^C))+x[14]+2792965006&4294967295,b=L+(k<<17&4294967295|k>>>15),k=C+(S^b&(L^S))+x[15]+1236535329&4294967295,C=b+(k<<22&4294967295|k>>>10),k=S+(b^L&(C^b))+x[1]+4129170786&4294967295,S=C+(k<<5&4294967295|k>>>27),k=L+(C^b&(S^C))+x[6]+3225465664&4294967295,L=S+(k<<9&4294967295|k>>>23),k=b+(S^C&(L^S))+x[11]+643717713&4294967295,b=L+(k<<14&4294967295|k>>>18),k=C+(L^S&(b^L))+x[0]+3921069994&4294967295,C=b+(k<<20&4294967295|k>>>12),k=S+(b^L&(C^b))+x[5]+3593408605&4294967295,S=C+(k<<5&4294967295|k>>>27),k=L+(C^b&(S^C))+x[10]+38016083&4294967295,L=S+(k<<9&4294967295|k>>>23),k=b+(S^C&(L^S))+x[15]+3634488961&4294967295,b=L+(k<<14&4294967295|k>>>18),k=C+(L^S&(b^L))+x[4]+3889429448&4294967295,C=b+(k<<20&4294967295|k>>>12),k=S+(b^L&(C^b))+x[9]+568446438&4294967295,S=C+(k<<5&4294967295|k>>>27),k=L+(C^b&(S^C))+x[14]+3275163606&4294967295,L=S+(k<<9&4294967295|k>>>23),k=b+(S^C&(L^S))+x[3]+4107603335&4294967295,b=L+(k<<14&4294967295|k>>>18),k=C+(L^S&(b^L))+x[8]+1163531501&4294967295,C=b+(k<<20&4294967295|k>>>12),k=S+(b^L&(C^b))+x[13]+2850285829&4294967295,S=C+(k<<5&4294967295|k>>>27),k=L+(C^b&(S^C))+x[2]+4243563512&4294967295,L=S+(k<<9&4294967295|k>>>23),k=b+(S^C&(L^S))+x[7]+1735328473&4294967295,b=L+(k<<14&4294967295|k>>>18),k=C+(L^S&(b^L))+x[12]+2368359562&4294967295,C=b+(k<<20&4294967295|k>>>12),k=S+(C^b^L)+x[5]+4294588738&4294967295,S=C+(k<<4&4294967295|k>>>28),k=L+(S^C^b)+x[8]+2272392833&4294967295,L=S+(k<<11&4294967295|k>>>21),k=b+(L^S^C)+x[11]+1839030562&4294967295,b=L+(k<<16&4294967295|k>>>16),k=C+(b^L^S)+x[14]+4259657740&4294967295,C=b+(k<<23&4294967295|k>>>9),k=S+(C^b^L)+x[1]+2763975236&4294967295,S=C+(k<<4&4294967295|k>>>28),k=L+(S^C^b)+x[4]+1272893353&4294967295,L=S+(k<<11&4294967295|k>>>21),k=b+(L^S^C)+x[7]+4139469664&4294967295,b=L+(k<<16&4294967295|k>>>16),k=C+(b^L^S)+x[10]+3200236656&4294967295,C=b+(k<<23&4294967295|k>>>9),k=S+(C^b^L)+x[13]+681279174&4294967295,S=C+(k<<4&4294967295|k>>>28),k=L+(S^C^b)+x[0]+3936430074&4294967295,L=S+(k<<11&4294967295|k>>>21),k=b+(L^S^C)+x[3]+3572445317&4294967295,b=L+(k<<16&4294967295|k>>>16),k=C+(b^L^S)+x[6]+76029189&4294967295,C=b+(k<<23&4294967295|k>>>9),k=S+(C^b^L)+x[9]+3654602809&4294967295,S=C+(k<<4&4294967295|k>>>28),k=L+(S^C^b)+x[12]+3873151461&4294967295,L=S+(k<<11&4294967295|k>>>21),k=b+(L^S^C)+x[15]+530742520&4294967295,b=L+(k<<16&4294967295|k>>>16),k=C+(b^L^S)+x[2]+3299628645&4294967295,C=b+(k<<23&4294967295|k>>>9),k=S+(b^(C|~L))+x[0]+4096336452&4294967295,S=C+(k<<6&4294967295|k>>>26),k=L+(C^(S|~b))+x[7]+1126891415&4294967295,L=S+(k<<10&4294967295|k>>>22),k=b+(S^(L|~C))+x[14]+2878612391&4294967295,b=L+(k<<15&4294967295|k>>>17),k=C+(L^(b|~S))+x[5]+4237533241&4294967295,C=b+(k<<21&4294967295|k>>>11),k=S+(b^(C|~L))+x[12]+1700485571&4294967295,S=C+(k<<6&4294967295|k>>>26),k=L+(C^(S|~b))+x[3]+2399980690&4294967295,L=S+(k<<10&4294967295|k>>>22),k=b+(S^(L|~C))+x[10]+4293915773&4294967295,b=L+(k<<15&4294967295|k>>>17),k=C+(L^(b|~S))+x[1]+2240044497&4294967295,C=b+(k<<21&4294967295|k>>>11),k=S+(b^(C|~L))+x[8]+1873313359&4294967295,S=C+(k<<6&4294967295|k>>>26),k=L+(C^(S|~b))+x[15]+4264355552&4294967295,L=S+(k<<10&4294967295|k>>>22),k=b+(S^(L|~C))+x[6]+2734768916&4294967295,b=L+(k<<15&4294967295|k>>>17),k=C+(L^(b|~S))+x[13]+1309151649&4294967295,C=b+(k<<21&4294967295|k>>>11),k=S+(b^(C|~L))+x[4]+4149444226&4294967295,S=C+(k<<6&4294967295|k>>>26),k=L+(C^(S|~b))+x[11]+3174756917&4294967295,L=S+(k<<10&4294967295|k>>>22),k=b+(S^(L|~C))+x[2]+718787259&4294967295,b=L+(k<<15&4294967295|k>>>17),k=C+(L^(b|~S))+x[9]+3951481745&4294967295,D.g[0]=D.g[0]+S&4294967295,D.g[1]=D.g[1]+(b+(k<<21&4294967295|k>>>11))&4294967295,D.g[2]=D.g[2]+b&4294967295,D.g[3]=D.g[3]+L&4294967295}i.prototype.u=function(D,S){S===void 0&&(S=D.length);for(var C=S-this.blockSize,x=this.B,b=this.h,L=0;L<S;){if(b==0)for(;L<=C;)o(this,D,L),L+=this.blockSize;if(typeof D=="string"){for(;L<S;)if(x[b++]=D.charCodeAt(L++),b==this.blockSize){o(this,x),b=0;break}}else for(;L<S;)if(x[b++]=D[L++],b==this.blockSize){o(this,x),b=0;break}}this.h=b,this.o+=S},i.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var S=1;S<D.length-8;++S)D[S]=0;var C=8*this.o;for(S=D.length-8;S<D.length;++S)D[S]=C&255,C/=256;for(this.u(D),D=Array(16),S=C=0;4>S;++S)for(var x=0;32>x;x+=8)D[C++]=this.g[S]>>>x&255;return D};function l(D,S){var C=f;return Object.prototype.hasOwnProperty.call(C,D)?C[D]:C[D]=S(D)}function h(D,S){this.h=S;for(var C=[],x=!0,b=D.length-1;0<=b;b--){var L=D[b]|0;x&&L==S||(C[b]=L,x=!1)}this.g=C}var f={};function m(D){return-128<=D&&128>D?l(D,function(S){return new h([S|0],0>S?-1:0)}):new h([D|0],0>D?-1:0)}function y(D){if(isNaN(D)||!isFinite(D))return T;if(0>D)return U(y(-D));for(var S=[],C=1,x=0;D>=C;x++)S[x]=D/C|0,C*=4294967296;return new h(S,0)}function w(D,S){if(D.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(D.charAt(0)=="-")return U(w(D.substring(1),S));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=y(Math.pow(S,8)),x=T,b=0;b<D.length;b+=8){var L=Math.min(8,D.length-b),k=parseInt(D.substring(b,b+L),S);8>L?(L=y(Math.pow(S,L)),x=x.j(L).add(y(k))):(x=x.j(C),x=x.add(y(k)))}return x}var T=m(0),I=m(1),O=m(16777216);n=h.prototype,n.m=function(){if(q(this))return-U(this).m();for(var D=0,S=1,C=0;C<this.g.length;C++){var x=this.i(C);D+=(0<=x?x:4294967296+x)*S,S*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(B(this))return"0";if(q(this))return"-"+U(this).toString(D);for(var S=y(Math.pow(D,6)),C=this,x="";;){var b=oe(C,S).g;C=re(C,b.j(S));var L=((0<C.g.length?C.g[0]:C.h)>>>0).toString(D);if(C=b,B(C))return L+x;for(;6>L.length;)L="0"+L;x=L+x}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function B(D){if(D.h!=0)return!1;for(var S=0;S<D.g.length;S++)if(D.g[S]!=0)return!1;return!0}function q(D){return D.h==-1}n.l=function(D){return D=re(this,D),q(D)?-1:B(D)?0:1};function U(D){for(var S=D.g.length,C=[],x=0;x<S;x++)C[x]=~D.g[x];return new h(C,~D.h).add(I)}n.abs=function(){return q(this)?U(this):this},n.add=function(D){for(var S=Math.max(this.g.length,D.g.length),C=[],x=0,b=0;b<=S;b++){var L=x+(this.i(b)&65535)+(D.i(b)&65535),k=(L>>>16)+(this.i(b)>>>16)+(D.i(b)>>>16);x=k>>>16,L&=65535,k&=65535,C[b]=k<<16|L}return new h(C,C[C.length-1]&-2147483648?-1:0)};function re(D,S){return D.add(U(S))}n.j=function(D){if(B(this)||B(D))return T;if(q(this))return q(D)?U(this).j(U(D)):U(U(this).j(D));if(q(D))return U(this.j(U(D)));if(0>this.l(O)&&0>D.l(O))return y(this.m()*D.m());for(var S=this.g.length+D.g.length,C=[],x=0;x<2*S;x++)C[x]=0;for(x=0;x<this.g.length;x++)for(var b=0;b<D.g.length;b++){var L=this.i(x)>>>16,k=this.i(x)&65535,it=D.i(b)>>>16,bt=D.i(b)&65535;C[2*x+2*b]+=k*bt,ee(C,2*x+2*b),C[2*x+2*b+1]+=L*bt,ee(C,2*x+2*b+1),C[2*x+2*b+1]+=k*it,ee(C,2*x+2*b+1),C[2*x+2*b+2]+=L*it,ee(C,2*x+2*b+2)}for(x=0;x<S;x++)C[x]=C[2*x+1]<<16|C[2*x];for(x=S;x<2*S;x++)C[x]=0;return new h(C,0)};function ee(D,S){for(;(D[S]&65535)!=D[S];)D[S+1]+=D[S]>>>16,D[S]&=65535,S++}function te(D,S){this.g=D,this.h=S}function oe(D,S){if(B(S))throw Error("division by zero");if(B(D))return new te(T,T);if(q(D))return S=oe(U(D),S),new te(U(S.g),U(S.h));if(q(S))return S=oe(D,U(S)),new te(U(S.g),S.h);if(30<D.g.length){if(q(D)||q(S))throw Error("slowDivide_ only works with positive integers.");for(var C=I,x=S;0>=x.l(D);)C=ke(C),x=ke(x);var b=Ie(C,1),L=Ie(x,1);for(x=Ie(x,2),C=Ie(C,2);!B(x);){var k=L.add(x);0>=k.l(D)&&(b=b.add(C),L=k),x=Ie(x,1),C=Ie(C,1)}return S=re(D,b.j(S)),new te(b,S)}for(b=T;0<=D.l(S);){for(C=Math.max(1,Math.floor(D.m()/S.m())),x=Math.ceil(Math.log(C)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),L=y(C),k=L.j(S);q(k)||0<k.l(D);)C-=x,L=y(C),k=L.j(S);B(L)&&(L=I),b=b.add(L),D=re(D,k)}return new te(b,D)}n.A=function(D){return oe(this,D).h},n.and=function(D){for(var S=Math.max(this.g.length,D.g.length),C=[],x=0;x<S;x++)C[x]=this.i(x)&D.i(x);return new h(C,this.h&D.h)},n.or=function(D){for(var S=Math.max(this.g.length,D.g.length),C=[],x=0;x<S;x++)C[x]=this.i(x)|D.i(x);return new h(C,this.h|D.h)},n.xor=function(D){for(var S=Math.max(this.g.length,D.g.length),C=[],x=0;x<S;x++)C[x]=this.i(x)^D.i(x);return new h(C,this.h^D.h)};function ke(D){for(var S=D.g.length+1,C=[],x=0;x<S;x++)C[x]=D.i(x)<<1|D.i(x-1)>>>31;return new h(C,D.h)}function Ie(D,S){var C=S>>5;S%=32;for(var x=D.g.length-C,b=[],L=0;L<x;L++)b[L]=0<S?D.i(L+C)>>>S|D.i(L+C+1)<<32-S:D.i(L+C);return new h(b,D.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,ew=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=w,Di=h}).apply(typeof jy<"u"?jy:typeof self<"u"?self:typeof window<"u"?window:{});var Ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tw,el,nw,lc,Ef,rw,iw,sw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,_){return u==Array.prototype||u==Object.prototype||(u[p]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ju=="object"&&Ju];for(var p=0;p<u.length;++p){var _=u[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,p){if(p)e:{var _=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var M=u[E];if(!(M in _))break e;_=_[M]}u=u[u.length-1],E=_[u],p=p(E),p!=E&&p!=null&&e(_,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var _=0,E=!1,M={next:function(){if(!E&&_<u.length){var $=_++;return{value:p($,u[$]),done:!1}}return E=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function m(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function y(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function w(u,p,_){return u.call.apply(u.bind,arguments)}function T(u,p,_){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,E),u.apply(p,M)}}return function(){return u.apply(p,arguments)}}function I(u,p,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,I.apply(null,arguments)}function O(u,p){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function B(u,p){function _(){}_.prototype=p.prototype,u.aa=p.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(E,M,$){for(var Z=Array(arguments.length-2),je=2;je<arguments.length;je++)Z[je-2]=arguments[je];return p.prototype[M].apply(E,Z)}}function q(u){const p=u.length;if(0<p){const _=Array(p);for(let E=0;E<p;E++)_[E]=u[E];return _}return[]}function U(u,p){for(let _=1;_<arguments.length;_++){const E=arguments[_];if(m(E)){const M=u.length||0,$=E.length||0;u.length=M+$;for(let Z=0;Z<$;Z++)u[M+Z]=E[Z]}else u.push(E)}}class re{constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function ee(u){return/^[\s\xa0]*$/.test(u)}function te(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function oe(u){return oe[" "](u),u}oe[" "]=function(){};var ke=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function Ie(u,p,_){for(const E in u)p.call(_,u[E],E,u)}function D(u,p){for(const _ in u)p.call(void 0,u[_],_,u)}function S(u){const p={};for(const _ in u)p[_]=u[_];return p}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(u,p){let _,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(_ in E)u[_]=E[_];for(let $=0;$<C.length;$++)_=C[$],Object.prototype.hasOwnProperty.call(E,_)&&(u[_]=E[_])}}function b(u){var p=1;u=u.split(":");const _=[];for(;0<p&&u.length;)_.push(u.shift()),p--;return u.length&&_.push(u.join(":")),_}function L(u){f.setTimeout(()=>{throw u},0)}function k(){var u=me;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class it{constructor(){this.h=this.g=null}add(p,_){const E=bt.get();E.set(p,_),this.h?this.h.next=E:this.g=E,this.h=E}}var bt=new re(()=>new Vt,u=>u.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,ne=!1,me=new it,ae=()=>{const u=f.Promise.resolve(void 0);Be=()=>{u.then(V)}};var V=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(_){L(_)}var p=bt;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}ne=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Se=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};f.addEventListener("test",_,p),f.removeEventListener("test",_,p)}catch{}return u})();function Ae(u,p){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(ke){e:{try{oe(p.nodeName);var M=!0;break e}catch{}M=!1}M||(p=null)}}else _=="mouseover"?p=u.fromElement:_=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}B(Ae,fe);var De={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function $e(u,p,_,E,M){this.listener=u,this.proxy=null,this.src=p,this.type=_,this.capture=!!E,this.ha=M,this.key=++Ue,this.da=this.fa=!1}function wt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function _r(u){this.src=u,this.g={},this.h=0}_r.prototype.add=function(u,p,_,E,M){var $=u.toString();u=this.g[$],u||(u=this.g[$]=[],this.h++);var Z=Qr(u,p,E,M);return-1<Z?(p=u[Z],_||(p.fa=!1)):(p=new $e(p,this.src,$,!!E,M),p.fa=_,u.push(p)),p};function Os(u,p){var _=p.type;if(_ in u.g){var E=u.g[_],M=Array.prototype.indexOf.call(E,p,void 0),$;($=0<=M)&&Array.prototype.splice.call(E,M,1),$&&(wt(p),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Qr(u,p,_,E){for(var M=0;M<u.length;++M){var $=u[M];if(!$.da&&$.listener==p&&$.capture==!!_&&$.ha==E)return M}return-1}var Wi="closure_lm_"+(1e6*Math.random()|0),Ls={};function ra(u,p,_,E,M){if(Array.isArray(p)){for(var $=0;$<p.length;$++)ra(u,p[$],_,E,M);return null}return _=oa(_),u&&u[Me]?u.K(p,_,y(E)?!!E.capture:!1,M):ia(u,p,_,!1,E,M)}function ia(u,p,_,E,M,$){if(!p)throw Error("Invalid event type");var Z=y(M)?!!M.capture:!!M,je=Us(u);if(je||(u[Wi]=je=new _r(u)),_=je.add(p,_,E,Z,$),_.proxy)return _;if(E=Ol(),_.proxy=E,E.src=u,E.listener=_,u.addEventListener)Se||(M=Z),M===void 0&&(M=!1),u.addEventListener(p.toString(),E,M);else if(u.attachEvent)u.attachEvent(wr(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ol(){function u(_){return p.call(u.src,u.listener,_)}const p=sa;return u}function Ms(u,p,_,E,M){if(Array.isArray(p))for(var $=0;$<p.length;$++)Ms(u,p[$],_,E,M);else E=y(E)?!!E.capture:!!E,_=oa(_),u&&u[Me]?(u=u.i,p=String(p).toString(),p in u.g&&($=u.g[p],_=Qr($,_,E,M),-1<_&&(wt($[_]),Array.prototype.splice.call($,_,1),$.length==0&&(delete u.g[p],u.h--)))):u&&(u=Us(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Qr(p,_,E,M)),(_=-1<u?p[u]:null)&&vr(_))}function vr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Me])Os(p.i,u);else{var _=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(_,E,u.capture):p.detachEvent?p.detachEvent(wr(_),E):p.addListener&&p.removeListener&&p.removeListener(E),(_=Us(p))?(Os(_,u),_.h==0&&(_.src=null,p[Wi]=null)):wt(u)}}}function wr(u){return u in Ls?Ls[u]:Ls[u]="on"+u}function sa(u,p){if(u.da)u=!0;else{p=new Ae(p,this);var _=u.listener,E=u.ha||u.src;u.fa&&vr(u),u=_.call(E,p)}return u}function Us(u){return u=u[Wi],u instanceof _r?u:null}var Fs="__closure_events_fn_"+(1e9*Math.random()>>>0);function oa(u){return typeof u=="function"?u:(u[Fs]||(u[Fs]=function(p){return u.handleEvent(p)}),u[Fs])}function pt(){G.call(this),this.i=new _r(this),this.M=this,this.F=null}B(pt,G),pt.prototype[Me]=!0,pt.prototype.removeEventListener=function(u,p,_,E){Ms(this,u,p,_,E)};function mt(u,p){var _,E=u.F;if(E)for(_=[];E;E=E.F)_.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new fe(p,u);else if(p instanceof fe)p.target=p.target||u;else{var M=p;p=new fe(E,u),x(p,M)}if(M=!0,_)for(var $=_.length-1;0<=$;$--){var Z=p.g=_[$];M=Er(Z,E,!0,p)&&M}if(Z=p.g=u,M=Er(Z,E,!0,p)&&M,M=Er(Z,E,!1,p)&&M,_)for($=0;$<_.length;$++)Z=p.g=_[$],M=Er(Z,E,!1,p)&&M}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var _=u.g[p],E=0;E<_.length;E++)wt(_[E]);delete u.g[p],u.h--}}this.F=null},pt.prototype.K=function(u,p,_,E){return this.i.add(String(u),p,!1,_,E)},pt.prototype.L=function(u,p,_,E){return this.i.add(String(u),p,!0,_,E)};function Er(u,p,_,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var M=!0,$=0;$<p.length;++$){var Z=p[$];if(Z&&!Z.da&&Z.capture==_){var je=Z.listener,gt=Z.ha||Z.src;Z.fa&&Os(u.i,Z),M=je.call(gt,E)!==!1&&M}}return M&&!E.defaultPrevented}function aa(u,p,_){if(typeof u=="function")_&&(u=I(u,_));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function Yr(u){u.g=aa(()=>{u.g=null,u.i&&(u.i=!1,Yr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Hi extends G{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Yr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ki(u){G.call(this),this.h=u,this.g={}}B(Ki,G);var la=[];function ua(u){Ie(u.g,function(p,_){this.g.hasOwnProperty(_)&&vr(p)},u),u.g={}}Ki.prototype.N=function(){Ki.aa.N.call(this),ua(this)},Ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ca=f.JSON.stringify,ha=f.JSON.parse,da=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Gi(){}Gi.prototype.h=null;function js(u){return u.h||(u.h=u.i())}function Bs(){}var pn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gn(){fe.call(this,"d")}B(Gn,fe);function zs(){fe.call(this,"c")}B(zs,fe);var Qn={},fa=null;function Qi(){return fa=fa||new pt}Qn.La="serverreachability";function pa(u){fe.call(this,Qn.La,u)}B(pa,fe);function Tr(u){const p=Qi();mt(p,new pa(p))}Qn.STAT_EVENT="statevent";function ma(u,p){fe.call(this,Qn.STAT_EVENT,u),this.stat=p}B(ma,fe);function st(u){const p=Qi();mt(p,new ma(p,u))}Qn.Ma="timingevent";function $s(u,p){fe.call(this,Qn.Ma,u),this.size=p}B($s,fe);function Cn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Yi(){this.g=!0}Yi.prototype.xa=function(){this.g=!1};function Xi(u,p,_,E,M,$){u.info(function(){if(u.g)if($)for(var Z="",je=$.split("&"),gt=0;gt<je.length;gt++){var be=je[gt].split("=");if(1<be.length){var Et=be[0];be=be[1];var ut=Et.split("_");Z=2<=ut.length&&ut[1]=="type"?Z+(Et+"="+be+"&"):Z+(Et+"=redacted&")}}else Z=null;else Z=$;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+_+`
`+Z})}function qs(u,p,_,E,M,$,Z){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+_+`
`+$+" "+Z})}function Pn(u,p,_,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+ph(u,_)+(E?" "+E:"")})}function ga(u,p){u.info(function(){return"TIMEOUT: "+p})}Yi.prototype.info=function(){};function ph(u,p){if(!u.g)return p;if(!p)return null;try{var _=JSON.parse(p);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var E=_[u];if(!(2>E.length)){var M=E[1];if(Array.isArray(M)&&!(1>M.length)){var $=M[0];if($!="noop"&&$!="stop"&&$!="close")for(var Z=1;Z<M.length;Z++)M[Z]=""}}}}return ca(_)}catch{return p}}var Ws={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ll={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xn;function Ji(){}B(Ji,Gi),Ji.prototype.g=function(){return new XMLHttpRequest},Ji.prototype.i=function(){return{}},xn=new Ji;function Nn(u,p,_,E){this.j=u,this.i=p,this.l=_,this.R=E||1,this.U=new Ki(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ml}function Ml(){this.i=null,this.g="",this.h=!1}var ya={},Hs={};function Ks(u,p,_){u.L=1,u.v=ti(an(p)),u.m=_,u.P=!0,_a(u,null)}function _a(u,p){u.F=Date.now(),qe(u),u.A=an(u.v);var _=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),ri(_.i,"t",E),u.C=0,_=u.j.J,u.h=new Ml,u.g=tu(u.j,_?p:null,!u.m),0<u.O&&(u.M=new Hi(I(u.Y,u,u.g),u.O)),p=u.U,_=u.g,E=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(la[0]=M.toString()),M=la);for(var $=0;$<M.length;$++){var Z=ra(_,M[$],E||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Tr(),Xi(u.i,u.u,u.A,u.l,u.R,u.m)}Nn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Qt(u)==3?p.j():this.Y(u)},Nn.prototype.Y=function(u){try{if(u==this.g)e:{const ut=Qt(this.g);var p=this.g.Ba();const yn=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||Sa(this.g)))){this.J||ut!=4||p==7||(p==8||0>=yn?Tr(3):Tr(2)),Zi(this);var _=this.g.Z();this.X=_;t:if(Ul(this)){var E=Sa(this.g);u="";var M=E.length,$=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mn(this),Xr(this);var Z="";break t}this.h.i=new f.TextDecoder}for(p=0;p<M;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!($&&p==M-1)});E.length=0,this.h.g+=u,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=_==200,qs(this.i,this.u,this.A,this.l,this.R,ut,_),this.o){if(this.T&&!this.K){t:{if(this.g){var je,gt=this.g;if((je=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(je)){var be=je;break t}}be=null}if(_=be)Pn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,va(this,_);else{this.o=!1,this.s=3,st(12),mn(this),Xr(this);break e}}if(this.P){_=!0;let un;for(;!this.J&&this.C<Z.length;)if(un=mh(this,Z),un==Hs){ut==4&&(this.s=4,st(14),_=!1),Pn(this.i,this.l,null,"[Incomplete Response]");break}else if(un==ya){this.s=4,st(15),Pn(this.i,this.l,Z,"[Invalid Chunk]"),_=!1;break}else Pn(this.i,this.l,un,null),va(this,un);if(Ul(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||Z.length!=0||this.h.h||(this.s=1,st(16),_=!1),this.o=this.o&&_,!_)Pn(this.i,this.l,Z,"[Invalid Chunked Response]"),mn(this),Xr(this);else if(0<Z.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),Ra(Et),Et.M=!0,st(11))}}else Pn(this.i,this.l,Z,null),va(this,Z);ut==4&&mn(this),this.o&&!this.J&&(ut==4?io(this.j,this):(this.o=!1,qe(this)))}else Zs(this.g),_==400&&0<Z.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),mn(this),Xr(this)}}}catch{}finally{}};function Ul(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function mh(u,p){var _=u.C,E=p.indexOf(`
`,_);return E==-1?Hs:(_=Number(p.substring(_,E)),isNaN(_)?ya:(E+=1,E+_>p.length?Hs:(p=p.slice(E,E+_),u.C=E+_,p)))}Nn.prototype.cancel=function(){this.J=!0,mn(this)};function qe(u){u.S=Date.now()+u.I,Fl(u,u.I)}function Fl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Cn(I(u.ba,u),p)}function Zi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Nn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ga(this.i,this.A),this.L!=2&&(Tr(),st(17)),mn(this),this.s=2,Xr(this)):Fl(this,this.S-u)};function Xr(u){u.j.G==0||u.J||io(u.j,u)}function mn(u){Zi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,ua(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function va(u,p){try{var _=u.j;if(_.G!=0&&(_.g==u||$t(_.h,u))){if(!u.K&&$t(_.h,u)&&_.G==3){try{var E=_.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)ro(_),Ln(_);else break e;no(_),st(18)}}else _.za=M[1],0<_.za-_.T&&37500>M[2]&&_.F&&_.v==0&&!_.C&&(_.C=Cn(I(_.Za,_),6e3));if(1>=Bl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else kr(_,11)}else if((u.K||_.g==u)&&ro(_),!ee(p))for(M=_.Da.g.parse(p),p=0;p<M.length;p++){let be=M[p];if(_.T=be[0],be=be[1],_.G==2)if(be[0]=="c"){_.K=be[1],_.ia=be[2];const Et=be[3];Et!=null&&(_.la=Et,_.j.info("VER="+_.la));const ut=be[4];ut!=null&&(_.Aa=ut,_.j.info("SVER="+_.Aa));const yn=be[5];yn!=null&&typeof yn=="number"&&0<yn&&(E=1.5*yn,_.L=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const un=u.g;if(un){const os=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(os){var $=E.h;$.g||os.indexOf("spdy")==-1&&os.indexOf("quic")==-1&&os.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(wa($,$.h),$.h=null))}if(E.D){const oo=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;oo&&(E.ya=oo,ze(E.I,E.D,oo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),E=_;var Z=u;if(E.qa=eu(E,E.J?E.ia:null,E.W),Z.K){zl(E.h,Z);var je=Z,gt=E.L;gt&&(je.I=gt),je.B&&(Zi(je),qe(je)),E.g=Z}else ss(E);0<_.i.length&&Zn(_)}else be[0]!="stop"&&be[0]!="close"||kr(_,7);else _.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?kr(_,7):kt(_):be[0]!="noop"&&_.l&&_.l.ta(be),_.v=0)}}Tr(4)}catch{}}var jl=class{constructor(u,p){this.g=u,this.map=p}};function es(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function on(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Bl(u){return u.h?1:u.g?u.g.size:0}function $t(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function wa(u,p){u.g?u.g.add(p):u.h=p}function zl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}es.prototype.cancel=function(){if(this.i=$l(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function $l(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const _ of u.g.values())p=p.concat(_.D);return p}return q(u.i)}function Gs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(m(u)){for(var p=[],_=u.length,E=0;E<_;E++)p.push(u[E]);return p}p=[],_=0;for(E in u)p[_++]=u[E];return p}function Qs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(m(u)||typeof u=="string"){var p=[];u=u.length;for(var _=0;_<u;_++)p.push(_);return p}p=[],_=0;for(const E in u)p[_++]=E;return p}}}function Jr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(m(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var _=Qs(u),E=Gs(u),M=E.length,$=0;$<M;$++)p.call(void 0,E[$],_&&_[$],u)}var ts=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gh(u,p){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var E=u[_].indexOf("="),M=null;if(0<=E){var $=u[_].substring(0,E);M=u[_].substring(E+1)}else $=u[_];p($,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Ir(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ir){this.h=u.h,ns(this,u.j),this.o=u.o,this.g=u.g,Zr(this,u.s),this.l=u.l;var p=u.i,_=new Yn;_.i=p.i,p.g&&(_.g=new Map(p.g),_.h=p.h),ei(this,_),this.m=u.m}else u&&(p=String(u).match(ts))?(this.h=!1,ns(this,p[1]||"",!0),this.o=Ne(p[2]||""),this.g=Ne(p[3]||"",!0),Zr(this,p[4]),this.l=Ne(p[5]||"",!0),ei(this,p[6]||"",!0),this.m=Ne(p[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}Ir.prototype.toString=function(){var u=[],p=this.j;p&&u.push(ni(p,Ys,!0),":");var _=this.g;return(_||p=="file")&&(u.push("//"),(p=this.o)&&u.push(ni(p,Ys,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ni(_,_.charAt(0)=="/"?Hl:Wl,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ni(_,Ea)),u.join("")};function an(u){return new Ir(u)}function ns(u,p,_){u.j=_?Ne(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Zr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function ei(u,p,_){p instanceof Yn?(u.i=p,Xn(u.i,u.h)):(_||(p=ni(p,Kl)),u.i=new Yn(p,u.h))}function ze(u,p,_){u.i.set(p,_)}function ti(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ni(u,p,_){return typeof u=="string"?(u=encodeURI(u).replace(p,ql),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function ql(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ys=/[#\/\?@]/g,Wl=/[#\?:]/g,Hl=/[#\?]/g,Kl=/[#\?@]/g,Ea=/#/g;function Yn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Rt(u){u.g||(u.g=new Map,u.h=0,u.i&&gh(u.i,function(p,_){u.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}n=Yn.prototype,n.add=function(u,p){Rt(this),this.i=null,u=gn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(p),this.h+=1,this};function Dn(u,p){Rt(u),p=gn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function bn(u,p){return Rt(u),p=gn(u,p),u.g.has(p)}n.forEach=function(u,p){Rt(this),this.g.forEach(function(_,E){_.forEach(function(M){u.call(p,M,E,this)},this)},this)},n.na=function(){Rt(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),_=[];for(let E=0;E<p.length;E++){const M=u[E];for(let $=0;$<M.length;$++)_.push(p[E])}return _},n.V=function(u){Rt(this);let p=[];if(typeof u=="string")bn(this,u)&&(p=p.concat(this.g.get(gn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)p=p.concat(u[_])}return p},n.set=function(u,p){return Rt(this),this.i=null,u=gn(this,u),bn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function ri(u,p,_){Dn(u,p),0<_.length&&(u.i=null,u.g.set(gn(u,p),q(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var _=0;_<p.length;_++){var E=p[_];const $=encodeURIComponent(String(E)),Z=this.V(E);for(E=0;E<Z.length;E++){var M=$;Z[E]!==""&&(M+="="+encodeURIComponent(String(Z[E]))),u.push(M)}}return this.i=u.join("&")};function gn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Xn(u,p){p&&!u.j&&(Rt(u),u.i=null,u.g.forEach(function(_,E){var M=E.toLowerCase();E!=M&&(Dn(this,E),ri(this,M,_))},u)),u.j=p}function yh(u,p){const _=new Yi;if(f.Image){const E=new Image;E.onload=O(Gt,_,"TestLoadImage: loaded",!0,p,E),E.onerror=O(Gt,_,"TestLoadImage: error",!1,p,E),E.onabort=O(Gt,_,"TestLoadImage: abort",!1,p,E),E.ontimeout=O(Gt,_,"TestLoadImage: timeout",!1,p,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function Gl(u,p){const _=new Yi,E=new AbortController,M=setTimeout(()=>{E.abort(),Gt(_,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then($=>{clearTimeout(M),$.ok?Gt(_,"TestPingServer: ok",!0,p):Gt(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Gt(_,"TestPingServer: error",!1,p)})}function Gt(u,p,_,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(_)}catch{}}function _h(){this.g=new da}function Ql(u,p,_){const E=_||"";try{Jr(u,function(M,$){let Z=M;y(M)&&(Z=ca(M)),p.push(E+$+"="+encodeURIComponent(Z))})}catch(M){throw p.push(E+"type="+encodeURIComponent("_badmap")),M}}function Sr(u){this.l=u.Ub||null,this.j=u.eb||!1}B(Sr,Gi),Sr.prototype.g=function(){return new rs(this.l,this.j)},Sr.prototype.i=(function(u){return function(){return u}})({});function rs(u,p){pt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(rs,pt),n=rs.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,On(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Vn(this):On(this),this.readyState==3&&Yl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Vn(this))},n.Qa=function(u){this.g&&(this.response=u,Vn(this))},n.ga=function(){this.g&&Vn(this)};function Vn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,On(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=p.next();return u.join(`\r
`)};function On(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(rs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ar(u){let p="";return Ie(u,function(_,E){p+=E,p+=":",p+=_,p+=`\r
`}),p}function ii(u,p,_){e:{for(E in _){var E=!1;break e}E=!0}E||(_=Ar(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):ze(u,p,_))}function Ye(u){pt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(Ye,pt);var vh=/^https?$/i,Ta=["POST","PUT"];n=Ye.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xn.g(),this.v=this.o?js(this.o):js(xn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch($){is(this,$);return}if(u=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)_.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const $ of E.keys())_.set($,E.get($));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),M=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(Ta,p,void 0))||E||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,Z]of _)this.g.setRequestHeader($,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Js(this),this.u=!0,this.g.send(u),this.u=!1}catch($){is(this,$)}};function is(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Xs(u),ln(u)}function Xs(u){u.A||(u.A=!0,mt(u,"complete"),mt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,mt(this,"complete"),mt(this,"abort"),ln(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ln(this,!0)),Ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ia(this):this.bb())},n.bb=function(){Ia(this)};function Ia(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Qt(u)!=4||u.Z()!=2)){if(u.u&&Qt(u)==4)aa(u.Ea,0,u);else if(mt(u,"readystatechange"),Qt(u)==4){u.h=!1;try{const Z=u.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var _;if(!(_=p)){var E;if(E=Z===0){var M=String(u.D).match(ts)[1]||null;!M&&f.self&&f.self.location&&(M=f.self.location.protocol.slice(0,-1)),E=!vh.test(M?M.toLowerCase():"")}_=E}if(_)mt(u,"complete"),mt(u,"success");else{u.m=6;try{var $=2<Qt(u)?u.g.statusText:""}catch{$=""}u.l=$+" ["+u.Z()+"]",Xs(u)}}finally{ln(u)}}}}function ln(u,p){if(u.g){Js(u);const _=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||mt(u,"ready");try{_.onreadystatechange=E}catch{}}}function Js(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Qt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),ha(p)}};function Sa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Zs(u){const p={};u=(u.g&&2<=Qt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(ee(u[E]))continue;var _=b(u[E]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=p[M]||[];p[M]=$,$.push(_)}D(p,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jn(u,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||p}function Aa(u){this.Aa=0,this.i=[],this.j=new Yi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jn("baseRetryDelayMs",5e3,u),this.cb=Jn("retryDelaySeedMs",1e4,u),this.Wa=Jn("forwardChannelMaxRetries",2,u),this.wa=Jn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new es(u&&u.concurrentRequestLimit),this.Da=new _h,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Aa.prototype,n.la=8,n.G=1,n.connect=function(u,p,_,E){st(0),this.W=u,this.H=p||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.I=eu(this,null,this.W),Zn(this)};function kt(u){if(eo(u),u.G==3){var p=u.U++,_=an(u.I);if(ze(_,"SID",u.K),ze(_,"RID",p),ze(_,"TYPE","terminate"),Rr(u,_),p=new Nn(u,u.j,p),p.L=2,p.v=ti(an(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!_&&f.Image&&(new Image().src=p.v,_=!0),_||(p.g=tu(p.j,null),p.g.ea(p.v)),p.F=Date.now(),qe(p)}Zl(u)}function Ln(u){u.g&&(Ra(u),u.g.cancel(),u.g=null)}function eo(u){Ln(u),u.u&&(f.clearTimeout(u.u),u.u=null),ro(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Zn(u){if(!on(u.h)&&!u.s){u.s=!0;var p=u.Ga;Be||ae(),ne||(Be(),ne=!0),me.add(p,u),u.B=0}}function wh(u,p){return Bl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Cn(I(u.Ga,u,p),Jl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new Nn(this,this.j,u);let $=this.o;if(this.S&&($?($=S($),x($,this.S)):$=this.S),this.m!==null||this.O||(M.H=$,$=null),this.P)e:{for(var p=0,_=0;_<this.i.length;_++){t:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=_;break e}if(p===4096||_===this.i.length-1){p=_+1;break e}}p=1e3}else p=1e3;p=si(this,M,p),_=an(this.I),ze(_,"RID",u),ze(_,"CVER",22),this.D&&ze(_,"X-HTTP-Session-Id",this.D),Rr(this,_),$&&(this.O?p="headers="+encodeURIComponent(String(Ar($)))+"&"+p:this.m&&ii(_,this.m,$)),wa(this.h,M),this.Ua&&ze(_,"TYPE","init"),this.P?(ze(_,"$req",p),ze(_,"SID","null"),M.T=!0,Ks(M,_,null)):Ks(M,_,p),this.G=2}}else this.G==3&&(u?to(this,u):this.i.length==0||on(this.h)||to(this))};function to(u,p){var _;p?_=p.l:_=u.U++;const E=an(u.I);ze(E,"SID",u.K),ze(E,"RID",_),ze(E,"AID",u.T),Rr(u,E),u.m&&u.o&&ii(E,u.m,u.o),_=new Nn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),p&&(u.i=p.D.concat(u.i)),p=si(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),wa(u.h,_),Ks(_,E,p)}function Rr(u,p){u.H&&Ie(u.H,function(_,E){ze(p,E,_)}),u.l&&Jr({},function(_,E){ze(p,E,_)})}function si(u,p,_){_=Math.min(u.i.length,_);var E=u.l?I(u.l.Na,u.l,u):null;e:{var M=u.i;let $=-1;for(;;){const Z=["count="+_];$==-1?0<_?($=M[0].g,Z.push("ofs="+$)):$=0:Z.push("ofs="+$);let je=!0;for(let gt=0;gt<_;gt++){let be=M[gt].g;const Et=M[gt].map;if(be-=$,0>be)$=Math.max(0,M[gt].g-100),je=!1;else try{Ql(Et,Z,"req"+be+"_")}catch{E&&E(Et)}}if(je){E=Z.join("&");break e}}}return u=u.i.splice(0,_),p.D=u,E}function ss(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Be||ae(),ne||(Be(),ne=!0),me.add(p,u),u.v=0}}function no(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Cn(I(u.Fa,u),Jl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Xl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Cn(I(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),Ln(this),Xl(this))};function Ra(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Xl(u){u.g=new Nn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=an(u.qa);ze(p,"RID","rpc"),ze(p,"SID",u.K),ze(p,"AID",u.T),ze(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(p,"TO",u.ja),ze(p,"TYPE","xmlhttp"),Rr(u,p),u.m&&u.o&&ii(p,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=ti(an(p)),_.m=null,_.P=!0,_a(_,u)}n.Za=function(){this.C!=null&&(this.C=null,Ln(this),no(this),st(19))};function ro(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function io(u,p){var _=null;if(u.g==p){ro(u),Ra(u),u.g=null;var E=2}else if($t(u.h,p))_=p.D,zl(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){_=p.m?p.m.length:0,p=Date.now()-p.F;var M=u.B;E=Qi(),mt(E,new $s(E,_)),Zn(u)}else ss(u);else if(M=p.s,M==3||M==0&&0<p.X||!(E==1&&wh(u,p)||E==2&&no(u)))switch(_&&0<_.length&&(p=u.h,p.i=p.i.concat(_)),M){case 1:kr(u,5);break;case 4:kr(u,10);break;case 3:kr(u,6);break;default:kr(u,2)}}}function Jl(u,p){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*p}function kr(u,p){if(u.j.info("Error code "+p),p==2){var _=I(u.fb,u),E=u.Xa;const M=!E;E=new Ir(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||ns(E,"https"),ti(E),M?yh(E.toString(),_):Gl(E.toString(),_)}else st(2);u.G=0,u.l&&u.l.sa(p),Zl(u),eo(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Zl(u){if(u.G=0,u.ka=[],u.l){const p=$l(u.h);(p.length!=0||u.i.length!=0)&&(U(u.ka,p),U(u.ka,u.i),u.h.i.length=0,q(u.i),u.i.length=0),u.l.ra()}}function eu(u,p,_){var E=_ instanceof Ir?an(_):new Ir(_);if(E.g!="")p&&(E.g=p+"."+E.g),Zr(E,E.s);else{var M=f.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;var $=new Ir(null);E&&ns($,E),p&&($.g=p),M&&Zr($,M),_&&($.l=_),E=$}return _=u.D,p=u.ya,_&&p&&ze(E,_,p),ze(E,"VER",u.la),Rr(u,E),E}function tu(u,p,_){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Ye(new Sr({eb:_})):new Ye(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ka(){}n=ka.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function so(){}so.prototype.g=function(u,p){return new qt(u,p)};function qt(u,p){pt.call(this),this.g=new Aa(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!ee(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!ee(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new er(this)}B(qt,pt),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){kt(this.g)},qt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=ca(u),u=_);p.i.push(new jl(p.Ya++,u)),p.G==3&&Zn(p)},qt.prototype.N=function(){this.g.l=null,delete this.j,kt(this.g),delete this.g,qt.aa.N.call(this)};function nu(u){Gn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const _ in p){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}B(nu,Gn);function ru(){zs.call(this),this.status=1}B(ru,zs);function er(u){this.g=u}B(er,ka),er.prototype.ua=function(){mt(this.g,"a")},er.prototype.ta=function(u){mt(this.g,new nu(u))},er.prototype.sa=function(u){mt(this.g,new ru)},er.prototype.ra=function(){mt(this.g,"b")},so.prototype.createWebChannel=so.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,sw=function(){return new so},iw=function(){return Qi()},rw=Qn,Ef={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ws.NO_ERROR=0,Ws.TIMEOUT=8,Ws.HTTP_ERROR=6,lc=Ws,Ll.COMPLETE="complete",nw=Ll,Bs.EventType=pn,pn.OPEN="a",pn.CLOSE="b",pn.ERROR="c",pn.MESSAGE="d",pt.prototype.listen=pt.prototype.K,el=Bs,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,tw=Ye}).apply(typeof Ju<"u"?Ju:typeof self<"u"?self:typeof window<"u"?window:{});const By="@firebase/firestore",zy="4.9.1";/**
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
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
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
 */let Jo="12.2.0";/**
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
 */const Rs=new Hf("@firebase/firestore");function Co(){return Rs.logLevel}function le(n,...e){if(Rs.logLevel<=Ce.DEBUG){const t=e.map(rp);Rs.debug(`Firestore (${Jo}): ${n}`,...t)}}function zr(n,...e){if(Rs.logLevel<=Ce.ERROR){const t=e.map(rp);Rs.error(`Firestore (${Jo}): ${n}`,...t)}}function Fo(n,...e){if(Rs.logLevel<=Ce.WARN){const t=e.map(rp);Rs.warn(`Firestore (${Jo}): ${n}`,...t)}}function rp(n){if(typeof n=="string")return n;try{/**
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
 */function ve(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,ow(n,i,t)}function ow(n,e,t){let i=`FIRESTORE (${Jo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw zr(i),new Error(i)}function Fe(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||ow(e,o,i)}function Te(n,e){return n}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends gr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ur{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class aw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jt.UNAUTHENTICATED)))}shutdown(){}}class iR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class sR{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let i=this.i;const o=m=>this.i!==i?(i=this.i,t(m)):Promise.resolve();let l=new Ur;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ur,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const m=l;e.enqueueRetryable((async()=>{await m.promise,await o(this.currentUser)}))},f=m=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((m=>f(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?f(m):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ur)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Fe(typeof i.accessToken=="string",31837,{l:i}),new aw(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new jt(e)}}class oR{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class aR{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new oR(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class $y{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lR{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Kt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const i=l=>{l.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,le("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new $y(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new $y(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function uR(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class ip{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=uR(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Pe(n,e){return n<e?-1:n>e?1:0}function Tf(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const o=n.charAt(i),l=e.charAt(i);if(o!==l)return Zd(o)===Zd(l)?Pe(o,l):Zd(o)?1:-1}return Pe(n.length,e.length)}const cR=55296,hR=57343;function Zd(n){const e=n.charCodeAt(0);return e>=cR&&e<=hR}function jo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
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
 */const If="__name__";class sr{constructor(e,t,i){t===void 0?t=0:t>e.length&&ve(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&ve(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return sr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof sr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=sr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Pe(e.length,t.length)}static compareSegments(e,t){const i=sr.isNumericId(e),o=sr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?sr.extractNumericId(e).compare(sr.extractNumericId(t)):Tf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Di.fromString(e.substring(4,e.length-2))}}class He extends sr{construct(e,t,i){return new He(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ie(H.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new He(t)}static emptyPath(){return new He([])}}const dR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends sr{construct(e,t,i){return new Nt(e,t,i)}static isValidIdentifier(e){return dR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===If}static keyField(){return new Nt([If])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ie(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new ie(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=m,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new ie(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
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
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(He.fromString(e))}static fromName(e){return new pe(He.fromString(e).popFirst(5))}static empty(){return new pe(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return He.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new He(e.slice()))}}/**
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
 */function lw(n,e,t){if(!t)throw new ie(H.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function fR(n,e,t,i){if(e===!0&&i===!0)throw new ie(H.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function qy(n){if(!pe.isDocumentKey(n))throw new ie(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Wy(n){if(pe.isDocumentKey(n))throw new ie(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function uw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Gc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ve(12329,{type:typeof n})}function sn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ie(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Gc(n);throw new ie(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ft(n,e){const t={typeString:n};return e&&(t.value=e),t}function kl(n,e){if(!uw(n))throw new ie(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const h=n[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new ie(H.INVALID_ARGUMENT,t);return!0}/**
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
 */const Hy=-62135596800,Ky=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Ky);return new Qe(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Hy)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ky}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(kl(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Hy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:ft("string",Qe._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
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
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new Qe(0,0))}static max(){return new Ee(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ml=-1;function pR(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(i===1e9?new Qe(t+1,0):new Qe(t,i));return new Oi(o,pe.empty(),e)}function mR(n){return new Oi(n.readTime,n.key,ml)}class Oi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Oi(Ee.min(),pe.empty(),ml)}static max(){return new Oi(Ee.max(),pe.empty(),ml)}}function gR(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(n.documentKey,e.documentKey),t!==0?t:Pe(n.largestBatchId,e.largestBatchId))}/**
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
 */const yR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _R{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Zo(n){if(n.code!==H.FAILED_PRECONDITION||n.message!==yR)throw n;le("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):K.reject(t)}static resolve(e){return new K(((t,i)=>{t(e)}))}static reject(e){return new K(((t,i)=>{i(e)}))}static waitFor(e){return new K(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(m=>i(m)))})),h=!0,l===o&&t()}))}static or(e){let t=K.resolve(!1);for(const i of e)t=t.next((o=>o?K.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new K(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let m=0;m<l;m++){const y=m;t(e[y]).next((w=>{h[y]=w,++f,f===l&&i(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new K(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function vR(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ea(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Qc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Qc.ce=-1;/**
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
 */const sp=-1;function Yc(n){return n==null}function Sc(n){return n===0&&1/n==-1/0}function wR(n){return typeof n=="number"&&Number.isInteger(n)&&!Sc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const cw="";function ER(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Gy(e)),e=TR(n.get(t),e);return Gy(e)}function TR(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case cw:t+="";break;default:t+=l}}return t}function Gy(n){return n+cw+""}/**
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
 */function Qy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function zi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class tt{constructor(e,t){this.comparator=e,this.root=t||xt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zu(this.root,e,this.comparator,!0)}}class Zu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??xt.RED,this.left=o??xt.EMPTY,this.right=l??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new xt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return xt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new xt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class vt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Yy(this.data.getIterator())}getIteratorFrom(e){return new Yy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class Yy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class fn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new fn([])}unionWith(e){let t=new vt(Nt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return jo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class dw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new dw("Invalid base64 string: "+l):l}})(e);return new Dt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const IR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Li(n){if(Fe(!!n,39018),typeof n=="string"){let e=0;const t=IR.exec(n);if(Fe(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:at(n.seconds),nanos:at(n.nanos)}}function at(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Mi(n){return typeof n=="string"?Dt.fromBase64String(n):Dt.fromUint8Array(n)}/**
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
 */const fw="server_timestamp",pw="__type__",mw="__previous_value__",gw="__local_write_time__";function op(n){return(n?.mapValue?.fields||{})[pw]?.stringValue===fw}function Xc(n){const e=n.mapValue.fields[mw];return op(e)?Xc(e):e}function gl(n){const e=Li(n.mapValue.fields[gw].timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class SR{constructor(e,t,i,o,l,h,f,m,y,w){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=m,this.useFetchStreams=y,this.isUsingEmulator=w}}const Ac="(default)";class yl{constructor(e,t){this.projectId=e,this.database=t||Ac}static empty(){return new yl("","")}get isDefaultDatabase(){return this.database===Ac}isEqual(e){return e instanceof yl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const yw="__type__",AR="__max__",ec={mapValue:{}},_w="__vector__",Rc="value";function Ui(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?op(n)?4:kR(n)?9007199254740991:RR(n)?10:11:ve(28295,{value:n})}function pr(n,e){if(n===e)return!0;const t=Ui(n);if(t!==Ui(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gl(n).isEqual(gl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Li(o.timestampValue),f=Li(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Mi(o.bytesValue).isEqual(Mi(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return at(o.geoPointValue.latitude)===at(l.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return at(o.integerValue)===at(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=at(o.doubleValue),f=at(l.doubleValue);return h===f?Sc(h)===Sc(f):isNaN(h)&&isNaN(f)}return!1})(n,e);case 9:return jo(n.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Qy(h)!==Qy(f))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(f[m]===void 0||!pr(h[m],f[m])))return!1;return!0})(n,e);default:return ve(52216,{left:n})}}function _l(n,e){return(n.values||[]).find((t=>pr(t,e)))!==void 0}function Bo(n,e){if(n===e)return 0;const t=Ui(n),i=Ui(e);if(t!==i)return Pe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(n.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=at(l.integerValue||l.doubleValue),m=at(h.integerValue||h.doubleValue);return f<m?-1:f>m?1:f===m?0:isNaN(f)?isNaN(m)?0:-1:1})(n,e);case 3:return Xy(n.timestampValue,e.timestampValue);case 4:return Xy(gl(n),gl(e));case 5:return Tf(n.stringValue,e.stringValue);case 6:return(function(l,h){const f=Mi(l),m=Mi(h);return f.compareTo(m)})(n.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),m=h.split("/");for(let y=0;y<f.length&&y<m.length;y++){const w=Pe(f[y],m[y]);if(w!==0)return w}return Pe(f.length,m.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=Pe(at(l.latitude),at(h.latitude));return f!==0?f:Pe(at(l.longitude),at(h.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Jy(n.arrayValue,e.arrayValue);case 10:return(function(l,h){const f=l.fields||{},m=h.fields||{},y=f[Rc]?.arrayValue,w=m[Rc]?.arrayValue,T=Pe(y?.values?.length||0,w?.values?.length||0);return T!==0?T:Jy(y,w)})(n.mapValue,e.mapValue);case 11:return(function(l,h){if(l===ec.mapValue&&h===ec.mapValue)return 0;if(l===ec.mapValue)return 1;if(h===ec.mapValue)return-1;const f=l.fields||{},m=Object.keys(f),y=h.fields||{},w=Object.keys(y);m.sort(),w.sort();for(let T=0;T<m.length&&T<w.length;++T){const I=Tf(m[T],w[T]);if(I!==0)return I;const O=Bo(f[m[T]],y[w[T]]);if(O!==0)return O}return Pe(m.length,w.length)})(n.mapValue,e.mapValue);default:throw ve(23264,{he:t})}}function Xy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Pe(n,e);const t=Li(n),i=Li(e),o=Pe(t.seconds,i.seconds);return o!==0?o:Pe(t.nanos,i.nanos)}function Jy(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Bo(t[o],i[o]);if(l)return l}return Pe(t.length,i.length)}function zo(n){return Sf(n)}function Sf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Li(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Mi(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return pe.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Sf(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${Sf(t.fields[h])}`;return o+"}"})(n.mapValue):ve(61005,{value:n})}function uc(n){switch(Ui(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xc(n);return e?16+uc(e):16;case 5:return 2*n.stringValue.length;case 6:return Mi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+uc(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return zi(i.fields,((l,h)=>{o+=l.length+uc(h)})),o})(n.mapValue);default:throw ve(13486,{value:n})}}function Zy(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Af(n){return!!n&&"integerValue"in n}function ap(n){return!!n&&"arrayValue"in n}function e_(n){return!!n&&"nullValue"in n}function t_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function cc(n){return!!n&&"mapValue"in n}function RR(n){return(n?.mapValue?.fields||{})[yw]?.stringValue===_w}function ol(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return zi(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=ol(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ol(n.arrayValue.values[t]);return e}return{...n}}function kR(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===AR}/**
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
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!cc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ol(t)}setAll(e){let t=Nt.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const m=this.getFieldsMap(t);this.applyChanges(m,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=ol(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());cc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];cc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){zi(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new rn(ol(this.value))}}function vw(n){const e=[];return zi(n.fields,((t,i)=>{const o=new Nt([t]);if(cc(i)){const l=vw(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new fn(e)}/**
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
 */class Bt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Bt(e,0,Ee.min(),Ee.min(),Ee.min(),rn.empty(),0)}static newFoundDocument(e,t,i,o){return new Bt(e,1,t,Ee.min(),i,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Ee.min(),Ee.min(),rn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Ee.min(),Ee.min(),rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class kc{constructor(e,t){this.position=e,this.inclusive=t}}function n_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=pe.comparator(pe.fromName(h.referenceValue),t.key):i=Bo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function r_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!pr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Cc{constructor(e,t="asc"){this.field=e,this.dir=t}}function CR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class ww{}class dt extends ww{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new xR(e,t,i):t==="array-contains"?new bR(e,i):t==="in"?new VR(e,i):t==="not-in"?new OR(e,i):t==="array-contains-any"?new LR(e,i):new dt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new NR(e,i):new DR(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Bo(t,this.value)):t!==null&&Ui(this.value)===Ui(t)&&this.matchesComparison(Bo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends ww{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Kn(e,t)}matches(e){return Ew(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ew(n){return n.op==="and"}function Tw(n){return PR(n)&&Ew(n)}function PR(n){for(const e of n.filters)if(e instanceof Kn)return!1;return!0}function Rf(n){if(n instanceof dt)return n.field.canonicalString()+n.op.toString()+zo(n.value);if(Tw(n))return n.filters.map((e=>Rf(e))).join(",");{const e=n.filters.map((t=>Rf(t))).join(",");return`${n.op}(${e})`}}function Iw(n,e){return n instanceof dt?(function(i,o){return o instanceof dt&&i.op===o.op&&i.field.isEqual(o.field)&&pr(i.value,o.value)})(n,e):n instanceof Kn?(function(i,o){return o instanceof Kn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&Iw(h,o.filters[f])),!0):!1})(n,e):void ve(19439)}function Sw(n){return n instanceof dt?(function(t){return`${t.field.canonicalString()} ${t.op} ${zo(t.value)}`})(n):n instanceof Kn?(function(t){return t.op.toString()+" {"+t.getFilters().map(Sw).join(" ,")+"}"})(n):"Filter"}class xR extends dt{constructor(e,t,i){super(e,t,i),this.key=pe.fromName(i.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class NR extends dt{constructor(e,t){super(e,"in",t),this.keys=Aw("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class DR extends dt{constructor(e,t){super(e,"not-in",t),this.keys=Aw("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Aw(n,e){return(e.arrayValue?.values||[]).map((t=>pe.fromName(t.referenceValue)))}class bR extends dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ap(t)&&_l(t.arrayValue,this.value)}}class VR extends dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&_l(this.value.arrayValue,t)}}class OR extends dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(_l(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!_l(this.value.arrayValue,t)}}class LR extends dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ap(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>_l(this.value.arrayValue,i)))}}/**
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
 */class MR{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Te=null}}function i_(n,e=null,t=[],i=[],o=null,l=null,h=null){return new MR(n,e,t,i,o,l,h)}function lp(n){const e=Te(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Rf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Yc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>zo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>zo(i))).join(",")),e.Te=t}return e.Te}function up(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!CR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Iw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!r_(n.startAt,e.startAt)&&r_(n.endAt,e.endAt)}function kf(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Cl{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function UR(n,e,t,i,o,l,h,f){return new Cl(n,e,t,i,o,l,h,f)}function Jc(n){return new Cl(n)}function s_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Rw(n){return n.collectionGroup!==null}function al(n){const e=Te(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new vt(Nt.comparator);return h.filters.forEach((m=>{m.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new Cc(l,i))})),t.has(Nt.keyField().canonicalString())||e.Ie.push(new Cc(Nt.keyField(),i))}return e.Ie}function ur(n){const e=Te(n);return e.Ee||(e.Ee=FR(e,al(n))),e.Ee}function FR(n,e){if(n.limitType==="F")return i_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new Cc(o.field,l)}));const t=n.endAt?new kc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new kc(n.startAt.position,n.startAt.inclusive):null;return i_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Cf(n,e){const t=n.filters.concat([e]);return new Cl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Pf(n,e,t){return new Cl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Zc(n,e){return up(ur(n),ur(e))&&n.limitType===e.limitType}function kw(n){return`${lp(ur(n))}|lt:${n.limitType}`}function Po(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>Sw(o))).join(", ")}]`),Yc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>zo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>zo(o))).join(",")),`Target(${i})`})(ur(n))}; limitType=${n.limitType})`}function eh(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):pe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of al(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,m){const y=n_(h,f,m);return h.inclusive?y<=0:y<0})(i.startAt,al(i),o)||i.endAt&&!(function(h,f,m){const y=n_(h,f,m);return h.inclusive?y>=0:y>0})(i.endAt,al(i),o))})(n,e)}function jR(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Cw(n){return(e,t)=>{let i=!1;for(const o of al(n)){const l=BR(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function BR(n,e,t){const i=n.field.isKeyField()?pe.comparator(e.key,t.key):(function(l,h,f){const m=h.data.field(l),y=f.data.field(l);return m!==null&&y!==null?Bo(m,y):ve(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return ve(19790,{direction:n.dir})}}/**
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
 */class Ns{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){zi(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return hw(this.inner)}size(){return this.innerSize}}/**
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
 */const zR=new tt(pe.comparator);function $r(){return zR}const Pw=new tt(pe.comparator);function tl(...n){let e=Pw;for(const t of n)e=e.insert(t.key,t);return e}function xw(n){let e=Pw;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Es(){return ll()}function Nw(){return ll()}function ll(){return new Ns((n=>n.toString()),((n,e)=>n.isEqual(e)))}const $R=new tt(pe.comparator),qR=new vt(pe.comparator);function xe(...n){let e=qR;for(const t of n)e=e.add(t);return e}const WR=new vt(Pe);function HR(){return WR}/**
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
 */function cp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sc(e)?"-0":e}}function Dw(n){return{integerValue:""+n}}function KR(n,e){return wR(e)?Dw(e):cp(n,e)}/**
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
 */class th{constructor(){this._=void 0}}function GR(n,e,t){return n instanceof Pc?(function(o,l){const h={fields:{[pw]:{stringValue:fw},[gw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&op(l)&&(l=Xc(l)),l&&(h.fields[mw]=l),{mapValue:h}})(t,e):n instanceof $o?Vw(n,e):n instanceof qo?Ow(n,e):(function(o,l){const h=bw(o,l),f=o_(h)+o_(o.Ae);return Af(h)&&Af(o.Ae)?Dw(f):cp(o.serializer,f)})(n,e)}function QR(n,e,t){return n instanceof $o?Vw(n,e):n instanceof qo?Ow(n,e):t}function bw(n,e){return n instanceof xc?(function(i){return Af(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class Pc extends th{}class $o extends th{constructor(e){super(),this.elements=e}}function Vw(n,e){const t=Lw(e);for(const i of n.elements)t.some((o=>pr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class qo extends th{constructor(e){super(),this.elements=e}}function Ow(n,e){let t=Lw(e);for(const i of n.elements)t=t.filter((o=>!pr(o,i)));return{arrayValue:{values:t}}}class xc extends th{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function o_(n){return at(n.integerValue||n.doubleValue)}function Lw(n){return ap(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Mw{constructor(e,t){this.field=e,this.transform=t}}function YR(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof $o&&o instanceof $o||i instanceof qo&&o instanceof qo?jo(i.elements,o.elements,pr):i instanceof xc&&o instanceof xc?pr(i.Ae,o.Ae):i instanceof Pc&&o instanceof Pc})(n.transform,e.transform)}class XR{constructor(e,t){this.version=e,this.transformResults=t}}class An{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new An}static exists(e){return new An(void 0,e)}static updateTime(e){return new An(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class nh{}function Uw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new hp(n.key,An.none()):new Pl(n.key,n.data,An.none());{const t=n.data,i=rn.empty();let o=new vt(Nt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new $i(n.key,i,new fn(o.toArray()),An.none())}}function JR(n,e,t){n instanceof Pl?(function(o,l,h){const f=o.value.clone(),m=l_(o.fieldTransforms,l,h.transformResults);f.setAll(m),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(n,e,t):n instanceof $i?(function(o,l,h){if(!hc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=l_(o.fieldTransforms,l,h.transformResults),m=l.data;m.setAll(Fw(o)),m.setAll(f),l.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(n,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function ul(n,e,t,i){return n instanceof Pl?(function(l,h,f,m){if(!hc(l.precondition,h))return f;const y=l.value.clone(),w=u_(l.fieldTransforms,m,h);return y.setAll(w),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof $i?(function(l,h,f,m){if(!hc(l.precondition,h))return f;const y=u_(l.fieldTransforms,m,h),w=h.data;return w.setAll(Fw(l)),w.setAll(y),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,i):(function(l,h,f){return hc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(n,e,t)}function ZR(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=bw(i.transform,o||null);l!=null&&(t===null&&(t=rn.empty()),t.set(i.field,l))}return t||null}function a_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&jo(i,o,((l,h)=>YR(l,h)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Pl extends nh{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class $i extends nh{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Fw(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function l_(n,e,t){const i=new Map;Fe(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,QR(h,f,t[o]))}return i}function u_(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,GR(l,h,e))}return i}class hp extends nh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ek extends nh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class tk{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&JR(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=ul(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=ul(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Nw();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const m=Uw(h,f);m!==null&&i.set(o.key,m),h.isValidDocument()||h.convertToNoDocument(Ee.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),xe())}isEqual(e){return this.batchId===e.batchId&&jo(this.mutations,e.mutations,((t,i)=>a_(t,i)))&&jo(this.baseMutations,e.baseMutations,((t,i)=>a_(t,i)))}}class dp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Fe(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return $R})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new dp(e,t,i,o)}}/**
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
 */class nk{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class rk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ht,Ve;function ik(n){switch(n){case H.OK:return ve(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return ve(15467,{code:n})}}function jw(n){if(n===void 0)return zr("GRPC error has no .code"),H.UNKNOWN;switch(n){case ht.OK:return H.OK;case ht.CANCELLED:return H.CANCELLED;case ht.UNKNOWN:return H.UNKNOWN;case ht.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case ht.INTERNAL:return H.INTERNAL;case ht.UNAVAILABLE:return H.UNAVAILABLE;case ht.UNAUTHENTICATED:return H.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case ht.NOT_FOUND:return H.NOT_FOUND;case ht.ALREADY_EXISTS:return H.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return H.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case ht.ABORTED:return H.ABORTED;case ht.OUT_OF_RANGE:return H.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return H.UNIMPLEMENTED;case ht.DATA_LOSS:return H.DATA_LOSS;default:return ve(39323,{code:n})}}(Ve=ht||(ht={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function sk(){return new TextEncoder}/**
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
 */const ok=new Di([4294967295,4294967295],0);function c_(n){const e=sk().encode(n),t=new ew;return t.update(e),new Uint8Array(t.digest())}function h_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Di([t,i],0),new Di([o,l],0)]}class fp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new nl(`Invalid padding: ${t}`);if(i<0)throw new nl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new nl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new nl(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Di.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(Di.fromNumber(i)));return o.compare(ok)===1&&(o=new Di([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=c_(e),[i,o]=h_(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);if(!this.we(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new fp(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.ge===0)return;const t=c_(e),[i,o]=h_(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(i,o,l);this.Se(h)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class nl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class rh{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,xl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new rh(Ee.min(),o,new tt(Pe),$r(),xe())}}class xl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new xl(i,t,xe(),xe(),xe())}}/**
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
 */class dc{constructor(e,t,i,o){this.be=e,this.removedTargetIds=t,this.key=i,this.De=o}}class Bw{constructor(e,t){this.targetId=e,this.Ce=t}}class zw{constructor(e,t,i=Dt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class d_{constructor(){this.ve=0,this.Fe=f_(),this.Me=Dt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=xe(),t=xe(),i=xe();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:ve(38017,{changeType:l})}})),new xl(this.Me,this.xe,e,t,i)}qe(){this.Oe=!1,this.Fe=f_()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class ak{constructor(e){this.Ge=e,this.ze=new Map,this.je=$r(),this.Je=tc(),this.He=tc(),this.Ye=new tt(Pe)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(kf(l))if(i===0){const h=new pe(l.path);this.et(t,h,Bt.newNoDocument(h,Ee.min()))}else Fe(i===1,20013,{expectedCount:i});else{const h=this._t(t);if(h!==i){const f=this.ut(e),m=f?this.ct(f,e,h):1;if(m!==0){this.it(t);const y=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Mi(i).toUint8Array()}catch(m){if(m instanceof dw)return Fo("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{f=new fp(h,o,l)}catch(m){return Fo(m instanceof nl?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return f.ge===0?null:f}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.Ge.ht(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,h)=>{const f=this.ot(h);if(f){if(l.current&&kf(f.target)){const m=new pe(f.target.path);this.It(m).has(h)||this.Et(h,m)||this.et(h,m,Bt.newNoDocument(m,e))}l.Be&&(t.set(h,l.ke()),l.qe())}}));let i=xe();this.He.forEach(((l,h)=>{let f=!0;h.forEachWhile((m=>{const y=this.ot(m);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.je.forEach(((l,h)=>h.setReadTime(e)));const o=new rh(e,t,this.Ye,this.je,i);return this.je=$r(),this.Je=tc(),this.He=tc(),this.Ye=new tt(Pe),o}Xe(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new d_,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new vt(Pe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new vt(Pe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||le("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new d_),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function tc(){return new tt(pe.comparator)}function f_(){return new tt(pe.comparator)}const lk={asc:"ASCENDING",desc:"DESCENDING"},uk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ck={and:"AND",or:"OR"};class hk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function xf(n,e){return n.useProto3Json||Yc(e)?e:{value:e}}function Nc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $w(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function dk(n,e){return Nc(n,e.toTimestamp())}function cr(n){return Fe(!!n,49232),Ee.fromTimestamp((function(t){const i=Li(t);return new Qe(i.seconds,i.nanos)})(n))}function pp(n,e){return Nf(n,e).canonicalString()}function Nf(n,e){const t=(function(o){return new He(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function qw(n){const e=He.fromString(n);return Fe(Qw(e),10190,{key:e.toString()}),e}function Df(n,e){return pp(n.databaseId,e.path)}function ef(n,e){const t=qw(e);if(t.get(1)!==n.databaseId.projectId)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new pe(Hw(t))}function Ww(n,e){return pp(n.databaseId,e)}function fk(n){const e=qw(n);return e.length===4?He.emptyPath():Hw(e)}function bf(n){return new He(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Hw(n){return Fe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function p_(n,e,t){return{name:Df(n,e),fields:t.value.mapValue.fields}}function pk(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:ve(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,w){return y.useProto3Json?(Fe(w===void 0||typeof w=="string",58123),Dt.fromBase64String(w||"")):(Fe(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Dt.fromUint8Array(w||new Uint8Array))})(n,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(y){const w=y.code===void 0?H.UNKNOWN:jw(y.code);return new ie(w,y.message||"")})(h);t=new zw(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=ef(n,i.document.name),l=cr(i.document.updateTime),h=i.document.createTime?cr(i.document.createTime):Ee.min(),f=new rn({mapValue:{fields:i.document.fields}}),m=Bt.newFoundDocument(o,l,h,f),y=i.targetIds||[],w=i.removedTargetIds||[];t=new dc(y,w,m.key,m)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=ef(n,i.document),l=i.readTime?cr(i.readTime):Ee.min(),h=Bt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new dc([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=ef(n,i.document),l=i.removedTargetIds||[];t=new dc([],l,o,null)}else{if(!("filter"in e))return ve(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new rk(o,l),f=i.targetId;t=new Bw(f,h)}}return t}function mk(n,e){let t;if(e instanceof Pl)t={update:p_(n,e.key,e.value)};else if(e instanceof hp)t={delete:Df(n,e.key)};else if(e instanceof $i)t={update:p_(n,e.key,e.data),updateMask:Sk(e.fieldMask)};else{if(!(e instanceof ek))return ve(16599,{Vt:e.type});t={verify:Df(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof Pc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof $o)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof qo)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof xc)return{fieldPath:h.field.canonicalString(),increment:f.Ae};throw ve(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:dk(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ve(27497)})(n,e.precondition)),t}function gk(n,e){return n&&n.length>0?(Fe(e!==void 0,14353),n.map((t=>(function(o,l){let h=o.updateTime?cr(o.updateTime):cr(l);return h.isEqual(Ee.min())&&(h=cr(l)),new XR(h,o.transformResults||[])})(t,e)))):[]}function yk(n,e){return{documents:[Ww(n,e.path)]}}function _k(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Ww(n,o);const l=(function(y){if(y.length!==0)return Gw(Kn.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(y){if(y.length!==0)return y.map((w=>(function(I){return{field:xo(I.field),direction:Ek(I.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=xf(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:t,parent:o}}function vk(n){let e=fk(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Fe(i===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(T){const I=Kw(T);return I instanceof Kn&&Tw(I)?I.getFilters():[I]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((I=>(function(B){return new Cc(No(B.field),(function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(B.direction))})(I)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let I;return I=typeof T=="object"?T.value:T,Yc(I)?null:I})(t.limit));let m=null;t.startAt&&(m=(function(T){const I=!!T.before,O=T.values||[];return new kc(O,I)})(t.startAt));let y=null;return t.endAt&&(y=(function(T){const I=!T.before,O=T.values||[];return new kc(O,I)})(t.endAt)),UR(e,o,h,l,f,"F",m,y)}function wk(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Kw(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=No(t.unaryFilter.field);return dt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=No(t.unaryFilter.field);return dt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=No(t.unaryFilter.field);return dt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=No(t.unaryFilter.field);return dt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(n):n.fieldFilter!==void 0?(function(t){return dt.create(No(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Kn.create(t.compositeFilter.filters.map((i=>Kw(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(t.compositeFilter.op))})(n):ve(30097,{filter:n})}function Ek(n){return lk[n]}function Tk(n){return uk[n]}function Ik(n){return ck[n]}function xo(n){return{fieldPath:n.canonicalString()}}function No(n){return Nt.fromServerFormat(n.fieldPath)}function Gw(n){return n instanceof dt?(function(t){if(t.op==="=="){if(t_(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NAN"}};if(e_(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(t_(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NOT_NAN"}};if(e_(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xo(t.field),op:Tk(t.op),value:t.value}}})(n):n instanceof Kn?(function(t){const i=t.getFilters().map((o=>Gw(o)));return i.length===1?i[0]:{compositeFilter:{op:Ik(t.op),filters:i}}})(n):ve(54877,{filter:n})}function Sk(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Qw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ki{constructor(e,t,i,o,l=Ee.min(),h=Ee.min(),f=Dt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=m}withSequenceNumber(e){return new ki(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Ak{constructor(e){this.yt=e}}function Rk(n){const e=vk({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Pf(e,e.limit,"L"):e}/**
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
 */class kk{constructor(){this.Cn=new Ck}addToCollectionParentIndex(e,t){return this.Cn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Oi.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Oi.min())}updateCollectionGroup(e,t,i){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class Ck{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new vt(He.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new vt(He.comparator)).toArray()}}/**
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
 */const m_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yw=41943040;class nn{static withCacheSize(e){return new nn(e,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(Yw,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);/**
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
 */class Wo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Wo(0)}static cr(){return new Wo(-1)}}/**
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
 */const g_="LruGarbageCollector",Pk=1048576;function y_([n,e],[t,i]){const o=Pe(n,t);return o===0?Pe(e,i):o}class xk{constructor(e){this.Ir=e,this.buffer=new vt(y_),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();y_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Nk{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){le(g_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ea(t)?le(g_,"Ignoring IndexedDB error during garbage collection: ",t):await Zo(t)}await this.Vr(3e5)}))}}class Dk{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return K.resolve(Qc.ce);const i=new xk(t);return this.mr.forEachTarget(e,(o=>i.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>i.Ar(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.mr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(m_)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),m_):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let i,o,l,h,f,m,y;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(i=T,f=Date.now(),this.removeTargets(e,i,t)))).next((T=>(l=T,m=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(y=Date.now(),Co()<=Ce.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(m-f)+`ms
	Removed ${T} documents in `+(y-m)+`ms
Total Duration: ${y-w}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function bk(n,e){return new Dk(n,e)}/**
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
 */class Vk{constructor(){this.changes=new Ns((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?K.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ok{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Lk{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&ul(i.mutation,o,fn.empty(),Qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,xe()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=xe()){const o=Es();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=tl();return l.forEach(((f,m)=>{h=h.insert(f,m.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=Es();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,xe())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=$r();const h=ll(),f=(function(){return ll()})();return t.forEach(((m,y)=>{const w=i.get(y.key);o.has(y.key)&&(w===void 0||w.mutation instanceof $i)?l=l.insert(y.key,y):w!==void 0?(h.set(y.key,w.mutation.getFieldMask()),ul(w.mutation,y,w.mutation.getFieldMask(),Qe.now())):h.set(y.key,fn.empty())})),this.recalculateAndSaveOverlays(e,l).next((m=>(m.forEach(((y,w)=>h.set(y,w))),t.forEach(((y,w)=>f.set(y,new Ok(w,h.get(y)??null)))),f)))}recalculateAndSaveOverlays(e,t){const i=ll();let o=new tt(((h,f)=>h-f)),l=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((m=>{const y=t.get(m);if(y===null)return;let w=i.get(m)||fn.empty();w=f.applyToLocalView(y,w),i.set(m,w);const T=(o.get(f.batchId)||xe()).add(m);o=o.insert(f.batchId,T)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const m=f.getNext(),y=m.key,w=m.value,T=Nw();w.forEach((I=>{if(!l.has(I)){const O=Uw(t.get(I),i.get(I));O!==null&&T.set(I,O),l=l.add(I)}})),h.push(this.documentOverlayCache.saveOverlays(e,y,T))}return K.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Rw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):K.resolve(Es());let f=ml,m=l;return h.next((y=>K.forEach(y,((w,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(w)?K.resolve():this.remoteDocumentCache.getEntry(e,w).next((I=>{m=m.insert(w,I)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,m,y,xe()))).next((w=>({batchId:f,changes:xw(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((i=>{let o=tl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=tl();return this.indexManager.getCollectionParents(e,l).next((f=>K.forEach(f,(m=>{const y=(function(T,I){return new Cl(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((w=>{w.forEach(((T,I)=>{h=h.insert(T,I)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((m,y)=>{const w=y.getKey();h.get(w)===null&&(h=h.insert(w,Bt.newInvalidDocument(w)))}));let f=tl();return h.forEach(((m,y)=>{const w=l.get(m);w!==void 0&&ul(w.mutation,y,fn.empty(),Qe.now()),eh(t,y)&&(f=f.insert(m,y))})),f}))}}/**
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
 */class Mk{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return K.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:cr(o.createTime)}})(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:Rk(o.bundledQuery),readTime:cr(o.readTime)}})(t)),K.resolve()}}/**
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
 */class Uk{constructor(){this.overlays=new tt(pe.comparator),this.qr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Es();return K.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.St(e,t,l)})),K.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.qr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(i)),K.resolve()}getOverlaysForCollection(e,t,i){const o=Es(),l=t.length+1,h=new pe(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const m=f.getNext().value,y=m.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&m.largestBatchId>i&&o.set(m.getKey(),m)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new tt(((y,w)=>y-w));const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let w=l.get(y.largestBatchId);w===null&&(w=Es(),l=l.insert(y.largestBatchId,w)),w.set(y.getKey(),y)}}const f=Es(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((y,w)=>f.set(y,w))),!(f.size()>=o)););return K.resolve(f)}St(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(i.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new nk(t,i));let l=this.qr.get(t);l===void 0&&(l=xe(),this.qr.set(t,l)),this.qr.set(t,l.add(i.key))}}/**
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
 */class Fk{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
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
 */class mp{constructor(){this.Qr=new vt(At.$r),this.Ur=new vt(At.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const i=new At(e,t);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Gr(new At(e,t))}zr(e,t){e.forEach((i=>this.removeReference(i,t)))}jr(e){const t=new pe(new He([])),i=new At(t,e),o=new At(t,e+1),l=[];return this.Ur.forEachInRange([i,o],(h=>{this.Gr(h),l.push(h.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new pe(new He([])),i=new At(t,e),o=new At(t,e+1);let l=xe();return this.Ur.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new At(e,0),i=this.Qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class At{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return pe.comparator(e.key,t.key)||Pe(e.Yr,t.Yr)}static Kr(e,t){return Pe(e.Yr,t.Yr)||pe.comparator(e.key,t.key)}}/**
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
 */class jk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new vt(At.$r)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new tk(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Zr=this.Zr.add(new At(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return K.resolve(h)}lookupMutationBatch(e,t){return K.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.ei(i),l=o<0?0:o;return K.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?sp:this.tr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([i,o],(h=>{const f=this.Xr(h.Yr);l.push(f)})),K.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new vt(Pe);return t.forEach((o=>{const l=new At(o,0),h=new At(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,h],(f=>{i=i.add(f.Yr)}))})),K.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;pe.isDocumentKey(l)||(l=l.child(""));const h=new At(new pe(l),0);let f=new vt(Pe);return this.Zr.forEachWhile((m=>{const y=m.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(m.Yr)),!0)}),h),K.resolve(this.ti(f))}ti(e){const t=[];return e.forEach((i=>{const o=this.Xr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return K.forEach(t.mutations,(o=>{const l=new At(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=i}))}ir(e){}containsKey(e,t){const i=new At(t,0),o=this.Zr.firstAfterOrEqual(i);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Bk{constructor(e){this.ri=e,this.docs=(function(){return new tt(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return K.resolve(i?i.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let i=$r();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Bt.newInvalidDocument(o))})),K.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=$r();const h=t.path,f=new pe(h.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(f);for(;m.hasNext();){const{key:y,value:{document:w}}=m.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||gR(mR(w),i)<=0||(o.has(w.key)||eh(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return K.resolve(l)}getAllFromCollectionGroup(e,t,i,o){ve(9500)}ii(e,t){return K.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new zk(this)}getSize(e){return K.resolve(this.size)}}class zk extends Vk{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(i)})),K.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class $k{constructor(e){this.persistence=e,this.si=new Ns((t=>lp(t)),up),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.oi=0,this._i=new mp,this.targetCount=0,this.ai=Wo.ur()}forEachTarget(e,t){return this.si.forEach(((i,o)=>t(o))),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.oi&&(this.oi=t),K.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Wo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.Pr(t),K.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.si.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.si.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),K.waitFor(l).next((()=>o))}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const i=this.si.get(t)||null;return K.resolve(i)}addMatchingKeys(e,t,i){return this._i.Wr(t,i),K.resolve()}removeMatchingKeys(e,t,i){this._i.zr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),K.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const i=this._i.Hr(t);return K.resolve(i)}containsKey(e,t){return K.resolve(this._i.containsKey(t))}}/**
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
 */class Xw{constructor(e,t){this.ui={},this.overlays={},this.ci=new Qc(0),this.li=!1,this.li=!0,this.hi=new Fk,this.referenceDelegate=e(this),this.Pi=new $k(this),this.indexManager=new kk,this.remoteDocumentCache=(function(o){return new Bk(o)})((i=>this.referenceDelegate.Ti(i))),this.serializer=new Ak(t),this.Ii=new Mk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Uk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ui[e.toKey()];return i||(i=new jk(t,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,i){le("MemoryPersistence","Starting transaction:",e);const o=new qk(this.ci.next());return this.referenceDelegate.Ei(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ai(e,t){return K.or(Object.values(this.ui).map((i=>()=>i.containsKey(e,t))))}}class qk extends _R{constructor(e){super(),this.currentSequenceNumber=e}}class gp{constructor(e){this.persistence=e,this.Ri=new mp,this.Vi=null}static mi(e){return new gp(e)}get fi(){if(this.Vi)return this.Vi;throw ve(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.fi.delete(i.toString()),K.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.fi.add(i.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),K.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.fi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.fi,(i=>{const o=pe.fromPath(i);return this.gi(e,o).next((l=>{l||t.removeEntry(o,Ee.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((i=>{i?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return K.or([()=>K.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Dc{constructor(e,t){this.persistence=e,this.pi=new Ns((i=>ER(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=bk(this,t)}static mi(e,t){return new Dc(e,t)}Ei(){}di(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}wr(e){let t=0;return this.pr(e,(i=>{t++})).next((()=>t))}pr(e,t){return K.forEach(this.pi,((i,o)=>this.br(e,i,o).next((l=>l?K.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((f=>{f||(i++,l.removeEntry(h,Ee.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),K.resolve()}removeReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),K.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=uc(e.data.value)),t}br(e,t,i){return K.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return K.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class yp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Es=i,this.ds=o}static As(e,t){let i=xe(),o=xe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new yp(e,t.fromCache,i,o)}}/**
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
 */class Wk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Hk{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return _I()?8:vR(zt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ys(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ws(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new Wk;return this.Ss(e,t,h).next((f=>{if(l.result=f,this.Vs)return this.bs(e,t,h,f.size)}))})).next((()=>l.result))}bs(e,t,i,o){return i.documentReadCount<this.fs?(Co()<=Ce.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",Po(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),K.resolve()):(Co()<=Ce.DEBUG&&le("QueryEngine","Query:",Po(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.gs*o?(Co()<=Ce.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",Po(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ur(t))):K.resolve())}ys(e,t){if(s_(t))return K.resolve(null);let i=ur(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Pf(t,null,"F"),i=ur(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=xe(...l);return this.ps.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((m=>{const y=this.Ds(t,f);return this.Cs(t,y,h,m.readTime)?this.ys(e,Pf(t,null,"F")):this.vs(e,y,t,m)}))))})))))}ws(e,t,i,o){return s_(t)||o.isEqual(Ee.min())?K.resolve(null):this.ps.getDocuments(e,i).next((l=>{const h=this.Ds(t,l);return this.Cs(t,h,i,o)?K.resolve(null):(Co()<=Ce.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Po(t)),this.vs(e,h,t,pR(o,ml)).next((f=>f)))}))}Ds(e,t){let i=new vt(Cw(e));return t.forEach(((o,l)=>{eh(e,l)&&(i=i.add(l))})),i}Cs(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Ss(e,t,i){return Co()<=Ce.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",Po(t)),this.ps.getDocumentsMatchingQuery(e,t,Oi.min(),i)}vs(e,t,i,o){return this.ps.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
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
 */const _p="LocalStore",Kk=3e8;class Gk{constructor(e,t,i,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new tt(Pe),this.xs=new Ns((l=>lp(l)),up),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Lk(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Qk(n,e,t,i){return new Gk(n,e,t,i)}async function Jw(n,e){const t=Te(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let m=xe();for(const y of o){h.push(y.batchId);for(const w of y.mutations)m=m.add(w.key)}for(const y of l){f.push(y.batchId);for(const w of y.mutations)m=m.add(w.key)}return t.localDocuments.getDocuments(i,m).next((y=>({Ls:y,removedBatchIds:h,addedBatchIds:f})))}))}))}function Yk(n,e){const t=Te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(f,m,y,w){const T=y.batch,I=T.keys();let O=K.resolve();return I.forEach((B=>{O=O.next((()=>w.getEntry(m,B))).next((q=>{const U=y.docVersions.get(B);Fe(U!==null,48541),q.version.compareTo(U)<0&&(T.applyToRemoteDocument(q,y),q.isValidDocument()&&(q.setReadTime(y.commitVersion),w.addEntry(q)))}))})),O.next((()=>f.mutationQueue.removeMutationBatch(m,T)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let m=xe();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(m=m.add(f.batch.mutations[y].key));return m})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function Zw(n){const e=Te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function Xk(n,e){const t=Te(n),i=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const f=[];e.targetChanges.forEach(((w,T)=>{const I=o.get(T);if(!I)return;f.push(t.Pi.removeMatchingKeys(l,w.removedDocuments,T).next((()=>t.Pi.addMatchingKeys(l,w.addedDocuments,T))));let O=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?O=O.withResumeToken(Dt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):w.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(w.resumeToken,i)),o=o.insert(T,O),(function(q,U,re){return q.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=Kk?!0:re.addedDocuments.size+re.modifiedDocuments.size+re.removedDocuments.size>0})(I,O,w)&&f.push(t.Pi.updateTargetData(l,O))}));let m=$r(),y=xe();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),f.push(Jk(l,h,e.documentUpdates).next((w=>{m=w.ks,y=w.qs}))),!i.isEqual(Ee.min())){const w=t.Pi.getLastRemoteSnapshotVersion(l).next((T=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(w)}return K.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,m,y))).next((()=>m))})).then((l=>(t.Ms=o,l)))}function Jk(n,e,t){let i=xe(),o=xe();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let h=$r();return t.forEach(((f,m)=>{const y=l.get(f);m.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),m.isNoDocument()&&m.version.isEqual(Ee.min())?(e.removeEntry(f,m.readTime),h=h.insert(f,m)):!y.isValidDocument()||m.version.compareTo(y.version)>0||m.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(m),h=h.insert(f,m)):le(_p,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",m.version)})),{ks:h,qs:o}}))}function Zk(n,e){const t=Te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=sp),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function eC(n,e){const t=Te(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.Pi.getTargetData(i,e).next((l=>l?(o=l,K.resolve(o)):t.Pi.allocateTargetId(i).next((h=>(o=new ki(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Pi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Ms.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(i.targetId,i),t.xs.set(e,i.targetId)),i}))}async function Vf(n,e,t){const i=Te(n),o=i.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!ea(h))throw h;le(_p,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Ms=i.Ms.remove(e),i.xs.delete(o.target)}function __(n,e,t){const i=Te(n);let o=Ee.min(),l=xe();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(m,y,w){const T=Te(m),I=T.xs.get(w);return I!==void 0?K.resolve(T.Ms.get(I)):T.Pi.getTargetData(y,w)})(i,h,ur(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(h,f.targetId).next((m=>{l=m}))})).next((()=>i.Fs.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?l:xe()))).next((f=>(tC(i,jR(e),f),{documents:f,Qs:l})))))}function tC(n,e,t){let i=n.Os.get(e)||Ee.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.Os.set(e,i)}class v_{constructor(){this.activeTargetIds=HR()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nC{constructor(){this.Mo=new v_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,i){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new v_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rC{Oo(e){}shutdown(){}}/**
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
 */const w_="ConnectivityMonitor";class E_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){le(w_,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){le(w_,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let nc=null;function Of(){return nc===null?nc=(function(){return 268435456+Math.round(2147483648*Math.random())})():nc++,"0x"+nc.toString(16)}/**
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
 */const tf="RestConnection",iC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sC{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${i}/databases/${o}`,this.Wo=this.databaseId.database===Ac?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Go(e,t,i,o,l){const h=Of(),f=this.zo(e,t.toUriEncodedString());le(tf,`Sending RPC '${e}' ${h}:`,f,i);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,o,l);const{host:y}=new URL(f),w=Ps(y);return this.Jo(e,f,m,i,w).then((T=>(le(tf,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw Fo(tf,`RPC '${e}' ${h} failed with error: `,T,"url: ",f,"request:",i),T}))}Ho(e,t,i,o,l,h){return this.Go(e,t,i,o,l)}jo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Jo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}zo(e,t){const i=iC[e];return`${this.Uo}/v1/${t}:${i}`}terminate(){}}/**
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
 */class oC{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Ft="WebChannelConnection";class aC extends sC{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,i,o,l){const h=Of();return new Promise(((f,m)=>{const y=new tw;y.setWithCredentials(!0),y.listenOnce(nw.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case lc.NO_ERROR:const T=y.getResponseJson();le(Ft,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),f(T);break;case lc.TIMEOUT:le(Ft,`RPC '${e}' ${h} timed out`),m(new ie(H.DEADLINE_EXCEEDED,"Request time out"));break;case lc.HTTP_ERROR:const I=y.getStatus();if(le(Ft,`RPC '${e}' ${h} failed with status:`,I,"response text:",y.getResponseText()),I>0){let O=y.getResponseJson();Array.isArray(O)&&(O=O[0]);const B=O?.error;if(B&&B.status&&B.message){const q=(function(re){const ee=re.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(ee)>=0?ee:H.UNKNOWN})(B.status);m(new ie(q,B.message))}else m(new ie(H.UNKNOWN,"Server responded with status "+y.getStatus()))}else m(new ie(H.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{l_:e,streamId:h,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{le(Ft,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);le(Ft,`RPC '${e}' ${h} sending request:`,o),y.send(t,"POST",w,i,15)}))}T_(e,t,i){const o=Of(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=sw(),f=iw(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(m.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,t,i),m.encodeInitMessageHeaders=!0;const w=l.join("");le(Ft,`Creating RPC '${e}' stream ${o}: ${w}`,m);const T=h.createWebChannel(w,m);this.I_(T);let I=!1,O=!1;const B=new oC({Yo:U=>{O?le(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,U):(I||(le(Ft,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),le(Ft,`RPC '${e}' stream ${o} sending:`,U),T.send(U))},Zo:()=>T.close()}),q=(U,re,ee)=>{U.listen(re,(te=>{try{ee(te)}catch(oe){setTimeout((()=>{throw oe}),0)}}))};return q(T,el.EventType.OPEN,(()=>{O||(le(Ft,`RPC '${e}' stream ${o} transport opened.`),B.o_())})),q(T,el.EventType.CLOSE,(()=>{O||(O=!0,le(Ft,`RPC '${e}' stream ${o} transport closed`),B.a_(),this.E_(T))})),q(T,el.EventType.ERROR,(U=>{O||(O=!0,Fo(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,U.name,"Message:",U.message),B.a_(new ie(H.UNAVAILABLE,"The operation could not be completed")))})),q(T,el.EventType.MESSAGE,(U=>{if(!O){const re=U.data[0];Fe(!!re,16349);const ee=re,te=ee?.error||ee[0]?.error;if(te){le(Ft,`RPC '${e}' stream ${o} received error:`,te);const oe=te.status;let ke=(function(S){const C=ht[S];if(C!==void 0)return jw(C)})(oe),Ie=te.message;ke===void 0&&(ke=H.INTERNAL,Ie="Unknown error status: "+oe+" with message "+te.message),O=!0,B.a_(new ie(ke,Ie)),T.close()}else le(Ft,`RPC '${e}' stream ${o} received:`,re),B.u_(re)}})),q(f,rw.STAT_EVENT,(U=>{U.stat===Ef.PROXY?le(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):U.stat===Ef.NOPROXY&&le(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{B.__()}),0),B}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function nf(){return typeof document<"u"?document:null}/**
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
 */function ih(n){return new hk(n,!0)}/**
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
 */class e0{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=o,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&le("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const T_="PersistentStream";class t0{constructor(e,t,i,o,l,h,f,m){this.Mi=e,this.S_=i,this.b_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new e0(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(zr(t.toString()),zr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new ie(H.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{i((()=>this.listener.Xo()))})),this.stream.t_((()=>{i((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return le(T_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(le(T_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class lC extends t0{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=pk(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Ee.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?cr(h.readTime):Ee.min()})(e);return this.listener.H_(t,i)}Y_(e){const t={};t.database=bf(this.serializer),t.addTarget=(function(l,h){let f;const m=h.target;if(f=kf(m)?{documents:yk(l,m)}:{query:_k(l,m).ft},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=$w(l,h.resumeToken);const y=xf(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(Ee.min())>0){f.readTime=Nc(l,h.snapshotVersion.toTimestamp());const y=xf(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const i=wk(this.serializer,e);i&&(t.labels=i),this.q_(t)}Z_(e){const t={};t.database=bf(this.serializer),t.removeTarget=e,this.q_(t)}}class uC extends t0{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=gk(e.writeResults,e.commitTime),i=cr(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=bf(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>mk(this.serializer,i)))};this.q_(t)}}/**
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
 */class cC{}class hC extends cC{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Go(e,Nf(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ie(H.UNKNOWN,l.toString())}))}Ho(e,t,i,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Ho(e,Nf(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie(H.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class dC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(zr(t),this.aa=!1):le("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ks="RemoteStore";class fC{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((h=>{i.enqueueAndForget((async()=>{Ds(this)&&(le(ks,"Restarting streams for network reachability change."),await(async function(m){const y=Te(m);y.Ea.add(4),await Nl(y),y.Ra.set("Unknown"),y.Ea.delete(4),await sh(y)})(this))}))})),this.Ra=new dC(i,o)}}async function sh(n){if(Ds(n))for(const e of n.da)await e(!0)}async function Nl(n){for(const e of n.da)await e(!1)}function n0(n,e){const t=Te(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Tp(t)?Ep(t):ta(t).O_()&&wp(t,e))}function vp(n,e){const t=Te(n),i=ta(t);t.Ia.delete(e),i.O_()&&r0(t,e),t.Ia.size===0&&(i.O_()?i.L_():Ds(t)&&t.Ra.set("Unknown"))}function wp(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ta(n).Y_(e)}function r0(n,e){n.Va.Ue(e),ta(n).Z_(e)}function Ep(n){n.Va=new ak({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ta(n).start(),n.Ra.ua()}function Tp(n){return Ds(n)&&!ta(n).x_()&&n.Ia.size>0}function Ds(n){return Te(n).Ea.size===0}function i0(n){n.Va=void 0}async function pC(n){n.Ra.set("Online")}async function mC(n){n.Ia.forEach(((e,t)=>{wp(n,e)}))}async function gC(n,e){i0(n),Tp(n)?(n.Ra.ha(e),Ep(n)):n.Ra.set("Unknown")}async function yC(n,e,t){if(n.Ra.set("Online"),e instanceof zw&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ia.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ia.delete(f),o.Va.removeTarget(f))})(n,e)}catch(i){le(ks,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await bc(n,i)}else if(e instanceof dc?n.Va.Ze(e):e instanceof Bw?n.Va.st(e):n.Va.tt(e),!t.isEqual(Ee.min()))try{const i=await Zw(n.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.Va.Tt(h);return f.targetChanges.forEach(((m,y)=>{if(m.resumeToken.approximateByteSize()>0){const w=l.Ia.get(y);w&&l.Ia.set(y,w.withResumeToken(m.resumeToken,h))}})),f.targetMismatches.forEach(((m,y)=>{const w=l.Ia.get(m);if(!w)return;l.Ia.set(m,w.withResumeToken(Dt.EMPTY_BYTE_STRING,w.snapshotVersion)),r0(l,m);const T=new ki(w.target,m,y,w.sequenceNumber);wp(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){le(ks,"Failed to raise snapshot:",i),await bc(n,i)}}async function bc(n,e,t){if(!ea(e))throw e;n.Ea.add(1),await Nl(n),n.Ra.set("Offline"),t||(t=()=>Zw(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{le(ks,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await sh(n)}))}function s0(n,e){return e().catch((t=>bc(n,t,e)))}async function oh(n){const e=Te(n),t=Fi(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:sp;for(;_C(e);)try{const o=await Zk(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,vC(e,o)}catch(o){await bc(e,o)}o0(e)&&a0(e)}function _C(n){return Ds(n)&&n.Ta.length<10}function vC(n,e){n.Ta.push(e);const t=Fi(n);t.O_()&&t.X_&&t.ea(e.mutations)}function o0(n){return Ds(n)&&!Fi(n).x_()&&n.Ta.length>0}function a0(n){Fi(n).start()}async function wC(n){Fi(n).ra()}async function EC(n){const e=Fi(n);for(const t of n.Ta)e.ea(t.mutations)}async function TC(n,e,t){const i=n.Ta.shift(),o=dp.from(i,e,t);await s0(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await oh(n)}async function IC(n,e){e&&Fi(n).X_&&await(async function(i,o){if((function(h){return ik(h)&&h!==H.ABORTED})(o.code)){const l=i.Ta.shift();Fi(i).B_(),await s0(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await oh(i)}})(n,e),o0(n)&&a0(n)}async function I_(n,e){const t=Te(n);t.asyncQueue.verifyOperationInProgress(),le(ks,"RemoteStore received new credentials");const i=Ds(t);t.Ea.add(3),await Nl(t),i&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await sh(t)}async function SC(n,e){const t=Te(n);e?(t.Ea.delete(2),await sh(t)):e||(t.Ea.add(2),await Nl(t),t.Ra.set("Unknown"))}function ta(n){return n.ma||(n.ma=(function(t,i,o){const l=Te(t);return l.sa(),new lC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Xo:pC.bind(null,n),t_:mC.bind(null,n),r_:gC.bind(null,n),H_:yC.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Tp(n)?Ep(n):n.Ra.set("Unknown")):(await n.ma.stop(),i0(n))}))),n.ma}function Fi(n){return n.fa||(n.fa=(function(t,i,o){const l=Te(t);return l.sa(),new uC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:wC.bind(null,n),r_:IC.bind(null,n),ta:EC.bind(null,n),na:TC.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await oh(n)):(await n.fa.stop(),n.Ta.length>0&&(le(ks,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Ip{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new Ip(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sp(n,e){if(zr("AsyncQueue",`${e}: ${n}`),ea(n))return new ie(H.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Lo{static emptySet(e){return new Lo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||pe.comparator(t.key,i.key):(t,i)=>pe.comparator(t.key,i.key),this.keyedMap=tl(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Lo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Lo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class S_{constructor(){this.ga=new tt(pe.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ve(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Ho{constructor(e,t,i,o,l,h,f,m,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=m,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new Ho(e,t,Lo.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class AC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class RC{constructor(){this.queries=A_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Te(t),l=o.queries;o.queries=A_(),l.forEach(((h,f)=>{for(const m of f.Sa)m.onError(i)}))})(this,new ie(H.ABORTED,"Firestore shutting down"))}}function A_(){return new Ns((n=>kw(n)),Zc)}async function Ap(n,e){const t=Te(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(i=2):(l=new AC,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Sp(h,`Initialization of query '${Po(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&kp(t)}async function Rp(n,e){const t=Te(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.Sa.indexOf(e);h>=0&&(l.Sa.splice(h,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function kC(n,e){const t=Te(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.Sa)f.Fa(o)&&(i=!0);h.wa=o}}i&&kp(t)}function CC(n,e,t){const i=Te(n),o=i.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);i.queries.delete(e)}function kp(n){n.Ca.forEach((e=>{e.next()}))}var Lf,R_;(R_=Lf||(Lf={})).Ma="default",R_.Cache="cache";class Cp{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Ho(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ho.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Lf.Cache}}/**
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
 */class l0{constructor(e){this.key=e}}class u0{constructor(e){this.key=e}}class PC{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=xe(),this.mutatedKeys=xe(),this.eu=Cw(e),this.tu=new Lo(this.eu)}get nu(){return this.Ya}ru(e,t){const i=t?t.iu:new S_,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,T)=>{const I=o.get(w),O=eh(this.query,T)?T:null,B=!!I&&this.mutatedKeys.has(I.key),q=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let U=!1;I&&O?I.data.isEqual(O.data)?B!==q&&(i.track({type:3,doc:O}),U=!0):this.su(I,O)||(i.track({type:2,doc:O}),U=!0,(m&&this.eu(O,m)>0||y&&this.eu(O,y)<0)&&(f=!0)):!I&&O?(i.track({type:0,doc:O}),U=!0):I&&!O&&(i.track({type:1,doc:I}),U=!0,(m||y)&&(f=!0)),U&&(O?(h=h.add(O),l=q?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{tu:h,iu:i,Cs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((w,T)=>(function(O,B){const q=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{Rt:U})}};return q(O)-q(B)})(w.type,T.type)||this.eu(w.doc,T.doc))),this.ou(i),o=o??!1;const f=t&&!o?this._u():[],m=this.Xa.size===0&&this.current&&!o?1:0,y=m!==this.Za;return this.Za=m,h.length!==0||y?{snapshot:new Ho(this.query,e.tu,l,h,e.mutatedKeys,m===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new S_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=xe(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))}));const t=[];return e.forEach((i=>{this.Xa.has(i)||t.push(new u0(i))})),this.Xa.forEach((i=>{e.has(i)||t.push(new l0(i))})),t}cu(e){this.Ya=e.Qs,this.Xa=xe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ho.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Pp="SyncEngine";class xC{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class NC{constructor(e){this.key=e,this.hu=!1}}class DC{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Ns((f=>kw(f)),Zc),this.Iu=new Map,this.Eu=new Set,this.du=new tt(pe.comparator),this.Au=new Map,this.Ru=new mp,this.Vu={},this.mu=new Map,this.fu=Wo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function bC(n,e,t=!0){const i=m0(n);let o;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await c0(i,e,t,!0),o}async function VC(n,e){const t=m0(n);await c0(t,e,!0,!1)}async function c0(n,e,t,i){const o=await eC(n.localStore,ur(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await OC(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&n0(n.remoteStore,o),f}async function OC(n,e,t,i,o){n.pu=(T,I,O)=>(async function(q,U,re,ee){let te=U.view.ru(re);te.Cs&&(te=await __(q.localStore,U.query,!1).then((({documents:D})=>U.view.ru(D,te))));const oe=ee&&ee.targetChanges.get(U.targetId),ke=ee&&ee.targetMismatches.get(U.targetId)!=null,Ie=U.view.applyChanges(te,q.isPrimaryClient,oe,ke);return C_(q,U.targetId,Ie.au),Ie.snapshot})(n,T,I,O);const l=await __(n.localStore,e,!0),h=new PC(e,l.Qs),f=h.ru(l.documents),m=xl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=h.applyChanges(f,n.isPrimaryClient,m);C_(n,t,y.au);const w=new xC(e,t,h);return n.Tu.set(e,w),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),y.snapshot}async function LC(n,e,t){const i=Te(n),o=i.Tu.get(e),l=i.Iu.get(o.targetId);if(l.length>1)return i.Iu.set(o.targetId,l.filter((h=>!Zc(h,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Vf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&vp(i.remoteStore,o.targetId),Mf(i,o.targetId)})).catch(Zo)):(Mf(i,o.targetId),await Vf(i.localStore,o.targetId,!0))}async function MC(n,e){const t=Te(n),i=t.Tu.get(e),o=t.Iu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),vp(t.remoteStore,i.targetId))}async function UC(n,e,t){const i=WC(n);try{const o=await(function(h,f){const m=Te(h),y=Qe.now(),w=f.reduce(((O,B)=>O.add(B.key)),xe());let T,I;return m.persistence.runTransaction("Locally write mutations","readwrite",(O=>{let B=$r(),q=xe();return m.Ns.getEntries(O,w).next((U=>{B=U,B.forEach(((re,ee)=>{ee.isValidDocument()||(q=q.add(re))}))})).next((()=>m.localDocuments.getOverlayedDocuments(O,B))).next((U=>{T=U;const re=[];for(const ee of f){const te=ZR(ee,T.get(ee.key).overlayedDocument);te!=null&&re.push(new $i(ee.key,te,vw(te.value.mapValue),An.exists(!0)))}return m.mutationQueue.addMutationBatch(O,y,re,f)})).next((U=>{I=U;const re=U.applyToLocalDocumentSet(T,q);return m.documentOverlayCache.saveOverlays(O,U.batchId,re)}))})).then((()=>({batchId:I.batchId,changes:xw(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,m){let y=h.Vu[h.currentUser.toKey()];y||(y=new tt(Pe)),y=y.insert(f,m),h.Vu[h.currentUser.toKey()]=y})(i,o.batchId,t),await Dl(i,o.changes),await oh(i.remoteStore)}catch(o){const l=Sp(o,"Failed to persist write");t.reject(l)}}async function h0(n,e){const t=Te(n);try{const i=await Xk(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Au.get(l);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Fe(h.hu,14607):o.removedDocuments.size>0&&(Fe(h.hu,42227),h.hu=!1))})),await Dl(t,i,e)}catch(i){await Zo(i)}}function k_(n,e,t){const i=Te(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const m=Te(h);m.onlineState=f;let y=!1;m.queries.forEach(((w,T)=>{for(const I of T.Sa)I.va(f)&&(y=!0)})),y&&kp(m)})(i.eventManager,e),o.length&&i.Pu.H_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function FC(n,e,t){const i=Te(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),l=o&&o.key;if(l){let h=new tt(pe.comparator);h=h.insert(l,Bt.newNoDocument(l,Ee.min()));const f=xe().add(l),m=new rh(Ee.min(),new Map,new tt(Pe),h,f);await h0(i,m),i.du=i.du.remove(l),i.Au.delete(e),xp(i)}else await Vf(i.localStore,e,!1).then((()=>Mf(i,e,t))).catch(Zo)}async function jC(n,e){const t=Te(n),i=e.batch.batchId;try{const o=await Yk(t.localStore,e);f0(t,i,null),d0(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Dl(t,o)}catch(o){await Zo(o)}}async function BC(n,e,t){const i=Te(n);try{const o=await(function(h,f){const m=Te(h);return m.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let w;return m.mutationQueue.lookupMutationBatch(y,f).next((T=>(Fe(T!==null,37113),w=T.keys(),m.mutationQueue.removeMutationBatch(y,T)))).next((()=>m.mutationQueue.performConsistencyCheck(y))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(y,w,f))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,w))).next((()=>m.localDocuments.getDocuments(y,w)))}))})(i.localStore,e);f0(i,e,t),d0(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Dl(i,o)}catch(o){await Zo(o)}}function d0(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function f0(n,e,t){const i=Te(n);let o=i.Vu[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Vu[i.currentUser.toKey()]=o}}function Mf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((i=>{n.Ru.containsKey(i)||p0(n,i)}))}function p0(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(vp(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),xp(n))}function C_(n,e,t){for(const i of t)i instanceof l0?(n.Ru.addReference(i.key,e),zC(n,i)):i instanceof u0?(le(Pp,"Document no longer in limbo: "+i.key),n.Ru.removeReference(i.key,e),n.Ru.containsKey(i.key)||p0(n,i.key)):ve(19791,{wu:i})}function zC(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Eu.has(i)||(le(Pp,"New document in limbo: "+t),n.Eu.add(i),xp(n))}function xp(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new pe(He.fromString(e)),i=n.fu.next();n.Au.set(i,new NC(t)),n.du=n.du.insert(t,i),n0(n.remoteStore,new ki(ur(Jc(t.path)),i,"TargetPurposeLimboResolution",Qc.ce))}}async function Dl(n,e,t){const i=Te(n),o=[],l=[],h=[];i.Tu.isEmpty()||(i.Tu.forEach(((f,m)=>{h.push(i.pu(m,e,t).then((y=>{if((y||t)&&i.isPrimaryClient){const w=y?!y.fromCache:t?.targetChanges.get(m.targetId)?.current;i.sharedClientState.updateQueryState(m.targetId,w?"current":"not-current")}if(y){o.push(y);const w=yp.As(m.targetId,y);l.push(w)}})))})),await Promise.all(h),i.Pu.H_(o),await(async function(m,y){const w=Te(m);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>K.forEach(y,(I=>K.forEach(I.Es,(O=>w.persistence.referenceDelegate.addReference(T,I.targetId,O))).next((()=>K.forEach(I.ds,(O=>w.persistence.referenceDelegate.removeReference(T,I.targetId,O)))))))))}catch(T){if(!ea(T))throw T;le(_p,"Failed to update sequence numbers: "+T)}for(const T of y){const I=T.targetId;if(!T.fromCache){const O=w.Ms.get(I),B=O.snapshotVersion,q=O.withLastLimboFreeSnapshotVersion(B);w.Ms=w.Ms.insert(I,q)}}})(i.localStore,l))}async function $C(n,e){const t=Te(n);if(!t.currentUser.isEqual(e)){le(Pp,"User change. New user:",e.toKey());const i=await Jw(t.localStore,e);t.currentUser=e,(function(l,h){l.mu.forEach((f=>{f.forEach((m=>{m.reject(new ie(H.CANCELLED,h))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Dl(t,i.Ls)}}function qC(n,e){const t=Te(n),i=t.Au.get(e);if(i&&i.hu)return xe().add(i.key);{let o=xe();const l=t.Iu.get(e);if(!l)return o;for(const h of l){const f=t.Tu.get(h);o=o.unionWith(f.view.nu)}return o}}function m0(n){const e=Te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=h0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FC.bind(null,e),e.Pu.H_=kC.bind(null,e.eventManager),e.Pu.yu=CC.bind(null,e.eventManager),e}function WC(n){const e=Te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BC.bind(null,e),e}class Vc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ih(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Qk(this.persistence,new Hk,e.initialUser,this.serializer)}Cu(e){return new Xw(gp.mi,this.serializer)}Du(e){return new nC}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vc.provider={build:()=>new Vc};class HC extends Vc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Fe(this.persistence.referenceDelegate instanceof Dc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new Nk(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new Xw((i=>Dc.mi(i,t)),this.serializer)}}class Uf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>k_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=$C.bind(null,this.syncEngine),await SC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new RC})()}createDatastore(e){const t=ih(e.databaseInfo.databaseId),i=(function(l){return new aC(l)})(e.databaseInfo);return(function(l,h,f,m){return new hC(l,h,f,m)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new fC(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>k_(this.syncEngine,t,0)),(function(){return E_.v()?new E_:new rC})())}createSyncEngine(e,t){return(function(o,l,h,f,m,y,w){const T=new DC(o,l,h,f,m,y);return w&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const i=Te(t);le(ks,"RemoteStore shutting down."),i.Ea.add(5),await Nl(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Uf.provider={build:()=>new Uf};/**
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
 */class Np{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):zr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const ji="FirestoreClient";class KC{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=jt.UNAUTHENTICATED,this.clientId=ip.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{le(ji,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(le(ji,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Sp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function rf(n,e){n.asyncQueue.verifyOperationInProgress(),le(ji,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await Jw(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function P_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await GC(n);le(ji,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>I_(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>I_(e.remoteStore,o))),n._onlineComponents=e}async function GC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){le(ji,"Using user provided OfflineComponentProvider");try{await rf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===H.FAILED_PRECONDITION||o.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Fo("Error using user provided cache. Falling back to memory cache: "+t),await rf(n,new Vc)}}else le(ji,"Using default OfflineComponentProvider"),await rf(n,new HC(void 0));return n._offlineComponents}async function g0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(le(ji,"Using user provided OnlineComponentProvider"),await P_(n,n._uninitializedComponentsProvider._online)):(le(ji,"Using default OnlineComponentProvider"),await P_(n,new Uf))),n._onlineComponents}function QC(n){return g0(n).then((e=>e.syncEngine))}async function Oc(n){const e=await g0(n),t=e.eventManager;return t.onListen=bC.bind(null,e.syncEngine),t.onUnlisten=LC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=VC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=MC.bind(null,e.syncEngine),t}function YC(n,e,t={}){const i=new Ur;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,m,y){const w=new Np({next:I=>{w.Nu(),h.enqueueAndForget((()=>Rp(l,T)));const O=I.docs.has(f);!O&&I.fromCache?y.reject(new ie(H.UNAVAILABLE,"Failed to get document because the client is offline.")):O&&I.fromCache&&m&&m.source==="server"?y.reject(new ie(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new Cp(Jc(f.path),w,{includeMetadataChanges:!0,qa:!0});return Ap(l,T)})(await Oc(n),n.asyncQueue,e,t,i))),i.promise}function XC(n,e,t={}){const i=new Ur;return n.asyncQueue.enqueueAndForget((async()=>(function(l,h,f,m,y){const w=new Np({next:I=>{w.Nu(),h.enqueueAndForget((()=>Rp(l,T))),I.fromCache&&m.source==="server"?y.reject(new ie(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new Cp(f,w,{includeMetadataChanges:!0,qa:!0});return Ap(l,T)})(await Oc(n),n.asyncQueue,e,t,i))),i.promise}/**
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
 */function y0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const x_=new Map;/**
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
 */const _0="firestore.googleapis.com",N_=!0;class D_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ie(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_0,this.ssl=N_}else this.host=e.host,this.ssl=e.ssl??N_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Yw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Pk)throw new ie(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=y0(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ah{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new D_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new D_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new rR;switch(i.type){case"firstParty":return new aR(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ie(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=x_.get(t);i&&(le("ComponentProvider","Removing Datastore"),x_.delete(t),i.terminate())})(this),Promise.resolve()}}function JC(n,e,t,i={}){n=sn(n,ah);const o=Ps(e),l=n._getSettings(),h={...l,emulatorOptions:n._getEmulatorOptions()},f=`${e}:${t}`;o&&(qf(`https://${f}`),Wf("Firestore",!0)),l.host!==_0&&l.host!==f&&Fo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...l,host:f,ssl:o,emulatorOptions:i};if(!Fr(m,h)&&(n._setSettings(m),i.mockUserToken)){let y,w;if(typeof i.mockUserToken=="string")y=i.mockUserToken,w=jt.MOCK_USER;else{y=dv(i.mockUserToken,n._app?.options.projectId);const T=i.mockUserToken.sub||i.mockUserToken.user_id;if(!T)throw new ie(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new jt(T)}n._authCredentials=new iR(new aw(y,w))}}/**
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
 */class bs{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new bs(this.firestore,e,this._query)}}class rt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rt(this.firestore,e,this._key)}toJSON(){return{type:rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(kl(t,rt._jsonSchema))return new rt(e,i||null,new pe(He.fromString(t.referencePath)))}}rt._jsonSchemaVersion="firestore/documentReference/1.0",rt._jsonSchema={type:ft("string",rt._jsonSchemaVersion),referencePath:ft("string")};class bi extends bs{constructor(e,t,i){super(e,t,Jc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rt(this.firestore,null,new pe(e))}withConverter(e){return new bi(this.firestore,e,this._path)}}function na(n,e,...t){if(n=lt(n),lw("collection","path",e),n instanceof ah){const i=He.fromString(e,...t);return Wy(i),new bi(n,null,i)}{if(!(n instanceof rt||n instanceof bi))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(He.fromString(e,...t));return Wy(i),new bi(n.firestore,null,i)}}function Cs(n,e,...t){if(n=lt(n),arguments.length===1&&(e=ip.newId()),lw("doc","path",e),n instanceof ah){const i=He.fromString(e,...t);return qy(i),new rt(n,null,new pe(i))}{if(!(n instanceof rt||n instanceof bi))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(He.fromString(e,...t));return qy(i),new rt(n.firestore,n instanceof bi?n.converter:null,new pe(i))}}/**
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
 */const b_="AsyncQueue";class V_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new e0(this,"async_queue_retry"),this._c=()=>{const i=nf();i&&le(b_,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=nf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=nf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ur;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ea(e))throw e;le(b_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,zr("INTERNAL UNHANDLED ERROR: ",O_(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Ip.createAndSchedule(this,e,t,i,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&ve(47125,{Pc:O_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function O_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function L_(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}class qr extends ah{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new V_,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new V_(e),this._firestoreClient=void 0,await e}}}function ZC(n,e){const t=typeof n=="object"?n:Gf(),i=typeof n=="string"?n:Ac,o=qc(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=uv("firestore");l&&JC(o,...l)}return o}function lh(n){if(n._terminated)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||eP(n),n._firestoreClient}function eP(n){const e=n._freezeSettings(),t=(function(o,l,h,f){return new SR(o,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,y0(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new KC(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(o){const l=o?._online.build();return{_offline:o?._offline.build(l),_online:l}})(n._componentsProvider))}/**
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
 */class Sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sn(Dt.fromBase64String(e))}catch(t){throw new ie(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Sn(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Sn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(kl(e,Sn._jsonSchema))return Sn.fromBase64String(e.bytes)}}Sn._jsonSchemaVersion="firestore/bytes/1.0",Sn._jsonSchema={type:ft("string",Sn._jsonSchemaVersion),bytes:ft("string")};/**
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
 */class bl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function tP(){return new bl(If)}/**
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
 */class Vl{constructor(e){this._methodName=e}}/**
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
 */class hr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hr._jsonSchemaVersion}}static fromJSON(e){if(kl(e,hr._jsonSchema))return new hr(e.latitude,e.longitude)}}hr._jsonSchemaVersion="firestore/geoPoint/1.0",hr._jsonSchema={type:ft("string",hr._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
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
 */class dr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:dr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(kl(e,dr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new dr(e.vectorValues);throw new ie(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dr._jsonSchemaVersion="firestore/vectorValue/1.0",dr._jsonSchema={type:ft("string",dr._jsonSchemaVersion),vectorValues:ft("object")};/**
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
 */const nP=/^__.*__$/;class rP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new $i(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pl(e,this.data,t,this.fieldTransforms)}}class v0{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new $i(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function w0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ac:n})}}class uh{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new uh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),i=this.Vc({path:t,fc:!1});return i.gc(e),i}yc(e){const t=this.path?.child(e),i=this.Vc({path:t,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Lc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(w0(this.Ac)&&nP.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class iP{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||ih(e)}Cc(e,t,i,o=!1){return new uh({Ac:e,methodName:t,Dc:i,path:Nt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ch(n){const e=n._freezeSettings(),t=ih(n._databaseId);return new iP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function E0(n,e,t,i,o,l={}){const h=n.Cc(l.merge||l.mergeFields?2:0,e,t,o);Vp("Data must be an object, but it was:",h,i);const f=I0(i,h);let m,y;if(l.merge)m=new fn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const T of l.mergeFields){const I=Ff(e,T,t);if(!h.contains(I))throw new ie(H.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);A0(w,I)||w.push(I)}m=new fn(w),y=h.fieldTransforms.filter((T=>m.covers(T.field)))}else m=null,y=h.fieldTransforms;return new rP(new rn(f),m,y)}class hh extends Vl{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hh}}function T0(n,e,t){return new uh({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Dp extends Vl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=T0(this,e,!0),i=this.vc.map((l=>Vs(l,t))),o=new $o(i);return new Mw(e.path,o)}isEqual(e){return e instanceof Dp&&Fr(this.vc,e.vc)}}class bp extends Vl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=T0(this,e,!0),i=this.vc.map((l=>Vs(l,t))),o=new qo(i);return new Mw(e.path,o)}isEqual(e){return e instanceof bp&&Fr(this.vc,e.vc)}}function sP(n,e,t,i){const o=n.Cc(1,e,t);Vp("Data must be an object, but it was:",o,i);const l=[],h=rn.empty();zi(i,((m,y)=>{const w=Op(e,m,t);y=lt(y);const T=o.yc(w);if(y instanceof hh)l.push(w);else{const I=Vs(y,T);I!=null&&(l.push(w),h.set(w,I))}}));const f=new fn(l);return new v0(h,f,o.fieldTransforms)}function oP(n,e,t,i,o,l){const h=n.Cc(1,e,t),f=[Ff(e,i,t)],m=[o];if(l.length%2!=0)throw new ie(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)f.push(Ff(e,l[I])),m.push(l[I+1]);const y=[],w=rn.empty();for(let I=f.length-1;I>=0;--I)if(!A0(y,f[I])){const O=f[I];let B=m[I];B=lt(B);const q=h.yc(O);if(B instanceof hh)y.push(O);else{const U=Vs(B,q);U!=null&&(y.push(O),w.set(O,U))}}const T=new fn(y);return new v0(w,T,h.fieldTransforms)}function aP(n,e,t,i=!1){return Vs(t,n.Cc(i?4:3,e))}function Vs(n,e){if(S0(n=lt(n)))return Vp("Unsupported field value:",e,n),I0(n,e);if(n instanceof Vl)return(function(i,o){if(!w0(o.Ac))throw o.Sc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let m=Vs(f,o.wc(h));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),h++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=lt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return KR(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Qe.fromDate(i);return{timestampValue:Nc(o.serializer,l)}}if(i instanceof Qe){const l=new Qe(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Nc(o.serializer,l)}}if(i instanceof hr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Sn)return{bytesValue:$w(o.serializer,i._byteString)};if(i instanceof rt){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:pp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof dr)return(function(h,f){return{mapValue:{fields:{[yw]:{stringValue:_w},[Rc]:{arrayValue:{values:h.toArray().map((y=>{if(typeof y!="number")throw f.Sc("VectorValues must only contain numeric values.");return cp(f.serializer,y)}))}}}}}})(i,o);throw o.Sc(`Unsupported field value: ${Gc(i)}`)})(n,e)}function I0(n,e){const t={};return hw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zi(n,((i,o)=>{const l=Vs(o,e.mc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function S0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Qe||n instanceof hr||n instanceof Sn||n instanceof rt||n instanceof Vl||n instanceof dr)}function Vp(n,e,t){if(!S0(t)||!uw(t)){const i=Gc(t);throw i==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+i)}}function Ff(n,e,t){if((e=lt(e))instanceof bl)return e._internalPath;if(typeof e=="string")return Op(n,e);throw Lc("Field path arguments must be of type string or ",n,!1,void 0,t)}const lP=new RegExp("[~\\*/\\[\\]]");function Op(n,e,t){if(e.search(lP)>=0)throw Lc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new bl(...e.split("."))._internalPath}catch{throw Lc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Lc(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let m="";return(l||h)&&(m+=" (found",l&&(m+=` in field ${i}`),h&&(m+=` in document ${o}`),m+=")"),new ie(H.INVALID_ARGUMENT,f+n+m)}function A0(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class R0{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Lp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class uP extends R0{data(){return super.data()}}function Lp(n,e){return typeof e=="string"?Op(n,e):e instanceof bl?e._internalPath:e._delegate._internalPath}/**
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
 */function k0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ie(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mp{}class cP extends Mp{}function vl(n,e,...t){let i=[];e instanceof Mp&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((m=>m instanceof Up)).length,f=l.filter((m=>m instanceof dh)).length;if(h>1||h>0&&f>0)throw new ie(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class dh extends cP{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new dh(e,t,i)}_apply(e){const t=this._parse(e);return C0(e._query,t),new bs(e.firestore,e.converter,Cf(e._query,t))}_parse(e){const t=ch(e.firestore);return(function(l,h,f,m,y,w,T){let I;if(y.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ie(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){U_(T,w);const B=[];for(const q of T)B.push(M_(m,l,q));I={arrayValue:{values:B}}}else I=M_(m,l,T)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||U_(T,w),I=aP(f,h,T,w==="in"||w==="not-in");return dt.create(y,w,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ci(n,e,t){const i=e,o=Lp("where",n);return dh._create(o,i,t)}class Up extends Mp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Up(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Kn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const m of f)C0(h,m),h=Cf(h,m)})(e._query,t),new bs(e.firestore,e.converter,Cf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function M_(n,e,t){if(typeof(t=lt(t))=="string"){if(t==="")throw new ie(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Rw(e)&&t.indexOf("/")!==-1)throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(He.fromString(t));if(!pe.isDocumentKey(i))throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Zy(n,new pe(i))}if(t instanceof rt)return Zy(n,t._key);throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gc(t)}.`)}function U_(n,e){if(!Array.isArray(n)||n.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function C0(n,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ie(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class hP{convertValue(e,t="none"){switch(Ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return zi(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){const t=e.fields?.[Rc].arrayValue?.values?.map((i=>at(i.doubleValue)));return new dr(t)}convertGeoPoint(e){return new hr(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Xc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(gl(e));default:return null}}convertTimestamp(e){const t=Li(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=He.fromString(e);Fe(Qw(i),9688,{name:e});const o=new yl(i.get(1),i.get(3)),l=new pe(i.popFirst(5));return o.isEqual(t)||zr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function P0(n,e,t){let i;return i=n?n.toFirestore(e):e,i}class rl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ts extends R0{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new fc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Lp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ts._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ts._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ts._jsonSchema={type:ft("string",Ts._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class fc extends Ts{data(e={}){return super.data(e)}}class Is{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new rl(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new fc(this._firestore,this._userDataWriter,i.key,i,new rl(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const m=new fc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new rl(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:m,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const m=new fc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new rl(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,w=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),w=h.indexOf(f.doc.key)),{type:dP(f.type),doc:m,oldIndex:y,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Is._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ip.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function dP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:n})}}/**
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
 */function fP(n){n=sn(n,rt);const e=sn(n.firestore,qr);return YC(lh(e),n._key).then((t=>D0(e,n,t)))}Is._jsonSchemaVersion="firestore/querySnapshot/1.0",Is._jsonSchema={type:ft("string",Is._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};class Fp extends hP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new rt(this.firestore,null,t)}}function Mc(n){n=sn(n,bs);const e=sn(n.firestore,qr),t=lh(e),i=new Fp(e);return k0(n._query),XC(t,n._query).then((o=>new Is(e,i,n,o)))}function x0(n,e,t){n=sn(n,rt);const i=sn(n.firestore,qr),o=P0(n.converter,e);return fh(i,[E0(ch(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,An.none())])}function jp(n,e,t,...i){n=sn(n,rt);const o=sn(n.firestore,qr),l=ch(o);let h;return h=typeof(e=lt(e))=="string"||e instanceof bl?oP(l,"updateDoc",n._key,e,t,i):sP(l,"updateDoc",n._key,e),fh(o,[h.toMutation(n._key,An.exists(!0))])}function pP(n){return fh(sn(n.firestore,qr),[new hp(n._key,An.none())])}function N0(n,e){const t=sn(n.firestore,qr),i=Cs(n),o=P0(n.converter,e);return fh(t,[E0(ch(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,An.exists(!1))]).then((()=>i))}function mP(n,...e){n=lt(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||L_(e[i])||(t=e[i++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(L_(e[i])){const m=e[i];e[i]=m.next?.bind(m),e[i+1]=m.error?.bind(m),e[i+2]=m.complete?.bind(m)}let l,h,f;if(n instanceof rt)h=sn(n.firestore,qr),f=Jc(n._key.path),l={next:m=>{e[i]&&e[i](D0(h,n,m))},error:e[i+1],complete:e[i+2]};else{const m=sn(n,bs);h=sn(m.firestore,qr),f=m._query;const y=new Fp(h);l={next:w=>{e[i]&&e[i](new Is(h,y,m,w))},error:e[i+1],complete:e[i+2]},k0(n._query)}return(function(y,w,T,I){const O=new Np(I),B=new Cp(w,O,T);return y.asyncQueue.enqueueAndForget((async()=>Ap(await Oc(y),B))),()=>{O.Nu(),y.asyncQueue.enqueueAndForget((async()=>Rp(await Oc(y),B)))}})(lh(h),f,o,l)}function fh(n,e){return(function(i,o){const l=new Ur;return i.asyncQueue.enqueueAndForget((async()=>UC(await QC(i),o,l))),l.promise})(lh(n),e)}function D0(n,e,t){const i=t.docs.get(e._key),o=new Fp(n);return new Ts(n,o,e._key,i,new rl(t.hasPendingWrites,t.fromCache),e.converter)}function gP(...n){return new Dp("arrayUnion",n)}function yP(...n){return new bp("arrayRemove",n)}(function(e,t=!0){(function(o){Jo=o})(xs),Ss(new Vi("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new qr(new sR(i.getProvider("auth-internal")),new lR(h,i.getProvider("app-check-internal")),(function(y,w){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ie(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yl(y.options.projectId,w)})(h,o),h);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),or(By,zy,e),or(By,zy,"esm2020")})();/**
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
 */const b0="firebasestorage.googleapis.com",_P="storageBucket",vP=120*1e3,wP=600*1e3;/**
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
 */class yr extends gr{constructor(e,t,i=0){super(sf(e),`Firebase Storage: ${t} (${sf(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,yr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return sf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var mr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(mr||(mr={}));function sf(n){return"storage/"+n}function EP(){const n="An unknown error occurred, please check the error payload for server response.";return new yr(mr.UNKNOWN,n)}function TP(){return new yr(mr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function IP(){return new yr(mr.CANCELED,"User canceled the upload/download.")}function SP(n){return new yr(mr.INVALID_URL,"Invalid URL '"+n+"'.")}function AP(n){return new yr(mr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function F_(n){return new yr(mr.INVALID_ARGUMENT,n)}function V0(){return new yr(mr.APP_DELETED,"The Firebase app was deleted.")}function RP(n){return new yr(mr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class qn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=qn.makeFromUrl(e,t)}catch{return new qn(e,"")}if(i.path==="")return i;throw AP(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(oe){oe.path.charAt(oe.path.length-1)==="/"&&(oe.path_=oe.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),m={bucket:1,path:3};function y(oe){oe.path_=decodeURIComponent(oe.path)}const w="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",O=new RegExp(`^https?://${T}/${w}/b/${o}/o${I}`,"i"),B={bucket:1,path:3},q=t===b0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,U="([^?#]*)",re=new RegExp(`^https?://${q}/${o}/${U}`,"i"),te=[{regex:f,indices:m,postModify:l},{regex:O,indices:B,postModify:y},{regex:re,indices:{bucket:1,path:2},postModify:y}];for(let oe=0;oe<te.length;oe++){const ke=te[oe],Ie=ke.regex.exec(e);if(Ie){const D=Ie[ke.indices.bucket];let S=Ie[ke.indices.path];S||(S=""),i=new qn(D,S),ke.postModify(i);break}}if(i==null)throw SP(e);return i}}class kP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function CP(n,e,t){let i=1,o=null,l=null,h=!1,f=0;function m(){return f===2}let y=!1;function w(...U){y||(y=!0,e.apply(null,U))}function T(U){o=setTimeout(()=>{o=null,n(O,m())},U)}function I(){l&&clearTimeout(l)}function O(U,...re){if(y){I();return}if(U){I(),w.call(null,U,...re);return}if(m()||h){I(),w.call(null,U,...re);return}i<64&&(i*=2);let te;f===1?(f=2,te=0):te=(i+Math.random())*1e3,T(te)}let B=!1;function q(U){B||(B=!0,I(),!y&&(o!==null?(U||(f=2),clearTimeout(o),T(0)):U||(f=1)))}return T(0),l=setTimeout(()=>{h=!0,q(!0)},t),q}function PP(n){n(!1)}/**
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
 */function xP(n){return n!==void 0}function j_(n,e,t,i){if(i<e)throw F_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw F_(`Invalid value for '${n}'. Expected ${t} or less.`)}function NP(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Uc;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Uc||(Uc={}));/**
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
 */function DP(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
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
 */class bP{constructor(e,t,i,o,l,h,f,m,y,w,T,I=!0,O=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=m,this.timeout_=y,this.progressCallback_=w,this.connectionFactory_=T,this.retry=I,this.isUsingEmulator=O,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((B,q)=>{this.resolve_=B,this.reject_=q,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new rc(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const m=f.loaded,y=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,y)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===Uc.NO_ERROR,m=l.getStatus();if(!f||DP(m,this.additionalRetryCodes_)&&this.retry){const w=l.getErrorCode()===Uc.ABORT;i(!1,new rc(!1,null,w));return}const y=this.successCodes_.indexOf(m)!==-1;i(!0,new rc(y,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const m=this.callback_(f,f.getResponse());xP(m)?l(m):l()}catch(m){h(m)}else if(f!==null){const m=EP();m.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,m)):h(m)}else if(o.canceled){const m=this.appDelete_?V0():IP();h(m)}else{const m=TP();h(m)}};this.canceled_?t(!1,new rc(!1,null,!0)):this.backoffId_=CP(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class rc{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function VP(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function OP(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function LP(n,e){e&&(n["X-Firebase-GMPID"]=e)}function MP(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function UP(n,e,t,i,o,l,h=!0,f=!1){const m=NP(n.urlParams),y=n.url+m,w=Object.assign({},n.headers);return LP(w,e),VP(w,t),OP(w,l),MP(w,i),new bP(y,n.method,w,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h,f)}/**
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
 */function FP(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function jP(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Fc{constructor(e,t){this._service=e,t instanceof qn?this._location=t:this._location=qn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Fc(e,t)}get root(){const e=new qn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jP(this._location.path)}get storage(){return this._service}get parent(){const e=FP(this._location.path);if(e===null)return null;const t=new qn(this._location.bucket,e);return new Fc(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw RP(e)}}function B_(n,e){const t=e?.[_P];return t==null?null:qn.makeFromBucketSpec(t,n)}function BP(n,e,t,i={}){n.host=`${e}:${t}`;const o=Ps(e);o&&(qf(`https://${n.host}/b`),Wf("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(n._overrideAuthToken=typeof l=="string"?l:dv(l,n.app.options.projectId))}class zP{constructor(e,t,i,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=b0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=vP,this._maxUploadRetryTime=wP,this._requests=new Set,o!=null?this._bucket=qn.makeFromBucketSpec(o,this._host):this._bucket=B_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=qn.makeFromBucketSpec(this._url,e):this._bucket=B_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){j_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){j_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fc(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new kP(V0());{const h=UP(e,this._appId,i,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const z_="@firebase/storage",$_="0.14.0";/**
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
 */const O0="storage";function $P(n=Gf(),e){n=lt(n);const i=qc(n,O0).getImmediate({identifier:e}),o=uv("storage");return o&&qP(i,...o),i}function qP(n,e,t,i={}){BP(n,e,t,i)}function WP(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new zP(t,i,o,e,xs)}function HP(){Ss(new Vi(O0,WP,"PUBLIC").setMultipleInstances(!0)),or(z_,$_,""),or(z_,$_,"esm2020")}HP();const KP={apiKey:"AIzaSyAT7K99MmenL6mxitM37wqLdzMbmLUR_NU",authDomain:"skillswap-b140a.firebaseapp.com",projectId:"skillswap-b140a",storageBucket:"skillswap-b140a.firebasestorage.app",messagingSenderId:"32612223740",appId:"1:32612223740:web:548fbdf29794aac48be579",measurementId:"G-34356D874H"},Bp=mv(KP),jf=Zv(Bp),Rn=ZC(Bp);$P(Bp);const kn=typeof __app_id<"u"?__app_id:"default-app-id",GP=async(n,e)=>{const t=Cs(Rn,`/artifacts/${kn}/users`,n.uid),i={uid:n.uid,email:n.email,name:e,avatar:`https://placehold.co/100x100/e2e8f0/333?text=${e[0].toUpperCase()}`,skills:[]};await x0(t,i)},cl=async n=>{if(!n)return null;const e=Cs(Rn,`/artifacts/${kn}/users`,n),t=await fP(e);if(t.exists())return t.data();{const i=jf.currentUser;if(i){console.warn("Profile not found for user, creating a new one.");const o=i.displayName||i.email.split("@")[0],l={uid:n,email:i.email,name:o,avatar:`https://placehold.co/100x100/e2e8f0/333?text=${o[0].toUpperCase()}`,skills:[]};return await x0(e,l),l}return null}},QP=async(n,e)=>{if(!n||!e)return;const t=Cs(Rn,`/artifacts/${kn}/users`,n),i=await cl(n),o=na(Rn,`/artifacts/${kn}/public/data/skills`),l=await N0(o,{...e,userId:n,userName:i.name,userAvatar:i.avatar,createdAt:new Date});await jp(t,{skills:gP({...e,publicId:l.id})})},YP=async(n,e)=>{if(!n||!e)return;const t=Cs(Rn,`/artifacts/${kn}/users`,n);if(await jp(t,{skills:yP(e)}),e.publicId){const i=Cs(Rn,`/artifacts/${kn}/public/data/skills`,e.publicId);await pP(i)}},XP=async n=>{if(!n)return[];const e=na(Rn,`/artifacts/${kn}/public/data/skills`),t=vl(e,Ci("userId","!=",n));return(await Mc(t)).docs.map(l=>({id:l.id,...l.data()}))},JP=async n=>{if(n.length===0)return{};const e=new Set(n.flatMap(h=>[h.requesterId,h.receiverId])),t=na(Rn,`/artifacts/${kn}/users`),i=vl(t,Ci(tP(),"in",Array.from(e))),o=await Mc(i),l={};return o.forEach(h=>{l[h.id]=h.data()}),l},ZP=async(n,e,t)=>{const i=na(Rn,`/artifacts/${kn}/swaps`);await N0(i,{requesterId:n,receiverId:e,skillTitle:t.title,skillId:t.publicId||t.id,status:"pending",createdAt:new Date,requesterName:jf.currentUser.displayName||jf.currentUser.email.split("@")[0]})},L0=(n,e)=>{const t=na(Rn,`/artifacts/${kn}/swaps`),i=vl(t,Ci("receiverId","==",n),Ci("status","==","pending"));return mP(i,o=>{const l=o.docs.map(h=>({id:h.id,...h.data()}));e(l)})},ex=async(n,e)=>{const t=Cs(Rn,`/artifacts/${kn}/swaps`,n);await jp(t,{status:e})},tx=async n=>{if(!n)return[];const e=na(Rn,`/artifacts/${kn}/swaps`),t=vl(e,Ci("requesterId","==",n),Ci("status","==","accepted")),i=vl(e,Ci("receiverId","==",n),Ci("status","==","accepted")),[o,l]=await Promise.all([Mc(t),Mc(i)]),h=[...o.docs.map(m=>({id:m.id,...m.data()})),...l.docs.map(m=>({id:m.id,...m.data()}))],f=await JP(h);return h.map(m=>{const y=m.requesterId===n?m.receiverId:m.requesterId;return{...m,otherParty:f[y]||{name:"Unknown User"}}})},M0=W.createContext();function qi(){return W.useContext(M0)}function nx({children:n}){const[e,t]=W.useState(null),[i,o]=W.useState(!0),l=Zv(),h=async(w,T)=>{const I=await U1(l,w,T);return await GP(I.user),I},f=(w,T)=>F1(l,w,T),m=()=>W1(l);W.useEffect(()=>q1(l,async T=>{if(t(T),!T&&typeof __initial_auth_token<"u"&&__initial_auth_token)try{await M1(l,__initial_auth_token)}catch(I){console.error("Custom token sign-in failed, trying anonymous.",I),await D1(l)}o(!1)}),[l]);const y={currentUser:e,signup:h,login:f,logout:m};return A.jsx(M0.Provider,{value:y,children:!i&&n})}function rx(){const{currentUser:n,logout:e}=qi(),t=wl(),[i,o]=W.useState(0);W.useEffect(()=>{if(n){const f=L0(n.uid,m=>{o(m.length)});return()=>f()}},[n]);const l=async()=>{try{await e(),t("/login")}catch(f){console.error("Failed to log out",f)}},h=({isActive:f})=>f?"bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium":"text-gray-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";return A.jsx("nav",{className:"bg-slate-800 dark:bg-slate-900 shadow-md",children:A.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:A.jsxs("div",{className:"flex items-center justify-between h-16",children:[A.jsx(vs,{className:"font-bold text-2xl text-white",children:"SkillSwap"}),A.jsxs("div",{className:"flex items-center space-x-4",children:[A.jsx(vs,{to:"/browse",className:h,children:"Browse"}),n?A.jsxs(A.Fragment,{children:[A.jsx(vs,{to:"/dashboard",className:h,children:"Dashboard"}),A.jsxs(vs,{to:"/requests",className:({isActive:f})=>`${h({isActive:f})} relative`,children:["Requests",i>0&&A.jsx("span",{className:"absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse",children:i})]}),A.jsx(vs,{to:"/profile",className:h,children:"Skillset"}),A.jsx("button",{onClick:l,className:"bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium",children:"Logout"})]}):A.jsxs(A.Fragment,{children:[A.jsx(vs,{to:"/login",className:h,children:"Login"}),A.jsx(vs,{to:"/signup",className:h,children:"Sign Up"})]})]})]})})})}function ix(){return A.jsx("footer",{className:"bg-slate-800 dark:bg-slate-900 text-white py-4 mt-auto",children:A.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:A.jsxs("p",{children:["© ",new Date().getFullYear()," SkillSwap. All rights reserved."]})})})}function of({children:n}){const{currentUser:e}=qi();return e?n:A.jsx(FT,{to:"/login",replace:!0})}function sx({onAddSkill:n,onClose:e}){const[t,i]=W.useState(""),[o,l]=W.useState(""),h=f=>{f.preventDefault(),!(!t||!o)&&(n({title:t,description:o}),e())};return A.jsxs("form",{onSubmit:h,className:"space-y-4",children:[A.jsx("input",{type:"text",value:t,onChange:f=>i(f.target.value),placeholder:"Skill Title (e.g., Graphic Design)",className:"w-full p-3 border rounded-lg dark:bg-slate-700 dark:border-slate-600"}),A.jsx("textarea",{value:o,onChange:f=>l(f.target.value),placeholder:"Describe your skill...",className:"w-full p-3 border rounded-lg dark:bg-slate-700 dark:border-slate-600",rows:"4"}),A.jsx("button",{type:"submit",className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg",children:"Add Skill"})]})}function ox({isOpen:n,onClose:e,onAddSkill:t}){return n?A.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center",children:A.jsxs("div",{className:"bg-white dark:bg-slate-800 p-8 rounded-lg shadow-2xl w-full max-w-md",children:[A.jsxs("div",{className:"flex justify-between items-center mb-4",children:[A.jsx("h2",{className:"text-2xl font-bold",children:"Add a New Skill"}),A.jsx("button",{onClick:e,className:"text-2xl",children:"×"})]}),A.jsx(sx,{onAddSkill:t,onClose:e})]})}):null}function ax(){return A.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-10",children:[A.jsxs("section",{className:"grid md:grid-cols-2 gap-8 items-center",children:[A.jsxs("div",{children:[A.jsxs("h1",{className:"text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight",children:["Exchange skills. ",A.jsx("span",{className:"text-indigo-600",children:"Learn faster."})," Grow together."]}),A.jsx("p",{className:"mt-4 text-gray-600 dark:text-gray-400 max-w-xl",children:"Find people who can teach what you want to learn — and offer your skill in return. Post a skill, browse the marketplace, and request a barter."}),A.jsx("div",{className:"mt-6 flex items-center gap-4",children:A.jsx(El,{to:"/browse",className:"px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold",children:"Browse Skills"})}),A.jsxs("div",{className:"mt-8 grid grid-cols-3 gap-2 text-sm text-gray-600 dark:text-gray-400",children:[A.jsxs("div",{children:[A.jsx("div",{className:"text-2xl font-bold text-indigo-600",children:"1k+"}),A.jsx("div",{children:"Active users"})]}),A.jsxs("div",{children:[A.jsx("div",{className:"text-2xl font-bold text-indigo-600",children:"2k+"}),A.jsx("div",{children:"Skills listed"})]}),A.jsxs("div",{children:[A.jsx("div",{className:"text-2xl font-bold text-indigo-600",children:"95%"}),A.jsx("div",{children:"Satisfaction"})]})]})]}),A.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md",children:[A.jsx("h3",{className:"text-lg font-semibold mb-4 text-slate-900 dark:text-white",children:"Featured Skills"}),A.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[A.jsx("div",{className:"p-3 bg-indigo-50 dark:bg-slate-700/50 rounded",children:A.jsxs("div",{className:"flex justify-between items-center",children:[A.jsxs("div",{children:[A.jsx("div",{className:"text-sm text-indigo-700 dark:text-indigo-300 font-semibold",children:"UI/UX Design"}),A.jsx("div",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"By: jane@example.com • Intermediate"})]}),A.jsx("div",{children:A.jsx("button",{className:"px-3 py-1 bg-white dark:bg-slate-600 border dark:border-slate-500 rounded",children:"View"})})]})}),A.jsx("div",{className:"p-3 bg-white dark:bg-slate-700/50 rounded border dark:border-slate-700",children:A.jsxs("div",{className:"flex justify-between items-center",children:[A.jsxs("div",{children:[A.jsx("div",{className:"text-sm text-gray-800 dark:text-gray-200 font-semibold",children:"Python for Data Science"}),A.jsx("div",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"By: amit@example.com • Advanced"})]}),A.jsx("div",{children:A.jsx("button",{className:"px-3 py-1 bg-indigo-600 text-white rounded",children:"View"})})]})}),A.jsx("div",{className:"p-3 bg-white dark:bg-slate-700/50 rounded border dark:border-slate-700",children:A.jsxs("div",{className:"flex justify-between items-center",children:[A.jsxs("div",{children:[A.jsx("div",{className:"text-sm text-gray-800 dark:text-gray-200 font-semibold",children:"Guitar Basics"}),A.jsx("div",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"By: maya@example.com • Beginner"})]}),A.jsx("div",{children:A.jsx("button",{className:"px-3 py-1 bg-indigo-600 text-white rounded",children:"View"})})]})})]})]})]}),A.jsxs("section",{className:"mt-12",children:[A.jsx("h3",{className:"text-xl font-semibold mb-4 text-slate-900 dark:text-white",children:"How it works"}),A.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[A.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 text-center rounded-lg shadow-md",children:[A.jsx("div",{className:"text-xl font-semibold",children:"1. Post a Skill"}),A.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Add what you can teach and what you want in return."})]}),A.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 text-center rounded-lg shadow-md",children:[A.jsx("div",{className:"text-xl font-semibold",children:"2. Browse & Connect"}),A.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Find the best match using search and filters."})]}),A.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 text-center rounded-lg shadow-md",children:[A.jsx("div",{className:"text-xl font-semibold",children:"3. Barter & Learn"}),A.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Schedule sessions, leave ratings, and grow together."})]})]})]})]})}function lx(){const[n,e]=W.useState(""),[t,i]=W.useState(""),[o,l]=W.useState(""),{currentUser:h,login:f}=qi(),m=wl();W.useEffect(()=>{h&&m("/dashboard")},[h,m]);async function y(w){w.preventDefault();try{l(""),await f(n,t)}catch(T){l(T.message||"Failed to log in")}}return A.jsxs("div",{className:"max-w-md mx-auto mt-12 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg",children:[A.jsx("h2",{className:"text-3xl font-bold mb-6 text-center text-slate-900 dark:text-white",children:"Login"}),o&&A.jsx("p",{className:"text-red-500 mb-4 p-3 bg-red-100 dark:bg-red-900/30 rounded-md",children:o}),A.jsxs("form",{onSubmit:y,className:"space-y-6",children:[A.jsx("input",{type:"email",value:n,onChange:w=>e(w.target.value),placeholder:"Email",className:"w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white",required:!0}),A.jsx("input",{type:"password",value:t,onChange:w=>i(w.target.value),placeholder:"Password",className:"w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white",required:!0}),A.jsx("button",{type:"submit",className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold",children:"Login"})]}),A.jsxs("p",{className:"mt-6 text-sm text-center text-gray-600 dark:text-gray-400",children:["Don't have an account? ",A.jsx(El,{to:"/signup",className:"font-medium text-indigo-600 hover:underline dark:text-indigo-400",children:"Sign Up"})]})]})}function ux(){const[n,e]=W.useState(""),[t,i]=W.useState(""),[o,l]=W.useState(""),{currentUser:h,signup:f}=qi(),m=wl();W.useEffect(()=>{h&&m("/dashboard")},[h,m]);async function y(w){w.preventDefault();try{l(""),await f(n,t)}catch(T){l(T.message||"Failed to create account")}}return A.jsxs("div",{className:"max-w-md mx-auto mt-12 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg",children:[A.jsx("h2",{className:"text-3xl font-bold mb-6 text-center text-slate-900 dark:text-white",children:"Create an Account"}),o&&A.jsx("p",{className:"text-red-500 mb-4 p-3 bg-red-100 dark:bg-red-900/30 rounded-md",children:o}),A.jsxs("form",{onSubmit:y,className:"space-y-6",children:[A.jsx("input",{type:"email",value:n,onChange:w=>e(w.target.value),placeholder:"Email",className:"w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white",required:!0}),A.jsx("input",{type:"password",value:t,onChange:w=>i(w.target.value),placeholder:"Password (min. 6 characters)",className:"w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white",required:!0}),A.jsx("button",{type:"submit",className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold",children:"Sign Up"})]}),A.jsxs("p",{className:"mt-6 text-sm text-center text-gray-600 dark:text-gray-400",children:["Already have an account? ",A.jsx(El,{to:"/login",className:"font-medium text-indigo-600 hover:underline dark:text-indigo-400",children:"Log In"})]})]})}function cx({profile:n,onOpenChangePassword:e}){return A.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg",children:[A.jsxs("div",{className:"flex items-center space-x-4 mb-4",children:[A.jsx("img",{src:n.avatar,alt:n.name,className:"w-16 h-16 rounded-full"}),A.jsxs("div",{children:[A.jsx("h3",{className:"text-xl font-bold text-slate-900 dark:text-white",children:n.name}),A.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:n.email})]})]}),A.jsx("button",{onClick:e,className:"w-full mt-4 bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300",children:"Change Password"})]})}function hx({skills:n}){return A.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg h-full",children:[A.jsxs("div",{className:"flex justify-between items-center mb-4",children:[A.jsx("h3",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Your Arsenal"}),A.jsx(El,{to:"/browse",className:"text-indigo-600 dark:text-indigo-400 font-semibold hover:underline",children:"Find Skills to Barter"})]}),A.jsx("div",{className:"space-y-4",children:n.length>0?n.map((e,t)=>A.jsxs("div",{className:"p-4 bg-gray-100 dark:bg-slate-700/50 rounded-lg",children:[A.jsx("h4",{className:"font-semibold text-lg",children:e.title}),A.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:e.description})]},t)):A.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"You haven't added any skills yet. Go to your profile to build your arsenal!"})})]})}function q_({title:n,value:e}){return A.jsxs("div",{className:"bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-lg text-center",children:[A.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:n}),A.jsx("p",{className:"text-3xl font-bold text-slate-900 dark:text-white mt-1",children:e})]})}function dx({handleChangePassword:n,onClose:e}){const[t,i]=W.useState(""),[o,l]=W.useState(""),[h,f]=W.useState(""),[m,y]=W.useState(""),w=async T=>{if(T.preventDefault(),f(""),y(""),t!==o)return f("Passwords do not match.");if(t.length<6)return f("Password must be at least 6 characters long.");try{await n(t),y("Password updated successfully!"),i(""),l("")}catch(I){f(I.message)}};return A.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:A.jsxs("div",{className:"bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg w-full max-w-md",children:[A.jsx("h3",{className:"text-2xl font-bold mb-6 text-slate-900 dark:text-white",children:"Change Password"}),h&&A.jsx("p",{className:"text-red-500 mb-4 p-3 bg-red-100 dark:bg-red-900/30 rounded-md",children:h}),m&&A.jsx("p",{className:"text-green-500 mb-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-md",children:m}),A.jsxs("form",{onSubmit:w,className:"space-y-4",children:[A.jsx("input",{type:"password",value:t,onChange:T=>i(T.target.value),placeholder:"New Password",className:"w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white",required:!0}),A.jsx("input",{type:"password",value:o,onChange:T=>l(T.target.value),placeholder:"Confirm New Password",className:"w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white",required:!0}),A.jsxs("div",{className:"flex justify-end gap-4 pt-4",children:[A.jsx("button",{type:"button",onClick:e,className:"px-6 py-2 bg-gray-200 dark:bg-slate-600 text-slate-800 dark:text-white rounded-lg",children:"Cancel"}),A.jsx("button",{type:"submit",className:"px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold",children:"Update Password"})]})]})]})})}function fx(){const{currentUser:n}=qi(),[e,t]=W.useState(null),[i,o]=W.useState(!0),[l,h]=W.useState(null),[f,m]=W.useState(!1);W.useEffect(()=>{(async()=>{if(n)try{o(!0),h(null);const T=await cl(n.uid);t(T)}catch(T){console.error("Failed to fetch profile:",T),h("Could not load your profile data. Please try again later.")}finally{o(!1)}else o(!1)})()},[n]);const y=async w=>{if(!n)throw new Error("You must be logged in to change your password.");await j1(n,w)};return i?A.jsx("div",{className:"text-center py-10",children:"Loading dashboard..."}):l?A.jsx("div",{className:"text-center py-10 text-red-500",children:l}):e?A.jsxs(A.Fragment,{children:[f&&A.jsx(dx,{handleChangePassword:y,onClose:()=>m(!1)}),A.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[A.jsxs("div",{className:"mb-8",children:[A.jsxs("h1",{className:"text-4xl font-bold text-slate-900 dark:text-white",children:["Welcome back, ",e.name,"!"]}),A.jsx("p",{className:"mt-2 text-lg text-gray-600 dark:text-gray-400",children:"Here's a snapshot of your SkillSwap activity."})]}),A.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[A.jsxs("div",{className:"lg:col-span-1 space-y-8",children:[A.jsx(cx,{profile:e,onOpenChangePassword:()=>m(!0)}),A.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[A.jsx(q_,{title:"Skills Offered",value:e.skills.length}),A.jsx(q_,{title:"Swaps Completed",value:e.stats.swapsCompleted})]})]}),A.jsx("div",{className:"lg:col-span-2",children:A.jsx(hx,{skills:e.skills})})]})]})]}):A.jsx("div",{className:"text-center py-10",children:"Loading user data..."})}function px({skill:n,onSwapRequest:e}){if(!n)return null;const t=n.userAvatar||"https://placehold.co/100x100/e2e8f0/333?text=?",i=n.userName||"Unknown User",o=n.title||"Untitled Skill",l=n.description||"No description available.";return A.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 group",children:A.jsxs("div",{className:"p-6 flex flex-col h-full",children:[A.jsxs("div",{className:"flex items-center mb-4",children:[A.jsx("img",{className:"w-12 h-12 rounded-full object-cover mr-4",src:t,alt:i}),A.jsxs("div",{children:[A.jsx("p",{className:"font-semibold text-slate-900 dark:text-white",children:i}),A.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Offers:"})]})]}),A.jsxs("div",{className:"flex-grow",children:[A.jsx("h3",{className:"text-xl font-bold text-indigo-600 dark:text-indigo-400",children:o}),A.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:l})]}),A.jsx("button",{onClick:()=>e(n.userId,n),className:"w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300",children:"Request Swap"})]})})}function mx({onSearch:n}){const[e,t]=W.useState(""),i=o=>{t(o.target.value),n(o.target.value)};return A.jsx("div",{className:"w-full max-w-2xl mx-auto",children:A.jsx("input",{type:"text",value:e,onChange:i,placeholder:"Search for skills like 'photography' or 'web development'...",className:"w-full p-4 border-2 border-gray-300 dark:border-slate-600 rounded-full shadow-sm dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"})})}const af=8;function gx(){const{currentUser:n}=qi(),[e,t]=W.useState([]),[i,o]=W.useState([]),[l,h]=W.useState(!0),[f,m]=W.useState(""),[y,w]=W.useState(!1);W.useEffect(()=>{(async()=>{if(n){h(!0);const q=await XP(n.uid);t(q),o(q),h(!1)}else h(!1)})()},[n]);const T=B=>{if(!B){o(e),w(!1);return}w(!0);const q=B.toLowerCase(),U=e.filter(re=>re.title?.toLowerCase().includes(q)||re.description?.toLowerCase().includes(q)||re.userName?.toLowerCase().includes(q));o(U)},I=async(B,q)=>{n?(await ZP(n.uid,B,q),m(`Swap request sent for "${q.title}"!`),setTimeout(()=>m(""),3e3)):alert("Please log in to request a swap.")},O=y?i:i.slice(0,af);return l?A.jsx("div",{className:"text-center py-10",children:"Loading skills..."}):n?A.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-8",children:[A.jsxs("div",{className:"mb-8 text-center",children:[A.jsx("h1",{className:"text-4xl font-bold text-slate-900 dark:text-white",children:"Find a Skill"}),A.jsx("p",{className:"mt-2 text-lg text-gray-600 dark:text-gray-400",children:"Discover skills from our talented community."})]}),A.jsx(mx,{onSearch:T}),A.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8",children:O.map(B=>A.jsx(px,{skill:B,onSwapRequest:I},B.id))}),A.jsxs("div",{className:"text-center mt-12",children:[!y&&i.length>af&&A.jsx("button",{onClick:()=>w(!0),className:"bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg",children:"Show More"}),y&&i.length>af&&A.jsx("button",{onClick:()=>w(!1),className:"bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg",children:"Show Less"})]}),f&&A.jsx("div",{className:"fixed bottom-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg",children:f})]}):A.jsx("div",{className:"text-center py-10",children:"Please log in to browse skills."})}function yx({skill:n,onDelete:e}){if(!n)return null;const t=i=>{switch(i?.toLowerCase()){case"advanced":return"bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300";case"intermediate":return"bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300";case"beginner":return"bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300";default:return"bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200"}};return A.jsxs("div",{className:"bg-white dark:bg-slate-700 p-4 rounded-xl shadow-md border border-gray-200 dark:border-slate-600 flex flex-col justify-between h-full",children:[A.jsxs("div",{children:[A.jsxs("div",{className:"flex justify-between items-center mb-2",children:[A.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white",children:n.title}),n.level&&A.jsx("span",{className:`px-2.5 py-0.5 text-xs font-semibold rounded-full ${t(n.level)}`,children:n.level})]}),A.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm",children:n.description})]}),e&&A.jsx("button",{onClick:()=>e(n),className:"mt-4 w-full text-sm bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-2 px-3 rounded-lg transition-colors duration-200 dark:bg-red-900/40 dark:hover:bg-red-900/70 dark:text-red-300",children:"Delete Skill"})]})}function _x(){const{currentUser:n}=qi(),[e,t]=W.useState(null),[i,o]=W.useState(!1),[l,h]=W.useState(!0);W.useEffect(()=>{(async()=>{if(n){h(!0);const w=await cl(n.uid);t(w),h(!1)}else h(!1)})()},[n]);const f=async y=>{if(n){await QP(n.uid,y);const w=await cl(n.uid);t(w)}},m=async y=>{if(n&&window.confirm(`Are you sure you want to delete "${y.title}"?`)){await YP(n.uid,y);const w=await cl(n.uid);t(w)}};return l?A.jsx("div",{className:"text-center py-10",children:"Loading..."}):n?e?A.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[A.jsx("h1",{className:"text-3xl font-bold text-slate-900 dark:text-white mb-6",children:"Your Profile"}),A.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md",children:[A.jsxs("div",{className:"flex justify-between items-center mb-6",children:[A.jsx("h2",{className:"text-2xl font-semibold text-slate-900 dark:text-white",children:"Your Skills"}),A.jsx("button",{onClick:()=>o(!0),className:"bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg",children:"Add New Skill"})]}),Array.isArray(e.skills)&&e.skills.length>0?A.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:e.skills.map((y,w)=>A.jsx(yx,{skill:y,onDelete:m},y.publicId||w))}):A.jsx("div",{className:"text-center py-10 border-2 border-dashed rounded-lg",children:A.jsx("p",{className:"text-gray-500",children:"You haven't added any skills yet."})})]}),A.jsx(ox,{isOpen:i,onClose:()=>o(!1),onAddSkill:f})]}):A.jsx("div",{className:"text-center py-10",children:"Could not find profile."}):A.jsx("div",{className:"text-center py-10",children:"Please log in."})}function vx(){const{currentUser:n}=qi(),[e,t]=W.useState("requests"),[i,o]=W.useState([]),[l,h]=W.useState([]),[f,m]=W.useState(!0),[y,w]=W.useState(!0);W.useEffect(()=>{if(n){m(!0);const O=L0(n.uid,B=>{o(B),m(!1)});return()=>O()}else m(!1)},[n]),W.useEffect(()=>{e==="sessions"&&(async()=>{if(n){w(!0);const B=await tx(n.uid);h(B),w(!1)}else w(!1)})()},[n,e]);const T=async(O,B)=>{await ex(O,B)},I=O=>O?.toDate?O.toDate().toLocaleDateString():"";return A.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[A.jsx("h1",{className:"text-3xl font-bold mb-6 text-slate-900 dark:text-white",children:"My Swaps"}),A.jsxs("div",{className:"flex border-b border-gray-200 dark:border-slate-700 mb-6",children:[A.jsxs("button",{onClick:()=>t("requests"),className:`py-2 px-4 transition-colors duration-200 ${e==="requests"?"border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400":"text-gray-500 hover:text-gray-700"}`,children:["Pending Requests (",i.length,")"]}),A.jsx("button",{onClick:()=>t("sessions"),className:`py-2 px-4 transition-colors duration-200 ${e==="sessions"?"border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400":"text-gray-500 hover:text-gray-700"}`,children:"Confirmed Sessions"})]}),e==="requests"&&A.jsx("div",{className:"space-y-4",children:f?A.jsx("p",{className:"text-center py-10",children:"Loading requests..."}):i.length>0?i.map(O=>A.jsxs("div",{className:"bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md flex justify-between items-center",children:[A.jsxs("p",{className:"text-sm dark:text-gray-300",children:[A.jsx("span",{className:"font-semibold dark:text-white",children:O.requesterName})," wants to swap for: ",A.jsx("span",{className:"font-semibold dark:text-white",children:O.skillTitle})]}),A.jsxs("div",{className:"flex gap-2 flex-shrink-0",children:[A.jsx("button",{onClick:()=>T(O.id,"rejected"),className:"text-xs px-3 py-1 bg-red-100 text-red-700 rounded-full hover:bg-red-200",children:"Reject"}),A.jsx("button",{onClick:()=>T(O.id,"accepted"),className:"text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full hover:bg-green-200",children:"Accept"})]})]},O.id)):A.jsx("p",{className:"text-center text-gray-500 py-10",children:"You have no pending requests."})}),e==="sessions"&&A.jsx("div",{className:"space-y-4",children:y?A.jsx("p",{className:"text-center py-10",children:"Loading sessions..."}):l.length>0?l.map(O=>A.jsx("div",{className:"bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md",children:A.jsxs("div",{className:"flex justify-between items-start",children:[A.jsxs("div",{children:[A.jsx("h3",{className:"font-bold text-lg dark:text-white",children:O.skillTitle}),A.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:["Swap confirmed with ",A.jsx("span",{className:"font-semibold",children:O.otherParty.name}),"."]})]}),A.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:I(O.createdAt)})]})},O.id)):A.jsx("p",{className:"text-center text-gray-500 py-10",children:"You have no confirmed sessions yet."})})]})}function wx(){return A.jsxs("div",{className:"min-h-screen flex flex-col bg-gray-100 dark:bg-slate-900 text-slate-900 dark:text-slate-200",children:[A.jsx(rx,{}),A.jsx("main",{className:"flex-grow",children:A.jsxs(BT,{children:[A.jsx(Ei,{path:"/",element:A.jsx(ax,{})}),A.jsx(Ei,{path:"/login",element:A.jsx(lx,{})}),A.jsx(Ei,{path:"/signup",element:A.jsx(ux,{})}),A.jsx(Ei,{path:"/browse",element:A.jsx(gx,{})}),A.jsx(Ei,{path:"/dashboard",element:A.jsx(of,{children:A.jsx(fx,{})})}),A.jsx(Ei,{path:"/profile",element:A.jsx(of,{children:A.jsx(_x,{})})}),A.jsx(Ei,{path:"/requests",element:A.jsx(of,{children:A.jsx(vx,{})})})]})}),A.jsx(ix,{})]})}const Ex=XE.createRoot(document.getElementById("root"));Ex.render(A.jsx(H_.StrictMode,{children:A.jsx(QT,{children:A.jsx(nx,{children:A.jsx(wx,{})})})}));
