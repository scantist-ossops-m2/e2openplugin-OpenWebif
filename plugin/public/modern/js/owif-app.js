!function(){"use strict";var e,t={8789:function(e,t,n){n(5666),n(1930)},1930:function(e,t,n){function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){a(i,r,o,c,u,"next",e)}function u(e){a(i,r,o,c,u,"throw",e)}c(void 0)}))}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n(5666),n(4603),n(4916),n(9714),n(3157),n(6699),n(2023),n(1539),n(8674),n(9600),n(4723),n(1249),n(2222),n(3123),n(5306),n(4747),n(9601),n(7941),n(2526),n(7327),n(5003),n(9337);var l=function(e){console.info("%cOWIF","color: #fff; font-weight: bold; background-color: #333; padding: 2px 4px 1px; border-radius: 2px;",e)},p=function(){function e(){c(this,e),f(this,"debugLog",(function(){var e;return(e=console).debug.apply(e,arguments)})),f(this,"regexDateFormat",new RegExp(/\d{4}-\d{2}-\d{2}/)),f(this,"toUnixDate",(function(e){return Date.parse("".concat(e,"Z"))/1e3})),f(this,"isBouquet",(function(e){return!e.startsWith("1:134:1")&&e.includes("FROM BOUQUET")})),f(this,"fetchData",function(){var e=i(regeneratorRuntime.mark((function e(t){var n,r,a,i,c,u=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:o({method:"get"},{}),e.prev=1,e.next=4,fetch(t,n);case 4:if(!(r=e.sent).ok){e.next=21;break}if(a=r.headers.get("content-type"),self.debugLog(a),!a||!a.includes("application/json")){e.next=15;break}return e.next=11,r.json();case 11:return i=e.sent,e.abrupt("return",i);case 15:return e.next=17,r.text();case 17:return c=e.sent,e.abrupt("return",xml2json(c));case 19:e.next=22;break;case 21:throw new Error(r.statusText||r.status);case 22:e.next=27;break;case 24:throw e.prev=24,e.t0=e.catch(1),new Error(e.t0);case 27:case 28:case"end":return e.stop()}}),e,null,[[1,24]])})));return function(t){return e.apply(this,arguments)}}()),self=this}return s(e,[{key:"getStrftime",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=new Date(1e3*Math.round(e)),n=strftime("%X",t);return n=n.match(/\d{2}:\d{2}|[^:\d]+/g).join(" "),strftime("%a %x",t)+" "+n}},{key:"getToTimeText",value:function(e,t){var n=t-e,r=Math.floor(n/864e5),o=new Date(1e3*Math.round(e)).getDay(),a=new Date(1e3*Math.round(t)).getDay(),i="";if(0===n)i="-";else{var c=strftime("%X",new Date(1e3*Math.round(t)));c=c.match(/\d{2}:\d{2}|[^:\d]+/g).join(" "),i=r<1&&a-o==0?"same day - "+c:r<2&&a-o==1?"next day - "+c:this.getStrftime(t)}return i}}]),e}(),h=function e(){c(this,e)},d=function(){function e(){c(this,e)}var t,n,r;return s(e,[{key:"getStatusInfo",value:(r=i(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/statusinfo");case 2:if((t=e.sent).ok){e.next=7;break}throw new Error("HTTP error! status: ".concat(t.status));case 7:return e.next=9,t.json();case 9:return n=e.sent,e.next=12,n;case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)})},{key:"getTags",value:(n=i(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/gettags");case 2:if((t=e.sent).ok){e.next=7;break}throw new Error("HTTP error! status: ".concat(t.status));case 7:return e.next=9,t.json();case 9:return n=e.sent,e.next=12,n.tags;case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})},{key:"getAllServices",value:(t=i(regeneratorRuntime.mark((function e(t,n){var r,o,a,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=1==t?"&noiptv=1":"",e.next=3,fetch("/api/getallservices?nolastscanned=1"+r);case 3:if((o=e.sent).ok){e.next=8;break}throw new Error("HTTP error! status: ".concat(o.status));case 8:return e.next=10,o.json();case 10:return a=e.sent,i=[],c=a.services.map((function(e){var t=e.subservices.map((function(t){var r=t.servicename,o=t.servicereference,a=o.indexOf("1:64:")>-1;if(n){var i=o.lastIndexOf("::");i>0&&(o=o.substring(0,i-1))}return{name:r,sRef:o,bouquetName:e.servicename,extendedName:r+"<small>"+e.servicename+"</small>",disabled:a}}));return i=i.concat(t),{name:e.servicename,sRef:e.servicereference,channels:t}})),e.next=15,{channels:i,bouquets:c};case 15:return e.abrupt("return",e.sent);case 16:case"end":return e.stop()}}),e)}))),function(e,n){return t.apply(this,arguments)})}]),e}(),v=function(){function e(){c(this,e),f(this,"choicesConfig",{removeItemButton:!0,duplicateItemsAllowed:!1,resetScrollPosition:!1,shouldSort:!1,searchResultLimit:100,placeholder:!0,itemSelectText:""}),this.initEventHandlers()}return s(e,[{key:"initEventHandlers",value:function(){var e=this,t=new RegExp(/#\/?(.*)\??(.*)/gi);window.onhashchange=function(e){var n=e.target.location.hash.replace("#/","#").split("/")[0],r=n.replace(t,"/ajax/$1");n&&load_maincontent_spin(r)},document.querySelectorAll('input[name="skinpref"]').forEach((function(t){t.onchange=function(){e.skinPref=event.target.value}}))}},{key:"fullscreen",value:function(e,t){!0===e?screenfull.request(t).then((function(){l("GUI:fullscreen activated")})):!1===e?screenfull.exit().then((function(){l("GUI:fullscreen deactivated")})):screenfull.toggle(t).then((function(){l("GUI:fullscreen toggled")}))}},{key:"skinPref",get:function(){return document.body.dataset.skinpref||""},set:function(e){var t="skin--",n=this.skinPref;fetch("/api/setskincolor?skincolor=".concat(e)),document.body.classList.replace("".concat(t).concat(n),"".concat(t).concat(e)),document.body.dataset.skinpref=e}},{key:"preparedChoices",value:function(){var e=this,t={},n="data-choices-select";return document.querySelectorAll("[".concat(n,"]")).forEach((function(r){var o=r.dataset.choicesConfig||"{}";o=o?JSON.parse(o):{},o=Object.assign({},e.choicesConfig,o),t[r.getAttribute("".concat(n))]=new Choices(r,o)})),t}}]),e}();window.owif=new function e(){c(this,e),this.utils=new p,this.stb=new h,this.api=new d,this.gui=new v}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=function(t,n,o,a){if(!n){var i=1/0;for(f=0;f<e.length;f++){n=e[f][0],o=e[f][1],a=e[f][2];for(var c=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[n,o,a]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={598:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,i=n[0],c=n[1],u=n[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(u)var f=u(r)}for(t&&t(n);s<i.length;s++)a=i[s],r.o(e,a)&&e[a]&&e[a][0](),e[i[s]]=0;return r.O(f)},n=self.webpackChunkopenwebif_modern_assets=self.webpackChunkopenwebif_modern_assets||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[216],(function(){return r(8789)}));o=r.O(o)}();