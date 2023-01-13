import{e as p,f as _,o as b,c as h,b as l,w as a,d as v,a as e,r as t}from"./index.2aa85a96.js";const M=e("h2",null,"Fane 1",-1),g=e("p",null,"Manuel styret faneblade",-1),k=e("h2",null,"Fane 2",-1),F=e("p",null," Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl dolor et augue. Ut lorem massa, consequat ut orci sit amet, maximus dictum orci. Mauris pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis semper turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum, velit id sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem massa eget urna. ",-1),w=e("table",{class:"table table--compact"},[e("thead",null,[e("tr",null,[e("th",null,"Props"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Beskrivelse")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"id")]),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"auto")]),e("td")]),e("tr",null,[e("td",null,[e("code",null,"header")]),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"Fane")]),e("td")]),e("tr",null,[e("td",null,[e("code",null,"selected")]),e("td",null,[e("code",null,"boolean")]),e("td",null,[e("code",null,"false")]),e("td")])])],-1),x=e("hr",{class:"my-6"},null,-1),I=p({__name:"FanebladeExample",setup(C){const n=_("1"),o=`
<fds-faneblade>
  <fds-faneblad-item
    header="Fane 1"
    :selected="fanebladManueltId === '1'"
    @click="fanebladManueltId = $event"
    id="1">
    <h2>Fane 1</h2>
    <p>Manuel styret faneblade</p>
  </fds-faneblad-item>

  <fds-faneblad-item
    @click="fanebladManueltId = $event"
    :selected="fanebladManueltId === '2'"
    id="2">
    <template #header>
      Template Header
    </template>
    <h2>Fane 2</h2>
    <p>
      Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl
      dolor et augue. Ut lorem massa, consequat ut orci sit amet, maximus dictum orci. Mauris
      pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis
      semper turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum,
      velit id sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem massa eget urna.
    </p>
  </fds-faneblad-item>
</fds-faneblade>
`;return(q,s)=>{const d=t("fds-faneblad-item"),r=t("fds-faneblade"),c=t("fds-pre"),i=t("fds-preview-item"),m=t("fds-preview-code"),f=t("fds-preview");return b(),h("section",null,[l(f,{header:"Faneblade Manuelt",href:"https://designsystem.dk/komponenter/faneblade/"},{default:a(()=>[l(i,null,{default:a(()=>[l(r,null,{default:a(()=>[l(d,{id:"1",header:"Fane 1",selected:n.value==="1",onClick:s[0]||(s[0]=u=>n.value=u)},{default:a(()=>[M,g]),_:1},8,["selected"]),l(d,{id:"2",selected:n.value==="2",onClick:s[1]||(s[1]=u=>n.value=u)},{header:a(()=>[v(" Template Header ")]),default:a(()=>[k,F]),_:1},8,["selected"])]),_:1}),l(c,{header:"Valgt fane",json:{fanebladManueltId:n.value}},null,8,["json"])]),_:1}),l(m,null,{default:a(()=>[e("pre",{textContent:o})]),_:1}),l(i,null,{default:a(()=>[w]),_:1})]),_:1}),x])}}});export{I as default};
