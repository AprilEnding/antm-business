/*! For license information please see 984.js.LICENSE.txt */
(self.webpackJsonp=self.webpackJsonp||[]).push([[984],{"7729":function(e,t,n){"use strict";n.d(t,{"J":function(){return Icon},"Z":function(){return d}});var o=n(7646),r=n(6692),i=n(3184),s=n(2322),a=n(8245),c=n(7859);function Info(e){const{"dot":t,"info":n=null,"style":l,"className":u}=e,d=(0,i._)(e,["dot","info","style","className"]);return(0,s.jsx)(s.Fragment,{"children":(n||0===n||t)&&(0,s.jsx)(a.G7,(0,r._)((0,o._)({"className":"van-info "+c.PH("info",{"dot":t})+"  "+u,"style":c.oB([l])},d),{"children":t?"":n}))})}var l=n(4474),u=n(8843);function addUnit(e){if(null!=e)return/^-?\d+(\.\d+)?$/.test(""+e)?(0,u.uk)(e):e}function isImage(e){return-1!==e.indexOf("/")}function rootClass(e){const t=[];if(e.classPrefix&&t.push(e.classPrefix),isImage(e.name))t.push("van-icon--image");else{const n=e.classPrefix?`${e.classPrefix}-${e.name}`:e.name;t.push(n)}return t.join(" ")}function rootStyle(e){return(0,l.o)([{"color":e.color,"font-size":addUnit(e.size)}])}function Icon(e){const{"classPrefix":t="van-icon","name":n,"color":l,"size":u,"dot":d,"info":h,"style":m,"className":f}=e,p=(0,i._)(e,["classPrefix","name","color","size","dot","info","style","className"]);return(0,s.jsxs)(a.G7,(0,r._)((0,o._)({"className":rootClass({"classPrefix":t,"name":n})+` ${f||""}`,"style":c.oB([rootStyle({"color":l,"size":u}),m])},p),{"children":[(h||0===h||d)&&(0,s.jsx)(Info,{"dot":d,"info":h,"className":"van-icon__info"}),isImage(n)&&(0,s.jsx)(a.Ee,{"src":n,"mode":"aspectFit","className":"van-icon__image"})]}))}var d=Icon},"3294":function(e,t,n){"use strict";function isArray(e){return e&&"[object Array]"===toString.call(e)}n.d(t,{"k":function(){return isArray}})},"579":function(e,t,n){"use strict";n.d(t,{"X":function(){return keys}});const o=new RegExp('{|}|"',"g");function keys(e){return JSON.stringify(e).replace(o,"").split(",").map((function(e){return e.split(":")[0]}))}},"4474":function(e,t,n){"use strict";n.d(t,{"o":function(){return style}});var o=n(3294),r=n(579);function style(e){return o.k(e)?e.filter((function(e){return null!=e&&""!==e})).map((function(e){return style(e)})).join(";")||"":"[object Object]"===toString.call(e)?r.X(e).filter((function(t){return null!=e[t]&&""!==e[t]})).map((function(t){return[(n=t,null===(o=n.replace(new RegExp("[A-Z]","g"),(function(e){return"-"+e})))||void 0===o?void 0:o.toLowerCase()),[e[t]]].join(":");var n,o})).join(";")||"":e||""}},"7859":function(e,t,n){"use strict";n.d(t,{"PH":function(){return a},"oB":function(){return s.o}});var o=n(3294),r=n(579);const i="van-";function traversing(e,t){t&&("string"==typeof t||"number"==typeof t?e.push(t):o.k(t)?t.forEach((function(t){traversing(e,t)})):"object"==typeof t&&r.X(t).forEach((function(n){t[n]&&e.push(n)})))}var s=n(4474);const a=function memoize(e){var t={};return function(){var n=function serializer(e){if(1===e.length&&function isPrimitive(e){var t=typeof e;return"boolean"===t||"number"===t||"string"===t||"undefined"===t||null===e}(e[0]))return e[0];for(var t={},n=0;n<e.length;n++)t["key"+n]=e[n];return JSON.stringify(t)}(arguments);return void 0===t[n]&&(t[n]=function call(e,t){return 2===t.length?e(t[0],t[1]):1===t.length?e(t[0]):e()}(e,arguments)),t[n]}}((function _bem(e,t){const n=[];return traversing(n,t),function join(e,t){return e=i+e,(t=t.map((function(t){return e+"--"+t}))).unshift(e),t.join(" ")}(e,n)}))},"8245":function(e,t,n){"use strict";n.d(t,{"Ee":function(){return u},"G7":function(){return d}});var o=n(2784);const helper_manipulatePropsFunction=(e,t={})=>{const{"dangerouslySetInnerHTML":n,"style":o}=e;return"string"!=typeof o&&(t.style=o),Object.assign(Object.assign({},t),{"dangerouslySetInnerHTML":n})};var r=n(21),i=n(5511);n.e(447).then(n.t.bind(n,8447,23));const s=(0,r.GH)(class extends r.mv{"constructor"(){super(),this.__registerHost(),this.onLoad=(0,r.yM)(this,"load",7),this.onError=(0,r.yM)(this,"error",7),this.src=void 0,this.mode="scaleToFill",this.lazyLoad=!1,this.nativeProps={},this.aspectFillMode="width"}"componentDidLoad"(){if(!this.lazyLoad)return;const e=new IntersectionObserver((t=>{t[t.length-1].isIntersecting&&(e.unobserve(this.imgRef),this.imgRef.src=this.src)}),{"rootMargin":"300px 0px"});e.observe(this.imgRef)}"imageOnLoad"(){const{"width":e,"height":t,"naturalWidth":n,"naturalHeight":o}=this.imgRef;this.onLoad.emit({"width":e,"height":t}),this.aspectFillMode=n>o?"width":"height"}"imageOnError"(e){this.onError.emit(e)}"render"(){const{"src":e,"mode":t="scaleToFill","lazyLoad":n=!1,"aspectFillMode":o="width","imageOnLoad":s,"imageOnError":a,"nativeProps":c}=this,l=(0,i.c)({"taro-img__widthfix":"widthFix"===t}),u=(0,i.c)(`taro-img__mode-${t.toLowerCase().replace(/\s/g,"")}`,{[`taro-img__mode-aspectfill--${o}`]:"aspectFill"===t});return(0,r.h)(r.AA,{"class":l},n?(0,r.h)("img",Object.assign({"ref":e=>this.imgRef=e,"class":u,"onLoad":s.bind(this),"onError":a.bind(this)},c)):(0,r.h)("img",Object.assign({"ref":e=>this.imgRef=e,"class":u,"src":e,"onLoad":s.bind(this),"onError":a.bind(this)},c)))}static get"style"(){return'img[src=""]{opacity:0}taro-image-core{display:inline-block;overflow:hidden;position:relative;width:auto;height:auto;font-size:0}.taro-img.taro-img__widthfix{height:100%}.taro-img__mode-scaletofill{width:100%;height:100%}.taro-img__mode-aspectfit{max-width:100%;max-height:100%}.taro-img__mode-aspectfill{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.taro-img__mode-aspectfill--width{min-width:100%;height:100%}.taro-img__mode-aspectfill--height{width:100%;min-height:100%}.taro-img__mode-widthfix{width:100%}.taro-img__mode-heightfix{height:100%}.taro-img__mode-top{width:100%}.taro-img__mode-bottom{position:absolute;bottom:0;width:100%}.taro-img__mode-left{height:100%}.taro-img__mode-right{position:absolute;right:0;height:100%}.taro-img__mode-topright{position:absolute;right:0}.taro-img__mode-bottomleft{position:absolute;bottom:0}.taro-img__mode-bottomright{position:absolute;right:0;bottom:0}'}},[0,"taro-image-core",{"src":[1],"mode":[1],"lazyLoad":[4,"lazy-load"],"nativeProps":[16],"aspectFillMode":[32]}]);const a=function defineCustomElement$1(){if("undefined"==typeof customElements)return;["taro-image-core"].forEach((e=>{if("taro-image-core"===e)customElements.get(e)||customElements.define(e,s)}))},c=(0,r.GH)(class extends r.mv{"constructor"(){super(),this.__registerHost(),this.onLongPress=(0,r.yM)(this,"longpress",7),this.startTime=0,this.animation=void 0,this.hoverClass=void 0,this.hoverStartTime=50,this.hoverStayTime=400,this.hover=!1,this.touch=!1}"onTouchStart"(){this.hoverClass&&(this.touch=!0,setTimeout((()=>{this.touch&&(this.hover=!0)}),this.hoverStartTime)),this.timeoutEvent=setTimeout((()=>{this.onLongPress.emit()}),350),this.startTime=Date.now()}"onTouchMove"(){clearTimeout(this.timeoutEvent)}"onTouchEnd"(){Date.now()-this.startTime<350&&clearTimeout(this.timeoutEvent),this.hoverClass&&(this.touch=!1,setTimeout((()=>{this.touch||(this.hover=!1)}),this.hoverStayTime))}"componentDidRender"(){this.el.childNodes.forEach((e=>{e.nodeType===document.COMMENT_NODE&&e["s-cn"]&&(e["s-cn"]=!1),e.nodeType!==document.COMMENT_NODE&&e["s-sr"]&&(e["s-sr"]=!1)}))}"render"(){const e=(0,i.c)({[`${this.hoverClass}`]:this.hover});let t={};return this.animation&&(t.animation=this.animation,t["data-animation"]=this.animation),(0,r.h)(r.AA,Object.assign({"class":e},t),(0,r.h)("slot",null))}get"el"(){return this}static get"style"(){return"body,html{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}taro-view-core{display:block}"}},[4,"taro-view-core",{"animation":[1],"hoverClass":[1,"hover-class"],"hoverStartTime":[2,"hover-start-time"],"hoverStayTime":[2,"hover-stay-time"],"hover":[32],"touch":[32]},[[1,"touchstart","onTouchStart"],[1,"touchmove","onTouchMove"],[1,"touchend","onTouchEnd"]]]);const l=function taro_view_core_defineCustomElement$1(){if("undefined"==typeof customElements)return;["taro-view-core"].forEach((e=>{if("taro-view-core"===e)customElements.get(e)||customElements.define(e,c)}))};Object.create;Object.create;const mergeRefs=(...e)=>t=>{e.forEach((e=>{((e,t)=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})(e,t)}))},camelToDashCase=e=>e.replace(/([A-Z])/g,(e=>`-${e[0].toLowerCase()}`)),arrayToMap=e=>{const t=new Map;return e.forEach((e=>t.set(e,e))),t},syncEvent=(e,t,n)=>{const o=e.__events||(e.__events={}),r=o[t];r&&e.removeEventListener(t,r),e.addEventListener(t,o[t]=function handler(e){n&&n.call(this,e)})},attachProps=(e,t,n={})=>{if(e instanceof Element){const o=((e,t,n)=>{const o=t.className||t.class,r=n.className||n.class,i=arrayToMap(e),s=arrayToMap(o?o.split(" "):[]),a=arrayToMap(r?r.split(" "):[]),c=[];return i.forEach((e=>{s.has(e)?(c.push(e),s.delete(e)):a.has(e)||c.push(e)})),s.forEach((e=>c.push(e))),c.join(" ")})(e.classList,t,n);""!==o&&(e.className=o),Object.keys(t).forEach((n=>{if(!("style"===n&&"string"!=typeof t[n]||["children","ref","class","className","forwardedRef"].includes(n)))if(0===n.indexOf("on")&&n[2]===n[2].toUpperCase()){const o=n.substring(2).toLowerCase();syncEvent(e,o,t[n])}else{e[n]=t[n];"string"===typeof t[n]&&e.setAttribute(camelToDashCase(n),t[n])}}))}},createComponent_createReactComponent=(e,t,n,r)=>{void 0!==r&&r();const i=e.toLowerCase().split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join("");const s=class extends o.Component{"constructor"(e){super(e),this.setComponentElRef=e=>{this.componentEl=e}}"componentDidMount"(){this.componentDidUpdate(this.props)}"componentDidUpdate"(e){attachProps(this.componentEl,this.props,e)}"render"(){const t=this.props,{"children":r,"forwardedRef":i,"className":s,"ref":a,"style":c}=t,l=function __rest(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(t,["children","forwardedRef","className","ref","style"]);let u=Object.keys(l).reduce(((e,t)=>{const n=l[t];if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){t.substring(2).toLowerCase();0}else{["string","boolean","number"].includes(typeof n)&&(e[camelToDashCase(t)]=n)}return e}),{});n&&(u=n(this.props,u));const d=Object.assign(Object.assign({},u),{"ref":mergeRefs(i,this.setComponentElRef)});return(0,o.createElement)(e,d,r)}static get"displayName"(){return i}};return t&&(s.contextType=t),((e,t)=>{const forwardRef=(t,n)=>o.createElement(e,Object.assign({},t,{"forwardedRef":n}));return forwardRef.displayName=t,o.forwardRef(forwardRef)})(s,i)},u=createComponent_createReactComponent("taro-image-core",void 0,helper_manipulatePropsFunction,a),d=createComponent_createReactComponent("taro-view-core",void 0,helper_manipulatePropsFunction,l)},"5838":function(e,t,n){"use strict";n.d(t,{"Z":function(){return ComponentPageMain}});var o=n(6234),r=n(2784),i=n(5196),s=n(8245),a=n(7646),c=n(6692),l=n(3184),u=n(2322),d=n(7859),h=n(1341),m=n(6157),f=((0,m.tA)("openSystemBluetoothSetting"),(0,m.tA)("openAppAuthorizeSetting"),function getSystemInfoSync(){var e=function getWindowInfo(){return{"pixelRatio":window.devicePixelRatio,"screenWidth":window.screen.width,"screenHeight":window.screen.height,"windowWidth":document.documentElement.clientWidth,"windowHeight":document.documentElement.clientHeight,"statusBarHeight":NaN,"safeArea":{"bottom":0,"height":0,"left":0,"right":0,"top":0,"width":0}}}(),t=function getSystemSetting(){return{"bluetoothEnabled":!1,"locationEnabled":!1,"wifiEnabled":!1,"deviceOrientation":window.screen.width>=window.screen.height?"landscape":"portrait"}}(),n=function getDeviceInfo(){var e=(0,h.GT)();return{"abi":"","deviceAbi":"","benchmarkLevel":-1,"brand":e.mobile()||"","model":e.mobile()||"","system":e.os(),"platform":navigator.platform,"CPUType":""}}(),o=function getAppBaseInfo(){var e,t=!1;return(null===(e=window.matchMedia)||void 0===e?void 0:e.call(window,"(prefers-color-scheme: dark)").matches)&&(t=!0),{"SDKVersion":"","enableDebug":!1,"language":navigator.language,"version":"","theme":t?"dark":"light"}}(),r={"albumAuthorized":"not determined","bluetoothAuthorized":"not determined","cameraAuthorized":"not determined","locationAuthorized":"not determined","locationReducedAccuracy":!1,"microphoneAuthorized":"not determined","notificationAuthorized":"not determined","notificationAlertAuthorized":"not determined","notificationBadgeAuthorized":"not determined","notificationSoundAuthorized":"not determined","phoneCalendarAuthorized":"not determined"};return delete n.abi,Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},e),t),n),o),{"fontSizeSetting":NaN,"albumAuthorized":"authorized"===r.albumAuthorized,"cameraAuthorized":"authorized"===r.cameraAuthorized,"locationAuthorized":"authorized"===r.locationAuthorized,"microphoneAuthorized":"authorized"===r.microphoneAuthorized,"notificationAuthorized":"authorized"===r.notificationAuthorized,"notificationAlertAuthorized":"authorized"===r.notificationAlertAuthorized,"notificationBadgeAuthorized":"authorized"===r.notificationBadgeAuthorized,"notificationSoundAuthorized":"authorized"===r.notificationSoundAuthorized,"phoneCalendarAuthorized":"authorized"===r.phoneCalendarAuthorized,"locationReducedAccuracy":r.locationReducedAccuracy,"environment":""})});n(3493);let p;var g=n(7729),v=n(4474);function barStyle(e){const t={"padding-top":e.safeAreaInsetTop?e.statusBarHeight+"px":0,"height":e.height+"px"};return e.zIndex&&(t["z-index"]=e.zIndex),(0,v.o)(t)}var y=function NavBar(e){const{"fixed":t,"placeholder":n,"border":o=!0,"zIndex":i,"safeAreaInsetTop":h=!0,"leftArrow":m,"leftText":v,"title":y,"rightText":_,"renderTitle":b,"renderLeft":w,"renderRight":x,"onClickLeft":j,"onClickRight":O,"style":E,"className":A}=e,k=(0,l._)(e,["fixed","placeholder","border","zIndex","safeAreaInsetTop","leftArrow","leftText","title","rightText","renderTitle","renderLeft","renderRight","onClickLeft","onClickRight","style","className"]),N=(0,r.useMemo)((()=>{const{"statusBarHeight":e}=function utils_getSystemInfoSync(){return null==p&&(p=f()),p}();return isNaN(e)?22:e}),[]),z=(0,r.useMemo)((()=>d.oB([barStyle({"zIndex":i,"statusBarHeight":N,"safeAreaInsetTop":h,"height":50})+"; "+E])),[i,N,h,E]);return(0,u.jsxs)(u.Fragment,{"children":[t&&n&&(0,u.jsx)(s.G7,{"style":z}),(0,u.jsx)(s.G7,(0,c._)((0,a._)({"className":d.PH("nav-bar",{"fixed":t})+"  "+(o?"van-hairline--bottom":"")+` ${A||""}`,"style":z},k),{"children":(0,u.jsxs)(s.G7,{"className":"van-nav-bar__content","children":[(0,u.jsx)(s.G7,{"className":"van-nav-bar__left","onClick":j,"children":m||v?(0,u.jsxs)(u.Fragment,{"children":[m&&(0,u.jsx)(g.J,{"size":64,"name":"arrow-left","className":"van-nav-bar__arrow"}),v&&(0,u.jsx)(s.G7,{"className":"van-nav-bar__text","hoverClass":"van-nav-bar__text--hover","hoverStayTime":70,"children":v})]}):w}),(0,u.jsx)(s.G7,{"className":"van-nav-bar__title van-nav-bar__title-h5  title-class van-ellipsis","children":y?(0,u.jsx)(u.Fragment,{"children":y}):b}),(0,u.jsx)(s.G7,{"className":"van-nav-bar__right","onClick":O,"children":_?(0,u.jsx)(s.G7,{"className":"van-nav-bar__text","hoverClass":"van-nav-bar__text--hover","hoverStayTime":70,"children":_}):x})]})}))]})},_=n(3983);function ComponentPageNav(e){var t=e.title;return(0,u.jsx)(y,{"title":t,"leftText":"返回","leftArrow":!0,"safeAreaInsetTop":!1,"onClickLeft":function onClickLeft(){return(0,_.n)()}})}var b=JSON.parse('{"L":[{"title":"首页","link":"pages/index/index","isComponent":false},{"title":"标签组","link":"pages/tag-list/index","componentName":"TagList","md":"tag-list/README.md","isComponent":true},{"title":"首页骨架屏","link":"pages/home-skeleton/index","componentName":"HomeSkeleton","md":"home-skeleton/README.md","isComponent":true},{"title":"gg","link":"pages/hhj/index","componentName":"Hhj","md":"hhj/README.md","isComponent":true},{"title":"ff","link":"pages/kll-gh/index","componentName":"KllGh","md":"kll-gh/README.md","isComponent":true},{"title":"fff","link":"pages/kl-hj/index","componentName":"KlHj","md":"kl-hj/README.md","isComponent":true},{"title":"fff","link":"pages/hj-kl/index","componentName":"HjKl","md":"hj-kl/README.md","isComponent":true},{"title":"ff","link":"pages/gh-g/index","componentName":"GhG","md":"gh-g/README.md","isComponent":true}]}');function ComponentPageMain(e){var t=e.children,n=(0,r.useState)(""),a=(0,o.Z)(n,2),c=a[0],l=a[1];return(0,r.useEffect)((function(){var e,t=((0,i.FN)().router||{}).path,n=null===(e=b.L.find((function(e){return null==t?void 0:t.includes(e.link)})))||void 0===e?void 0:e.title;l(n)})),(0,u.jsxs)(s.G7,{"className":"component-page-main","children":[(0,u.jsx)(ComponentPageNav,{"title":c}),(0,u.jsx)(s.G7,{"className":"component-page-main-content","children":t})]})}},"8984":function(e,t,n){"use strict";n.r(t),n.d(t,{"default":function(){return Index}});var o=n(7646),r=n(6692),i=n(3184),s=n(2322),a=n(8843),c=n(2784),l=n(8245),u=n(7859);var d=function Skeleton(e){const[t,n]=(0,c.useState)({"isArray":!1,"rowArray":[]}),{"isArray":d,"rowArray":h}=t,{"row":m=0,"animate":f=!0,"avatar":p,"avatarShape":g="round","avatarSize":v=(0,a.uk)(64),"titleWidth":y="40%","title":_,"rowWidth":b="100%","loading":w=!0,"children":x,"style":j,"className":O}=e,E=(0,i._)(e,["row","animate","avatar","avatarShape","avatarSize","titleWidth","title","rowWidth","loading","children","style","className"]);return(0,c.useEffect)((function(){n((e=>(0,r._)((0,o._)({},e),{"rowArray":Array.from({"length":m})})))}),[m]),(0,c.useEffect)((function(){n((e=>(0,r._)((0,o._)({},e),{"isArray":b instanceof Array})))}),[b]),w?(0,s.jsxs)(l.G7,(0,r._)((0,o._)({"className":" "+u.PH("skeleton",[{"animate":f}])+` ${O||""}`,"style":j},E),{"children":[p&&(0,s.jsx)(l.G7,{"className":"avatar-class "+u.PH("skeleton__avatar",[g]),"style":"width:"+v+";height:"+v}),(0,s.jsxs)(l.G7,{"className":u.PH("skeleton__content"),"children":[_&&(0,s.jsx)(l.G7,{"className":"title-class "+u.PH("skeleton__title"),"style":"width:"+y}),h.map(((e,t)=>(0,s.jsx)(l.G7,{"className":"row-class "+u.PH("skeleton__row"),"style":"width:"+(d?b[t]:b)},t)))]})]})):(0,s.jsx)(l.G7,{"className":u.PH("skeleton__content"),"children":x})},h="antm-home-skeleton";function HomeSkeleton(e){var t=e.loading;return c.createElement(l.G7,{"className":h},c.createElement(d,{"row":1,"className":"swiper-skeleton","loading":t}),c.createElement(d,{"row":1,"className":"card-skeleton","loading":t}))}var m=n(5838);function Index(){return(0,s.jsx)(m.Z,{"children":(0,s.jsx)(HomeSkeleton,{"loading":!0})})}},"9057":function(e){(function(){var t,n,o,r,i,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-i)/1e6},n=process.hrtime,r=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),s=1e9*process.uptime(),i=r-s):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)},"3493":function(e,t,n){for(var o=n(9057),r="undefined"==typeof window?n.g:window,i=["moz","webkit"],s="AnimationFrame",a=r["request"+s],c=r["cancel"+s]||r["cancelRequest"+s],l=0;!a&&l<i.length;l++)a=r[i[l]+"Request"+s],c=r[i[l]+"Cancel"+s]||r[i[l]+"CancelRequest"+s];if(!a||!c){var u=0,d=0,h=[];a=function(e){if(0===h.length){var t=o(),n=Math.max(0,16.666666666666668-(t-u));u=n+t,setTimeout((function(){var e=h.slice(0);h.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return h.push({"handle":++d,"callback":e,"cancelled":!1}),d},c=function(e){for(var t=0;t<h.length;t++)h[t].handle===e&&(h[t].cancelled=!0)}}e.exports=function(e){return a.call(r,e)},e.exports.cancel=function(){c.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=a,e.cancelAnimationFrame=c}},"1837":function(e,t,n){"use strict";var o=n(2784),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,n){var o,i={},l=null,u=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,o)&&!c.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===i[o]&&(i[o]=t[o]);return{"$$typeof":r,"type":e,"key":l,"ref":u,"props":i,"_owner":a.current}}t.Fragment=i,t.jsx=q,t.jsxs=q},"2322":function(e,t,n){"use strict";e.exports=n(1837)},"7646":function(e,t,n){"use strict";function _define_property(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}function _object_spread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){_define_property(e,t,n[t])}))}return e}n.d(t,{"_":function(){return _object_spread}})},"6692":function(e,t,n){"use strict";function _object_spread_props(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}n.d(t,{"_":function(){return _object_spread_props}})},"3184":function(e,t,n){"use strict";function _object_without_properties(e,t){if(null==e)return{};var n,o,r=function _object_without_properties_loose(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{"_":function(){return _object_without_properties}})}}]);