"use strict";(self["webpackChunkexample"]=self["webpackChunkexample"]||[]).push([[5605],{3374:function(l,e,t){t.r(e),t.d(e,{default:function(){return _}});var n=t(3396),u=t(4870);const d=(0,n._)("b",null,"tekst",-1),a=(0,n._)("table",{class:"table table--compact"},[(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Props"),(0,n._)("th",null,"Type"),(0,n._)("th",null,"Default"),(0,n._)("th",null,"Beskrivelse")])]),(0,n._)("tbody",null,[(0,n._)("tr",null,[(0,n._)("td",null,[(0,n._)("code",null,"id")]),(0,n._)("td",null,[(0,n._)("code",null,"string")]),(0,n._)("td",null,[(0,n._)("code",null,"null (autoid)")]),(0,n._)("td",null,"Lytter efter injected formid")]),(0,n._)("tr",null,[(0,n._)("td",null,[(0,n._)("code",null,"v-model")]),(0,n._)("td",null,[(0,n._)("code",null,"string")]),(0,n._)("td",null,[(0,n._)("code",null,"''")]),(0,n._)("td")]),(0,n._)("tr",null,[(0,n._)("td",null,[(0,n._)("code",null,"placeholder")]),(0,n._)("td",null,[(0,n._)("code",null,"string")]),(0,n._)("td",null,[(0,n._)("code",null,"'text'")]),(0,n._)("td")]),(0,n._)("tr",null,[(0,n._)("td",null,[(0,n._)("code",null,"prefix")]),(0,n._)("td",null,[(0,n._)("code",null,"string")]),(0,n._)("td",null,[(0,n._)("code",null,"null")]),(0,n._)("td",null,"Indikator/tydeliggørelse af data i starten - eg. stk, kr, m.m.")]),(0,n._)("tr",null,[(0,n._)("td",null,[(0,n._)("code",null,"suffix")]),(0,n._)("td",null,[(0,n._)("code",null,"string")]),(0,n._)("td",null,[(0,n._)("code",null,"null")]),(0,n._)("td",null,"Indikator/tydeliggørelse af data i enden - eg. stk, kr, m.m.")])])],-1),o=(0,n._)("table",{class:"table table--compact"},[(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Events"),(0,n._)("th",null,"Beskrivelse")])]),(0,n._)("tbody",null,[(0,n._)("tr",null,[(0,n._)("td",null,[(0,n._)("code",null,"@dirty")]),(0,n._)("td",null,"Om input feltet er blevet berørt")])])],-1),s=(0,n._)("b",null,"tekst",-1),f=(0,n._)("button",{class:"button button-search"},[(0,n._)("svg",{class:"icon-svg m-0","aria-hidden":"true"},[(0,n._)("use",{"xlink:href":"#search"})]),(0,n._)("span",{class:"sr-only"}," Søg ")],-1),r=(0,n._)("button",{class:"button button-search"},"Søg",-1);var i=(0,n.aZ)({__name:"InputFeltExample",setup(l){const e=(0,u.iH)(""),t=(0,u.iH)(""),i=(0,u.iH)(""),m=(0,u.iH)(""),_=(0,u.iH)(""),p=(0,u.iH)(0),c='\n<fds-input v-model="txtFornavn" />\n',v='\n<fds-formgroup>\n  <fds-label id="formid"> Efternavn </fds-label>\n  <fds-tooltip class="ml-2"> Hjælpende <b>tekst</b> </fds-tooltip>\n  <fds-hint>Indtast fornavn</fds-hint>\n  <fds-input v-model="txtEfternavn" id="formid"></fds-input>\n  <fds-input-limit :modelValue="txtEfternavn" :limit="20" />\n</fds-formgroup>\n',h='\n<fds-input v-model="txtPre" prefix="prefix" id="prefix"></fds-input>\n\n<fds-input v-model="txtSuffix" suffix="suffix" id="txtSuffix"></fds-input>\n\n',x='\n<fds-input v-model="txtSearch" placeholder="Søg efter..." id="search">\n  <template #button>\n    <button class="button button-search">\n      <svg class="icon-svg m-0" aria-hidden="true">\n        <use xlink:href="#search"></use></svg\n      ><span class="sr-only"> Søg </span>\n    </button>\n  </template>\n</fds-input>\n\n<fds-input v-model="txtSearch" placeholder="Søg efter..." id="searchbtn">\n  <template #button>\n    <button class="button button-search">Søg</button>\n  </template>\n</fds-input>\n';return(l,u)=>{const b=(0,n.up)("fds-label"),W=(0,n.up)("fds-tooltip"),w=(0,n.up)("fds-hint"),k=(0,n.up)("fds-input"),g=(0,n.up)("fds-formgroup"),V=(0,n.up)("fds-pre"),U=(0,n.up)("fds-preview-item"),S=(0,n.up)("fds-preview-code"),j=(0,n.up)("fds-preview"),y=(0,n.up)("fds-input-limit"),H=(0,n.up)("fds-input-number");return(0,n.wg)(),(0,n.iD)("section",null,[(0,n.Wm)(j,{header:"Tekstfelt",href:"https://designsystem.dk/komponenter/inputfelter/"},{default:(0,n.w5)((()=>[(0,n.Wm)(U,null,{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(b,{id:"formid"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Fornavn ")])),_:1}),(0,n.Wm)(W,{class:"ml-2"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Hjælpende "),d])),_:1}),(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Indtast fornavn")])),_:1}),(0,n.Wm)(k,{modelValue:e.value,"onUpdate:modelValue":u[0]||(u[0]=l=>e.value=l),id:"formid"},null,8,["modelValue"])])),_:1}),(0,n.Wm)(V,{header:"v-model",json:{txtFornavn:e.value}},null,8,["json"])])),_:1}),(0,n.Wm)(S,null,{default:(0,n.w5)((()=>[(0,n._)("pre",{textContent:c})])),_:1}),(0,n.Wm)(U,null,{default:(0,n.w5)((()=>[a,o])),_:1})])),_:1}),(0,n.Wm)(j,{header:"Karakterbegrænsning"},{default:(0,n.w5)((()=>[(0,n.Wm)(U,null,{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(b,{id:"formid"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Efternavn ")])),_:1}),(0,n.Wm)(W,{class:"ml-2"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Hjælpende "),s])),_:1}),(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Indtast fornavn")])),_:1}),(0,n.Wm)(k,{modelValue:t.value,"onUpdate:modelValue":u[1]||(u[1]=l=>t.value=l),id:"formid"},null,8,["modelValue"]),(0,n.Wm)(y,{modelValue:t.value,limit:20},null,8,["modelValue"])])),_:1}),(0,n.Wm)(V,{header:"v-model",json:{txtEfternavn:t.value}},null,8,["json"])])),_:1}),(0,n.Wm)(S,null,{default:(0,n.w5)((()=>[(0,n._)("pre",{textContent:v})])),_:1})])),_:1}),(0,n.Wm)(j,{header:"Prefix og Suffix"},{default:(0,n.w5)((()=>[(0,n.Wm)(U,null,{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(b,{id:"prefix"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Med prefix ")])),_:1}),(0,n.Wm)(k,{modelValue:i.value,"onUpdate:modelValue":u[2]||(u[2]=l=>i.value=l),prefix:"prefix",id:"prefix"},null,8,["modelValue"])])),_:1}),(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(b,{id:"txtSuffix"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Med suffix ")])),_:1}),(0,n.Wm)(k,{modelValue:m.value,"onUpdate:modelValue":u[3]||(u[3]=l=>m.value=l),suffix:"suffix",id:"txtSuffix"},null,8,["modelValue"])])),_:1})])),_:1}),(0,n.Wm)(S,null,{default:(0,n.w5)((()=>[(0,n._)("pre",{textContent:h})])),_:1})])),_:1}),(0,n.Wm)(j,{header:"Nummer tekstfelt"},{default:(0,n.w5)((()=>[(0,n.Wm)(U,null,{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(b,{id:"noBeloeb"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Tal/Beløb ")])),_:1}),(0,n.Wm)(H,{modelValue:p.value,"onUpdate:modelValue":u[4]||(u[4]=l=>p.value=l),inputClass:"input-width-xs",suffix:"kr.",id:"noBeloeb"},null,8,["modelValue"])])),_:1}),(0,n.Wm)(V,{header:"v-model",json:{noBeloeb:p.value}},null,8,["json"])])),_:1}),(0,n.Wm)(S,null,{default:(0,n.w5)((()=>[(0,n._)("pre",{textContent:h})])),_:1})])),_:1}),(0,n.Wm)(j,{header:"Søg knap"},{default:(0,n.w5)((()=>[(0,n.Wm)(U,null,{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(b,{id:"searchtxt"},{default:(0,n.w5)((()=>[(0,n.Uk)("Input med knap ikon")])),_:1}),(0,n.Wm)(k,{modelValue:_.value,"onUpdate:modelValue":u[5]||(u[5]=l=>_.value=l),placeholder:"Søg efter...",id:"searchtxt"},{button:(0,n.w5)((()=>[f])),_:1},8,["modelValue"])])),_:1}),(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(b,{id:"searchbtn"},{default:(0,n.w5)((()=>[(0,n.Uk)("Input med knap tekst")])),_:1}),(0,n.Wm)(k,{modelValue:_.value,"onUpdate:modelValue":u[6]||(u[6]=l=>_.value=l),placeholder:"Søg efter...",id:"searchbtn"},{button:(0,n.w5)((()=>[r])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,n.Wm)(S,null,{default:(0,n.w5)((()=>[(0,n._)("pre",{textContent:x})])),_:1})])),_:1})])}}});const m=i;var _=m}}]);
//# sourceMappingURL=view-InputFeltExample.9c2aa8ba.js.map