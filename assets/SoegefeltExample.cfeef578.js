import{e as m,f as h,o as b,c as x,b as e,w as t,d as c,a as s,r as n}from"./index.9ab9e984.js";const g=s("button",{class:"button button-search"},[s("svg",{class:"icon-svg m-0","aria-hidden":"true"},[s("use",{"xlink:href":"#search"})]),s("span",{class:"sr-only"}," S\xF8g ")],-1),v=s("button",{class:"button button-search"}," S\xF8g ",-1),V=m({__name:"SoegefeltExample",setup(S){const o=h(""),p=`
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
`;return(k,a)=>{const d=n("fds-label"),r=n("fds-input"),u=n("fds-formgroup"),f=n("fds-preview-item"),i=n("fds-preview-code"),_=n("fds-preview");return b(),x("section",null,[e(_,{header:"S\xF8g knap",href:"https://designsystem.dk/komponenter/search/"},{default:t(()=>[e(f,null,{default:t(()=>[e(u,null,{default:t(()=>[e(d,{id:"searchtxt"},{default:t(()=>[c(" Input med knap ikon ")]),_:1}),e(r,{id:"searchtxt",modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=l=>o.value=l),placeholder:"S\xF8g efter..."},{button:t(()=>[g]),_:1},8,["modelValue"])]),_:1}),e(u,null,{default:t(()=>[e(d,{id:"searchbtn"},{default:t(()=>[c(" Input med knap tekst ")]),_:1}),e(r,{id:"searchbtn",modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=l=>o.value=l),placeholder:"S\xF8g efter..."},{button:t(()=>[v]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(i,null,{default:t(()=>[s("pre",{textContent:p})]),_:1})]),_:1})])}}});export{V as default};
