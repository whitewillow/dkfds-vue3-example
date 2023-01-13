import{e as x,f as _,o as k,c as C,b as e,w as t,a as s,d as i,r as l}from"./index.59297fa2.js";const E={class:"row"},g={class:"col-4"},B={class:"col"},w={class:"row"},N={class:"col-4"},h={class:"col"},V=x({__name:"VenstremenuExample",setup($){const u=_(""),r=`
<fds-menu>
  <fds-menu-item icon="done" id="alpha" @navigate="idClickedExample = $event">
    Alpha
  </fds-menu-item>
  <fds-menu-item id="beta" @navigate="idClickedExample = $event" active>
    Beta
  </fds-menu-item>
</fds-menu>
`,o=_(""),b=`
<fds-menu>
  <fds-menu-item icon="done" id="alpha" @navigate="submenuClickedExample = $event">
    Alpha
  </fds-menu-item>
  <fds-menu-item id="beta" @navigate="submenuClickedExample = $event" active>
    Beta
    <template #submenu>
      <fds-menu variant="submenu">
        <fds-menu-item id="beta/1" @navigate="submenuClickedExample = $event">
          Beta - En
        </fds-menu-item>
        <fds-menu-item id="beta/2" @navigate="submenuClickedExample = $event" active>
          Beta - To
        </fds-menu-item>
      </fds-menu>
    </template>
  </fds-menu-item>
</fds-menu>
`;return(j,n)=>{const d=l("fds-menu-item"),m=l("fds-menu"),f=l("fds-pre"),p=l("fds-preview-item"),v=l("fds-preview-code"),c=l("fds-preview");return k(),C("section",null,[e(c,{header:"Eksempel",href:"https://designsystem.dk/komponenter/venstremenu/"},{default:t(()=>[e(p,null,{default:t(()=>[s("div",E,[s("div",g,[e(m,null,{default:t(()=>[e(d,{id:"alpha",icon:"done",onNavigate:n[0]||(n[0]=a=>u.value=a)},{default:t(()=>[i(" Alpha ")]),_:1}),e(d,{id:"beta",active:"",onNavigate:n[1]||(n[1]=a=>u.value=a)},{default:t(()=>[i(" Beta ")]),_:1})]),_:1})]),s("div",B,[e(f,{json:{idClickedExample:u.value}},null,8,["json"])])])]),_:1}),e(v,null,{default:t(()=>[s("pre",{textContent:r})]),_:1})]),_:1}),e(c,{header:"Submenu"},{default:t(()=>[e(p,null,{default:t(()=>[s("div",w,[s("div",N,[e(m,null,{default:t(()=>[e(d,{id:"alpha",icon:"done",onNavigate:n[2]||(n[2]=a=>o.value=a)},{default:t(()=>[i(" Alpha ")]),_:1}),e(d,{id:"beta",active:"",onNavigate:n[5]||(n[5]=a=>o.value=a)},{submenu:t(()=>[e(m,{variant:"submenu"},{default:t(()=>[e(d,{id:"beta/1",onNavigate:n[3]||(n[3]=a=>o.value=a)},{default:t(()=>[i(" Beta - En ")]),_:1}),e(d,{id:"beta/2",active:"",onNavigate:n[4]||(n[4]=a=>o.value=a)},{default:t(()=>[i(" Beta - To ")]),_:1})]),_:1})]),default:t(()=>[i(" Beta ")]),_:1})]),_:1})]),s("div",h,[e(f,{json:{submenuClickedExample:o.value}},null,8,["json"])])])]),_:1}),e(v,null,{default:t(()=>[s("pre",{textContent:b})]),_:1})]),_:1})])}}});export{V as default};
