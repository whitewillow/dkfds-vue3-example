import{e as C,f as c,o as I,c as U,b as e,w as t,d,a as l,r as o}from"./index.c3cdafea.js";const P=l("b",null,"tekst",-1),H=l("table",{class:"table table--compact"},[l("thead",null,[l("tr",null,[l("th",null,"Props"),l("th",null,"Type"),l("th",null,"Default"),l("th",null,"Beskrivelse")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"id")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"null (autoid)")]),l("td",null,"Lytter efter injected formid")]),l("tr",null,[l("td",null,[l("code",null,"v-model")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"''")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"placeholder")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"'text'")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"prefix")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"null")]),l("td",null,"Indikator/tydeligg\xF8relse af data i starten - eg. stk, kr, m.m.")]),l("tr",null,[l("td",null,[l("code",null,"suffix")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"null")]),l("td",null,"Indikator/tydeligg\xF8relse af data i enden - eg. stk, kr, m.m.")]),l("tr",null,[l("td",null,[l("code",null,"readonly")]),l("td",null,[l("code",null,"boolean")]),l("td",null,[l("code",null,"false")]),l("td")])])],-1),N=l("table",{class:"table table--compact"},[l("thead",null,[l("tr",null,[l("th",null,"Events"),l("th",null,"Beskrivelse")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"@dirty")]),l("td",null,"Om input feltet er blevet ber\xF8rt")])])],-1),T=l("b",null,"tekst",-1),K=l("b",null,"tekst",-1),L=l("button",{class:"button button-search"},[l("svg",{class:"icon-svg m-0","aria-hidden":"true"},[l("use",{"xlink:href":"#search"})]),l("span",{class:"sr-only"}," S\xF8g ")],-1),M=l("button",{class:"button button-search"}," S\xF8g ",-1),R=C({__name:"InputFeltExample",setup(A){const i=c("Anders"),_=c(""),g=c(""),V=c(""),x=c(""),b=c(0),S=`
<fds-input v-model="txtFornavn" />
`,y=`
<fds-formgroup>
  <fds-label> Efternavn </fds-label>
  <fds-tooltip class="ml-2"> Hj\xE6lpende <b>tekst</b> </fds-tooltip>
  <fds-hint>Indtast fornavn</fds-hint>
  <fds-input v-model="txtEfternavn"></fds-input>
  <fds-input-limit :modelValue="txtEfternavn" :limit="20" />
</fds-formgroup>
`,k=`
<fds-input v-model="txtPre" prefix="prefix" id="prefix"></fds-input>

<fds-input v-model="txtSuffix" suffix="suffix" id="txtSuffix"></fds-input>

`,E=`
<fds-input v-model="txtSearch" placeholder="S\xF8g efter..." id="search">
  <template #button>
    <button class="button button-search">
      <svg class="icon-svg m-0" aria-hidden="true">
        <use xlink:href="#search"></use></svg
      ><span class="sr-only"> S\xF8g </span>
    </button>
  </template>
</fds-input>

<fds-input v-model="txtSearch" placeholder="S\xF8g efter..." id="searchbtn">
  <template #button>
    <button class="button button-search">S\xF8g</button>
  </template>
</fds-input>
`,j=`
<fds-formgroup>
 ...
 <fds-input
  v-model="txtFornavn"
  readonly />
</fds-formgroup>`;return(D,n)=>{const a=o("fds-label"),h=o("fds-tooltip"),F=o("fds-hint"),f=o("fds-input"),s=o("fds-formgroup"),v=o("fds-pre"),r=o("fds-preview-item"),p=o("fds-preview-code"),m=o("fds-preview"),B=o("fds-input-limit"),w=o("fds-input-number");return I(),U("section",null,[e(m,{header:"Tekstfelt",href:"https://designsystem.dk/komponenter/inputfelter/"},{default:t(()=>[e(r,null,{default:t(()=>[e(s,null,{default:t(()=>[e(a,null,{default:t(()=>[d(" Fornavn ")]),_:1}),e(h,{class:"ml-2"},{default:t(()=>[d(" Hj\xE6lpende "),P]),_:1}),e(F,null,{default:t(()=>[d("Indtast fornavn")]),_:1}),e(f,{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=u=>i.value=u)},null,8,["modelValue"])]),_:1}),e(v,{header:"v-model",json:{txtFornavn:i.value}},null,8,["json"])]),_:1}),e(p,null,{default:t(()=>[l("pre",{textContent:S})]),_:1}),e(r,null,{default:t(()=>[H,N]),_:1})]),_:1}),e(m,{header:"Karakterbegr\xE6nsning"},{default:t(()=>[e(r,null,{default:t(()=>[e(s,null,{default:t(()=>[e(a,null,{default:t(()=>[d(" Efternavn ")]),_:1}),e(h,{class:"ml-2"},{default:t(()=>[d(" Hj\xE6lpende "),T]),_:1}),e(F,null,{default:t(()=>[d("Indtast fornavn")]),_:1}),e(f,{modelValue:_.value,"onUpdate:modelValue":n[1]||(n[1]=u=>_.value=u)},null,8,["modelValue"]),e(B,{"model-value":_.value,limit:20},null,8,["model-value"])]),_:1}),e(v,{header:"v-model",json:{txtEfternavn:_.value}},null,8,["json"])]),_:1}),e(p,null,{default:t(()=>[l("pre",{textContent:y})]),_:1})]),_:1}),e(m,{header:"Prefix og Suffix"},{default:t(()=>[e(r,null,{default:t(()=>[e(s,null,{default:t(()=>[e(a,{id:"prefix"},{default:t(()=>[d(" Med prefix ")]),_:1}),e(f,{id:"prefix",modelValue:g.value,"onUpdate:modelValue":n[2]||(n[2]=u=>g.value=u),prefix:"prefix"},null,8,["modelValue"])]),_:1}),e(s,null,{default:t(()=>[e(a,{id:"txtSuffix"},{default:t(()=>[d(" Med suffix ")]),_:1}),e(f,{id:"txtSuffix",modelValue:V.value,"onUpdate:modelValue":n[3]||(n[3]=u=>V.value=u),suffix:"suffix"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,null,{default:t(()=>[l("pre",{textContent:k})]),_:1})]),_:1}),e(m,{header:"Nummer tekstfelt"},{default:t(()=>[e(r,null,{default:t(()=>[e(s,null,{default:t(()=>[e(a,{id:"noBeloeb"},{default:t(()=>[d(" Tal/Bel\xF8b ")]),_:1}),e(w,{id:"noBeloeb",modelValue:b.value,"onUpdate:modelValue":n[4]||(n[4]=u=>b.value=u),"input-class":"input-width-xs",suffix:"kr."},null,8,["modelValue"])]),_:1}),e(v,{header:"v-model",json:{noBeloeb:b.value}},null,8,["json"])]),_:1}),e(p,null,{default:t(()=>[l("pre",{textContent:k})]),_:1})]),_:1}),e(m,{header:"Readonly"},{default:t(()=>[e(r,null,{default:t(()=>[e(s,null,{default:t(()=>[e(a,null,{default:t(()=>[d(" Fornavn ")]),_:1}),e(h,{class:"ml-2"},{default:t(()=>[d(" Hj\xE6lpende "),K]),_:1}),e(f,{modelValue:i.value,"onUpdate:modelValue":n[5]||(n[5]=u=>i.value=u),readonly:""},null,8,["modelValue"])]),_:1}),e(v,{header:"v-model",json:{txtFornavn:i.value}},null,8,["json"])]),_:1}),e(p,null,{default:t(()=>[l("pre",{textContent:j})]),_:1})]),_:1}),e(m,{header:"S\xF8g knap"},{default:t(()=>[e(r,null,{default:t(()=>[e(s,null,{default:t(()=>[e(a,{id:"searchtxt"},{default:t(()=>[d(" Input med knap ikon ")]),_:1}),e(f,{id:"searchtxt",modelValue:x.value,"onUpdate:modelValue":n[6]||(n[6]=u=>x.value=u),placeholder:"S\xF8g efter..."},{button:t(()=>[L]),_:1},8,["modelValue"])]),_:1}),e(s,null,{default:t(()=>[e(a,{id:"searchbtn"},{default:t(()=>[d(" Input med knap tekst ")]),_:1}),e(f,{id:"searchbtn",modelValue:x.value,"onUpdate:modelValue":n[7]||(n[7]=u=>x.value=u),placeholder:"S\xF8g efter..."},{button:t(()=>[M]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(p,null,{default:t(()=>[l("pre",{textContent:E})]),_:1})]),_:1})])}}});export{R as default};
