!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=["checkReply","zoom","uploadImg","checkConversation","signin","notificationsPopup","notificationsIconShowNum"];t.keys=r=r.map(e=>"cfg_"+e),t.options=["回复通知增强","主题贴图片点击放大","主题贴发图","对话详情","自动签到","新消息提醒（弹窗模式）","新消息提醒（图标提醒）"],t.keys=r,t.getSettingsAsync=function(){return new Promise(e=>{chrome.storage.sync.get(r,function(t){r.forEach(e=>{t[e]=!(void 0!==t[e]&&!t[e])}),e(t)})})}},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o),a=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(a).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# "+("sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e)))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=h[r.id];if(o){o.refs++;for(a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(l(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(l(r.parts[a],t));h[r.id]={id:r.id,refs:1,parts:i}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function i(e,t){var n=m(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=m(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",u(t,e.attrs),i(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",u(t,e.attrs),i(e,t),t}function u(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function l(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var u=y++;n=g||(g=s(t)),r=f.bind(null,n,u,!1),o=f.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=p.bind(null,n,t),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=d.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=L(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},v=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),m=function(e){var t={};return function(n){if(void 0===t[n]){var r=e.call(this,n);if(r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[n]=r}return t[n]}}(function(e){return document.querySelector(e)}),g=null,y=0,b=[],w=n(3);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=v()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a];(c=h[s.id]).refs--,i.push(c)}e&&r(o(e,t),t);for(a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete h[c.id]}}}};var L=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},,,,,function(e,t,n){"use strict";n(9);var r=n(0);!async function(){if(!(await(0,r.getSettingsAsync)()).cfg_uploadImg)return;document.getElementById("content_remaining").parentNode.insertAdjacentHTML("beforeend",'\n        <i class="fa fa-file-image-o" aria-hidden="true" id="uploadTriggerBtn"> 上传图片</i>\n        <input type="file" id="uploadImgBtn" />\n      ');const e=document.getElementById("uploadTriggerBtn"),t=document.getElementById("uploadImgBtn");e.addEventListener("click",()=>{t.click()}),t.addEventListener("change",function(){if(!this.files[0].type.includes("image"))return void alert("请上传正确的图片格式文件 😄");if(0===this.files.length)return;e.classList.add("not-allow"),e.innerHTML=" 图片上传中...";let t=new FileReader;t.onload=(()=>{let n=t.result.split(",")[1];chrome.runtime.sendMessage({method:"uploadImgInTopic",dataURL:n},function(t){if(1===t.status)return alert("请先登录微博 😄"),window.open("https://weibo.com/"),void location.reload();e.classList.remove("not-allow"),e.innerHTML=" 上传图片";var n=document.createElement("script");n.innerHTML=`\n          var originVal = editor.getValue()\n          editor.setValue(\n            \`\${originVal}![](${t.imgUrl})\n\n\`\n          )\n        `,document.body.appendChild(n),document.body.removeChild(n)})}),t.readAsDataURL(this.files[0])})}()},function(e,t,n){var r=n(10);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0;n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(1)(void 0)).push([e.i,'@charset "UTF-8";\n/* www.v2ex.com/new */\n/* 发帖添加图片 */\n#uploadImgBtn {\n  float: right;\n  display: none; }\n\n#uploadTriggerBtn {\n  padding-left: 10px; }\n  #uploadTriggerBtn:hover {\n    cursor: pointer;\n    opacity: .7; }\n\n.not-allow {\n  pointer-events: none; }\n',""])}]);