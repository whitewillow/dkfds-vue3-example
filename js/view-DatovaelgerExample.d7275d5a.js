"use strict";(self["webpackChunkexample"]=self["webpackChunkexample"]||[]).push([[1852],{9349:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var l=a(3396),n=a(4870);const o=(0,l.Uk)(" Komponenten benytter ikke DKFDS kalender, da DKFDS script laver om på elementer og ikke generisk nok til at bruge i denne sammenhæng "),d=(0,l.Uk)(" Fødselsdag "),r=(0,l._)("p",{class:"italic"},[(0,l.Uk)(" Datovælger benytter standard dato type "),(0,l._)("code",null,'<input type="date">')],-1),s=(0,l._)("p",null,"Dette betyder at pattern og min og max datoer sættes som standarden angiver.",-1),p=(0,l._)("p",null,[(0,l.Uk)(" Se mere under "),(0,l._)("br"),(0,l._)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date"},"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date"),(0,l._)("br"),(0,l._)("a",{href:"https://www.w3schools.com/tags/att_input_type_date.asp"},"https://www.w3schools.com/tags/att_input_type_date.asp")],-1);var u=(0,l.aZ)({__name:"DatovaelgerExample",setup(e){const t=(0,n.iH)("2022-12-01"),a=(0,n.iH)(!0),u="\n<fds-dato-vaelger v-model=\"datoValg\" />\n\nconst datoValg = ref('2022-12-01');\nconst datoValgValid = ref(true);\n";return(e,n)=>{const m=(0,l.up)("fds-alert"),i=(0,l.up)("fds-label"),c=(0,l.up)("fds-dato-vaelger"),f=(0,l.up)("fds-formgroup"),g=(0,l.up)("fds-pre"),_=(0,l.up)("fds-component-preview");return(0,l.wg)(),(0,l.iD)("section",null,[(0,l.Wm)(m,{level:"info",header:"Info",closeable:"",class:"mb-8"},{default:(0,l.w5)((()=>[o])),_:1}),(0,l.Wm)(_,{header:"Eksempel"},{description:(0,l.w5)((()=>[r,s,p])),code:(0,l.w5)((()=>[(0,l._)("pre",{textContent:u})])),default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((({formid:e})=>[(0,l.Wm)(i,{id:e},{default:(0,l.w5)((()=>[d])),_:2},1032,["id"]),(0,l.Wm)(c,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),onValid:n[1]||(n[1]=e=>a.value=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(g,{json:{datoValg:t.value,datoValgValid:a.value},header:"JSON DATE format"},null,8,["json"])])),_:1})])}}});const m=u;var i=m}}]);
//# sourceMappingURL=view-DatovaelgerExample.d7275d5a.js.map