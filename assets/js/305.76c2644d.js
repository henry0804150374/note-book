(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{1583:function(s,a,t){"use strict";t.r(a);var n=t(13),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_163-商品详情页动态渲染系统-windows-部署-rabbitmq-作为开发测试环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_163-商品详情页动态渲染系统-windows-部署-rabbitmq-作为开发测试环境"}},[s._v("#")]),s._v(" 163. 商品详情页动态渲染系统：windows 部署 rabbitmq 作为开发测试环境")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.rabbitmq.com/install-windows.html#installer",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网安装指导"),t("OutboundLink")],1)]),s._v(" "),t("ul",[t("li",[s._v("安装依赖：esl-erlang_22.0_windows_amd64.exe\n官网下载页面 https://www.erlang-solutions.com/resources/download.html")]),s._v(" "),t("li",[s._v("安装：rabbitmq-server-3.7.17.exe")])]),s._v(" "),t("h2",{attrs:{id:"开启管理界面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启管理界面"}},[s._v("#")]),s._v(" 开启管理界面")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入安装目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" rabbitmq_server-3.7.17"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("sbin\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启管理插件")]),s._v("\nrabbitmq-plugins.bat "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" rabbitmq_management\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"添加管理员账户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加管理员账户"}},[s._v("#")]),s._v(" 添加管理员账户")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入安装目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" rabbitmq_server-3.7.17"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("sbin\n./rabbitmqctl.bat add_user admin "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n./rabbitmqctl.bat set_user_tags admin administrator\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 给权限，或者在 ui 的 admin 界面 ui 操作")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果此命令不行，那么久在 ui 中操作吧")]),s._v("\n./rabbitmqctl.bat set_permissions -p / admin "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.*'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.*'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.*'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("访问管理界面 ：http://localhost:15672")])])}),[],!1,null,null,null);a.default=e.exports}}]);