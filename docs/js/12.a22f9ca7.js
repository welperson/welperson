(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{2557:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"text-h1 text-primary q-py-xl"},[t._v("홈리빙")]),s("Products",{attrs:{items:t.items}})],1)},a=[],n=s("ded3"),r=s.n(n),c=s("4ce3"),o=s("2f62"),l={name:"Home",components:{Products:c["a"]},data:function(){return{}},computed:r()({},Object(o["b"])("products",{items:"homeItems"}))},d=l,u=s("2877"),m=Object(u["a"])(d,i,a,!1,null,null,null);e["default"]=m.exports},"4ce3":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row items-start q-col-gutter-md"},t._l(t.items,(function(t){return s("div",{key:t.id,staticClass:"pro-detail column col-xs-12 col-sm-6 col-md-4"},[s("ProductDetail",{attrs:{item:t}})],1)})),0)])},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-mt-md"},[s("div",{staticClass:"container"},[s("router-link",{attrs:{to:"/detail/"+t.item.id}},[s("img",{staticClass:"proImg",attrs:{src:t.item.img}})])],1),s("div",[s("div",{staticClass:"row q-pt-sm"},[s("div",{staticClass:"container__info"},[s("div",[t._v(t._s(t.item.name))]),s("div",[t.item.salePrice>0?s("span",{staticClass:"text-dark"},[t._v(t._s(t.item.salePrice)+"원 ")]):s("span"),s("span",{staticClass:"text-bold text-h4"},[t._v(t._s(t.item.price)+"원")])]),s("div",{staticClass:"text-h6 q-pt-xs text-dark"},[t._v("리뷰 ("+t._s(t.item.review)+")")])]),s("q-space"),s("div",[s("q-btn",{staticClass:"container__heart",attrs:{flat:"",icon:t.isHeart?"mdi-heart":"mdi-heart-outline",size:"xl"},on:{click:function(e){return t.onHeart(t.item.id)}}})],1)],1)])])},r=[],c=(s("caad"),s("2532"),s("ded3")),o=s.n(c),l=s("2f62"),d={name:"ProductDetail",props:["item"],data:function(){return{}},computed:{isHeart:function(){return this.$store.state.hearts.heart.includes(this.item.id)}},methods:o()({},Object(l["c"])("hearts",{onHeart:"inHeart"}))},u=d,m=(s("b517"),s("2877")),p=s("2c91"),v=s("9c40"),f=s("eebe"),_=s.n(f),h=Object(m["a"])(u,n,r,!1,null,null,null),b=h.exports;_()(h,"components",{QSpace:p["a"],QBtn:v["a"]});var x={name:"Product",props:["items"],components:{ProductDetail:b},data:function(){return{}}},C=x,w=Object(m["a"])(C,i,a,!1,null,null,null);e["a"]=w.exports},"58cb":function(t,e,s){},b517:function(t,e,s){"use strict";var i=s("58cb"),a=s.n(i);a.a}}]);