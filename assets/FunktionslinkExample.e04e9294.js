import{e as m,f as h,o as v,c as b,b as t,w as e,d as s,a as n,j as g,u as C,r as l}from"./index.69a80062.js";const x=n("table",{class:"table table--compact"},[n("thead",null,[n("tr",null,[n("th",null,"Props"),n("th",null,"Type"),n("th",null,"Default"),n("th",null,"Beskrivelse")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",null,"icon")]),n("td",null,[n("code",null,"string")]),n("td",null,[n("code",null,"''")]),n("td",null,[s(" Se standard ikone hos "),n("a",{href:"https://designsystem.dk/design/ikoner/",target:"dkfds"}," DKFDS ")])]),n("tr",null,[n("td",null,[n("code",null,"href")]),n("td",null,[n("code",null,"string")]),n("td",null,[n("code")]),n("td",null,"Standard a tag")])])],-1),F=n("table",{class:"table table--compact"},[n("thead",null,[n("tr",null,[n("th",null,"Slots"),n("th",null,"Default"),n("th",null,"Beskrivelse")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",null,"header")]),n("td",null,[n("code",null,"props.header")]),n("td")])])],-1),B=m({__name:"FunktionslinkExample",setup(w){const r=C(),i=h(0),c=()=>{i.value+=1},f=`
<fds-funktionslink title="Klik for event" @click="handleFunkClick">
  Funktionslink
</fds-funktionslink>
`,p=`
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
`;return(E,u)=>{const d=l("fds-funktionslink"),_=l("fds-pre"),o=l("fds-preview-item"),a=l("fds-preview-code"),k=l("fds-preview");return v(),b("section",null,[t(k,{header:"Eksempel",href:"https://designsystem.dk/komponenter/funktionslink/"},{default:e(()=>[t(o,null,{default:e(()=>[t(d,{title:"Klik for event",onClick:c},{default:e(()=>[s(" Funktionslink ")]),_:1}),t(_,{header:"Klik",json:{funktionsLinkClick:i.value}},null,8,["json"])]),_:1}),t(a,null,{default:e(()=>[n("pre",{textContent:f})]),_:1}),t(o,null,{default:e(()=>[x,F]),_:1})]),_:1}),t(k,{header:"Med ikon og Som link"},{default:e(()=>[t(o,null,{default:e(()=>[t(d,{icon:"contact-support",title:"Klik for at g\xE5 til om os",onClick:u[0]||(u[0]=K=>g(r).push({name:"about"}))},{default:e(()=>[s(" Funktionslink med ikon - Om os ")]),_:1})]),_:1}),t(a,null,{default:e(()=>[n("pre",{textContent:p})]),_:1})]),_:1})])}}});export{B as default};
