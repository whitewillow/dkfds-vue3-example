"use strict";(self["webpackChunkexample"]=self["webpackChunkexample"]||[]).push([[306],{3604:function(l,e,n){function t(l){return e=>e>l?null:`Feltet må ikke være mindre end ${l}.`}function u(l){return e=>e.length>=l?null:`Feltet må ikke være kortere end ${l} tegn.`}function r(l){return null!==l&&l.replace(/\s+/g,"").length>0?null:"Feltet må ikke være tomt."}function a(l){if(!Array.isArray(l))return"Ukendt indhold";const e=l;return e.some((l=>!0===l.checked))?null:"Angiv venligst et valg"}n.d(e,{QA:function(){return u},_M:function(){return a},rY:function(){return t},v3:function(){return r}})},2918:function(l,e,n){n.r(e),n.d(e,{default:function(){return i}});var t=n(3396),u=n(4870),r=n(3604);const a=(0,t._)("table",{class:"table table--compact"},[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"Props"),(0,t._)("th",null,"Type"),(0,t._)("th",null,"Default"),(0,t._)("th",null,"Beskrivelse")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"variant")]),(0,t._)("td",null,[(0,t._)("code",null,"'primary' | 'secondary' | 'tertiary' | 'quaternary'")]),(0,t._)("td",null,[(0,t._)("code",null,"secondary")]),(0,t._)("td")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"showSpinner")]),(0,t._)("td",null,[(0,t._)("code",null,"boolean")]),(0,t._)("td",null,[(0,t._)("code",null,"false")]),(0,t._)("td")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"spinnerText")]),(0,t._)("td",null,[(0,t._)("code",null,"string")]),(0,t._)("td",null,[(0,t._)("code",null,"null")]),(0,t._)("td",null,"Spinner tekst - erstatter alm tekst")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"icon")]),(0,t._)("td",null,[(0,t._)("code",null,"string")]),(0,t._)("td",null,[(0,t._)("code",null,"null")]),(0,t._)("td",null,[(0,t.Uk)(" Se standard ikone hos "),(0,t._)("a",{href:"https://designsystem.dk/design/ikoner/",target:"dkfds"},"DKFDS")])]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"useoverlay")]),(0,t._)("td",null,[(0,t._)("code",null,"boolean")]),(0,t._)("td",null,[(0,t._)("code",null,"false")]),(0,t._)("td",null,"Tilføjer overlay når showSpinner, ikke muligt at klikke andre steder imens")])])],-1);var d=(0,t.aZ)({__name:"NummerFelt",props:{test:{type:String,default:"Banana",description:"asdadsads"}},setup(l){const e=(0,u.iH)({lager:"",forventetLager:"",pris:""}),n='\n<xfds-form-input-number\n  inputClass="input-width-xxs"\n  label="Lager antal"\n  v-model="lager.lager"\n/>\n\n<xfds-validate :modelValue="lager.forventetLager" :validations="[numberMin(2)]">\n  <xfds-form-input-number\n    label="Forventet lager"\n    hint="Angiv gyldig lager antal"\n    tooltip="Input tooltip"\n    prefix="stk."\n    v-model="lager.forventetLager"\n  />\n</xfds-validate>\n\n<xfds-form-input-number\n  inputClass="input-width-xs"\n  suffix="kr."\n  label="Pris"\n  v-model="lager.pris"\n/>';return(l,d)=>{const o=(0,t.up)("xfds-form-input-number"),i=(0,t.up)("xfds-validate"),s=(0,t.up)("fds-pre"),p=(0,t.up)("fds-preview-item"),_=(0,t.up)("fds-preview-code"),f=(0,t.up)("fds-preview");return(0,t.wg)(),(0,t.iD)("section",null,[(0,t.Wm)(f,{header:"Nummer felt"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,{inputClass:"input-width-xxs",placeholder:"Angiv antal",label:"Lager antal",modelValue:e.value.lager,"onUpdate:modelValue":d[0]||(d[0]=l=>e.value.lager=l)},null,8,["modelValue"]),(0,t.Wm)(i,{modelValue:e.value.forventetLager,validations:[(0,u.SU)(r.rY)(2)]},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{label:"Forventet lager",hint:"Angiv gyldig lager antal",tooltip:"Input tooltip",prefix:"stk.",modelValue:e.value.forventetLager,"onUpdate:modelValue":d[1]||(d[1]=l=>e.value.forventetLager=l)},null,8,["modelValue"])])),_:1},8,["modelValue","validations"]),(0,t.Wm)(o,{inputClass:"input-width-xs",suffix:"kr.",label:"Pris",modelValue:e.value.pris,"onUpdate:modelValue":d[2]||(d[2]=l=>e.value.pris=l)},null,8,["modelValue"]),(0,t.Wm)(s,{header:"Object data",json:e.value},null,8,["json"])])),_:1}),(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[(0,t._)("pre",{textContent:n})])),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[a])),_:1})])),_:1})])}}});const o=d;var i=o}}]);
//# sourceMappingURL=view-NummerFelt.4354966f.js.map