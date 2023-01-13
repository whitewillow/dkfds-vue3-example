import{e as f,o as p,c as d,b as o,w as l,a as e,r as t}from"./index.2aa85a96.js";const c=e("ul",{class:"overflow-list"},[e("li",null,[e("button",null,"Option 1")]),e("li",null,[e("button",null,"Option 2")]),e("li",null,[e("a",{href:"#"}," Option 3 as link ")]),e("li",null,[e("button",null,"Option 4 is longer text")])],-1),_=e("ul",{class:"overflow-list"},[e("li",null,[e("button",null,"Option 1")]),e("li",null,[e("button",null,"Option 2")]),e("li",null,[e("a",{href:"#"}," Option 3 as link ")]),e("li",null,[e("button",null,"Option 4 is longer text")])],-1),b=f({__name:"OverflowExample",setup(m){const r=`
<fds-overflow-menu
  header="Overflow menu eks">
  <ul class="overflow-list">
    <li><button>Option 1</button></li>
    <li><button>Option 2</button></li>
    <li><a href="#">
      Option 3 as link
    </a></li>
    <li><button>Option 4 is longer text</button></li>
  </ul>
</fds-overflow-menu>
`,a=`
<fds-overflow-menu
  header="Overflow menu eks"
  class="overflow-menu--open-left"
  icon="arrow-drop-down"
>
  <ul class="overflow-list">
    <li><button>Option 1</button></li>
    <li><button>Option 2</button></li>
    <li><a href="#"> Option 3 as link </a></li>
    <li><button>Option 4 is longer text</button></li>
  </ul>
</fds-overflow-menu>
`;return(w,v)=>{const n=t("fds-overflow-menu"),i=t("fds-preview-item"),s=t("fds-preview-code"),u=t("fds-preview");return p(),d("section",null,[o(u,{header:"Eksempel",href:"https://designsystem.dk/komponenter/overflowmenu/"},{default:l(()=>[o(i,null,{default:l(()=>[o(n,{header:"Overflow menu"},{default:l(()=>[c]),_:1})]),_:1}),o(s,null,{default:l(()=>[e("pre",{textContent:r})]),_:1})]),_:1}),o(u,{header:"Eksempel m. ikon og venstre stillet"},{default:l(()=>[o(i,null,{default:l(()=>[o(n,{header:"Overflow menu eks",class:"overflow-menu--open-left",icon:"arrow-drop-down"},{default:l(()=>[_]),_:1})]),_:1}),o(s,null,{default:l(()=>[e("pre",{textContent:a})]),_:1})]),_:1})])}}});export{b as default};
