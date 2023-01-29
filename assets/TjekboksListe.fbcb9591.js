import{e as h,f as r,o as C,c as V,b as e,w as t,a as l,j,m as w,d as u,r as o}from"./index.69a80062.js";const L=l("p",null,"Det er muligt at benytte tjekboks til mere indhold",-1),g=l("hr",{class:"my-6"},null,-1),E=l("p",{class:"italic"},[u(" Komponenten "),l("code",null,"xfds-form-checkbox-list"),u(" er en samling af komponenter der giver en samlet funktionalitet. ")],-1),T=h({__name:"TjekboksListe",setup(B){const a=r([{title:"Banan",value:"banan"},{title:"Melon",value:"melon"},{title:"\xC6ble",value:"\xE6ble"},{title:"Tomat",value:"tomat",disabled:!0}]),s=r([{title:"Banan",value:"banan"},{title:"Melon",value:"melon"},{title:"\xC6ble",value:"\xE6ble"}]),f=`
  <xfds-validate :modelValue="checkboxListForm" :validations="[arrayHasItems]">
    <xfds-form-checkbox-list label="Checkbox form" v-model="checkboxListForm" />
  </xfds-validate>

  const checkboxListForm = ref<FdsCheckboxItem[]>([
    {
      title: 'Banan',
      value: 'banan',
    },
    {
      title: 'Melon',
      value: 'melon',
    },
    {
      title: '\xC6ble',
      value: '\xE6ble',
    },
    {
      title: 'Tomat',
      value: 'tomat',
      disabled: true,
    },
  ]);`,_=`
<fds-checkbox-list v-model="checkboxList">
  <template v-slot:[\`melon\`]>
    <p>Det er muligt at benytte tjekboks til mere indhold</p>
  </template>
</fds-checkbox-list>
`;return(F,n)=>{const x=o("xfds-checkbox-list"),p=o("fds-formgroup"),c=o("fds-pre"),v=o("fds-preview-item"),i=o("fds-preview-code"),m=o("fds-preview"),b=o("xfds-form-checkbox-list"),k=o("xfds-validate");return C(),V("section",null,[e(m,{header:"Eksempel"},{default:t(()=>[e(v,null,{default:t(()=>[e(p,{label:"V\xE6lg en checkbox"},{default:t(()=>[e(x,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=d=>s.value=d)},{melon:t(()=>[L]),_:2},1032,["modelValue"])]),_:1}),e(c,{header:"v-model",json:s.value},null,8,["json"])]),_:1}),e(i,null,{default:t(()=>[l("pre",{textContent:_})]),_:1})]),_:1}),g,e(m,{header:"Eksempel Formular"},{description:t(()=>[E]),default:t(()=>[e(k,{"model-value":a.value,validations:[j(w)]},{default:t(()=>[e(b,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=d=>a.value=d),label:"Checkbox form"},null,8,["modelValue"])]),_:1},8,["model-value","validations"]),e(c,{header:"v-model for checkbox liste",json:a.value},null,8,["json"]),e(i,null,{default:t(()=>[l("pre",{textContent:f})]),_:1})]),_:1})])}}});export{T as default};
