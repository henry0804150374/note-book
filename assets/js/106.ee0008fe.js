(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1462:function(v,s,t){"use strict";t.r(s);var r=t(13),a=Object(r.a)({},(function(){var v=this,s=v.$createElement,r=v._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("h1",{attrs:{id:"_035-亿级流量商品详情页的多级缓存架构以及架构中每一层的意义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_035-亿级流量商品详情页的多级缓存架构以及架构中每一层的意义"}},[v._v("#")]),v._v(" 035. 亿级流量商品详情页的多级缓存架构以及架构中每一层的意义")]),v._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#商品详情系统旁白"}},[v._v("商品详情系统旁白")])]),r("li",[r("a",{attrs:{href:"#上亿流量的商品详情页系统的多级缓存架构"}},[v._v("上亿流量的商品详情页系统的多级缓存架构")])]),r("li",[r("a",{attrs:{href:"#多级缓存架构中每一层的意义"}},[v._v("多级缓存架构中每一层的意义")])]),r("li",[r("a",{attrs:{href:"#小结"}},[v._v("小结")])])])]),r("p"),v._v(" "),r("p",[v._v("我们之前的三十讲，主要是在讲解 redis 如何支撑海量数据、高并发读写、高可用服务的架构")]),v._v(" "),r("p",[v._v("redis 架构，在我们的真正类似商品详情页读高并发的系统中，redis 就是底层的缓存存储的支持")]),v._v(" "),r("p",[v._v("从这一讲开始，我们正式开始做业务系统的开发")]),v._v(" "),r("h2",{attrs:{id:"商品详情系统旁白"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#商品详情系统旁白"}},[v._v("#")]),v._v(" 商品详情系统旁白")]),v._v(" "),r("p",[v._v("亿级流量以上的电商网站的商品详情页的系统，真实的系统中包含大量的业务，十几个人做一两年才堆出来复杂的业务系统。")]),v._v(" "),r("p",[v._v("而作为本课程不可能讲解复杂的业务，因为整套课程就几十个小时的课程。")]),v._v(" "),r("p",[v._v("如果只是纯粹的架构，那么就是一个骨架，所以必须有少量的业务，有血有肉，把整个项目串起来，在业务背景下去学习架构，效果才会理想")]),v._v(" "),r("p",[v._v("讲解商品详情页系统，主要讲解缓存架构，90% 大量的业务代码（没有什么技术含量），10% 的最优技术含量的就是架构，上亿流量，每秒 QPS 几万，上十万的，读并发")]),v._v(" "),r("p",[v._v("支撑读并发，主要是缓存架构")]),v._v(" "),r("h2",{attrs:{id:"上亿流量的商品详情页系统的多级缓存架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#上亿流量的商品详情页系统的多级缓存架构"}},[v._v("#")]),v._v(" 上亿流量的商品详情页系统的多级缓存架构")]),v._v(" "),r("p",[v._v("很多人以为，做个缓存其实就是用一下 redis 访问一下，就可以了，这个只是简单的缓存")]),v._v(" "),r("p",[v._v("如果做复杂的缓存，支撑电商复杂的场景下的高并发的缓存，遇到的问题非常非常之多，绝对不是说简单的访问一下 redsi 就可以的")]),v._v(" "),r("p",[v._v("采用三级缓存：nginx 本地缓存 + redis 分布式缓存 + tomcat 堆缓存的多级缓存架构")]),v._v(" "),r("p",[v._v("使用这个架构主要是为了解决业务中的一些需求和问题：")]),v._v(" "),r("ul",[r("li",[r("p",[v._v("时效性要求非常高的数据：库存")]),v._v(" "),r("p",[v._v("一般来说，显示的库存都是时效性要求会相对高一些，因为随着商品的不断的交易，库存会不断的变化")]),v._v(" "),r("p",[v._v("当然，我们就希望当库存变化的时候，尽可能更快将库存显示到页面上去，而不是说等了很长时间，库存才反应到页面上去")])]),v._v(" "),r("li",[r("p",[v._v("时效性要求不高的数据：商品的基本信息（名称、颜色、版本、规格参数，等等）")]),v._v(" "),r("p",[v._v("比如你现在改变了商品的名称，稍微晚个几分钟反应到商品页面上，也还能接受")])])]),v._v(" "),r("p",[v._v("商品价格/库存等 "),r("strong",[v._v("时效性要求高")]),v._v(" 的数据，而且种类较少，采取相关的服务系统每次发生了变更的时候，直接采取数据库和 redis 缓存双写的方案，这样缓存的时效性最高")]),v._v(" "),r("p",[v._v("商品基本信息等 "),r("strong",[v._v("时效性不高")]),v._v(" 的数据，而且种类繁多，来自多种不同的系统，采取 MQ 异步通知的方式，写一个数据生产服务，监听 MQ 消息，然后异步拉取服务的数据，更新 tomcat jvm 缓存 + redis 缓存")]),v._v(" "),r("p",[v._v("nginx+lua 脚本做页面动态生成的工作，每次请求过来，优先从 nginx 本地缓存中提取各种数据，结合页面模板，生成需要的页面，如果 nginx 本地缓存过期了，那么就从 nginx 到 redis 中去拉取数据，更新到 nginx 本地，如果 redis 中也被 LRU 算法清理掉了，那么就从 nginx走 http 接口到后端的服务中拉取数据，数据生产服务中，现在本地 tomcat 里的 jvm 堆缓存（ehcache）中找，如果也被 LRU 清理掉了，那么就重新发送请求到源头的服务中去拉取数据，然后再次更新 tomcat 堆内存缓存 + redis 缓存，并返回数据给 nginx，nginx 缓存到本地")]),v._v(" "),r("p",[r("img",{attrs:{src:t(377),alt:""}})]),v._v(" "),r("p",[v._v("结合上图去理解上面的文字，该架构 redis 不是应用服务主要使用的，是 nginx 通过 lua 脚本主要使用的缓存")]),v._v(" "),r("h2",{attrs:{id:"多级缓存架构中每一层的意义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#多级缓存架构中每一层的意义"}},[v._v("#")]),v._v(" 多级缓存架构中每一层的意义")]),v._v(" "),r("p",[r("strong",[v._v("nginx 本地缓存")]),v._v("，抗的是热数据的高并发访问，一般来说，商品的购买总是有热点的，比如每天购买 iphone、nike、海尔等知名品牌的东西的人，总是比较多的")]),v._v(" "),r("p",[v._v("这些热数据，利用 nginx 本地缓存，由于经常被访问，所以可以被锁定在 nginx 的本地缓存内")]),v._v(" "),r("p",[v._v("大量的热数据的访问，就是经常会访问的那些数据，就会被保留在 nginx 本地缓存内，那么对这些热数据的大量访问，就直接走 nginx 就可以了")]),v._v(" "),r("p",[v._v("那么大量的访问，直接就可以走到 nginx 就行了，不需要走后续的各种网络开销了")]),v._v(" "),r("p",[v._v("传统的缓存架构如下图（我自己就是这种使用的）")]),v._v(" "),r("p",[r("img",{attrs:{src:t(378),alt:""}})]),v._v(" "),r("p",[v._v("这样就会多出来转发的网络开销。而 nginx 直接走 redis + 本地缓存就少了很多的网络开销")]),v._v(" "),r("p",[r("strong",[v._v("redis 分布式大规模缓存")]),v._v("，抗的是很高的离散访问，支撑海量的数据，高并发的访问，高可用的服务")]),v._v(" "),r("p",[v._v("redis 缓存最大量的数据，最完整的数据和缓存，1T+ 数据; 支撑高并发的访问，QPS 最高到几十万; 可用性，非常好，提供非常稳定的服务")]),v._v(" "),r("p",[v._v("因为 nginx 本地内存有限，也就能 cache 住部分热数据，除了各种 iphone、nike 等热数据，其他相对不那么热的数据，可能流量会经常走到 redis 中")]),v._v(" "),r("p",[v._v("利用 redis cluster 的多 master 写入，横向扩容，1T+ 以上海量数据支持，几十万的读写 QPS，99.99% 高可用性，那么就可以抗住大量的离散访问请求")]),v._v(" "),r("p",[r("strong",[v._v("tomcat jvm 堆内存缓存")]),v._v("，主要是抗 redis 大规模灾难的，如果 redis 出现了大规模的宕机，导致 nginx 大量流量直接涌入数据生产服务，那么最后的 tomcat 堆内存缓存至少可以再抗一下，不至于让数据库直接裸奔")]),v._v(" "),r("p",[v._v("同时 tomcat jvm 堆内存缓存，也可以抗住 redis 没有 cache 住的最后那少量的部分缓存")]),v._v(" "),r("h2",{attrs:{id:"小结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[v._v("#")]),v._v(" 小结")]),v._v(" "),r("p",[v._v("针对高并发访问的一些特点，进行了拆分：")]),v._v(" "),r("ul",[r("li",[v._v("nginx 本地缓存：抗少量热数据请求")]),v._v(" "),r("li",[v._v("redis：抗最完整最全量的离散访问请求")]),v._v(" "),r("li",[v._v("应用堆内存：安全防护措施，防止 mysql 数据库裸奔")])])])}),[],!1,null,null,null);s.default=a.exports},377:function(v,s,t){v.exports=t.p+"assets/img/markdown-img-paste-20190331203045365.454cbaa1.png"},378:function(v,s){v.exports="data:image/png;base64,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"}}]);