"use strict";(self["webpackChunkexample"]=self["webpackChunkexample"]||[]).push([[3800],{7651:function(e,o,t){t.r(o),t.d(o,{default:function(){return C}});var n=t(3396),l=t(4870);const s=(0,n._)("p",null,"Eksempel på et modal vindue",-1),d=(0,n._)("p",null,[(0,n.Uk)(" Det er muligt at skifte tekster på nedestående knapper "),(0,n._)("code",null,"okTekst, annullerTekst")],-1),a=(0,n._)("p",null,[(0,n.Uk)("Events "),(0,n._)("code",null,"ok, close"),(0,n.Uk)(" emittes ved hhv klik på ok og annuller/luk knap")],-1),u=(0,n._)("p",null,[(0,n.Uk)("Hvis "),(0,n._)("code",null,"focusId"),(0,n.Uk)(" er sat, sætte denne i focus efter luk")],-1),r=(0,n.Uk)(" Vis Modal "),k=(0,n._)("p",{class:"italic"},"Eksempel på et modal vindue",-1),p=(0,n._)("p",null,"Eksempel på et modal vindue",-1),i=(0,n._)("p",null,[(0,n.Uk)(" Det er muligt at skifte tekster på nedestående knapper "),(0,n._)("code",null,"okTekst, annullerTekst")],-1),c=(0,n._)("p",null,[(0,n.Uk)("Events "),(0,n._)("code",null,"ok, close"),(0,n.Uk)(" emittes ved hhv klik på ok og annuller/luk knap")],-1),m=(0,n._)("p",null,[(0,n.Uk)("Hvis "),(0,n._)("code",null,"focusId"),(0,n.Uk)(" er sat, sætte denne i focus efter luk")],-1),f=(0,n.Uk)(" Godkend "),h=(0,n.Uk)(" Nej takker "),w=(0,n.Uk)(" Vis Footer Modal "),v=(0,n._)("p",{class:"italic"},"Eksempel på et modal vindue med egen footer",-1);var M=(0,n.aZ)({__name:"ModalvindueExample",setup(e){const o=(0,l.iH)(!1),t=(0,l.iH)(!1),M='\n<fds-modal\n  :show="showModal"\n  header="Min Modal"\n  focusId="modalButton"\n  @close="showModal = false"\n>\n  <p>Eksempel på et modal vindue</p>\n  <p>\n    Det er muligt at skifte tekster på nedestående knapper <code>okTekst, annullerTekst</code>\n  </p>\n  <p>Events <code>ok, close</code> emittes ved hhv klik på ok og annuller/luk knap</p>\n  <p>Hvis <code>focusId</code> er sat, sætte denne i focus efter luk</p>\n</fds-modal>\n\n<fds-button @click="showModal = !showModal" id="modalButton"> Vis Modal </fds-button>\n\nconst showModal = ref(false);\n\n',_='\n<fds-modal\n  :show="showModalCustomFooter"\n  header="Egen footer modal"\n  focusId="showModalCustomFooter"\n  @close="showModalCustomFooter = false"\n>\n  <p>Eksempel på et modal vindue</p>\n  <p>\n    Det er muligt at skifte tekster på nedestående knapper <code>okTekst, annullerTekst</code>\n  </p>\n  <p>Events <code>ok, close</code> emittes ved hhv klik på ok og annuller/luk knap</p>\n  <p>Hvis <code>focusId</code> er sat, sætte denne i focus efter luk</p>\n  <template #footer>\n    <fds-button id="showModalCustomFooter" variant="error"> Godkend </fds-button>\n    <fds-button\n      variant="secondary"\n      @click="showModalCustomFooter = !showModalCustomFooter"\n      id="showModalCustomFooter"\n    >\n      Nej takker\n    </fds-button>\n  </template>\n</fds-modal>\n\n<fds-button\n  @click="showModalCustomFooter = !showModalCustomFooter"\n  id="showModalCustomFooter"\n>\n  Vis Footer Modal\n</fds-button>\n\nconst showModalCustomFooter = ref(false);\n\n';return(e,l)=>{const C=(0,n.up)("fds-modal"),F=(0,n.up)("fds-pre"),U=(0,n.up)("fds-button"),g=(0,n.up)("fds-component-preview");return(0,n.wg)(),(0,n.iD)("section",null,[(0,n.Wm)(g,{header:"Standard modal"},{description:(0,n.w5)((()=>[k])),code:(0,n.w5)((()=>[(0,n._)("pre",{textContent:M})])),default:(0,n.w5)((()=>[(0,n.Wm)(C,{show:o.value,header:"Min Modal",focusId:"modalButton",onClose:l[0]||(l[0]=e=>o.value=!1)},{default:(0,n.w5)((()=>[s,d,a,u])),_:1},8,["show"]),(0,n.Wm)(F,{json:{showModal:o.value}},null,8,["json"]),(0,n.Wm)(U,{onClick:l[1]||(l[1]=e=>o.value=!o.value),id:"modalButton"},{default:(0,n.w5)((()=>[r])),_:1})])),_:1}),(0,n.Wm)(g,{header:"Modal med egen footer"},{description:(0,n.w5)((()=>[v])),code:(0,n.w5)((()=>[(0,n._)("pre",{textContent:_})])),default:(0,n.w5)((()=>[(0,n.Wm)(C,{show:t.value,header:"Egen footer modal",focusId:"showModalCustomFooter",onClose:l[3]||(l[3]=e=>t.value=!1)},{footer:(0,n.w5)((()=>[(0,n.Wm)(U,{id:"showModalCustomFooter",variant:"error"},{default:(0,n.w5)((()=>[f])),_:1}),(0,n.Wm)(U,{variant:"secondary",onClick:l[2]||(l[2]=e=>t.value=!t.value),id:"showModalCustomFooter"},{default:(0,n.w5)((()=>[h])),_:1})])),default:(0,n.w5)((()=>[p,i,c,m])),_:1},8,["show"]),(0,n.Wm)(F,{json:{showModalCustomFooter:t.value}},null,8,["json"]),(0,n.Wm)(U,{onClick:l[4]||(l[4]=e=>t.value=!t.value),id:"showModalCustomFooter"},{default:(0,n.w5)((()=>[w])),_:1})])),_:1})])}}});const _=M;var C=_}}]);
//# sourceMappingURL=view-ModalvindueExample.d2f36fcb.js.map