import{N as O}from"./NavBar-CIHLfBL-.js";import{K as B,L as U,_ as T,o as r,c as _,b as f,n as F,t as N,l as K,r as E,F as S,g as P,s as q,M as R,d as g}from"./index-DPmcGQ0K.js";import{r as H,a as W,b as j,c as G}from"./component-functions-CnzHcF-h.js";import"./Logo-sm-8CoFRDJB.js";var y={exports:{}};/*!
  * Bootstrap toast.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(s,a){(function(i,e){s.exports=e(H(),W(),j(),G())})(B,function(i,e,c,u){const h="toast",o=".bs.toast",v=`mouseover${o}`,A=`mouseout${o}`,I=`focusin${o}`,V=`focusout${o}`,w=`hide${o}`,D=`hidden${o}`,L=`show${o}`,k=`shown${o}`,C="fade",$="hide",d="show",p="showing",M={animation:"boolean",autohide:"boolean",delay:"number"},x={animation:!0,autohide:!0,delay:5e3};class l extends i{constructor(t,n){super(t,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return x}static get DefaultType(){return M}static get NAME(){return h}show(){if(e.trigger(this._element,L).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(C);const n=()=>{this._element.classList.remove(p),e.trigger(this._element,k),this._maybeScheduleHide()};this._element.classList.remove($),u.reflow(this._element),this._element.classList.add(d,p),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||e.trigger(this._element,w).defaultPrevented)return;const n=()=>{this._element.classList.add($),this._element.classList.remove(p,d),e.trigger(this._element,D)};this._element.classList.add(p),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(d),super.dispose()}isShown(){return this._element.classList.contains(d)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,n){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const b=t.relatedTarget;this._element===b||this._element.contains(b)||this._maybeScheduleHide()}_setListeners(){e.on(this._element,v,t=>this._onInteraction(t,!0)),e.on(this._element,A,t=>this._onInteraction(t,!1)),e.on(this._element,I,t=>this._onInteraction(t,!0)),e.on(this._element,V,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const n=l.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}return c.enableDismissTrigger(l),u.defineJQueryPlugin(l),l})})(y);var Y=y.exports;const z=U(Y),Q={name:"ToAst",props:["msg"],mounted(){const s=this.$refs.toast;new z(s,{delay:3e3}).show()}},J={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},X={class:"toast-header"},Z={class:"me-auto"},tt=f("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),et={key:0,class:"toast-body"};function st(s,a,i,e,c,u){return r(),_("div",J,[f("div",X,[f("span",{class:F([`bg-${i.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),f("strong",Z,N(i.msg.title),1),tt]),i.msg.content?(r(),_("div",et,N(i.msg.content),1)):K("",!0)],512)}const ot=T(Q,[["render",st]]),nt={components:{Toast:ot},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-message",s=>{const{style:a="success",title:i,content:e}=s;this.messages.push({style:a,title:i,content:e})})}},it={class:"toast-container position-absolute pe-3 top-0 end-0"};function at(s,a,i,e,c,u){const h=E("Toast");return r(),_("div",it,[(r(!0),_(S,null,P(c.messages,(m,o)=>(r(),q(h,{key:o,msg:m},null,8,["msg"]))),128))])}const rt=T(nt,[["render",at]]);var ct={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"luminous",BASE_URL:"/TestGit-1/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:ut}=ct,ht={components:{NavBar:O,ToastMessages:rt},provide(){return{emitter:R}},methods:{check(){const s=`${ut}api/user/check`;this.$http.post(s).then(()=>{console.log("驗證成功")}).catch(()=>{this.$router.push("/login")})}},mounted(){const s=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=s,this.check()}};function lt(s,a,i,e,c,u){const h=E("NavBar"),m=E("ToastMessages"),o=E("RouterView");return r(),_(S,null,[g(h),g(m),g(o)],64)}const ft=T(ht,[["render",lt]]);export{ft as default};
