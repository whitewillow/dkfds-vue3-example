"use strict";(self["webpackChunkexample"]=self["webpackChunkexample"]||[]).push([[3839],{6921:function(n,e,l){l.r(e),l.d(e,{default:function(){return x}});var t=l(3396),r=l(4870);const a=(0,t.Uk)(" Send "),u=(0,t._)("hr",null,null,-1),d=(0,t._)("p",{class:"italic"},[(0,t.Uk)(" Komponenten "),(0,t._)("code",null,"xfds-button-spinner"),(0,t.Uk)(" viser en loader ved aktiv tilstand ")],-1),s=(0,t._)("p",{class:"italic"},[(0,t.Uk)(" Det er muligt at inkludere et overlay "),(0,t._)("code",null,"useoverlay"),(0,t.Uk)(" der forhinde tryk på andre elementer ")],-1),i=(0,t._)("table",{class:"table table--compact"},[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"Props"),(0,t._)("th",null,"Type"),(0,t._)("th",null,"Default"),(0,t._)("th",null,"Beskrivelse")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"variant")]),(0,t._)("td",null,[(0,t._)("code",null,"'primary' | 'secondary' | 'tertiary' | 'quaternary'")]),(0,t._)("td",null,[(0,t._)("code",null,"secondary")]),(0,t._)("td")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"showSpinner")]),(0,t._)("td",null,[(0,t._)("code",null,"boolean")]),(0,t._)("td",null,[(0,t._)("code",null,"false")]),(0,t._)("td")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"spinnerText")]),(0,t._)("td",null,[(0,t._)("code",null,"string")]),(0,t._)("td",null,[(0,t._)("code",null,"null")]),(0,t._)("td",null,"Spinner tekst - erstatter alm tekst")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"icon")]),(0,t._)("td",null,[(0,t._)("code",null,"string")]),(0,t._)("td",null,[(0,t._)("code",null,"null")]),(0,t._)("td",null,[(0,t.Uk)(" Se standard ikone hos "),(0,t._)("a",{href:"https://designsystem.dk/design/ikoner/",target:"dkfds"},"DKFDS")])]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"disabled")]),(0,t._)("td",null,[(0,t._)("code",null,"boolean")]),(0,t._)("td",null,[(0,t._)("code",null,"false")]),(0,t._)("td")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"useoverlay")]),(0,t._)("td",null,[(0,t._)("code",null,"boolean")]),(0,t._)("td",null,[(0,t._)("code",null,"false")]),(0,t._)("td",null,"Tilføjer overlay når showSpinner, ikke muligt at klikke andre steder imens")])])],-1),o=(0,t._)("hr",{class:"my-6"},null,-1),_={class:"row"},c={class:"col"},p=(0,t.Uk)(" Søg "),f=(0,t.Uk)(" Søg "),k=(0,t.Uk)(" Søg "),m={class:"row"},h={class:"col mt-4"},v=(0,t.Uk)(" Søg "),w=(0,t.Uk)(" Søg "),S=(0,t.Uk)(" Søg ");var y=(0,t.aZ)({__name:"KnapSpinner",setup(n){const e=(0,r.iH)(!1),l=()=>{e.value=!0,setTimeout((()=>{e.value=!1}),2e3)},y='\n<xfds-button-spinner\n  @click="handleButtonEvent"\n  icon="send"\n  variant="secondary"\n  spinnerText="Sender"\n  :showSpinner="showSpinner"\n>\n  Send\n</xfds-button-spinner>\n  ';return(n,r)=>{const g=(0,t.up)("xfds-button-spinner"),x=(0,t.up)("fds-preview-item"),b=(0,t.up)("fds-preview-code"),W=(0,t.up)("fds-preview");return(0,t.wg)(),(0,t.iD)("section",null,[(0,t.Wm)(W,{header:"Eksempel"},{default:(0,t.w5)((()=>[(0,t.Wm)(x,null,{default:(0,t.w5)((()=>[(0,t.Wm)(g,{onClick:l,icon:"send",variant:"secondary",spinnerText:"Sender",showSpinner:e.value,useoverlay:""},{default:(0,t.w5)((()=>[a])),_:1},8,["showSpinner"])])),_:1}),u,(0,t.Wm)(x,null,{default:(0,t.w5)((()=>[d,s])),_:1}),(0,t.Wm)(b,null,{default:(0,t.w5)((()=>[(0,t._)("pre",{textContent:y})])),_:1}),(0,t.Wm)(x,null,{default:(0,t.w5)((()=>[i])),_:1})])),_:1}),o,(0,t.Wm)(W,{header:"Varianter"},{default:(0,t.w5)((()=>[(0,t.Wm)(x,null,{default:(0,t.w5)((()=>[(0,t._)("div",_,[(0,t._)("div",c,[(0,t.Wm)(g,{icon:"search",variant:"primary",spinnerText:"Søger"},{default:(0,t.w5)((()=>[p])),_:1}),(0,t.Wm)(g,{icon:"search",variant:"secondary",spinnerText:"Søger"},{default:(0,t.w5)((()=>[f])),_:1}),(0,t.Wm)(g,{icon:"search",variant:"tertiary",spinnerText:"Søger"},{default:(0,t.w5)((()=>[k])),_:1})])]),(0,t._)("div",m,[(0,t._)("div",h,[(0,t.Wm)(g,{icon:"search",variant:"primary",showSpinner:!0,spinnerText:"...Søger"},{default:(0,t.w5)((()=>[v])),_:1}),(0,t.Wm)(g,{icon:"search",variant:"secondary",showSpinner:!0,spinnerText:"...Søger"},{default:(0,t.w5)((()=>[w])),_:1}),(0,t.Wm)(g,{icon:"search",variant:"tertiary",showSpinner:!0,spinnerText:"...Søger"},{default:(0,t.w5)((()=>[S])),_:1})])])])),_:1})])),_:1})])}}});const g=y;var x=g}}]);
//# sourceMappingURL=view-KnapSpinner.43e7f64e.js.map