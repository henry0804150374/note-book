(window.webpackJsonp=window.webpackJsonp||[]).push([[388],{1776:function(t,e,l){"use strict";l.r(e);var a=l(13),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"什么是-mapping-再次回炉透彻理解"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#什么是-mapping-再次回炉透彻理解"}},[t._v("#")]),t._v(" 什么是 mapping 再次回炉透彻理解")]),t._v(" "),l("p",[t._v("对之前讲解的知识串联起来")]),t._v(" "),l("ul",[l("li",[t._v("往 es 里面直接插入数据，es 会自动建立索引，同时建立 type 以及对应的 mapping")]),t._v(" "),l("li",[t._v("mapping 中就自动定义了每个 field 的数据类型")]),t._v(" "),l("li",[t._v("不同的数据类型（比如说 text 和 date），可能有的是 exact value，有的是 full text")]),t._v(" "),l("li",[t._v("exact value，在建立倒排索引的时候，分词的时候，是将整个值一起作为一个关键词建立到倒排索引中的；")]),t._v(" "),l("li",[t._v("full text，会经历各种各样的处理，分词，normaliztion（时态转换，同义词转换，大小写转换），才会建立到倒排索引中")]),t._v(" "),l("li",[t._v("exact value 和 full text 类型的 field 就决定了一个搜索过来的时候，对 exact value field 或者是 full text field 进行搜索的行为也是不一样的，会跟建立倒排索引的行为保持一致；比如说 exact value 搜索的时候，就是直接按照整个值进行匹配；full text query string，也会进行分词和 normalization 再去倒排索引中去搜索")]),t._v(" "),l("li",[t._v("可以用 es 的 dynamic mapping，让其自动建立 mapping，包括自动设置数据类型；也可以提前手动创建 index 和 type 的 mapping，自己对各个 field 进行设置，包括数据类型，包括索引行为，包括分词器，等等")])]),t._v(" "),l("p",[t._v("mapping：就是 index 的 type 的元数据，每个 type 都有一个自己的 mapping，决定了数据类型，建立倒排索引的行为，还有进行搜索的行为")])])}),[],!1,null,null,null);e.default=i.exports}}]);