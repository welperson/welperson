(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"79d7":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"q-pa-lg"},[s("div",{staticClass:"text-h1 text-primary"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._m(0),s("div",{staticClass:"row items-start"},t._l(t.teamItem,(function(t){return s("div",{key:t.id,staticClass:"col-4 q-pa-xl"},[s("Product",{attrs:{item:t}})],1)})),0)]),s("div",{staticClass:"q-pa-lg"},[t._m(1),s("div",{staticClass:"row items-start"},t._l(t.fitItem,(function(t){return s("div",{key:t.id,staticClass:"col-4 q-pa-xl"},[s("Product",{attrs:{item:t}})],1)})),0)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",{staticClass:"text-h4 text-primary"},[t._v("IT 직군 ")]),s("span",{staticClass:"text-h4",staticStyle:{color:"#a6a6a6"}},[t._v("이라면 필요할 걸 ?")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",{staticClass:"text-h4",staticStyle:{color:"#a6a6a6"}},[t._v("어서 와~ ")]),s("span",{staticClass:"text-h4 text-primary"},[t._v("맞춤 상품 ")]),s("span",{staticClass:"text-h4",staticStyle:{color:"#a6a6a6"}},[t._v("은 처음이지 ?")])])}],n=(s("4de4"),s("be6f")),c={name:"SectionContent",components:{Product:n["a"]},props:{title:String},data:function(){return{teamItem:this.$store.state.items.filter((function(t){return t.team})),fitItem:this.$store.state.items.filter((function(t){return t.fit}))}}},l=c,r=s("2877"),o=Object(r["a"])(l,a,i,!1,null,null,null);e["a"]=o.exports},"8b24":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("section-intro"),s("section-content")],1)},i=[],n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:" column items-center",staticStyle:{height:"150px"}},[s("div",{staticClass:"col q-pt-xl"},[s("span",{staticClass:"text-bold text-h1"},[t._v("김유니 ")]),s("span",{staticClass:"text-h3"},[t._v("님을 위한 추천 상품")])])])}],l=s("2877"),r={},o=Object(l["a"])(r,n,c,!1,null,null,null),u=o.exports,m=s("79d7"),v={name:"PageIndex",components:{SectionIntro:u,SectionContent:m["a"]}},p=v,_=s("9989"),d=s("eebe"),f=s.n(d),x=Object(l["a"])(p,a,i,!1,null,null,null);e["default"]=x.exports;f()(x,"components",{QPage:_["a"]})},be6f:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{staticStyle:{"max-width":"300px"},attrs:{src:t.item.img}}),s("div",[s("div",[t._v(t._s(t.item.name))]),s("div",[t.item.salePrice>0?s("span",{staticStyle:{color:"#a6a6a6"}},[t._v(t._s(t.item.salePrice)+"원")]):s("span"),s("span",{staticClass:"text-bold text-h4"},[t._v(t._s(t.item.price)+"원")])]),s("div",{staticClass:"text-h6 q-pt-xs",staticStyle:{color:"#a6a6a6"}},[t._v("리뷰 ("+t._s(t.item.review)+")")])])])},i=[],n={name:"SectionProduct",props:["item"],data:function(){return{}}},c=n,l=s("2877"),r=Object(l["a"])(c,a,i,!1,null,null,null);e["a"]=r.exports}}]);