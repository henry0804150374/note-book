(window.webpackJsonp=window.webpackJsonp||[]).push([[501],{1944:function(t,s,a){"use strict";a.r(s);var e=a(13),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-守护进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-守护进程"}},[t._v("#")]),t._v(" Git 守护进程")]),t._v(" "),a("p",[t._v("接下来我们将通过  "),a("strong",[t._v("“Git”  协议")]),t._v(" 建立一个基于守护进程的仓库。 对于 "),a("strong",[t._v("快速且无需授权的 Git 数据访问")]),t._v("，这是一个理想之选。 请注意，因为其不包含授权服务，任何通过该协议管理的内容将在其网络上公开。")]),t._v(" "),a("p",[t._v("如果运行在防火墙之外的服务器上，它应该只对那些公开的只读项目服务。 如果运行在防火墙之内的服务器上，它可用于支撑大量参与人员或 "),a("strong",[t._v("自动系统")]),t._v("（用于持续集成或编译的主机）只读访问的项目，这样可以省去逐一配置 SSH 公钥的麻烦。")]),t._v(" "),a("p",[t._v("无论何时，该 Git 协议都是相对容易设定的。 通常，你只需要以守护进程的形式运行该命令：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" daemon --reuseaddr --base-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/opt/git/ /opt/git/\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[a("code",[t._v("--reuseaddr")]),t._v(" 允许服务器在无需等待旧连接超时的情况下重启")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("--base-path")]),t._v(" 选项允许用户在未完全指定路径的条件下克隆项目")])])]),t._v(" "),a("p",[t._v("结尾的路径将告诉 Git 守护进程从何处寻找仓库来导出。 如果有防火墙正在运行，你需要开放端口 9418 的通信权限。")]),t._v(" "),a("p",[t._v("你可以通过许多方式将该进程以守护进程的方式运行，这主要取决于你所使用的操作系统。 在一台 Ubuntu 机器上，你可以使用一份 Upstart 脚本。 因此，找到如下文件：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/etc/event.d/local-git-daemon\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("并添加下列脚本内容：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("start on startup\nstop on shutdown\nexec /usr/bin/git daemon \\\n    --user=git --group=git \\\n    --reuseaddr \\\n    --base-path=/opt/git/ \\\n    /opt/git/\nrespawn\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("出于安全考虑，强烈建议使用一个 "),a("strong",[t._v("对仓库拥有只读权限")]),t._v(" 的用户身份来运行该守护进程 – 你可以创建一个新用户 "),a("em",[t._v("git-ro")]),t._v(" 并且以该用户身份来运行守护进程。 为简便起见，我们将像 git-shell 一样，同样使用 "),a("em",[t._v("git")]),t._v(" 用户来运行它。")]),t._v(" "),a("p",[t._v("当你重启机器时，你的 Git 守护进程将会自动启动，并且如果进程被意外结束它会自动重新运行。 为了在不重启的情况下直接运行，你可以运行以下命令：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("initctl start local-git-daemon\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("在其他系统中，你可以使用 sysvinit 系统中的 xinetd 脚本，或者另外的方式来实现 – 只要你能够将其命令守护进程化并实现监控。")]),t._v(" "),a("p",[t._v("接下来，你需要 "),a("strong",[t._v("告诉 Git 哪些仓库允许基于服务器的无授权访问")]),t._v("。 你可以在每个仓库下创建一个名为 "),a("code",[t._v("git-daemon-export-ok")]),t._v(" 的文件来实现。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cd /path/to/project.git\n$ touch git-daemon-export-ok\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("该文件将允许 Git 提供无需授权的项目访问服务。")])])}),[],!1,null,null,null);s.default=n.exports}}]);