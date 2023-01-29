import{e as b,f as c,o as x,c as N,b as n,w as t,d as u,t as w,a as l,r as e}from"./index.c3cdafea.js";const E=l("table",{class:"table table--compact"},[l("thead",null,[l("tr",null,[l("th",null,"Props (Group)"),l("th",null,"Type"),l("th",null,"Default"),l("th",null,"Beskrivelse")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"header")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"Trin")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"id")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"auto")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"icon")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"arrow-drop-down")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"size")]),l("td",null,[l("code",null,"'small' | 'large'")]),l("td",null,[l("code",null,"small")]),l("td",null,"large = fuld bredde, men small ved responsive")])])],-1),I=l("table",{class:"table table--compact"},[l("thead",null,[l("tr",null,[l("th",null,"Props (Item)"),l("th",null,"Type"),l("th",null,"Default"),l("th",null,"Beskrivelse")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"id")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"required")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"icon")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"null")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"hint")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"null")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"href")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"null")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"index")]),l("td",null,[l("code",null,"Number")]),l("td",null,[l("code",null,"null")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"active")]),l("td",null,[l("code",null,"Boolean")]),l("td",null,[l("code",null,"false")]),l("td")])])],-1),B=b({__name:"TrinindikatorerExample",setup(T){const r=c(!1),d=c("1"),f=`
<fds-trinindikator-group :size="trinSize ? 'large' : 'small'">
  <template #header> Trin {{ trinNavigationsId }} af 4 </template>
  <fds-trinindikator-item
    id="1"
    :active="trinNavigationsId === '1'"
    icon="done"
    hint="Et hint"
    @navigate="trinNavigationsId = $event"
    :index="1"
  >
    F\xF8rste
  </fds-trinindikator-item>
  <fds-trinindikator-item
    id="2"
    :active="trinNavigationsId === '2'"
    hint="Et hint"
    @navigate="trinNavigationsId = $event"
    :index="2"
  >
    Anden
  </fds-trinindikator-item>
</fds-trinindikator-group>
`;return(y,o)=>{const a=e("fds-trinindikator-item"),p=e("fds-trinindikator-group"),_=e("fds-label"),m=e("fds-checkbox"),v=e("fds-formgroup"),g=e("fds-pre"),s=e("fds-preview-item"),h=e("fds-preview-code"),k=e("fds-preview");return x(),N("section",null,[n(k,{header:"Eksempel",href:"https://designsystem.dk/komponenter/trinindikator/"},{default:t(()=>[n(s,null,{default:t(()=>[n(p,{size:r.value?"large":"small"},{header:t(()=>[u(" Trin "+w(d.value)+" af 4 ",1)]),default:t(()=>[n(a,{id:"1",active:d.value==="1",icon:"done",hint:"Et hint",index:1,onNavigate:o[0]||(o[0]=i=>d.value=i)},{default:t(()=>[u(" F\xF8rste ")]),_:1},8,["active"]),n(a,{id:"2",active:d.value==="2",hint:"Et hint",index:2,onNavigate:o[1]||(o[1]=i=>d.value=i)},{default:t(()=>[u(" Anden ")]),_:1},8,["active"])]),_:1},8,["size"]),n(v,null,{default:t(()=>[n(_,null,{default:t(()=>[u("St\xF8rrelse af trin")]),_:1}),n(m,{modelValue:r.value,"onUpdate:modelValue":o[2]||(o[2]=i=>r.value=i)},{default:t(()=>[u(" Large - fuld bredde n\xE5r der er plads (breakpoint lg)")]),_:1},8,["modelValue"])]),_:1}),n(g,{json:{trinNavigationsId:d.value}},null,8,["json"])]),_:1}),n(h,null,{default:t(()=>[l("pre",{textContent:f})]),_:1}),n(s,null,{default:t(()=>[E,I]),_:1})]),_:1})])}}});export{B as default};
