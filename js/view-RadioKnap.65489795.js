"use strict";(self["webpackChunkexample"]=self["webpackChunkexample"]||[]).push([[8583],{5694:function(e,l,t){t.r(l),t.d(l,{default:function(){return p}});var n=t(3396),a=t(4870);const d=(0,n._)("p",null,"Det er muligt at benytte radio til mere indhold",-1),o=(0,n._)("hr",{class:"my-6"},null,-1),u=(0,n._)("p",null,"Det er muligt at benytte radio til mere indhold",-1),i=(0,n._)("p",{class:"italic"},[(0,n.Uk)(" Er det kun ja eller nej - sand eller falsk, kan "),(0,n._)("code",null,"xfds-radio-toggle"),(0,n.Uk)(" benyttes. ")],-1),r=(0,n._)("p",{class:"italic"},[(0,n.Uk)(" Det er muligt at udfolde valgte radio og angive eget indhold, via dynamisk "),(0,n._)("code",null,"slot")],-1);var m=(0,n.aZ)({__name:"RadioKnap",setup(e){const l=(0,a.iH)(""),t=(0,a.iH)(null),m=(0,a.iH)([{title:"Banan",value:"banan"},{title:"Melon",value:"melon"},{title:"Æble",value:"æble"}]),s="\n<xfds-radio header=\"Pick one\" :list=\"radioOptions\" v-model=\"radioVal\">\n  <template v-slot:[`melon`]>\n    <p>Det er muligt at benytte radio til mere indhold</p>\n  </template>\n</xfds-radio>\n\nconst radioOptions = ref<FdsOptionItem[]>([\n  {\n    title: 'Banan',\n    value: 'banan',\n  },\n  {\n    title: 'Melon',\n    value: 'melon',\n  },\n  {\n    title: 'Æble',\n    value: 'æble',\n  },\n]);\n",p='\n<xfds-radio-toggle v-model="toggleRadio">\n  <template v-slot:[`true`]>\n    <p>Det er muligt at benytte radio til mere indhold</p>\n  </template>\n</xfds-radio-toggle>\n';return(e,a)=>{const f=(0,n.up)("fds-label"),v=(0,n.up)("xfds-radio"),g=(0,n.up)("fds-formgroup"),_=(0,n.up)("fds-pre"),c=(0,n.up)("fds-preview-item"),w=(0,n.up)("fds-preview-code"),k=(0,n.up)("fds-preview"),h=(0,n.up)("xfds-radio-toggle");return(0,n.wg)(),(0,n.iD)("section",null,[(0,n.Wm)(k,{header:"Eksempel"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Vælg radio")])),_:1}),(0,n.Wm)(v,{header:"Pick one",list:m.value,modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e)},{["melon"]:(0,n.w5)((()=>[d])),_:2},1032,["list","modelValue"])])),_:1}),(0,n.Wm)(_,{header:"v-model",json:{radioVal:l.value}},null,8,["json"])])),_:1}),(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n._)("pre",{textContent:s})])),_:1})])),_:1}),o,(0,n.Wm)(k,{header:"Ja eller nej"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Vælg radio toggle")])),_:1}),(0,n.Wm)(h,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value=e)},{["true"]:(0,n.w5)((()=>[u])),_:2},1032,["modelValue"])])),_:1}),(0,n.Wm)(_,{header:"v-model",json:{toggleRadio:t.value}},null,8,["json"])])),_:1}),(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[i,r])),_:1}),(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n._)("pre",{textContent:p})])),_:1})])),_:1})])}}});const s=m;var p=s}}]);
//# sourceMappingURL=view-RadioKnap.65489795.js.map