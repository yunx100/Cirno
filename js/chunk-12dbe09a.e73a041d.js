(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12dbe09a"],{"18dd":function(s,a,e){s.exports=e.p+"img/side.524618f1.png"},"2c5c":function(s,a,e){"use strict";var t=e("d682"),i=e.n(t);i.a},a55b:function(s,a,e){"use strict";e.r(a);var t=function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"login"},[e("div",{staticClass:"side-pic"},[e("div",{staticClass:"pic",style:{background:"url("+s.sidePic+")"}})]),e("div",{staticClass:"side-box"},[e("div",{staticClass:"login-box"},[e("div",{staticClass:"title"},[e("i",{staticClass:"ri-arrow-left-line icon",on:{click:s.goBack}}),e("div",[s._v("刺猬猫账户登录")])]),e("div",{staticClass:"input-box"},[e("div",{staticClass:"user-name input"},[e("a-input",{ref:"userNameInput",attrs:{size:"large",placeholder:"手机号/邮箱"},model:{value:s.userName,callback:function(a){s.userName=a},expression:"userName"}},[e("a-icon",{attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),e("div",{staticClass:"password input"},[e("a-input-password",{attrs:{placeholder:"密码",size:"large"},model:{value:s.password,callback:function(a){s.password=a},expression:"password"}})],1)]),e("div",{staticClass:"button"},[e("a-checkbox",{staticClass:"checkbox",model:{value:s.remUser,callback:function(a){s.remUser=a},expression:"remUser"}},[s._v(" 记住密码 ")]),e("div",{staticClass:"login-button"},[e("a-button",{attrs:{type:"primary",loading:s.confirmLoading,size:"large",block:"",shape:"round"},on:{click:s.login}},[s._v(" 登录 ")])],1)],1)]),e("div",{staticClass:"footer"})])])},i=[],o={data:function(){return{sidePic:e("18dd"),confirmLoading:!1,userName:"",password:"",remUser:!1}},created:function(){if(localStorage.getItem("loginInfo")){var s=JSON.parse(localStorage.getItem("loginInfo"));this.userName=s.userName,this.password=s.passwd,this.remUser=!0}},methods:{goBack:function(){this.$router.back()},login:function(){var s=this;this.confirmLoading=!0;this.$get({url:"/signup/login",urlParas:{login_name:this.userName,passwd:this.password}}).then((function(a){console.log(a),localStorage.setItem("login_token",a.data.login_token),localStorage.setItem("account",a.data.reader_info.account),s.remUser&&localStorage.setItem("loginInfo",JSON.stringify({userName:s.userName,passwd:s.password})),s.$emit("getInfo"),s.confirmLoading=!1,s.$router.push({name:"Index",params:{forceReload:!0}})}),(function(a){s.confirmLoading=!1}))}}},n=o,r=(e("2c5c"),e("2877")),c=Object(r["a"])(n,t,i,!1,null,"44977df4",null);a["default"]=c.exports},d682:function(s,a,e){}}]);