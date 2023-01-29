import{e as v,f as x,o as _,c as g,b as s,w as n,j as r,k as h,l as b,a as o,r as l}from"./index.69a80062.js";const V=o("button",{class:"button button-search"},[o("svg",{class:"icon-svg m-0","aria-hidden":"true"},[o("use",{"xlink:href":"#search"})]),o("span",{class:"sr-only"}," S\xF8g ")],-1),A=v({__name:"TekstFelt",setup(y){const e=x({name:"Anders",adress:"",city:"",search:""}),u=`
<xfds-form-input label="Navn" placeholder="e.g: Anders Hansen" v-model="user.name" />

<xfds-validate :modelValue="user.adress" :validations="[hasContent, charactersMinLength(10)]">
  <xfds-form-input
    label="Adresse"
    hint="Angiv gyldig adresse"
    tooltip="Input tooltip"
    input-type="street-address"
    autocomplete="street-address"
    placeholder="e.g: Jarlsvej 23"
    v-model="user.adress"
  />
</xfds-validate>

<xfds-form-input
  inputClass="input-width-xs"
  hint="Prefix og Suffix er muligt"
  label="By"
  v-model="user.city"
  suffix="DK"
/>

<xfds-form-input label="S\xF8g" v-model="user.search">
  <template #button>
    <button class="button button-search">
      <svg class="icon-svg m-0" aria-hidden="true">
        <use xlink:href="#search"></use></svg
      ><span class="sr-only"> S\xF8g </span>
    </button>
  </template>
</xfds-form-input>
`;return(w,t)=>{const d=l("xfds-form-input"),i=l("xfds-validate"),p=l("fds-pre"),m=l("fds-preview-item"),f=l("fds-preview-code"),c=l("fds-preview");return _(),g("section",null,[s(c,{header:"Tekstfelter"},{default:n(()=>[s(m,null,{default:n(()=>[s(d,{modelValue:e.value.name,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value.name=a),label:"Navn",placeholder:"e.g: Anders Hansen"},null,8,["modelValue"]),s(i,{"model-value":e.value.adress,validations:[r(h),r(b)(10)]},{default:n(()=>[s(d,{modelValue:e.value.adress,"onUpdate:modelValue":t[1]||(t[1]=a=>e.value.adress=a),label:"Adresse",hint:"Angiv gyldig adresse",tooltip:"Input tooltip","input-type":"street-address",autocomplete:"street-address",placeholder:"e.g: Jarlsvej 23"},null,8,["modelValue"])]),_:1},8,["model-value","validations"]),s(d,{modelValue:e.value.city,"onUpdate:modelValue":t[2]||(t[2]=a=>e.value.city=a),"input-class":"input-width-xs",hint:"Prefix og Suffix er muligt",label:"By",suffix:"DK"},null,8,["modelValue"]),s(d,{modelValue:e.value.search,"onUpdate:modelValue":t[3]||(t[3]=a=>e.value.search=a),label:"S\xF8g"},{button:n(()=>[V]),_:1},8,["modelValue"]),s(p,{header:"Object data",json:e.value},null,8,["json"])]),_:1}),s(f,null,{default:n(()=>[o("pre",{textContent:u})]),_:1})]),_:1})])}}});export{A as default};
