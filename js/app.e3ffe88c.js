(function(e){function t(t){for(var a,c,o=t[0],i=t[1],d=t[2],s=0,f=[];s<o.length;s++)c=o[s],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&f.push(u[c][0]),u[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==u[o]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},u={app:0},r=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-470256da":"d2636ba6","chunk-1d90787c":"32ad60af","chunk-66684e3a":"fe331ac4","chunk-cd9ea09c":"ee7ae297","chunk-5116442b":"b5d33073","chunk-0cb0d81c":"2fe33ec1","chunk-21768997":"99b8304c","chunk-fdadd776":"dc5362f4","chunk-737e9174":"49bb5b49","chunk-5bf67e84":"86f3c035","chunk-32bda2fb":"c6e06b1a","chunk-3936ff8a":"eafad1c2","chunk-a4af2c9a":"45f11e7b","chunk-91c62376":"e3f9b155","chunk-e0ce4d4c":"43c183d8","chunk-14235f8a":"64457d33","chunk-4df13e72":"cba02b35"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-470256da":1,"chunk-1d90787c":1,"chunk-66684e3a":1,"chunk-cd9ea09c":1,"chunk-5116442b":1,"chunk-0cb0d81c":1,"chunk-21768997":1,"chunk-fdadd776":1,"chunk-737e9174":1,"chunk-5bf67e84":1,"chunk-32bda2fb":1,"chunk-3936ff8a":1,"chunk-a4af2c9a":1,"chunk-91c62376":1,"chunk-e0ce4d4c":1,"chunk-14235f8a":1,"chunk-4df13e72":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-470256da":"6ca4264e","chunk-1d90787c":"b198d396","chunk-66684e3a":"54af4899","chunk-cd9ea09c":"1889910b","chunk-5116442b":"6ca4264e","chunk-0cb0d81c":"5625035f","chunk-21768997":"eed200c6","chunk-fdadd776":"d7314a60","chunk-737e9174":"6ca4264e","chunk-5bf67e84":"e5f65790","chunk-32bda2fb":"d82f17d7","chunk-3936ff8a":"377ec650","chunk-a4af2c9a":"9a44edeb","chunk-91c62376":"a31d284e","chunk-e0ce4d4c":"6ca4264e","chunk-14235f8a":"96e8a39a","chunk-4df13e72":"b906e393"}[e]+".css",u=i.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var d=r[o],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===a||s===u))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){d=f[o],s=d.getAttribute("data-href");if(s===a||s===u)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||u,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],l.parentNode.removeChild(l),n(r)},l.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){c[e]=0})));var a=u[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=u[e]=[t,n]}));t.push(a[2]=r);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=o(e);var f=new Error;d=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=u[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",f.name="ChunkLoadError",f.type=a,f.request=c,n[1](f)}u[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var f=0;f<d.length;f++)t(d[f]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1bab":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("9a83");var a=n("f564"),c=(n("e7e5"),n("d399")),u=(n("b64b"),n("bc3a")),r=n.n(u),o=n("a18c");function i(e){var t=r.a.create({baseURL:"https://api.shop.eduwork.cn",timeout:5e3});return t.interceptors.request.use((function(e){var t=window.localStorage.getItem("token");return t&&(e.headers.Authorization="Bearer "+t),e}),(function(e){})),t.interceptors.response.use((function(e){return e.data?e.data:e}),(function(e){"401"==e.response.status&&(c["a"].fail("请先登录"),o["a"].push({path:"/login"})),Object(a["a"])(e.response.data.errors[Object.keys(e.response.data.errors)[0]][0])})),t(e)}},"1c8d":function(e,t,n){"use strict";n("ff77")},4360:function(e,t,n){"use strict";var a=n("5502"),c={setIsLogin:function(e,t){e.user.isLogin=t},addCart:function(e,t){e.cartCount=t.count}},u=c,r=n("5a07"),o={updateCart:function(e){var t=e.commit;Object(r["d"])().then((function(e){t("addCart",{count:e.data.length||0})}))}},i=o,d={},s=d,f={user:{isLogin:!!window.localStorage.getItem("token")},cartCount:0};t["a"]=Object(a["a"])({state:f,mutations:u,actions:i,getters:s,modules:{}})},"56d7":function(e,t,n){"use strict";n.r(t);n("7844");var a=n("5596"),c=(n("4b0a"),n("2bb1")),u=(n("66cf"),n("343b")),r=(n("18e9"),n("471a")),o=(n("570a"),n("1d36")),i=(n("a39e"),n("241e")),d=(n("5d17"),n("f9bd")),s=(n("342a"),n("1437")),f=(n("da3c"),n("0b33")),l=(n("bda7"),n("5e46")),h=(n("9cb7"),n("66fd")),b=(n("4056"),n("44bf")),p=(n("5f1a"),n("a3e2")),m=(n("66b9"),n("b650")),k=(n("38d5"),n("772a")),O=(n("be7f"),n("565f")),v=(n("3c32"),n("417e")),g=(n("a909"),n("3acc")),j=(n("4467"),n("c36e")),y=(n("f06a"),n("20fb")),w=(n("be39"),n("efa0")),P=(n("c3a6"),n("ad06")),A=(n("e930"),n("8f80")),C=(n("acb7"),n("67bb")),_=(n("869a"),n("6869")),S=(n("8a58"),n("e41f")),q=(n("3df5"),n("2830")),E=(n("0ec5"),n("21ab")),L=(n("2994"),n("2bdd")),x=(n("ab71"),n("58e6")),R=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7a23")),T={id:"nav"},D=Object(R["i"])("div",{class:"icon"},[Object(R["i"])("i",{class:"iconfont icon-shouye"})],-1),N=Object(R["i"])("div",null,"首页",-1),B=Object(R["i"])("div",{class:"icon"},[Object(R["i"])("i",{class:"iconfont icon-leimupinleifenleileibie"})],-1),F=Object(R["i"])("div",null,"分类",-1),I={class:"icon"},M=Object(R["i"])("i",{class:"iconfont icon-gouwuche1"},null,-1),H=Object(R["i"])("div",null,"购物车",-1),J=Object(R["i"])("div",{class:"icon"},[Object(R["i"])("i",{class:"iconfont icon-wode"})],-1),U=Object(R["i"])("div",null,"我的",-1);function z(e,t,n,a,c,u){var r=Object(R["F"])("router-view"),o=Object(R["F"])("router-link"),i=Object(R["F"])("van-badge");return Object(R["x"])(),Object(R["f"])(R["a"],null,[Object(R["i"])(r),Object(R["i"])("div",T,[Object(R["i"])(o,{class:"tab-bar-item",to:"/"},{default:Object(R["O"])((function(){return[D,N]})),_:1}),Object(R["i"])(o,{class:"tab-bar-item",to:"/category"},{default:Object(R["O"])((function(){return[B,F]})),_:1}),Object(R["i"])(o,{class:"tab-bar-item",to:"/shopcart"},{default:Object(R["O"])((function(){return[Object(R["i"])("div",I,[Object(R["i"])(i,{content:e.$store.state.cartCount,max:"9"},{default:Object(R["O"])((function(){return[M]})),_:1},8,["content"])]),H]})),_:1}),Object(R["i"])(o,{class:"tab-bar-item",to:"/profile"},{default:Object(R["O"])((function(){return[J,U]})),_:1})])],64)}var K=n("5502"),$={setup:function(){var e=Object(K["b"])();Object(R["u"])((function(){e.dispatch("updateCart")}))}};n("1c8d");$.render=z;var G=$,Q=n("a18c"),V=n("4360");n("157a");Object(R["e"])(G).use(a["a"]).use(c["a"]).use(u["a"],{loading:n("6bcd")}).use(r["a"]).use(o["a"]).use(i["a"]).use(d["a"]).use(s["a"]).use(f["a"]).use(l["a"]).use(h["a"]).use(b["a"]).use(p["a"]).use(m["a"]).use(k["a"]).use(O["a"]).use(v["a"]).use(g["a"]).use(j["a"]).use(y["a"]).use(w["a"]).use(P["a"]).use(A["a"]).use(C["a"]).use(_["a"]).use(S["a"]).use(q["a"]).use(E["a"]).use(L["a"]).use(x["a"]).use(V["a"]).use(Q["a"]).mount("#app")},"5a07":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return i}));var a=n("1bab");function c(e){return Object(a["a"])({url:"/api/carts",method:"post",data:e})}function u(e,t){return Object(a["a"])({url:"/api/carts/".concat(e),method:"put",data:t})}function r(e){return Object(a["a"])({url:"/api/carts/checked",method:"patch",data:e})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(a["a"])({url:"/api/carts?"+e})}function i(e){return Object(a["a"])({url:"/api/carts/".concat(e),method:"delete"})}},"6bcd":function(e,t,n){e.exports=n.p+"img/default.1f3a2bab.png"},a18c:function(e,t,n){"use strict";n("9a83");var a=n("f564"),c=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),u=n("4360"),r=function(){return Promise.all([n.e("chunk-737e9174"),n.e("chunk-5bf67e84"),n.e("chunk-32bda2fb")]).then(n.bind(null,"b3d7"))},o=function(){return Promise.all([n.e("chunk-737e9174"),n.e("chunk-5bf67e84"),n.e("chunk-3936ff8a")]).then(n.bind(null,"bb51"))},i=function(){return n.e("chunk-91c62376").then(n.bind(null,"6ab7"))},d=function(){return Promise.all([n.e("chunk-470256da"),n.e("chunk-66684e3a")]).then(n.bind(null,"3b423"))},s=function(){return Promise.all([n.e("chunk-e0ce4d4c"),n.e("chunk-4df13e72")]).then(n.bind(null,"712d"))},f=function(){return Promise.all([n.e("chunk-470256da"),n.e("chunk-1d90787c")]).then(n.bind(null,"834e"))},l=function(){return Promise.all([n.e("chunk-470256da"),n.e("chunk-cd9ea09c")]).then(n.bind(null,"07ac"))},h=function(){return Promise.all([n.e("chunk-e0ce4d4c"),n.e("chunk-14235f8a")]).then(n.bind(null,"dea5"))},b=function(){return Promise.all([n.e("chunk-737e9174"),n.e("chunk-a4af2c9a")]).then(n.bind(null,"8135"))},p=function(){return Promise.all([n.e("chunk-5116442b"),n.e("chunk-21768997")]).then(n.bind(null,"a38c"))},m=function(){return Promise.all([n.e("chunk-5116442b"),n.e("chunk-0cb0d81c")]).then(n.bind(null,"f86d"))},k=function(){return Promise.all([n.e("chunk-5116442b"),n.e("chunk-fdadd776")]).then(n.bind(null,"5a4f"))},O=[{path:"/",name:"DefaultHome",component:r,meta:{title:"图书兄弟"}},{path:"/home",name:"Home",component:r,meta:{title:"图书兄弟"}},{path:"/category",name:"Category",component:o,meta:{title:"图书兄弟-商品分类"}},{path:"/detail",name:"Detail",component:i,meta:{title:"图书兄弟-商品详情"}},{path:"/profile",name:"Profile",component:d,meta:{title:"图书兄弟-个人中心",isAuthRequired:!0}},{path:"/address",name:"Address",component:h,meta:{title:"图书兄弟-地址管理",isAuthRequired:!0}},{path:"/addressedit",name:"AddressEdit",component:b,meta:{title:"图书兄弟-地址编辑",isAuthRequired:!0}},{path:"/register",name:"Regiseter",component:f,meta:{title:"图书兄弟-用户注册"}},{path:"/login",name:"Login",component:l,meta:{title:"图书兄弟-用户登录"}},{path:"/shopcart",name:"ShopCart",component:s,meta:{title:"图书兄弟-购物车",isAuthRequired:!0}},{path:"/createorder",name:"CreateOrder",component:p,meta:{title:"图书兄弟-生成订单",isAuthRequired:!0}},{path:"/order",name:"Order",component:m,meta:{title:"图书兄弟-订单列表",isAuthRequired:!0}},{path:"/orderdetail",name:"OrderDetail",component:k,meta:{title:"图书兄弟-订单详情",isAuthRequired:!0}}],v=Object(c["a"])({history:Object(c["b"])(""),routes:O});v.beforeEach((function(e,t,n){if(e.meta.isAuthRequired&&!1===u["a"].state.user.isLogin)return Object(a["a"])("您还没有登录，请先登录"),n("/login");n(),document.title=e.meta.title})),t["a"]=v},ff77:function(e,t,n){}});
//# sourceMappingURL=app.e3ffe88c.js.map