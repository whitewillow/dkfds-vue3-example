import{e as f,f as i,o as m,c as v,b as o,w as l,a as e,r as n}from"./index.69a80062.js";const w=e("option",{value:"Manuel"}," Manuel ",-1),h=e("option",{value:"Auto"}," Auto ",-1),V=e("table",{class:"table table--compact"},[e("thead",null,[e("tr",null,[e("th",null,"Props"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Beskrivelse")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"id")]),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"formid")]),e("td",null,"Se form gruppe")]),e("tr",null,[e("td",null,[e("code",null,"v-model")]),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"''")]),e("td")])])],-1),g=f({__name:"DropdownExample",setup(k){const t=i(""),u=`
<fds-dropdown v-model="dropdownVal">
  <option value="Manuel">
    Manuel
  </option>
  <option value="Auto">
    Auto
  </option>
</fds-dropdown>

const dropdownVal = ref('');
`;return(b,d)=>{const a=n("fds-dropdown"),p=n("fds-pre"),s=n("fds-preview-item"),r=n("fds-preview-code"),c=n("fds-preview");return m(),v("section",null,[o(c,{header:"Eksempel",href:"https://designsystem.dk/komponenter/dropdown/"},{default:l(()=>[o(s,null,{default:l(()=>[o(a,{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=_=>t.value=_)},{default:l(()=>[w,h]),_:1},8,["modelValue"]),o(p,{header:"v-model",json:{dropdownVal:t.value}},null,8,["json"])]),_:1}),o(r,null,{default:l(()=>[e("pre",{textContent:u})]),_:1}),o(s,null,{default:l(()=>[V]),_:1})]),_:1})])}}});export{g as default};
