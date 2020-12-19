(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1503:function(v,_,t){"use strict";t.r(_);var s=t(13),r=Object(s.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h1",{attrs:{id:"d4-模型-中台规划建设方法论概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#d4-模型-中台规划建设方法论概述"}},[v._v("#")]),v._v(" D4 模型：中台规划建设方法论概述")]),v._v(" "),s("p",[v._v("上一讲，给你分享了中台建设前需要考虑的四个问题。考虑清楚这些问题能够让我们在真正开始建设中台时，提前规避一些风险。")]),v._v(" "),s("p",[v._v("好，现在假设这些问题我们都已经想清楚了，那中台到底该如何落地呢？")]),v._v(" "),s("p",[v._v("在过去两年多参与中台的建设过程中，我也确实踩了不少的坑，走了不少弯路。下面就用第二部分剩下的几篇文章，为你介绍一下，目前我们在实践中摸索整理出来的中台落地思路，希望对你有帮助和启发。")]),v._v(" "),s("p",[v._v("首先说明一下，就像前面文章提到过的，目前市面上的中台「种类繁多」。不同种类的中台，它们的建设方法可能完全不同，但是肯定有一些思路和方法是通用的。后续部分我将以一个 "),s("strong",[v._v("业务中台")]),v._v(" 的构建过程为样本，为你介绍中台落地的实践，会遇到哪些困难，梳理出一些思路和方法。")]),v._v(" "),s("h2",{attrs:{id:"一个典型业务中台建设的开始阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一个典型业务中台建设的开始阶段"}},[v._v("#")]),v._v(" 一个典型业务中台建设的开始阶段")]),v._v(" "),s("p",[v._v("为了让你体会到中台建设的一些困难和问题，我们还用极客地产的案例来模拟一个中台建设从 0 到 1 的启动过程。")]),v._v(" "),s("p",[v._v("小王接到了老板的委托之后，准备开始极客地产业务中台的建设。")]),v._v(" "),s("p",[v._v("小王是技术和架构师出身，在公司曾主导过几个大系统的分布式服务化改造，对分布式架构设计和实施都非常有经验，对互联网公司在谈到中台时经常提的领域驱动建模啊，微服务技术架构啊，也是轻车熟路。当然了，这也是领导将这个重任交给小王的原因。")]),v._v(" "),s("p",[v._v("说干就干，一开始，小王还像以往一样，准备从业务需求梳理入手。但是第一个问题就把小王给难住了：到底该梳理哪些业务呢？")]),v._v(" "),s("p",[v._v("之前小王处理的都是 "),s("strong",[v._v("单产品级别")]),v._v(" 的，只要抓到这个系统的用户或是业务专家，搞清楚对于产品的需求，不管是一个多复杂的产品，都还是有一个边界的。"),s("strong",[v._v("而做中台，往往涉及到企业所有的业务线")]),v._v("，那是不是该把企业所有的业务都梳理一遍呢？如果这么做，基本上就意味着需要调动整个公司的资源，那各条业务线为什么会配合呢？就算是业务会积极配合，那还有后续的问题，小王到底要梳理到什么粒度呢？")]),v._v(" "),s("p",[v._v("面对各种问题，小王开始觉得有些不太对劲。从技术和架构上来看，做中台和之前做一个分布式系统分明没有什么差别，但是面对的情况和范围以及复杂度，却完全不是一个级别的。一时间都不知道从哪里入手合适。")]),v._v(" "),s("p",[v._v("此时的小王，总感觉有什么不一样，但又说不出来哪里不太对，陷入了深深的焦虑之中。")]),v._v(" "),s("h2",{attrs:{id:"做一个业务中台和做一个分布式系统到底有什么不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#做一个业务中台和做一个分布式系统到底有什么不同"}},[v._v("#")]),v._v(" 做一个业务中台和做一个分布式系统到底有什么不同？")]),v._v(" "),s("p",[v._v("不瞒你说，这个小王就是我 2017 年刚开始做中台规划与落地时的真实写照，当然案例不是这个虚拟的案例，但是当时碰到的真实情况和问题和案例里面的很类似。")]),v._v(" "),s("p",[v._v("而且当时我碰到的问题比这些还要多得多，例如你就算梳理完所有的业务，规划出一个中台，但你怎么证明你这个中台就是对的呢？就是最好的呢？回想那段时间确实是一段比较痛苦的经历，每天脑子里都被这些问题缠绕。而所有的问题最终都可以归纳成一个简单的问题：做一个业务中台和做一个分布式系统到底有什么不同？")]),v._v(" "),s("p",[v._v("不废话，还是直接给答案。经过了很长时间的思考和复盘，我和我的小伙伴发现了问题的关键点，其实非常简单，前面已经反复重复过很多遍了，就是范围不同，如果再说得明确一些，还是那三字："),s("strong",[v._v("企业级")]),v._v("。")]),v._v(" "),s("p",[v._v("为什么我反复强调这三个字呢，我知道很多人刚一开始看到这个三字的时候并没有什么感觉，但是这三个字确实是我们踩了无数坑才提炼出来的，包含了很多问题的答案。")]),v._v(" "),s("p",[v._v("现在回过头来看，做一个中台，当时我们使用的工具和方法以及思路其实都没有太大的问题，"),s("strong",[v._v("只是把中台这件事情的范围和难度想小了，想简单了")]),v._v("。")]),v._v(" "),s("p",[v._v("相信很多人，无论是中台产品经理还是架构师，都跟我当时一样，做得更多的是系统级别或是单条业务级别的系统建设或改造。但是当我们在做中台的时候，我们处理的完全是高一个级别和范围的事情，已经跳出单个产品、单条业务线，涉及到企业的层面。")]),v._v(" "),s("p",[v._v("你可能会问，只是范围大了一些，又会有多大的区别呢，我只能说区别大了。")]),v._v(" "),s("p",[v._v("首先，如果是企业级的问题，你要解决的就是实现企业目标这个级别的问题。这样的问题本身就是模糊的，一般也都是战略级别的，所以不能只从现状的业务入手，要从企业的战略分析开始，充分考虑未来架构规划对于战略的影响。")]),v._v(" "),s("p",[v._v("其次，如果是企业级的问题，"),s("strong",[v._v("你将面对的就是企业的组织问题")]),v._v("。组织问题有时候要比业务问题难处理得多得多，因为涉及到企业利益的再分配。一旦碰到组织和利益的问题，就会有各种被我称之为「为什么系列」的问题，比如最常碰到的就是为什么要配合中台？我为什么要把数据给中台？我为什么要用中台？等等类似的问题。")]),v._v(" "),s("p",[v._v("还有，如果是企业级的问题，回归到业务上，也和过去做系统完全不同。你面对的将是企业的业务全貌，甚至是那些未来才会出现的，现在还不知道长什么样子的潜在的创新业务。")]),v._v(" "),s("p",[v._v("除此之外，还会有无数类似的困难，是我们原来做一个系统和产品所不曾面对的。所以我才把「"),s("strong",[v._v("企业级")]),v._v("」这三个字放到了我对于中台的定义里。时刻提醒自己，我在做的事情和原来做一个系统一个产品，不是一个级别的事情，完全是另外一个物种。")]),v._v(" "),s("p",[v._v("想清楚企业级这个问题，对我还有一个非常大非常大的启发，就是我终于想清楚了之前感觉的那些不对劲的地方到底在哪？实际上，"),s("strong",[v._v("我一直在用一个系统级产品和架构的方式，试图来解决一个企业级产品和架构的问题")]),v._v("。现在再回头看，碰到那些问题和困难也就不奇怪了。")]),v._v(" "),s("p",[v._v("所以，整件事情的性质就变了，虽然我们可能还是会做业务梳理，会做微服务，会用到领域建模等等这些相同的手段，但我们要清楚，当我们在做中台的时候，我们 "),s("strong",[v._v("本质上是在做一个企业级的架构")]),v._v("，一个融入了平台新要素的企业级架构，我称之为："),s("strong",[v._v("面向用户与创新的平台型企业架构")]),v._v("。")]),v._v(" "),s("h2",{attrs:{id:"那问题又来了-中台和传统-ea-有什么不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#那问题又来了-中台和传统-ea-有什么不同"}},[v._v("#")]),v._v(" 那问题又来了，中台和传统 EA 有什么不同？")]),v._v(" "),s("p",[v._v("在想明白了中台这件事情本质上就是个企业级架构的问题后，其实我并没有想象中那么兴奋，反而非常失落，这又是为什么呢？")]),v._v(" "),s("p",[v._v("了解企业架构（Enterprise Architecture）的朋友肯定知道，这也不是什么新的概念， 像 TOGAF 这种成熟的 EA 框架已经有 20 多年的历史了，我们经常见到的例如业务架构、应用架构、技术架构、数据架构甚至是组织架构都是包含在 EA 的完整体系内的。")]),v._v(" "),s("p",[v._v("我当时那种感觉怎么形容呢？就像是以为自己发现了一个新的物种，结果发现根本不是什么新东西，早已被记录在册，印在了每一本百科全书当中。那种失落感可想而知。")]),v._v(" "),s("p",[v._v("还好，故事后来又有了新的转机。经过不断的探索与实践，我发现传统的 EA 架构在处理像中台这种平台型的企业架构时会有很多力不从心的方面，例如：")]),v._v(" "),s("ul",[s("li",[v._v("传统的 EA 方法多是基于业务流程的梳理，产出的也多是要采购或是研发什么样的系统来解决业务流程上的一些问题，所以大多的产出物就是企业要采购像 ERP、CRM 这样的系统来解决特定领域的问题。而对于如何沉淀成平台甚至是中台，好像并不是那么适用。")]),v._v(" "),s("li",[v._v("传统的 EA 方法更多是解决当时信息化背景下的问题，也就是基于现状（As-is）的业务梳理，考虑如何通过系统的构建来解决业务流程的信息化改造问题。而目前大家在构建中台时，往往信息化程度已经非常高了，该有的系统都有了，而中台建设甚至是大家经常挂在嘴边的数字化建设，更多是为了未来（To-be）的业务发展和创新的问题，与传统 EA 的方法好像也不太搭。")]),v._v(" "),s("li",[v._v("传统的 EA 方法多是比较重的流程，需要做长时间大量的调研，产出动辄几百页的规划文档。这在十几年前信息化发展不高、瀑布式流程还占主导地位的时代也是可行和主流的，但是以现在互联网甚至是传统企业的 IT 变化速度，可能就算是花了大力气规划出来，也就过时了，也不太搭。")])]),v._v(" "),s("p",[v._v("因此，我又重燃了对于中台规划建设方法论研究的热情，在想能不能以传统的企业架框架为基础，揉入一些新的配料，例如融入 "),s("strong",[v._v("设计思维（DesignThinking）来解决创新的问题")]),v._v("，融入 "),s("strong",[v._v("领域驱动设计（Domain-Driven Design）来解决中台化能力识别的难题")]),v._v("，再通过融入 "),s("strong",[v._v("敏捷与精益的思想来解决过程重、流程长、变化响应力低的问题")]),v._v("，集众家之长，调和出一套新的企业级架构方法，也就是中台这种面向用户与创新的平台型企业架构。")]),v._v(" "),s("p",[s("img",{attrs:{src:t(948),alt:"img"}})]),v._v(" "),s("p",[v._v("转眼间，两年多过去了，截至目前我们已经摸索出一套改良版的 EA 方法，和我上面说的一样，融合了各家所长。目前我们用这套方法已经帮很多企业进行了中台规划，还有很多已经在落地推进的过程中。可以说，这套方法已经非常成熟，所以今天正式拿出来跟你分享。")]),v._v(" "),s("p",[v._v("这套方法是怎样的呢？我们把它叫作 "),s("strong",[v._v("D4 模型")]),v._v("。")]),v._v(" "),s("h2",{attrs:{id:"中台规划建设方法论-d4-模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中台规划建设方法论-d4-模型"}},[v._v("#")]),v._v(" 中台规划建设方法论：D4 模型")]),v._v(" "),s("p",[v._v("之所以称之为 D4，主要是我们把中台从整体规划到落地交付的过程划分了四个不同的阶段，包含了 "),s("strong",[v._v("两次发散与收敛的过程")]),v._v("。")]),v._v(" "),s("p",[s("img",{attrs:{src:t(949),alt:"img"}})]),v._v(" "),s("p",[v._v("第一个阶段是 "),s("strong",[v._v("Discovery")]),v._v("，帮助我们在中台规划前先建立全局视野。在这个过程中我们以企业愿景和战略为输入，结合行业趋势、竞争对手分析、用户客群分析 、业务现状分析、IT 资产盘点，全方位多角度地理解企业的战略市场环境以及业务及 IT 全貌，帮助我们做出最正确的判断。")]),v._v(" "),s("p",[v._v("第二个阶段是 "),s("strong",[v._v("Define")]),v._v("，帮助我们基于之前 Discovery 发散的各维度信息进行收敛与分析， 对于中台的架构进行定义。通过对跨业务线的业务梳理进行重合度分析，并结合领域分析对业务表象之后的企业核心问题域做进一步展开和重合度分析，一起来收敛推导基于中台的企业架构设计。并基于多维度的打分，形成具体的实施路径规划，说白了就是先做什么后做什么。这里需要注意一点，此时收敛的是仍是企业架构层面，像业务中台、数据中台这种级别的产品，可能只是实施路径中的一个项目，在这个阶段也可以回答那个我们关心的问题，我们到底需不需要中台，需要哪些中台？")]),v._v(" "),s("p",[v._v("第三个阶段是 "),s("strong",[v._v("Design")]),v._v("，帮助我们针对实施路径中的某一个产品，例如业务中台，做详细的设计，包括产品级的业务需求分析、功能及架构设计、实施计划等。例如对于业务中台产品，在 Design 阶段我们需要回答产品的愿景、边界、产品形态、技术架构、交付计划、成本预估等等，这个过程就是一个标准的产品设计过程，只不过在中台项目中大多是针对中台类的产品而已。")]),v._v(" "),s("p",[v._v("第四个阶段就是 "),s("strong",[v._v("Delivery")]),v._v("，这个时候我们就可以针对一个设计好的中台，开始具体的交付过程，我们采用的是敏捷结合精益软件开发的方式，用快速迭代和基于反馈的调整，最大程度地弥补由中台建设本身的复杂度带来的设计偏差和其他的交付问题，并且注重架构的治理与守护，减少实现与设计的偏离。")]),v._v(" "),s("p",[s("img",{attrs:{src:t(950),alt:"img"}})]),v._v(" "),s("p",[v._v("整个 D4 过程，是一个从战略到落地，从企业架构到产品架构最终交付的过程。而且遵循敏捷与精益的思想，整个 D4 的过程也是不断迭代的，例如每一个季度到半年，我们可以重新做一次轻量的 Discovery 和 Define，来不断对企业架构做敏捷的调整，以应对市场和自身的变化和不确定性。")]),v._v(" "),s("p",[v._v("为什么叫 D4，不叫 4D？这里其实还有个小彩蛋，因为我们认为 D4 在中文里的发音有点像 Diss，代表了我们不断挑战旧的业务形式、不断创新、不断改变的一种态度，也非常符合现在企业数字化转型的浪潮。")]),v._v(" "),s("h2",{attrs:{id:"总结思考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结思考"}},[v._v("#")]),v._v(" 总结思考")]),v._v(" "),s("p",[v._v("今天这讲，我带你从一个典型的中台建设在启动阶段就会碰到的问题切入，详细阐述了做一个中台和做一个分布式系统的区别，并最终了解到中台背后的本质问题，其实是 "),s("strong",[v._v("一个面向用户与创新的平台型企业架构的问题")]),v._v("。")]),v._v(" "),s("p",[v._v("之后，我们又分析了为什么传统的企业架构方法在处理中台问题上有局限，结合其他的一些比较新的实践，融合而成我们现在的中台规划与建设方法论，D4 模型。")]),v._v(" "),s("p",[v._v("最后，为你简单介绍了一下 D4 模型的全貌和思路。截至目前我们已经通过这个方法论，在帮助多家企业开展中台的规划与落地实施。")]),v._v(" "),s("p",[v._v("从目前的反馈效果来讲，这个模型还是非常好用的，因为这个方法背后其实践行了一种我们称之为 Think Big，Start Small，Move Fast 的原则，既要想得长远，又要快速切入，并保持持续演进。在应对不确定性和复杂性都异常高的中台规划与建设任务时，这样的原则尤其适合和必要。")]),v._v(" "),s("p",[s("img",{attrs:{src:t(951),alt:"img"}})]),v._v(" "),s("p",[v._v("最后，给你留几个思考题：")]),v._v(" "),s("ul",[s("li",[v._v("在中台建设过程中，你遇到过什么样的问题？又是如何应对的？")]),v._v(" "),s("li",[v._v("你所在的企业，正在使用什么样的方法规划与建设中台？与我所讲的 D4 模型有哪些相同和不同之处？")])])])}),[],!1,null,null,null);_.default=r.exports},948:function(v,_,t){v.exports=t.p+"assets/img/c794555795cb6b7ae402bd07c6fa7042.c7945557.jpg"},949:function(v,_,t){v.exports=t.p+"assets/img/8de307a7276e231a43bf93cb9e3dbb99.8de307a7.jpg"},950:function(v,_,t){v.exports=t.p+"assets/img/ade8c61a0455d71de6a78b88f111368a.ade8c61a.jpg"},951:function(v,_,t){v.exports=t.p+"assets/img/0b1b2019ab7cac101f320ac3ccc84e28.0b1b2019.jpg"}}]);