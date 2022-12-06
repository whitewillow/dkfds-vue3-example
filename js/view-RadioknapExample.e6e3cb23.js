"use strict";(self["webpackChunkexample"]=self["webpackChunkexample"]||[]).push([[5065],{3479:function(l,e,n){n.r(e),n.d(e,{default:function(){return i}});var t=n(3396),u=n(4870);const d=(0,t._)("table",{class:"table table--compact"},[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"Props (fds-radio-group)"),(0,t._)("th",null,"Type"),(0,t._)("th",null,"Default"),(0,t._)("th",null,"Beskrivelse")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"id")]),(0,t._)("td",null,[(0,t._)("code",null,"string")]),(0,t._)("td",null,[(0,t._)("code",null,"null (autoid)")]),(0,t._)("td",null,"Lytter efter injected formid")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"v-model")]),(0,t._)("td",null,[(0,t._)("code",null,"string")]),(0,t._)("td",null,[(0,t._)("code",null,"null")]),(0,t._)("td")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"label*")]),(0,t._)("td",null,[(0,t._)("code",null,"string")]),(0,t._)("td",null,[(0,t._)("code",null,"null")]),(0,t._)("td")])])],-1),a=(0,t._)("table",{class:"table table--compact"},[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"Slots"),(0,t._)("th",null,"label")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"props.label")]),(0,t._)("td",null,"Angiv egen label (indgår i en legend)")])])],-1),o=(0,t._)("table",{class:"table table--compact"},[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"Props (radio-item)"),(0,t._)("th",null,"Type"),(0,t._)("th",null,"Default"),(0,t._)("th",null,"Beskrivelse")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"value")]),(0,t._)("td",null,[(0,t._)("code",null,"string - required")]),(0,t._)("td",null,[(0,t._)("code")]),(0,t._)("td")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"id")]),(0,t._)("td",null,[(0,t._)("code",null,"string")]),(0,t._)("td",null,[(0,t._)("code",null,"null (autoid)")]),(0,t._)("td",null,[(0,t.Uk)("Lytter efter injected formid - bruges til "),(0,t._)("code",null,"name"),(0,t.Uk)(" (radio gruppe)")])]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"index")]),(0,t._)("td",null,[(0,t._)("code",null,"string")]),(0,t._)("td",null,[(0,t._)("code",null,"null (autoid/index)")]),(0,t._)("td")])])],-1),r=(0,t._)("table",{class:"table table--compact"},[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"Slots (radio-item)"),(0,t._)("th",null,"Beskrivelse")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"content")]),(0,t._)("td",null,"Hvis radio er valgt vil slut udfoldes og vise indhold")])])],-1);var _=(0,t.aZ)({__name:"RadioknapExample",setup(l){const e=(0,u.iH)(""),n='\n<fds-formgroup>\n  <fds-label>Vælg Genre</fds-label>\n\n  <fds-radio-group v-model="radioValueKerne" label="Vælg Genre">\n    <fds-radio-item value="metal"> Metal </fds-radio-item>\n    <fds-radio-item value="pop">\n      Pop\n      <template #content>\n        Pop er som musikgenre den mest udbredte musikstilart i moderne tid - væsentlig mere\n        udbredt end fx rock, jazz og folkemusik. Navnet er en afledning af ordet "populær"\n        (eng. "popular").\n      </template>\n    </fds-radio-item>\n    <fds-radio-item value="klassisk"> Klassist </fds-radio-item>\n  </fds-radio-group>\n</fds-formgroup>\n';return(l,u)=>{const _=(0,t.up)("fds-radio-item"),s=(0,t.up)("fds-radio-group"),i=(0,t.up)("fds-formgroup"),p=(0,t.up)("fds-pre"),m=(0,t.up)("fds-preview-item"),f=(0,t.up)("fds-preview-code"),c=(0,t.up)("fds-preview");return(0,t.wg)(),(0,t.iD)("section",null,[(0,t.Wm)(c,{header:"Eksempel",href:"https://designsystem.dk/komponenter/radioknap/"},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,{modelValue:e.value,"onUpdate:modelValue":u[0]||(u[0]=l=>e.value=l),label:"Vælg Genre"},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{value:"metal"},{default:(0,t.w5)((()=>[(0,t.Uk)(" Metal ")])),_:1}),(0,t.Wm)(_,{value:"pop"},{content:(0,t.w5)((()=>[(0,t.Uk)(' Pop er som musikgenre den mest udbredte musikstilart i moderne tid - væsentlig mere udbredt end fx rock, jazz og folkemusik. Navnet er en afledning af ordet "populær" (eng. "popular"). ')])),default:(0,t.w5)((()=>[(0,t.Uk)(" Pop ")])),_:1}),(0,t.Wm)(_,{value:"klassisk"},{default:(0,t.w5)((()=>[(0,t.Uk)(" Klassist ")])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,t.Wm)(p,{json:{radioValueKerne:e.value}},null,8,["json"])])),_:1}),(0,t.Wm)(f,null,{default:(0,t.w5)((()=>[(0,t._)("pre",{textContent:n})])),_:1}),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[d,a,o,r])),_:1})])),_:1})])}}});const s=_;var i=s}}]);
//# sourceMappingURL=view-RadioknapExample.e6e3cb23.js.map