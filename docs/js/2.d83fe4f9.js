(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0bb8":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("div",{staticClass:"q-pa-lg"},[a("MyInfo"),a("div",{staticClass:"row q-pt-lg",staticStyle:{height:"100%"}},[a("div",{staticClass:"col-sm-4 col-md-3 q-pl-xl q-pt-md q-pb-xl menuSt"},[a("ManageMenu")],1),a("div",{staticClass:"col-xs-12 col-sm-11 col-md-8"},t._l(t.menus,(function(s){return a("div",{key:s.id},[t.tab&&t.tab!==s.id?t.tab===s.id?a("div",[a(s.component,{tag:"component"})],1):t._e():a("div",[a(s.component,{tag:"component"})],1)])})),0)])],1)])},c=[],l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"text-h1 text-primary q-py-md"},[t._v("마이페이지")]),a("div",{staticClass:"row q-col-gutter-y-md items-center",staticStyle:{height:"100%","background-color":"#d0f0fd"}},[t._m(0),a("div",{staticClass:"col col-xs-12 col-md-4"},[a("div",{staticClass:"q-pl-md text-h3 text-bold"},[t._v("잔여 포인트")]),a("div",{staticClass:"q-pt-md q-pl-md text-h6"},[t._v(t._s(t.$store.state.point)+" 원")]),a("div",[a("q-btn",{staticClass:"text-primary q-pt-sm q-pl-xs",attrs:{flat:""}},[t._v("상세보기 >")])],1)]),a("div",{staticClass:"col col-xs-12 col-md-4"},[a("div",{staticClass:"q-pl-md text-h3 text-bold"},[t._v("적립금")]),a("div",{staticClass:"q-pt-md q-pl-md text-h6"},[t._v(t._s(t.$store.state.accum)+" 원")]),a("div",[a("q-btn",{staticClass:"text-primary q-pt-sm q-pl-xs",attrs:{flat:""}},[t._v("상세보기 >")])],1)])])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col col-xs-12 col-md-4"},[a("div",[a("span",{staticClass:"text-h1 text-bold q-pl-md"},[t._v("김유니")]),a("span",{staticClass:"text-h3"},[t._v(" 님")])])])}],n={name:"MyInfo",data:function(){return{}}},o=n,r=(a("874b"),a("2877")),d=a("9c40"),m=a("eebe"),v=a.n(m),u=Object(r["a"])(o,l,i,!1,null,"60b3a45d",null),p=u.exports;v()(u,"components",{QBtn:d["a"]});var x=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"menu"},t._l(t.menus,(function(s){return a("div",{key:s.id},[a("q-btn",{on:{click:function(a){return t.onRoute(s.id)}}},[t._v(t._s(s.name)),a("q-icon",{staticClass:"icon",attrs:{name:"mdi-chevron-right"}})],1)],1)})),0)},_=[],C=(a("ac1f"),a("5319"),{name:"ManageMenu",data:function(){return{menus:[{name:"주문 내역",id:"history"},{name:"배송지 관리",id:"delivery"},{name:"예약 조회",id:"reservation"},{name:"상품 후기",id:"review"},{name:"문의 내역",id:"question"},{name:"개인 정보 관리",id:"manage"}]}},methods:{onRoute:function(t){t!==this.$route.query.tab&&this.$router.replace("/mypage?tab=".concat(t))}}}),h=C,f=(a("5fbc"),a("0016")),g=Object(r["a"])(h,x,_,!1,null,null,null),q=g.exports;v()(g,"components",{QBtn:d["a"],QIcon:f["a"]});var b=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h4",{staticClass:"q-pb-lg"},[t._v("주문 내역")]),a("div",[a("div",{staticClass:"q-pt-md q-pb-xl"},[a("div",{staticClass:"row justify-between"},[a("span",{staticClass:"text-bold text-h5"},[t._v("2019.08.27")]),a("q-btn",{staticClass:"text-primary",attrs:{flat:"",label:"주문상세보기"}},[a("q-icon",{attrs:{right:"",name:"mdi-chevron-right"}})],1)],1),t._m(0),t._m(1)]),a("div",{staticClass:"q-pt-md"},[a("div",{staticClass:"row justify-between"},[a("span",{staticClass:"text-bold text-h5"},[t._v("2020.10.08")]),a("q-btn",{staticClass:"text-primary",attrs:{flat:"",label:"주문상세보기"}},[a("q-icon",{attrs:{right:"",name:"mdi-chevron-right"}})],1)],1),t._m(2)])])])},y=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-xs-8 col-sm-4 col-md-3"},[a("img",{staticStyle:{width:"130px",height:"80px"},attrs:{src:"image/2.png"}})]),a("div",{staticClass:"col-md-7 q-py-md"},[t._v("모던오피스 고급 스틸 연필꽂이")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-xs-8 col-sm-4 col-md-3"},[a("img",{staticStyle:{width:"130px",height:"80px"},attrs:{src:"image/1.png"}})]),a("div",{staticClass:"col-md-7 q-py-md"},[t._v("국산 하이큐 네임펜")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-xs-8 col-sm-4 col-md-3"},[a("img",{staticStyle:{width:"130px",height:"80px"},attrs:{src:"image/3.png"}})]),a("div",{staticClass:"col-md-7 q-py-md"},[t._v("25절 A5 밴드 양장")])])}],w={name:"MyOrder",data:function(){return{}}},$=w,E=Object(r["a"])($,b,y,!1,null,null,null),k=E.exports;v()(E,"components",{QBtn:d["a"],QIcon:f["a"]});var M=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h4",{staticClass:"q-pb-lg"},[t._v("배송지 관리")]),a("div",{staticClass:"delivery q-pt-md q-pb-xl"},[t._m(0),t._l(t.adds,(function(s){return a("div",{key:s.id,staticClass:"row q-pt-lg text-center items-center"},[a("div",{staticClass:"col-xs-2 col-sm-1 col-md-1 col-lg-1"},[a("q-radio",{attrs:{"keep-color":"",color:"primary",val:s.id},model:{value:t.select,callback:function(s){t.select=s},expression:"select"}})],1),a("div",{staticClass:"col-xs-3 col-sm-4 col-md-4 col-lg-4"},[t._v(t._s(s.address))]),a("div",{staticClass:"col-xs-3 col-sm-3 col-md-3 col-lg-3"},[t._v(t._s(s.person))]),a("div",{staticClass:"col-xs-3 col-sm-3 col-md-3 col-lg-3"},[t._v(t._s(s.num))]),a("div",{staticClass:"col-xs-1 col-sm-1 col-md-1 col-lg-1"},[a("q-btn",{attrs:{flat:"",size:"9px",icon:"mdi-pencil-outline"}})],1)])}))],2)])},S=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row text-h6 q-py-sm text-center"},[a("div",{staticClass:"col-xs-2 col-sm-1 col-md-1 col-lg-1"},[t._v("선택")]),a("div",{staticClass:"col-xs-2 col-sm-4 col-md-4 col-lg-4"},[t._v("주소")]),a("div",{staticClass:"col-xs-3 col-sm-3 col-md-3 col-lg-3"},[t._v("받으실 분")]),a("div",{staticClass:"col-xs-3 col-sm-3 col-md-3 col-lg-3"},[t._v("연락처")]),a("div",{staticClass:"col-xs-2 col-sm-1 col-md-1 col-lg-1"},[t._v("수정")])])}],j={name:"MyDelivery",data:function(){return{adds:this.$store.state.adds,select:""}}},Q=j,O=a("3786"),z=Object(r["a"])(Q,M,S,!1,null,null,null),I=z.exports;v()(z,"components",{QRadio:O["a"],QBtn:d["a"]});var B=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h4",{staticClass:"q-pb-lg"},[t._v("예약 조회")]),a("div",[a("div",{staticClass:"q-pt-md q-pb-xl"},[a("div",{staticClass:"row justify-between"},[a("span",{staticClass:"text-bold text-h5"},[t._v("2020.10.08")]),a("q-btn",{staticClass:"text-primary",attrs:{flat:"",label:"예약상세보기"}},[a("q-icon",{attrs:{right:"",name:"mdi-chevron-right"}})],1)],1),t._m(0),t._m(1)]),a("div",{staticClass:"q-pt-md"},[a("div",{staticClass:"row justify-between"},[a("span",{staticClass:"text-bold text-h5"},[t._v("2020.10.08")]),a("q-btn",{staticClass:"text-primary",attrs:{flat:"",label:"예약상세보기"}},[a("q-icon",{attrs:{right:"",name:"mdi-chevron-right"}})],1)],1),t._m(2)])])])},A=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-xs-8 col-sm-4 col-md-3"},[a("img",{staticStyle:{width:"130px",height:"80px"},attrs:{src:"image/2.png"}})]),a("div",{staticClass:"col-md-7 q-py-md"},[t._v("모던오피스 고급 스틸 연필꽂이")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-xs-8 col-sm-4 col-md-3"},[a("img",{staticStyle:{width:"130px",height:"80px"},attrs:{src:"image/1.png"}})]),a("div",{staticClass:"col-md-7 q-py-md"},[t._v("국산 하이큐 네임펜")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-xs-8 col-sm-4 col-md-3"},[a("img",{staticStyle:{width:"130px",height:"80px"},attrs:{src:"image/3.png"}})]),a("div",{staticClass:"col-md-7 q-py-md"},[t._v("25절 A5 밴드 양장")])])}],R={name:"MyOrder",data:function(){return{}}},J=R,D=Object(r["a"])(J,B,A,!1,null,null,null),P=D.exports;v()(D,"components",{QBtn:d["a"],QIcon:f["a"]});var F=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h4",{staticClass:"q-pb-lg"},[t._v("상품 후기")]),a("div",[a("div",{staticClass:"text-h5 q-py-md",staticStyle:{"text-align":"center"}},[t._v("내가 작성한 후기")]),a("div",{staticClass:"row q-py-md"},[a("div",{staticClass:"col-sm-4 col-md-3 q-pl-lg"},[a("img",{staticClass:"reviewImg",staticStyle:{width:"130px",height:"80px"},attrs:{src:"image/2.png"}})]),a("div",{staticClass:"col-xs-11 col-sm-8 col-md-7 q-pt-xs"},[a("div",{staticClass:"text-h6"},[t._v("모던오피스 고급 스틸 연필꽂이")]),a("div",{staticClass:"q-pt-sm"},[t._v("\n          회사에서 너무 잘 쓰고 있습니다. 다른 직원분들한테도 추천해드리고 있어요. 완전 최고입니다 !!\n        ")])]),a("div",{staticClass:"col-md-1"},[t._v("2020.10.08")])]),a("div",{staticClass:"row q-py-md"},[a("div",{staticClass:"col-sm-4 col-md-3 q-pl-lg"},[a("img",{staticStyle:{width:"130px",height:"80px"},attrs:{src:"image/3.png"}})]),a("div",{staticClass:"col-xs-11 col-sm-8 col-md-7 q-pt-xs"},[a("div",{staticClass:"text-h6"},[t._v("25절 A5 밴드 양장")]),a("div",{staticClass:"q-pt-sm"},[t._v("\n            완전 완전 추천 !!\n          ")])]),a("div",{staticClass:"col-md-1"},[t._v("2020.11.08")])])])])}],H={name:"MyReview",data:function(){return{}}},K=H,L=Object(r["a"])(K,F,G,!1,null,null,null),N=L.exports,T=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h4",{staticClass:"q-pb-lg"},[t._v("문의 내역")]),a("div",[a("div",{staticClass:"text-h5 q-py-md",staticStyle:{"text-align":"center"}},[t._v("내가 문의한 내역")]),a("div",{staticClass:"row q-py-md"},[a("div",{staticClass:"col-sm-4 col-md-3 q-pl-lg"},[a("img",{staticStyle:{width:"130px",height:"80px"},attrs:{src:"image/3.png"}})]),a("div",{staticClass:"col-xs-11 col-sm-6 col-md-7 q-pt-xs"},[a("div",{staticClass:"text-h6"},[t._v("25절 A5 밴드 양장")]),a("div",{staticClass:"q-pt-sm"},[t._v("\n          파란 색상 재입고 예정있나요??\n        ")])]),a("div",{staticClass:"col-md-2 text-red"},[t._v("답변 미완료")])]),a("div",{staticClass:"row q-py-md"},[a("div",{staticClass:"col-sm-4 col-md-3 q-pl-lg"},[a("img",{staticStyle:{width:"130px",height:"80px"},attrs:{src:"image/2.png"}})]),a("div",{staticClass:"col-xs-11 col-sm-6 col-md-7 q-pt-xs"},[a("div",{staticClass:"text-h6"},[t._v("모던오피스 고급 스틸 연필꽂이")]),a("div",{staticClass:"q-pt-sm"},[t._v("\n            단체주문 하면 할인 얼마나 받을 수 있나요??\n          ")])]),a("div",{staticClass:"col-md-2 text-blue"},[t._v("답변 완료")])])])])}],V={name:"MyQuestion",data:function(){return{}}},W=V,X=Object(r["a"])(W,T,U,!1,null,null,null),Y=X.exports,Z=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h4",{staticClass:"q-pb-lg"},[t._v("개인 정보 관리")]),t._m(0),t._m(1),t._m(2),t._m(3),a("div",{staticClass:"row q-py-sm manage"},[a("div",{staticClass:"col-xs-10 col-sm-5 col-md-4 text-h6"},[t._v("관심 카테고리")]),a("div",{staticClass:"col-xs-19 col-sm-7 col-md-7 col-lg-6"},[a("q-checkbox",{attrs:{size:"sm",label:"테크/가전"},model:{value:t.cate1,callback:function(s){t.cate1=s},expression:"cate1"}}),a("q-checkbox",{attrs:{size:"sm",label:"패션/잡화"},model:{value:t.cate2,callback:function(s){t.cate2=s},expression:"cate2"}}),a("q-checkbox",{attrs:{size:"sm",label:"뷰티"},model:{value:t.cate3,callback:function(s){t.cate3=s},expression:"cate3"}}),a("q-checkbox",{attrs:{size:"sm",label:"푸드"},model:{value:t.cate4,callback:function(s){t.cate4=s},expression:"cate4"}}),a("q-checkbox",{attrs:{size:"sm",label:"사무용품"},model:{value:t.cate5,callback:function(s){t.cate5=s},expression:"cate5"}}),a("q-checkbox",{attrs:{size:"sm",label:"홈리빙"},model:{value:t.cate6,callback:function(s){t.cate6=s},expression:"cate6"}})],1)]),a("div",{staticClass:"q-pt-md",staticStyle:{"text-align":"center"}},[a("q-btn",{attrs:{color:"primary",label:"회원정보수정"}})],1)])},tt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row q-py-sm manage"},[a("div",{staticClass:"col-xs-10 col-sm-5 col-md-4 text-h6"},[t._v("아이디")]),a("div",{staticClass:"col-md-6"},[a("input",{attrs:{type:"text",value:"a1234"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row q-py-sm manage"},[a("div",{staticClass:"col-xs-10 col-sm-5 col-md-4 text-h6"},[t._v("현재 비밀번호")]),a("div",{staticClass:"col-md-6"},[a("input",{attrs:{type:"text"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row q-py-sm manage"},[a("div",{staticClass:"col-xs-10 col-sm-5 col-md-4 text-h6"},[t._v("새 비밀번호")]),a("div",{staticClass:"col-md-6"},[a("input",{attrs:{type:"text"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row q-py-sm manage"},[a("div",{staticClass:"col-xs-10 col-sm-5 col-md-4 text-h6"},[t._v("새 비밀번호 확인")]),a("div",{staticClass:"col-md-6"},[a("input",{attrs:{type:"text"}})])])}],st={name:"MyManage",data:function(){return{cate1:!1,cate2:!1,cate3:!1,cate4:!1,cate5:!1,cate6:!1}}},at=st,et=(a("413e"),a("8f8e")),ct=Object(r["a"])(at,Z,tt,!1,null,null,null),lt=ct.exports;v()(ct,"components",{QCheckbox:et["a"],QBtn:d["a"]});var it={name:"MyPage",components:{MyInfo:p,ManageMenu:q},data:function(){return{menus:[{id:"history",component:k},{id:"delivery",component:I},{id:"reservation",component:P},{id:"review",component:N},{id:"question",component:Y},{id:"manage",component:lt}]}},computed:{tab:function(){return this.$route.query.tab}}},nt=it,ot=(a("13f1"),Object(r["a"])(nt,e,c,!1,null,"b7c76dec",null));s["default"]=ot.exports},"13f1":function(t,s,a){"use strict";var e=a("982c"),c=a.n(e);c.a},"413e":function(t,s,a){"use strict";var e=a("f7be"),c=a.n(e);c.a},"5fbc":function(t,s,a){"use strict";var e=a("c4c8"),c=a.n(e);c.a},"874b":function(t,s,a){"use strict";var e=a("96b6"),c=a.n(e);c.a},"96b6":function(t,s,a){},"982c":function(t,s,a){},c4c8:function(t,s,a){},f7be:function(t,s,a){}}]);