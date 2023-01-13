import{e as b,f as x,o as k,c as g,b as t,w as l,d as s,a as e,r as n}from"./index.2aa85a96.js";const j=e("b",null,"tekst",-1),w=e("table",{class:"table table--compact"},[e("thead",null,[e("tr",null,[e("th",null,"Inject"),e("th",null,"Type"),e("th",null,"Beskrivelse")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"provideErrorMessage")]),e("td",null,[e("code",null,"string")]),e("td",null,"lytter efter provideErrorMessage og s\xE6ttes som default indhold i slot")])])],-1),F=b({__name:"FejlmeddelelserExample",setup(E){const o=x(""),f=`
<fds-formgroup  :is-valid="false">
  <fds-label> Fornavn </fds-label>
  <fds-tooltip class="ml-2">
    Hj\xE6lpende <b>tekst</b>
  </fds-tooltip>
  <fds-hint>Indtast fornavn</fds-hint>
  <fds-fejlmeddelelse> Giv dit kursus et navn </fds-fejlmeddelelse>
  <fds-input
    v-model="txtFornavn"
    input-type="name"
    autocomplete="name"
  ></fds-input>
</fds-formgroup>
`;return(y,d)=>{const r=n("fds-label"),u=n("fds-tooltip"),p=n("fds-hint"),_=n("fds-fejlmeddelelse"),m=n("fds-input"),c=n("fds-formgroup"),a=n("fds-preview-item"),i=n("fds-preview-code"),v=n("fds-preview");return k(),g("section",null,[t(v,{header:"Eksempel",href:"https://designsystem.dk/komponenter/fejlmeddelelser/"},{default:l(()=>[t(a,null,{default:l(()=>[t(c,{"is-valid":!1},{default:l(()=>[t(r,null,{default:l(()=>[s(" Fornavn ")]),_:1}),t(u,{class:"ml-2"},{default:l(()=>[s(" Hj\xE6lpende "),j]),_:1}),t(p,null,{default:l(()=>[s("Indtast fornavn")]),_:1}),t(_,null,{default:l(()=>[s(" Giv dit kursus et navn ")]),_:1}),t(m,{modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=h=>o.value=h),"input-type":"name",autocomplete:"name"},null,8,["modelValue"])]),_:1})]),_:1}),t(i,null,{default:l(()=>[e("pre",{textContent:f})]),_:1}),t(a,null,{default:l(()=>[w]),_:1})]),_:1})])}}});export{F as default};
