"use strict";(self["webpackChunkexample"]=self["webpackChunkexample"]||[]).push([[3800],{7651:function(l,e,n){n.r(e),n.d(e,{default:function(){return b}});var t=n(3396),d=n(4870);const o=(0,t._)("p",null,"Eksempel på et modal vindue",-1),u=(0,t._)("p",null,[(0,t.Uk)(" Det er muligt at skifte tekster på nedestående knapper "),(0,t._)("code",null,"acceptText, cancelText")],-1),a=(0,t._)("p",null,[(0,t.Uk)(" Events "),(0,t._)("code",null,"cancel, close, accept"),(0,t.Uk)(" emittes ved hhv klik på godkend og annuller/luk knap ")],-1),r=(0,t._)("hr",null,null,-1),_=(0,t._)("code",null,"fds-modal",-1),s=(0,t._)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",target:"mdn"},"HTML dialog element",-1),c=(0,t._)("table",{class:"table table--compact"},[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"Props"),(0,t._)("th",null,"Type"),(0,t._)("th",null,"Default"),(0,t._)("th",null,"Beskrivelse")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"id")]),(0,t._)("td",null,[(0,t._)("code",null,"string")]),(0,t._)("td",null,[(0,t._)("code",null,"null (autogenerer id)")]),(0,t._)("td")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"header")]),(0,t._)("td",null,[(0,t._)("code",null,"string")]),(0,t._)("td",null,[(0,t._)("code",null,"null")]),(0,t._)("td")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"closeable")]),(0,t._)("td",null,[(0,t._)("code",null,"Boolean")]),(0,t._)("td",null,[(0,t._)("code",null,"true")]),(0,t._)("td",null,"Luk oppe i højre hjørne og muligt at klikke escape")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"acceptText")]),(0,t._)("td",null,[(0,t._)("code",null,"string")]),(0,t._)("td",null,[(0,t._)("code",null,"'Godkend'")]),(0,t._)("td")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"cancelText")]),(0,t._)("td",null,[(0,t._)("code",null,"string")]),(0,t._)("td",null,[(0,t._)("code",null,"'Annuller'")]),(0,t._)("td")])])],-1),p=(0,t._)("table",{class:"table table--compact"},[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"Slots"),(0,t._)("th",null,"Default"),(0,t._)("th",null,"Beskrivelse")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"header")]),(0,t._)("td",null,[(0,t._)("code",null,"props.header og luk knap")]),(0,t._)("td")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"footer")]),(0,t._)("td",null,[(0,t._)("code",null,"knapper")]),(0,t._)("td")])])],-1),i=(0,t._)("table",{class:"table table--compact"},[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"Metoder"),(0,t._)("th",null,"Beskrivelse")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"ref.showModal()")]),(0,t._)("td",null,"Åbner modal")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"ref.hideModal()")]),(0,t._)("td",null,"Lukker modal")])])],-1),k=(0,t._)("table",{class:"table table--compact"},[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"Events"),(0,t._)("th",null,"Beskrivelse")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"@close")]),(0,t._)("td",null,"Når modal lukkes")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"@accept")]),(0,t._)("td",null,"Når accept klikkes")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"@cancel")]),(0,t._)("td",null,"Når cancel klikkes")])])],-1),m=(0,t._)("p",null,"Eksempel på et modal vindue",-1),f=(0,t._)("p",null,"med egen footer",-1);var h=(0,t.aZ)({__name:"ModalvindueExample",setup(l){const e=(0,d.iH)(null),n=(0,d.iH)(null),h='\n<fds-modal\n  ref="refModal"\n  header="Min Modal"\n  closeable>\n  <p>Eksempel på et modal vindue</p>\n  <p>\n    Det er muligt at skifte tekster på nedestående knapper <code>acceptText, cancelText</code>\n  </p>\n  <p>\n    Events <code>cancel, close, accept</code> emittes ved hhv klik på godkend og annuller/luk\n    knap\n  </p>\n</fds-modal>\n\n<fds-button\n  @click="refModal.showModal()"\n  id="modalButton">\n  Vis Modal\n</fds-button>\n\nconst refModal = ref(null);\n\n',M='\n<fds-modal ref="refModalCustomFooter" header="Egen footer modal">\n  <p>Eksempel på et modal vindue</p>\n  <p>med egen footer</p>\n  <template #footer>\n    <fds-button\n      id="showModalCustomFooter"\n      @click="refModalCustomFooter.hideModal()"\n      variant="error"\n    >\n      Godkend\n    </fds-button>\n    <fds-button\n      variant="secondary"\n      @click="refModalCustomFooter.hideModal()"\n      id="showModalCustomFooter"\n    >\n      Nej takker\n    </fds-button>\n  </template>\n</fds-modal>\n\n<fds-button @click="refModalCustomFooter.showModal()" id="showModalCustomFooter">\n  Vis Footer Modal\n</fds-button>\n\nconst refModalCustomFooter = ref(null);\n\n';return(l,d)=>{const b=(0,t.up)("fds-modal"),v=(0,t.up)("fds-button"),w=(0,t.up)("fds-preview-item"),g=(0,t.up)("fds-preview-code"),C=(0,t.up)("fds-preview");return(0,t.wg)(),(0,t.iD)("section",null,[(0,t.Wm)(C,{header:"Standard modal",href:"https://designsystem.dk/komponenter/modal/"},{default:(0,t.w5)((()=>[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Wm)(b,{ref_key:"refModal",ref:e,header:"Min Modal",closeable:""},{default:(0,t.w5)((()=>[o,u,a])),_:1},512),(0,t.Wm)(v,{onClick:d[0]||(d[0]=l=>e.value?.showModal()),id:"modalButton"},{default:(0,t.w5)((()=>[(0,t.Uk)(" Vis Modal ")])),_:1})])),_:1}),r,(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[_,(0,t.Uk)(" afviger fra standard DKFDS Modal - da den udelukkende bruger standard "),s,(0,t.Uk)(": ")])),_:1}),(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[(0,t._)("pre",{textContent:h})])),_:1}),(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[c,p,i,k])),_:1})])),_:1}),(0,t.Wm)(C,{header:"Modal med egen footer"},{default:(0,t.w5)((()=>[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Wm)(b,{ref_key:"refModalCustomFooter",ref:n,header:"Egen footer modal"},{footer:(0,t.w5)((()=>[(0,t.Wm)(v,{id:"showModalCustomFooter",onClick:d[1]||(d[1]=l=>n.value.hideModal()),variant:"error"},{default:(0,t.w5)((()=>[(0,t.Uk)(" Godkend ")])),_:1}),(0,t.Wm)(v,{variant:"secondary",onClick:d[2]||(d[2]=l=>n.value.hideModal()),id:"showModalCustomFooter"},{default:(0,t.w5)((()=>[(0,t.Uk)(" Nej takker ")])),_:1})])),default:(0,t.w5)((()=>[m,f])),_:1},512),(0,t.Wm)(v,{onClick:d[3]||(d[3]=l=>n.value.showModal()),id:"showModalCustomFooter"},{default:(0,t.w5)((()=>[(0,t.Uk)(" Vis Footer Modal ")])),_:1})])),_:1}),(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[(0,t._)("pre",{textContent:M})])),_:1})])),_:1})])}}});const M=h;var b=M}}]);
//# sourceMappingURL=view-ModalvindueExample.596cc28b.js.map