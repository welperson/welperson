(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"24fe":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"text-h1 text-primary q-pt-xl"},[t._v("테크/가전")]),i("div",{staticClass:"row items-start q-col-gutter-md"},t._l(t.items,(function(t){return i("div",{key:t.id,staticClass:"column col-xs-12 col-sm-6 col-md-4 q-pa-xl"},[i("Product",{attrs:{item:t}})],1)})),0)])},a=[],c=(i("4de4"),i("caad"),i("2532"),i("be6f")),n={name:"All",components:{Product:c["a"]},data:function(){return{items:this.$store.state.items.filter((function(t){return t.types.includes("tech")}))}}},r=n,l=i("2877"),o=Object(l["a"])(r,s,a,!1,null,null,null);e["default"]=o.exports},be6f:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[i("q-btn",{attrs:{flat:""},on:{click:function(e){return t.$router.push("/detail/"+t.item.id)}}},[i("img",{staticClass:"productImage inline-block",attrs:{src:t.item.img}})])],1),i("div",[i("div",{staticClass:"row"},[i("div",[i("div",{staticStyle:{width:"215px"}},[t._v(t._s(t.item.name))]),i("div",[t.item.salePrice>0?i("span",{staticStyle:{color:"#a6a6a6"}},[t._v(t._s(t.item.salePrice)+"원 ")]):i("span"),i("span",{staticClass:"text-bold text-h4"},[t._v(t._s(t.item.price)+"원")])]),i("div",{staticClass:"text-h6 q-pt-xs",staticStyle:{color:"#a6a6a6"}},[t._v("리뷰 ("+t._s(t.item.review)+")")])]),i("q-space"),i("div",[t.isHeart?i("q-btn",{attrs:{flat:"",icon:"mdi-heart",color:"primary",size:"xl"}}):i("q-btn",{attrs:{flat:"",icon:"mdi-heart-outline",color:"primary",size:"xl"}})],1)],1)])])},a=[],c=(i("caad"),i("2532"),{name:"SectionProduct",props:["item"],data:function(){return{}},computed:{isHeart:function(){return this.$store.state.heart.includes(this.item.id)}}}),n=c,r=(i("d0c0"),i("2877")),l=i("9c40"),o=i("2c91"),u=i("eebe"),d=i.n(u),m=Object(r["a"])(n,s,a,!1,null,null,null);e["a"]=m.exports;d()(m,"components",{QBtn:l["a"],QSpace:o["a"]})},d0c0:function(t,e,i){"use strict";var s=i("f2e7"),a=i.n(s);a.a},f2e7:function(t,e,i){}}]);