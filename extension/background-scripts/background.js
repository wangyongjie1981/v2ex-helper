!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=20)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let o=["checkReply","zoom","uploadImg","checkConversation","signin","notificationsPopup","notificationsIconShowNum"];t.keys=o=o.map(e=>"cfg_"+e),t.options=["回复通知增强","主题贴图片点击放大","主题贴发图","对话详情","自动签到","新消息提醒（弹窗模式）","新消息提醒（图标提醒）"],t.keys=o,t.getSettingsAsync=function(){return new Promise(e=>{chrome.storage.sync.get(o,function(t){o.forEach(e=>{t[e]=!(void 0!==t[e]&&!t[e])}),e(t)})})}},20:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=o(n(21)),c=o(n(22)),i=o(n(23)),s=n(0);chrome.runtime.onMessage.addListener(function(e,t,n){switch(e.method){case"uploadImgInTopic":return(0,c.default)(e,n),!0;case"checkConversationBtn":return(0,r.default)(e,n),!0}}),async function(){let e=await(0,s.getSettingsAsync)();(0,i.default)(e)}()},21:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let{floorOwner:n,replyUser:o,topicId:r}=e,c=[],i="https://www.v2ex.com/api/replies/show.json?topic_id="+r+"&rdm="+ +new Date;fetch(i).then(e=>e.json()).then(e=>{const r=/@<a target="_blank" href="\/member\/.+?">(.+?)<\/a>/g;e.forEach(e=>{let t=e.content_rendered,i=t.match(r),s=e.member.username,a=e.member.avatar_normal;if(i&&i.length>=1){let e,i=[];do{(e=r.exec(t))&&i.push(e[1])}while(null!==e);(s===n&&i.includes(o)||s===o&&i.includes(n))&&c.push({from:s,replyContent:t,avatarsUrl:a})}i||s!==n&&s!==o||c.push({from:s,replyContent:t,avatarsUrl:a})}),t({conversations:c})})}},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=new XMLHttpRequest,o=new FormData;o.append("b64_data",e.dataURL),n.onerror=(()=>{}),n.onload=function(){try{let e=n.responseText.match(/"pid":"(.+)"/)[1];t({status:0,imgUrl:"https://ws2.sinaimg.cn/large/"+e})}catch(e){t({status:1})}},n.open("POST","http://picupload.service.weibo.com/interface/pic_upload.php?    mime=image%2Fjpeg&data=base64&url=0"),n.send(o)}},23:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){chrome.browserAction.onClicked.addListener(()=>{chrome.browserAction.getBadgeText({},t=>{e.cfg_notificationsIconShowNum&&""!==t?(chrome.browserAction.setBadgeText({text:""}),window.open("https://www.v2ex.com/notifications")):window.open("https://www.v2ex.com")})}),(e.cfg_notificationsPopup||e.cfg_notificationsIconShowNum)&&setInterval(()=>{fetch("https://www.v2ex.com/",{credentials:"same-origin"}).then(e=>e.text()).then(t=>{const n=/(\d+) 条未读提醒/.exec(t);n&&"0"!==n[1]&&(e.cfg_notificationsPopup&&chrome.notifications.create(null,{type:"basic",iconUrl:"icons/icon_48.png",title:"from V2EX HELPER's Notification",message:`您有 ${n[1]} 条来自 V2EX 的新消息！`}),e.cfg_notificationsIconShowNum&&(chrome.browserAction.setBadgeText({text:n[1]}),chrome.browserAction.setBadgeBackgroundColor({color:[255,0,0,255]})))})},6e5)}}});