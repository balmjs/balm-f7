!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUI=t():e.BalmUI=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="wUS9")}({kUbF:function(e,t,n){"use strict";(function(e){t.a=function(t){var n=null;"undefined"!==typeof window?n=window.Vue:"undefined"!==typeof e&&(n=e.Vue),n&&n.use(t)}}).call(this,n("yLpj"))},wUS9:function(e,t,n){"use strict";n.r(t);var r=n("kUbF"),o="mdc-ripple-surface--primary",u="mdc-ripple-surface--accent",i=function(){var e=["mdc-ripple-surface"];switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:""){case 1:case"primary":e.push(o);break;case 2:case"secondary":e.push(u)}return e},c={install:function(e){e.prototype.$ripple=i}};Object(r.a)(c),t.default=c},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===typeof window&&(n=window)}e.exports=n}})});