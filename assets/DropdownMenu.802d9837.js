import{e as b,f as r,o as C,c as F,b as o,w as e,d as h,a as l,j as k,k as E,r as n}from"./index.9ab9e984.js";const B=l("table",{class:"table table--compact"},[l("thead",null,[l("tr",null,[l("th",null,"Props"),l("th",null,"Type"),l("th",null,"Default"),l("th",null,"Beskrivelse")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"id")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"null (autoid)")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"v-model")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"''")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"optionHeader")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"'V\xE6lg'")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"options")]),l("td",null,[l("code",null,"Array<FdsOptionItem>")]),l("td",null,[l("code",null,"[]")]),l("td")])])],-1),D=b({__name:"DropdownMenu",setup(O){const d=r(""),a=r(""),p=r([{title:"Banan",value:"banan"},{title:"Melon",value:"melon"},{title:"\xC6ble",value:"\xE6ble"}]),f=`
<xfds-dropdown :options="dropdownOptions" v-model="dropdownVal" />

const dropdownVal = ref('');
const dropdownOptions = ref<FdsOptionItem[]>([
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
`,_=`
<xfds-validate :modelValue="dropdownValForm" :validations="[hasContent]">
  <xfds-form-dropdown
    label="Dropdown form"
    :options="dropdownOptions"
    v-model="dropdownValForm"
  />
</xfds-validate>
  `;return(j,t)=>{const v=n("fds-button"),w=n("xfds-dropdown"),i=n("fds-pre"),s=n("fds-preview-item"),m=n("fds-preview-code"),c=n("fds-preview"),x=n("xfds-form-dropdown"),V=n("xfds-validate");return C(),F("section",null,[o(c,{header:"Eksempel"},{default:e(()=>[o(s,null,{default:e(()=>[o(v,{onClick:t[0]||(t[0]=u=>d.value="\xE6ble")},{default:e(()=>[h(" SetVal ")]),_:1}),o(w,{modelValue:d.value,"onUpdate:modelValue":t[1]||(t[1]=u=>d.value=u),options:p.value},null,8,["modelValue","options"]),o(i,{header:"v-model",json:{dropdownVal:d.value}},null,8,["json"])]),_:1}),o(m,null,{default:e(()=>[l("pre",{textContent:f})]),_:1}),o(s,null,{default:e(()=>[B]),_:1})]),_:1}),o(c,{header:"Eksempel Formular"},{default:e(()=>[o(s,null,{default:e(()=>[o(V,{"model-value":a.value,validations:[k(E)]},{default:e(()=>[o(x,{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=u=>a.value=u),label:"Dropdown form",options:p.value},null,8,["modelValue","options"])]),_:1},8,["model-value","validations"]),o(i,{header:"v-model for dropdown",json:{dropdownValForm:a.value}},null,8,["json"])]),_:1}),o(m,null,{default:e(()=>[l("pre",{textContent:_})]),_:1})]),_:1})])}}});export{D as default};
