"use strict";(self["webpackChunkexample"]=self["webpackChunkexample"]||[]).push([[8008],{2145:function(e,l,t){t.r(l),t.d(l,{default:function(){return p}});var a=t(3396),o=t(4870);const n=(0,a._)("p",null,"Det er muligt at benytte tjekboks til mere indhold",-1),d=(0,a._)("p",{class:"italic"},[(0,a._)("code",null,"fds-checkbox-list"),(0,a.Uk)(" Ud fra en liste af "),(0,a._)("code",null,"FdsCheckboxItem[]"),(0,a.Uk)(" genereres checkbox liste. ")],-1),c=(0,a._)("p",{class:"italic"},[(0,a.Uk)(" Det er muligt at udfolde valgte checkbox og angive eget indhold, via dynamisk "),(0,a._)("code",null,"slot")],-1),s=(0,a._)("hr",{class:"my-6"},null,-1),u=(0,a.Uk)(" Et valg "),m=(0,a.Uk)(" Andet valg - small "),i=(0,a._)("p",{class:"italic"},[(0,a._)("code",null,"fds-checkbox "),(0,a.Uk)(" Enkeltstående checkboxe")],-1);var k=(0,a.aZ)({__name:"TjekboksExample",setup(e){const l=(0,o.iH)(!1),t=(0,o.iH)(!1),k=(0,o.iH)([{title:"Banan",value:"banan"},{title:"Melon",value:"melon"},{title:"Æble",value:"æble"}]),h='\n<fds-checkbox-list v-model="checkboxList">\n  <template v-slot:[`melon`]>\n    <p>Det er muligt at benytte tjekboks til mere indhold</p>\n  </template>\n</fds-checkbox-list>\n',p='\n<fds-checkbox v-model="oneChecked" class="mt-2"> Et valg </fds-checkbox>\n<fds-checkbox v-model="twoChecked" small> Andet valg - small </fds-checkbox>\n\n';return(e,o)=>{const r=(0,a.up)("fds-checkbox-list"),b=(0,a.up)("fds-formgroup"),v=(0,a.up)("fds-pre"),f=(0,a.up)("fds-component-preview"),x=(0,a.up)("fds-checkbox");return(0,a.wg)(),(0,a.iD)("section",null,[(0,a.Wm)(f,{header:"Eksempel"},{description:(0,a.w5)((()=>[d,c])),code:(0,a.w5)((()=>[(0,a._)("pre",{textContent:h})])),default:(0,a.w5)((()=>[(0,a.Wm)(b,{label:"Vælg en checkbox"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{modelValue:k.value,"onUpdate:modelValue":o[0]||(o[0]=e=>k.value=e)},{["melon"]:(0,a.w5)((()=>[n])),_:2},1032,["modelValue"])])),_:1}),(0,a.Wm)(v,{header:"v-model",json:k.value},null,8,["json"])])),_:1}),s,(0,a.Wm)(f,{header:"Enkeltstående"},{description:(0,a.w5)((()=>[i])),code:(0,a.w5)((()=>[(0,a._)("pre",{textContent:p})])),default:(0,a.w5)((()=>[(0,a.Wm)(b,{label:"Single Checkbox"},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=e=>l.value=e),class:"mt-2"},{default:(0,a.w5)((()=>[u])),_:1},8,["modelValue"]),(0,a.Wm)(x,{modelValue:t.value,"onUpdate:modelValue":o[2]||(o[2]=e=>t.value=e),small:""},{default:(0,a.w5)((()=>[m])),_:1},8,["modelValue"]),(0,a.Wm)(v,{header:"v-model",json:{oneChecked:l.value,twoChecked:t.value}},null,8,["json"])])),_:1})])),_:1})])}}});const h=k;var p=h}}]);
//# sourceMappingURL=view-TjekboksExample.5c6384b3.js.map