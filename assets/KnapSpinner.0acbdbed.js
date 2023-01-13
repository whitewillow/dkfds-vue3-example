import{e as p,f as _,o as h,c as f,b as n,w as t,d as l,a as e,r as o}from"./index.2aa85a96.js";const v=e("hr",null,null,-1),x=e("p",{class:"italic"},[l(" Komponenten "),e("code",null,"xfds-button-spinner"),l(" viser en loader ved aktiv tilstand ")],-1),m=e("p",{class:"italic"},[l(" Det er muligt at inkludere et overlay "),e("code",null,"useoverlay"),l(" der forhinde tryk p\xE5 andre elementer ")],-1),S=e("table",{class:"table table--compact"},[e("thead",null,[e("tr",null,[e("th",null,"Props"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Beskrivelse")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"variant")]),e("td",null,[e("code",null,"'primary' | 'secondary' | 'tertiary' | 'quaternary'")]),e("td",null,[e("code",null,"secondary")]),e("td")]),e("tr",null,[e("td",null,[e("code",null,"showSpinner")]),e("td",null,[e("code",null,"boolean")]),e("td",null,[e("code",null,"false")]),e("td")]),e("tr",null,[e("td",null,[e("code",null,"spinnerText")]),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"null")]),e("td",null,"Spinner tekst - erstatter alm tekst")]),e("tr",null,[e("td",null,[e("code",null,"icon")]),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"null")]),e("td",null,[l(" Se standard ikone hos "),e("a",{href:"https://designsystem.dk/design/ikoner/",target:"dkfds"}," DKFDS ")])]),e("tr",null,[e("td",null,[e("code",null,"useoverlay")]),e("td",null,[e("code",null,"boolean")]),e("td",null,[e("code",null,"false")]),e("td",null,"Tilf\xF8jer overlay n\xE5r showSpinner, ikke muligt at klikke andre steder imens")])])],-1),y=e("hr",{class:"my-6"},null,-1),k={class:"row"},w={class:"col"},g={class:"row"},F={class:"col mt-4"},C=p({__name:"KnapSpinner",setup(b){const a=_(!1),i=()=>{a.value=!0,setTimeout(()=>{a.value=!1},2e3)},u=`
<xfds-button-spinner
  @click="handleButtonEvent"
  icon="send"
  variant="secondary"
  spinnerText="Sender"
  :showSpinner="showSpinner"
>
  Send
</xfds-button-spinner>
  `;return(B,E)=>{const s=o("xfds-button-spinner"),r=o("fds-preview-item"),c=o("fds-preview-code"),d=o("fds-preview");return h(),f("section",null,[n(d,{header:"Eksempel"},{default:t(()=>[n(r,null,{default:t(()=>[n(s,{icon:"send",variant:"secondary","spinner-text":"Sender","show-spinner":a.value,useoverlay:"",onClick:i},{default:t(()=>[l(" Send ")]),_:1},8,["show-spinner"])]),_:1}),v,n(r,null,{default:t(()=>[x,m]),_:1}),n(c,null,{default:t(()=>[e("pre",{textContent:u})]),_:1}),n(r,null,{default:t(()=>[S]),_:1})]),_:1}),y,n(d,{header:"Varianter"},{default:t(()=>[n(r,null,{default:t(()=>[e("div",k,[e("div",w,[n(s,{icon:"search",variant:"primary","spinner-text":"S\xF8ger"},{default:t(()=>[l(" S\xF8g ")]),_:1}),n(s,{icon:"search",variant:"secondary","spinner-text":"S\xF8ger"},{default:t(()=>[l(" S\xF8g ")]),_:1}),n(s,{icon:"search",variant:"tertiary","spinner-text":"S\xF8ger"},{default:t(()=>[l(" S\xF8g ")]),_:1})])]),e("div",g,[e("div",F,[n(s,{icon:"search",variant:"primary","show-spinner":!0,"spinner-text":"...S\xF8ger"},{default:t(()=>[l(" S\xF8g ")]),_:1}),n(s,{icon:"search",variant:"secondary","show-spinner":!0,"spinner-text":"...S\xF8ger"},{default:t(()=>[l(" S\xF8g ")]),_:1}),n(s,{icon:"search",variant:"tertiary","show-spinner":!0,"spinner-text":"...S\xF8ger"},{default:t(()=>[l(" S\xF8g ")]),_:1})])])]),_:1})]),_:1})])}}});export{C as default};
