import{b as J,h as Q,y as Z}from"./chunk-TL3SOKZG.js";import{a as he,b as ge,c as _e,e as xe,g as K,h as fe,j as ve,k as we,l as Ce,m as ye,o as Me}from"./chunk-2UOGX6KS.js";import{g as me,i as ue}from"./chunk-FB7CDEED.js";import{$a as B,Ia as N,L as ee,Na as P,Oa as oe,Pa as C,Qa as I,Ra as j,Ua as O,V as E,Va as re,Xa as ae,Ya as se,Za as o,_a as a,aa as te,ba as u,ca as h,cb as S,cc as ce,da as G,db as g,ea as ne,eb as _,ec as pe,fb as A,fc as $,gb as U,hc as z,ja as L,ka as k,mb as d,na as F,nb as T,ob as le,rb as D,sb as R,tb as H,ub as de,wa as ie,ya as p,yb as V,za as W}from"./chunk-XIWENJHJ.js";import{i as q}from"./chunk-BL3FZZIZ.js";var Ne=(()=>{let i=class i{constructor(){this.data=k.required(),this.menuToggled=L()}handleClick(e){this.menuToggled.emit(this.data())}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=E({type:i,selectors:[["menu-toggle"]],inputs:{data:[1,"data"]},outputs:{menuToggled:"menuToggled"},standalone:!0,features:[V],decls:5,vars:8,consts:[[1,"fab",3,"click","ngClass","title"],[1,"icon"],[1,"text"]],template:function(t,n){t&1&&(o(0,"button",0),g("click",function(m){return n.handleClick(m)}),o(1,"div",1),d(2),a(),o(3,"div",2),d(4),a()()),t&2&&(I("background-color","black")("color","white"),C("ngClass",n.data().isOpen?"active":"")("title",n.data().text),p(2),T(n.data().icon),p(2),T(n.data().text))},dependencies:[z,ce],styles:[".active[_ngcontent-%COMP%]{border:3px solid green}.fab[_ngcontent-%COMP%]:hover{transform:scale(1.7)}"]});let s=i;return s})();var Se=["*"];function Te(s,i){if(s&1){let l=S();o(0,"div",2)(1,"button",8),g("click",function(){u(l);let t=_();return h(t.doConfirm())}),o(2,"span",7),d(3,"recommend"),a()(),o(4,"button",9),g("click",function(){u(l);let t=_();return h(t.askUserConfirm=!1)}),o(5,"span",7),d(6,"cancel"),a()()()}}function Ee(s,i){if(s&1){let l=S();o(0,"div",10),g("click",function(){u(l);let t=_();return h(t.doConfirm())}),o(1,"button",11)(2,"span",7),d(3,"delete"),a()()()}s&2&&(p(),C("title","do you want to delete?"))}var Ke=(()=>{let i=class i{constructor(){this.x=0,this.y=0,this.w=0,this.h=0,this.label="",this.addLabel=" ",this.position="absolute",this.onClose=new F,this.onAdd=new F,this.onDelete=new F,this.onClone=new F,this.askUserConfirm=!1}handleKeyboardEvent(e){e.key==="Escape"&&this.onClose.emit()}get style(){return{position:this.position,left:`${this.x}px`,top:`${this.y}px`,maxWidth:`${this.w}px`,maxHeight:`${this.h}px`,padding:"2px",zIndex:1e3}}doConfirm(){this.askUserConfirm?(this.askUserConfirm=!1,this.onDelete.emit()):this.askUserConfirm=!0}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=E({type:i,selectors:[["context-menu"]],hostBindings:function(t,n){t&1&&g("keydown",function(m){return n.handleKeyboardEvent(m)},!1,ie)},inputs:{x:"x",y:"y",w:"w",h:"h",label:"label",addLabel:"addLabel",position:"position"},outputs:{onClose:"onClose",onAdd:"onAdd",onDelete:"onDelete",onClone:"onClone"},standalone:!0,features:[V],ngContentSelectors:Se,decls:19,vars:6,consts:[[1,"dialogcard",3,"ngStyle"],[1,"dialogcard-header"],[1,"row"],[1,"dialogcard-toolbar"],[1,"dialogcard-body"],[1,"dialogcard-footer"],[1,"image-btn",3,"click"],[1,"small-icon"],[1,"circle","red","col",3,"click"],[1,"circle","green","col",3,"click"],[3,"click"],[1,"circle",3,"title"]],template:function(t,n){t&1&&(A(),o(0,"div",0)(1,"div",1)(2,"div"),d(3),a(),B(4,"div"),P(5,Te,7,0,"div",2)(6,Ee,4,1,"div"),a(),B(7,"div",3),o(8,"div",4),U(9),a(),o(10,"div",5)(11,"button",6),g("click",function(){return n.onClone.emit()}),o(12,"span",7),d(13,"content_copy"),a(),d(14," clone "),a(),o(15,"button",6),g("click",function(){return n.onAdd.emit()}),o(16,"span",7),d(17,"add"),a(),d(18),a()()()),t&2&&(C("ngStyle",n.style),p(3),T(n.label),p(2),O(n.askUserConfirm?5:6),p(3),I("height",n.h-120,"px"),p(10),le(" ",n.addLabel," "))},dependencies:[z,$],styles:[".dialogcard[_ngcontent-%COMP%]{font-size:14px;padding:0;margin:0}.red[_ngcontent-%COMP%]{background-color:red}.green[_ngcontent-%COMP%]{background-color:green}.largeicon[_ngcontent-%COMP%]{font-family:Material Icons;font-weight:400;font-style:normal;font-size:27px!important;background-color:transparent}.dialogcard-body[_ngcontent-%COMP%]{overflow-y:auto}"]});let s=i;return s})();var Ve=["menu-holder",""],ze=[[["","header",""]],"*"],Le=["[header]","*"];function Ie(s,i){s&1&&(o(0,"span",5),d(1,"turned_in"),a())}function Oe(s,i){s&1&&(o(0,"span",5),d(1,"turned_in_not"),a())}function De(s,i){if(s&1){let l=S();o(0,"div",7),g("click",function(){u(l);let t=_();return h(t.gotoDetail())}),o(1,"span",5),d(2,"arrow_forward"),a()()}}function Re(s,i){if(s&1){let l=S();G(),o(0,"rect",10),g("pointerdown",function(t){let n=u(l).$implicit,r=_(2);return h(r.resizerDown(t,n))})("touchstart",function(t){let n=u(l).$implicit,r=_(2);return h(r.resizerDown(t,n))}),a()}if(s&2){let l=i.$implicit,e=_(2);C("ngStyle",e.rectStyle(l))}}function He(s,i){if(s&1&&ae(0,Re,1,1,":svg:rect",9,re),s&2){let l=_();se(l.getMenuangles())}}var ct=(()=>{let i=class i{constructor(e,t,n){this.store=e,this.route=t,this.nav=n,this.isOpen=k(!1),this.next=k(""),this.data=k(new J),this.current=k(void 0),this.reIndexed=L(),this.isDbl=N(!1),this.begin=N(0),this.end=N(0),this.currentMenu=void 0,this.onMove=r=>{r.stopPropagation();let{clientX:m,clientY:c}="pointerId"in r?r:r.touches[0],x=parseFloat((m-this.begin()).toFixed(2)),f=parseFloat((c-this.end()).toFixed(2));this.begin.set(m),this.end.set(c),this.data().x+=x,this.data().y+=f},this.onUp=r=>{r.stopPropagation(),document.removeEventListener("pointermove",this.onMove),document.removeEventListener("pointerup",this.onUp),document.removeEventListener("touchmove",this.onMove),document.removeEventListener("touchend",this.onUp),this.dispatch("on-move"),this.begin.set(0),this.end.set(0)},this.onResizerMove=r=>{r.stopPropagation();let{clientX:m,clientY:c}="pointerId"in r?r:r.touches[0],x=m-this.begin(),f=c-this.end(),y=this.data(),w=y.w,v=y.h,M=y.x,b=y.y;switch(this.currentMenu?.placement){case"TopLeft":w-=x,v-=f,M+=x,b+=f;break;case"TopRight":w+=x,v-=f,b+=f;break;case"BottomLeft":w-=x,v+=f,M+=x;break;case"BottomRight":w+=x,v+=f;break;case"Middle":M+=x,b+=f;break;case"MiddleLeft":M+=x,w-=x;break;case"MiddleTop":b+=f,v-=f;break;case"MiddleRight":w+=x;break;case"BottomCenter":v+=f;break}this.data().w=w,this.data().h=v,this.data().x=M,this.data().y=b,this.begin.set(m),this.end.set(c)},this.onResizerUp=()=>{document.removeEventListener("pointermove",this.onResizerMove),document.removeEventListener("pointerup",this.onResizerUp),document.removeEventListener("touchmove",this.onResizerMove),document.removeEventListener("touchend",this.onResizerUp);let r=this.data().config.maxWidth;this.data().w!==r&&(this.data().config.maxWidth=this.data().w),this.dispatch("on-resize"),this.isDbl.set(!1)}}ngOnChanges(e){}toggleTack(e){e.stopPropagation(),this.dispatch("on-tack")}toggleOpen(e){e.stopPropagation(),this.dispatch("on-open")}cancelAll(e){e.stopPropagation(),this.isDbl.set(!1)}toggleDblClicked(e){e.stopPropagation(),this.isDbl.set(!this.isDbl())}rectStyle(e){return{x:e.x,y:e.y,width:e.w,height:e.h,rx:0,fill:e.fill,cursor:e.cursor}}dim(){let e=this.data();return`${e.x},${e.y}-${e.w},${e.h}`}getMenuangles(){return this.getPositionMenuangle(18,"yellow")}getPositionMenuangle(e,t){let n=[],r=this.data(),m=r.x,c=r.y,x=r.w,f=r.h,y=e,w=e+1,v=r.text,M=y,b={TopLeft:{x:m-M,y:c-M,w,h:w,text:v,placement:"TopLeft",cursor:"nwse-resize"},TopRight:{x:m+x,y:c-M,w,h:w,text:v,placement:"TopRight",cursor:"nesw-resize"},BottomLeft:{x:m-M,y:c+f,w,h:w,text:v,placement:"BottomLeft",cursor:"nesw-resize"},BottomRight:{x:m+x,y:c+f,w,h:w,text:v,placement:"BottomRight",cursor:"nwse-resize"},Middle:{x:m+x/2-y/2,y:c+f/2-y/2,w:55,h:55,text:v,placement:"Middle",cursor:"move"},MiddleLeft:{x:m-M,y:c,w:y,h:f,text:v,placement:"MiddleLeft",cursor:"ew-resize"},MiddleTop:{x:m,y:c-M,w:x,h:y,text:v,placement:"MiddleTop",cursor:"ns-resize"},MiddleRight:{x:m+x,y:c,w:y,h:f,text:v,placement:"MiddleRight",cursor:"ew-resize"},BottomCenter:{x:m,y:c+f,w:x,h:y,text:v,placement:"BottomCenter",cursor:"ns-resize"}};for(let Y in b)b[Y].text=v,b[Y].fill=t,n.push(b[Y]);return n}onDown(e){e.stopPropagation(),!this.data().isTack&&(this.reIndex(e),this.begin.set(e.clientX),this.end.set(e.clientY),!document.onpointermove&&(document.addEventListener("pointermove",this.onMove),document.addEventListener("pointerup",this.onUp),document.addEventListener("touchmove",this.onMove),document.addEventListener("touchend",this.onUp)))}resizerDown(e,t){if(e.stopPropagation(),this.data().isTack)return;let{clientX:n,clientY:r}="pointerId"in e?e:e.touches[0];this.begin.set(n),this.end.set(r),this.currentMenu=t,!document.onpointermove&&(document.addEventListener("pointermove",this.onResizerMove),document.addEventListener("pointerup",this.onResizerUp),document.addEventListener("touchmove",this.onResizerMove),document.addEventListener("touchend",this.onResizerUp))}dispatch(e){return q(this,null,function*(){this.reIndexed.emit({event:e,data:this.data()})})}reIndex(e){e.stopPropagation(),this.dispatch("on-index")}gotoDetail(){this.nav.navigate([this.next],{relativeTo:this.route})}};i.\u0275fac=function(t){return new(t||i)(W(Z),W(me),W(ue))},i.\u0275cmp=E({type:i,selectors:[["","menu-holder",""]],inputs:{isOpen:[1,"isOpen"],next:[1,"next"],data:[1,"data"],current:[1,"current"]},outputs:{reIndexed:"reIndexed"},standalone:!0,features:[te,V],attrs:Ve,ngContentSelectors:Le,decls:21,vars:13,consts:[[1,"svg-holder-open","el1"],[1,"svg-holder-header","el0",3,"pointerdown","dblclick"],[1,"header-btns"],[1,"toggle",3,"click"],["class","icon",4,"ngIf"],[1,"icon"],[2,"display","flex","gap","3px","flex-direction","row","align-items","center"],[1,"svg-holder-resizer",3,"click"],["class","svg-holder-resizer",3,"click",4,"ngIf"],[3,"ngStyle"],[3,"pointerdown","touchstart","ngStyle"]],template:function(t,n){if(t&1){let r=S();A(ze),de(0),G(),o(1,"g")(2,"foreignObject",0),ne(),o(3,"div",1),g("pointerdown",function(c){return u(r),h(n.onDown(c))})("dblclick",function(c){return u(r),h(n.toggleDblClicked(c))}),o(4,"div",2)(5,"div",3),g("click",function(c){return u(r),h(n.toggleTack(c))}),P(6,Ie,2,0,"span",4)(7,Oe,2,0,"span",4),a(),o(8,"div",3),g("click",function(c){return u(r),h(n.toggleOpen(c))}),o(9,"span",5),d(10,"close"),a()()(),o(11,"div",6)(12,"span"),d(13),a(),U(14),a(),o(15,"div",7),g("click",function(c){return u(r),h(n.toggleDblClicked(c))}),o(16,"span",5),d(17,"aspect_ratio"),a()(),P(18,De,3,0,"div",8),a(),U(19,1,["(pointerdown)","reIndex($event)",1,"svg-holder-content"]),a(),P(20,He,2,0),a()}if(t&2){let r=n.data();p(2),I("z-index",r.zIndex),oe("width",r.w)("height",r.h)("x",r.x)("y",r.y),p(),j("active",r===n.current()),p(3),C("ngIf",r.isTack),p(),C("ngIf",!r.isTack),p(6),T(r.text),p(5),C("ngIf",n.next),p(2),O(n.isDbl()?20:-1)}},dependencies:[z,pe,$],styles:['.svg-holder-open[_ngcontent-%COMP%]{display:grid;grid-template-rows:max-content auto;-webkit-user-select:none;user-select:none;padding:0;margin:0;overflow:hidden;background-color:var(--primary-color);transition:opacity .5s ease-in-out}.svg-holder-open[_ngcontent-%COMP%]:hover{opacity:1}.svg-holder-header[_ngcontent-%COMP%]{display:grid;grid-template-columns:60px auto 56px max-content;cursor:move;padding-right:.5em;padding-left:.5em;width:100%;justify-items:center;opacity:.4;align-items:center}.svg-holder-header[_ngcontent-%COMP%]:hover{opacity:1}.svg-holder-content[_ngcontent-%COMP%]{overflow:hidden!important}.svg-holder-header-notcurrent[_ngcontent-%COMP%]{text-align:center}.svg-holder-icon[_ngcontent-%COMP%]{font-size:16px;font-family:Material Icons;font-weight:400;font-style:normal;background-color:transparent;cursor:pointer}.svg-holder-resizer[_ngcontent-%COMP%]{font-size:21px!important;font-family:Material Icons;font-weight:400;font-style:normal;cursor:pointer}.help-bubble[_ngcontent-%COMP%]{position:relative;background:var(--accent-color);border-radius:.4em;padding:.3em;margin:.9em;transition:opacity .5s ease-in-out;opacity:.6}.help-bubble[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:50%;width:0;height:0;border:.8125em solid transparent;border-top-color:var(--accent-color);border-bottom:0;border-right:0;margin-left:-.40625em;margin-bottom:-.8125em}.help-bubble[_ngcontent-%COMP%]:hover{opacity:1}foreignObject[_ngcontent-%COMP%]{overflow:hidden;padding:0;margin:0}']});let s=i;return s})();function Fe(s,i){if(s&1){let l=S();o(0,"div",0)(1,"div",1),g("click",function(t){u(l);let n=_();return h(n.handleClick(t))}),o(2,"div"),d(3),a(),B(4,"div"),o(5,"button",2),g("click",function(){u(l);let t=_();return h(t.onChanged())}),o(6,"span",3),d(7,"save"),a()()(),o(8,"div",4)(9,"table")(10,"tr")(11,"td"),d(12,"placement"),a(),o(13,"td")(14,"select",5),H("ngModelChange",function(t){u(l);let n=_();return R(n.data().placement,t)||(n.data().placement=t),h(t)}),o(15,"option",6),d(16,"Fixed"),a(),o(17,"option",7),d(18,"Auto"),a()()()(),o(19,"tr")(20,"td"),d(21,"x"),a(),o(22,"td")(23,"input",8),H("ngModelChange",function(t){u(l);let n=_();return R(n.data().x,t)||(n.data().x=t),h(t)}),a()()(),o(24,"tr")(25,"td"),d(26,"y"),a(),o(27,"td")(28,"input",8),H("ngModelChange",function(t){u(l);let n=_();return R(n.data().y,t)||(n.data().y=t),h(t)}),a()()(),o(29,"tr")(30,"td"),d(31,"maxWidth"),a(),o(32,"td")(33,"input",8),H("ngModelChange",function(t){u(l);let n=_();return R(n.data().config.maxWidth,t)||(n.data().config.maxWidth=t),h(t)}),g("ngModelChange",function(t){u(l);let n=_();return h(n.updateWidth(t))}),a()()(),o(34,"tr")(35,"td"),d(36,"maxHeight"),a(),o(37,"td")(38,"input",8),H("ngModelChange",function(t){u(l);let n=_();return R(n.data().config.maxHeight,t)||(n.data().config.maxHeight=t),h(t)}),g("ngModelChange",function(t){u(l);let n=_();return h(n.updateHeight(t))}),a()()()()()()}if(s&2){let l=_();p(),j("el3",l.data().isOpen),p(2),T(l.data().role),p(11),D("ngModel",l.data().placement),p(9),D("ngModel",l.data().x),C("min",30)("max",2e3),p(5),D("ngModel",l.data().y),C("min",30)("max",2e3),p(5),D("ngModel",l.data().config.maxWidth),C("min",100)("max",800),p(5),D("ngModel",l.data().config.maxHeight),C("min",300)("max",1200)}}var ft=(()=>{let i=class i{constructor(){this.data=k.required(),this.dataChanged=L(),this.onClicked=L()}onChanged(){this.dataChanged.emit(this.data())}updateWidth(e){this.data().w=e}updateHeight(e){this.data().h=e}handleClick(e){this.onClicked.emit(this.data())}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=E({type:i,selectors:[["mnu"]],inputs:{data:[1,"data"]},outputs:{dataChanged:"dataChanged",onClicked:"onClicked"},standalone:!0,features:[V],decls:1,vars:1,consts:[[1,"dialogcard","glass"],[1,"dialogcard-header",3,"click"],[1,"image-btn",3,"click"],[1,"icon"],[1,"dialogcard-body","form"],[3,"ngModelChange","ngModel"],["value","fixed"],["value","auto"],["type","range",3,"ngModelChange","ngModel","min","max"]],template:function(t,n){t&1&&P(0,Fe,39,16,"div",0),t&2&&O(n.data().role!==""&&n.data().role!==void 0?0:-1)},dependencies:[z,Me,Ce,ye,he,ve,we,_e,fe]});let s=i;return s})();var ke=class{get getGroupedOptions(){let i=new Array;for(let e of this.options)if(e.group&&e.group!==""){let t=i.find(n=>n.key===e.group);t||(t=new Q,t.key=e.group,i.push(t)),t.value.push(e)}if(i.length>0)return i;let l=new Q;return l.key="Options",l.value=this.options,i.push(l),i}constructor(i){this.value=i.value,this.key=i.key,this.label=i.label,this.description=i.description,this.required=i.required,this.order=i.order,this.type=i.type,this.options=i.options||[]}};var Mt=(()=>{let i=class i{toFormGroup(e){let t={};return e.forEach(n=>{t[n.key]=n.required?new K(n.value||"",ge.required):new K(n.value||"")}),new xe(t)}};i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=ee({token:i,factory:i.\u0275fac});let s=i;return s})();export{Ne as a,Ke as b,ct as c,ft as d,ke as e,Mt as f};
