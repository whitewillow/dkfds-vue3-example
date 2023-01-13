import{e as k,f,o as g,c as C,b as e,w as n,d as l,a as _,v,r as o}from"./index.2aa85a96.js";const K=k({__name:"TagsExample",setup(w){const a=f(0),c=f(0),r=()=>{a.value+=1},p=()=>{c.value+=1},u=`
<fds-tag>Bornholm</fds-tag>
`,h=`
<fds-tag icon="highlight-off" @click.self="handleKnapClick" @iconClick="handleIconClick">
  Bornholm
</fds-tag>
`;return(x,B)=>{const t=o("fds-tag"),s=o("fds-preview-item"),d=o("fds-preview-code"),i=o("fds-preview"),m=o("fds-pre");return g(),C("section",null,[e(i,{header:"Eksempel",href:"https://designsystem.dk/komponenter/tags/"},{default:n(()=>[e(s,null,{default:n(()=>[e(t,null,{default:n(()=>[l("Bornholm")]),_:1}),e(t,{icon:"highlight-off"},{default:n(()=>[l(" Sj\xE6lland ")]),_:1}),e(t,null,{default:n(()=>[l("Fyn")]),_:1}),e(t,null,{default:n(()=>[l("Jylland")]),_:1})]),_:1}),e(d,null,{default:n(()=>[_("pre",{textContent:u})]),_:1})]),_:1}),e(i,{header:"Tag med icon"},{default:n(()=>[e(s,null,{default:n(()=>[e(t,{icon:"highlight-off",onClick:v(p,["self"]),onIconClick:r},{default:n(()=>[l(" Bornholm ")]),_:1},8,["onClick"]),e(m,{header:"Klik event",json:{antalIconClick:a.value,antalKnapClick:c.value}},null,8,["json"])]),_:1}),e(d,null,{default:n(()=>[_("pre",{textContent:h})]),_:1})]),_:1})])}}});export{K as default};
