!function(e){function t(o){if(n[o])return n[o].exports;var c=n[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=25)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let o=["checkReply","zoom","uploadImg","checkConversation","signin","notificationsPopup","notificationsIconShowNum"];t.keys=o=o.map(e=>"cfg_"+e),t.options=["回复通知增强","主题贴图片点击放大","主题贴发图","对话详情","自动签到","新消息提醒（弹窗模式）","新消息提醒（图标提醒）"],t.keys=o,t.getSettingsAsync=function(){return new Promise(e=>{chrome.storage.sync.get(o,function(t){o.forEach(e=>{t[e]=!(void 0!==t[e]&&!t[e])}),e(t)})})}},25:function(e,t,n){"use strict";var o=n(0);!async function(){let e=await(0,o.getSettingsAsync)(),t="";o.options.forEach((n,c)=>{let r=o.keys[c],i=!(void 0!==e[r]&&!e[r]);t+=`\n    <div class="item">\n      <span>${n}：</span>\n      <input type="checkbox" key=${r} ${i?"checked":""}>\n    </div>\n    `}),document.querySelector(".container").innerHTML=t,document.querySelector(".container").addEventListener("click",e=>{if("checkbox"!==e.target.type)return;let[t,n]=[e.target.getAttribute("key"),e.target.checked],o={};o[t]=n,chrome.storage.sync.set(o,function(){})},!1)}()}});