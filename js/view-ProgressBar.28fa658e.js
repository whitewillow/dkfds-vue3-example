"use strict";(self["webpackChunkexample"]=self["webpackChunkexample"]||[]).push([[4347],{8024:function(e,r,n){n.r(r),n.d(r,{default:function(){return c}});var s=n(3396),t=n(7139),a=n(4870);const o=(0,s._)("p",{class:"italic"},[(0,s.Uk)(" Komponenten "),(0,s._)("code",null,"xfds-progressbar"),(0,s.Uk)(' viser, med procent fra 0-100, tilstanden for et "job" ')],-1),l=(0,s._)("p",{class:"italic"},"Det er muligt at angive tekst - men vær varsom med for megen tekst",-1);var p=(0,s.aZ)({__name:"ProgressBar",setup(e){const r=(0,a.iH)(46),n='\n  <xfds-progressbar :procent="45" />\n  \n  <xfds-progressbar\n    :procent="progress"\n    :showProgress="false"\n    style="height: 2px"\n    variant="primary"\n  />\n  \n  <xfds-progressbar\n    :procent="progress"\n    variant="success">\n    På vej mod success - {{ progress }}%\n  </xfds-progressbar>\n  ';return(e,a)=>{const p=(0,s.up)("xfds-form-input-number"),u=(0,s.up)("xfds-progressbar"),c=(0,s.up)("fds-component-preview");return(0,s.wg)(),(0,s.iD)("section",null,[(0,s.Wm)(c,{header:"Eksempel"},{description:(0,s.w5)((()=>[o,l])),code:(0,s.w5)((()=>[(0,s._)("pre",{textContent:n})])),default:(0,s.w5)((()=>[(0,s.Wm)(p,{label:"Angiv progress",modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=e=>r.value=e),suffix:"%"},null,8,["modelValue"]),(0,s.Wm)(u,{procent:r.value,showProgress:!1,style:{height:"2px"},variant:"primary"},null,8,["procent"]),(0,s.Wm)(u,{procent:r.value},null,8,["procent"]),(0,s.Wm)(u,{procent:r.value,style:{height:"50px"},variant:"primary"},null,8,["procent"]),(0,s.Wm)(u,{procent:r.value,variant:"info"},null,8,["procent"]),(0,s.Wm)(u,{procent:r.value,variant:"success"},{default:(0,s.w5)((()=>[(0,s.Uk)(" På vej mod success - "+(0,t.zw)(r.value)+"% ",1)])),_:1},8,["procent"]),(0,s.Wm)(u,{procent:r.value,variant:"warning"},null,8,["procent"]),(0,s.Wm)(u,{procent:r.value,variant:"error"},null,8,["procent"])])),_:1})])}}});const u=p;var c=u}}]);
//# sourceMappingURL=view-ProgressBar.28fa658e.js.map