"use strict";(self["webpackChunkexample"]=self["webpackChunkexample"]||[]).push([[8822],{1214:function(e,t,i){function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.d(t,{Z:function(){return s}});class n{constructor(){r(this,"getParent",((e,t)=>t.find((t=>t.children?.some((t=>t.key===e)))))),r(this,"resolveKey",((e,t)=>{const[i]=e.split("/"),r=this.getParent(i,t);return r?`${r.key}/${e}`:e})),r(this,"resolveActiveKey",(e=>{const[t]=e.split("/").reverse();return t})),r(this,"clearChildren",(e=>e?e.map((e=>({...e,active:!1,children:this.clearChildren(e.children)}))):e)),r(this,"setActive",((e,t)=>e.map((e=>({...e,active:e.key===t,children:this.clearChildren(e.children)}))))),r(this,"findFirstActiveItem",((e,t=!1)=>{const i=e.find((e=>!e.disabled&&e.active));return i||(t?e.find((e=>!e.disabled)):void 0)}))}}const a=new n;var s=a},6195:function(e,t,i){i.r(t),i.d(t,{default:function(){return h}});i(7658);var r=i(3396),n=i(7139),a=i(1214),s=i(4870),l=i(2483);const o={class:"container page-container"},c={class:"row"},u={class:"col-12 col-lg-3 sidebar-col"},d={class:"col-12 col-lg-9"},v=(0,r._)("div",{class:"subheading"},"Extra Komponenter",-1),k=["id"];var m=(0,r.aZ)({__name:"EkstraKomponenterView",setup(e){const t=(0,l.yj)(),i=(0,l.tv)(),m=(0,s.iH)(""),p=(0,s.iH)(),h=(0,s.iH)([{key:"ekstradropdownmenu",title:"Dropdown-menu"},{key:"ekstraknapspinner",title:"Knap spinner"},{key:"ekstranummerfelt",title:"Nummer"},{key:"ekstraprogressbar",title:"Progressbar"},{key:"ekstraradio",title:"Radio"},{key:"ekstratekstfelt",title:"Tekstfelt"},{key:"ekstratekstomraade",title:"Tekstområde"},{key:"ekstratjekboksliste",title:"Tjekbox liste"},{key:"ekstraformvalidering",title:"Validate"}]);(0,r.YP)((()=>t.name),(()=>{h.value=a.Z.setActive(h.value,t.name?.toString()??""),p.value=a.Z.findFirstActiveItem(h.value)}),{immediate:!0});const f=e=>{m.value=e,i.push({name:a.Z.resolveActiveKey(e)})};return(e,t)=>{const i=(0,r.up)("fds-venstremenu"),a=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("section",null,[(0,r._)("div",o,[(0,r._)("div",c,[(0,r._)("aside",u,[(0,r._)("nav",null,[(0,r.Wm)(i,{modelValue:h.value,"onUpdate:modelValue":t[0]||(t[0]=e=>h.value=e),onNavigate:f},null,8,["modelValue"])])]),(0,r._)("div",d,[v,p.value?((0,r.wg)(),(0,r.iD)("h1",{key:0,id:p.value.key},(0,n.zw)(p.value.title),9,k)):(0,r.kq)("",!0),(0,r.Wm)(a)])])])])}}});const p=m;var h=p}}]);
//# sourceMappingURL=view-EkstraKomponenterView.c424e8f5.js.map