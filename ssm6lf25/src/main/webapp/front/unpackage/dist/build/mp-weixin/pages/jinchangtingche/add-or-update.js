(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jinchangtingche/add-or-update"],{"0754":function(n,e,a){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=t(a("a34a"));function t(n){return n&&n.__esModule?n:{default:n}}function r(n,e,a,i,t,r,c){try{var u=n[r](c),o=u.value}catch(h){return void a(h)}u.done?e(o):Promise.resolve(o).then(i,t)}function c(n){return function(){var e=this,a=arguments;return new Promise((function(i,t){var c=n.apply(e,a);function u(n){r(c,i,t,u,o,"next",n)}function o(n){r(c,i,t,u,o,"throw",n)}u(void 0)}))}}var u=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("e835"))}.bind(null,a)).catch(a.oe)},o={data:function(){return{ruleForm:{dingdanbianhao:this.getUUID(),tingchechangmingcheng:"",tupian:"",jinchangtingche:"",xiaoshidanjia:"",jinchangshijian:"",zhanghao:"",xingming:"",chepaihao:"",shangjiazhanghao:"",shangjiaxingming:"",userid:""},jinchangtingcheOptions:[],jinchangtingcheIndex:0,user:{},ro:{dingdanbianhao:!1,tingchechangmingcheng:!1,tupian:!1,jinchangtingche:!1,xiaoshidanjia:!1,jinchangshijian:!1,zhanghao:!1,xingming:!1,chepaihao:!1,shangjiazhanghao:!1,shangjiaxingming:!1,userid:!1}}},components:{wPicker:u},computed:{},onLoad:function(e){var a=this;return c(i.default.mark((function t(){var r,c,u,o;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.ruleForm.jinchangshijian=a.$utils.getCurDateTime(),r=n.getStorageSync("nowTable"),t.next=4,a.$api.session(r);case 4:if(c=t.sent,a.user=c.data,a.ruleForm.zhanghao=a.user.zhanghao,a.ruleForm.xingming=a.user.xingming,a.ruleForm.chepaihao=a.user.chepaihao,a.jinchangtingcheOptions="是,否".split(","),a.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(a.ruleForm.refid=e.refid,a.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){t.next=18;break}return a.ruleForm.id=e.id,t.next=16,a.$api.info("jinchangtingche",a.ruleForm.id);case 16:c=t.sent,a.ruleForm=c.data;case 18:if(!e.cross){t.next=73;break}u=n.getStorageSync("crossObj"),t.t0=i.default.keys(u);case 21:if((t.t1=t.t0()).done){t.next=73;break}if(o=t.t1.value,"dingdanbianhao"!=o){t.next=27;break}return a.ruleForm.dingdanbianhao=u[o],a.ro.dingdanbianhao=!0,t.abrupt("continue",21);case 27:if("tingchechangmingcheng"!=o){t.next=31;break}return a.ruleForm.tingchechangmingcheng=u[o],a.ro.tingchechangmingcheng=!0,t.abrupt("continue",21);case 31:if("tupian"!=o){t.next=35;break}return a.ruleForm.tupian=u[o],a.ro.tupian=!0,t.abrupt("continue",21);case 35:if("jinchangtingche"!=o){t.next=39;break}return a.ruleForm.jinchangtingche=u[o],a.ro.jinchangtingche=!0,t.abrupt("continue",21);case 39:if("xiaoshidanjia"!=o){t.next=43;break}return a.ruleForm.xiaoshidanjia=u[o],a.ro.xiaoshidanjia=!0,t.abrupt("continue",21);case 43:if("jinchangshijian"!=o){t.next=47;break}return a.ruleForm.jinchangshijian=u[o],a.ro.jinchangshijian=!0,t.abrupt("continue",21);case 47:if("zhanghao"!=o){t.next=51;break}return a.ruleForm.zhanghao=u[o],a.ro.zhanghao=!0,t.abrupt("continue",21);case 51:if("xingming"!=o){t.next=55;break}return a.ruleForm.xingming=u[o],a.ro.xingming=!0,t.abrupt("continue",21);case 55:if("chepaihao"!=o){t.next=59;break}return a.ruleForm.chepaihao=u[o],a.ro.chepaihao=!0,t.abrupt("continue",21);case 59:if("shangjiazhanghao"!=o){t.next=63;break}return a.ruleForm.shangjiazhanghao=u[o],a.ro.shangjiazhanghao=!0,t.abrupt("continue",21);case 63:if("shangjiaxingming"!=o){t.next=67;break}return a.ruleForm.shangjiaxingming=u[o],a.ro.shangjiaxingming=!0,t.abrupt("continue",21);case 67:if("userid"!=o){t.next=71;break}return a.ruleForm.userid=u[o],a.ro.userid=!0,t.abrupt("continue",21);case 71:t.next=21;break;case 73:a.styleChange();case 74:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},jinchangshijianConfirm:function(n){console.log(n),this.ruleForm.jinchangshijian=n.result,this.$forceUpdate()},jinchangtingcheChange:function(n){this.jinchangtingcheIndex=n.target.value,this.ruleForm.jinchangtingche=this.jinchangtingcheOptions[this.jinchangtingcheIndex]},tupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.tupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return c(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.ruleForm.xiaoshidanjia||n.$validate.isIntNumer(n.ruleForm.xiaoshidanjia)){e.next=3;break}return n.$utils.msg("小时单价应输入整数"),e.abrupt("return");case 3:if(!n.ruleForm.id){e.next=8;break}return e.next=6,n.$api.update("jinchangtingche",n.ruleForm);case 6:e.next=10;break;case 8:return e.next=10,n.$api.add("jinchangtingche",n.ruleForm);case 10:n.$utils.msgBack("提交成功");case 11:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,t=e.getDate();return"start"===n?a-=60:"end"===n&&(a+=2),i=i>9?i:"0"+i,t=t>9?t:"0"+t,"".concat(a,"-").concat(i,"-").concat(t)},toggleTab:function(n){this.$refs[n].show()}}};e.default=o}).call(this,a("543d")["default"])},"122b":function(n,e,a){"use strict";(function(n){a("8e6e");i(a("66fd"));var e=i(a("f857"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,a("543d")["createPage"])},"86b4":function(n,e,a){},"8dd8":function(n,e,a){"use strict";var i=a("86b4"),t=a.n(i);t.a},a8d0:function(n,e,a){"use strict";a.r(e);var i=a("0754"),t=a.n(i);for(var r in i)"default"!==r&&function(n){a.d(e,n,(function(){return i[n]}))}(r);e["default"]=t.a},b3c6:function(n,e,a){"use strict";a.d(e,"b",(function(){return t})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={wPicker:function(){return Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(a.bind(null,"e835"))}},t=function(){var n=this,e=n.$createElement;n._self._c},r=[]},f857:function(n,e,a){"use strict";a.r(e);var i=a("b3c6"),t=a("a8d0");for(var r in t)"default"!==r&&function(n){a.d(e,n,(function(){return t[n]}))}(r);a("8dd8");var c,u=a("f0c5"),o=Object(u["a"])(t["default"],i["b"],i["c"],!1,null,"7c7721dc",null,!1,i["a"],c);e["default"]=o.exports}},[["122b","common/runtime","common/vendor"]]]);