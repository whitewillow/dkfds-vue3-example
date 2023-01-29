import{e as c,f as u,o as m,c as x,b as e,w as s,j as l,k,l as b,a as w,r as t}from"./index.9ab9e984.js";const C=c({__name:"TekstOmraade",setup(h){const o=u({beskrivelse:""}),r=`
  <xfds-form-textarea
    label="Beskrivelse"
    hint="Angiv beskrivelse af produktet"
    placeholder="...Produktet er best\xE5r af xxx"
    v-model="product.beskrivelse"

  />`;return(B,a)=>{const n=t("xfds-form-textarea"),d=t("xfds-validate"),i=t("fds-pre"),f=t("fds-preview-item"),p=t("fds-preview-code"),_=t("fds-preview");return m(),x("section",null,[e(_,{header:"Eksempel"},{default:s(()=>[e(f,null,{default:s(()=>[e(d,{"model-value":o.value.beskrivelse,validations:[l(k),l(b)(10)]},{default:s(()=>[e(n,{modelValue:o.value.beskrivelse,"onUpdate:modelValue":a[0]||(a[0]=v=>o.value.beskrivelse=v),label:"Beskrivelse",hint:"Angiv beskrivelse af produktet",placeholder:"...Produktet er best\xE5r af xxx"},null,8,["modelValue"])]),_:1},8,["model-value","validations"]),e(i,{header:"v-model",json:o.value},null,8,["json"])]),_:1}),e(p,null,{default:s(()=>[w("pre",{textContent:r})]),_:1})]),_:1})])}}});export{C as default};
