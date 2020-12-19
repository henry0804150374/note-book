(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{1598:function(n,s,e){"use strict";e.r(s);var a=e(13),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"_174-商品详情页动态渲染系统-完成应用层-nginx-的-lua-脚本的编写与部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_174-商品详情页动态渲染系统-完成应用层-nginx-的-lua-脚本的编写与部署"}},[n._v("#")]),n._v(" 174. 商品详情页动态渲染系统：完成应用层 nginx 的 lua 脚本的编写与部署")]),n._v(" "),e("p",[n._v("同样这里也不实战了，与之前讲过的 "),e("RouterLink",{attrs:{to:"/cache-pdp/054.html"}},[n._v("多级缓存")]),n._v(" 知识点来看，只是多了一个 resty.redis 包的使用，\n使用 lua 直接连 redis 获取数据。")],1),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('local cjson = require("cjson")\nlocal http = require("resty.http")\nlocal redis = require("resty.redis")  \n\nlocal function close_redis(red)  \n\tif not red then  \n\t\treturn  \n\tend  \n\tlocal pool_max_idle_time = 10000\n\tlocal pool_size = 100\n\tlocal ok, err = red:set_keepalive(pool_max_idle_time, pool_size)  \n\tif not ok then  \n\t\tngx.say("set keepalive error : ", err)  \n\tend  \nend\n\nlocal uri_args = ngx.req.get_uri_args()\nlocal productId = uri_args["productId"]\n\nlocal cache_ngx = ngx.shared.my_cache\nlocal productCacheKey = "product_"..productId\n-- 从本地缓存获取商品信息\nlocal productCache = cache_ngx:get(productCacheKey)\n\n-- 如果本地缓存没有，则从 redis 中获取\nif productCache == "" or productCache == nil then\n  local red = redis:new()  \n  red:set_timeout(1000)  \n  local ip = "192.168.31.223"  \n  local port = 1112  \n  local ok, err = red:connect(ip, port)  \n  if not ok then  \n    ngx.say("connect to redis error : ", err)  \n    return close_redis(red)  \n  end\n\n  local redisResp, redisErr = red:get("dim_product_"..productId)\n  -- 如果从 redis 中也获取不到数据，则直接从 数据直连服务获取（后面章节会讲解数据直连服务）\n  if redisResp == ngx.null then  \n    local httpc = http.new()\n    local resp, err = httpc:request_uri("http://192.168.31.179:8767",{\n      method = "GET",\n      path = "/product?productId="..productId\n    })\n\n    productCache = resp.body\n  end\n\n  productCache = redisResp\n\n  math.randomseed(tostring(os.time()):reverse():sub(1, 7))\n  local expireTime = math.random(600, 1200)  \n  -- 再延长时间放回本地缓存\n  cache_ngx:set(productCacheKey, productCache, expireTime)\nend\n\nlocal context = {\n  productInfo = productCache,\n}\n-- 通过模板渲染返回\nlocal template = require("resty.template")\ntemplate.render("product.html", context)\n\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br"),e("span",{staticClass:"line-number"},[n._v("59")]),e("br"),e("span",{staticClass:"line-number"},[n._v("60")]),e("br"),e("span",{staticClass:"line-number"},[n._v("61")]),e("br"),e("span",{staticClass:"line-number"},[n._v("62")]),e("br"),e("span",{staticClass:"line-number"},[n._v("63")]),e("br")])]),e("p",[n._v("这里的核心思路就是：如果 nginx local cache 没有，则通过 twemproxy 读本机房的从集群，\n如果还是没有，则发送 http 请求给数据直连服务")]),n._v(" "),e("p",[n._v("视频中也只是写了这一个商品的多级缓存实现，品牌、分类数据也是一样的思路（视频中没有实现），\n模板也是使用的最简单的信息展示；")])])}),[],!1,null,null,null);s.default=t.exports}}]);