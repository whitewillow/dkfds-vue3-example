import{e as M,f as k,o as v,c as b,b as t,w as e,d as o,a as l,r as n}from"./index.59297fa2.js";const x=l("p",null,"Eksempel p\xE5 et modal vindue",-1),g=l("p",null,[o(" Det er muligt at skifte tekster p\xE5 nedest\xE5ende knapper "),l("code",null,"acceptText, cancelText")],-1),E=l("p",null,[o(" Events "),l("code",null,"cancel, close, accept"),o(" emittes ved hhv klik p\xE5 godkend og annuller/luk knap ")],-1),C=l("hr",null,null,-1),w=l("code",null,"fds-modal",-1),F=l("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",target:"mdn"},"HTML dialog element",-1),y=l("table",{class:"table table--compact"},[l("thead",null,[l("tr",null,[l("th",null,"Props"),l("th",null,"Type"),l("th",null,"Default"),l("th",null,"Beskrivelse")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"id")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"null (autogenerer id)")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"header")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"null")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"closeable")]),l("td",null,[l("code",null,"Boolean")]),l("td",null,[l("code",null,"true")]),l("td",null,"Luk oppe i h\xF8jre hj\xF8rne og muligt at klikke escape")]),l("tr",null,[l("td",null,[l("code",null,"acceptText")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"'Godkend'")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"cancelText")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"'Annuller'")]),l("td")])])],-1),B=l("table",{class:"table table--compact"},[l("thead",null,[l("tr",null,[l("th",null,"Slots"),l("th",null,"Default"),l("th",null,"Beskrivelse")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"header")]),l("td",null,[l("code",null,"props.header og luk knap")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"footer")]),l("td",null,[l("code",null,"knapper")]),l("td")])])],-1),T=l("table",{class:"table table--compact"},[l("thead",null,[l("tr",null,[l("th",null,"Metoder"),l("th",null,"Beskrivelse")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"ref.showModal()")]),l("td",null,"\xC5bner modal")]),l("tr",null,[l("td",null,[l("code",null,"ref.hideModal()")]),l("td",null,"Lukker modal")])])],-1),N=l("table",{class:"table table--compact"},[l("thead",null,[l("tr",null,[l("th",null,"Events"),l("th",null,"Beskrivelse")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"@close")]),l("td",null,"N\xE5r modal lukkes")]),l("tr",null,[l("td",null,[l("code",null,"@accept")]),l("td",null,"N\xE5r accept klikkes")]),l("tr",null,[l("td",null,[l("code",null,"@cancel")]),l("td",null,"N\xE5r cancel klikkes")])])],-1),V=l("p",null,"Eksempel p\xE5 et modal vindue",-1),D=l("p",null,"med egen footer",-1),$=M({__name:"ModalvindueExample",setup(j){const c=k(null),u=k(null),h=`
<fds-modal
  ref="refModal"
  header="Min Modal"
  closeable>
  <p>Eksempel p\xE5 et modal vindue</p>
  <p>
    Det er muligt at skifte tekster p\xE5 nedest\xE5ende knapper <code>acceptText, cancelText</code>
  </p>
  <p>
    Events <code>cancel, close, accept</code> emittes ved hhv klik p\xE5 godkend og annuller/luk
    knap
  </p>
</fds-modal>

<fds-button
  @click="refModal.showModal()"
  id="modalButton">
  Vis Modal
</fds-button>

const refModal = ref(null);

`,_=`
<fds-modal ref="refModalCustomFooter" header="Egen footer modal">
  <p>Eksempel p\xE5 et modal vindue</p>
  <p>med egen footer</p>
  <template #footer>
    <fds-button
      id="showModalCustomFooter"
      @click="refModalCustomFooter.hideModal()"
      variant="error"
    >
      Godkend
    </fds-button>
    <fds-button
      variant="secondary"
      @click="refModalCustomFooter.hideModal()"
      id="showModalCustomFooter"
    >
      Nej takker
    </fds-button>
  </template>
</fds-modal>

<fds-button @click="refModalCustomFooter.showModal()" id="showModalCustomFooter">
  Vis Footer Modal
</fds-button>

const refModalCustomFooter = ref(null);

`;return(L,d)=>{const i=n("fds-modal"),a=n("fds-button"),s=n("fds-preview-item"),p=n("fds-preview-code"),f=n("fds-preview");return v(),b("section",null,[t(f,{header:"Standard modal",href:"https://designsystem.dk/komponenter/modal/"},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{ref_key:"refModal",ref:c,header:"Min Modal",closeable:""},{default:e(()=>[x,g,E]),_:1},512),t(a,{id:"modalButton",onClick:d[0]||(d[0]=r=>{var m;return(m=c.value)==null?void 0:m.showModal()})},{default:e(()=>[o(" Vis Modal ")]),_:1})]),_:1}),C,t(s,null,{default:e(()=>[w,o(" afviger fra standard DKFDS Modal - da den udelukkende bruger standard "),F,o(": ")]),_:1}),t(p,null,{default:e(()=>[l("pre",{textContent:h})]),_:1}),t(s,null,{default:e(()=>[y,B,T,N]),_:1})]),_:1}),t(f,{header:"Modal med egen footer"},{default:e(()=>[t(s,null,{default:e(()=>[t(i,{ref_key:"refModalCustomFooter",ref:u,header:"Egen footer modal"},{footer:e(()=>[t(a,{id:"showModalCustomFooter",variant:"error",onClick:d[1]||(d[1]=r=>u.value.hideModal())},{default:e(()=>[o(" Godkend ")]),_:1}),t(a,{id:"showModalCustomFooter",variant:"secondary",onClick:d[2]||(d[2]=r=>u.value.hideModal())},{default:e(()=>[o(" Nej takker ")]),_:1})]),default:e(()=>[V,D]),_:1},512),t(a,{id:"showModalCustomFooter",onClick:d[3]||(d[3]=r=>u.value.showModal())},{default:e(()=>[o(" Vis Footer Modal ")]),_:1})]),_:1}),t(p,null,{default:e(()=>[l("pre",{textContent:_})]),_:1})]),_:1})])}}});export{$ as default};
