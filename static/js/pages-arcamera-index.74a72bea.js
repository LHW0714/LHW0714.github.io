(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-arcamera-index"],{"3d8e":function(e,t,i){"use strict";var n=i("583f"),a=i.n(n);a.a},"583f":function(e,t,i){var n=i("dabb");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("281600ae",n,!0,{sourceMap:!1,shadowMode:!1})},"5c56":function(e,t,i){"use strict";i.r(t);var n=i("6b2f"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"6aba":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){}));var n=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",[this.videoshow?t("v-uni-video",{style:{width:this.devicewidth+"px",height:this.deviceheight+"px"},attrs:{"object-fit":"fill",autoplay:!0,controls:!1,"enable-progress-gesture":!1}}):this._e()],1)},a=[]},"6b2f":function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("d3b7"),i("d9e2"),i("d401"),i("ac1f"),i("00b4");var n={data:function(){return{videoshow:!1,VideoContent:null,devicewidth:0,deviceheight:0}},onReady:function(){this.devicewidth=uni.getSystemInfoSync().windowWidth,this.deviceheight=uni.getSystemInfoSync().windowHeight,this.InitVideo()},methods:{InitVideo:function(){var e=this;void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise((function(i,n){t.call(navigator,e,i,n)})):Promise.reject(new Error("该浏览器未实现getUserMedia Api"))}),navigator.mediaDevices.getUserMedia({audio:!1,video:{width:1920,height:1080,frameRate:{ideal:60,max:120},facingMode:this.IsMobile()?{exact:"environment"}:"user"}}).then((function(t){e.videoshow=!0,e.$nextTick((function(){e.VideoContent=document.querySelector("video"),e.VideoContent.srcObject=t,e.VideoContent.onloadedmetadata=function(e){this.VideoContent.play()}}))})).catch((function(e){console.log("摄像头获取错误",e)}))},GetUserMediaType:function(e,t,i){navigator.mediaDevices.getUserMedia?(console.log("1"),navigator.mediaDevices.getUserMedia(e).then(t).catch(i)):navigator.webkitGetUserMedia?(console.log("2"),navigator.webkitGetUserMedia(e,t,i)):navigator.mozGetUserMedia?(console.log("3"),navigator.mozGetUserMedia(e,t,i)):navigator.getUserMedia&&(console.log("4"),navigator.getUserMedia(e,t,i))},IsMobile:function(){var e=/Android/i.test(navigator.userAgent),t=/iPhone|iPad|iPod/i.test(navigator.userAgent);return e||t}}};t.default=n},"84dd":function(e,t,i){"use strict";i.r(t);var n=i("6aba"),a=i("5c56");for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("3d8e");var d=i("f0c5"),r=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"51ce9dba",null,!1,n["a"],void 0);t["default"]=r.exports},dabb:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,"[data-v-51ce9dba] uni-video{display:block}",""]),e.exports=t}}]);