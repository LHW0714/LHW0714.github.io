import{_ as u,r as d,e as M,s as c,t as l,u as h,A as p,v as U}from"./index-9a7225e6.js";const w={class:"container"},x={key:0,class:"nocamera"},b={__name:"index",setup(k){let o=0,s=0,i=null,r=d(),n=d(!1);M(()=>{o=window.screen.width,s=window.screen.height,i=r.value,v()});const v=()=>{navigator.mediaDevices.getUserMedia||navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia?g({audio:!1,video:{width:s,height:o,facingMode:m()?{exact:"environment"}:"user"}},_,f):console.log("不支持获取用户媒体")},g=(e,a,t)=>{navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia(e).then(a).catch(t):navigator.webkitGetUserMedia?navigator.webkitGetUserMedia(e,a,t):navigator.mozGetUserMedia?navigator.mozGetUserMedia(e,a,t):navigator.getUserMedia&&navigator.getUserMedia(e,a,t)},_=e=>{i.srcObject=e,i.play()},f=e=>{console.log("摄像头获取错误"),n.value=!0},m=()=>{const e=/Android/i.test(navigator.userAgent),a=/iPhone|iPad|iPod/i.test(navigator.userAgent);return e||a};return(e,a)=>(c(),l("div",w,[h(n)?(c(),l("div",x)):p("",!0),U("video",{class:"video",ref_key:"webcamera",ref:r,loop:"",preload:""},null,512)]))}},y=u(b,[["__scopeId","data-v-513fe595"]]);export{y as default};
