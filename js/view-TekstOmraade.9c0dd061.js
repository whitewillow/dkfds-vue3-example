"use strict";(self["webpackChunkexample"]=self["webpackChunkexample"]||[]).push([[1982],{3604:function(e,n,t){function r(e){return n=>n>e?null:`Feltet må ikke være mindre end ${e}.`}function l(e){return n=>n.length>=e?null:`Feltet må ikke være kortere end ${e} tegn.`}function a(e){return null!==e&&e.replace(/\s+/g,"").length>0?null:"Feltet må ikke være tomt."}function s(e){if(!Array.isArray(e))return"Ukendt indhold";const n=e;return n.some((e=>!0===e.checked))?null:"Angiv venligst et valg"}t.d(n,{QA:function(){return l},_M:function(){return s},rY:function(){return r},v3:function(){return a}})},4608:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(3396),l=t(4870),a=t(3604);const s=(0,r._)("p",{class:"italic"},[(0,r.Uk)(" Komponenten "),(0,r._)("code",null,"xfds-form-textarea"),(0,r.Uk)(" er en samling af komponenter der giver en samlet funktionalitet. ")],-1),i=(0,r._)("p",{class:"italic"},"Understøtter simpel validering, m.m.",-1);var u=(0,r.aZ)({__name:"TekstOmraade",setup(e){const n=(0,l.iH)({beskrivelse:""}),t='\n  <xfds-form-textarea\n    label="Beskrivelse"\n    hint="Angiv beskrivelse af produktet"\n    placeholder="...Produktet er består af xxx"\n    v-model="product.beskrivelse"\n    :validations="[hasContent, charactersMinLength(10)]"\n  />';return(e,u)=>{const o=(0,r.up)("xfds-form-textarea"),d=(0,r.up)("xfds-validate"),c=(0,r.up)("fds-pre"),v=(0,r.up)("fds-component-preview");return(0,r.wg)(),(0,r.iD)("section",null,[(0,r.Wm)(v,{header:"Eksempel"},{description:(0,r.w5)((()=>[s,i])),code:(0,r.w5)((()=>[(0,r._)("pre",{textContent:t})])),default:(0,r.w5)((()=>[(0,r.Wm)(d,{modelValue:n.value.beskrivelse,validations:[(0,l.SU)(a.v3),(0,l.SU)(a.QA)(10)]},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{label:"Beskrivelse",hint:"Angiv beskrivelse af produktet",placeholder:"...Produktet er består af xxx",modelValue:n.value.beskrivelse,"onUpdate:modelValue":u[0]||(u[0]=e=>n.value.beskrivelse=e)},null,8,["modelValue"])])),_:1},8,["modelValue","validations"]),(0,r.Wm)(c,{header:"v-model",json:n.value},null,8,["json"])])),_:1})])}}});const o=u;var d=o}}]);
//# sourceMappingURL=view-TekstOmraade.9c0dd061.js.map