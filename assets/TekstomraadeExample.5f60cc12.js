import{e as g,f as v,o as x,c as B,b as e,w as n,d,a as h,r as t}from"./index.2aa85a96.js";const b=g({__name:"TekstomraadeExample",setup(w){const o=v(""),l=`
<fds-formgroup>
  <fds-label> Begrundelse </fds-label>
  <fds-hint>Indtast Begrundelse</fds-hint>
  <fds-textarea v-model="txtBegrundelse" />
</fds-formgroup>
`;return(k,s)=>{const a=t("fds-label"),r=t("fds-hint"),f=t("fds-textarea"),_=t("fds-formgroup"),u=t("fds-pre"),m=t("fds-preview-item"),p=t("fds-preview-code"),c=t("fds-preview");return x(),B("section",null,[e(c,{header:"Nummer tekstfelt",href:"https://designsystem.dk/komponenter/tekstomraade/"},{default:n(()=>[e(m,null,{default:n(()=>[e(_,null,{default:n(()=>[e(a,null,{default:n(()=>[d(" Begrundelse ")]),_:1}),e(r,null,{default:n(()=>[d("Indtast Begrundelse")]),_:1}),e(f,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=i=>o.value=i)},null,8,["modelValue"])]),_:1}),e(u,{header:"v-model",json:{txtBegrundelse:o.value}},null,8,["json"])]),_:1}),e(p,null,{default:n(()=>[h("pre",{textContent:l})]),_:1})]),_:1})])}}});export{b as default};
