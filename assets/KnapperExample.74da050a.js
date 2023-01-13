import{e as k,o as m,c as v,b as t,w as n,a as e,d as a,j as u,M as f,t as E,r}from"./index.2aa85a96.js";const b=e("hr",{class:"my-6"},null,-1),V=k({__name:"KnapperExample",setup(y){const o=()=>window.confirm("KLIK"),p=`
<fds-button @click="klikEvent"> G\xE5 til n\xE6ste </fds-button>

<fds-button variant="secondary" @click="klikEvent"> Variant secondary </fds-button>

<fds-button :variant="FdsVariantEnum.tertiary" @click="klikEvent">
  Variant {{ FdsVariantEnum.tertiary }}
</fds-button>
`,_=`
<fds-button-icon @click="klikEvent" icon="refresh" variant="primary">
  Genopfrisk
</fds-button-icon>

<fds-button-icon @click="klikEvent" icon="coronavirus" right variant="primary">
  Corona Virus
</fds-button-icon>
`;return(h,C)=>{const i=r("fds-button"),s=r("fds-preview-item"),c=r("fds-preview-code"),l=r("fds-preview"),d=r("fds-button-icon");return m(),v("section",null,[t(l,{header:"Eksempel",href:"https://designsystem.dk/komponenter/knapper/"},{default:n(()=>[t(s,null,{default:n(()=>[e("p",null,[t(i,{onClick:o},{default:n(()=>[a(" G\xE5 til n\xE6ste ")]),_:1})]),e("p",null,[t(i,{variant:"secondary",onClick:o},{default:n(()=>[a(" Variant secondary ")]),_:1})]),e("p",null,[t(i,{variant:u(f).tertiary,onClick:o},{default:n(()=>[a(" Variant "+E(u(f).tertiary),1)]),_:1},8,["variant"])])]),_:1}),t(c,null,{default:n(()=>[e("pre",{textContent:p})]),_:1})]),_:1}),b,t(l,{header:"Eksempel med ikon"},{default:n(()=>[t(s,null,{default:n(()=>[e("p",null,[t(d,{icon:"refresh",variant:"primary",onClick:o},{default:n(()=>[a(" Genopfrisk ")]),_:1})]),e("p",null,[t(d,{icon:"coronavirus",right:"",variant:"primary",onClick:o},{default:n(()=>[a(" Corona Virus ")]),_:1})])]),_:1}),t(c,null,{default:n(()=>[e("pre",{textContent:_})]),_:1})]),_:1})])}}});export{V as default};
