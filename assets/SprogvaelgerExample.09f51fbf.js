import{e as f,f as r,o as v,c as m,b as e,w as o,a as d,r as a}from"./index.9ab9e984.js";const h={class:"container page-container"},V=f({__name:"SprogvaelgerExample",setup(w){const l=r("da"),n=r([{title:"Dansk",active:!0,lang:"da",ariaLabel:"Valgt sprog: Dansk"},{title:"English",active:!1,lang:"en",ariaLabel:"Selected language: English"},{title:"Deutsch",active:!1,lang:"de",ariaLabel:"Gew\xE4hlte Sprache: Deutsch"}]),g=`
<footer>
  <fds-sprogvaelger v-model="languages" @lang="selectedLangauge = $event" />
  ...
</footer>
`;return(k,t)=>{const p=a("fds-sprogvaelger"),c=a("fds-pre"),u=a("fds-preview-item"),i=a("fds-preview-code"),_=a("fds-preview");return v(),m("section",null,[e(_,{header:"Eksempel",href:"https://designsystem.dk/komponenter/sprogvaelger/"},{default:o(()=>[e(u,null,{default:o(()=>[d("div",h,[e(p,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=s=>n.value=s),onLang:t[1]||(t[1]=s=>l.value=s)},null,8,["modelValue"])]),e(c,{json:{selectedLangauge:l.value,languages:n.value},header:"Valgt sprog"},null,8,["json"])]),_:1}),e(i,null,{default:o(()=>[d("pre",{textContent:g})]),_:1})]),_:1})])}}});export{V as default};
