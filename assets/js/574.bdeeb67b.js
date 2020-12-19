(window.webpackJsonp=window.webpackJsonp||[]).push([[574],{1823:function(s,t,a){"use strict";a.r(t);var n=a(13),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nodejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs"}},[s._v("#")]),s._v(" Nodejs")]),s._v(" "),a("h2",{attrs:{id:"多版本-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多版本-node"}},[s._v("#")]),s._v(" 多版本 Node")]),s._v(" "),a("p",[s._v("使用第三方工具，可以随时切换到某一个版本的 Node，需要注意的是："),a("strong",[s._v("每个版本都有自己独立的依赖包缓存等机制")]),s._v("，简单说，只是帮你实现了可以随时切换到一个版本上面去。")]),s._v(" "),a("ul",[a("li",[s._v("windows ："),a("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"noopener noreferrer"}},[s._v("nvm-windows"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("非 windows："),a("a",{attrs:{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"}},[s._v("nvm"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("使用命令都应该差不多。")]),s._v(" "),a("h3",{attrs:{id:"nvm-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvm-windows"}},[s._v("#")]),s._v(" nvm-windows")]),s._v(" "),a("p",[s._v("官方仓库："),a("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"noopener noreferrer"}},[s._v("nvm-windows"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("在下载页面下载安装包："),a("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("立即下载"),a("OutboundLink")],1),s._v("！，安装之后就可以使用 nvm 命令了")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看可安装版本")]),s._v("\n$ nvm list available\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   CURRENT    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     LTS      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  OLD STABLE  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" OLD UNSTABLE "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--------------"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--------------"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--------------"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--------------"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.1")]),s._v(".0    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.15")]),s._v(".0    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.12")]),s._v(".18    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.11")]),s._v(".16    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.0")]),s._v(".1    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.19")]),s._v(".0    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.12")]),s._v(".17    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.11")]),s._v(".15    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装版本")]),s._v("\n$ nvm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地已安装版本，与当前所在版本")]),s._v("\n$ nvm list\n\n  * "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.10")]),s._v(".1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Currently using "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("-bit executable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.12")]),s._v(".0\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换指定版本")]),s._v("\n$ nvm use "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.12")]),s._v(".0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载版本")]),s._v("\n$ nvm uninstall "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[s._v("其他更多命令，请查阅官方文档")])])}),[],!1,null,null,null);t.default=r.exports}}]);