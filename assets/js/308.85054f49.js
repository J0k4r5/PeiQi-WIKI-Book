(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{747:function(t,e,o){},755:function(t,e,o){"use strict";o(747)},758:function(t,e,o){"use strict";o.r(e);var r={name:"ThemeSwitch",data:()=>({isDarkMode:!1}),methods:{getSchemeStorage(t){if("undefined"==typeof localStorage)return;let e=localStorage.getItem(t);return"light"===e||"dark"!==e},setSchemeStorage:t=>!0===t?"dark":"light",switchScheme(){var t;if(this.isDarkMode=!this.isDarkMode,"undefined"==typeof localStorage)return;localStorage.setItem("antdocs-color-scheme",this.setSchemeStorage(this.isDarkMode));const e=null===(t=window)||void 0===t?void 0:t.document.querySelector("html");null==e||e.classList.toggle("dark",this.isDarkMode)}},mounted(){var t;this.isDarkMode=!this.getSchemeStorage("antdocs-color-scheme");const e=null===(t=window)||void 0===t?void 0:t.document.querySelector("html");null==e||e.classList.toggle("dark",this.isDarkMode)}},i=(o(755),o(63)),l=Object(i.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-switch",on:{click:function(e){return t.switchScheme()}}},[e("a-tooltip",{attrs:{placement:"bottom"}},[e("template",{slot:"title"},[e("span",[t._v(t._s(t.isDarkMode?"切换亮色模式":"切换暗黑模式"))])]),t._v(" "),t.isDarkMode?e("a",{staticStyle:{"margin-top":"2px"}},[e("i",{staticClass:"anticon"},[e("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),t._v(" "),e("path",{attrs:{d:"M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-linejoin":"round"}})])])]):e("a",{staticStyle:{"margin-top":"2px"}},[e("i",{staticClass:"anticon"},[e("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 3V6.15V3Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M24 3V6.15",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M38.8492 9.15076L36.6219 11.3781L38.8492 9.15076Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M38.8492 9.15076L36.6219 11.3781",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M45 24H41.85H45Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M45 24H41.85",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M38.8492 38.8492L36.6219 36.6219L38.8492 38.8492Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M38.8492 38.8492L36.6219 36.6219",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 45V41.85V45Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M24 45V41.85",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.15076 38.8492L11.3781 36.6219L9.15076 38.8492Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M9.15076 38.8492L11.3781 36.6219",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 24H6.15H3Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M3 24H6.15",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.15076 9.15076L11.3781 11.3781L9.15076 9.15076Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M9.15076 9.15076L11.3781 11.3781",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z",fill:"none",stroke:"#333","stroke-width":"4","stroke-linejoin":"round"}})])])])],2)],1)}),[],!1,null,null,null);e.default=l.exports}}]);