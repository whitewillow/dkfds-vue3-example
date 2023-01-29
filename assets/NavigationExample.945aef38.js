import{e as m,o as u,c as _,b as n,w as t,a as e,d as i,r as o}from"./index.9ab9e984.js";const v=e("p",null,"Nedest\xE5ende er et eksempel navigation med standard komponenter og med overflow.",-1),p={class:"navbar navbar-primary"},h={class:"navbar-inner container"},k={class:"nav-primary",role:"menu"},g={role:"none"},w={class:"current"},b=e("ul",{class:"overflow-list"},[e("li",{class:"active"},[e("a",{href:"#"}," Subsektion med en meget lang titel som g\xE5r i flere linier ")]),e("li",null,[e("a",{href:"#"}," Subsektion title ")]),e("li",null,[e("a",{href:"#"}," Subsektion title ")]),e("li",null,[e("a",{href:"#"}," Subsektion title som ogs\xE5 er forholdsvis lang ")])],-1),N=m({__name:"NavigationExample",setup(x){const s=`
import { navigation } from 'dkfds-vue3/utils';

// S\xF8rger for at "burger menu" virker
new navigation().init();


<div class="navbar navbar-primary">
<div class="navbar-inner container">
  <ul class="nav-primary" role="menu">
    <li role="none">
      <fds-nav-link href="/forside" title="Link title"> Forside </fds-nav-link>
    </li>
    <li class="current">
      <fds-overflow-menu header="Overflow menu eks">
        <ul class="overflow-list">
          <li class="active">
            <a href="#"> Subsektion med en meget lang titel som g\xE5r i flere linier </a>
          </li>
          <li>
            <a href="#"> Subsektion title </a>
          </li>
          <li>
            <a href="#"> Subsektion title </a>
          </li>
          <li>
            <a href="#"> Subsektion title som ogs\xE5 er forholdsvis lang </a>
          </li>
        </ul>
      </fds-overflow-menu>
    </li>
  </ul>
</div>
`;return(E,S)=>{const l=o("router-link"),a=o("fds-nav-link"),r=o("fds-overflow-menu"),d=o("fds-preview-item"),c=o("fds-preview-code"),f=o("fds-preview");return u(),_("section",null,[n(f,{header:"Eksempel",href:"https://designsystem.dk/komponenter/header/#standard-header-med-navigation"},{default:t(()=>[n(d,null,{default:t(()=>[v,e("p",null,[i(" Se ogs\xE5 "),n(l,{to:{name:"anbefalingernavigation"}},{default:t(()=>[i("Eksempel p\xE5 navigation med vue router")]),_:1})]),e("div",p,[e("div",h,[e("ul",k,[e("li",g,[n(a,{href:"/forside",title:"Link title"},{default:t(()=>[i(" Forside ")]),_:1})]),e("li",w,[n(r,{header:"Overflow menu eks"},{default:t(()=>[b]),_:1})])])])])]),_:1}),n(c,null,{default:t(()=>[e("pre",{textContent:s})]),_:1})]),_:1})])}}});export{N as default};
