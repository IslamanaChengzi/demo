(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c04c5"],{"40d7":function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h1",[n._v("处理边界情况啊")]),t("parentComponent",{ref:"parent"})],1)},r=[],l=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h1",[n._v("父组件啊")]),t("h3",[n._v(n._s(n.msg))]),t("child",{ref:"usernameInput"})],1)},s=[],u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h1",[n._v("边界情况自组件")]),t("h3",[n._v(n._s(n.msg))])])},c=[],a={name:"borderComponent",data:function(){return{msg:"边界情况的数据！"}},mounted:function(){console.log(this.$parent.msg)}},i=a,m=t("2877"),p=Object(m["a"])(i,u,c,!1,null,null,null),d=p.exports,f={name:"parentComponent",components:{child:d},data:function(){return{msg:"父组件啊数据啊"}},mounted:function(){console.log(this.$children[0]),console.log(this.$refs.usernameInput)}},h=f,_=Object(m["a"])(h,l,s,!1,null,null,null),v=_.exports,g={name:"dealborder",components:{parentComponent:v},data:function(){return{data:"msg"}},mounted:function(){console.log(this.$refs.parent)}},b=g,$=Object(m["a"])(b,o,r,!1,null,null,null);e["default"]=$.exports}}]);
//# sourceMappingURL=chunk-2d0c04c5.82403aff.js.map