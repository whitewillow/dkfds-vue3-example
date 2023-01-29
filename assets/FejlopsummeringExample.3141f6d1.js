import{e as a,o as c,c as i,b as l,w as t,a as e,r as n}from"./index.9ab9e984.js";const p=e("ul",{class:"alert-text"},[e("li",null,"Egen liste"),e("li",null,"Egen liste")],-1),m=e("table",{class:"table table--compact"},[e("thead",null,[e("tr",null,[e("th",null,"Props"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Beskrivelse")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"header")]),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"'Fejlopsummering'")]),e("td",null,"lytter efter provideErrorMessage og s\xE6ttes som default indhold i slot")])])],-1),_=e("table",{class:"table table--compact"},[e("thead",null,[e("tr",null,[e("th",null,"Slots"),e("th",null,"Default"),e("th",null,"Beskrivelse")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"header")]),e("td",null,[e("code",null,"props.header")]),e("td")])])],-1),b=a({__name:"FejlopsummeringExample",setup(f){const o=`
<fds-fejlopsummering header="Fejl">
  <ul class="alert-text">
    <li>Egen liste</li>
    <li>Egen liste</li>
  </ul>
</fds-fejlopsummering>
`;return(h,g)=>{const u=n("fds-fejlopsummering"),s=n("fds-preview-item"),d=n("fds-preview-code"),r=n("fds-preview");return c(),i("section",null,[l(r,{header:"Eksempel",href:"https://designsystem.dk/komponenter/fejlopsummering/"},{default:t(()=>[l(s,null,{default:t(()=>[l(u,{header:"Fejl"},{default:t(()=>[p]),_:1})]),_:1}),l(d,null,{default:t(()=>[e("pre",{textContent:o})]),_:1}),l(s,null,{default:t(()=>[m,_]),_:1})]),_:1})])}}});export{b as default};
