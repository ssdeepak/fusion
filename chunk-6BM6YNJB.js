import{a as x,b}from"./chunk-3MICEEYE.js";import{i as d,y as v}from"./chunk-TL3SOKZG.js";import{a as P,b as L}from"./chunk-FB7CDEED.js";import{Ia as u,L as y,Q as c,c as w,k as m,n as p,v as h}from"./chunk-XIWENJHJ.js";import{i as a}from"./chunk-BL3FZZIZ.js";var H=(()=>{let o=class o extends x{constructor(t,e,s){super(),this._httpClient=t,this.groupService=e,this.store=s,this.search=u(""),this.filtered=u([]),this.plans=u([]),this.plan=u(void 0),this.httpOptions={headers:new P({"Content-Type":"application/json"})}}refresh(){return a(this,null,function*(){if(this.useLocalDb){let t=yield this.getLocalPlans();this.plans.set(t),this.setupFilters(),this.doFilter()}else this.getPlans().subscribe(t=>{this.plans.update(e=>e=t),this.setupFilters(),this.doFilter()})})}setupFilters(){return a(this,null,function*(){this.assignValuesToFilters()})}assignValuesToFilters(){}setFiltersForCurrent(){var t=this.plan()}reset(){this.doFilter()}setCurrent(t){this.plan.set(t)}doSearch(){this.doFilter()}doFilter(){var t=new Array;t=this.plans();var e=this.search();e.length>0&&(t=t.filter(s=>s.key.toLowerCase().includes(e.toLowerCase())||s.history.toLowerCase().includes(e.toLowerCase())||s.outputFormat.toLowerCase().includes(e.toLowerCase()))),t.sort((s,r)=>s.key>r.key?1:-1),this.filtered.update(s=>s=t)}data(){return(this.plans()===void 0||this.plans()===null||this.plans().length===0)&&this.getPlans().subscribe(t=>{this.plans.update(e=>e=t)}),this.plans()}getLocalPlans(){return a(this,null,function*(){return yield this.store.readPlans()})}getLocalPlan(t){return a(this,null,function*(){let e=yield this.store.getPlan(t);this.plan.set(e);var s=this.plans();let r=s.find(i=>i.id===t);if(r){let i=s.indexOf(r);s.splice(i,1,e),this.plans.update(n=>n=s)}return e})}createLocalPlan(t){return a(this,null,function*(){yield this.store.createPlan(t);let e=yield this.store.readPlans();return this.plans.set(e),t})}updateLocalPlan(t){return a(this,null,function*(){yield this.store.updatePlan(t);var e=this.plans();let s=e.find(r=>r.id===t.id);if(s){let r=e.indexOf(s);e.splice(r,1,t),this.plans.update(i=>i=e)}return t})}deleteLocalPlan(t){return a(this,null,function*(){yield this.store.deletePlan(t);var e=this.plans();let s=e.find(r=>r.id===t);if(s){let r=e.indexOf(s);e.splice(r,1),this.plans.update(i=>i=e)}return!0})}getPlans(){return this._httpClient.get("api/plan").pipe(h(this.handleError),p(e=>{var s=new Array;for(let i=0;i<e.length;i++){var r=e[i];s.push(new d().fromJson(r))}return s}))}getPlan(t){if(this.useLocalDb)return new w(e=>{this.getLocalPlan(t).then(s=>{e.next(s)})});{let e="api/plan/"+t;return this._httpClient.get(e).pipe(h(this.handleError),p(s=>{var r=new d().fromJson(s);this.plan.set(r);var i=this.plans();let n=i.find(l=>l.id===t);if(n){let l=i.indexOf(n);i.splice(l,1,r),this.plans.update(g=>g=i)}return r}))}}createPlan(t){return a(this,null,function*(){if(this.useLocalDb)return yield this.createLocalPlan(t),t;{let e=JSON.stringify(t.toJson());return this._httpClient.post("api/plan/create",e,this.httpOptions).pipe(h(this.handleError),p(r=>{var i=new d().fromJson(r);return this.plans.update(n=>n=[...n,i]),i}))}})}updatePlan(t){return a(this,null,function*(){if(this.useLocalDb)return yield this.updateLocalPlan(t),t;{let e=JSON.stringify(t.toJson()),s="api/plan/edit/"+t.id;return this._httpClient.put(s,e,this.httpOptions).pipe(h(this.handleError),p(r=>{if(!r)return;var i=this.plans();let n=i.find(l=>l.id===t.id);if(n){let l=i.indexOf(n);i.splice(l,1,t),this.plans.update(g=>g=i)}return t}))}})}deletePlan(t){return a(this,null,function*(){if(this.useLocalDb)return yield this.deleteLocalPlan(t),!0;{let e="api/plan/delete/"+t;return this._httpClient.delete(e).pipe(h(this.handleError)),p(s=>{if(!s)return!1;var r=this.plans();let i=r.find(n=>n.id===t);if(i){let n=r.indexOf(i);r.splice(n,1),this.plans.update(l=>l=r)}return!0})}})}handleError(t){return t.error instanceof ErrorEvent?alert("An error occurred:"+t.error.message):alert(`Backend returned code ${t.status}, body was: ${t.error}`),alert(" return an observable with a user-facing error message"),m(()=>new Error("Something bad happened; please try again later."))}groups(){return[]}flatten(t){let e=new Array;for(let s of t)this.recurse(s,e);return e}recurse(t,e){let s=t;if(s&&((s.groups===void 0||s.groups.length===0)&&e.push(s),!!s.groups&&s.groups.length))for(let r of s.groups)this.recurse(r,e)}};o.\u0275fac=function(e){return new(e||o)(c(L),c(b),c(v))},o.\u0275prov=y({token:o,factory:o.\u0275fac,providedIn:"root"});let f=o;return f})();export{H as a};
