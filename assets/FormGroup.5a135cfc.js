import{e as h,f as m,o as E,c as k,b as e,w as t,a as u,d as j,r as o}from"./index.9ab9e984.js";const B=h({__name:"FormGroup",setup(b){const n=m(""),r=m(""),_=`
<xfds-form-group label="Bil m\xE6rke" hint="Angiv et m\xE6rke" tooltip="Hj\xE6lp i tooltip">
  <fds-input v-model="maerke" />
</xfds-form-group>

// Eller

<xfds-form-group hint="Angiv et m\xE6rke" tooltip="Hj\xE6lp i tooltip">
  <template #label>
    <fds-label>Bil m\xE6rke</fds-label>
  </template>
  <fds-input v-model="maerke" />
</xfds-form-group>
`,c=`
<xfds-form-group label="Farver" hint="Angiv et alle farver" tooltip="Hj\xE6lp i tooltip">
  <template #hint>
    <fds-hint>Overstyret hint</fds-hint>
  </template>
  <fds-textarea v-model="farver" />
</xfds-form-group>

`;return(V,l)=>{const v=o("fds-input"),d=o("xfds-form-group"),p=o("fds-pre"),s=o("fds-preview-item"),f=o("fds-preview-code"),i=o("fds-preview"),x=o("fds-hint"),g=o("fds-textarea");return E(),k("section",null,[e(i,{header:"Form gruppe"},{default:t(()=>[e(s,null,{default:t(()=>[e(d,{label:"Bil m\xE6rke",hint:"Angiv et m\xE6rke",tooltip:"Hj\xE6lp i tooltip"},{default:t(()=>[e(v,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=a=>n.value=a)},null,8,["modelValue"])]),_:1}),e(p,{header:"Object data",json:{maerke:n.value}},null,8,["json"])]),_:1}),e(f,null,{default:t(()=>[u("pre",{textContent:_})]),_:1})]),_:1}),e(i,{header:"Form gruppe"},{default:t(()=>[e(s,null,{default:t(()=>[e(d,{label:"Farver",hint:"Angiv et alle farver",tooltip:"Hj\xE6lp i tooltip"},{hint:t(()=>[e(x,null,{default:t(()=>[j("Overstyret hint")]),_:1})]),default:t(()=>[e(g,{modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=a=>r.value=a)},null,8,["modelValue"])]),_:1}),e(p,{header:"Object data",json:{farver:r.value}},null,8,["json"])]),_:1}),e(f,null,{default:t(()=>[u("pre",{textContent:c})]),_:1})]),_:1})])}}});export{B as default};
