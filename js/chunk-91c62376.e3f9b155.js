(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91c62376"],{"057f":function(t,e,n){var r=n("fc6a"),c=n("241c").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return c(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?a(t):c(r(t))}},"159b":function(t,e,n){var r=n("da84"),c=n("fdbc"),i=n("17c2"),o=n("9112");for(var a in c){var u=r[a],f=u&&u.prototype;if(f&&f.forEach!==i)try{o(f,"forEach",i)}catch(s){f.forEach=i}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,c=n("a640"),i=c("forEach");t.exports=i?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var r=n("d039"),c=n("b622"),i=n("2d00"),o=c("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"34eb":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABk0lEQVRoQ+2Z3UYFURSA1/c8dVcv0H23iYiIiIiIiH5ERMQhIiIi0kPUfd3Vk/QAO5s5HJmzW2f/tbZm7saZGd+31p519lqDNH7QOL8MAn+dwSED/y4DzrkTEVkWkS8ReQX8efRRdQl18McTtJ/AfDS9SL0q1APvud+BRfMCU+A996n5JRSAPwLOUqLv7y36DgTgD4HzVPiiAgH4A+AiB3wxgQD8PnCZC76IgHPOl8m+2r4HXOWEzy4QgN8FRrnhswoE4HeA6xLw2QQC8NvATSn4LAIB+C3gtiR8skCg2mwCd6XhkwQC8BvAfQ34aIEA/DrwUAs+SiAAvwY81oSPFfgQkbkfoKvAU234WIE3EVloWcBvEya7qrFLG0vI0zb9Eo/D3XQZVUjY/yNTSNjfSigk7G/mFBL2t9MKCfsNjULCfkupkLDf1Csk7I9VFBL2B1sKCfujRYWE/eHuLxLtfB+Ysot9AZZSGqGi0+k+sG4Ms9L99mz++0BKdDX3Vs+ABmqWawaBWaJV4tohAyWiOsszvwGAjbUxED2S5gAAAABJRU5ErkJggg=="},"364c":function(t,e,n){},3927:function(t,e,n){"use strict";n("9001")},"41d6":function(t,e,n){},"4de4":function(t,e,n){"use strict";var r=n("23e7"),c=n("b727").filter,i=n("1dde"),o=i("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"65f0":function(t,e,n){var r=n("861d"),c=n("e8b5"),i=n("b622"),o=i("species");t.exports=function(t,e){var n;return c(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!c(n.prototype)?r(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"6ab7":function(t,e,n){"use strict";n.r(e);n("a4d3"),n("e01a");var r=n("7a23"),c=Object(r["h"])("商品详情"),i=Object(r["h"])("新书"),o=Object(r["h"])("推荐"),a=Object(r["h"])("加入购物车"),u=Object(r["h"])("立即购买");function f(t,e,n,f,s,l){var b=Object(r["F"])("nav-bar"),d=Object(r["F"])("van-image"),O=Object(r["F"])("van-tag"),p=Object(r["F"])("van-button"),v=Object(r["F"])("van-card"),j=Object(r["F"])("van-tab"),g=Object(r["F"])("goods-list"),y=Object(r["F"])("van-tabs");return Object(r["x"])(),Object(r["f"])("div",null,[Object(r["i"])(b,null,{default:Object(r["O"])((function(){return[c]})),_:1}),Object(r["i"])(d,{style:{"margin-top":"50px"},width:"100%","lazy-load":"",src:t.details.cover_url},null,8,["src"]),Object(r["i"])(v,{style:{"text-align":"left"},num:t.details.stock,price:t.details.price+".00",desc:t.details.description,title:t.details.title},{tags:Object(r["O"])((function(){return[Object(r["i"])(O,{plain:"",type:"danger"},{default:Object(r["O"])((function(){return[i]})),_:1}),Object(r["P"])(Object(r["i"])(O,{plain:"",type:"danger"},{default:Object(r["O"])((function(){return[o]})),_:1},512),[[r["L"],t.details.is_recommend]])]})),footer:Object(r["O"])((function(){return[Object(r["i"])(p,{type:"warning",onClick:f.handleAddCart},{default:Object(r["O"])((function(){return[a]})),_:1},8,["onClick"]),Object(r["i"])(p,{type:"danger",onClick:f.goToCart},{default:Object(r["O"])((function(){return[u]})),_:1},8,["onClick"])]})),_:1},8,["num","price","desc","title"]),Object(r["i"])(y,{modelValue:f.active,"onUpdate:modelValue":e[1]||(e[1]=function(t){return f.active=t})},{default:Object(r["O"])((function(){return[Object(r["i"])(j,{title:"概述"},{default:Object(r["O"])((function(){return[Object(r["i"])("div",{class:"content",innerHTML:t.details.details},null,8,["innerHTML"])]})),_:1}),Object(r["i"])(j,{title:"热评"}),Object(r["i"])(j,{title:"相关图书"},{default:Object(r["O"])((function(){return[Object(r["i"])(g,{goods:t.like_goods},null,8,["goods"])]})),_:1})]})),_:1},8,["modelValue"])])}var s=n("5530"),l=(n("e7e5"),n("d399")),b=n("a7ac"),d=n("6d71"),O=n("6c02"),p=n("5502"),v=n("1bab");function j(t){return Object(v["a"])({url:"/api/goods/"+t})}var g=n("5a07"),y={name:"Detail",components:{NavBar:b["a"],GoodsList:d["a"]},setup:function(){var t=Object(O["c"])(),e=Object(O["d"])(),n=Object(p["b"])(),c=Object(r["C"])(0),i=Object(r["C"])(0),o=Object(r["B"])({details:{},like_goods:{},comments:{}});Object(r["u"])((function(){c.value=t.query.id,j(c.value).then((function(t){console.log(t),o.details=t.goods,o.like_goods=t.like_goods}))}));var a=function(){Object(g["a"])({goods_id:o.details.id,num:1}).then((function(t){"201"!=t.status&&"204"!=t.status||(l["a"].success("添加成功"),n.dispatch("updateCart"))}))},u=function(){Object(g["a"])({goods_id:o.details.id,num:1}).then((function(t){"201"!=t.status&&"204"!=t.status||(l["a"].success("添加成功，显示购物车"),n.dispatch("updateCart"),e.push({path:"/shopcart"}))}))};return Object(s["a"])(Object(s["a"])({id:c,active:i},Object(r["J"])(o)),{},{handleAddCart:a,goToCart:u})}};n("3927");y.render=f;e["default"]=y},"6d71":function(t,e,n){"use strict";var r=n("7a23"),c=Object(r["R"])("data-v-7f9eb2ae");Object(r["A"])("data-v-7f9eb2ae");var i={class:"goods"};Object(r["y"])();var o=c((function(t,e,n,c,o,a){var u=Object(r["F"])("goods-list-item");return Object(r["x"])(),Object(r["f"])("div",i,[(Object(r["x"])(!0),Object(r["f"])(r["a"],null,Object(r["D"])(n.goods,(function(t){return Object(r["x"])(),Object(r["f"])(u,{key:t,product:t},null,8,["product"])})),128))])})),a=Object(r["R"])("data-v-5a9d457f");Object(r["A"])("data-v-5a9d457f");var u={alt:""},f={class:"goods-info"},s={class:"price"},l=Object(r["i"])("small",null,"￥",-1),b={class:"collect"};Object(r["y"])();var d=a((function(t,e,n,c,i,o){var a=Object(r["G"])("lazy");return Object(r["x"])(),Object(r["f"])("div",{class:"goods-item",onClick:e[1]||(e[1]=function(){return c.itemClick&&c.itemClick.apply(c,arguments)})},[Object(r["P"])(Object(r["i"])("img",u,null,512),[[a,n.product.cover_url]]),Object(r["i"])("div",f,[Object(r["i"])("p",null,Object(r["I"])(n.product.title),1),Object(r["i"])("span",s,[l,Object(r["h"])(Object(r["I"])(n.product.price),1)]),Object(r["i"])("span",b,Object(r["I"])(n.product.collects_count),1)])])})),O=n("6c02"),p={name:"GoodsListItem",props:{product:{type:Object,default:function(){return{}}}},setup:function(t){var e=Object(O["d"])();return{itemClick:function(){e.push({path:"/detail",query:{id:t.product.id}})}}}};n("93a8");p.render=d,p.__scopeId="data-v-5a9d457f";var v=p,j={name:"GoodsList",components:{GoodsListItem:v},props:{goods:{type:Array,default:function(){return[]}}}};n("edae");j.render=o,j.__scopeId="data-v-7f9eb2ae";e["a"]=j},"746f":function(t,e,n){var r=n("428f"),c=n("5135"),i=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});c(e,t)||o(e,t,{value:i.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),c=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?c.f(t,o,i(0,n)):t[o]=n}},"8b65":function(t,e,n){"use strict";n("41d6")},9001:function(t,e,n){},"93a8":function(t,e,n){"use strict";n("364c")},a4d3:function(t,e,n){"use strict";var r=n("23e7"),c=n("da84"),i=n("d066"),o=n("c430"),a=n("83ab"),u=n("4930"),f=n("fdbf"),s=n("d039"),l=n("5135"),b=n("e8b5"),d=n("861d"),O=n("825a"),p=n("7b0b"),v=n("fc6a"),j=n("c04e"),g=n("5c6c"),y=n("7c73"),h=n("df75"),m=n("241c"),A=n("057f"),w=n("7418"),S=n("06cf"),k=n("9bf2"),E=n("d1e7"),C=n("9112"),P=n("6eeb"),_=n("5692"),x=n("f772"),D=n("d012"),I=n("90e3"),L=n("b622"),B=n("e538"),F=n("746f"),Q=n("d44e"),R=n("69f3"),N=n("b727").forEach,U=x("hidden"),V="Symbol",G="prototype",H=L("toPrimitive"),J=R.set,T=R.getterFor(V),W=Object[G],z=c.Symbol,q=i("JSON","stringify"),M=S.f,Y=k.f,Z=A.f,X=E.f,K=_("symbols"),$=_("op-symbols"),tt=_("string-to-symbol-registry"),et=_("symbol-to-string-registry"),nt=_("wks"),rt=c.QObject,ct=!rt||!rt[G]||!rt[G].findChild,it=a&&s((function(){return 7!=y(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=M(W,e);r&&delete W[e],Y(t,e,n),r&&t!==W&&Y(W,e,r)}:Y,ot=function(t,e){var n=K[t]=y(z[G]);return J(n,{type:V,tag:t,description:e}),a||(n.description=e),n},at=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},ut=function(t,e,n){t===W&&ut($,e,n),O(t);var r=j(e,!0);return O(n),l(K,r)?(n.enumerable?(l(t,U)&&t[U][r]&&(t[U][r]=!1),n=y(n,{enumerable:g(0,!1)})):(l(t,U)||Y(t,U,g(1,{})),t[U][r]=!0),it(t,r,n)):Y(t,r,n)},ft=function(t,e){O(t);var n=v(e),r=h(n).concat(Ot(n));return N(r,(function(e){a&&!lt.call(n,e)||ut(t,e,n[e])})),t},st=function(t,e){return void 0===e?y(t):ft(y(t),e)},lt=function(t){var e=j(t,!0),n=X.call(this,e);return!(this===W&&l(K,e)&&!l($,e))&&(!(n||!l(this,e)||!l(K,e)||l(this,U)&&this[U][e])||n)},bt=function(t,e){var n=v(t),r=j(e,!0);if(n!==W||!l(K,r)||l($,r)){var c=M(n,r);return!c||!l(K,r)||l(n,U)&&n[U][r]||(c.enumerable=!0),c}},dt=function(t){var e=Z(v(t)),n=[];return N(e,(function(t){l(K,t)||l(D,t)||n.push(t)})),n},Ot=function(t){var e=t===W,n=Z(e?$:v(t)),r=[];return N(n,(function(t){!l(K,t)||e&&!l(W,t)||r.push(K[t])})),r};if(u||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),n=function(t){this===W&&n.call($,t),l(this,U)&&l(this[U],e)&&(this[U][e]=!1),it(this,e,g(1,t))};return a&&ct&&it(W,e,{configurable:!0,set:n}),ot(e,t)},P(z[G],"toString",(function(){return T(this).tag})),P(z,"withoutSetter",(function(t){return ot(I(t),t)})),E.f=lt,k.f=ut,S.f=bt,m.f=A.f=dt,w.f=Ot,B.f=function(t){return ot(L(t),t)},a&&(Y(z[G],"description",{configurable:!0,get:function(){return T(this).description}}),o||P(W,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:z}),N(h(nt),(function(t){F(t)})),r({target:V,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=z(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ct=!0},useSimple:function(){ct=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!a},{create:st,defineProperty:ut,defineProperties:ft,getOwnPropertyDescriptor:bt}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:dt,getOwnPropertySymbols:Ot}),r({target:"Object",stat:!0,forced:s((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(p(t))}}),q){var pt=!u||s((function(){var t=z();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}));r({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,n){var r,c=[t],i=1;while(arguments.length>i)c.push(arguments[i++]);if(r=e,(d(e)||void 0!==t)&&!at(t))return b(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),c[1]=e,q.apply(null,c)}})}z[G][H]||C(z[G],H,z[G].valueOf),Q(z,V),D[U]=!0},a52c:function(t,e,n){},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a7ac:function(t,e,n){"use strict";var r=n("7a23"),c=n("34eb"),i=n.n(c),o=Object(r["R"])("data-v-4bf68150");Object(r["A"])("data-v-4bf68150");var a={class:"nav-bar"},u=Object(r["i"])("img",{src:i.a,alt:""},null,-1),f={class:"center"},s=Object(r["h"])("EWShop"),l={class:"right"};Object(r["y"])();var b=o((function(t,e,n,c,i,o){return Object(r["x"])(),Object(r["f"])("div",a,[Object(r["i"])("div",{class:"left",onClick:e[1]||(e[1]=function(){return c.goback&&c.goback.apply(c,arguments)})},[Object(r["E"])(t.$slots,"left",{},(function(){return[u]}))]),Object(r["i"])("div",f,[Object(r["E"])(t.$slots,"default",{},(function(){return[s]}))]),Object(r["i"])("div",l,[Object(r["E"])(t.$slots,"right")])])})),d=n("6c02"),O={name:"NavBar",setup:function(){var t=Object(d["d"])(),e=function(){t.go(-1)};return{goback:e}}};n("8b65");O.render=b,O.__scopeId="data-v-4bf68150";e["a"]=O},b727:function(t,e,n){var r=n("0366"),c=n("44ad"),i=n("7b0b"),o=n("50c4"),a=n("65f0"),u=[].push,f=function(t){var e=1==t,n=2==t,f=3==t,s=4==t,l=6==t,b=7==t,d=5==t||l;return function(O,p,v,j){for(var g,y,h=i(O),m=c(h),A=r(p,v,3),w=o(m.length),S=0,k=j||a,E=e?k(O,w):n||b?k(O,0):void 0;w>S;S++)if((d||S in m)&&(g=m[S],y=A(g,S,h),t))if(e)E[S]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return S;case 2:u.call(E,g)}else switch(t){case 4:return!1;case 7:u.call(E,g)}return l?-1:f||s?s:E}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},dbb4:function(t,e,n){var r=n("23e7"),c=n("83ab"),i=n("56ef"),o=n("fc6a"),a=n("06cf"),u=n("8418");r({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),c=a.f,f=i(r),s={},l=0;while(f.length>l)n=c(r,e=f[l++]),void 0!==n&&u(s,e,n);return s}})},e01a:function(t,e,n){"use strict";var r=n("23e7"),c=n("83ab"),i=n("da84"),o=n("5135"),a=n("861d"),u=n("9bf2").f,f=n("e893"),s=i.Symbol;if(c&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof b?new s(t):void 0===t?s():s(t);return""===t&&(l[e]=!0),e};f(b,s);var d=b.prototype=s.prototype;d.constructor=b;var O=d.toString,p="Symbol(test)"==String(s("test")),v=/^Symbol\((.*)\)[^)]+$/;u(d,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=O.call(t);if(o(l,t))return"";var n=p?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:b})}},e439:function(t,e,n){var r=n("23e7"),c=n("d039"),i=n("fc6a"),o=n("06cf").f,a=n("83ab"),u=c((function(){o(1)})),f=!a||u;r({target:"Object",stat:!0,forced:f,sham:!a},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},edae:function(t,e,n){"use strict";n("a52c")}}]);
//# sourceMappingURL=chunk-91c62376.e3f9b155.js.map