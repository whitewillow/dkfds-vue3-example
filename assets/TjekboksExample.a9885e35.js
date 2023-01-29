import{e as v,f as m,o as b,c as h,b as e,w as o,d as s,a as g,r as t}from"./index.69a80062.js";const V=v({__name:"TjekboksExample",setup(x){const d=m(!1),n=m(!1),f=`
<fds-checkbox v-model="oneChecked" class="mt-2">
  Et valg
  <template #content> Det er muligt at angive indhold </template>
</fds-checkbox>

<fds-formgroup>
  <fds-label>Label til tjekboks</fds-label>
  <fds-checkbox v-model="twoChecked" size="small"> Andet valg - small </fds-checkbox>
</fds-formgroup>
`;return(w,l)=>{const c=t("fds-checkbox"),r=t("fds-label"),p=t("fds-formgroup"),u=t("fds-pre"),_=t("fds-preview-item"),k=t("fds-preview-code"),i=t("fds-preview");return b(),h("section",null,[e(i,{header:"Eksempel",href:"https://designsystem.dk/komponenter/tjekboks/"},{default:o(()=>[e(_,null,{default:o(()=>[e(c,{modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=a=>d.value=a),class:"mt-2"},{content:o(()=>[s(" Det er muligt at angive indhold ")]),default:o(()=>[s(" Et valg ")]),_:1},8,["modelValue"]),e(p,null,{default:o(()=>[e(r,null,{default:o(()=>[s("Label til tjekboks")]),_:1}),e(c,{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=a=>n.value=a),size:"small"},{default:o(()=>[s(" Andet valg - small ")]),_:1},8,["modelValue"])]),_:1}),e(u,{header:"v-model",json:{oneChecked:d.value,twoChecked:n.value}},null,8,["json"])]),_:1}),e(k,null,{default:o(()=>[g("pre",{textContent:f})]),_:1})]),_:1})])}}});export{V as default};
