(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-arcamera-index"],{"52d2":function(e,t,a){"use strict";var i=a("c097"),n=a.n(i);n.a},"5c56":function(e,t,a){"use strict";a.r(t);var i=a("6b2f"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=n.a},"6b2f":function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d3b7"),a("d9e2"),a("d401"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("ac1f"),a("00b4");var i={data:function(){return{loadingshow:!0,loading:!1,VideoContent:null,devicewidth:0,deviceheight:0}},onReady:function(){this.devicewidth=uni.getSystemInfoSync().windowWidth,this.deviceheight=uni.getSystemInfoSync().windowHeight},methods:{InitVideo:function(){var e=this;this.loading=!0,void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise((function(a,i){t.call(navigator,e,a,i)})):Promise.reject(new Error("该浏览器未实现getUserMedia Api"))}),navigator.mediaDevices.getUserMedia({audio:!1,video:{width:1080,height:1920,facingMode:this.IsMobile()?{exact:"environment"}:"user"}}).then((function(t){e.$nextTick((function(){e.VideoContent=document.querySelector("video"),"srcObject"in e.VideoContent?e.VideoContent.srcObject=t:e.VideoContent.src=window.URL&&window.URL.createObjectURL(t)||t,e.VideoContent.onloadedmetadata=function(e){this.VideoContent.play()},setTimeout((function(){e.loadingshow=!1}),500)}))})).catch((function(e){console.log("摄像头获取错误",e)}))},GetUserMediaType:function(e,t,a){navigator.mediaDevices.getUserMedia?(console.log("1"),navigator.mediaDevices.getUserMedia(e).then(t).catch(a)):navigator.webkitGetUserMedia?(console.log("2"),navigator.webkitGetUserMedia(e,t,a)):navigator.mozGetUserMedia?(console.log("3"),navigator.mozGetUserMedia(e,t,a)):navigator.getUserMedia&&(console.log("4"),navigator.getUserMedia(e,t,a))},IsMobile:function(){var e=/Android/i.test(navigator.userAgent),t=/iPhone|iPad|iPod/i.test(navigator.userAgent);return e||t}}};t.default=i},"84dd":function(e,t,a){"use strict";a.r(t);var i=a("8514"),n=a("5c56");for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("52d2");var o=a("f0c5"),d=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"33e21ca4",null,!1,i["a"],void 0);t["default"]=d.exports},8514:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-video",{staticClass:"myvideo",style:{width:e.devicewidth+"px",height:e.deviceheight+"px"},attrs:{"object-fit":"cover",autoplay:!0,controls:!1,"enable-progress-gesture":!1,width:e.devicewidth,height:e.deviceheight}}),i("v-uni-view",{staticClass:"scanview",style:{width:e.devicewidth+"px",height:e.deviceheight+"px"}},[i("div",{staticClass:"qr-scanner"},[i("div",{staticClass:"box"},[i("div",{staticClass:"line"}),i("div",{staticClass:"angle"})])])]),e.loadingshow?i("v-uni-view",{staticClass:"start",style:{width:e.devicewidth+"px",height:e.deviceheight+"px"}},[e.loading?i("v-uni-view",{staticClass:"loader"}):e._e(),e.loading?e._e():i("v-uni-view",{staticClass:"introduce"},[i("v-uni-image",{attrs:{src:a("8e89"),mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"startbtn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.InitVideo.apply(void 0,arguments)}}},[e._v("立即体验3")])],1):e._e()],1)},n=[]},"8e89":function(e,t,a){e.exports=a.p+"static/10.jpg"},"97ce":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'.content[data-v-33e21ca4]{position:relative}.myvideo[data-v-33e21ca4]{position:absolute}[data-v-33e21ca4] uni-video{display:block}\n\n/* HTML: <div class="loader"></div> */.loader[data-v-33e21ca4]{width:50px;aspect-ratio:1;display:grid}.loader[data-v-33e21ca4]::before,\n.loader[data-v-33e21ca4]::after{content:"";grid-area:1/1;--c:no-repeat radial-gradient(farthest-side,#25b09b 92%,transparent);background:var(--c) 50% 0,var(--c) 50% 100%,var(--c) 100% 50%,var(--c) 0 50%;background-size:12px 12px;-webkit-animation:l12-data-v-33e21ca4 1s infinite;animation:l12-data-v-33e21ca4 1s infinite}.loader[data-v-33e21ca4]::before{margin:4px;-webkit-filter:hue-rotate(45deg);filter:hue-rotate(45deg);background-size:8px 8px;-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes l12-data-v-33e21ca4{100%{-webkit-transform:rotate(.5turn);transform:rotate(.5turn)}}@keyframes l12-data-v-33e21ca4{100%{-webkit-transform:rotate(.5turn);transform:rotate(.5turn)}}.start[data-v-33e21ca4]{position:absolute;background-color:#383838;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:10}.startbtn[data-v-33e21ca4]{position:absolute;bottom:%?100?%;display:flex;align-items:center;justify-content:center;font-size:%?32?%;border:%?1?% solid #dce7e9;border-radius:%?10?%;padding:%?10?% %?20?%}.scanview[data-v-33e21ca4]{position:absolute;display:flex;align-items:center;justify-content:center;z-index:5}.qr-scanner[data-v-33e21ca4]{width:100%;height:100%;position:relative}.qr-scanner .box[data-v-33e21ca4]{width:75%;height:%?500?%;position:relative;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);overflow:hidden}.qr-scanner .line[data-v-33e21ca4]{height:calc(100% - 2px);width:100%;background:linear-gradient(180deg,rgba(0,255,51,0) 43%,#0f3 211%);border-bottom:3px solid rgba(0,255,51,.4117647058823529);-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-animation:radar-beam-data-v-33e21ca4 2s infinite;animation:radar-beam-data-v-33e21ca4 2s infinite;-webkit-animation-timing-function:cubic-bezier(.53,0,.43,.99);animation-timing-function:cubic-bezier(.53,0,.43,.99);-webkit-animation-delay:1.4s;animation-delay:1.4s}.qr-scanner .box[data-v-33e21ca4]:after,\n.qr-scanner .box[data-v-33e21ca4]:before,\n.qr-scanner .angle[data-v-33e21ca4]:after,\n.qr-scanner .angle[data-v-33e21ca4]:before{content:"";display:block;position:absolute;width:%?40?%;height:%?40?%;border:%?6?% solid transparent;border-radius:%?10?%}.qr-scanner .box[data-v-33e21ca4]:after,\n.qr-scanner .box[data-v-33e21ca4]:before{top:0;border-top-color:#fff}.qr-scanner .angle[data-v-33e21ca4]:after,\n.qr-scanner .angle[data-v-33e21ca4]:before{bottom:0;border-bottom-color:#fff}.qr-scanner .box[data-v-33e21ca4]:before,\n.qr-scanner .angle[data-v-33e21ca4]:before{left:0;border-left-color:#fff}.qr-scanner .box[data-v-33e21ca4]:after,\n.qr-scanner .angle[data-v-33e21ca4]:after{right:0;border-right-color:#fff}@-webkit-keyframes radar-beam-data-v-33e21ca4{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes radar-beam-data-v-33e21ca4{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}',""]),e.exports=t},c097:function(e,t,a){var i=a("97ce");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("85bc67c2",i,!0,{sourceMap:!1,shadowMode:!1})}}]);