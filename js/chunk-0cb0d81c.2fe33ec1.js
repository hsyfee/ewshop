(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cb0d81c"],{"1c98":function(e,t,n){},"4f31":function(e,t,n){"use strict";n("1c98")},"99af":function(e,t,n){"use strict";var a=n("23e7"),c=n("d039"),i=n("e8b5"),o=n("861d"),r=n("7b0b"),d=n("50c4"),l=n("8418"),s=n("65f0"),u=n("1dde"),f=n("b622"),b=n("2d00"),O=f("isConcatSpreadable"),j=9007199254740991,g="Maximum allowed index exceeded",h=b>=51||!c((function(){var e=[];return e[O]=!1,e.concat()[0]!==e})),p=u("concat"),v=function(e){if(!o(e))return!1;var t=e[O];return void 0!==t?!!t:i(e)},m=!h||!p;a({target:"Array",proto:!0,forced:m},{concat:function(e){var t,n,a,c,i,o=r(this),u=s(o,0),f=0;for(t=-1,a=arguments.length;t<a;t++)if(i=-1===t?o:arguments[t],v(i)){if(c=d(i.length),f+c>j)throw TypeError(g);for(n=0;n<c;n++,f++)n in i&&l(u,f,i[n])}else{if(f>=j)throw TypeError(g);l(u,f++,i)}return u.length=f,u}})},f86d:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c=Object(a["R"])("data-v-20d9fe8b");Object(a["A"])("data-v-20d9fe8b");var i={class:"order-box"},o=Object(a["h"])(" 订单列表 "),r={class:"content"},d={class:"order-item-header"},l={style:{"line-height":"30px"}},s=Object(a["i"])("br",null,null,-1);Object(a["y"])();var u=c((function(e,t,n,u,f,b){var O=Object(a["F"])("nav-bar"),j=Object(a["F"])("van-tab"),g=Object(a["F"])("van-tabs"),h=Object(a["F"])("van-card"),p=Object(a["F"])("van-list"),v=Object(a["F"])("van-pull-refresh");return Object(a["x"])(),Object(a["f"])("div",i,[Object(a["i"])(O,{class:"nav-bar"},{default:c((function(){return[o]})),_:1}),Object(a["i"])(g,{ref:"tabs",onClick:u.onChangeTab,class:"order-tab"},{default:c((function(){return[Object(a["i"])(j,{title:"全部"}),Object(a["i"])(j,{title:"待付款"}),Object(a["i"])(j,{title:"已支付"}),Object(a["i"])(j,{title:"发货"}),Object(a["i"])(j,{title:"交易完成"}),Object(a["i"])(j,{title:"过期"})]})),_:1},8,["onClick"]),Object(a["i"])("div",r,[Object(a["i"])(v,{modelValue:e.refreshing,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.refreshing=t}),onRefresh:u.onRefresh,class:"order-list-refresh"},{default:c((function(){return[Object(a["i"])(p,{loading:e.loading,"onUpdate:loading":t[1]||(t[1]=function(t){return e.loading=t}),finished:e.finished,"finished-text":"没有更多了",onLoad:u.onLoad,onOffset:function(e){return 10}},{default:c((function(){return[(Object(a["x"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(e.list,(function(e,t){return Object(a["x"])(),Object(a["f"])("div",{onClick:function(t){return u.goTo(e.id)},class:"order-item-box",key:t},[Object(a["i"])("div",d,[Object(a["i"])("span",l,[Object(a["h"])("订单号: "+Object(a["I"])(e.order_no),1),s,Object(a["h"])(" 创建时间："+Object(a["I"])(e.created_at),1)])]),(Object(a["x"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(e.orderDetails.data,(function(e){return Object(a["x"])(),Object(a["f"])(h,{key:e.id,num:e.num,price:e.goods.price,desc:"全场包邮",title:e.goods.title,thumb:e.goods.cover_url},null,8,["num","price","title","thumb"])})),128))],8,["onClick"])})),128))]})),_:1},8,["loading","finished","onLoad"])]})),_:1},8,["modelValue","onRefresh"])])])})),f=n("5530"),b=(n("99af"),n("a7ac")),O=n("e05b"),j=n("6c02"),g={name:"Order",components:{NavBar:b["a"]},setup:function(){var e=Object(j["d"])(),t=(Object(j["c"])(),Object(a["C"])(null),Object(a["B"])({loading:!1,finished:!1,refreshing:!1,list:[],page:1,totalPage:0,status:0})),n=function(){Object(O["d"])({page:t.page,status:t.status,include:"orderDetails.goods"}).then((function(e){console.log(e),t.list=t.list.concat(e.data),t.loading=!1,console.log(t.page+"#####"),t.totalPage=e.meta.pagination.total_pages,t.page>=t.totalPage&&(t.finished=!0)}))},c=function(){!t.refreshing&&t.page<t.totalPage&&(t.page+=1),t.refreshing&&(t.list=[],t.refreshing=!1),n()},i=function(){t.refreshing=!0,t.finished=!1,t.loading=!0,t.page=1,c()},o=function(e){t.status=e,i()},r=function(t){e.push({path:"/orderdetail",query:{id:t}})};return Object(a["u"])((function(){i()})),Object(f["a"])(Object(f["a"])({},Object(a["J"])(t)),{},{onLoad:c,onRefresh:i,onChangeTab:o,goTo:r})}};n("4f31");g.render=u,g.__scopeId="data-v-20d9fe8b";t["default"]=g}}]);
//# sourceMappingURL=chunk-0cb0d81c.2fe33ec1.js.map