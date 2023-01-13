import{e as g,f as v,o as b,c as h,b as e,w as t,d,a as l,r as n}from"./index.2aa85a96.js";const k=l("table",{class:"table table--compact"},[l("thead",null,[l("tr",null,[l("th",null,"Props (fds-radio-group)"),l("th",null,"Type"),l("th",null,"Default"),l("th",null,"Beskrivelse")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"id")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"null (autoid)")]),l("td",null,"Lytter efter injected formid")]),l("tr",null,[l("td",null,[l("code",null,"v-model")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"null")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"label*")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"null")]),l("td")])])],-1),x=l("table",{class:"table table--compact"},[l("thead",null,[l("tr",null,[l("th",null,"Slots"),l("th",null,"label")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"props.label")]),l("td",null,"Angiv egen label (indg\xE5r i en legend)")])])],-1),V=l("table",{class:"table table--compact"},[l("thead",null,[l("tr",null,[l("th",null,"Props (radio-item)"),l("th",null,"Type"),l("th",null,"Default"),l("th",null,"Beskrivelse")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"value")]),l("td",null,[l("code",null,"string - required")]),l("td",null,[l("code")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"id")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"null (autoid)")]),l("td",null,[d("Lytter efter injected formid - bruges til "),l("code",null,"name"),d(" (radio gruppe)")])]),l("tr",null,[l("td",null,[l("code",null,"index")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"null (autoid/index)")]),l("td")])])],-1),E=l("table",{class:"table table--compact"},[l("thead",null,[l("tr",null,[l("th",null,"Slots (radio-item)"),l("th",null,"Beskrivelse")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"content")]),l("td",null,"Hvis radio er valgt vil slut udfoldes og vise indhold")])])],-1),B=g({__name:"RadioknapExample",setup(y){const o=v(""),s=`
<fds-formgroup>
  <fds-label>V\xE6lg Genre</fds-label>

  <fds-radio-group v-model="radioValueKerne" label="V\xE6lg Genre">
    <fds-radio-item value="metal"> Metal </fds-radio-item>
    <fds-radio-item value="pop">
      Pop
      <template #content>
        Pop er som musikgenre den mest udbredte musikstilart i moderne tid - v\xE6sentlig mere
        udbredt end fx rock, jazz og folkemusik. Navnet er en afledning af ordet "popul\xE6r"
        (eng. "popular").
      </template>
    </fds-radio-item>
    <fds-radio-item value="klassisk"> Klassist </fds-radio-item>
  </fds-radio-group>
</fds-formgroup>
`;return(w,a)=>{const u=n("fds-radio-item"),i=n("fds-radio-group"),c=n("fds-formgroup"),p=n("fds-pre"),r=n("fds-preview-item"),m=n("fds-preview-code"),f=n("fds-preview");return b(),h("section",null,[e(f,{header:"Eksempel",href:"https://designsystem.dk/komponenter/radioknap/"},{default:t(()=>[e(r,null,{default:t(()=>[e(c,null,{default:t(()=>[e(i,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=_=>o.value=_),label:"V\xE6lg Genre"},{default:t(()=>[e(u,{value:"metal"},{default:t(()=>[d(" Metal ")]),_:1}),e(u,{value:"pop"},{content:t(()=>[d(' Pop er som musikgenre den mest udbredte musikstilart i moderne tid - v\xE6sentlig mere udbredt end fx rock, jazz og folkemusik. Navnet er en afledning af ordet "popul\xE6r" (eng. "popular"). ')]),default:t(()=>[d(" Pop ")]),_:1}),e(u,{value:"klassisk"},{default:t(()=>[d(" Klassist ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(p,{json:{radioValueKerne:o.value}},null,8,["json"])]),_:1}),e(m,null,{default:t(()=>[l("pre",{textContent:s})]),_:1}),e(r,null,{default:t(()=>[k,x,V,E]),_:1})]),_:1})])}}});export{B as default};
