import{e as w,f as i,o as I,c as C,b as l,w as t,d as u,a as e,r as o}from"./index.2aa85a96.js";const U=e("b",null,"tekst",-1),P=e("table",{class:"table table--compact"},[e("thead",null,[e("tr",null,[e("th",null,"Props"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Beskrivelse")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"id")]),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"null (autoid)")]),e("td",null,"Lytter efter injected formid")]),e("tr",null,[e("td",null,[e("code",null,"v-model")]),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"''")]),e("td")]),e("tr",null,[e("td",null,[e("code",null,"placeholder")]),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"'text'")]),e("td")]),e("tr",null,[e("td",null,[e("code",null,"prefix")]),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"null")]),e("td",null,"Indikator/tydeligg\xF8relse af data i starten - eg. stk, kr, m.m.")]),e("tr",null,[e("td",null,[e("code",null,"suffix")]),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"null")]),e("td",null,"Indikator/tydeligg\xF8relse af data i enden - eg. stk, kr, m.m.")])])],-1),N=e("table",{class:"table table--compact"},[e("thead",null,[e("tr",null,[e("th",null,"Events"),e("th",null,"Beskrivelse")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"@dirty")]),e("td",null,"Om input feltet er blevet ber\xF8rt")])])],-1),T=e("b",null,"tekst",-1),H=e("button",{class:"button button-search"},[e("svg",{class:"icon-svg m-0","aria-hidden":"true"},[e("use",{"xlink:href":"#search"})]),e("span",{class:"sr-only"}," S\xF8g ")],-1),K=e("button",{class:"button button-search"}," S\xF8g ",-1),O=w({__name:"InputFeltExample",setup(L){const x=i(""),c=i(""),h=i(""),g=i(""),_=i(""),v=i(0),F=`
<fds-input v-model="txtFornavn" />
`,E=`
<fds-formgroup>
  <fds-label id="formid"> Efternavn </fds-label>
  <fds-tooltip class="ml-2"> Hj\xE6lpende <b>tekst</b> </fds-tooltip>
  <fds-hint>Indtast fornavn</fds-hint>
  <fds-input v-model="txtEfternavn" id="formid"></fds-input>
  <fds-input-limit :modelValue="txtEfternavn" :limit="20" />
</fds-formgroup>
`,k=`
<fds-input v-model="txtPre" prefix="prefix" id="prefix"></fds-input>

<fds-input v-model="txtSuffix" suffix="suffix" id="txtSuffix"></fds-input>

`,j=`
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
`;return(M,n)=>{const a=o("fds-label"),V=o("fds-tooltip"),S=o("fds-hint"),f=o("fds-input"),s=o("fds-formgroup"),b=o("fds-pre"),r=o("fds-preview-item"),p=o("fds-preview-code"),m=o("fds-preview"),y=o("fds-input-limit"),B=o("fds-input-number");return I(),C("section",null,[l(m,{header:"Tekstfelt",href:"https://designsystem.dk/komponenter/inputfelter/"},{default:t(()=>[l(r,null,{default:t(()=>[l(s,null,{default:t(()=>[l(a,{id:"formid"},{default:t(()=>[u(" Fornavn ")]),_:1}),l(V,{class:"ml-2"},{default:t(()=>[u(" Hj\xE6lpende "),U]),_:1}),l(S,null,{default:t(()=>[u("Indtast fornavn")]),_:1}),l(f,{id:"formid",modelValue:x.value,"onUpdate:modelValue":n[0]||(n[0]=d=>x.value=d)},null,8,["modelValue"])]),_:1}),l(b,{header:"v-model",json:{txtFornavn:x.value}},null,8,["json"])]),_:1}),l(p,null,{default:t(()=>[e("pre",{textContent:F})]),_:1}),l(r,null,{default:t(()=>[P,N]),_:1})]),_:1}),l(m,{header:"Karakterbegr\xE6nsning"},{default:t(()=>[l(r,null,{default:t(()=>[l(s,null,{default:t(()=>[l(a,{id:"formid"},{default:t(()=>[u(" Efternavn ")]),_:1}),l(V,{class:"ml-2"},{default:t(()=>[u(" Hj\xE6lpende "),T]),_:1}),l(S,null,{default:t(()=>[u("Indtast fornavn")]),_:1}),l(f,{id:"formid",modelValue:c.value,"onUpdate:modelValue":n[1]||(n[1]=d=>c.value=d)},null,8,["modelValue"]),l(y,{"model-value":c.value,limit:20},null,8,["model-value"])]),_:1}),l(b,{header:"v-model",json:{txtEfternavn:c.value}},null,8,["json"])]),_:1}),l(p,null,{default:t(()=>[e("pre",{textContent:E})]),_:1})]),_:1}),l(m,{header:"Prefix og Suffix"},{default:t(()=>[l(r,null,{default:t(()=>[l(s,null,{default:t(()=>[l(a,{id:"prefix"},{default:t(()=>[u(" Med prefix ")]),_:1}),l(f,{id:"prefix",modelValue:h.value,"onUpdate:modelValue":n[2]||(n[2]=d=>h.value=d),prefix:"prefix"},null,8,["modelValue"])]),_:1}),l(s,null,{default:t(()=>[l(a,{id:"txtSuffix"},{default:t(()=>[u(" Med suffix ")]),_:1}),l(f,{id:"txtSuffix",modelValue:g.value,"onUpdate:modelValue":n[3]||(n[3]=d=>g.value=d),suffix:"suffix"},null,8,["modelValue"])]),_:1})]),_:1}),l(p,null,{default:t(()=>[e("pre",{textContent:k})]),_:1})]),_:1}),l(m,{header:"Nummer tekstfelt"},{default:t(()=>[l(r,null,{default:t(()=>[l(s,null,{default:t(()=>[l(a,{id:"noBeloeb"},{default:t(()=>[u(" Tal/Bel\xF8b ")]),_:1}),l(B,{id:"noBeloeb",modelValue:v.value,"onUpdate:modelValue":n[4]||(n[4]=d=>v.value=d),"input-class":"input-width-xs",suffix:"kr."},null,8,["modelValue"])]),_:1}),l(b,{header:"v-model",json:{noBeloeb:v.value}},null,8,["json"])]),_:1}),l(p,null,{default:t(()=>[e("pre",{textContent:k})]),_:1})]),_:1}),l(m,{header:"S\xF8g knap"},{default:t(()=>[l(r,null,{default:t(()=>[l(s,null,{default:t(()=>[l(a,{id:"searchtxt"},{default:t(()=>[u(" Input med knap ikon ")]),_:1}),l(f,{id:"searchtxt",modelValue:_.value,"onUpdate:modelValue":n[5]||(n[5]=d=>_.value=d),placeholder:"S\xF8g efter..."},{button:t(()=>[H]),_:1},8,["modelValue"])]),_:1}),l(s,null,{default:t(()=>[l(a,{id:"searchbtn"},{default:t(()=>[u(" Input med knap tekst ")]),_:1}),l(f,{id:"searchbtn",modelValue:_.value,"onUpdate:modelValue":n[6]||(n[6]=d=>_.value=d),placeholder:"S\xF8g efter..."},{button:t(()=>[K]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(p,null,{default:t(()=>[e("pre",{textContent:j})]),_:1})]),_:1})])}}});export{O as default};
