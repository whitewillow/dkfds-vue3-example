import{e as _,o as f,c as p,b as t,w as e,d as n,a as s,r}from"./index.9ab9e984.js";const m=s("i",{class:"ml-4 icon icon-email"},null,-1),k=s("hr",{class:"my-6"},null,-1),h=s("a",{href:"#"},[n(" Redig\xE9r"),s("span",{class:"sr-only"}," Kirsten M\xF8nster Jensen ")],-1),x=s("a",{href:"#"},[n(" Redig\xE9r"),s("span",{class:"sr-only"}," Kirsten M\xF8nster Jensen ")],-1),w=_({__name:"StruktureredeExample",setup(v){const i=`
<fds-strukturerede-liste header="Navn"> Kirsten M\xF8nster Jensen </fds-strukturerede-liste>
<fds-strukturerede-liste>
  <template #header>
    <fds-label class="d-flex justify-content-start"
      >E-mail <i class="ml-4 icon icon-email" /> </fds-label
  ></template>
  kirstenjensen@eksempel.dk
</fds-strukturerede-liste>
`,u=`
<fds-strukturerede-liste header="Navn">
  Kirsten M\xF8nster Jensen
  <template #button>
    <a href="#"> Redig\xE9r<span class="sr-only"> Kirsten M\xF8nster Jensen </span> </a>
  </template>
</fds-strukturerede-liste>
<fds-strukturerede-liste header="E-mail">
  kirstenjensen@eksempel.dk
  <template #button>
    <a href="#"> Redig\xE9r<span class="sr-only"> Kirsten M\xF8nster Jensen </span> </a>
  </template>
</fds-strukturerede-liste>
`;return(E,b)=>{const l=r("fds-strukturerede-liste"),c=r("fds-label"),a=r("fds-preview-item"),d=r("fds-preview-code"),o=r("fds-preview");return f(),p("section",null,[t(o,{header:"Eksempel",href:"https://designsystem.dk/komponenter/strukturerede-lister/"},{default:e(()=>[t(a,null,{default:e(()=>[t(l,{header:"Navn"},{default:e(()=>[n(" Kirsten M\xF8nster Jensen ")]),_:1}),t(l,null,{header:e(()=>[t(c,{class:"d-flex justify-content-start"},{default:e(()=>[n("E-mail "),m]),_:1})]),default:e(()=>[n(" kirstenjensen@eksempel.dk ")]),_:1})]),_:1}),t(d,null,{default:e(()=>[s("pre",{textContent:i})]),_:1})]),_:1}),k,t(o,{header:"Med link rediger"},{default:e(()=>[t(a,null,{default:e(()=>[t(l,{header:"Navn"},{button:e(()=>[h]),default:e(()=>[n(" Kirsten M\xF8nster Jensen ")]),_:1}),t(l,{header:"E-mail"},{button:e(()=>[x]),default:e(()=>[n(" kirstenjensen@eksempel.dk ")]),_:1})]),_:1}),t(d,null,{default:e(()=>[s("pre",{textContent:u})]),_:1})]),_:1})])}}});export{w as default};
