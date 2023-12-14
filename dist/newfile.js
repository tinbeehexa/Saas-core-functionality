(()=>{"use strict";var t={87:(t,e,o)=>{o.d(e,{Z:()=>c});var n=o(919),i=o(384),s=o(555),r=o(123),a=o(214);const c=class{constructor(t,e,o,n){this.config=t,this.keyPopup=e,this.html=o,this.styleCss=n}findKeysWithEnableTrue(t){const e=[];for(const o in t)if("object"==typeof t[o]){const n=this.findKeysWithEnableTrue(t[o]);n.length>0&&e.push(...n.map((t=>`${o}.${t}`)))}else"enable"===o&&!0===t[o]&&e.push(o);return e}splitStringToArray(t){return t.split(".")}filterEnabledElements(t){return t.filter((t=>"enable"!==t))}functionPopupEnabled(){const t=this.findKeysWithEnableTrue(this.config);var e=["positionPopup"];return t.forEach((t=>{let o=this.filterEnabledElements(this.splitStringToArray(t)),n=o.length;n>0&&e.push(o[n-1])})),e}show(){new a.Z("variux-popup",this.html,this.styleCss,this.keyPopup,this.functionPopupEnabled()).innerPopup(),new i.Z(this.config.condition).getStatus()&&this.config.enable&&(new r.Z(this),new n.Z(this),new s.Z(this))}}},687:(t,e,o)=>{o.d(e,{Z:()=>n});const n=class{constructor(t){this.element=t}active(){this.element.classList.add("variux-popup-active"),this.element.style.cssText+=";display:block !important;"}destroy(){this.element.classList.remove("variux-popup-active")}}},544:(t,e,o)=>{var n=o(87),i=o(497);window.thisIsMyConfig.forEach((t=>{if((0,i.Z)(t)&&1==t.enable){const e=document.createElement("div");e.classList.add("variux-popup",t.functionName),e.style.cssText+=";position: absolute;z-index: 1010 !important;",document.body.appendChild(e),new n.Z(t,t.functionName,t.html,t.css).show()}}))},505:(t,e,o)=>{o.d(e,{Z:()=>n});const n=class{constructor(t){this.config=t,this.Conditions=[]}readConfig(t,e,o,n){return e.forEach((e=>{void 0!==t[e]&&1==o[e](t[e],n)&&this.Conditions.pop()})),0==this.Conditions.length}activeConditions(t,e){e.forEach((e=>{1==t[e].enable&&this.Conditions.push(e)}))}}},214:(t,e,o)=>{o.d(e,{Z:()=>n});const n=class{constructor(t,e,o,n,i){this.className=t,this.html=e,this.styleCss=o,this.idPopup=n,this.classList=i}innerPopup(){const t=document.createElement("div");t.innerHTML=this.html,t.style.setProperty("display","none"),t.style.setProperty("background-color","#fff","important");for(let e of this.classList)t.classList.add(e);t.style.setProperty("position","fixed","important");let e=document.createElement("style");document.head.appendChild(e);let o=this.styleCss;e.appendChild(document.createTextNode(o)),document.querySelector(`.${this.idPopup}`).appendChild(t)}}},123:(t,e,o)=>{o.d(e,{Z:()=>s});var n=o(294),i=o(388);const s=class{constructor(t){this.optionAppear=t.config.animations.appear,this.optionDisAppear=t.config.animations.disappear,this.keyPopup=t.keyPopup,this.init()}init(){new n.Z(this),new i.Z(this)}}},294:(t,e,o)=>{o.d(e,{Z:()=>s});var n=o(519),i=o(505);const s=class{constructor(t){this.options=t.optionAppear,this.keyPopup=t.keyPopup,this.init()}isEnableAnimations(){return this.options.enableAnimation}init(){this.isEnableAnimations()&&this.isOpenPopup()}isOpenPopup(){return(new i.Z).readConfig(this.options,["moveFromTop","horizontalMove","zoomIn","fadeIn"],n.Z,this.keyPopup)}}},708:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(t.enable){const o=t.easing,n=document.querySelector(`.${e}`).querySelector(".fadeIn");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&n.classList.contains("variux-popup-active")){const e=[{opacity:0},{opacity:1}],i={duration:t.duration,iterations:1,easing:o};n.animate(e,i)}}))})).observe(n,{attributes:!0})}}},45:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(t.enable){const o=t.easing,n=window.innerWidth,i="left"==t.movingFrom.toLowerCase()?-n*(t.movingLength/100):n*(t.movingLength/100),s=document.querySelector(`.${e}`).querySelector(".horizontalMove");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&s.classList.contains("variux-popup-active")){const e=[{transform:`translateX(${i}px)`,opacity:0},{transform:"translateX(0px)",opacity:1}],n={duration:t.duration,iterations:1,easing:o};s.animate(e,n)}}))})).observe(s,{attributes:!0})}}},960:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(t.enable){const o=t.easing,n=window.innerHeight*(t.movingLength/100),i=document.querySelector(`.${e}`).querySelector(".moveFromTop");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&i.classList.contains("variux-popup-active")){const e=[{transform:`translateY(-${n}px)`,opacity:0},{transform:"translateY(0px)",opacity:1}],s={duration:t.duration,iterations:1,easing:o};i.animate(e,s)}}))})).observe(i,{attributes:!0})}}},501:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(t.enable){const o=t.easing,n=document.querySelector(`.${e}`).querySelector(".zoomIn");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&n.classList.contains("variux-popup-active")){const e=[{transform:`scale(${t.fromPercent/100})`,opacity:0},{transform:"scale(1)",opacity:1}],i={duration:t.duration,iterations:1,easing:o};n.animate(e,i)}}))})).observe(n,{attributes:!0})}}},519:(t,e,o)=>{o.d(e,{Z:()=>a});var n=o(960),i=o(45),s=o(501),r=o(708);const a={moveFromTop:n.Z,horizontalMove:i.Z,zoomIn:s.Z,fadeIn:r.Z}},388:(t,e,o)=>{o.d(e,{Z:()=>s});var n=o(413),i=o(505);const s=class{constructor(t){this.options=t.optionDisAppear,this.keyPopup=t.keyPopup,this.init()}isDisnableAnimations(){return this.options.enableAnimation}init(){this.isDisnableAnimations()&&this.isClosePopup()}isClosePopup(){(new i.Z).readConfig(this.options,["zoomOut","fadeOut","moveToTop","horizontalMove"],n.Z,this.keyPopup)}}},193:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!0===t.enable){const o=t.easing,n=document.querySelector(`.${e}`).querySelector(".fadeOut");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&!n.classList.contains("variux-popup-active")){async function i(){1==await new Promise((e=>{const i={duration:t.duration,iterations:1,easing:o};n.animate([{opacity:1},{opacity:0}],i).onfinish=()=>{e(!0)}}))&&n.style.setProperty("display","none")}n.style.setProperty("display","block","important"),i()}}))})).observe(n,{attributes:!0})}}},967:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!0===t.enable){const o=t.easing,n=window.innerWidth,i="left"==t.movingTo.toLowerCase()?-n*(t.movingLength/100):n*(t.movingLength/100),s=document.querySelector(`.${e}`).querySelector(".horizontalMove");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&!s.classList.contains("variux-popup-active")){async function n(){1==await new Promise((e=>{const n=[{transform:"translateX(0px)",opacity:1},{transform:`translateX(${i}px)`,opacity:0}],r={duration:t.duration,iterations:1,easing:o};s.animate(n,r).onfinish=()=>{e(!0)}}))&&s.style.setProperty("display","none")}s.style.setProperty("display","block","important"),n()}}))})).observe(s,{attributes:!0})}}},996:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!0===t.enable){const o=t.easing,n=window.innerHeight*(t.movingLength/100),i=document.querySelector(`.${e}`).querySelector(".moveToTop");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&!i.classList.contains("variux-popup-active")){async function s(){1==await new Promise((e=>{const s=[{transform:"translateY(0px)",opacity:1},{transform:`translateY(-${n}px)`,opacity:0}],r={duration:t.duration,iterations:1,easing:o};i.animate(s,r).onfinish=()=>{e(!0)}}))&&i.style.setProperty("display","none")}i.style.setProperty("display","block","important"),s()}}))})).observe(i,{attributes:!0})}}},307:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!0===t.enable){const o=t.easing,n=document.querySelector(`.${e}`).querySelector(".zoomOut");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&!n.classList.contains("variux-popup-active")){async function i(){1==await new Promise((e=>{const i={duration:t.duration,iterations:1,easing:o};n.animate([{transform:"scale(1)"},{transform:"scale(0)"}],i).onfinish=()=>{e(!0)}}))&&n.style.setProperty("display","none")}n.style.setProperty("display","block","important"),i()}}))})).observe(n,{attributes:!0})}}},413:(t,e,o)=>{o.d(e,{Z:()=>a});var n=o(307),i=o(193),s=o(996),r=o(967);const a={zoomOut:n.Z,fadeOut:i.Z,moveToTop:s.Z,horizontalMove:r.Z}},919:(t,e,o)=>{o.d(e,{Z:()=>s});var n=o(806),i=o(535);const s=class{constructor(t){this.optionOpen=t.config.behaviors.open,this.optionClose=t.config.behaviors.close,this.keyPopup=t.keyPopup,this.init()}init(){new i.Z(this),new n.Z(this)}}},806:(t,e,o)=>{o.d(e,{Z:()=>s});var n=o(646),i=o(505);const s=class{constructor(t){this.options=t.optionClose,this.keyPopup=t.keyPopup,this.init()}init(){(new i.Z).readConfig(this.options,["closeAfterXSeconds","closeClickButton","closeClickOutside"],n.Z,this.keyPopup)}}},879:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(687);const i=(t,e)=>{if(t.enable){const o=document.querySelector(`.${e} .closeAfterXSeconds`),i=new n.Z(o);let s;new MutationObserver((e=>{e.forEach((e=>{"attributes"===e.type&&"class"===e.attributeName&&(o.classList.contains("variux-popup-active")?s=setTimeout((()=>{i.destroy()}),t.seconds):clearTimeout(s))}))})).observe(o,{attributes:!0})}}},190:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(687);const i=(t,e)=>{if(t.enable){const t=document.querySelector(`.${e}`);t.querySelector(".btnClosePopup").onclick=()=>{const e=t.querySelector(".closeClickButton");new n.Z(e).destroy()}}}},418:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(687);const i=(t,e)=>{if(t.enable){function o(t){if(t.stopPropagation(),t.target!=document.body){let e=t.target.parentElement;for(;e!==document.body;){if(e.classList.contains("closeClickOutside")||e.classList.contains("activePopup"))return e;e=e.parentElement}return null}return!0}let i=document.querySelector(`.${e}`);i=i.children[0],document.addEventListener("click",(t=>{if(i.classList.contains("variux-popup-active"))if(t.target==document.querySelector(".btn"+e));else{if(1==o(t))return;if(null==o(t))return void new n.Z(i).destroy()}}))}}},646:(t,e,o)=>{o.d(e,{Z:()=>r});var n=o(879),i=o(190),s=o(418);const r={closeAfterXSeconds:n.Z,closeClickButton:i.Z,closeClickOutside:s.Z}},535:(t,e,o)=>{o.d(e,{Z:()=>s});var n=o(553),i=o(505);const s=class{constructor(t){this.options=t.optionOpen,this.keyPopup=t.keyPopup,this.init()}init(){return(new i.Z).readConfig(this.options,["scrollToXPercent","visitWebAfterXSeconds","onClickItem","afterViewXPage"],n.Z,this.keyPopup)}}},178:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(687);const i=(t,e)=>{if(t.enable){let t=localStorage.getItem(`${e}`)||0;if(t++,localStorage.setItem(`${e}`,t),e){const t=e.querySelector(".afterViewXPage"),o=new n.Z(t);t&&!t.classList.contains("variux-popup-active")&&o.active()}}}},10:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(687);const i=(t,e)=>{if(t.enable){if(null==document.querySelector(`.btn${e}`))return;document.querySelector(`.btn${e}`).onclick=()=>{const t=document.querySelector(`.${e}`).querySelector(".onClickItem");new n.Z(t).active()}}}},376:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(687);const i=(t,e)=>{t.enable&&window.addEventListener("scroll",(function(){const o=window.scrollY,i=document.body.scrollHeight-window.innerHeight;let s=sessionStorage.getItem(e);if(o>=t.percent/100*i&&null===s){const t=document.querySelector(`.${e}`).querySelector(".scrollToXPercent");new n.Z(t).active(),sessionStorage.setItem(e,1)}}))}},57:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(687);const i=(t,e)=>{if(t.enable){const o=document.querySelector(`.${e}`).querySelector(".visitWebAfterXSeconds"),i=new n.Z(o);setTimeout((()=>{i.active()}),t.seconds)}}},553:(t,e,o)=>{o.d(e,{Z:()=>a});var n=o(376),i=o(57),s=o(10),r=o(178);const a={scrollToXPercent:n.Z,visitWebAfterXSeconds:i.Z,onClickItem:s.Z,afterViewXPage:r.Z}},384:(t,e,o)=>{o.d(e,{Z:()=>s});var n=o(34),i=o(505);const s=class{constructor(t){this.options=t}getStatus(){const t=new i.Z,e=["existCookie"];return t.activeConditions(this.options,e),t.readConfig(this.options,e,n.Z)}}},497:(t,e,o)=>{o.d(e,{Z:()=>n});const n=t=>!!t.enable&&document.body.classList.contains(t.namePopup)},610:(t,e,o)=>{o.d(e,{Z:()=>n});const n=t=>{if(t.enable){const e=t=>{let e=t+"=",o=decodeURIComponent(document.cookie).split(";"),n=o.length;for(let t=0;t<n;t++){let n=o[t];for(;" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(e))return n.substring(e.length,n.length)}return""};return(()=>{let o=t.cookieName;return 1==e(o)})()}return!1}},34:(t,e,o)=>{o.d(e,{Z:()=>s});var n=o(497),i=o(610);const s={existClass:n.Z,existCookie:i.Z}},30:(t,e,o)=>{o.d(e,{Z:()=>n});const n=function(t,e){if(!0===t.enable){let t=!1;const o=document.querySelector(`.${e}`);console.log(o);const n=o.querySelector(".overlayPopup");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName)if(n.classList.contains("variux-popup-active")&&!1===t){let e=document.createElement("div");e.classList.add("variux-popup-overlay"),e.style.cssText+=";display:block !important;position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.4); z-index: 1000;",document.querySelector("body").appendChild(e),t=!0}else if(!n.classList.contains("variux-popup-active")){let e=document.querySelector(".variux-popup-overlay");e&&document.querySelector("body").removeChild(e),t=!1}}))})).observe(n,{attributes:!0})}}},236:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(null!=t.width&&null!=t.height){var o=document.documentElement.clientWidth,n=document.documentElement.clientHeight,i=t.width,s=t.height;o<=360?(i*=.4,s*=.4):o<=480?(i*=.5,s*=.5):o<=640?(i*=.7,s*=.7):o<=768&&(i*=.8,s*=.8);var r=(o-i)/o*100,a=(n-s)/n*100,c=o*(t.x/100)*(r/100),l=n*(t.y/100)*(a/100);let p=document.querySelector(`.${e}`).querySelector(".positionPopup");p.style.setProperty("width",`${i}px`,"important"),p.style.setProperty("height",`${s}px`,"important"),p.style.setProperty("left",`${c}px`,"important"),p.style.setProperty("top",`${l}px`,"important")}}},555:(t,e,o)=>{o.d(e,{Z:()=>s});var n=o(496),i=o(505);const s=class{constructor(t){this.options=t.config.design,this.keyPopup=t.keyPopup,this.init()}init(){(new i.Z).readConfig(this.options,["overlayPopup","positionPopup"],n.Z,this.keyPopup)}}},496:(t,e,o)=>{o.d(e,{Z:()=>s});var n=o(236),i=o(30);const s={positionPopup:n.Z,overlayPopup:i.Z}}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,o),s.exports}o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o(544),o(505),o(87),o(214),o(687),o(708),o(45),o(960),o(501),o(294),o(519),o(193),o(967),o(996),o(307),o(388),o(413),o(123),o(879),o(190),o(418),o(806),o(646),o(178),o(10),o(376),o(57),o(535),o(553),o(919),o(497),o(610),o(384),o(34),o(30),o(236),o(555),o(496)})();