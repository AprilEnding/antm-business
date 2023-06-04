/*! For license information please see 179.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[179],{"7729":function(t,e,o){o.d(e,{"J":function(){return Icon},"Z":function(){return f}});var n=o(7646),r=o(6692),i=o(3184),s=o(2322),a=o(8245),c=o(7859);function Info(t){const{"dot":e,"info":o=null,"style":l,"className":u}=t,f=(0,i._)(t,["dot","info","style","className"]);return(0,s.jsx)(s.Fragment,{"children":(o||0===o||e)&&(0,s.jsx)(a.G7,(0,r._)((0,n._)({"className":"van-info "+c.PH("info",{"dot":e})+"  "+u,"style":c.oB([l])},f),{"children":e?"":o}))})}var l=o(4474),u=o(8843);function addUnit(t){if(null!=t)return/^-?\d+(\.\d+)?$/.test(""+t)?(0,u.uk)(t):t}function isImage(t){return-1!==t.indexOf("/")}function rootClass(t){const e=[];if(t.classPrefix&&e.push(t.classPrefix),isImage(t.name))e.push("van-icon--image");else{const o=t.classPrefix?`${t.classPrefix}-${t.name}`:t.name;e.push(o)}return e.join(" ")}function rootStyle(t){return(0,l.o)([{"color":t.color,"font-size":addUnit(t.size)}])}function Icon(t){const{"classPrefix":e="van-icon","name":o,"color":l,"size":u,"dot":f,"info":h,"style":m,"className":d}=t,p=(0,i._)(t,["classPrefix","name","color","size","dot","info","style","className"]);return(0,s.jsxs)(a.G7,(0,r._)((0,n._)({"className":rootClass({"classPrefix":e,"name":o})+` ${d||""}`,"style":c.oB([rootStyle({"color":l,"size":u}),m])},p),{"children":[(h||0===h||f)&&(0,s.jsx)(Info,{"dot":f,"info":h,"className":"van-icon__info"}),isImage(o)&&(0,s.jsx)(a.Ee,{"src":o,"mode":"aspectFit","className":"van-icon__image"})]}))}var f=Icon},"3294":function(t,e,o){function isArray(t){return t&&"[object Array]"===toString.call(t)}o.d(e,{"k":function(){return isArray}})},"579":function(t,e,o){o.d(e,{"X":function(){return keys}});const n=new RegExp('{|}|"',"g");function keys(t){return JSON.stringify(t).replace(n,"").split(",").map((function(t){return t.split(":")[0]}))}},"4474":function(t,e,o){o.d(e,{"o":function(){return style}});var n=o(3294),r=o(579);function style(t){return n.k(t)?t.filter((function(t){return null!=t&&""!==t})).map((function(t){return style(t)})).join(";")||"":"[object Object]"===toString.call(t)?r.X(t).filter((function(e){return null!=t[e]&&""!==t[e]})).map((function(e){return[(o=e,null===(n=o.replace(new RegExp("[A-Z]","g"),(function(t){return"-"+t})))||void 0===n?void 0:n.toLowerCase()),[t[e]]].join(":");var o,n})).join(";")||"":t||""}},"7859":function(t,e,o){o.d(e,{"PH":function(){return a},"oB":function(){return s.o}});var n=o(3294),r=o(579);const i="van-";function traversing(t,e){e&&("string"==typeof e||"number"==typeof e?t.push(e):n.k(e)?e.forEach((function(e){traversing(t,e)})):"object"==typeof e&&r.X(e).forEach((function(o){e[o]&&t.push(o)})))}var s=o(4474);const a=function memoize(t){var e={};return function(){var o=function serializer(t){if(1===t.length&&function isPrimitive(t){var e=typeof t;return"boolean"===e||"number"===e||"string"===e||"undefined"===e||null===t}(t[0]))return t[0];for(var e={},o=0;o<t.length;o++)e["key"+o]=t[o];return JSON.stringify(e)}(arguments);return void 0===e[o]&&(e[o]=function call(t,e){return 2===e.length?t(e[0],e[1]):1===e.length?t(e[0]):t()}(t,arguments)),e[o]}}((function _bem(t,e){const o=[];return traversing(o,e),function join(t,e){return t=i+t,(e=e.map((function(e){return t+"--"+e}))).unshift(t),e.join(" ")}(t,o)}))},"8245":function(t,e,o){o.d(e,{"Ee":function(){return u},"G7":function(){return f}});var n=o(2784);const helper_manipulatePropsFunction=(t,e={})=>{const{"dangerouslySetInnerHTML":o,"style":n}=t;return"string"!=typeof n&&(e.style=n),Object.assign(Object.assign({},e),{"dangerouslySetInnerHTML":o})};var r=o(21),i=o(5511);o.e(447).then(o.t.bind(o,8447,23));const s=(0,r.GH)(class extends r.mv{"constructor"(){super(),this.__registerHost(),this.onLoad=(0,r.yM)(this,"load",7),this.onError=(0,r.yM)(this,"error",7),this.src=void 0,this.mode="scaleToFill",this.lazyLoad=!1,this.nativeProps={},this.aspectFillMode="width"}"componentDidLoad"(){if(!this.lazyLoad)return;const t=new IntersectionObserver((e=>{e[e.length-1].isIntersecting&&(t.unobserve(this.imgRef),this.imgRef.src=this.src)}),{"rootMargin":"300px 0px"});t.observe(this.imgRef)}"imageOnLoad"(){const{"width":t,"height":e,"naturalWidth":o,"naturalHeight":n}=this.imgRef;this.onLoad.emit({"width":t,"height":e}),this.aspectFillMode=o>n?"width":"height"}"imageOnError"(t){this.onError.emit(t)}"render"(){const{"src":t,"mode":e="scaleToFill","lazyLoad":o=!1,"aspectFillMode":n="width","imageOnLoad":s,"imageOnError":a,"nativeProps":c}=this,l=(0,i.c)({"taro-img__widthfix":"widthFix"===e}),u=(0,i.c)(`taro-img__mode-${e.toLowerCase().replace(/\s/g,"")}`,{[`taro-img__mode-aspectfill--${n}`]:"aspectFill"===e});return(0,r.h)(r.AA,{"class":l},o?(0,r.h)("img",Object.assign({"ref":t=>this.imgRef=t,"class":u,"onLoad":s.bind(this),"onError":a.bind(this)},c)):(0,r.h)("img",Object.assign({"ref":t=>this.imgRef=t,"class":u,"src":t,"onLoad":s.bind(this),"onError":a.bind(this)},c)))}static get"style"(){return'img[src=""]{opacity:0}taro-image-core{display:inline-block;overflow:hidden;position:relative;width:auto;height:auto;font-size:0}.taro-img.taro-img__widthfix{height:100%}.taro-img__mode-scaletofill{width:100%;height:100%}.taro-img__mode-aspectfit{max-width:100%;max-height:100%}.taro-img__mode-aspectfill{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.taro-img__mode-aspectfill--width{min-width:100%;height:100%}.taro-img__mode-aspectfill--height{width:100%;min-height:100%}.taro-img__mode-widthfix{width:100%}.taro-img__mode-heightfix{height:100%}.taro-img__mode-top{width:100%}.taro-img__mode-bottom{position:absolute;bottom:0;width:100%}.taro-img__mode-left{height:100%}.taro-img__mode-right{position:absolute;right:0;height:100%}.taro-img__mode-topright{position:absolute;right:0}.taro-img__mode-bottomleft{position:absolute;bottom:0}.taro-img__mode-bottomright{position:absolute;right:0;bottom:0}'}},[0,"taro-image-core",{"src":[1],"mode":[1],"lazyLoad":[4,"lazy-load"],"nativeProps":[16],"aspectFillMode":[32]}]);const a=function defineCustomElement$1(){if("undefined"==typeof customElements)return;["taro-image-core"].forEach((t=>{if("taro-image-core"===t)customElements.get(t)||customElements.define(t,s)}))},c=(0,r.GH)(class extends r.mv{"constructor"(){super(),this.__registerHost(),this.onLongPress=(0,r.yM)(this,"longpress",7),this.startTime=0,this.animation=void 0,this.hoverClass=void 0,this.hoverStartTime=50,this.hoverStayTime=400,this.hover=!1,this.touch=!1}"onTouchStart"(){this.hoverClass&&(this.touch=!0,setTimeout((()=>{this.touch&&(this.hover=!0)}),this.hoverStartTime)),this.timeoutEvent=setTimeout((()=>{this.onLongPress.emit()}),350),this.startTime=Date.now()}"onTouchMove"(){clearTimeout(this.timeoutEvent)}"onTouchEnd"(){Date.now()-this.startTime<350&&clearTimeout(this.timeoutEvent),this.hoverClass&&(this.touch=!1,setTimeout((()=>{this.touch||(this.hover=!1)}),this.hoverStayTime))}"componentDidRender"(){this.el.childNodes.forEach((t=>{t.nodeType===document.COMMENT_NODE&&t["s-cn"]&&(t["s-cn"]=!1),t.nodeType!==document.COMMENT_NODE&&t["s-sr"]&&(t["s-sr"]=!1)}))}"render"(){const t=(0,i.c)({[`${this.hoverClass}`]:this.hover});let e={};return this.animation&&(e.animation=this.animation,e["data-animation"]=this.animation),(0,r.h)(r.AA,Object.assign({"class":t},e),(0,r.h)("slot",null))}get"el"(){return this}static get"style"(){return"body,html{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}taro-view-core{display:block}"}},[4,"taro-view-core",{"animation":[1],"hoverClass":[1,"hover-class"],"hoverStartTime":[2,"hover-start-time"],"hoverStayTime":[2,"hover-stay-time"],"hover":[32],"touch":[32]},[[1,"touchstart","onTouchStart"],[1,"touchmove","onTouchMove"],[1,"touchend","onTouchEnd"]]]);const l=function taro_view_core_defineCustomElement$1(){if("undefined"==typeof customElements)return;["taro-view-core"].forEach((t=>{if("taro-view-core"===t)customElements.get(t)||customElements.define(t,c)}))};Object.create;Object.create;const mergeRefs=(...t)=>e=>{t.forEach((t=>{((t,e)=>{"function"==typeof t?t(e):null!=t&&(t.current=e)})(t,e)}))},camelToDashCase=t=>t.replace(/([A-Z])/g,(t=>`-${t[0].toLowerCase()}`)),arrayToMap=t=>{const e=new Map;return t.forEach((t=>e.set(t,t))),e},syncEvent=(t,e,o)=>{const n=t.__events||(t.__events={}),r=n[e];r&&t.removeEventListener(e,r),t.addEventListener(e,n[e]=function handler(t){o&&o.call(this,t)})},attachProps=(t,e,o={})=>{if(t instanceof Element){const n=((t,e,o)=>{const n=e.className||e.class,r=o.className||o.class,i=arrayToMap(t),s=arrayToMap(n?n.split(" "):[]),a=arrayToMap(r?r.split(" "):[]),c=[];return i.forEach((t=>{s.has(t)?(c.push(t),s.delete(t)):a.has(t)||c.push(t)})),s.forEach((t=>c.push(t))),c.join(" ")})(t.classList,e,o);""!==n&&(t.className=n),Object.keys(e).forEach((o=>{if(!("style"===o&&"string"!=typeof e[o]||["children","ref","class","className","forwardedRef"].includes(o)))if(0===o.indexOf("on")&&o[2]===o[2].toUpperCase()){const n=o.substring(2).toLowerCase();syncEvent(t,n,e[o])}else{t[o]=e[o];"string"===typeof e[o]&&t.setAttribute(camelToDashCase(o),e[o])}}))}},createComponent_createReactComponent=(t,e,o,r)=>{void 0!==r&&r();const i=t.toLowerCase().split("-").map((t=>t.charAt(0).toUpperCase()+t.slice(1))).join("");const s=class extends n.Component{"constructor"(t){super(t),this.setComponentElRef=t=>{this.componentEl=t}}"componentDidMount"(){this.componentDidUpdate(this.props)}"componentDidUpdate"(t){attachProps(this.componentEl,this.props,t)}"render"(){const e=this.props,{"children":r,"forwardedRef":i,"className":s,"ref":a,"style":c}=e,l=function __rest(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]])}return o}(e,["children","forwardedRef","className","ref","style"]);let u=Object.keys(l).reduce(((t,e)=>{const o=l[e];if(0===e.indexOf("on")&&e[2]===e[2].toUpperCase()){e.substring(2).toLowerCase();0}else{["string","boolean","number"].includes(typeof o)&&(t[camelToDashCase(e)]=o)}return t}),{});o&&(u=o(this.props,u));const f=Object.assign(Object.assign({},u),{"ref":mergeRefs(i,this.setComponentElRef)});return(0,n.createElement)(t,f,r)}static get"displayName"(){return i}};return e&&(s.contextType=e),((t,e)=>{const forwardRef=(e,o)=>n.createElement(t,Object.assign({},e,{"forwardedRef":o}));return forwardRef.displayName=e,n.forwardRef(forwardRef)})(s,i)},u=createComponent_createReactComponent("taro-image-core",void 0,helper_manipulatePropsFunction,a),f=createComponent_createReactComponent("taro-view-core",void 0,helper_manipulatePropsFunction,l)},"9179":function(t,e,o){o.r(e),o.d(e,{"default":function(){return Index}});var n=o(7729),r=o(8245),i=o(3983),s=o(8843),a=o(7612),c=o(2322);function CompListItem(t){var e=t.title,o=t.link;return(0,c.jsxs)(r.G7,{"className":"comp-list-item","onClick":function toLink(){(0,i.T8)({"url":o})},"children":[(0,c.jsx)(r.G7,{"children":e}),(0,c.jsx)(r.G7,{"children":(0,c.jsx)(n.Z,{"name":"arrow","color":"#999"})})]})}function Index(){return s.ZP.useLoad((function(){console.log("Page loaded.")})),(0,c.jsxs)(r.G7,{"className":"index","children":[(0,c.jsxs)(r.G7,{"className":"info","children":[(0,c.jsx)(r.G7,{"className":"title","children":"@antm-business/ui"}),(0,c.jsx)(r.G7,{"className":"content","children":"基于@antmjs/vantui开发的业务组件库"})]}),(0,c.jsx)(r.G7,{"className":"comp-list","children":a.L.map((function(t){return(0,c.jsx)(CompListItem,{"title":t.title,"link":t.link})}))})]})}},"1837":function(t,e,o){var n=o(2784),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(t,e,o){var n,i={},l=null,u=null;for(n in void 0!==o&&(l=""+o),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(u=e.ref),e)s.call(e,n)&&!c.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===i[n]&&(i[n]=e[n]);return{"$$typeof":r,"type":t,"key":l,"ref":u,"props":i,"_owner":a.current}}e.Fragment=i,e.jsx=q,e.jsxs=q},"2322":function(t,e,o){t.exports=o(1837)},"7646":function(t,e,o){function _define_property(t,e,o){return e in t?Object.defineProperty(t,e,{"value":o,"enumerable":!0,"configurable":!0,"writable":!0}):t[e]=o,t}function _object_spread(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable})))),n.forEach((function(e){_define_property(t,e,o[e])}))}return t}o.d(e,{"_":function(){return _object_spread}})},"6692":function(t,e,o){function _object_spread_props(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function ownKeys(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})),t}o.d(e,{"_":function(){return _object_spread_props}})},"3184":function(t,e,o){function _object_without_properties(t,e){if(null==t)return{};var o,n,r=function _object_without_properties_loose(t,e){if(null==t)return{};var o,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}o.d(e,{"_":function(){return _object_without_properties}})},"7612":function(t){t.exports=JSON.parse('{"L":[{"title":"HomeSkeleton 标签组","link":"pages/tag-list/index","componentName":"TagList","md":"tag-list/README.md"},{"title":"HomeSkeleton 首页骨架屏","link":"pages/home-skeleton/index","componentName":"HomeSkeleton","md":"home-skeleton/README.md"}]}')}}]);