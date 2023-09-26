import{i as $e,o as ke,c as D,r as F,a as te,b as st,d as ct,w as Ie,g as G,p as Ae,e as Pe,n as U,f as ut,u as me,h as dt,j as O,k as c,m as ce,l as Te,F as ft,q as gt,s as mt,t as bt,v as ne,x as oe,y as ht,z as vt,_ as yt}from"./index-2420d456.js";const X=Object.assign,Et=typeof window<"u",re=e=>e!==null&&typeof e=="object",p=e=>e!=null,ie=e=>typeof e=="function",xt=e=>re(e)&&ie(e.then)&&ie(e.catch),Ve=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),St=()=>Et?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function be(e,t){const n=t.split(".");let r=e;return n.forEach(a=>{var o;r=re(r)&&(o=r[a])!=null?o:""}),r}const he=e=>Array.isArray(e)?e:[e],ee=null,C=[Number,String],Y={type:Boolean,default:!0},Bt=e=>({type:C,default:e}),$=e=>({type:String,default:e});var De=typeof window<"u";function _t(e){const t=$e(e,null);if(t){const n=G(),{link:r,unlink:a,internalChildren:o}=t;r(n),ke(()=>a(n));const g=D(()=>o.indexOf(n));return{parent:t,index:g}}return{parent:null,index:F(-1)}}function Ct(e){const t=[],n=r=>{Array.isArray(r)&&r.forEach(a=>{var o;dt(a)&&(t.push(a),(o=a.component)!=null&&o.subTree&&(t.push(a.component.subTree),n(a.component.subTree.children)),a.children&&n(a.children))})};return n(e),t}var ve=(e,t)=>{const n=e.indexOf(t);return n===-1?e.findIndex(r=>t.key!==void 0&&t.key!==null&&r.type===t.type&&r.key===t.key):n};function wt(e,t,n){const r=Ct(e.subTree.children);n.sort((o,g)=>ve(r,o.vnode)-ve(r,g.vnode));const a=n.map(o=>o.proxy);t.sort((o,g)=>{const u=a.indexOf(o),l=a.indexOf(g);return u-l})}function pt(e){const t=te([]),n=te([]),r=G();return{children:t,linkChildren:o=>{Ae(e,Object.assign({link:l=>{l.proxy&&(n.push(l),t.push(l.proxy),wt(r,t,n))},unlink:l=>{const s=n.indexOf(l);t.splice(s,1),n.splice(s,1)},children:t,internalChildren:n},o))}}}function $t(e){let t;Pe(()=>{e(),U(()=>{t=!0})}),ut(()=>{t&&e()})}function kt(e,t,n={}){if(!De)return;const{target:r=window,passive:a=!1,capture:o=!1}=n;let g=!1,u;const l=v=>{if(g)return;const y=me(v);y&&!u&&(y.addEventListener(e,t,{capture:o,passive:a}),u=!0)},s=v=>{if(g)return;const y=me(v);y&&u&&(y.removeEventListener(e,t,o),u=!1)};ke(()=>s(r)),st(()=>s(r)),$t(()=>l(r));let f;return ct(r)&&(f=Ie(r,(v,y)=>{s(y),l(v)})),()=>{f==null||f(),s(r),g=!0}}var Q,ae;function It(){if(!Q&&(Q=F(0),ae=F(0),De)){const e=()=>{Q.value=window.innerWidth,ae.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:Q,height:ae}}var At=Symbol("van-field");function ye(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)}function Fe(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function Oe(e){ye(window,e),ye(document.body,e)}const Pt=St();function Tt(){Pt&&Oe(Fe())}const Vt=e=>e.stopPropagation();function H(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),t&&Vt(e)}It();function k(e){if(p(e))return Ve(e)?`${e}px`:String(e)}function Dt(e){if(p(e)){if(Array.isArray(e))return{width:k(e[0]),height:k(e[1])};const t=k(e);return{width:t,height:t}}}const Ft=/-(\w)/g,Le=e=>e.replace(Ft,(t,n)=>n.toUpperCase());function Ee(e,t,n){const r=e.indexOf(t);return r===-1?e:t==="-"&&r!==0?e.slice(0,r):e.slice(0,r+1)+e.slice(r).replace(n,"")}function Ot(e,t=!0,n=!0){t?e=Ee(e,".",/\./g):e=e.split(".")[0],n?e=Ee(e,"-",/-/g):e=e.replace(/-/,"");const r=t?/[^-0-9.]/g:/[^-0-9]/g;return e.replace(r,"")}const{hasOwnProperty:Lt}=Object.prototype;function Rt(e,t,n){const r=t[n];p(r)&&(!Lt.call(e,n)||!re(r)?e[n]=r:e[n]=Re(Object(e[n]),r))}function Re(e,t){return Object.keys(t).forEach(n=>{Rt(e,t,n)}),e}var zt={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const xe=F("zh-CN"),Se=te({"zh-CN":zt}),Mt={messages(){return Se[xe.value]},use(e,t){xe.value=e,this.add({[e]:t})},add(e={}){Re(Se,e)}};var Nt=Mt;function jt(e){const t=Le(e)+".";return(n,...r)=>{const a=Nt.messages(),o=be(a,t+n)||be(a,n);return ie(o)?o(...r):o}}function se(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((n,r)=>n+se(e,r),""):Object.keys(t).reduce((n,r)=>n+(t[r]?se(e,r):""),""):""}function Wt(e){return(t,n)=>(t&&typeof t!="string"&&(n=t,t=""),t=t?`${e}__${t}`:e,`${t}${se(t,n)}`)}function L(e){const t=`van-${e}`;return[t,Wt(t),jt(t)]}const ze="van-hairline",qt=`${ze}--surround`,Ut=`${ze}--top-bottom`,Me=Symbol("van-form");function z(e){return e.install=t=>{const{name:n}=e;n&&(t.component(n,e),t.component(Le(`-${n}`),e))},e}function Ne(e){const t=G();t&&X(t.proxy,e)}const je={to:[String,Object],url:String,replace:Boolean};function Ht({to:e,url:t,replace:n,$router:r}){e&&r?r[n?"replace":"push"](e):t&&(n?location.replace(t):location.href=t)}function We(){const e=G().proxy;return()=>Ht(e)}const[Kt,Be]=L("badge"),Yt={dot:Boolean,max:C,tag:$("div"),color:String,offset:Array,content:C,showZero:Y,position:$("top-right")};var Gt=O({name:Kt,props:Yt,setup(e,{slots:t}){const n=()=>{if(t.content)return!0;const{content:u,showZero:l}=e;return p(u)&&u!==""&&(l||u!==0&&u!=="0")},r=()=>{const{dot:u,max:l,content:s}=e;if(!u&&n())return t.content?t.content():p(l)&&Ve(s)&&+s>+l?`${l}+`:s},a=u=>u.startsWith("-")?u.replace("-",""):`-${u}`,o=D(()=>{const u={background:e.color};if(e.offset){const[l,s]=e.offset,{position:f}=e,[v,y]=f.split("-");t.default?(typeof s=="number"?u[v]=k(v==="top"?s:-s):u[v]=v==="top"?k(s):a(s),typeof l=="number"?u[y]=k(y==="left"?l:-l):u[y]=y==="left"?k(l):a(l)):(u.marginTop=k(s),u.marginLeft=k(l))}return u}),g=()=>{if(n()||e.dot)return c("div",{class:Be([e.position,{dot:e.dot,fixed:!!t.default}]),style:o.value},[r()])};return()=>{if(t.default){const{tag:u}=e;return c(u,{class:Be("wrapper")},{default:()=>[t.default(),g()]})}return g()}}});const Xt=z(Gt),[Zt,Kn]=L("config-provider"),Jt=Symbol(Zt),[Qt,_e]=L("icon"),en=e=>e==null?void 0:e.includes("/"),tn={dot:Boolean,tag:$("i"),name:String,size:C,badge:C,color:String,badgeProps:Object,classPrefix:String};var nn=O({name:Qt,props:tn,setup(e,{slots:t}){const n=$e(Jt,null),r=D(()=>e.classPrefix||(n==null?void 0:n.iconPrefix)||_e());return()=>{const{tag:a,dot:o,name:g,size:u,badge:l,color:s}=e,f=en(g);return c(Xt,ce({dot:o,tag:a,class:[r.value,f?"":`${r.value}-${g}`],style:{color:s,fontSize:k(u)},content:l},e.badgeProps),{default:()=>{var v;return[(v=t.default)==null?void 0:v.call(t),f&&c("img",{class:_e("image"),src:g},null)]}})}}});const q=z(nn),[rn,K]=L("loading"),on=Array(12).fill(null).map((e,t)=>c("i",{class:K("line",String(t+1))},null)),an=c("svg",{class:K("circular"),viewBox:"25 25 50 50"},[c("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),ln={size:C,type:$("circular"),color:String,vertical:Boolean,textSize:C,textColor:String};var sn=O({name:rn,props:ln,setup(e,{slots:t}){const n=D(()=>X({color:e.color},Dt(e.size))),r=()=>{const o=e.type==="spinner"?on:an;return c("span",{class:K("spinner",e.type),style:n.value},[t.icon?t.icon():o])},a=()=>{var o;if(t.default)return c("span",{class:K("text"),style:{fontSize:k(e.textSize),color:(o=e.textColor)!=null?o:e.color}},[t.default()])};return()=>{const{type:o,vertical:g}=e;return c("div",{class:K([o,{vertical:g}]),"aria-live":"polite","aria-busy":!0},[r(),a()])}}});const cn=z(sn),[un,j]=L("button"),dn=X({},je,{tag:$("button"),text:String,icon:String,type:$("default"),size:$("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:$("button"),loadingSize:C,loadingText:String,loadingType:String,iconPosition:$("left")});var fn=O({name:un,props:dn,emits:["click"],setup(e,{emit:t,slots:n}){const r=We(),a=()=>n.loading?n.loading():c(cn,{size:e.loadingSize,type:e.loadingType,class:j("loading")},null),o=()=>{if(e.loading)return a();if(n.icon)return c("div",{class:j("icon")},[n.icon()]);if(e.icon)return c(q,{name:e.icon,class:j("icon"),classPrefix:e.iconPrefix},null)},g=()=>{let s;if(e.loading?s=e.loadingText:s=n.default?n.default():e.text,s)return c("span",{class:j("text")},[s])},u=()=>{const{color:s,plain:f}=e;if(s){const v={color:f?s:"white"};return f||(v.background=s),s.includes("gradient")?v.border=0:v.borderColor=s,v}},l=s=>{e.loading?H(s):e.disabled||(t("click",s),r())};return()=>{const{tag:s,type:f,size:v,block:y,round:R,plain:A,square:T,loading:d,disabled:m,hairline:S,nativeType:B,iconPosition:_}=e,M=[j([f,v,{plain:A,block:y,round:R,square:T,loading:d,disabled:m,hairline:S}]),{[qt]:S}];return c(s,{type:B,class:M,style:u(),disabled:m,onClick:l},{default:()=>[c("div",{class:j("content")},[_==="left"&&o(),g(),_==="right"&&o()])]})}}});const gn=z(fn);let mn=0;function bn(){const e=G(),{name:t="unknown"}=(e==null?void 0:e.type)||{};return`${t}-${++mn}`}const[hn,W]=L("cell"),qe={tag:$("div"),icon:String,size:String,title:C,value:C,label:C,center:Boolean,isLink:Boolean,border:Y,required:Boolean,iconPrefix:String,valueClass:ee,labelClass:ee,titleClass:ee,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},vn=X({},qe,je);var yn=O({name:hn,props:vn,setup(e,{slots:t}){const n=We(),r=()=>{if(t.label||p(e.label))return c("div",{class:[W("label"),e.labelClass]},[t.label?t.label():e.label])},a=()=>{var l;if(t.title||p(e.title)){const s=(l=t.title)==null?void 0:l.call(t);return Array.isArray(s)&&s.length===0?void 0:c("div",{class:[W("title"),e.titleClass],style:e.titleStyle},[s||c("span",null,[e.title]),r()])}},o=()=>{const l=t.value||t.default;if(l||p(e.value))return c("div",{class:[W("value"),e.valueClass]},[l?l():c("span",null,[e.value])])},g=()=>{if(t.icon)return t.icon();if(e.icon)return c(q,{name:e.icon,class:W("left-icon"),classPrefix:e.iconPrefix},null)},u=()=>{if(t["right-icon"])return t["right-icon"]();if(e.isLink){const l=e.arrowDirection&&e.arrowDirection!=="right"?`arrow-${e.arrowDirection}`:"arrow";return c(q,{name:l,class:W("right-icon")},null)}};return()=>{var l;const{tag:s,size:f,center:v,border:y,isLink:R,required:A}=e,T=(l=e.clickable)!=null?l:R,d={center:v,required:A,clickable:T,borderless:!y};return f&&(d[f]=!!f),c(s,{class:W(d),role:T?"button":void 0,tabindex:T?0:void 0,onClick:n},{default:()=>{var m;return[g(),a(),o(),u(),(m=t.extra)==null?void 0:m.call(t)]}})}}});const En=z(yn),[xn,Sn]=L("form"),Bn={colon:Boolean,disabled:Boolean,readonly:Boolean,showError:Boolean,labelWidth:C,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:Y,showErrorMessage:Y,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var _n=O({name:xn,props:Bn,emits:["submit","failed"],setup(e,{emit:t,slots:n}){const{children:r,linkChildren:a}=pt(Me),o=d=>d?r.filter(m=>d.includes(m.name)):r,g=d=>new Promise((m,S)=>{const B=[];o(d).reduce((M,Z)=>M.then(()=>{if(!B.length)return Z.validate().then(N=>{N&&B.push(N)})}),Promise.resolve()).then(()=>{B.length?S(B):m()})}),u=d=>new Promise((m,S)=>{const B=o(d);Promise.all(B.map(_=>_.validate())).then(_=>{_=_.filter(Boolean),_.length?S(_):m()})}),l=d=>{const m=r.find(S=>S.name===d);return m?new Promise((S,B)=>{m.validate().then(_=>{_?B(_):S()})}):Promise.reject()},s=d=>typeof d=="string"?l(d):e.validateFirst?g(d):u(d),f=d=>{typeof d=="string"&&(d=[d]),o(d).forEach(S=>{S.resetValidation()})},v=()=>r.reduce((d,m)=>(d[m.name]=m.getValidationStatus(),d),{}),y=(d,m)=>{r.some(S=>S.name===d?(S.$el.scrollIntoView(m),!0):!1)},R=()=>r.reduce((d,m)=>(m.name!==void 0&&(d[m.name]=m.formValue.value),d),{}),A=()=>{const d=R();s().then(()=>t("submit",d)).catch(m=>{t("failed",{values:d,errors:m}),e.scrollToError&&m[0].name&&y(m[0].name)})},T=d=>{H(d),A()};return a({props:e}),Ne({submit:A,validate:s,getValues:R,scrollToField:y,resetValidation:f,getValidationStatus:v}),()=>{var d;return c("form",{class:Sn(),onSubmit:T},[(d=n.default)==null?void 0:d.call(n)])}}});const Cn=z(_n);function Ue(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function wn(e,t){if(Ue(e)){if(t.required)return!1;if(t.validateEmpty===!1)return!0}return!(t.pattern&&!t.pattern.test(String(e)))}function pn(e,t){return new Promise(n=>{const r=t.validator(e,t);if(xt(r)){r.then(n);return}n(r)})}function Ce(e,t){const{message:n}=t;return ie(n)?n(e,t):n||""}function $n({target:e}){e.composing=!0}function we({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function kn(e,t){const n=Fe();e.style.height="auto";let r=e.scrollHeight;if(re(t)){const{maxHeight:a,minHeight:o}=t;a!==void 0&&(r=Math.min(r,a)),o!==void 0&&(r=Math.max(r,o))}r&&(e.style.height=`${r}px`,Oe(n))}function In(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function V(e){return[...e].length}function le(e,t){return[...e].slice(0,t).join("")}const[An,I]=L("field"),Pn={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:C,formatter:Function,clearIcon:$("clear"),modelValue:Bt(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,spellcheck:{type:Boolean,default:null},clearTrigger:$("focus"),formatTrigger:$("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},Tn=X({},qe,Pn,{rows:C,type:$("text"),rules:Array,autosize:[Boolean,Object],labelWidth:C,labelClass:ee,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var Vn=O({name:An,props:Tn,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:t,slots:n}){const r=bn(),a=te({status:"unvalidated",focused:!1,validateMessage:""}),o=F(),g=F(),u=F(),{parent:l}=_t(Me),s=()=>{var i;return String((i=e.modelValue)!=null?i:"")},f=i=>{if(p(e[i]))return e[i];if(l&&p(l.props[i]))return l.props[i]},v=D(()=>{const i=f("readonly");if(e.clearable&&!i){const h=s()!=="",b=e.clearTrigger==="always"||e.clearTrigger==="focus"&&a.focused;return h&&b}return!1}),y=D(()=>u.value&&n.input?u.value():e.modelValue),R=i=>i.reduce((h,b)=>h.then(()=>{if(a.status==="failed")return;let{value:E}=y;if(b.formatter&&(E=b.formatter(E,b)),!wn(E,b)){a.status="failed",a.validateMessage=Ce(E,b);return}if(b.validator)return Ue(E)&&b.validateEmpty===!1?void 0:pn(E,b).then(x=>{x&&typeof x=="string"?(a.status="failed",a.validateMessage=x):x===!1&&(a.status="failed",a.validateMessage=Ce(E,b))})}),Promise.resolve()),A=()=>{a.status="unvalidated",a.validateMessage=""},T=()=>t("endValidate",{status:a.status,message:a.validateMessage}),d=(i=e.rules)=>new Promise(h=>{A(),i?(t("startValidate"),R(i).then(()=>{a.status==="failed"?(h({name:e.name,message:a.validateMessage}),T()):(a.status="passed",h(),T())})):h()}),m=i=>{if(l&&e.rules){const{validateTrigger:h}=l.props,b=he(h).includes(i),E=e.rules.filter(x=>x.trigger?he(x.trigger).includes(i):b);E.length&&d(E)}},S=i=>{var h;const{maxlength:b}=e;if(p(b)&&V(i)>+b){const E=s();if(E&&V(E)===+b)return E;const x=(h=o.value)==null?void 0:h.selectionEnd;if(a.focused&&x){const w=[...i],P=w.length-+b;return w.splice(x-P,P),w.join("")}return le(i,+b)}return i},B=(i,h="onChange")=>{const b=i;i=S(i);const E=V(b)-V(i);if(e.type==="number"||e.type==="digit"){const w=e.type==="number";i=Ot(i,w,w)}let x=0;if(e.formatter&&h===e.formatTrigger){const{formatter:w,maxlength:P}=e;if(i=w(i),p(P)&&V(i)>+P&&(i=le(i,+P)),o.value&&a.focused){const{selectionEnd:J}=o.value,ge=le(b,J);x=V(w(ge))-V(ge)}}if(o.value&&o.value.value!==i)if(a.focused){let{selectionStart:w,selectionEnd:P}=o.value;if(o.value.value=i,p(w)&&p(P)){const J=V(i);E?(w-=E,P-=E):x&&(w+=x,P+=x),o.value.setSelectionRange(Math.min(w,J),Math.min(P,J))}}else o.value.value=i;i!==e.modelValue&&t("update:modelValue",i)},_=i=>{i.target.composing||B(i.target.value)},M=()=>{var i;return(i=o.value)==null?void 0:i.blur()},Z=()=>{var i;return(i=o.value)==null?void 0:i.focus()},N=()=>{const i=o.value;e.type==="textarea"&&e.autosize&&i&&kn(i,e.autosize)},Ke=i=>{a.focused=!0,t("focus",i),U(N),f("readonly")&&M()},Ye=i=>{a.focused=!1,B(s(),"onBlur"),t("blur",i),!f("readonly")&&(m("onBlur"),U(N),Tt())},ue=i=>t("clickInput",i),Ge=i=>t("clickLeftIcon",i),Xe=i=>t("clickRightIcon",i),Ze=i=>{H(i),t("update:modelValue",""),t("clear",i)},de=D(()=>{if(typeof e.error=="boolean")return e.error;if(l&&l.props.showError&&a.status==="failed")return!0}),Je=D(()=>{const i=f("labelWidth"),h=f("labelAlign");if(i&&h!=="top")return{width:k(i)}}),Qe=i=>{i.keyCode===13&&(!(l&&l.props.submitOnEnter)&&e.type!=="textarea"&&H(i),e.type==="search"&&M()),t("keypress",i)},fe=()=>e.id||`${r}-input`,et=()=>a.status,tt=()=>{const i=I("control",[f("inputAlign"),{error:de.value,custom:!!n.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(n.input)return c("div",{class:i,onClick:ue},[n.input()]);const h={id:fe(),ref:o,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:i,disabled:f("disabled"),readonly:f("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,enterkeyhint:e.enterkeyhint,spellcheck:e.spellcheck,"aria-labelledby":e.label?`${r}-label`:void 0,onBlur:Ye,onFocus:Ke,onInput:_,onClick:ue,onChange:we,onKeypress:Qe,onCompositionend:we,onCompositionstart:$n};return e.type==="textarea"?c("textarea",h,null):c("input",ce(In(e.type),h),null)},nt=()=>{const i=n["left-icon"];if(e.leftIcon||i)return c("div",{class:I("left-icon"),onClick:Ge},[i?i():c(q,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},it=()=>{const i=n["right-icon"];if(e.rightIcon||i)return c("div",{class:I("right-icon"),onClick:Xe},[i?i():c(q,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},rt=()=>{if(e.showWordLimit&&e.maxlength){const i=V(s());return c("div",{class:I("word-limit")},[c("span",{class:I("word-num")},[i]),Te("/"),e.maxlength])}},ot=()=>{if(l&&l.props.showErrorMessage===!1)return;const i=e.errorMessage||a.validateMessage;if(i){const h=n["error-message"],b=f("errorMessageAlign");return c("div",{class:I("error-message",b)},[h?h({message:i}):i])}},at=()=>{const i=f("labelWidth"),h=f("labelAlign"),b=f("colon")?":":"";if(n.label)return[n.label(),b];if(e.label)return c("label",{id:`${r}-label`,for:n.input?void 0:fe(),onClick:E=>{H(E),Z()},style:h==="top"&&i?{width:k(i)}:void 0},[e.label+b])},lt=()=>[c("div",{class:I("body")},[tt(),v.value&&c(q,{ref:g,name:e.clearIcon,class:I("clear")},null),it(),n.button&&c("div",{class:I("button")},[n.button()])]),rt(),ot()];return Ne({blur:M,focus:Z,validate:d,formValue:y,resetValidation:A,getValidationStatus:et}),Ae(At,{customValue:u,resetValidation:A,validateWithTrigger:m}),Ie(()=>e.modelValue,()=>{B(s()),A(),m("onChange"),U(N)}),Pe(()=>{B(s(),e.formatTrigger),U(N)}),kt("touchstart",Ze,{target:D(()=>{var i;return(i=g.value)==null?void 0:i.$el})}),()=>{const i=f("disabled"),h=f("labelAlign"),b=nt(),E=()=>{const x=at();return h==="top"?[b,x].filter(Boolean):x||[]};return c(En,{size:e.size,class:I({error:de.value,disabled:i,[`label-${h}`]:h}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:Je.value,valueClass:I("value"),titleClass:[I("label",[h,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:b&&h!=="top"?()=>b:null,title:E,value:lt,extra:n.extra})}}});const Dn=z(Vn),[Fn,pe]=L("cell-group"),On={title:String,inset:Boolean,border:Y};var Ln=O({name:Fn,inheritAttrs:!1,props:On,setup(e,{slots:t,attrs:n}){const r=()=>{var o;return c("div",ce({class:[pe({inset:e.inset}),{[Ut]:e.border&&!e.inset}]},n),[(o=t.default)==null?void 0:o.call(t)])},a=()=>c("div",{class:pe("title",{inset:e.inset})},[t.title?t.title():e.title]);return()=>e.title||t.title?c(ft,null,[a(),r()]):r()}});const Rn=z(Ln);const zn="/modifiable/img/logo.svg",He=e=>(ht("data-v-c7c0d90a"),e=e(),vt(),e),Mn={class:"container"},Nn={class:"form"},jn=He(()=>ne("div",{class:"title"},"vue3-H5",-1)),Wn=He(()=>ne("img",{src:zn,alt:""},null,-1)),qn={style:{margin:"16px"}},Un=O({__name:"login",setup(e){const t=gt(),n=F(""),r=F(""),a=o=>{console.log("submit",o),localStorage.setItem("token","123"),t.replace("/")};return(o,g)=>{const u=Dn,l=Rn,s=gn,f=Cn;return mt(),bt("div",Mn,[ne("div",Nn,[jn,Wn,c(f,{onSubmit:a},{default:oe(()=>[c(l,{inset:""},{default:oe(()=>[c(u,{modelValue:n.value,"onUpdate:modelValue":g[0]||(g[0]=v=>n.value=v),name:"username",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),c(u,{modelValue:r.value,"onUpdate:modelValue":g[1]||(g[1]=v=>r.value=v),type:"password",name:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"])]),_:1}),ne("div",qn,[c(s,{round:"",block:"",type:"primary","native-type":"submit"},{default:oe(()=>[Te(" 提交 ")]),_:1})])]),_:1})])])}}});const Yn=yt(Un,[["__scopeId","data-v-c7c0d90a"]]);export{Yn as default};
