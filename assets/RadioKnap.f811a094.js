import{e as V,f as r,o as h,c as k,b as e,w as l,a as t,d as u,r as o}from"./index.69a80062.js";const E=t("p",null,"Det er muligt at benytte radio til mere indhold",-1),w=t("hr",{class:"my-6"},null,-1),j=t("p",null,"Det er muligt at benytte radio til mere indhold",-1),y=t("p",{class:"italic"},[u(" Er det kun ja eller nej - sand eller falsk, kan "),t("code",null,"xfds-radio-toggle"),u(" benyttes. ")],-1),C=t("p",{class:"italic"},[u(" Det er muligt at udfolde valgte radio og angive eget indhold, via dynamisk "),t("code",null,"slot")],-1),R=V({__name:"RadioKnap",setup(B){const n=r(""),d=r(null),f=r([{title:"Banan",value:"banan"},{title:"Melon",value:"melon"},{title:"\xC6ble",value:"\xE6ble"}]),g=`
<xfds-radio header="Pick one" :list="radioOptions" v-model="radioVal" label="V\xE6lg radio">
  <template v-slot:[\`melon\`]>
    <p>Det er muligt at benytte radio til mere indhold</p>
  </template>
</xfds-radio>

const radioOptions = ref<FdsOptionItem[]>([
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
]);
`,v=`
<xfds-radio-toggle v-model="toggleRadio" label="V\xE6lg radio toggle">
  <template v-slot:[\`true\`]>
    <p>Det er muligt at benytte radio til mere indhold</p>
  </template>
</xfds-radio-toggle>
`;return(D,a)=>{const x=o("xfds-radio"),m=o("fds-formgroup"),_=o("fds-pre"),s=o("fds-preview-item"),p=o("fds-preview-code"),c=o("fds-preview"),b=o("xfds-radio-toggle");return h(),k("section",null,[e(c,{header:"Eksempel"},{default:l(()=>[e(s,null,{default:l(()=>[e(m,null,{default:l(()=>[e(x,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=i=>n.value=i),header:"Pick one",list:f.value,label:"V\xE6lg radio"},{melon:l(()=>[E]),_:2},1032,["modelValue","list"])]),_:1}),e(_,{header:"v-model",json:{radioVal:n.value}},null,8,["json"])]),_:1}),e(p,null,{default:l(()=>[t("pre",{textContent:g})]),_:1})]),_:1}),w,e(c,{header:"Ja eller nej"},{default:l(()=>[e(s,null,{default:l(()=>[e(m,null,{default:l(()=>[e(b,{modelValue:d.value,"onUpdate:modelValue":a[1]||(a[1]=i=>d.value=i),label:"V\xE6lg radio toggle"},{true:l(()=>[j]),_:2},1032,["modelValue"])]),_:1}),e(_,{header:"v-model",json:{toggleRadio:d.value}},null,8,["json"])]),_:1}),e(s,null,{default:l(()=>[y,C]),_:1}),e(p,null,{default:l(()=>[t("pre",{textContent:v})]),_:1})]),_:1})])}}});export{R as default};
