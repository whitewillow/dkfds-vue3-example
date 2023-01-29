import{e as c,f as l,o as _,c as v,b as e,w as a,j as b,k as x,a as w,r as o}from"./index.69a80062.js";const k=c({__name:"RadioList",setup(C){const s=l([{title:"Banan",value:"banan"},{title:"Melon",value:"melon"},{title:"\xC6ble",value:"\xE6ble"},{title:"Tomat",value:"tomat",disabled:!0}]),t=l({type:""}),d=`
  <xfds-form-radio
    label="Radio form"
    :validations="[hasContent]"
    :options="radioOptions"
    v-model="product.type"
  />

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
    {
      title: 'Tomat',
      value: 'tomat',
      disabled: true,
    },
  ]);`;return(B,n)=>{const i=o("xfds-form-radio"),r=o("fds-pre"),p=o("fds-preview-item"),m=o("fds-preview-code"),u=o("fds-preview");return _(),v("section",null,[e(u,{header:"Eksempel"},{default:a(()=>[e(p,null,{default:a(()=>[e(i,{modelValue:t.value.type,"onUpdate:modelValue":n[0]||(n[0]=f=>t.value.type=f),label:"Radio form",validations:[b(x)],options:s.value},null,8,["modelValue","validations","options"]),e(r,{header:"v-model for radio",json:t.value},null,8,["json"])]),_:1}),e(m,null,{default:a(()=>[w("pre",{textContent:d})]),_:1})]),_:1})])}}});export{k as default};
