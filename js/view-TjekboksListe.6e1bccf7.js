"use strict";(self["webpackChunkexample"]=self["webpackChunkexample"]||[]).push([[6719],{1589:function(e,n,t){function l(e){return n=>n<=e?null:`Feltet må overstige ${e}.`}function o(e){return n=>n>e?null:`Feltet må ikke være mindre end ${e}.`}function r(e){return n=>n.length>=e?null:`Feltet må ikke være kortere end ${e} tegn.`}function a(e){return null!==e&&e.replace(/\s+/g,"").length>0?null:"Feltet må ikke være tomt."}function i(e){if(!Array.isArray(e))return"Ukendt indhold";const n=e;return n.some((e=>!0===e.checked))?null:"Angiv venligst et valg"}t.d(n,{E_:function(){return l},QA:function(){return r},_M:function(){return i},rY:function(){return o},v3:function(){return a}})},4666:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});var l=t(3396),o=t(4870),r=t(1589);const a=(0,l._)("p",{class:"italic"},[(0,l.Uk)(" Komponenten "),(0,l._)("code",null,"xfds-form-checkbox-list"),(0,l.Uk)(" er en samling af komponenter der giver en samlet funktionalitet. ")],-1),i=(0,l._)("p",{class:"italic"},"Understøtter simpel validering, m.m.",-1);var u=(0,l.aZ)({__name:"TjekboksListe",setup(e){const n=(0,o.iH)([{title:"Banan",value:"banan"},{title:"Melon",value:"melon"},{title:"Æble",value:"æble"},{title:"Tomat",value:"tomat",disabled:!0}]),t="\n  <xfds-form-checkbox-list\n    label=\"Checkbox form\"\n    :validations=\"[arrayHasItems]\"\n    v-model=\"checkboxListForm\"\n  />\n  \n  const checkboxListForm = ref<FdsCheckboxItem[]>([\n    {\n      title: 'Banan',\n      value: 'banan',\n    },\n    {\n      title: 'Melon',\n      value: 'melon',\n    },\n    {\n      title: 'Æble',\n      value: 'æble',\n    },\n    {\n      title: 'Tomat',\n      value: 'tomat',\n      disabled: true,\n    },\n  ]);";return(e,u)=>{const s=(0,l.up)("xfds-form-checkbox-list"),c=(0,l.up)("fds-pre"),m=(0,l.up)("fds-component-preview");return(0,l.wg)(),(0,l.iD)("section",null,[(0,l.Wm)(m,{header:"Eksempel"},{description:(0,l.w5)((()=>[a,i])),code:(0,l.w5)((()=>[(0,l._)("pre",{textContent:t})])),default:(0,l.w5)((()=>[(0,l.Wm)(s,{label:"Checkbox form",validations:[(0,o.SU)(r._M)],modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=e=>n.value=e)},null,8,["validations","modelValue"]),(0,l.Wm)(c,{json:n.value},null,8,["json"])])),_:1})])}}});const s=u;var c=s}}]);
//# sourceMappingURL=view-TjekboksListe.6e1bccf7.js.map