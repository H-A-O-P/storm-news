webpackJsonp([1],{0:function(t,e,s){s("j1ja"),t.exports=s("NHnr")},"0Cp0":function(t,e,s){"use strict";var n={data:function(){return{ballArr:[]}},mounted:function(){var t=document.getElementById("myCanvas");this.canvasInit(t),this.canvasAnimate()},methods:{canvasInit:function(t){t.width=document.documentElement.clientWidth,t.height=500;for(var e=0;e<10;e++){var s=10*Math.random()+5,n=Math.random()*t.width,a=500*Math.random(),i=Math.random()-.5,r=Math.random()-.5,o="#"+Math.random().toString(16).slice(2,8);this.ballArr.push(new this.Ball(n,a,i,r,s,o))}},Ball:function(t,e,s,n,a,i,r,o){this.x=t,this.y=e,this.dx=s,this.dy=n,this.radius=a,this.color=i,this.draw=function(t,e){(this.x+this.radius>t.width||this.x<this.radius)&&(this.dx=-this.dx),this.x+=this.dx,(this.y+this.radius>500||this.y<this.radius)&&(this.dy=-this.dy),this.y+=this.dy,e.beginPath(),e.arc(this.x,this.y,this.radius,0,2*Math.PI),e.fillStyle=this.color,e.fill(),e.closePath()}},canvasAnimate:function(){window.requestAnimationFrame(this.canvasAnimate);var t=document.getElementById("myCanvas"),e=t.getContext("2d");e.clearRect(0,0,t.width,t.height),this.ballArr.forEach(function(s){s.draw(t,e)})}}},a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("canvas",{attrs:{id:"myCanvas"}})])}]},i=s("VU/8")(n,a,!1,null,null,null);e.a=i.exports},1:function(t,e){},"4nw5":function(t,e){},"5y6V":function(t,e){},MV7t:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("j1ja");var n=s("7+uW"),a=s("mvHQ"),i=s.n(a),r=s("NYxO");n.default.use(r.a);var o=sessionStorage.getItem("state")?JSON.parse(sessionStorage.getItem("state")):{news:"",user:{status:!1}},c=new r.a.Store({state:o,mutations:{getNews:function(t,e){t.news=e},setComments:function(t,e){var s=e.id,n=e.newComments;t.news[s].comments.push(n)}}}),l={name:"newsHeader",data:function(){return{news:[],searchText:"",navs:[{key:1,category:"游戏"},{key:2,category:"工业"},{key:3,category:"商业"},{key:4,category:"科技"}]}},methods:{toUser:function(){this.$store.state.user.status||this.$router.push("/signin")}},store:c},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top"},[s("nav",{staticClass:"nav"},[s("h1",[t._v("Storm新闻")]),t._v(" "),s("div",{staticClass:"left-nav"},[s("router-link",{attrs:{to:"/"}},[t._v("首页")]),t._v(" "),t._l(t.navs,function(e){return s("div",{key:e.key},[s("router-link",{attrs:{to:{path:"/search/"+e.key,query:e}}},[t._v(t._s(e.category))])],1)}),t._v(" "),s("router-link",{attrs:{to:"/"}},[t._v("更多")]),t._v(" "),s("div",{staticClass:"about-me"},[s("div",{staticClass:"slide-up",on:{click:t.toUser}},[t._m(0)]),t._v(" "),t._m(1),t._v(" "),t._m(2)])],2)]),t._v(" "),s("div",{staticClass:"search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"search-input",attrs:{type:"text",placeholder:"搜索"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),t._v(" "),s("router-link",{attrs:{to:{path:"/search/"+t.searchText,query:{searchText:t.searchText}}}},[s("button",{staticClass:"search-btn"},[s("i",{staticClass:"fa fa-search"})])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"i-box"},[e("i",{staticClass:"fas fa-user"}),this._v(" "),e("p",[this._v("个人中心")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"slide-up"},[e("div",{staticClass:"i-box"},[e("i",{staticClass:"fas fa-star"}),this._v(" "),e("p",[this._v("我的关注")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"slide-up"},[e("div",{staticClass:"i-box"},[e("i",{staticClass:"fas fa-envelope"}),this._v(" "),e("p",[this._v("信息")])])])}]};var m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"foot-info"},[e("p",[this._v("公司简介 | 联系方法 | 招聘信息 | 客户服务 | 隐私政策 | 广告服务")])])}]};var h={name:"App",components:{newsHeader:s("VU/8")(l,u,!1,function(t){s("scdE")},null,null).exports,footInfo:s("VU/8")({},m,!1,function(t){s("c2AJ")},"data-v-789df5dd",null).exports},mounted:function(){window.addEventListener("beforeunload",this.saveNews)},methods:{saveNews:function(){sessionStorage.setItem("state",i()(this.$store.state))}},store:c},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("newsHeader"),this._v(" "),e("router-view"),this._v(" "),e("footInfo")],1)},staticRenderFns:[]};var v=s("VU/8")(h,d,!1,function(t){s("5y6V")},null,null).exports,p=s("/ocq"),_=s("c/Tr"),f=s.n(_),g={name:"show",data:function(){return{news:[{id:0,title:"苹果100+款优质游戏随便玩的服务，遭遇了“半年之痒”",author:"Archer",category:"游戏",imgUrl:"https://img1.jiemian.com/101/original/20200305/158339208128371400_a480x270.png",content:"Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式JavaScript框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，方便与第三方库或既有项目整合。",comments:[{text:"Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式JavaScript框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，方便与第三方库或既有项目整合。",date:"2020.1.1"}]},{id:1,title:"移动浪潮里的今日头条与抖音：战微博还是战腾讯",author:"Saber",category:"科技",imgUrl:"https://img2.jiemian.com/101/original/20200305/158337429513627900_a480x270.jpg",content:"React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。",comments:[]},{id:2,title:"快看 | 唯品会2019年净营收930亿元，活跃用户同比增长...",author:"Rider",category:"商业",imgUrl:"https://img2.jiemian.com/101/original/20200305/158340700628322300_a480x270.jpg",content:"AngularJS诞生于2009年，由Misko Hevery 等人创建，后为Google所收购。是一款优秀的前端JS框架，已经被用于Google的多款产品当中。AngularJS有着诸多特性，最为核心的是：MVC（Model–view–controller）、模块化、自动化双向数据绑定、语义化标签、依赖注入等等。",comments:[]},{id:3,title:"瑞银：预计中国光伏装机量“十四五”期间将翻番",author:"Assassin",category:"工业",imgUrl:"https://img3.jiemian.com/101/original/20200305/158339587327357700_a480x270.jpg",content:"jQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互。",comments:[]},{id:4,title:"空中网子公司向360质押股权，《坦克世界》代理生变",author:"Archer",category:"游戏",imgUrl:"https://img3.jiemian.com/101/original/20200302/158313199165965800_a480x270.jpg",content:"",comments:[]},{id:5,title:"“魂斗罗密技”之父桥本和久逝世，他的创造曾为游戏带来各种彩蛋",author:"Archer",category:"游戏",imgUrl:"https://img3.jiemian.com/101/original/20200227/158278800133335600_a480x270.png",content:"",comments:[]},{id:6,title:"市值突破80亿美元，《巫师》开发商成欧洲第二大游戏公司",author:"Archer",category:"游戏",imgUrl:"https://img2.jiemian.com/101/original/20200224/158252429916754700_a480x270.jpg",content:"",comments:[]},{id:7,title:"干掉英伟达？",author:"Saber",category:"科技",imgUrl:"https://img1.jiemian.com/101/original/20200305/15833711172079400_a480x270.png",content:"",comments:[]},{id:8,title:"刷机、“越狱”或成历史，第三方应用商店如何求生？",author:"Saber",category:"科技",imgUrl:"https://img3.jiemian.com/101/original/20200304/158332133642955800_a480x270.jpg",content:"",comments:[]},{id:9,title:"信用卡发卡量和交易量呈断崖式下滑，疫情之下银行要如何破局？",author:"Rider",category:"商业",imgUrl:"https://img2.jiemian.com/101/original/20200305/158339556273289600_a480x270.jpg",content:"",comments:[]},{id:10,title:"中国最大核电上市公司董事长辞职",author:"Assassin",category:"工业",imgUrl:"https://img3.jiemian.com/101/original/20200303/15832271445298400_a480x270.jpg",content:"",comments:[]},{id:11,title:"三一重工近一年股价上涨超140%，市值一度突破1600亿",author:"Assassin",category:"工业",imgUrl:"https://img1.jiemian.com/101/original/20200303/158322437272688400_a480x270.png",content:"",comments:[]}],searchText:""}},created:function(){this.$store.commit("getNews",this.news),this.pageIdFilter()},mounted:function(){this.loadImg(),window.addEventListener("scroll",this.lazyLoad(this.loadImg,500))},methods:{lazyLoad:function(t,e){var s=void 0;return function(){s||(s=setTimeout(function(){t(),s=null},e))}},loadImg:function(){var t=document.querySelectorAll(".news-wrapper");f()(t).forEach(function(t){t.getBoundingClientRect().top<=window.innerHeight&&t.firstElementChild.setAttribute("src",t.firstElementChild.getAttribute("data-src"))})},pageIdFilter:function(){var t=this.route?this.route.query.pageID:1;this.news=this.news.slice(9*(t-1),9*t)},toUser:function(){this.$store.state.user.status||this.$router.push("/signin")}},components:{},store:c},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"show"},[s("div",{staticClass:"container"},[s("h2",{staticClass:"newst"},[t._v("最新资讯")]),t._v(" "),s("div",{staticClass:"middle"},[s("div",{staticClass:"news-box"},t._l(t.news,function(e){return s("div",{key:e.id},[s("router-link",{attrs:{to:{path:"/news/"+e.id}}},[s("div",{staticClass:"news-wrapper"},[s("img",{attrs:{src:1,"data-src":e.imgUrl}}),t._v(" "),s("div",{staticClass:"info"},[s("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),s("p",{staticClass:"news-info"},[s("span",[t._v("作者："+t._s(e.author))]),t._v(" "),s("span",[t._v("分类："+t._s(e.category))]),t._v(" "),s("i",{staticClass:"iconfont icon-pinglun"}),t._v(" "),s("span",{staticClass:"comments"},[t._v("评论 "+t._s(e.comments.length))])])])])])],1)}),0)]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-line"},[e("div",{staticClass:"next-page"},[e("i",{staticClass:"fa fa-angle-double-left"})]),this._v(" "),e("div",{staticClass:"prev-page"},[e("i",{staticClass:"fas fa-angle-double-right"})])])}]};var C=s("VU/8")(g,w,!1,function(t){s("bZpw")},"data-v-b653f5bc",null).exports,y={name:"singlePage",data:function(){return{news:"",id:"",comments:"",value:"",newsIdArr:[],next:0,prev:0,commentsCount:0}},beforeRouteUpdate:function(t,e,s){s(),this.loadContent()},mounted:function(){this.newsIdArr=this.$route.query.newsIdArr,this.newsArr=this.$store.state.news,this.loadContent()},methods:{addComments:function(){if(this.value){var t=(new Date).toLocaleDateString();this.$store.commit("setComments",{id:this.id,newComments:{text:this.value,date:t}}),this.value="",this.commentsCount++}},loadContent:function(){if(this.id=this.$route.params.id,this.news=this.newsArr[this.id],this.comments=this.news.comments,this.commentsCount=this.comments.length,this.newsIdArr){for(var t=0;t<this.newsIdArr.length;t++)if(this.newsIdArr[t]==this.id){var e=this.newsIdArr[t-1];this.prev=t-1>=0?this.newsArr[e]:null;var s=this.newsIdArr[t+1];this.next=t+1<this.newsIdArr.length?this.newsArr[s]:null;break}}else{var n=parseInt(this.id)-1;this.prev=n>=0?this.newsArr[n]:null;var a=parseInt(this.id)+1;this.next=a<this.newsArr.length?this.newsArr[a]:null}}},components:{},store:c},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container"},[s("div",{staticClass:"single-page"},[s("div",{staticClass:"title"},[t._v(t._s(t.news.title))]),t._v(" "),s("img",{attrs:{src:t.news.imgUrl}}),t._v(" "),s("p",{staticClass:"content"},[t._v(t._s(t.news.content))]),t._v(" "),s("div",{staticClass:"info"},[s("span",[t._v("作者："+t._s(t.news.author))]),t._v(" "),s("span",[t._v("分类："+t._s(t.news.category))]),t._v(" "),s("i",{staticClass:"iconfont icon-pinglun"}),t._v(" "),s("span",{staticClass:"comment"},[t._v("评论："+t._s(t.commentsCount))])])]),t._v(" "),s("div",{staticClass:"prev-next"},[t.prev?s("router-link",{attrs:{to:{path:"/news/"+t.prev.id,query:{newsIdArr:t.newsIdArr}}}},[t._v("上一条："+t._s(t.prev.title))]):t._e(),t._v(" "),t.next?s("router-link",{attrs:{to:{path:"/news/"+t.next.id,query:{newsIdArr:t.newsIdArr}}}},[t._v("下一条："+t._s(t.next.title))]):t._e()],1),t._v(" "),s("div",{staticClass:"comments"},[s("div",{staticClass:"add-comments"},[s("p",{staticClass:"comments-add"},[t._v("添加评论")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"comments-textArea",attrs:{placeholder:"留下您的足迹吧...",onblur:"placeholder='留下您的足迹吧...'",onfocus:"placeholder=''"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),t._v(" "),s("button",{staticClass:"comments-btn",on:{click:t.addComments}},[t._v("添加")])]),t._v(" "),s("p",{staticClass:"comments-all"},[t._v("全部评论")]),t._v(" "),t.commentsCount?s("div",{staticClass:"comments-box"},t._l(t.comments,function(e){return s("div",{key:e.text,staticClass:"comments-item"},[s("p",{staticClass:"comments-text"},[t._v(t._s(e.text))]),t._v(" "),s("p",{staticClass:"comments-date"},[t._v(t._s(e.date))])])}),0):t._e(),t._v(" "),t.commentsCount?t._e():s("div",{staticClass:"add-remind"},[s("p",[t._v("还没有评论，赶快抢个板凳吧>>")])])])])])},staticRenderFns:[]};var A=s("VU/8")(y,x,!1,function(t){s("nOoM")},"data-v-06d4c4d5",null).exports,b={data:function(){return{news:[],matchText:"",newsIdArr:[],empty:!1}},mounted:function(){this.filterNews(),this.showEmpty()},beforeRouteUpdate:function(t,e,s){s(),this.filterNews(),this.showEmpty()},methods:{filterNews:function(){var t=this;this.news=this.$store.state.news,this.matchText=this.$route.query,this.matchText.category?this.news=this.news.filter(function(e){return e.category==t.matchText.category}):this.news=this.news.filter(function(e){return e.title.match(t.matchText.searchText)}),this.newsIdArr=[],this.news.forEach(function(e){t.newsIdArr.push(parseInt(e.id))})},showEmpty:function(){var t=document.querySelector(".search-tips"),e=t.classList.contains("empty");this.news.length||e||t.classList.add("empty"),this.news.length&&e&&t.classList.remove("empty")}},components:{}},E={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t._l(t.news,function(e){return s("div",{key:e.id},[s("router-link",{attrs:{to:{path:"/news/"+e.id,query:{newsIdArr:t.newsIdArr}}}},[s("div",{staticClass:"box"},[s("img",{attrs:{src:e.imgUrl}}),t._v(" "),s("div",{staticClass:"info"},[s("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),s("p",{staticClass:"news-info"},[s("span",[t._v("作者："+t._s(e.author))]),t._v(" "),s("span",[t._v("分类："+t._s(e.category))]),t._v(" "),s("i",{staticClass:"iconfont icon-pinglun"}),t._v(" "),s("span",{staticClass:"comments"},[t._v("评论 "+t._s(e.comments.length))])])])])])],1)}),t._v(" "),t._m(0)],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search-tips"},[e("h2",[this._v(">>内容为空>>")])])}]};var I=s("VU/8")(b,E,!1,function(t){s("MV7t")},"data-v-226c6ae2",null).exports,k=s("vPtu"),V={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("myCanvas",{attrs:{id:"canvas"}}),t._v(" "),s("div",{staticClass:"input-wrapper"},[s("div",{staticClass:"anno"},[s("h3",[s("i",{staticClass:"fa fa-user"}),t._v("\n                "+t._s(t.tips)+"，请登录\n            ")]),t._v(" "),s("form",{attrs:{"data-rule":'maxlength:12|minlength:6|pattern:"^[a-zA-Z0-9]"'}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.nameValue,expression:"nameValue"}],attrs:{id:"name",type:"text",placeholder:"请输入账号",onfocus:"placeholder=''",onblur:"placeholder='请输入账号'"},domProps:{value:t.nameValue},on:{input:function(e){e.target.composing||(t.nameValue=e.target.value)}}}),t._v(" "),t._m(0),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.psdValue,expression:"psdValue"}],attrs:{id:"password",type:"text",placeholder:"请输入密码",onfocus:"placeholder=''",onblur:"placeholder='请输入密码'"},domProps:{value:t.psdValue},on:{input:function(e){e.target.composing||(t.psdValue=e.target.value)}}}),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("button",{attrs:{id:"anno_btn"}},[t._v("登录")])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"warning hide"},[e("i",{staticClass:"fa fa-times"}),this._v("账号格式错误！")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"warning hide"},[e("i",{staticClass:"fa fa-times"}),this._v("密码格式错误！")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"checkbox-inner"},[e("input",{staticClass:"checkb",attrs:{type:"checkbox"}}),this._v(" "),e("span",{staticClass:"checkbox_text"},[this._v("记住密码！")])])}]};var j=function(t){s("4nw5")},S=s("VU/8")(k.a,V,!1,j,"data-v-5520b300",null).exports;n.default.use(p.a);var U=new p.a({routes:[{path:"/",name:"show",component:C},{path:"/signin",name:"signin",component:S},{path:"/news/:id",name:"singlePage",component:A},{path:"/search/:key",name:"searchPage",component:I}]}),$=s("8+8L"),T=s("zL8q"),M=s.n(T);s("tvR6");n.default.config.productionTip=!1,n.default.use($.a),n.default.use(M.a),new n.default({el:"#app",router:U,components:{App:v},template:"<App/>"})},bZpw:function(t,e){},c2AJ:function(t,e){},nOoM:function(t,e){},scdE:function(t,e){},tvR6:function(t,e){},vPtu:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__components_myCanvas__=__webpack_require__("0Cp0");__webpack_exports__.a={data:function(){return{tips:"",nameValue:"",psdValue:"",rule:{},checkName:!0,checkPsd:!0}},mounted:function(){var t=this;this.sayHello(),this.parserule();var e=document.getElementById("name");e.addEventListener("blur",function(){t.checkName=t.showWarning(e,t.nameValue)});var s=document.getElementById("password");s.addEventListener("blur",function(){t.checkPsd=t.showWarning(s,t.psdValue)})},methods:{sayHello:function(){var t=(new Date).getHours();t<5&&(this.tips="早点休息"),t>=5&&t<8&&(this.tips="早上好"),t>=8&&t<11&&(this.tips="上午好"),t>=11&&t<13&&(this.tips="中午好"),t>=13&&t<18&&(this.tips="下午好"),t>=18&&(this.tips="晚上好")},parserule:function(){var t=this;document.querySelector("form").getAttribute("data-rule").split("|").forEach(function(e){var s=e.split(":");t.rule[s[0]]=JSON.parse(s[1])})},validate:function validate(){function validate_maxlength(t,e){return t.length<=e.maxlength}function validate_minlength(t,e){return t.length>=e.minlength}function validate_pattern(t,e){return new RegExp(e.pattern).test(t)}return function(value,rule){for(var key in rule){var resultTemp=eval("validate_"+key)(value,rule);if(!resultTemp)return!1}return!0}},showWarning:function(t,e){var s=this.validate()(e,this.rule),n=t.nextElementSibling.classList.contains("hide");s&&!n?t.nextElementSibling.classList.add("hide"):!s&&n&&t.nextElementSibling.classList.remove("hide")}},components:{myCanvas:__WEBPACK_IMPORTED_MODULE_0__components_myCanvas__.a}}}},[0]);
//# sourceMappingURL=app.3ea1ae2003a3d30e8062.js.map