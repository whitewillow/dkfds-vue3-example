"use strict";(self["webpackChunkexample"]=self["webpackChunkexample"]||[]).push([[9637],{1589:function(e,n,t){function l(e){return n=>n>e?null:`Feltet må ikke være mindre end ${e}.`}function o(e){return n=>n.length>=e?null:`Feltet må ikke være kortere end ${e} tegn.`}function a(e){return null!==e&&e.replace(/\s+/g,"").length>0?null:"Feltet må ikke være tomt."}function i(e){if(!Array.isArray(e))return"Ukendt indhold";const n=e;return n.some((e=>!0===e.checked))?null:"Angiv venligst et valg"}t.d(n,{QA:function(){return o},_M:function(){return i},rY:function(){return l},v3:function(){return a}})},4209:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var l=t(3396),o=t(4870),a=t(1589);const i=(0,l._)("p",{class:"italic"},[(0,l.Uk)(" Komponenten "),(0,l._)("code",null,"xfds-form-radio"),(0,l.Uk)(" er en samling af komponenter der giver en samlet funktionalitet. ")],-1),r=(0,l._)("p",{class:"italic"},"Understøtter simpel validering, m.m.",-1);var u=(0,l.aZ)({__name:"RadioList",setup(e){const n=(0,o.iH)([{title:"Banan",value:"banan"},{title:"Melon",value:"melon"},{title:"Æble",value:"æble"},{title:"Tomat",value:"tomat",disabled:!0}]),t=(0,o.iH)({type:""}),u="\n  <xfds-form-radio\n    label=\"Radio form\"\n    :validations=\"[hasContent]\"\n    :options=\"radioOptions\"\n    v-model=\"product.type\"\n  />\n  \n  const radioOptions = ref<FdsOptionItem[]>([\n    {\n      title: 'Banan',\n      value: 'banan',\n    },\n    {\n      title: 'Melon',\n      value: 'melon',\n    },\n    {\n      title: 'Æble',\n      value: 'æble',\n    },\n    {\n      title: 'Tomat',\n      value: 'tomat',\n      disabled: true,\n    },\n  ]);";return(e,d)=>{const s=(0,l.up)("xfds-form-radio"),m=(0,l.up)("fds-pre"),c=(0,l.up)("fds-component-preview");return(0,l.wg)(),(0,l.iD)("section",null,[(0,l.Wm)(c,{header:"Eksempel"},{description:(0,l.w5)((()=>[i,r])),code:(0,l.w5)((()=>[(0,l._)("pre",{textContent:u})])),default:(0,l.w5)((()=>[(0,l.Wm)(s,{label:"Radio form",validations:[(0,o.SU)(a.v3)],options:n.value,modelValue:t.value.type,"onUpdate:modelValue":d[0]||(d[0]=e=>t.value.type=e)},null,8,["validations","options","modelValue"]),(0,l.Wm)(m,{header:"v-model for radio",json:t.value},null,8,["json"])])),_:1})])}}});const d=u;var s=d}}]);
//# sourceMappingURL=view-RadioList.97d08d30.js.map