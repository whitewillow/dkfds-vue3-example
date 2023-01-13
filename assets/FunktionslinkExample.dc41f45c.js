import{e as m,f as h,o as v,c as b,b as t,w as l,d as s,a as n,r as e}from"./index.59297fa2.js";const g=n("table",{class:"table table--compact"},[n("thead",null,[n("tr",null,[n("th",null,"Props"),n("th",null,"Type"),n("th",null,"Default"),n("th",null,"Beskrivelse")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",null,"icon")]),n("td",null,[n("code",null,"string")]),n("td",null,[n("code",null,"''")]),n("td",null,[s(" Se standard ikone hos "),n("a",{href:"https://designsystem.dk/design/ikoner/",target:"dkfds"}," DKFDS ")])]),n("tr",null,[n("td",null,[n("code",null,"href")]),n("td",null,[n("code",null,"string")]),n("td",null,[n("code")]),n("td",null,"Standard a tag")])])],-1),C=n("table",{class:"table table--compact"},[n("thead",null,[n("tr",null,[n("th",null,"Slots"),n("th",null,"Default"),n("th",null,"Beskrivelse")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",null,"header")]),n("td",null,[n("code",null,"props.header")]),n("td")])])],-1),E=m({__name:"FunktionslinkExample",setup(x){const i=h(0),r=()=>{i.value+=1},c=`
<fds-funktionslink title="Klik for event" @click="handleFunkClick">
  Funktionslink
</fds-funktionslink>
`,f=`
<fds-funktionslink
  @click="$router.push({ name: 'about' })"
  icon="contact-support"
  title="Klik for at g\xE5 til om os"
>
  Funktionslink med ikon - Om os
</fds-funktionslink>

// Eller

<fds-funktionslink
  href="/forside"
  icon="contact-support"
  title="Klik for at g\xE5 til om os"
>
  Funktionslink med ikon - Om os
</fds-funktionslink>
`;return(p,u)=>{const d=e("fds-funktionslink"),_=e("fds-pre"),o=e("fds-preview-item"),a=e("fds-preview-code"),k=e("fds-preview");return v(),b("section",null,[t(k,{header:"Eksempel",href:"https://designsystem.dk/komponenter/funktionslink/"},{default:l(()=>[t(o,null,{default:l(()=>[t(d,{title:"Klik for event",onClick:r},{default:l(()=>[s(" Funktionslink ")]),_:1}),t(_,{header:"Klik",json:{funktionsLinkClick:i.value}},null,8,["json"])]),_:1}),t(a,null,{default:l(()=>[n("pre",{textContent:c})]),_:1}),t(o,null,{default:l(()=>[g,C]),_:1})]),_:1}),t(k,{header:"Med ikon og Som link"},{default:l(()=>[t(o,null,{default:l(()=>[t(d,{icon:"contact-support",title:"Klik for at g\xE5 til om os",onClick:u[0]||(u[0]=F=>p.$router.push({name:"about"}))},{default:l(()=>[s(" Funktionslink med ikon - Om os ")]),_:1})]),_:1}),t(a,null,{default:l(()=>[n("pre",{textContent:f})]),_:1})]),_:1})])}}});export{E as default};
