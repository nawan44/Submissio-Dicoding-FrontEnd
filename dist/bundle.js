!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="/",e(e.s=13)}([function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(i=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),a=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([o]).join("\n")}var i,u,c;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var u=0;u<n.length;u++){var c=[].concat(n[u]);r&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),t.push(c))}},t}},function(n,t,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),i=[];function u(n){for(var t=-1,e=0;e<i.length;e++)if(i[e].identifier===n){t=e;break}return t}function c(n,t){for(var e={},r=[],o=0;o<n.length;o++){var a=n[o],c=t.base?a[0]+t.base:a[0],l=e[c]||0,s="".concat(c," ").concat(l);e[c]=l+1;var f=u(s),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:s,updater:h(p,t),references:1}),r.push(s)}return r}function l(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,f=(s=[],function(n,t){return s[n]=t,s.filter(Boolean).join("\n")});function p(n,t,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=f(t,o);else{var a=document.createTextNode(o),i=n.childNodes;i[t]&&n.removeChild(i[t]),i.length?n.insertBefore(a,i[t]):n.appendChild(a)}}function y(n,t,e){var r=e.css,o=e.media,a=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var d=null,b=0;function h(n,t){var e,r,o;if(t.singleton){var a=b++;e=d||(d=l(t)),r=p.bind(null,e,a,!1),o=p.bind(null,e,a,!0)}else e=l(t),r=y.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=c(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var o=u(e[r]);i[o].references--}for(var a=c(n,t),l=0;l<e.length;l++){var s=u(e[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}e=a}}}},function(n,t){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function o(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function a(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function i(n){var t="function"==typeof Map?new Map:void 0;return(i=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return u(n,arguments,s(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,n)})(n)}function u(n,t,e){return(u=c()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&l(o,e.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function l(n,t){return(l=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var f=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&l(n,t)}(y,n);var t,e,i,u,f,p=(t=y,e=c(),function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)});function y(){return r(this,y),p.apply(this,arguments)}return i=y,(u=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='  \n        <nav class="navbar navbar-expand-lg navbar-light bg-light" >\n        <a class="navbar-brand" href="#">Covid -19</a>\n        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n        <div class="collapse navbar-collapse" id="navbarText">\n          <ul class="navbar-nav mr-auto">\n            <li class="nav-item active">\n              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>\n            </li>\n            <li class="nav-item">\n              <a class="nav-link" href="#about-covid">About Covid</a>\n            </li>\n            <li class="nav-item">\n              <a class="nav-link" href="#countries-page">Countries</a>\n            </li>\n          </ul>\n          <span >\n          <a class="nav-link" href="#contact-page">Contact</a>\n          \n          </span>\n        </div>\n      </nav>'}}])&&o(i.prototype,u),f&&o(i,f),y}(i(HTMLElement));customElements.define("app-navbar",f)},function(n,t){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function o(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function a(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function i(n){var t="function"==typeof Map?new Map:void 0;return(i=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return u(n,arguments,s(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,n)})(n)}function u(n,t,e){return(u=c()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&l(o,e.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function l(n,t){return(l=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var f=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&l(n,t)}(y,n);var t,e,i,u,f,p=(t=y,e=c(),function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)});function y(){return r(this,y),p.apply(this,arguments)}return i=y,(u=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML="<h2>@nawan44</h2>"}}])&&o(i.prototype,u),f&&o(i,f),y}(i(HTMLElement));customElements.define("app-footer",f)},function(n,t){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function o(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function a(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function i(n){var t="function"==typeof Map?new Map:void 0;return(i=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return u(n,arguments,s(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,n)})(n)}function u(n,t,e){return(u=c()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&l(o,e.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function l(n,t){return(l=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var f=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&l(n,t)}(y,n);var t,e,i,u,f,p=(t=y,e=c(),function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)});function y(){return r(this,y),p.apply(this,arguments)}return i=y,(u=[{key:"connectedCallback",value:function(){this.innerHTML=' \n\n        \n        <div class="jumbotron jumbotron-fluid">\n        <div class="container">\n          <h1 class="display-4">Coronavirus</h1>\n          <h3>Apa itu coronavirus?</h3>\n                  <p class="lead">\n            Coronavirus adalah suatu kelompok virus yang dapat menyebabkan penyakit pada hewan atau manusia. Beberapa jenis coronavirus diketahui menyebabkan infeksi saluran nafas pada manusia mulai dari batuk pilek hingga yang lebih serius seperti Middle East Respiratory Syndrome (MERS) dan Severe Acute Respiratory Syndrome (SARS). Coronavirus jenis baru yang ditemukan menyebabkan penyakit COVID-19.\n        </p>\n        <br/>\n        <hr width="100%">\n        <br/>\n        <h1 class="display-4">COVID-19</h1>\n        <h3>Apa itu COVID-19?</h3>\n        \n        <p class="lead">\n            COVID-19 adalah penyakit menular yang disebabkan oleh jenis coronavirus yang baru ditemukan.  Virus baru dan penyakit yang disebabkannya ini tidak dikenal sebelum mulainya wabah di Wuhan, Tiongkok, bulan Desember 2019. COVID-19 ini sekarang menjadi sebuah pandemi yang terjadi di banyak negara di seluruh dunia.\n\n        </p>\n        <br/>\n        <hr>\n        <br/>\n        <h1 class="display-4">Gejala COVID-19</h1>\n        <h3>Apa saja gejala COVID-19?\n        </h3>\n        \n        <p class="lead">\n            Gejala-gejala COVID-19 yang paling umum adalah demam, batuk kering, dan rasa lelah. Gejala lainnya yang lebih jarang dan mungkin dialami beberapa pasien meliputi rasa nyeri dan sakit, hidung tersumbat, sakit kepala, konjungtivitis, sakit tenggorokan, diare, kehilangan indera rasa atau penciuman, ruam pada kulit, atau perubahan warna jari tangan atau kaki. Gejala-gejala yang dialami biasanya bersifat ringan dan muncul secara bertahap. Beberapa orang menjadi terinfeksi tetapi hanya memiliki gejala ringan.\n\n            Sebagian besar (sekitar 80%) orang yang terinfeksi berhasil pulih tanpa perlu perawatan khusus. Sekitar 1 dari 5 orang yang terinfeksi COVID-19 menderita sakit parah dan kesulitan bernapas. Orang-orang lanjut usia (lansia) dan orang-orang dengan kondisi medis penyerta seperti tekanan darah tinggi, gangguan jantung dan paru-paru, diabetes, atau kanker memiliki kemungkinan lebih besar mengalami sakit lebih serius. Namun, siapa pun dapat terinfeksi COVID-19 dan mengalami sakit yang serius. Orang dari segala usia yang mengalami demam dan/atau batuk disertai dengan kesulitan bernapas/sesak napas, nyeri/tekanan dada, atau kehilangan kemampuan berbicara atau bergerak harus segera mencari pertolongan medis. Jika memungkinkan, disarankan untuk menghubungi penyedia layanan kesehatan atau fasilitas kesehatan terlebih dahulu, sehingga pasien dapat diarahkan ke fasilitas kesehatan yang tepat.\n        </p>\n        <br/>\n        <hr width="100%">\n        <br/>\n        <h1 class="display-4">Cara Menyebar</h1>\n        <h3>Bagaimana cara COVID-19 menyebar?\n        </h3>\n        \n        <p class="lead">\n            Orang dapat tertular COVID-19 dari orang lain yang terinfeksi virus ini. COVID-19 dapat menyebar terutama dari orang ke orang melalui percikan-percikan dari hidung atau mulut yang keluar saat orang yang terinfeksi COVID-19 batuk, bersin atau berbicara. Percikan-percikan ini relatif berat, perjalanannya tidak jauh dan jatuh ke tanah dengan cepat. Orang dapat terinfeksi COVID-19 jika menghirup percikan orang yang terinfeksi virus ini. Oleh karena itu, penting bagi kita untuk menjaga jarak minimal 1 meter dari orang lain. Percikan-percikan ini dapat menempel di benda dan permukaan lainnya di sekitar orang seperti meja, gagang pintu, dan pegangan tangan. Orang dapat terinfeksi dengan menyentuh benda atau permukaan tersebut, kemudian menyentuh mata, hidung, atau mulut mereka. Inilah sebabnya penting untuk mencuci tangan secara teratur dengan sabun dan air bersih mengalir, atau membersihkannya dengan cairan antiseptik berbahan dasar alkohol. WHO terus mengkaji perkembangan penelitian tentang cara penyebaran COVID-19 dan akan menyampaikan temuan-temuan terbaru.\n\n        </p>\n        <br/>\n           <p>Source : https://www.who.int/</p>\n</div>\n      </div>'}}])&&o(i.prototype,u),f&&o(i,f),y}(i(HTMLElement));customElements.define("about-covid",f)},function(n,t){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function o(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function a(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function i(n){var t="function"==typeof Map?new Map:void 0;return(i=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return u(n,arguments,s(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,n)})(n)}function u(n,t,e){return(u=c()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&l(o,e.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function l(n,t){return(l=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var f=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&l(n,t)}(y,n);var t,e,i,u,f,p=(t=y,e=c(),function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)});function y(){return r(this,y),p.apply(this,arguments)}return i=y,(u=[{key:"connectedCallback",value:function(){this.innerHTML="Page not found!"}}])&&o(i.prototype,u),f&&o(i,f),y}(i(HTMLElement));customElements.define("error-page",f)},function(n,t,e){"use strict";var r=e(0),o=e.n(r)()(!1);o.push([n.i,"app-footer{\n    width: 100%;\n    height:50px;\n    margin: 0;\n    background-color: blue;\n    color: black;\n    text-align: center;\n    bottom:0px;\n    margin-top: 100px;\n    position: relative;\n\n}",""]),t.a=o},function(n,t,e){var r=e(1),o=e(8);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);n.exports=o.locals||{}},function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r)()(!1);o.push([n.i,"#carouselExampleInterval{\n    margin-bottom: 30px;\n    background-color: brown;\n}",""]),t.default=o},function(n,t,e){var r=e(1),o=e(10);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);n.exports=o.locals||{}},function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),a=e(6),i=o()(!1);i.i(a.a),i.push([n.i,'/* @import "appbar.css";\n@import "searchbar.css"; */\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: sans-serif;\n}\n\nmain {\n    width: 90%;\n    max-width: 800px;\n    margin: 32px auto;\n    position: relative;\n}\n#container{\n    min-height:100%;\n    position:relative;\n}\n.navbar navbar-expand-lg navbar-light bg-light{\n    background-color: dodgerblue;\n}\n',""]),t.default=i},function(n,t){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function o(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function a(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function i(n){var t="function"==typeof Map?new Map:void 0;return(i=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return u(n,arguments,s(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,n)})(n)}function u(n,t,e){return(u=c()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&l(o,e.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function l(n,t){return(l=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var f=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&l(n,t)}(y,n);var t,e,i,u,f,p=(t=y,e=c(),function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)});function y(){return r(this,y),p.apply(this,arguments)}return i=y,(u=[{key:"connectedCallback",value:function(){this.innerHTML=' \n        <div class="jumbotron jumbotron-fluid">\n        <div class="container">\n        \n        <h1 class="display-4">WHO Headquarters in Geneva   </h1>\n        <h3>\n        </h3>\n        \n        <p class="lead">\n            Avenue Appia 20 <br />\n            1211 Geneva <br />\n            Telephone: +41-22-7912111<br />\n        </p>\n        <br/>\n           <p>Source : https://www.who.int/</p>\n        </div>\n        </div>\n               '}}])&&o(i.prototype,u),f&&o(i,f),y}(i(HTMLElement));customElements.define("contact-page",f)},function(n,t){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function o(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function a(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function i(n){var t="function"==typeof Map?new Map:void 0;return(i=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return u(n,arguments,s(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,n)})(n)}function u(n,t,e){return(u=c()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&l(o,e.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function l(n,t){return(l=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var f=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&l(n,t)}(y,n);var t,e,i,u,f,p=(t=y,e=c(),function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)});function y(){return r(this,y),p.apply(this,arguments)}return i=y,(u=[{key:"connectedCallback",value:function(){this.innerHTML=" \n        Countries\n               "}}])&&o(i.prototype,u),f&&o(i,f),y}(i(HTMLElement));customElements.define("countries-page",f)},function(n,t,e){"use strict";e.r(t);var r=e.p+"./src/script/component/image/handwash.jpg",o=e.p+"./src/script/component/image/co.jpg",a=e.p+"./src/script/component/image/lockdown.jpg";e(7);function i(n){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function u(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function l(n,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function s(n){var t="function"==typeof Map?new Map:void 0;return(s=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return f(n,arguments,d(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),y(r,n)})(n)}function f(n,t,e){return(f=p()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&y(o,e.prototype),o}).apply(null,arguments)}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function y(n,t){return(y=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function d(n){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var b=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&y(n,t)}(h,n);var t,e,i,s,f,b=(t=h,e=p(),function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)});function h(){return u(this,h),b.apply(this,arguments)}return i=h,(s=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='   \n        <div  class="carousel-slide" data-ride="carousel">\n        <div class="carousel-inner">\n          <div class="carousel-item active" data-interval="10000">\n          <img  src='.concat(r,'\n            class="d-block w-100" alt="..." width="100%" height="400px">\n          </div>\n          <div class="carousel-item" data-interval="2000">\n          <img src=').concat(o,' class="d-block w-100" alt="..." width="100%" height="400px">\n\n          </div>\n          <div class="carousel-item">\n          <img src=').concat(a,' class="d-block w-100" alt="..." width="100%" height="400px">\n          </div>\n        </div>\n        <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">\n          <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n          <span class="sr-only">Previous</span>\n        </a>\n        <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">\n          <span class="carousel-control-next-icon" aria-hidden="true"></span>\n          <span class="sr-only">Next</span>\n        </a>\n        </div>      \n      ')}}])&&c(i.prototype,s),f&&c(i,f),h}(s(HTMLElement));customElements.define("com-carousel",b);e(2),e(3),e(4),e(5),e(9);function h(n){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function m(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function v(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function g(n,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function w(n){var t="function"==typeof Map?new Map:void 0;return(w=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return k(n,arguments,S(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),j(r,n)})(n)}function k(n,t,e){return(k=O()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&j(o,e.prototype),o}).apply(null,arguments)}function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function j(n,t){return(j=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function S(n){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var _=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&j(n,t)}(u,n);var t,e,r,o,a,i=(t=u,e=O(),function(){var n,r=S(t);if(e){var o=S(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)});function u(){return m(this,u),i.apply(this,arguments)}return r=u,(o=[{key:"connectedCallback",value:function(){this.innerHTML=' \n        <table class="table table-striped">\n        <caption>List of users</caption>\n        <thead>\n          <tr>\n            <th scope="col">Country</th>\n            <th scope="col">CountryCode</th>\n            <th scope="col">Date</th>\n            <th scope="col">New Confirmed</th>\n            <th scope="col">New Deaths</th>\n            <th scope="col">New Recovered</th>\n            <th scope="col">Slug</th>\n            <th scope="col">Total Confirmed</th>\n            <th scope="col">Total Deaths</th>\n            <th scope="col">Total Recovered</th>\n          </tr>\n        </thead>\n        <tbody>\n        {\n          this.state.dataCovid.map(data => {\n              return (\n                  <tr>\n                      <td>{data.Country}</td>\n                      <td>{data.CountryCode}</td>\n                      <td>{data.Date}</td>\n                      <td>{data.NewConfirmed}</td>\n                      <td>{data.NewDeaths}</td>\n                      <td>{data.NewRecovered}</td>\n                      <td>{data.Slug}</td>\n                      <td>{data.TotalConfirmed}</td>\n                      <td>{data.TotalDeaths}</td>\n                      <td>{data.TotalRecovered}</td>\n                  </tr>\n              )\n          })\n      }\n        </tbody>\n      </table>\n\n        '}}])&&v(r.prototype,o),a&&v(r,a),u}(w(HTMLElement));customElements.define("home-page",_);e(11),e(12);var x=function(){var n=[{path:"",page:"home-page"},{path:"about-covid",page:"about-covid"},{path:"countries-page",page:"countries-page"},{path:"contact-page",page:"contact-page"}],t=function t(){var e=window.location.hash.substr(1),r=n.find((function(n){return n.path===e}))||{page:"error-page"};document.querySelector("main").innerHTML="",document.querySelector("main").appendChild(document.createElement(r.page)),document.querySelectorAll("contact").forEach((function(n){n.addEventListener("contact",t())}))};window.addEventListener("popstate",t()),window.addEventListener("DOMContentLoaded",t())};document.addEventListener("DOMContentLoaded",x)}]);
