"use strict";(self["webpackChunkexample"]=self["webpackChunkexample"]||[]).push([[9714],{3604:function(e,n,t){function l(e){return n=>n>e?null:`Feltet må ikke være mindre end ${e}.`}function a(e){return n=>n.length>=e?null:`Feltet må ikke være kortere end ${e} tegn.`}function s(e){return null!==e&&e.replace(/\s+/g,"").length>0?null:"Feltet må ikke være tomt."}function u(e){if(!Array.isArray(e))return"Ukendt indhold";const n=e;return n.some((e=>!0===e.checked))?null:"Angiv venligst et valg"}t.d(n,{QA:function(){return a},_M:function(){return u},rY:function(){return l},v3:function(){return s}})},6062:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var l=t(3396),a=t(4870),s=t(3604);const u=(0,l._)("button",{class:"button button-search"},[(0,l._)("svg",{class:"icon-svg m-0","aria-hidden":"true"},[(0,l._)("use",{"xlink:href":"#search"})]),(0,l._)("span",{class:"sr-only"}," Søg ")],-1);var r=(0,l.aZ)({__name:"TekstFelt",setup(e){const n=(0,a.iH)({name:"",adress:"",city:"",search:""}),t='\n<xfds-form-input label="Navn" placeholder="e.g: Anders Hansen" v-model="user.name" />\n\n<xfds-validate :modelValue="user.adress" :validations="[hasContent, charactersMinLength(10)]">\n  <xfds-form-input\n    label="Adresse"\n    hint="Angiv gyldig adresse"\n    tooltip="Input tooltip"\n    input-type="street-address"\n    autocomplete="street-address"\n    placeholder="e.g: Jarlsvej 23"\n    v-model="user.adress"\n  />\n</xfds-validate>\n\n<xfds-form-input\n  inputClass="input-width-xs"\n  hint="Prefix og Suffix er muligt"\n  label="By"\n  v-model="user.city"\n  suffix="DK"\n/>\n\n<xfds-form-input label="Søg" v-model="user.search">\n  <template #button>\n    <button class="button button-search">\n      <svg class="icon-svg m-0" aria-hidden="true">\n        <use xlink:href="#search"></use></svg\n      ><span class="sr-only"> Søg </span>\n    </button>\n  </template>\n</xfds-form-input>\n';return(e,r)=>{const d=(0,l.up)("xfds-form-input"),o=(0,l.up)("xfds-validate"),i=(0,l.up)("fds-pre"),m=(0,l.up)("fds-preview-item"),c=(0,l.up)("fds-preview-code"),p=(0,l.up)("fds-preview");return(0,l.wg)(),(0,l.iD)("section",null,[(0,l.Wm)(p,{header:"Tekstfelter"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{label:"Navn",placeholder:"e.g: Anders Hansen",modelValue:n.value.name,"onUpdate:modelValue":r[0]||(r[0]=e=>n.value.name=e)},null,8,["modelValue"]),(0,l.Wm)(o,{modelValue:n.value.adress,validations:[(0,a.SU)(s.v3),(0,a.SU)(s.QA)(10)]},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{label:"Adresse",hint:"Angiv gyldig adresse",tooltip:"Input tooltip","input-type":"street-address",autocomplete:"street-address",placeholder:"e.g: Jarlsvej 23",modelValue:n.value.adress,"onUpdate:modelValue":r[1]||(r[1]=e=>n.value.adress=e)},null,8,["modelValue"])])),_:1},8,["modelValue","validations"]),(0,l.Wm)(d,{inputClass:"input-width-xs",hint:"Prefix og Suffix er muligt",label:"By",modelValue:n.value.city,"onUpdate:modelValue":r[2]||(r[2]=e=>n.value.city=e),suffix:"DK"},null,8,["modelValue"]),(0,l.Wm)(d,{label:"Søg",modelValue:n.value.search,"onUpdate:modelValue":r[3]||(r[3]=e=>n.value.search=e)},{button:(0,l.w5)((()=>[u])),_:1},8,["modelValue"]),(0,l.Wm)(i,{header:"Object data",json:n.value},null,8,["json"])])),_:1}),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l._)("pre",{textContent:t})])),_:1})])),_:1})])}}});const d=r;var o=d}}]);
//# sourceMappingURL=view-TekstFelt.214ec702.js.map