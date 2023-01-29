import{e as m,f as _,o as v,c as g,b as e,w as t,d as a,t as x,a as n,r as o}from"./index.9ab9e984.js";const b=n("p",{class:"italic"},[a(" Komponenten "),n("code",null,"xfds-progressbar"),a(' viser, med procent fra 0-100, tilstanden for et "job" ')],-1),h=n("p",{class:"italic"}," Det er muligt at angive tekst - men v\xE6r varsom med for megen tekst ",-1),k=m({__name:"ProgressBar",setup(w){const r=_(46),c=`
  <xfds-progressbar :procent="45" />
  
  <xfds-progressbar
    :procent="progress"
    :showProgress="false"
    style="height: 2px"
    variant="primary"
  />
  
  <xfds-progressbar
    :procent="progress"
    variant="success">
    P\xE5 vej mod success - {{ progress }}%
  </xfds-progressbar>
  `;return(y,l)=>{const i=o("xfds-form-input-number"),s=o("xfds-progressbar"),p=o("fds-preview-item"),u=o("fds-preview-code"),d=o("fds-preview");return v(),g("section",null,[e(d,{header:"Eksempel"},{default:t(()=>[e(p,null,{default:t(()=>[e(i,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=f=>r.value=f),label:"Angiv progress",suffix:"%"},null,8,["modelValue"]),e(s,{procent:r.value,"show-progress":!1,style:{height:"2px"},variant:"primary"},null,8,["procent"]),e(s,{procent:r.value},null,8,["procent"]),e(s,{procent:r.value,style:{height:"50px"},variant:"primary"},null,8,["procent"]),e(s,{procent:r.value,variant:"info"},null,8,["procent"]),e(s,{procent:r.value,variant:"success"},{default:t(()=>[a(" P\xE5 vej mod success - "+x(r.value)+"% ",1)]),_:1},8,["procent"]),e(s,{procent:r.value,variant:"warning"},null,8,["procent"]),e(s,{procent:r.value,variant:"error"},null,8,["procent"])]),_:1}),e(p,null,{default:t(()=>[b,h]),_:1}),e(u,null,{default:t(()=>[n("pre",{textContent:c})]),_:1})]),_:1})])}}});export{k as default};
