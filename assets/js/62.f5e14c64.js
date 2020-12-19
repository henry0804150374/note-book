(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1929:function(t,s,a){"use strict";a.r(s);var e=a(13),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"起步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#起步"}},[t._v("#")]),t._v(" 起步")]),t._v(" "),e("h2",{attrs:{id:"版本控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本控制"}},[t._v("#")]),t._v(" 版本控制")]),t._v(" "),e("p",[t._v("目前有三种版本控制方式：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("本地版本控制系统")]),t._v(" "),e("p",[t._v("它的工作原理是在硬盘上保存补丁集（补丁是指文件修订前后的变化）；通过应用所有的补丁，可以重新计算出各个版本的文件内容。")])]),t._v(" "),e("li",[e("p",[t._v("集中化版本控制系统")]),t._v(" "),e("p",[t._v("都有一个单一的集中管理的服务器，保存所有文件的修订版本，而协同工作的人们都通过客户端连到这台服务器，取出最新的文件或者提交更新。 多年以来，这已成为版本控制系统的标准做法。")]),t._v(" "),e("p",[t._v("缺点就是有单点故障")])]),t._v(" "),e("li",[e("p",[t._v("分布式版本控制系统（Distributed Version Control System，简称 DVCS）")]),t._v(" "),e("p",[t._v("客户端并不只提取最新版本的文件快照，而是把代码仓库完整地镜像下来。 这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。 因为每一次的克隆操作，实际上都是一次对代码仓库的完整备份。")])])]),t._v(" "),e("p",[e("img",{attrs:{src:a(607),alt:"分布式版本控制图解"}})]),t._v(" "),e("p",[t._v("Git 是 "),e("strong",[t._v("分布式版本控制系统")])]),t._v(" "),e("h2",{attrs:{id:"git-基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-基础"}},[t._v("#")]),t._v(" Git 基础")]),t._v(" "),e("p",[t._v("请注意接下来的内容非常重要，若你理解了 Git 的思想和基本工作原理，用起来就会知其所以然，游刃有余。")]),t._v(" "),e("h3",{attrs:{id:"直接记录快照-而非差异比较"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#直接记录快照-而非差异比较"}},[t._v("#")]),t._v(" 直接记录快照，而非差异比较")]),t._v(" "),e("p",[t._v("其他的版本控制系统使用记录差异比较（基础文件 + 补丁方式），如下图所示")]),t._v(" "),e("p",[e("img",{attrs:{src:a(608),alt:"存储每个文件与初始版本的差异。"}})]),t._v(" "),e("p",[t._v("反之，Git 更像是把数据看作是对小型文件系统的一组快照。 每次你提交更新，或在 Git 中保存项目状态时，它主要对当时的全部文件制作一个快照并保存这个快照的索引。 为了高效，如果文件没有修改，Git 不再重新存储该文件，而是只保留一个链接指向之前存储的文件。 Git 对待数据更像是一个 "),e("strong",[t._v("快照流")]),t._v("。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(609),alt:"Git 存储项目随时间改变的快照。"}})]),t._v(" "),e("h3",{attrs:{id:"近乎所有操作都是本地执行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#近乎所有操作都是本地执行"}},[t._v("#")]),t._v(" 近乎所有操作都是本地执行")]),t._v(" "),e("p",[t._v("绝大多数操作都只需要访问本地文件和资源。这也意味着你离线或者没有 VPN 时，几乎可以进行任何操作。 如你在飞机或火车上想做些工作，你能愉快地提交，直到有网络连接时再上传。")]),t._v(" "),e("h3",{attrs:{id:"git-保证完整性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-保证完整性"}},[t._v("#")]),t._v(" Git 保证完整性")]),t._v(" "),e("p",[t._v("Git 中所有数据在存储前都计算校验和，然后以校验和来引用。 这意味着不可能在 Git 不知情时更改任何文件内容或目录内容。 这个功能建构在 Git 底层，是构成 Git 哲学不可或缺的部分。 若你在传送过程中丢失信息或损坏文件，Git 就能发现。")]),t._v(" "),e("h3",{attrs:{id:"git-一般只添加数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-一般只添加数据"}},[t._v("#")]),t._v(" Git 一般只添加数据")]),t._v(" "),e("p",[t._v("你执行的 Git 操作，几乎只往 Git 数据库中增加数据。 很难让 Git 执行任何不可逆操作，或者让它以任何方式清除数据。 同别的 VCS 一样，未提交更新时有可能丢失或弄乱修改的内容；但是一旦你提交快照到 Git 中，就难以再丢失数据，特别是如果你定期的推送数据库到其它仓库的话。")]),t._v(" "),e("h3",{attrs:{id:"三种状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三种状态"}},[t._v("#")]),t._v(" 三种状态")]),t._v(" "),e("p",[t._v("下面的概念很重要，有三种状态：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("已提交（committed）")]),t._v(" "),e("p",[t._v("数据已经安全的保存在本地数据库中")])]),t._v(" "),e("li",[e("p",[t._v("已修改（modified）")]),t._v(" "),e("p",[t._v("修改了文件，但还没保存到数据库中")])]),t._v(" "),e("li",[e("p",[t._v("已暂存（staged）")]),t._v(" "),e("p",[t._v("对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中")])])]),t._v(" "),e("p",[t._v("由此引入 Git 项目的三个工作区域的概念：Git 仓库、工作目录以及暂存区域。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(610),alt:"工作目录、暂存区域以及 Git 仓库。"}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Git 仓库")]),t._v(" "),e("p",[t._v("用来保存项目的元数据和对象数据库的地方，这是 Git 中最重要的部分，从其它计算机克隆仓库时，拷贝的就是这里的数据。")])]),t._v(" "),e("li",[e("p",[t._v("工作目录")]),t._v(" "),e("p",[t._v("对项目的某个版本独立提取出来的内容。 这些从 Git 仓库的压缩数据库中提取出来的文件，放在磁盘上供你使用或修改。")])]),t._v(" "),e("li",[e("p",[t._v("暂存区域")]),t._v(" "),e("p",[t._v("是一个文件，保存了下次将提交的文件列表信息，一般在 Git 仓库目录中")])])]),t._v(" "),e("p",[t._v("基本的 Git 工作流程如下：")]),t._v(" "),e("ol",[e("li",[t._v("在工作目录中修改文件。")]),t._v(" "),e("li",[t._v("暂存文件，将文件的快照放入暂存区域。")]),t._v(" "),e("li",[t._v("提交更新，找到暂存区域的文件，将快照永久性存储到 Git 仓库目录。")])]),t._v(" "),e("h2",{attrs:{id:"初次运行-git-前的配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初次运行-git-前的配置"}},[t._v("#")]),t._v(" 初次运行 Git 前的配置")]),t._v(" "),e("p",[t._v("既然已经在系统上安装了 Git，你会想要做几件事来定制你的 Git 环境。 每台计算机上只需要配置一次，程序升级时会保留配置信息。 你可以在任何时候再次通过运行命令来修改它们。")]),t._v(" "),e("p",[t._v("使用 git config 工具来帮助设置控制 Git 外观和行为的配置变量。 这些变量存储在三个不同的位置：")]),t._v(" "),e("ol",[e("li",[e("p",[e("code",[t._v("/etc/gitconfig")]),t._v(" ：包含系统上每一个用户及他们仓库的通用配置。")]),t._v(" "),e("p",[t._v("如果使用带有 –system 选项的 git config 时，它会从此文件读写配置变量。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("~/.gitconfig 或 ~/.config/git/config")])]),t._v(" "),e("p",[t._v("只针对当前用户。 可以传递 –global 选项让 Git 读写此文件。")]),t._v(" "),e("p",[t._v("在 windows 上，就是 "),e("code",[t._v("C:\\Users\\当前用户\\.gitconfig")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v(".git/config")]),t._v("：当前使用仓库目录中的配置文件")])])]),t._v(" "),e("p",[t._v("采用就近覆盖原则，3 是最近的，将会覆盖 2 中的同名配置")]),t._v(" "),e("p",[t._v("在 Windows 系统中，Git 会查找 $HOME 目录下（一般情况下是 "),e("code",[t._v("C:\\Users\\$USER")]),t._v("）的 "),e("code",[t._v(".gitconfig")]),t._v(" 文件。 Git 同样也会寻找 "),e("code",[t._v("/etc/gitconfig")]),t._v(" 文件，不过是在安装 Git 时所选的目标位置")]),t._v(" "),e("h3",{attrs:{id:"用户信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户信息"}},[t._v("#")]),t._v(" 用户信息")]),t._v(" "),e("p",[t._v("当安装完 Git 应该做的第一件事就是设置你的用户名称与邮件地址。 这样做很重要，因为每一个 Git 的提交都会使用这些信息，并且它会写入到你的每一次提交中，不可更改：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John Doe"')]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email johndoe@example.com\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("如果想在每个项目下使用不同的用户名提交，则可以使用不带 "),e("code",[t._v("--global")]),t._v(" 的命令来设置。")]),t._v(" "),e("h3",{attrs:{id:"检查配置信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检查配置信息"}},[t._v("#")]),t._v(" 检查配置信息")]),t._v(" "),e("p",[t._v("如果想要检查你的配置，可以使用 "),e("code",[t._v("git config –list")]),t._v(" 命令来列出所有 Git 当时能找到的配置。")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list\nuser.name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("John Doe\nuser.email"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("johndoe@example.com\ncolor.status"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("auto\ncolor.branch"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("auto\ncolor.interactive"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("auto\ncolor.diff"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("auto\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[t._v("如果看到了重复的变量名，这是因为前面说过会从不同的配置文件获取，当然只有最后找到的配置会生效。")]),t._v(" "),e("p",[t._v("还可以通过  "),e("code",[t._v("git config <key>")]),t._v(" 来检查 Git 的某一项配置")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.name\nJohn Doe\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h2",{attrs:{id:"获取帮助"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取帮助"}},[t._v("#")]),t._v(" 获取帮助")]),t._v(" "),e("p",[t._v("若你使用 Git 时需要获取帮助，有三种方法可以找到 Git 命令的使用手册：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("verb"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("verb"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --help\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("man")]),t._v(" git-"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("verb"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("例如，要想获得 config 命令的手册，执行")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ git help config\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("以上命令都是离线帮助文档")])])}),[],!1,null,null,null);s.default=v.exports},607:function(t,s,a){t.exports=a.p+"assets/img/8201b6e3d88dd2de76c3ccec9fcc3f8a.2e90d877.png"},608:function(t,s,a){t.exports=a.p+"assets/img/43c57dfa20ce8f0825105bdcb3548822.eb2c0746.png"},609:function(t,s,a){t.exports=a.p+"assets/img/695633290d050f31cec0c9d4bd4a57fe.b1b35d23.png"},610:function(t,s,a){t.exports=a.p+"assets/img/1d72d805cf9f7a4f75bf0d87e2de111a.93c7eec3.png"}}]);