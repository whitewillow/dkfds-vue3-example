"use strict";(self["webpackChunkexample"]=self["webpackChunkexample"]||[]).push([[7524],{7600:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var l=t(3396),s=t(4870);const a=(0,l.Uk)(" Navn "),d=(0,l.Uk)("Indtast fornavn"),o=(0,l._)("p",{class:"italic"},[(0,l.Uk)(" Komponenten "),(0,l._)("code",null,"fds-formgroup"),(0,l.Uk)(" er et wrapper komponent, der omfavner input, labels, m.fl elementer - se koden ")],-1),p=(0,l._)("p",{class:"italic"}," Komponenten generer et id, der kan tilknyttes label og input element - se kode ",-1),r=(0,l._)("p",{class:"italic"}," Kan evt bruge til at lave egne komponenter der wrapper eksempelvis ovenstående i sin egen validarings-komponent ",-1),u=(0,l._)("p",{class:"italic"},[(0,l.Uk)(" Komponenten "),(0,l._)("code",null,"fds-input"),(0,l.Uk)(" kan udskiftes med egne komponenter eller eg: "),(0,l._)("code",null,"fds-input-number"),(0,l.Uk)(" m.m. ")],-1);var i=(0,l.aZ)({__name:"FormgruppeExample",setup(e){const n=(0,s.iH)({name:"",adress:"",city:"",search:""}),t='\n  <fds-formgroup #default="{ formid }">\n    <fds-label :id="formid"> Navn </fds-label>\n    <fds-tooltip class="ml-2" text="Hjælpende <b>tekst</b>" />\n    <fds-hint>Indtast fornavn</fds-hint>\n    <fds-input v-model="user.name" :id="formid"></fds-input>\n  </fds-formgroup>\n  ';return(e,s)=>{const i=(0,l.up)("fds-label"),m=(0,l.up)("fds-tooltip"),f=(0,l.up)("fds-hint"),c=(0,l.up)("fds-input"),k=(0,l.up)("fds-formgroup"),v=(0,l.up)("fds-pre"),b=(0,l.up)("fds-component-preview");return(0,l.wg)(),(0,l.iD)("section",null,[(0,l.Wm)(b,{header:"Eksempel"},{description:(0,l.w5)((()=>[o,p,r,u])),code:(0,l.w5)((()=>[(0,l._)("pre",{textContent:t})])),default:(0,l.w5)((()=>[(0,l.Wm)(k,null,{default:(0,l.w5)((({formid:e})=>[(0,l.Wm)(i,{id:e},{default:(0,l.w5)((()=>[a])),_:2},1032,["id"]),(0,l.Wm)(m,{class:"ml-2",text:"Hjælpende <b>tekst</b>"}),(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[d])),_:1}),(0,l.Wm)(c,{modelValue:n.value.name,"onUpdate:modelValue":s[0]||(s[0]=e=>n.value.name=e),id:e},null,8,["modelValue","id"])])),_:1}),(0,l.Wm)(v,{header:"object data",json:n.value},null,8,["json"])])),_:1})])}}});const m=i;var f=m}}]);
//# sourceMappingURL=view-FormgruppeExample.d3ce6de7.js.map