import{e as c,f as v,o as g,c as _,b as l,w as d,j as x,J as b,a as e,d as k,r as a}from"./index.c3cdafea.js";const h=e("table",{class:"table table--compact"},[e("thead",null,[e("tr",null,[e("th",null,"Props"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Beskrivelse")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"variant")]),e("td",null,[e("code",null,"'primary' | 'secondary' | 'tertiary' | 'quaternary'")]),e("td",null,[e("code",null,"secondary")]),e("td")]),e("tr",null,[e("td",null,[e("code",null,"showSpinner")]),e("td",null,[e("code",null,"boolean")]),e("td",null,[e("code",null,"false")]),e("td")]),e("tr",null,[e("td",null,[e("code",null,"spinnerText")]),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"null")]),e("td",null,"Spinner tekst - erstatter alm tekst")]),e("tr",null,[e("td",null,[e("code",null,"icon")]),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"null")]),e("td",null,[k(" Se standard ikone hos "),e("a",{href:"https://designsystem.dk/design/ikoner/",target:"dkfds"}," DKFDS ")])]),e("tr",null,[e("td",null,[e("code",null,"useoverlay")]),e("td",null,[e("code",null,"boolean")]),e("td",null,[e("code",null,"false")]),e("td",null,"Tilf\xF8jer overlay n\xE5r showSpinner, ikke muligt at klikke andre steder imens")])])],-1),L=c({__name:"NummerFelt",props:{test:{type:String,default:"Banana",description:"asdadsads"}},setup(w){const t=v({lager:"",forventetLager:"",pris:""}),s=`
<xfds-form-input-number
  inputClass="input-width-xxs"
  label="Lager antal"
  v-model="lager.lager"
/>

<xfds-validate :modelValue="lager.forventetLager" :validations="[numberMin(2)]">
  <xfds-form-input-number
    label="Forventet lager"
    hint="Angiv gyldig lager antal"
    tooltip="Input tooltip"
    prefix="stk."
    v-model="lager.forventetLager"
  />
</xfds-validate>

<xfds-form-input-number
  inputClass="input-width-xs"
  suffix="kr."
  label="Pris"
  v-model="lager.pris"
/>`;return(y,n)=>{const r=a("xfds-form-input-number"),i=a("xfds-validate"),p=a("fds-pre"),u=a("fds-preview-item"),f=a("fds-preview-code"),m=a("fds-preview");return g(),_("section",null,[l(m,{header:"Nummer felt"},{default:d(()=>[l(u,null,{default:d(()=>[l(r,{modelValue:t.value.lager,"onUpdate:modelValue":n[0]||(n[0]=o=>t.value.lager=o),"input-class":"input-width-xxs",placeholder:"Angiv antal",label:"Lager antal"},null,8,["modelValue"]),l(i,{"model-value":t.value.forventetLager,validations:[x(b)(2)]},{default:d(()=>[l(r,{modelValue:t.value.forventetLager,"onUpdate:modelValue":n[1]||(n[1]=o=>t.value.forventetLager=o),label:"Forventet lager",hint:"Angiv gyldig lager antal",tooltip:"Input tooltip",prefix:"stk."},null,8,["modelValue"])]),_:1},8,["model-value","validations"]),l(r,{modelValue:t.value.pris,"onUpdate:modelValue":n[2]||(n[2]=o=>t.value.pris=o),"input-class":"input-width-xs",suffix:"kr.",label:"Pris"},null,8,["modelValue"]),l(p,{header:"Object data",json:t.value},null,8,["json"])]),_:1}),l(f,null,{default:d(()=>[e("pre",{textContent:s})]),_:1}),l(u,null,{default:d(()=>[h]),_:1})]),_:1})])}}});export{L as default};
