"use strict";(self["webpackChunkexample"]=self["webpackChunkexample"]||[]).push([[8505],{1589:function(l,e,u){function a(l){return e=>e<=l?null:`Feltet må overstige ${l}.`}function n(l){return e=>e>l?null:`Feltet må ikke være mindre end ${l}.`}function t(l){return e=>e.length>=l?null:`Feltet må ikke være kortere end ${l} tegn.`}function d(l){return null!==l&&l.replace(/\s+/g,"").length>0?null:"Feltet må ikke være tomt."}function o(l){if(!Array.isArray(l))return"Ukendt indhold";const e=l;return e.some((l=>!0===l.checked))?null:"Angiv venligst et valg"}u.d(e,{E_:function(){return a},QA:function(){return t},_M:function(){return o},rY:function(){return n},v3:function(){return d}})},2373:function(l,e,u){u.r(e),u.d(e,{default:function(){return y}});var a=u(3396),n=u(4870),t=u(7139),d=u(1589);const o=(0,a._)("h3",null,"Eksempel på advanceret brug",-1),i=(0,a.Uk)(" Fornavn "),m=(0,a.Uk)("Indtast fornavn"),r=(0,a.Uk)(" Efternavn "),v=(0,a.Uk)("Indtast efternavn"),s=(0,a._)("hr",null,null,-1),p=(0,a._)("h3",null,"Eksempel på simpel brug",-1),f=(0,a._)("hr",null,null,-1),V=(0,a._)("h3",null,"Valg",-1),_=(0,a._)("p",null,"Det er muligt at benytte radio til mere indhold",-1),c=(0,a.Uk)(" Andet valg "),w=(0,a.Uk)(" Andet valg - small "),k=(0,a.Uk)("Vælg radio"),g=(0,a.Uk)(" Lorem ipsum dolor sit amet consectetur adipisicing elit. "),U=(0,a._)("p",null,"Det er muligt at benytte radio til mere indhold",-1),b=(0,a.Uk)("Vælg radio toggle"),W=(0,a.Uk)(" Lorem ipsum dolor sit amet consectetur adipisicing elit. "),h=(0,a._)("p",null,"Det er muligt at benytte radio til mere indhold",-1),H=(0,a._)("hr",{class:"my-6"},null,-1),x=(0,a._)("hr",null,null,-1);var A=(0,a.aZ)({__name:"FormExample",setup(l){const e=(0,n.iH)(""),u=(0,n.iH)(""),A=(0,n.iH)(""),z=(0,n.iH)(""),y=(0,n.iH)("23232323"),S=(0,n.iH)(""),F=(0,n.iH)(!1),M=(0,n.iH)(!1),E=(0,n.iH)(""),j=(0,n.iH)(!1),D=(0,n.iH)(null),Q=(0,n.iH)([{title:"Banan",value:"banan"},{title:"Melon",value:"melon"},{title:"Æble",value:"æble"}]),B=(0,n.iH)([{title:"Banan",value:"banan"},{title:"Melon",value:"melon"},{title:"Æble",value:"æble"}]),C=(0,n.iH)(""),$=(0,n.iH)([{title:"Banan",value:"banan"},{title:"Melon",value:"melon"},{title:"Æble",value:"æble"}]);return(l,I)=>{const L=(0,a.up)("fds-label"),q=(0,a.up)("fds-hint"),P=(0,a.up)("fds-input"),T=(0,a.up)("fds-formgroup"),Y=(0,a.up)("fds-fejlmeddelelse"),Z=(0,a.up)("xfds-validate"),G=(0,a.up)("xfds-form-input"),J=(0,a.up)("xfds-form-textarea"),K=(0,a.up)("fds-checkbox-list"),N=(0,a.up)("fds-pre"),O=(0,a.up)("fds-checkbox"),R=(0,a.up)("fds-radio"),X=(0,a.up)("fds-radio-toggle"),ll=(0,a.up)("fds-dropdown"),el=(0,a.up)("fds-toggle-switch");return(0,a.wg)(),(0,a.iD)("section",null,[(0,a._)("div",null,[o,(0,a.Wm)(T,null,{default:(0,a.w5)((({formid:l})=>[(0,a.Wm)(L,{id:l},{default:(0,a.w5)((()=>[i])),_:2},1032,["id"]),(0,a.Wm)(q,null,{default:(0,a.w5)((()=>[m])),_:1}),(0,a.Wm)(P,{modelValue:e.value,"onUpdate:modelValue":I[0]||(I[0]=l=>e.value=l),id:l},null,8,["modelValue","id"])])),_:1}),(0,a.Wm)(Z,{modelValue:u.value,validations:[(0,n.SU)(d.v3),(0,n.SU)(d.QA)(10)]},{default:(0,a.w5)((({isValid:l,errorMessage:e})=>[(0,a.Wm)(T,{"is-valid":l},{default:(0,a.w5)((({formid:n})=>[(0,a.Wm)(L,{id:n},{default:(0,a.w5)((()=>[r])),_:2},1032,["id"]),l?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(Y,{key:0},{default:(0,a.w5)((()=>[(0,a.Uk)((0,t.zw)(e),1)])),_:2},1024)),(0,a.Wm)(q,null,{default:(0,a.w5)((()=>[v])),_:1}),(0,a.Wm)(P,{modelValue:u.value,"onUpdate:modelValue":I[1]||(I[1]=l=>u.value=l),id:n},null,8,["modelValue","id"])])),_:2},1032,["is-valid"])])),_:1},8,["modelValue","validations"])]),s,(0,a._)("div",null,[p,(0,a.Wm)(G,{label:"Adresse",hint:"Angiv gyldig adresse",modelValue:A.value,"onUpdate:modelValue":I[2]||(I[2]=l=>A.value=l),validations:[(0,n.SU)(d.v3),(0,n.SU)(d.QA)(10)]},null,8,["modelValue","validations"]),(0,a.Wm)(G,{label:"Antal kasser",modelValue:z.value,"onUpdate:modelValue":I[3]||(I[3]=l=>z.value=l),prefix:"stk"},null,8,["modelValue"]),(0,a.Wm)(G,{label:"Antal kasser",modelValue:z.value,"onUpdate:modelValue":I[4]||(I[4]=l=>z.value=l),suffix:"stk"},null,8,["modelValue"]),(0,a.Wm)(G,{label:"Mobil nr.",modelValue:y.value,disabled:""},null,8,["modelValue"]),(0,a.Wm)(J,{label:"Tekst område",modelValue:S.value,"onUpdate:modelValue":I[5]||(I[5]=l=>S.value=l),validations:[(0,n.SU)(d.v3),(0,n.SU)(d.QA)(10)]},null,8,["modelValue","validations"]),f,V,(0,a.Wm)(T,{label:"Vælg en checkbox"},{default:(0,a.w5)((()=>[(0,a.Wm)(K,{modelValue:B.value,"onUpdate:modelValue":I[6]||(I[6]=l=>B.value=l)},{["melon"]:(0,a.w5)((()=>[_])),_:2},1032,["modelValue"])])),_:1}),(0,a.Wm)(N,{json:B.value},null,8,["json"]),(0,a.Wm)(T,{label:"Single Checkbox"},{default:(0,a.w5)((()=>[(0,a.Wm)(O,{modelValue:M.value,"onUpdate:modelValue":I[7]||(I[7]=l=>M.value=l),class:"mt-2"},{default:(0,a.w5)((()=>[c])),_:1},8,["modelValue"]),(0,a.Wm)(O,{modelValue:M.value,"onUpdate:modelValue":I[8]||(I[8]=l=>M.value=l),small:""},{default:(0,a.w5)((()=>[w])),_:1},8,["modelValue"])])),_:1}),(0,a.Wm)(T,null,{default:(0,a.w5)((()=>[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[k])),_:1}),(0,a.Wm)(R,{header:"Pick one",list:Q.value,modelValue:E.value,"onUpdate:modelValue":I[9]||(I[9]=l=>E.value=l)},{hint:(0,a.w5)((()=>[g])),["melon"]:(0,a.w5)((()=>[U])),_:2},1032,["list","modelValue"])])),_:1}),(0,a.Wm)(T,null,{default:(0,a.w5)((()=>[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[b])),_:1}),(0,a.Wm)(X,{modelValue:D.value,"onUpdate:modelValue":I[10]||(I[10]=l=>D.value=l)},{hint:(0,a.w5)((()=>[W])),["true"]:(0,a.w5)((()=>[h])),_:2},1032,["modelValue"])])),_:1}),(0,a.Uk)(" "+(0,t.zw)(D.value)+" ",1),(0,a.Wm)(T,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ll,{options:$.value,modelValue:C.value,"onUpdate:modelValue":I[11]||(I[11]=l=>C.value=l)},null,8,["options","modelValue"])])),_:1}),(0,a.Wm)(el,{modelValue:j.value,"onUpdate:modelValue":I[12]||(I[12]=l=>j.value=l)},null,8,["modelValue"]),(0,a._)("div",null,(0,t.zw)(j.value),1)]),H,(0,a._)("p",null,(0,t.zw)(e.value),1),(0,a._)("p",null,(0,t.zw)(u.value),1),(0,a._)("p",null,(0,t.zw)(A.value),1),(0,a._)("p",null,(0,t.zw)(y.value),1),(0,a._)("p",null,(0,t.zw)(S.value),1),(0,a._)("p",null,(0,t.zw)(F.value),1),(0,a._)("p",null,(0,t.zw)(M.value),1),(0,a._)("p",null,(0,t.zw)(E.value),1),(0,a._)("p",null,(0,t.zw)(C.value),1),x])}}});const z=A;var y=z}}]);
//# sourceMappingURL=view-FormExample.ec571868.js.map