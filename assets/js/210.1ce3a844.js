(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{1237:function(s,e,a){s.exports=a.p+"assets/img/c8e2b459f94c0ed96506b877771b96da.db6fac31.png"},1438:function(s,e,a){"use strict";a.r(e);var t=a(13),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"配置-git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-git"}},[s._v("#")]),s._v(" 配置 Git")]),s._v(" "),t("p",[s._v("你在 "),t("RouterLink",{attrs:{to:"/git-scm/01/"}},[s._v("起步")]),s._v(" 中看到，可以用  "),t("code",[s._v("git config")]),s._v("  配置 Git。 "),t("strong",[s._v("首先要做的事情就是设置你的名字和邮件地址")]),s._v("：")],1),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"John Doe"')]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email johndoe@example.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("现在，你会了解到许多更有趣的选项，并用类似的方式来定制 Git。")]),s._v(" "),t("p",[s._v("首先，快速回忆下："),t("strong",[s._v("Git 使用一系列配置文件来保存你自定义的行为")]),s._v("。")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("系统："),t("code",[s._v("/etc/gitconfig")]),s._v(" 会被首先查找")]),s._v(" "),t("p",[s._v("该文件含有系统里每位用户及他们所拥有的仓库的配置值。")]),s._v(" "),t("p",[s._v("如果你传递  "),t("code",[s._v("–system")]),s._v("  选项给  "),t("code",[s._v("git config")]),s._v("，它就会读写该文件。")])]),s._v(" "),t("li",[t("p",[s._v("全局："),t("code",[s._v("~/.gitconfig")]),s._v(" 文件（或者  "),t("code",[s._v("~/.config/git/config")]),s._v(" 文件），该文件属于每个用户")]),s._v(" "),t("p",[s._v("你可以传递 "),t("code",[s._v("–global")]),s._v("  选项让 Git 读写该文件。")])]),s._v(" "),t("li",[t("p",[s._v("本地：你正在操作的版本库所对应的 Git 目录下的配置文件（ "),t("code",[s._v(".git/config")]),s._v("）")]),s._v(" "),t("p",[s._v("这个文件中的值只对该版本库有效。")])])]),s._v(" "),t("p",[s._v("以上三个层次中每层的配置（系统、全局、本地）都会覆盖掉上一层次的配置，所以 "),t("code",[s._v(".git/config")]),s._v("  中的值会覆盖掉 "),t("code",[s._v("/etc/gitconfig")]),s._v("  中所对应的值。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("Git 的配置文件是纯文本的，所以你可以直接手动编辑这些配置文件，输入合乎语法的值。 但是运行 "),t("code",[s._v("git config")]),s._v(" 命令会更简单些。")])]),s._v(" "),t("h2",{attrs:{id:"客户端基本配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端基本配置"}},[s._v("#")]),s._v(" 客户端基本配置")]),s._v(" "),t("p",[s._v("Git 能够识别的配置项分为两大类："),t("strong",[s._v("客户端")]),s._v(" 和 "),t("strong",[s._v("服务器端")]),s._v("。 其中大部分属于客户端配置 —— 可以依你个人的工作偏好进行配置。 尽管 Git 支持的选项 "),t("em",[s._v("繁多")]),s._v("，但其中大部分仅仅在某些罕见的情况下有意义。 "),t("strong",[s._v("我们只讲述最平常和最有用的选项")]),s._v("。 如果想得到你当前版本的 Git 支持的选项列表，请运行")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ man git-config\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这个命令列出了所有可用的选项，以及与之相关的介绍。 你也可以在 http://git-scm.com/docs/git-config.html 找到同样的内容。")]),s._v(" "),t("h3",{attrs:{id:"core-editor-文本编辑器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#core-editor-文本编辑器"}},[s._v("#")]),s._v(" "),t("code",[s._v("core.editor")]),s._v("  文本编辑器")]),s._v(" "),t("p",[s._v("默认情况下，Git 会调用环境变量（"),t("code",[s._v("$VISUAL")]),s._v("  或 "),t("code",[s._v("$EDITOR")]),s._v("）设置的任意文本编辑器，如果没有设置，会调用 vi 来创建和编辑你的提交以及标签信息。 你可以使用 "),t("code",[s._v("core.editor")]),s._v(" 选项来修改默认的编辑器：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.editor emacs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("现在，无论你定义了什么终端编辑器，Git 都会调用 Emacs 编辑信息。")]),s._v(" "),t("h3",{attrs:{id:"commit-template-提交模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commit-template-提交模板"}},[s._v("#")]),s._v(" "),t("code",[s._v("commit.template")]),s._v(" 提交模板")]),s._v(" "),t("p",[s._v("如果把此项指定为你的系统上某个文件的路径，当你提交的时候， Git 会使用该文件的内容作为提交的默认信息。 例如：假设你创建了一个叫 "),t("code",[s._v("~/.gitmessage.txt")]),s._v(" 的模板文件，类似这样：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("subject line\n\nwhat happened\n\n[ticket: X]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("要想让 Git 把它作为运行 "),t("code",[s._v("git commit")]),s._v("  时显示在你的编辑器中的默认信息， 如下设置 "),t("code",[s._v("commit.template")]),s._v(" ：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global commit.template ~/.gitmessage.txt\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("然后当你提交时，编辑器中就会显示如下的提交信息占位符：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("subject line\n\nwhat happened\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ticket: X"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Please enter the commit message for your changes. Lines starting")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# with '#' will be ignored, and an empty message aborts the commit.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# On branch master")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Changes to be committed:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   (use "git reset HEAD <file>..." to unstage)')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# modified:   lib/test.rb")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n~\n~\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".git/COMMIT_EDITMSG"')]),s._v(" 14L, 297C\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("如果你的团队对提交信息有格式要求，可以在系统上创建一个文件，并配置 Git 把它作为默认的模板，这样可以更加容易地使提交信息遵循格式。")]),s._v(" "),t("h3",{attrs:{id:"core-pager-分页器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#core-pager-分页器"}},[s._v("#")]),s._v(" "),t("code",[s._v("core.pager")]),s._v(" 分页器")]),s._v(" "),t("p",[s._v("该配置项指定 Git 运行诸如 log 和 diff 等命令所使用的分页器。 你可以把它设置成用 "),t("code",[s._v("more")]),s._v(" 或者任何你喜欢的分页器（"),t("strong",[s._v("默认用的是 less")]),s._v("），当然也可以设置成空字符串，关闭该选项：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.pager "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这样不管命令的输出量多少，Git 都会在一页显示所有内容。")]),s._v(" "),t("h3",{attrs:{id:"user-signingkey-密匙-id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user-signingkey-密匙-id"}},[s._v("#")]),s._v(" "),t("code",[s._v("user.signingkey")]),s._v(" 密匙 ID")]),s._v(" "),t("p",[s._v("如果你要创建经签署的含附注的标签（正如 "),t("RouterLink",{attrs:{to:"/git-scm/07/04.html"}},[s._v("签署工作")]),s._v(" 所述），那么把你的 GPG 签署密钥设置为配置项会更好。 如下设置你的密钥 ID：")],1),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.signingkey "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("gpg-key-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("现在，你每次运行 "),t("code",[s._v("git tag")]),s._v("  命令时，即可直接签署标签，而无需定义密钥：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tag-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"core-excludesfile-忽略文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#core-excludesfile-忽略文件"}},[s._v("#")]),s._v(" "),t("code",[s._v("core.excludesfile")]),s._v(" 忽略文件")]),s._v(" "),t("p",[s._v("正如 "),t("RouterLink",{attrs:{to:"/git-scm/02/02.html#忽略文件"}},[s._v("忽略文件")]),s._v(" 所述，你可以在你的项目的  "),t("code",[s._v(".gitignore")]),s._v("  文件里面规定无需纳入 Git 管理的文件的模板，这样它们既不会出现在未跟踪列表，也不会在你运行  "),t("code",[s._v("git add")]),s._v(" 后被暂存。")],1),s._v(" "),t("p",[s._v("不过有些时候，你想要在你所有的版本库中忽略掉某一类文件。 如果你的操作系统是 "),t("code",[s._v("OS X")]),s._v("，很可能就是指 "),t("code",[s._v(".DS_Store")]),s._v("。 如果你把 Emacs 或 Vim 作为首选的编辑器，你肯定知道以 "),t("code",[s._v("~")]),s._v(" 结尾的临时文件。")]),s._v(" "),t("p",[s._v("这个配置允许你设置类似于全局生效的 "),t("code",[s._v(".gitignore")]),s._v("  文件。 如果你按照下面的内容创建一个 "),t("code",[s._v("~/.gitignore_global")]),s._v(" 文件：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("*~\n.DS_Store\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("……然后运行 "),t("code",[s._v("git config –global core.excludesfile ~/.gitignore_global")]),s._v(" ，Git 将把那些文件永远地拒之门外。")]),s._v(" "),t("h3",{attrs:{id:"help-autocorrect-自动修正错误指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#help-autocorrect-自动修正错误指令"}},[s._v("#")]),s._v(" "),t("code",[s._v("help.autocorrect")]),s._v(" 自动修正错误指令")]),s._v(" "),t("p",[s._v("假如你打错了一条命令，会显示：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ git chekcout master\ngit：'chekcout' 不是一个 git 命令。参见 'git --help'。\n\n您指的是这个么？\n  checkout\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("Git 会尝试猜测你的意图，但是它不会越俎代庖。 如果你把 "),t("code",[s._v("help.autocorrect")]),s._v("  设置成 1，那么只要有一个命令被模糊匹配到了，Git 会自动运行该命令。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ git chekcout master\n警告：您运行一个不存在的 Git 命令 'chekcout'。继续执行假定您要要运行的\n是 'checkout'\n在 0.1 秒钟后自动运行...\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("注意提示信息中的 「0.1 秒」。"),t("code",[s._v("help.autocorrect")]),s._v("  接受一个代表十分之一秒的整数。 所以如果你把它设置为 50, Git 将在自动执行命令前给你 5 秒的时间改变主意。")]),s._v(" "),t("h2",{attrs:{id:"git-中的着色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-中的着色"}},[s._v("#")]),s._v(" Git 中的着色")]),s._v(" "),t("p",[s._v("Git 充分支持对终端内容着色，对你凭肉眼简单、快速分析命令输出有很大帮助。 你可以设置许多的相关选项来满足自己的偏好。")]),s._v(" "),t("h3",{attrs:{id:"color-ui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#color-ui"}},[s._v("#")]),s._v(" "),t("code",[s._v("color.ui")])]),s._v(" "),t("p",[s._v("Git 会自动着色大部分输出内容，但如果你不喜欢花花绿绿，也可以关掉。 要想关掉 Git 的终端颜色输出，试一下这个：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global color.ui "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这个设置的默认值是 auto，它会着色直接输出到终端的内容；而当内容被重定向到一个管道或文件时，则忽略着色功能。")]),s._v(" "),t("p",[s._v("你也可以设置成 "),t("code",[s._v("always")]),s._v("，来忽略掉管道和终端的不同，即在任何情况下着色输出。 你很少会这么设置，在大多数场合下，如果你想在被重定向的输出中插入颜色码，可以传递  "),t("code",[s._v("–color")]),s._v("  标志给 Git 命令来强制它这么做。 默认设置就已经能满足大多数情况下的需求了。")]),s._v(" "),t("h3",{attrs:{id:"color"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#color"}},[s._v("#")]),s._v(" "),t("code",[s._v("color.*")])]),s._v(" "),t("p",[t("strong",[s._v("要想具体到哪些命令输出需要被着色以及怎样着色")]),s._v("，你需要用到和具体命令有关的颜色配置选项。 它们都能被置为 true、false 或 always：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("color.branch\ncolor.diff\ncolor.interactive\ncolor.status\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("另外，以上每个配置项都有子选项，它们可以被用来覆盖其父设置，以达到为输出的各个部分着色的目的。 例如，为了让 "),t("code",[s._v("diff")]),s._v("  的输出信息以 "),t("strong",[s._v("蓝色前景")]),s._v("、"),t("strong",[s._v("黑色背景")]),s._v("和 "),t("strong",[s._v("粗体显示")]),s._v("，你可以运行")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global color.diff.meta "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blue black bold"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("你能设置的颜色有："),t("code",[s._v("normal")]),s._v("、"),t("code",[s._v("black")]),s._v("、"),t("code",[s._v("red")]),s._v("、"),t("code",[s._v("green")]),s._v("、"),t("code",[s._v("yellow")]),s._v("、"),t("code",[s._v("blue")]),s._v("、"),t("code",[s._v("magenta")]),s._v("、"),t("code",[s._v("cyan")]),s._v(" 或 "),t("code",[s._v("white")]),s._v("。 正如以上例子设置的粗体属性，想要设置字体属性的话，可以选择包括："),t("code",[s._v("bold")]),s._v("、"),t("code",[s._v("dim")]),s._v("、"),t("code",[s._v("ul")]),s._v("（下划线）、"),t("code",[s._v("blink")]),s._v("、"),t("code",[s._v("reverse")]),s._v("（交换前景色和背景色）。")]),s._v(" "),t("h2",{attrs:{id:"外部的合并与比较工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#外部的合并与比较工具"}},[s._v("#")]),s._v(" 外部的合并与比较工具")]),s._v(" "),t("p",[s._v("虽然 Git 自己内置了一个 diff 实现，而且到目前为止我们一直在使用它，但你能够用一个外部的工具替代它。 除此以外，你还能设置一个图形化的工具来合并和解决冲突，从而不必自己手动解决。 这里我们以一个不错且免费的工具 —— "),t("strong",[s._v("Perforce 图形化合并工具（P4Merge）")]),s._v(" —— 来展示如何用一个外部的工具来合并和解决冲突。")]),s._v(" "),t("p",[s._v("P4Merge 可以在所有主流平台上运行，所以安装上应该没有什么困难。 在这个例子中，我们使用的路径名可以直接应用在 Mac 和 Linux 上；在 Windows 上，"),t("code",[s._v("/usr/local/bin")]),s._v(" 需要被改为你的环境中可执行文件所在的目录路径。")]),s._v(" "),t("p",[s._v("首先， 从 http://www.perforce.com/downloads/Perforce/ 下载 P4Merge。 接下来，你要 "),t("strong",[s._v("编写一个全局包装脚本来运行你的命令")]),s._v("。 我们会使用 Mac 上的路径来指定该脚本的位置，在其他系统上，它将是 p4merge二进制文件所在的目录。 "),t("strong",[s._v("创建一个名为 extMerge 的脚本包装 merge 命令")]),s._v("，让它把参数转发给 p4merge 二进制文件：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /usr/local/bin/extMerge\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/sh")]),s._v("\n/Applications/p4merge.app/Contents/MacOS/p4merge "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$*")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("包装 diff 命令的脚本首先确保传递了七个参数过来，随后把其中两个转发给包装了 merge 的脚本。 默认情况下， Git 传递以下参数给 diff：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("path old-file old-hex old-mode new-file new-hex new-mode\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("由于你仅仅需要 old-file 和 new-file 参数，由包装 diff 的脚本来转发它们吧。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /usr/local/bin/extDiff\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$#")]),s._v(" -eq "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" /usr/local/bin/extMerge "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$5")]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("你也需要确保这些脚本具有可执行权限：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/extMerge\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/extDiff\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("现在你可以修改配置文件来使用你自定义的合并和比较工具了")]),s._v("。 这将涉及许多自定义设置："),t("code",[s._v("merge.tool")]),s._v("  通知 Git 该使用哪个合并工具， "),t("code",[s._v("mergetool.<tool>.cmd")]),s._v("  规定命令运行的方式，"),t("code",[s._v("mergetool.<tool>.trustExitCode")]),s._v("  会通知 Git 程序的返回值是否表示合并操作成功，"),t("code",[s._v("diff.external")]),s._v(" 通知 Git 该用什么命令做比较。 因此，你可以运行以下四条配置命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global merge.tool extMerge\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global mergetool.extMerge.cmd "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'extMerge "),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BASE")]),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LOCAL")]),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$REMOTE")]),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MERGED")]),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("'")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global mergetool.extMerge.trustExitCode "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global diff.external extDiff\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("或编辑你的 "),t("code",[s._v("~/.gitconfig")]),s._v("  文件，添加以下各行：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('[merge]\n  tool = extMerge\n[mergetool "extMerge"]\n  cmd = extMerge "$BASE" "$LOCAL" "$REMOTE" "$MERGED"\n  trustExitCode = false\n[diff]\n  external = extDiff\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("待一切设置妥当后，如果你像这样运行 diff 命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" 32d1776b1^ 32d1776b1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Git 将启动 P4Merge，而不是在命令行输出比较的结果，就像这样：")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1237),alt:"P4Merge."}})]),s._v(" "),t("p",[s._v("如果你尝试合并两个分支，随后遇到了合并冲突，运行 "),t("code",[s._v("git mergetool")]),s._v("，Git 会调用 P4Merge 让你通过图形界面来解决冲突。")]),s._v(" "),t("p",[s._v("设置包装脚本的好处在于大大降低了改变 diff 和 merge 工具的工作量。 举个例子，想把 extDiff 和 extMerge 的工具改成 KDiff3，你要做的仅仅是编辑 extMerge 脚本文件：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /usr/local/bin/extMerge\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/sh")]),s._v("\n/Applications/kdiff3.app/Contents/MacOS/kdiff3 "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$*")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("现在，Git 将使用 KDiff3 作为查看比较和解决合并冲突的工具。")]),s._v(" "),t("p",[s._v("Git 预设了许多其他的合并和解决冲突的工具，无需特别的设置你就能用上它们。 要想看到它支持的工具列表，试一下这个：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" mergetool --tool-help\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git mergetool --tool=<tool>'")]),s._v(" may be "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" to one of the following:\n        emerge\n        gvimdiff\n        gvimdiff2\n        opendiff\n        p4merge\n        vimdiff\n        vimdiff2\n\nThe following tools are valid, but not currently available:\n        araxis\n        bc3\n        codecompare\n        deltawalker\n        diffmerge\n        diffuse\n        ecmerge\n        kdiff3\n        meld\n        tkdiff\n        tortoisemerge\n        xxdiff\n\nSome of the tools listed above only work "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" a windowed\nenvironment. If run "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" a terminal-only session, they will fail.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("p",[s._v("如果你不想用到 KDiff3 的所有功能，只是想用它来合并，那么 kdiff3 正符合你的要求，运行：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global merge.tool kdiff3\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果运行了以上命令，而没有设置 extMerge 和 extDiff 文件，Git 会用 KDiff3 做合并，让内置的 diff来做比较。")]),s._v(" "),t("h2",{attrs:{id:"格式化与多余的空白字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#格式化与多余的空白字符"}},[s._v("#")]),s._v(" 格式化与多余的空白字符")]),s._v(" "),t("p",[s._v("格式化与多余的空白字符是许多开发人员在协作时，特别是在跨平台情况下，不时会遇到的令人头疼的琐碎的问题。 由于编辑器的不同或者文件行尾的换行符在 Windows 下被替换了，一些细微的空格变化会不经意地混入提交的补丁或其它协作成果中。 不用怕，Git 提供了一些配置项来帮助你解决这些问题。")]),s._v(" "),t("h3",{attrs:{id:"core-autocrlf-自动转换换行符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#core-autocrlf-自动转换换行符"}},[s._v("#")]),s._v(" "),t("code",[s._v("core.autocrlf")]),s._v(" 自动转换换行符")]),s._v(" "),t("p",[s._v("假如你正在 "),t("strong",[s._v("Windows 上写程序")]),s._v("，而你的同伴用的是 "),t("strong",[s._v("其他系统（或相反）")]),s._v("，你 "),t("strong",[s._v("可能会遇到 CRLF 问题")]),s._v("。 这是因为 Windows 使用回车（CR）和换行（LF）两个字符来结束一行，而 Mac 和 Linux 只使用换行（LF）一个字符。 虽然这是小问题，但它会极大地扰乱跨平台协作。许多 Windows 上的编辑器会悄悄把行尾的换行字符转换成回车和换行，或在用户按下 Enter 键时，插入回车和换行两个字符。")]),s._v(" "),t("p",[s._v("Git 可以在你 "),t("strong",[s._v("提交时自动地把回车和换行转换成换行")]),s._v("，而 "),t("strong",[s._v("在检出代码时把换行转换成回车和换行")]),s._v("。 你可以用"),t("code",[s._v("core.autocrlf")]),s._v("  来打开此项功能。 如果是在 Windows 系统上，把它设置成 true，这样在检出代码时，换行会被转换成回车和换行：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置自动转换")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.autocrlf "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("如果使用以换行作为行结束符的 Linux 或 Mac，你不需要 Git 在检出文件时进行自动的转换；然而当一个以回车加换行作为行结束符的文件不小心被引入时，你肯定想让 Git 修正。 你可以把 "),t("code",[s._v("core.autocrlf")]),s._v("  设置成 "),t("code",[s._v("input")]),s._v(" 来"),t("strong",[s._v("告诉 Git 在提交时把回车和换行转换成换行")]),s._v("，"),t("strong",[s._v("检出时不转换")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在提交时把回车和换行转换成换行，检出时不转换")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.autocrlf input\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这样在 Windows 上的检出文件中会保留回车和换行，而在 Mac 和 Linux 上，以及版本库中会保留换行。")]),s._v(" "),t("p",[s._v("如果你是 Windows 程序员，且正在开发仅运行在 Windows 上的项目，可以设置 false 取消此功能，把回车保留在版本库中：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.autocrlf "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"core-whitespace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#core-whitespace"}},[s._v("#")]),s._v(" "),t("code",[s._v("core.whitespace")])]),s._v(" "),t("p",[s._v("Git 预先设置了一些选项来 "),t("strong",[s._v("探测和修正多余空白字符问题")]),s._v("。 它提供了 "),t("strong",[s._v("六种处理多余空白字符的主要选项")]),s._v(" —— 其中三个默认开启，另外三个默认关闭，不过你可以自由地设置它们。")]),s._v(" "),t("p",[s._v("默认被打开的三个选项是：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("blank-at-eol")]),s._v("，查找行尾的空格；")]),s._v(" "),t("li",[t("code",[s._v("blank-at-eof")]),s._v("，盯住文件底部的空行；")]),s._v(" "),t("li",[t("code",[s._v("space-before-tab")]),s._v("，警惕行头 tab 前面的空格。")])]),s._v(" "),t("p",[s._v("默认被关闭的三个选项是：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("indent-with-non-tab")]),s._v("，揪出以空格而非 tab 开头的行（你可以用 tabwidth 选项控制它）；")]),s._v(" "),t("li",[t("code",[s._v("tab-in-indent")]),s._v("，监视在行头表示缩进的 tab；")]),s._v(" "),t("li",[t("code",[s._v("cr-at-eol")]),s._v("，告诉 Git 忽略行尾的回车。")])]),s._v(" "),t("p",[s._v("通过设置 "),t("code",[s._v("core.whitespace")]),s._v("，你可以让 Git 按照你的意图来 "),t("strong",[s._v("打开或关闭以逗号分割的选项")]),s._v("。 要想 "),t("strong",[s._v("关闭某个选项")]),s._v("，你可以在输入设置选项时不指定它或在它前面加个  "),t("code",[s._v("-")]),s._v("。 例如，如果你想要打开除 "),t("code",[s._v("cr-at-eol")]),s._v("  之外的所有选项：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.whitespace "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    trailing-space,space-before-tab,indent-with-non-tab\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("当你运行 "),t("code",[s._v("git diff")]),s._v("  命令并尝试给输出着色时，Git 将探测到这些问题，因此你在提交前就能修复它们。 用 "),t("code",[s._v("git apply")]),s._v("  打补丁时你也会从中受益。 如果正准备应用的补丁存有特定的空白问题，你可以让 Git 在应用补丁时发出警告：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" apply --whitespace"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("warn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("patch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("或者让 Git 在打上补丁前自动修正此问题：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" apply --whitespace"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fix "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("patch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这些选项也能运用于  "),t("code",[s._v("git rebase")]),s._v("。 如果提交了有空白问题的文件，但还没推送到上游，你可以运行 "),t("code",[s._v("git rebase –whitespace=fix")]),s._v(" 来让 Git 在重写补丁时自动修正它们。")]),s._v(" "),t("h2",{attrs:{id:"服务器端配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器端配置"}},[s._v("#")]),s._v(" 服务器端配置")]),s._v(" "),t("p",[s._v("Git 服务器端的配置项相对来说并不多，但仍有一些饶有生趣的选项值得你一看。")]),s._v(" "),t("h3",{attrs:{id:"receive-fsckobjects-每次推送时是否检查一致性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#receive-fsckobjects-每次推送时是否检查一致性"}},[s._v("#")]),s._v(" "),t("code",[s._v("receive.fsckObjects")]),s._v(" 每次推送时是否检查一致性")]),s._v(" "),t("p",[s._v("Git 能够确认每个对象的有效性以及 SHA-1 检验和是否保持一致。 "),t("strong",[s._v("但 Git 不会在每次推送时都这么做")]),s._v("。这个操作很耗时间，很有可能会拖慢提交的过程，特别是当库或推送的文件很大的情况下。 如果想在每次推送时都要求 Git 检查一致性，设置 "),t("code",[s._v("receive.fsckObjects")]),s._v(" 为 true 来强迫它这么做：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --system receive.fsckObjects "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("现在 Git 会在每次推送生效前检查库的完整性，确保没有被有问题的客户端引入破坏性数据。")]),s._v(" "),t("h3",{attrs:{id:"receive-denynonfastforwards-禁用强制更新策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#receive-denynonfastforwards-禁用强制更新策略"}},[s._v("#")]),s._v(" "),t("code",[s._v("receive.denyNonFastForwards")]),s._v(" 禁用强制更新策略")]),s._v(" "),t("p",[t("strong",[s._v("如果你变基已经被推送的提交")]),s._v("，"),t("strong",[s._v("继而再推送")]),s._v("，又或者推送一个提交到远程分支，而这个远程分支当前指向的提交不在该提交的历史中，"),t("strong",[s._v("这样的推送会被拒绝")]),s._v("。 这通常是个很好的策略，但有时在变基的过程中，你确信自己需要更新远程分支，可以在 "),t("code",[s._v("push")]),s._v(" 命令后加  "),t("code",[s._v("-f")]),s._v("  标志来强制更新（force-update）。")]),s._v(" "),t("p",[t("strong",[s._v("要禁用这样的强制更新推送（force-pushes）")]),s._v("，可以设置  "),t("code",[s._v("receive.denyNonFastForwards")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --system receive.denyNonFastForwards "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("稍后我们会提到，"),t("strong",[s._v("用服务器端的接收钩子也能达到同样的目的")]),s._v("。 那种方法可以做到更细致的控制，例如禁止某一类用户做非快进（non-fast-forwards）推送。")]),s._v(" "),t("h3",{attrs:{id:"receive-denydeletes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#receive-denydeletes"}},[s._v("#")]),s._v(" "),t("code",[s._v("receive.denyDeletes")])]),s._v(" "),t("p",[s._v("有一些方法可以绕过 "),t("code",[s._v("denyNonFastForwards")]),s._v("  策略。"),t("strong",[s._v("其中一种是先删除某个分支")]),s._v("，"),t("strong",[s._v("再连同新的引用一起推送回该分支")]),s._v("。 把 "),t("code",[s._v("receive.denyDeletes")]),s._v(" 设置为 true 可以把这个漏洞补上：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --system receive.denyDeletes "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这样会 "),t("strong",[s._v("禁止通过推送删除分支和标签 — 没有用户可以这么做")]),s._v("。 要删除远程分支，必须从服务器手动删除引用文件。 通过用户访问控制列表（ACL）也能够在用户级的粒度上实现同样的功能，你将在 "),t("a",{attrs:{href:""}},[s._v("使用强制策略的一个例子")]),s._v(" 一节学到具体的做法。")])])}),[],!1,null,null,null);e.default=n.exports}}]);